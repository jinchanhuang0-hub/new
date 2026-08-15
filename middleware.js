import { NextResponse } from "next/server";
import {
  blogArticles,
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
} from "./app/lib/siteRoutes";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;
  let destination;

  if (pathname === "/product-detail.html" || pathname === "/product-detail") {
    const categoryKey = searchParams.get("product");
    destination = getCategoryPath(
      productCategories[categoryKey] ? categoryKey : "pins",
    );
  }

  if (pathname === "/product-item.html" || pathname === "/product-item") {
    const itemSlug = searchParams.get("item");
    const categoryKey = productItemCategoryKey[itemSlug];
    destination =
      categoryKey && itemSlug
        ? `${getCategoryPath(categoryKey)}/${itemSlug}`
        : "/products";
  }

  if (pathname === "/blog.html") {
    destination = "/blog";
  }

  if (pathname.startsWith("/blog.html/")) {
    const blogSlug = pathname.replace("/blog.html/", "").replace(/\/$/, "");
    destination = blogArticles[blogSlug] ? `/blog/${blogSlug}` : "/blog";
  }

  if (!destination) {
    return NextResponse.next();
  }

  url.pathname = destination;
  url.search = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/product-detail",
    "/product-detail.html",
    "/product-item",
    "/product-item.html",
    "/blog.html",
    "/blog.html/:path*",
  ],
};
