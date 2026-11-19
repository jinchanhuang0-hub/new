import CampaignPage from '../lp/custom-metal-gifts/CampaignPage';

export const metadata = {
  title: 'Custom Belt Buckles for Brands & Events | Unique Pin',
  description: 'Custom logo, western, award and retail belt buckles for brands, clubs and events.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/custom-belt-buckles' },
};

const image = (name) => `/assets/images/${name}`;
const campaign = {
  title: 'Custom Belt Buckles for Brands & Events',
  description: 'Create custom belt buckles with your logo, artwork and chosen finish. For retailers, clubs, distributors and event organisers.',
  heroAlt: 'Five custom belt buckle designs in a workshop',
  desktopImage: image('campaign-buckles-desktop.webp'),
  mobileImage: image('campaign-buckles-mobile.webp'),
  productHeading: 'Custom Belt Buckles for Brands, Clubs & Events',
  defaultProduct: 'Belt Buckles',
  products: [
    { title: 'Custom Western Belt Buckles', image: image('belt-buckle-western.webp'), description: 'Western-inspired buckles for rodeos, ranches and apparel brands.' },
    { title: 'Custom Letter & Name Belt Buckles', image: image('belt-buckle-letter-name.webp'), description: 'Add names, initials or brand lettering to a custom buckle.' },
    { title: 'Custom Logo Belt Buckles', image: image('belt-buckle-logo.webp'), description: 'Showcase your company, club or team logo on a custom metal buckle.' },
    { title: 'Custom Trophy Belt Buckles', image: image('belt-buckle-trophy.webp'), description: 'Create award buckles with your event name, award title and year.' },
  ],
};

export default function Page() { return <CampaignPage campaign={campaign} />; }
