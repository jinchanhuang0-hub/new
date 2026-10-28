import { existsSync } from "node:fs";
import { join } from "node:path";

const turkeyTrotImages = {
  hero: {
    src: "/assets/images/custom-turkey-trot-medals-guide.webp",
    width: 1600,
    height: 900,
    className: "blog-article-hero-image blog-article-natural-image",
    alt: "Turkey-themed 5K finisher medal design with an olive-green and orange ribbon",
    caption: "Illustrative 5K medal concept. Distance-specific wording makes this version suitable for the named race.",
  },
  ribbonVersions: {
    src: "/assets/images/turkey-trot-medal-ribbon-versions.webp",
    width: 1600,
    height: 900,
    className: "blog-article-natural-image blog-image-16x9 turkey-trot-ribbon-versions-image",
    alt: "Two Turkey Trot medal design concepts with patterned and plain orange ribbons",
    caption: "Illustrative design concepts showing changes to ribbon artwork and medal colors.",
  },
  sponsorPlacement: {
    src: "/assets/images/turkey-trot-medal-sponsor-placement.webp",
    width: 1600,
    height: 900,
    className: "blog-article-natural-image blog-image-16x9 turkey-trot-sponsor-placement-image",
    alt: "Front and reverse views of a Turkey Trot medal concept with an autumn-patterned ribbon",
    caption: "Illustrative front and reverse layouts. Final sponsor artwork and placement must be agreed for the actual order.",
  },
  sorting: {
    src: "/assets/images/turkey-trot-medal-sorting.webp",
    width: 1600,
    height: 900,
    className: "blog-article-natural-image blog-image-16x9",
    alt: "Turkey Trot medal concepts sorted into 5K and 10K groups with orange and navy ribbons",
    caption: "Illustrative 5K and 10K sorting example. Labels for your event should match its approved medal-and-ribbon versions.",
  },
};

const renderConfiguredImage = (image, { priority = false } = {}) => {
  const filePath = join(process.cwd(), "public", ...image.src.split("/").filter(Boolean));
  if (!existsSync(filePath)) return "";

  return String.raw`
            <figure class="blog-article-image ${image.className}">
              <img src="${image.src}" width="${image.width}" height="${image.height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" alt="${image.alt}">
              <figcaption>${image.caption}</figcaption>
            </figure>`;
};

// Retain existing section IDs so links to the previous article keep working.
const turkeyTrotContents = String.raw`
            <a href="#decide-whether-the-5k-and-kids-run-need-different-medals">Can Your 5K and Kids’ Run Share One Medal Design?</a>
            <a href="#how-do-medal-versions-affect-the-budget">How Do Medal Versions Affect the Budget?</a>
            <a href="#confirm-quantities-for-each-medal-version">Confirm Who Receives Each Medal—and How Many</a>
            <a href="#prepare-medals-for-the-finish-line-team">Check and Sort Each Version Before Race Day</a>
            <a href="#choose-sponsor-logo-placement-before-finalizing-the-artwork">Choose Where Sponsor Logos Will Appear</a>
            <a href="#set-artwork-approval-dates-from-your-required-delivery-date">Set the Order Schedule Around Your Required Arrival Date</a>
            <a href="#frequently-asked-questions">Frequently Asked Questions</a>
            <a href="#plan-your-turkey-trot-medal-order">Compare Options for Your Turkey Trot Medal Order</a>`;

export const customTurkeyTrotMedalsGuideArticleHtml = String.raw`
    <article id="custom-turkey-trot-medals-guide" class="section blog-article-section">
      <div class="blog-article-shell">
        <aside class="blog-article-toc" aria-label="Article contents">
          <strong>In This Guide</strong>
          <nav>${turkeyTrotContents}</nav>
        </aside>
        <div class="container blog-article blog-article-with-toc">
          <header class="blog-article-header">
            <a class="blog-back-link" href="/blog">Back to Blog</a>
            <h1>How to Choose Turkey Trot Medals for a 5K and Kids’ Run</h1>
            ${renderConfiguredImage(turkeyTrotImages.hero, { priority: true })}
            <p>Does your Turkey Trot need a different medal for the kids’ run, or can both groups receive the same design?</p>
            <p>The answer starts with the wording. A medal marked “5K FINISHER” does not fit a shorter children’s race, even with a different ribbon. If the medal carries the event name and wording suitable for both groups, one shared design may work.</p>
            <p>Compare that shared option with separate versions before approving the artwork. The choice affects more than appearance: it changes what needs to be quoted, how quantities are recorded, and which medal-and-ribbon combinations your team must distribute.</p>
          </header>

          <div class="blog-article-main">
            <details class="blog-mobile-toc">
              <summary>Table of Contents</summary>
              <nav>${turkeyTrotContents}</nav>
            </details>

            <h2 id="decide-whether-the-5k-and-kids-run-need-different-medals">Can Your 5K and Kids’ Run Share One Medal Design?</h2>
            <p>Start with the information that must appear on each award. The event name and turkey artwork may stay the same, while the distance or recipient group changes. Decide whether that difference needs to appear on the metal itself or can be shown on the ribbon.</p>
            <p>A shared design works only when its wording and physical specifications suit both groups. If the children’s event needs a different size, weight or ribbon arrangement, review it as a separate option rather than assuming a smaller version of the adult medal will be suitable.</p>
            <div class="blog-table-wrap" tabindex="0" role="region" aria-label="Medal and ribbon version comparison">
              <table class="blog-table">
                <thead><tr><th scope="col">Option</th><th scope="col">Medal and ribbon arrangement</th><th scope="col">When it fits</th><th scope="col">What to confirm</th></tr></thead>
                <tbody>
                  <tr><td>Shared medal, different ribbons</td><td>Shared medal wording, with group details on the ribbons</td><td>Both groups can use the same metal design and specifications</td><td>Ribbon artwork, assembly quantities and whether the metal components can be shared</td></tr>
                  <tr><td>Shared outline, different medal wording</td><td>Related designs with group-specific wording on the metal</td><td>The distance or event category must appear on the medal itself</td><td>How the wording is produced and whether separate tooling or decoration is needed</td></tr>
                  <tr><td>Separate kids’ run version</td><td>Different artwork, wording or physical specifications</td><td>The children’s event needs its own complete award</td><td>Medal size, weight, edges, ribbon dimensions and the assembled sample</td></tr>
                </tbody>
              </table>
            </div>
            <p>For an illustrative community event with a 5K and a one-mile kids’ run, the organizer could keep the same event name and turkey artwork on both medals. If both groups receive a finisher award, the distance could appear on the ribbon while the medal uses shared wording.</p>
            <p>If the organizer wants “5K FINISHER” and “KIDS’ RUN” on the metal itself, those become separate artwork versions. They may still share an outline, but the supplier must check how the lettering will be produced before confirming tooling and price.</p>
            <p>Review our <a href="/products/custom-medals">custom medal examples and options</a> and <a href="/blog/how-to-choose-custom-medal-ribbons">medal ribbon options</a>.</p>
            ${renderConfiguredImage(turkeyTrotImages.ribbonVersions)}

            <h2 id="how-do-medal-versions-affect-the-budget">How Do Medal Versions Affect the Budget?</h2>
            <p>Ask for the shared-medal option and the separate-version option to be quoted using the same quantity for each race group. Keep other specifications comparable, and identify any differences in size, finish, ribbon or packaging.</p>
            <p>The useful question is how much the version change adds to the complete order. Does it require different metal artwork, another decoration step, or only a ribbon change? Confirm that distinction before assuming one option saves tooling costs.</p>
            <p>Check that both quotations cover the same agreed items, including ribbons, assembly, packaging and delivery. If the children’s version needs different physical specifications, list those changes separately so the price difference remains understandable.</p>

            <div id="start-with-your-race-categories-and-medal-policy" aria-hidden="true"></div>
            <h2 id="confirm-quantities-for-each-medal-version">Confirm Who Receives Each Medal—and How Many</h2>
            <p>Record one order line for each medal-and-ribbon combination. Keep finisher medals separate from overall or age-group awards, and count recipients according to the event’s published rules. Our guide to <a href="/blog/finisher-medals-vs-placement-medals">finisher medals and placement awards</a> explains the distinction.</p>
            <p>Accompanying adults are worth checking separately. <a href="https://www.turkeytrot.com/race-info">Dana Point’s 2026 race information</a> states that registered Adult Gobble Buddies receive a finisher medal alongside their race bib. That is one event’s policy, not a rule for every Turkey Trot, but it shows why counting children alone can miss eligible recipients.</p>
            <p>If registration remains open, explain how expected late entries are included in the forecast. Record reserves separately and avoid adding the same allowance twice. Use our <a href="/blog/how-many-race-medals-to-order">race medal quantity planning guide</a> for the detailed calculation.</p>

            <h3 id="prepare-medals-for-the-finish-line-team">Check and Sort Each Version Before Race Day</h3>
            <p>When the shipment arrives, compare the medal wording, ribbon combinations and quantities with the approved order. Label each group with words or pictures as well as colors. Keep placement awards and reserve stock separate, and assign one person to handle shortages or replacements.</p>
            ${renderConfiguredImage(turkeyTrotImages.sorting)}

            <h2 id="choose-sponsor-logo-placement-before-finalizing-the-artwork">Choose Where Sponsor Logos Will Appear</h2>
            <p>Check the sponsorship agreement before deciding where a logo belongs. The front, back and ribbon offer different visibility, and they are not interchangeable.</p>
            <ul class="blog-list">
              <li><strong>Medal front:</strong> Keep the event name and award wording readable alongside the sponsor mark.</li>
              <li><strong>Medal back:</strong> This leaves more space for the event design on the front, but the logo will not appear in a photograph showing only that front.</li>
              <li><strong>Printed ribbon:</strong> Review the logo on the assembled medal as well as the flat layout, especially near folds and the attachment.</li>
            </ul>
            <p>A presentation card can carry sponsor information when that matches the agreement, but it does not automatically replace a promised medal logo. Confirm the artwork and approval contact before production; a late sponsor change needs a separate cost and timing check.</p>
            ${renderConfiguredImage(turkeyTrotImages.sponsorPlacement)}

            <h2 id="set-artwork-approval-dates-from-your-required-delivery-date">Set the Order Schedule Around Your Required Arrival Date</h2>
            <p>Give the supplier the date the medals must reach your team, together with the delivery postcode and estimated quantity. If medals are needed for packet pickup before race day, use that earlier deadline. Leave time to count and sort the shipment before distribution.</p>
            <p>Ask for a schedule that separates artwork revisions, any physical sample review, bulk production and transport. Confirm whether each duration uses working or calendar days, what approval starts production, and when ribbon artwork and quantities must be final.</p>
            <p>If the schedule is tight, ask which design and delivery options remain feasible before approving artwork or promising medals to participants. Additional quantities, sponsor changes or a second production batch need a separate timing check.</p>
            <p>Use our <a href="/blog/custom-medal-design-proof-checklist">medal artwork approval checklist</a> for the detailed review of wording, specifications and ribbon assembly.</p>

            <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
            <div class="blog-faq">
              <details open><summary><h3>Can a small community Turkey Trot order custom medals?</h3></summary><p>Send the quantity for each version so the design and order requirements can be reviewed together. For designs requiring a custom mold, the tooling charge is spread across fewer pieces in a smaller order, which can increase the cost per medal. Ask for the complete quotation before deciding between shared and separate versions.</p></details>
              <details><summary><h3>Can we increase the quantity after approving the order?</h3></summary><p>Contact the supplier before promising extra medals. Whether the quantity can be increased depends on the production stage, additional quantity and required arrival date. If another production batch is needed, its price and delivery schedule must be confirmed separately.</p></details>
              <details><summary><h3>Can we request a quote before the design is finished?</h3></summary><p>Yes. Start with your event logo or reference image, estimated quantities, required wording and arrival date. Identify anything still undecided. The quotation should state the specifications it assumes, with any later design changes reviewed before production.</p></details>
            </div>

            <section class="blog-article-cta blog-inquiry-cta turkey-trot-inquiry" aria-labelledby="plan-your-turkey-trot-medal-order">
              <div>
                <h2 id="plan-your-turkey-trot-medal-order" class="blog-cta-title">Compare Options for Your Turkey Trot Medal Order</h2>
                <p>Not sure whether to use one medal design or separate versions? Send your event logo or reference image, estimated quantity for each race group, required arrival date, and delivery country or ZIP code.</p>
                <p>Tell us what wording each group needs and which details are still undecided. We can review the shared-design and separate-version options and prepare a quote based on the agreed specifications.</p>
              </div>
              <div class="blog-cta-actions">
                <a class="btn btn-yellow" href="/contact">Request a Medal Quote</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>`;
