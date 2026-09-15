import { existsSync } from "node:fs";
import { join } from "node:path";

const turkeyTrotImages = {
  hero: {
    src: "/assets/images/custom-turkey-trot-medals-guide.webp",
    width: 1600,
    height: 900,
    className: "blog-article-hero-image blog-article-natural-image",
    alt: "Turkey Trot medal concepts with navy and orange ribbons",
    caption: "Design concepts showing a shared medal with different ribbons for two race categories.",
  },
  ribbonVersions: {
    src: "/assets/images/turkey-trot-medal-ribbon-versions.webp",
    width: 1600,
    height: 900,
    className: "blog-article-natural-image blog-image-16x9 turkey-trot-ribbon-versions-image",
    alt: "Matching turkey medal designs with two different ribbon colors",
    caption: "Illustrative ribbon variations; the order should identify the intended recipient group for each version.",
  },
  sponsorPlacement: {
    src: "/assets/images/turkey-trot-medal-sponsor-placement.webp",
    width: 1600,
    height: 900,
    className: "blog-article-natural-image blog-image-16x9 turkey-trot-sponsor-placement-image",
    alt: "Concept medal front and reverse beside a ribbon with placeholder symbols",
    caption: "Illustrative medal and ribbon layout; sponsor placement must match the agreed requirements.",
  },
  sorting: {
    src: "/assets/images/turkey-trot-medal-sorting.webp",
    width: 1600,
    height: 900,
    className: "blog-article-natural-image blog-image-16x9",
    alt: "Two trays of turkey medals sorted by navy and orange ribbons",
    caption: "Illustrative sorting setup for separate medal-and-ribbon versions before race-day distribution.",
  },
};

const renderConfiguredImage = (image, { priority = false } = {}) => {
  const filePath = join(process.cwd(), "public", ...image.src.split("/").filter(Boolean));
  if (!existsSync(filePath)) return "";

  return String.raw`
            <figure class="blog-article-image ${image.className}">
              <img src="${image.src}" width="${image.width}" height="${image.height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" alt="${image.alt}">
            </figure>`;
};

export const customTurkeyTrotMedalsGuideArticleHtml = String.raw`
    <article id="custom-turkey-trot-medals-guide" class="section blog-article-section">
      <div class="blog-article-shell">
        <aside class="blog-article-toc" aria-label="Article contents">
          <strong>In This Guide</strong>
          <nav>
            <a href="#start-with-your-race-categories-and-medal-policy">Race categories and medal policy</a>
            <a href="#decide-whether-the-5k-and-kids-run-need-different-medals">Medal versions</a>
            <a href="#choose-sponsor-logo-placement-before-finalizing-the-artwork">Sponsor placement</a>
            <a href="#confirm-quantities-for-each-medal-version">Quantities</a>
            <a href="#set-artwork-approval-dates-from-your-required-delivery-date">Approval dates</a>
            <a href="#prepare-medals-for-the-finish-line-team">Finish-line preparation</a>
            <a href="#frequently-asked-questions">FAQ</a>
            <a href="#plan-your-turkey-trot-medal-order">Request a quote</a>
          </nav>
        </aside>
        <div class="container blog-article blog-article-with-toc">
          <header class="blog-article-header">
            <a class="blog-back-link" href="/blog">Back to Blog</a>
            <h1>Custom Turkey Trot Medals: A Planning Guide for Race Directors</h1>
            ${renderConfiguredImage(turkeyTrotImages.hero, { priority: true })}
            <p>A Turkey Trot can bring 5K runners, children in a short fun run, and accompanying adults through the same finish area. Your medal order needs to reflect who receives an award, which version they receive, and what your sponsors have been promised.</p>
            <p>Before approving custom turkey trot medals, settle those choices alongside your required delivery date. A shared design may suit both races, while different ribbons can help volunteers distinguish them. Sponsor artwork and late registrations need their own deadlines. This guide walks race directors, nonprofit organizers, and their purchasing partners through those decisions.</p>
          </header>

          <div class="blog-article-main">
            <details class="blog-mobile-toc">
              <summary>Table of Contents</summary>
              <nav>
                <a href="#start-with-your-race-categories-and-medal-policy">Race categories and medal policy</a>
                <a href="#decide-whether-the-5k-and-kids-run-need-different-medals">Medal versions</a>
                <a href="#choose-sponsor-logo-placement-before-finalizing-the-artwork">Sponsor placement</a>
                <a href="#confirm-quantities-for-each-medal-version">Quantities</a>
                <a href="#set-artwork-approval-dates-from-your-required-delivery-date">Approval dates</a>
                <a href="#prepare-medals-for-the-finish-line-team">Finish-line preparation</a>
                <a href="#frequently-asked-questions">FAQ</a>
                <a href="#plan-your-turkey-trot-medal-order">Request a quote</a>
              </nav>
            </details>

            <h2 id="start-with-your-race-categories-and-medal-policy">Start with Your Race Categories and Medal Policy</h2>
            <p>Write down each event and its medal rule: 5K finishers, kids’ run participants, any eligible accompanying adults, and separate placement awards. A children’s fun run is a different event from an age division within the 5K; young runners may enter either.</p>
            <p>Check what registration includes before estimating quantities. For example, <a href="https://www.turkeytrot.com/race-info">Dana Point’s 2026 Turkey Trot information</a> lists a kids’ one-mile event and an Adult Gobble Buddy option that includes a finisher medal. That is one organizer’s policy, but it illustrates why counting children alone could miss eligible recipients.</p>
            <p>Keep your own rules consistent across registration information, purchasing records, and volunteer instructions. If your race also recognizes overall or age-group winners, plan those awards separately. Our guide to <a href="/blog/finisher-medals-vs-placement-medals">finisher medals and placement awards</a> explains the distinction.</p>

            <h2 id="decide-whether-the-5k-and-kids-run-need-different-medals">Decide Whether the 5K and Kids’ Run Need Different Medals</h2>
            <p>Start with the wording on the medal. A shared turkey design can work across events if its text applies to everyone receiving it. A medal marked only “5K” would misrepresent a shorter kids’ run, even with a different ribbon.</p>
            <p>Compare these approaches before requesting artwork:</p>
            <div class="blog-table-wrap">
              <table class="blog-table">
                <thead><tr><th scope="col">Approach</th><th scope="col">When it makes sense</th><th scope="col">What to confirm</th></tr></thead>
                <tbody>
                  <tr><td>Shared medal with different ribbons</td><td>Both events share an identity and suitable medal wording</td><td>Ribbon text, colors, and quantities for each group</td></tr>
                  <tr><td>Related designs with different event wording</td><td>Each group needs its distance or event name on the medal</td><td>Separate proofs and any tooling or decoration changes</td></tr>
                  <tr><td>Separate kids’ run medal</td><td>The children’s event needs its own theme or physical specifications</td><td>Medal dimensions, weight, edges, and ribbon measurements</td></tr>
                </tbody>
              </table>
            </div>
            ${renderConfiguredImage(turkeyTrotImages.ribbonVersions)}
            <p>For a children’s version, review the complete medal and ribbon together. Clarify whether a ribbon measurement means its total unfolded length or its hanging length. If weight, feel, or fit matters, discuss a physical sample instead of relying entirely on a drawing.</p>
            <p>Ask for the price difference between the options using the same quantities and quote inclusions. Sharing artwork does not establish that every version uses the same tooling. Give each option a clear name so the quotation, proof, and packing instructions refer to the same item.</p>

            <h2 id="choose-sponsor-logo-placement-before-finalizing-the-artwork">Choose Sponsor Logo Placement Before Finalizing the Artwork</h2>
            <p>Bring the sponsorship commitments into the design discussion early. Confirm the promised location, the correct logo file, and the person authorized to approve its use. “Include our sponsor” leaves too much unresolved.</p>
            <p>Consider each surface in terms of the space and visibility it offers:</p>
            <ul class="blog-list">
              <li><strong>Medal front:</strong> Check whether the sponsor mark can remain readable alongside the event name and artwork. Reduce decorative detail before shrinking essential lettering beyond usefulness.</li>
              <li><strong>Medal back:</strong> This can preserve room for the event design on the front, but the sponsor will not appear in a photograph showing only that front.</li>
              <li><strong>Printed ribbon:</strong> Review logo size, repetition, and orientation on both the flat layout and the assembled view. Check positions near folds and the attachment.</li>
              <li><strong>Presentation card:</strong> Use this when it matches the agreed sponsorship benefit. A card does not automatically replace a promised medal logo.</li>
            </ul>
            <p>Review logos at their intended reproduction size. If a detailed mark needs simplifying, obtain the sponsor’s agreement before approving the change.</p>
            <p>Set a deadline for sponsor feedback. If another sponsor joins after approval, first establish which items can still change and whether the proposed placement meets the new agreement. Avoid promising a late ribbon change before its production schedule has been checked.</p>
            ${renderConfiguredImage(turkeyTrotImages.sponsorPlacement)}

            <h2 id="confirm-quantities-for-each-medal-version">Confirm Quantities for Each Medal Version</h2>
            <p>Use one order line for each medal-and-ribbon combination. Record eligible recipients, separately promised recipients, and reserves with a stated purpose. Even identical metal pieces need separate assembly counts when their ribbons differ.</p>
            <p>If registration remains open, document how the forecast includes expected late entries. Do not add the same allowance twice. Consider whether accompanying adults, volunteers, or sponsor representatives receive medals under your policy, and count them only where appropriate.</p>
            <p>A single spare percentage cannot explain every event’s uncertainty. Separate extra stock for late entries, handling damage, or promised replacements so the reasoning remains visible. Our <a href="/blog/how-many-race-medals-to-order">race medal quantity guide</a> provides a fuller planning method.</p>
            <p>Before approving quantities, agree on what happens if entries exceed the available awards. Confirm whether a further order is feasible before offering it as a remedy.</p>
            <p>Keep the quote comparison complete. Ask whether each price includes tooling, ribbons, assembly, packaging, and shipping to your destination. If you are working within a fixed event budget, compare those totals before adding decorative upgrades. A lower medal price may cover a different set of services.</p>

            <h2 id="set-artwork-approval-dates-from-your-required-delivery-date">Set Artwork Approval Dates from Your Required Delivery Date</h2>
            <p>Tell the supplier when the medals must physically reach your team. Allow time for counting, sorting, and moving them to the venue. If awards are included in advance packet pickup, that earlier handout determines your deadline.</p>
            <p>Build the schedule backward from the required arrival date, including artwork development and revisions, any physical sampling, bulk production, transit, and contingency time. Specify whether quoted durations use working or calendar days and what approval starts each stage. Production time alone does not establish an arrival date.</p>
            <p>Before authorizing mold making, resolve the following:</p>
            <ol class="blog-list">
              <li>Event names, distances, and any year or date shown.</li>
              <li>Medal dimensions, material, decoration methods, and finish.</li>
              <li>Sponsor placement and approval of the supplied logo.</li>
              <li>Ribbon dimensions, wording, orientation, and attachment.</li>
              <li>The exact drawing being approved and whether quantities are final or subject to an agreed deadline.</li>
            </ol>
            <p>Identify one person who collects feedback and sends the final approval. Attach or reply to the specific drawing; “the latest version” can become unclear in a long email thread.</p>
            <p>A digital proof communicates the proposed design and specifications. If physical sampling is part of the order, schedule its review before bulk production. Design approval, quantity confirmation, and approval to proceed with bulk production may be separate checkpoints. After any approval, ask the supplier to assess whether a proposed change affects tooling, completed work, cost, or the delivery schedule before treating the revision as accepted. Use our <a href="/blog/custom-medal-design-proof-checklist">medal artwork approval checklist</a> for the detailed review.</p>

            <h2 id="prepare-medals-for-the-finish-line-team">Prepare Medals for the Finish-Line Team</h2>
            <p>Request packing that follows your version list. When cartons arrive, compare their contents with the order and check medal wording, ribbon combinations, quantities, and visible condition. Set aside anything requiring follow-up before distributing stock to volunteers.</p>
            <p>Prepare a simple reference sheet showing each medal-and-ribbon combination beside its eligible group. Use names or pictures alongside colors, and store placement awards separately from finisher medals.</p>
            <p>Brief volunteers on accompanying adults, runners who entered more than one event, and any other exceptions in your policy. Assign one person to manage reserve stock and record shortages or replacements. Those instructions connect the purchasing plan to what happens at the finish line.</p>
            ${renderConfiguredImage(turkeyTrotImages.sorting)}

            <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
            <div class="blog-faq">
              <details open><summary><h3>Can a small community race order custom medals?</h3></summary><p>Yes. Unique Pin offers <a href="/products/custom-medals">custom medals</a> with no minimum order quantity. For designs requiring a custom mold, smaller orders typically carry a higher tooling cost per medal. Share your quantities and specifications for a quote.</p></details>
              <details><summary><h3>Can we start with an event logo or a sketch?</h3></summary><p>Yes. Unique Pin provides free design assistance and a digital proof. Include event wording, race categories, sponsor requirements, and ribbon preferences so the proposed design reflects the order.</p></details>
              <details><summary><h3>Can we request a physical sample?</h3></summary><p>A physical sample can be arranged. Specify whether you also need the proposed ribbon and packaging included; sample costs and lead time depend on the requirements.</p></details>
              <details><summary><h3>When should we order Turkey Trot medals?</h3></summary><p>Begin when your event requirements are clear enough to discuss. Agree on a schedule working backward from the required arrival date, including approvals, any sample review, production, and shipping.</p></details>
            </div>

            <section class="blog-article-cta blog-inquiry-cta turkey-trot-inquiry" aria-labelledby="plan-your-turkey-trot-medal-order">
              <div>
                <h2 id="plan-your-turkey-trot-medal-order" class="blog-cta-title">Plan Your Turkey Trot Medal Order</h2>
                <p>Send your race date, required delivery date, delivery destination, and estimated quantities for each medal-and-ribbon combination, including the 5K, kids’ run, and any separately eligible groups or reserves. Add your event artwork, sponsor requirements, and preferred medal and ribbon details. Our team can review the specifications and prepare a quote for your custom turkey trot medals.</p>
                <p><strong>Free design assistance · No minimum order quantity</strong></p>
              </div>
              <div class="blog-cta-actions">
                <a class="btn btn-yellow" href="/contact">Request a Medal Quote</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>`;
