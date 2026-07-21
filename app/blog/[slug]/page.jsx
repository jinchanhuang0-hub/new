import { notFound } from "next/navigation";
import BlogArticleRepair from "./BlogArticleRepair";
import JsonLd from "../../components/JsonLd";
import { blogHtml } from "../content";
import { buildBlogArticleHtml } from "../../lib/htmlSections";
import { blogArticles, normalizeSiteHtml, SITE_URL } from "../../lib/siteRoutes";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();
  const articleHtml = normalizeSiteHtml(buildBlogArticleHtml(blogHtml, slug, article));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          image: article.image ? `${SITE_URL}${article.image}` : undefined,
          datePublished: article.datePublished,
          dateModified: article.dateModified || article.datePublished,
          mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
          author: {
            "@type": "Organization",
            name: article.author || "Unique Pin",
          },
          publisher: {
            "@type": "Organization",
            name: "Unique Pin",
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/assets/images/logo.png`,
            },
          },
        }}
      />
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
              name: "Blog",
              item: `${SITE_URL}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `${SITE_URL}/blog/${slug}`,
            },
          ],
        }}
      />
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: articleHtml }}
      />
      <BlogArticleRepair slug={slug} />
    </>
  );
}
