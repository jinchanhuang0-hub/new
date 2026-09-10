const ARTWORK_IMAGE = "/assets/images/pin-artwork-comparison/artwork-850-united-pin-aligned.png";
const FINISHED_IMAGE = "/assets/images/pin-artwork-comparison/finished-850-united-pin-aligned.png";

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export function renderArtworkComparison(options = {}) {
  const config = Object.fromEntries(Object.entries({
    id: "artwork-to-finished-pin",
    titleId: "artwork-comparison-title",
    kicker: "FROM ARTWORK TO FINISHED PIN",
    title: "See your pin design take shape.",
    description: "Compare the line artwork with the finished pin, including its enamel colors, metal outlines and dimensional detail.",
    artworkImage: ARTWORK_IMAGE,
    finishedImage: FINISHED_IMAGE,
    artworkAlt: "Line artwork for the 850 United baseball pin",
    finishedAlt: "Finished 850 United baseball pin with colored enamel and gold-tone outlines",
    finishedLabel: "FINISHED PIN",
    finishedNoun: "finished pin",
    ...options,
  }).map(([key, value]) => [key, escapeHtml(value)]));
  return `<section class="artwork-comparison" id="${config.id}" aria-labelledby="${config.titleId}">
    <div class="container artwork-comparison-container">
      <header class="artwork-comparison-heading">
        <p class="artwork-comparison-kicker">${config.kicker}</p>
        <h2 id="${config.titleId}">${config.title}</h2>
        <p class="artwork-comparison-description">${config.description}</p>
      </header>
      <div class="artwork-comparison-stage is-loading" data-artwork-comparison data-finished-noun="${config.finishedNoun}" style="--comparison-position: 50%;">
        <img class="artwork-comparison-image artwork-comparison-finished" src="${config.finishedImage}" width="1254" height="1254" loading="lazy" decoding="async" draggable="false" alt="${config.finishedAlt}" data-comparison-image="finished">
        <div class="artwork-comparison-artwork-layer">
          <img class="artwork-comparison-image" src="${config.artworkImage}" width="1254" height="1254" loading="lazy" decoding="async" draggable="false" alt="${config.artworkAlt}" data-comparison-image="artwork">
        </div>
        <span class="artwork-comparison-label artwork-comparison-label-artwork">ARTWORK</span>
        <span class="artwork-comparison-label artwork-comparison-label-finished">${config.finishedLabel}</span>
        <span class="artwork-comparison-divider" aria-hidden="true"></span>
        <span class="artwork-comparison-handle" role="slider" tabindex="-1" aria-disabled="true" aria-label="Artwork and ${config.finishedNoun} comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="Artwork 50%, ${config.finishedNoun} 50%">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9.5 7 4.5 12l5 5M14.5 7l5 5-5 5M5 12h14" />
          </svg>
        </span>
      </div>
      <p class="artwork-comparison-instruction">Drag the handle or tap the image to compare.</p>
    </div>
  </section>`;
}
