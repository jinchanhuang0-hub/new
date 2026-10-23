import JsonLd from "../components/JsonLd";
import StaticPage from "../components/StaticPage";
import { blogHtml } from "./content";
import { buildBlogIndexHtml } from "../lib/htmlSections";
import { SITE_URL } from "../lib/siteRoutes";
import { blogArticles } from "./articles";
import { BLOG_ITEMS_PER_PAGE } from "./config";
import { permanentRedirect } from "next/navigation";

const baseMetadata = {
  title: "Custom Metal Crafts Manufacturing Guides | Unique Pin",
  description:
    "Practical guides about custom metal crafts, enamel pins, medals, challenge coins, manufacturing, quality control and global sourcing.",
};

const blogCardCategories = [...blogHtml.matchAll(/<a class="blog-feature-card"[^>]*data-blog-category="([^"]+)"/g)]
  .map((match) => match[1].split(",").map((category) => category.trim()));

const getBlogState = (query) => {
  const requestedCategory = typeof query?.category === "string" ? query.category : "All";
  const category = requestedCategory !== "All" && blogCardCategories.some((values) => values.includes(requestedCategory))
    ? requestedCategory
    : "All";
  const cardCount = category === "All"
    ? blogCardCategories.length
    : blogCardCategories.filter((values) => values.includes(category)).length;
  const pageCount = Math.max(1, Math.ceil(cardCount / BLOG_ITEMS_PER_PAGE));
  const requestedPage = Number(query?.page);
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 1
    ? Math.min(requestedPage, pageCount)
    : 1;
  return { category, page };
};

const getBlogUrl = ({ category, page }) => {
  const params = new URLSearchParams();
  if (category !== "All") params.set("category", category);
  if (page > 1) params.set("page", String(page));
  return `/blog${params.size ? `?${params}` : ""}`;
};

export async function generateMetadata({ searchParams }) {
  const state = getBlogState(await searchParams);
  return {
    ...baseMetadata,
    title: state.page > 1 ? `${baseMetadata.title} | Page ${state.page}` : baseMetadata.title,
    alternates: { canonical: getBlogUrl(state) },
  };
}

export default async function BlogPage({ searchParams }) {
  const query = await searchParams;
  const initialState = getBlogState(query);
  if ((query?.page || query?.category) && getBlogUrl(initialState) !== `/blog?${new URLSearchParams(query)}`) {
    permanentRedirect(getBlogUrl(initialState));
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Unique Pin Custom Metal Crafts Guides",
          url: `${SITE_URL}${getBlogUrl(initialState)}`,
        }}
      />
      <StaticPage html={buildBlogIndexHtml(blogHtml, blogArticles, initialState)} />
    </>
  );
}
