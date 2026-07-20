import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import {
  blogArticles,
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
  SITE_URL,
} from "./lib/siteRoutes";

const projectRoot = process.cwd();

const toUnixPath = (filePath) => filePath.replaceAll(path.sep, "/");

const getGitLastModified = (filePath) => {
  try {
    const output = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", toUnixPath(filePath)],
      {
        cwd: projectRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();

    return output ? new Date(output) : null;
  } catch {
    return null;
  }
};

const getFileLastModified = (filePath) => {
  const absolutePath = path.join(projectRoot, filePath);
  if (!existsSync(absolutePath)) return null;

  const gitDate = getGitLastModified(filePath);
  if (gitDate && !Number.isNaN(gitDate.getTime())) return gitDate;

  const modifiedAt = statSync(absolutePath).mtime;
  return Number.isNaN(modifiedAt.getTime()) ? null : modifiedAt;
};

const latestDate = (filePaths) => {
  const timestamps = filePaths
    .map(getFileLastModified)
    .filter(Boolean)
    .map((date) => date.getTime());

  return new Date(Math.max(...timestamps, 0));
};

const staticPageFiles = {
  "/": ["app/page.jsx"],
  "/products": ["app/products/page.jsx", "app/components/productCategoryNav.js"],
  "/custom": ["app/custom/page.jsx"],
  "/about": ["app/about/page.jsx"],
  "/contact": ["app/contact/page.jsx"],
  "/blog": ["app/blog/content.js", "app/blog/page.jsx"],
  "/faq": ["app/faq/page.jsx"],
  "/soft-enamel-pins": ["app/soft-enamel-pins/page.jsx"],
};

const categoryPageFiles = [
  "app/product-detail/content.js",
  "app/products/[category]/page.jsx",
  "app/components/productCategoryNav.js",
];

const itemPageFiles = [
  "app/product-item/content.js",
  "app/products/[category]/[item]/page.jsx",
];

const articlePageFiles = [
  "app/blog/content.js",
  "app/blog/[slug]/page.jsx",
  "app/blog/[slug]/BlogArticleRepair.jsx",
];

const getRouteLastModified = (...routeFiles) =>
  latestDate(routeFiles);

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
    lastModified: getRouteLastModified(...(staticPageFiles[path] || [])),
    changeFrequency: "weekly",
    priority,
  }));

  const categoryEntries = Object.keys(productCategories).map((categoryKey) => ({
    url: `${SITE_URL}${getCategoryPath(categoryKey)}`,
    lastModified: getRouteLastModified(...categoryPageFiles),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const itemEntries = Object.entries(productItemCategoryKey).map(
    ([itemSlug, categoryKey]) => ({
      url: `${SITE_URL}${getCategoryPath(categoryKey)}/${itemSlug}`,
      lastModified: getRouteLastModified(...itemPageFiles),
      changeFrequency: "monthly",
      priority: 0.65,
    }),
  );

  const articleEntries = Object.keys(blogArticles).map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: getRouteLastModified(...articlePageFiles),
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
