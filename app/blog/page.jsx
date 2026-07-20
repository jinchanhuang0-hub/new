import JsonLd from "../components/JsonLd";
import StaticPage from "../components/StaticPage";
import { blogHtml } from "./content";
import { buildBlogIndexHtml } from "../lib/htmlSections";
import { SITE_URL } from "../lib/siteRoutes";

export const metadata = {
  title: "Custom Metal Crafts Manufacturing Guides | Unique Pin",
  description:
    "Practical guides about custom metal crafts, enamel pins, medals, challenge coins, manufacturing, quality control and global sourcing.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Unique Pin Custom Metal Crafts Guides",
          url: `${SITE_URL}/blog`,
        }}
      />
      <StaticPage html={buildBlogIndexHtml(blogHtml)} />
    </>
  );
}
