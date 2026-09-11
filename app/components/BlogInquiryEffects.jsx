"use client";

import { useEffect } from "react";

export default function BlogInquiryEffects() {
  useEffect(() => {
    const pending = new WeakSet();
    const submit = async (event) => {
      const form = event.target.closest?.(".footer-quote-form[data-inquiry-form]");
      if (!form) return;
      event.preventDefault();
      if (pending.has(form)) return;
      pending.add(form);
      const button = form.querySelector('[type="submit"]');
      const notice = form.querySelector("[data-form-notice]");
      const originalText = button.textContent;
      const data = new FormData(form);
      data.set("pageUrl", window.location.href);
      data.set("pageTitle", document.title);
      button.disabled = true;
      button.textContent = "Sending...";
      notice.style.color = "#fff";
      notice.textContent = "Sending your inquiry...";
      try {
        const response = await fetch("/api/inquiry", { method: "POST", body: data });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.message || "Inquiry could not be sent. Please email ceo@chinauniquepin.com directly.");
        notice.textContent = "Thank you for your inquiry. Redirecting...";
        form.reset();
        window.location.assign("/thank-you");
      } catch (error) {
        notice.style.color = "#ffd5d5";
        notice.textContent = error.message || "Inquiry could not be sent. Please try again.";
      } finally {
        pending.delete(form);
        button.disabled = false;
        button.textContent = originalText;
      }
    };
    document.addEventListener("submit", submit);
    return () => document.removeEventListener("submit", submit);
  }, []);
  return null;
}
