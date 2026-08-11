import { footerHtml } from "../components/footerHtml";

const productOptions = [
  "Lapel Pins",
  "Medals",
  "Challenge Coins",
  "Keychains",
  "Belt Buckles",
  "Golf Accessories",
  "Fridge Magnets",
  "Bottle Openers",
  "Cufflinks & Tie Clips",
  "Other",
];

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const renderHeader = () => String.raw`
  <div class="topbar"><div class="container"><span>Team Industry Experience Since 2003</span><span>Email: ceo@chinauniquepin.com | WhatsApp: +86 18895316838</span></div></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="/"><img src="assets/images/logo.png" alt="Unique Pin logo"><span><strong>Unique Pin</strong><span>Custom Metal Gifts Factory</span></span></a><nav class="nav" aria-label="Main navigation"><a href="/">Home</a><div class="nav-item products-menu"><a class="active" href="/products">Products</a><div class="mega-dropdown" role="menu" aria-label="Products mega menu"><div class="mega-panel"><div class="mega-featured"><a class="mega-product" href="/products/custom-enamel-pins"><img src="assets/images/mega-lapel-pins-auburn.jpg" alt="Custom Auburn lapel pin"><span>Lapel Pins</span><small>Custom enamel pins for brands, events and clubs.</small></a><a class="mega-product" href="/products/custom-medals"><img src="assets/images/mega-medals-butterfly.png" alt="Custom butterfly medal with ribbon"><span>Medals</span><small>Colorful award medals with ribbons and finishes.</small></a><a class="mega-product" href="/products/custom-challenge-coins"><img src="assets/images/mega-challenge-coin-christmas.jpg" alt="Custom Christmas challenge coin"><span>Challenge Coins</span><small>Detailed coins for recognition and commemorations.</small></a></div><div class="mega-list"><a href="/products/custom-enamel-pins">Lapel Pins</a><a href="/products/custom-challenge-coins">Challenge Coins</a><a href="/products/custom-medals">Medals</a><a href="/products/custom-metal-keychains">Keychains</a><a href="/products/custom-belt-buckles">Belt Buckles</a><a href="/products/custom-golf-accessories">Golf Accessories</a><a href="/products/custom-bottle-openers">Bottle Openers</a><a href="/products/custom-cufflinks-tie-clips">Cufflinks &amp; Tie Clips</a><a href="/products/custom-fridge-magnets">Fridge Magnets</a></div><div class="mega-cta"><div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div><a class="btn btn-yellow" href="/contact">Get Free Quote</a></div></div></div></div><a href="/custom">Custom</a><a href="/about">About Us</a><a href="/blog">Blog</a><a href="/contact">Contact Us</a></nav><div class="nav-actions"><a class="btn btn-primary" href="/contact">Get Free Quote</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">&#9776;</button></div></div></header>`;

export const homeProductLandingPages = [
  {
    slug: "custom-lapel-pins",
    title: "Custom Lapel Pins",
    shortLabel: "Lapel Pins",
    formProduct: "Lapel Pins",
    metaTitle: "Custom Lapel Pins | Enamel Pin Types & Free Quote",
    description: "Explore custom lapel pin styles including soft enamel, hard enamel, printed, antique and 3D pins before requesting a factory quote.",
    heroCopy: "Create custom pins from your logo or artwork with soft enamel, hard enamel, die-struck and printed options. No minimum order and free artwork support.",
    heroBackground: "assets/images/home-category-lapel-pins-banner.png",
    includes: ["8mm post with butterfly or rubber clutch", "Up to 7 enamel colors for free", "Free mold for 2 inches or smaller on qualifying orders", "Worldwide shipping support", "Artwork proof before production"],
    heroImages: [
      "assets/images/type-pins-auburn-proud.jpg",
      "assets/images/type-pins-hard-enamel.jpg",
      "assets/images/type-pins-printed.jpg",
      "assets/images/type-pins-soft-enamel.jpg",
    ],
    rows: [
      {
        eyebrow: "Textured Detail with Classic Appeal",
        title: "Soft Enamel Lapel Pins",
        image: "assets/images/type-pins-auburn-proud.jpg",
        href: "/products/custom-enamel-pins/auburn-proud-soft-enamel-pin",
        copy: "Raised metal lines and recessed enamel colors create a distinctive textured finish. A versatile choice for clubs, schools, events, promotional campaigns and branded merchandise.",
      },
      {
        eyebrow: "Smooth Finish, Premium Quality",
        title: "Hard Enamel Lapel Pins",
        image: "assets/images/type-pins-yellow-character.jpg",
        href: "/products/custom-enamel-pins/yellow-character-hard-enamel-pin",
        copy: "Enamel colors are polished flush with the metal lines to create a smooth, durable and refined surface. Ideal for premium merchandise, corporate gifts, membership programs and retail collections.",
      },
      {
        eyebrow: "Sculpted Depth for Complex Designs",
        title: "3D Zinc Alloy Lapel Pins",
        image: "assets/images/type-pins-3d-zinc-alloy.png",
        href: "/products/custom-enamel-pins/skull-axe-3d-zinc-alloy-lapel-pin",
        copy: "Zinc alloy casting supports sculpted relief, dimensional details and complex custom shapes. Well suited for mascots, character designs, commemorative pieces and distinctive brand merchandise.",
      },
      {
        compact: true,
        eyebrow: "Best Value",
        title: "UV Printed Lapel Pins",
        image: "assets/images/type-pins-uv-printed-masquerade-day.png",
        href: "/products/custom-enamel-pins/uv-printed-masquerade-day-lapel-pin",
        copy: "Reproduce photographs, gradients and intricate artwork in vibrant color. A versatile option for detailed logos, characters, events and promotional designs.",
      },
      {
        eyebrow: "Classic Character with Timeless Detail",
        title: "Antique Lapel Pins",
        image: "assets/images/type-pins-die-struck.jpg",
        reverse: false,
        href: "/products/custom-enamel-pins/antique-silver-guitar-crest-enamel-pin",
        copy: "Antique plating enhances recessed details and raised metal surfaces, creating a distinctive, time-worn appearance. Ideal for commemorative pins, formal emblems, clubs and heritage-inspired designs.",
      },
      {
        eyebrow: "Crisp Metal Detail, No Enamel Required",
        title: "Die Struck Lapel Pin",
        image: "assets/images/type-pins-aaa-antique-round.png",
        reverse: true,
        href: "/products/custom-enamel-pins/aaa-antique-round-lapel-pin",
        copy: "Die-struck production creates clean raised and recessed metal details without enamel colors. A refined choice for corporate recognition, service awards, commemorative events and official emblems.",
      },
    ],
  },
  {
    slug: "custom-medals",
    title: "Custom Medals",
    shortLabel: "Medals",
    formProduct: "Medals",
    metaTitle: "Custom Medals | Award Medal Styles & Free Quote",
    description: "Compare custom medal styles for races, tournaments, ceremonies and branded recognition programs before requesting a quote.",
    heroCopy: "Create custom medals with your logo, artwork and choice of shape, finish, color and ribbon. Ideal for races, sporting events, schools, clubs, corporate awards and commemorative programs.",
    heroBackground: "assets/images/home-category-medals-banner.png",
    includes: ["Custom shape, size and thickness", "2D or 3D relief artwork", "Ribbon printing and assembly", "Gold, silver, bronze or antique plating", "Event-ready packing and carton labels"],
    heroImages: [
      "assets/images/type-medals-sports.png",
      "assets/images/type-medals-3d.png",
      "assets/images/type-medals-ribbon.png",
      "assets/images/type-medals-award.png",
    ],
    rows: [
      {
        eyebrow: "For Tournaments, Teams & Leagues",
        title: "Custom Sports Medals",
        image: "assets/images/type-medals-sports.png",
        href: "/products/custom-medals/silver-basketball-sports-medal-with-ribbon",
        copy: "Create custom sports medals with your logo, event name and choice of shape, color, plating and ribbon. Ideal for tournaments, leagues, clubs and team competitions.",
      },
      {
        eyebrow: "Made for Finishers and Race Events",
        title: "Marathon & Running Medals",
        image: "assets/images/type-medals-city-finisher-52195-ribbon.jpg",
        href: "/products/custom-medals/city-finisher-52195-ribbon-medal",
        copy: "Custom finisher medals for marathons, 5K and 10K races, charity runs, trail races and virtual events, available with personalized artwork, finishes and event ribbons.",
      },
      {
        eyebrow: "iCelebrate Student Achievement",
        title: "Custom School & Academic Medals",
        image: "assets/images/type-medals-3d.png",
        href: "/products/custom-medals/3d-shield-logo-award-medal",
        copy: "Personalized school medals for academic achievement, student competitions, graduation ceremonies and recognition programs, customized with your school logo, text, colors and ribbon.",
      },
      {
        eyebrow: "Professional Recognition for Every Milestone",
        title: "Corporate Award Medals",
        image: "assets/images/type-medals-award.png",
        href: "/products/custom-medals/silver-race-award-medal-with-ribbon",
        copy: "Custom award medals for employee recognition, company anniversaries, sales achievements and corporate events, available with branded artwork, premium finishes and presentation packaging.",
      },
      {
        eyebrow: "For Festivals, Charities & Community Events",
        title: "Custom Event Medals",
        image: "assets/images/type-medals-medal-depot-carnival-run.jpg",
        href: "/products/custom-medals/medal-depot-carnival-run-ribbon-medal",
        copy: "Create custom event medals with your logo, artwork and event details. Ideal for festivals, charity events, community programs, club activities and branded promotional campaigns.",
      },
      {
        eyebrow: "Honor Milestones That Matter",
        title: "Commemorative Medals",
        image: "assets/images/type-medals-grielacher-ellene-anniversary.png",
        href: "/products/custom-medals/grielacher-ellene-anniversary-medal",
        copy: "Custom commemorative medals designed for anniversaries, ceremonies, service recognition, organizational milestones and special occasions, with personalized artwork, finishes and presentation options.",
      },
    ],
  },
  {
    slug: "custom-challenge-coins",
    title: "Custom Challenge Coins",
    shortLabel: "Challenge Coins",
    formProduct: "Challenge Coins",
    metaTitle: "Custom Challenge Coins | Coin Styles & Free Quote",
    description: "Explore challenge coin styles including 3D, antique, double-sided and custom shape coins for teams, units and events.",
    heroCopy: "Create custom challenge coins with your logo, 2D or 3D relief, enamel colors, custom plating and personalized edges for military units, businesses, clubs, events and commemorative programs.",
    heroBackground: "assets/images/home-category-challenge-coins-banner.png",
    includes: ["Double-sided artwork options", "2D or 3D relief", "Antique, bright or dual plating", "Edge text and numbering options", "Pouches, capsules or gift boxes"],
    heroImages: [
      "assets/images/type-coins-3d.jpg",
      "assets/images/type-coins-double-sided.jpg",
      "assets/images/type-coins-cut-shape.jpg",
      "assets/images/type-coins-antique.jpg",
    ],
    rowHeadingTag: "h3",
    rows: [
      {
        eyebrow: "For Units, Veterans & Service Recognition",
        title: "Custom Military Challenge Coins",
        image: "assets/images/type-coins-marine-corps-forces-north.jpg",
        alt: "Custom military challenge coins with 3D relief and antique finish",
        href: "/products/custom-challenge-coins?scenario=military",
        buttonLabel: "Explore Military Coins",
        copy: "Create custom military challenge coins with unit insignia, 2D or 3D relief, enamel colors and antique finishes for deployments, promotions, veterans and service recognition.",
      },
      {
        eyebrow: "For Police, Fire & Public Safety Departments",
        title: "Custom Police & Firefighter Challenge Coins",
        image: "assets/images/type-coins-queensland-fire-emergency-service.png",
        alt: "Custom police and firefighter challenge coins with soft enamel",
        href: "/products/custom-challenge-coins?scenario=public-safety",
        buttonLabel: "Explore Public Safety Coins",
        copy: "Custom police and firefighter challenge coins featuring department emblems, detailed relief, soft enamel colors and personalized edge designs for awards, retirements and service commemorations.",
      },
      {
        eyebrow: "For Brands, Teams & Company Milestones",
        title: "Custom Corporate Challenge Coins",
        image: "assets/images/type-coins-50-years-service.jpg",
        alt: "Custom corporate challenge coins with logo and hard enamel",
        href: "/products/custom-challenge-coins?scenario=corporate",
        buttonLabel: "Explore Corporate Coins",
        copy: "Branded corporate challenge coins with custom logos, hard enamel colors, polished plating and optional presentation packaging for employee recognition, company anniversaries and promotional gifts.",
      },
      {
        eyebrow: "For Anniversaries, Ceremonies & Milestones",
        title: "Custom Commemorative Challenge Coins",
        image: "assets/images/type-coins-double-sided.jpg",
        alt: "Double-sided commemorative challenge coins with antique plating",
        href: "/products/custom-challenge-coins?scenario=commemorative",
        buttonLabel: "Explore Commemorative Coins",
        copy: "Personalized commemorative challenge coins with double-sided artwork, 2D or 3D details and antique plating for anniversaries, retirements, ceremonies and historical milestones.",
      },
      {
        eyebrow: "For Clubs, Schools & Member Organizations",
        title: "Custom Club & Association Challenge Coins",
        image: "assets/images/type-coins-ibew-eastern-wyoming.png",
        alt: "Custom shaped club challenge coins with enamel colors",
        href: "/products/custom-challenge-coins?scenario=club",
        buttonLabel: "Explore Club Coins",
        copy: "Custom club challenge coins featuring logos, mottos, member details, enamel colors and unique shapes for associations, schools, teams and membership recognition programs.",
      },
      {
        eyebrow: "For Events, Charities & Community Programs",
        title: "Custom Event & Fundraising Challenge Coins",
        image: "assets/images/type-coins-jennifer-jo-cobb-racing.png",
        alt: "Custom event and fundraising challenge coins with full-color printing",
        href: "/products/custom-challenge-coins?scenario=event",
        buttonLabel: "Explore Event Coins",
        copy: "Custom event coins with full-color printing, unique shapes, cutouts and optional functional features for fundraisers, charity campaigns, competitions and community events.",
      },
    ],
  },
  {
    slug: "custom-keychains",
    title: "Custom Keychains",
    shortLabel: "Keychains",
    formProduct: "Keychains",
    metaTitle: "Custom Metal Keychains | Keychain Styles & Free Quote",
    description: "Compare custom metal keychain styles for brand promotions, souvenirs, retail gifts and practical everyday merchandise.",
    heroCopy: "Turn your logo or artwork into custom metal keychains with enamel colors, 2D or 3D relief, custom plating and practical features for promotions, souvenirs, events and branded merchandise.",
    heroBackground: "assets/images/home-category-keychains-banner.png",
    includes: ["Enamel, metal, leather or PVC styles", "Split ring, hook or chain hardware", "Spinner and bottle opener functions", "Custom backing cards and packaging", "Artwork proof before production"],
    heroImages: [
      "assets/images/type-keychains-metal.jpg",
      "assets/images/type-keychains-enamel.jpg",
      "assets/images/type-keychains-opener.jpg",
      "assets/images/type-keychains-spinner.jpg",
    ],
    rowHeadingTag: "h3",
    rows: [
      {
        eyebrow: "Dimensional Detail for Distinctive Designs",
        title: "Custom 3D Metal Keychains",
        image: "assets/images/type-keychains-tire-wheel-rim.jpg",
        alt: "Custom 3D metal keychains with sculpted relief",
        href: "/products/custom-metal-keychains/tire-wheel-rim-keychain",
        buttonLabel: "Explore 3D Keychains",
        copy: "Create custom 3D metal keychains with sculpted relief, detailed logos and durable plating for branded merchandise, souvenirs, corporate gifts and promotional programs.",
      },
      {
        eyebrow: "Vibrant Color with Defined Metal Detail",
        title: "Custom Enamel Keychains",
        image: "assets/images/type-keychains-enamel.jpg",
        alt: "Custom enamel keychain with colorful logo design",
        href: "/products/custom-metal-keychains/palm-island-enamel-keychain",
        buttonLabel: "Explore Enamel Keychains",
        copy: "Custom enamel keychains combine vivid colors with raised metal outlines to reproduce logos, mascots and illustrated artwork for brands, events, schools and souvenir collections.",
      },
      {
        eyebrow: "Practical Function for Everyday Promotion",
        title: "Custom Bottle Opener Keychains",
        image: "assets/images/type-keychains-basketball-bottle-opener.jpg",
        alt: "Custom metal bottle opener keychain with logo",
        href: "/products/custom-metal-keychains/basketball-bottle-opener-keychain",
        buttonLabel: "Explore Opener Keychains",
        copy: "Combine a personalized metal keychain with a functional bottle opener for breweries, bars, restaurants, events, hospitality brands and promotional giveaways.",
      },
      {
        eyebrow: "Interactive Movement That Gets Noticed",
        title: "Custom Spinner Keychains",
        image: "assets/images/type-keychains-thin-blue-line-spinner-bottle-opener.jpg",
        alt: "Custom spinner keychain with rotating center",
        href: "/products/custom-metal-keychains/thin-blue-line-spinner-bottle-opener-keychain",
        buttonLabel: "Explore Spinner Keychains",
        copy: "Add a rotating center or movable component to create an interactive custom keychain for sports events, tourism souvenirs, branded campaigns and collectible merchandise.",
      },
    ],
  },
  {
    slug: "custom-belt-buckles",
    title: "Custom Belt Buckles",
    shortLabel: "Belt Buckles",
    formProduct: "Belt Buckles",
    metaTitle: "Custom Belt Buckles | Buckle Styles & Free Quote",
    description: "Explore custom belt buckle styles for Western merchandise, clubs, fashion accessories and event awards.",
    heroCopy: "Turn your logo or artwork into custom metal belt buckles with 2D or 3D relief, enamel colors and personalized finishes for western brands, rodeo events, clubs, awards and retail merchandise.",
    heroBackground: "assets/images/home-category-belt-buckles-banner.png",
    includes: ["Custom shape and back hardware", "2D or 3D relief", "Antique or bright plating", "Enamel color options", "Retail or award packaging support"],
    heroImages: [
      "assets/images/type-buckles-western.jpg",
      "assets/images/type-buckles-logo.jpg",
      "assets/images/type-buckles-antique.jpg",
      "assets/images/type-buckles-enamel.jpg",
    ],
    rows: [
      {
        eyebrow: "Western and club style",
        title: "Western Belt Buckles",
        image: "assets/images/type-buckles-western.jpg",
        href: "/products/custom-belt-buckles/western-skull-relief-belt-buckle",
        copy: "Western buckles suit rodeo events, clubs, fashion accessories and retail merchandise with bold relief artwork.",
      },
      {
        eyebrow: "Brand-first merchandise",
        title: "Logo Belt Buckles",
        image: "assets/images/type-buckles-logo.jpg",
        href: "/products/custom-belt-buckles/oval-relief-logo-metal-belt-buckle",
        copy: "Logo buckles give brands, teams and organizations a larger metal surface for identity and detail.",
      },
      {
        eyebrow: "Classic metal depth",
        title: "Antique Belt Buckles",
        image: "assets/images/type-buckles-antique.jpg",
        href: "/products/custom-belt-buckles/antique-silver-rectangle-logo-belt-buckle",
        copy: "Antique plating brings out raised and recessed details while giving the buckle a durable, collectible feel.",
      },
      {
        eyebrow: "Color and relief combined",
        title: "Enamel Belt Buckles",
        image: "assets/images/type-buckles-enamel.jpg",
        href: "/products/custom-belt-buckles/oval-club-logo-enamel-belt-buckle",
        copy: "Enamel buckles combine metal relief with color blocks for club logos, team marks and branded designs.",
      },
    ],
  },
  {
    slug: "custom-golf-ball-markers",
    title: "Custom Golf Ball Markers",
    shortLabel: "Golf Ball Markers",
    formProduct: "Golf Accessories",
    metaTitle: "Custom Golf Ball Markers | Golf Accessories & Free Quote",
    description: "Compare custom golf ball markers, hat clips, divot tools and tournament gift set options before requesting a quote.",
    heroCopy: "Golf ball markers, hat clips and divot tools give clubs, resorts and tournaments a compact premium gift with frequent course visibility.",
    heroBackground: "assets/images/home-category-golf-ball-markers-banner.png",
    includes: ["Ball markers and magnetic hat clips", "Divot tools and gift sets", "Custom logo enamel or printing", "Tournament date and sponsor artwork", "Retail-ready packaging support"],
    heroImages: [
      "assets/images/type-golf-ball-marker.jpg",
      "assets/images/type-golf-hat-clip.jpg",
      "assets/images/type-golf-divot-tool.jpg",
      "assets/images/type-golf-animal-marker-set.jpg",
    ],
    rows: [
      {
        eyebrow: "Tournament essentials",
        title: "Golf Ball Markers",
        image: "assets/images/type-golf-ball-marker.jpg",
        href: "/products/custom-golf-accessories/antique-golf-club-divot-tool-ball-marker",
        copy: "Custom ball markers are compact, useful and easy to brand for tournaments, pro shops and membership gifts.",
      },
      {
        eyebrow: "Easy course access",
        title: "Golf Hat Clips",
        image: "assets/images/type-golf-hat-clip.jpg",
        href: "/products/custom-golf-accessories/avocado-golf-hat-clip-ball-marker",
        copy: "Hat clips keep the marker visible and accessible, making them a stronger retail or club gift than loose markers.",
      },
      {
        eyebrow: "Higher-value gift sets",
        title: "Golf Divot Tools",
        image: "assets/images/type-golf-divot-tool.jpg",
        href: "/products/custom-golf-accessories/color-logo-golf-divot-tool-set",
        copy: "Divot tools can pair with magnetic markers for sponsor gifts, resort merchandise and tournament welcome packs.",
      },
      {
        eyebrow: "Retail-ready personality",
        title: "Character Marker Sets",
        image: "assets/images/type-golf-animal-marker-set.jpg",
        href: "/products/custom-golf-accessories/animal-character-golf-ball-marker-set",
        copy: "Character and theme marker sets add personality to golf gift lines while keeping the product useful on the course.",
      },
    ],
  },
];

export const homeProductLandingPagesBySlug = Object.fromEntries(
  homeProductLandingPages.map((page) => [page.slug, page]),
);

export const homeProductLandingPathBySlug = Object.fromEntries(
  homeProductLandingPages.map((page) => [page.slug, `/product-category/${page.slug}`]),
);

const renderHeroImages = (images, title) => images
  .map((image, index) => `            <img class="home-category-hero-image image-${index + 1}" src="${escapeHtml(image)}" alt="${escapeHtml(title)} sample ${index + 1}">`)
  .join("\n");

const renderHeroBackground = (page) => page.heroBackground
  ? `      <img class="home-category-hero-bg" src="${escapeHtml(page.heroBackground)}" alt="${escapeHtml(page.title)} banner">`
  : "";

const renderHeroVisual = (page) => page.heroBackground
  ? ""
  : `        <div class="home-category-hero-art" aria-label="${escapeHtml(page.title)} sample product collage">
${renderHeroImages(page.heroImages, page.title)}
        </div>`;

const renderRows = (rows, headingTag = "h2") => {
  let visualIndex = 0;
  const rowHeadingTag = headingTag === "h3" ? "h3" : "h2";

  return rows
    .map((row) => {
      const buttonLabel = row.buttonLabel || "View Product";
      const imageAlt = row.alt || row.title;

      if (row.compact) {
        return `
        <article class="home-category-row-mini${row.image ? " has-media" : ""}">
          ${row.image ? `<a class="home-category-mini-media" href="${escapeHtml(row.href)}"><img src="${escapeHtml(row.image)}" alt="${escapeHtml(imageAlt)}"></a>` : ""}
          <div class="home-category-mini-card">
            <span>${escapeHtml(row.eyebrow)}</span>
            <h2>${escapeHtml(row.title)}</h2>
            <p>${escapeHtml(row.copy)}</p>
            <a href="${escapeHtml(row.href)}">${escapeHtml(buttonLabel)}</a>
          </div>
        </article>`;
      }

      visualIndex += 1;
      const isReverse = row.reverse ?? visualIndex % 2 === 0;

      return `
        <article class="home-category-row tone-${visualIndex}${isReverse ? " is-reverse" : ""}">
          <a class="home-category-row-media" href="${escapeHtml(row.href)}">
            <img src="${escapeHtml(row.image)}" alt="${escapeHtml(imageAlt)}">
          </a>
          <div class="home-category-row-copy">
            <span>${escapeHtml(row.eyebrow)}</span>
            <${rowHeadingTag}>${escapeHtml(row.title)}</${rowHeadingTag}>
            <p>${escapeHtml(row.copy)}</p>
            <a href="${escapeHtml(row.href)}">${escapeHtml(buttonLabel)}</a>
          </div>
        </article>`;
    })
    .join("\n");
};

const renderRowsHeading = (page) => page.rowsHeading
  ? `
      <div class="container home-category-section-head">
        <h2>${escapeHtml(page.rowsHeading)}</h2>
        <p>${escapeHtml(page.rowsIntro)}</p>
      </div>`
  : "";

const renderProductOptions = (selectedProduct) => productOptions
  .map((option) => `                  <option${option === selectedProduct ? " selected" : ""}>${escapeHtml(option)}</option>`)
  .join("\n");

const renderQuoteForm = (page) => `
    <section class="home-category-quote" id="quote">
      <div class="container">
        <div class="home-category-quote-head">
          <h2>Start Your Free Quote</h2>
          <p>Having trouble or just want to send an email? Contact us for a quote or questions at <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a></p>
        </div>
        <div class="home-category-quote-card contact-card">
          <form class="form" data-inquiry-form>
            <div class="form-row">
              <label class="sr-only" for="${escapeHtml(page.slug)}-quote-name">Name</label>
              <input id="${escapeHtml(page.slug)}-quote-name" type="text" name="name" placeholder="Name" required>
              <label class="sr-only" for="${escapeHtml(page.slug)}-quote-email">Email</label>
              <input id="${escapeHtml(page.slug)}-quote-email" type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-row">
              <label class="sr-only" for="${escapeHtml(page.slug)}-quote-country">Country or region</label>
              <input id="${escapeHtml(page.slug)}-quote-country" type="text" name="country" placeholder="Country / Region" required>
              <label class="sr-only" for="${escapeHtml(page.slug)}-quote-phone">Phone number</label>
              <input id="${escapeHtml(page.slug)}-quote-phone" type="text" name="whatsapp" placeholder="Phone Number">
            </div>
            <div class="form-row">
              <label class="sr-only" for="${escapeHtml(page.slug)}-quote-product">Product type</label>
              <select id="${escapeHtml(page.slug)}-quote-product" name="product" required>
${renderProductOptions(page.formProduct)}
              </select>
              <label class="sr-only" for="${escapeHtml(page.slug)}-quote-quantity">Quantity</label>
              <input id="${escapeHtml(page.slug)}-quote-quantity" type="text" name="quantity" placeholder="Quantity">
            </div>
            <div class="form-field form-field-full">
              <label for="${escapeHtml(page.slug)}-quote-details">What can we help you with?</label>
              <textarea id="${escapeHtml(page.slug)}-quote-details" name="details" placeholder="Notes, Comments, etc."></textarea>
            </div>
            <div class="form-field form-field-full">
              <label for="${escapeHtml(page.slug)}-quote-artwork">Upload files</label>
              <label class="upload-box" for="${escapeHtml(page.slug)}-quote-artwork">
                <input id="${escapeHtml(page.slug)}-quote-artwork" type="file" name="artwork" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.psd,.cdr" aria-label="Upload artwork">
                <span class="upload-icon" aria-hidden="true">&#8593;</span>
                <span>Drag and drop a file here or click to choose</span>
              </label>
            </div>
            <button class="btn btn-primary" type="submit">Submit Inquiry</button>
            <p class="form-privacy-note">We use the information you submit to respond to your inquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
            <p data-form-notice aria-live="polite" style="color: var(--navy); font-weight: 800;"></p>
          </form>
        </div>
      </div>
    </section>`;

export const renderHomeProductLandingHtml = (page) => String.raw`
  ${renderHeader()}
  <main class="home-category-page">
    <section class="home-category-hero${page.heroBackground ? " has-background-image" : ""}">
${renderHeroBackground(page)}
      <div class="container home-category-hero-inner">
        <div class="home-category-hero-copy">
          <span>Free Quote Form</span>
          <h1>${escapeHtml(page.title)}</h1>
          <p>${escapeHtml(page.heroCopy)}</p>
          <div class="home-category-hero-actions">
            <a class="btn btn-primary" href="#quote">Get Free Quote</a>
            <a class="btn btn-outline" href="/products">View All Products</a>
          </div>
        </div>
${renderHeroVisual(page)}
      </div>
    </section>
    <section class="home-category-rows" data-category-slug="${escapeHtml(page.slug)}" aria-label="${escapeHtml(page.title)} product styles">
      <div class="container home-category-row-nav">
        <a class="home-category-back-home" href="/">Back to Home</a>
      </div>
${renderRowsHeading(page)}
      <div class="container home-category-row-wrap">
${renderRows(page.rows, page.rowHeadingTag)}
      </div>
    </section>
${renderQuoteForm(page)}
  </main>
  ${footerHtml}`;
