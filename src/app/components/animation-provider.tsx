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

    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => observer.observe(el));

    return () => {
      cleanup?.();
      observer.disconnect();
    };
  }, []);

  return null;
}
