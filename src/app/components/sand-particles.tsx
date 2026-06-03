'use client';

import { useEffect, useState } from 'react';

type Particle = {
  id: number;
  left: string;
  bottom: string;
  width: number;
  height: number;
  dur: string;
  delay: string;
  driftX: string;
};

export function SandParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setParticles(
      Array.from({ length: 12 }, (_, i) => {
        const size = [2, 1.5, 2.5, 3, 1.5][i % 5];
        return {
          id: i,
          left: `${6 + ((i * 7.5) % 88)}%`,
          bottom: `${12 + ((i * 5.8) % 60)}%`,
          width: size,
          height: size,
          dur: `${3.6 + ((i * 0.55) % 3)}s`,
          delay: `${((i * 0.45) % 5.5).toFixed(2)}s`,
          driftX: `${-16 + ((i * 8) % 32)}px`,
        };
      })
    );
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="sand-particle"
          style={
            {
              left: p.left,
              bottom: p.bottom,
              width: `${p.width}px`,
              height: `${p.height}px`,
              '--dur': p.dur,
              '--delay': p.delay,
              '--drift-x': p.driftX,
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
      ))}
    </>
  );
}
