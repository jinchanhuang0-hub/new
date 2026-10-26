// NEXT_PUBLIC_VERCEL_ENV is set by Vercel for production and preview builds.
// A production build alone is not enough: preview builds also use NODE_ENV=production.
export const isProductionAnalyticsEnvironment = (
  hostname = typeof window === "undefined" ? "" : window.location.hostname,
  deployment = process.env.NEXT_PUBLIC_VERCEL_ENV,
) => deployment === "production"
  && ["uccrafts.com", "www.uccrafts.com"].includes(hostname.toLowerCase());

export const hasAnalyticsConsent = () => {
  if (typeof window === "undefined") return false;
  if (window.__uccraftsAnalyticsChoice) return window.__uccraftsAnalyticsChoice === "granted";
  try {
    return window.localStorage.getItem("uccrafts_analytics_consent") === "granted";
  } catch {
    return false;
  }
};

export const canSendProductionAnalytics = () =>
  isProductionAnalyticsEnvironment() && hasAnalyticsConsent();
