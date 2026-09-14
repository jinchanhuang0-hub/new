const loop = (id, label, alt) => ({
  id,
  label,
  image: `/assets/images/medal-loops/${id}.webp`,
  alt,
  width: 800,
  height: 600,
});

export const medalLoops = {
  id: "medal-loop",
  title: "Medal Loop",
  description: "Compare medal loops and ribbon slots to suit your ribbon and medal design.",
  imageScale: "natural",
  items: [
    loop("integrated-round-loop", "Integrated Round Loop", "Gold medal with an integrated round loop"),
    loop("jump-ring-loop", "Jump Ring Loop", "Gold medal with a separate jump ring through its top loop"),
    loop("wide-rectangular-loop", "Wide Rectangular Loop", "Gold medal with a wide rectangular ribbon loop"),
    loop("open-rectangular-medal-loop", "Open Rectangular Loop", "Gold medal with an opening in its rectangular ribbon loop"),
    loop("inset-ribbon-slot", "Inset Ribbon Slot", "Gold medal with a ribbon slot inset into the medal body"),
    loop("hidden-rear-loop", "Hidden Rear Loop", "Back of a gold medal with a raised rear ribbon loop"),
  ],
};
