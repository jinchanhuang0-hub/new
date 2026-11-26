
import Form from './Form';
import Map from './Map';
import StaticPage from '../../components/StaticPage';
import { customerPhotoGalleryHtml } from '../../components/customerPhotoGalleryHtml';
import { reviewHtml } from './reviews';
import styles from './page.module.css';
import heroStyles from './campaign-hero.module.css';





import fscCertificate from './certificate-fsc-2026.png';
import iso9001Certificate from './certificate-iso9001-2026.png';
import iso14001Certificate from './certificate-iso14001-2026.png';

function Picture({ src, label }) { return src ? <img className={styles.image} src={src} alt={label} loading="lazy" decoding="async" /> : <div className={styles.placeholder} role="img" aria-label={label}>{label}</div>; }
const brands = [
  ['coca-cola.svg', 'Coca-Cola', ''], ['mcdonalds.svg', "McDonald's", 'logo-square'], ['disney.svg', 'Disney', ''],
  ['pepsi.png', 'Pepsi', 'logo-square'], ['lego.svg', 'LEGO', 'logo-square'], ['starbucks.webp', 'Starbucks', 'logo-square'],
  ['walmart.webp', 'Walmart', ''], ['mars.webp', 'Mars', ''], ['nike.svg', 'Nike', ''], ['adidas.svg', 'adidas', ''],
  ['mercedes.webp', 'Mercedes-Benz', ''], ['bmw.webp', 'BMW', 'logo-square'], ['marvel.svg', 'MARVEL', ''],
  ['kfc.webp', 'KFC', 'logo-square logo-kfc'], ['american-greetings.webp', 'American Greetings', 'logo-square logo-roomy'],
  ['teal-s-logo.webp', 'Teal S brand', 'logo-square'], ['lions-international.webp', 'Lions International', 'logo-square'],
  ['turbovets.webp', 'Turbovets Tech For Heroes', 'logo-wide'], ['nbc.svg', 'NBC', 'logo-square'],
];
export default function CampaignPage({ campaign }) {
  const brandSection = (
    <section className={`brand-carousel ${styles.brandSection}`} aria-label="Trusted brand section">
      <div className="brand-heading"><h2>Trusted by Global Brands</h2></div>
      <div className="brand-marquee" aria-label="Trusted global brand logos">
        <div className="brand-marquee-track">
          {[...brands, ...brands].map(([file, name, extra], i) => (
            <span className={`brand-logo ${extra}`} key={`${file}-${i}`} aria-hidden={i >= brands.length ? 'true' : undefined}>
              <img src={`/assets/images/brands/${file}`} alt={`${name} logo`} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
  const benefits = <div className={heroStyles.benefits}>
    <span>OEM/ODM</span>
    <span>{campaign.moqBenefit ?? 'Low MOQ'}</span>
    <span>Free Artwork Support</span>
    <span>Factory-Direct Quotes</span>
  </div>;
  return <div className={styles.page}>
  <main>
    <section className={[heroStyles.hero, campaign.medalHero && heroStyles.medalHero, campaign.heroContrast && heroStyles.heroWithContrast].filter(Boolean).join(' ')}>
      <picture>
        <source media="(max-width: 600px)" srcSet={campaign.mobileImage} />
        <img src={campaign.desktopImage} alt={campaign.heroAlt} />
      </picture>
      <div className={heroStyles.copy}>
        <h1>{campaign.title}</h1>
        <p>{campaign.description}</p>
        <div className={heroStyles.actions}>
          <a href="#inquiry" data-campaign-quote>Get a Free Quote</a>
          <a href="/">Visit Our Website</a>
        </div>
        {campaign.benefitLine
          ? <div className={`${heroStyles.benefits} ${heroStyles.benefitLine}`}>{campaign.benefitLine}</div>
          : benefits}
      </div>
    </section>
  {!campaign.brandsAfterVideo && brandSection}
  <section className={`${styles.section} ${styles.productSection}`}>
    <h2 className={campaign.medalHero ? `${styles.productHeading} ${styles.medalProductHeading}` : styles.productHeading}>{campaign.productHeading}</h2>
    {campaign.productSubtitle && <p className={styles.productSubtitle}>{campaign.productSubtitle}</p>}
    <div className={campaign.productColumns === 5 ? `${styles.grid} ${styles.fiveColumnGrid}` : styles.grid}>
      {campaign.products.map(({ title, image, alt, description }) => (
        <article key={title}>
          <Picture src={image} label={alt ?? `${title} product`} />
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
    {campaign.productInquiry && (
      <div className={styles.productInquiry}>
        <h3>{campaign.productInquiry.heading}</h3>
        <p>{campaign.productInquiry.description}</p>
        <a className={styles.button} href="#inquiry" data-campaign-quote>{campaign.productInquiry.button}</a>
      </div>
    )}
  </section>
  <section className={styles.section}><div className={styles.split}><video className={styles.companyVideo} controls playsInline preload="metadata" aria-label="Unique Pin company and product overview video"><source src="/assets/videos/company-overview.mp4?v=20260819-lfs-fix" type="video/mp4" /></video><div><p className={styles.eyebrow}>Custom Metal Gifts Manufacturer</p><h2>Meet Unique Pin</h2><p>Take a 34-second look inside our 6,000 m² factory in Zhongshan, China. With 34 production machines, our in-house team manages CNC engraving, die casting, polishing, plating, enamel coloring, inspection and packing.</p><p>We manufacture custom enamel pins, challenge coins, medals, keychains and belt buckles for distributors, brands, clubs and event organizers—from artwork proofing to global delivery.</p><div className={styles.companyActions}><a className={styles.button} href="/about">About Us</a><a className={styles.button} href="/products">View Products</a></div></div></div></section>
  {campaign.brandsAfterVideo && brandSection}
  <section className={styles.certSection}><div className={styles.section}><h2>Certificates</h2><div className={styles.certGrid}>{[[iso9001Certificate.src,'ISO 9001'],[iso14001Certificate.src,'ISO 14001'],['/assets/images/cert-ce.webp','CE'],['/assets/images/cert-rohs.webp','RoHS'],[fscCertificate.src,'FSC'],['/assets/images/cert-smeta.webp','SMETA']].map(([src,label]) => <figure key={label}><img src={src} alt={`${label} certificate`} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div></div></section>
  <StaticPage html={`${reviewHtml}${customerPhotoGalleryHtml}`} />
  <section className={styles.section}><div className={styles.contactHeading}><h2>Contact Us</h2><p>Send your product details, artwork or deadline. Our team will reply with a clear custom quote.</p></div><div className={styles.contactLayout}><div className={styles.contactSide}><div className={styles.contactCard}><div className={styles.contactMethods}><a href="mailto:ceo@chinauniquepin.com"><strong>Mail</strong><span>ceo@chinauniquepin.com</span></a><a href="tel:+86076022831989"><strong>Phone</strong><span>+86 0760 22831989</span></a><a href="tel:+8618895316838"><strong>Mobile</strong><span>+86 18895316838</span></a><a href="https://api.whatsapp.com/send?phone=8618895316838" target="_blank" rel="noopener noreferrer"><strong>WhatsApp</strong><span>+86 18895316838</span></a></div><a className={styles.catalogLink} href="/assets/Uniquepin-Catalogue.pdf">Download Catalog</a></div><Map /></div><div className={styles.contactCard} id="inquiry"><h3 className={styles.contactFormTitle}>Get a Free Quote</h3><Form defaultProduct={campaign.defaultProduct} /></div></div></section></main>
  <footer className={styles.legalFooter}><span>Copyright © 2026, Zhongshan Unique Metal Gift Co., Ltd. All rights reserved. Powered by UcCrafts.</span><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></footer></div>; }
