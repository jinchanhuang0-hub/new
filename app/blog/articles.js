import { blogArticles as existingBlogArticles, SITE_URL } from "../lib/siteRoutes";

const customWoodenMedalDesigns = {
  title: "Custom Wooden Medals: One Logo, Three Design Options",
  headline: "One Logo, Three Custom Wooden Medal Designs",
  description:
    "Compare engraved, full-color and layered wooden medals for your event logo. Learn what affects their appearance and feel before requesting a custom quote.",
  author: "Sunny Huang",
  authorType: "Person",
  authorUrl: `${SITE_URL}/about/sunny-huang`,
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  image: "/assets/images/four-wooden-event-medal-design-concepts.webp",
  schemaType: "BlogPosting",
  hideFooterInquiry: true,
  faq: [
    {
      question: "Can printing and engraving be combined with a layered wooden medal?",
      answer:
        "Yes. A layered design can include printed colors and engraved details. The combination depends on the artwork, available space and proposed construction, so identify which elements need color, engraving or raised placement.",
    },
    {
      question: "Will adding layers make a wooden medal feel heavier?",
      answer:
        "Additional layers can increase thickness and weight, while cutouts remove material. The finished feel depends on the materials, dimensions and construction. Assess a complete sample if weight is an important requirement.",
    },
    {
      question: "Can I review a sample before placing a bulk order?",
      answer:
        "We can discuss existing samples or a sample made with your logo. Physical-product photographs and videos are also available for discussion. Sample availability, costs and arrangements are confirmed for each project.",
    },
  ],
};

export const blogArticles = {
  "custom-wooden-medal-designs": customWoodenMedalDesigns,
  ...existingBlogArticles,
};
