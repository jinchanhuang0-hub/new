const attachment = (
  id,
  label,
  filename,
  { alt = `${label} pin attachment`, width = 800, height = 600 } = {},
) => ({
  id,
  label,
  image: `/assets/images/lapel-pin-attachments/${filename}`,
  alt,
  width,
  height,
});

export const pinAttachments = {
  id: "pin-attachments",
  title: "Pin Attachments",
  description:
    "Compare 14 pin attachment options for different wearing preferences, holding strength and pin designs.",
  imageScale: "natural",
  items: [
    attachment("military-clutch", "Military Clutch", "01-military-clutch.webp"),
    attachment(
      "two-military-clutches",
      "Two Military Clutches",
      "13-two-military-clutches.png",
      { alt: "Two military clutch pin attachments", width: 1500, height: 1125 },
    ),
    attachment("rubber-clutch", "Rubber Clutch", "02-rubber-clutch.webp"),
    attachment(
      "two-rubber-clutches",
      "Two Rubber Clutches",
      "14-two-rubber-clutches.png",
      { alt: "Two rubber clutch pin attachments", width: 1500, height: 1125 },
    ),
    attachment("cuff-link", "Cuff Link", "03-cuff-link.webp"),
    attachment("deluxe-clutch", "Deluxe Clutch", "04-deluxe-clutch.webp"),
    attachment("jewelry-clutch", "Jewelry Clutch", "05-jewelry-clutch.webp"),
    attachment("magnet-back", "Magnet Back", "06-magnet-back.webp"),
    attachment("key-ring", "Key Ring", "07-key-ring.webp"),
    attachment("tie-tack-with-chain", "Tie Tack with Chain", "08-tie-tack-with-chain.webp"),
    attachment("safety-pin", "Safety Pin", "09-safety-pin.webp"),
    attachment("stick-pin", "Stick Pin", "10-stick-pin.webp"),
    attachment("tie-pin", "Tie Pin", "11-tie-pin.webp"),
    attachment("ball-chain", "Ball Chain", "12-ball-chain.webp"),
  ],
};
