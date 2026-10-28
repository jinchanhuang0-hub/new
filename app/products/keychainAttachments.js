const attachment = (id, label, filename, alt) => ({
  id,
  label,
  image: `/assets/images/keychain-attachments/${filename}`,
  alt,
  width: 800,
  height: 800,
});

export const keychainAttachments = {
  id: "keychain-attachments",
  title: "Keychain Attachments",
  description: "Compare rings, chains, clips and straps for custom keychains. These reference images show hardware styles; confirm size, finish and compatibility before production.",
  imageScale: "natural",
  desktopColumns: 5,
  items: [
    attachment("split-ring", "Split Ring", "split-ring.webp", "Silver split key ring with overlapping coils"),
    attachment("jump-ring", "Jump Ring", "jump-ring.webp", "Open silver jump ring for connecting keychain parts"),
    attachment("link-chain", "Link Chain", "link-chain.webp", "Short silver metal link chain for a keychain"),
    attachment("lobster-clasp", "Lobster Clasp", "lobster-clasp.webp", "Silver lobster clasp with spring-loaded gate"),
    attachment("swivel-snap-hook", "Swivel Snap Hook", "swivel-snap-hook.webp", "Silver snap hook with swivel base and rectangular loop"),
    attachment("carabiner-clip", "Carabiner Clip", "carabiner-clip.webp", "Silver carabiner-style clip with spring gate"),
    attachment("ball-chain", "Ball Chain", "ball-chain.webp", "Silver ball chain with connector"),
    attachment("screw-lock-cable", "Screw-Lock Cable", "screw-lock-cable.webp", "Silver wire cable key ring with screw-lock connector"),
    attachment("swivel-connector", "Swivel Connector", "swivel-connector.webp", "Silver double-eye swivel connector"),
    attachment("braided-wrist-strap", "Braided Wrist Strap", "braided-wrist-strap.webp", "Black braided wrist strap with metal tip and split ring"),
  ],
};
