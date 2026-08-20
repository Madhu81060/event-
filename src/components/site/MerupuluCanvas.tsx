import { useEffect, useRef } from "react";

export type AmbienceMood = "gold" | "rose" | "divine" | "temple";

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  targetSize: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  rotation: number;
  rotSpeed: number;
  points: 4 | 8;
  color: string;
  glow: string;
  isBurst?: boolean;
}

interface RadiantBeam {
  x: number;
  width: number;
  speed: number;
  opacity: number;
  maxOpacity: number;
  angle: number;
}

const PALETTES: Record<
  AmbienceMood,
  {
    colors: string[];
    glow: string;
    beamGlow: string;
    beamColor: string;
  }
> = {
  gold: {
    colors: ["#FFFFFF", "#FEF08A", "#FDE047", "#F59E0B", "#D4AF37", "#FFEAA7"],
    glow: "rgba(245, 158, 11, 0.85)",
    beamGlow: "rgba(253, 224, 71, 0.22)",
    beamColor: "rgba(245, 158, 11, 0.18)",
  },
  rose: {
    colors: ["#FFFFFF", "#FFE4E6", "#F472B6", "#FB7185", "#FDA4AF", "#FFF1F2"],
    glow: "rgba(244, 114, 182, 0.8)",
    beamGlow: "rgba(251, 113, 133, 0.22)",
    beamColor: "rgba(244, 114, 182, 0.18)",
  },
  divine: {
    colors: ["#FFFFFF", "#E0E7FF", "#C7D2FE", "#FEF9C3", "#818CF8", "#FDE047"],
    glow: "rgba(165, 180, 252, 0.85)",
    beamGlow: "rgba(199, 210, 254, 0.25)",
    beamColor: "rgba(254, 240, 138, 0.2)",
  },
  temple: {
    colors: ["#FFFFFF", "#FEF08A", "#F59E0B", "#EA580C", "#34D399", "#FDE68A"],
    glow: "rgba(234, 88, 12, 0.85)",
    beamGlow: "rgba(245, 158, 11, 0.25)",
    beamColor: "rgba(52, 211, 153, 0.15)",
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
    const maxAmbientSparkles = 75;

    const palette = PALETTES[mood] || PALETTES.gold;

    const spawnSparkle = (x?: number, y?: number, isBurst = false): Sparkle => {
      const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
      const points: 4 | 8 = Math.random() > 0.4 ? 8 : 4;
      const targetSize = isBurst ? 10 + Math.random() * 16 : 6 + Math.random() * 12;

      return {
        x: x !== undefined ? x : Math.random() * width,
        y: y !== undefined ? y : Math.random() * height,
        vx: (Math.random() - 0.5) * (isBurst ? 2.8 : 0.9),
        vy: isBurst ? (Math.random() - 0.7) * 2.8 : -0.3 - Math.random() * 0.9,
        size: 0.8,
        targetSize,
        alpha: 0,
        maxAlpha: isBurst ? 0.95 + Math.random() * 0.05 : 0.65 + Math.random() * 0.35,
        decay: isBurst ? 0.02 + Math.random() * 0.02 : 0.006 + Math.random() * 0.008,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.06,
        points,
        color,
        glow: palette.glow,
        isBurst,
      };
    };

    // Pre-populate vibrant ambient sparkles across the stage
    for (let i = 0; i < maxAmbientSparkles; i++) {
      const s = spawnSparkle();
      s.alpha = Math.random() * s.maxAlpha;
      s.size = 2 + Math.random() * s.targetSize;
      sparkles.push(s);
    }

    // Continuous automatic radiant lightning / ambient ray sweeps ("మెరుపుల కాంతులు")
    const beams: RadiantBeam[] = [
      {
        x: -300,
        width: 320,
        speed: 3.2,
        opacity: 0,
        maxOpacity: 0.28,
        angle: 0.35,
      },
      {
        x: -700,
        width: 260,
        speed: 2.4,
        opacity: 0,
        maxOpacity: 0.22,
        angle: -0.25,
      },
    ];

    // Auto-sparkle bursts interval timer (automatically creates vivid diamond bursts)
    let burstTimer = 0;

    // Interactive mouse / touch move
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      for (let i = 0; i < 4; i++) {
        sparkles.push(
          spawnSparkle(x + (Math.random() - 0.5) * 35, y + (Math.random() - 0.5) * 35, true),
        );
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
      const rotStep = Math.PI / spikes;
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Continuous Moving Radiant Lightning Shimmer Beams ("మెరుపుల తళుకులు")
      beams.forEach((beam) => {
        beam.x += beam.speed;
        if (beam.x > width + 600) {
          beam.x = -400 - Math.random() * 300;
          beam.speed = 2.0 + Math.random() * 2.2;
        }

        const beamGrad = ctx.createLinearGradient(
          beam.x - beam.width / 2,
          0,
          beam.x + beam.width / 2,
          height,
        );
        beamGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        beamGrad.addColorStop(0.3, palette.beamColor);
        beamGrad.addColorStop(0.5, palette.beamGlow);
        beamGrad.addColorStop(0.7, palette.beamColor);
        beamGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.save();
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      });

      // 2. Automatic Continuous Merupu Star Bursts every ~60 frames
      burstTimer++;
      if (burstTimer > 45) {
        burstTimer = 0;
        // Spawn 2-3 bright royal diamond flares in random beautiful stage locations
        const burstX = width * (0.2 + Math.random() * 0.75);
        const burstY = height * (0.15 + Math.random() * 0.7);
        for (let b = 0; b < 3; b++) {
          sparkles.push(
            spawnSparkle(
              burstX + (Math.random() - 0.5) * 50,
              burstY + (Math.random() - 0.5) * 50,
              true,
            ),
          );
        }
      }

      // 3. Render & Update Continuous Twinkling Sparkles ("నిరంతర మెరుపులు")
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        // Size expansion & alpha breathing cycle
        if (s.size < s.targetSize) {
          s.size += 0.45;
        }
        if (s.alpha < s.maxAlpha) {
          s.alpha = Math.min(s.maxAlpha, s.alpha + 0.08);
        } else {
          s.alpha -= s.decay;
        }

        if (s.alpha <= 0 || s.y < -40 || s.x < -40 || s.x > width + 40) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
        ctx.shadowBlur = s.isBurst ? 22 : 14;
        ctx.shadowColor = s.glow;
        ctx.fillStyle = s.color;

        // Draw multi-point diamond star
        drawStar(ctx, s.x, s.y, s.points, s.size, s.size * 0.24, s.rotation);
        ctx.fill();

        // High-intensity white center gleam
        ctx.beginPath();
        ctx.arc(s.x, s.y, Math.max(1, s.size * 0.26), 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#FFFFFF";
        ctx.fill();

        ctx.restore();
      }

      // Keep ambient sparkles dense & glowing across the whole stage
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
