"use client";

import { useEffect } from "react";
import { installInquiryAnalytics } from "../lib/inquiryAnalytics.mjs";

export default function InquiryAnalyticsEffects() {
  // One delegated listener also covers blog pages, client navigation and modals.
  useEffect(() => installInquiryAnalytics(), []);
  return null;
}
