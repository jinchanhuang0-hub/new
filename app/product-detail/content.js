import StaticPage from "../components/StaticPage";

import { productCategoryNavHtml } from "../components/productCategoryNav";

export const productDetailMetadata = {
  pins: {
    title: "Custom Enamel Pins Manufacturer | OEM/ODM Factory, Low MOQ",
    description: "Order custom enamel pins from Unique Pin, a China OEM/ODM metal crafts manufacturer with free artwork design, low MOQ, fast sampling and strict QC."
  },
  coins: {
    title: "Custom Challenge Coins Manufacturer | OEM/ODM Metal Coins",
    description: "Create custom challenge coins and commemorative coins with antique plating, 3D relief, double-sided artwork and factory-direct OEM/ODM support."
  },
  medals: {
    title: "Custom Medals Manufacturer | Sports, Award & Ribbon Medals",
    description: "Order custom sports medals, award medals and ribbon medals from Unique Pin with OEM/ODM manufacturing, free artwork support and strict quality control."
  },
  keychains: {
    title: "Custom Metal Keychains Manufacturer | Enamel & Logo Keychains",
    description: "Create custom metal keychains, enamel keychains and promotional keychains for retail gifts, events, souvenirs and brand merchandise."
  },
  buckles: {
    title: "Custom Belt Buckles Manufacturer | Western & Logo Buckles",
    description: "Design custom belt buckles for clubs, fashion brands, Western themes, awards and promotional merchandise with factory-direct OEM/ODM service."
  },
  "golf-accessories": {
    title: "Custom Golf Ball Markers, Hat Clips & Divot Tools | OEM Factory",
    description: "Order custom golf ball markers, hat clips and divot tools for tournaments, clubs, resorts and corporate golf events."
  },
  "bottle-openers": {
    title: "Custom Bottle Openers Manufacturer | Metal & Keychain Openers",
    description: "Create custom bottle openers and keychain bottle openers that combine practical use with logo promotion, event gifts and retail packaging."
  },
  "cufflinks-tieclips": {
    title: "Custom Cufflinks & Tie Clips Manufacturer | Logo Formal Gifts",
    description: "Design custom cufflinks and tie clips for corporate gifts, retail collections, clubs, formal events and branded accessories."
  },
  magnets: {
    title: "Custom Fridge Magnets Manufacturer | Souvenir Magnets",
    description: "Order custom fridge magnets for tourist souvenirs, city gifts, event merchandise and retail gift programs with OEM/ODM support."
  }
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  return productDetailMetadata[params?.product] || productDetailMetadata.pins;
}

export const productDetailHtml = String.raw`
  <div class="topbar"><div class="container"><span>Professional OEM/ODM Manufacturer Since 2003</span><span>Email: ceo@chinauniquepin.com | WhatsApp: +86 18895316838</span></div></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="/"><img src="assets/images/logo.png" alt="Unique Pin logo"><span><strong>Unique Pin</strong><span>Custom Metal Gifts Factory</span></span></a><nav class="nav" aria-label="Main navigation"><a href="/">Home</a><div class="nav-item products-menu"><a class="active" href="/products">Products</a><div class="mega-dropdown" role="menu" aria-label="Products mega menu"><div class="mega-panel"><div class="mega-featured"><a class="mega-product" href="/products/custom-enamel-pins"><img src="assets/images/mega-lapel-pins-auburn.jpg" alt="Custom Auburn lapel pin"><span>Lapel Pins</span><small>Custom enamel pins for brands, events and clubs.</small></a><a class="mega-product" href="/products/custom-medals"><img src="assets/images/mega-medals-butterfly.png" alt="Custom butterfly medal with ribbon"><span>Medals</span><small>Colorful award medals with ribbons and finishes.</small></a><a class="mega-product" href="/products/custom-challenge-coins"><img src="assets/images/mega-challenge-coin-christmas.jpg" alt="Custom Christmas challenge coin"><span>Challenge Coins</span><small>Detailed coins for recognition and commemorations.</small></a></div><div class="mega-list"><a href="/products/custom-enamel-pins">Lapel Pins</a><a href="/products/custom-challenge-coins">Challenge Coins</a><a href="/products/custom-medals">Medals</a><a href="/products/custom-metal-keychains">Keychains</a><a href="/products/custom-belt-buckles">Belt Buckles</a><a href="/products/custom-golf-accessories">Golf Ball Markers &amp;Hat Clips</a><a href="/products/custom-bottle-openers">Bottle Openers</a><a href="/products/custom-cufflinks-tie-clips">Cufflinks &amp; Tie Clips</a><a href="/products/custom-fridge-magnets">Fridge Magnets</a></div><div class="mega-cta"><div><strong>Need a custom product quote?</strong><span>Send logo, quantity and deadline. We reply within 1 business day.</span></div><a class="btn btn-yellow" href="/contact">Get Free Quote</a></div></div></div></div><a href="/custom">Custom</a><a href="/about">About Us</a><a href="/blog">Blog</a><a href="/contact">Contact Us</a></nav><div class="nav-actions"><a class="btn btn-primary" href="/contact">Get Free Quote</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">&#9776;</button></div></div></header>

  <main class="product-types-page" id="custom-details">
    <section class="product-type-section" data-product-content="pins">
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Enamel Pin Types</h1><p>Choose from soft enamel, hard enamel, die struck, printed and specialty enamel pin styles for brand promotion, events, clubs and retail programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-pins-soft-enamel.jpg" alt="Custom soft enamel pins"><h2>Green Character Soft Enamel Pin Set</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/green-character-soft-enamel-pin-set">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-hard-enamel.jpg" alt="Custom hard enamel pins"><h2>Box Cat and Umbrella Cat Enamel Pins</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/box-cat-and-umbrella-cat-enamel-pins">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-die-struck.jpg" alt="Die struck custom metal pins"><h2>Antique Silver Guitar Crest Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/antique-silver-guitar-crest-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-printed.jpg" alt="Printed custom lapel pins"><h2>Glitter Tour Truck Printed Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/glitter-tour-truck-printed-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="medals" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Medal Types</h1><p>Custom medals for sports competitions, school awards, corporate recognition, charity events and commemorative programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-medals-sports.png" alt="Custom sports medals"><h2>Silver Basketball Sports Medal with Ribbon</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-medals/silver-basketball-sports-medal-with-ribbon">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-medals-3d.png" alt="3D custom award medals"><h2>3D Shield Logo Award Medal</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-medals/3d-shield-logo-award-medal">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-medals-award.png" alt="Custom commemorative medals"><h2>Silver Race Award Medal with Ribbon</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-medals/silver-race-award-medal-with-ribbon">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-medals-ribbon.png" alt="Custom medals with ribbon"><h2>Blue Marathon Ribbon Medal</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-medals/blue-marathon-ribbon-medal">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="coins" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Challenge Coin Types</h1><p>Challenge coins and commemorative coins for military units, public service organizations, corporate teams and collector programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-coins-3d.jpg" alt="Custom 3D challenge coins"><h2>3D Antique Firefighter Challenge Coins</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-challenge-coins/3d-antique-firefighter-challenge-coins">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-coins-double-sided.jpg" alt="Double sided challenge coins"><h2>Double Sided Anniversary Challenge Coin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-challenge-coins/double-sided-anniversary-challenge-coin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-coins-cut-shape.jpg" alt="Cut to shape challenge coins"><h2>Cut Shape Route Map Challenge Coin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-challenge-coins/cut-shape-route-map-challenge-coin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-coins-antique.jpg" alt="Antique plated challenge coins"><h2>Antique Military Squadron Challenge Coins</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-challenge-coins/antique-military-squadron-challenge-coins">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="keychains" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Metal Keychain Types</h1><p>Metal keychains for promotional giveaways, souvenir shops, brand merchandise and practical retail accessories.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-keychains-metal.jpg" alt="Custom metal keychains"><h2>Colorful Flower Metal Keychains</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-metal-keychains/colorful-flower-metal-keychains">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-keychains-enamel.jpg" alt="Enamel custom keychains"><h2>Palm Island Enamel Keychain</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-metal-keychains/palm-island-enamel-keychain">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-keychains-opener.jpg" alt="Bottle opener keychains"><h2>Round School Logo Keychain</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-metal-keychains/round-school-logo-bottle-opener-keychain">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-keychains-spinner.jpg" alt="Spinner custom keychains"><h2>Travel Charm Spinner Keychain</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-metal-keychains/travel-charm-spinner-keychain">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="magnets" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Fridge Magnet Types</h1><p>Custom fridge magnets for tourist souvenirs, city gifts, event merchandise and retail gift programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-magnets-enamel.png" alt="Custom enamel fridge magnets"><h2>Ornate Building Enamel Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/ornate-building-enamel-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-3d.png" alt="3D custom fridge magnets"><h2>Ferris Wheel 3D Metal Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/ferris-wheel-3d-metal-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-soft-pvc.png" alt="Soft PVC fridge magnets"><h2>Cartoon Character Soft Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/cartoon-character-soft-pvc-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-souvenir.png" alt="Souvenir fridge magnets"><h2>City Landmark Souvenir Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/city-landmark-souvenir-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="bottle-openers" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Bottle Opener Types</h1><p>Custom bottle openers that combine practical use with logo promotion, event gifts and retail packaging.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-openers-coin.jpg" alt="Custom coin bottle openers"><h2>Playing Card Metal Bottle Opener</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-bottle-openers/playing-card-metal-bottle-opener">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-openers-keychain.jpg" alt="Custom keychain bottle openers"><h2>Skull Coin Keychain Bottle Opener</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-bottle-openers/skull-coin-keychain-bottle-opener">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="buckles" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Belt Buckle Types</h1><p>Custom belt buckles for clubs, fashion brands, Western themes, awards and promotional merchandise.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-buckles-western.jpg" alt="Western custom belt buckles"><h2>Western Skull Relief Belt Buckle</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-belt-buckles/western-skull-relief-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-buckles-logo.jpg" alt="Logo custom belt buckles"><h2>Oval Relief Logo Metal Belt Buckle</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-belt-buckles/oval-relief-logo-metal-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-buckles-antique.jpg" alt="Antique custom belt buckles"><h2>Antique Silver Rectangle Logo Belt Buckle</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-belt-buckles/antique-silver-rectangle-logo-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-buckles-enamel.jpg" alt="Enamel custom belt buckles"><h2>Oval Club Logo Enamel Belt Buckle</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-belt-buckles/oval-club-logo-enamel-belt-buckle">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="golf-accessories" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Golf Divot Tool, Hat Clip & Ball Marker Types</h1><p>Custom golf accessories for tournaments, clubs, resort gifts, corporate golf events and retail sets.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-golf-ball-marker.jpg" alt="Custom golf ball markers"><h2>Antique Golf Club Divot Tool Ball Marker</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-golf-accessories/antique-golf-club-divot-tool-ball-marker">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-golf-hat-clip.jpg" alt="Custom golf hat clips"><h2>Avocado Golf Hat Clip Ball Marker</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-golf-accessories/avocado-golf-hat-clip-ball-marker">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-golf-divot-tool.jpg" alt="Custom golf divot tools"><h2>Color Logo Golf Divot Tool Set</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-golf-accessories/color-logo-golf-divot-tool-set">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="cufflinks-tieclips" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Cufflinks & Tie Clip Types</h1><p>Custom cufflinks and tie clips for corporate gifts, retail collections, clubs, formal events and brand accessories.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-cufflinks-metal.jpg" alt="Custom metal cufflinks"><h2>Blue Carbon Fiber Metal Cufflinks</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-cufflinks-tie-clips/blue-carbon-fiber-metal-cufflinks">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-cufflinks-enamel.jpg" alt="Custom enamel cufflinks"><h2>Color Plated Metal Tie Clips</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-cufflinks-tie-clips/color-plated-metal-tie-clips">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-tie-clips-logo.jpg" alt="Custom logo tie clips"><h2>Black Skull Logo Cufflinks</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-cufflinks-tie-clips/black-skull-logo-cufflinks">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="section product-type-cta">
      <div class="container">
        <div class="cta-band">
          <div><h2>Need a Price for Your Design?</h2><p>Send product type, logo, size, quantity and deadline. Our team will recommend the right process and quote clearly.</p></div>
          <a class="btn btn-yellow" href="/contact">Get Free Quote</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-logo-wrap"><img class="footer-logo" src="assets/images/logo.png" alt="Unique Pin logo"></div>
      <div><h4>Products</h4><a href="/products">Custom Enamel Pins</a><a href="/products">Custom Medals</a><a href="/products">Challenge Coins</a><a href="/products">Keychains</a></div>
      <div><h4>Get Started</h4><a href="/custom">Custom</a><a href="/about">About Us</a><a href="/blog">Blog</a><a href="/faq">FAQ</a></div>
      <div><h4>Contact</h4><a href="mailto:ceo@chinauniquepin.com">Email: ceo@chinauniquepin.com</a><a href="tel:+86076022831989">Phone: +86 0760 22831989</a><p>Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p></div>
    </div>
    <div class="container footer-bottom"><span>&copy; 2026 Unique Pin. All rights reserved.</span><span class="footer-social"><a class="footer-social-facebook" href="https://www.facebook.com/profile.php?id=61583070933333&locale=zh_CN" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5v3.1H4.2v3.8h3.5V24h4.3v-6.7h3.3l.6-3.8H12v-2.7c0-1.1.3-2.3 2-2.3Z"></path></svg></a><a class="footer-social-instagram" href="https://www.instagram.com/uniquepin/" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.6-3.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"></path></svg></a><a class="footer-social-youtube" href="https://www.youtube.com/@CustompinUnique" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"></path></svg></a></span></div>
  </footer>`;

export default function Page() {
  return <StaticPage html={productDetailHtml} />;
}
