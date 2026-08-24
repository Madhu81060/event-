"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Images,
  MessageCircle,
  Sparkles,
  SlidersHorizontal,
  Star,
  Sun,
  Heart,
  Moon,
  Flame,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  clientEvent1,
  clientEvent2,
  clientEvent7,
  clientEvent10,
  clientEvent13,
  clientEvent14,
  clientEvent23,
  clientEvent33,
  clientEvent42,
  clientEvent43,
  WHATSAPP_NUMBER,
} from "./data";
import { MerupuluCanvas, AmbienceMood } from "./MerupuluCanvas";
import { Particles } from "./Particles";
import { cn, getImageSrc } from "@/lib/utils";
import logo from "@/assets/logo-elite-events.png";

const slides = [
  {
    image: clientEvent43,
    eyebrow: "Royal Golden Heritage Mandapam",
    title: "Sacred Carved Temple Mandapams & Live Jasmine Canopies",
    subtitle:
      "Auspicious Lord Venkateswara Namam art, traditional brass kalashams, and royal golden carved pillars crafted for traditional Telugu weddings across Vijayawada & Eluru.",
    alt: "Grand Golden Carved Temple Wedding Mandapam with Fresh Flowers in Vijayawada",
    tag: "Signature Mandap",
  },
  {
    image: clientEvent10,
    eyebrow: "Grand Reception Gala Stage",
    title: "Imperial Chandeliers, Velvet Sofas & Floral Arches",
    subtitle:
      "Triple-layered crystal chandeliers, rich champagne velvet lounges, and cascading imported rose arches for couple stages.",
    alt: "Royal Luxury Wedding Stage with Chandeliers and Floral Arches in Vijayawada",
    tag: "Luxury Reception",
  },
  {
    image: clientEvent13,
    eyebrow: "Vedic Haldi & Pellikuthuru Ceremony",
    title: "Lotus Bath Urlis, Banana Leaves & Marigold Art",
    subtitle:
      "Vibrant turmeric traditions with carved wooden backdrops, brass urli water tubs, fresh marigold chandeliers, and floral umbrellas.",
    alt: "Traditional Telugu Haldi and Pellikuthuru Event Decor in Vijayawada",
    tag: "Vibrant Haldi",
  },
  {
    image: clientEvent42,
    eyebrow: "Modern Romantic Gala Stage",
    title: "Twin Floral Ring Backdrops & Warm Candle Aisles",
    subtitle:
      "Grand circular rose structures with ambient fairy light waterfalls and geometric golden plinths.",
    alt: "Circular Rose Stage Decoration for Engagement and Reception Gala",
    tag: "Romantic Gala",
  },
  {
    image: clientEvent7,
    eyebrow: "Traditional Pelli Koduku Setup",
    title: "Sacred Kalasham Mandapam & Coconut Leaf Craft",
    subtitle:
      "Authentic Telugu wedding traditions with green banana leaf arches, brass deepams, and temple bells.",
    alt: "Traditional Telugu Pelli Koduku Decor Setup in Andhra Pradesh",
    tag: "Heritage Rituals",
  },
  {
    image: clientEvent1,
    eyebrow: "Grand Entrance Welcome Arch",
    title: "Majestic Floral Tunnel & Royal Chandelier Portals",
    subtitle:
      "Impress your guests from the very first step with 100-foot floral tunnels, brass urlis, and warm pathway lighting.",
    alt: "Grand Royal Wedding Entrance Arch and Walkway Lighting",
    tag: "Grand Entrance",
  },
  {
    image: clientEvent2,
    eyebrow: "Imperial Couple Stage & Mandapam",
    title: "Golden Carved Temple Gopuram & Crystal Droplets",
    subtitle:
      "Bespoke stage architecture designed for large convention centres and five-star wedding resorts.",
    alt: "Imperial Royal Mandapam Stage with Golden Gopuram in Vijayawada",
    tag: "Imperial Stage",
  },
  {
    image: clientEvent14,
    eyebrow: "Sangeet & Cocktail Night Gala",
    title: "LED Tunnel Portals, Neon Vibes & Concert Sound",
    subtitle:
      "High-energy celebration stages with intelligent beam moving heads, cold pyros, low-lying fog, and celebrity DJ consoles.",
    alt: "Sangeet and Cocktail Party Stage Lighting and Sound Production",
    tag: "Sangeet Night",
  },
  {
    image: clientEvent23,
    eyebrow: "Floral Canopy & Aisle Walkway",
    title: "Suspended Orchids, Crystal Bells & Ambient Glow",
    subtitle:
      "Walking down the aisle amidst thousands of handpicked fresh orchids and soft candlelit glass walkways.",
    alt: "Bridal Floral Walkway with Suspended Orchids and Warm Lighting",
    tag: "Bridal Entry",
  },
  {
    image: clientEvent33,
    eyebrow: "Festive Birthday & Cradle Ceremony",
    title: "Fairytale Thematic Decors & Balloon Artistry",
    subtitle:
      "Custom 3D character cutouts, organic pastel balloon arches, and customized candy dessert tables.",
    alt: "Luxury Birthday Party and Cradle Ceremony Decoration",
    tag: "Thematic Birthday",
  },
];

const AMBIENCE_OPTIONS: {
  id: AmbienceMood;
  label: string;
  sublabel: string;
  icon: typeof Sun;
}[] = [
  {
    id: "gold",
    label: "Royal Gold",
    sublabel: "Warm Sparkling Amber Glow",
    icon: Sun,
  },
  {
    id: "rose",
    label: "Rose Romance",
    sublabel: "Pastel Pink & Magenta Stars",
    icon: Heart,
  },
  {
    id: "divine",
    label: "Divine Amethyst",
    sublabel: "Celestial Violet & Golden Hues",
    icon: Moon,
  },
  {
    id: "temple",
    label: "Temple Vedic",
    sublabel: "Sacred Marigold Radiance",
    icon: Flame,
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

  // Auto-scroll active thumbnail inside the thumbnail strip only
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

  const getEventWhatsAppLink = (stageTitle: string) => {
    const msg = `Hello Subhamasthu Events,\nI am interested in booking your setup: "${stageTitle}".\n\nPlease share availability and customized packages for my event in Vijayawada / Eluru.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[580px] sm:min-h-[640px] h-auto sm:h-[94dvh] max-h-[960px] w-full overflow-hidden pt-14 sm:pt-16 select-none bg-gradient-to-b from-amber-900/20 via-amber-950/30 to-amber-900/40"
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

      {/* Luminous Warm Ambient Scrim - Keeps stage decor bright, royal & radiant */}
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

      {/* Subtle Warm Radiant Sunburst Glow */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_top_right] from-amber-300/20 via-transparent to-transparent z-15 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 sm:h-40 bg-gradient-to-t from-black/50 to-transparent z-15 pointer-events-none"
        aria-hidden
      />

      {/* Interactive Canvas Particle Sparkles */}
      <MerupuluCanvas mood={mood} />
      <Particles />

      {/* Prev / Next Slide Floating Nav Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Setup"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-35 flex size-9 sm:size-11 md:size-13 items-center justify-center rounded-full bg-stone-900/60 text-white backdrop-blur-xl border border-amber-300/50 shadow-[0_8px_25px_rgba(217,119,6,0.35)] hover:bg-amber-500 hover:text-stone-950 hover:scale-110 transition-all cursor-pointer group"
      >
        <ChevronLeft className="size-5 sm:size-6 md:size-7 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Setup"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-35 flex size-9 sm:size-11 md:size-13 items-center justify-center rounded-full bg-stone-900/60 text-white backdrop-blur-xl border border-amber-300/50 shadow-[0_8px_25px_rgba(217,119,6,0.35)] hover:bg-amber-500 hover:border-amber-200 hover:scale-110 transition-all cursor-pointer group"
      >
        <ChevronRight className="size-5 sm:size-6 md:size-7 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Main Content Showcase */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 gap-3">
        {/* Top Floating Bar: Trust Badge & Interactive Merupulu Ambience Preset Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-stone-900/70 backdrop-blur-xl border border-amber-400/70 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-200 shadow-md">
            <span className="flex text-amber-400">
              <Star className="size-3 sm:size-3.5 fill-amber-400 text-amber-400" />
            </span>
            <span className="hidden sm:inline">4.9/5 Rating • 1200+ Grand Celebrations • Vijayawada · Eluru</span>
            <span className="sm:hidden">4.9/5 Rating • 1200+ Celebrations</span>
          </div>

          {/* Ambience Lighting Mode Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowMoodMenu(!showMoodMenu)}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-amber-500/90 hover:bg-amber-400 text-stone-950 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10.5px] sm:text-xs font-black uppercase tracking-wider shadow-md backdrop-blur-xl border border-white/60 transition-all hover:scale-105 cursor-pointer"
              title="Change Stage Lighting Mood"
            >
              <Sparkles className="size-3 sm:size-3.5 text-stone-950 animate-spin" style={{ animationDuration: "6s" }} />
              <span>{AMBIENCE_OPTIONS.find((o) => o.id === mood)?.label}</span>
              <SlidersHorizontal className="size-2.5 sm:size-3 ml-0.5 text-stone-900" />
            </button>

            {showMoodMenu && (
              <div className="absolute right-0 top-full mt-2 w-60 sm:w-64 rounded-2xl bg-stone-900/95 backdrop-blur-2xl border-2 border-amber-400/80 p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-2 py-1 text-[11px] font-black uppercase tracking-widest text-amber-300 border-b border-white/10 mb-1.5 flex items-center justify-between">
                  <span>✨ Ambience Lighting</span>
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
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "p-1 rounded-lg",
                              isSelected ? "bg-white/25 text-white" : "bg-stone-800 text-amber-400",
                            )}
                          >
                            <Icon className="size-3 sm:size-3.5" />
                          </span>
                          <div>
                            <p className="text-xs">{opt.label}</p>
                            <p className="text-[9.5px] opacity-75 font-normal">{opt.sublabel}</p>
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

        {/* Left-Aligned Royal Glassmorphic Hero Card */}
        <div className="my-auto max-w-lg lg:max-w-xl self-start rounded-2xl sm:rounded-3xl bg-stone-950/55 backdrop-blur-xl border border-amber-300/50 p-4 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="flex size-11 sm:size-13 items-center justify-center rounded-full bg-white p-0.5 border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] ring-2 ring-amber-300/60 shrink-0 overflow-hidden">
              <img
                src={getImageSrc(logo)}
                alt="Shubhamastu Events Official Logo"
                width={52}
                height={52}
                className="size-full rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-2.5 sm:px-3 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] shadow-sm border border-amber-300/40">
                  <Sparkles className="size-2.5 sm:size-3 fill-amber-200" />
                  <span>{active.eyebrow}</span>
                </span>
                {active.tag && (
                  <span className="rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/50 px-2 sm:px-2.5 py-0.5 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-amber-200">
                    ⭐ {active.tag}
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-amber-300 mt-0.5 uppercase tracking-wider">
                Shubhamastu Events • Eluru · Vijayawada
              </p>
            </div>
          </div>

          <h1
            key={active.title}
            className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] tracking-tight leading-[1.2]"
          >
            {active.title}
          </h1>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-stone-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] leading-relaxed line-clamp-3 sm:line-clamp-none">
            {active.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
            <Button
              asChild
              size="sm"
              className="btn-gold-glow rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-black shadow-md border border-amber-200/50 cursor-pointer"
            >
              <a href="#book" className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5 sm:size-4" />
                <span>Book Consultation</span>
              </a>
            </Button>

            <a
              href={getEventWhatsAppLink(active.title)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md backdrop-blur-md transition-all hover:scale-104 border border-emerald-400/40 cursor-pointer"
              title="Book this stage on WhatsApp"
            >
              <MessageCircle className="size-3.5 sm:size-4" />
              <span>Inquire Stage</span>
            </a>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border border-amber-300/80 bg-stone-900/60 text-amber-200 font-bold text-xs backdrop-blur-xl hover:bg-amber-500 hover:text-stone-950 hover:border-amber-200 shadow-sm cursor-pointer transition-all px-3 py-1.5 sm:py-2"
            >
              <a href="#gallery" className="flex items-center gap-1">
                <Images className="size-3 text-amber-300" />
                <span>55+ Setups</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Strip & Slide Tracker */}
        <div className="border-t border-amber-300/30 pt-2 sm:pt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-stone-900/60 backdrop-blur-2xl rounded-2xl px-3 sm:px-4 py-2 border border-amber-300/30 shadow-md">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-200 shrink-0">
            <Sparkles className="size-3 sm:size-3.5 text-amber-400" />
            <span>Showcases ({index + 1}/{slides.length}):</span>
          </div>

          <div
            ref={thumbsRef}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto scroll-smooth"
          >
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                aria-label={`Switch to ${s.title}`}
                className={cn(
                  "relative h-9 sm:h-12 w-14 sm:w-18 shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-xs group",
                  i === index
                    ? "border-amber-400 ring-2 ring-amber-400 scale-105 z-10 opacity-100 shadow-[0_0_15px_rgba(245,158,11,0.8)]"
                    : "border-white/40 opacity-70 hover:opacity-100 hover:border-amber-300",
                )}
              >
                <img
                  src={getImageSrc(s.image)}
                  alt={s.alt}
                  className="size-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
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
