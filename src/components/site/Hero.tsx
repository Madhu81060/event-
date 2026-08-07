import { useEffect, useRef, useState } from "react";
import { CalendarDays, Images, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./Particles";
import { slides } from "./data";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0, scroll: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setParallax((p) => ({
        ...p,
        x: (e.clientX / window.innerWidth - 0.5) * 26,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      }));
    };
    const onScroll = () => setParallax((p) => ({ ...p, scroll: window.scrollY * 0.25 }));
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const active = slides[index]!;

  return (
    <section id="home" ref={sectionRef} className="relative h-dvh min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1400ms] ease-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              width={1920}
              height={1088}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              className={cn(
                "size-full object-cover will-change-transform",
                i === index && "animate-ken-burns",
              )}
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y + parallax.scroll}px, 0)`,
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-veil)" }}
        aria-hidden
      />
      <div
        className="bg-gradient-luxe animate-gradient-pan absolute inset-0 opacity-20 mix-blend-soft-light"
        aria-hidden
      />

      <Particles />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pt-24 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-accent mb-4 text-xs font-semibold tracking-[0.35em] uppercase sm:text-sm">
            {active.eyebrow}
          </p>
          <h1
            key={active.title}
            className="font-display text-4xl leading-[1.05] font-bold text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
          >
            {active.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{active.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="2xl" variant="goldGlow">
              <a href="#book">
                <CalendarDays className="size-5" aria-hidden />
                Book Event
              </a>
            </Button>
            <Button asChild size="2xl" variant="glass">
              <a href="#gallery">
                <Images className="size-5" aria-hidden />
                Explore Gallery
              </a>
            </Button>
            <Button asChild size="2xl" variant="outlineLight">
              <a href="#showreel">
                <PlayCircle className="size-5" aria-hidden />
                Watch Video
              </a>
            </Button>
          </div>

          <div className="glass-card mt-10 grid max-w-2xl grid-cols-3 gap-4 rounded-[20px] p-5 text-center">
            {[
              { k: "1200+", v: "Events Crafted" },
              { k: "3", v: "Cities Served" },
              { k: "4.9★", v: "Client Rating" },
            ].map((s2) => (
              <div key={s2.v} className="transition-transform duration-500 hover:scale-105">
                <p className="font-display text-gradient-gold text-2xl font-bold sm:text-3xl">
                  {s2.k}
                </p>
                <p className="text-muted-foreground mt-1 text-[11px] tracking-wide uppercase sm:text-xs">
                  {s2.v}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3" role="tablist" aria-label="Hero slides">
            {slides.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide: ${s.title}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index ? "bg-gradient-gold w-12" : "w-6 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
