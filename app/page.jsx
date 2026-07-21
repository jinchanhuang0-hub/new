import StaticPage from "./components/StaticPage";

export const metadata = {
  title: "Custom Metal Gifts Manufacturer | Enamel Pins, Medals & Challenge Coins",
  description: "Unique Pin is a China OEM/ODM custom metal gifts manufacturer with 20+ years of experience, low MOQ, free artwork support, fast sampling and global delivery.",
  alternates: {
    canonical: "https://uccrafts.com/"
  }
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
        <a class="active" href="/">Home</a><div class="nav-item products-menu"><a href="products.html">Products</a><div class="mega-dropdown" role="menu" aria-label="Products mega menu"><div class="mega-panel"><div class="mega-featured"><a class="mega-product" href="product-detail.html?product=pins"><img src="assets/images/mega-lapel-pins-auburn.jpg" alt="Custom Auburn lapel pin"><span>Lapel Pins</span><small>Custom enamel pins for brands, events and clubs.</small></a><a class="mega-product" href="product-detail.html?product=medals"><img src="assets/images/mega-medals-butterfly.png" alt="Custom butterfly medal with ribbon"><span>Medals</span><small>Colorful award medals with ribbons and finishes.</small></a><a class="mega-product" href="product-detail.html?product=coins"><img src="assets/images/mega-challenge-coin-christmas.jpg" alt="Custom Christmas challenge coin"><span>Challenge Coins</span><small>Detailed coins for recognition and commemorations.</small></a></div><div class="mega-list"><a href="product-detail.html?product=pins">Lapel Pins</a><a href="product-detail.html?product=coins">Challenge Coins</a><a href="product-detail.html?product=medals">Medals</a><a href="product-detail.html?product=keychains">Keychains</a><a href="product-detail.html?product=buckles">Belt Buckles</a><a href="product-detail.html?product=golf-accessories">Golf Ball Markers &amp;Hat Clips</a><a href="product-detail.html?product=bottle-openers">Bottle Openers</a><a href="product-detail.html?product=cufflinks-tieclips">Cufflinks &amp; Tie Clips</a><a href="product-detail.html?product=magnets">Fridge Magnets</a></div><div class="mega-cta"><div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div><a class="btn btn-yellow" href="contact.html">Get Free Quote</a></div></div></div></div><a href="custom.html">Custom</a>
        <a href="about.html">About Us</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact Us</a>
      </nav>
      <div class="nav-actions">
        <a class="btn btn-primary" href="contact.html">Get Free Quote</a>
        <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">&#9776;</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero">
      <img class="hero-bg" src="assets/images/hero-banner.webp" width="1749" height="899" fetchpriority="high" alt="Custom enamel pins medals and challenge coins hero banner">
      <div class="container">
        <div class="hero-content">
          <h1><span class="hero-title-line">Custom Metal Crafts</span><span class="hero-title-line">Made for Your Brand</span></h1>
          <p>OEM/ODM custom metal crafts with 20+ years of expertise.<br>From design to delivery, quality you can trust.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="contact.html">Get Free Quote</a>
            <a class="btn btn-outline" href="contact.html">Contact Us</a>
          </div>
          <div class="hero-proof">
            <div class="proof-column">
              <div class="proof-item"><strong>20+</strong><span>Years Experience</span></div>
              <div class="proof-item"><strong>100%</strong><span>Satisfaction</span></div>
            </div>
            <div class="proof-column">
              <div class="proof-item"><strong>No Minimum Qty</strong><span>Flexible Custom Orders</span></div>
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
          <span class="brand-logo logo-square"><img src="assets/images/brands/starbucks.png" alt="Starbucks logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/walmart.png" alt="Walmart logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mars.png" alt="Mars logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/nike.svg" alt="Nike logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/adidas.svg" alt="adidas logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mercedes.png" alt="Mercedes-Benz logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/bmw.png" alt="BMW logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/marvel.svg" alt="MARVEL logo"></span>
          <span class="brand-logo logo-square logo-kfc"><img src="assets/images/brands/kfc.png" alt="KFC logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/nbc.svg" alt="NBC logo"></span>
          <span class="brand-logo logo-square logo-roomy"><img src="assets/images/brands/american-greetings.svg" alt="American Greetings logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/coca-cola.svg" alt="Coca-Cola logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/mcdonalds.svg" alt="McDonald's logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/disney.svg" alt="Disney logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/pepsi.png" alt="Pepsi logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/lego.svg" alt="LEGO logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/starbucks.png" alt="Starbucks logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/walmart.png" alt="Walmart logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mars.png" alt="Mars logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/nike.svg" alt="Nike logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/adidas.svg" alt="adidas logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/mercedes.png" alt="Mercedes-Benz logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/bmw.png" alt="BMW logo"></span>
          <span class="brand-logo"><img src="assets/images/brands/marvel.svg" alt="MARVEL logo"></span>
          <span class="brand-logo logo-square logo-kfc"><img src="assets/images/brands/kfc.png" alt="KFC logo"></span>
          <span class="brand-logo logo-square"><img src="assets/images/brands/nbc.svg" alt="NBC logo"></span>
          <span class="brand-logo logo-square logo-roomy"><img src="assets/images/brands/american-greetings.svg" alt="American Greetings logo"></span>
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
          <a class="product-card home-product-card" href="product-detail.html?product=pins#custom-details" aria-label="View Custom Enamel Pins details" data-product-inquiry-trigger data-product-inquiry-product="Lapel Pins">
            <img src="assets/images/home-lapel-pins-cat.jpg" alt="Custom lapel pin with cat and colorful umbrella">
            <div class="body">
              <h3>Lapel Pins</h3>
              <p>An exquisite accessory that captures your brand's identity and sparks conversation.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="product-detail.html?product=medals#custom-details" aria-label="View Custom Medals details" data-product-inquiry-trigger data-product-inquiry-product="Medals">
            <img src="assets/images/home-medals-floral.webp" alt="Custom medal with floral enamel and ribbon">
            <div class="body">
              <h3>Medals</h3>
              <p>A meaningful award piece that celebrates achievement with lasting visual impact.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="product-detail.html?product=coins#custom-details" aria-label="View Challenge Coins details" data-product-inquiry-trigger data-product-inquiry-product="Challenge Coins">
            <img src="assets/images/home-challenge-coins-police.jpg" alt="Custom challenge coins with police emblems">
            <div class="body">
              <h3>Challenge Coins</h3>
              <p>A premium keepsake that honors teams, milestones and shared stories.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="product-detail.html?product=keychains#custom-details" aria-label="View Custom Keychains details" data-product-inquiry-trigger data-product-inquiry-product="Keychains">
            <img src="assets/images/home-keychains-charms.jpg" alt="Custom metal keychain with enamel charms">
            <div class="body">
              <h3>Keychains</h3>
              <p>A practical everyday gift that keeps your brand close at hand.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="product-detail.html?product=buckles#custom-details" aria-label="View Custom Belt Buckles details" data-product-inquiry-trigger data-product-inquiry-product="Belt Buckles">
            <img src="assets/images/home-belt-buckles-arizona.jpg" alt="Custom antique belt buckle with Arizona design">
            <div class="body">
              <h3>Belt Buckles</h3>
              <p>A bold statement piece that turns custom detail into wearable style.</p>
            </div>
          </a>
          <a class="product-card home-product-card" href="product-detail.html?product=golf-accessories#custom-details" aria-label="View Custom Golf Ball Markers details" data-product-inquiry-trigger data-product-inquiry-product="Golf Accessories">
            <img src="assets/images/home-golf-ball-marker.jpg" alt="Custom golf ball marker and divot tool">
            <div class="body">
              <h3>Golf Ball Markers</h3>
              <p>A refined golf accessory that adds personality to every round.</p>
            </div>
          </a>
        </div>
        <div class="product-actions">
          <a class="btn btn-primary" href="products.html">View All Products</a>
        </div>
      </div>
    </section>

    <div class="product-inquiry-modal" data-product-inquiry-modal hidden>
      <div class="product-inquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="home-quote-title">
        <button class="product-inquiry-close" type="button" aria-label="Close inquiry form" data-product-inquiry-close>&times;</button>
        <div class="contact-card product-inquiry-card">
          <h2 id="home-quote-title" class="contact-form-title">Request Your Free Quote</h2>
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
                <option>Golf Ball Markers</option>
                <option>Fridge Magnets</option>
                <option>Bottle Openers</option>
                <option>Cufflinks &amp; Tie Clips</option>
              </select>
              <input type="text" name="quantity" placeholder="Quantity">
            </div>
            <div class="form-field form-field-full">
              <label for="home-quote-details">What can we help you with?</label>
              <textarea id="home-quote-details" name="details" placeholder="Notes, Comments, etc."></textarea>
            </div>
            <div class="form-field form-field-full">
              <label for="home-quote-artwork">Upload files</label>
              <label class="upload-box" for="home-quote-artwork">
                <input id="home-quote-artwork" type="file" name="artwork" aria-label="Upload artwork">
                <span class="upload-icon" aria-hidden="true">&#8593;</span>
                <span>Drag and drop a file here or click to choose</span>
              </label>
            </div>
            <button class="btn btn-primary" type="submit">Submit Inquiry</button>
            <p data-form-notice style="color: var(--navy); font-weight: 800;"></p>
          </form>
        </div>
      </div>
    </div>

    <section class="section how-section">
      <div class="container how-layout">
        <div class="how-content">
          <div class="how-heading">
            <h2>How We Make It Happen</h2>
            <p>From idea to delivery: a step-by-step guide to your custom metal craft design.</p>
          </div>
          <div class="how-steps">
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="m7 16 3.5-4 2.5 3 2-2.5 2 3.5"/><circle cx="9" cy="9" r="1.5"/></svg></span>
              <span>Send Us Your Ideas</span>
            </div>
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 19h14"/></svg></span>
              <span>Receive Your Custom Proof</span>
            </div>
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="m8.5 12.2 2.2 2.2 4.8-5"/></svg></span>
              <span>Approve and Production Begins</span>
            </div>
            <div class="how-step-card">
              <span class="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h10v9H4z"/><path d="M14 10h3l3 3v3h-6z"/><circle cx="8" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg></span>
              <span>Your Order Gets Shipped</span>
            </div>
          </div>
          <a class="how-cta" href="contact.html">Start Your Free Design</a>
        </div>
        <div class="how-visual" aria-hidden="true">
          <div class="process-art">
            <img class="process-sketch" src="assets/images/process-coin-sketch.png" alt="">
            <img class="process-coin" src="assets/images/process-coin-finished.png" alt="">
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

    <section class="section reviews-section">
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
                <h3>Fantastic Medals & Fast Support</h3>
                <p>The medals turned out absolutely fantastic. These will be a big hit with swimmers lucky enough to get their hands on one.</p>
                <p class="review-more" hidden>Ada was great to deal with and responded very quickly to all of our changes and requests so that the medals ended exactly what we envisioned.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=12" alt="Michael Turner" loading="lazy" />
                  <span><strong>Michael Turner</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>7th Repeat Order</h3>
                <p>I honestly cannot say enough good things about the quality of the coins and keychains I have received from here.</p>
                <p class="review-more" hidden>This was actually our 7th time ordering, and they have not missed a beat. The quality is very good and communication was excellent.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=32" alt="Sarah Mitchell" loading="lazy" />
                  <span><strong>Sarah Mitchell</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Perfect Custom Lapel Pins</h3>
                <p>The custom lapel pins turned out absolutely perfect - clean details, vivid colors, and excellent quality.</p>
                <p class="review-more" hidden>Communication was fast and professional throughout the entire process. The supplier was very helpful with design adjustments and delivered exactly what I needed.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=56" alt="David Parker" loading="lazy" />
                  <span><strong>David Parker</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Outstanding Quality & Detail</h3>
                <p>Fantastic quality, attention to detail and packaging - just outstanding. Even better than I could have hoped for when I first designed them.</p>
                <p class="review-more" hidden>This is my favourite supplier to work with, highly recommended. Eva is a great customer representative and answered all my questions with speed and grace.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=47" alt="Emily Carter" loading="lazy" />
                  <span><strong>Emily Carter</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Helpful Long-Term Partner</h3>
                <p>Eve is always very helpful. I have used this company for the past 4 years for challenge coins, pins and magnets.</p>
                <p class="review-more" hidden>They are great at offering suggestions and problem solving, and all of the products have come out very nice.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=15" alt="Mark Wilson" loading="lazy" />
                  <span><strong>Mark Wilson</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Fast Turnaround & Proofing</h3>
                <p>The turnaround time is incredibly fast, but my favorite part of the process is the communication.</p>
                <p class="review-more" hidden>Their designers always send over a proof to make sure you are 100% happy with the design before production. That extra level of customer service keeps us coming back.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=45" alt="Jessica Brown" loading="lazy" />
                  <span><strong>Jessica Brown</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Amazing Coin Service</h3>
                <p>The coin is amazing, and the customer service is excellent. Every time I have a question, the team is helpful.</p>
                <p class="review-more" hidden>They work closely with me to create the coin design I want, and the process is smooth from design discussion to final production.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
                <div class="review-author">
                  <img src="https://i.pravatar.cc/96?img=18" alt="Robert Miller" loading="lazy" />
                  <span><strong>Robert Miller</strong></span>
                </div>
              </article>
              <article class="testimonial review-card">
                <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h3>Excellent Communication</h3>
                <p>The quality is very good. Communication was excellent, and the team understood my needs well.</p>
                <p class="review-more" hidden>They worked to create the exact item I envisioned and made the custom ordering process clear and reliable.</p>
                <button class="show-more" type="button" aria-expanded="false">+ Show More</button>
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
            <p>Send us your idea, logo or reference image. Our team will help turn it into a production-ready design.</p>
          </div>
          <div class="hero-actions">
            <a class="btn btn-yellow" href="contact.html">Request Quote</a>
            <a class="btn btn-outline" href="custom.html">Start Custom Order</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-logo-wrap"><img class="footer-logo" src="assets/images/logo.png" alt="Unique Pin logo"></div>
      <div><h4>Products</h4><a href="products.html">Custom Enamel Pins</a><a href="products.html">Custom Medals</a><a href="products.html">Challenge Coins</a><a href="products.html">Keychains</a></div>
      <div><h4>Get Started</h4><a href="custom.html">Custom</a><a href="about.html">About Us</a><a href="blog.html">Blog</a><a href="faq.html">FAQ</a></div>
      <div><h4>Contact</h4><a href="mailto:ceo@chinauniquepin.com">Email: ceo@chinauniquepin.com</a><a href="tel:+86076022831989">Phone: +86 0760 22831989</a><p>Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p></div>
    </div>
    <div class="container footer-bottom"><span>&copy; 2026 Unique Pin. All rights reserved.</span><span class="footer-social"><a class="footer-social-facebook" href="https://www.facebook.com/profile.php?id=61583070933333&locale=zh_CN" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5v3.1H4.2v3.8h3.5V24h4.3v-6.7h3.3l.6-3.8H12v-2.7c0-1.1.3-2.3 2-2.3Z"></path></svg></a><a class="footer-social-instagram" href="https://www.instagram.com/uniquepin/" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.6-3.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"></path></svg></a><a class="footer-social-youtube" href="https://www.youtube.com/@CustompinUnique" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"></path></svg></a></span></div>
  </footer>`;

export default function Page() {
  return <StaticPage html={html} />;
}
