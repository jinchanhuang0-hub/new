// Run after npm run build: node --experimental-vm-modules scripts/check-sitemap-dates.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import vm from "node:vm";
import path from "node:path";
const cache = new Map();
async function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const mod = new vm.SourceTextModule(readFileSync(file, "utf8"), { identifier: file });
  cache.set(file, mod);
  await mod.link((name) => load(path.resolve(path.dirname(file), name + (path.extname(name) ? "" : ".js"))));
  return mod;
}
const mod = await load("app/sitemap.js");
await mod.evaluate();
const current = JSON.parse(JSON.stringify(mod.namespace.default()));
const routes = cache.get(path.resolve("app/lib/siteRoutes.js")).namespace;
const articles = cache.get(path.resolve("app/blog/articles.js")).namespace.blogArticles;
const dates = cache.get(path.resolve("app/lib/productDates.js")).namespace;
const byUrl = new Map(current.map((entry) => [entry.url, entry]));
assert.equal(byUrl.size, current.length);
assert.equal(current.length, 11 + Object.keys(routes.productCategories).length + Object.keys(routes.productItemCategoryKey).length + Object.keys(articles).length);
for (const [slug, article] of Object.entries(articles)) {
  assert.equal(byUrl.get(`${routes.SITE_URL}/blog/${slug}`).lastModified, `${article.dateModified || article.datePublished}T00:00:00.000Z`);
}
for (const [commit, expected, count] of [["e34b2f5", "2026-10-07", 16], ["97744e8", "2026-10-05", 35]]) {
  const diff = execFileSync("git", ["show", commit, "--", "app/lib/siteRoutes.js"], { encoding: "utf8" });
  const parent = execFileSync("git", ["show", `${commit}^:app/lib/siteRoutes.js`], { encoding: "utf8" });
  const slugs = [...diff.matchAll(/^\+  "([^"]+)": "[^"]+",/gm)].map(m => m[1]).filter(slug => !parent.includes(`"${slug}":`));
  assert.equal(slugs.length, count);
  for (const slug of slugs) {
    assert.equal(dates.productLastModified[slug], expected);
    assert.equal(current.find(e => e.url.endsWith(`/${slug}`)).lastModified, `${expected}T00:00:00.000Z`);
  }
}
for (const [key, category] of Object.entries(routes.productCategories)) {
  const expected = ["2026-08-22", dates.categoryLastModified[key], ...Object.entries(routes.productItemCategoryKey).filter(([, value]) => value === key).map(([slug]) => dates.productLastModified[slug])].filter(Boolean).sort().at(-1);
  assert.equal(byUrl.get(`${routes.SITE_URL}${routes.getCategoryPath(key)}`).lastModified, `${expected}T00:00:00.000Z`);
}
assert.equal(byUrl.get(`${routes.SITE_URL}/products`).lastModified, "2026-10-24T00:00:00.000Z");
assert.ok(!current.some(e => e.url.includes("kowow-star")));
for (const entry of current) if (entry.lastModified) assert.ok(Date.parse(entry.lastModified) <= Date.now());
const xml = readFileSync(".next/server/app/sitemap.xml.body", "utf8");
const xmlEntries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, body]) => ({url: body.match(/<loc>(.*?)<\/loc>/)[1], lastModified: body.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]}));
assert.deepEqual(xmlEntries, current.map(({url, lastModified}) => ({url, lastModified})));
console.log(`Verified ${current.length} XML URLs, all ${Object.keys(articles).length} current blog dates, 51 October products, category dates, removed product and catalog date.`);
