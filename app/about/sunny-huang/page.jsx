import StaticPage from "../../components/StaticPage";
import JsonLd from "../../components/JsonLd";
import { footerHtml } from "../../components/footerHtml";
import { siteHeaderHtml } from "../../components/siteHeaderHtml";
import { SITE_URL } from "../../lib/siteRoutes";

const pageUrl = `${SITE_URL}/about/sunny-huang`;
const profileImage = `${SITE_URL}/assets/images/sunny-huang.jpg`;
const description = "Sunny Huang is a Custom Metal Gifts Manufacturing Specialist at Unique Pin, sharing practical guidance for custom enamel pins, medals, challenge coins, keychains and belt buckles.";

export const metadata = {
  title: "Sunny Huang | Custom Metal Gifts Manufacturing Specialist | Unique Pin",
  description,
  alternates: {
    canonical: "/about/sunny-huang",
  },
  openGraph: {
    title: "Sunny Huang | Custom Metal Gifts Manufacturing Specialist",
    description,
    url: pageUrl,
    type: "profile",
    images: [{ url: profileImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Huang | Custom Metal Gifts Manufacturing Specialist",
    description,
    images: [profileImage],
  },
};

const html = String.raw`
  ${siteHeaderHtml({ active: "about" })}

  <main class="author-profile-page">
    <section class="author-profile-hero">
      <div class="container author-profile-layout">
        <figure class="author-profile-portrait">
          <img src="/assets/images/sunny-huang.jpg" width="1279" height="1706" fetchpriority="high" decoding="async" alt="Sunny Huang, custom metal gifts manufacturing specialist at Unique Pin">
        </figure>
        <div class="author-profile-intro">
          <p class="author-profile-kicker">Unique Pin Contributor</p>
          <h1>Sunny Huang</h1>
          <p class="author-profile-role">Custom Metal Gifts Manufacturing Specialist</p>
          <p>Sunny Huang works with brands, distributors and event organizers on custom metal gift projects. She shares practical guidance on enamel pins, medals, challenge coins, keychains and belt buckles, based on real production options, artwork proofing, materials, finishes and order requirements at Unique Pin.</p>
        </div>
      </div>
    </section>

    <section class="section author-profile-guidance-section">
      <div class="container author-profile-guidance">
        <div>
          <p class="author-profile-kicker">What She Covers</p>
          <h2>Practical Guidance for Custom Metal Gift Projects</h2>
        </div>
        <div class="author-profile-guidance-copy">
          <p>Sunny's articles focus on the production choices buyers need to make before requesting a quote or approving artwork. The guidance is intended to help project teams prepare clear specifications and compare suitable options.</p>
          <ul>
            <li>Artwork proofing, readable details and finish selection.</li>
            <li>Materials, plating, enamel color and relief options.</li>
            <li>Sizes, thicknesses, attachments, packaging and order requirements.</li>
          </ul>
          <a class="button button-primary" href="/blog">Read Sunny's Articles</a>
        </div>
      </div>
    </section>
  </main>

  ${footerHtml}
`;

export default function SunnyHuangProfilePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sunny Huang",
          url: pageUrl,
          image: profileImage,
          jobTitle: "Custom Metal Gifts Manufacturing Specialist",
          description,
          worksFor: {
            "@type": "Organization",
            name: "Unique Pin",
            url: SITE_URL,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sunny Huang | Custom Metal Gifts Manufacturing Specialist",
          description,
          url: pageUrl,
        }}
      />
      <StaticPage html={html} />
    </>
  );
}
