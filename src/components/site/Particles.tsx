import { useMemo } from "react";

type Piece = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  hue: number;
};

function build(count: number, seed: number): Piece[] {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    left: rnd() * 100,
    size: 6 + rnd() * 16,
    duration: 12 + rnd() * 16,
    delay: -rnd() * 20,
    drift: (rnd() - 0.5) * 220,
    hue: rnd(),
  }));
}

/** Floating balloons, flowers, golden sparkles and confetti over the hero. */
export function Particles() {
  const balloons = useMemo(() => build(9, 11), []);
  const flowers = useMemo(() => build(12, 47), []);
  const sparkles = useMemo(() => build(26, 91), []);
  const confetti = useMemo(() => build(22, 133), []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((p, i) => (
        <span
          key={`b${i}`}
          className="absolute bottom-0 rounded-[50%] opacity-70"
          style={{
            left: `${p.left}%`,
            width: p.size * 2.4,
            height: p.size * 3,
            ["--drift" as string]: `${p.drift}px`,
            background:
              p.hue > 0.66
                ? "radial-gradient(circle at 32% 28%, oklch(0.95 0.06 92), oklch(0.78 0.14 82))"
                : p.hue > 0.33
                  ? "radial-gradient(circle at 32% 28%, oklch(0.92 0.07 350), oklch(0.7 0.19 350))"
                  : "radial-gradient(circle at 32% 28%, oklch(0.85 0.09 290), oklch(0.5 0.2 295))",
            animation: `float-up ${p.duration + 10}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {flowers.map((p, i) => (
        <span
          key={`f${i}`}
          className="absolute bottom-0 opacity-70"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            ["--drift" as string]: `${p.drift}px`,
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            background:
              p.hue > 0.5
                ? "oklch(0.9 0.08 350 / 0.85)"
                : "oklch(0.93 0.09 90 / 0.85)",
            animation: `float-up ${p.duration + 4}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {sparkles.map((p, i) => (
        <span
          key={`s${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.hue * 96}%`,
            width: p.size * 0.35,
            height: p.size * 0.35,
            background: "oklch(0.93 0.11 90)",
            boxShadow: "0 0 12px oklch(0.85 0.13 88 / 0.9)",
            animation: `sparkle ${2 + p.hue * 3}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {confetti.map((p, i) => (
        <span
          key={`c${i}`}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size * 0.45,
            height: p.size * 0.9,
            ["--drift" as string]: `${p.drift}px`,
            background:
              p.hue > 0.75
                ? "oklch(0.8 0.13 82)"
                : p.hue > 0.5
                  ? "oklch(0.68 0.19 350)"
                  : p.hue > 0.25
                    ? "oklch(0.55 0.2 295)"
                    : "oklch(0.5 0.2 267)",
            borderRadius: 2,
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
