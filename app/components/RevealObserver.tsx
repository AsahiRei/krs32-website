"use client";

import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element the first time it scrolls into view.
 * Content stays visible without JS: elements are only hidden once
 * `html[data-reveal-ready]` is set here.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    targets.forEach((el) => observer.observe(el));
    root.setAttribute("data-reveal-ready", "");

    return () => observer.disconnect();
  }, []);

  return null;
}
