import { footerHtml } from "../components/footerHtml";
import { siteHeaderHtml } from "../components/siteHeaderHtml";

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
  "Patches",
  "Others",
  "Other",
];

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");


export const homeProductLandingPages = [
  {
    slug: "custom-lapel-pins",
    title: "Lapel Pin Types",
    shortLabel: "Lapel Pins",
    formProduct: "Lapel Pins",
    metaTitle: "Custom Lapel Pins | Enamel Pin Types & Free Quote",
    description: "Explore custom lapel pin styles including soft enamel, hard enamel, printed, antique and 3D pins before requesting a factory quote.",
    heroEyebrow: "Pin Style Guide",
    heroCopy: "Compare soft enamel, hard enamel, die-struck, printed, antique and 3D lapel pin styles by texture, artwork fit and intended use. Choose the right technique before viewing finished pin examples.",
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
        buttonLabel: "Explore Soft Enamel Pins",
        copy: "Raised metal lines and recessed enamel colors create a distinctive textured finish. A versatile choice for clubs, schools, events, promotional campaigns and branded merchandise.",
      },
      {
        eyebrow: "Smooth Finish, Premium Quality",
        title: "Hard Enamel Lapel Pins",
        image: "assets/images/type-pins-yellow-character.jpg",
        href: "/products/custom-enamel-pins/yellow-character-hard-enamel-pin",
        buttonLabel: "Explore Hard Enamel Pins",
        copy: "Enamel colors are polished flush with the metal lines to create a smooth, durable and refined surface. Ideal for premium merchandise, corporate gifts, membership programs and retail collections.",
      },
      {
        eyebrow: "Sculpted Depth for Complex Designs",
        title: "3D Zinc Alloy Lapel Pins",
        image: "assets/images/type-pins-3d-zinc-alloy.png",
        href: "/products/custom-enamel-pins/skull-axe-3d-zinc-alloy-lapel-pin",
        buttonLabel: "Explore 3D Zinc Alloy Pins",
        copy: "Zinc alloy casting supports sculpted relief, dimensional details and complex custom shapes. Well suited for mascots, character designs, commemorative pieces and distinctive brand merchandise.",
      },
      {
        eyebrow: "Best Value",
        title: "UV Printed Lapel Pins",
        image: "assets/images/type-pins-uv-printed-masquerade-day.png",
        href: "/products/custom-enamel-pins/uv-printed-masquerade-day-lapel-pin",
        buttonLabel: "Explore UV Printed Pins",
        copy: "Reproduce photographs, gradients and intricate artwork in vibrant color. A versatile option for detailed logos, characters, events and promotional designs.",
      },
      {
        eyebrow: "Classic Character with Timeless Detail",
        title: "Antique Lapel Pins",
        image: "assets/images/type-pins-die-struck.jpg",
        reverse: false,
        href: "/products/custom-enamel-pins/antique-silver-guitar-crest-enamel-pin",
        buttonLabel: "Explore Antique Pins",
        copy: "Antique plating enhances recessed details and raised metal surfaces, creating a distinctive, time-worn appearance. Ideal for commemorative pins, formal emblems, clubs and heritage-inspired designs.",
      },
      {
        eyebrow: "Crisp Metal Detail, No Enamel Required",
        title: "Die Struck Lapel Pin",
        image: "assets/images/type-pins-aaa-antique-round.png",
        reverse: true,
        href: "/products/custom-enamel-pins/aaa-antique-round-lapel-pin",
        buttonLabel: "Explore Die Struck Pins",
        copy: "Die-struck production creates clean raised and recessed metal details without enamel colors. A refined choice for corporate recognition, service awards, commemorative events and official emblems.",
      },
    ],
  },
  {
    slug: "custom-medals",
    title: "Medal Types",
    shortLabel: "Medals",
    formProduct: "Medals",
    metaTitle: "Custom Medals | Award Medal Styles & Free Quote",
    description: "Compare custom medal styles for races, tournaments, ceremonies and branded recognition programs before requesting a quote.",
    heroEyebrow: "Medal Selection Guide",
    heroCopy: "Compare sports, running, school, corporate, event and commemorative medals by recipient, presentation and program goal. Choose the right medal category before reviewing finished product examples.",
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
        id: "medal-sports",
        href: "/products/custom-medals/silver-basketball-sports-medal-with-ribbon",
        buttonLabel: "Explore Sports Medals",
        copy: "Create custom sports medals with your logo, event name and choice of shape, color, plating and ribbon. Ideal for tournaments, leagues, clubs and team competitions.",
      },
      {
        eyebrow: "Made for Finishers and Race Events",
        title: "Marathon & Running Medals",
        image: "assets/images/type-medals-city-finisher-52195-ribbon.jpg",
        href: "/products/custom-medals/city-finisher-52195-ribbon-medal",
        buttonLabel: "Explore Running Medals",
        copy: "Custom finisher medals for marathons, 5K and 10K races, charity runs, trail races and virtual events, available with personalized artwork, finishes and event ribbons.",
      },
      {
        eyebrow: "iCelebrate Student Achievement",
        title: "Custom School & Academic Medals",
        image: "assets/images/type-medals-3d.png",
        href: "/products/custom-medals/3d-shield-logo-award-medal",
        buttonLabel: "Explore Academic Medals",
        copy: "Personalized school medals for academic achievement, student competitions, graduation ceremonies and recognition programs, customized with your school logo, text, colors and ribbon.",
      },
      {
        eyebrow: "Professional Recognition for Every Milestone",
        title: "Corporate Award Medals",
        image: "assets/images/type-medals-award.png",
        href: "/products/custom-medals/silver-race-award-medal-with-ribbon",
        buttonLabel: "Explore Award Medals",
        copy: "Custom award medals for employee recognition, company anniversaries, sales achievements and corporate events, available with branded artwork, premium finishes and presentation packaging.",
      },
      {
        eyebrow: "For Festivals, Charities & Community Events",
        title: "Custom Event Medals",
        image: "assets/images/type-medals-medal-depot-carnival-run.jpg",
        href: "/products/custom-medals/medal-depot-carnival-run-ribbon-medal",
        buttonLabel: "Explore Event Medals",
        copy: "Create custom event medals with your logo, artwork and event details. Ideal for festivals, charity events, community programs, club activities and branded promotional campaigns.",
      },
      {
        eyebrow: "Honor Milestones That Matter",
        title: "Commemorative Medals",
        image: "assets/images/type-medals-grielacher-ellene-anniversary.png",
        href: "/products/custom-medals/grielacher-ellene-anniversary-medal",
        buttonLabel: "Explore Commemorative Medals",
        copy: "Custom commemorative medals designed for anniversaries, ceremonies, service recognition, organizational milestones and special occasions, with personalized artwork, finishes and presentation options.",
      },
    ],
  },
  {
    slug: "custom-challenge-coins",
    title: "Challenge Coin Types",
    shortLabel: "Challenge Coins",
    formProduct: "Challenge Coins",
    metaTitle: "Custom Challenge Coins | Coin Styles & Free Quote",
    description: "Explore challenge coin styles including 3D, antique, double-sided and custom shape coins for teams, units and events.",
    heroEyebrow: "Challenge Coin Selection Guide",
    heroCopy: "Compare military, police, corporate, commemorative, club, event and fundraising challenge coins by recipient, presentation and program goal. Choose the right coin type before reviewing finished product examples.",
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
        id: "challenge-coin-military",
        href: "/products/custom-challenge-coins/marine-corps-forces-north-challenge-coin",
        buttonLabel: "Explore Military Coins",
        copy: "Create custom military challenge coins with unit insignia, 2D or 3D relief, enamel colors and antique finishes for deployments, promotions, veterans and service recognition.",
      },
      {
        eyebrow: "For Police, Fire & Public Safety Departments",
        title: "Custom Police & Firefighter Challenge Coins",
        image: "assets/images/type-coins-queensland-fire-emergency-service.png",
        alt: "Custom police and firefighter challenge coins with soft enamel",
        id: "challenge-coin-public-safety",
        href: "/products/custom-challenge-coins/queensland-fire-emergency-service-challenge-coin",
        buttonLabel: "Explore Public Safety Coins",
        copy: "Custom police and firefighter challenge coins featuring department emblems, detailed relief, soft enamel colors and personalized edge designs for awards, retirements and service commemorations.",
      },
      {
        eyebrow: "For Brands, Teams & Company Milestones",
        title: "Custom Corporate Challenge Coins",
        image: "assets/images/type-coins-50-years-service.jpg",
        alt: "Custom corporate challenge coins with logo and hard enamel",
        id: "challenge-coin-corporate",
        href: "/products/custom-challenge-coins/50-years-of-service-challenge-coin",
        buttonLabel: "Explore Corporate Coins",
        copy: "Branded corporate challenge coins with custom logos, hard enamel colors, polished plating and optional presentation packaging for employee recognition, company anniversaries and promotional gifts.",
      },
      {
        eyebrow: "For Anniversaries, Ceremonies & Milestones",
        title: "Custom Commemorative Challenge Coins",
        image: "assets/images/type-coins-double-sided.jpg",
        alt: "Double-sided commemorative challenge coins with antique plating",
        id: "challenge-coin-commemorative",
        href: "/products/custom-challenge-coins/double-sided-anniversary-challenge-coin",
        buttonLabel: "Explore Commemorative Coins",
        copy: "Personalized commemorative challenge coins with double-sided artwork, 2D or 3D details and antique plating for anniversaries, retirements, ceremonies and historical milestones.",
      },
      {
        eyebrow: "For Clubs, Schools & Member Organizations",
        title: "Custom Club & Association Challenge Coins",
        image: "assets/images/type-coins-ibew-eastern-wyoming.png",
        alt: "Custom shaped club challenge coins with enamel colors",
        id: "challenge-coin-club",
        href: "/products/custom-challenge-coins/ibew-eastern-wyoming-challenge-coin",
        buttonLabel: "Explore Club Coins",
        copy: "Custom club challenge coins featuring logos, mottos, member details, enamel colors and unique shapes for associations, schools, teams and membership recognition programs.",
      },
      {
        eyebrow: "For Events, Charities & Community Programs",
        title: "Custom Event & Fundraising Challenge Coins",
        image: "assets/images/type-coins-jennifer-jo-cobb-racing.png",
        alt: "Custom event and fundraising challenge coins with full-color printing",
        id: "challenge-coin-event",
        href: "/products/custom-challenge-coins/jennifer-jo-cobb-racing-challenge-coin",
        buttonLabel: "Explore Event Coins",
        copy: "Custom event coins with full-color printing, unique shapes, cutouts and optional functional features for fundraisers, charity campaigns, competitions and community events.",
      },
    ],
  },
  {
    slug: "custom-keychains",
    title: "Metal Keychain Styles",
    shortLabel: "Keychains",
    formProduct: "Keychains",
    metaTitle: "Custom Metal Keychains | Keychain Styles & Free Quote",
    description: "Compare custom metal keychain styles for brand promotions, souvenirs, retail gifts and practical everyday merchandise.",
    heroEyebrow: "Keychain Style Guide",
    heroCopy: "Compare 3D, enamel, bottle opener, spinner, PVC and leather keychains by artwork fit, construction and everyday function. Choose the right style before viewing finished keychain examples.",
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
        imageWidth: 1185,
        imageHeight: 1185,
        alt: "Custom 3D metal keychains with sculpted relief",
        href: "/products/custom-metal-keychains/tire-wheel-rim-keychain",
        buttonLabel: "Explore 3D Keychains",
        copy: "Create custom 3D metal keychains with sculpted relief, detailed logos and durable plating for branded merchandise, souvenirs, corporate gifts and promotional programs.",
      },
      {
        eyebrow: "Vibrant Color with Defined Metal Detail",
        title: "Custom Enamel Keychains",
        image: "assets/images/type-keychains-enamel.jpg",
        imageWidth: 750,
        imageHeight: 750,
        alt: "Custom enamel keychain with colorful logo design",
        href: "/products/custom-metal-keychains/palm-island-enamel-keychain",
        buttonLabel: "Explore Enamel Keychains",
        copy: "Custom enamel keychains combine vivid colors with raised metal outlines to reproduce logos, mascots and illustrated artwork for brands, events, schools and souvenir collections.",
      },
      {
        eyebrow: "Practical Function for Everyday Promotion",
        title: "Custom Bottle Opener Keychains",
        image: "assets/images/type-keychains-basketball-bottle-opener.jpg",
        imageWidth: 1296,
        imageHeight: 1500,
        alt: "Custom metal bottle opener keychain with logo",
        href: "/products/custom-metal-keychains/basketball-bottle-opener-keychain",
        buttonLabel: "Explore Opener Keychains",
        copy: "Combine a personalized metal keychain with a functional bottle opener for breweries, bars, restaurants, events, hospitality brands and promotional giveaways.",
      },
      {
        eyebrow: "Interactive Movement That Gets Noticed",
        title: "Custom Spinner Keychains",
        image: "assets/images/type-keychains-thin-blue-line-spinner-bottle-opener.jpg",
        imageWidth: 563,
        imageHeight: 1500,
        alt: "Custom spinner keychain with rotating center",
        href: "/products/custom-metal-keychains/thin-blue-line-spinner-bottle-opener-keychain",
        buttonLabel: "Explore Spinner Keychains",
        copy: "Add a rotating center or movable component to create an interactive custom keychain for sports events, tourism souvenirs, branded campaigns and collectible merchandise.",
      },
      {
        eyebrow: "Flexible Color for Bold Character Designs",
        title: "Custom PVC Keychains",
        image: "assets/images/type-keychains-rainbow-balloon-pvc.jpg",
        imageWidth: 750,
        imageHeight: 750,
        alt: "Rainbow balloon custom PVC keychain set",
        href: "/products/custom-metal-keychains/rainbow-balloon-pvc-keychain-set",
        buttonLabel: "Explore PVC Keychains",
        copy: "Use flexible PVC to reproduce bold colors, layered details and character artwork in a lightweight keychain for retail collections, events, schools and promotional programs.",
      },
      {
        eyebrow: "Tactile Finish for Premium Everyday Use",
        title: "Custom Leather Keychains",
        image: "assets/images/type-keychains-oval-office-leather-emblem.jpg",
        imageWidth: 1000,
        imageHeight: 1000,
        alt: "Oval leather keychain with a custom metal emblem",
        href: "/products/custom-metal-keychains/oval-office-leather-emblem-keychain",
        buttonLabel: "Explore Leather Keychains",
        copy: "Pair leather or leather-look material with a custom metal emblem for corporate gifts, automotive promotions, membership merchandise and practical branded accessories.",
      },
    ],
  },
  {
    slug: "custom-belt-buckles",
    title: "Belt Buckle Styles",
    shortLabel: "Belt Buckles",
    formProduct: "Belt Buckles",
    metaTitle: "Custom Belt Buckles | Buckle Styles & Free Quote",
    description: "Explore custom belt buckle styles for Western merchandise, clubs, fashion accessories and event awards.",
    heroEyebrow: "Belt Buckle Styles & Finishes",
    heroCopy: "Compare western, logo, antique and enamel belt buckle styles by artwork compatibility, surface finish and recommended application.",
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
        buttonLabel: "Explore Western Buckles",
        copy: "Western buckles suit rodeo events, clubs, fashion accessories and retail merchandise with bold relief artwork.",
      },
      {
        eyebrow: "Brand-first merchandise",
        title: "Logo Belt Buckles",
        image: "assets/images/type-buckles-logo.jpg",
        href: "/products/custom-belt-buckles/oval-relief-logo-metal-belt-buckle",
        buttonLabel: "Explore Logo Buckles",
        copy: "Logo buckles give brands, teams and organizations a larger metal surface for identity and detail.",
      },
      {
        eyebrow: "Classic metal depth",
        title: "Antique Belt Buckles",
        image: "assets/images/type-buckles-antique.jpg",
        href: "/products/custom-belt-buckles/antique-silver-rectangle-logo-belt-buckle",
        buttonLabel: "Explore Antique Buckles",
        copy: "Antique plating brings out raised and recessed details while giving the buckle a durable, collectible feel.",
      },
      {
        eyebrow: "Color and relief combined",
        title: "Enamel Belt Buckles",
        image: "assets/images/type-buckles-enamel.jpg",
        id: "belt-buckle-enamel",
        href: "/products/custom-belt-buckles/oval-club-logo-enamel-belt-buckle",
        buttonLabel: "Explore Enamel Buckles",
        copy: "Enamel buckles combine metal relief with color blocks for club logos, team marks and branded designs.",
      },
    ],
  },
  {
    slug: "custom-golf-ball-markers",
    title: "Golf Accessory Types",
    shortLabel: "Golf Ball Markers",
    formProduct: "Golf Accessories",
    metaTitle: "Custom Golf Ball Markers | Golf Accessories & Free Quote",
    description: "Compare custom golf ball markers, hat clips, divot tools and tournament gift set options before requesting a quote.",
    heroEyebrow: "Golf Ball Marker, Hat Clip & Divot Tool Types",
    heroCopy: "Compare golf ball markers, magnetic hat clips, divot tools and gift sets by on-course function, branding space and recommended use.",
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
        buttonLabel: "Explore Golf Ball Markers",
        copy: "Custom ball markers are compact, useful and easy to brand for tournaments, pro shops and membership gifts.",
      },
      {
        eyebrow: "Easy course access",
        title: "Golf Hat Clips",
        image: "assets/images/type-golf-hat-clip.jpg",
        href: "/products/custom-golf-accessories/avocado-golf-hat-clip-ball-marker",
        buttonLabel: "Explore Golf Hat Clips",
        copy: "Hat clips keep the marker visible and accessible, making them a stronger retail or club gift than loose markers.",
      },
      {
        eyebrow: "Higher-value gift sets",
        title: "Golf Divot Tools",
        image: "assets/images/type-golf-divot-tool.jpg",
        href: "/products/custom-golf-accessories/color-logo-golf-divot-tool-set",
        buttonLabel: "Explore Divot Tools",
        copy: "Divot tools can pair with magnetic markers for sponsor gifts, resort merchandise and tournament welcome packs.",
      },
      {
        eyebrow: "Retail-ready personality",
        title: "Golf Accessory Gift Sets",
        image: "assets/images/type-golf-animal-marker-set.jpg",
        id: "golf-accessory-gift-set",
        href: "/products/custom-golf-accessories/animal-character-golf-ball-marker-set",
        buttonLabel: "Explore Marker Sets",
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

const getMobileImageSource = (image, width) => {
  const normalizedImage = image.startsWith("/") ? image : `/${image}`;
  return `/_next/image?url=${encodeURIComponent(normalizedImage)}&w=${width}&q=72`;
};

const renderResponsiveImage = (image, alt, className = "", width = 640, imageWidth, imageHeight) => `
            <picture><source media="(max-width: 767px)" srcset="${escapeHtml(getMobileImageSource(image, width))}"><img${className ? ` class="${escapeHtml(className)}"` : ""} src="${escapeHtml(image)}"${imageWidth && imageHeight ? ` width="${imageWidth}" height="${imageHeight}"` : ""} alt="${escapeHtml(alt)}"></picture>`;

const renderHeroImages = (images, title) => images
  .map((image, index) => renderResponsiveImage(image, `${title} sample ${index + 1}`, `home-category-hero-image image-${index + 1}`, 640))
  .join("\n");

const renderHeroBackground = (page) => page.heroBackground
  ? `      ${renderResponsiveImage(page.heroBackground, `${page.title} banner`, "home-category-hero-bg", 828)}`
  : "";

const renderHeroVisual = (page) => page.heroBackground
  ? ""
  : `        <div class="home-category-hero-art" aria-label="${escapeHtml(page.title)} sample product collage">
${renderHeroImages(page.heroImages, page.title)}
        </div>`;

export const renderHomeProductLandingRows = (rows, headingTag = "h2") => {
  let visualIndex = 0;
  const rowHeadingTag = headingTag === "h3" ? "h3" : "h2";

  return rows
    .map((row) => {
      const buttonLabel = row.buttonLabel || "View Product";
      const imageAlt = row.alt || row.title;
      const rowId = row.id ? ` id="${escapeHtml(row.id)}"` : "";

      if (row.compact) {
        return `
        <article${rowId} class="home-category-row-mini${row.image ? " has-media" : ""}">
          ${row.image ? `<a class="home-category-mini-media" href="${escapeHtml(row.href)}">${renderResponsiveImage(row.image, imageAlt, "", 640, row.imageWidth, row.imageHeight)}</a>` : ""}
          <div class="home-category-mini-card">
            <span>${escapeHtml(row.eyebrow)}</span>
            <${rowHeadingTag}>${escapeHtml(row.title)}</${rowHeadingTag}>
            <p>${escapeHtml(row.copy)}</p>
            <a href="${escapeHtml(row.href)}">${escapeHtml(buttonLabel)}</a>
          </div>
        </article>`;
      }

      visualIndex += 1;
      const isReverse = row.reverse ?? visualIndex % 2 === 0;

      return `
        <article${rowId} class="home-category-row tone-${visualIndex}${isReverse ? " is-reverse" : ""}">
          <a class="home-category-row-media" href="${escapeHtml(row.href)}">
            ${renderResponsiveImage(row.image, imageAlt, "", 640, row.imageWidth, row.imageHeight)}
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

const renderRowsHeading = ({ rowsHeading, rowsHeadingId, rowsIntro }) => rowsHeading
  ? `
      <div class="container home-category-section-head">
        <h2${rowsHeadingId ? ` id="${escapeHtml(rowsHeadingId)}"` : ""}>${escapeHtml(rowsHeading)}</h2>
        ${rowsIntro ? `<p>${escapeHtml(rowsIntro)}</p>` : ""}
      </div>`
  : "";

export const renderHomeProductLandingRowsSection = (page, options = {}) => {
  const sectionClass = ["home-category-rows", options.sectionClass].filter(Boolean).join(" ");
  const rowsHeading = Object.hasOwn(options, "rowsHeading") ? options.rowsHeading : page.rowsHeading;
  const rowsHeadingId = options.rowsHeadingId || "";
  const rowsIntro = Object.hasOwn(options, "rowsIntro") ? options.rowsIntro : page.rowsIntro;
  const includeBackLink = options.includeBackLink ?? true;

  return String.raw`
    <section class="${escapeHtml(sectionClass)}" data-category-slug="${escapeHtml(page.slug)}" aria-label="${escapeHtml(page.title)} product styles">
${includeBackLink ? `      <div class="container home-category-row-nav">
        <a class="home-category-back-home" href="/">Back to Home</a>
      </div>` : ""}
${renderRowsHeading({ rowsHeading, rowsHeadingId, rowsIntro })}
      <div class="container home-category-row-wrap">
${renderHomeProductLandingRows(page.rows, options.rowHeadingTag || page.rowHeadingTag)}
      </div>
    </section>`;
};

const renderProductOptions = (selectedProduct) => productOptions
  .map((option) => `                  <option${option === selectedProduct ? " selected" : ""}>${escapeHtml(option)}</option>`)
  .join("\n");

const renderQuoteForm = (page) => `
    <section class="home-category-quote" id="quote">
      <div class="container">
        <div class="home-category-quote-head">
          <h2>Get a Free Quote</h2>
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
              <label for="${escapeHtml(page.slug)}-quote-artwork">Upload Artwork for a Free Proof</label>
              <label class="upload-box" for="${escapeHtml(page.slug)}-quote-artwork">
                <input id="${escapeHtml(page.slug)}-quote-artwork" type="file" name="artwork" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.psd,.cdr" aria-label="Upload artwork">
                <span class="upload-icon" aria-hidden="true">&#8593;</span>
                <span>Upload artwork or reference files for a free proof</span>
              </label>
            </div>
            <button class="btn btn-primary" type="submit">Get a Free Quote</button>
            <p class="form-commitment-note">We reply within 1 business day. Your artwork and project information are kept confidential.</p>
            <p class="form-privacy-note">We use the information you submit to respond to your inquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
            <p data-form-notice aria-live="polite" style="color: var(--navy); font-weight: 800;"></p>
          </form>
        </div>
      </div>
    </section>`;

export const renderHomeProductLandingHtml = (page) => String.raw`
  ${siteHeaderHtml({ active: "products" })}
  <main class="home-category-page" data-category-slug="${escapeHtml(page.slug)}">
    <section class="home-category-hero${page.heroBackground ? " has-background-image" : ""}">
${renderHeroBackground(page)}
      <div class="container home-category-hero-inner">
        <div class="home-category-hero-copy">
          <span>${escapeHtml(page.heroEyebrow || "Free Quote Form")}</span>
          <h1>${escapeHtml(page.title)}</h1>
          <p>${escapeHtml(page.heroCopy)}</p>
          <div class="home-category-hero-actions">
            <a class="btn btn-outline" href="/products">View All Products</a>
          </div>
        </div>
${renderHeroVisual(page)}
      </div>
    </section>
${renderHomeProductLandingRowsSection(page)}
${renderQuoteForm(page)}
  </main>
  ${footerHtml}`;
