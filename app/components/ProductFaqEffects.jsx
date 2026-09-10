"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ProductFaqEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = Array.from(document.querySelectorAll("[data-pin-faq]")).map((list) => {
      const buttons = Array.from(list.querySelectorAll("button[aria-controls]"));
      const answers = new Map(buttons.map((button) => [
        button,
        list.querySelector(`#${CSS.escape(button.getAttribute("aria-controls"))}`),
      ]));
      const handleClick = (event) => {
        const selected = event.target.closest("button[aria-controls]");
        if (!answers.has(selected)) return;
        const shouldOpen = selected.getAttribute("aria-expanded") !== "true";
        buttons.forEach((button) => {
          const open = button === selected && shouldOpen;
          button.setAttribute("aria-expanded", String(open));
          const answer = answers.get(button);
          if (answer) answer.hidden = !open;
        });
      };
      list.addEventListener("click", handleClick);
      return () => list.removeEventListener("click", handleClick);
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname]);

  return null;
}
