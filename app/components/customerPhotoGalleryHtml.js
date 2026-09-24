import { existsSync } from "node:fs";
import { join } from "node:path";

const configuredCustomerPhotos = [
  {
    id: "swim-bike-run-medal",
    src: "/assets/images/customer-gallery/customer-swim-bike-run-medal-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-swim-bike-run-medal-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-swim-bike-run-medal-480.webp 384w, /assets/images/customer-gallery/customer-swim-bike-run-medal-1200.webp 960w",
    width: 960,
    height: 1200,
    thumbWidth: 384,
    thumbHeight: 480,
    categoryLabel: "Medals",
    alt: "Custom Swim Bike Run medal with blue ribbon held in a hand",
  },
  {
    id: "green-penguin-medals",
    src: "/assets/images/customer-gallery/customer-green-penguin-medals-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-green-penguin-medals-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-green-penguin-medals-480.webp 360w, /assets/images/customer-gallery/customer-green-penguin-medals-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Medals",
    alt: "Three custom penguin medals with green ribbons displayed on a table",
  },
  {
    id: "anchor-challenge-coin",
    src: "/assets/images/customer-gallery/customer-anchor-challenge-coin-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-anchor-challenge-coin-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-anchor-challenge-coin-480.webp 360w, /assets/images/customer-gallery/customer-anchor-challenge-coin-1200.webp 422w",
    width: 422,
    height: 562,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Challenge Coins",
    alt: "Oval anchor and wave enamel challenge coin held in a hand",
  },
  {
    id: "baseball-crossed-bats-pin",
    src: "/assets/images/customer-gallery/customer-baseball-crossed-bats-pin-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-baseball-crossed-bats-pin-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-baseball-crossed-bats-pin-480.webp 360w, /assets/images/customer-gallery/customer-baseball-crossed-bats-pin-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Pins",
    alt: "Front and back of a baseball-themed enamel pin with crossed bats",
  },
  {
    id: "summer-10k-medal",
    src: "/assets/images/customer-gallery/customer-summer-10k-medal-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-summer-10k-medal-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-summer-10k-medal-480.webp 384w, /assets/images/customer-gallery/customer-summer-10k-medal-1200.webp 960w",
    width: 960,
    height: 1200,
    thumbWidth: 384,
    thumbHeight: 480,
    categoryLabel: "Medals",
    alt: "Orange summer 10K medal held in a hand",
  },
  {
    id: "red-axe-challenge-coin",
    src: "/assets/images/customer-gallery/customer-red-axe-challenge-coin-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-red-axe-challenge-coin-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-red-axe-challenge-coin-480.webp 360w, /assets/images/customer-gallery/customer-red-axe-challenge-coin-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Challenge Coins",
    alt: "Round red and black axe challenge coin held in a hand",
  },
  {
    id: "golf-lady-hat-clip",
    src: "/assets/images/customer-gallery/customer-golf-lady-hat-clip-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-golf-lady-hat-clip-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-golf-lady-hat-clip-480.webp 360w, /assets/images/customer-gallery/customer-golf-lady-hat-clip-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Golf Accessories",
    alt: "Round Golf Lady hat clip attached to a navy cap",
  },
  {
    id: "birdie-gang-pins",
    src: "/assets/images/customer-gallery/customer-birdie-gang-pins-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-birdie-gang-pins-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-birdie-gang-pins-480.webp 360w, /assets/images/customer-gallery/customer-birdie-gang-pins-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Pins",
    alt: "Two packaged Birdie Gang enamel pins held in a hand",
  },
  {
    id: "highway-patrol-belt-buckle",
    src: "/assets/images/customer-gallery/customer-highway-patrol-belt-buckle-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-highway-patrol-belt-buckle-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-highway-patrol-belt-buckle-480.webp 360w, /assets/images/customer-gallery/customer-highway-patrol-belt-buckle-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Belt Buckles",
    alt: "Antique brass California Highway Patrol belt buckle held in a hand",
  },
  {
    id: "cap-bottle-opener",
    src: "/assets/images/customer-gallery/customer-cap-bottle-opener-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-cap-bottle-opener-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-cap-bottle-opener-480.webp 360w, /assets/images/customer-gallery/customer-cap-bottle-opener-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Bottle Openers",
    alt: "Metal bottle opener clipped to a black cap",
  },
  {
    id: "embroidered-keychains",
    src: "/assets/images/customer-gallery/customer-embroidered-keychains-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-embroidered-keychains-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-embroidered-keychains-480.webp 311w, /assets/images/customer-gallery/customer-embroidered-keychains-1200.webp 414w",
    width: 414,
    height: 640,
    thumbWidth: 311,
    thumbHeight: 480,
    categoryLabel: "Keychains",
    alt: "White and blue embroidered keychains shown with a packed order",
  },
  {
    id: "round-logo-keychains",
    src: "/assets/images/customer-gallery/customer-round-logo-keychains-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-round-logo-keychains-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-round-logo-keychains-480.webp 360w, /assets/images/customer-gallery/customer-round-logo-keychains-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Keychains",
    alt: "Pair of round logo keychains held in a hand outdoors",
  },
  {
    id: "summer-half-marathon-medal",
    src: "/assets/images/customer-gallery/customer-summer-half-marathon-medal-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-summer-half-marathon-medal-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-summer-half-marathon-medal-480.webp 384w, /assets/images/customer-gallery/customer-summer-half-marathon-medal-1200.webp 960w",
    width: 960,
    height: 1200,
    thumbWidth: 384,
    thumbHeight: 480,
    categoryLabel: "Medals",
    alt: "Colorful summer half marathon medal displayed on dark felt",
  },
  {
    id: "wood-handle-bottle-opener",
    src: "/assets/images/customer-gallery/customer-wood-handle-bottle-opener-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-wood-handle-bottle-opener-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-wood-handle-bottle-opener-480.webp 480w, /assets/images/customer-gallery/customer-wood-handle-bottle-opener-1200.webp 640w",
    width: 640,
    height: 615,
    thumbWidth: 480,
    thumbHeight: 461,
    categoryLabel: "Bottle Openers",
    alt: "Wooden-handle bottle opener held in a hand",
  },
];

const publicFileExists = (src) => existsSync(join(process.cwd(), "public", ...src.split("/").filter(Boolean)));

export const customerPhotos = configuredCustomerPhotos.filter(
  (photo) => publicFileExists(photo.src) && publicFileExists(photo.thumbSrc),
);

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));

const previewIndexes = (count, currentIndex = 0) => {
  if (count <= 1) return [];
  return [-2, -1, 1, 2]
    .map((offset) => (currentIndex + offset + count) % count)
    .filter((index, position, indexes) => index !== currentIndex && indexes.indexOf(index) === position);
};

const renderPreview = (photo, slot, index) => `
          <button class="customer-gallery-preview customer-gallery-preview--${slot + 1}" type="button" data-customer-gallery-preview data-preview-slot="${slot}" data-photo-index="${index}" aria-label="Show ${escapeHtml(photo.alt)} as the main photo">
            <img src="${escapeHtml(photo.thumbSrc)}" width="${photo.thumbWidth}" height="${photo.thumbHeight}" loading="lazy" decoding="async" fetchpriority="low" alt="">
          </button>`;

export const customerPhotoGalleryHtml = (() => {
  if (!customerPhotos.length) return "";

  const mainPhoto = customerPhotos[0];
  const previews = previewIndexes(customerPhotos.length).map((index, slot) => renderPreview(customerPhotos[index], slot, index)).join("");
  const clientData = JSON.stringify(customerPhotos).replaceAll("<", "\\u003c");
  const controlsHidden = customerPhotos.length <= 1 ? " hidden" : "";

  return `
    <section class="section customer-photo-gallery-section" data-customer-photo-gallery aria-labelledby="customer-photo-gallery-title">
      <div class="container customer-photo-gallery-container">
        <div class="center-head customer-photo-gallery-head">
          <span class="brand-kicker" aria-hidden="true"></span>
          <h2 id="customer-photo-gallery-title">Real photos shared by Real Customers</h2>
          <p>Real product photos shared by customers after receiving their orders.</p>
        </div>

        <div class="customer-gallery-carousel" role="region" aria-roledescription="carousel" aria-label="Customer product photos" tabindex="0" data-customer-gallery-carousel>
          <div class="customer-gallery-display" data-customer-gallery-display>
            <figure class="customer-gallery-main">
              <div class="customer-gallery-main-media">
                <img
                  data-customer-gallery-main-image
                  src="${escapeHtml(mainPhoto.src)}"
                  srcset="${escapeHtml(mainPhoto.srcSet)}"
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 56vw, 620px"
                  width="${mainPhoto.width}"
                  height="${mainPhoto.height}"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                  alt="${escapeHtml(mainPhoto.alt)}"
                  style="object-position: ${escapeHtml(mainPhoto.objectPosition || "center")};"
                >
              </div>
              <figcaption>
                <span data-customer-gallery-caption>${escapeHtml(mainPhoto.categoryLabel)}</span>
                <span class="customer-gallery-count" data-customer-gallery-count>Photo 1 of ${customerPhotos.length}</span>
              </figcaption>
            </figure>

            <div class="customer-gallery-preview-rail" data-customer-gallery-preview-rail>${previews}</div>
          </div>

          <div class="customer-gallery-controls"${controlsHidden}>
            <button type="button" class="customer-gallery-control" data-customer-gallery-prev aria-label="Show previous customer photo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button type="button" class="customer-gallery-control customer-gallery-toggle" data-customer-gallery-toggle aria-label="Pause automatic slideshow" aria-pressed="false">
              <svg class="customer-gallery-pause-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7v10M15 7v10"/></svg>
              <svg class="customer-gallery-play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5Z"/></svg>
            </button>
            <button type="button" class="customer-gallery-control" data-customer-gallery-next aria-label="Show next customer photo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <p class="sr-only" data-customer-gallery-status aria-live="polite"></p>
          <script type="application/json" data-customer-gallery-data>${clientData}</script>
        </div>
      </div>
    </section>`;
})();
