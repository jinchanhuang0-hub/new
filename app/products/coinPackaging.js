import { pinPackaging } from "./pinPackaging";

export const coinPackaging = {
  ...pinPackaging,
  title: "Packaging Options",
  desktopColumns: 6,
  items: [
    ...pinPackaging.items,
    {
      id: "acrylic-coin-stand",
      label: "Acrylic Coin Stand",
      image: "/assets/images/empty-coin-packaging/acrylic-coin-stand.webp",
      alt: "Clear acrylic display stand for a challenge coin",
      width: 800,
      height: 600,
    },
    {
      id: "coin-capsule",
      label: "Coin Capsule",
      image: "/assets/images/empty-coin-packaging/coin-capsule.webp",
      alt: "Clear round protective coin capsule",
      width: 800,
      height: 600,
    },
    {
      id: "pvc-pouch",
      label: "PVC Pouch",
      image: "/assets/images/empty-coin-packaging/pvc-pouch.webp",
      alt: "Clear PVC pouch with a flap for a challenge coin",
      width: 800,
      height: 600,
    },
  ],
};
