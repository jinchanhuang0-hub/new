const htmlRouteMap = [
  ["index.html", "/"],
  ["products.html", "/products"],
  ["product-detail.html", "/product-detail"],
  ["custom.html", "/custom"],
  ["about.html", "/about"],
  ["blog.html", "/blog"],
  ["contact.html", "/contact"]
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return htmlRouteMap.map(([source, destination]) => ({
      source: `/${source}`,
      destination
    }));
  }
};

export default nextConfig;
