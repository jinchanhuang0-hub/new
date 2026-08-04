import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { legalHeaderHtml } from "../components/legalPageHtml";

export const metadata = {
  title: "Privacy Policy | Unique Pin",
  description: "Learn how Unique Pin collects, uses, protects and retains personal information submitted through this website and its inquiry forms.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const html = String.raw`
  ${legalHeaderHtml}
  <main class="legal-page">
    <section class="legal-hero legal-hero-centered">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>How Zhongshan Unique Metal Gift Co., Ltd. (中山市优尼可工艺品有限公司) handles personal information submitted through uccrafts.com.</p>
        <p class="legal-updated">Effective date: August 3, 2026</p>
      </div>
    </section>
    <section class="legal-content">
      <div class="container legal-layout">
        <nav class="legal-toc" aria-label="Privacy policy sections">
          <strong>On this page</strong>
          <a href="#privacy-controller">Who controls your data</a>
          <a href="#privacy-data">Information we collect</a>
          <a href="#privacy-use">How we use it</a>
          <a href="#privacy-sharing">Sharing and transfers</a>
          <a href="#privacy-retention">Retention and rights</a>
          <a href="#privacy-other">External services and updates</a>
        </nav>
        <article class="legal-article">
          <section id="privacy-controller">
            <h2>1. Who Controls Your Information</h2>
            <p>Zhongshan Unique Metal Gift Co., Ltd. (中山市优尼可工艺品有限公司), trading online as Unique Pin, is responsible for personal information collected through this website. The company was established in 2018 to develop international markets. Its custom metal gifts team draws on industry experience dating to 2003 through its roots in Kaston, a separate company established in 2003.</p>
            <address>
              Business registration number: 91442000MA525GLE7Y<br>
              Registered office: Building A, No. 7 Xingyu Road, Taifeng Industrial Zone, Jidong'er, Xiaolan Town, Zhongshan, Guangdong, China
              (中山市小榄镇绩东二泰丰工业区兴裕路7号A栋)<br>
              Email: <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a><br>
              Phone / WhatsApp: <a href="https://api.whatsapp.com/send?phone=8618895316838" target="_blank" rel="noopener noreferrer">+86 188 9531 6838</a>
            </address>
          </section>
          <section id="privacy-data">
            <h2>2. Information We Collect</h2>
            <p>When you request a quote or contact us, we may collect your name, business email, country or region, phone or WhatsApp number, product type, quantity, project details, artwork files, page URL and page title.</p>
            <p>When you access the website, hosting and security systems may necessarily process technical information such as your IP address, request time, requested page, browser or device information, referral data, and security or error logs. This technical processing is used to deliver, secure and troubleshoot the website.</p>
            <p>With your permission, this website loads Google Tag Manager (<code>GTM-PVLJT85N</code>) and Google Analytics 4 using Google tag <code>G-4BPKLZFWYH</code>. Google Signals was enabled when this notice was reviewed on August 3, 2026. Before you accept Analytics, the website does not request the Google Tag Manager script. If accepted, these services may process page views, device and browser information, approximate location derived from IP address, referral information and online identifiers, and may read or set Analytics cookies.</p>
            <p>The Contact page displays a Google Maps placeholder. The map connects to Google only after you choose <strong>Load Google Map</strong>. Google may then receive your IP address, browser or device information and referral data. We do not currently deploy a Google Ads tag or Meta Pixel through the website code or the published GTM container information reviewed for this notice.</p>
          </section>
          <section id="privacy-use">
            <h2>3. How and Why We Use Information</h2>
            <ul>
              <li><strong>Pre-contract steps and contract performance:</strong> respond to inquiries, review artwork, prepare samples and quotations, and manage resulting orders, production, shipping and after-sales support.</li>
              <li><strong>Legal obligations:</strong> keep records required for accounting, tax, customs, product compliance and dispute handling.</li>
              <li><strong>Legitimate interests:</strong> deliver and secure the website, diagnose errors, prevent abuse, maintain necessary business records and improve our B2B service, provided those interests are not overridden by your rights.</li>
              <li><strong>Consent:</strong> load Google Analytics and Google Signals only after you accept Analytics. You can reset this choice by clearing this website&apos;s cookies and local storage in your browser.</li>
            </ul>
            <p>Required form fields are needed so we can identify and respond to a quotation request. If you do not provide them, we may be unable to prepare or deliver a quotation. Phone, quantity, project details and artwork are optional unless they become necessary for a specific order.</p>
          </section>
          <section id="privacy-sharing">
            <h2>4. Service Providers and International Transfers</h2>
            <p>We disclose only the information reasonably required for the stated purpose. Current provider categories include:</p>
            <div class="legal-table-wrap">
              <table class="legal-table">
                <thead><tr><th>Provider or category</th><th>Purpose</th><th>Possible processing locations</th></tr></thead>
                <tbody>
                  <tr><td>Vercel</td><td>Website hosting, delivery, security, technical logs and server-side website functions.</td><td>Server-side website functions are configured to execute in Washington, D.C., United States (<code>us-east-1 / iad1</code>). This function setting does not establish where CDN delivery, security processing, technical logs, backups or subprocessor data are stored or processed. Vercel may use other locations in its global infrastructure.</td></tr>
                  <tr><td>Alibaba Cloud enterprise email</td><td>SMTP delivery and mailbox storage for <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>, including inquiry emails and submitted artwork. The enterprise email account is administered by Zhongshan Unique Metal Gift Co., Ltd. under its Chinese name, 中山市优尼可工艺品有限公司.</td><td>Alibaba Cloud infrastructure. The available records do not establish a single physical storage or backup location.</td></tr>
                  <tr><td>Google</td><td>Google Tag Manager, Google Analytics 4, Google Signals and the embedded Google Map on the Contact page.</td><td>United States and other locations used by Google's global infrastructure. Google determines the precise processing and storage locations within its systems.</td></tr>
                  <tr><td>Payment, freight, customs and production providers</td><td>Process a confirmed order and arrange delivery.</td><td>China, the destination country and relevant transit countries.</td></tr>
                </tbody>
              </table>
            </div>
            <p>Unique Pin operates from China and serves customers internationally. Information you submit through this website is sent directly to the controller in China and may also be processed where the providers above operate. We do not represent that China is covered by an EU or UK adequacy decision.</p>
            <p>We do not sell personal information for money. We do not intentionally use inquiry details or submitted artwork for third-party advertising.</p>
          </section>
          <section id="privacy-retention">
            <h2>5. Retention, Security and Your Rights</h2>
            <p>The website inquiry endpoint does not intentionally write submissions to a separate customer inquiry database. It sends form submissions and artwork through Alibaba Cloud enterprise email to the designated business mailbox. Inquiry correspondence, submitted artwork and operational order records are normally retained for two years from the last substantive contact or completion of the relevant order, then deleted or securely disposed of. Information may be kept longer where an active customer relationship, unresolved claim, legal hold, or accounting, tax, customs or other legal requirement makes this necessary.</p>
            <p>Where applicable law provides these rights, you may ask to access, correct, receive a portable copy of or delete your personal information, or object to or restrict certain processing. You may withdraw Analytics consent by clearing this website&apos;s cookies and local storage in your browser before revisiting the site. Contact us at <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>. We may need to verify your identity and may retain records that are required for contractual, accounting or legal purposes.</p>
            <p>We use access controls and reasonable technical and organizational safeguards, but no internet transmission can be guaranteed completely secure.</p>
          </section>
          <section id="privacy-other">
            <h2>6. External Services, Business Changes and Policy Updates</h2>
            <p>This website may link to third-party websites or services, including WhatsApp and social networks. Those services control their own processing once you leave this website or choose to use their service. Please review their privacy information before providing personal information to them.</p>
            <p>If the business is reorganized, merged, financed, sold or transferred, relevant personal information may be disclosed to professional advisers and transferred to the resulting organization as part of that transaction, subject to applicable confidentiality and data protection requirements.</p>
            <p>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13. We do not use website inquiry data for automated decisions that produce legal or similarly significant effects.</p>
            <p>We may update this policy when our services, providers, legal obligations or data practices change. The effective date above shows the latest revision. Privacy questions, requests or complaints may be sent to <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>. Please provide enough information for us to identify the request without sending unnecessary sensitive information.</p>
          </section>
        </article>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function PrivacyPolicyPage() {
  return <StaticPage html={html} />;
}
