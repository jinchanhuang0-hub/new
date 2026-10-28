const packaging = (id, label, image, alt, width = 800, height = 600) => ({
  id,
  label,
  image,
  alt,
  width,
  height,
});

const pinPackagingImage = (filename) => `/assets/images/lapel-pin-packaging/${filename}`;

export const keychainPackaging = {
  id: "keychain-packaging",
  title: "Keychain Packaging",
  description: "Review protective and presentation packaging. Confirm the final keychain and ring fit, card attachment and any inserts before ordering.",
  imageScale: "natural",
  items: [
    packaging("poly-bag", "Poly Bag", pinPackagingImage("09-opp-bag-matched-size.webp"), "Clear poly bag packaging sample"),
    packaging("paper-wrap", "Paper Wrap", pinPackagingImage("02-paper-wrap.webp"), "White paper wrap packaging sample"),
    packaging("bubble-bag", "Bubble Bag", pinPackagingImage("03-bubble-bag.webp"), "Clear bubble bag packaging sample"),
    packaging("backer-card", "Backer Card", "/assets/images/bottle-opener-keychain-event-backing-cards.webp", "Two metal keychain bottle openers attached to printed event backer cards", 1536, 1024),
    packaging("velvet-bag", "Velvet Bag", pinPackagingImage("06-velvet-bag.webp"), "Black velvet drawstring gift bag sample"),
    packaging("acrylic-box", "Acrylic Box", pinPackagingImage("07-acrylic-box.webp"), "Clear acrylic presentation box with black insert"),
    packaging("velvet-box", "Velvet Box", pinPackagingImage("08-velvet-box.webp"), "Black velvet presentation box sample"),
  ],
};
