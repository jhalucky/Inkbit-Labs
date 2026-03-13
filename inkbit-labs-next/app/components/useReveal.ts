"use client";

import { useEffect, useRef } from "react";

export function useReveal(className = "visible", threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger siblings
            const parent = entry.target.parentElement;
            if (parent) {
              const siblings = [...parent.querySelectorAll("[data-reveal]")];
              const idx = siblings.indexOf(entry.target as Element);
              (entry.target as HTMLElement).style.transitionDelay = `${idx * 80}ms`;
            }
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all [data-reveal] children, or the element itself
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length > 0) {
      targets.forEach((t) => observer.observe(t));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
}
