"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Images,
  MessageCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  Eye,
  SlidersHorizontal,
  Flame,
  SunMedium,
  Heart,
  Moon,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MerupuluCanvas, AmbienceMood } from "./MerupuluCanvas";
import { Particles } from "./Particles";
import { slides, getEventWhatsAppLink, WHATSAPP_LINK } from "./data";
import { cn, getImageSrc } from "@/lib/utils";

const AMBIENCE_OPTIONS: {
  id: AmbienceMood;
  label: string;
  sublabel: string;
  icon: typeof Sparkles;
  gradient: string;
  ring: string;
}[] = [
  {
    id: "gold",
    label: "24K Royal Gold",
    sublabel: "Imperial Palace Glow",
    icon: SunMedium,
    gradient: "from-amber-500 to-yellow-600",
    ring: "ring-amber-400 border-amber-300",
  },
  {
    id: "rose",
    label: "Romantic Rose",
    sublabel: "Blush Floral Ambience",
    icon: Heart,
    gradient: "from-pink-500 to-rose-600",
    ring: "ring-pink-400 border-pink-300",
  },
  {
    id: "divine",
    label: "Celestial Stars",
    sublabel: "Diamond Starlight Shimmer",
    icon: Moon,
    gradient: "from-indigo-400 to-amber-300",
    ring: "ring-yellow-300 border-yellow-200",
  },
  {
    id: "temple",
    label: "Temple Vedic",
    sublabel: "Sacred Marigold Radiance",
    icon: Flame,
    gradient: "from-amber-600 to-emerald-600",
    ring: "ring-emerald-400 border-amber-400",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [mood, setMood] = useState<AmbienceMood>("gold");
  const [showMoodMenu, setShowMoodMenu] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  // Continuous automatic slideshow rotation (4.5 seconds per showcase)
  useEffect(() => {
    if (showMoodMenu) return; // Pause only when actively picking mood
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [showMoodMenu]);

  // Auto-scroll active thumbnail inside the thumbnail strip only (does not hijack page window scroll)
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const activeThumb = container.children[index] as HTMLElement | undefined;
    if (activeThumb) {
      const scrollLeft =
        activeThumb.offsetLeft -
        container.offsetWidth / 2 +
        activeThumb.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  }, [index]);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const active = slides[index]!;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[660px] h-[95dvh] max-h-[980px] w-full overflow-hidden pt-16 select-none bg-gradient-to-b from-amber-900/20 via-amber-950/30 to-amber-900/40"
    >
      {/* 100% Crisp, High-Definition Stage Photography Slider */}
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
              src={getImageSrc(slide.image)}
              alt={slide.alt}
              width={1920}
              height={1088}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              className={cn(
                "size-full object-cover object-center transform transition-transform duration-7000 ease-out brightness-105 contrast-[1.03] saturate-[1.05]",
                i === index ? "scale-103" : "scale-100",
              )}
            />
          </div>
        ))}
      </div>

      {/* Luminous Warm Ambient Scrim - No Black! Keeps stage decor bright, royal & radiant */}
      <div
        className={cn(
          "absolute inset-0 z-15 pointer-events-none transition-all duration-1000",
          mood === "gold" &&
            "bg-gradient-to-t from-amber-950/70 via-amber-950/15 to-transparent mix-blend-multiply",
          mood === "rose" &&
            "bg-gradient-to-t from-rose-950/70 via-pink-950/15 to-transparent mix-blend-multiply",
          mood === "divine" &&
            "bg-gradient-to-t from-indigo-950/65 via-amber-900/15 to-transparent mix-blend-multiply",
          mood === "temple" &&
            "bg-gradient-to-t from-stone-950/65 via-amber-950/15 to-transparent mix-blend-multiply",
        )}
        aria-hidden
      />

      {/* Subtle Warm Radiant Sunburst Glow on Top & Bottom */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_top_right] from-amber-300/20 via-transparent to-transparent z-15 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent z-15 pointer-events-none"
        aria-hidden
      />

      {/* Interactive Canvas Particle Sparkles & Lightning Shimmer ("Merupulu") */}
      <MerupuluCanvas mood={mood} />
      <Particles />

      {/* Prev / Next Slide Floating Nav Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Setup"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-35 flex size-11 sm:size-13 items-center justify-center rounded-full bg-stone-900/50 text-white backdrop-blur-xl border border-amber-300/50 shadow-[0_8px_25px_rgba(217,119,6,0.35)] hover:bg-amber-500 hover:border-amber-200 hover:scale-110 hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] transition-all cursor-pointer group"
      >
        <ChevronLeft className="size-6 sm:size-7 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Setup"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-35 flex size-11 sm:size-13 items-center justify-center rounded-full bg-stone-900/50 text-white backdrop-blur-xl border border-amber-300/50 shadow-[0_8px_25px_rgba(217,119,6,0.35)] hover:bg-amber-500 hover:border-amber-200 hover:scale-110 hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] transition-all cursor-pointer group"
      >
        <ChevronRight className="size-6 sm:size-7 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Main Content Showcase */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
        {/* Top Floating Bar: Trust Badge & Interactive Merupulu Ambience Preset Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/60 backdrop-blur-xl border border-amber-400/70 px-4 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-200 shadow-[0_4px_20px_rgba(217,119,6,0.3)]">
            <span className="flex text-amber-400">
              <Star className="size-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            </span>
            <span>4.9/5 Rating • 1200+ Grand Celebrations • Vijayawada · Eluru</span>
          </div>

          {/* New Feature: Dynamic Merupulu Ambience Lighting Mode Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowMoodMenu(!showMoodMenu)}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500/90 hover:bg-amber-400 text-stone-950 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.6)] backdrop-blur-xl border border-white/60 transition-all hover:scale-105 cursor-pointer"
              title="Change Stage Lighting Mood"
            >
              <Sparkles className="size-3.5 text-stone-950 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Ambience: {AMBIENCE_OPTIONS.find((o) => o.id === mood)?.label}</span>
              <SlidersHorizontal className="size-3 ml-1 text-stone-900" />
            </button>

            {showMoodMenu && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-stone-900/95 backdrop-blur-2xl border-2 border-amber-400/80 p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-2 py-1 text-[11px] font-black uppercase tracking-widest text-amber-300 border-b border-white/10 mb-1.5 flex items-center justify-between">
                  <span>✨ Lighting Merupulu Ambience</span>
                  <span className="text-[10px] text-amber-200/80 font-normal">Click to switch</span>
                </div>
                <div className="space-y-1">
                  {AMBIENCE_OPTIONS.map((opt) => {
                    const isSelected = mood === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setMood(opt.id);
                          setShowMoodMenu(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all cursor-pointer",
                          isSelected
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black shadow-md scale-[1.02]"
                            : "text-stone-200 hover:bg-white/10 hover:text-amber-300 font-bold",
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              "p-1.5 rounded-lg",
                              isSelected ? "bg-white/25 text-white" : "bg-stone-800 text-amber-400",
                            )}
                          >
                            <Icon className="size-3.5" />
                          </span>
                          <div>
                            <p className="text-xs">{opt.label}</p>
                            <p className="text-[10px] opacity-75 font-normal">{opt.sublabel}</p>
                          </div>
                        </div>
                        {isSelected && <Sparkle className="size-3 fill-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Left-Aligned Premium Royal Glassmorphic Hero Card (Leaves Stage Decor 100% Visible on Right/Center) */}
        <div className="my-auto max-w-lg lg:max-w-xl self-start rounded-3xl bg-stone-950/45 backdrop-blur-xl border border-amber-300/50 p-4.5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-3 py-0.5 text-[11px] font-black uppercase tracking-[0.16em] shadow-[0_2px_10px_rgba(217,119,6,0.4)] border border-amber-300/40">
              <Sparkles className="size-3 fill-amber-200 animate-pulse" />
              <span>{active.eyebrow}</span>
            </div>

            {active.tag && (
              <span className="rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/50 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-200">
                ⭐ {active.tag}
              </span>
            )}
          </div>

          <h1
            key={active.title}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] tracking-tight leading-[1.18]"
          >
            {active.title}
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-medium text-stone-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed">
            {active.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button
              asChild
              size="default"
              className="btn-gold-glow rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-black shadow-[0_8px_25px_rgba(245,158,11,0.5)] border border-amber-200/50 cursor-pointer"
            >
              <a href="#book" className="flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                <span>Book Consultation</span>
              </a>
            </Button>

            <a
              href={getEventWhatsAppLink(active.title)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_20px_rgba(5,150,105,0.4)] backdrop-blur-md transition-all hover:scale-104 border border-emerald-400/40 cursor-pointer"
              title="Book this stage on WhatsApp"
            >
              <MessageCircle className="size-4 fill-white/20" />
              <span>Inquire Stage</span>
            </a>

            <Button
              asChild
              size="default"
              variant="outline"
              className="rounded-full border border-amber-300/80 bg-stone-900/60 text-amber-200 font-bold text-xs backdrop-blur-xl hover:bg-amber-500 hover:text-stone-950 hover:border-amber-200 shadow-sm cursor-pointer transition-all px-3.5 py-2"
            >
              <a href="#gallery" className="flex items-center gap-1">
                <Images className="size-3.5 text-amber-300" />
                <span>55+ Setups</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Strip & Slide Tracker */}
        <div className="border-t border-amber-300/30 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-900/50 backdrop-blur-2xl rounded-2xl px-4 py-2.5 border border-amber-300/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-200">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-amber-400" />
              Featured Showcases ({index + 1}/{slides.length}):
            </span>
          </div>

          <div
            ref={thumbsRef}
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto scroll-smooth"
          >
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                aria-label={`Switch to ${s.title}`}
                className={cn(
                  "relative h-11 sm:h-13 w-16 sm:w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-400 cursor-pointer shadow-md group",
                  i === index
                    ? "border-amber-400 ring-2 ring-amber-400 scale-108 z-10 opacity-100 shadow-[0_0_22px_rgba(245,158,11,0.85)]"
                    : "border-white/40 opacity-70 hover:opacity-100 hover:border-amber-300 hover:scale-104",
                )}
              >
                <img
                  src={getImageSrc(s.image)}
                  alt={s.alt}
                  className="size-full object-cover object-center group-hover:scale-110 transition-transform duration-300 brightness-105"
                />
                {i === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-transparent pointer-events-none ring-1 ring-inset ring-amber-300" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
