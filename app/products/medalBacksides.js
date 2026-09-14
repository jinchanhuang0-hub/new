const backside = (id, label, alt) => ({
  id,
  label,
  image: `/assets/images/medal-backsides/${id}.webp`,
  alt,
  width: 800,
  height: 600,
});

export const medalBacksides = {
  id: "medal-backside",
  title: "Medal Backside",
  description: "Compare standard backs, deep engraving, raised text and laser engraving for your medals.",
  imageScale: "natural",
  items: [
    backside("standard-back", "Standard Back", "Plain gold medal backside without text"),
    backside("deep-engraving", "Deep Engraving", "Gold medal backside with recessed Unique Pin lettering"),
    backside("raised-text", "Raised Text", "Gold medal backside with raised Unique Pin lettering"),
    backside("laser-engraving", "Laser Engraving", "Gold medal backside with dark laser-engraved Unique Pin lettering"),
  ],
};
