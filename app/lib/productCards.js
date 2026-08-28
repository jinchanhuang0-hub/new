import { productItems } from "../product-item/content";
import { getCategoryKeyForItem, getProductPath } from "./siteRoutes";
import { compareProductEntriesBySkuDesc } from "./productSorting";

export const PRODUCTS_ALL_PAGE_SIZE = 28;
export const CATEGORY_PRODUCTS_PAGE_SIZE = 12;

export const productCardCategoryOrder = [
  "pins",
  "coins",
  "medals",
  "keychains",
  "buckles",
  "golf-accessories",
  "bottle-openers",
  "cufflinks-tieclips",
  "magnets",
  "patchs",
  "others",
];

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const deferredKeychainKeywords = ["pvc", "leather", "woven"];

const isDeferredKeychainProduct = (product) => {
  const searchableText = [
    product.title,
    product.material,
    product.process,
    product.categories,
  ].join(" ").toLowerCase();

  return deferredKeychainKeywords.some((keyword) => searchableText.includes(keyword));
};

const compareKeychainEntriesByMaterialPriority = (entryA, entryB) => {
  const deferredDiff =
    Number(isDeferredKeychainProduct(entryA[1])) -
    Number(isDeferredKeychainProduct(entryB[1]));

  return deferredDiff || compareProductEntriesBySkuDesc(entryA, entryB);
};

const patchProductPriority = {
  "custom-woven-dragon-round-patch": 1,
  "custom-embroidered-cartoon-character-patch": 2,
  "custom-embroidered-death-patch": 3,
  "custom-embroidered-squadron-patch": 4,
  "custom-embroidered-taco-logo-patch": 5,
  "custom-embroidered-army-wing-patch": 6,
  "custom-embroidered-spain-flag-patch": 7,
  "custom-embroidered-flag-velcro-patch": 8,
  "custom-embroidered-nabi-letter-patch": 9,
};

const otherProductPriority = {
  "custom-metal-dog-tag": 1,
  "custom-silicone-planet-qr-dog-tag": 2,
  "custom-silicone-bone-qr-dog-tag": 3,
  "custom-silicone-rocket-qr-dog-tag": 4,
  "custom-silicone-sausage-dog-tag": 5,
  "custom-silicone-pink-bone-dog-tag": 6,
};

const comparePatchEntriesByDisplayPriority = (entryA, entryB) => {
  const priorityDiff =
    (patchProductPriority[entryA[0]] || 999) -
    (patchProductPriority[entryB[0]] || 999);

  return priorityDiff || compareProductEntriesBySkuDesc(entryA, entryB);
};

const compareOtherEntriesByDisplayPriority = (entryA, entryB) => {
  const priorityDiff =
    (otherProductPriority[entryA[0]] || 999) -
    (otherProductPriority[entryB[0]] || 999);

  return priorityDiff || compareProductEntriesBySkuDesc(entryA, entryB);
};

const getProductEntriesForCategory = (categoryKey) => {
  const sorter =
    categoryKey === "keychains"
      ? compareKeychainEntriesByMaterialPriority
      : categoryKey === "patchs"
      ? comparePatchEntriesByDisplayPriority
      : categoryKey === "others"
      ? compareOtherEntriesByDisplayPriority
      : compareProductEntriesBySkuDesc;

  return Object.entries(productItems)
    .filter(([, product]) => getCategoryKeyForItem(product) === categoryKey)
    .sort(sorter);
};

const getPageNumber = (page) => Math.max(1, Number(page) || 1);

const getPaginatedEntries = (entries, { page = 1, pageSize } = {}) => {
  if (!pageSize) return entries;
  const currentPage = getPageNumber(page);
  const start = (currentPage - 1) * pageSize;
  return entries.slice(start, start + pageSize);
};

const getAllProductEntries = () =>
  productCardCategoryOrder.flatMap((categoryKey) =>
    getProductEntriesForCategory(categoryKey).map(([slug, product]) => ({
      categoryKey,
      slug,
      product,
    })),
  );

const getProductPageHref = (basePath, page) =>
  page > 1 ? `${basePath}?page=${page}` : basePath;

export const getProductCountForCategory = (categoryKey) =>
  getProductEntriesForCategory(categoryKey).length;

export const getProductEntriesForCategoryPage = (categoryKey, options = {}) =>
  getPaginatedEntries(getProductEntriesForCategory(categoryKey), options).map(
    ([slug, product]) => ({ slug, product }),
  );

export const getProductPageCount = (total, pageSize) =>
  Math.max(1, Math.ceil(total / pageSize));

export const renderServerProductPagination = ({
  basePath,
  currentPage = 1,
  pageCount = 1,
} = {}) => {
  if (!basePath || pageCount <= 1) return "";

  return `<nav class="product-pagination" data-server-pagination="true" aria-label="Product pages">${Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;
    return `<a class="${isActive ? "active" : ""}" href="${getProductPageHref(basePath, page)}" data-product-page="${page}" aria-current="${isActive ? "page" : "false"}">${page}</a>`;
  }).join("")}</nav>`;
};

const renderProductCard = ({
  categoryKey,
  slug,
  product,
  index,
  includeCategoryData,
}) => {
  const productPath = getProductPath(slug, product);
  const quoteProduct = product.quoteProduct || product.categoryLabel;
  const quotePath = `/contact?product=${encodeURIComponent(quoteProduct)}&item=${encodeURIComponent(product.title)}`;
  const categoryAttrs = includeCategoryData
    ? `${index === 0 ? ` id="${escapeHtml(categoryKey)}"` : ""} data-product-category="${escapeHtml(categoryKey)}"`
    : "";

  return `          <article class="product-type-card"${categoryAttrs}>
            <a class="product-type-media" href="${escapeHtml(productPath)}"><img src="${escapeHtml(product.image)}" width="800" height="800" loading="lazy" decoding="async" alt="${escapeHtml(product.alt || product.title)}"></a>
            <h2><a href="${escapeHtml(productPath)}">${escapeHtml(product.title)}</a></h2>
            <div class="product-type-actions">
              <a class="product-type-btn product-type-btn-outline" href="${escapeHtml(productPath)}">View Details</a>
              <a class="product-type-btn product-type-btn-primary" href="${escapeHtml(quotePath)}" data-product-inquiry-trigger data-product-inquiry-product="${escapeHtml(quoteProduct)}" data-product-inquiry-title="${escapeHtml(product.title)}">GET A QUOTE</a>
            </div>
          </article>`;
};

export const renderProductTypeCards = (categoryKey, options = {}) =>
  getPaginatedEntries(getProductEntriesForCategory(categoryKey), options)
    .map(([slug, product], index) => {
      return renderProductCard({
        categoryKey,
        slug,
        product,
        index,
        includeCategoryData: options.includeCategoryData,
      });
    }).join("\n");

export const renderAllProductTypeCards = (options = {}) =>
  getPaginatedEntries(getAllProductEntries(), options)
    .map(({ categoryKey, slug, product }, index) =>
      renderProductCard({
        categoryKey,
        slug,
        product,
        index,
        includeCategoryData: true,
      })
    )
    .join("\n");

export const getAllProductCount = () => getAllProductEntries().length;

export const replaceProductTypeSectionCards = (html, categoryKey, options = {}) =>
  html.replace(
    new RegExp(
      `(<section class="product-type-section" data-product-content="${categoryKey}"(?: hidden)?>[\\s\\S]*?<div class="product-type-grid[^"]*">\\s*)[\\s\\S]*?(\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>)`
    ),
    `$1${renderProductTypeCards(categoryKey, options)}$2`
  );

export const replaceAllProductTypeSectionCards = (html) =>
  productCardCategoryOrder.reduce(
    (updatedHtml, categoryKey) => replaceProductTypeSectionCards(updatedHtml, categoryKey),
    html
  );

export const replaceProductsAllGridCards = (html, options = {}) => {
  const pageSize = options.pageSize || PRODUCTS_ALL_PAGE_SIZE;
  const pageCount = getProductPageCount(getAllProductCount(), pageSize);
  const currentPage = Math.min(getPageNumber(options.page), pageCount);

  return html.replace(
    '<div class="product-type-grid products-all-grid">',
    '<div class="product-type-grid products-all-grid" data-server-paginated="true">'
  ).replace(
    /(<div class="product-type-grid products-all-grid"[^>]*>\s*)[\s\S]*?(\s*<\/div>)(\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/main>)/,
    `$1${renderAllProductTypeCards({ page: currentPage, pageSize })}$2
${renderServerProductPagination({
      basePath: "/products",
      currentPage,
      pageCount,
    })}$3`
  );
};
