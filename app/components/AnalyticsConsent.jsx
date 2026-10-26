"use client";

import { useEffect, useState } from "react";
import { isProductionAnalyticsEnvironment } from "../lib/analyticsGate.mjs";

const CONSENT_KEY = "uccrafts_analytics_consent";
const CONSENT_EVENT = "uccrafts:analytics-consent-changed";
const GTM_ID = "GTM-PVLJT85N";

const consentValues = {
  granted: {
    ad_storage: "denied",
    analytics_storage: "granted",
    ad_user_data: "denied",
    ad_personalization: "denied",
  },
  denied: {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  },
};

const ensureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
};

const loadGoogleTagManager = () => {
  if (!isProductionAnalyticsEnvironment()) return;
  if (window.__uccraftsGtmState) {
    window.gtag?.("consent", "update", consentValues.granted);
    return;
  }

  ensureDataLayer();
  window.gtag("consent", "default", {
    ...consentValues.denied,
    wait_for_update: 500,
  });
  window.gtag("consent", "update", consentValues.granted);
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  script.dataset.uccraftsGtm = "true";
  window.__uccraftsGtmState = "loading";
  script.onload = () => { window.__uccraftsGtmState = "loaded"; };
  script.onerror = () => {
    script.remove();
    window.__uccraftsGtmState = null;
  };
  document.head.appendChild(script);
};

const removeAnalyticsCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^_ga(?:_|$)/.test(name)) return;

    const hostParts = window.location.hostname.split(".");
    const domains = [window.location.hostname];
    if (hostParts.length > 1) domains.push(`.${hostParts.slice(-2).join(".")}`);

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    });
  });
};

export default function AnalyticsConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let savedChoice;
    try { savedChoice = window.localStorage.getItem(CONSENT_KEY); } catch { savedChoice = null; }
    if (!window.__uccraftsAnalyticsChoice) window.__uccraftsAnalyticsChoice = savedChoice;
    savedChoice = window.__uccraftsAnalyticsChoice;
    if (savedChoice === "granted" || savedChoice === "denied") {
      if (savedChoice === "granted") loadGoogleTagManager();
    } else {
      setIsOpen(true);
    }

    const handleMapClick = (event) => {
      const mapButton = event.target.closest?.("[data-load-google-map]");
      if (!mapButton) return;

      const mapFrame = mapButton.closest("[data-google-map]");
      const mapSrc = mapFrame?.dataset.mapSrc;
      if (!mapFrame || !mapSrc) return;

      const iframe = document.createElement("iframe");
      iframe.title = "Unique Pin map";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer";
      iframe.src = mapSrc;
      mapFrame.replaceChildren(iframe);
      mapFrame.classList.add("map-frame-loaded");
    };

    document.addEventListener("click", handleMapClick);
    const handleStorage = (event) => {
      if (event.key !== CONSENT_KEY) return;
      window.__uccraftsAnalyticsChoice = event.newValue;
      if (event.newValue === "granted") loadGoogleTagManager();
      else if (window.gtag) window.gtag("consent", "update", consentValues.denied);
      if (event.newValue !== "granted") removeAnalyticsCookies();
      setIsOpen(event.newValue !== "granted" && event.newValue !== "denied");
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      document.removeEventListener("click", handleMapClick);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const saveChoice = (nextChoice) => {
    window.__uccraftsAnalyticsChoice = nextChoice;
    try { window.localStorage.setItem(CONSENT_KEY, nextChoice); } catch { /* Consent lasts for this page only. */ }

    if (nextChoice === "granted") {
      loadGoogleTagManager();
    } else {
      if (window.gtag) window.gtag("consent", "update", consentValues.denied);
      removeAnalyticsCookies();
    }

    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { choice: nextChoice } }));
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="privacy-consent" role="dialog" aria-labelledby="privacy-consent-title">
          <div className="privacy-consent-copy">
            <strong id="privacy-consent-title">We use cookies</strong>
            <p>
              We use necessary storage to keep this website working. With your permission, we also use Google Analytics,
              including Google Signals, to understand traffic and improve the website. You can reject Analytics without
              affecting product pages or inquiry forms. Read our <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </div>
          <div className="privacy-consent-actions">
            <button className="privacy-consent-reject" type="button" onClick={() => saveChoice("denied")}>
              Reject Analytics
            </button>
            <button className="privacy-consent-accept" type="button" onClick={() => saveChoice("granted")}>
              Accept Analytics
            </button>
          </div>
          <button
            className="privacy-consent-dismiss"
            type="button"
            aria-label="Reject Analytics and close"
            onClick={() => saveChoice("denied")}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
