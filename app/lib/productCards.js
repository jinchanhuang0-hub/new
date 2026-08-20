import { productItems } from "../product-item/content";
import { getCategoryKeyForItem, getProductPath } from "./siteRoutes";
import { compareProductEntriesBySkuDesc } from "./productSorting";

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

const getProductEntriesForCategory = (categoryKey) => {
  const sorter =
    categoryKey === "keychains"
      ? compareKeychainEntriesByMaterialPriority
      : compareProductEntriesBySkuDesc;

  return Object.entries(productItems)
    .filter(([, product]) => getCategoryKeyForItem(product) === categoryKey)
    .sort(sorter);
};

export const renderProductTypeCards = (categoryKey, options = {}) =>
  getProductEntriesForCategory(categoryKey).map(([slug, product], index) => {
    const productPath = getProductPath(slug, product);
    const quoteProduct = product.quoteProduct || product.categoryLabel;
    const quotePath = `/contact?product=${encodeURIComponent(quoteProduct)}&item=${encodeURIComponent(product.title)}`;
    const categoryAttrs = options.includeCategoryData
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
  }).join("\n");

export const renderAllProductTypeCards = () =>
  productCardCategoryOrder
    .map((categoryKey) => renderProductTypeCards(categoryKey, { includeCategoryData: true }))
    .filter(Boolean)
    .join("\n\n");

export const replaceProductTypeSectionCards = (html, categoryKey) =>
  html.replace(
    new RegExp(
      `(<section class="product-type-section" data-product-content="${categoryKey}"(?: hidden)?>[\\s\\S]*?<div class="product-type-grid(?: compact)?">\\s*)[\\s\\S]*?(\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>)`
    ),
    `$1${renderProductTypeCards(categoryKey)}$2`
  );

export const replaceAllProductTypeSectionCards = (html) =>
  productCardCategoryOrder.reduce(
    (updatedHtml, categoryKey) => replaceProductTypeSectionCards(updatedHtml, categoryKey),
    html
  );

export const replaceProductsAllGridCards = (html) =>
  html.replace(
    /(<div class="product-type-grid products-all-grid">\s*)[\s\S]*?(\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/main>)/,
    `$1${renderAllProductTypeCards()}$2`
  );
