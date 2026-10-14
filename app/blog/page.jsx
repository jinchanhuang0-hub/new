import JsonLd from "../components/JsonLd";
import StaticPage from "../components/StaticPage";
import { blogHtml } from "./content";
import { buildBlogIndexHtml, resolveBlogIndexState } from "../lib/htmlSections";
import { blogArticles, SITE_URL } from "../lib/siteRoutes";

const baseMetadata = {
  title: "Custom Metal Crafts Manufacturing Guides | Unique Pin",
  description:
    "Practical guides about custom metal crafts, enamel pins, medals, challenge coins, manufacturing, quality control and global sourcing.",
  alternates: {
    canonical: "/blog",
  },
};

export async function generateMetadata({ searchParams }) {
  const state = resolveBlogIndexState(blogHtml, await searchParams);
  return {
    ...baseMetadata,
    alternates: { canonical: `${SITE_URL}${state.href}` },
    robots: { index: state.category === "All", follow: true },
  };
}

export default async function BlogPage({ searchParams }) {
  const initialState = resolveBlogIndexState(blogHtml, await searchParams);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Unique Pin Custom Metal Crafts Guides",
          url: `${SITE_URL}${initialState.href}`,
        }}
      />
      <StaticPage html={buildBlogIndexHtml(blogHtml, blogArticles, initialState)} />
    </>
  );
}
