import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { productCategorySidebarHtml } from "../components/productCategoryNav";
import {
  PRODUCTS_ALL_PAGE_SIZE,
  getAllProductCount,
  getProductPageCount,
  replaceProductsAllGridCards,
} from "../lib/productCards";
import { siteHeaderHtml } from "../components/siteHeaderHtml";


const productsMetadata = {
  title: "Custom Metal Products | Pins, Medals, Coins & Keychains",
  description: "Explore custom enamel pins, medals, challenge coins, keychains, buckles, golf accessories and other OEM metal gifts from Unique Pin.",
};

const productsCanonicalBase = "https://uccrafts.com/products";

const html = String.raw`
  ${siteHeaderHtml({ active: "products" })}

  <main>
    <section class="page-hero products-page-hero">
      <div class="container about-hero-copy">
        <h1>Custom Metal Crafts</h1>
        <p>We specialize in custom enamel pins, medals, challenge coins, keychains and premium metal gifts. From original designs to mass production, we provide reliable OEM solutions for brands, distributors and organizations worldwide.</p>
      </div>
    </section>

    <section class="product-type-section products-all-section" id="all">
      <div class="container product-type-content">
        <div class="products-layout">
          ${productCategorySidebarHtml({ mode: "filter", active: "all" })}
          <div class="products-list-main">
            <div class="product-type-grid products-all-grid">
              <article class="product-type-card" data-product-category="pins"><img src="assets/images/type-pins-yellow-character.jpg" alt="Yellow character hard enamel pin"><h2>Yellow Character Hard Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/yellow-character-hard-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
  ${footerHtml}`;

const getRequestedPage = (searchParams = {}) => {
  const value = Array.isArray(searchParams.page)
    ? searchParams.page[0]
    : searchParams.page;
  return Math.max(1, Number(value) || 1);
};

const getEffectivePage = (searchParams = {}) => Math.min(
  getRequestedPage(searchParams),
  getProductPageCount(getAllProductCount(), PRODUCTS_ALL_PAGE_SIZE),
);

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const page = getEffectivePage(params);

  return {
    ...productsMetadata,
    alternates: {
      canonical: page > 1
        ? `${productsCanonicalBase}?page=${page}`
        : productsCanonicalBase,
    },
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  return (
    <StaticPage
      html={replaceProductsAllGridCards(html, {
        page: getEffectivePage(params),
        pageSize: PRODUCTS_ALL_PAGE_SIZE,
      })}
    />
  );
}
