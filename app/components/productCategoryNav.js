import { getCategoryPath } from "../lib/siteRoutes";

export const productCategoryNavItems = [
  { label: "Lapel Pins", slug: "pins" },
  { label: "Challenge Coins", slug: "coins" },
  { label: "Medals", slug: "medals" },
  { label: "Keychains", slug: "keychains" },
  { label: "Belt Buckles", slug: "buckles" },
  { label: "Golf Accessories", slug: "golf-accessories" },
  { label: "Bottle Openers", slug: "bottle-openers" },
  { label: "Cufflinks & Tie Clips", slug: "cufflinks-tieclips" },
  { label: "Fridge Magnets", slug: "magnets" },
  { label: "Patches", slug: "patchs" },
  { label: "Others", slug: "others" },
];

const getProductCategoryAttributes = ({ active, mode, slug }) => {
  const isFilterMode = mode === "filter";
  const data = isFilterMode ? ` data-product-filter="${slug}"` : ` data-product-nav="${slug}"`;
  const isActive = active === slug;

  return {
    className: isActive ? ' class="active"' : "",
    data,
    aria: isActive ? ' aria-current="page"' : "",
  };
};

const getActiveProductCategoryLabel = (active = "all") => {
  if (active === "all") return "All";
  return productCategoryNavItems.find(({ slug }) => slug === active)?.label || "All";
};

export function productCategorySidebarHtml({ active = "all", mode = "links" } = {}) {
  const isFilterMode = mode === "filter";
  const allData = isFilterMode ? ' data-product-filter="all"' : ' data-product-nav="all"';
  const allActive = active === "all";
  const categoryLinks = [
    `<li><a${allActive ? ' class="active"' : ""} href="/products"${allData}${allActive ? ' aria-current="page"' : ""}>All</a></li>`,
    ...productCategoryNavItems.map(({ label, slug }) => {
      const href = getCategoryPath(slug);
      const attrs = getProductCategoryAttributes({ active, mode, slug });
      return `<li><a${attrs.className} href="${href}"${attrs.data}${attrs.aria}>${label}</a></li>`;
    }),
  ].join("\n              ");

  return String.raw`
          <aside class="product-category-sidebar" aria-label="Product categories">
            <h2 class="product-category-sidebar-title">PRODUCT CATEGORIES</h2>
            <nav class="products-category-nav" aria-label="Product categories">
              <ul>
              ${categoryLinks}
              </ul>
            </nav>
          </aside>
          <details class="product-category-disclosure">
            <summary>
              <span class="product-category-sidebar-heading">PRODUCT CATEGORIES</span>
              <span class="product-category-sidebar-current">${getActiveProductCategoryLabel(active)}</span>
            </summary>
            <nav class="products-category-nav" aria-label="Product categories">
              <ul>
              ${categoryLinks}
              </ul>
            </nav>
          </details>`;
}

export function productCategoryNavHtml({ active = "all", mode = "links", variant = "section" } = {}) {
  const isFilterMode = mode === "filter";
  const allHref = "/products";
  const allData = isFilterMode ? ' data-product-filter="all"' : ' data-product-nav="all"';
  const categoryLinks = productCategoryNavItems.map(({ label, slug }) => {
    const href = getCategoryPath(slug);
    const data = isFilterMode ? ` data-product-filter="${slug}"` : ` data-product-nav="${slug}"`;
    const activeClass = active === slug ? ' class="active"' : "";
    return `<a${activeClass} href="${href}"${data}>${label}</a>`;
  }).join("\n          ");

  const navHtml = String.raw`
        <nav class="mega products-category-nav" aria-label="Product categories">
          <a${active === "all" ? ' class="active"' : ""} href="${allHref}"${allData}>All</a>
          ${categoryLinks}
        </nav>`;

  if (variant === "inline") {
    return String.raw`
          <div class="products-category-section products-category-section-inline">
            ${navHtml}
          </div>`;
  }

  return String.raw`
    <section class="section products-category-section">
      <div class="container">
        ${navHtml}
      </div>
    </section>`;
}
