import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import StaticPage from "../../components/StaticPage";
import {
  productDetailHtml,
  productDetailMetadata,
} from "../../product-detail/content";
import { buildCategoryHtml } from "../../lib/htmlSections";
import {
  categoryKeyByRouteSlug,
  productCategories,
  SITE_URL,
} from "../../lib/siteRoutes";
import {
  CATEGORY_PRODUCTS_PAGE_SIZE,
  getProductCountForCategory,
  getProductEntriesForCategoryPage,
  getProductPageCount,
} from "../../lib/productCards";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(productCategories).map(({ slug }) => ({
    category: slug,
  }));
}

const getRequestedPage = (searchParams = {}) => {
  const value = Array.isArray(searchParams.page)
    ? searchParams.page[0]
    : searchParams.page;
  return Math.max(1, Number(value) || 1);
};

const getCanonicalPath = (category, categoryKey, searchParams = {}) => {
  const basePath = `/products/${category}`;
  const pageCount = getProductPageCount(
    getProductCountForCategory(categoryKey),
    CATEGORY_PRODUCTS_PAGE_SIZE,
  );
  const currentPage = Math.min(getRequestedPage(searchParams), pageCount);

  return currentPage > 1 ? `${basePath}?page=${currentPage}` : basePath;
};

export async function generateMetadata({ params, searchParams }) {
  const { category } = await params;
  const query = await searchParams;
  const categoryKey = categoryKeyByRouteSlug[category];
  const details = productDetailMetadata[categoryKey];
  if (!details) return {};

  return {
    ...details,
    alternates: {
      canonical: getCanonicalPath(category, categoryKey, query),
    },
  };
}

export default async function ProductCategoryPage({ params, searchParams }) {
  const { category } = await params;
  const query = await searchParams;
  const categoryKey = categoryKeyByRouteSlug[category];
  const categoryDetails = productCategories[categoryKey];
  const metadata = productDetailMetadata[categoryKey];
  if (!categoryDetails || !metadata) notFound();

  const productCount = getProductCountForCategory(categoryKey);
  const pageCount = getProductPageCount(productCount, CATEGORY_PRODUCTS_PAGE_SIZE);
  const currentPage = Math.min(getRequestedPage(query), pageCount);
  const pageUrl = `${SITE_URL}${getCanonicalPath(category, categoryKey, query)}`;
  const productEntries =
    categoryKey === "keychains"
      ? getProductEntriesForCategoryPage(categoryKey, {
          page: currentPage,
          pageSize: CATEGORY_PRODUCTS_PAGE_SIZE,
        })
      : [];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Products",
              item: `${SITE_URL}/products`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: categoryDetails.label,
              item: pageUrl,
            },
          ],
        }}
      />
      {productEntries.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Custom Metal Keychains",
            numberOfItems: productEntries.length,
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            itemListElement: productEntries.map(({ slug, product }, index) => ({
              "@type": "ListItem",
              position: (currentPage - 1) * CATEGORY_PRODUCTS_PAGE_SIZE + index + 1,
              name: product.title,
              url: `${SITE_URL}/products/${category}/${slug}`,
            })),
          }}
        />
      ) : null}
      <StaticPage
        html={buildCategoryHtml(
          productDetailHtml,
          categoryKey,
          categoryDetails.label,
          {
            page: currentPage,
            pageSize: CATEGORY_PRODUCTS_PAGE_SIZE,
          },
        )}
      />
    </>
  );
}
