import { notFound, permanentRedirect } from "next/navigation";

const categoryRedirects = {
  "custom-challenge-coins": "/products/custom-challenge-coins",
  "custom-lapel-pins": "/products/custom-enamel-pins",
  "custom-medals": "/products/custom-medals",
  "custom-keychains": "/products/custom-metal-keychains",
  "custom-belt-buckles": "/products/custom-belt-buckles",
  "custom-golf-ball-markers": "/products/custom-golf-accessories",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(categoryRedirects).map((category) => ({
    category,
  }));
}

export default async function HomeProductCategoryPage({ params }) {
  const { category } = await params;
  const targetPath = categoryRedirects[category];
  if (!targetPath) notFound();

  permanentRedirect(targetPath);
}
