import CampaignPage from '../lp/custom-metal-gifts/CampaignPage';
import { productItems } from '../product-item/content';

const path = '/custom-challenge-coins';
const title = 'Custom Challenge Coins for Brands & Events';
const description = 'Create double-sided challenge coins with your logo, artwork and chosen finish. For brands, teams, distributors and event organisers.';
const desktopImage = '/assets/images/campaign-challenge-coins-desktop.webp';
const heroAlt = 'Eight challenge coin faces displayed in a factory setting';

export const metadata = {
  title: `${title} | Unique Pin`,
  description,
  robots: { index: false, follow: false },
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    siteName: 'Unique Pin',
    locale: 'en_US',
    url: path,
    title,
    description,
    images: [{ url: desktopImage, width: 1920, height: 640, alt: heroAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: desktopImage, alt: heroAlt }],
  },
};

const featuredCoins = [
  {
    slug: 'marine-corps-forces-north-challenge-coin',
    title: 'Custom Military Challenge Coins',
    description: 'Put your unit insignia on the front and your motto, deployment date or mission artwork on the back.',
  },
  {
    slug: 'cocoa-fire-department-challenge-coin',
    title: 'Custom Fire & EMS Coins',
    description: 'Pair your department emblem on the front with your station number or crew name on the back.',
  },
  {
    image: '/assets/images/campaign-law-enforcement-coins.png',
    alt: 'Assorted challenge coins with an eagle emblem, a SEAL Team coin and an Air Force coin in a blue presentation case',
    title: 'Custom Law Enforcement Coins',
    description: 'Feature your department badge on the front and your unit insignia or a dedication on the back.',
  },
  {
    slug: 'jennifer-jo-cobb-racing-challenge-coin',
    title: 'Custom Sports Challenge Coins',
    description: 'Show your team or race logo on the front and add the event name, date or race number on the back.',
  },
  {
    slug: '40-years-port-authority-challenge-coin',
    title: 'Custom Corporate Challenge Coins',
    description: 'Feature your company logo on the front and mark a service anniversary or team achievement on the back.',
  },
];

const campaign = {
  title,
  description,
  heroAlt,
  heroContrast: true,
  brandsAfterVideo: true,
  moqBenefit: 'Low MOQ',
  desktopImage,
  mobileImage: '/assets/images/campaign-challenge-coins-mobile.webp',
  productHeading: 'Custom Double-Sided Challenge Coins',
  productSubtitle: 'Customise both sides with your logo, artwork and wording. Explore design ideas for your unit, team or company.',
  productColumns: 5,
  productInquiry: {
    heading: 'How many double-sided challenge coins do you need, and when do you need them?',
    description: 'Share your estimated quantity, delivery postcode and required delivery date. If you have artwork for either side of your coin, attach it to your inquiry.',
    button: 'Get a Custom Coin Quote',
  },
  defaultProduct: 'Challenge Coins',
  products: featuredCoins.map(({ slug, ...card }) => {
    if (card.image) return card;
    const product = productItems[slug];
    return {
      ...card,
      image: `/${product.image}`,
      alt: `Front and reverse of the ${product.alt}`,
    };
  }),
};

export default function Page() {
  return <CampaignPage campaign={campaign} />;
}
