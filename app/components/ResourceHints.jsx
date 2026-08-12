import { preload } from "react-dom";

const criticalImages = [
  "/assets/images/logo.png",
  "/assets/images/hero-banner.webp",
  "/assets/images/hero-banner-og.jpg",
  "/assets/images/mega-lapel-pins-auburn.jpg",
  "/assets/images/mega-medals-butterfly.png",
  "/assets/images/mega-challenge-coin-christmas.jpg",
];

export default function ResourceHints() {
  criticalImages.forEach((href) => {
    preload(href, { as: "image" });
  });

  return null;
}
