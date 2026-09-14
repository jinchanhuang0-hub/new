"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MedalComparisonEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const section = document.getElementById("artwork-to-finished-medal");
    const stage = section?.querySelector("[data-artwork-comparison]");
    if (!stage) return;
    const slider = stage.querySelector('[role="slider"]');
    const instruction = section.querySelector(".artwork-comparison-instruction");
    const images = [...stage.querySelectorAll("[data-comparison-image]")];
    const artworkLabel = stage.querySelector(".artwork-comparison-label-artwork");
    const finishedLabel = stage.querySelector(".artwork-comparison-label-finished");
    let alive = true;
    let position = 50;
    let pointer = null;
    const status = { artwork: "pending", finished: "pending" };
    const ready = () => Object.values(status).every((s) => s === "ready");
    slider.setAttribute("aria-label", "Compare medal artwork and finished medal");
    slider.setAttribute("aria-orientation", "horizontal");
    const labelFits = (label, space) => {
      label.hidden = false;
      return space >= label.offsetWidth + (innerWidth < 768 ? 20 : 28);
    };
    const updatePosition = (value) => {
      position = Math.max(0, Math.min(100, value));
      stage.style.setProperty("--comparison-position", `${position}%`);
      slider.setAttribute("aria-valuenow", String(Math.round(position)));
      slider.setAttribute("aria-valuetext", `${Math.round(position)}% artwork visible`);
      const width = stage.getBoundingClientRect().width;
      const showArtwork = status.artwork === "ready" && (!ready() || labelFits(artworkLabel, width * position / 100));
      const showFinished = status.finished === "ready" && (!ready() || labelFits(finishedLabel, width * (100-position) / 100));
      artworkLabel.hidden = !showArtwork;
      finishedLabel.hidden = !showFinished;
    };
    const updateLoading = () => {
      if (!alive) return;
      const a = status.artwork === "ready", f = status.finished === "ready";
      const pending = Object.values(status).includes("pending");
      stage.classList.toggle("is-ready", ready());
      stage.classList.toggle("is-loading", pending);
      stage.classList.toggle("is-artwork-missing", !a && f);
      stage.classList.toggle("is-finished-missing", a && !f);
      stage.classList.toggle("is-unavailable", !a && !f);
      slider.tabIndex = ready() ? 0 : -1;
      slider.setAttribute("aria-disabled", String(!ready()));
      instruction.textContent = ready() ? "Drag the handle or tap the image to compare."
        : pending ? "Loading comparison images…"
          : a || f ? "Comparison temporarily unavailable. Showing the available image."
            : "Comparison images could not be loaded. Please refresh to try again.";
      updatePosition(position);
    };
    const decode = async (image) => {
      const key = image.dataset.comparisonImage;
      try {
        await image.decode();
        if (!alive) return;
        status[key] = "ready";
      } catch {
        if (!alive) return;
        status[key] = "error";
      }
      updateLoading();
    };
    const load = (event) => decode(event.currentTarget);
    const error = (event) => {
      status[event.currentTarget.dataset.comparisonImage] = "error";
      updateLoading();
    };
    const fromX = (x) => {
      const bounds = stage.getBoundingClientRect();
      updatePosition((x-bounds.left)/bounds.width*100);
    };
    const cancel = () => {
      const id = pointer?.id;
      pointer = null;
      stage.classList.remove("is-dragging");
      if (id !== undefined && stage.hasPointerCapture(id)) stage.releasePointerCapture(id);
    };
    const down = (event) => {
      if (!ready() || !event.isPrimary || event.button !== 0 || pointer) return;
      pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, dragging: false };
      if (event.pointerType === "mouse") stage.setPointerCapture(event.pointerId);
    };
    const additional = (event) => {
      if (pointer && event.pointerType === "touch" && event.pointerId !== pointer.id) cancel();
    };
    const move = (event) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      const dx = Math.abs(event.clientX-pointer.x), dy = Math.abs(event.clientY-pointer.y);
      if (!pointer.dragging) {
        if (dy > dx && dy > 8) { cancel(); return; }
        if (dx < 6) return;
        pointer.dragging = true;
        stage.classList.add("is-dragging");
        stage.setPointerCapture(event.pointerId);
      }
      fromX(event.clientX);
    };
    const up = (event) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      if (event.type === "pointerup") {
        if (pointer.dragging || Math.hypot(event.clientX-pointer.x,event.clientY-pointer.y) < 8) fromX(event.clientX);
      }
      cancel();
    };
    const lost = (event) => { if (event.target === stage && event.pointerId === pointer?.id) cancel(); };
    const keydown = (event) => {
      if (!ready()) return;
      const steps = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1 };
      if (event.key in steps) updatePosition(position+steps[event.key]);
      else if (event.key === "Home") updatePosition(0);
      else if (event.key === "End") updatePosition(100);
      else return;
      event.preventDefault();
    };
    images.forEach((image) => {
      image.addEventListener("load", load);
      image.addEventListener("error", error);
      if (image.complete) decode(image);
    });
    const observer = new ResizeObserver(() => updatePosition(position));
    observer.observe(stage);
    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("lostpointercapture", lost);
    window.addEventListener("pointerdown", additional);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    slider.addEventListener("keydown", keydown);
    updateLoading();
    return () => {
      alive = false;
      cancel();
      observer.disconnect();
      images.forEach((image) => {
        image.removeEventListener("load", load);
        image.removeEventListener("error", error);
      });
      stage.removeEventListener("pointerdown", down);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("lostpointercapture", lost);
      window.removeEventListener("pointerdown", additional);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      slider.removeEventListener("keydown", keydown);
    };
  }, [pathname]);
  return null;
}
