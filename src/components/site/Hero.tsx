import { useEffect, useRef, useState } from "react";
import { CalendarDays, Images, MessageCircle, Sparkles, ChevronLeft, ChevronRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./Particles";
import { slides, PHONE, WHATSAPP_LINK } from "./data";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [isPaused]);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const active = slides[index]!;

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-[94dvh] min-h-[640px] max-h-[960px] w-full overflow-hidden pt-16 select-none bg-stone-950"
    >
      {/* 100% Crisp, High-Definition Background Slider */}
      <div className="absolute inset-0 size-full">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 size-full transition-opacity duration-1000 ease-in-out",
              i === index ? "opacity-100 z-10" : "opacity-0 z-0",
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
                "size-full object-cover object-center transform transition-transform duration-7000 ease-out",
                i === index ? "scale-103" : "scale-100",
              )}
            />
          </div>
        ))}
      </div>

      {/* Cinematic Gradient Vignette: Leaves the stage and mandap 100% visible while making text ultra-readable */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-black/25 z-20 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-950/20 to-transparent z-20 pointer-events-none"
        aria-hidden
      />

      <Particles />

      {/* Prev / Next Slide Floating Nav Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Setup"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/40 shadow-xl hover:bg-amber-500 hover:border-amber-400 hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronLeft className="size-6 sm:size-7" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Setup"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/40 shadow-xl hover:bg-amber-500 hover:border-amber-400 hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronRight className="size-6 sm:size-7" />
      </button>

      {/* Main Content Showcase */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Top Trust Badge */}
        <div className="pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-amber-400/50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 shadow-lg">
            <span className="flex text-amber-400">
              <Star className="size-3.5 fill-amber-400" />
            </span>
            <span>4.9/5 Rating • 1200+ Grand Celebrations • Hyderabad · Vijayawada · Eluru</span>
          </div>
        </div>

        {/* Center & Lower-Third Dynamic Hero Content */}
        <div className="max-w-3xl pb-2 sm:pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/90 text-white px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] shadow-md backdrop-blur-sm mb-3.5">
            <Sparkles className="size-3.5" />
            <span>{active.eyebrow}</span>
          </div>

          <h1
            key={active.title}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] tracking-tight leading-[1.12]"
          >
            {active.title}
          </h1>

          <p className="mt-3.5 max-w-2xl text-sm sm:text-base md:text-lg font-medium text-stone-200 drop-shadow-md leading-relaxed">
            {active.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="btn-gold-glow rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base font-black shadow-2xl cursor-pointer"
            >
              <a href="#book">
                <CalendarDays className="size-5 mr-2" />
                Book Free Consultation
              </a>
            </Button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 sm:px-6 py-3 text-sm sm:text-base font-bold text-white shadow-xl backdrop-blur-md transition hover:bg-emerald-500 hover:scale-104 cursor-pointer"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-amber-300/80 bg-black/40 text-amber-200 font-bold backdrop-blur-md hover:bg-amber-500 hover:text-white hover:border-amber-500 shadow-md cursor-pointer"
            >
              <a href="#gallery">
                <Images className="size-4.5 mr-1.5" />
                View 48+ Setups
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Strip */}
        <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <span>Featured Setups ({index + 1}/{slides.length}):</span>
          </div>

          <div className="grid grid-cols-6 gap-2 sm:gap-3 w-full sm:w-auto max-w-xl">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                aria-label={`Switch to ${s.title}`}
                className={cn(
                  "relative h-12 sm:h-14 overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-md group",
                  i === index
                    ? "border-amber-400 ring-2 ring-amber-400 scale-106 z-10"
                    : "border-white/40 opacity-70 hover:opacity-100 hover:border-amber-300",
                )}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  className="size-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                {i === index && (
                  <div className="absolute inset-0 bg-amber-500/20 pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
