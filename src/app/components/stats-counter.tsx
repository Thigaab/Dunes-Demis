'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = { value: string; label: string };

function parseValue(raw: string) {
  const firstDigit = raw.search(/\d/);
  if (firstDigit === -1) return { num: 0, before: raw, after: '' };
  const before = raw.slice(0, firstDigit);
  const rest = raw.slice(firstDigit);
  const numMatch = rest.match(/^[\d\s]*/);
  const numStr = numMatch ? numMatch[0].replace(/\s/g, '') : '0';
  const num = parseInt(numStr) || 0;
  const after = rest.slice(numMatch ? numMatch[0].length : 0).trim();
  return { num, before, after };
}

function useCountUp(target: number, active: boolean, duration: number) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setCount(Math.floor(eased * target));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}

function AnimatedStat({ value, label, index }: Stat & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { num, before, after } = parseValue(value);
  const count = useCountUp(num, active, 1500 + index * 150);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setActive(true); obs.disconnect(); }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const formatted = count.toLocaleString('fr-FR');
  const display = active ? `${before}${formatted}${after ? ' ' + after : ''}` : value;

  return (
    <div ref={ref} className="px-6 py-6 text-center">
      <p className="font-display text-3xl font-bold tabular-nums text-accent md:text-4xl">
        {display}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-subtle">
        {label}
      </p>
    </div>
  );
}

export function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="reveal stagger-1 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <AnimatedStat key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </div>
  );
}
