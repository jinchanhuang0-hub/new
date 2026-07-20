import {
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
} from "./app/lib/siteRoutes.js";

const staticHtmlRedirects = [
  ["products.html", "/products"],
  ["soft-enamel-pins.html", "/soft-enamel-pins"],
  ["custom.html", "/custom"],
  ["about.html", "/about"],
  ["blog.html", "/blog"],
  ["faq.html", "/faq"],
  ["contact.html", "/contact"],
].map(([source, destination]) => ({
  source: `/${source}`,
  destination,
  statusCode: 301,
}));

const legacyCategoryRedirects = Object.entries(productCategories).map(
  ([categoryKey, category]) => ({
    source: "/product-detail.html",
    has: [
      {
        type: "query",
        key: "product",
        value: categoryKey,
      },
    ],
    destination: `/products/${category.slug}`,
    statusCode: 301,
  }),
);

const legacyItemRedirects = Object.entries(productItemCategoryKey).map(
  ([itemSlug, categoryKey]) => ({
    source: "/product-item.html",
    has: [
      {
        type: "query",
        key: "item",
        value: itemSlug,
      },
    ],
    destination: `${getCategoryPath(categoryKey)}/${itemSlug}`,
    statusCode: 301,
  }),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301
      },
      ...staticHtmlRedirects,
      ...legacyCategoryRedirects,
      ...legacyItemRedirects,
      {
        source: "/product-detail.html",
        destination: "/products/custom-enamel-pins",
        statusCode: 301,
      },
      {
        source: "/product-item.html",
        destination: "/products",
        statusCode: 301,
      },
    ];
  }
};

export default nextConfig;
