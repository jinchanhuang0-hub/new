import pin from './collection-lapel-pins.webp';
import coin from './collection-challenge-coins.webp';
import medal from './collection-medals.webp';
import keychain from './collection-keychains.webp';
// Replace the banner image URL, headline and description here.
export const content = { title: 'Headline placeholder', description: 'Description placeholder', banner: '', advantages: ['Advantage 1', 'Advantage 2', 'Advantage 3', 'Advantage 4'],
  // Replace product image URLs, titles and descriptions here.
  products: [
    { title: 'Custom Lapel Pins', image: pin.src, description: 'Soft or hard enamel styles for brands, events, and retail.' },
    { title: 'Custom Challenge Coins', image: coin.src, description: 'Two-sided designs for recognition, teams, and events.' },
    { title: 'Custom Medals', image: medal.src, description: 'Custom shapes and ribbons for races, competitions, and awards.' },
    { title: 'Custom Keychains', image: keychain.src, description: 'Custom metal keychains for schools, clubs, brands, and events.' },
  ],
  // Edit company content and add or remove modules in these arrays.
  company: [{ title: 'Company / factory', image: '', description: 'Description placeholder' }],
  extra: [{ title: 'Additional content', description: 'Content placeholder', image: '' }],
};
