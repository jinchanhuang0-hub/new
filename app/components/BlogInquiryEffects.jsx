"use client";

import { useEffect } from "react";
import { submitInquiryForm } from "../lib/inquiryClient.mjs";

export default function BlogInquiryEffects() {
  useEffect(() => {
    const submit = (event) => {
      const form = event.target.closest?.(".footer-quote-form[data-inquiry-form]");
      if (!form) return;
      event.preventDefault();
      void submitInquiryForm(form, {
        notice: form.querySelector("[data-form-notice]"),
        sendingColor: "#fff",
        errorColor: "#ffd5d5",
      });
    };
    document.addEventListener("submit", submit);
    return () => document.removeEventListener("submit", submit);
  }, []);
  return null;
}
