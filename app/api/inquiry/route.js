import nodemailer from "nodemailer";

export const runtime = "nodejs";

const inquiryTo = process.env.INQUIRY_TO || "ceo@chinauniquepin.com";
const maxAttachmentBytes = 10 * 1024 * 1024;

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

  const formData = await request.formData();
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

  const upload = formData.get("artwork");
  const attachments = [];
  if (upload && typeof upload === "object" && typeof upload.arrayBuffer === "function" && upload.size > 0) {
    if (upload.size > maxAttachmentBytes) {
      return Response.json(
        { message: "Uploaded file is larger than 10MB. Please send a smaller file." },
        { status: 400 },
      );
    }

    attachments.push({
      filename: upload.name || "artwork-file",
      content: Buffer.from(await upload.arrayBuffer()),
      contentType: upload.type || undefined,
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
