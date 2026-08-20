import { useEffect, useRef } from "react";

interface SideWave {
  xOffset: number; // 12, 28, 44 px from edge
  freq: number;
  amp: number;
  speed: number;
  phase: number;
  color: string;
  glow: string;
  width: number;
}

interface SideGlint {
  y: number;
  speed: number;
  size: number;
  phase: number;
  strandIdx: number;
}

function renderSideCanvas(
  canvas: HTMLCanvasElement,
  side: "left" | "right",
  cleanupRef: { current: boolean },
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = 70;
  let h = (canvas.height = window.innerHeight);
  canvas.width = w;

  const handleResize = () => {
    if (!canvas) return;
    h = canvas.height = window.innerHeight;
    canvas.width = w;
  };
  window.addEventListener("resize", handleResize);

  const waves: SideWave[] = [
    {
      xOffset: side === "left" ? 18 : w - 18,
      freq: 0.0035,
      amp: 9,
      speed: 0.018,
      phase: 0,
      color: "rgba(217, 119, 6, 0.8)",
      glow: "rgba(245, 158, 11, 0.95)",
      width: 3.0,
    },
    {
      xOffset: side === "left" ? 34 : w - 34,
      freq: 0.0048,
      amp: 11,
      speed: -0.022,
      phase: 1.6,
      color: "rgba(245, 158, 11, 0.9)",
      glow: "rgba(251, 191, 36, 1)",
      width: 2.4,
    },
    {
      xOffset: side === "left" ? 50 : w - 50,
      freq: 0.003,
      amp: 8,
      speed: 0.014,
      phase: 3.2,
      color: "rgba(180, 83, 9, 0.7)",
      glow: "rgba(217, 119, 6, 0.85)",
      width: 2.0,
    },
  ];

  const glints: SideGlint[] = [];
  for (let i = 0; i < 14; i++) {
    glints.push({
      y: Math.random() * h,
      speed: 0.4 + Math.random() * 0.7,
      size: 2.5 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
      strandIdx: i % 3,
    });
  }

  let animId: number;
  let time = 0;

  const drawStar = (
    c: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    outerR: number,
  ) => {
    const innerR = outerR * 0.28;
    c.beginPath();
    c.moveTo(cx, cy - outerR);
    c.lineTo(cx + innerR, cy);
    c.lineTo(cx, cy + outerR);
    c.lineTo(cx - innerR, cy);
    c.closePath();
    c.fill();

    c.beginPath();
    c.moveTo(cx - outerR, cy);
    c.lineTo(cx, cy + innerR);
    c.lineTo(cx + outerR, cy);
    c.lineTo(cx, cy - innerR);
    c.closePath();
    c.fill();

    c.beginPath();
    c.arc(cx, cy, Math.max(0.6, outerR * 0.28), 0, Math.PI * 2);
    c.fillStyle = "#FFFFFF";
    c.fill();
  };

  const loop = () => {
    if (cleanupRef.current) return;
    ctx.clearRect(0, 0, w, h);
    time += 1;

    // 1. Render glowing waves
    waves.forEach((wv) => {
      wv.phase += wv.speed;

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = wv.color;
      ctx.lineWidth = wv.width;
      ctx.shadowBlur = 14;
      ctx.shadowColor = wv.glow;
      ctx.lineCap = "round";

      let isFirst = true;
      for (let y = -20; y <= h + 20; y += 8) {
        const offset = Math.sin(y * wv.freq + wv.phase) * wv.amp;
        const x = Math.max(4, Math.min(w - 4, wv.xOffset + offset));

        if (isFirst) {
          ctx.moveTo(x, y);
          isFirst = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();
    });

    // 2. Render sparkling diamond stars on wave curves
    glints.forEach((g) => {
      g.y += g.speed;
      if (g.y > h + 20) g.y = -20;

      const wv = waves[g.strandIdx];
      if (!wv) return;

      const offset = Math.sin(g.y * wv.freq + wv.phase) * wv.amp;
      const x = Math.max(4, Math.min(w - 4, wv.xOffset + offset));

      const alpha = 0.4 + Math.sin(time * 0.08 + g.phase) * 0.55;

      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#F59E0B";
      ctx.fillStyle = "#FEF08A";

      drawStar(ctx, x, g.y, g.size);
      ctx.restore();
    });

    animId = requestAnimationFrame(loop);
  };

  animId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", handleResize);
  };
}

export function ShiningWavesCanvas() {
  const leftCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cleanupLeft = { current: false };
    const cleanupRight = { current: false };

    let unmountLeft: (() => void) | undefined;
    let unmountRight: (() => void) | undefined;

    if (leftCanvasRef.current) {
      unmountLeft = renderSideCanvas(leftCanvasRef.current, "left", cleanupLeft);
    }
    if (rightCanvasRef.current) {
      unmountRight = renderSideCanvas(rightCanvasRef.current, "right", cleanupRight);
    }

    return () => {
      cleanupLeft.current = true;
      cleanupRight.current = true;
      if (unmountLeft) unmountLeft();
      if (unmountRight) unmountRight();
    };
  }, []);

  return (
    <>
      {/* STRICTLY LEFT BORDER ONLY (Width: 70px, pinned to left-0, active on tablet/laptop/desktop) */}
      <canvas
        ref={leftCanvasRef}
        className="pointer-events-none fixed left-0 top-0 bottom-0 z-30 h-full w-[70px] hidden md:block"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* STRICTLY RIGHT BORDER ONLY (Width: 70px, pinned to right-0, active on tablet/laptop/desktop) */}
      <canvas
        ref={rightCanvasRef}
        className="pointer-events-none fixed right-0 top-0 bottom-0 z-30 h-full w-[70px] hidden md:block"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />
    </>
  );
}
