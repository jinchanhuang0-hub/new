import { productItems } from "../product-item/content";
import { getCategoryKeyForItem, getProductPath } from "./siteRoutes";
import { sortProductEntriesBySkuDesc } from "./productSorting";

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
];

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const getProductEntriesForCategory = (categoryKey) =>
  sortProductEntriesBySkuDesc(
    Object.entries(productItems).filter(([, product]) =>
      getCategoryKeyForItem(product) === categoryKey
    )
  );

export const renderProductTypeCards = (categoryKey, options = {}) =>
  getProductEntriesForCategory(categoryKey).map(([slug, product], index) => {
    const productPath = getProductPath(slug, product);
    const categoryAttrs = options.includeCategoryData
      ? `${index === 0 ? ` id="${escapeHtml(categoryKey)}"` : ""} data-product-category="${escapeHtml(categoryKey)}"`
      : "";

    return `          <article class="product-type-card"${categoryAttrs}><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt || product.title)}"><h2>${escapeHtml(product.title)}</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="${escapeHtml(productPath)}">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>`;
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
