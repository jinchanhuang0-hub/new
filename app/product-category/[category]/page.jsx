import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import StaticPage from "../../components/StaticPage";
import { SITE_URL } from "../../lib/siteRoutes";
import {
  homeProductLandingPages,
  homeProductLandingPagesBySlug,
  renderHomeProductLandingHtml,
} from "../categoryLandingData";

export const dynamicParams = false;

export function generateStaticParams() {
  return homeProductLandingPages.map(({ slug }) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const page = homeProductLandingPagesBySlug[category];
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `/product-category/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `/product-category/${page.slug}`,
      images: ["/assets/images/hero-banner-og.jpg"],
    },
  };
}

export default async function HomeProductCategoryPage({ params }) {
  const { category } = await params;
  const page = homeProductLandingPagesBySlug[category];
  if (!page) notFound();

  const pageUrl = `${SITE_URL}/product-category/${page.slug}`;

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
              name: page.title,
              item: pageUrl,
            },
          ],
        }}
      />
      <StaticPage html={renderHomeProductLandingHtml(page)} />
    </>
  );
}
