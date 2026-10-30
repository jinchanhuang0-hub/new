import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  inquiryPageType, inquiryFormId, inquiryHttpErrorCode,
  reportInquirySubmitClick, reportInquirySubmitAttempt, reportInquiryError,
  reportInquiryValidationError, consultationContext, installInquiryAnalytics,
} from "../app/lib/inquiryAnalytics.mjs";
import { submitInquiryForm } from "../app/lib/inquiryClient.mjs";

const originals = Object.fromEntries(["window", "document", "fetch", "FormData"].map((name) => [name, globalThis[name]]));
const originalDeployment = process.env.NEXT_PUBLIC_VERCEL_ENV;
const setup = ({ consent = "granted", hostname = "uccrafts.com", pathname = "/contact", deployment = "production", mobile = false } = {}) => {
  const pushes = [];
  const navigations = [];
  process.env.NEXT_PUBLIC_VERCEL_ENV = deployment;
  globalThis.window = {
    location: { hostname, pathname, origin: `https://${hostname}`, assign: (path) => navigations.push(path) },
    localStorage: { getItem: () => consent },
    dataLayer: pushes, setTimeout, clearTimeout, addEventListener() {},
    matchMedia: () => ({ matches: mobile }),
  };
  globalThis.document = { title: "Safe page", querySelector: () => null };
  globalThis.FormData = class { set() {} };
  return { pushes, navigations };
};
const fixture = ({ valid = true, footer = false, modal = false } = {}) => {
  const button = { disabled: false, textContent: "Send" };
  const notice = { style: {}, textContent: "" };
  const form = {
    classList: { contains: (name) => footer && name === "footer-quote-form" },
    closest: (selector) => modal && selector === "[data-product-inquiry-modal]" ? {} : null,
    querySelector: () => button, checkValidity: () => valid, reset() {},
    matches: (selector) => selector === "[data-inquiry-form]",
  };
  return { form, button, notice };
};

test("shared dimensions preserve all existing success locations", () => {
  setup();
  for (const [path, options, expected] of [
    ["/", {}, "home_main"], ["/contact", {}, "contact_main"],
    ["/products/custom-medals", {}, "product_main"], ["/product-item", {}, "product_main"],
    ["/", { modal: true }, "product_modal"], ["/blog/example", { footer: true }, "blog_footer"],
    ["/contact", { footer: true }, "site_footer"], ["/faq", {}, "other_main"],
  ]) assert.equal(inquiryFormId(fixture(options).form, path), expected);
  assert.deepEqual(["/", "/contact", "/blog/example", "/products/custom-medals"].map(inquiryPageType), ["other", "contact", "blog", "product"]);
});

test("all new events fail closed without consent or outside production", () => {
  for (const options of [{ consent: "denied" }, { consent: null }, { hostname: "localhost" }, { hostname: "branch.vercel.app" }, { deployment: "preview" }]) {
    const { pushes } = setup(options);
    const { form } = fixture();
    reportInquirySubmitClick(form);
    reportInquirySubmitAttempt(form);
    reportInquiryError(form, "network_error");
    assert.equal(pushes.length, 0);
  }
  const { pushes } = setup();
  window.localStorage.getItem = () => { throw new Error("Storage unavailable"); };
  reportInquirySubmitClick(fixture().form);
  assert.equal(pushes.length, 0);
});

test("invalid fields coalesce once per validation round and never make a request", async () => {
  const { pushes } = setup();
  const { form } = fixture({ valid: false });
  let requests = 0;
  globalThis.fetch = () => { requests += 1; throw new Error("must not run"); };
  reportInquirySubmitClick(form);
  reportInquiryValidationError(form);
  reportInquiryValidationError(form);
  await submitInquiryForm(form);
  assert.equal(requests, 0);
  assert.deepEqual(pushes.map((entry) => entry.event), ["uccrafts_inquiry_submit_click", "uccrafts_inquiry_submit_error"]);
  assert.equal(pushes[1].error_stage, "validation");
  assert.equal(pushes[1].error_code, "html_invalid");
  // Native callbacks may have microtask checkpoints between invalid fields.
  await Promise.resolve();
  reportInquiryValidationError(form);
  assert.equal(pushes.length, 2);
  await new Promise((resolve) => setTimeout(resolve, 0));
  reportInquiryValidationError(form);
  assert.equal(pushes.length, 3);
});

test("network, HTTP 502, other HTTP and malformed success errors use bounded codes and unlock retry", async () => {
  const cases = [
    [() => Promise.reject(new Error("buyer@example.com SECRET")), "network", "network_error"],
    [async () => ({ ok: false, status: 502, json: async () => ({ message: "SMTP buyer@example.com SECRET" }) }), "server", "delivery_failed"],
    [async () => ({ ok: false, status: 429, json: async () => ({}) }), "server", "rate_limited"],
    [async () => ({ ok: true, status: 200, json: async () => ({ success: true }) }), "response", "invalid_confirmation"],
    [async () => ({ ok: true, status: 200, json: async () => { throw new Error("SECRET"); } }), "response", "invalid_confirmation"],
  ];
  for (const [fetch, stage, code] of cases) {
    const { pushes, navigations } = setup();
    const { form, button, notice } = fixture();
    globalThis.fetch = fetch;
    await submitInquiryForm(form, { notice });
    assert.deepEqual(pushes.map((entry) => entry.event), ["uccrafts_inquiry_submit_attempt", "uccrafts_inquiry_submit_error"]);
    assert.deepEqual(pushes[1], { event: "uccrafts_inquiry_submit_error", form_id: "contact_main", page_type: "contact", error_stage: stage, error_code: code });
    assert.doesNotMatch(JSON.stringify(pushes), /SECRET|buyer@example/);
    assert.equal(button.disabled, false);
    assert.deepEqual(navigations, []);
    await submitInquiryForm(form, { notice });
    assert.equal(pushes.length, 4);
  }
  for (const [status, code] of [[400, "invalid_request"], [413, "attachments_too_large"], [503, "service_unavailable"], [501, "server_error"], [403, "request_rejected"], [302, "http_error"]]) {
    assert.equal(inquiryHttpErrorCode(status), code);
  }
});

test("form preparation and blocked analytics cannot permanently lock submission", async () => {
  const { pushes } = setup();
  const { form, button } = fixture();
  globalThis.FormData = class { constructor() { throw new Error("private input"); } };
  await submitInquiryForm(form);
  assert.equal(button.disabled, false);
  assert.deepEqual(pushes.map((entry) => entry.error_code), ["preparation_failed"]);
  globalThis.FormData = class { set() {} };
  window.dataLayer.push = () => { throw new Error("blocked"); };
  let requests = 0;
  globalThis.fetch = async () => { requests += 1; return { ok: false, status: 502, json: async () => ({}) }; };
  await submitInquiryForm(form);
  assert.equal(requests, 1);
  assert.equal(button.disabled, false);
});

test("unknown error parameters cannot leak through the reporting interface", () => {
  const { pushes } = setup();
  reportInquiryError(fixture().form, "buyer@example.com");
  reportInquiryError(fixture().form, "toString");
  assert.deepEqual(pushes, []);
});

const link = ({ href = "/contact", button = true, ancestors = [], modal = false, how = false } = {}) => ({
  getAttribute: (name) => name === "href" ? href : null,
  matches: (selector) => {
    if (selector === "[data-product-inquiry-trigger]") return modal;
    if (selector === "a") return true;
    if (selector === ".btn") return button;
    if (selector === ".how-cta") return how;
    return selector.includes("a.btn") && (button || how);
  },
  closest: (selector) => ancestors.some((ancestor) => selector.split(", ").includes(ancestor)) ? {} : null,
});

test("consultation taxonomy includes Contact navigation, quote CTA placements, and no WhatsApp", () => {
  setup({ pathname: "/blog/example?ignored", mobile: false });
  const cases = [
    [[".mega-cta", ".site-header"], "quote_menu", "mega_menu"],
    [[".site-header"], "quote_header", "header"], [[".hero"], "quote_hero", "hero"],
    [[".product-type-card"], "quote_product_card", "product_card"],
    [[".blog-article-cta"], "quote_blog", "blog_article"],
    [["[data-inquiry-cta]"], "quote_section", "section"], [[], "quote_content", "content"],
  ];
  for (const [ancestors, cta, placement] of cases) {
    const context = consultationContext(link({ ancestors, href: "/contact?email=SECRET#private" }));
    assert.equal(context.cta_id, cta);
    assert.equal(context.placement, placement);
    assert.equal(context.form_id, "contact_main");
    assert.doesNotMatch(JSON.stringify(context), /SECRET|private/);
  }
  assert.equal(consultationContext(link({ how: true })).cta_id, "artwork_proof");
  assert.equal(consultationContext(link({ modal: true }), { querySelector: () => ({}) }).form_id, "product_modal");
  assert.equal(consultationContext(link({ button: false })), null);
  for (const href of ["/products", "https://api.whatsapp.com/send?phone=123", "mailto:private@example.com", "https://other.test/contact"]) {
    assert.equal(consultationContext(link({ href })), null);
  }
  const nav = link({ button: false, ancestors: [".site-header .nav", ".site-header"] });
  assert.equal(consultationContext(nav).cta_id, "contact_nav");
  assert.equal(consultationContext(nav).placement, "header");
  window.matchMedia = () => ({ matches: true });
  assert.equal(consultationContext(nav).placement, "mobile");
  assert.equal(consultationContext(link({ button: false, ancestors: [".site-footer"] })).placement, "footer");
});

test("delegated listener records send clicks before invalid events, skips disabled buttons and cleans up", () => {
  const { pushes } = setup();
  const listeners = new Map();
  const doc = {
    querySelector: () => null,
    addEventListener: (type, listener, capture) => { assert.equal(capture, true); listeners.set(type, listener); },
    removeEventListener: (type, listener, capture) => { assert.equal(capture, true); assert.equal(listeners.get(type), listener); listeners.delete(type); },
  };
  const cleanup = installInquiryAnalytics(doc);
  const { form, button } = fixture();
  Object.assign(button, { form, matches: () => true });
  listeners.get("click")({ target: { closest: () => button } });
  listeners.get("invalid")({ target: { form } });
  assert.deepEqual(pushes.map((entry) => entry.event), ["uccrafts_inquiry_submit_click", "uccrafts_inquiry_submit_error"]);
  button.disabled = true;
  listeners.get("click")({ target: { closest: () => button } });
  assert.equal(pushes.length, 2);
  cleanup();
  assert.equal(listeners.size, 0);
});

test("thank-you remains passive and layout mounts exactly one delegated tracker", () => {
  const thankYou = readFileSync(new URL("../app/thank-you/page.jsx", import.meta.url), "utf8");
  assert.doesNotMatch(thankYou, /dataLayer|generate_lead|reportInquirySuccess/);
  const layout = readFileSync(new URL("../app/layout.jsx", import.meta.url), "utf8");
  assert.equal((layout.match(/<InquiryAnalyticsEffects\s*\/>/g) || []).length, 1);
});

test.after(() => {
  for (const [name, value] of Object.entries(originals)) globalThis[name] = value;
  if (originalDeployment === undefined) delete process.env.NEXT_PUBLIC_VERCEL_ENV;
  else process.env.NEXT_PUBLIC_VERCEL_ENV = originalDeployment;
});
