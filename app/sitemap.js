const SITE_URL = "https://uccrafts.com";
const LAST_MODIFIED = new Date("2026-07-15T00:00:00.000Z");

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/products.html", priority: 0.9 },
  { path: "/custom.html", priority: 0.85 },
  { path: "/about.html", priority: 0.8 },
  { path: "/contact.html", priority: 0.8 },
  { path: "/blog.html", priority: 0.7 },
  { path: "/faq.html", priority: 0.65 },
  { path: "/soft-enamel-pins.html", priority: 0.75 }
];

const productCategories = [
  "pins",
  "coins",
  "medals",
  "keychains",
  "buckles",
  "golf-accessories",
  "bottle-openers",
  "cufflinks-tieclips",
  "magnets"
];

const productItems = [
  "green-character-soft-enamel-pin-set",
  "box-cat-and-umbrella-cat-enamel-pins",
  "antique-silver-guitar-crest-enamel-pin",
  "glitter-tour-truck-printed-enamel-pin",
  "3d-antique-firefighter-challenge-coins",
  "double-sided-anniversary-challenge-coin",
  "cut-shape-route-map-challenge-coin",
  "antique-military-squadron-challenge-coins",
  "silver-basketball-sports-medal-with-ribbon",
  "3d-shield-logo-award-medal",
  "silver-race-award-medal-with-ribbon",
  "blue-marathon-ribbon-medal",
  "colorful-flower-metal-keychains",
  "palm-island-enamel-keychain",
  "round-school-logo-bottle-opener-keychain",
  "travel-charm-spinner-keychain",
  "western-skull-relief-belt-buckle",
  "oval-relief-logo-metal-belt-buckle",
  "antique-silver-rectangle-logo-belt-buckle",
  "oval-club-logo-enamel-belt-buckle",
  "antique-golf-club-divot-tool-ball-marker",
  "avocado-golf-hat-clip-ball-marker",
  "color-logo-golf-divot-tool-set",
  "playing-card-metal-bottle-opener",
  "skull-coin-keychain-bottle-opener",
  "blue-carbon-fiber-metal-cufflinks",
  "color-plated-metal-tie-clips",
  "black-skull-logo-cufflinks",
  "ornate-building-enamel-fridge-magnet",
  "ferris-wheel-3d-metal-fridge-magnet",
  "cartoon-character-soft-pvc-fridge-magnet",
  "city-landmark-souvenir-fridge-magnet"
];

export default function sitemap() {
  const staticEntries = staticPages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority
  }));

  const categoryEntries = productCategories.map((category) => ({
    url: `${SITE_URL}/product-detail.html?product=${category}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  const itemEntries = productItems.map((item) => ({
    url: `${SITE_URL}/product-item.html?item=${item}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.65
  }));

  return [...staticEntries, ...categoryEntries, ...itemEntries];
}
