"use client";

import { useEffect } from "react";

const setupAuthorProfileCard = () => {
  const profile = document.querySelector("[data-author-profile]");
  const trigger = profile?.querySelector(".blog-article-author-trigger");
  const card = profile?.querySelector(".blog-author-profile-card");
  if (!profile || !trigger || !card) return () => {};

  const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)");
  let closeTimer;

  const clearCloseTimer = () => {
    window.clearTimeout(closeTimer);
  };

  const positionCard = () => {
    profile.classList.remove("is-upward");
    const cardRect = card.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const hasRoomAbove = triggerRect.top - cardRect.height > 16;

    if (cardRect.bottom > window.innerHeight - 16 && hasRoomAbove) {
      profile.classList.add("is-upward");
    }
  };

  const openCard = () => {
    clearCloseTimer();
    if (!card.hidden) {
      card.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      return;
    }

    card.hidden = false;
    window.requestAnimationFrame(() => {
      positionCard();
      card.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    });
  };

  const closeCard = (immediate = false) => {
    clearCloseTimer();
    if (card.hidden) return;

    card.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    const hideCard = () => {
      if (!card.classList.contains("is-open")) card.hidden = true;
    };

    if (immediate) {
      hideCard();
    } else {
      closeTimer = window.setTimeout(hideCard, 180);
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer = window.setTimeout(() => closeCard(), 180);
  };

  const handleTriggerClick = (event) => {
    event.preventDefault();
    if (card.hidden) {
      openCard();
    } else {
      closeCard(true);
    }
  };

  const handlePointerEnter = () => {
    if (hoverCapable.matches) openCard();
  };

  const handlePointerLeave = () => {
    if (hoverCapable.matches) scheduleClose();
  };

  const handleFocusIn = () => {
    if (hoverCapable.matches) openCard();
  };
  const handleFocusOut = (event) => {
    if (!profile.contains(event.relatedTarget)) scheduleClose();
  };
  const handleDocumentClick = (event) => {
    if (!profile.contains(event.target)) closeCard(true);
  };
  const handleKeydown = (event) => {
    if (event.key !== "Escape" || card.hidden) return;
    closeCard(true);
    trigger.focus();
  };
  const handleResize = () => {
    if (!card.hidden) positionCard();
  };

  trigger.addEventListener("click", handleTriggerClick);
  profile.addEventListener("pointerenter", handlePointerEnter);
  profile.addEventListener("pointerleave", handlePointerLeave);
  profile.addEventListener("focusin", handleFocusIn);
  profile.addEventListener("focusout", handleFocusOut);
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", handleResize);

  return () => {
    clearCloseTimer();
    trigger.removeEventListener("click", handleTriggerClick);
    profile.removeEventListener("pointerenter", handlePointerEnter);
    profile.removeEventListener("pointerleave", handlePointerLeave);
    profile.removeEventListener("focusin", handleFocusIn);
    profile.removeEventListener("focusout", handleFocusOut);
    document.removeEventListener("click", handleDocumentClick);
    document.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("resize", handleResize);
  };
};

export default function BlogArticleRepair({ slug }) {
  useEffect(() => {
    let cancelled = false;
    const cleanupAuthorProfileCard = setupAuthorProfileCard();

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
      cleanupAuthorProfileCard();
    };
  }, [slug]);

  return null;
}
