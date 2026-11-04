import { existsSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "../lib/siteRoutes";

const imageBase = "/assets/images/";
const availableImage = (filename) =>
  existsSync(join(process.cwd(), "public", "assets", "images", filename))
    ? imageBase + filename
    : "";

export const beerTokenImages = {
  cover: availableImage("custom-beer-tokens-serving-credit-v2.webp"),
  credit: availableImage("beer-token-credit-top-up-example.webp"),
  wording: availableImage("beer-token-front-back-wording-menu.webp"),
};

const renderFigure = (src, title, alt, hero = false) =>
  src
    ? '<figure class="blog-article-image' +
      (hero ? ' blog-article-hero-image blog-article-natural-image' : '') +
      '"><img src="' + src +
      '" width="1600" height="900" loading="' + (hero ? 'eager' : 'lazy') +
      '" decoding="async" title="' + title +
      '" alt="' + alt +
      '" style="height:auto;max-height:none;object-fit:contain"></figure>'
    : "";

export const customBeerTokensRedemptionValue = {
  title: "Custom Beer Tokens: Fixed Serving or Credit Value?",
  headline: "Custom Beer Tokens: Fixed Serving or Credit Value?",
  description: "A beer token can cover a specific serving or a fixed amount of credit. Define its value, eligible drinks and any top-up rules before choosing the wording.",
  author: "Sunny Huang",
  authorType: "Person",
  authorUrl: SITE_URL + "/about/sunny-huang",
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  schemaType: "BlogPosting",
  image: beerTokenImages.cover || undefined,
  hideFooterInquiry: true,
  faq: [
    {
      question: "Can one beer token cover a tasting flight?",
      answer: "Yes. Define the flight as a complete offer: sample count, serving size and included selection. Make clear whether guests choose the beers or receive a fixed flight.",
    },
    {
      question: "Can the same tokens be accepted at several taprooms?",
      answer: "Yes, if participating taprooms follow consistent redemption rules. List the locations where tokens are accepted; the brewery name or logo alone does not tell customers which venues participate.",
    },
    {
      question: "Can redeemed metal tokens be used again?",
      answer: "They can be recirculated if your programme allows reuse and the tokens remain suitable. Check condition and legibility, and follow the care instructions for the supplied finish.",
    },
  ],
};

const articleHtml = String.raw`
    <article id="custom-beer-tokens-redemption-value" class="section blog-article-section">
      <div class="blog-article-shell">
        <aside class="blog-article-toc" aria-label="Article contents">
          <strong>In This Guide</strong>
          <nav>
            <a href="#which-beer-token-model-fits-your-menu">Which model fits?</a>
            <a href="#when-does-one-token-for-one-serving-work">One token for one serving</a>
            <a href="#when-is-a-fixed-credit-value-more-flexible">Fixed credit value</a>
            <a href="#how-should-premium-and-alcohol-free-drinks-be-handled">Premium and alcohol-free drinks</a>
            <a href="#what-should-be-written-on-the-token">Token wording</a>
            <a href="#beer-token-faqs">FAQ</a>
            <a href="#plan-your-custom-beer-tokens">Plan your tokens</a>
          </nav>
        </aside>
        <div class="container blog-article blog-article-with-toc">
          <header class="blog-article-header">
            <a class="blog-back-link" href="/blog">Back to Blog</a>
            <h1>Custom Beer Tokens: Fixed Serving or Credit Value?</h1>
            <!--BEER_TOKEN_COVER-->
            <p>A taproom buyer plans to order metal tokens marked “ONE BEER”, while the menu lists different serving sizes and prices. Staff may interpret the promise as a half-pint; customers may expect a full pint.</p>
            <p>Before approving the artwork, decide whether each token covers a specified drink serving or a fixed amount of credit. For custom beer tokens used in taprooms, bars and events, the wording should make that choice clear.</p>
            <div class="blog-quick-answer"><p><strong>Quick Answer</strong></p><p>Fixed-serving tokens cover a defined drink selection and portion. Fixed-credit tokens contribute a stated amount towards eligible drinks, useful when prices vary. Combining tokens or paying a shortfall depends on venue rules. In either model, confirm which drinks qualify and what redemption conditions apply before choosing the wording.</p></div>
          </header>
          <details class="blog-mobile-toc">
            <summary>In This Guide</summary>
            <nav>
              <a href="#which-beer-token-model-fits-your-menu">Which model fits?</a>
              <a href="#when-does-one-token-for-one-serving-work">One token for one serving</a>
              <a href="#when-is-a-fixed-credit-value-more-flexible">Fixed credit value</a>
              <a href="#how-should-premium-and-alcohol-free-drinks-be-handled">Premium and alcohol-free drinks</a>
              <a href="#what-should-be-written-on-the-token">Token wording</a>
              <a href="#beer-token-faqs">FAQ</a>
              <a href="#plan-your-custom-beer-tokens">Plan your tokens</a>
            </nav>
          </details>

          <h2 id="which-beer-token-model-fits-your-menu">Which Beer Token Model Fits Your Menu?</h2>
          <p>Start with what a guest can order. A fixed-serving token promises a defined drink portion; a fixed-credit token contributes a stated amount towards purchases from an agreed selection.</p>
          <div class="blog-table-wrap" role="region" aria-label="Beer token model comparison" tabindex="0"><table class="blog-table">
            <thead><tr><th scope="col">Menu or project condition</th><th scope="col">Starting point</th><th scope="col">Confirm before ordering</th></tr></thead>
            <tbody>
              <tr><td>Selected drinks, all in one serving size</td><td>Fixed serving</td><td>Which drinks qualify</td></tr>
              <tr><td>Beers with substantially different prices</td><td>Fixed credit</td><td>Whether tokens can be combined or topped up</td></tr>
              <tr><td>Admission includes one specified drink</td><td>Fixed serving</td><td>The serving size and eligible selection</td></tr>
              <tr><td>Guests can choose across a broader menu</td><td>Fixed credit</td><td>Eligible items and treatment of unused credit</td></tr>
            </tbody>
          </table></div>
          <p>Review these starting points against your actual menu and service arrangements. A wider selection does not automatically require credit tokens, provided every included drink can be offered under the same clearly defined serving arrangement.</p>

          <h2 id="when-does-one-token-for-one-serving-work">When Does One Token for One Serving Work?</h2>
          <p>A fixed-serving arrangement works when the drink selection and portion are agreed together. A taproom could exchange one token for a half-pint from a named selection of house draught beers. Those beers need not have identical menu prices, provided the venue deliberately includes them in the same offer.</p>
          <p>“ONE BEER” can work as shorthand, but it does not specify a pour size or distinguish draught beer from bottles. Keep the serving and essential restrictions on the token. A menu or redemption notice can identify the individual drinks included, particularly where the house selection changes regularly.</p>
          <p>For its 2026 event, <a href="https://www.teddingtonbeerfestival.co.uk/" target="_blank" rel="noopener noreferrer">Teddington Beer Festival</a> specifies one token per half-pint. For bars ordering beer tokens for ongoing use, another decision follows: how will previously issued tokens be accepted if the selection changes? Agree what those tokens will cover, then update the menu and staff instructions accordingly.</p>

          <h2 id="when-is-a-fixed-credit-value-more-flexible">When Is a Fixed Credit Value More Flexible?</h2>
          <p>A fixed-credit token carries a stated amount towards eligible drinks, independent of their serving size. Combining tokens and paying a shortfall are separate policy choices. <a href="https://www.portrushbeerfest.com/" target="_blank" rel="noopener noreferrer">Portrush’s 2026 festival information</a> specifies a £1 value per token, with participating breweries setting their own drink prices.</p>
          <p><strong>Illustrative example:</strong> a guest uses a £3 token towards an eligible beer priced at £5. If the venue permits part-payment, the guest pays the remaining £2 using an accepted payment method. Where top-ups are not allowed, that token cannot be assumed to cover the higher-priced drink.</p>
          <!--BEER_TOKEN_CREDIT-->
          <p>Confirm the beer token value, combination rules and treatment of unused credit before ordering. Do not assume a balance is refunded, forfeited or returned as change. A plain metal token cannot track partial spending; retaining a balance needs a separate record. When menu prices change, review how the existing credit will be redeemed.</p>

          <h2 id="how-should-premium-and-alcohol-free-drinks-be-handled">How Should Premium and Alcohol-Free Drinks Be Handled?</h2>
          <p>Check limited releases and premium bottles against the current token offer: included, excluded or available with a top-up. Identify exceptions by name or menu category so staff can apply the agreed rule without deciding eligibility from price alone during service.</p>
          <p>Set an explicit policy for alcohol-free alternatives, including the eligible drinks and serving sizes. Do not assume they cost less or automatically qualify as substitutes. If substitution is allowed, state whether the token covers it fully or requires a top-up.</p>
          <p>Keep one short list of included drinks and exceptions for the menu and staff briefing. Check that the token makes the same promise. “ANY DRINK” is misleading if the actual offer excludes part of the menu.</p>

          <h2 id="what-should-be-written-on-the-token">What Should Be Written on the Token?</h2>
          <p>Drink token wording should identify the venue and explain the core offer. If removing “SELECTED” would broaden the promise, adjust the decoration or layout. These illustrative examples combine both faces with supporting menu text; replace the sample policies with the venue’s approved rules.</p>
          <div class="blog-table-wrap" role="region" aria-label="Beer token wording examples" tabindex="0"><table class="blog-table">
            <thead><tr><th scope="col">Information location</th><th scope="col">Fixed-serving example</th><th scope="col">Fixed-credit example</th></tr></thead>
            <tbody>
              <tr><td>Front</td><td><code>VENUE NAME</code></td><td><code>VENUE NAME</code></td></tr>
              <tr><td>Reverse</td><td><code>HALF PINT</code> · <code>SELECTED HOUSE DRAUGHT</code></td><td><code>£3 CREDIT</code> · <code>SELECTED DRINKS</code></td></tr>
              <tr><td>Menu or redemption notice</td><td>One token covers a half-pint of House Lager or House Pale. Guest beers and bottled drinks are excluded.</td><td>For marked drinks only. Combine whole tokens without exceeding the drink price; pay any shortfall by card. No partial token redemption.</td></tr>
            </tbody>
          </table></div>
          <!--BEER_TOKEN_WORDING-->
          <p>Use the venue’s actual currency, serving size and customer-facing language. <code>€3 CREDIT</code> may replace the sterling example where appropriate; a menu’s <code>300 ml</code> serving is a separate option, not a conversion of <code>HALF PINT</code>. Check <a href="/blog/challenge-coin-size-guide">coin size and lettering legibility</a> against the proposed layout rather than assuming every wording combination will fit.</p>
          <p>Make the full rules available before guests obtain tokens and when they order. “Terms apply” cannot repair an overbroad promise. The final brief should contain approved front text, reverse text and the accompanying menu notice, so layout changes preserve what the customer is entitled to receive.</p>

          <h2 id="beer-token-faqs">Beer Token FAQs</h2>
          <div class="blog-faq">
            <details open><summary><h3>Can one beer token cover a tasting flight?</h3></summary><p>Yes. Define the flight as a complete offer: sample count, serving size and included selection. Make clear whether guests choose the beers or receive a fixed flight.</p></details>
            <details><summary><h3>Can the same tokens be accepted at several taprooms?</h3></summary><p>Yes, if participating taprooms follow consistent redemption rules. List the locations where tokens are accepted; the brewery name or logo alone does not tell customers which venues participate.</p></details>
            <details><summary><h3>Can redeemed metal tokens be used again?</h3></summary><p>They can be recirculated if your programme allows reuse and the tokens remain suitable. Check condition and legibility, and follow the care instructions for the supplied finish.</p></details>
          </div>

          <section class="blog-article-cta" aria-labelledby="plan-your-custom-beer-tokens">
            <div class="blog-cta-copy">
              <h2 id="plan-your-custom-beer-tokens">Plan Your Custom Beer Tokens</h2>
              <p>Send Unique Pin your chosen model, logo, proposed wording or menu, quantity, delivery country and postcode, and required arrival date. If you already use tokens, include a photo and current redemption rules. We can help refine the wording, arrange both faces, and suggest suitable dimensions, materials and finishes.</p>
            </div>
            <div class="blog-cta-actions"><a class="btn btn-yellow" href="/contact"><strong>Discuss Your Beer Token Design</strong></a></div>
          </section>
        </div>
      </div>
    </article>`;

export const customBeerTokensRedemptionValueArticleHtml = articleHtml
  .replace("<!--BEER_TOKEN_COVER-->", renderFigure(
    beerTokenImages.cover,
    "Custom Beer Tokens: Serving and Credit Options",
    "Two metal beer tokens marked HALF PINT and £3 CREDIT on a taproom counter.",
    true,
  ))
  .replace("<!--BEER_TOKEN_CREDIT-->", renderFigure(
    beerTokenImages.credit,
    "Beer Token Credit and Top-Up Example",
    "A £3 credit token beside a £5 beer price and a £2 top-up note marked If permitted.",
  ))
  .replace("<!--BEER_TOKEN_WORDING-->", renderFigure(
    beerTokenImages.wording,
    "Beer Token Wording: Front, Reverse and Menu",
    "A wooden VENUE NAME sample and a beer-mug-shaped HALF PINT token beside a redemption notice listing eligible house beers.",
  ));
