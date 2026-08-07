import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";

export const metadata = {
  title: "About Unique Pin | Custom Metal Gifts Manufacturer",
  description: "Meet Unique Pin, an international custom metal gifts business established in 2018 and supported by a team with industry experience dating to 2003.",
  alternates: {
    canonical: "/about",
  },
};

const html = String.raw`
  <div class="topbar">
    <div class="container">
      <span>Team Industry Experience Since 2003</span>
      <span>Email: ceo@chinauniquepin.com | WhatsApp: +86 18895316838</span>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="/">
        <img src="assets/images/logo.png" alt="Unique Pin logo">
        <span><strong>Unique Pin</strong><span>Custom Metal Gifts Factory</span></span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <div class="nav-item products-menu"><a href="/products">Products</a><div class="mega-dropdown" role="menu" aria-label="Products mega menu"><div class="mega-panel"><div class="mega-featured"><a class="mega-product" href="/products/custom-enamel-pins"><img src="assets/images/mega-lapel-pins-auburn.jpg" alt="Custom Auburn lapel pin"><span>Lapel Pins</span><small>Custom enamel pins for brands, events and clubs.</small></a><a class="mega-product" href="/products/custom-medals"><img src="assets/images/mega-medals-butterfly.png" alt="Custom butterfly medal with ribbon"><span>Medals</span><small>Colorful award medals with ribbons and finishes.</small></a><a class="mega-product" href="/products/custom-challenge-coins"><img src="assets/images/mega-challenge-coin-christmas.jpg" alt="Custom Christmas challenge coin"><span>Challenge Coins</span><small>Detailed coins for recognition and commemorations.</small></a></div><div class="mega-list"><a href="/products/custom-enamel-pins">Lapel Pins</a><a href="/products/custom-challenge-coins">Challenge Coins</a><a href="/products/custom-medals">Medals</a><a href="/products/custom-metal-keychains">Keychains</a><a href="/products/custom-belt-buckles">Belt Buckles</a><a href="/products/custom-golf-accessories">Golf Ball Markers &amp;Hat Clips</a><a href="/products/custom-bottle-openers">Bottle Openers</a><a href="/products/custom-cufflinks-tie-clips">Cufflinks &amp; Tie Clips</a><a href="/products/custom-fridge-magnets">Fridge Magnets</a></div><div class="mega-cta"><div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div><a class="btn btn-yellow" href="/contact">Get Free Quote</a></div></div></div></div>
        <a href="/custom">Custom</a>
        <a class="active" href="/about">About Us</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <div class="nav-actions">
        <a class="btn btn-primary" href="/contact">Get Free Quote</a>
        <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">&#9776;</button>
      </div>
    </div>
  </header>

  <main>
    <section class="about-hero">
      <div class="container about-hero-layout">
        <div class="about-hero-copy">
          <span class="about-hero-kicker">OEM / ODM Metal Gifts Factory</span>
          <h1>About Us</h1>
          <p>Unique Pin supports B2B buyers with OEM/ODM manufacturing for custom enamel pins, medals, challenge coins, keychains, belt buckles, and other metal promotional products.</p>
          <div class="about-hero-highlights" aria-label="Unique Pin factory highlights">
            <span>International Trade Since 2018</span>
            <span>Team Experience Since 2003</span>
            <span>Global Delivery</span>
          </div>
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
          <div class="about-profile-video" data-video-lightbox-trigger data-video-src="assets/videos/factory-original-web.mp4" role="button" tabindex="0" aria-label="Watch original factory video larger">
            <video class="factory-video-card" controls playsinline preload="metadata" aria-label="Original factory video">
              <source src="assets/videos/factory-original-web.mp4" type="video/mp4">
            </video>
            <span class="video-expand-hint" aria-hidden="true">Watch larger</span>
          </div>
          <div class="about-profile-video" data-video-lightbox-trigger data-video-src="assets/videos/factory-view-1.mp4" role="button" tabindex="0" aria-label="Watch production line video larger">
            <video class="factory-video-card" controls playsinline preload="metadata" aria-label="Production line video">
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
          <p class="about-profile-subtitle">Over 20 Years of Crafting Quality Metal Products</p>
          <p>Zhongshan Unique Metal Gift Co., Ltd. was established in 2018 as a subsidiary of Guangdong Custom Culture Gifts Co., Ltd. for international B2B markets. Backed by group manufacturing experience since 2003, Unique Pin provides OEM/ODM support from design and mold development to production, inspection, and delivery.</p>
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
          <figure class="cert" data-cert-lightbox-trigger role="button" tabindex="0" aria-label="View ISO 9001 certificate">
            <img src="assets/images/cert-iso9001.png" alt="Unique Pin ISO9001 certificate">
            <figcaption class="cert-name">ISO 9001</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger role="button" tabindex="0" aria-label="View ISO 14001 certificate">
            <img src="assets/images/cert-iso14001.png" alt="Unique Pin ISO14001 certificate">
            <figcaption class="cert-name">ISO 14001</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger role="button" tabindex="0" aria-label="View CE certificate">
            <img src="assets/images/cert-ce.png" alt="Unique Pin CE certificate">
            <figcaption class="cert-name">CE</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger role="button" tabindex="0" aria-label="View RoHS certificate">
            <img src="assets/images/cert-rohs.png" alt="Unique Pin RoHS certificate">
            <figcaption class="cert-name">RoHS</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger role="button" tabindex="0" aria-label="View FSC certificate">
            <img src="assets/images/cert-fsc.png" alt="Unique Pin FSC certificate">
            <figcaption class="cert-name">FSC</figcaption>
          </figure>
          <figure class="cert" data-cert-lightbox-trigger role="button" tabindex="0" aria-label="View SMETA certificate">
            <img src="assets/images/cert-smeta.png" alt="Unique Pin SMETA certificate">
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
        <p class="cert-lightbox-caption"></p>
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
          <div class="about-mission-social footer-social" aria-label="Follow Unique Pin">
            <a class="footer-social-instagram" href="https://www.instagram.com/uniquepin/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.6-3.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg></a>
            <a class="footer-social-facebook" href="https://www.facebook.com/profile.php?id=61583070933333&locale=zh_CN" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5v3.1H4.2v3.8h3.5V24h4.3v-6.7h3.3l.6-3.8H12v-2.7c0-1.1.3-2.3 2-2.3Z"/></svg></a>
            <a class="footer-social-youtube" href="https://www.youtube.com/@CustompinUnique" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg></a>
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
            <h3>Director</h3>
          </article>
          <article class="about-team-member about-team-member-business">
            <figure class="about-team-portrait">
              <span class="about-team-disc" aria-hidden="true"></span>
              <img class="about-team-cutout" src="assets/images/team-cutout-business-supervisor.png" alt="Unique Pin business supervisor" loading="lazy">
            </figure>
            <h3>Business Supervisor</h3>
          </article>
          <article class="about-team-member about-team-member-designer">
            <figure class="about-team-portrait">
              <span class="about-team-disc" aria-hidden="true"></span>
              <img class="about-team-cutout" src="assets/images/team-cutout-graphic-designer.png" alt="Unique Pin graphic designer" loading="lazy">
            </figure>
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
          <p>Check how satisfied our customers are viewing their feedback and testimonials. We persist in providing good metal craft products and services all the time.</p>
        </div>
        <div class="review-carousel" data-review-carousel>
          <button class="review-nav review-prev" type="button" data-review-prev aria-label="Previous reviews">&lsaquo;</button>
          <div class="review-viewport">
            <div class="testimonial-grid review-track" data-review-track>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Fantastic Medals &amp; Fast Support</h3>
                <p>The medals turned out absolutely fantastic. These will be a big hit with swimmers lucky enough to get their hands on one.</p>
                <p class="review-more">Ada was great to deal with and responded very quickly to all of our changes and requests so that the medals ended exactly what we envisioned.</p>
                <div class="review-author">
                  <span><strong>Michael Turner</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>7th Repeat Order</h3>
                <p>I honestly cannot say enough good things about the quality of the coins and keychains I have received from here.</p>
                <p class="review-more">This was actually our 7th time ordering, and they have not missed a beat. The quality is very good and communication was excellent.</p>
                <div class="review-author">
                  <span><strong>Sarah Mitchell</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Perfect Custom Lapel Pins</h3>
                <p>The custom lapel pins turned out absolutely perfect - clean details, vivid colors, and excellent quality.</p>
                <p class="review-more">Communication was fast and professional throughout the entire process. The supplier was very helpful with design adjustments and delivered exactly what I needed.</p>
                <div class="review-author">
                  <span><strong>David Parker</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Outstanding Quality &amp; Detail</h3>
                <p>Fantastic quality, attention to detail and packaging - just outstanding. Even better than I could have hoped for when I first designed them.</p>
                <p class="review-more">This is my favourite supplier to work with, highly recommended. Eva is a great customer representative and answered all my questions with speed and grace.</p>
                <div class="review-author">
                  <span><strong>Emily Carter</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Helpful Long-Term Partner</h3>
                <p>Eve is always very helpful. I have used this company for the past 4 years for challenge coins, pins and magnets.</p>
                <p class="review-more">They are great at offering suggestions and problem solving, and all of the products have come out very nice.</p>
                <div class="review-author">
                  <span><strong>Mark Wilson</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Fast Turnaround &amp; Proofing</h3>
                <p>The turnaround time is incredibly fast, but my favorite part of the process is the communication.</p>
                <p class="review-more">Their designers always send over a proof to make sure you are 100% happy with the design before production. That extra level of customer service keeps us coming back.</p>
                <div class="review-author">
                  <span><strong>Jessica Brown</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Amazing Coin Service</h3>
                <p>The coin is amazing, and the customer service is excellent. Every time I have a question, the team is helpful.</p>
                <p class="review-more">They work closely with me to create the coin design I want, and the process is smooth from design discussion to final production.</p>
                <div class="review-author">
                  <span><strong>Robert Miller</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Excellent Communication</h3>
                <p>The quality is very good. Communication was excellent, and the team understood my needs well.</p>
                <p class="review-more">They worked to create the exact item I envisioned and made the custom ordering process clear and reliable.</p>
                <div class="review-author">
                  <span><strong>Amanda Lewis</strong></span>
                </div>
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
            <a class="btn btn-yellow" href="/contact">Request Quote</a>
            <a class="btn btn-outline" href="/contact">Start Custom Order</a>
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

