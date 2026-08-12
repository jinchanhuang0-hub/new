const staticHtmlRedirects = [
  ["products.html", "/products"],
  ["soft-enamel-pins.html", "/products/custom-enamel-pins"],
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
  async headers() {
    return [
      {
        source: "/assets/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/script.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301
      },
      {
        source: "/soft-enamel-pins",
        destination: "/products/custom-enamel-pins",
        statusCode: 301
      },
      ...staticHtmlRedirects,
    ];
  }
};

export default nextConfig;
