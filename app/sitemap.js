import {
  blogArticles,
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
  SITE_URL,
} from "./lib/siteRoutes";

const LAST_MODIFIED = new Date("2026-07-20T00:00:00.000Z");

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/custom", priority: 0.85 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
  { path: "/faq", priority: 0.65 },
  { path: "/soft-enamel-pins", priority: 0.75 },
];

export default function sitemap() {
  const staticEntries = staticPages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority,
  }));

  const categoryEntries = Object.keys(productCategories).map((categoryKey) => ({
    url: `${SITE_URL}${getCategoryPath(categoryKey)}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const itemEntries = Object.entries(productItemCategoryKey).map(
    ([itemSlug, categoryKey]) => ({
      url: `${SITE_URL}${getCategoryPath(categoryKey)}/${itemSlug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.65,
    }),
  );

  const articleEntries = Object.keys(blogArticles).map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: LAST_MODIFIED,
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
