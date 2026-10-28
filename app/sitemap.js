import {
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
  SITE_URL,
} from "./lib/siteRoutes";
import { blogArticles } from "./blog/articles";

import { productLastModified } from "./lib/productDates";

const CONTENT_LAST_MODIFIED = new Date("2026-08-22T00:00:00.000Z");

// Preserve legacy dates for products without a verified newer content date.
const getProductLastModified = (slug) => productLastModified[slug]
  ? new Date(`${productLastModified[slug]}T00:00:00.000Z`)
  : CONTENT_LAST_MODIFIED;

// A listing changes when products are added or their displayed content changes.
const getCategoryLastModified = (categoryKey) => new Date(Math.max(
  CONTENT_LAST_MODIFIED.getTime(),
  ...Object.entries(productItemCategoryKey)
    .filter(([, key]) => key === categoryKey)
    .map(([slug]) => getProductLastModified(slug).getTime()),
));

const getCatalogLastModified = () => new Date(Math.max(
  ...Object.keys(productCategories).map((key) => getCategoryLastModified(key).getTime()),
));

const getArticleLastModified = (article) => {
  const value = article.dateModified || article.datePublished;
  // An undated article must not inherit an unrelated site's fallback date.
  if (!value) return undefined;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? undefined : date;
};

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/custom", priority: 0.85 },
  { path: "/about", priority: 0.8 },
  { path: "/about/sunny-huang", priority: 0.5, lastModified: new Date("2026-09-01T00:00:00.000Z") },
  { path: "/contact", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
  { path: "/faq", priority: 0.65 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
];

export default function sitemap() {
  const staticEntries = staticPages.map(({ path, priority, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModified || (path === "/products"
      ? getCatalogLastModified()
      : CONTENT_LAST_MODIFIED),
    changeFrequency: "weekly",
    priority,
  }));

  const categoryEntries = Object.keys(productCategories).map((categoryKey) => ({
    url: `${SITE_URL}${getCategoryPath(categoryKey)}`,
    lastModified: getCategoryLastModified(categoryKey),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const itemEntries = Object.entries(productItemCategoryKey).map(
    ([itemSlug, categoryKey]) => ({
      url: `${SITE_URL}${getCategoryPath(categoryKey)}/${itemSlug}`,
      lastModified: getProductLastModified(itemSlug),
      changeFrequency: "monthly",
      priority: 0.65,
    }),
  );

  const articleEntries = Object.entries(blogArticles).map(([slug, article]) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: getArticleLastModified(article),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...categoryEntries,
    ...itemEntries,
    ...articleEntries,
  ];
}
