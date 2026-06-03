'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Mission',     href: '#mission' },
  { label: 'Équipage',   href: '#equipage' },
  { label: 'Timeline',   href: '#timeline' },
  { label: 'Partenariat', href: '#partenariat' },
  { label: 'Contact',    href: '#contact' },
];

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function easeInOutQuart(t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return;
  e.preventDefault();
  const target = document.querySelector(href);
  if (!target) return;
  const navHeight = 80;
  const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    window.scrollTo(0, targetY);
  } else {
    smoothScrollTo(targetY, 1000);
  }
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/90 py-3.5 shadow-sm backdrop-blur-md'
          : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/logo_sans_fond.png"
              alt="Logo Dunes & Demis"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-fg">
            Dunes &amp; Demis
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-sm font-medium text-subtle transition-colors hover:text-fg"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/dossier-sponsoring.pdf"
          download
          className="btn-primary"
        >
          <Download className="h-4 w-4" strokeWidth={2.4} />
          <span>Dossier de sponsoring</span>
        </a>
      </div>
    </header>
  );
}
