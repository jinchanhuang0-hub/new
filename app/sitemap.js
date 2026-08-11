import {
  blogArticles,
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
  SITE_URL,
} from "./lib/siteRoutes";
import { homeProductLandingPages } from "./product-category/categoryLandingData";

const CONTENT_LAST_MODIFIED = new Date("2026-07-31T00:00:00.000Z");

const getArticleLastModified = (article) => {
  const value = article.dateModified || article.datePublished;
  const date = value ? new Date(`${value}T00:00:00.000Z`) : CONTENT_LAST_MODIFIED;
  return Number.isNaN(date.getTime()) ? CONTENT_LAST_MODIFIED : date;
};

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/custom", priority: 0.85 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
  { path: "/faq", priority: 0.65 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
];

export default function sitemap() {
  const staticEntries = staticPages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority,
  }));

  const categoryEntries = Object.keys(productCategories).map((categoryKey) => ({
    url: `${SITE_URL}${getCategoryPath(categoryKey)}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const homeProductLandingEntries = homeProductLandingPages.map((page) => ({
    url: `${SITE_URL}/product-category/${page.slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const itemEntries = Object.entries(productItemCategoryKey).map(
    ([itemSlug, categoryKey]) => ({
      url: `${SITE_URL}${getCategoryPath(categoryKey)}/${itemSlug}`,
      lastModified: CONTENT_LAST_MODIFIED,
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
    ...homeProductLandingEntries,
    ...categoryEntries,
    ...itemEntries,
    ...articleEntries,
  ];
}
