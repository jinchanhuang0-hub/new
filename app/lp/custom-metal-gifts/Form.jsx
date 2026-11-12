'use client';
import { useRef, useState } from 'react';
import { reportInquirySuccess } from '../../lib/inquiryClient.mjs';
import { reportInquirySubmitClick, reportInquirySubmitAttempt, reportInquiryError, reportInquiryValidationError, inquiryHttpErrorCode } from '../../lib/inquiryAnalytics.mjs';
import styles from './page.module.css';

export default function Form() {
  const [status, setStatus] = useState(''); const [busy, setBusy] = useState(false); const lock = useRef(false);
  const [files, setFiles] = useState([]);
  function addFiles(e) {
    const next = [...files, ...Array.from(e.target.files)]; e.target.value = '';
    if (next.length > 3 || next.reduce((n,f) => n + f.size, 0) > 4 * 1024 * 1024 || next.some(f => !/\.(jpe?g|png|pdf|ai|eps|psd|cdr)$/i.test(f.name))) { reportInquiryValidationError(e.target.form); setStatus('Choose up to 3 JPG, PNG, PDF, AI, EPS, PSD or CDR files, 4 MB total.'); return; }
    setFiles(next); setStatus('');
  }
  async function submit(e) {
    e.preventDefault(); if (lock.current) return;
    const form = e.currentTarget;
    if (files.length > 3 || files.reduce((n,f) => n + f.size, 0) > 4 * 1024 * 1024 || files.some(f => !/\.(jpe?g|png|pdf|ai|eps|psd|cdr)$/i.test(f.name))) { setStatus('Choose up to 3 JPG, PNG, PDF, AI, EPS, PSD or CDR files, 4 MB total.'); return; }
    lock.current = true; setBusy(true); setStatus('Sending...'); let errorCode = 'preparation_failed'; const controller = new AbortController(); let timeout;
    try { const data = new FormData(form); data.delete('artwork'); files.forEach(file => data.append('artwork', file)); data.set('pageUrl', location.origin + location.pathname); data.set('pageTitle', document.title);
      reportInquirySubmitAttempt(form); errorCode = 'network_error';
      timeout = setTimeout(() => controller.abort(), 30000);
      const response = await fetch('/api/inquiry', { method: 'POST', body: data, signal: controller.signal }); errorCode = response.ok ? 'invalid_confirmation' : inquiryHttpErrorCode(response.status); const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success !== true || typeof result.inquiry_id !== 'string' || !result.inquiry_id) throw new Error(response.ok ? 'Confirmation was incomplete. Please contact us before submitting again.' : result.message || 'Unable to send. Please try again.');
      setStatus('Inquiry sent. Redirecting...'); reportInquirySuccess({ inquiryId: result.inquiry_id, form, pathname: location.pathname });
    } catch (error) { reportInquiryError(form, errorCode); setStatus(error.name === 'AbortError' ? 'The request timed out. Please contact us before submitting again.' : errorCode === 'network_error' ? 'Unable to connect. Please check your connection or contact us before submitting again.' : error.message || 'Unable to send. Please try again.'); lock.current = false; setBusy(false); } finally { clearTimeout(timeout); }
  }
  return <form className={styles.form} method="post" action="/api/inquiry" encType="multipart/form-data" onSubmit={submit} onInvalid={e => reportInquiryValidationError(e.currentTarget)}><div className={styles.fields}>
    <label><span className={styles.srOnly}>Name</span><input name="name" placeholder="Name" required maxLength={120}/></label><label><span className={styles.srOnly}>Email</span><input name="email" type="email" placeholder="Email" required maxLength={254}/></label>
    <label><span className={styles.srOnly}>Country / Region</span><input name="country" placeholder="Country / Region" required maxLength={120}/></label><label><span className={styles.srOnly}>Phone Number</span><input name="whatsapp" type="tel" placeholder="Phone Number" maxLength={80}/></label><label><span className={styles.srOnly}>Product Type</span><select name="product" required defaultValue=""><option value="">Product Type</option>{['Fridge Magnets','Lapel Pins','Medals','Bottle Openers','Belt Buckles','Golf Accessories','Challenge Coins','Cufflinks & Tie Clips','Keychains','Patches','Others','Other'].map(x => <option key={x}>{x}</option>)}</select></label>
    <label><span className={styles.srOnly}>Quantity</span><input name="quantity" placeholder="Quantity" maxLength={80}/></label></div><label>What can we help you with?<textarea name="details" placeholder="Notes, Comments, etc." maxLength={5000} rows={2}/></label>
    <div><strong>Upload Artwork for a Free Proof</strong><label className={styles.uploadBox}><input name="artwork" type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.psd,.cdr" aria-label="Upload artwork" aria-describedby="upload-help upload-status" onChange={addFiles} /><span aria-hidden="true" className={styles.uploadIcon}>↑</span><span>Upload artwork or reference files for a free proof</span></label><small id="upload-help">Add up to 3 files, together or one at a time. Maximum 4 MB combined. Uploads are optional. For larger files, submit your inquiry without attachments, then email the original design files to our sales team when they contact you. Accepted formats: JPG, PNG, PDF, AI, EPS, PSD, CDR.</small><div id="upload-status" aria-live="polite">{files.map((file,i) => <div key={`${file.name}-${i}`}>{file.name} <button type="button" onClick={() => setFiles(files.filter((_,index) => index !== i))} aria-label={`Remove ${file.name}`}>Remove</button></div>)}</div></div>
    <button className={styles.button} disabled={busy} type="submit" onClick={e => reportInquirySubmitClick(e.currentTarget.form)}>{busy ? 'Sending...' : 'Get a Free Quote'}</button><p className={styles.formNote}>We use the information you submit to respond to your inquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p><p role="status" aria-live="polite">{status}</p></form>;
}
