import { useEffect, useRef } from "react";

export type AmbienceMood = "gold" | "rose" | "divine" | "temple";

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxSize: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  rotation: number;
  rotSpeed: number;
  points: 4 | 8;
  color: string;
  glow: string;
}

const PALETTES: Record<AmbienceMood, { colors: string[]; glow: string }> = {
  gold: {
    colors: ["#FFFBEB", "#FEF08A", "#FDE047", "#F59E0B", "#D4AF37"],
    glow: "rgba(245, 158, 11, 0.6)",
  },
  rose: {
    colors: ["#FFF1F2", "#FFE4E6", "#F472B6", "#FB7185", "#FDE047"],
    glow: "rgba(244, 114, 182, 0.55)",
  },
  divine: {
    colors: ["#F0FDF4", "#FEF9C3", "#E0E7FF", "#FFFFFF", "#FBBF24"],
    glow: "rgba(254, 240, 138, 0.65)",
  },
  temple: {
    colors: ["#FFFBEB", "#FDE68A", "#F59E0B", "#EA580C", "#34D399"],
    glow: "rgba(217, 119, 6, 0.6)",
  },
};

export function MerupuluCanvas({ mood = "gold" }: { mood?: AmbienceMood }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const sparkles: Sparkle[] = [];
    const maxAmbientSparkles = 55;

    const spawnSparkle = (x?: number, y?: number, isInteractive = false): Sparkle => {
      const palette = PALETTES[mood] || PALETTES.gold;
      const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
      const points: 4 | 8 = Math.random() > 0.6 ? 8 : 4;
      const maxSize = isInteractive ? 8 + Math.random() * 12 : 5 + Math.random() * 9;

      return {
        x: x !== undefined ? x : Math.random() * width,
        y: y !== undefined ? y : Math.random() * height,
        vx: (Math.random() - 0.5) * (isInteractive ? 2.5 : 0.8),
        vy: isInteractive ? (Math.random() - 0.7) * 2.5 : -0.2 - Math.random() * 0.7,
        size: 0.5,
        maxSize,
        alpha: 0,
        maxAlpha: isInteractive ? 0.9 + Math.random() * 0.1 : 0.45 + Math.random() * 0.5,
        decay: isInteractive ? 0.015 + Math.random() * 0.02 : 0.005 + Math.random() * 0.008,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        points,
        color,
        glow: palette.glow,
      };
    };

    // Pre-populate ambient sparkles across the canvas
    for (let i = 0; i < maxAmbientSparkles; i++) {
      const s = spawnSparkle();
      s.alpha = Math.random() * s.maxAlpha;
      s.size = Math.random() * s.maxSize;
      sparkles.push(s);
    }

    // Interactive mouse / touch move
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      for (let i = 0; i < 3; i++) {
        sparkles.push(spawnSparkle(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20, true));
      }
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handlePointerMove, { passive: true });
      parent.addEventListener("touchmove", handlePointerMove, { passive: true });
    }

    const drawStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      rot: number,
    ) => {
      let rotStep = Math.PI / spikes;
      let x = cx;
      let y = cy;

      c.beginPath();
      c.moveTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c.lineTo(x, y);
        rot += rotStep;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c.lineTo(x, y);
        rot += rotStep;
      }
      c.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
      c.closePath();
    };

    let shimmerWaveX = -200;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Moving golden lightning shimmer wave ("Merupu Tarangam")
      shimmerWaveX += 2.4;
      if (shimmerWaveX > width + 500) shimmerWaveX = -350;

      const shimmerGrad = ctx.createLinearGradient(shimmerWaveX - 250, 0, shimmerWaveX + 250, height);
      shimmerGrad.addColorStop(0, "rgba(254, 240, 138, 0)");
      shimmerGrad.addColorStop(0.5, "rgba(254, 240, 138, 0.12)");
      shimmerGrad.addColorStop(1, "rgba(254, 240, 138, 0)");
      ctx.fillStyle = shimmerGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Render & update Sparkles ("Merupulu")
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        // Size & Alpha lifecycle
        if (s.size < s.maxSize) {
          s.size += 0.35;
        }
        if (s.alpha < s.maxAlpha) {
          s.alpha = Math.min(s.maxAlpha, s.alpha + 0.05);
        } else {
          s.alpha -= s.decay;
        }

        if (s.alpha <= 0 || s.y < -30 || s.x < -30 || s.x > width + 30) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
        ctx.shadowBlur = 14;
        ctx.shadowColor = s.glow;
        ctx.fillStyle = s.color;

        // Draw central sparkling star
        drawStar(ctx, s.x, s.y, s.points, s.size, s.size * 0.28, s.rotation);
        ctx.fill();

        // Core bright center dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        ctx.restore();
      }

      // Maintain ambient sparkles count
      while (sparkles.length < maxAmbientSparkles) {
        sparkles.push(spawnSparkle());
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handlePointerMove);
        parent.removeEventListener("touchmove", handlePointerMove);
      }
    };
  }, [mood]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-25 size-full mix-blend-screen"
      aria-hidden="true"
    />
  );
}
