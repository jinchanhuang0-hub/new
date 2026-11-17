import test from 'node:test';
import assert from 'node:assert/strict';
import { hasAdvertisingConsent } from '../app/lib/analyticsGate.mjs';
import { reportInquirySuccess } from '../app/lib/inquiryClient.mjs';

function setup(ads) {
  process.env.NEXT_PUBLIC_VERCEL_ENV = 'production';
  const calls = [], events = [], timers = [];
  let navigations = 0;
  globalThis.window = {
    location: { hostname: 'uccrafts.com', assign() { navigations++; } },
    localStorage: { getItem: key => key === 'uccrafts_ads_consent' ? ads : 'granted' },
    dataLayer: events,
    gtag: (...args) => calls.push(args),
    setTimeout: (fn, ms) => { timers.push({fn,ms}); return timers.length; },
    clearTimeout() {},
  };
  const form = { classList: { contains: () => false }, closest: () => null };
  return { calls, events, timers, form, navigations: () => navigations };
}

test('existing Analytics consent never implies advertising consent', () => {
  for (const ads of [null, 'denied']) {
    const t = setup(ads);
    assert.equal(hasAdvertisingConsent(), false);
    reportInquirySuccess({inquiryId: `analytics-${ads}`, form:t.form, pathname:'/contact'});
    assert.equal(t.calls.length, 0);
    assert.equal(t.events.length, 1);
    t.events[0].eventCallback();
    assert.equal(t.navigations(), 1);
  }
});

test('Ads opt-in reports one conversion with dedupe ID and waits for both callbacks', () => {
  const t = setup('granted');
  const request = {inquiryId:'ads-unique-1', form:t.form, pathname:'/contact'};
  reportInquirySuccess(request);
  assert.equal(t.calls.length,1);
  const [command,name,payload] = t.calls[0];
  assert.equal(command,'event'); assert.equal(name,'conversion');
  assert.equal(payload.transaction_id,'ads-unique-1');
  assert.equal(payload.send_to,'AW-18191902935/UsHfCMCF0bcdENfRyeJD');
  t.events[0].eventCallback();
  assert.equal(t.navigations(),0);
  payload.event_callback();
  assert.equal(t.navigations(),1);
  t.timers[0].fn();
  assert.equal(t.navigations(),1);
  reportInquirySuccess({...request,navigate:()=>{}});
  assert.equal(t.calls.length,1);
});

test('blocked Ads never prevents successful form navigation', () => {
  const t = setup('granted');
  reportInquirySuccess({inquiryId:'blocked-ads',form:t.form,pathname:'/contact'});
  t.events[0].eventCallback();
  assert.equal(t.navigations(),0);
  assert.equal(t.timers[0].ms,2000);
  t.timers[0].fn();
  assert.equal(t.navigations(),1);
});
