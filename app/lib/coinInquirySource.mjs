import { hasAdvertisingConsent, hasAnalyticsConsent } from "./analyticsGate.mjs";

const landingPath = "/custom-challenge-coins";
const storageKey = "uccrafts_coin_inquiry_source";
const clickKeys = ["gclid", "gbraid", "wbraid"];
const sourceKeys = [...clickKeys, "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id"];

function readSource(params) {
  const source = {};
  for (const key of sourceKeys) {
    const value = params.get(key);
    if (typeof value !== "string" || !value.trim() || value.length > 250 || /[\u0000-\u001f\u007f]/.test(value)) continue;
    if (!value.isWellFormed() || new TextEncoder().encode(value).length > 250) continue;
    if (clickKeys.includes(key) && !/^[A-Za-z0-9_.~-]+$/.test(value)) continue;
    source[key] = value;
  }
  return source;
}

export function updateCoinInquirySource() {
  try {
    const storage = window.sessionStorage;
    if (!hasAnalyticsConsent() || !hasAdvertisingConsent()) {
      storage.removeItem(storageKey);
      return;
    }
    const source = readSource(new URLSearchParams(window.location.search));
    if (!Object.keys(source).length) return;
    if (window.location.pathname.replace(/\/$/, "") === landingPath) {
      storage.setItem(storageKey, JSON.stringify(source));
    } else {
      // A later tagged visit outside the pilot supersedes the coin landing.
      storage.removeItem(storageKey);
    }
  } catch { /* Storage is optional; inquiries must still work. */ }
}

export function appendCoinInquirySource(data) {
  try {
    updateCoinInquirySource();
    if (!hasAnalyticsConsent() || !hasAdvertisingConsent()) return;
    const saved = window.sessionStorage.getItem(storageKey);
    if (saved) data.set("coinInquirySource", saved);
  } catch { /* Omit optional attribution if storage is unavailable. */ }
}

export function coinSourceMailFields(formData, pageUrl) {
  const raw = formData.get("coinInquirySource");
  let source = {};
  if (typeof raw === "string" && raw.length <= 4096) {
    try { source = readSource(new Map(Object.entries(JSON.parse(raw)))); } catch {}
  }
  const entries = Object.entries(source);
  let pilot = false;
  try { pilot = new URL(pageUrl).pathname.replace(/\/$/, "") === landingPath; } catch {}
  if (!pilot && !entries.length) return null;
  const hasClickId = clickKeys.some(key => source[key]);
  const summary = hasClickId ? "检测到 Google 广告标识" : entries.length ? "仅有来源参数" : "来源未确认";
  // Keep raw metadata in the original business record, away from the customer-facing UI.
  const headers = Object.fromEntries(entries.map(([key, value]) =>
    ["X-Uccrafts-" + key.replaceAll("_", "-"), encodeURIComponent(value)]));
  if (entries.length) headers["X-Uccrafts-Landing-Path"] = landingPath;
  return { summary, headers };
}
