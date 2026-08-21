import StaticPage from "./components/StaticPage";
import { footerHtml } from "./components/footerHtml";
import { siteHeaderHtml } from "./components/siteHeaderHtml";


export const metadata = {
  title: "Custom Metal Gifts Manufacturer | Pins, Medals & Coins",
  description: "Unique Pin provides OEM/ODM production backed by team experience since 2003, with free artwork support, No MOQ and in-house quality control. Mold fees and unit prices are calculated by project.",
  alternates: {
    canonical: "https://uccrafts.com/"
  }
};

const html = String.raw`
  ${siteHeaderHtml({ active: "home" })}

  <main>
    <section class="hero">
 <img class="hero-bg" src="assets/images/hero-banner.webp" width="2048" height="683" fetchpriority="high" alt="Custom enamel pins medals and challenge coins hero banner">
      <div class="container">
       
        <div class="hero-content">
          <h1><span class="hero-title-line">High-Quality Custom</span><span class="hero-title-line">Metal Gifts Manufacturer</span></h1>
          <p>OEM/ODM production backed by team experience since 2003, with free artwork support, No MOQ and in-house quality control.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contact">Get a Free Quote</a>
            <a class="btn btn-outline" href="https://api.whatsapp.com/send?phone=8618895316838&amp;text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
          <div class="hero-proof">
            <div class="proof-column">
              <div class="proof-item"><strong>OEM/ODM</strong><span>Custom Manufacturing Support</span></div>
              <div class="proof-item"><strong>Free Design</strong><span>Artwork &amp; Digital Proof Support</span></div>
            </div>
            <div class="proof-column">
              <div class="proof-item"><strong>No MOQ</strong><span>Flexible Custom Orders</span></div>
              <div class="proof-item"><strong>Affordable Prices</strong><span>Competitive Factory Price</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="brand-carousel" aria-label="Trusted brand section">
      <div class="brand-heading">
        <span class="brand-kicker" aria-hidden="true"></span>
        <h2>Trusted by Global Brands</h2>
      </div>
      <div class="brand-marquee" aria-label="Trusted global brand logos">
        <div class="brand-marquee-track">
          <span class="brand-logo"><img src="assets/images/brands/coca-cola.svg" alt="Coca-Cola logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/mcdonalds.svg" alt="McDonald's logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/disney.svg" alt="Disney logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/pepsi.png" alt="Pepsi logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/lego.svg" alt="LEGO logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/starbucks.webp" alt="Starbucks logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/walmart.webp" alt="Walmart logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mars.webp" alt="Mars logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/nike.svg" alt="Nike logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/adidas.svg" alt="adidas logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mercedes.webp" alt="Mercedes-Benz logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/bmw.webp" alt="BMW logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/marvel.svg" alt="MARVEL logo"></span>
          <span class="brand-logo logo-square logo-kfc"><img src="assets/images/brands/kfc.webp" alt="KFC logo"></span>
          <span class="brand-logo logo-square logo-roomy"><img src="assets/images/brands/american-greetings.webp" alt="American Greetings logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/teal-s-logo.webp" alt="Teal S brand logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/lions-international.webp" alt="Lions International logo"></span>
          <span class="brand-logo logo-wide"><img src="assets/images/brands/turbovets.webp" alt="Turbovets Tech For Heroes logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/nbc.svg" alt="NBC logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/coca-cola.svg" alt="Coca-Cola logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/mcdonalds.svg" alt="McDonald's logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/disney.svg" alt="Disney logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/pepsi.png" alt="Pepsi logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/lego.svg" alt="LEGO logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/starbucks.webp" alt="Starbucks logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/walmart.webp" alt="Walmart logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mars.webp" alt="Mars logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/nike.svg" alt="Nike logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/adidas.svg" alt="adidas logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mercedes.webp" alt="Mercedes-Benz logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/bmw.webp" alt="BMW logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/marvel.svg" alt="MARVEL logo"></span>
          <span class="brand-logo logo-square logo-kfc"><img src="assets/images/brands/kfc.webp" alt="KFC logo"></span>
          <span class="brand-logo logo-square logo-roomy"><img src="assets/images/brands/american-greetings.webp" alt="American Greetings logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/teal-s-logo.webp" alt="Teal S brand logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/lions-international.webp" alt="Lions International logo"></span>
          <span class="brand-logo logo-wide"><img src="assets/images/brands/turbovets.webp" alt="Turbovets Tech For Heroes logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/nbc.svg" alt="NBC logo"></span>
        </div>
      </div>
    </section>

    <section class="section product-showcase-section">
      <div class="container">
        <div class="section-head product-heading">
          <div>
            <span class="brand-kicker" aria-hidden="true"></span>
            <h2>Popular Products</h2>
            <p>Choose a product and start customizing!</p>
          </div>
        </div>
        <div class="grid-3 home-products-grid">
          <a class="product-card home-product-card" href="/products/custom-enamel-pins" aria-label="View Custom Enamel Pins details">
            <img src="assets/images/home-lapel-pins-cat.jpg" alt="Custom lapel pin with cat and colorful umbrella">
            <div class="body">
              <h3>Lapel Pins</h3>
              <p>An exquisite accessory that captures your brand's identity and sparks conversation.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="/products/custom-medals" aria-label="View Custom Medals details">
            <img src="assets/images/home-medals-floral.webp" alt="Custom medal with floral enamel and ribbon">
            <div class="body">
              <h3>Medals</h3>
              <p>A meaningful award piece that celebrates achievement with lasting visual impact.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="/products/custom-challenge-coins" aria-label="View Challenge Coins details">
            <img src="assets/images/home-challenge-coins-police.jpg" alt="Custom challenge coins with police emblems">
            <div class="body">
              <h3>Challenge Coins</h3>
              <p>A premium keepsake that honors teams, milestones and shared stories.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="/products/custom-metal-keychains" aria-label="View Custom Keychains details">
            <img src="assets/images/home-keychains-charms.jpg" alt="Custom metal keychain with enamel charms">
            <div class="body">
              <h3>Keychains</h3>
              <p>A practical everyday gift that keeps your brand close at hand.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="/products/custom-belt-buckles" aria-label="View Custom Belt Buckles details">
            <img src="assets/images/home-belt-buckles-arizona.jpg" alt="Custom antique belt buckle with Arizona design">
            <div class="body">
              <h3>Belt Buckles</h3>
              <p>A bold statement piece that turns custom detail into wearable style.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="/products/custom-golf-accessories" aria-label="View Custom Golf Ball Markers details">
            <img src="assets/images/home-golf-ball-marker.jpg" alt="Custom golf ball marker and divot tool">
            <div class="body">
              <h3>Golf Ball Markers</h3>
              <p>A refined golf accessory that adds personality to every round.</p>
            </div>
          </a>
        </div>
        <div class="product-actions">
          <a class="btn btn-primary" href="/products">View All Products</a>
        </div>
      </div>
    </section>

    <div class="product-inquiry-modal" data-product-inquiry-modal hidden>
      <div class="product-inquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="home-quote-title">
        <button class="product-inquiry-close" type="button" aria-label="Close inquiry form" data-product-inquiry-close>&times;</button>
        <div class="contact-card product-inquiry-card">
          <h2 id="home-quote-title" class="contact-form-title">Get a Free Quote</h2>
          <p class="product-inquiry-note">Send your product details, artwork or deadline. Our team will reply with a clear custom quote.</p>
          <form class="form" data-inquiry-form>
            <div class="form-row">
              <input type="text" name="name" placeholder="Name" required>
              <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-row">
              <input type="text" name="country" placeholder="Country / Region" required>
              <input type="text" name="whatsapp" placeholder="Phone Number">
            </div>
            <div class="form-row">
              <select name="product" required>
                <option value="">Product Type</option>
                <option>Lapel Pins</option>
                <option>Medals</option>
                <option>Challenge Coins</option>
                <option>Keychains</option>
                <option>Belt Buckles</option>
                <option>Golf Accessories</option>
                <option>Fridge Magnets</option>
                <option>Bottle Openers</option>
                <option>Cufflinks &amp; Tie Clips</option>
                <option>Patches</option>
                <option>Others</option>
                <option>Other</option>
              </select>
              <input type="text" name="quantity" placeholder="Quantity">
            </div>
            <div class="form-field form-field-full">
              <label for="home-quote-details">What can we help you with?</label>
              <textarea id="home-quote-details" name="details" placeholder="Notes, Comments, etc."></textarea>
            </div>
            <div class="form-field form-field-full">
              <label for="home-quote-artwork">Upload Artwork for a Free Proof</label>
              <label class="upload-box" for="home-quote-artwork">
                <input id="home-quote-artwork" type="file" name="artwork" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.psd,.cdr" aria-label="Upload artwork">
                <span class="upload-icon" aria-hidden="true">&#8593;</span>
                <span>Upload artwork or reference files for a free proof</span>
              </label>
            </div>
            <button class="btn btn-primary" type="submit">Get a Free Quote</button>
            <p class="form-commitment-note">We reply within 1 business day. Your artwork and project information are kept confidential.</p>
            <p class="form-privacy-note">We use the information you submit to respond to your inquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
            <p data-form-notice aria-live="polite" style="color: var(--navy); font-weight: 800;"></p>
          </form>
        </div>
      </div>
    </div>

    <section class="section how-section">
      <div class="container how-layout">
        <div class="how-content">
          <div class="how-heading">
            <h2>How It Works</h2>
            <p>We Make Custom Metal Crafts Simple and Reliable.</p>
          </div>
          <div class="how-steps">
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="m7 16 3.5-4 2.5 3 2-2.5 2 3.5"/><circle cx="9" cy="9" r="1.5"/></svg></span>
              <span>Share Your Ideas</span>
            </div>
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 19h14"/></svg></span>
              <span>Review artwork and confirm details.</span>
            </div>
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="m8.5 12.2 2.2 2.2 4.8-5"/></svg></span>
              <span>Craft Your Products</span>
            </div>
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h10v9H4z"/><path d="M14 10h3l3 3v3h-6z"/><circle cx="8" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg></span>
              <span>Your Order Gets Shipped</span>
            </div>
          </div>
          <a class="how-cta" href="/contact">Upload Artwork for a Free Proof</a>
        </div>
        <div class="how-visual" aria-hidden="true">
          <div class="process-flow">
            <div class="process-flow-title">DESIGN <span>→</span> PROOF <span>→</span> PRODUCT</div>
            <div class="process-stage process-stage-concept">
              <div class="process-stage-copy"><b>01 CONCEPT</b><span>Original Artwork</span></div>
              <div class="process-flow-card"><img src="assets/images/home-process-step-1.webp" alt=""></div>
            </div>
            <div class="process-stage process-stage-proof">
              <div class="process-stage-copy"><b>02 PROOF</b><span>Color &amp; Finish Preview</span></div>
              <div class="process-flow-card"><img src="assets/images/home-process-step-2.webp" alt=""></div>
            </div>
            <div class="process-stage process-stage-finished">
              <div class="process-stage-copy"><b>03 FINISHED</b><span>Production Sample</span></div>
              <div class="process-flow-card"><img src="assets/images/home-process-step-3.webp" alt=""></div>
            </div>
            <div class="process-flow-note">Free artwork support • Digital proof before production</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft why-choice-section">
      <div class="container">
        <div class="why-choice-head">
          <h2>Why Choose Us?</h2>
        </div>
        <div class="why-grid">
          <div class="why-item why-choice-card">
            <span class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M7 17 17.5 6.5a2.1 2.1 0 0 1 3 3L10 20H7z"/><path d="m15 9 3 3"/><path d="M5 4.5h3"/><path d="M6.5 3v3"/><path d="M12 3.5h2"/><path d="M13 2.5v2"/></svg></span>
            <strong>Free Design Support</strong>
            <p>Our professional design team creates production-ready artwork proofs for free.</p>
          </div>
          <div class="why-item why-choice-card">
            <span class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 6c0-1.7 2.2-3 5-3s5 1.3 5 3-2.2 3-5 3-5-1.3-5-3z"/><path d="M7 6v6c0 1.7 2.2 3 5 3s5-1.3 5-3V6"/><path d="M7 12v6c0 1.7 2.2 3 5 3s5-1.3 5-3v-6"/></svg></span>
            <strong>No MOQ</strong>
            <p>Flexible quantities are welcome. Mold fees and unit prices are calculated by project.</p>
          </div>
          <div class="why-item why-choice-card">
            <span class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3.5 20h17"/><path d="M5 20V9l7-4 7 4v11"/><path d="M8 20v-6h8v6"/><path d="M8.5 11h1.5"/><path d="M14 11h1.5"/><path d="M12 14v6"/><path d="M12 4V2.5"/><path d="M16.5 6.6 19 4.8"/><path d="M7.5 6.6 5 4.8"/></svg></span>
            <strong>Factory Direct Price</strong>
            <p>Pricing direct from the OEM/ODM manufacturer, with no middleman.</p>
          </div>
          <div class="why-item why-choice-card">
            <span class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21"/><path d="M12 3C9.5 5.6 8.2 8.6 8.2 12S9.5 18.4 12 21"/></svg></span>
            <strong>Global Service</strong>
            <p>Global OEM/ODM service for buyers in 50+ countries.</p>
          </div>
          <div class="why-item why-choice-card">
            <span class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h10v10H4z"/><path d="M14 10h3l3 3v4h-6z"/><path d="M6 17a2 2 0 1 0 4 0"/><path d="M16 17a2 2 0 1 0 4 0"/><path d="M4 4h8"/></svg></span>
            <strong>Fast Delivery</strong>
            <p class="why-copy-two-lines">DHL, FedEx, UPS &amp; trusted global carriers.</p>
          </div>
          <div class="why-item why-choice-card">
            <span class="icon-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4.4 2.9 7.4 7 9 4.1-1.6 7-4.6 7-9V6z"/><path d="m8.5 12.4 2.2 2.2 4.8-5"/></svg></span>
            <strong>Quality-First Guarantee</strong>
            <p class="why-copy-two-lines">Careful inspection from production to delivery.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section home-company-section" aria-labelledby="home-company-title">
      <div class="container home-company-layout">
        <div class="home-company-media">
          <video class="home-company-video" controls playsinline preload="metadata" aria-label="Unique Pin company and product overview video">
            <source src="/assets/videos/company-overview.mp4?v=20260819-lfs-fix" type="video/mp4">
          </video>
        </div>
        <div class="home-company-copy">
          <span class="home-company-eyebrow">Custom Metal Gifts Manufacturer</span>
          <h2 id="home-company-title">Meet Unique Pin</h2>
          <p>Take a 34-second look inside our 6,000 m² factory in Zhongshan, China. With 34 production machines, our in-house team manages CNC engraving, die casting, polishing, plating, enamel coloring, inspection and packing.</p>
          <p>We manufacture custom enamel pins, challenge coins, medals, keychains and belt buckles for distributors, brands, clubs and event organizers-from artwork proofing to global delivery.</p>
          <div class="home-company-actions">
            <a class="btn btn-primary" href="/about">About Us</a>
            <a class="btn btn-outline" href="/products">View Products</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section reviews-section">
      <div class="container">
        <div class="center-head reviews-head">
          <span class="brand-kicker" aria-hidden="true"></span>
          <h2>Reviews From Our Customers</h2>
          <p>Check out feedback from real customers! We persist in providing good metal craft products and services all the time.</p>
        </div>
        <div class="review-carousel" data-review-carousel>
          <button class="review-nav review-prev" type="button" data-review-prev aria-label="Previous reviews">&lsaquo;</button>
          <div class="review-viewport">
            <div class="testimonial-grid review-track" data-review-track>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-brass-engraving-coins-canada.webp" alt="Customer review screenshot for brass engraving collectible coins from Canada" width="818" height="360" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-challenge-coin.webp" alt="Customer review screenshot for a custom 3D metal challenge coin order" width="799" height="208" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-monstera-keychain.webp" alt="Customer review screenshot for a tropical monstera plant leaf enamel keychain order" width="804" height="340" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-repeat-order.webp" alt="Customer review screenshot for a repeat custom coin and keychain order" width="796" height="320" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-cross-hat-lapel-pin.webp" alt="Customer review screenshot for a polished metal cross hat lapel pin order" width="797" height="218" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-iron-lapel-pins-australia.webp" alt="Customer review screenshot for iron lapel pins from an Australia customer" width="814" height="206" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-ball-marker-hat-clip.webp" alt="Customer review screenshot for a ball marker and hat clip repeat order" width="791" height="282" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-iron-lapel-pin-uk.webp" alt="Customer review screenshot for an 800 piece iron lapel pin order from the United Kingdom" width="807" height="237" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-magnetic-clip-canada.webp" alt="Customer review screenshot for a personalized magnetic clip order from Canada" width="796" height="271" loading="lazy" decoding="async">
              </article>
              <article class="testimonial review-card review-image-card">
                <img src="/assets/images/customer-review-commemorative-coins-australia.webp" alt="Customer review screenshot for commemorative coin orders from Australia" width="831" height="255" loading="lazy" decoding="async">
              </article>
            </div>
          </div>
          <button class="review-nav review-next" type="button" data-review-next aria-label="Next reviews">&rsaquo;</button>
          <div class="review-dots" aria-label="Review carousel pagination">
            <button type="button" class="is-active" data-review-dot="0" aria-label="Review page 1"></button>
            <button type="button" data-review-dot="1" aria-label="Review page 2"></button>
            <button type="button" data-review-dot="2" aria-label="Review page 3"></button>
            <button type="button" data-review-dot="3" aria-label="Review page 4"></button>
            <button type="button" data-review-dot="4" aria-label="Review page 5"></button>
            <button type="button" data-review-dot="5" aria-label="Review page 6"></button>
            <button type="button" data-review-dot="6" aria-label="Review page 7"></button>
            <button type="button" data-review-dot="7" aria-label="Review page 8"></button>
            <button type="button" data-review-dot="8" aria-label="Review page 9"></button>
            <button type="button" data-review-dot="9" aria-label="Review page 10"></button>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-cert-section" id="certificates">
      <div class="container">
        <div class="center-head about-heading">
          <span class="heading-mark" aria-hidden="true"></span>
          <h2>Certificates</h2>
        </div>
        <div class="cert-grid">
          <figure class="cert" data-cert-lightbox-trigger data-cert-holder="Zhongshan Custom Crafts Co., Ltd." data-cert-scope="Production of hardware craft jewelry" data-cert-issuer="NQA" data-cert-number="132573" data-cert-dates="Issue date: 13 June 2023; Valid until: 13 June 2026" role="button" tabindex="0" aria-label="View ISO 9001 certificate">
            <img src="assets/images/cert-iso9001.webp" alt="Unique Pin ISO9001 certificate">
            <figcaption class="cert-name">ISO 9001</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger data-cert-holder="Zhongshan Custom Crafts Co., Ltd." data-cert-scope="Production of hardware craft jewelry" data-cert-issuer="NQA" data-cert-number="132574" data-cert-dates="Issue date: 13 June 2023; Valid until: 13 June 2026" role="button" tabindex="0" aria-label="View ISO 14001 certificate">
            <img src="assets/images/cert-iso14001.webp" alt="Unique Pin ISO14001 certificate">
            <figcaption class="cert-name">ISO 14001</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger data-cert-holder="Zhongshan Unique Metal Gift Co., Limited" data-cert-scope="Lapel pin conformity for EMC 2014/30/EU" data-cert-issuer="Shenzhen SIT Testing Technology Co., Ltd." data-cert-number="SIT240808160101E" data-cert-dates="Issue date: August 15, 2024; Expiry date: Not listed on certificate" role="button" tabindex="0" aria-label="View CE certificate">
            <img src="assets/images/cert-ce.webp" alt="Unique Pin CE certificate">
            <figcaption class="cert-name">CE</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger data-cert-holder="Zhongshan Unique Metal Gift Co., Limited" data-cert-scope="Lapel pin conformity for RoHS Directive (EU) 2015/863" data-cert-issuer="Shenzhen SIT Testing Technology Co., Ltd." data-cert-number="SIT240808160101R" data-cert-dates="Issue date: August 15, 2024; Expiry date: Not listed on certificate" role="button" tabindex="0" aria-label="View RoHS certificate">
            <img src="assets/images/cert-rohs.webp" alt="Unique Pin RoHS certificate">
            <figcaption class="cert-name">RoHS</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger data-cert-holder="Guangdong Custom Cultural Creative Gifts Co., Ltd." data-cert-scope="Secondary processing of FSC 100%, FSC Mix and FSC Recycled paper and pulp products" data-cert-issuer="AENOR International S.A.U." data-cert-number="AEN-COC-001214" data-cert-dates="First issued: 2023-08-10; Valid until: 2026-08-17" role="button" tabindex="0" aria-label="View FSC certificate">
            <img src="assets/images/cert-fsc.webp" alt="Unique Pin FSC certificate">
            <figcaption class="cert-name">FSC</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger data-cert-holder="Available in full audit report" data-cert-scope="Sedex Members Ethical Trade Audit Report" data-cert-issuer="SMETA / Sedex" data-cert-number="Available in full audit report" data-cert-dates="Version 7; audit dates available in full report" role="button" tabindex="0" aria-label="View SMETA certificate">
            <img src="assets/images/cert-smeta.webp" alt="Unique Pin SMETA certificate">
            <figcaption class="cert-name">SMETA</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <div class="cert-lightbox" data-cert-lightbox hidden aria-hidden="true" role="dialog" aria-modal="true" aria-label="Certificate preview">
      <button class="cert-lightbox-backdrop" type="button" data-cert-lightbox-close aria-label="Close certificate preview"></button>
      <div class="cert-lightbox-panel">
        <button class="cert-lightbox-close" type="button" data-cert-lightbox-close aria-label="Close certificate preview">&times;</button>
        <img class="cert-lightbox-img" src="" alt="">
        <div class="cert-lightbox-copy">
          <p class="cert-lightbox-caption"></p>
        </div>
      </div>
    </div>

    <section class="section latest-products-section" aria-labelledby="latest-products-title">
      <div class="container latest-products-wrap">
        <div class="latest-products-head product-heading">
          <div>
            <span class="brand-kicker" aria-hidden="true"></span>
            <h2 id="latest-products-title">Latest Custom Metal Creations</h2>
            <p>Explore our newest badges, medals, coins, and metal gifts designed for brands, events, and wholesale projects.</p>
          </div>
        </div>
        <div class="latest-products-grid">
          <article class="latest-product-card">
            <span class="latest-product-badge">NEW</span>
            <a class="latest-product-media" href="/products/custom-enamel-pins/christmas-enamel-pin-set" aria-label="View Christmas Enamel Pin Set">
              <img src="assets/images/latest-christmas-enamel-pins.jpg" alt="Christmas enamel pin set" loading="lazy">
            </a>
            <div class="latest-product-body">
              <h3><a href="/products/custom-enamel-pins/christmas-enamel-pin-set">Christmas Enamel Pin Set</a></h3>
            </div>
            <a class="latest-product-quote" href="/contact" data-product-inquiry-trigger data-product-inquiry-product="Lapel Pins" data-product-inquiry-title="Christmas Enamel Pin Set">Get a Free Quote</a>
          </article>
          <article class="latest-product-card">
            <span class="latest-product-badge">NEW</span>
            <a class="latest-product-media" href="/products/custom-medals/gold-scn-ribbon-medal" aria-label="View Gold SCN Ribbon Medal">
              <img src="assets/images/latest-gold-scn-ribbon-medal.webp" alt="Gold SCN ribbon medal" loading="lazy">
            </a>
            <div class="latest-product-body">
              <h3><a href="/products/custom-medals/gold-scn-ribbon-medal">Gold SCN Ribbon Medal</a></h3>
            </div>
            <a class="latest-product-quote" href="/contact" data-product-inquiry-trigger data-product-inquiry-product="Medals" data-product-inquiry-title="Gold SCN Ribbon Medal">Get a Free Quote</a>
          </article>
          <article class="latest-product-card">
            <span class="latest-product-badge">NEW FINISH</span>
            <a class="latest-product-media" href="/products/custom-challenge-coins/christmas-bell-challenge-coin" aria-label="View Christmas Bell Challenge Coin">
              <img src="assets/images/latest-christmas-bell-challenge-coin.jpg" alt="Christmas bell challenge coin" loading="lazy">
            </a>
            <div class="latest-product-body">
              <h3><a href="/products/custom-challenge-coins/christmas-bell-challenge-coin">Christmas Bell Challenge Coin</a></h3>
            </div>
            <a class="latest-product-quote" href="/contact" data-product-inquiry-trigger data-product-inquiry-product="Challenge Coins" data-product-inquiry-title="Christmas Bell Challenge Coin">Get a Free Quote</a>
          </article>
          <article class="latest-product-card">
            <span class="latest-product-badge">NEW</span>
            <a class="latest-product-media" href="/products/custom-metal-keychains/travel-charm-spinner-keychain" aria-label="View Travel Charm Spinner Keychain">
              <img src="assets/images/type-keychains-spinner.jpg" alt="Travel charm spinner keychain" loading="lazy">
            </a>
            <div class="latest-product-body">
              <h3><a href="/products/custom-metal-keychains/travel-charm-spinner-keychain">Travel Charm Spinner Keychain</a></h3>
            </div>
            <a class="latest-product-quote" href="/contact" data-product-inquiry-trigger data-product-inquiry-product="Keychains" data-product-inquiry-title="Travel Charm Spinner Keychain">Get a Free Quote</a>
          </article>
        </div>
      </div>
    </section>

  </main>
  ${footerHtml}`;

export default function Page() {
  return <StaticPage html={html} />;
}
