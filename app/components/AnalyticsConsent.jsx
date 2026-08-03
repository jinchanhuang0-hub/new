"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "uccrafts_analytics_consent";
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
  if (window.__uccraftsGtmLoaded) return;

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
  document.head.appendChild(script);
  window.__uccraftsGtmLoaded = true;
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
    const savedChoice = window.localStorage.getItem(CONSENT_KEY);
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
    return () => {
      document.removeEventListener("click", handleMapClick);
    };
  }, []);

  const saveChoice = (nextChoice) => {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);

    if (nextChoice === "granted") {
      loadGoogleTagManager();
    } else {
      if (window.gtag) window.gtag("consent", "update", consentValues.denied);
      removeAnalyticsCookies();
    }

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
