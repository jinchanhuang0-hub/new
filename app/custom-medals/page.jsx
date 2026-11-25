import CampaignPage from '../lp/custom-metal-gifts/CampaignPage';

export const metadata = {
  title: 'Custom Medals for Races, Sports & Awards | Unique Pin',
  description: 'Custom medals with your logo, shape and ribbon design for races, clubs and events.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/custom-medals' },
};

const image = (name) => `/assets/images/${name}`;
const campaign = {
  medalHero: true,
  brandsAfterVideo: true,
  benefitLine: 'Low MOQ · Free Artwork Support · Custom Printed Ribbons',
  title: 'Custom Medals for Races, Tournaments & Awards',
  description: 'Turn your event logo into a custom medal with a matching ribbon. Share your quantity and event date for a factory-direct quote.',
  heroAlt: 'Five custom race and sports medals with ribbons',
  desktopImage: image('campaign-medals-factory.webp'),
  mobileImage: image('custom-medals-five-mobile-750x900.jpg'),
  productHeading: 'Custom Medals for Your Event',
  productColumns: 5,
  productInquiry: {
    heading: 'How many medals do you need, and when do you need them?',
    description: 'Share your estimated quantity, delivery postcode and required delivery date. Have a logo or sketch? Attach it so we can quote your design.',
    button: 'Get My Medal Quote',
  },
  defaultProduct: 'Medals',
  products: [
    {
      title: 'Running & Finisher Medals',
      image: image('gold-marathon-finisher-42195.jpg'),
      alt: 'Gold 42.195 km marathon finisher medal with raised city landmarks',
      description: 'Turn your course landmark into a finisher medal, with your race distance, event year and matching ribbon.',
    },
    {
      title: 'Sports Tournament Medals',
      image: image('sports-tournament-strict-curl-medal.jpg'),
      alt: 'Gold Strict Curl Nation medal with a red, white and blue ribbon',
      description: 'Use one team or tournament design across medal finishes so each placing is easy to recognise.',
    },
    {
      title: 'Charity & Fundraising Medals',
      image: image('type-medals-run-for-a-cause-rectangle.png'),
      description: 'Put your cause on the front and use the reverse to recognise your charity, partners or event sponsors.',
    },
    {
      title: 'School & Club Awards',
      image: image('school-club-award-medal-collection.png'),
      alt: 'Six award medals featuring a league crest, a butterfly and sports emblems',
      description: 'Feature your school or club crest in raised metal, with ribbon colours chosen to match your organisation.',
    },
    {
      title: 'Custom Club & Association Medals',
      image: image('club-medal-knights-of-king-arthur.jpg'),
      alt: 'Knights of King Arthur crest medal with a purple and green ribbon',
      description: 'Pair your club crest and name with a ribbon in your club colors.',
    },
  ],
};

export default function Page() { return <CampaignPage campaign={campaign} />; }
