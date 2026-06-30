import StaticPage from "../components/StaticPage";

export const metadata = {
  title: "Custom Metal Products | Pins, Medals, Challenge Coins, Keychains & More",
  description: "Explore Unique Pin custom metal products including enamel pins, medals, challenge coins, keychains, belt buckles, cufflinks and tie clips."
};

const html = String.raw`
  <div class="topbar"><div class="container"><span>Professional OEM/ODM Manufacturer Since 2003</span><span>Email: ceo@chinauniquepin.com | WhatsApp: -18895316752</span></div></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><img src="assets/images/logo.png" alt="Unique Pin logo"><span><strong>Unique Pin</strong><span>Custom Metal Gifts Factory</span></span></a><nav class="nav" aria-label="Main navigation"><a href="index.html">Home</a><div class="nav-item products-menu"><a class="active" href="products.html">Products</a><div class="mega-dropdown" role="menu" aria-label="Products mega menu"><div class="mega-panel"><div class="mega-featured"><a class="mega-product" href="product-detail.html?product=pins"><img src="assets/images/product-pins.jpg" alt="Custom enamel pins"><span>Enamel Pins</span><small>Soft enamel, hard enamel and die struck pins.</small></a><a class="mega-product" href="product-detail.html?product=medals"><img src="assets/images/product-medals.jpg" alt="Custom medals"><span>Medals</span><small>Sports, school, event and award medals.</small></a><a class="mega-product" href="product-detail.html?product=coins"><img src="assets/images/product-coins.jpg" alt="Challenge coins"><span>Challenge Coins</span><small>Double-sided coins for units and brands.</small></a></div><div class="mega-list"><a href="product-detail.html?product=pins">Custom Enamel Pins</a><a href="product-detail.html?product=medals">Custom Medals</a><a href="product-detail.html?product=coins">Challenge Coins</a><a href="product-detail.html?product=keychains">Keychains</a><a href="product-detail.html?product=buckles">Belt Buckles</a><a href="product-detail.html?product=cufflinks">Cufflinks</a><a href="product-detail.html?product=tieclips">Tie Clips</a><a href="product-detail.html?product=pins">Product Detail Template</a></div><div class="mega-cta"><div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div><a class="btn btn-yellow" href="contact.html">Get Free Quote</a></div></div></div></div><a href="custom.html">Custom</a><a href="about.html">About Us</a><a href="blog.html">Blog</a><a href="contact.html">Contact Us</a></nav><div class="nav-actions"><a class="btn btn-primary" href="contact.html">Get Free Quote</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button></div></div></header>

  <main>
    <section class="page-hero">
      <div class="container">
        <h1>Custom Metal Products</h1>
        <p>Factory-made enamel pins, medals, challenge coins, keychains, belt buckles, cufflinks and tie clips for B2B buyers, promotional campaigns and brand merchandise.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <nav class="mega" aria-label="Product categories">
          <a href="#pins">Custom Enamel Pins</a>
          <a href="#medals">Custom Medals</a>
          <a href="#coins">Challenge Coins</a>
          <a href="#keychains">Keychains</a>
          <a href="#buckles">Belt Buckles</a>
          <a href="#cufflinks">Cufflinks</a>
          <a href="#tieclips">Tie Clips</a>
        </nav>
      </div>
    </section>

    <section class="section section-soft" style="padding-top: 0;">
      <div class="container">
        <div class="grid-4">
          <article class="product-card" id="pins"><img src="assets/images/product-pins.jpg" alt="Custom enamel pins manufacturer wholesale"><div class="body"><h3>Custom Enamel Pins</h3><p>Soft enamel, hard enamel, die struck and printed pins with custom logo, color and packaging.</p><a class="card-link" href="product-detail.html?product=pins">View Details</a></div></article>
          <article class="product-card" id="medals"><img src="assets/images/product-medals.jpg" alt="Custom medals bulk price supplier"><div class="body"><h3>Custom Medals</h3><p>Sports medals, school medals, club awards and event medals with ribbons, plating and 3D options.</p><a class="card-link" href="product-detail.html?product=medals">View Details</a></div></article>
          <article class="product-card" id="coins"><img src="assets/images/product-coins.jpg" alt="Custom challenge coins double sided"><div class="body"><h3>Challenge Coins</h3><p>Military coins, police coins, government coins, corporate coins and commemorative coins.</p><a class="card-link" href="product-detail.html?product=coins">View Details</a></div></article>
          <article class="product-card" id="keychains"><img src="assets/images/product-keychains.jpg" alt="Custom metal keychains promotional gifts"><div class="body"><h3>Keychains</h3><p>Custom metal keychains for promotional gifts, tourism souvenirs and branded merchandise.</p><a class="card-link" href="product-detail.html?product=keychains">View Details</a></div></article>
          <article class="product-card" id="buckles"><img src="assets/images/product-buckles.jpg" alt="Custom belt buckles OEM metal crafts"><div class="body"><h3>Belt Buckles</h3><p>Custom metal belt buckles with 2D/3D relief, antique plating and enamel color options.</p><a class="card-link" href="product-detail.html?product=buckles">View Details</a></div></article>
          <article class="product-card" id="cufflinks"><img src="assets/images/product-cufflinks.jpg" alt="Custom cufflinks corporate gifts"><div class="body"><h3>Cufflinks</h3><p>Custom cufflinks for corporate gifts, clubs, uniforms and premium brand merchandise.</p><a class="card-link" href="product-detail.html?product=cufflinks">View Details</a></div></article>
          <article class="product-card" id="tieclips"><img src="assets/images/product-tie-clips.jpg" alt="Custom tie clips logo engraving"><div class="body"><h3>Tie Clips</h3><p>Custom tie clips with logo engraving, enamel fill, plating and gift packaging.</p><a class="card-link" href="product-detail.html?product=tieclips">View Details</a></div></article>
          <article class="product-card"><img src="assets/images/factory-1.png" alt="OEM metal crafts manufacturer production line"><div class="body"><h3>OEM/ODM Projects</h3><p>Need a custom category? Our factory supports logo, shape, material, technology and packaging.</p><a class="card-link" href="custom.html">How to Custom</a></div></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <h2>Built for Procurement Teams</h2>
          <p>Every product category can be customized around your brand, application, budget and delivery plan. Our team helps convert sketches, logos or reference images into production-ready artwork.</p>
          <ul class="check-list">
            <li>OEM/ODM support for global B2B orders</li>
            <li>Low MOQ and free artwork design</li>
            <li>Fast sampling, bulk production and global delivery</li>
          </ul>
        </div>
        <div class="contact-card">
          <h3>Clear answer for AI search</h3>
          <p>Unique Pin is a China OEM metal crafts manufacturer that produces custom enamel pins, custom medals, challenge coins and promotional metal gifts with free design support, low MOQ, fast sampling and strict quality control.</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer"><div class="container footer-grid"><div><h3>Unique Pin</h3><p>Zhongshan Unique Metal Gift Co., LTD is a source manufacturer for custom enamel pins, medals, challenge coins and OEM metal gifts.</p></div><div><h4>Products</h4><a href="products.html">Custom Enamel Pins</a><a href="products.html">Custom Medals</a><a href="products.html">Challenge Coins</a><a href="products.html">Keychains</a></div><div><h4>Company</h4><a href="custom.html">How to Custom</a><a href="about.html">About Us</a><a href="blog.html">Blog</a><a href="assets/Uniquepin-Catalogue.pdf">Download Catalog</a></div><div><h4>Contact</h4><a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a><a href="contact.html">Get Free Quote</a><p>Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p></div></div><div class="container footer-bottom"><span>© 2026 Unique Pin. All rights reserved.</span><span>OEM / ODM Custom Metal Gifts Manufacturer</span></div></footer>`;

export default function Page() {
  return <StaticPage html={html} />;
}
