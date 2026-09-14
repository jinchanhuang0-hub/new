const ribbon = (id, label, alt) => ({
  id,
  label,
  image: `/assets/images/medal-ribbons/${id}.webp`,
  alt,
  width: 800,
  height: 600,
});

export const medalRibbons = {
  id: "medal-ribbon",
  title: "Medal Ribbon",
  description: "Compare ribbon styles and color references; confirm final colors on a ribbon sample.",
  imageScale: "natural",
  items: [
    ribbon("custom-ribbon", "Custom Ribbon", "Navy medal ribbon with white and gold stripes and Unique Pin branding"),
    ribbon("single-color-polyester-ribbon", "Single-Color Polyester Ribbon", "Solid navy medal ribbon with a metal attachment ring"),
    ribbon("two-color-polyester-ribbon", "Two-Color Polyester Ribbon", "Red and white medal ribbon with a metal attachment ring"),
    ribbon("three-color-polyester-ribbon", "Three-Color Polyester Ribbon", "Red, white and blue medal ribbon with a metal attachment ring"),
    ribbon("pantone-color-card", "Pantone Color Reference", "Fan of Pantone color swatches for color reference"),
  ],
};
