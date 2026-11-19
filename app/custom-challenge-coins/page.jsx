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
    description: 'Pair your unit insignia with a motto, deployment date or service milestone on the reverse.',
  },
  {
    slug: 'cocoa-fire-department-challenge-coin',
    title: 'Custom Fire & EMS Challenge Coins',
    description: 'Feature your fire or EMS emblem on one side and a station number, crew name or anniversary on the other.',
  },
  {
    slug: 'victoria-police-st-michael-challenge-coin',
    title: 'Custom Law Enforcement Challenge Coins',
    description: 'Place a police badge or sheriff’s star on the front and your department or specialty unit emblem on the reverse.',
  },
  {
    slug: 'jennifer-jo-cobb-racing-challenge-coin',
    title: 'Custom Sports Team & Tournament Challenge Coins',
    description: 'Put your team logo on the front and commemorate a tournament, championship or season on the reverse.',
  },
  {
    slug: '40-years-port-authority-challenge-coin',
    title: 'Custom Corporate Challenge Coins',
    description: 'Pair your company logo with a work anniversary, team achievement or employee award on the reverse.',
  },
];

const campaign = {
  title,
  description,
  heroAlt,
  heroContrast: true,
  moqBenefit: 'Low MOQ',
  desktopImage,
  mobileImage: '/assets/images/campaign-challenge-coins-mobile.webp',
  productHeading: 'Double-Sided Challenge Coins for Brands, Clubs & Events',
  productColumns: 5,
  defaultProduct: 'Challenge Coins',
  products: featuredCoins.map(({ slug, title, description }) => {
    const product = productItems[slug];
    return {
      title,
      description,
      image: `/${product.image}`,
      alt: `Front and reverse of the ${product.alt}`,
    };
  }),
};

export default function Page() {
  return <CampaignPage campaign={campaign} />;
}
