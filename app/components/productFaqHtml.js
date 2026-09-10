const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export function renderProductFaq(items, {
  id = "custom-enamel-pin-faq",
  idPrefix = "pin-faq",
  title = "Custom Enamel Pin FAQ",
} = {}) {
  const prefix = escapeHtml(idPrefix);
  return `<section id="${escapeHtml(id)}" class="pin-product-faq" aria-labelledby="${prefix}-title">
    <div class="container pin-product-faq-container">
      <h2 id="${prefix}-title">${escapeHtml(title)}</h2>
      <div class="pin-product-faq-list" data-pin-faq>
        ${items.map(({ question, answer }, index) => `<div class="pin-product-faq-item">
          <h3><button type="button" id="${prefix}-question-${index + 1}" aria-expanded="false" aria-controls="${prefix}-answer-${index + 1}"><span>${escapeHtml(question)}</span><span class="pin-product-faq-icon" aria-hidden="true"></span></button></h3>
          <div id="${prefix}-answer-${index + 1}" class="pin-product-faq-answer" role="region" aria-labelledby="${prefix}-question-${index + 1}" hidden><p>${escapeHtml(answer)}</p></div>
        </div>`).join("")}
      </div>
    </div>
  </section>`;
}
