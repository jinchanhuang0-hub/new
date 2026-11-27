import test from "node:test";
import assert from "node:assert/strict";
import { appendCoinInquirySource, coinSourceMailFields, updateCoinInquirySource } from "../app/lib/coinInquirySource.mjs";

test("capture on the coin landing only after opt-in, then retain across pages until consent or campaign changes", () => {
  const items = new Map();
  const win = {
    location: { pathname: "/custom-challenge-coins", search: "?gclid=Case_123&utm_source=gAds&email=private" },
    sessionStorage: {
      getItem: key => items.get(key) ?? null,
      setItem: (key, value) => items.set(key, value),
      removeItem: key => items.delete(key),
    },
  };
  globalThis.window = win;
  try {
    const submit = () => {
      const data = new FormData();
      appendCoinInquirySource(data);
      return coinSourceMailFields(data, "https://uccrafts.com" + win.location.pathname);
    };
    win.__uccraftsAnalyticsChoice = "granted";
    win.__uccraftsAdsChoice = "denied";
    assert.equal(submit().summary, "来源未确认");
    assert.equal(items.size, 0);
    win.__uccraftsAdsChoice = "granted";
    updateCoinInquirySource();
    win.location = { pathname: "/contact", search: "" };
    assert.deepEqual(submit().headers, { "X-Uccrafts-gclid": "Case_123", "X-Uccrafts-utm-source": "gAds", "X-Uccrafts-Landing-Path": "/custom-challenge-coins" });
    win.__uccraftsAdsChoice = "denied";
    assert.equal(submit(), null);
    assert.equal(items.size, 0);
    win.__uccraftsAdsChoice = "granted";
    win.location = { pathname: "/custom-challenge-coins", search: "?utm_medium=search" };
    assert.equal(submit().summary, "仅有来源参数");
    win.location = { pathname: "/other", search: "?utm_source=new" };
    assert.equal(submit(), null);
  } finally { delete globalThis.window; }
});

test("malformed or unsupported optional metadata cannot break an inquiry", () => {
  for (const raw of ["broken", "null", JSON.stringify({gclid: "a\r\nb", utm_medium: "\ud800", email: "ignore"})]) {
    const data = new FormData();
    data.set("coinInquirySource", raw);
    assert.deepEqual(coinSourceMailFields(data, "https://uccrafts.com/custom-challenge-coins"), {summary: "来源未确认", headers: {}});
  }
});
