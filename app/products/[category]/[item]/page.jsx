import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import StaticPage from "../../../components/StaticPage";
import {
  productItems,
  renderProductItemHtml,
} from "../../../product-item/content";
import {
  getCategoryKeyForItem,
  getCategoryPath,
  getProductPath,
  productCategories,
  SITE_URL,
} from "../../../lib/siteRoutes";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(productItems).map(([item, product]) => ({
    category: productCategories[getCategoryKeyForItem(product)].slug,
    item,
  }));
}

export async function generateMetadata({ params }) {
  const { category, item: itemSlug } = await params;
  const item = productItems[itemSlug];
  const expectedCategory = item
    ? productCategories[getCategoryKeyForItem(item)].slug
    : null;
  if (!item || category !== expectedCategory) return {};

  return {
    title: `${item.title} | Unique Pin`,
    description: item.lead,
    alternates: {
      canonical: getProductPath(itemSlug, item),
    },
  };
}

export default async function ProductItemPage({ params }) {
  const { category, item: itemSlug } = await params;
  const item = productItems[itemSlug];
  const categoryKey = item ? getCategoryKeyForItem(item) : null;
  const categoryDetails = productCategories[categoryKey];
  if (!item || !categoryDetails || category !== categoryDetails.slug) {
    notFound();
  }

  const pageUrl = `${SITE_URL}${getProductPath(itemSlug, item)}`;

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
              item: `${SITE_URL}${getCategoryPath(categoryKey)}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: item.title,
              item: pageUrl,
            },
          ],
        }}
      />
      <StaticPage html={renderProductItemHtml(item, itemSlug)} />
    </>
  );
}
