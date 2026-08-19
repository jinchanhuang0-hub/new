import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { siteHeaderHtml } from "../components/siteHeaderHtml";


export const metadata = {
  title: "About Unique Pin | Custom Metal Gifts Manufacturer",
  description: "Meet Unique Pin, an international custom metal gifts business established in 2018 and supported by a team with industry experience dating to 2003.",
  alternates: {
    canonical: "/about",
  },
};

const html = String.raw`
  ${siteHeaderHtml({ active: "about" })}

  <main>
    <section class="about-hero">
      <div class="container about-hero-layout">
        <div class="about-hero-copy">
          <span class="about-hero-kicker">OEM / ODM Metal Gifts Factory</span>
          <h1>About Us</h1>
          <p>Unique Pin supports B2B buyers with OEM/ODM manufacturing for custom enamel pins, medals, challenge coins, keychains, belt buckles, and other metal promotional products.</p>
        </div>
      </div>
    </section>

    <section class="section about-factory-view-section" aria-label="Factory videos">
      <div class="container">
        <div class="about-profile-gallery" aria-label="Inside our factory">
          <div class="about-profile-video" data-video-lightbox-trigger data-video-src="assets/videos/factory-capability-web.mp4" data-video-poster="assets/images/factory-3.webp" role="button" tabindex="0" aria-label="Watch factory capability video larger">
            <video class="factory-video-card" controls playsinline preload="metadata" poster="assets/images/factory-3.webp" aria-label="Factory capability video">
              <source src="assets/videos/factory-capability-web.mp4" type="video/mp4">
            </video>
            <span class="video-expand-hint" aria-hidden="true">Watch larger</span>
          </div>
          <div class="about-profile-video" data-video-lightbox-trigger data-video-src="assets/videos/factory-original-web.mp4" data-video-poster="assets/images/factory-original-frame-poster.jpg" role="button" tabindex="0" aria-label="Watch original factory video larger">
            <video class="factory-video-card" controls playsinline preload="metadata" poster="assets/images/factory-original-frame-poster.jpg" aria-label="Original factory video">
              <source src="assets/videos/factory-original-web.mp4" type="video/mp4">
            </video>
            <span class="video-expand-hint" aria-hidden="true">Watch larger</span>
          </div>
          <div class="about-profile-video" data-video-lightbox-trigger data-video-src="assets/videos/factory-view-1.mp4" data-video-poster="assets/images/factory-production-frame-poster.jpg" role="button" tabindex="0" aria-label="Watch production line video larger">
            <video class="factory-video-card" controls playsinline preload="metadata" poster="assets/images/factory-production-frame-poster.jpg" aria-label="Production line video">
              <source src="assets/videos/factory-view-1.mp4" type="video/mp4">
            </video>
            <span class="video-expand-hint" aria-hidden="true">Watch larger</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-profile-section" id="profile">
      <div class="container about-profile">
        <div class="about-profile-copy">
          <h2>Who We Are</h2>
          <p class="about-profile-subtitle">Custom Metal Manufacturing Supported by Experience Since 2003</p>
          <p>Unique Pin is the custom metal products brand of Zhongshan Unique Metal Gift Co., Ltd., a manufacturer established in Zhongshan, China, in 2018. We provide end-to-end OEM and ODM services, from product design and mold development through manufacturing and quality inspection to global delivery. Our team is backed by custom metal gifts manufacturing expertise dating back to 2003.</p>
          <p>We manufacture custom enamel pins, badges, challenge coins, medals, belt buckles, metal keychains, and other metal accessories for promotions, corporate gifts, sports events, military collections, commemorative programs, and retail projects worldwide.</p>
          <p>Our 6,000-square-meter Zhongshan factory is equipped with 34 production machines and covers CNC engraving, die casting, stamping, polishing, electroplating, enamel coloring, and QC in-house. Supported by certifications including Sedex, FSC, CE, RoHS, and Disney FAMA, we serve customers across North America, Europe, Australia, Southeast Asia, and the Middle East.</p>
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

    <section class="section about-mission-section" id="mission">
      <div class="container about-mission-layout">
        <figure class="about-mission-media">
          <img src="assets/images/factory-customer-visit.webp" alt="Customers visiting the Unique Pin factory and reviewing custom products with our team" loading="lazy">
        </figure>
        <div class="about-mission-copy">
          <h2>Our Mission</h2>
          <p>We believe every successful project starts with clear communication and professional support. Our team works closely with customers to understand their needs, optimize solutions, and deliver high-quality custom metal products.</p>
          <div class="about-mission-values" aria-label="Our mission commitments">
            <div class="about-mission-value">
              <span class="about-mission-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="icon-fill" d="M12 2.8 4.8 6v6.1c0 4.5 3 7.7 7.2 9.3 4.2-1.6 7.2-4.8 7.2-9.3V6L12 2.8Z"/><path class="icon-outline" d="M12 5.2 7 7.4v4.4c0 3.1 1.9 5.4 5 6.8 3.1-1.4 5-3.7 5-6.8V7.4L12 5.2Z"/><path class="icon-accent" d="m9.1 11.9 2 2 4-4.4"/></svg></span>
              <strong>Highest Quality</strong>
            </div>
            <div class="about-mission-value">
              <span class="about-mission-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="icon-fill" d="m6.2 16.7 10.6-10.6a2.5 2.5 0 0 1 3.5 3.5L9.7 20.2l-4.4.9.9-4.4Z"/><path class="icon-outline" d="m7.2 16.8 10.2-10.2a1.7 1.7 0 0 1 2.4 2.4L9.6 19.2l-3.3.7.9-3.1Z"/><path class="icon-accent" d="m15.3 8.7 3 3M4 21h16"/></svg></span>
              <strong>Expert Customization</strong>
            </div>
            <div class="about-mission-value">
              <span class="about-mission-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="icon-rays" d="M12 2V.8M5.7 4.6l-.9-.9M18.3 4.6l.9-.9M3.3 10H2M22 10h-1.3"/><path class="icon-fill" d="M7.1 10.5a4.9 4.9 0 0 1 9.8 0c0 1.8-.8 3.1-2 4.3-.8.8-1.1 1.5-1.2 2.3h-3.4c-.1-.8-.4-1.5-1.2-2.3-1.2-1.2-2-2.5-2-4.3Z"/><path class="icon-outline" d="M8.2 10.5a3.8 3.8 0 0 1 7.6 0c0 1.4-.7 2.5-1.6 3.4-.8.8-1.2 1.6-1.3 2.3h-1.8c-.1-.7-.5-1.5-1.3-2.3-.9-.9-1.6-2-1.6-3.4Z"/><path class="icon-neutral" d="M9.8 17.2h4.4v2.1H9.8zM10.5 20h3v1.4h-3z"/></svg></span>
              <strong>Designed For You</strong>
            </div>
            <div class="about-mission-value">
              <span class="about-mission-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="icon-fill" d="M12 3.2A8.8 8.8 0 1 0 20.8 12H18a6 6 0 1 1-1.8-4.3L13.5 10H21V2.8l-2.6 2.5A8.7 8.7 0 0 0 12 3.2Z"/><path class="icon-outline" d="M12 5.3a6.7 6.7 0 1 0 6.7 6.7M15.7 5.6 21 5v5.3"/><path class="icon-accent" d="M21 5c-2.9 3.3-5.9 5.6-9.3 7.1"/></svg></span>
              <strong>Fast Service</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-visit-gallery-section" id="customer-visits" aria-label="Customer visits and exhibitions">
      <div class="container">
        <div class="about-visit-gallery">
          <figure class="about-visit-shot about-visit-shot-large about-visit-shot-left">
            <img src="assets/images/about-visit-left.jpg" alt="Customer visiting the Unique Pin office with our team" loading="lazy">
          </figure>
          <figure class="about-visit-shot">
            <img src="assets/images/about-visit-center-1.jpg" alt="International customers visiting the Unique Pin showroom" loading="lazy">
          </figure>
          <figure class="about-visit-shot">
            <img src="assets/images/about-visit-center-2.jpg" alt="Customer photo in front of custom metal gift display cases" loading="lazy">
          </figure>
          <figure class="about-visit-shot">
            <img src="assets/images/about-visit-center-3.jpg" alt="Unique Pin trade show booth with product displays" loading="lazy">
          </figure>
          <figure class="about-visit-shot">
            <img src="assets/images/about-visit-center-4.jpg" alt="Unique Pin exhibition booth with custom metal gift samples" loading="lazy">
          </figure>
          <figure class="about-visit-shot about-visit-shot-large about-visit-shot-right">
            <img src="assets/images/about-visit-right.jpg" alt="Customers visiting Unique Pin and meeting our factory team" loading="lazy">
          </figure>
        </div>
      </div>
    </section>

    <section class="section about-team-section" id="team">
      <div class="container">
        <div class="center-head about-team-head">
          <span class="heading-mark" aria-hidden="true"></span>
          <h2>Meet the Team</h2>
        </div>
        <div class="about-team-grid" aria-label="Unique Pin core team">
          <article class="about-team-member about-team-member-director">
            <figure class="about-team-portrait">
              <span class="about-team-disc" aria-hidden="true"></span>
              <img class="about-team-cutout" src="assets/images/team-cutout-director.png" alt="Unique Pin director" loading="lazy">
            </figure>
            <p class="about-team-name">Jake</p>
            <h3>Managing Director</h3>
          </article>
          <article class="about-team-member about-team-member-business">
            <figure class="about-team-portrait">
              <span class="about-team-disc" aria-hidden="true"></span>
              <img class="about-team-cutout" src="assets/images/team-cutout-business-supervisor.png" alt="Unique Pin business supervisor" loading="lazy">
            </figure>
            <p class="about-team-name">Eva</p>
            <h3>Business Supervisor</h3>
          </article>
          <article class="about-team-member about-team-member-designer">
            <figure class="about-team-portrait">
              <span class="about-team-disc" aria-hidden="true"></span>
              <img class="about-team-cutout" src="assets/images/team-cutout-graphic-designer.png" alt="Unique Pin graphic designer" loading="lazy">
            </figure>
            <p class="about-team-name">Jane</p>
            <h3>Graphic Designer</h3>
          </article>
        </div>
      </div>
    </section>

    <section class="section reviews-section about-review-section" id="reviews">
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

    <section class="section cta-section">
      <div class="container">
        <div class="cta-band">
          <div>
            <h2>Ready to Start Your Custom Metal Gift Project?</h2>
            <p>Send us your idea, logo or reference image. We will help turn it into a production-ready design.</p>
          </div>
          <div class="cta-actions">
            <a class="btn btn-yellow" href="/contact">Get a Free Quote</a>
            <a class="btn btn-outline" href="https://api.whatsapp.com/send?phone=8618895316838&amp;text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div class="video-lightbox" data-video-lightbox hidden aria-hidden="true">
    <button class="video-lightbox-backdrop" type="button" data-video-lightbox-close aria-label="Close video"></button>
    <div class="video-lightbox-panel" role="dialog" aria-modal="true" aria-label="Factory capability video">
      <button class="video-lightbox-close" type="button" data-video-lightbox-close aria-label="Close video">&times;</button>
      <video class="video-lightbox-player" controls playsinline></video>
    </div>
  </div>
  ${footerHtml}`;

export default function Page() {
  return <StaticPage html={html} />;
}

