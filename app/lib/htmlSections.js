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

const formatArticleDate = (date) => {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${monthNames[Number(month) - 1] || month} ${Number(day)}, ${year}`;
};

const addBlogCardMeta = (html, articles = {}) =>
  html.replace(
    /(<a class="blog-feature-card" href="\/blog\/([^"#]+)(?:#[^"]*)?"[\s\S]*?<p>[\s\S]*?<\/p>)\s*<span class="blog-feature-link">Read More<\/span>/g,
    (match, cardContent, slug) => {
      const article = articles[slug];
      if (!article) return match;

      const author = article.author || "sunny";
      const date = article.datePublished || "";

      return `${cardContent}
              <div class="blog-feature-footer">
                <span class="blog-feature-author"><span class="blog-author-avatar" aria-hidden="true">${author.charAt(0).toUpperCase()}</span>${author}</span>
                <time datetime="${date}">${formatArticleDate(date)}</time>
              </div>
              <span class="blog-feature-link">Read More</span>`;
    },
  );

const sortBlogCardsByDate = (html, articles = {}) =>
  html.replace(
    /(<div class="blog-card-grid">\s*)([\s\S]*?)(\s*<\/div>\s*<\/div>\s*<\/section>)/,
    (match, opening, cardsHtml, closing) => {
      const cards = [...cardsHtml.matchAll(/<a class="blog-feature-card" href="\/blog\/([^"#]+)(?:#[^"]*)?"[\s\S]*?<\/a>/g)]
        .map((cardMatch, index) => {
          const slug = cardMatch[1];
          const articleDate = articles[slug]?.datePublished || "";
          return {
            html: cardMatch[0],
            index,
            timestamp: articleDate ? Date.parse(articleDate) : 0,
          };
        });

      if (!cards.length) return match;

      const sortedCards = cards
        .sort((a, b) => b.timestamp - a.timestamp || a.index - b.index)
        .map((card) => card.html)
        .join("\n          ");

      return `${opening}${sortedCards}${closing}`;
    },
  );

export const buildBlogIndexHtml = (html, articles = {}) =>
  addBlogCardMeta(sortBlogCardsByDate(html.replace(
    /<article id="[^"]+" class="section blog-article-section">[\s\S]*?<\/article>/g,
    "",
  ), articles), articles);

const addBlogArticleMeta = (articleHtml, articleMeta) => {
  const author = articleMeta?.author;
  const datePublished = articleMeta?.datePublished;
  if (!author && !datePublished) return articleHtml;

  const metaItems = [
    author ? `<span>By ${author}</span>` : "",
    datePublished ? `<time datetime="${datePublished}">${formatArticleDate(datePublished)}</time>` : "",
  ].filter(Boolean).join("");

  return articleHtml.replace(
    /(<header class="blog-article-header">[\s\S]*?<h1>[\s\S]*?<\/h1>)/,
    `$1
          <div class="blog-article-meta">${metaItems}</div>`,
  );
};

export const buildBlogArticleHtml = (html, articleSlug, articleMeta = {}) => {
  const shell = getPageShell(html);
  const articlePattern = new RegExp(
    `<article id="${articleSlug}" class="section blog-article-section">[\\s\\S]*?<\\/article>`,
  );
  const article = addBlogArticleMeta((html.match(articlePattern)?.[0] || "").replace(
    'class="section blog-article-section"',
    'class="section blog-article-section is-active"',
  ), articleMeta);

  return `${shell.beforeMain}<main>${article}</main>${shell.afterMain}`;
};
