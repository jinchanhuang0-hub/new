"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const warmedImages = new Set();
const transparentPlaceholder = "data:image/gif;base64,";

const requestIdle = (callback) => {
  if (typeof window.requestIdleCallback === "function") {
    return window.requestIdleCallback(callback, { timeout: 1600 });
  }

  return window.setTimeout(callback, 350);
};

const cancelIdle = (id) => {
  if (typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(id);
    return;
  }

  window.clearTimeout(id);
};

const normalizeImageUrl = (value) => {
  if (!value || value.startsWith("data:") || value.startsWith(transparentPlaceholder)) return "";

  try {
    return new URL(value, window.location.href).href;
  } catch {
    return "";
  }
};

const collectPageImages = () => {
  const sources = new Set();

  document.querySelectorAll("img").forEach((image) => {
    [
      image.dataset.src,
      image.currentSrc,
      image.getAttribute("src"),
    ].forEach((source) => {
      const normalized = normalizeImageUrl(source);
      if (normalized) sources.add(normalized);
    });
  });

  document.querySelectorAll("[data-video-poster], video[poster]").forEach((node) => {
    const normalized = normalizeImageUrl(node.dataset.videoPoster || node.getAttribute("poster"));
    if (normalized) sources.add(normalized);
  });

  return [...sources].filter((source) => !warmedImages.has(source));
};

const warmImage = (source) => {
  warmedImages.add(source);

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "image";
  link.href = source;
  document.head.appendChild(link);

  const image = new Image();
  image.decoding = "async";
  image.src = source;
};

export default function ImagePreloader() {
  const pathname = usePathname();

  useEffect(() => {
    let idleId = 0;
    let cancelled = false;
    const queue = collectPageImages();

    const warmNextBatch = () => {
      if (cancelled || !queue.length) return;
      queue.splice(0, 4).forEach(warmImage);
      idleId = requestIdle(warmNextBatch);
    };

    idleId = requestIdle(warmNextBatch);

    return () => {
      cancelled = true;
      if (idleId) cancelIdle(idleId);
    };
  }, [pathname]);

  return null;
}
