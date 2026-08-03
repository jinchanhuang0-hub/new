import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { legalHeaderHtml } from "../components/legalPageHtml";

export const metadata = {
  title: "Terms and Conditions | Unique Pin",
  description: "Review the website, quotation, artwork, production, payment, shipping and intellectual property terms that apply when working with Unique Pin.",
  alternates: {
    canonical: "/terms",
  },
};

const html = String.raw`
  ${legalHeaderHtml}
  <main class="legal-page">
    <section class="legal-hero">
      <div class="container">
        <p class="legal-kicker">Legal</p>
        <h1>Terms and Conditions</h1>
        <p>Website and commercial terms for inquiries, quotations and custom metal product orders.</p>
        <p class="legal-updated">Effective date: August 3, 2026</p>
      </div>
    </section>
    <section class="legal-content">
      <div class="container legal-layout">
        <nav class="legal-toc" aria-label="Terms and conditions sections">
          <strong>On this page</strong>
          <a href="#terms-website">Website use</a>
          <a href="#terms-quotes">Quotes and approvals</a>
          <a href="#terms-ip">Artwork and intellectual property</a>
          <a href="#terms-production">Production and delivery</a>
          <a href="#terms-claims">Inspection and claims</a>
          <a href="#terms-general">General terms</a>
        </nav>
        <article class="legal-article">
          <section id="terms-website">
            <h2>1. Website Use</h2>
            <p>These terms are issued by Zhongshan Unique Metal Gift Co., Ltd. (中山市优尼可工艺品有限公司), business registration number 91442000MA525GLE7Y, with its registered office at Building A, No. 7 Xingyu Road, Taifeng Industrial Zone, Jidong'er, Xiaolan Town, Zhongshan, Guangdong, China. The company was established in 2018 to develop international markets. Its custom metal gifts team draws on industry experience dating to 2003 through its roots in Kaston, a separate company established in 2003.</p>
            <p>This website provides general information about Unique Pin products and manufacturing services. Images, colors, dimensions, lead times and other examples are illustrative unless confirmed in a written quotation or approved production proof.</p>
            <p>Unless stated otherwise, the website design, text, original graphics, product descriptions and other Unique Pin content are owned by or licensed to us and may not be copied, republished or commercially exploited without permission. Customer names, logos and third-party trademarks shown in product examples remain the property of their respective owners. Their appearance illustrates manufacturing capability and does not by itself imply sponsorship, endorsement, authorization or that the illustrated item is available for sale.</p>
            <p>You may not misuse the website, attempt unauthorized access, introduce malicious code, scrape personal data or use website content in a way that infringes another party's rights.</p>
            <p>Links to third-party websites or services are provided for convenience. We do not control their content, availability, security or terms, and your use of them is governed by the relevant third party.</p>
            <p>Commercial terms apply to an order only when the quotation, pro forma invoice, order confirmation or other written order document refers to them or otherwise incorporates them. If an order-specific written term conflicts with these website terms, the order-specific term controls for that order.</p>
          </section>
          <section id="terms-quotes">
            <h2>2. Quotations, Specifications and Approval</h2>
            <p>A website inquiry is not an order. A binding order is formed only after the parties confirm the quotation, specifications, payment terms and production proof in writing.</p>
            <p>Quotations may depend on quantity, material, size, plating, color, attachments, packaging, shipping destination and exchange rates. Changes after proof approval may affect price and lead time.</p>
            <p>Please review every proof and written specification carefully, including wording, dimensions, colors, plating, attachments and packaging. Screen displays, printers, photographs, samples, raw materials and production batches can show reasonable differences in color, texture or finish. A Pantone or other color reference applies only when it is expressly included in the approved written specification, and physical production remains subject to reasonable manufacturing tolerances.</p>
          </section>
          <section id="terms-ip">
            <h2>3. Artwork and Intellectual Property</h2>
            <p>You confirm that you own or have permission to use all logos, trademarks, names and artwork supplied to us. You remain responsible for obtaining third-party approvals. We may decline designs that appear unlawful, infringing or misleading.</p>
            <p>Customer artwork and confidential project files are used to prepare the requested quotation and products. Manufacturing methods, tooling know-how and pre-existing Unique Pin materials remain the property of their respective owners unless otherwise agreed in writing.</p>
            <p>Each party should use reasonable care to protect non-public commercial, technical and artwork information received for a project. This does not cover information that is public through no breach, was already lawfully known, is received lawfully from another source, or must be disclosed to a court, regulator or other competent authority.</p>
          </section>
          <section id="terms-production">
            <h2>4. Samples, Production, Payment and Delivery</h2>
            <p>Sample and production schedules begin after artwork approval and receipt of any agreed payment. Lead times are estimates and may change because of revisions, material availability, public holidays, carrier delays, customs checks or events outside reasonable control.</p>
            <p>Payment methods, deposits, balances, shipping terms, freight costs, taxes and import duties are confirmed in the quotation or pro forma invoice. Unless agreed otherwise, customers are responsible for destination-country duties and import requirements.</p>
            <p>Neither party is responsible for delay or failure caused by an event beyond its reasonable control, provided the affected party gives reasonable notice when practicable and takes reasonable steps to reduce the effect. Payment obligations already due are not excused by such an event.</p>
            <p>Each party remains responsible for complying with laws that apply to its own activities, including applicable customs, import, export-control, sanctions, anti-bribery and intellectual-property requirements.</p>
          </section>
          <section id="terms-claims">
            <h2>5. Inspection, Claims and Liability</h2>
            <p>Please inspect products promptly after delivery and report shortages, shipping damage or manufacturing concerns with clear photos and order details. Remedies are assessed against the approved proof, agreed specifications and reasonable manufacturing tolerances.</p>
            <p>To the extent permitted by applicable law, Unique Pin is not responsible for indirect or consequential loss. Any liability connected with an order is limited to the amount paid for the affected products, except where a limitation is not legally permitted.</p>
          </section>
          <section id="terms-general">
            <h2>6. General Terms and Contact</h2>
            <p>External services such as WhatsApp and social networks operate under their own terms. A delay or failure to enforce a provision is not a waiver of that provision. If a provision is found invalid or unenforceable, the remaining provisions continue to apply to the extent permitted by law.</p>
            <p>Approvals, confirmations and notices may be recorded by email or another written electronic channel used by the parties. These terms do not give enforcement rights to a person who is not a party to the relevant order, except where applicable law requires otherwise.</p>
            <p>Section headings are provided for convenience and do not limit the meaning of these terms. These terms, together with each document expressly incorporated into a confirmed order, record the agreement on the subjects they cover. They do not override an order-specific written term that the parties have expressly accepted.</p>
            <p>We may update these website terms for future use when our website or business practices change. An update does not retrospectively change a confirmed order unless both parties agree in writing. Questions can be sent to <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>.</p>
          </section>
        </article>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function TermsPage() {
  return <StaticPage html={html} />;
}
