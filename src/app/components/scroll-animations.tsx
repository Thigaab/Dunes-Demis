"use client";
import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
        el.classList.add("is-in")
      );
      const fill = document.querySelector<HTMLElement>(".tl-fill");
      if (fill) fill.style.height = "100%";
      return;
    }

    // Reveal via IntersectionObserver
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));

    // Scroll: parallax + timeline fill
    const onScroll = () => {
      document.body.style.backgroundPositionY = `${window.scrollY * 0.12}px`;

      const list = document.querySelector<HTMLElement>(".tl-list");
      const fill = document.querySelector<HTMLElement>(".tl-fill");
      if (list && fill) {
        const r = list.getBoundingClientRect();
        const prog = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - r.top) / r.height));
        fill.style.height = `${prog * 100}%`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
