import { NextResponse } from "next/server";
import {
  getCategoryPath,
  productCategories,
  productItemCategoryKey,
} from "./app/lib/siteRoutes";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;
  let destination;

  if (pathname === "/product-detail.html") {
    const categoryKey = searchParams.get("product");
    destination = getCategoryPath(
      productCategories[categoryKey] ? categoryKey : "pins",
    );
  }

  if (pathname === "/product-item.html") {
    const itemSlug = searchParams.get("item");
    const categoryKey = productItemCategoryKey[itemSlug];
    destination =
      categoryKey && itemSlug
        ? `${getCategoryPath(categoryKey)}/${itemSlug}`
        : "/products";
  }

  if (!destination) {
    return NextResponse.next();
  }

  url.pathname = destination;
  url.search = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/product-detail.html", "/product-item.html"],
};
