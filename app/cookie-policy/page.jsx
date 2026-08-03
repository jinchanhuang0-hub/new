import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { legalHeaderHtml } from "../components/legalPageHtml";

export const metadata = {
  title: "Cookie Policy | Unique Pin",
  description: "Learn how uccrafts.com uses Google Analytics cookies and embedded third-party services.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

const html = String.raw`
  ${legalHeaderHtml}
  <main class="legal-page">
    <section class="legal-hero">
      <div class="container">
        <p class="legal-kicker">Legal</p>
        <h1>Cookie Policy</h1>
        <p>Information about Analytics cookies and embedded third-party services on uccrafts.com.</p>
        <p class="legal-updated">Effective date: August 3, 2026</p>
      </div>
    </section>
    <section class="legal-content">
      <div class="container legal-layout">
        <nav class="legal-toc" aria-label="Cookie policy sections">
          <strong>On this page</strong>
          <a href="#cookie-types">Technologies we use</a>
          <a href="#cookie-table">Cookie details</a>
          <a href="#cookie-control">Your choices</a>
        </nav>
        <article class="legal-article">
          <section id="cookie-types">
            <h2>1. Technologies We Use</h2>
            <p>Cookies are small text files stored by a browser. With your permission, this website loads Google Tag Manager (<code>GTM-PVLJT85N</code>) and Google Analytics 4 (<code>G-4BPKLZFWYH</code>). Google Signals was enabled when this policy was reviewed on August 3, 2026. Google Tag Manager is not requested before you accept Analytics.</p>
            <ul>
              <li><strong>Analytics:</strong> Google Analytics uses cookies and online identifiers to measure visits, pages and device or browser information.</li>
              <li><strong>Third-party map:</strong> Google Maps connects to Google only after you choose <strong>Load Google Map</strong> on the Contact page.</li>
              <li><strong>External links:</strong> WhatsApp and social-network services are not loaded as tracking tools by this website. Those providers may use cookies or similar technologies after you choose to visit their services.</li>
            </ul>
            <p>We do not currently deploy a Google Ads tag or Meta Pixel through the website code or the published GTM container information reviewed for this policy.</p>
          </section>
          <section id="cookie-table">
            <h2>2. Cookie and Storage Details</h2>
            <div class="legal-table-wrap">
              <table class="legal-table">
                <thead><tr><th>Name</th><th>Provider</th><th>Purpose</th><th>Typical duration</th></tr></thead>
                <tbody>
                  <tr><td><code>_ga</code></td><td>Google Analytics</td><td>Distinguishes website visitors for Analytics measurement.</td><td>Typically up to 2 years</td></tr>
                  <tr><td><code>_ga_4BPKLZFWYH</code></td><td>Google Analytics</td><td>Maintains session state for the website's GA4 property.</td><td>Typically up to 2 years</td></tr>
                  <tr><td>Provider-controlled storage</td><td>Google Maps or an external service</td><td>May be used after you choose to load the map or after you leave this website for that provider.</td><td>Controlled by the relevant provider</td></tr>
                </tbody>
              </table>
            </div>
            <p>Google Analytics event data is configured for a two-month retention period and user data for a fourteen-month retention period, as verified in the GA4 property on August 3, 2026. These settings may not control every aggregated report, cookie lifetime or record processed under Google's own retention rules.</p>
            <p>Hosting, security and network providers may also process technical request data needed to deliver and protect the website. That server-side processing is described in our <a href="/privacy-policy">Privacy Policy</a>.</p>
          </section>
          <section id="cookie-control">
            <h2>3. Your Choices</h2>
            <p>You can accept or reject Analytics when the privacy panel first appears. To reset that choice later, clear this website&apos;s cookies and local storage through your browser settings before revisiting the site. Rejecting or withdrawing Analytics consent does not prevent you from viewing products or submitting an inquiry.</p>
            <p>You can also inspect, block or delete individual cookies through your browser settings. Google Maps remains unloaded until you expressly choose to open it on the Contact page.</p>
          </section>
          <section>
            <h2>4. Contact</h2>
            <p>Questions about cookies or personal information can be sent to <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>. Read our <a href="/privacy-policy">Privacy Policy</a> for more information.</p>
          </section>
        </article>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function CookiePolicyPage() {
  return <StaticPage html={html} />;
}
