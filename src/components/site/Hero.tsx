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
      className="relative h-[94dvh] min-h-[640px] max-h-[960px] w-full overflow-hidden pt-16 select-none bg-stone-900"
    >
      {/* 100% Crisp, High-Definition Background Slider - Bright & Radiant */}
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
                "size-full object-cover object-center transform transition-transform duration-7000 ease-out brightness-105 contrast-102",
                i === index ? "scale-103" : "scale-100",
              )}
            />
          </div>
        ))}
      </div>

      {/* Luminous & Clean Ambient Lighting Scrim - Keeps stage photos bright while ensuring text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-black/10 z-20 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-950/50 via-transparent to-transparent z-20 pointer-events-none"
        aria-hidden
      />

      <Particles />

      {/* Prev / Next Slide Floating Nav Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Setup"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md border border-white/50 shadow-xl hover:bg-amber-500 hover:border-amber-400 hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronLeft className="size-6 sm:size-7" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Setup"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md border border-white/50 shadow-xl hover:bg-amber-500 hover:border-amber-400 hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronRight className="size-6 sm:size-7" />
      </button>

      {/* Main Content Showcase */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Top Trust Badge */}
        <div className="pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-950/60 backdrop-blur-md border border-amber-400/60 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 shadow-xl">
            <span className="flex text-amber-400">
              <Star className="size-3.5 fill-amber-400" />
            </span>
            <span>4.9/5 Rating • 1200+ Grand Celebrations • Vijayawada · Hyderabad · Eluru</span>
          </div>
        </div>

        {/* Center Dynamic Hero Card */}
        <div className="max-w-3xl pb-2 sm:pb-4 rounded-3xl bg-stone-950/45 backdrop-blur-md border border-white/20 p-5 sm:p-7 shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] shadow-md mb-3">
            <Sparkles className="size-3.5" />
            <span>{active.eyebrow}</span>
          </div>

          <h1
            key={active.title}
            className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] tracking-tight leading-[1.14]"
          >
            {active.title}
          </h1>

          <p className="mt-2.5 max-w-2xl text-xs sm:text-sm md:text-base font-medium text-stone-100 drop-shadow-md leading-relaxed">
            {active.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
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
        <div className="border-t border-white/25 pt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-950/40 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <span>Featured Setups ({index + 1}/{slides.length}):</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                aria-label={`Switch to ${s.title}`}
                className={cn(
                  "relative h-11 sm:h-13 w-16 sm:w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-md group",
                  i === index
                    ? "border-amber-400 ring-2 ring-amber-400 scale-106 z-10 opacity-100"
                    : "border-white/50 opacity-70 hover:opacity-100 hover:border-amber-300",
                )}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  className="size-full object-cover object-center group-hover:scale-110 transition-transform duration-300 brightness-105"
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
