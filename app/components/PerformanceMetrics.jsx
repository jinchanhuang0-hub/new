"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "uccrafts_analytics_consent";
const CONSENT_EVENT = "uccrafts:analytics-consent-changed";
const PERFORMANCE_CATEGORY = "Performance";

const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
};

const hasAnalyticsConsent = () => {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
};

const classifyMetric = (name, value) => {
  const threshold = thresholds[name];
  if (!threshold) return "na";
  if (value <= threshold.good) return "good";
  if (value <= threshold.poor) return "needs_improvement";
  return "poor";
};

const roundMetric = (value) => Math.round(value * 100) / 100;

const getPagePath = () => {
  const { pathname, search } = window.location;
  return `${pathname}${search ? "?query" : ""}`;
};

const sendPerformanceEvent = (eventName, params) => {
  if (!hasAnalyticsConsent() || typeof window.gtag !== "function") return false;

  window.gtag("event", eventName, {
    event_category: PERFORMANCE_CATEGORY,
    non_interaction: true,
    page_path: getPagePath(),
    ...params,
  });
  return true;
};

const summarizeResources = () => {
  const resources = performance.getEntriesByType("resource");
  const summary = {
    res_count: resources.length,
    img_kb: 0,
    script_kb: 0,
    css_kb: 0,
    third_count: 0,
  };

  resources.forEach((resource) => {
    const sizeKb = Math.round((resource.transferSize || resource.encodedBodySize || 0) / 1024);
    const url = new URL(resource.name, window.location.href);
    if (url.origin !== window.location.origin) summary.third_count += 1;

    if (resource.initiatorType === "img") summary.img_kb += sizeKb;
    if (resource.initiatorType === "script") summary.script_kb += sizeKb;
    if (resource.initiatorType === "link" && /\.(?:css)(?:\?|$)/.test(url.pathname)) summary.css_kb += sizeKb;
  });

  return summary;
};

const sendNavigationTiming = () => {
  const navigation = performance.getEntriesByType("navigation")[0];
  if (!navigation) return;

  sendPerformanceEvent("uccrafts_nav_timing", {
    ttfb_ms: Math.round(navigation.responseStart),
    dcl_ms: Math.round(navigation.domContentLoadedEventEnd),
    load_ms: Math.round(navigation.loadEventEnd),
    html_kb: Math.round((navigation.transferSize || navigation.encodedBodySize || 0) / 1024),
    viewport_w: window.innerWidth,
    viewport_h: window.innerHeight,
    ...summarizeResources(),
  });
};

const observeWebVitals = () => {
  if (!("PerformanceObserver" in window)) return () => {};

  let clsValue = 0;
  let lcpValue = 0;
  let inpValue = 0;
  let sentFinal = false;
  const observers = [];

  const sendVital = (metricName, metricValue) => {
    if (!metricValue) return;
    const roundedValue = roundMetric(metricValue);
    sendPerformanceEvent("uccrafts_web_vital", {
      metric_name: metricName,
      metric_value: roundedValue,
      metric_rating: classifyMetric(metricName, roundedValue),
    });
  };

  const flushVitals = () => {
    if (sentFinal) return;
    sentFinal = true;
    sendVital("LCP", lcpValue);
    sendVital("CLS", clsValue);
    sendVital("INP", inpValue);
  };

  const createObserver = (type, callback) => {
    try {
      const observer = new PerformanceObserver((list) => callback(list.getEntries()));
      observer.observe({ type, buffered: true });
      observers.push(observer);
    } catch {
      // Some browsers do not support every web-vital entry type.
    }
  };

  createObserver("largest-contentful-paint", (entries) => {
    const latest = entries.at(-1);
    if (latest) lcpValue = latest.startTime;
  });

  createObserver("layout-shift", (entries) => {
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) clsValue += entry.value;
    });
  });

  createObserver("event", (entries) => {
    entries.forEach((entry) => {
      if (entry.duration > inpValue) inpValue = entry.duration;
    });
  });

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") flushVitals();
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  const timer = window.setTimeout(flushVitals, 8000);

  return () => {
    window.clearTimeout(timer);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    observers.forEach((observer) => observer.disconnect());
  };
};

export default function PerformanceMetrics() {
  const pathname = usePathname();
  const pendingRouteRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return undefined;
    let cleanupVitals = () => {};
    let navTimer = null;
    let retryTimer = null;
    let retryCount = 0;

    const startMetrics = () => {
      if (startedRef.current || !hasAnalyticsConsent()) return;
      if (typeof window.gtag !== "function") {
        if (retryCount < 20) {
          retryCount += 1;
          retryTimer = window.setTimeout(startMetrics, 250);
        }
        return;
      }

      startedRef.current = true;
      cleanupVitals = observeWebVitals();
      if (document.readyState === "complete") {
        navTimer = window.setTimeout(sendNavigationTiming, 0);
      } else {
        window.addEventListener(
          "load",
          () => {
            navTimer = window.setTimeout(sendNavigationTiming, 0);
          },
          { once: true },
        );
      }
    };

    const handleConsentChange = () => startMetrics();
    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    window.addEventListener("storage", handleConsentChange);
    startMetrics();

    return () => {
      window.removeEventListener(CONSENT_EVENT, handleConsentChange);
      window.removeEventListener("storage", handleConsentChange);
      if (navTimer) window.clearTimeout(navTimer);
      if (retryTimer) window.clearTimeout(retryTimer);
      cleanupVitals();
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;

      pendingRouteRef.current = {
        from: window.location.pathname,
        to: url.pathname,
        start: performance.now(),
      };
    };

    document.addEventListener("click", handleClick, { capture: true, passive: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  useEffect(() => {
    const pendingRoute = pendingRouteRef.current;
    if (!pendingRoute || pendingRoute.to !== pathname) return;

    pendingRouteRef.current = null;
    sendPerformanceEvent("uccrafts_route_timing", {
      route_from: pendingRoute.from,
      route_to: pathname,
      duration_ms: Math.round(performance.now() - pendingRoute.start),
    });
  }, [pathname]);

  return null;
}
