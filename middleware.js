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

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  let destination;
  let clearSearch = false;

  if (productCategoryRedirects[normalizedPathname]) {
    destination = productCategoryRedirects[normalizedPathname];
    clearSearch = true;
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
  matcher: ["/((?!_next/static|_next/image|assets/|favicon.ico).*)"],
};
