import { SITE_URL } from "../lib/siteRoutes";

export const customChallengeCoinsCost = {
  title: "Custom Challenge Coin Cost: One Design or Multiple Versions?",
  description: "Compare custom challenge coin costs for one design or five reverse versions, with reference prices, mold fees and advice for planning a 250-coin order.",
  author: "Sunny Huang",
  authorType: "Person",
  authorUrl: `${SITE_URL}/about/sunny-huang`,
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  image: "/assets/images/custom-challenge-coin-front-and-reverse.webp",
  schemaType: "BlogPosting",
  hideFooterInquiry: true,
  faq: [
    {
      question: "Can five coin designs be priced using the combined quantity of 250?",
      answer: "For the shared-front arrangement described here, Unique Pin can use the combined quantity when specifications match. Additional reverse molds and applicable production differences are charged separately. The confirmed artwork and quotation determine whether this arrangement applies to your order.",
    },
    {
      question: "Do I need a different mold if only the reverse design changes?",
      answer: "A distinct reverse design formed in the metal requires its own reverse mold in this example, while the unchanged front mold is shared. Details added afterward by laser engraving need separate assessment and may avoid additional tooling, but still carry processing costs.",
    },
    {
      question: "Does the reference unit price include mold fees and shipping?",
      answer: "No. US$0.85–1.00 covers coin production only for the 250-piece configuration shown above. Molds, packaging and shipping are excluded. The US$1.41–1.64 figure includes the mold fee spread across those 250 coins, but still excludes packaging and delivery costs.",
    },
    {
      question: "Will a repeat order have the same price and mold fees?",
      answer: "A repeat order needs a current quotation. Pricing depends on the quantity, specifications and production conditions, while mold charges depend on whether existing tooling remains available and usable. Provide the previous order reference and identify any design changes.",
    },
  ],
};

const coinCostContents = String.raw`
            <a href="#250-coin-order-cost">How Much Does a 250-Coin Order Cost?</a>
            <a href="#one-design-or-five-versions">One Design or Five Versions: What Changes in the Budget?</a>
            <a href="#shared-side-mold-fees">How Do Mold Fees Work When One Side Stays the Same?</a>
            <a href="#coins-or-presentation-cards">Should Each Group Have Its Own Coin or a Different Presentation Card?</a>
            <a href="#ordering-more-coins">When Does Ordering More Coins Make Financial Sense?</a>
            <a href="#comparing-quotes">What Should You Include When Comparing Quotes?</a>
            <a href="#faq">Frequently Asked Questions</a>
            <a href="#compare-your-coin-order-options">Compare Your Coin Order Options</a>`;

export const customChallengeCoinsCostArticleHtml = String.raw`
    <article id="custom-challenge-coins-cost" class="section blog-article-section">
      <div class="blog-article-shell">
        <aside class="blog-article-toc" aria-label="Article contents">
          <strong>In This Guide</strong>
          <nav>${coinCostContents}</nav>
        </aside>
        <div class="container blog-article blog-article-with-toc">
          <header class="blog-article-header">
            <a class="blog-back-link" href="/blog">Back to Blog</a>
            <h1>Custom Challenge Coin Cost: One Design or Multiple Versions?</h1>
            <figure class="blog-article-image blog-article-hero-image blog-article-natural-image">
              <img src="/assets/images/custom-challenge-coin-front-and-reverse.webp" width="1672" height="941" fetchpriority="high" decoding="async" title="Custom Challenge Coin Front and Reverse" alt="Concept views of a nickel-plated challenge coin with one-color enamel on the front and an uncolored metal reverse">
            </figure>
            <p>Ordering 250 <a href="/products/custom-challenge-coins">custom challenge coins</a> with one design can involve a different cost structure from ordering five reverse designs at 50 coins each. A single version generally simplifies production. Versions with matching specifications may still be priced using the combined quantity, with additional molds and any production differences quoted separately.</p>
            <p>Consider an association buying coins for five chapters. Should every chapter receive the same coin, or should each have its own reverse? In this planning example, the first question is whether the coin itself needs to identify the chapter. The next is how that choice affects the budget.</p>
          </header>
          <details class="blog-mobile-toc">
            <summary>Table of Contents</summary>
            <nav>${coinCostContents}</nav>
          </details>

          <h2 id="250-coin-order-cost">How Much Does a 250-Coin Order Cost?</h2>
          <p>For this Unique Pin reference configuration, the subtotal for production and molds is <strong>US$352.50–410 for 250 identical coins</strong>, excluding packaging and shipping. The production unit price and mold fee are listed separately below so you can see what each contributes to the initial order.</p>
          <div class="blog-table-wrap" tabindex="0" role="region" aria-label="Reference coin specifications">
            <table class="blog-table">
              <thead><tr><th scope="col">Specification</th><th scope="col">Reference configuration</th></tr></thead>
              <tbody>
                <tr><td>Quantity</td><td>250 coins with identical artwork</td></tr>
                <tr><td>Material</td><td>Zinc alloy</td></tr>
                <tr><td>Diameter</td><td>44.5 mm, approximately 1.75 inches</td></tr>
                <tr><td>Thickness</td><td>3 mm</td></tr>
                <tr><td>Process</td><td>2D metal design with baked enamel color fill</td></tr>
                <tr><td>Color</td><td>One color on the front; no color fill on the reverse</td></tr>
                <tr><td>Plating</td><td>Nickel</td></tr>
              </tbody>
            </table>
          </div>
          <div class="blog-table-wrap" tabindex="0" role="region" aria-label="Reference production and mold costs">
            <table class="blog-table">
              <thead><tr><th scope="col">Cost item</th><th scope="col">Calculation</th><th scope="col" style="text-align: right">Reference amount</th></tr></thead>
              <tbody>
                <tr><td>Coin production</td><td>250 × US$0.85–1.00</td><td style="text-align: right">US$212.50–250</td></tr>
                <tr><td>Complete mold set</td><td>One front design + one reverse design</td><td style="text-align: right">US$140–160</td></tr>
                <tr><td><strong>Production + molds</strong></td><td><strong>Combined subtotal</strong></td><td style="text-align: right"><strong>US$352.50–410</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>All prices are for reference only and apply to the specifications and quantity shown. Actual pricing depends on your order requirements and final quotation.</strong> Packaging, shipping and any applicable taxes or duties require separate confirmation. Spread across 250 coins, this subtotal represents <strong>US$1.41–1.64 per coin for production and molds</strong>, before those additional costs.</p>
          <p><strong>Pricing basis:</strong> These figures are for planning the configuration shown; they are not an industry-wide price range or a binding quotation. Confirm their pricing basis and last verification date with Unique Pin, along with whether sampling and other setup charges are included. The article publication date is not a price verification date.</p>
          <p>Changes to the process, dimensions, material or color requirements require the production unit price to be reassessed. Mold fees also vary with the process, size and design. If specifications are undecided, our <a href="/blog/challenge-coin-size-guide">challenge coin size guide</a> and <a href="/blog/2d-vs-3d-challenge-coins">2D vs. 3D design comparison</a> can help you define a consistent product before comparing prices.</p>

          <h2 id="one-design-or-five-versions">One Design or Five Versions: What Changes in the Budget?</h2>
          <p>For the association’s five chapters, 50 coins per chapter does not automatically mean five separate 50-piece production prices. <strong>For this shared-front arrangement, Unique Pin can calculate production pricing using the combined quantity of 250 coins</strong>, provided the versions have matching dimensions, material, process, plating and color requirements.</p>
          <figure class="blog-article-image blog-article-natural-image">
            <img src="/assets/images/challenge-coin-shared-front-five-reverses.webp" width="1536" height="1024" loading="lazy" decoding="async" title="One Shared Front and Five Reverse Designs" alt="Six concept coin samples showing one shared front and five different chapter reverse designs">
            <figcaption>Concept comparison for a five-chapter coin order. One sample shows the shared front, while five samples show the chapter-specific reverses. All versions retain the same dimensions, material, plating and color requirements.</figcaption>
          </figure>
          <div class="blog-table-wrap" tabindex="0" role="region" aria-label="Single design and five version budget comparison">
            <table class="blog-table">
              <thead><tr><th scope="col">Budget item</th><th scope="col">250 identical coins</th><th scope="col">Five versions, 50 coins each</th></tr></thead>
              <tbody>
                <tr><td>Total quantity</td><td>250</td><td>250</td></tr>
                <tr><td>Front artwork</td><td>One design</td><td>One shared design</td></tr>
                <tr><td>Reverse artwork</td><td>One design</td><td>Five designs</td></tr>
                <tr><td>Quantity used for pricing</td><td>250 coins</td><td>250 coins, subject to matching specifications</td></tr>
                <tr><td>Mold configuration</td><td>One front + one reverse</td><td>One front + five reverses</td></tr>
                <tr><td>Costs requiring separate assessment</td><td>Selected specifications and packaging</td><td>Additional reverse molds, production differences and packaging</td></tr>
              </tbody>
            </table>
          </div>
          <p>Using the same total quantity does not guarantee the same production cost or order total. Additional molds are one difference; any other production charges caused by the versions should be identified separately in the quotation. The earlier US$0.85–1.00 reference should therefore not be applied automatically to every proposed design.</p>
          <p>The useful comparison is between two orders with the same total quantity and specifications. This isolates the cost of giving each chapter its own reverse. Other suppliers may calculate multiple-version orders differently.</p>
          <aside class="coin-cost-formula" aria-label="Five-version budget calculation">
            <p><strong>Five-version subtotal = quoted production cost for 250 coins + one front-and-reverse mold set + four additional reverse mold fees + any separately quoted version-related charges.</strong></p>
            <p>If reverse designs have different tooling fees, list each fee separately rather than assuming all four cost the same.</p>
            <p><strong>Multiple-version premium = five-version subtotal − single-design subtotal for the same quantity and specifications.</strong></p>
            <p>Compare both subtotals on the same cost basis, excluding packaging, shipping and applicable taxes or duties. A specific price difference cannot be given until the five-version production, tooling and other charges are quoted.</p>
          </aside>
          <p>Before ordering, have the quotation confirm whether combined-quantity pricing applies to your artwork and specifications, with mold fees and any additional processing charges itemized separately.</p>

          <h2 id="shared-side-mold-fees">How Do Mold Fees Work When One Side Stays the Same?</h2>
          <p>The <strong>US$140–160 reference mold fee</strong> covers one front and one reverse for the example specifications. For this shared-front order at Unique Pin, five reverse designs require one shared front mold and five reverse molds. Compared with the single-design order, that adds four reverse molds.</p>
          <p><strong>Five-version mold cost = one complete front-and-reverse mold set + four additional reverse molds.</strong></p>
          <p>Each distinct reverse design formed in the metal requires its own reverse mold in this example. The additional fee depends on the process, size and design; it should not be estimated by dividing the complete-set fee in half.</p>
          <p>Details added afterward, such as laser-engraved chapter names or individual numbers, are assessed separately and may not require a different mold. Their suitability and processing costs still need checking. Distinguishing molded lettering from later personalization helps the quotation account for the intended result without treating every text variation as the same type of change.</p>

          <h2 id="coins-or-presentation-cards">Should Each Group Have Its Own Coin or a Different Presentation Card?</h2>
          <p><strong>If the recipient discards the packaging, should the coin still identify their chapter?</strong> A chapter-specific reverse preserves that connection. A presentation card may be sufficient when only the welcome message, recipient group or event information differs.</p>
          <figure class="blog-article-image blog-article-natural-image">
            <img src="/assets/images/challenge-coins-chapter-presentation-cards.webp" width="1536" height="1024" loading="lazy" decoding="async" title="Identical Challenge Coins with Different Chapter Cards" alt="Three identical concept challenge coins paired with different chapter presentation cards">
            <figcaption>Concept packaging arrangement showing the same coin design with three chapter-specific presentation cards. The cards carry the group information while the coin artwork remains unchanged.</figcaption>
          </figure>
          <div class="blog-table-wrap" tabindex="0" role="region" aria-label="Coin and presentation card options">
            <table class="blog-table">
              <thead><tr><th scope="col">Requirement</th><th scope="col">Option to consider</th><th scope="col">Costs to compare</th></tr></thead>
              <tbody>
                <tr><td>Chapter identity must remain on the coin</td><td>Different reverse designs</td><td>Additional molds and applicable production charges</td></tr>
                <tr><td>Only recipient or event information differs</td><td>Identical coins with different cards</td><td>Card printing, assembly and sorting</td></tr>
                <tr><td>Everyone represents the same organization</td><td>Identical coins and packaging</td><td>Selected packaging costs</td></tr>
              </tbody>
            </table>
          </div>
          <p>Cards are not automatically cheaper. Multiple print versions, packing quantities and assembly requirements can affect the comparison, so include them in the budget. A card can carry the chapter’s welcome message, but it will not identify the coin once the two are separated. Choose the arrangement that preserves the information recipients need.</p>

          <h2 id="ordering-more-coins">When Does Ordering More Coins Make Financial Sense?</h2>
          <p>A larger order may reduce the cost per coin while increasing total spending. Extra coins are easier to justify when there is a realistic need for them. Designs bearing a year, event date or edition number may have limited use after the occasion.</p>
          <p>Ask each chapter about expected recipients and replacement needs before adding a reserve. Base spare quantities on past requests or planned distributions, then compare the additional order cost—including packaging and shipping—with the likely use of those extras.</p>

          <h2 id="comparing-quotes">What Should You Include When Comparing Quotes?</h2>
          <p>Give each supplier the same order details so you can compare equivalent products and services. Include:</p>
          <ul>
            <li>Total quantity and quantity per version.</li>
            <li>Shared front artwork and each reverse design.</li>
            <li>Material, diameter and thickness.</li>
            <li>Production process, enamel colors, color placement and plating.</li>
            <li>Names, sequential numbers or other personalization.</li>
            <li>Packaging, presentation cards and separate packing requirements.</li>
            <li>Delivery destination and required arrival date.</li>
            <li>A request to identify included costs and separately charged items.</li>
          </ul>
          <p><strong>Assign each version a clear code</strong>, such as CH-01 through CH-05. Use the same code on artwork, quotation lines and packing records. This allows the association to match each chapter’s design, quantity and packaging, and trace additional charges to the version that requires them.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <div class="blog-faq">
            ${customChallengeCoinsCost.faq.map((item, index) => `<details${index === 0 ? " open" : ""}><summary><h3>${item.question}</h3></summary><p>${item.answer}</p></details>`).join("\n            ")}
          </div>

          <section id="compare-your-coin-order-options" class="blog-article-cta">
            <div class="blog-cta-copy">
              <h2>Compare Your Coin Order Options</h2>
              <p>To compare a shared design with multiple versions, send your total quantity, quantity per version, and available front and reverse artwork or reference images. Include any confirmed dimensions, material, process, color, packaging and delivery requirements.</p>
              <p>If some details are undecided, note them in your inquiry. Unique Pin can use this information to compare the options, identify assumptions affecting the price, and separate additional mold fees from other production charges.</p>
            </div>
            <div class="blog-cta-actions"><a class="btn btn-yellow" href="/contact"><strong>Request a Quote</strong></a></div>
          </section>
        </div>
      </div>
    </article>`;
