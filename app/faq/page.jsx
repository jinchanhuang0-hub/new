import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import JsonLd from "../components/JsonLd";
import { siteHeaderHtml } from "../components/siteHeaderHtml";


export const metadata = {
  title: "FAQ | Custom Metal Crafts Questions | Unique Pin",
  description:
    "Answers about custom metal crafts, artwork, materials, MOQ, production, payment, packaging, shipping and after-sales service.",
  alternates: {
    canonical: "/faq",
  },
};

const header = String.raw`
  ${siteHeaderHtml()}`;


const faqGroups = [
  {
    id: "custom-information",
    title: "Custom",
    intro: "Basic questions before starting a custom metal gift order.",
    items: [
      ["How can I start my custom order?", "Send us your logo, sketch, reference image, size, quantity, preferred finish and deadline. We will review the design, recommend a suitable process, and prepare a quotation before moving to artwork proofing."],
      ["Do you offer free art proofs?", "Yes. Every order includes a free digital art proof before production begins. You can request revisions until the design matches your vision. Production does not start until you approve the proof."],
      ["What file formats do you accept?", "Vector files such as AI, PDF, EPS, CDR and SVG are best. High-resolution PNG, JPG and PSD files can also be used when vector artwork is not available."],
      ["Can I customize the size, shape, color, and finish?", "Yes. Almost every detail can be customized, including product size, shape, thickness, color, plating, surface finish, and attachment options."],
      ["Can I modify my order after proof approval?", "Small changes are possible before mold making or production starts. Once production begins, changes may affect cost and lead time."],
      ["Will I receive a design proof before production?", "A: Yes. Before mass production, we provide digital artwork and production proofs for your approval. Production will only begin after confirming all details with you."]
    ]
  },
  {
    id: "products-materials",
    title: "2. Products & Materials",
    intro: "Materials, finishes, colors and repeat-order support.",
    items: [
      ["What products can Unique Pin manufacture?", "We make custom medals, enamel pins, challenge coins, badges, keychains, bookmarks, bottle openers, fridge magnets, dog tags, pendants, trophies, cufflinks, tie clips, belt buckles and related metal crafts."],
      ["What materials are available?", "Common options include zinc alloy, brass, copper, iron, stainless steel and aluminum. We recommend materials based on product type, shape, thickness and budget."],
      ["How to choose the suitable material?", "For designs that need a strong 3D effect, we usually recommend zinc alloy because it is easier to cast detailed raised shapes and dimensional surfaces. If your priority is reducing cost for a simple flat design, iron can be a more economical option. Our team will suggest the most suitable material after reviewing your artwork, size, thickness, quantity and budget."],
      ["Are you a factory or a trading company?", "We are a manufacturer with our own production facility, not only a trading company. This helps us control quality, production scheduling, and cost more directly for custom metal orders."],
      ["Can you use eco-friendly or compliant materials?", "Yes. Recyclable metal materials and compliant plating options are available on request. We can also support RoHS, nickel-free or other market-specific requirements where applicable."],
      ["What finishes and plating options do you offer?", "We offer various finishing options including gold plating, silver plating, antique finishes, matte finishes, polishing, sandblasting, and two-tone effects."],
      ["Can you provide samples before mass production?", "Yes. We can provide samples before bulk production to confirm design, color, size, and quality standards."]
    ]
  },
  {
    id: "pricing-lead-time",
    title: "3. Pricing & Lead Time",
    intro: "Quotation factors, samples, MOQ and production timing.",
    items: [
      ["What is your minimum order quantity?", "We do not have a fixed minimum order quantity. You can start from 1 piece."],
      ["Do you offer better prices for bulk orders?", "Yes. Unit cost usually decreases as quantity increases because mold and setup costs are shared across more pieces."],
      ["Are mold and setup fees included in the product price?", "Mold and setup fees depend on the product design and production requirements. For new custom designs, mold costs may apply. For repeat orders using existing molds, additional mold charges are usually not required."],
      ["Can I order a small quantity first?", "Yes. We support trial orders and sample production to help customers evaluate product quality before placing larger orders."],
      ["How long does mass production take?", "Typical production takes about 15-25 days after sample or artwork approval. Complex 3D, dual-plating, special packaging or large orders may need more time."],
      ["Can urgent orders be expedited?", "We can review the schedule and prioritize urgent projects when production capacity allows. Share your event date as early as possible."]
    ]
  },
  {
    id: "payment-packaging",
    title: "4. Payment & Packaging",
    intro: "Payment terms, packing choices and branded presentation.",
    items: [
      ["What payment methods do you accept?", "We support T/T, PayPal and other commonly used international payment methods depending on order value and destination."],
      ["What payment terms are available?", "Small orders are usually paid in full before production. Larger orders commonly use a deposit before production and balance before shipment."],
      ["Can you provide custom packaging?", "Yes. Options include OPP bags, PVC bags, bubble bags, velvet pouches, paper boxes, leather boxes, wooden boxes, acrylic boxes, tin boxes, backing cards and blister covers."],
      ["Can packaging include my logo?", "Yes. We can add printed cards, branded boxes, labels, barcodes, QR codes, retail hang tabs and instruction inserts."],
      ["Can products be packed individually?", "Yes. Individual packing, set packing, carton marking and split packing can be arranged for retail, events or multi-location delivery."]
    ]
  },
  {
    id: "shipping-after-sales",
    title: "5. Shipping & After-Sales",
    intro: "Delivery methods, tracking, customs and service support.",
    items: [
      ["Which countries do you ship to?", "We provide worldwide shipping services and regularly work with customers from North America, Europe, Australia, the Middle East, and other global markets."],
      ["How do you ship custom metal products?", "We choose the most suitable shipping method based on order quantity, delivery time, and customer requirements, including express, air freight, and sea freight."],
      ["How are shipping costs calculated?", "Shipping cost is based on carton weight, volume, destination, delivery speed and trade terms. We confirm freight before shipment."],
      ["Do you provide tracking information after shipment?", "Yes. After shipment, we provide tracking information so customers can monitor delivery progress until the order arrives safely."],
      ["Can the shipping address be changed?", "If the order has not shipped, we can usually update the address. After shipment, changes depend on the carrier and may incur extra fees."],
      ["Do you offer after-sales service?", "Yes. We support tracking, quality feedback, remake review, repeat orders and long-term project follow-up."]
    ]
  }
];

function renderDetails(items) {
  return items
    .map(([question, answer], index) => `<details${index === 0 ? " open" : ""}><summary>${question}</summary><p>${answer}</p></details>`)
    .join("");
}

function renderGroups(groups, className = "") {
  return groups
    .map(
      (group) => String.raw`
        <section class="faq-group ${className}" id="${group.id}">
          <div class="faq-group-head">
            <span class="faq-group-mark" aria-hidden="true"></span>
            <div>
              <h2>${group.title}</h2>
            </div>
          </div>
          <div class="faq">${renderDetails(group.items)}</div>
        </section>`
    )
    .join("");
}

const html = String.raw`
  ${header}
  <main>
    <section class="page-hero faq-page-hero">
      <div class="container">
        <h1>Custom Metal Crafts FAQ</h1>
        <p>Custom metal craft questions covering order setup, artwork, materials, pricing, lead time, payment, packaging, shipping, after-sales support, and product-specific customization.</p>
      </div>
    </section>

    <section class="section faq-page-section">
      <div class="container">
        <div class="faq-page-stack">
          ${renderGroups(faqGroups)}
        </div>
      </div>
    </section>

    <section class="section custom-cta-section">
      <div class="container">
        <div class="custom-cta-band">
          <div>
            <h2>Still Have Questions?</h2>
            <p>Send your design, quantity, size and deadline. Our team will reply with artwork advice, production options and a clear quotation.</p>
          </div>
          <div class="hero-actions">
            <a class="btn btn-yellow" href="/contact">Get Free Quote</a>
            <a class="btn btn-outline" href="/custom">View Custom Options</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function Page() {
  const mainEntity = faqGroups.flatMap((group) =>
    group.items.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: {
        "@type": "Answer",
        text,
      },
    })),
  );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity,
        }}
      />
      <StaticPage html={html} />
    </>
  );
}
