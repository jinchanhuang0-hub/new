"use client";

import { useEffect } from "react";

export default function BlogArticleRepair({ slug }) {
  useEffect(() => {
    let cancelled = false;

    const restoreArticleMain = async () => {
      const article = document.getElementById(slug);
      if (article?.textContent?.trim().length > 100) return;

      const currentMain = document.querySelector("main");
      if (!currentMain || currentMain.textContent.trim() !== "<") return;

      try {
        const response = await fetch(window.location.pathname, { cache: "reload" });
        const html = await response.text();
        if (cancelled) return;

        const doc = new DOMParser().parseFromString(html, "text/html");
        const restoredMain = doc.querySelector("main");
        if (restoredMain?.textContent?.trim().length > 100) {
          currentMain.replaceWith(document.importNode(restoredMain, true));
        }
      } catch {
        // Leave the server-rendered output in place if the repair fetch fails.
      }
    };

    window.requestAnimationFrame(() => {
      window.setTimeout(restoreArticleMain, 0);
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return null;
}
