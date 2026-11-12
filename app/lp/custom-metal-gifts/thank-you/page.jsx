import StaticPage from "../../../components/StaticPage";
import styles from "../page.module.css";

export const metadata = { title: "Thank You | Unique Pin" };

const html = String.raw`
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
`;

export default function ThankYou() {
  return <><StaticPage html={html} /><footer className={styles.legalFooter}><span>Copyright © 2026, Zhongshan Unique Metal Gift Co., Ltd. All rights reserved. Powered by UcCrafts.</span><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></footer></>;
}
