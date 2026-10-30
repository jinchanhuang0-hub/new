import { canSendProductionAnalytics } from "./analyticsGate.mjs";

// These dimensions deliberately describe UI locations, never visitor input or URLs.
export const inquiryPageType = (pathname) => {
  if (pathname.startsWith("/blog/")) return "blog";
  if (pathname === "/contact") return "contact";
  if (pathname.startsWith("/products/") || pathname.startsWith("/product-")) return "product";
  return "other";
};

export const inquiryFormId = (form, pathname) => {
  if (form.classList.contains("footer-quote-form")) return pathname.startsWith("/blog/") ? "blog_footer" : "site_footer";
  if (form.closest("[data-product-inquiry-modal]")) return "product_modal";
  if (pathname === "/contact") return "contact_main";
  if (pathname === "/") return "home_main";
  if (pathname.startsWith("/products/") || pathname.startsWith("/product-")) return "product_main";
  return "other_main";
};

const pushEvent = (event, parameters) => {
  if (!canSendProductionAnalytics()) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...parameters });
  } catch { /* Analytics must never block a quote, form, or navigation. */ }
};

const formContext = (form) => ({
  form_id: inquiryFormId(form, window.location.pathname),
  page_type: inquiryPageType(window.location.pathname),
});

export const reportInquirySubmitClick = (form) =>
  pushEvent("uccrafts_inquiry_submit_click", formContext(form));

export const reportInquirySubmitAttempt = (form) =>
  pushEvent("uccrafts_inquiry_submit_attempt", formContext(form));

// Only this allowlist can cross the analytics boundary. Never pass Error.message,
// response bodies, field names/values, file names, or status text to dataLayer.
const errorStages = {
  html_invalid: "validation",
  network_error: "network",
  invalid_request: "server",
  attachments_too_large: "server",
  rate_limited: "server",
  delivery_failed: "server",
  service_unavailable: "server",
  request_rejected: "server",
  server_error: "server",
  http_error: "server",
  invalid_confirmation: "response",
  preparation_failed: "client",
};

export const reportInquiryError = (form, code) => {
  if (!Object.hasOwn(errorStages, code)) return;
  pushEvent("uccrafts_inquiry_submit_error", {
    ...formContext(form), error_stage: errorStages[code], error_code: code,
  });
};

export const inquiryHttpErrorCode = (status) => {
  if (status === 400) return "invalid_request";
  if (status === 413) return "attachments_too_large";
  if (status === 429) return "rate_limited";
  if (status === 502) return "delivery_failed";
  if (status === 503) return "service_unavailable";
  if (status >= 500 && status < 600) return "server_error";
  if (status >= 400 && status < 500) return "request_rejected";
  return "http_error";
};

const invalidFormsThisTurn = new WeakSet();
export const reportInquiryValidationError = (form) => {
  // Native validation emits one invalid event per field. Count the failed
  // validation round once, not once per field, including Enter-key submission.
  if (invalidFormsThisTurn.has(form)) return;
  invalidFormsThisTurn.add(form);
  // Browsers can flush microtasks between individual native invalid callbacks.
  // Keep the guard for the whole task so all invalid fields share one failure.
  window.setTimeout(() => invalidFormsThisTurn.delete(form), 0);
  reportInquiryError(form, "html_invalid");
};

export const consultationContext = (element, doc = document) => {
  if (!element || element.disabled || element.getAttribute("aria-disabled") === "true") return null;
  const modalTrigger = element.matches("[data-product-inquiry-trigger]");
  const contactNavigation = element.matches("a") && Boolean(element.closest(".site-header .nav, .site-footer"));
  if (!modalTrigger) {
    // Include Contact navigation separately from quote CTAs, but not other
    // navigation, email/phone/WhatsApp links or incidental prose links.
    if (!contactNavigation && !element.matches("a.btn, a.product-type-btn, a.category-seo-primary, a.how-cta, .blog-article-cta a")) return null;
    let target;
    try { target = new URL(element.getAttribute("href"), window.location.origin); } catch { return null; }
    if (target.origin !== window.location.origin || !["/contact", "/contact/", "/contact.html"].includes(target.pathname)) return null;
  }

  let ctaId = "quote_content";
  let placement = "content";
  if (element.closest(".mega-cta")) { ctaId = "quote_menu"; placement = "mega_menu"; }
  else if (contactNavigation && !element.matches(".btn")) {
    ctaId = "contact_nav";
    placement = element.closest(".site-footer") ? "footer"
      : window.matchMedia?.("(max-width: 980px)").matches ? "mobile" : "header";
  }
  else if (element.closest(".site-header")) { ctaId = "quote_header"; placement = "header"; }
  else if (element.closest(".hero")) { ctaId = "quote_hero"; placement = "hero"; }
  else if (element.closest(".product-type-card")) { ctaId = "quote_product_card"; placement = "product_card"; }
  else if (modalTrigger) { ctaId = "quote_product_detail"; placement = "product_detail"; }
  else if (element.matches(".how-cta")) { ctaId = "artwork_proof"; placement = "content"; }
  else if (element.closest(".blog-article-cta, .blog-cta-actions")) { ctaId = "quote_blog"; placement = "blog_article"; }
  else if (element.closest("[data-inquiry-cta]")) { ctaId = "quote_section"; placement = "section"; }

  return {
    form_id: modalTrigger && doc.querySelector("[data-product-inquiry-modal]") ? "product_modal" : "contact_main",
    page_type: inquiryPageType(window.location.pathname),
    cta_id: ctaId,
    placement,
  };
};

export const installInquiryAnalytics = (doc = document) => {
  const click = (event) => {
    const element = event.target.closest?.("a, button, input[type='submit'], input[type='image']");
    if (!element || element.disabled) return;
    const form = element.form || element.closest("[data-inquiry-form]");
    if (form?.matches("[data-inquiry-form]") && element.matches("button:not([type]), button[type='submit'], input[type='submit'], input[type='image']")) {
      reportInquirySubmitClick(form);
      return;
    }
    const context = consultationContext(element, doc);
    if (context) pushEvent("uccrafts_consult_click", context);
  };
  const invalid = (event) => {
    const form = event.target.form || event.target.closest?.("[data-inquiry-form]");
    if (form?.matches("[data-inquiry-form]")) reportInquiryValidationError(form);
  };
  // Capture before native validation/navigation and before existing modal handlers.
  doc.addEventListener("click", click, true);
  doc.addEventListener("invalid", invalid, true);
  return () => {
    doc.removeEventListener("click", click, true);
    doc.removeEventListener("invalid", invalid, true);
  };
};
