import nodemailer from "nodemailer";
import path from "node:path";

export const runtime = "nodejs";

const inquiryTo = process.env.INQUIRY_TO || "ceo@chinauniquepin.com";
const maxAttachmentBytes = 10 * 1024 * 1024;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimitStore = globalThis.__uniquePinInquiryRateLimit || new Map();

globalThis.__uniquePinInquiryRateLimit = rateLimitStore;

const fieldLimits = {
  name: 120,
  email: 254,
  country: 120,
  whatsapp: 80,
  product: 120,
  quantity: 80,
  details: 5000,
  pageUrl: 2048,
  pageTitle: 300,
};

const uploadRules = {
  ".jpg": { mime: ["image/jpeg"], signature: "jpeg" },
  ".jpeg": { mime: ["image/jpeg"], signature: "jpeg" },
  ".png": { mime: ["image/png"], signature: "png" },
  ".pdf": { mime: ["application/pdf"], signature: "pdf" },
  ".ai": { mime: ["application/pdf", "application/postscript", "application/illustrator", "application/octet-stream"], signature: "ai" },
  ".eps": { mime: ["application/postscript", "application/eps", "application/octet-stream"], signature: "postscript" },
  ".psd": { mime: ["image/vnd.adobe.photoshop", "application/octet-stream"], signature: "psd" },
  ".cdr": { mime: ["application/cdr", "application/x-cdr", "application/vnd.corel-draw", "application/octet-stream"], signature: "cdr" },
};

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const getFormValue = (formData, key) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

const getClientAddress = (request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
};

const exceedsRateLimit = (request) => {
  const now = Date.now();
  const clientAddress = getClientAddress(request);
  const recentRequests = (rateLimitStore.get(clientAddress) || [])
    .filter((timestamp) => now - timestamp < rateLimitWindowMs);

  if (recentRequests.length >= rateLimitMaxRequests) {
    rateLimitStore.set(clientAddress, recentRequests);
    return true;
  }

  recentRequests.push(now);
  rateLimitStore.set(clientAddress, recentRequests);

  if (rateLimitStore.size > 1000) {
    for (const [address, timestamps] of rateLimitStore.entries()) {
      if (!timestamps.some((timestamp) => now - timestamp < rateLimitWindowMs)) {
        rateLimitStore.delete(address);
      }
    }
  }

  return false;
};

const hasValidEmailFormat = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getOversizedField = (fields) => Object.entries(fieldLimits)
  .find(([key, limit]) => fields[key]?.length > limit)?.[0];

const matchesSignature = (buffer, signature) => {
  const asciiStart = buffer.subarray(0, 16).toString("ascii");

  if (signature === "jpeg") return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  if (signature === "png") return buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (signature === "pdf") return asciiStart.startsWith("%PDF-");
  if (signature === "postscript") return asciiStart.startsWith("%!PS-Adobe-");
  if (signature === "ai") return asciiStart.startsWith("%PDF-") || asciiStart.startsWith("%!PS-Adobe-");
  if (signature === "psd") return asciiStart.startsWith("8BPS");
  if (signature === "cdr") {
    return asciiStart.startsWith("RIFF") && buffer.subarray(8, 12).toString("ascii").toUpperCase().startsWith("CDR");
  }

  return false;
};

const sanitizeFilename = (filename, extension) => {
  const base = path.basename(filename, extension)
    .normalize("NFKC")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  return `${base || "artwork-file"}${extension}`;
};

const hasSmtpConfig = () => Boolean(
  process.env.SMTP_HOST
  && process.env.SMTP_USER
  && process.env.SMTP_PASS
);

const createTransporter = () => {
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request) {
  if (!hasSmtpConfig()) {
    return Response.json(
      { message: "Email service is not configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS." },
      { status: 503 },
    );
  }

  if (exceedsRateLimit(request)) {
    return Response.json(
      { message: "Too many inquiry attempts. Please wait 10 minutes and try again." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("multipart/form-data")) {
    return Response.json(
      { message: "Invalid inquiry form submission." },
      { status: 415 },
    );
  }

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json(
      { message: "The inquiry form could not be read. Please check the file and try again." },
      { status: 400 },
    );
  }
  const fields = {
    name: getFormValue(formData, "name"),
    email: getFormValue(formData, "email"),
    country: getFormValue(formData, "country"),
    whatsapp: getFormValue(formData, "whatsapp"),
    product: getFormValue(formData, "product"),
    quantity: getFormValue(formData, "quantity"),
    details: getFormValue(formData, "details"),
    pageUrl: getFormValue(formData, "pageUrl"),
    pageTitle: getFormValue(formData, "pageTitle"),
  };

  if (!fields.name || !fields.email || !fields.country || !fields.product) {
    return Response.json(
      { message: "Please complete name, email, country and product type." },
      { status: 400 },
    );
  }

  if (!hasValidEmailFormat(fields.email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const oversizedField = getOversizedField(fields);
  if (oversizedField) {
    return Response.json(
      { message: `The ${oversizedField} field is too long.` },
      { status: 400 },
    );
  }

  const upload = formData.get("artwork");
  const attachments = [];
  if (upload && typeof upload === "object" && typeof upload.arrayBuffer === "function" && upload.size > 0) {
    if (upload.size > maxAttachmentBytes) {
      return Response.json(
        { message: "Uploaded file is larger than 10MB. Please send a smaller file." },
        { status: 400 },
      );
    }

    const originalName = upload.name || "";
    const extension = path.extname(originalName).toLowerCase();
    const rule = uploadRules[extension];
    const contentType = (upload.type || "").toLowerCase();

    if (!rule || (contentType && !rule.mime.includes(contentType))) {
      return Response.json(
        { message: "Unsupported artwork file. Upload JPG, PNG, PDF, AI, EPS, PSD or CDR files only." },
        { status: 400 },
      );
    }

    const content = Buffer.from(await upload.arrayBuffer());
    if (!matchesSignature(content, rule.signature)) {
      return Response.json(
        { message: "The artwork file content does not match its filename. Please export it again and retry." },
        { status: 400 },
      );
    }

    attachments.push({
      filename: sanitizeFilename(originalName, extension),
      content,
      contentType: contentType || rule.mime[0],
    });
  }

  const subjectProduct = fields.product || "Custom Metal Crafts";
  const subject = `New inquiry from ${fields.name} - ${subjectProduct}`;
  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Country / Region", fields.country],
    ["Phone / WhatsApp", fields.whatsapp],
    ["Product Type", fields.product],
    ["Quantity", fields.quantity],
    ["Details", fields.details],
    ["Page", fields.pageUrl || fields.pageTitle],
  ];

  const htmlRows = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `
      <tr>
        <td style="padding:8px 12px;border:1px solid #d8e2f0;font-weight:700;background:#f5f8fc;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;border:1px solid #d8e2f0;">${escapeHtml(value).replaceAll("\n", "<br>")}</td>
      </tr>
    `)
    .join("");

  const text = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  await createTransporter().sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: inquiryTo,
    replyTo: fields.email,
    subject,
    text,
    html: `
      <h2 style="font-family:Arial,sans-serif;color:#0b356d;">New website inquiry</h2>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#1d2a3a;">${htmlRows}</table>
    `,
    attachments,
  });

  return Response.json({ message: "Inquiry sent successfully." });
}
