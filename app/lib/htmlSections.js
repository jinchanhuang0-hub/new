import {
  CATEGORY_PRODUCTS_PAGE_SIZE,
  getProductCountForCategory,
  getProductPageCount,
  renderServerProductPagination,
  replaceProductTypeSectionCards,
} from "./productCards";
import { productCategorySidebarHtml } from "../components/productCategoryNav";
import {
  homeProductLandingPagesBySlug,
  renderHomeProductLandingRowsSection,
} from "../product-category/categoryLandingData";
import { getCategoryPath } from "./siteRoutes";

const getPageShell = (html) => {
  const mainStart = html.indexOf("<main");
  const mainOpenEnd = html.indexOf(">", mainStart) + 1;
  const mainEnd = html.lastIndexOf("</main>");

  return {
    beforeMain: html.slice(0, mainStart),
    mainOpen: html.slice(mainStart, mainOpenEnd),
    afterMain: html.slice(mainEnd + "</main>".length),
  };
};

const categorySeoContent = {
  pins: String.raw`
          <div class="category-seo-panel category-seo-panel-featured" aria-label="Custom enamel pins manufacturer information">
            <div class="category-seo-hero">
              <div class="category-seo-intro">
                <h2>Custom Enamel Pins for Brand, Event and Retail Orders</h2>
                <p>Unique Pin manufactures custom enamel pins for overseas buyers who need reliable artwork support, stable production and clear export communication. Compare soft enamel, hard enamel, die struck and printed pin options before requesting a quote.</p>
                <div class="category-seo-actions">
                  <a class="category-seo-primary" href="/contact">Request a Pin Quote</a>
                  <a class="category-seo-secondary" href="/blog/soft-enamel-vs-hard-enamel-pins">Compare Finishes</a>
                </div>
              </div>
              <div class="category-quote-card" aria-label="Quote preparation checklist">
                <h3>Send These for a Fast Quote</h3>
                <ul class="category-seo-list">
                  <li>Logo or reference artwork</li>
                  <li>Target size, quantity and deadline</li>
                  <li>Preferred finish, backing and packaging</li>
                  <li>Delivery country or shipping method</li>
                </ul>
              </div>
            </div>
            <div class="pin-style-grid" aria-label="Enamel pin style guide">
              <article>
                <span class="pin-style-icon pin-style-icon-soft" aria-hidden="true"></span>
                <h3>Soft Enamel</h3>
                <p>Best for bold color blocks, raised metal outlines, event giveaways and flexible promotional budgets.</p>
              </article>
              <article>
                <span class="pin-style-icon pin-style-icon-hard" aria-hidden="true"></span>
                <h3>Hard Enamel</h3>
                <p>Best for smooth premium surfaces, retail collections, membership pins and corporate gifts.</p>
              </article>
              <article>
                <span class="pin-style-icon pin-style-icon-print" aria-hidden="true"></span>
                <h3>Printed Pins</h3>
                <p>Best for gradients, photos, QR codes and fine artwork that cannot be separated by metal lines.</p>
              </article>
              <article>
                <span class="pin-style-icon pin-style-icon-metal" aria-hidden="true"></span>
                <h3>Die Struck</h3>
                <p>Best for classic metal relief, formal badges, award pins and designs without enamel color.</p>
              </article>
            </div>
            <div class="category-seo-split">
              <div class="category-seo-copy">
                <h3>Materials, Finish and Price Factors</h3>
                <p>Every order starts with a production-ready art proof. Our team reviews line width, enamel color areas, plating choices, back attachments, packaging and quantity before mold making, so the finished pin matches the intended design and budget.</p>
                <p>Zinc alloy is useful for complex shapes, deeper relief and 3D effects. Iron can be economical for simpler flat designs. Brass or copper may be selected for premium projects. Plating, mold complexity, pin size, number of colors, attachment type, packaging and quantity all influence the final quotation.</p>
              </div>
              <div class="category-seo-checks">
                <h3>Production and QC</h3>
                <ol>
                  <li><strong>Artwork review</strong><span>Line width, small text, color separation and Pantone references.</span></li>
                  <li><strong>Pre-production confirmation</strong><span>Mold, plating, enamel colors, back attachment and sample approval.</span></li>
                  <li><strong>Final inspection</strong><span>Plating surface, enamel filling, scratches, pin backs, quantity and carton labels.</span></li>
                </ol>
              </div>
            </div>
            <div class="category-guide-strip">
              <strong>Useful buyer guides</strong>
              <a href="/blog/soft-enamel-vs-hard-enamel-pins">Soft vs Hard Enamel</a>
              <a href="/blog/how-to-make-your-own-custom-lapel-pins">How to Make Lapel Pins</a>
              <a href="/blog/custom-enamel-pins-no-moq-guide">No MOQ Pin Orders</a>
            </div>
          </div>`,
  coins: String.raw`
          <div class="category-seo-panel" aria-label="Custom challenge coins manufacturer information">
            <h2>Custom Challenge Coins for Recognition, Teams and Collectors</h2>
            <p>Our custom challenge coins are built for organizations that need a durable recognition product with weight, detail and long-term keepsake value. The collection below introduces common coin styles such as 3D firefighter coins, anniversary coins, route map coins and antique military squadron coins.</p>
            <p>Challenge coin projects often require double-sided artwork, antique plating, 3D relief, edge text, enamel colors, laser engraving, numbering and presentation packaging. Unique Pin reviews artwork before production to confirm whether the design is better suited to die casting, stamping, 2D relief or 3D relief. This helps buyers avoid unclear small text, weak edges or color areas that are difficult to fill consistently.</p>
            <p>For a clearer quotation, prepare the coin diameter, thickness, quantity, front and back artwork, preferred plating and packaging style. If your project sits between a coin and an award item, compare the use cases in our <a href="/blog/custom-medals-vs-challenge-coins">medals vs challenge coins guide</a>. You can also <a href="/contact">request a quote</a> with a rough sketch, and our team will advise whether a 2D or 3D coin structure is more practical.</p>
            <h3>Common Challenge Coin Uses</h3>
            <ul class="category-seo-list">
              <li>Military units, police departments, firefighter teams, clubs and corporate recognition programs.</li>
              <li>Anniversary events, service awards, memorial gifts, membership coins and collector releases.</li>
              <li>Velvet pouch, acrylic capsule, paper box, wooden box and retail-ready packaging options.</li>
            </ul>
            <div class="category-guide-strip">
              <strong>Useful buyer guides</strong>
              <a href="/blog/how-custom-challenge-coins-are-made">challenge coin manufacturing process</a>
              <a href="/blog/military-challenge-coin-traditions">military challenge coin traditions</a>
              <a href="/blog/custom-medals-vs-challenge-coins">medals vs challenge coins</a>
            </div>
          </div>`,
  medals: String.raw`
          <div class="category-seo-panel" aria-label="Custom medals manufacturer information">
            <h2>Custom Medals for Sports, Awards and Event Programs</h2>
            <p>Unique Pin produces custom medals for competitions, ceremonies, schools, sports clubs, charity events, company awards and branded recognition programs. The medal range below gives buyers practical examples such as basketball medals, race medals, 3D award medals and marathon medals with ribbon.</p>
            <p>A successful medal order depends on the event purpose, medal size, thickness, ribbon width, plating color, artwork depth and packaging method. We help buyers review whether the artwork should use 2D relief, 3D relief, enamel color, printing, cutout shape or antique finishing. For event orders, production planning also includes sample approval, ribbon assembly, quantity control, carton labeling and shipment timing.</p>
            <p>Medal buyers usually need consistent color, clear ranking details and on-time delivery before the event date, so early artwork confirmation matters. If you are comparing recognition products, read our <a href="/blog/custom-medals-vs-challenge-coins">custom medals vs challenge coins guide</a> before finalizing the format. Share your event date, ribbon artwork, quantity and delivery country through the <a href="/contact">quote form</a> for a practical production plan.</p>
            <h3>Medal Customization Choices</h3>
            <ul class="category-seo-list">
              <li>Sports medals, award medals, finisher medals, school medals, corporate medals and commemorative medals.</li>
              <li>Custom ribbon printing, ribbon assembly, event logo, year, ranking, sponsor marks and mascot artwork.</li>
              <li>Gold, silver, bronze, antique finish, dual plating, enamel filling, printing and gift packaging.</li>
            </ul>
          </div>`,
  keychains: String.raw`
          <div class="category-seo-panel" aria-label="Custom metal keychains manufacturer information">
            <h2>Custom Metal Keychains for Brand, Retail and Souvenir Programs</h2>
            <p>Custom metal keychains are compact promotional and retail products for brands, tourism programs, schools, clubs, events and gift campaigns. The product range below includes enamel keychains, leather strap keychains, bottle opener keychains, spinner keychains and shaped metal keychains.</p>
            <p>Before production, buyers should confirm the keychain body size, finished length, material, thickness reference, artwork complexity, attachment type and packaging. If material selection is still open, compare <a href="/blog/custom-metal-keychain-materials">custom metal keychain materials</a>. For measurement, thickness and hardware decisions, use the <a href="/blog/custom-metal-keychain-size-attachment-guide">custom metal keychain size, thickness and attachments</a> guide.</p>
            <p>Send the artwork, target quantity, intended use and preferred attachment through the <a href="/contact">quote form</a>. Our team can review whether the design is better suited to zinc alloy, iron, stainless steel, leather, PVC or another construction before preparing a production quote.</p>
            <h3>Keychain Customization Choices</h3>
            <ul class="category-seo-list">
              <li>Split rings, chains, swivel hooks, lobster clasps, leather straps and bottle opener fittings.</li>
              <li>Enamel color, printing, engraving, antique plating, polished finishes and custom shapes.</li>
              <li>OPP bags, backing cards, hang cards, velvet pouches, gift boxes and retail-ready packaging.</li>
            </ul>
          </div>`,
  buckles: String.raw`
          <div class="category-seo-panel" aria-label="Custom belt buckles manufacturer information">
            <h2>Custom Belt Buckles for Clubs, Brands and Western Merchandise</h2>
            <p>Unique Pin manufactures custom belt buckles for Western wear brands, clubs, teams, event merchandise, fashion accessories, promotional gifts and retail collections. Buyers can compare specific buckle examples such as skull relief buckles, oval logo buckles, antique silver buckles and enamel club buckles.</p>
            <p>Belt buckle projects often need a stronger metal body, clear relief detail, durable plating and a back fitting that matches the belt width. We review artwork for shape, raised details, text readability, enamel areas, plating color and packaging requirements before mold production. Buyers can choose antique finishes for a rugged look, bright plating for brand merchandise or enamel color for club and team identity.</p>
            <p>Because buckles are larger and heavier than most small metal gifts, thickness, back hardware and carton protection should be confirmed early. Our <a href="/blog/how-to-design-a-custom-belt-buckle">custom belt buckle design guide</a> explains how to review strap fit, relief and back hardware before finalizing a quote. The <a href="/blog/custom-metal-crafts-guide">custom metal crafts guide</a> can help buyers compare buckle production with other cast metal products. To start a project, send belt width, artwork and target finish through the <a href="/contact">quote form</a>, and we will review the safest mold and plating approach.</p>
            <h3>Buckle Styles and Finishes</h3>
            <ul class="category-seo-list">
              <li>Western belt buckles, logo belt buckles, relief buckles, enamel buckles and award buckles.</li>
              <li>Antique gold, antique silver, polished silver, black nickel, bronze, dual plating and enamel color.</li>
              <li>Custom shape, 2D relief, 3D relief, retail packaging and export carton protection.</li>
            </ul>
          </div>`,
  "golf-accessories": String.raw`
          <div class="category-seo-panel" aria-label="Custom golf accessories manufacturer information">
            <h2>Custom Golf Accessories for Tournaments, Clubs and Resort Gifts</h2>
            <p>Custom golf accessories are useful for tournaments, club shops, resort gifts, sponsor promotions, corporate golf days and premium retail sets. This range covers custom golf ball markers, hat clips, divot tools and packaged golf accessory sets.</p>
            <p>Unique Pin can produce golf ball markers, hat clip markers, divot tools and gift sets with custom logos, enamel colors, antique plating, magnetic parts and presentation packaging. We help buyers choose a practical structure based on the use case: a simple ball marker for event giveaways, a hat clip marker for club shops or a divot tool set for higher-value corporate gifts.</p>
            <p>Golf projects often involve sponsor marks, tournament dates and presentation packaging, so the artwork layout should leave enough space for readable logos. Buyers comparing sizes, materials, finishes and packaging can use our <a href="/blog/how-to-choose-personalized-golf-ball-markers">personalized golf ball marker buyer's guide</a>. For a broader gift campaign, compare golf accessories with coins, keychains and bottle openers in the <a href="/blog/custom-metal-crafts-guide">custom metal crafts guide</a>. Share the event date, quantity and logo files through the <a href="/contact">quote form</a> for structure and packaging suggestions.</p>
            <h3>Golf Accessory Options</h3>
            <ul class="category-seo-list">
              <li>Golf ball markers, magnetic hat clips, divot tools, coin markers and packaged golf gift sets.</li>
              <li>Custom logo, event name, sponsor artwork, enamel color, antique finish and retail packaging.</li>
              <li>Suitable for tournaments, resorts, clubs, membership gifts and promotional campaigns.</li>
            </ul>
          </div>`,
  "bottle-openers": String.raw`
          <div class="category-seo-panel" aria-label="Custom bottle openers manufacturer information">
            <h2>Custom Bottle Openers for Bars, Events and Promotional Gifts</h2>
            <p>Custom bottle openers combine practical use with brand visibility, making them suitable for bars, breweries, restaurants, event merchandise, retail gift sets and promotional campaigns. Buyers can compare specific examples such as playing card openers and keychain bottle openers.</p>
            <p>We manufacture metal bottle openers in coin shapes, keychain formats, custom silhouettes and logo-based designs. Buyers can choose die casting, stamping, enamel filling, printing, antique plating, epoxy coating, magnets, key rings or retail packaging. Before production, our team checks whether the opener edge, thickness and shape are suitable for real use, not just for appearance.</p>
            <p>For functional products, appearance is only one part of the review. We also check grip area, opener cutout position, metal strength and whether the design works as a keychain or fridge magnet. Buyers planning brewery, bar or event merchandise can use our <a href="/blog/custom-metal-crafts-guide">custom metal crafts guide</a> to compare opener styles with other promotional gifts, then send artwork through the <a href="/contact">quote form</a>.</p>
            <h3>Bottle Opener Customization</h3>
            <ul class="category-seo-list">
              <li>Metal bottle openers, keychain bottle openers, coin openers, magnetic openers and shaped openers.</li>
              <li>Logo artwork, event text, bar themes, brewery branding, enamel color and antique finishes.</li>
              <li>Poly bag, backing card, gift box and retail-ready packaging for promotional programs.</li>
            </ul>
          </div>`,
  "cufflinks-tieclips": String.raw`
          <div class="category-seo-panel" aria-label="Custom cufflinks and tie clips manufacturer information">
            <h2>Custom Cufflinks and Tie Clips for Corporate and Formal Gifts</h2>
            <p>Custom cufflinks and tie clips are compact formal accessories for corporate gifts, uniforms, clubs, retail menswear, executive sets and branded event merchandise. The range includes examples such as carbon fiber cufflinks, color plated tie clips and logo cufflinks.</p>
            <p>Because these products are worn close to formal clothing, surface finish and small details matter. Unique Pin supports stainless steel, zinc alloy and other metal options with polishing, plating, inlay, enamel color, engraving and logo customization. We review artwork size, edge finish, clasp structure, tie clip tension and packaging presentation before shipment.</p>
            <p>Formal gift orders usually need a cleaner finish and stronger packaging than standard giveaways, especially for corporate sets or retail collections. If you are comparing gift options, our <a href="/blog/custom-metal-crafts-guide">custom metal crafts guide</a> explains how small metal accessories fit into broader merchandise programs. Send logo files, preferred finish and set quantity through the <a href="/contact">quote form</a> for a matched cufflink or tie clip solution.</p>
            <h3>Formal Gift Options</h3>
            <ul class="category-seo-list">
              <li>Custom cufflinks, logo cufflinks, tie clips, formal gift sets and retail accessories.</li>
              <li>Polished silver, black finish, color plating, carbon fiber style, enamel detail and engraved logos.</li>
              <li>Gift boxes, paired sets, corporate packaging and OEM/ODM production support.</li>
            </ul>
          </div>`,
  magnets: String.raw`
          <div class="category-seo-panel" aria-label="Custom fridge magnets manufacturer information">
            <h2>Custom Fridge Magnets for Tourism, City Gifts and Retail Souvenirs</h2>
            <p>Custom fridge magnets are popular for tourism souvenirs, museum shops, city promotions, event merchandise, children's gifts and retail gift programs. The range below includes individual sample styles such as ornate building magnets, 3D metal magnets, soft PVC magnets and city landmark souvenir magnets.</p>
            <p>We manufacture fridge magnets in metal, enamel, 3D relief, printed, soft PVC and souvenir formats. Buyers can send city landmarks, mascots, logos, attraction artwork or event designs, and our team will recommend a practical structure, size, magnet strength, plating, color process and packaging method. Strong quality control is especially important for tourist retail orders where consistent color and clean edges affect shelf appeal.</p>
            <p>For souvenir programs, magnet strength, backing card size and shelf display method are just as important as the front artwork. Buyers can compare fridge magnets with other small metal gifts in our <a href="/blog/custom-metal-crafts-guide">custom metal crafts guide</a>. Share the landmark artwork, target size, quantity and packaging plan through the <a href="/contact">quote form</a> so we can recommend a retail-ready format.</p>
            <h3>Fridge Magnet Formats</h3>
            <ul class="category-seo-list">
              <li>Metal fridge magnets, enamel magnets, 3D magnets, soft PVC magnets and souvenir magnets.</li>
              <li>Landmark artwork, mascot designs, city gifts, museum retail, attraction souvenirs and event merchandise.</li>
              <li>Custom backing cards, poly bags, retail packaging and export carton protection.</li>
            </ul>
          </div>`,
};

const productCategoryHeroBackgrounds = {
  pins: "assets/images/home-category-lapel-pins-banner.png",
  medals: "assets/images/home-category-medals-banner.png",
  coins: "assets/images/home-category-challenge-coins-banner.png",
  keychains: "assets/images/home-category-keychains-banner.png",
  buckles: "assets/images/home-category-belt-buckles-banner.png",
  "golf-accessories": "assets/images/home-category-golf-ball-markers-banner.png",
  "bottle-openers": "assets/images/custom-bottle-openers-opener.png",
  "cufflinks-tieclips": "assets/images/custom-cufflinks-tie-clips-hero.png",
  magnets: "assets/images/custom-fridge-magnets-hero.png",
  patchs: "assets/images/custom-patches-hero.png",
  others: "assets/images/custom-others-hero.png",
};

const productCategoryHeroImageDimensions = {
  keychains: { width: 1913, height: 599 },
};

const categoryStyleGuideSourceByKey = {
  pins: {
    sourceSlug: "custom-lapel-pins",
    heading: "Lapel Pin Types & Techniques",
    id: "lapel-pin-types",
  },
  medals: {
    sourceSlug: "custom-medals",
    heading: "Custom Medal Types",
    id: "medal-types",
  },
  coins: {
    sourceSlug: "custom-challenge-coins",
    heading: "Challenge Coin Types",
    id: "challenge-coin-types",
  },
  keychains: {
    sourceSlug: "custom-keychains",
    heading: "Custom Keychain Types",
    id: "keychain-types",
  },
  buckles: {
    sourceSlug: "custom-belt-buckles",
    heading: "Custom Belt Buckle Types",
    id: "belt-buckle-types",
  },
  "golf-accessories": {
    sourceSlug: "custom-golf-ball-markers",
    heading: "Custom Golf Ball Marker Types",
    id: "golf-ball-marker-types",
  },
};

const renderCategoryStyleGuideSection = (categoryKey) => {
  const guide = categoryStyleGuideSourceByKey[categoryKey];
  const sourcePage = homeProductLandingPagesBySlug[guide?.sourceSlug];
  if (!sourcePage?.rows?.length) return "";

  return renderHomeProductLandingRowsSection(sourcePage, {
    includeBackLink: false,
    rowHeadingTag: "h3",
    rowsHeading: guide.heading,
    rowsHeadingId: guide.id,
    sectionClass: "product-category-style-guide",
  });
};

const addServerPaginationToCategorySection = (
  section,
  { basePath, currentPage, pageCount },
) =>
  section
    .replace(
      /<div class="product-type-grid([^"]*)">/,
      '<div class="product-type-grid$1" data-server-paginated="true">',
    )
    .replace(
      /(\s*<\/div>)(\s*<\/div>\s*<\/section>)$/,
      `$1
${renderServerProductPagination({
  basePath,
  currentPage,
  pageCount,
})}$2`,
    );

const buildProductCategoryHero = (section, categoryKey, categoryLabel) => {
  if (!Object.hasOwn(productCategoryHeroBackgrounds, categoryKey)) {
    return {
      hero: "",
      section,
    };
  }

  const heroBackground = productCategoryHeroBackgrounds[categoryKey];
  const heroImageDimensions = productCategoryHeroImageDimensions[categoryKey];
  const head = section.match(/\s*<div class="product-type-head">[\s\S]*?<\/div>/)?.[0] || "";
  if (!head) {
    return {
      hero: "",
      section,
    };
  }

  const cleanedSection = section.replace(head, "");

  return {
    hero: String.raw`
    <section class="product-type-hero-section has-product-hero-bg" data-product-hero="${categoryKey}">
      ${heroBackground ? `<picture><source media="(max-width: 767px)" srcset="/_next/image?url=${encodeURIComponent(heroBackground.startsWith("/") ? heroBackground : `/${heroBackground}`)}&w=828&q=72"><img class="product-type-hero-bg" src="${heroBackground}"${heroImageDimensions ? ` width="${heroImageDimensions.width}" height="${heroImageDimensions.height}"` : ""} alt="${categoryLabel} banner"></picture>` : ""}
      <div class="container product-type-hero-inner">
${head.trim()}
      </div>
    </section>`,
    section: cleanedSection,
  };
};

const productCategoryInlineNavPattern =
  /\s*<div class="products-category-section products-category-section-inline">\s*<nav class="mega products-category-nav" aria-label="Product categories">[\s\S]*?<\/nav>\s*<\/div>/;

const addProductListLayoutToCategorySection = (section, categoryKey) =>
  section
    .replace(
      productCategoryInlineNavPattern,
      `
        <div class="products-layout">
${productCategorySidebarHtml({ active: categoryKey, mode: "links" })}
          <div class="products-list-main">`,
    )
    .replace(
      /(\s*<\/div>\s*<\/section>)$/,
      `
          </div>
        </div>$1`,
    );

export const buildCategoryHtml = (html, categoryKey, categoryLabel, options = {}) => {
  const shell = getPageShell(html);
  const pageSize = options.pageSize || CATEGORY_PRODUCTS_PAGE_SIZE;
  const pageCount = getProductPageCount(getProductCountForCategory(categoryKey), pageSize);
  const currentPage = Math.min(Math.max(1, Number(options.page) || 1), pageCount);
  const sectionPattern = new RegExp(
    `<section class="product-type-section" data-product-content="${categoryKey}"(?: hidden)?>[\\s\\S]*?<\\/section>`,
  );
  const section = addServerPaginationToCategorySection(replaceProductTypeSectionCards((
    html.match(sectionPattern)?.[0]?.replace(/\s+hidden(?=[\s>])/i, "") || ""
  ), categoryKey, { page: currentPage, pageSize }), {
    basePath: getCategoryPath(categoryKey),
    currentPage,
    pageCount,
  });
  const categoryHero = buildProductCategoryHero(section, categoryKey, categoryLabel);
  const categorySection = addProductListLayoutToCategorySection(categoryHero.section, categoryKey);
  const styleGuideSection = renderCategoryStyleGuideSection(categoryKey);
  const seoPanelSection = ["coins", "keychains"].includes(categoryKey)
    ? categorySeoContent[categoryKey] || ""
    : "";

  return `${shell.beforeMain}<main class="product-types-page" id="custom-details">${categoryHero.hero}${categorySection}${styleGuideSection}${seoPanelSection}</main>${shell.afterMain}`;
};

const formatArticleDate = (date) => {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${monthNames[Number(month) - 1] || month} ${Number(day)}, ${year}`;
};

export const normalizeBlogArticleLinks = (html) =>
  html.replace(/href="\/blog\/([a-z0-9-]+)#\1"/g, 'href="/blog/$1"');

const blogImageWidths = [640, 750, 828, 1080, 1200, 1600];
const blogCardImageSizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 77px) / 2), 405px";
const blogArticleImageSizes = "(max-width: 767px) 100vw, (max-width: 1200px) calc(100vw - 48px), 1040px";

const getHtmlAttr = (attrs, name) => {
  const match = attrs.match(new RegExp(`\\s${name}=(["'])(.*?)\\1`, "i"));
  return match?.[2] || "";
};

const setHtmlAttr = (attrs, name, value) => {
  const safeValue = String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const pattern = new RegExp(`\\s${name}=(["'])(.*?)\\1`, "i");

  if (pattern.test(attrs)) {
    return attrs.replace(pattern, ` ${name}="${safeValue}"`);
  }

  return `${attrs} ${name}="${safeValue}"`;
};

const normalizeBlogImageSrc = (src) => {
  if (src.startsWith("assets/images/")) return `/${src}`;
  return src;
};

const buildBlogImageSrcset = (src, sourceWidth) => {
  if (!sourceWidth || sourceWidth < 640) return "";

  const widths = blogImageWidths.filter((width) => width <= sourceWidth);
  if (!widths.length) return "";

  return widths
    .map((width) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=90 ${width}w`)
    .join(", ");
};

const enhanceBlogImageTag = (imgTag, { sizes, priority = false } = {}) =>
  imgTag.replace(/<img\b([^>]*)>/, (match, attrs) => {
    const rawSrc = getHtmlAttr(attrs, "src");
    const src = normalizeBlogImageSrc(rawSrc);
    if (!src.startsWith("/assets/images/")) return match;

    let nextAttrs = attrs;
    if (src !== rawSrc) {
      nextAttrs = setHtmlAttr(nextAttrs, "src", src);
    }

    const existingSrcset = getHtmlAttr(nextAttrs, "srcset");
    const canReplaceSrcset = !existingSrcset || existingSrcset.includes("/assets/images/");
    if (canReplaceSrcset) {
      const sourceWidth = Number.parseInt(getHtmlAttr(nextAttrs, "width"), 10);
      const srcset = buildBlogImageSrcset(src, sourceWidth);
      if (srcset) {
        nextAttrs = setHtmlAttr(nextAttrs, "srcset", srcset);
        nextAttrs = setHtmlAttr(nextAttrs, "sizes", sizes || blogArticleImageSizes);
      }
    } else if (sizes && !getHtmlAttr(nextAttrs, "sizes")) {
      nextAttrs = setHtmlAttr(nextAttrs, "sizes", sizes);
    }

    nextAttrs = setHtmlAttr(nextAttrs, "decoding", "async");
    if (priority) {
      nextAttrs = setHtmlAttr(nextAttrs, "loading", "eager");
      nextAttrs = setHtmlAttr(nextAttrs, "fetchpriority", "high");
    } else if (!getHtmlAttr(nextAttrs, "loading")) {
      nextAttrs = setHtmlAttr(nextAttrs, "loading", "lazy");
    }

    return `<img${nextAttrs}>`;
  });

const enhanceBlogCardImages = (html) => {
  let cardIndex = 0;

  return html.replace(
    /(<a class="blog-feature-card"[\s\S]*?>\s*)(?:<span class="blog-feature-media">)?(<img\b[^>]*>)(?:<\/span>)?/g,
    (match, opening, imgTag) => {
      const enhancedImage = enhanceBlogImageTag(imgTag, {
        sizes: blogCardImageSizes,
        priority: cardIndex < 3,
      });
      cardIndex += 1;

      return `${opening}<span class="blog-feature-media">${enhancedImage}</span>`;
    },
  );
};

const enhanceBlogArticleImages = (html) =>
  html.replace(
    /(<figure class="([^"]*\bblog-article-image\b[^"]*)"[^>]*>\s*)(<img\b[^>]*>)/g,
    (match, opening, className, imgTag) => {
      const isHeroImage = className.split(/\s+/).includes("blog-article-hero-image");
      return `${opening}${enhanceBlogImageTag(imgTag, {
        sizes: blogArticleImageSizes,
        priority: isHeroImage,
      })}`;
    },
  );

const addBlogCardMeta = (html, articles = {}) =>
  html.replace(
    /(<a class="blog-feature-card" href="\/blog\/([^"#]+)"[\s\S]*?<p>[\s\S]*?<\/p>)\s*<span class="blog-feature-link">Read More<\/span>/g,
    (match, cardContent, slug) => {
      const article = articles[slug];
      if (!article) return match;

      const author = article.author || "Sunny Huang";
      const date = article.datePublished || "";

      return `${cardContent}
              <div class="blog-feature-footer">
                <span class="blog-feature-author"><span class="blog-author-avatar"><img src="/assets/images/sunny-huang-author-avatar.webp" alt="" width="39" height="39"></span>${author}</span>
                <time datetime="${date}">${formatArticleDate(date)}</time>
              </div>
              <span class="blog-feature-link">Read More</span>`;
    },
  );

const sortBlogCardsByDate = (html, articles = {}) =>
  html.replace(
    /(<div class="blog-card-grid">\s*)([\s\S]*?)(\s*<\/div>\s*<\/div>\s*<\/section>)/,
    (match, opening, cardsHtml, closing) => {
      const cards = [...cardsHtml.matchAll(/<a class="blog-feature-card" href="\/blog\/([^"#]+)"[\s\S]*?<\/a>/g)]
        .map((cardMatch, index) => {
          const slug = cardMatch[1];
          const articleDate = articles[slug]?.datePublished || "";
          return {
            html: cardMatch[0],
            index,
            timestamp: articleDate ? Date.parse(articleDate) : 0,
          };
        });

      if (!cards.length) return match;

      const sortedCards = cards
        .sort((a, b) => b.timestamp - a.timestamp || a.index - b.index)
        .map((card) => card.html)
        .join("\n          ");

      return `${opening}${sortedCards}${closing}`;
    },
  );

export const buildBlogIndexHtml = (html, articles = {}) =>
  enhanceBlogCardImages(addBlogCardMeta(sortBlogCardsByDate(normalizeBlogArticleLinks(html.replace(
    /<article id="[^"]+" class="[^"]*\bblog-article-section\b[^"]*">[\s\S]*?<\/article>/g,
    "",
  )), articles), articles));

const addBlogArticleMeta = (articleHtml, articleMeta) => {
  const author = articleMeta?.author;
  const authorUrl = articleMeta?.authorUrl;
  const datePublished = articleMeta?.datePublished;
  const dateModified = articleMeta?.dateModified;
  if (!author && !datePublished) return articleHtml;

  const authorMarkup = authorUrl ? `<a href="${authorUrl}">${author}</a>` : author;
  const authorAvatar = author === "Sunny Huang"
    ? '<img src="/assets/images/sunny-huang-author-avatar.webp" alt="" width="28" height="28">'
    : "";
  const authorByline = `<span class="blog-article-author">${authorAvatar}By ${authorMarkup}</span>`;

  const metaItems = [
    author ? authorByline : "",
    datePublished ? `<time datetime="${datePublished}">${formatArticleDate(datePublished)}</time>` : "",
    dateModified && dateModified !== datePublished
      ? `<time datetime="${dateModified}">Updated ${formatArticleDate(dateModified)}</time>`
      : "",
  ].filter(Boolean).join("");

  return articleHtml.replace(
    /(<header class="blog-article-header">[\s\S]*?<h1>[\s\S]*?<\/h1>)/,
    `$1
          <div class="blog-article-meta">${metaItems}</div>`,
  );
};

export const buildBlogArticleHtml = (html, articleSlug, articleMeta = {}) => {
  const shell = getPageShell(html);
  const articlePattern = new RegExp(
    `<article id="${articleSlug}" class="[^"]*\\bblog-article-section\\b[^"]*">[\\s\\S]*?<\\/article>`,
  );
  const article = addBlogArticleMeta((html.match(articlePattern)?.[0] || "").replace(
    /class="([^"]*\bblog-article-section\b[^"]*)"/,
    (_, className) => `class="${className.includes("is-active") ? className : `${className} is-active`}"`,
  ), articleMeta);

  return enhanceBlogArticleImages(normalizeBlogArticleLinks(`${shell.beforeMain}<main>${article}</main>${shell.afterMain}`));
};
