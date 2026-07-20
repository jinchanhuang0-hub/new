const staticHtmlRedirects = [
  ["products.html", "/products"],
  ["soft-enamel-pins.html", "/soft-enamel-pins"],
  ["custom.html", "/custom"],
  ["about.html", "/about"],
  ["blog.html", "/blog"],
  ["faq.html", "/faq"],
  ["contact.html", "/contact"],
].map(([source, destination]) => ({
  source: `/${source}`,
  destination,
  statusCode: 301,
}));

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301
      },
      ...staticHtmlRedirects,
    ];
  }
};

export default nextConfig;
