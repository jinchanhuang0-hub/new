const ARTWORK_IMAGE = "/assets/images/pin-artwork-comparison/artwork-850-united-pin-aligned.png";
const FINISHED_IMAGE = "/assets/images/pin-artwork-comparison/finished-850-united-pin-aligned.png";

export function renderArtworkComparison() {
  return `<section class="artwork-comparison" id="artwork-to-finished-pin" aria-labelledby="artwork-comparison-title">
    <div class="container artwork-comparison-container">
      <header class="artwork-comparison-heading">
        <p class="artwork-comparison-kicker">FROM ARTWORK TO FINISHED PIN</p>
        <h2 id="artwork-comparison-title">See your pin design take shape.</h2>
        <p class="artwork-comparison-description">Compare the line artwork with the finished pin, including its enamel colors, metal outlines and dimensional detail.</p>
      </header>
      <div class="artwork-comparison-stage is-loading" data-artwork-comparison style="--comparison-position: 50%;">
        <img class="artwork-comparison-image artwork-comparison-finished" src="${FINISHED_IMAGE}" width="1254" height="1254" loading="lazy" decoding="async" draggable="false" alt="Finished 850 United baseball pin with colored enamel and gold-tone outlines" data-comparison-image="finished">
        <div class="artwork-comparison-artwork-layer">
          <img class="artwork-comparison-image" src="${ARTWORK_IMAGE}" width="1254" height="1254" loading="lazy" decoding="async" draggable="false" alt="Line artwork for the 850 United baseball pin" data-comparison-image="artwork">
        </div>
        <span class="artwork-comparison-label artwork-comparison-label-artwork">ARTWORK</span>
        <span class="artwork-comparison-label artwork-comparison-label-finished">FINISHED PIN</span>
        <span class="artwork-comparison-divider" aria-hidden="true"></span>
        <span class="artwork-comparison-handle" role="slider" tabindex="0" aria-label="Artwork and finished pin comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="Artwork 50%, finished pin 50%">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9.5 7 4.5 12l5 5M14.5 7l5 5-5 5M5 12h14" />
          </svg>
        </span>
      </div>
      <p class="artwork-comparison-instruction">Drag the handle or tap the image to compare.</p>
    </div>
  </section>`;
}
