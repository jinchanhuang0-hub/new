const getPageShell = (html) => {
  const mainStart = html.indexOf("<main");
  const mainOpenEnd = html.indexOf(">", mainStart) + 1;
  const mainEnd = html.lastIndexOf("</main>");

  return {
    beforeMain: html.slice(0, mainStart),
    mainOpen: html.slice(mainStart, mainOpenEnd),
    afterMain: html.slice(mainEnd + "</main>".length),
  };
};

export const buildCategoryHtml = (html, categoryKey, categoryLabel) => {
  const shell = getPageShell(html);
  const sectionPattern = new RegExp(
    `<section class="product-type-section" data-product-content="${categoryKey}"(?: hidden)?>[\\s\\S]*?<\\/section>`,
  );
  const section = (
    html.match(sectionPattern)?.[0]?.replace(/\s+hidden(?=[\s>])/i, "") || ""
  ).replace(
    '<div class="product-type-grid',
    `<h2 class="product-type-grid-title">Available ${categoryLabel} Styles</h2><div class="product-type-grid`,
  );

  return `${shell.beforeMain}<main class="product-types-page" id="custom-details">${section}</main>${shell.afterMain}`;
};

export const buildBlogIndexHtml = (html) =>
  html.replace(
    /<article id="[^"]+" class="section blog-article-section">[\s\S]*?<\/article>/g,
    "",
  );

export const buildBlogArticleHtml = (html, articleSlug) => {
  const shell = getPageShell(html);
  const articlePattern = new RegExp(
    `<article id="${articleSlug}" class="section blog-article-section">[\\s\\S]*?<\\/article>`,
  );
  const article = (html.match(articlePattern)?.[0] || "").replace(
    'class="section blog-article-section"',
    'class="section blog-article-section is-active"',
  );

  return `${shell.beforeMain}<main>${article}</main>${shell.afterMain}`;
};
