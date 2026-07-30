export const SITE_URL = "https://uccrafts.com";

export const productCategories = {
  pins: {
    slug: "custom-enamel-pins",
    label: "Custom Enamel Pins",
  },
  coins: {
    slug: "custom-challenge-coins",
    label: "Custom Challenge Coins",
  },
  medals: {
    slug: "custom-medals",
    label: "Custom Medals",
  },
  keychains: {
    slug: "custom-metal-keychains",
    label: "Custom Metal Keychains",
  },
  buckles: {
    slug: "custom-belt-buckles",
    label: "Custom Belt Buckles",
  },
  "golf-accessories": {
    slug: "custom-golf-accessories",
    label: "Custom Golf Accessories",
  },
  "bottle-openers": {
    slug: "custom-bottle-openers",
    label: "Custom Bottle Openers",
  },
  "cufflinks-tieclips": {
    slug: "custom-cufflinks-tie-clips",
    label: "Custom Cufflinks & Tie Clips",
  },
  magnets: {
    slug: "custom-fridge-magnets",
    label: "Custom Fridge Magnets",
  },
};

export const categoryKeyByRouteSlug = Object.fromEntries(
  Object.entries(productCategories).map(([key, value]) => [value.slug, key]),
);

const categoryKeyByLabel = {
  "Lapel Pins": "pins",
  "Challenge Coins": "coins",
  Medals: "medals",
  Keychains: "keychains",
  "Belt Buckles": "buckles",
  "Golf Ball Markers & Hat Clips": "golf-accessories",
  "Bottle Openers": "bottle-openers",
  "Cufflinks & Tie Clips": "cufflinks-tieclips",
  "Fridge Magnets": "magnets",
};

export const getCategoryKeyForItem = (item) =>
  categoryKeyByLabel[item?.categoryLabel] || "pins";

export const getCategoryPath = (categoryKey) =>
  `/products/${productCategories[categoryKey]?.slug || productCategories.pins.slug}`;

export const getProductPath = (itemSlug, item) =>
  `${getCategoryPath(getCategoryKeyForItem(item))}/${itemSlug}`;

export const productItemCategoryKey = {
  "halloween-letter-s-soft-enamel-pin": "pins",
  "fire-breathing-queen-soft-enamel-pin": "pins",
  "winged-anime-character-soft-enamel-pin-set": "pins",
  "wizard-bunny-soft-enamel-pin-set": "pins",
  "horror-guts-soft-enamel-pin": "pins",
  "rosemount-irish-soft-enamel-pin": "pins",
  "tiger-face-soft-enamel-pin": "pins",
  "christmas-enamel-pin-set": "pins",
  "lost-my-way-floral-hard-enamel-pin": "pins",
  "yellow-character-hard-enamel-pin": "pins",
  "auburn-proud-soft-enamel-pin": "pins",
  "green-character-soft-enamel-pin-set": "pins",
  "box-cat-and-umbrella-cat-enamel-pins": "pins",
  "antique-silver-guitar-crest-enamel-pin": "pins",
  "glitter-tour-truck-printed-enamel-pin": "pins",
  "victoria-police-st-michael-challenge-coin": "coins",
  "jennifer-jo-cobb-racing-challenge-coin": "coins",
  "marine-nationale-commandant-challenge-coin": "coins",
  "houston-community-college-emt-challenge-coin": "coins",
  "dice-dungeons-inspiration-challenge-coin": "coins",
  "ibew-eastern-wyoming-challenge-coin": "coins",
  "marine-corps-daniel-joseph-moran-challenge-coin": "coins",
  "queensland-fire-emergency-service-challenge-coin": "coins",
  "wenatchee-ibew-local-191-challenge-coin": "coins",
  "canada-border-services-pacific-region-challenge-coin": "coins",
  "pow-mia-you-are-not-forgotten-challenge-coin": "coins",
  "norwegian-defense-family-legion-challenge-coin": "coins",
  "vancouver-police-retired-challenge-coin": "coins",
  "marina-de-guerra-peru-challenge-coin": "coins",
  "punish-blue-errors-aggressors-challenge-coin": "coins",
  "hmcs-bras-dor-royal-canadian-navy-challenge-coin": "coins",
  "saint-florian-firefighter-challenge-coin": "coins",
  "40-years-port-authority-challenge-coin": "coins",
  "stay-sharp-excellence-challenge-coin": "coins",
  "congressman-stephen-womack-challenge-coin": "coins",
  "marine-corps-forces-north-challenge-coin": "coins",
  "united-states-space-force-challenge-coin": "coins",
  "cocoa-fire-department-challenge-coin": "coins",
  "arikara-horns-up-front-challenge-coin": "coins",
  "dod-cyber-red-team-conference-challenge-coin": "coins",
  "storm-troopers-highway-patrol-challenge-coin": "coins",
  "vancouver-police-service-challenge-coin": "coins",
  "emergency-task-force-challenge-coin": "coins",
  "enlisted-advisor-military-challenge-coin": "coins",
  "information-warfare-capabilities-challenge-coin": "coins",
  "musee-de-larmee-1670-challenge-coin": "coins",
  "50-years-of-service-challenge-coin": "coins",
  "3d-antique-firefighter-challenge-coins": "coins",
  "double-sided-anniversary-challenge-coin": "coins",
  "christmas-bell-challenge-coin": "coins",
  "cut-shape-route-map-challenge-coin": "coins",
  "antique-military-squadron-challenge-coins": "coins",
  "kinderprinz-mascot-ribbon-medal": "medals",
  "weiss-blau-prinzenpaar-ribbon-medal": "medals",
  "grielacher-ellene-anniversary-medal": "medals",
  "aachener-stadtkadettchen-carnival-medal": "medals",
  "oecher-jonge-cathedral-ribbon-medal": "medals",
  "run-for-a-cause-rectangle-medal": "medals",
  "br-fernsehsitzung-carnival-ribbon-medal": "medals",
  "king-william-fair-ribbon-medal": "medals",
  "bergroup-beach-cup-ribbon-medal": "medals",
  "four-winds-kungfu-tournament-medal": "medals",
  "basketball-rope-design-ribbon-medal": "medals",
  "dreigestirn-carnival-ribbon-medal": "medals",
  "sea-doo-summer-series-medal-set": "medals",
  "new-zealand-open-jiu-jitsu-medal": "medals",
  "winter-bear-snow-sports-ribbon-medal": "medals",
  "hollywood-carnival-ribbon-medal": "medals",
  "butterfly-cocoon-ribbon-medal": "medals",
  "city-finisher-52195-ribbon-medal": "medals",
  "dongfeng-trucks-cup-marathon-medal": "medals",
  "medal-depot-carnival-run-ribbon-medal": "medals",
  "halloween-bicycle-race-ribbon-medal": "medals",
  "halloween-finisher-ribbon-medal": "medals",
  "swim-ribbon-medal-set": "medals",
  "weiss-blau-anniversary-ribbon-medal": "medals",
  "hofgrafen-kalscheuren-carnival-medal": "medals",
  "world-run-triathlon-medal-set": "medals",
  "ski-federation-ribbon-medal": "medals",
  "kolding-light-run-ribbon-medal": "medals",
  "bali-hogz-ribbon-medal": "medals",
  "half-marathon-ribbon-medal-set": "medals",
  "triko-gas-mask-ribbon-medal": "medals",
  "hanover-falcons-ribbon-medal": "medals",
  "altenhofen-summer-ribbon-medal": "medals",
  "wimbledon-common-half-marathon-medal": "medals",
  "carnival-family-ribbon-medal": "medals",
  "ocher-bojjerwenn-anniversary-ribbon-medal": "medals",
  "wish-cup-hockey-ribbon-medal": "medals",
  "silver-basketball-sports-medal-with-ribbon": "medals",
  "3d-shield-logo-award-medal": "medals",
  "silver-race-award-medal-with-ribbon": "medals",
  "blue-marathon-ribbon-medal": "medals",
  "gold-scn-ribbon-medal": "medals",
  "oval-office-leather-emblem-keychain": "keychains",
  "bradley-leather-emblem-keychain": "keychains",
  "wolf-emblem-leather-keychain": "keychains",
  "shield-emblem-leather-keychain": "keychains",
  "netherlands-map-leather-keychain": "keychains",
  "rainbow-balloon-pvc-keychain-set": "keychains",
  "monster-round-pvc-keychain-set": "keychains",
  "spooky-pumpkin-pvc-keychain": "keychains",
  "297-society-pvc-keychain": "keychains",
  "yellow-mouse-pvc-keychain": "keychains",
  "never-give-up-woven-label-keychain": "keychains",
  "anime-eyes-woven-label-keychain-set": "keychains",
  "japan-travel-woven-label-keychain-set": "keychains",
  "red-performance-woven-label-keychain-set": "keychains",
  "powerdays-woven-label-keychain-set": "keychains",
  "black-pet-paw-leather-keychain": "keychains",
  "memorial-paw-leather-keychain-set": "keychains",
  "brown-memorial-paw-leather-keychain": "keychains",
  "colorful-leather-strap-keychain-set": "keychains",
  "basketball-bottle-opener-keychain": "keychains",
  "thin-blue-line-spinner-bottle-opener-keychain": "keychains",
  "silver-logo-bottle-opener-keychain": "keychains",
  "yellow-team-bottle-opener-keychain": "keychains",
  "snowflake-charm-cluster-keychain": "keychains",
  "tire-wheel-rim-keychain": "keychains",
  "black-braided-leather-loop-keychain": "keychains",
  "purple-flower-pot-metal-keychain": "keychains",
  "plant-shop-storefront-keychain": "keychains",
  "graduate-school-logo-keychain-set": "keychains",
  "variegated-leaf-enamel-keychain": "keychains",
  "monstera-leaf-glitter-keychain": "keychains",
  "green-heart-leaf-metal-keychain": "keychains",
  "round-christmas-logo-keychain-set": "keychains",
  "san-andres-shark-enamel-keychain": "keychains",
  "colorful-flower-metal-keychains": "keychains",
  "palm-island-enamel-keychain": "keychains",
  "round-school-logo-bottle-opener-keychain": "keychains",
  "travel-charm-spinner-keychain": "keychains",
  "celtic-knot-antique-silver-belt-buckle": "buckles",
  "united-states-eagle-flag-belt-buckle": "buckles",
  "australia-horse-relief-belt-buckle": "buckles",
  "kowow-star-enamel-belt-buckle": "buckles",
  "blue-knights-mc-antique-belt-buckle": "buckles",
  "sunflower-horse-western-belt-buckle": "buckles",
  "california-highway-patrol-western-belt-buckle": "buckles",
  "motorcycle-rider-relief-belt-buckle": "buckles",
  "arizona-antique-relief-belt-buckle": "buckles",
  "cowboys-music-festival-belt-buckle": "buckles",
  "wood-badge-staff-belt-buckle": "buckles",
  "elephant-triangle-enamel-belt-buckle": "buckles",
  "nupe-logo-rectangle-belt-buckle": "buckles",
  "purple-horseshoe-oval-belt-buckle": "buckles",
  "gold-monogram-frame-belt-buckle": "buckles",
  "gold-anchor-monogram-belt-buckle": "buckles",
  "western-skull-relief-belt-buckle": "buckles",
  "oval-relief-logo-metal-belt-buckle": "buckles",
  "antique-silver-rectangle-logo-belt-buckle": "buckles",
  "oval-club-logo-enamel-belt-buckle": "buckles",
  "worlds-okayist-golfer-golf-hat-clip": "golf-accessories",
  "just-tap-it-in-golf-hat-clip": "golf-accessories",
  "hole-in-one-club-golf-hat-clip": "golf-accessories",
  "golfing-bad-golf-hat-clip": "golf-accessories",
  "weekend-forecast-golf-hat-clip": "golf-accessories",
  "usa-flag-golf-divot-tool": "golf-accessories",
  "jk-logo-golf-divot-tool-marker": "golf-accessories",
  "golf-player-divot-tool-gift-set": "golf-accessories",
  "price-is-wrong-golf-hat-clip": "golf-accessories",
  "bogey-king-logo-golf-hat-clip": "golf-accessories",
  "donut-golf-hat-clip-ball-marker": "golf-accessories",
  "animal-character-golf-ball-marker-set": "golf-accessories",
  "tap-tap-taparoo-golf-hat-clip": "golf-accessories",
  "bogey-king-golf-hat-clip": "golf-accessories",
  "born-to-golf-ball-marker": "golf-accessories",
  "life-is-always-good-golf-ball-marker": "golf-accessories",
  "antique-golf-club-divot-tool-ball-marker": "golf-accessories",
  "avocado-golf-hat-clip-ball-marker": "golf-accessories",
  "color-logo-golf-divot-tool-set": "golf-accessories",
  "playing-card-metal-bottle-opener": "bottle-openers",
  "skull-coin-keychain-bottle-opener": "bottle-openers",
  "round-logo-keychain-bottle-opener": "bottle-openers",
  "fish-shape-keychain-bottle-opener": "bottle-openers",
  "guitar-metal-bottle-opener": "bottle-openers",
  "red-logo-keychain-bottle-opener": "bottle-openers",
  "cap-lifter-keychain-bottle-opener": "bottle-openers",
  "ring-bottle-opener": "bottle-openers",
  "colorful-aluminum-keychain-bottle-opener": "bottle-openers",
  "souvenir-shape-bottle-opener": "bottle-openers",
  "blue-carbon-fiber-metal-cufflinks": "cufflinks-tieclips",
  "color-plated-metal-tie-clips": "cufflinks-tieclips",
  "black-skull-logo-cufflinks": "cufflinks-tieclips",
  "ornate-building-enamel-fridge-magnet": "magnets",
  "ferris-wheel-3d-metal-fridge-magnet": "magnets",
  "cartoon-character-soft-pvc-fridge-magnet": "magnets",
  "city-landmark-souvenir-fridge-magnet": "magnets",
};

const DEFAULT_BLOG_AUTHOR = "sunny";

const getTodayInShanghai = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const withBlogArticleDefaults = (article) => {
  const datePublished = article.datePublished || getTodayInShanghai();

  return {
    author: DEFAULT_BLOG_AUTHOR,
    ...article,
    datePublished,
    dateModified: article.dateModified || datePublished,
  };
};

const blogArticleData = {
  "2d-vs-3d-challenge-coins": {
    title: "2D vs 3D Challenge Coins: Which Is Right for Your Design?",
    description:
      "Compare 2D and 3D challenge coins by relief, detail, enamel color, cost and best uses. Learn which option fits your custom coin design.",
    author: "sunny",
    authorType: "Person",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    image: "/assets/images/2d-vs-3d-challenge-coins.webp",
    faq: [
      {
        question: "What is the main difference between 2D and 3D challenge coins?",
        answer:
          "A 2D challenge coin uses clearly separated raised and recessed levels. A 3D challenge coin uses gradual, sculpted transitions that create rounded surfaces and more natural depth. Both have physical relief, but they interpret artwork differently.",
      },
      {
        question: "Can 3D challenge coins include enamel color?",
        answer:
          "Yes. Enamel can be placed in defined recessed areas or surrounding 2D sections. It is less suitable for continuous sculpted contours because it may cover or reduce the visible relief.",
      },
      {
        question: "Is 2D or 3D better for a company logo?",
        answer:
          "Most flat company logos work well in 2D because the 2D format preserves clean outlines, lettering and brand colors. A dimensional crest or emblem may benefit from partial 3D relief.",
      },
      {
        question: "Can one side be 2D and the other side be 3D?",
        answer:
          "Yes. One side can feature sculpted artwork while the reverse uses 2D text, enamel colors or a secondary logo. This is a practical option when the two sides have different visual purposes.",
      },
      {
        question: "Do I need to provide a finished 3D model?",
        answer:
          "Not always. Clear artwork and high-resolution reference images may be enough to prepare a relief rendering. Complex portraits, vehicles and buildings benefit from references showing more than one angle.",
      },
    ],
  },
  "how-to-choose-personalized-golf-ball-markers": {
    title: "Personalized Golf Ball Markers with Hat Clips: Buyer Guide",
    description:
      "Compare sizes, materials, logo methods, magnetic hat clips, packaging and inspection requirements before ordering personalized golf ball markers.",
    author: "sunny",
    authorType: "Person",
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
    image: "/assets/images/blog-personalized-golf-ball-markers-card.webp",
    faq: [
      {
        question: "What is the best material for personalized golf ball markers?",
        answer:
          "There is no single best material. Zinc alloy suits die-cast shapes; iron can suit flatter magnetic pieces; brass feels premium; and stainless steel looks modern. Choose according to process, weight, finish, and clip construction.",
      },
      {
        question: "What size should a custom golf ball marker be?",
        answer:
          "For many standard hat-clip configurations, approximately 24-30 mm is a useful starting range, not a universal rule. Confirm the final size against the logo, weight, clip geometry, and packaging, then review the artwork at 100% physical scale.",
      },
      {
        question: "Should golf tournament ball markers include a hat clip?",
        answer:
          "A hat clip keeps the marker accessible and creates a more complete event gift. A loose marker may better suit economical giveaways or sets that already include a magnetic divot tool.",
      },
    ],
  },
  "how-custom-challenge-coins-are-made": {
    title: "How Are Custom Challenge Coins Made? A Step-by-Step Manufacturing Guide",
    description:
      "Learn how custom challenge coins are made, from artwork and tooling to die-striking, finishing, color filling, quality inspection and shipment preparation.",
    datePublished: "2026-07-24",
    dateModified: "2026-07-24",
    image: "/assets/images/blog-how-challenge-coins-made-card-v3.webp",
  },
  "custom-enamel-pins-no-moq-guide": {
    title: "Custom Enamel Pins with No Minimum Order: A Complete Guide",
    description:
      "Learn how no MOQ custom enamel pin orders work for samples, small batches and bulk orders, including artwork review, mold setup, unit cost, inspection and shipment preparation.",
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
    image: "/assets/images/blog-custom-enamel-pins-no-moq-products.png",
  },
  "custom-metal-crafts-guide": {
    title: "Complete Guide to Custom Metal Crafts: From Design to Production",
    description:
      "Learn how custom metal crafts are designed, manufactured, inspected and sourced for global B2B orders.",
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    image: "/assets/images/blog-custom-metal-crafts.jpg",
  },
  "soft-enamel-vs-hard-enamel-pins": {
    title: "Soft Enamel vs Hard Enamel Pins: Buyer Guide",
    description:
      "Compare soft enamel and hard enamel pins by finish, durability, cost, application and production requirements.",
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    image: "/assets/images/blog-soft-hard-enamel-pins-v2.webp",
  },
  "how-to-make-your-own-custom-lapel-pins": {
    title: "How to Make Your Own Custom Lapel Pins | Buyer Guide",
    description:
      "Learn how to make your own custom lapel pins, from artwork and material selection to sample approval, quality inspection, packaging and shipment.",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    image: "/assets/images/blog-lapel-pin-animal-samples.webp",
  },
  "custom-medals-vs-challenge-coins": {
    title: "Custom Medals vs Challenge Coins: Buyer Guide",
    description:
      "Compare custom medals and challenge coins by purpose, presentation, materials, finishes and ideal applications.",
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    image: "/assets/images/blog-medal-xball-front-back.png",
  },
};

export const blogArticles = Object.fromEntries(
  Object.entries(blogArticleData).map(([slug, article]) => [
    slug,
    withBlogArticleDefaults(article),
  ]),
);

export const normalizeSiteHtml = (html) =>
  html
    .replace(/href="\/blog\/([a-z0-9-]+)#\1"/g, 'href="/blog/$1"')
    .replace(
      /(<a class="mega-product"[^>]*>\s*)<img(?![^>]*\bloading=)(?![^>]*\bfetchpriority=)/g,
      '$1<img loading="lazy" decoding="async"',
    )
    .replace(
      /(<article class="product-type-card"[^>]*>\s*)<img(?![^>]*\bloading=)(?![^>]*\bfetchpriority=)/g,
      '$1<img loading="lazy" decoding="async"',
    )
    .replace(
      /(<a class="single-product-related-media"[^>]*>\s*)<img(?![^>]*\bloading=)(?![^>]*\bfetchpriority=)/g,
      '$1<img loading="lazy" decoding="async"',
    )
    .replace(
      /(<div class="cert">\s*)<img(?![^>]*\bloading=)(?![^>]*\bfetchpriority=)/g,
      '$1<img loading="lazy" decoding="async"',
    )
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll('href="assets/', 'href="/assets/');
