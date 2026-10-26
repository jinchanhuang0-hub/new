import { canSendProductionAnalytics } from "./analyticsGate.mjs";

const pendingForms = new WeakSet();
const reportedInquiryIds = new Set();

const pageType = (pathname) => {
  if (pathname.startsWith("/blog/")) return "blog";
  if (pathname === "/contact") return "contact";
  if (pathname.startsWith("/products/") || pathname.startsWith("/product-")) return "product";
  return "other";
};

const formId = (form, pathname) => {
  if (form.classList.contains("footer-quote-form")) return pathname.startsWith("/blog/") ? "blog_footer" : "site_footer";
  if (form.closest("[data-product-inquiry-modal]")) return "product_modal";
  if (pathname === "/contact") return "contact_main";
  if (pathname === "/") return "home_main";
  if (pathname.startsWith("/products/") || pathname.startsWith("/product-")) return "product_main";
  return "other_main";
};

export const reportInquirySuccess = ({ inquiryId, form, pathname, navigate = () => window.location.assign("/thank-you") }) => {
  let navigated = false;
  const go = () => {
    if (navigated) return;
    navigated = true;
    navigate();
  };

  if (!canSendProductionAnalytics() || reportedInquiryIds.has(inquiryId)) {
    go();
    return;
  }
  reportedInquiryIds.add(inquiryId);

  // GTM may never run (blocked, slow, or missing). Navigation is independent of its callback.
  const fallback = window.setTimeout(go, 800);
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "uccrafts_inquiry_success",
      form_id: formId(form, pathname),
      page_type: pageType(pathname),
      eventCallback: () => {
        window.clearTimeout(fallback);
        go();
      },
      eventTimeout: 750,
    });
  } catch {
    window.clearTimeout(fallback);
    go();
  }
};

export const submitInquiryForm = async (form, {
  notice,
  button = form.querySelector('button[type="submit"]'),
  sendingColor = "var(--navy)",
  errorColor = "#b42318",
} = {}) => {
  if (pendingForms.has(form)) return;
  pendingForms.add(form);
  const originalButtonText = button?.textContent;
  const data = new FormData(form);
  // Query strings may contain personal information. The page path is enough for the email.
  data.set("pageUrl", `${window.location.origin}${window.location.pathname}`);
  data.set("pageTitle", document.title);
  if (notice) {
    notice.style.color = sendingColor;
    notice.textContent = "Sending your inquiry...";
  }
  if (button) {
    button.disabled = true;
    button.textContent = "Sending...";
  }

  try {
    const response = await fetch("/api/inquiry", { method: "POST", body: data });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success !== true || typeof result.inquiry_id !== "string" || !result.inquiry_id) {
      throw new Error(response.status === 413
        ? "Attachments must total 4 MB or less. Remove attachments and submit your inquiry again, then email the original design files to our sales team when they contact you."
        : response.ok
          ? "Inquiry confirmation was incomplete. Please contact our sales team before submitting again."
          : result.message || "Inquiry could not be sent. Please email ceo@chinauniquepin.com directly.");
    }
    if (notice) {
      notice.style.color = sendingColor;
      notice.textContent = "Thank you for your inquiry. Redirecting...";
    }
    form.reset();
    // A full navigation can be restored from bfcache. Unlock the old form then.
    window.addEventListener?.("pagehide", () => {
      pendingForms.delete(form);
      if (button) {
        button.disabled = false;
        button.textContent = originalButtonText || "Get a Free Quote";
      }
    }, { once: true });
    reportInquirySuccess({ inquiryId: result.inquiry_id, form, pathname: window.location.pathname });
  } catch (error) {
    pendingForms.delete(form);
    if (notice) {
      notice.style.color = errorColor;
      notice.textContent = error.message || "Inquiry could not be sent. Please try again.";
    }
    if (button) {
      button.disabled = false;
      button.textContent = originalButtonText || "Get a Free Quote";
    }
  }
};
