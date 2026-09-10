"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ProductFaqEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const list = document.querySelector("[data-pin-faq]");
    if (!list) return;
    const buttons = Array.from(list.querySelectorAll("button[aria-controls]"));
    const handleClick = (event) => {
      const selected = event.target.closest("button[aria-controls]");
      if (!buttons.includes(selected)) return;
      const shouldOpen = selected.getAttribute("aria-expanded") !== "true";
      buttons.forEach((button) => {
        const open = button === selected && shouldOpen;
        button.setAttribute("aria-expanded", String(open));
        document.getElementById(button.getAttribute("aria-controls")).hidden = !open;
      });
    };
    list.addEventListener("click", handleClick);
    return () => list.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
