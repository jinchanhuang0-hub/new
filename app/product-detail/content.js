import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";

import { productCategoryNavHtml } from "../components/productCategoryNav";
import { replaceAllProductTypeSectionCards } from "../lib/productCards";
import { siteHeaderHtml } from "../components/siteHeaderHtml";


export const productDetailMetadata = {
  pins: {
    title: "Custom Enamel Pins Manufacturer | OEM/ODM Factory, No MOQ",
    description: "Order custom enamel pins from Unique Pin, a China OEM/ODM metal crafts manufacturer with free artwork design, No MOQ, fast sampling and strict QC. Mold fees and unit prices are calculated by project."
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
  },
  patchs: {
    title: "Custom Patches Manufacturer | Embroidered, PVC & Woven Patches",
    description: "Order custom patches for uniforms, clubs, events, apparel brands and promotional merchandise with artwork proofing, material guidance and OEM/ODM support."
  },
  others: {
    title: "Other Custom Metal Products | OEM/ODM Gift Manufacturer",
    description: "Request other custom products from Unique Pin, including special metal gifts, accessories, promotional items and mixed custom projects."
  }
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  return productDetailMetadata[params?.product] || productDetailMetadata.pins;
}

export const productDetailHtml = String.raw`
  ${siteHeaderHtml({ active: "products" })}

  <main class="product-types-page" id="custom-details">
    <section class="product-type-section" data-product-content="pins">
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Enamel Pins</h1><p>Choose from soft enamel, hard enamel, die struck, printed and specialty enamel pin styles for brand promotion, events, clubs and retail programs.</p></div>
        ${productCategoryNavHtml({ active: "pins", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-pins-yellow-character.jpg" alt="Yellow character hard enamel pin"><h2>Yellow Character Hard Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/yellow-character-hard-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-auburn-proud.jpg" alt="Auburn Proud green soft enamel pin"><h2>Auburn Proud Soft Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/auburn-proud-soft-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-soft-enamel.jpg" alt="Custom soft enamel pins"><h2>Green Character Soft Enamel Pin Set</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/green-character-soft-enamel-pin-set">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-hard-enamel.jpg" alt="Custom hard enamel pins"><h2>Box Cat and Umbrella Cat Enamel Pins</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/box-cat-and-umbrella-cat-enamel-pins">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-die-struck.jpg" alt="Die struck custom metal pins"><h2>Antique Silver Guitar Crest Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/antique-silver-guitar-crest-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-pins-printed.jpg" alt="Printed custom lapel pins"><h2>Glitter Tour Truck Printed Enamel Pin</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-enamel-pins/glitter-tour-truck-printed-enamel-pin">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="medals" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Medals</h1><p>Custom medals for sports competitions, school awards, corporate recognition, charity events and commemorative programs.</p></div>
        ${productCategoryNavHtml({ active: "medals", variant: "inline" })}
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
        <div class="product-type-head"><h1>Custom Challenge Coins</h1><p>Challenge coins and commemorative coins for military units, public service organizations, corporate teams and collector programs.</p></div>
        ${productCategoryNavHtml({ active: "coins", variant: "inline" })}
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
        <div class="product-type-head"><h1>Custom Metal Keychains</h1><p>Create custom metal keychains for promotional campaigns, retail collections, corporate gifts, events and souvenir programs. Share your logo, preferred size, quantity, finish, attachment and packaging needs, and our team will review the artwork, recommend a practical metal construction, and prepare a clear quotation for approval, sampling and production planning support.</p></div>
        ${productCategoryNavHtml({ active: "keychains", variant: "inline" })}
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
        <div class="product-type-head"><h1>Custom Fridge Magnets</h1><p>Custom fridge magnets for tourist souvenirs, city gifts, event merchandise and retail gift programs.</p></div>
        ${productCategoryNavHtml({ active: "magnets", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><img src="assets/images/type-magnets-enamel.png" alt="Custom enamel fridge magnets"><h2>Ornate Building Enamel Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/ornate-building-enamel-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-3d.png" alt="3D custom fridge magnets"><h2>Ferris Wheel 3D Metal Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/ferris-wheel-3d-metal-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-soft-pvc.png" alt="Soft PVC fridge magnets"><h2>Cartoon Character Soft Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/cartoon-character-soft-pvc-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-magnets-souvenir.png" alt="Souvenir fridge magnets"><h2>City Landmark Souvenir Fridge Magnet</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-fridge-magnets/city-landmark-souvenir-fridge-magnet">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="patchs" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Patches</h1><p>Custom patches for uniforms, jackets, bags, clubs, event merchandise and apparel programs. Share your logo, backing requirement, quantity and deadline so our team can recommend the right material, border and attachment method.</p></div>
        ${productCategoryNavHtml({ active: "patchs", variant: "inline" })}
        <div class="product-type-grid">
          <article class="product-type-card"><a class="product-type-media" href="/products/custom-patches/custom-woven-dragon-round-patch"><img src="assets/images/custom-woven-dragon-round-patch.webp" width="800" height="800" alt="Blue and gold custom woven dragon round patch"></a><h2><a href="/products/custom-patches/custom-woven-dragon-round-patch">Custom Woven Dragon Round Patch</a></h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-patches/custom-woven-dragon-round-patch">View Details</a><a class="product-type-btn product-type-btn-primary" href="/contact?product=Patches&amp;item=Custom%20Woven%20Dragon%20Round%20Patch">GET A QUOTE</a></div></article>
          <article class="product-type-card"><a class="product-type-media" href="/products/custom-patches/custom-embroidered-cartoon-character-patch"><img src="assets/images/custom-embroidered-cartoon-character-patch.webp" width="800" height="800" alt="Custom embroidered cartoon character patch"></a><h2><a href="/products/custom-patches/custom-embroidered-cartoon-character-patch">Custom Embroidered Cartoon Character Patch</a></h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-patches/custom-embroidered-cartoon-character-patch">View Details</a><a class="product-type-btn product-type-btn-primary" href="/contact?product=Patches&amp;item=Custom%20Embroidered%20Cartoon%20Character%20Patch">GET A QUOTE</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="others" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Other Custom Products</h1><p>Need a product that does not fit the standard categories? We can review custom metal gifts, mixed accessories, event merchandise and special OEM/ODM requests based on your artwork, structure and target use.</p></div>
        ${productCategoryNavHtml({ active: "others", variant: "inline" })}
        <div class="product-type-grid custom-category-grid cover-card-grid">
          <article class="product-type-card" id="functional-accessories"><img src="assets/images/type-openers-coin.jpg" alt="Functional custom metal product sample"><h2>Functional Accessories</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="#functional-accessories">View Details</a><a class="product-type-btn product-type-btn-primary" href="/contact?product=Others&amp;item=Functional%20Accessories">GET A QUOTE</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="bottle-openers" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Bottle Openers</h1><p>Custom bottle openers that combine practical use with logo promotion, event gifts and retail packaging.</p></div>
        ${productCategoryNavHtml({ active: "bottle-openers", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-openers-coin.jpg" alt="Custom coin bottle openers"><h2>Playing Card Metal Bottle Opener</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-bottle-openers/playing-card-metal-bottle-opener">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-openers-keychain.jpg" alt="Custom keychain bottle openers"><h2>Skull Coin Keychain Bottle Opener</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-bottle-openers/skull-coin-keychain-bottle-opener">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="buckles" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Custom Belt Buckles</h1><p>Custom belt buckles for clubs, fashion brands, Western themes, awards and promotional merchandise.</p></div>
        ${productCategoryNavHtml({ active: "buckles", variant: "inline" })}
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
        <div class="product-type-head"><h1>Custom Golf Ball Markers, Divot Tools & Hat Clips</h1><p>Custom golf accessories for tournaments, clubs, resort gifts, corporate golf events and retail sets.</p></div>
        ${productCategoryNavHtml({ active: "golf-accessories", variant: "inline" })}
        <div class="product-type-grid compact">
          <article class="product-type-card"><img src="assets/images/type-golf-ball-marker.jpg" alt="Custom golf ball markers"><h2>Antique Golf Club Divot Tool Ball Marker</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-golf-accessories/antique-golf-club-divot-tool-ball-marker">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-golf-hat-clip.jpg" alt="Custom golf hat clips"><h2>Avocado Golf Hat Clip Ball Marker</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-golf-accessories/avocado-golf-hat-clip-ball-marker">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
          <article class="product-type-card"><img src="assets/images/type-golf-divot-tool.jpg" alt="Custom golf divot tools"><h2>Color Logo Golf Divot Tool Set</h2><div class="product-type-actions"><a class="product-type-btn product-type-btn-outline" href="/products/custom-golf-accessories/color-logo-golf-divot-tool-set">View More</a><a class="product-type-btn product-type-btn-primary" href="/contact">GET QUOTE NOW</a></div></article>
        </div>
      </div>
    </section>

    <section class="product-type-section" data-product-content="cufflinks-tieclips" hidden>
      <div class="container product-type-content">
        <div class="product-type-head"><h1>Cufflinks & Tie Clips</h1><p>Custom cufflinks and tie clips for corporate gifts, retail collections, clubs, formal events and brand accessories.</p></div>
        ${productCategoryNavHtml({ active: "cufflinks-tieclips", variant: "inline" })}
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
          <a class="btn btn-yellow" href="/contact">Get a Free Quote</a>
        </div>
      </div>
    </section>
  </main>
  ${footerHtml}`;

export default function Page() {
  return <StaticPage html={replaceAllProductTypeSectionCards(productDetailHtml)} />;
}
