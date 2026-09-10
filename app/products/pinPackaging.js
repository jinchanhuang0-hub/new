const packaging = (id, label, filename, alt) => ({
  id,
  label,
  image: `/assets/images/lapel-pin-packaging/${filename}`,
  alt,
  width: 800,
  height: 600,
});

export const pinPackaging = {
  id: "pin-packaging",
  title: "Pin Packaging",
  description:
    "Explore packaging options for presenting and protecting your custom lapel pins.",
  imageScale: "natural",
  items: [
    packaging(
      "poly-bag",
      "Poly Bag",
      "09-opp-bag-matched-size.webp",
      "Clear poly bag for packaging custom lapel pins",
    ),
    packaging(
      "paper-wrap",
      "Paper Wrap",
      "02-paper-wrap.webp",
      "White paper wrap for protecting custom lapel pins",
    ),
    packaging(
      "bubble-bag",
      "Bubble Bag",
      "03-bubble-bag.webp",
      "Clear bubble bag for protecting custom lapel pins",
    ),
    packaging(
      "backer-card-single-sided",
      "Single-Sided Backer Card",
      "04-backer-card-single-sided.webp",
      "Single-sided Unique Pin backer card",
    ),
    packaging(
      "backer-card-double-sided",
      "Double-Sided Backer Card",
      "05-backer-card-double-sided.webp",
      "Double-sided Unique Pin backer cards",
    ),
    packaging(
      "velvet-bag",
      "Velvet Bag",
      "06-velvet-bag.webp",
      "Black velvet drawstring bag for custom lapel pins",
    ),
    packaging(
      "acrylic-box",
      "Acrylic Box",
      "07-acrylic-box.webp",
      "Clear acrylic presentation box with black insert",
    ),
    packaging(
      "velvet-box",
      "Velvet Box",
      "08-velvet-box.webp",
      "Black velvet presentation box for custom lapel pins",
    ),
  ],
};
