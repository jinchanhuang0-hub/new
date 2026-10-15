import { existsSync } from "node:fs";
import { join } from "node:path";

const configuredCustomerPhotos = [
  {
    id: "marktstad-run-2026-medal",
    src: "/assets/images/customer-gallery/customer-marktstad-run-2026-medal-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-marktstad-run-2026-medal-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-marktstad-run-2026-medal-480.webp 360w, /assets/images/customer-gallery/customer-marktstad-run-2026-medal-1200.webp 900w",
    width: 900,
    height: 1200,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Medals",
    alt: "Front and reverse of the Marktstad Run 2026 medal with green ribbons",
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
    id: "cap-golf-divot-tool",
    src: "/assets/images/customer-gallery/customer-cap-bottle-opener-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-cap-bottle-opener-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-cap-bottle-opener-480.webp 360w, /assets/images/customer-gallery/customer-cap-bottle-opener-1200.webp 480w",
    width: 480,
    height: 640,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Golf Accessories",
    alt: "Golf divot repair tool with ball marker clipped to a black cap",
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
    id: "tacna-mounted-police-medallion",
    src: "/assets/images/customer-gallery/customer-tacna-mounted-police-medallion-1200.webp",
    thumbSrc: "/assets/images/customer-gallery/customer-tacna-mounted-police-medallion-480.webp",
    srcSet: "/assets/images/customer-gallery/customer-tacna-mounted-police-medallion-480.webp 360w, /assets/images/customer-gallery/customer-tacna-mounted-police-medallion-1200.webp 750w",
    width: 750,
    height: 1000,
    thumbWidth: 360,
    thumbHeight: 480,
    categoryLabel: "Challenge Coins",
    alt: "Oval Tacna Mounted Police medallion with a horse and the phrase Siempre a caballo",
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
    objectFit: "contain",
    objectPosition: "center",
    background: "#e8e0d3",
  },
];

const publicFileExists = (src) => existsSync(join(process.cwd(), "public", ...src.split("/").filter(Boolean)));

export const customerPhotos = configuredCustomerPhotos.filter(
  (photo) => publicFileExists(photo.src) && publicFileExists(photo.thumbSrc),
);

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));

const initialSlotClass = (index, count) => {
  if (index === 0) return "is-current";
  if (index === 1) return "is-next";
  if (index === 2) return "is-next-far";
  if (index === count - 1) return "is-prev";
  if (index === count - 2) return "is-prev-far";
  return "is-offstage";
};

const renderPhoto = (photo, index, count) => {
  const isCurrent = index === 0;
  return `
          <button class="customer-gallery-photo ${initialSlotClass(index, count)}" type="button" data-customer-gallery-photo data-photo-index="${index}" aria-label="${isCurrent ? "Current photo: " : "Show "}${escapeHtml(photo.alt)}${isCurrent ? "" : " as the main photo"}" aria-current="${isCurrent ? "true" : "false"}" tabindex="${isCurrent ? "0" : "-1"}">
            <img
              src="${escapeHtml(isCurrent ? photo.src : photo.thumbSrc)}"
              ${isCurrent ? `srcset="${escapeHtml(photo.srcSet)}" sizes="(max-width: 767px) 80vw, 300px"` : ""}
              width="${isCurrent ? photo.width : photo.thumbWidth}"
              height="${isCurrent ? photo.height : photo.thumbHeight}"
              loading="lazy"
              decoding="async"
              fetchpriority="${isCurrent ? "high" : "low"}"
              alt="${isCurrent ? escapeHtml(photo.alt) : ""}"
              style="object-fit: ${escapeHtml(photo.objectFit || "cover")}; object-position: ${escapeHtml(photo.objectPosition || "center")}; background: ${escapeHtml(photo.background || "#eef2f7")};"
            >
          </button>`;
};

export const customerPhotoGalleryHtml = (() => {
  if (!customerPhotos.length) return "";

  const mainPhoto = customerPhotos[0];
  const slides = customerPhotos.map((photo, index) => renderPhoto(photo, index, customerPhotos.length)).join("");
  const clientData = JSON.stringify(customerPhotos).replaceAll("<", "\\u003c");
  const controlsHidden = customerPhotos.length <= 1 ? " hidden" : "";

  return `
    <section class="section customer-photo-gallery-section" data-customer-photo-gallery aria-labelledby="customer-photo-gallery-title">
      <div class="container customer-photo-gallery-container">
        <div class="center-head customer-photo-gallery-head">
          <span class="customer-photo-gallery-accent" aria-hidden="true"></span>
          <h2 id="customer-photo-gallery-title">Customer Photos</h2>
          <p>See our custom products in photos shared by customers.</p>
        </div>

        <div class="customer-gallery-carousel" role="region" aria-roledescription="carousel" aria-label="Customer product photos" tabindex="0" data-customer-gallery-carousel>
          <div class="customer-gallery-display" data-customer-gallery-display>
            <div class="customer-gallery-stage" data-customer-gallery-stage>${slides}</div>
            <button type="button" class="customer-gallery-control customer-gallery-control--prev" data-customer-gallery-prev aria-label="Show previous customer photo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button type="button" class="customer-gallery-control customer-gallery-control--next" data-customer-gallery-next aria-label="Show next customer photo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <div class="customer-gallery-meta" aria-atomic="true">
            <span data-customer-gallery-caption>${escapeHtml(mainPhoto.categoryLabel)}</span>
            <span aria-hidden="true">&middot;</span>
            <span class="customer-gallery-count" data-customer-gallery-count>01 / ${String(customerPhotos.length).padStart(2, "0")}</span>
          </div>

          <div class="customer-gallery-controls"${controlsHidden}>
            <button type="button" class="customer-gallery-play" data-customer-gallery-play aria-label="Pause automatic photo rotation" aria-pressed="false">
              <svg class="customer-gallery-play-icon customer-gallery-play-icon--pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12M16 6v12"/></svg>
              <svg class="customer-gallery-play-icon customer-gallery-play-icon--play" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6Z"/></svg>
              <span data-customer-gallery-play-label>Pause</span>
            </button>
          </div>

          <p class="sr-only" data-customer-gallery-status aria-live="polite"></p>
          <script type="application/json" data-customer-gallery-data>${clientData}</script>
        </div>
      </div>
    </section>`;
})();
