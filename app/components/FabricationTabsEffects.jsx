"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FabricationTabsEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const tabGroups = Array.from(document.querySelectorAll("[data-fabrication-tabs]"));
    const cleanups = tabGroups.map((group) => {
      const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
      const panels = Array.from(group.querySelectorAll('[role="tabpanel"]'));
      if (!tabs.length || !panels.length) return () => {};

      const tablist = group.querySelector('[role="tablist"]');
      const panelsContainer = group.querySelector(".finish-gallery-tabpanels");
      const desktopLayout = window.matchMedia("(min-width: 1200px)");
      let resizeFrame = 0;
      let isActive = true;

      const measurePanels = () => {
        if (!panelsContainer) return;

        const tallestPanel = panels.reduce((tallest, panel) => {
          const wasHidden = panel.hidden;

          if (wasHidden) {
            panel.hidden = false;
            panel.classList.add("is-measuring");
          }

          const panelHeight = panel.getBoundingClientRect().height;

          if (wasHidden) {
            panel.classList.remove("is-measuring");
            panel.hidden = true;
          }

          return Math.max(tallest, panelHeight);
        }, 0);

        panelsContainer.style.minHeight = `${Math.ceil(tallestPanel)}px`;
      };

      const scheduleMeasurement = () => {
        window.cancelAnimationFrame(resizeFrame);
        resizeFrame = window.requestAnimationFrame(measurePanels);
      };

      const updateOrientation = () => {
        tablist?.setAttribute("aria-orientation", desktopLayout.matches ? "vertical" : "horizontal");
        scheduleMeasurement();
      };

      const activateTab = (tab, shouldFocus = false) => {
        const controlledPanelId = tab.getAttribute("aria-controls");

        tabs.forEach((candidate) => {
          const isActive = candidate === tab;
          candidate.setAttribute("aria-selected", String(isActive));
          candidate.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach((panel) => {
          panel.hidden = panel.id !== controlledPanelId;
        });

        if (shouldFocus) tab.focus();
      };

      const handleClick = (event) => {
        const tab = event.target.closest?.('[role="tab"]');
        if (tab && group.contains(tab)) activateTab(tab, true);
      };

      const handleKeydown = (event) => {
        const currentTab = event.target.closest?.('[role="tab"]');
        if (!currentTab || !group.contains(currentTab)) return;

        const currentIndex = tabs.indexOf(currentTab);
        let nextIndex = currentIndex;

        const nextKey = desktopLayout.matches ? "ArrowDown" : "ArrowRight";
        const previousKey = desktopLayout.matches ? "ArrowUp" : "ArrowLeft";

        if (event.key === nextKey) {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === previousKey) {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activateTab(currentTab, true);
          return;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(tabs[nextIndex], true);
      };

      updateOrientation();
      desktopLayout.addEventListener("change", updateOrientation);
      window.addEventListener("resize", scheduleMeasurement);
      group.addEventListener("click", handleClick);
      group.addEventListener("keydown", handleKeydown);
      measurePanels();
      document.fonts?.ready.then(() => {
        if (isActive) scheduleMeasurement();
      });

      return () => {
        isActive = false;
        window.cancelAnimationFrame(resizeFrame);
        desktopLayout.removeEventListener("change", updateOrientation);
        window.removeEventListener("resize", scheduleMeasurement);
        group.removeEventListener("click", handleClick);
        group.removeEventListener("keydown", handleKeydown);
        if (panelsContainer) panelsContainer.style.minHeight = "";
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname]);

  return null;
}
