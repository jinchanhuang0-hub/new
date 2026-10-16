import { blogArticles as existingBlogArticles, SITE_URL } from "../lib/siteRoutes";

const yearsOfServiceLapelPins = {
  title: "Years of Service Pins: One Design or Different Tiers?",
  headline: "Years of Service Lapel Pins: Should Every Milestone Look the Same?",
  description:
    "Compare years-of-service lapel pin designs for 5-, 10- and 20-year awards, with guidance on milestone variations, wearing options and future reorders.",
  author: "Sunny Huang",
  authorType: "Person",
  authorUrl: `${SITE_URL}/about/sunny-huang`,
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  image: "/assets/images/years-of-service-lapel-pins-5-10-20.webp",
  schemaType: "BlogPosting",
  hideFooterInquiry: true,
  faq: [
    {
      question: "Should employees wear only their latest service pin?",
      answer:
        "That depends on company guidelines. Employees may wear their current milestone pin while keeping earlier versions as personal mementos. Collecting previous awards does not require wearing them together.",
    },
    {
      question: "Can a company introduce service pins when employees have already passed several milestones?",
      answer:
        "Yes. HR can decide whether to recognize employees at their current service level or also acknowledge earlier anniversaries. The policy should be consistent and clearly communicated.",
    },
    {
      question: "Can the same milestone pin designs be reordered in future years?",
      answer:
        "Matching designs can be discussed for future orders. Retaining approved artwork and version records helps maintain consistency, while current production details should be confirmed with the manufacturer.",
    },
  ],
};

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

const customGraduationMedalsSchoolAwards = {
  title: "Custom Graduation Medals for Schools: Award Options",
  headline: "Custom Graduation Medals: One for Every Graduate or Separate Honors?",
  description:
    "Should every graduate receive a medal? Compare shared and honor-only awards, plus two combined models, to plan school graduation recognition with clarity.",
  author: "Sunny Huang",
  authorType: "Person",
  authorUrl: `${SITE_URL}/about/sunny-huang`,
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  image: "/assets/images/custom-graduation-medal-school-honor-awards.webp",
  schemaType: "BlogPosting",
  hideFooterInquiry: true,
  faq: [
    {
      question: "Can one student receive more than one honor medal?",
      answer:
        "Yes, if the school's recognition policy allows separate medals for multiple achievements. The committee should determine whether each honor requires an individual award and how those awards will be presented.",
    },
    {
      question: "Should schools use medals if they already award honor cords?",
      answer:
        "They can, but it is not always necessary. Honor cords may provide sufficient recognition during commencement, while medals can serve as school-specific keepsakes. Their purposes should be distinct.",
    },
    {
      question: "What if the final honor recipients have not been confirmed?",
      answer:
        "Schools can establish shared design elements and award categories before individual names are finalized. Any personalized details should remain subject to the school's final approval and the manufacturer's confirmed production arrangements.",
    },
  ],
};

export const blogArticles = {
  "years-of-service-lapel-pins": yearsOfServiceLapelPins,
  "custom-graduation-medals-school-awards": customGraduationMedalsSchoolAwards,
  "custom-wooden-medal-designs": customWoodenMedalDesigns,
  ...existingBlogArticles,
};
