import { notFound } from "next/navigation";
import BlogArticleRepair from "./BlogArticleRepair";
import BlogInquiryEffects from "../../components/BlogInquiryEffects";
import { buildRelatedBlogsHtml } from "./RelatedBlogs";
import JsonLd from "../../components/JsonLd";
import { blogHtml } from "../content";
import { buildBlogArticleHtml } from "../../lib/htmlSections";
import {
  blogArticles,
  buildBlogAuthorSchema,
  normalizeSiteHtml,
  SITE_URL,
} from "../../lib/siteRoutes";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};
  const socialImage = article.image || article.socialImage;

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
      ...(socialImage
        ? { images: [{ url: `${SITE_URL}${socialImage}` }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      ...(socialImage ? { images: [`${SITE_URL}${socialImage}`] } : {}),
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();
  const relatedBlogsHtml = buildRelatedBlogsHtml(blogHtml, slug);
  const articleHtml = normalizeSiteHtml(buildBlogArticleHtml(blogHtml, slug, article))
    .replace("</main>", `${relatedBlogsHtml}</main>`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": article.schemaType || "BlogPosting",
          headline: article.headline || article.title,
          description: article.description,
          url: `${SITE_URL}/blog/${slug}`,
          image: article.image ? `${SITE_URL}${article.image}` : undefined,
          datePublished: article.datePublished,
          dateModified: article.dateModified || article.datePublished,
          mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
          author: buildBlogAuthorSchema(article),
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
      <BlogInquiryEffects />
    </>
  );
}
