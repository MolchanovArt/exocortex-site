"use client";

import { useEffect } from "react";

export default function useReveal(selector = ".section, .card, .timeline-item") {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll(selector));

    els.forEach((el) => el.classList.add("reveal-pending"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target as Element);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [selector]);
}

