// Preserve the requested display order and use the supplied replacement images.
const replacementImages = new Set(["standard-edge", "cross-cut-edge", "bezel-edge", "spur-edge"]);
export const coinEdges = {
  id: "coin-edge-options",
  title: "Edge Options",
  description: "Explore 8 edge options to compare their profiles, textures and decorative details.",
  imageScale: "top-aligned",
  desktopColumns: 5,
  items: [
    ["standard-edge", "Standard Edge"],
    ["cross-cut-edge", "Cross-Cut Edge"],
    ["oblique-edge", "Oblique Edge"],
    ["reeded-edge", "Reeded Edge"],
    ["rope-edge", "Rope Edge"],
    ["bezel-edge", "Bezel Edge"],
    ["spur-edge", "Spur Edge"],
    ["scalloped-edge", "Custom Edge"],
  ].map(([id, label]) => ({
    id,
    label,
    image: `/assets/images/challenge-coin-side-edges/${id}.${replacementImages.has(id) ? "png" : "webp"}`,
    alt: `Challenge coin ${label.toLowerCase()} close-up`,
    width: replacementImages.has(id) ? 1448 : 800,
    height: replacementImages.has(id) ? 1086 : 600,
  })),
};
