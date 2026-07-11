# Unique Pin Website

Next.js B2B website for Unique Pin custom metal crafts, including homepage, products, product detail template, custom process, about, blog and contact pages.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Inquiry Email

Inquiry forms submit to `/api/inquiry` and send email to `ceo@chinauniquepin.com` by default.
Set these environment variables on the server or hosting platform:

```bash
INQUIRY_TO=ceo@chinauniquepin.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM="Unique Pin <your-smtp-username>"
```
