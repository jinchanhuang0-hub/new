import { redirect } from "next/navigation";
import { productItems } from "./content";
import { getProductPath } from "../lib/siteRoutes";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const slug = params?.item;
  const item = productItems[slug];

  return {
    alternates: {
      canonical: item ? getProductPath(slug, item) : "/products/",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LegacyProductItemPage({ searchParams }) {
  const params = await searchParams;
  const slug = params?.item;
  const item = productItems[slug];

  redirect(item ? getProductPath(slug, item) : "/products/");
}
