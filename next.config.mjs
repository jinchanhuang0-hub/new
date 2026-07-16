const htmlRouteMap = [
  ["products.html", "/products"],
  ["product-item.html", "/product-item"],
  ["soft-enamel-pins.html", "/soft-enamel-pins"],
  ["product-detail.html", "/product-detail"],
  ["custom.html", "/custom"],
  ["about.html", "/about"],
  ["blog.html", "/blog"],
  ["faq.html", "/faq"],
  ["contact.html", "/contact"]
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301
      }
    ];
  },
  async rewrites() {
    return htmlRouteMap.map(([source, destination]) => ({
      source: `/${source}`,
      destination
    }));
  }
};

export default nextConfig;
