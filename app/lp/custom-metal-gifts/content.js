import pin from './product-pin-guitar-1000-q95.webp';
import coin from './product-coin-scene-optimized.webp';
import medal from './product-medal-riverside-1000-q95.webp';
import buckle from './product-buckle-scene-optimized.webp';
// Replace the banner image URL, headline and description here.
export const content = { title: 'Headline placeholder', description: 'Description placeholder', banner: '', advantages: ['Advantage 1', 'Advantage 2', 'Advantage 3', 'Advantage 4'],
  // Replace product image URLs, titles and descriptions here.
  products: [
    { title: 'Custom Lapel Pins', image: pin.src, description: 'Soft or hard enamel styles for brands, events, and retail.' },
    { title: 'Custom Challenge Coins', image: coin.src, description: 'Two-sided designs for recognition, teams, and events.' },
    { title: 'Custom Medals', image: medal.src, description: 'Custom shapes and ribbons for races, competitions, and awards.' },
    { title: 'Custom Belt Buckles', image: buckle.src, description: 'Personalized designs for rodeos, brands, and special awards.' },
  ],
  // Edit company content and add or remove modules in these arrays.
  company: [{ title: 'Company / factory', image: '', description: 'Description placeholder' }],
  extra: [{ title: 'Additional content', description: 'Content placeholder', image: '' }],
};
