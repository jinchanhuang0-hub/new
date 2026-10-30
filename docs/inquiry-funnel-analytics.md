# Inquiry funnel analytics — implementation contract

Prepared against `jinchanhuang0-hub/new` main `2d04b162fb81b53c503c4f7a022165ece52fb87b` on 2026-10-30. This adds measurement only; it does not change the inquiry API, mail transport, recipient, attachments, consent policy, or thank-you page.

## Events

| dataLayer event | GA4 event | Parameters | Meaning |
| --- | --- | --- | --- |
| `uccrafts_consult_click` | `consult_click` | `form_id`, `page_type`, `cta_id`, `placement` | Contact navigation or an explicit quote/consultation CTA was activated. |
| `uccrafts_inquiry_submit_click` | `inquiry_submit_click` | `form_id`, `page_type` | An enabled inquiry send button was activated, even if native validation subsequently rejects the form. |
| `uccrafts_inquiry_submit_attempt` | `inquiry_submit_attempt` | `form_id`, `page_type` | Validation passed, the per-form pending lock was acquired and the request is about to start. |
| `uccrafts_inquiry_submit_error` | `inquiry_submit_error` | `form_id`, `page_type`, `error_stage`, `error_code` | A validation round or attempted submission failed. |
| `uccrafts_inquiry_success` (unchanged) | `generate_lead` (unchanged) | `form_id`, `page_type` | Existing API success contract; not proof of final email delivery or lead quality. |

All events use the existing `canSendProductionAnalytics()` gate: `NEXT_PUBLIC_VERCEL_ENV=production`, exact production hostname and Analytics consent granted. Denied/unset consent and nonproduction visits are not queued for later replay. No new storage, credentials, direct GA4 calls, WhatsApp listeners or internal UTM parameters are introduced.

### Fixed dimensions

- `page_type`: existing `blog`, `product`, `contact`, `other` values are unchanged (home remains `other`).
- `form_id`: existing `home_main`, `contact_main`, `product_main`, `product_modal`, `site_footer`, `blog_footer`, `other_main` values are unchanged. On consult events it describes the target form (`contact_main` or `product_modal`), not a completed form.
- `cta_id`: `contact_nav`, `quote_header`, `quote_menu`, `quote_hero`, `quote_product_card`, `quote_product_detail`, `quote_blog`, `quote_section`, `artwork_proof`, `quote_content`.
- `placement`: `header`, `mobile`, `footer`, `mega_menu`, `hero`, `product_card`, `product_detail`, `blog_article`, `section`, `content`. Mobile Contact navigation follows the site's 980 px breakpoint. The existing footer has email/phone links, not a Contact-page link; `footer` supports such a link if later added, without adding UI now.
- `error_stage` / `error_code` pairs:
  - `validation` / `html_invalid`
  - `network` / `network_error`
  - `response` / `invalid_confirmation`
  - `client` / `preparation_failed`
  - `server` / `invalid_request` (400), `attachments_too_large` (413), `rate_limited` (429), `delivery_failed` (502), `service_unavailable` (503), `request_rejected` (other 4xx), `server_error` (other 5xx), `http_error` (other unsuccessful status).

No visitor input, name, email, phone, product free text, message, attachment name/content, raw error, URL, query string, page title, inquiry ID, IP or user identifier is added to these payloads. CTA identification uses structural selectors and a fixed taxonomy, not button text. Analytics allowlists error codes separately from the existing user-facing notice.

## Behavior and boundaries

- A single layout-level delegated listener covers normal pages, blog pages, dynamic DOM and client navigation. It is removed on unmount, so React remounts do not stack listeners.
- Contact navigation is `contact_nav`; explicit quote buttons have `quote_*` IDs. Other navigation, incidental prose Contact links, email/phone links and WhatsApp links are not re-counted here. Existing WhatsApp tracking remains untouched.
- Native validation emits one `invalid` event for each invalid field. Those are coalesced once per form and validation task (including microtask checkpoints between native callbacks). Invalid forms make no API attempt. Native keyboard activation remains supported; programmatic `requestSubmit()` may produce an attempt without a click, by design.
- Disabled buttons and the existing per-form pending lock prevent rapid repeat sends. A failed request unlocks the form for retry; successful forms remain locked until navigation/pagehide. Existing success ID deduplication and the independent 800 ms navigation fallback remain intact.
- Direct visits/reloads of `/thank-you` do not create success events. `generate_lead` must continue to be bound only to the existing success custom event, never to click, attempt, automatic form submit or thank-you page view.
- Event counts are not guaranteed email counts. Consent, blockers and network loss can reduce analytics coverage. An accepted email send is not proof of inbox arrival. No server-side idempotency or inquiry backup database is added in this change.

## GTM / GA4 handoff (publication requires approval)

Create exact-match custom-event triggers for the four new dataLayer names. Map each to its GA4 name above using the existing Google tag, with only its listed parameters. Use Version 2 Data Layer Variables. Keep consent checks, existing success/WhatsApp tags and Google tag untouched. Do not publish a second tag for the same event. Register event-scoped dimensions only if needed for reports; do not mark send clicks/attempts/errors as successful leads.

Traffic source analysis stays native to GA4: session acquisition dimensions for visits, first-user dimensions for first acquisition, with success events as the conversion outcome. Add UTM tags only to genuine external campaigns, not internal site links. Existing automatic GA4 page URL/query collection must be reviewed separately; this patch does not claim to sanitize all GA4 automatic fields.

## Verification

Run:

```sh
node --test tests/*.test.mjs
NEXT_PUBLIC_VERCEL_ENV=production NEXT_TELEMETRY_DISABLED=1 npm run build
git diff --check
```

Local preparation: 14/14 Node tests passed, including mocked API mail delivery, invalid inputs, network and HTTP errors, consent/nonproduction gates, rapid repeat requests, retry unlocking, success deduplication and navigation fallback. Production Next.js compilation/type checks and generation of 359 routes passed on a text-source snapshot (large static media were not downloaded).

Additional JSDOM checks against the built contact/home/blog/product/thank-you HTML passed 10/10 with all requests mocked: native validation, safe 502 errors, network errors, repeat clicks, success navigation, Contact/quote classification, mobile placement, blog footer, product modal target and denied consent. Chromium could not start in the isolated execution environment; full real-browser, Tag Assistant, GA4 DebugView/Realtime, deployed assets and true mail receipt remain unverified. No real inquiry was sent.

## Release / rollback

1. Re-read remote main and apply the narrow patch; do not overwrite unrelated files. Re-run tests/build on a full checkout. Resolve the observed Vercel source discrepancy (`3c673e6d608132c2296fb290c423907a8205628b`, not accessible in this GitHub repository) before choosing a production deployment target.
2. After explicit publication approval, create an isolated remote feature branch and draft PR against main. Validate exact commit/CI; merge/deployment and GTM publication require the approved release path, not merely local preparation.
3. Verify one production GTM container, production environment gate and consent behavior. Use an explicitly approved end-to-end test if a real mail submission is needed. Then publish the reviewed GTM version and verify counts, without representing mock tests as actual GA4 ingestion.
4. Roll back the narrow code change and/or restore the prior GTM container version. Existing success and WhatsApp contracts are unaffected by this patch.
