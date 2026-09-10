"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const clamp = (value) => Math.min(100, Math.max(0, value));

export default function ArtworkComparisonEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const comparisons = Array.from(document.querySelectorAll("[data-artwork-comparison]"));
    const cleanups = comparisons.map((comparison) => {
      const handle = comparison.querySelector('[role="slider"]');
      const artworkImage = comparison.querySelector('[data-comparison-image="artwork"]');
      const finishedImage = comparison.querySelector('[data-comparison-image="finished"]');
      const artworkLabel = comparison.querySelector(".artwork-comparison-label-artwork");
      const finishedLabel = comparison.querySelector(".artwork-comparison-label-finished");
      const instruction = comparison.parentElement?.querySelector(".artwork-comparison-instruction");
      if (!handle || !artworkImage || !finishedImage) return () => {};

      let position = 50;
      let activePointer = null;
      let startX = 0;
      let startY = 0;
      let dragging = false;
      let suppressClick = false;
      const imageStatus = {
        artwork: artworkImage.complete && artworkImage.naturalWidth > 0,
        finished: finishedImage.complete && finishedImage.naturalWidth > 0,
      };

      const setPosition = (nextPosition) => {
        position = clamp(nextPosition);
        comparison.style.setProperty("--comparison-position", `${position}%`);
        handle.setAttribute("aria-valuenow", String(Math.round(position)));
        handle.setAttribute(
          "aria-valuetext",
          `Artwork ${Math.round(position)}%, finished pin ${Math.round(100 - position)}%`,
        );
        artworkLabel?.toggleAttribute("hidden", position === 0);
        finishedLabel?.toggleAttribute("hidden", position === 100);
      };

      const setPositionFromPointer = (clientX) => {
        const bounds = comparison.getBoundingClientRect();
        setPosition(((clientX - bounds.left) / bounds.width) * 100);
      };

      const updateReadyState = () => {
        const ready = imageStatus.artwork && imageStatus.finished;
        const hasUsableImage = imageStatus.artwork || imageStatus.finished;
        comparison.classList.toggle("is-loading", !ready && hasUsableImage);
        comparison.classList.toggle("is-ready", ready);
        comparison.classList.toggle("is-artwork-missing", !imageStatus.artwork && imageStatus.finished);
        comparison.classList.toggle("is-finished-missing", imageStatus.artwork && !imageStatus.finished);
        comparison.classList.toggle("is-unavailable", !hasUsableImage);
        handle.tabIndex = ready ? 0 : -1;
        handle.setAttribute("aria-disabled", String(!ready));
        if (instruction) instruction.hidden = !ready;
      };

      const handleImageLoad = (event) => {
        imageStatus[event.currentTarget.dataset.comparisonImage] = true;
        updateReadyState();
      };

      const handleImageError = (event) => {
        imageStatus[event.currentTarget.dataset.comparisonImage] = false;
        updateReadyState();
      };

      const endPointer = (event) => {
        if (event.pointerId !== activePointer) return;
        if (event.type !== "pointerup") suppressClick = true;
        activePointer = null;
        dragging = false;
        comparison.classList.remove("is-dragging");
        if (comparison.hasPointerCapture?.(event.pointerId)) comparison.releasePointerCapture(event.pointerId);
      };

      const handleClick = (event) => {
        if (!comparison.classList.contains("is-ready")) return;
        if (suppressClick) {
          suppressClick = false;
          return;
        }
        setPositionFromPointer(event.clientX);
      };

      const handlePointerDown = (event) => {
        if (!comparison.classList.contains("is-ready") || !event.isPrimary) return;
        activePointer = event.pointerId;
        startX = event.clientX;
        startY = event.clientY;
        dragging = false;
        suppressClick = false;
      };

      const handlePointerMove = (event) => {
        if (event.pointerId !== activePointer) return;
        const movementX = Math.abs(event.clientX - startX);
        const movementY = Math.abs(event.clientY - startY);

        if (!dragging) {
          if (movementY > movementX && movementY > 8) {
            activePointer = null;
            return;
          }
          if (movementX < 6) return;
          dragging = true;
          suppressClick = true;
          comparison.classList.add("is-dragging");
          comparison.setPointerCapture?.(event.pointerId);
        }

        setPositionFromPointer(event.clientX);
      };

      const handleKeyDown = (event) => {
        let nextPosition = position;
        if (event.key === "ArrowLeft" || event.key === "ArrowDown") nextPosition -= 5;
        else if (event.key === "ArrowRight" || event.key === "ArrowUp") nextPosition += 5;
        else if (event.key === "Home") nextPosition = 0;
        else if (event.key === "End") nextPosition = 100;
        else return;

        event.preventDefault();
        setPosition(nextPosition);
      };

      artworkImage.addEventListener("load", handleImageLoad);
      artworkImage.addEventListener("error", handleImageError);
      finishedImage.addEventListener("load", handleImageLoad);
      finishedImage.addEventListener("error", handleImageError);
      comparison.addEventListener("pointerdown", handlePointerDown);
      comparison.addEventListener("pointermove", handlePointerMove);
      comparison.addEventListener("pointerup", endPointer);
      comparison.addEventListener("pointercancel", endPointer);
      comparison.addEventListener("lostpointercapture", endPointer);
      comparison.addEventListener("click", handleClick);
      handle.addEventListener("keydown", handleKeyDown);

      setPosition(50);
      updateReadyState();

      return () => {
        artworkImage.removeEventListener("load", handleImageLoad);
        artworkImage.removeEventListener("error", handleImageError);
        finishedImage.removeEventListener("load", handleImageLoad);
        finishedImage.removeEventListener("error", handleImageError);
        comparison.removeEventListener("pointerdown", handlePointerDown);
        comparison.removeEventListener("pointermove", handlePointerMove);
        comparison.removeEventListener("pointerup", endPointer);
        comparison.removeEventListener("pointercancel", endPointer);
        comparison.removeEventListener("lostpointercapture", endPointer);
        comparison.removeEventListener("click", handleClick);
        handle.removeEventListener("keydown", handleKeyDown);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname]);

  return null;
}
