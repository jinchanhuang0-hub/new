import { existsSync } from "node:fs";
import { join } from "node:path";

export const dieStruckVsDieCastPinsImages = {
  hero: {
    src: "/assets/images/die-struck-vs-die-cast-pins.webp",
    width: 1600,
    height: 900,
    ratioClass: "blog-placeholder-16x9",
    className: "blog-article-hero-image blog-article-natural-image",
    alt: "Die struck and die cast custom pins compared side by side",
    caption: "The right forming process depends on the artwork structure, relief and finished shape.",
    placeholder: "Die Struck and Die Cast Pin Comparison",
  },
  flatVsRelief: {
    src: "/assets/images/flat-logo-vs-3d-relief-pin-design.webp",
    width: 1200,
    height: 800,
    ratioClass: "blog-placeholder-3x2",
    className: "blog-article-natural-image blog-image-3x2",
    alt: "Flat die struck logo pin compared with sculpted die cast relief",
    caption: "Flat metal levels and sculpted relief require different artwork planning.",
    placeholder: "Flat Logo and Sculpted Relief Comparison",
  },
  sampleReview: {
    src: "/assets/images/real-customer-pin-production-review.webp",
    width: 1200,
    height: 800,
    ratioClass: "blog-placeholder-3x2",
    className: "blog-article-natural-image blog-image-3x2",
    alt: "Real customer custom pin samples shown with production specifications",
    caption: "A real Unique Pin customer product shown with its production order, color references, attachments and packaging review.",
    placeholder: "Real Customer Pin Production Review",
  },
  moldFinishing: {
    src: "/assets/images/die-casting-mold-finishing.webp",
    width: 1200,
    height: 900,
    ratioClass: "blog-placeholder-4x3",
    className: "blog-article-natural-image blog-image-4x3 process-finishing-image",
    alt: "Worker hand-finishing a metal mold for custom pin production",
    caption: "Hand-finishing the metal mold before custom pin production.",
    placeholder: "Metal Mold Finishing",
  },
  burrRemoval: {
    src: "/assets/images/custom-pin-burr-removal.webp",
    width: 1200,
    height: 900,
    ratioClass: "blog-placeholder-4x3",
    className: "blog-article-natural-image blog-image-4x3 process-finishing-image",
    alt: "Worker manually removing burrs from cast custom pin bodies",
    caption: "Manual deburring removes excess metal from cast pin bodies before later finishing steps.",
    placeholder: "Custom Pin Burr Removal",
  },
};

const imageExists = (image) => {
  const filePath = join(process.cwd(), "public", ...image.src.split("/").filter(Boolean));
  return existsSync(filePath);
};

const renderConfiguredImage = (image, { priority = false } = {}) => {
  if (!imageExists(image)) {
    return String.raw`
            <figure class="blog-article-image blog-article-placeholder ${image.ratioClass}">
              <div class="blog-article-placeholder-box" role="img" aria-label="${image.alt}"><span>${image.placeholder}</span></div>
              <figcaption>${image.caption}</figcaption>
            </figure>`;
  }

  return String.raw`
            <figure class="blog-article-image ${image.className}">
              <img src="${image.src}" width="${image.width}" height="${image.height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" alt="${image.alt}">
              <figcaption>${image.caption}</figcaption>
            </figure>`;
};

export const dieStruckVsDieCastPinsCardMediaHtml = imageExists(dieStruckVsDieCastPinsImages.hero)
  ? `<img src="${dieStruckVsDieCastPinsImages.hero.src}" width="${dieStruckVsDieCastPinsImages.hero.width}" height="${dieStruckVsDieCastPinsImages.hero.height}" alt="${dieStruckVsDieCastPinsImages.hero.alt}">`
  : '<span class="blog-feature-placeholder" role="img" aria-label="Die struck and die cast custom pins image pending upload"><span>Die Struck vs Die Cast Pins</span></span>';

export const dieStruckVsDieCastPinsGuideArticleHtml = String.raw`
    <article id="die-struck-vs-die-cast-pins" class="section blog-article-section">
      <div class="blog-article-shell">
        <aside class="blog-article-toc" aria-label="Article contents">
          <strong>In This Guide</strong>
          <nav>
            <a href="#quick-answer-when-should-you-choose-each-process">Quick answer</a>
            <a href="#what-are-die-struck-pins">Die struck pins</a>
            <a href="#what-are-die-cast-pins">Die cast pins</a>
            <a href="#die-struck-vs-die-cast-pins-what-is-the-practical-difference">Practical differences</a>
            <a href="#which-process-fits-a-flat-logo">Flat logos</a>
            <a href="#when-does-dimensional-relief-support-the-design">Dimensional relief</a>
            <a href="#what-affects-the-quotation">Quotation factors</a>
            <a href="#frequently-asked-questions">FAQ</a>
            <a href="#compare-the-two-options-for-your-artwork">Compare your artwork</a>
          </nav>
        </aside>
        <div class="container blog-article blog-article-with-toc">
          <header class="blog-article-header">
            <a class="blog-back-link" href="/blog">Back to Blog</a>
            <h1>Die Struck vs Die Cast Pins: Which Process Fits Your Design?</h1>
            ${renderConfiguredImage(dieStruckVsDieCastPinsImages.hero, { priority: true })}
            <p>Choosing between die struck and die cast pins is mainly a question of structure. A flat company emblem with clean metal borders has different production requirements from a sculpted mascot with curved surfaces and open areas.</p>
            <p>The process also affects how the manufacturer prepares the tooling, interprets relief and positions the attachment. Before comparing prices, buyers need to make sure every quotation describes the same finished product.</p>
          </header>

          <div class="blog-article-main">
            <h2 id="quick-answer-when-should-you-choose-each-process">Quick Answer: When Should You Choose Each Process?</h2>
            <p>Choose <strong>die struck pins</strong> for relatively flat designs with crisp outlines and clearly separated raised and recessed areas. They are commonly considered for company logos, membership badges, service awards and formal emblems.</p>
            <p>Choose <strong>die cast pins</strong> when the artwork requires sculpted relief, gradual height changes, complex contours, internal openings or a thicker dimensional body.</p>
            <p>Neither process is automatically better or less expensive. The correct choice depends on the artwork, size, relief, metal specification, color treatment, quantity and intended use. A manufacturer should review the actual design before confirming the production method.</p>

            <h2 id="what-are-die-struck-pins">What Are Die Struck Pins?</h2>
            <p>Die striking forms a design by pressing a custom die into a metal blank. The pressure creates defined raised and recessed areas based on the approved production artwork.</p>
            <p>The process is well suited to designs with controlled 2D levels and clear metal divisions. A pin can remain uncolored to emphasize polished and textured metal, or suitable recessed areas can be filled with enamel.</p>
            <p>For example, a years-of-service pin may use a polished company emblem above a textured recessed background. A school badge may combine raised metal outlines with several separate color areas.</p>
            <p>The term “die struck” does not identify the complete specification. Buyers should still confirm the base metal, finished thickness, plating, surface texture, color treatment and attachment.</p>

            <h2 id="what-are-die-cast-pins">What Are Die Cast Pins?</h2>
            <p>Die casting forms the pin body by forcing or injecting molten alloy into a prepared metal mold, then trimming and finishing the cooled casting. A <a href="https://www.govinfo.gov/content/pkg/GOVPUB-T28-PURL-gpo32469/pdf/GOVPUB-T28-PURL-gpo32469.pdf" target="_blank" rel="noopener noreferrer">U.S. government technical review of die casting</a> likewise describes molten metal being rapidly forced into a metal mold and notes that some small multi-cavity castings require trimming. Zinc alloy is commonly used for this type of custom metal product because it can accommodate complex shapes and dimensional surfaces.</p>
            <p>This process may be appropriate when the artwork includes curved relief, several depth transitions, irregular contours or some internal openings. It is often considered for sculpted mascots, architectural details and dimensional commemorative designs. Complex open areas are not automatically achievable through the mold alone and may still require secondary trimming or other processing, depending on the artwork, size, thickness and construction.</p>
            <div class="blog-article-image-pair process-finishing-image-pair" aria-label="Mold finishing and burr removal during custom pin production">
              ${renderConfiguredImage(dieStruckVsDieCastPinsImages.moldFinishing)}
              ${renderConfiguredImage(dieStruckVsDieCastPinsImages.burrRemoval)}
            </div>
            <p>A die cast pin does not have to be fully three-dimensional. The mold can also produce defined flat levels or combine 2D areas with selected sculpted details. The approved drawing should identify which areas are raised, recessed, curved, textured or polished.</p>

            <h2 id="die-struck-vs-die-cast-pins-what-is-the-practical-difference">Die Struck vs Die Cast Pins: What Is the Practical Difference?</h2>
            <div class="blog-table-wrap" role="region" aria-label="Die struck and die cast pin process comparison" tabindex="0">
              <table class="blog-table">
                <thead><tr><th scope="col">Decision point</th><th scope="col">Die struck pins</th><th scope="col">Die cast pins</th></tr></thead>
                <tbody>
                  <tr><td>Metal formation</td><td>A custom die presses the design into a metal blank</td><td>Molten metal fills a prepared mold</td></tr>
                  <tr><td>Typical design structure</td><td>Clear 2D raised and recessed areas</td><td>Complex contours and dimensional relief</td></tr>
                  <tr><td>Surface character</td><td>Crisp metal borders and controlled levels</td><td>Curves and gradual changes in depth</td></tr>
                  <tr><td>Internal openings</td><td>Possible when the construction and tooling allow</td><td>It may provide more flexibility for complex contours and some open-area designs, although the final construction may still require secondary trimming or other processing</td></tr>
                  <tr><td>Color treatment</td><td>Suitable recessed areas may receive enamel</td><td>Suitable areas may also receive enamel</td></tr>
                  <tr><td>Common project types</td><td>Company emblems, membership pins and recognition badges</td><td>Sculpted mascots, dimensional symbols and complex shapes</td></tr>
                  <tr><td>Important quote details</td><td>Metal, thickness, finish and color areas</td><td>Alloy, relief, thickness, weight and back structure</td></tr>
                </tbody>
              </table>
            </div>
            <p>The table is a selection guide rather than a production guarantee. A supplier still needs to review the artwork because size and detail can change what is practical.</p>

            <h2 id="which-process-fits-a-flat-logo">Which Process Fits a Flat Logo?</h2>
            <p>Start by separating the essential parts of the logo from secondary details. A design made from clear outlines, solid shapes and one or two metal levels may be a suitable candidate for die striking.</p>
            <p>Check the artwork at its intended finished size. Fine lettering, narrow gaps and small isolated color areas may look clear on a monitor but become difficult to read or inspect on a physical pin.</p>
            <p>If details become unclear, the available options may include:</p>
            <ul class="blog-list">
              <li>Increasing the finished size</li>
              <li>Removing secondary wording</li>
              <li>Widening important metal divisions</li>
              <li>Reorganizing the layout</li>
              <li>Using printing for details that are unsuitable for enamel</li>
              <li>Comparing a different construction method</li>
            </ul>
            <p>The best adjustment depends on which details must remain. Buyers should identify protected brand elements before the artwork is converted into a production proof.</p>
            ${renderConfiguredImage(dieStruckVsDieCastPinsImages.flatVsRelief)}

            <h2 id="when-does-dimensional-relief-support-the-design">When Does Dimensional Relief Support the Design?</h2>
            <p>Die casting becomes relevant when depth carries part of the design. A rounded face, curved animal figure or layered architectural feature cannot always be represented clearly with flat metal levels.</p>
            <p>Ask the supplier to label the relief rather than describing the complete design simply as “3D.” The proof should show:</p>
            <ul class="blog-list">
              <li>The highest and lowest areas</li>
              <li>Gradual and stepped transitions</li>
              <li>Polished and textured surfaces</li>
              <li>Recessed cavities</li>
              <li>Open sections</li>
              <li>Areas intended for enamel or printing</li>
            </ul>
            <p>More relief does not automatically improve a design. A small pin with excessive depth may lose clarity or become unnecessarily heavy. In some cases, a simpler 2D interpretation communicates the artwork more effectively.</p>

            <h2 id="a-practical-example-one-anniversary-pin-two-design-directions">Illustrative Example: One Anniversary Pin, Two Design Directions</h2>
            <p>Consider a company preparing an anniversary pin for employees and business partners.</p>
            <p>The first concept uses a flat anniversary number, the company emblem and a recessed background. The design depends on crisp edges and contrast between polished and textured metal. A die struck construction may be a suitable starting point.</p>
            <p>The second concept turns the anniversary number into a curved centerpiece surrounded by a dimensional ribbon. It includes several depth transitions and an open section between the ribbon and the central emblem. Die casting may provide more flexibility for this structure.</p>
            <p>These two versions should not be compared by unit price alone. They represent different products. The buyer should first decide whether the project needs a formal flat emblem or a more sculpted presentation piece.</p>
            <p>A useful quotation would specify the dimensions, thickness, metal or alloy, relief treatment, finish, attachment, packaging and quantity for each version.</p>

            <h2 id="does-enamel-determine-the-forming-process">Does Enamel Determine the Forming Process?</h2>
            <p>No. Die striking and die casting describe how the metal body is formed. <a href="/blog/soft-enamel-vs-hard-enamel-pins">Soft enamel and hard enamel</a> describe different approaches to filling and finishing suitable color areas.</p>
            <p>A die struck pin can remain all metal or incorporate enamel. A die cast design may also include color if its structure provides practical filling areas.</p>
            <p>This distinction matters because buyers sometimes ask whether they should choose “die struck, die cast or soft enamel.” These are not three directly comparable production categories.</p>
            <p>The manufacturer should first determine how to form the metal body. The color and surface finish can then be selected according to the design, required appearance and manufacturing limitations.</p>

            <h2 id="how-do-size-thickness-and-attachments-affect-the-decision">How Do Size, Thickness and Attachments Affect the Decision?</h2>
            <p>Size determines how much room is available for text, metal borders, enamel areas and relief. Increasing the size can improve detail visibility, but it also changes material use, weight and presentation.</p>
            <p>Thickness should support the intended structure. A dimensional design may require more depth than a flat emblem, but adding thickness without a design reason may increase weight and cost without improving the result.</p>
            <p><a href="/blog/lapel-pin-attachments-guide">Attachment placement</a> should be reviewed on the back view of the proof. A compact, balanced pin may use one post and clutch. A wide, heavy or direction-sensitive design may need two posts to reduce rotation, depending on its dimensions and intended fabric.</p>
            <p>Packaging must accommodate the complete assembly. A backing card or box needs enough space for the pin body, posts and clutches. Buyers planning retail packaging should approve the assembled presentation rather than reviewing the pin and card independently.</p>

            <h2 id="what-affects-the-quotation">What Affects the Quotation?</h2>
            <p>The forming process is only one cost factor. A useful quotation should state the specifications behind the price.</p>
            <p>Review the following items:</p>
            <ul class="blog-list">
              <li>Finished width and height</li>
              <li>Thickness and relief structure</li>
              <li>Proposed metal or alloy</li>
              <li>Tooling requirements</li>
              <li>Number of enamel colors</li>
              <li>Plating and surface finish</li>
              <li>Quantity for each design version</li>
              <li>Number and position of pin posts</li>
              <li>Selected clutches or other attachments</li>
              <li>Back stamp, engraving or printing</li>
              <li>Individual packaging and assembly</li>
              <li>Sampling requirements</li>
              <li>Production and delivery schedule</li>
            </ul>
            <p>Small orders may have a higher effective unit cost because artwork preparation, tooling and production setup still take place. Compare the complete project cost and included services rather than relying on the unit price alone.</p>
            ${renderConfiguredImage(dieStruckVsDieCastPinsImages.sampleReview)}

            <h2 id="what-should-you-send-for-a-process-recommendation">What Should You Send for a Process Recommendation?</h2>
            <p>Send the clearest artwork available, preferably a vector file when possible. AI, EPS, PDF and SVG files are useful, while a high-resolution PNG or JPG can still help with an initial review.</p>
            <p>Include:</p>
            <ul class="blog-list">
              <li>Target dimensions</li>
              <li>Quantity for each design</li>
              <li>Intended use</li>
              <li>Preferred finish or visual direction</li>
              <li>Required colors</li>
              <li>Attachment preference</li>
              <li>Packaging requirements</li>
              <li>Delivery destination</li>
              <li>Required arrival date</li>
              <li>Details that cannot be simplified or removed</li>
            </ul>
            <p>If you have not selected a process, explain the result you want instead of choosing one based only on its name. A supplier can then assess whether the design is better represented by clear 2D metal levels, sculpted relief or a combination of processes.</p>

            <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
            <div class="blog-faq">
              <details open><summary><h3>Is die struck the same as soft enamel?</h3></summary><p>No. Die striking forms the metal body. Soft enamel is a color-filling method in which the colored areas usually remain below the raised metal borders. A die struck pin may use soft enamel, another suitable finish or no color.</p></details>
              <details><summary><h3>Are die cast pins always 3D?</h3></summary><p>No. Die casting can produce sculpted relief, but it can also create flatter levels or combine 2D and 3D areas. The mold design and approved proof determine the finished structure.</p></details>
              <details><summary><h3>Is die striking always less expensive than die casting?</h3></summary><p>No. The final cost depends on dimensions, thickness, material, tooling, relief, quantity, plating, color, attachments and packaging. Prices should only be compared when the quoted specifications are equivalent.</p></details>
              <details><summary><h3>Can the same design be made using either process?</h3></summary><p>Some artwork can be adapted to both processes, but the finished structure may differ. A manufacturer should review the actual design and explain what would change under each option.</p></details>
              <details><summary><h3>Should I approve the digital proof or request a physical sample?</h3></summary><p>A digital proof is necessary for confirming dimensions, layout, colors, finish and attachment placement. A physical sample may be useful when weight, relief, surface feel, attachment performance or retail presentation affects approval. Sampling requirements should be discussed before the production schedule is confirmed.</p></details>
            </div>

            <p>Compare available materials, finishes and attachments on our <a href="/products/custom-enamel-pins">custom lapel pins</a> product page.</p>

            <section class="blog-article-cta blog-inquiry-cta" aria-labelledby="compare-the-two-options-for-your-artwork">
              <div class="blog-cta-copy">
                <h2 id="compare-the-two-options-for-your-artwork" class="blog-cta-title">Compare the Two Options for Your Artwork</h2>
                <p>If your design could work as either a flat metal emblem or a dimensional pin, send the artwork with your target size, quantity, use and packaging requirements.</p>
                <p>Unique Pin can review the artwork and outline the practical differences between a die struck and die cast version. The comparison can identify the proposed structure, finish and attachment for each option before you approve a production proof or compare quotations.</p>
              </div>
              <div class="blog-cta-actions"><a class="btn btn-yellow" href="/contact">Request a Pin Process Recommendation</a></div>
            </section>
          </div>
        </div>
      </div>
    </article>`;
