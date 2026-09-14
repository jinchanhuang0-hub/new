import { existsSync } from "node:fs";
import { join } from "node:path";

const firefighterAnniversaryImages = {
  hero: {
    src: "/assets/images/firefighter-anniversary-challenge-coins.webp",
    width: 1600,
    height: 900,
    className: "blog-article-hero-image blog-article-natural-image",
    alt: "Firefighters approaching an emergency scene with firefighter challenge coin front and back designs",
  },
  versions: {
    src: "/assets/images/fire-department-coin-design-versions.webp",
    width: 1448,
    height: 1086,
    className: "blog-article-natural-image",
    alt: "Front and back firefighter challenge coins displayed on clear stands",
  },
  artworkReview: {
    src: "/assets/images/anniversary-coin-artwork-review.webp",
    width: 1448,
    height: 1086,
    className: "blog-article-natural-image",
    alt: "Front and back firefighter challenge coin artwork with diameter and color references",
    caption: "Illustrative artwork layout showing the front and back designs, diameter and color references before approval.",
  },
  packaging: {
    src: "/assets/images/anniversary-coin-packaging-options.webp",
    width: 1500,
    height: 1000,
    className: "blog-article-natural-image blog-image-3x2",
    alt: "Firefighter challenge coins presented in a clear pouch and navy presentation box",
  },
};

const renderConfiguredImage = (image, { priority = false } = {}) => {
  const filePath = join(process.cwd(), "public", ...image.src.split("/").filter(Boolean));
  if (!existsSync(filePath)) return "";

  return String.raw`
            <figure class="blog-article-image ${image.className}">
              <img src="${image.src}" width="${image.width}" height="${image.height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" alt="${image.alt}">
              ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}
            </figure>`;
};

export const firefighterChallengeCoinsAnniversaryGuideArticleHtml = String.raw`
    <article id="firefighter-challenge-coins-anniversary-guide" class="section blog-article-section">
      <div class="blog-article-shell">
        <aside class="blog-article-toc" aria-label="Article contents">
          <strong>In This Guide</strong>
          <nav>
            <a href="#decide-who-will-receive-the-coins">Recipients</a>
            <a href="#plan-the-artwork-for-both-sides">Artwork</a>
            <a href="#choose-one-design-or-separate-versions">Versions</a>
            <a href="#match-quantities-and-packaging-to-the-presentation">Quantities and packaging</a>
            <a href="#review-the-proof-before-approving-production">Proof review</a>
            <a href="#work-backward-from-your-required-delivery-date">Delivery date</a>
            <a href="#prepare-a-complete-anniversary-coin-brief">Project brief</a>
            <a href="#frequently-asked-questions">FAQ</a>
            <a href="#request-an-anniversary-coin-quote">Request a quote</a>
          </nav>
        </aside>
        <div class="container blog-article blog-article-with-toc">
          <header class="blog-article-header">
            <a class="blog-back-link" href="/blog">Back to Blog</a>
            <h1>Firefighter Challenge Coins: Planning a Department Anniversary</h1>
            ${renderConfiguredImage(firefighterAnniversaryImages.hero, { priority: true })}
            <p>A department anniversary brings together people with different connections to the same history: current members, retirees, volunteers and invited guests. When you are responsible for ordering firefighter challenge coins, the first decisions concern who receives them, what the design commemorates and when they need to arrive.</p>
            <p>For example, Westport Volunteer Fire Department lists a 50-year anniversary coin on its website, offered in connection with its fundraising barbecue. <a href="https://www.westportvfd.org/" target="_blank" rel="noopener noreferrer">See the department's announcement</a>.</p>
            <div class="blog-quick-answer"><p><strong>Quick answer:</strong> Start with a recipient list, a delivery deadline and the wording that must appear on the coin. Decide whether everyone can share one design before commissioning separate versions. Then confirm quantities, packaging and a single approval contact. A digital proof should record the agreed artwork and specifications before tooling begins.</p></div>
          </header>

          <div class="blog-article-main">
            <details class="blog-mobile-toc">
              <summary>Table of Contents</summary>
              <nav>
                <a href="#decide-who-will-receive-the-coins">Recipients</a>
                <a href="#plan-the-artwork-for-both-sides">Artwork</a>
                <a href="#choose-one-design-or-separate-versions">Versions</a>
                <a href="#match-quantities-and-packaging-to-the-presentation">Quantities and packaging</a>
                <a href="#review-the-proof-before-approving-production">Proof review</a>
                <a href="#work-backward-from-your-required-delivery-date">Delivery date</a>
                <a href="#prepare-a-complete-anniversary-coin-brief">Project brief</a>
                <a href="#frequently-asked-questions">FAQ</a>
                <a href="#request-an-anniversary-coin-quote">Request a quote</a>
              </nav>
            </details>

            <h2 id="decide-who-will-receive-the-coins">Decide Who Will Receive the Coins</h2>
            <p>Begin with the people your committee intends to include. A member gift, a presentation to a visiting department and a coin sold to supporters may serve different purposes, even when they share the same anniversary artwork.</p>
            <p>Use the following questions to build your allocation list. These are planning prompts, not requirements to create four designs.</p>
            <div class="blog-table-wrap">
              <table class="blog-table">
                <thead><tr><th>Recipient group</th><th>Decision to settle</th></tr></thead>
                <tbody>
                  <tr><td>Current members and volunteers</td><td>Will everyone receive the same design?</td></tr>
                  <tr><td>Retired members</td><td>Is individual wording needed, or can a presentation card carry it?</td></tr>
                  <tr><td>Invited guests</td><td>Will the coin be presented formally or included in an event pack?</td></tr>
                  <tr><td>Supporters, if applicable</td><td>Is this a gift or a separate fundraising allocation?</td></tr>
                </tbody>
              </table>
            </div>
            <p>Check names across lists so that someone attending in two roles is not counted twice unintentionally. Keep uncertain attendance separate from confirmed recipients; your committee can then choose a reserve quantity with a clear reason.</p>

            <h2 id="plan-the-artwork-for-both-sides">Plan the Artwork for Both Sides</h2>
            <p>Give the design a clear focus. For fire department anniversary coins, that might be the department emblem paired with its founding year and anniversary year. A station building or historical vehicle can provide a second subject when it has a specific connection to the occasion.</p>
            <p>One workable layout puts department identity on the front and anniversary information on the reverse. This is a design option, not a convention every department must follow. Verify the dates against department records and supply the correct, authorized artwork.</p>
            <p>Keep essential wording readable at the finished size. Print both sides at 100% scale and examine the smallest letters, spacing and border. If the design feels crowded, shorten the wording or simplify the background before increasing the diameter. Our <a href="/blog/challenge-coin-size-guide">challenge coin size guide</a> provides reference dimensions.</p>
            <p>For a sculpted helmet or building, discuss whether 3D relief adds useful depth while lettering remains in clearly defined areas. The <a href="/blog/2d-vs-3d-challenge-coins">2D and 3D comparison</a> explains how those structures differ.</p>

            <h2 id="choose-one-design-or-separate-versions">Choose One Design or Separate Versions</h2>
            <p>Members and guests can receive the same coin. If the message is shared, different boxes or printed cards may provide the distinction your event needs without changing the metal artwork.</p>
            <p>Separate versions become useful when the coin itself needs different information, such as a station name or a dedication for a specific group. Individual names introduce another decision: whether they can be added by engraving in a suitable area or require a different production approach.</p>
            <p>Ask the manufacturer to explain the method and quote each version clearly. Sharing artwork on one side does not automatically remove tooling charges for the other side. Compare the complete order cost, including personalization, packaging and shipping.</p>
            <p>When comparing suppliers, keep the diameter, thickness, finish, quantity and packaging consistent. Ask for tooling, coin production and additional services to be identified in the quotation. A lower unit price is difficult to evaluate if the other offer includes engraving or presentation boxes.</p>
            <p>For a personalized order, keep one approved name file with an entry for each coin. Assign version codes and use those same codes on proofs, order documents and packing instructions.</p>
            ${renderConfiguredImage(firefighterAnniversaryImages.versions)}

            <h2 id="match-quantities-and-packaging-to-the-presentation">Match Quantities and Packaging to the Presentation</h2>
            <p>Record the quantity of every coin version alongside its packaging. The factory needs to know how many coins require boxes and which names belong to each version, as well as the total order quantity.</p>
            <p>For each allocation, record the recipient group, version code, quantity, personalization file, packaging and final approver. Include any reserve coins as a separate line and decide whether they should carry names.</p>
            <p>A clear pouch may suit distribution during an open house. A fitted box may suit a formal presentation. Check the package against the finished diameter and maximum thickness, particularly when the coin has raised sculpted details.</p>
            <p>Ask for versions to be separated and identified in the packing plan. At delivery, the committee should be able to match each group of coins to the allocation list without opening every individual gift.</p>
            <p>If later orders are likely, ask how repeat orders are handled and whether tooling, quantities or lead times would need to be quoted again. Retain the approved artwork and specifications for that discussion.</p>
            ${renderConfiguredImage(firefighterAnniversaryImages.packaging)}

            <h2 id="review-the-proof-before-approving-production">Review the Proof Before Approving Production</h2>
            <p>A digital proof records design decisions; it cannot show every physical quality of the finished metal. Review it for both wording and production specifications.</p>
            <p>Check these items together:</p>
            <ul class="blog-list">
              <li>Department name, anniversary years and any personal names.</li>
              <li>Front and back artwork, including their orientation when the coin is turned over.</li>
              <li>Diameter or overall dimensions, thickness and any specified relief height.</li>
              <li>Metal finish, enamel references, edge style and personalization position.</li>
              <li>Version codes, quantities and packaging requirements in the accompanying order specification.</li>
            </ul>
            <p>Choose one person to collect committee comments and return a consolidated revision. Keep the final approved files together so that a superseded image or name list is not sent back into production.</p>
            <p>If appearance or packaging fit needs a physical check, discuss a sample before approving the bulk run, including its cost and effect on the schedule. Compare the sample with the agreed specification and record any required changes.</p>
            <p>For a detailed station scene, check which features remain recognizable in hand. For a named coin, inspect the longest name as well as shorter examples. These checks can reveal layout problems that are easy to miss in an enlarged preview.</p>
            <p>Once tooling starts, artwork changes may require rework or new tooling. Our <a href="/blog/how-custom-challenge-coins-are-made">manufacturing guide</a> explains where proof approval fits into the process.</p>
            ${renderConfiguredImage(firefighterAnniversaryImages.artworkReview)}

            <h2 id="work-backward-from-your-required-delivery-date">Work Backward from Your Required Delivery Date</h2>
            <p>Give the supplier the date the coins must be in your hands, together with the U.S. delivery address and ZIP code. Allow time after receipt to count the order, check personalized pieces and prepare presentations.</p>
            <p>At Unique Pin, custom challenge coin production typically takes 12–15 working days after final artwork approval; shipping is additional. Confirm the schedule for your specifications, especially if the project includes a physical sample or several personalized versions. <a href="/products/custom-challenge-coins">View our current product information</a>.</p>
            <p>Build the plan around artwork review, any sampling, production, transit and receiving checks. Ask which date depends on your approval and how later changes would affect dispatch. Share the event deadline at the first inquiry so feasibility can be checked before detailed artwork is developed.</p>

            <h2 id="prepare-a-complete-anniversary-coin-brief">Prepare a Complete Anniversary Coin Brief</h2>
            <p>Your inquiry can start with a logo or sketch. Include the information that lets a supplier evaluate the whole order:</p>
            <ul class="blog-list">
              <li>Anniversary purpose and required wording.</li>
              <li>Recipient groups, estimated quantities and proposed versions.</li>
              <li>Front and back references, preferred size and finish.</li>
              <li>Personalization and packaging requirements.</li>
              <li>Delivery address, required arrival date and approval contact.</li>
            </ul>
            <p>If you are a distributor, clarify who consolidates the department's feedback and who approves the final specification. Keep the customer's deadline visible throughout the quotation and revision process.</p>

            <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
            <div class="blog-faq">
              <details open><summary><h3>Can a small volunteer department place an order?</h3></summary><p>Yes. Unique Pin offers custom challenge coins without a minimum order quantity. When custom tooling is needed, a small order spreads that cost across fewer pieces, which can increase the cost per coin.</p></details>
              <details><summary><h3>Can we start without finished artwork?</h3></summary><p>Yes. Unique Pin provides free design assistance and a digital proof. Send your logo, sketch or reference images with the exact wording and anniversary dates you want reviewed.</p></details>
              <details><summary><h3>Should every coin carry a member's name?</h3></summary><p>Only when individual identification serves the project. A shared anniversary design can cover several recipient groups, while a separate card carries a personal message. If names go on the coins, confirm the production method and final name list before approval.</p></details>
            </div>

            <h2 id="request-an-anniversary-coin-quote">Request an Anniversary Coin Quote</h2>
            <p>Send Unique Pin your anniversary details, estimated quantity, artwork references and required arrival date. We can review the requirements for your custom firefighter challenge coins, help develop both sides and prepare a quotation based on the agreed specifications. <a href="/products/custom-challenge-coins">Explore custom challenge coin options</a>.</p>
          </div>
        </div>
      </div>
    </article>`;
