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

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(productCategories).map(({ slug }) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryKey = categoryKeyByRouteSlug[category];
  const details = productDetailMetadata[categoryKey];
  if (!details) return {};

  return {
    ...details,
    alternates: {
      canonical: `/products/${category}`,
    },
  };
}

export default async function ProductCategoryPage({ params }) {
  const { category } = await params;
  const categoryKey = categoryKeyByRouteSlug[category];
  const categoryDetails = productCategories[categoryKey];
  const metadata = productDetailMetadata[categoryKey];
  if (!categoryDetails || !metadata) notFound();

  const pageUrl = `${SITE_URL}/products/${category}`;

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
      <StaticPage
        html={buildCategoryHtml(
          productDetailHtml,
          categoryKey,
          categoryDetails.label,
        )}
      />
    </>
  );
}
