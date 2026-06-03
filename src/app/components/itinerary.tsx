"use client";
import { useEffect, useRef, useState } from "react";

const OUT =
  "M70 160 C170 130 235 130 330 160 C430 192 480 192 575 160 C675 128 730 128 825 160 C915 188 965 184 1030 160";
const RET =
  "M1030 160 C1030 250 1006 286 916 288 L184 288 C94 288 70 250 70 160";

type StopKind = "start" | "mid" | "end";

const stops: { x: number; city: string; sub: string; above: boolean; kind: StopKind }[] = [
  { x: 70,   city: "Biarritz",  sub: "Départ · France",           above: true,  kind: "start" },
  { x: 330,  city: "Espagne",   sub: "1 200 km de descente",       above: false, kind: "mid"   },
  { x: 575,  city: "Gibraltar", sub: "Traversée en ferry",         above: true,  kind: "mid"   },
  { x: 825,  city: "Maroc",     sub: "Pistes & Atlas",             above: false, kind: "mid"   },
  { x: 1030, city: "Désert",    sub: "Bivouacs & remise des kits", above: true,  kind: "end"   },
];

export function Itinerary() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="itineraire" className="space-y-6">
      <div className="space-y-2">
        <p className="adventure-kicker">Itinéraire</p>
        <h2 className="font-display text-4xl text-[#2f2418]">Le raid, de Biarritz au désert</h2>
      </div>
      <p className="max-w-[44rem] text-base leading-relaxed text-[#5d4633]">
        Départ de Biarritz, descente de l&apos;Espagne, traversée du détroit de Gibraltar en
        ferry, puis la boucle dans le désert marocain avant de remonter.
      </p>
      <div
        ref={ref}
        className={`route-section adventure-card rounded-3xl border border-[#d9c1a1] shadow-sm${shown ? " is-in" : ""}`}
        style={{ padding: "1.5rem 1.75rem" }}
      >
        <svg
          className="route-svg"
          viewBox="0 0 1100 320"
          aria-label="Étapes du raid : Biarritz, Espagne, détroit de Gibraltar, Maroc, désert, et retour"
        >
          {/* Return loop (dashed) — appears after outbound */}
          <path className="route-return" d={RET} />
          <text
            x="550"
            y="312"
            textAnchor="middle"
            style={{
              fontStyle: "italic",
              fill: "#b79c7e",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "15px",
              letterSpacing: "0.06em",
            }}
          >
            … et retour vers Biarritz
          </text>

          {/* Outbound route — draws itself */}
          <path className="route-path" pathLength="100" d={OUT} />

          {/* Travelling 4L */}
          <circle className="route-car" r="9" fill="#f58d47" stroke="#fff" strokeWidth="3" />

          {/* Étape markers */}
          {stops.map((s, i) => {
            const cy = 160;
            const r = s.kind === "mid" ? 6 : 10;
            const fill =
              s.kind === "mid" ? "#fffaf2" : s.kind === "end" ? "#e47e3a" : "#8c5235";
            const cityY = s.above ? cy - 44 : cy + 40;
            const subY = s.above ? cy - 26 : cy + 58;
            const anchor =
              i === 0 ? "start" : i === stops.length - 1 ? "end" : "middle";
            const tx =
              i === 0 ? s.x - 6 : i === stops.length - 1 ? s.x + 6 : s.x;
            return (
              <g key={s.city} className={`route-stop route-stop--${i + 1}`}>
                <text
                  x={tx}
                  y={cityY}
                  textAnchor={anchor}
                  style={{
                    fill: "#4a3a27",
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 600,
                    fontSize: "21px",
                  }}
                >
                  {s.city}
                </text>
                <text
                  x={tx}
                  y={subY}
                  textAnchor={anchor}
                  style={{
                    fill: "#6e5a47",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "13px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.sub}
                </text>
                <circle
                  cx={s.x}
                  cy={cy}
                  r={r}
                  fill={fill}
                  stroke={s.kind === "mid" ? "#8c5235" : "#fff"}
                  strokeWidth={s.kind === "mid" ? 2.5 : 3}
                />
                {s.kind !== "mid" && (
                  <circle cx={s.x} cy={cy} r="3.2" fill="#fff" />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
