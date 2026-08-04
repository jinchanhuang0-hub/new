import JsonLd from "./components/JsonLd";
import AnalyticsConsent from "./components/AnalyticsConsent";
import Script from "next/script";
import { SITE_URL } from "./lib/siteRoutes";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Unique Pin | Custom Metal Gifts Factory",
  description:
    "Unique Pin is a China OEM/ODM custom metal gifts manufacturer for custom enamel pins, medals, challenge coins and promotional metal crafts.",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png"
  },
  openGraph: {
    type: "website",
    siteName: "Unique Pin",
    locale: "en_US",
    images: ["/assets/images/hero-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/hero-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Unique Pin",
            legalName: "Zhongshan Unique Metal Gift Co., Ltd.",
            url: SITE_URL,
            logo: `${SITE_URL}/assets/images/logo.png`,
            foundingDate: "2018",
            description: "International trade company established in 2018 to develop global markets, supported by a custom metal gifts team whose industry experience dates to 2003.",
            email: "ceo@chinauniquepin.com",
            telephone: "+86-188-9531-6838",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Building A, 1st Floor, No. 7 Xingyu Road",
              addressLocality: "Xiaolan Town, Zhongshan City",
              addressRegion: "Guangdong",
              addressCountry: "CN",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61583070933333",
              "https://www.instagram.com/uniquepin/",
              "https://www.youtube.com/@CustompinUnique",
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Unique Pin",
            url: SITE_URL,
            inLanguage: "en",
          }}
        />
        {children}
        <AnalyticsConsent />
        <a
          className="whatsapp-float"
          href="https://api.whatsapp.com/send?phone=8618895316838&amp;text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <svg viewBox="0 0 448 512" aria-hidden="true">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.5 224.1-221.9 0-59.3-25.2-115-67.1-157.1ZM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7C49.1 322.7 39.4 288.7 39.4 253.9c0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.7-186.6 184.7Zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.4-2.4-5.1-3.8-10.6-6.5Z" />
          </svg>
        </a>
        <Script src="/script.js?v=20260804-1" strategy="afterInteractive" />
      </body>
    </html>
  );
}
