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
  "3d-antique-firefighter-challenge-coins": "coins",
  "double-sided-anniversary-challenge-coin": "coins",
  "christmas-bell-challenge-coin": "coins",
  "cut-shape-route-map-challenge-coin": "coins",
  "antique-military-squadron-challenge-coins": "coins",
  "silver-basketball-sports-medal-with-ribbon": "medals",
  "3d-shield-logo-award-medal": "medals",
  "silver-race-award-medal-with-ribbon": "medals",
  "blue-marathon-ribbon-medal": "medals",
  "gold-scn-ribbon-medal": "medals",
  "colorful-flower-metal-keychains": "keychains",
  "palm-island-enamel-keychain": "keychains",
  "round-school-logo-bottle-opener-keychain": "keychains",
  "travel-charm-spinner-keychain": "keychains",
  "western-skull-relief-belt-buckle": "buckles",
  "oval-relief-logo-metal-belt-buckle": "buckles",
  "antique-silver-rectangle-logo-belt-buckle": "buckles",
  "oval-club-logo-enamel-belt-buckle": "buckles",
  "antique-golf-club-divot-tool-ball-marker": "golf-accessories",
  "avocado-golf-hat-clip-ball-marker": "golf-accessories",
  "color-logo-golf-divot-tool-set": "golf-accessories",
  "playing-card-metal-bottle-opener": "bottle-openers",
  "skull-coin-keychain-bottle-opener": "bottle-openers",
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
  "how-custom-challenge-coins-are-made": {
    title: "How Are Custom Challenge Coins Made? A Step-by-Step Manufacturing Guide",
    description:
      "Learn how custom challenge coins are made, from artwork and tooling to die-striking, finishing, color filling, quality inspection and shipment preparation.",
    datePublished: "2026-07-24",
    dateModified: "2026-07-24",
    image: "/assets/images/blog-how-challenge-coins-made-card.webp",
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
    image: "/assets/images/blog-soft-enamel-pins.jpg",
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
