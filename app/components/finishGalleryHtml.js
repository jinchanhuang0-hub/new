const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

const renderFabricationOptionGrid = ({ id, items, imageScale = "cropped", desktopColumns }) => `
      <ul class="finish-gallery-grid" id="${escapeHtml(id)}" data-image-scale="${escapeHtml(imageScale)}"${[5, 6].includes(desktopColumns) ? ` data-desktop-columns="${desktopColumns}"` : ""}>
        ${items.map(item => `<li class="finish-gallery-card" data-finish-id="${escapeHtml(item.id)}"${item.imageTopInset > 0 ? ` style="--image-top-inset: ${Number(item.imageTopInset) / Number(item.width) * 100}%"` : ""}>
          <figure>
            <div class="finish-gallery-media"><img src="${escapeHtml(item.image)}" srcset="${[256, 384, 640, 750].map(width => `/_next/image?url=${encodeURIComponent(item.image)}&amp;w=${width}&amp;q=90 ${width}w`).join(", ")}, ${escapeHtml(item.image)} ${item.width}w" sizes="(max-width: 767px) calc((100vw - 44px) / 2), (max-width: 1023px) calc((100vw - 64px) / 3), calc((65vw - 72px) / 7)" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" alt="${escapeHtml(item.alt)}"></div>
            <figcaption>${escapeHtml(item.label)}</figcaption>
          </figure>
        </li>`).join("")}
      </ul>`;

const renderFabricationOptionSection = (
  { id, title, description, items, imageScale, gridId, desktopColumns },
  { isTabbed = false, isActive = false } = {},
) => `
      <div class="finish-gallery-option-section" id="${escapeHtml(id)}-panel"${isTabbed ? ` role="tabpanel" aria-labelledby="${escapeHtml(id)}-tab" tabindex="0"${isActive ? "" : " hidden"}` : ` aria-labelledby="${escapeHtml(id)}-title"`}>
        <div class="finish-gallery-subheading">
          <h3 id="${escapeHtml(id)}-title"${isTabbed ? ` aria-label="${escapeHtml(title)}"` : ""}>${isTabbed ? "" : escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
        ${renderFabricationOptionGrid({ id: gridId || `${id}-grid`, items, imageScale, desktopColumns })}
      </div>`;

// Match the site's server-rendered HTML sections; keep every fabrication grid in SSR.
export function renderFinishGallery(
  { id, title, description, subheading, subdescription, items },
  additionalSections = [],
) {
  const sections = [
    {
      id: `${id}-plating-options`,
      gridId: `${id}-grid`,
      title: subheading,
      description: subdescription,
      items,
      imageScale: "cropped",
    },
    ...additionalSections,
  ];

  const hasTabs = sections.length > 1;
  const renderedSections = sections
    .map((section, index) => renderFabricationOptionSection(section, {
      isTabbed: hasTabs,
      isActive: index === 0,
    }))
    .join("");

  const tabbedContent = hasTabs
    ? `<div class="finish-gallery-tabs" data-fabrication-tabs>
        <div class="finish-gallery-tablist" role="tablist" aria-label="Fabrication option categories">
          ${sections.map((section, index) => `<button class="finish-gallery-tab" type="button" role="tab" id="${escapeHtml(section.id)}-tab" aria-controls="${escapeHtml(section.id)}-panel" aria-selected="${index === 0 ? "true" : "false"}" tabindex="${index === 0 ? "0" : "-1"}">${escapeHtml(section.title)}</button>`).join("")}
        </div>
        <div class="finish-gallery-tabpanels">${renderedSections}</div>
      </div>`
    : renderedSections;

  return `<section class="finish-gallery" id="${escapeHtml(id)}" data-finish-gallery aria-labelledby="${escapeHtml(id)}-title">
    <div class="container">
      <div class="finish-gallery-heading">
        <h2 id="${escapeHtml(id)}-title">${escapeHtml(title)}</h2>
        <p>${escapeHtml(description)}</p>
      </div>
      ${tabbedContent}
    </div>
  </section>`;
}
