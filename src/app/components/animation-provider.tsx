'use client';

import { useEffect } from 'react';

export function AnimationProvider() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cleanup: (() => void) | undefined;

    if (!prefersReducedMotion) {
      const handleScroll = () => {
        document.documentElement.style.setProperty(
          '--scroll-offset',
          `${window.scrollY * 0.28}px`
        );
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      cleanup = () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left').forEach((el) => {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      });
    };

    observe();
    // Re-scan after hydration of Client Components completes (React 19 timing)
    const timer = setTimeout(observe, 200);

    return () => {
      clearTimeout(timer);
      cleanup?.();
      observer.disconnect();
    };
  }, []);

  return null;
}
