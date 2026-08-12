import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { siteHeaderHtml } from "../components/siteHeaderHtml";


export const metadata = {
  title: "Contact Unique Pin | Request a Custom Metal Gifts Quote",
  description: "Contact Unique Pin for custom pins, medals, coins and OEM metal gifts. Send your quantity, artwork and deadline for a clear quotation.",
  alternates: {
    canonical: "/contact",
  },
};

const html = String.raw`
  ${siteHeaderHtml({ active: "contact" })}
  <main>
    <section class="section contact-section">
      <div class="container product-heading contact-heading">
        <div>
          <span class="brand-kicker" aria-hidden="true"></span>
          <h1>Contact Us</h1>
          <p>Send your product details, artwork or deadline. Our team will reply with a clear custom quote.</p>
        </div>
      </div>
      <div class="container contact-layout">
        <div class="contact-side">
          <div class="contact-card contact-info-card">
            <div class="contact-methods">
              <a class="contact-method" href="mailto:ceo@chinauniquepin.com" title="Email Unique Pin">
                <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path></svg></span>
                <span><strong>Mail</strong><small>ceo@chinauniquepin.com</small></span>
              </a>
              <a class="contact-method" href="tel:+86076022831989">
                <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 10a6 6 0 0 1 12 0"></path><path d="M5 11h4v7H5z"></path><path d="M15 11h4v7h-4z"></path><path d="M9 18h4"></path></svg></span>
                <span><strong>Phone</strong><small>+86 0760 22831989</small></span>
              </a>
              <a class="contact-method" href="tel:+8618895316838">
                <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 5c1 6 6 11 12 12l-2 3c-8-1-14-7-15-15l3-2z"></path><path d="m14 5 5 5"></path><path d="M19 5v5h-5"></path></svg></span>
                <span><strong>Mobile</strong><small>+86 18895316838</small></span>
              </a>
              <a class="contact-method" href="https://api.whatsapp.com/send?phone=8618895316838&amp;text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details." target="_blank" rel="noopener" title="Contact Unique Pin on WhatsApp">
                <span class="contact-icon contact-icon-outline contact-icon-whatsapp" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 19 6.2 15.5A7 7 0 1 1 8.5 17z"></path><path d="M9 9c.8 2.3 2.5 4 5 5l1.2-1.1"></path></svg></span>
                <span><strong>WhatsApp</strong><small>+86 18895316838</small></span>
              </a>
            </div>
            <div class="contact-actions"><a class="btn btn-outline" href="assets/Uniquepin-Catalogue.pdf">Download Catalog</a></div>
          </div>
          <div class="contact-map-card">
            <div class="map-frame" data-google-map data-map-src="https://www.google.com/maps?q=Building%20A%2C%201st%20Floor%2C%20No.%207%20Xingyu%20Road%2C%20Xiaolan%20Town%2C%20Zhongshan%20City%2C%20Guangdong%2C%20China&amp;hl=en&amp;region=US&amp;output=embed">
              <div class="map-consent-panel">
                <span class="map-consent-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"></path><circle cx="12" cy="10" r="2"></circle></svg>
                </span>
                <strong>View our location</strong>
                <p>Google Maps loads only after you choose to open it. Google will receive technical information such as your IP address.</p>
                <button class="btn btn-primary" type="button" data-load-google-map>Load Google Map</button>
              </div>
            </div>
            <p><strong>Add:</strong> Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p>
          </div>
        </div>
        <div class="contact-card">
          <h2 class="contact-form-title">Request Your Free Quote</h2>
          <form class="form" data-inquiry-form>
            <div class="form-row">
              <label class="sr-only" for="contact-inquiry-name">Name</label>
              <input id="contact-inquiry-name" type="text" name="name" placeholder="Name" required>
              <label class="sr-only" for="contact-inquiry-email">Email</label>
              <input id="contact-inquiry-email" type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-row">
              <label class="sr-only" for="contact-inquiry-country">Country or region</label>
              <input id="contact-inquiry-country" type="text" name="country" placeholder="Country / Region" required>
              <label class="sr-only" for="contact-inquiry-phone">Phone number</label>
              <input id="contact-inquiry-phone" type="text" name="whatsapp" placeholder="Phone Number">
            </div>
            <div class="form-row">
              <label class="sr-only" for="contact-inquiry-product">Product type</label>
              <select id="contact-inquiry-product" name="product" required>
                <option value="">Product Type</option>
                <option>Fridge Magnets</option>
                <option>Lapel Pins</option>
                <option>Medals</option>
                <option>Bottle Openers</option>
                <option>Belt Buckles</option>
                <option>Golf Accessories</option>
                <option>Challenge Coins</option>
                <option>Cufflinks & Tie Clips</option>
                <option>Keychains</option>
                <option>Other</option>
              </select>
              <label class="sr-only" for="contact-inquiry-quantity">Quantity</label>
              <input id="contact-inquiry-quantity" type="text" name="quantity" placeholder="Quantity">
            </div>
            <div class="form-field form-field-full">
              <label for="details">What can we help you with?</label>
              <textarea id="details" name="details" placeholder="Notes, Comments, etc."></textarea>
            </div>
            <div class="form-field form-field-full">
              <label for="artwork">Upload files</label>
              <label class="upload-box" for="artwork">
                <input id="artwork" type="file" name="artwork" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.psd,.cdr" aria-label="Upload artwork">
                <span class="upload-icon" aria-hidden="true">&#8593;</span>
                <span>Drag and drop a file here or click to choose</span>
              </label>
            </div>
            <button class="btn btn-primary" type="submit">Submit Inquiry</button>
            <p class="form-privacy-note">We use the information you submit to respond to your inquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
            <p data-form-notice aria-live="polite" style="color: var(--navy); font-weight: 800;"></p>
          </form>
        </div>
      </div>
    </section>

    <section class="section section-soft contact-products-cta-section">
      <div class="container">
        <div class="cta-band">
          <div><h2>Send Your Idea, Logo or Reference Image</h2><p>We can help create the design proof and recommend suitable material, technology and packaging.</p></div>
          <a class="btn btn-yellow" href="/products">View Products</a>
        </div>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function Page() {
  return <StaticPage html={html} />;
}
