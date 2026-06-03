"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ to, duration = 1700 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let started = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString("fr-FR")}</span>;
}

const STATS = [
  { prefix: "+", to: 20000, label: "enfants aidés chaque année" },
  { prefix: "",  to: 6000,  label: "km de routes et de pistes"  },
  { prefix: "",  to: 1500,  label: "équipages unis dans l'effort" },
];

export function Stats() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className="stats-card adventure-card reveal rounded-3xl border border-[#d9c1a1] p-7 text-center shadow-sm"
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          <div className="stats-num">
            {s.prefix && <span className="stats-pre">{s.prefix}</span>}
            <Counter to={s.to} />
          </div>
          <p className="mt-3 text-sm text-[#7e6648]">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
