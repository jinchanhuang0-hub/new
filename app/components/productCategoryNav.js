import { getCategoryPath } from "../lib/siteRoutes";

const productCategories = [
  { label: "Lapel Pins", slug: "pins" },
  { label: "Challenge Coins", slug: "coins" },
  { label: "Medals", slug: "medals" },
  { label: "Keychains", slug: "keychains" },
  { label: "Belt Buckles", slug: "buckles" },
  { label: "Golf Ball Markers &amp;Hat Clips", slug: "golf-accessories" },
  { label: "Bottle Openers", slug: "bottle-openers" },
  { label: "Cufflinks & Tie Clips", slug: "cufflinks-tieclips" },
  { label: "Fridge Magnets", slug: "magnets" },
];

export function productCategoryNavHtml({ active = "all", mode = "links", variant = "section" } = {}) {
  const isFilterMode = mode === "filter";
  const allHref = "/products";
  const allData = isFilterMode ? ' data-product-filter="all"' : ' data-product-nav="all"';
  const categoryLinks = productCategories.map(({ label, slug }) => {
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
