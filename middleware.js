import { NextResponse } from "next/server";
import {
  blogArticles,
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
} from "./app/lib/siteRoutes";

const productCategoryRedirects = {
  "/product-category/custom-challenge-coins": "/products/custom-challenge-coins",
  "/product-category/custom-lapel-pins": "/products/custom-enamel-pins",
  "/product-category/custom-medals": "/products/custom-medals",
  "/product-category/custom-keychains": "/products/custom-metal-keychains",
  "/product-category/custom-belt-buckles": "/products/custom-belt-buckles",
  "/product-category/custom-golf-ball-markers": "/products/custom-golf-accessories",
};

const legacyBlogRedirects = {
  "/blog/custom-challenge-coin-size-attachment-guide": "/blog/challenge-coin-size-guide",
};

const legacyPatchPath = "/products/custom-patchs";
const canonicalPatchPath = "/products/custom-patches";

const renamedPinImages = new Map([
  ["/assets/images/blog-custom-enamel-pins-no-moq-products.png", "/assets/images/custom-baseball-enamel-pin-samples.png"],
  ["/assets/images/blog-custom-enamel-pins-no-moq-detail-sample.jpg", "/assets/images/custom-enamel-pin-raised-metal-detail.jpg"],
  ["/assets/images/blog-custom-enamel-pins-no-moq-artwork-proofing.jpg", "/assets/images/custom-enamel-pin-artwork-proofing.jpg"],
]);

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  const optimizedImage = normalizedPathname === "/_next/image";
  const newImagePath = renamedPinImages.get(optimizedImage ? searchParams.get("url") : normalizedPathname);
  if (newImagePath) {
    if (optimizedImage) url.searchParams.set("url", newImagePath);
    else url.pathname = newImagePath;
    return NextResponse.redirect(url, 301);
  }
  let destination;
  let clearSearch = false;

  if (productCategoryRedirects[normalizedPathname]) {
    destination = productCategoryRedirects[normalizedPathname];
    clearSearch = true;
  }

  if (legacyBlogRedirects[normalizedPathname]) {
    destination = legacyBlogRedirects[normalizedPathname];
    clearSearch = true;
  }

  if (
    normalizedPathname === legacyPatchPath ||
    normalizedPathname.startsWith(`${legacyPatchPath}/`)
  ) {
    destination = normalizedPathname.replace(legacyPatchPath, canonicalPatchPath);
  }

  if (pathname === "/product-detail.html" || pathname === "/product-detail") {
    const categoryKey = searchParams.get("product");
    destination = getCategoryPath(
      productCategories[categoryKey] ? categoryKey : "pins",
    );
    clearSearch = true;
  }

  if (pathname === "/product-item.html" || pathname === "/product-item") {
    const itemSlug = searchParams.get("item");
    const categoryKey = productItemCategoryKey[itemSlug];
    if (categoryKey && itemSlug) {
      destination = `${getCategoryPath(categoryKey)}/${itemSlug}`;
      clearSearch = true;
    }
  }

  if (pathname === "/blog.html") {
    destination = "/blog";
    clearSearch = true;
  }

  if (pathname.startsWith("/blog.html/")) {
    const blogSlug = pathname.replace("/blog.html/", "").replace(/\/$/, "");
    destination = blogArticles[blogSlug] ? `/blog/${blogSlug}` : "/blog";
    clearSearch = true;
  }

  if (!destination && pathname.length > 1 && pathname.endsWith("/")) {
    destination = normalizedPathname;
  }

  if (!destination) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(destination, request.url);
  if (!clearSearch) {
    redirectUrl.search = url.search;
  }
  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|assets/|favicon.ico).*)",
    "/assets/images/blog-custom-enamel-pins-no-moq-:file",
    {
      source: "/_next/image",
      has: [{ type: "query", key: "url", value: "/assets/images/blog-custom-enamel-pins-no-moq-.*" }],
    },
  ],
};
