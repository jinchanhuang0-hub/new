import StaticPage from "../components/StaticPage";

import { productCategoryNavHtml } from "../components/productCategoryNav";

export const metadata = {
  title: "Custom Enamel Pins Manufacturer | OEM/ODM Factory, Low MOQ",
  description: "Order custom enamel pins from Unique Pin, a China OEM/ODM metal crafts manufacturer with free artwork design, low MOQ, fast sampling and strict QC."
};

const html = String.raw`
  <div class="topbar"><div class="container"><span>Professional OEM/ODM Manufacturer Since 2003</span><span>Email: ceo@chinauniquepin.com | WhatsApp: +86 18895316838</span></div></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><img src="assets/images/logo.png" alt="Unique Pin logo"><span><strong>Unique Pin</strong><span>Custom Metal Gifts Factory</span></span></a><nav class="nav" aria-label="Main navigation"><a href="index.html">Home</a><div class="nav-item products-menu"><a class="active" href="products.html">Products</a><div class="mega-dropdown" role="menu" aria-label="Products mega menu"><div class="mega-panel"><div class="mega-featured"><a class="mega-product" href="product-detail.html?product=pins"><img src="assets/images/mega-lapel-pins-auburn.jpg" alt="Custom Auburn lapel pin"><span>Lapel Pins</span><small>Custom enamel pins for brands, events and clubs.</small></a><a class="mega-product" href="product-detail.html?product=medals"><img src="assets/images/mega-medals-butterfly.png" alt="Custom butterfly medal with ribbon"><span>Medals</span><small>Colorful award medals with ribbons and finishes.</small></a><a class="mega-product" href="product-detail.html?product=coins"><img src="assets/images/mega-challenge-coin-christmas.jpg" alt="Custom Christmas challenge coin"><span>Challenge Coins</span><small>Detailed coins for recognition and commemorations.</small></a></div><div class="mega-list"><a href="product-detail.html?product=pins">Lapel Pins</a><a href="product-detail.html?product=coins">Challenge Coins</a><a href="product-detail.html?product=medals">Medals</a><a href="product-detail.html?product=keychains">Keychains</a><a href="product-detail.html?product=buckles">Belt Buckles</a><a href="product-detail.html?product=golf-accessories">Golf Ball Markers &amp;Hat Clips</a><a href="product-detail.html?product=bottle-openers">Bottle Openers</a><a href="product-detail.html?product=cufflinks-tieclips">Cufflinks &amp; Tie Clips</a><a href="product-detail.html?product=magnets">Fridge Magnets</a></div><div class="mega-cta"><div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div><a class="btn btn-yellow" href="contact.html">Get Free Quote</a></div></div></div></div><a href="custom.html">Custom</a><a href="about.html">About Us</a><a href="blog.html">Blog</a><a href="contact.html">Contact Us</a></nav><div class="nav-actions"><a class="btn btn-primary" href="contact.html">Get Free Quote</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">&#9776;</button></div></div></header>

  <main class="product-types-page" id="custom-details">
    <section class="product-type-section" data-product-content="pins">
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Enamel Pin Types</h1><p>Choose from soft enamel, hard enamel, die struck, printed and specialty enamel pin styles for brand promotion, events, clubs and retail programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-pins-soft-enamel.jpg" alt="Custom soft enamel pins"><h3>Soft Enamel Pins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=green-character-soft-enamel-pin-set">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-hard-enamel.jpg" alt="Custom hard enamel pins"><h3>Hard Enamel Pins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=box-cat-and-umbrella-cat-enamel-pins">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-die-struck.jpg" alt="Die struck custom metal pins"><h3>Die Struck Pins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=antique-silver-guitar-crest-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-printed.jpg" alt="Printed custom lapel pins"><h3>Printed Logo Pins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=glitter-tour-truck-printed-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="medals" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Medal Types</h1><p>Custom medals for sports competitions, school awards, corporate recognition, charity events and commemorative programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-medals-sports.png" alt="Custom sports medals"><h3>Sports Medals</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=silver-basketball-sports-medal-with-ribbon">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-medals-3d.png" alt="3D custom award medals"><h3>3D Award Medals</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=3d-shield-logo-award-medal">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-medals-award.png" alt="Custom commemorative medals"><h3>Commemorative Medals</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=silver-race-award-medal-with-ribbon">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-medals-ribbon.png" alt="Custom medals with ribbon"><h3>Medals with Ribbon</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=blue-marathon-ribbon-medal">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="coins" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Challenge Coin Types</h1><p>Challenge coins and commemorative coins for military units, public service organizations, corporate teams and collector programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-coins-3d.jpg" alt="Custom 3D challenge coins"><h3>Custom 3D Challenge Coins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=3d-antique-firefighter-challenge-coins">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-coins-double-sided.jpg" alt="Double sided challenge coins"><h3>Double Sided Coins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=double-sided-anniversary-challenge-coin">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-coins-cut-shape.jpg" alt="Cut to shape challenge coins"><h3>Cut To Shape Coins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=cut-shape-route-map-challenge-coin">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-coins-antique.jpg" alt="Antique plated challenge coins"><h3>Antique Plated Coins</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=antique-military-squadron-challenge-coins">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="keychains" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Metal Keychain Types</h1><p>Metal keychains for promotional giveaways, souvenir shops, brand merchandise and practical retail accessories.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-keychains-metal.jpg" alt="Custom metal keychains"><h3>Metal Keychains</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=colorful-flower-metal-keychains">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-keychains-enamel.jpg" alt="Enamel custom keychains"><h3>Enamel Keychains</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=palm-island-enamel-keychain">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-keychains-opener.jpg" alt="Bottle opener keychains"><h3>Opener Keychains</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=round-school-logo-bottle-opener-keychain">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-keychains-spinner.jpg" alt="Spinner custom keychains"><h3>Spinner Keychains</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=travel-charm-spinner-keychain">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="magnets" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Fridge Magnet Types</h1><p>Custom fridge magnets for tourist souvenirs, city gifts, event merchandise and retail gift programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-magnets-enamel.png" alt="Custom enamel fridge magnets"><h3>Enamel Fridge Magnets</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=ornate-building-enamel-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-3d.png" alt="3D custom fridge magnets"><h3>3D Metal Magnets</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=ferris-wheel-3d-metal-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-soft-pvc.png" alt="Soft PVC fridge magnets"><h3>Soft PVC Magnets</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=cartoon-character-soft-pvc-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-souvenir.png" alt="Souvenir fridge magnets"><h3>Souvenir Magnets</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=city-landmark-souvenir-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="bottle-openers" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Bottle Opener Types</h1><p>Custom bottle openers that combine practical use with logo promotion, event gifts and retail packaging.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-openers-coin.jpg" alt="Custom coin bottle openers"><h3>Coin Bottle Openers</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=playing-card-metal-bottle-opener">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-openers-keychain.jpg" alt="Custom keychain bottle openers"><h3>Keychain Bottle Openers</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=skull-coin-keychain-bottle-opener">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="buckles" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Belt Buckle Types</h1><p>Custom belt buckles for clubs, fashion brands, Western themes, awards and promotional merchandise.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-buckles-western.jpg" alt="Western custom belt buckles"><h3>Western Belt Buckles</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=western-skull-relief-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-buckles-logo.jpg" alt="Logo custom belt buckles"><h3>Logo Belt Buckles</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=oval-relief-logo-metal-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-buckles-antique.jpg" alt="Antique custom belt buckles"><h3>Antique Belt Buckles</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=antique-silver-rectangle-logo-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-buckles-enamel.jpg" alt="Enamel custom belt buckles"><h3>Enamel Belt Buckles</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=oval-club-logo-enamel-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="golf-accessories" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Golf Divot Tool, Hat Clip & Ball Marker Types</h1><p>Custom golf accessories for tournaments, clubs, resort gifts, corporate golf events and retail sets.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-golf-ball-marker.jpg" alt="Custom golf ball markers"><h3>Golf Ball Markers</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=antique-golf-club-divot-tool-ball-marker">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-golf-hat-clip.jpg" alt="Custom golf hat clips"><h3>Golf Hat Clips</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=avocado-golf-hat-clip-ball-marker">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-golf-divot-tool.jpg" alt="Custom golf divot tools"><h3>Golf Divot Tools</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=color-logo-golf-divot-tool-set">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="cufflinks-tieclips" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Cufflinks & Tie Clip Types</h1><p>Custom cufflinks and tie clips for corporate gifts, retail collections, clubs, formal events and brand accessories.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-cufflinks-metal.jpg" alt="Custom metal cufflinks"><h3>Metal Cufflinks</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=blue-carbon-fiber-metal-cufflinks">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-cufflinks-enamel.jpg" alt="Custom enamel cufflinks"><h3>Enamel Cufflinks</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=color-plated-metal-tie-clips">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-tie-clips-logo.jpg" alt="Custom logo tie clips"><h3>Logo Tie Clips</h3><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="product-item.html?item=black-skull-logo-cufflinks">View More</a><a class="product-type-btn product-type-btn-primary" href="contact.html">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="section product-type-cta">
      <div class="container">
        <div class="cta-band">
          <div><h2>Need a Price for Your Design?</h2><p>Send product type, logo, size, quantity and deadline. Our team will recommend the right process and quote clearly.</p></div>
          <a class="btn btn-yellow" href="contact.html">Get Free Quote</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-logo-wrap"><img class="footer-logo" src="assets/images/logo.png" alt="Unique Pin logo"></div>
      <div><h4>Products</h4><a href="products.html">Custom Enamel Pins</a><a href="products.html">Custom Medals</a><a href="products.html">Challenge Coins</a><a href="products.html">Keychains</a></div>
      <div><h4>Get Started</h4><a href="custom.html">Custom</a><a href="about.html">About Us</a><a href="blog.html">Blog</a><a href="faq.html">FAQ</a></div>
      <div><h4>Contact</h4><a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a><a href="tel:+86076022831989">Phone: +86 0760 22831989</a><p>Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p></div>
    </div>
    <div class="container footer-bottom"><span>&copy; 2026 Unique Pin. All rights reserved.</span><span class="footer-social"><a class="footer-social-facebook" href="https://www.facebook.com/profile.php?id=61583070933333&locale=zh_CN" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5v3.1H4.2v3.8h3.5V24h4.3v-6.7h3.3l.6-3.8H12v-2.7c0-1.1.3-2.3 2-2.3Z"></path></svg></a><a class="footer-social-instagram" href="https://www.instagram.com/uniquepin/" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.6-3.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"></path></svg></a><a class="footer-social-youtube" href="https://www.youtube.com/@CustompinUnique" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"></path></svg></a></span></div>
  </footer>`;

export default function Page() {
  return <StaticPage html={html} />;
}
