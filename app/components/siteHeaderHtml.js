const navItems = [
  { key: "home", href: "/", label: "Home" },
  { key: "products", href: "/products", label: "Products" },
  { key: "custom", href: "/custom", label: "Custom" },
  { key: "about", href: "/about", label: "About Us" },
  { key: "blog", href: "/blog", label: "Blog" },
  { key: "contact", href: "/contact", label: "Contact Us" },
];

const megaProducts = [
  {
    href: "/products/custom-enamel-pins",
    image: "assets/images/mega-lapel-pins-christmas-candy-tight.webp",
    alt: "Christmas candy cane custom enamel pin",
    label: "Lapel Pins",
    copy: "Custom enamel pins for brands, events and clubs.",
  },
  {
    href: "/products/custom-medals",
    image: "assets/images/mega-medals-christmas-reindeer-zoom2.webp",
    alt: "Christmas reindeer custom medal with ribbon",
    label: "Medals",
    copy: "Colorful award medals with ribbons and finishes.",
  },
  {
    href: "/products/custom-challenge-coins",
    image: "assets/images/mega-challenge-coin-snowman-tight.webp",
    alt: "Christmas snowman custom challenge coin",
    label: "Challenge Coins",
    copy: "Detailed coins for recognition and commemorations.",
  },
];

const megaLinks = [
  { href: "/products/custom-enamel-pins", label: "Lapel Pins" },
  { href: "/products/custom-challenge-coins", label: "Challenge Coins" },
  { href: "/products/custom-medals", label: "Medals" },
  { href: "/products/custom-metal-keychains", label: "Keychains" },
  { href: "/products/custom-belt-buckles", label: "Belt Buckles" },
  { href: "/products/custom-golf-accessories", label: "Golf Accessories" },
  { href: "/products/custom-bottle-openers", label: "Bottle Openers" },
  { href: "/products/custom-cufflinks-tie-clips", label: "Cufflinks &amp; Tie Clips" },
  { href: "/products/custom-fridge-magnets", label: "Fridge Magnets" },
  { href: "/products/custom-patchs", label: "Patches" },
  { href: "/products/others", label: "Others" },
];

const renderMegaMenu = (isActive) => String.raw`
          <div class="nav-item products-menu">
            <a${isActive ? ' class="active"' : ""} href="/products">Products</a>
            <div class="mega-dropdown" role="menu" aria-label="Products mega menu">
              <div class="mega-panel">
                <div class="mega-featured">
                  ${megaProducts.map((product) => String.raw`<a class="mega-product" href="${product.href}"><img src="${product.image}" alt="${product.alt}"><span>${product.label}</span><small>${product.copy}</small></a>`).join("")}
                </div>
                <div class="mega-list">
                  ${megaLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
                </div>
                <div class="mega-cta">
                  <div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div>
                  <a class="btn btn-yellow" href="/contact">Get a Free Quote</a>
                </div>
              </div>
            </div>
          </div>`;

export const siteHeaderHtml = ({ active = "" } = {}) => {
  const productMenu = renderMegaMenu(active === "products");

  const navHtml = navItems
    .map((item) => {
      if (item.key === "products") return productMenu;
      const activeClass = active === item.key ? ' class="active"' : "";
      return `<a${activeClass} href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return String.raw`
  <div class="topbar">
    <div class="container">
      <span>Team Metal Craft Experience Since 2003</span>
      <span>Email: ceo@chinauniquepin.com | WhatsApp: +86 18895316838</span>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="/">
        <img src="assets/images/logo.png" alt="Unique Pin logo">
        <span><strong>Unique Pin</strong><span>Custom Metal Gifts Factory</span></span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        ${navHtml}
      </nav>
      <div class="nav-actions">
        <a class="btn btn-primary" href="/contact">Get a Free Quote</a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">&#9776;</button>
      </div>
    </div>
  </header>`;
};
