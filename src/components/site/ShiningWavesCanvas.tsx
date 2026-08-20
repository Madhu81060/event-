import { useEffect, useRef } from "react";

interface EdgeWave {
  side: "left" | "right";
  xOffset: number; // distance from browser window edge (e.g. 15px, 30px, 45px)
  frequency: number;
  amplitude: number;
  speed: number;
  phase: number;
  color: string;
  glow: string;
  width: number;
}

interface EdgeStar {
  side: "left" | "right";
  y: number;
  speed: number;
  size: number;
  phase: number;
  strandIndex: number;
}

export function ShiningWavesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Strictly confined within 10px - 45px of the very edge of the browser window
    const strands: EdgeWave[] = [
      // === LEFT EDGE ONLY (x: 10px to 45px from left edge) ===
      {
        side: "left",
        xOffset: 16,
        frequency: 0.0035,
        amplitude: 8,
        speed: 0.018,
        phase: 0,
        color: "rgba(217, 119, 6, 0.75)",
        glow: "rgba(245, 158, 11, 0.9)",
        width: 2.8,
      },
      {
        side: "left",
        xOffset: 32,
        frequency: 0.0048,
        amplitude: 10,
        speed: -0.022,
        phase: 1.5,
        color: "rgba(245, 158, 11, 0.85)",
        glow: "rgba(251, 191, 36, 0.95)",
        width: 2.2,
      },
      {
        side: "left",
        xOffset: 46,
        frequency: 0.003,
        amplitude: 7,
        speed: 0.014,
        phase: 3.2,
        color: "rgba(180, 83, 9, 0.65)",
        glow: "rgba(217, 119, 6, 0.8)",
        width: 1.8,
      },

      // === RIGHT EDGE ONLY (x: 10px to 45px from right edge) ===
      {
        side: "right",
        xOffset: 16,
        frequency: 0.0038,
        amplitude: 8,
        speed: -0.019,
        phase: 0.7,
        color: "rgba(217, 119, 6, 0.75)",
        glow: "rgba(245, 158, 11, 0.9)",
        width: 2.8,
      },
      {
        side: "right",
        xOffset: 32,
        frequency: 0.0052,
        amplitude: 10,
        speed: 0.024,
        phase: 2.3,
        color: "rgba(245, 158, 11, 0.85)",
        glow: "rgba(251, 191, 36, 0.95)",
        width: 2.2,
      },
      {
        side: "right",
        xOffset: 46,
        frequency: 0.0032,
        amplitude: 7,
        speed: -0.015,
        phase: 4.1,
        color: "rgba(180, 83, 9, 0.65)",
        glow: "rgba(217, 119, 6, 0.8)",
        width: 1.8,
      },
    ];

    // Micro twinkling stars flowing strictly along the side edge waves
    const edgeStars: EdgeStar[] = [];
    for (let i = 0; i < 20; i++) {
      edgeStars.push({
        side: i % 2 === 0 ? "left" : "right",
        y: Math.random() * height,
        speed: 0.4 + Math.random() * 0.8,
        size: 2.5 + Math.random() * 2.5,
        phase: Math.random() * Math.PI * 2,
        strandIndex: i % 3,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // 1. Render Left & Right Wave Ribbons strictly on the outer 55px margins
      strands.forEach((wave) => {
        wave.phase += wave.speed;

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width;
        ctx.shadowBlur = 14;
        ctx.shadowColor = wave.glow;
        ctx.lineCap = "round";

        const step = 8;
        let isFirst = true;

        for (let y = -20; y <= height + 20; y += step) {
          const waveVal =
            Math.sin(y * wave.frequency + wave.phase) * wave.amplitude;

          let x: number;
          if (wave.side === "left") {
            // Strictly clamped within left 0 to 58px
            x = Math.max(6, Math.min(58, wave.xOffset + waveVal));
          } else {
            // Strictly clamped within right 0 to 58px (width - 58px to width)
            x = Math.min(width - 6, Math.max(width - 58, width - wave.xOffset - waveVal));
          }

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

      // 2. Render Micro Diamond Stars strictly on edge wave paths
      edgeStars.forEach((star) => {
        star.y += star.speed;
        if (star.y > height + 20) {
          star.y = -20;
        }

        const wave = strands.find(
          (s) => s.side === star.side && strands.indexOf(s) % 3 === star.strandIndex,
        );
        if (!wave) return;

        const waveVal = Math.sin(star.y * wave.frequency + wave.phase) * wave.amplitude;

        let realX: number;
        if (star.side === "left") {
          realX = Math.max(6, Math.min(58, wave.xOffset + waveVal));
        } else {
          realX = Math.min(width - 6, Math.max(width - 58, width - wave.xOffset - waveVal));
        }

        const pulse = 0.4 + Math.sin(time * 0.08 + star.phase) * 0.6;

        ctx.save();
        ctx.globalAlpha = Math.max(0.2, Math.min(1, pulse));
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#F59E0B";
        ctx.fillStyle = "#FEF08A";

        // Draw micro diamond star
        const sz = star.size;
        ctx.beginPath();
        ctx.moveTo(realX, star.y - sz);
        ctx.lineTo(realX + sz * 0.3, star.y);
        ctx.lineTo(realX, star.y + sz);
        ctx.lineTo(realX - sz * 0.3, star.y);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(realX - sz, star.y);
        ctx.lineTo(realX, star.y + sz * 0.3);
        ctx.lineTo(realX + sz, star.y);
        ctx.lineTo(realX, star.y - sz * 0.3);
        ctx.closePath();
        ctx.fill();

        // White core gleam
        ctx.beginPath();
        ctx.arc(realX, star.y, Math.max(0.6, sz * 0.25), 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 size-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
