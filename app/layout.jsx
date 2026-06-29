import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Unique Pin | Custom Metal Gifts Factory",
  description:
    "Unique Pin is a China OEM/ODM custom metal gifts manufacturer for custom enamel pins, medals, challenge coins and promotional metal crafts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
