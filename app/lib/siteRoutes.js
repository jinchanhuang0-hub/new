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
  "green-character-soft-enamel-pin-set": "pins",
  "box-cat-and-umbrella-cat-enamel-pins": "pins",
  "antique-silver-guitar-crest-enamel-pin": "pins",
  "glitter-tour-truck-printed-enamel-pin": "pins",
  "3d-antique-firefighter-challenge-coins": "coins",
  "double-sided-anniversary-challenge-coin": "coins",
  "cut-shape-route-map-challenge-coin": "coins",
  "antique-military-squadron-challenge-coins": "coins",
  "silver-basketball-sports-medal-with-ribbon": "medals",
  "3d-shield-logo-award-medal": "medals",
  "silver-race-award-medal-with-ribbon": "medals",
  "blue-marathon-ribbon-medal": "medals",
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

export const blogArticles = {
  "custom-metal-crafts-guide": {
    title: "Complete Guide to Custom Metal Crafts: From Design to Production",
    description:
      "Learn how custom metal crafts are designed, manufactured, inspected and sourced for global B2B orders.",
  },
  "soft-enamel-vs-hard-enamel-pins": {
    title: "Soft Enamel vs Hard Enamel Pins: Buyer Guide",
    description:
      "Compare soft enamel and hard enamel pins by finish, durability, cost, application and production requirements.",
  },
  "custom-medals-vs-challenge-coins": {
    title: "Custom Medals vs Challenge Coins: Buyer Guide",
    description:
      "Compare custom medals and challenge coins by purpose, presentation, materials, finishes and ideal applications.",
  },
};

export const normalizeSiteHtml = (html) => {
  let normalized = html
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('href="products.html"', 'href="/products"')
    .replaceAll('href="custom.html"', 'href="/custom"')
    .replaceAll('href="about.html"', 'href="/about"')
    .replaceAll('href="blog.html"', 'href="/blog"')
    .replaceAll('href="faq.html"', 'href="/faq"')
    .replaceAll('href="contact.html"', 'href="/contact"')
    .replaceAll('href="soft-enamel-pins.html"', 'href="/soft-enamel-pins"');

  for (const [key, category] of Object.entries(productCategories)) {
    normalized = normalized
      .replaceAll(
        `href="product-detail.html?product=${key}#custom-details"`,
        `href="/products/${category.slug}#custom-details"`,
      )
      .replaceAll(
        `href="product-detail.html?product=${key}"`,
        `href="/products/${category.slug}"`,
      );
  }

  for (const [slug, categoryKey] of Object.entries(productItemCategoryKey)) {
    normalized = normalized.replaceAll(
      `href="product-item.html?item=${slug}"`,
      `href="${getCategoryPath(categoryKey)}/${slug}"`,
    );
  }

  for (const slug of Object.keys(blogArticles)) {
    normalized = normalized
      .replaceAll(`href="blog.html#${slug}"`, `href="/blog/${slug}"`)
      .replaceAll(`href="/blog#${slug}"`, `href="/blog/${slug}"`);
  }

  return normalized;
};
