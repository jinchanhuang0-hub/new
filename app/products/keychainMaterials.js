const material = (id, label, filename, alt) => ({
  id,
  label,
  image: `/assets/images/keychain-materials/${filename}`,
  alt,
  width: 800,
  height: 800,
});

export const keychainMaterials = {
  id: "keychain-fabrication-options",
  title: "Keychain Fabrication Options",
  description: "Compare materials, attachments and packaging for your custom keychain project.",
  subheading: "Keychain Materials",
  subdescription: "See how the same cactus design looks in six materials. These illustrations show appearance; confirm construction, colors and hardware with your approved specifications.",
  primarySectionId: "keychain-materials",
  primaryImageScale: "natural",
  primaryDesktopColumns: 6,
  items: [
    material("metal", "Metal", "metal-keychain.webp", "Illustrative gold-tone metal cactus keychain with colored enamel and a split ring"),
    material("pvc", "PVC", "pvc-keychain.webp", "Illustrative flexible PVC cactus keychain with layered colors and a split ring"),
    material("acrylic", "Acrylic", "acrylic-keychain.webp", "Illustrative clear-edged acrylic cactus keychain with a split ring"),
    material("embroidered", "Embroidered", "embroidered-keychain.webp", "Illustrative embroidered fabric cactus keychain with a stitched edge and a split ring"),
    material("wood", "Wood", "wood-keychain.webp", "Illustrative engraved wood cactus keychain with a split ring"),
    material("leather", "Leather", "leather-keychain.webp", "Illustrative stitched leather cactus keychain with a split ring"),
  ],
};
