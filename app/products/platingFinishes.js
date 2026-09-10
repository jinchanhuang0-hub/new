const sample = (id, label, category, filename, width = 800, height = 600) => ({
  id, label, category,
  image: `/assets/images/plating-swatches-v2/${filename.includes(".") ? filename : `${filename}.webp`}`,
  alt: `Unique Pin ${label.replace(/ finish$/i, "").toLowerCase()} finish sample`,
  width,
  height,
});

export const platingFinishes = {
  id: "lapel-pin-finishes",
  title: "Fabrication Options",
  description: "Explore materials, finishes, attachments and packaging options to build the right specifications for your custom product.",
  subheading: "Plating Options",
  subdescription: "Compare polished, matte, antique, black, rainbow and two-tone plating options to find the right appearance for your design.",
  items: [
    sample("gold", "Gold", "bright", "01-unique-pin-gold"),
    sample("silver", "Silver", "bright", "02-unique-pin-silver"),
    sample("nickel", "Nickel", "bright", "03-unique-pin-nickel"),
    sample("brass", "Brass", "bright", "04-unique-pin-brass"),
    sample("copper", "Copper", "bright", "05-unique-pin-copper"),
    sample("matte-gold", "Matte Gold", "matte", "06-unique-pin-matt-gold"),
    sample("matte-silver", "Matte Silver", "matte", "07-unique-pin-matt-silver"),
    sample("matte-nickel", "Matte Nickel", "matte", "08-unique-pin-matt-nickel"),
    sample("antique-gold", "Antique Gold", "antique", "11-unique-pin-antique-gold"),
    sample("antique-silver", "Antique Silver", "antique", "12-unique-pin-antique-silver"),
    sample("antique-nickel", "Antique Nickel", "antique", "13-unique-pin-antique-nickel"),
    sample("antique-brass", "Antique Brass", "antique", "09-unique-pin-antique-brass"),
    sample("antique-copper", "Antique Copper", "antique", "10-unique-pin-antique-copper"),
    sample("black-nickel", "Black Nickel", "dark", "14-unique-pin-black-nickel"),
    sample("dyed-black", "Dyed Black", "dark", "15-unique-pin-dye-black"),
    sample("rainbow-finish", "Rainbow Finish", "special", "16-unique-pin-rainbow-finish.png", 1448, 1086),
    sample("two-tone-finish", "Two-Tone Finish", "special", "17-unique-pin-two-tone-finish.png", 1448, 1086),
  ],
};
