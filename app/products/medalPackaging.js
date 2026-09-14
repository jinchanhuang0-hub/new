import { pinPackaging } from "./pinPackaging";

export const medalPackaging = {
  ...pinPackaging,
  id: "medal-packaging",
  title: "Packaging Options",
  description: "Explore packaging options for your medals; confirm sizes and inserts for your design.",
  items: pinPackaging.items.map((item) => ({
    ...item,
    alt: item.alt.replaceAll("custom lapel pins", "custom medals"),
  })),
};
