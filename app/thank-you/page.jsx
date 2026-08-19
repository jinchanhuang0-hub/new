import { footerHtml } from "../components/footerHtml";
import { siteHeaderHtml } from "../components/siteHeaderHtml";
import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Thank You | Unique Pin",
  description: "Thank you for contacting Unique Pin. Our team will reply within 1 business day and keep your project information confidential.",
  alternates: {
    canonical: "/thank-you",
  },
};

const html = String.raw`
  ${siteHeaderHtml({ active: "contact" })}
  <main>
    <section class="section thank-you-section">
      <div class="container thank-you-layout">
        <span class="brand-kicker" aria-hidden="true"></span>
        <h1>Thank You</h1>
        <p>Your inquiry has been received. We reply within 1 business day. Your artwork and project information are kept confidential.</p>
        <div class="thank-you-actions">
          <a class="btn btn-primary" href="https://api.whatsapp.com/send?phone=8618895316838&amp;text=Hello%2C%20I%20submitted%20an%20inquiry%20on%20your%20website.%20Please%20help%20me%20check%20my%20custom%20project." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <a class="btn btn-outline" href="/products">View Products</a>
        </div>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function ThankYouPage() {
  return <StaticPage html={html} />;
}
