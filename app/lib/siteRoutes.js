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
  patchs: {
    slug: "custom-patches",
    label: "Custom Patches",
  },
  others: {
    slug: "others",
    label: "Other Custom Products",
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
  "Golf Accessories": "golf-accessories",
  "Bottle Openers": "bottle-openers",
  "Cufflinks & Tie Clips": "cufflinks-tieclips",
  "Fridge Magnets": "magnets",
  Patches: "patchs",
  Others: "others",
  Other: "others",
};

export const getCategoryKeyForItem = (item) =>
  categoryKeyByLabel[item?.categoryLabel] || "pins";

export const getCategoryPath = (categoryKey) =>
  `/products/${productCategories[categoryKey]?.slug || productCategories.pins.slug}`;

export const getProductPath = (itemSlug, item) =>
  `${getCategoryPath(getCategoryKeyForItem(item))}/${itemSlug}`;

export const productItemCategoryKey = {
  "uv-printed-masquerade-day-lapel-pin": "pins",
  "skull-axe-3d-zinc-alloy-lapel-pin": "pins",
  "aaa-antique-round-lapel-pin": "pins",
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
  "custom-woven-dragon-round-patch": "patchs",
  "custom-embroidered-cartoon-character-patch": "patchs",
  "custom-embroidered-death-patch": "patchs",
  "custom-embroidered-squadron-patch": "patchs",
  "custom-embroidered-taco-logo-patch": "patchs",
  "custom-embroidered-army-wing-patch": "patchs",
  "custom-embroidered-spain-flag-patch": "patchs",
  "custom-embroidered-flag-velcro-patch": "patchs",
  "custom-embroidered-nabi-letter-patch": "patchs",
  "custom-metal-dog-tag": "others",
  "custom-silicone-planet-qr-dog-tag": "others",
  "custom-silicone-bone-qr-dog-tag": "others",
  "custom-silicone-rocket-qr-dog-tag": "others",
  "custom-silicone-sausage-dog-tag": "others",
  "custom-silicone-pink-bone-dog-tag": "others",
};

export const DEFAULT_BLOG_AUTHOR_SCHEMA = {
  "@type": "Person",
  name: "Sunny Huang",
};

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
    author: DEFAULT_BLOG_AUTHOR_SCHEMA.name,
    authorType: DEFAULT_BLOG_AUTHOR_SCHEMA["@type"],
    ...article,
    datePublished,
    dateModified: article.dateModified || datePublished,
  };
};

export const buildBlogAuthorSchema = (article = {}) => {
  const authorName = article.author || DEFAULT_BLOG_AUTHOR_SCHEMA.name;
  const authorType = authorName === DEFAULT_BLOG_AUTHOR_SCHEMA.name
    ? DEFAULT_BLOG_AUTHOR_SCHEMA["@type"]
    : article.authorType || DEFAULT_BLOG_AUTHOR_SCHEMA["@type"];

  return {
    "@type": authorType,
    name: authorName,
    ...(article.authorUrl
      ? { url: new URL(article.authorUrl, SITE_URL).toString() }
      : {}),
  };
};

const blogArticleData = {
  "patch-shapes-guide": {
    title: "Patch Shapes Guide: How to Choose the Best Custom Shape",
    headline: "Patch Shapes Guide: How to Choose the Right Shape for a Custom Patch",
    description:
      "Compare round, rectangular, shield, oval and custom patch shapes. Learn how artwork, placement, borders and size affect the best shape for your design.",
    image: "/assets/images/patch-shapes-guide.webp",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    schemaType: "BlogPosting",
    faq: [
      {
        question: "What are the most common patch shapes?",
        answer:
          "Circle, oval, square, rectangle and shield are among the most common choices. Custom patches can also follow a simplified logo, mascot or product silhouette.",
      },
      {
        question: "What is the best shape for a custom patch?",
        answer:
          "There is no single best shape. The right option depends on the artwork proportions, text, finished size, border and intended placement.",
      },
      {
        question: "Can a patch follow the exact shape of my logo?",
        answer:
          "Often it can, but small projections, deep recesses and disconnected elements may need to be simplified or placed inside a supporting background shape.",
      },
      {
        question: "Which patch shapes work best on hats?",
        answer:
          "Compact ovals, rounded rectangles and simple custom shapes are useful starting points. The best choice depends on the hat panel, patch dimensions, material and backing.",
      },
      {
        question: "Can an irregular patch have a merrowed border?",
        answer:
          "Some smooth, simple custom outlines may support a merrowed border. Complex shapes with tight corners or deep cut-ins generally require a different edge treatment. The final choice should be confirmed from the actual artwork.",
      },
    ],
  },
  "uses-for-custom-patches": {
    title: "11 Creative and Practical Uses for Custom Patches",
    headline: "11 Creative and Practical Uses for Custom Patches",
    description:
      "Discover 11 practical and creative uses for custom patches on clothing, uniforms, hats, bags, event merchandise, wedding gifts, home decor and packaging.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    image: "/assets/images/common-uses-for-custom-patches.webp",
    schemaType: "Article",
  },
  "how-many-race-medals-to-order": {
    title: "How Many Race Medals Should You Order? Quantity Guide",
    headline: "How Many Race Medals Should You Order? A Practical Calculator for Race Directors",
    description:
      "Estimate finisher, placement and age-group medal quantities with a practical race medal calculator covering registrations, reserves and multiple distances.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-24",
    dateModified: "2026-08-24",
    image: "/assets/images/how-many-race-medals-to-order-b2.webp",
    schemaType: "Article",
    faq: [
      {
        question: "Should I order a medal for every registered runner?",
        answer:
          "Only if that matches the event's policy or registration is the safest planning ceiling. Otherwise forecast eligible finishers, then add separately counted recipients and a documented reserve.",
      },
      {
        question: "How many extra finisher medals should I order?",
        answer:
          "There is no universal figure. Build the reserve from open-registration uncertainty, data quality, operational risks, additional recipients and replacement commitments.",
      },
      {
        question: "Should a DNF participant receive a medal?",
        answer:
          "That is an event-policy decision. State the rule before registration and apply it consistently.",
      },
      {
        question: "How many race medals should I order for a 5K?",
        answer:
          "Estimate eligible finishers, then add late entries, promised recipients, an operational reserve and replacement stock.",
      },
      {
        question: "Can one medal design cover several race distances?",
        answer:
          "Yes, if one shared design is intentional. Distances can also be differentiated through ribbons, reverse details or packaging. Use a version map so volunteers distribute the correct pieces.",
      },
      {
        question: "What happens if the event runs out of medals?",
        answer:
          "Record affected participants and communicate only a verified remedy and realistic delivery expectations. Afterwards, compare the forecast with actual eligibility and distribution records.",
      },
    ],
  },
  "finisher-medals-vs-placement-medals": {
    title: "Finisher Medals vs Placement Medals: Race Award Guide",
    headline: "Finisher Medals vs Placement Medals: How to Plan Awards for Races and Sports Events",
    description:
      "Compare finisher, placement and age-group medals, then plan fair award categories and race-day distribution for 5Ks, marathons and sports events.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-20",
    dateModified: "2026-08-24",
    image: "/assets/images/finisher-vs-placement-medals-og.webp",
    schemaType: "Article",
    faq: [
      {
        question: "Do you get a medal for completing a 5K?",
        answer:
          "It depends on the event. Many charity, themed and community 5Ks provide finisher medals, while some competitive or low-cost races reserve awards for leading finishers. Check the registration page.",
      },
      {
        question: "What does a finisher medal mean?",
        answer:
          "A finisher medal represents the completion of a defined event or distance. It recognizes effort and achievement rather than competitive rank.",
      },
      {
        question: "What is the difference between a finisher medal and a participation medal?",
        answer:
          "A finisher medal recognizes completion of a defined challenge. A participation medal recognizes taking part and may not require completion. The wording should match the eligibility rules.",
      },
      {
        question: "Can a runner receive both an overall and an age-group award?",
        answer:
          "Some events allow both awards; others move the age-group award to the next eligible athlete. Publish the rule before results are calculated.",
      },
      {
        question: "Should runners who do not finish receive a medal?",
        answer:
          "There is no universal rule. Eligibility for a finisher medal should match the event's published definition of finishing. Other participants may have a separate recognition policy.",
      },
      {
        question: "How many race medals should an organizer order?",
        answer:
          "Calculate finisher, placement, age-group and team medals separately using registration data, event history, category rules, eligible rosters and an approved reserve.",
      },
    ],
  },
  "memorial-challenge-coins-guide": {
    title: "Memorial Challenge Coins: Meaning, Design & Etiquette",
    headline: "Memorial Challenge Coins: How to Create a Respectful Tribute",
    description:
      "Learn what memorial challenge coins mean, what to place on each side, and how to choose respectful wording, symbols, finishes and presentation.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    image: "/assets/images/memorial-challenge-coins-guide.webp",
    schemaType: "Article",
    faq: [
      {
        question: "What is a memorial challenge coin?",
        answer:
          "It is a metal keepsake created to remember a person, group or meaningful shared experience. It may be carried, displayed or presented to family members, colleagues or organization members.",
      },
      {
        question: "What is the difference between a memorial coin and a commemorative coin?",
        answer:
          "A memorial coin focuses on remembrance of a person or loss. A commemorative coin usually marks an event, anniversary, retirement or milestone. One project can serve both purposes.",
      },
      {
        question: "What information should be included?",
        answer:
          "Common elements include a name, dates, role, short dedication and one or two meaningful symbols. Include only information that can be verified and read clearly.",
      },
      {
        question: "Can a photograph be used on a memorial coin?",
        answer:
          "Yes, when the image quality and usage permission are suitable. It may need to be simplified for relief or reproduced through an appropriate printing method.",
      },
      {
        question: "When are remembrance coins presented?",
        answer:
          "They may be given privately, at a memorial service, during an anniversary gathering or at an organization event. Follow the wishes of the recipients and organization rather than an assumed universal custom.",
      },
      {
        question: "Do I need permission to use a department badge or military emblem?",
        answer:
          "Often, yes. The rights holder should confirm whether the mark may be reproduced. For U.S. Military Service marks, consult the relevant Trademark Licensing Program Office.",
      },
    ],
  },
  "military-challenge-coin-traditions": {
    title: "Military Challenge Coin Traditions, Meaning and Etiquette",
    headline: "Military Challenge Coin Traditions: Meaning, History and How They Are Presented",
    description:
      "Explore military challenge coin traditions, their debated history, meaning, presentation etiquette, coin checks, common types, symbols and modern uses.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    image: "/assets/images/military-challenge-coin-tradition-handshake-clean-og.webp",
    schemaType: "Article",
  },
  "custom-metal-keychain-materials": {
    title: "Custom Metal Keychain Materials: 4 Metals Compared",
    headline: "Custom Metal Keychain Materials: Zinc Alloy vs Brass vs Stainless Steel vs Iron",
    description:
      "Compare zinc alloy, brass, stainless steel and iron for custom metal keychains. Choose the right metal by design, durability, finish, application and budget.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    image: "/assets/images/custom-metal-keychain-materials-comparison.webp",
    faq: [
      {
        question: "What is the best material for a custom metal keychain?",
        answer:
          "The best material depends on the design and use. Zinc alloy suits complex 3D shapes, brass supports premium merchandise, stainless steel may suit flat corrosion-resistant designs when the grade is appropriate, and iron-based construction is practical for simple cost-sensitive orders.",
      },
      {
        question: "Is zinc alloy better than stainless steel?",
        answer:
          "Neither is universally better. Zinc alloy offers greater freedom for die-cast shapes and sculpted relief. Stainless steel is more suitable for many flat, engraved or moisture-exposed applications.",
      },
      {
        question: "Which material is normally the most economical?",
        answer:
          "Iron-based steel is often economical for a simple stamped design. However, tooling, size, thickness, surface treatment, hardware, packaging and quantity determine the total project cost.",
      },
      {
        question: "Can an iron-based keychain rust?",
        answer:
          "Unprotected iron-based steel can corrode. Plating or coating reduces the risk, but damaged or incompletely covered areas may remain vulnerable. Surface protection and packaging should be confirmed for humid destinations.",
      },
      {
        question: "Should buyers approve a physical sample?",
        answer:
          "A physical sample is recommended when thickness, weight, surface finish, 3D relief, functionality or retail presentation matters. Photographs cannot fully communicate balance, surface feel or hardware performance.",
      },
    ],
  },
  "keychain-attachments-guide": {
    title: "Keychain Attachments Guide: Rings, Clasps & Chains",
    headline: "Keychain Attachments: How to Choose Rings, Clasps, Chains and Loops",
    description:
      "Compare keychain rings, clasps, chains and loops, then choose the right attachment for your product material, weight, use and packaging.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    image: "/assets/images/keychain-attachments-guide.webp",
    faq: [
      {
        question: "Is a split ring better than a lobster clasp?",
        answer:
          "Neither is universally better. A split ring suits ordinary keys; a lobster clasp is easier to clip onto bags or straps. Choose according to the receiving point and removal frequency.",
      },
      {
        question: "What attachment should I use for a bag charm?",
        answer:
          "A lobster or swivel clasp can clip onto a suitable bag ring or loop. Measure that receiving point and confirm the clasp opening.",
      },
      {
        question: "Can the attachment be changed after the artwork is approved?",
        answer:
          "Sometimes, but it may change the connector, hanging direction, finished length and packaging. Review an updated proof or sample.",
      },
    ],
  },
  "custom-metal-keychain-size-attachment-guide": {
    title: "Custom Metal Keychain Size, Thickness & Attachment Guide",
    headline: "Custom Metal Keychain Size, Thickness and Attachment Guide",
    description:
      "Compare custom metal keychain sizes, thicknesses, split rings, chains, swivel hooks and other attachments before approving artwork or placing a bulk order.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-17",
    dateModified: "2026-08-26",
    image: "/assets/images/custom-metal-keychain-size-attachment-guide.webp",
    faq: [
      {
        question: "What is the standard size of a custom metal keychain?",
        answer:
          "There is no single standard size for every custom metal keychain. Choose a body size that keeps the artwork clear and the finished assembly practical, then confirm body dimensions separately from the overall finished length.",
      },
      {
        question: "How thick should a metal keychain be?",
        answer:
          "Some flat stamped or enamel designs may be discussed at approximately 1.5-2.0 mm during early quotation. That reference does not apply to every design. Die-cast, deep-relief, 3D, bottle-opener and moving structures may need a different body thickness after artwork review.",
      },
      {
        question: "What is the difference between body size and finished length?",
        answer:
          "Body size describes the custom metal component. Finished length describes the assembled product, including rings, chains, hooks or clasps. Both should appear separately on the quotation or approval drawing.",
      },
      {
        question: "Which keychain attachment is the most practical?",
        answer:
          "A split ring is often practical for direct key attachment, while a lobster clasp or swivel hook can be easier for bags and removable merchandise. The best choice depends on handling, orientation, appearance, package size and the complete assembly.",
      },
      {
        question: "Should buyers approve a physical sample before mass production?",
        answer:
          "A physical sample is recommended when size, thickness, weight, relief, hardware, function, finish or packaging matters. It lets the buyer check the real assembly before those details are repeated in bulk production.",
      },
    ],
  },
  "custom-marathon-medals-guide": {
    title: "Custom Marathon Medals: Size, Ribbon, Finish & QC Guide",
    headline: "Custom Marathon Medals Guide: Size, Ribbon, Finish and Factory QC Tips",
    description:
      "Plan custom marathon medals for running events with practical tips on size, ribbon, finish, lead time, factory testing and shipment inspection.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-06",
    dateModified: "2026-08-24",
    image: "/assets/images/blog-custom-marathon-medals-hero.webp",
    faq: [
      {
        question: "What size should custom marathon medals be?",
        answer:
          "Many full marathon medals start around 80 to 90 mm, while 50 to 70 mm can work for 5K, 10K and community races. The right size depends on artwork detail, medal weight, ribbon comfort, budget and packaging.",
      },
      {
        question: "What information should be on a race medal?",
        answer:
          "A race medal usually includes the event name, distance, year and main visual identity. It may also include the city, route shape, sponsor mark, charity symbol or finisher wording.",
      },
      {
        question: "Are 2D or 3D medals better for running events?",
        answer:
          "2D medals are better for clean logos, text and race distance marks. 3D medals are better for sculpted landmarks, runners, mountains and premium depth. Many custom race medals use both methods.",
      },
      {
        question: "How early should I order custom running medals?",
        answer:
          "Order as early as possible and allow time for artwork proofing, sample approval, production, shipment inspection, international shipping and local distribution before race day.",
      },
      {
        question: "What affects the production time for custom marathon medals?",
        answer:
          "Artwork changes, custom shapes, 3D relief, enamel colors, ribbon printing, packaging and shipping method can all affect the schedule. Share the required in-hands date so the factory can plan proofing, production and inspection backward from race day.",
      },
      {
        question: "Can one medal design be used for different race distances?",
        answer:
          "Yes. Many buyers use the same medal body with different ribbon colors, back printing, inserts or packaging labels for 5K, 10K, half marathon and full marathon categories.",
      },
    ],
  },
  "challenge-coin-size-guide": {
    title: "Challenge Coin Size Guide: Diameter, Thickness and Uses",
    headline: "Challenge Coin Size and Thickness Guide: How to Choose the Right Dimensions",
    description:
      "Compare challenge coin sizes and thicknesses, from 1.5 to 2.5 inches. Learn how artwork, 3D relief, use and packaging affect your choice.",
    author: "Sunny Huang",
    authorType: "Person",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    image: "/assets/images/blog-challenge-coin-size-guide-hero.webp",
    faq: [
      {
        question: "What is the standard challenge coin size?",
        answer:
          "There is no mandatory standard. Common custom sizes range from about 1.5 to 2.5 inches. Start around 1.75 inches for concise pocket-carry designs and 2 inches for more detailed artwork.",
      },
      {
        question: "Is a 1.75-inch or 2-inch challenge coin better?",
        answer:
          "Choose 1.75 inches for a clear emblem and limited wording. Choose 2 inches for a detailed seal, several text lines or complex double-sided artwork. Compare both layouts at actual size.",
      },
      {
        question: "How thick should a challenge coin be?",
        answer:
          "For standard round coins, our current production reference is 2.0 to 3.0 mm for diameters of 25 to 45 mm, 3.0 to 3.5 mm for 46 to 70 mm, about 3.5 mm for 71 to 90 mm, and 4 mm or more for diameters of 91 mm and above. Artwork, relief and shape can change the final recommendation.",
      },
      {
        question: "Does a thicker coin always mean better quality?",
        answer:
          "No. Quality also depends on artwork, tooling, plating, enamel, polishing, inspection and packaging. Extra thickness can add weight without improving readability or finish.",
      },
      {
        question: "What size is best for a 3D challenge coin?",
        answer:
          "Many 3D projects benefit from 2 inches or more because sculpted contours need room to transition. Portraits, buildings, vehicles and detailed scenes may require more diameter and relief height than a simple raised emblem.",
      },
      {
        question: "How is an irregular challenge coin measured?",
        answer:
          "Specify custom-shaped coins by maximum width and height, with the quoted size tied to the longest dimension. Mark cutouts, narrow sections and projections on the proof.",
      },
    ],
  },
  "2d-vs-3d-challenge-coins": {
    title: "2D vs 3D Challenge Coins: Which Is Better for Your Design?",
    description:
      "Compare 2D and 3D challenge coins by relief, detail, enamel color, cost and best uses. Learn which option fits your custom coin design.",
    author: "Sunny Huang",
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
    author: "Sunny Huang",
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
    dateModified: "2026-08-26",
    image: "/assets/images/blog-how-challenge-coins-made-card-v3.webp",
    faq: [
      {
        question: "How long does it take to manufacture challenge coins?",
        answer:
          "Manufacturing time depends on artwork approval, mold complexity, quantity, finish, color work, packing method, and shipping route. Share the required delivery date at the first inquiry.",
      },
      {
        question: "What artwork files should I submit?",
        answer:
          "Vector files such as AI, PDF, EPS, or SVG are helpful, but a logo, sketch, reference image, or clear concept can also be used for initial review.",
      },
      {
        question: "Can both sides of a challenge coin be customized?",
        answer:
          "Yes. Many custom challenge coins use both front and back designs. The back side can include a motto, date, unit name, event name, serial number, QR code, or secondary logo.",
      },
    ],
  },
  "custom-enamel-pins-no-moq-guide": {
    title: "Custom Enamel Pins with No MOQ: A Complete Guide",
    description:
      "Learn how No MOQ custom enamel pin orders work for samples, small batches and bulk orders, including artwork review, mold setup, unit cost, inspection and shipment preparation. Mold fees and unit prices are calculated by project.",
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
    title: "Soft Enamel vs Hard Enamel Pins: Cost, Durability & Uses",
    description:
      "Compare soft enamel vs hard enamel pins by texture, cost, durability, artwork limits and best uses before ordering custom pins.",
    datePublished: "2026-07-15",
    dateModified: "2026-08-05",
    image: "/assets/images/blog-soft-hard-enamel-pins-v2.webp",
    faq: [
      {
        question: "What is the main difference between soft enamel and hard enamel pins?",
        answer:
          "Soft enamel pins have recessed color areas and raised metal lines, creating a textured surface. Hard enamel pins are filled and polished so the enamel and metal sit nearly level, creating a smooth finish.",
      },
      {
        question: "Are hard enamel pins more durable than soft enamel pins?",
        answer:
          "Hard enamel generally offers better resistance to everyday surface wear because of its polished, level finish. Soft enamel remains suitable for most promotional uses, and an epoxy coating can add protection while changing the surface appearance.",
      },
      {
        question: "Which enamel pin type is more cost-effective for bulk orders?",
        answer:
          "Soft enamel is usually the more economical choice because it requires fewer finishing and polishing steps. Final price still depends on size, quantity, plating, number of colors, attachments and packaging.",
      },
      {
        question: "Should retail enamel pins use soft or hard enamel?",
        answer:
          "Both can work for retail. Hard enamel suits a smooth, premium presentation, while soft enamel provides stronger texture and raised metal detail. The best choice depends on the artwork, target price and brand position.",
      },
    ],
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
    title: "Custom Medals vs Challenge Coins for Events & Soccer",
    description:
      "Compare custom medals vs challenge coins for soccer tournaments, team recognition, events and collectible gifts, including cost and design factors.",
    datePublished: "2026-07-15",
    dateModified: "2026-08-05",
    image: "/assets/images/blog-medal-xball-front-back.png",
    faq: [
      {
        question: "Are medals or challenge coins better for a soccer tournament?",
        answer:
          "Medals are usually better for player participation, finalist and champion awards because they can be worn during the ceremony. Challenge coins are better for coaches, volunteers, sponsors, club anniversaries and collectible team gifts.",
      },
      {
        question: "Can a soccer event use both medals and challenge coins?",
        answer:
          "Yes. A tournament can award medals to players and use matching challenge coins for officials, sponsors, VIPs or commemorative merchandise. Shared artwork and plating can keep both products visually consistent.",
      },
      {
        question: "Which product usually needs more packaging?",
        answer:
          "Medals commonly need ribbons and individual bags, while challenge coins may use pouches, capsules or presentation boxes. Packaging should be selected according to the recipient and distribution method.",
      },
    ],
  },
};

export const blogArticles = Object.fromEntries(
  Object.entries(blogArticleData).map(([slug, article]) => [
    slug,
    withBlogArticleDefaults(article),
  ]),
);

const addImagePerformanceDefaults = (html) =>
  html.replace(/<img\b([^>]*)>/g, (match, attrs) => {
    let nextAttrs = attrs;
    const isPriorityImage = /\bfetchpriority=/.test(nextAttrs)
      || /\bclass=["'][^"']*\bhero-bg\b/.test(nextAttrs)
      || /\bclass=["'][^"']*\bsingle-product-main-image\b/.test(nextAttrs)
      || /\bdata-main-image\b/.test(nextAttrs)
      || /\balt=["']Unique Pin logo["']/.test(nextAttrs);

    if (!/\bdecoding=/.test(nextAttrs)) {
      nextAttrs += ' decoding="async"';
    }

    if (!isPriorityImage && !/\bloading=/.test(nextAttrs)) {
      nextAttrs += ' loading="lazy"';
    }

    return `<img${nextAttrs}>`;
  });

export const normalizeSiteHtml = (html) =>
  addImagePerformanceDefaults(html
    .replaceAll("Golf Ball Markers &amp;Hat Clips", "Golf Accessories")
    .replaceAll("Golf Ball Markers &amp; Hat Clips", "Golf Accessories")
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
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('poster="assets/', 'poster="/assets/')
    .replaceAll('data-video-src="assets/', 'data-video-src="/assets/')
    .replaceAll('data-video-poster="assets/', 'data-video-poster="/assets/'));
