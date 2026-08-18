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
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified || article.datePublished,
      ...(article.image
        ? { images: [{ url: `${SITE_URL}${article.image}` }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      ...(article.image ? { images: [`${SITE_URL}${article.image}`] } : {}),
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
          "@type": article.schemaType || "BlogPosting",
          headline: article.headline || article.title,
          description: article.description,
          image: article.image ? `${SITE_URL}${article.image}` : undefined,
          datePublished: article.datePublished,
          dateModified: article.dateModified || article.datePublished,
          mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
          author: {
            "@type": article.authorType || "Organization",
            name: article.author || "Unique Pin",
            ...(article.authorUrl
              ? { url: new URL(article.authorUrl, SITE_URL).toString() }
              : {}),
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
      {article.faq?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }}
        />
      ) : null}
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: articleHtml }}
      />
      <BlogArticleRepair slug={slug} />
    </>
  );
}
