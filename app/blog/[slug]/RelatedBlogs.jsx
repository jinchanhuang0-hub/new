import { blogArticles } from "../../lib/siteRoutes";

const decodeHtml = (value = "") =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const getAttribute = (markup, name) =>
  markup.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || "";

export function getBlogCards(blogHtml) {
  const cards = [];
  const cardPattern = /<a\s+class="blog-feature-card"([^>]*)>([\s\S]*?)<\/a>/g;
  let match;

  while ((match = cardPattern.exec(blogHtml))) {
    const attributes = match[1];
    const body = match[2];
    const href = getAttribute(attributes, "href");
    const slug = href.match(/^\/blog\/([a-z0-9-]+)$/)?.[1];
    if (!slug || !blogArticles[slug]) continue;

    const imageMarkup = body.match(/<img\b[^>]*>/)?.[0] || "";
    const categories = getAttribute(attributes, "data-blog-category")
      .split(",")
      .map((category) => category.trim())
      .filter(Boolean);

    cards.push({
      slug,
      href,
      categories,
      image: getAttribute(imageMarkup, "src").replace(/^assets\//, "/assets/"),
      imageAlt: decodeHtml(getAttribute(imageMarkup, "alt")),
      imageFit: getAttribute(attributes, "data-card-image-fit"),
      title: decodeHtml(body.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1])
        || blogArticles[slug].headline
        || blogArticles[slug].title,
      excerpt: decodeHtml(body.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1])
        || blogArticles[slug].description,
    });
  }

  return cards;
}

export function getRelatedBlogs(blogHtml, slug, limit = 3) {
  const cards = getBlogCards(blogHtml);
  const current = cards.find((card) => card.slug === slug);
  if (!current?.categories.length) return [];

  return cards
    .filter((card) => card.slug !== slug)
    .map((card, index) => ({
      ...card,
      index,
      score: card.categories.reduce((score, category) => {
        const categoryIndex = current.categories.indexOf(category);
        return score + (categoryIndex < 0 ? 0 : current.categories.length - categoryIndex);
      }, 0),
    }))
    .filter((card) => card.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit);
}

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export function buildRelatedBlogsHtml(blogHtml, slug) {
  const related = getRelatedBlogs(blogHtml, slug);
  if (!related.length) return "";

  const cards = related.map((item) => {
    const tags = item.categories.slice(0, 2)
      .map((category) => `<span>${escapeHtml(category)}</span>`)
      .join("");
    const imageClass = item.imageFit ? ` class="related-blog-image-${escapeHtml(item.imageFit)}"` : "";
    const media = item.image
      ? `<span class="related-blog-media">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" width="1600" height="900" loading="lazy" decoding="async"${imageClass}>
        <span class="related-blog-tags" aria-hidden="true">${tags}</span>
      </span>`
      : `<span class="related-blog-media">
        <span class="blog-feature-placeholder" role="img" aria-label="Image pending upload"><span>${escapeHtml(item.title)}</span></span>
        <span class="related-blog-tags" aria-hidden="true">${tags}</span>
      </span>`;

    return `<a class="related-blog-card" href="${escapeHtml(item.href)}">
      ${media}
      <span class="related-blog-content">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.excerpt)}</span>
      </span>
    </a>`;
  }).join("");

  return `<section class="related-blogs" aria-labelledby="related-blogs-heading">
    <div class="related-blogs-inner">
      <h2 id="related-blogs-heading">Related Blogs</h2>
      <div class="related-blogs-grid related-blogs-count-${related.length}">${cards}</div>
    </div>
  </section>`;
}
