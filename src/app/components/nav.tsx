'use client';

import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function handleMobileNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setMenuOpen(false);
    handleNavClick(e, href);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-border bg-bg/95 shadow-sm backdrop-blur-md'
          : ''
      }`}
    >
      {/* ── Main bar ── */}
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 ${scrolled ? 'py-3.5' : 'py-5'}`}>
        <a
          href="#"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <div className="relative h-9 w-9 shrink-0 md:h-10 md:w-10">
            <Image
              src="/logo_sans_fond.png"
              alt="Logo Dunes & Demis"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-fg md:text-xl">
            Dunes &amp; Demis
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Navigation principale">
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

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.helloasso.com/associations/dunes-demis/formulaires/1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent-pale hover:border-accent"
          >
            Faire un don
          </a>
          <a
            href="/dossier-sponsoring.pdf"
            download
            className="btn-primary"
          >
            <Download className="h-4 w-4" strokeWidth={2.4} />
            <span>Dossier de sponsoring</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="icon-btn h-11 w-11 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen
            ? <X className="h-5 w-5" strokeWidth={2} />
            : <Menu className="h-5 w-5" strokeWidth={2} />
          }
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-[22rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-6 pb-2" aria-label="Navigation mobile">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleMobileNavClick(e, href)}
              className="flex min-h-[52px] items-center border-b border-border text-base font-medium text-fg transition-colors last:border-0 hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 px-6 py-4">
          <a
            href="https://www.helloasso.com/associations/dunes-demis/formulaires/1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/50 px-4 py-3 text-sm font-semibold text-accent transition hover:bg-accent-pale hover:border-accent"
          >
            Faire un don
          </a>
          <a
            href="/dossier-sponsoring.pdf"
            download
            className="btn-primary w-full justify-center"
          >
            <Download className="h-4 w-4" strokeWidth={2.4} />
            Dossier de sponsoring
          </a>
        </div>
      </div>
    </header>
  );
}
