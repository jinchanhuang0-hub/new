import { preload } from "react-dom";

const criticalImages = [
  "/assets/images/logo.png",
  "/assets/images/hero-banner.webp",
  "/assets/images/hero-banner-og.jpg",
  "/assets/images/mega-lapel-pins-christmas-candy-tight.webp",
  "/assets/images/mega-medals-christmas-reindeer-zoom2.webp",
  "/assets/images/mega-challenge-coin-snowman-tight.webp",
];

export default function ResourceHints() {
  criticalImages.forEach((href) => {
    preload(href, { as: "image" });
  });

  return null;
}
