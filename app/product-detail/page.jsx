import { redirect } from "next/navigation";
import { productCategories } from "../lib/siteRoutes";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const key = params?.product || "pins";
  const category = productCategories[key] || productCategories.pins;

  return {
    alternates: {
      canonical: `/products/${category.slug}/`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LegacyProductDetailPage({ searchParams }) {
  const params = await searchParams;
  const key = params?.product || "pins";
  const routeSlug = productCategories[key]?.slug || productCategories.pins.slug;

  redirect(`/products/${routeSlug}/`);
}
