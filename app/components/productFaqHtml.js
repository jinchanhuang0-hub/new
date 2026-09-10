const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export function renderProductFaq(items) {
  return `<section id="custom-enamel-pin-faq" class="pin-product-faq" aria-labelledby="pin-faq-title">
    <div class="container pin-product-faq-container">
      <h2 id="pin-faq-title">Custom Enamel Pin FAQ</h2>
      <div class="pin-product-faq-list" data-pin-faq>
        ${items.map(({ question, answer }, index) => `<div class="pin-product-faq-item">
          <h3><button type="button" id="pin-faq-question-${index + 1}" aria-expanded="false" aria-controls="pin-faq-answer-${index + 1}"><span>${escapeHtml(question)}</span><span class="pin-product-faq-icon" aria-hidden="true"></span></button></h3>
          <div id="pin-faq-answer-${index + 1}" class="pin-product-faq-answer" role="region" aria-labelledby="pin-faq-question-${index + 1}" hidden><p>${escapeHtml(answer)}</p></div>
        </div>`).join("")}
      </div>
    </div>
  </section>`;
}
