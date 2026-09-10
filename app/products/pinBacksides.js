const backside = (id, label, filename, alt) => ({
  id,
  label,
  image: `/assets/images/lapel-pin-backsides/${filename}`,
  alt,
  width: 800,
  height: 600,
});

export const pinBacksides = {
  id: "pin-backside",
  title: "Pin Backside",
  description:
    "Compare backside textures, engraving and stamped branding options for custom lapel pins.",
  imageScale: "natural",
  items: [
    backside(
      "gritty-backside",
      "Gritty Backside",
      "01-gritty-backside.webp",
      "Textured backside of a custom lapel pin",
    ),
    backside(
      "smooth-backside",
      "Smooth Backside",
      "02-smooth-backside.webp",
      "Smooth backside of a custom lapel pin",
    ),
    backside(
      "laser-engraving",
      "Laser Engraving",
      "03-laser-engraving.webp",
      "Laser engraved Unique Pin logo on lapel pin backside",
    ),
    backside(
      "raised-back-stamp",
      "Raised Back Stamp",
      "04-raised-back-stamp.webp",
      "Raised Unique Pin back stamp on custom lapel pin",
    ),
    backside(
      "recessed-back-stamp",
      "Recessed Back Stamp",
      "05-recessed-back-stamp.webp",
      "Recessed Unique Pin back stamp on custom lapel pin",
    ),
    backside(
      "custom-engraving",
      "Custom Engraving",
      "06-custom-engraving.webp",
      "Custom engraved Unique Pin logo on lapel pin backside",
    ),
  ],
};
