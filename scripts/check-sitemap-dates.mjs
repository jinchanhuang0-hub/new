import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import vm from "node:vm";

const routes = readFileSync("app/lib/siteRoutes.js", "utf8").replace(/export /g, "");
const dates = readFileSync("app/lib/productDates.js", "utf8").replace(/export /g, "");
const evaluate = (source) => vm.runInNewContext(`${routes}\n${dates}\n${source
  .replace(/import[\s\S]*?from "[^"\n]+";/g, "")
  .replace("export default function", "function")}\nJSON.stringify(sitemap())`);
const current = JSON.parse(evaluate(readFileSync("app/sitemap.js", "utf8")));
const previous = JSON.parse(evaluate(execFileSync("git", ["show", "7c86115:app/sitemap.js"], { encoding: "utf8" })));
assert.deepEqual(current.map(({ url, ...rest }) => url), previous.map(({ url }) => url));
assert.equal(new Set(current.map(({ url }) => url)).size, current.length);
const byUrl = new Map(current.map((entry) => [entry.url, entry]));
let changed = 0;
for (const before of previous) {
  const after = byUrl.get(before.url);
  assert.equal(after.priority, before.priority);
  assert.equal(after.changeFrequency, before.changeFrequency);
  if (before.url.includes("/blog/")) assert.deepEqual(after, before);
  if (before.lastModified !== after.lastModified) changed++;
}
for (const [commit, expected, count] of [["e34b2f5", "2026-10-07", 16], ["97744e8", "2026-10-05", 35]]) {
  const diff = execFileSync("git", ["show", commit, "--", "app/lib/siteRoutes.js"], { encoding: "utf8" });
  const parentRoutes = execFileSync("git", ["show", `${commit}^:app/lib/siteRoutes.js`], { encoding: "utf8" });
  const slugs = [...diff.matchAll(/^\+  "([^"]+)": "[^"]+",/gm)].map((match) => match[1]).filter((slug) => !parentRoutes.includes(`"${slug}":`));
  assert.equal(slugs.length, count);
  for (const slug of slugs) assert.equal(current.find(({ url }) => url.endsWith(`/${slug}`))?.lastModified, `${expected}T00:00:00.000Z`);
}
for (const [path, date] of [
  ["/products/custom-cufflinks-tie-clips", "2026-10-07"],
  ["/products/others", "2026-10-07"],
  ["/products/custom-fridge-magnets", "2026-10-05"],
  ["/products/custom-patches", "2026-10-05"],
  ["/products", "2026-10-07"],
  ["/products/custom-enamel-pins/yellow-character-hard-enamel-pin", "2026-08-22"],
  ["/blog/custom-pet-tags", "2026-10-09"],
]) assert.equal(byUrl.get(`https://uccrafts.com${path}`)?.lastModified, `${date}T00:00:00.000Z`);
// Verify Next's actual production XML, not just the generator's return value.
const xml = readFileSync(".next/server/app/sitemap.xml.body", "utf8");
const xmlEntries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, body]) => ({
  url: body.match(/<loc>(.*?)<\/loc>/)[1],
  lastModified: body.match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
}));
assert.deepEqual(xmlEntries, current.map(({ url, lastModified }) => ({ url, lastModified })));
console.log(`Verified ${current.length} XML URLs; ${changed} verified date corrections; all blog dates and URL order unchanged.`);
