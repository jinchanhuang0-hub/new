import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "About Unique Pin | Custom Metal Gifts Manufacturer",
  description: "Meet Unique Pin, a custom metal gifts OEM/ODM manufacturer founded in 2003 with integrated production, quality control and global delivery.",
  alternates: {
    canonical: "/about",
  },
};

const html = String.raw`
  <div class="topbar">
    <div class="container">
      <span>Professional OEM/ODM Manufacturer Since 2003</span>
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
          <p>Are you looking for a supplier of custom products? Then you've hit the jackpot by choosing Unique. Choosing us means choosing quality, originality, affordable prices, and fast turnaround times.</p>
          <div class="about-hero-highlights" aria-label="Unique Pin factory highlights">
            <span>Since 2003</span>
            <span>20+ Years Experience</span>
            <span>Global Delivery</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-profile-section" id="profile">
      <div class="container about-profile">
        <div class="about-profile-copy">
          <div class="about-profile-gallery" aria-label="Inside our factory">
            <div class="about-profile-video" data-video-lightbox-trigger data-video-src="assets/videos/factory-capability-web.mp4" data-video-poster="assets/images/factory-3.webp" role="button" tabindex="0" aria-label="Watch factory capability video larger">
              <video class="factory-video-card" controls playsinline preload="metadata" poster="assets/images/factory-3.webp" aria-label="Factory capability video">
                <source src="assets/videos/factory-capability-web.mp4" type="video/mp4">
              </video>
              <span class="video-expand-hint" aria-hidden="true">Watch larger</span>
            </div>
            <figure class="about-profile-image">
              <img src="assets/images/factory-production-line.jpg" alt="Automated metal production equipment inside the Unique Pin factory" loading="lazy">
            </figure>
            <figure class="about-profile-image">
              <img src="assets/images/factory-automated-coloring.jpg" alt="Technicians operating automated coloring equipment inside the Unique Pin factory" loading="lazy">
            </figure>
          </div>
          <h2>Who We Are</h2>
          <p class="about-profile-subtitle">Over 20 Years of Crafting Quality Metal Products</p>
          <p>Zhongshan Unique Metal Gift Co., Ltd. has its roots in Kaston, which was founded in 2003. It is a professional manufacturer specializing in custom metal gifts and promotional products. We provide complete OEM and ODM solutions, covering product design, mold development, manufacturing, finishing processes, quality inspection, and global delivery.</p>
          <p>Our product range includes custom enamel pins, badges, challenge coins, medals, belt buckles, metal keychains, and other customized metal accessories. These products are widely used for brand promotions, corporate gifting, sports events, military collections, commemorative programs, and retail applications worldwide.</p>
          <p>With a fully integrated manufacturing facility, we manage every stage of production in-house, including CNC engraving, die casting, stamping, polishing, electroplating, automated enamel coloring, and quality inspection. Our 6,000-square-meter factory is equipped with 34 sets of advanced production machines, allowing us to efficiently handle both small customized projects and large-scale production orders.</p>
          <p>With more than 20 years of manufacturing experience, we have supported projects for international brands and organizations across different industries. Our production capabilities are backed by certifications including Sedex, FSC, CE, RoHS, and Disney FAMA. Operating manufacturing facilities in China and Bangladesh, we provide flexible production solutions and stable supply chain support for customers in North America, Europe, Australia, Southeast Asia, and the Middle East.</p>
          <p>Driven by our philosophy of “Precision Craftsmanship Builds Trust,” we combine advanced manufacturing technology, strict quality control, and responsive customer service to create durable, high-quality metal products that help brands turn creative ideas into lasting products.</p>
        </div>
      </div>
    </section>

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

    <section class="section section-soft why-choice-section about-features-section" id="features">
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
            <strong>No Minimum Order</strong>
            <p>Flexible quantities make it easy to order small runs or large orders.</p>
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

    <section class="section about-cert-section" id="certificates">
      <div class="container">
        <div class="center-head about-heading">
          <span class="heading-mark" aria-hidden="true"></span>
          <h2>Certificates</h2>
        </div>
        <div class="cert-grid">
          <div class="cert"><img src="assets/images/cert-iso9001.png" alt="Unique Pin ISO9001 certificate"></div>
          <div class="cert"><img src="assets/images/cert-iso14001.png" alt="Unique Pin ISO14001 certificate"></div>
          <div class="cert"><img src="assets/images/cert-ce.png" alt="Unique Pin CE certificate"></div>
          <div class="cert"><img src="assets/images/cert-rohs.png" alt="Unique Pin ROHS certificate"></div>
          <div class="cert"><img src="assets/images/cert-fsc.png" alt="Unique Pin FSC certificate"></div>
          <div class="cert"><img src="assets/images/cert-smeta.png" alt="Unique Pin SMETA certificate"></div>
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
                  <img src="https://i.pravatar.cc/96?img=12" alt="Michael Turner" loading="lazy" />
                  <span><strong>Michael Turner</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>7th Repeat Order</h3>
                <p>I honestly cannot say enough good things about the quality of the coins and keychains I have received from here.</p>
                <p class="review-more">This was actually our 7th time ordering, and they have not missed a beat. The quality is very good and communication was excellent.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=32" alt="Sarah Mitchell" loading="lazy" />
                  <span><strong>Sarah Mitchell</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Perfect Custom Lapel Pins</h3>
                <p>The custom lapel pins turned out absolutely perfect - clean details, vivid colors, and excellent quality.</p>
                <p class="review-more">Communication was fast and professional throughout the entire process. The supplier was very helpful with design adjustments and delivered exactly what I needed.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=56" alt="David Parker" loading="lazy" />
                  <span><strong>David Parker</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Outstanding Quality &amp; Detail</h3>
                <p>Fantastic quality, attention to detail and packaging - just outstanding. Even better than I could have hoped for when I first designed them.</p>
                <p class="review-more">This is my favourite supplier to work with, highly recommended. Eva is a great customer representative and answered all my questions with speed and grace.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=47" alt="Emily Carter" loading="lazy" />
                  <span><strong>Emily Carter</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Helpful Long-Term Partner</h3>
                <p>Eve is always very helpful. I have used this company for the past 4 years for challenge coins, pins and magnets.</p>
                <p class="review-more">They are great at offering suggestions and problem solving, and all of the products have come out very nice.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=15" alt="Mark Wilson" loading="lazy" />
                  <span><strong>Mark Wilson</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Fast Turnaround &amp; Proofing</h3>
                <p>The turnaround time is incredibly fast, but my favorite part of the process is the communication.</p>
                <p class="review-more">Their designers always send over a proof to make sure you are 100% happy with the design before production. That extra level of customer service keeps us coming back.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=45" alt="Jessica Brown" loading="lazy" />
                  <span><strong>Jessica Brown</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Amazing Coin Service</h3>
                <p>The coin is amazing, and the customer service is excellent. Every time I have a question, the team is helpful.</p>
                <p class="review-more">They work closely with me to create the coin design I want, and the process is smooth from design discussion to final production.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=18" alt="Robert Miller" loading="lazy" />
                  <span><strong>Robert Miller</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Excellent Communication</h3>
                <p>The quality is very good. Communication was excellent, and the team understood my needs well.</p>
                <p class="review-more">They worked to create the exact item I envisioned and made the custom ordering process clear and reliable.</p>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=49" alt="Amanda Lewis" loading="lazy" />
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

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-logo-wrap"><img class="footer-logo" src="assets/images/logo.png" alt="Unique Pin logo"><img class="footer-payment-image" src="assets/images/payment-methods.svg" alt="Accepted payment methods: T/T, PayPal, Visa, Mastercard, e-Checking and Western Union"></div>
      <div><h4>Products</h4><a href="/products">Custom Enamel Pins</a><a href="/products">Custom Medals</a><a href="/products">Challenge Coins</a><a href="/products">Keychains</a></div>
      <div><h4>Get Started</h4><a href="/custom">Custom</a><a href="/about">About Us</a><a href="/blog">Blog</a><a href="/faq">FAQ</a></div>
      <div><h4>Contact</h4><a href="mailto:ceo@chinauniquepin.com">Email: ceo@chinauniquepin.com</a><a href="tel:+86076022831989">Phone: +86 0760 22831989</a><p>Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p></div>
    </div>
    <div class="container footer-bottom"><span>&copy; 2026 Unique Pin. All rights reserved.</span><span class="footer-social"><a class="footer-social-facebook" href="https://www.facebook.com/profile.php?id=61583070933333&locale=zh_CN" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5v3.1H4.2v3.8h3.5V24h4.3v-6.7h3.3l.6-3.8H12v-2.7c0-1.1.3-2.3 2-2.3Z"></path></svg></a><a class="footer-social-instagram" href="https://www.instagram.com/uniquepin/" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.6-3.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"></path></svg></a><a class="footer-social-youtube" href="https://www.youtube.com/@CustompinUnique" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"></path></svg></a></span></div>
  </footer>`;

export default function Page() {
  return <StaticPage html={html} />;
}

