import test from "node:test";
import assert from "node:assert/strict";
import nodemailer from "nodemailer";
import { POST } from "../app/api/inquiry/route.js";
import { isProductionAnalyticsEnvironment, canSendProductionAnalytics } from "../app/lib/analyticsGate.mjs";
import { reportInquirySuccess, submitInquiryForm } from "../app/lib/inquiryClient.mjs";

const originalTransport = nodemailer.createTransport;
const originalFormData = globalThis.FormData;
const originalFetch = globalThis.fetch;
const originalWindow = globalThis.window;
const originalDocument = globalThis.document;
const originalDeployment = process.env.NEXT_PUBLIC_VERCEL_ENV;

const inquiryRequest = (ip, extra = {}) => {
  const data = new originalFormData();
  Object.entries({ name: "Test Buyer", email: "buyer@example.com", country: "US", product: "Pins", ...extra })
    .forEach(([key, value]) => data.set(key, value));
  return new Request("https://uccrafts.com/api/inquiry", {
    method: "POST", headers: { "x-forwarded-for": ip }, body: data,
  });
};

const browser = ({ hostname = "uccrafts.com", consent = "granted", pathname = "/contact", storageThrows = false } = {}) => {
  const pushes = [];
  const navigations = [];
  const listeners = new Map();
  process.env.NEXT_PUBLIC_VERCEL_ENV = "production";
  globalThis.window = {
    location: { hostname, origin: `https://${hostname}`, pathname, assign: (path) => navigations.push(path) },
    localStorage: { getItem: () => { if (storageThrows) throw new Error("blocked"); return consent; } },
    dataLayer: { push: (event) => pushes.push(event) },
    addEventListener: (name, listener) => { listeners.set(name, listener); },
    setTimeout, clearTimeout,
  };
  globalThis.document = { title: "Test page" };
  return { pushes, navigations, dispatch: (name) => listeners.get(name)?.() };
};

const fakeForm = (footer = false) => {
  const button = { disabled: false, textContent: "Submit" };
  const notice = { style: {}, textContent: "" };
  let resets = 0;
  return {
    form: {
      classList: { contains: (name) => footer && name === "footer-quote-form" },
      closest: () => null,
      querySelector: () => button,
      reset: () => { resets += 1; },
    }, button, notice, get resets() { return resets; },
  };
};

test("API returns one random ID also present in accepted mail, and rejects invalid/failed sends", async () => {
  process.env.SMTP_HOST = "mock.invalid";
  process.env.SMTP_USER = "mock";
  process.env.SMTP_PASS = "mock";
  const mails = [];
  nodemailer.createTransport = () => ({ sendMail: async (mail) => { mails.push(mail); return { accepted: ["mock@example.com"] }; } });
  const response = await POST(inquiryRequest("192.0.2.10"));
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.success, true);
  assert.match(body.inquiry_id, /^[0-9a-f-]{36}$/);
  assert.equal(mails.length, 1);
  assert.match(mails[0].text, new RegExp(body.inquiry_id));
  assert.match(mails[0].html, new RegExp(body.inquiry_id));
  assert.match(mails[0].text, /Test Buyer/);

  const invalid = await POST(inquiryRequest("192.0.2.11", { email: "bad" }));
  assert.equal(invalid.status, 400);
  assert.equal((await invalid.json()).inquiry_id, undefined);
  const upload = new originalFormData();
  for (const [key, value] of Object.entries({ name: "Test", email: "a@b.com", country: "US", product: "Pins" })) upload.set(key, value);
  upload.set("artwork", new File(["bad"], "bad.exe", { type: "application/octet-stream" }));
  const attachment = await POST(new Request("https://uccrafts.com/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "192.0.2.12" }, body: upload }));
  assert.equal(attachment.status, 400);
  assert.equal((await attachment.json()).success, undefined);
  nodemailer.createTransport = () => ({ sendMail: async () => { throw new Error("SMTP secret detail"); } });
  const failed = await POST(inquiryRequest("192.0.2.13"));
  assert.equal(failed.status, 502);
  assert.doesNotMatch(JSON.stringify(await failed.json()), /SMTP secret detail/);
  nodemailer.createTransport = originalTransport;
});

test("environment and consent both gate production analytics", () => {
  assert.equal(isProductionAnalyticsEnvironment("uccrafts.com", "production"), true);
  assert.equal(isProductionAnalyticsEnvironment("www.uccrafts.com", "production"), true);
  for (const host of ["localhost", "127.0.0.1", "uccrafts.com.evil.test", "branch.vercel.app"]) {
    assert.equal(isProductionAnalyticsEnvironment(host, "production"), false);
  }
  assert.equal(isProductionAnalyticsEnvironment("uccrafts.com", "preview"), false);
  browser({ consent: "denied" });
  assert.equal(canSendProductionAnalytics(), false);
  browser({ consent: null });
  assert.equal(canSendProductionAnalytics(), false);
  browser({ consent: "granted", storageThrows: true });
  assert.equal(canSendProductionAnalytics(), false);
});

test("ordinary and blog submissions share a lock, success contract, and bounded navigation", async () => {
  globalThis.FormData = class { set() {} };
  for (const [pathname, footer, expectedId] of [["/contact", false, "contact_main"], ["/blog/example", true, "blog_footer"]]) {
    const { pushes, navigations, dispatch } = browser({ pathname });
    const fixture = fakeForm(footer);
    let requests = 0;
    let finish;
    globalThis.fetch = () => { requests += 1; return new Promise((resolve) => { finish = resolve; }); };
    const first = submitInquiryForm(fixture.form, { notice: fixture.notice });
    const second = submitInquiryForm(fixture.form, { notice: fixture.notice });
    assert.equal(requests, 1);
    assert.equal(fixture.button.disabled, true);
    finish({ ok: true, json: async () => ({ success: true, inquiry_id: `id-${expectedId}` }) });
    await Promise.all([first, second]);
    assert.equal(fixture.resets, 1);
    assert.deepEqual(pushes.map((entry) => entry.event), ["uccrafts_inquiry_submit_attempt", "uccrafts_inquiry_success"]);
    const success = pushes[1];
    assert.equal(success.form_id, expectedId);
    assert.equal(success.page_type, footer ? "blog" : "contact");
    assert.equal(success.inquiry_id, undefined);
    await new Promise((resolve) => setTimeout(resolve, 810));
    assert.deepEqual(navigations, ["/thank-you"]);
    success.eventCallback();
    assert.deepEqual(navigations, ["/thank-you"]);
    dispatch("pagehide");
    assert.equal(fixture.button.disabled, false);
  }
});

test("denied, preview, storage failure, failed request, and repeated callback never push a success event", async () => {
  globalThis.FormData = class { set() {} };
  for (const options of [{ consent: "denied" }, { consent: null }, { hostname: "localhost" }, { storageThrows: true }]) {
    const { pushes, navigations } = browser(options);
    const fixture = fakeForm();
    globalThis.fetch = async () => ({ ok: true, json: async () => ({ success: true, inquiry_id: `no-report-${Math.random()}` }) });
    await submitInquiryForm(fixture.form, { notice: fixture.notice });
    assert.equal(pushes.length, 0);
    assert.deepEqual(navigations, ["/thank-you"]);
  }
  const preview = browser();
  process.env.NEXT_PUBLIC_VERCEL_ENV = "preview";
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ success: true, inquiry_id: "preview-id" }) });
  await submitInquiryForm(fakeForm().form);
  assert.equal(preview.pushes.length, 0);
  const { pushes, navigations } = browser();
  const fixture = fakeForm();
  globalThis.fetch = async () => ({ ok: false, status: 413, json: async () => ({ message: "Too large" }) });
  await submitInquiryForm(fixture.form, { notice: fixture.notice });
  assert.equal(fixture.button.disabled, false);
  assert.equal(fixture.resets, 0);
  assert.deepEqual(pushes.map((entry) => entry.event), ["uccrafts_inquiry_submit_attempt", "uccrafts_inquiry_submit_error"]);
  assert.equal(pushes[1].error_code, "attachments_too_large");
  assert.equal(navigations.length, 0);
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ success: true, inquiry_id: "retry-id" }) });
  await submitInquiryForm(fixture.form, { notice: fixture.notice });
  reportInquirySuccess({ inquiryId: "retry-id", form: fixture.form, pathname: "/contact", navigate: () => {} });
  assert.deepEqual(pushes.map((entry) => entry.event), [
    "uccrafts_inquiry_submit_attempt", "uccrafts_inquiry_submit_error",
    "uccrafts_inquiry_submit_attempt", "uccrafts_inquiry_success",
  ]);
  pushes[3].eventCallback();
});

test("blocked GTM and absent callback cannot prevent navigation", async () => {
  const fixture = fakeForm();
  const { navigations } = browser();
  window.dataLayer.push = () => { throw new Error("blocked"); };
  reportInquirySuccess({ inquiryId: "blocked-id", form: fixture.form, pathname: "/contact" });
  assert.deepEqual(navigations, ["/thank-you"]);

  const pending = browser();
  delete window.dataLayer;
  reportInquirySuccess({ inquiryId: "no-gtm-id", form: fixture.form, pathname: "/contact" });
  assert.equal(pending.navigations.length, 0);
  assert.equal(window.dataLayer.length, 1);
  await new Promise((resolve) => setTimeout(resolve, 810));
  assert.deepEqual(pending.navigations, ["/thank-you"]);
  window.dataLayer[0].eventCallback();
  assert.deepEqual(pending.navigations, ["/thank-you"]);
});

test.after(() => {
  nodemailer.createTransport = originalTransport;
  globalThis.FormData = originalFormData;
  globalThis.fetch = originalFetch;
  globalThis.window = originalWindow;
  globalThis.document = originalDocument;
  if (originalDeployment === undefined) delete process.env.NEXT_PUBLIC_VERCEL_ENV;
  else process.env.NEXT_PUBLIC_VERCEL_ENV = originalDeployment;
});
