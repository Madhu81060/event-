"use client";

import { useState } from "react";
import { ZoomIn, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn, getImageSrc } from "@/lib/utils";
import {
  getEventWhatsAppLink,
  clientEvent1,
  clientEvent2,
  clientEvent3,
  clientEvent4,
  clientEvent5,
  clientEvent6,
  clientEvent7,
  clientEvent8,
  clientEvent9,
  clientEvent10,
  clientEvent11,
  clientEvent12,
  clientEvent13,
  clientEvent14,
  clientEvent15,
  clientEvent16,
  clientEvent17,
  clientEvent18,
  clientEvent19,
  clientEvent20,
  clientEvent21,
  clientEvent22,
  clientEvent23,
  clientEvent24,
  clientEvent25,
  clientEvent26,
  clientEvent27,
  clientEvent28,
  clientEvent29,
  clientEvent30,
  clientEvent31,
  clientEvent32,
  clientEvent33,
  clientEvent34,
  clientEvent35,
  clientEvent36,
  clientEvent37,
  clientEvent38,
  clientEvent39,
  clientEvent40,
  clientEvent41,
  clientEvent42,
  clientEvent43,
  clientEvent44,
  clientEvent45,
  clientEvent46,
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  heroNewGanesha,
  heroNewLoveGanesha,
  heroNewVenkateswara,
  heroNewDomeEdison,
  heroNewBananaCanopy,
} from "./data";

type Item = {
  src: any;
  alt: string;
  cat: string;
};

// 54+ Verified, Crystal-Clear Right-Side-Up Real Event Photographs
const allGalleryItems: Item[] = [
  {
    src: heroNewLoveGanesha,
    alt: "Grand Double Heart 'Love' Neon & Golden Ganesha Wedding Reception Stage with Glowing Wing Pillars",
    cat: "Reception & Stages",
  },
  {
    src: heroNewGanesha,
    alt: "Imperial Traditional South Indian Mandap with Live Banana Trees, Golden Ganesha Sanctum & Rose Dwaram",
    cat: "Kalyana Mandapams",
  },
  {
    src: heroNewVenkateswara,
    alt: "Sacred Tirupati Balaji & Padmavathi Palace Mandapam with Silver Carved Pillars & Pink Silk Drapes",
    cat: "Kalyana Mandapams",
  },
  {
    src: heroNewDomeEdison,
    alt: "Blush Rose Dome & Warm Edison Light Reception Stage with Illuminated Leaf Pillars & Royal Sofa",
    cat: "Reception & Stages",
  },
  {
    src: heroNewBananaCanopy,
    alt: "Eco-Heritage Telugu Wedding Mandap with Fresh Banana Leaf Roof Canopy, Temple Bells & Wooden Thrones",
    cat: "Kalyana Mandapams",
  },
  {
    src: hero5,
    alt: "Blush Peach Floral Reception Stage with Edison Lights & Royal Tufted Sofa",
    cat: "Reception & Stages",
  },
  {
    src: hero1,
    alt: "Imperial Domed Floral Canopy Mandap with Golden Carved Dwaram & Elephants",
    cat: "Kalyana Mandapams",
  },
  {
    src: hero2,
    alt: "Grand Traditional Temple Gopuram Mandap with Silver Pillars & Red Velvet Throne",
    cat: "Kalyana Mandapams",
  },
  {
    src: hero3,
    alt: "Circular Floral Ring Arch with Fairy Lights, Gold Sofa & Floor Rangoli",
    cat: "Reception & Stages",
  },
  {
    src: hero4,
    alt: "Grand Floral Lawn Stage with Golden Jaali Pillars & Waterfall Fairy Lights",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent28,
    alt: "Royal Kalyana Mandapam with Red Rose Velvet & Golden Kalasam Backdrop",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent43,
    alt: "Golden Carved Temple Mandap with Sacred Namam & Cascading Jasmine Canopy",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent39,
    alt: "Grand Kalyana Mandapam with Golden Peacock Crest & Floral Tassels",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent32,
    alt: "Sacred Tirupati Kalasam & Lord Venkateswara Bell Mandapam with Gold Pillars",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent42,
    alt: "Circular Red Rose Arch Luxury Stage with Royal Golden Carved Sofa",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent29,
    alt: "Royal Peacock Fan Sofa Reception Stage with Multi-Color Floral Canopy",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent45,
    alt: "Round Floral Wreath Arch with Royal Peacock Settee & Gold Pedestals",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent25,
    alt: "Fairy Light Curtain & Golden Candle Arch Luxury Reception Stage",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent16,
    alt: "Grand Golden Lotus Bath Tub & Floral Brass Urlis Haldi Mandap",
    cat: "Haldi & Traditions",
  },
  {
    src: clientEvent13,
    alt: "Traditional Banana Leaf & Hanging Marigolds Haldi Ceremony Setup",
    cat: "Haldi & Traditions",
  },
  {
    src: clientEvent34,
    alt: "Lord Ganesha Banana Leaf Backdrop with 5 Flower-Bordered Brass Urlis",
    cat: "Haldi & Traditions",
  },
  {
    src: clientEvent14,
    alt: "Royal Golden Swan Throne & Fresh Petal Urli Mandap Setup",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent44,
    alt: "Palace-Scale Mandap Production with Kalasam Temple Pillars & Concert Rig",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent26,
    alt: "Royal Temple Gopuram Mandap with Carved Silver Pillars & Maharaja Throne",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent27,
    alt: "Grand Traditional Ganesha Wedding Stage with Gold Pillars & Rainbow Floral Arch",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent31,
    alt: "Sacred Tirupati Namam Mandapam with Jasmine Waterfall Canopy & Gold Pillars",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent38,
    alt: "Circular Floral Arch Reception Stage with Royal Victorian Sofa",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent37,
    alt: "Purple Drapery Wedding Reception Stage with Royal Sofa & Ring Motif",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent40,
    alt: "Floral Arch Stage with Patterned Tapestry Royal Couch & Golden Pedestals",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent24,
    alt: "Santhosh & Prasanna Couple Name Themed Luxury Stage with Swan Statues",
    cat: "Engagement",
  },
  {
    src: clientEvent23,
    alt: "White Satin Daisy Wreath Arch Engagement & Reception Stage",
    cat: "Engagement",
  },
  {
    src: clientEvent6,
    alt: "Name-Themed Floral Backdrop for Sathwik & Akshaya Ceremony with Swan Motifs",
    cat: "Engagement",
  },
  {
    src: clientEvent18,
    alt: "Mokshagna 1 Hot Air Balloon & Illuminated Marquee Letters Theme Stage",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent19,
    alt: "Vedhasri 1 Cocomelon & Boss Baby Themed Birthday Production",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent20,
    alt: "Medhansh 1 Royal Gold Drapery & Mickey Mouse Birthday Stage",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent21,
    alt: "Shanmukha Priya Turning One Pink Butterfly & Rose Gold Stage",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent12,
    alt: "Lakshmi Swecha 1st Birthday Butterfly & Floral Theme Stage",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent17,
    alt: "Mickey Mouse & Rainbow Balloon Theme 1st Birthday Stage",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent22,
    alt: "Rithvin Ram Baby Shark & Cocomelon Milestone Birthday Production",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent11,
    alt: "Bal Krishna & Yashoda Naming Ceremony & 1st Birthday Backdrop",
    cat: "1st Birthday Themes",
  },
  {
    src: clientEvent10,
    alt: "Royal Wedding Hall Setup with Golden Banquet Seating and Illuminated Stage",
    cat: "Reception & Stages",
  },
  {
    src: clientEvent33,
    alt: "Royal Palace Dwaram Red Rose Bell Mandapam with Antique Temple Pillars",
    cat: "Kalyana Mandapams",
  },
  {
    src: clientEvent35,
    alt: "Grand Ganesha Tiered Floral Canopy Mandap with Golden Arches",
    cat: "Kalyana Mandapams",
  },
];

const categories = [
  "All Setups",
  "Kalyana Mandapams",
  "Reception & Stages",
  "1st Birthday Themes",
  "Haldi & Traditions",
  "Engagement",
];

export function Gallery() {
  const [cat, setCat] = useState("All Setups");
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const shown = allGalleryItems.filter((i) => cat === "All Setups" || i.cat === cat);
  const displayedItems = shown.slice(0, visibleCount);

  // Keep selected index within range when category changes
  const activeIndex = Math.min(selectedStageIndex, Math.max(0, shown.length - 1));
  const activeStage = shown[activeIndex] || shown[0];

  const handleCategoryChange = (newCat: string) => {
    setCat(newCat);
    setSelectedStageIndex(0);
    setVisibleCount(12);
  };

  const selectStage = (index: number) => {
    setIsTransitioning(true);
    setSelectedStageIndex(index);
    setTimeout(() => setIsTransitioning(false), 250);

    const el = document.getElementById("gallery-spotlight");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const nextStage = () => {
    if (shown.length === 0) return;
    setIsTransitioning(true);
    setSelectedStageIndex((prev) => (prev + 1) % shown.length);
    setTimeout(() => setIsTransitioning(false), 250);
  };

  const prevStage = () => {
    if (shown.length === 0) return;
    setIsTransitioning(true);
    setSelectedStageIndex((prev) => (prev - 1 + shown.length) % shown.length);
    setTimeout(() => setIsTransitioning(false), 250);
  };

  return (
    <section id="gallery" className="relative py-12 sm:py-16 bg-gradient-to-b from-amber-50/35 via-white/70 to-amber-50/25 backdrop-blur-[2px]">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="100% Real Celebrations • High Definition"
          title="Mandaps & Luxury Stages Portfolio"
          description="Grand temple mandapams, reception setups, and festive decor crafted across Vijayawada & Eluru."
        />

        {/* Category Filter Tabs */}
        <Reveal className="mt-6 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none touch-scroll-x sm:flex-wrap sm:justify-center">
          {categories.map((c) => {
            const count = allGalleryItems.filter((i) => c === "All Setups" || i.cat === c).length;
            return (
              <button
                key={c}
                onClick={() => handleCategoryChange(c)}
                aria-pressed={cat === c}
                className={cn(
                  "rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs whitespace-nowrap shrink-0",
                  cat === c
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black shadow-md scale-104 ring-2 ring-amber-400"
                    : "bg-white/90 text-stone-700 hover:bg-amber-100 hover:text-amber-900 border border-amber-200/80",
                )}
              >
                {c} ({count})
              </button>
            );
          })}
        </Reveal>

        {/* GRAND FEATURED HD STAGE SPOTLIGHT (Inline On-Page Luxury Viewer) */}
        {activeStage && (
          <div id="gallery-spotlight" className="mt-8 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-950 border-2 border-amber-400/70 shadow-2xl">
            <div className="relative aspect-4/3 xs:aspect-16/10 sm:aspect-16/9 lg:aspect-21/9 min-h-[300px] sm:min-h-[420px] max-h-[680px] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                key={activeStage.alt}
                src={getImageSrc(activeStage.src)}
                alt={activeStage.alt}
                loading="eager"
                decoding="async"
                className={cn(
                  "size-full object-contain object-center transition-all duration-500 select-none",
                  isTransitioning ? "opacity-40 scale-98" : "opacity-100 scale-100",
                )}
              />

              {/* Ambient Golden Frame Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-stone-950/40 pointer-events-none" />

              {/* Top Meta Bar */}
              <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between z-20 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-amber-500 text-stone-950 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md shrink-0">
                    <Sparkles className="size-3 sm:size-3.5" />
                    {activeStage.cat}
                  </span>
                  <span className="hidden sm:inline-block rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-amber-200 border border-amber-400/30 truncate">
                    Shubhamastu Events • Vijayawada · Eluru
                  </span>
                </div>

                <div className="rounded-full bg-black/70 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black text-amber-300 border border-amber-400/30 shrink-0">
                  {activeIndex + 1} / {shown.length} Setups
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                aria-label="Previous stage setup"
                onClick={prevStage}
                className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-12 lg:size-14 items-center justify-center rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-400/60 shadow-2xl transition-all cursor-pointer backdrop-blur-md hover:scale-108"
              >
                <ChevronLeft className="size-5 sm:size-7 lg:size-8" />
              </button>

              <button
                aria-label="Next stage setup"
                onClick={nextStage}
                className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-12 lg:size-14 items-center justify-center rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-400/60 shadow-2xl transition-all cursor-pointer backdrop-blur-md hover:scale-108"
              >
                <ChevronRight className="size-5 sm:size-7 lg:size-8" />
              </button>

              {/* Bottom Caption & Live Inquire Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 lg:p-6 z-20 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4">
                <div className="max-w-2xl min-w-0">
                  <h3 className="font-display text-xs sm:text-base md:text-xl lg:text-2xl font-black text-white leading-snug drop-shadow-md line-clamp-2 sm:line-clamp-none">
                    {activeStage.alt}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-amber-300 font-semibold mt-0.5 sm:mt-1 truncate">
                    ✓ Handcrafted Mandap & Stage Architecture • In-House Fabrication
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0 w-full sm:w-auto">
                  <a
                    href={getEventWhatsAppLink(activeStage.alt)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-104 cursor-pointer"
                  >
                    <MessageCircle className="size-3.5 sm:size-4.5" />
                    Inquire Setup
                  </a>

                  <a
                    href="#book"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-amber-300/80 bg-amber-500/20 hover:bg-amber-500 hover:text-stone-950 text-amber-200 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
                  >
                    <Sparkles className="size-3.5 sm:size-4" />
                    Book Consult
                  </a>
                </div>
              </div>
            </div>

            {/* Filmstrip of Thumbnails */}
            <div className="p-2.5 sm:p-3 bg-stone-900 border-t border-amber-400/30 flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none touch-scroll-x">
              {shown.map((item, idx) => (
                <button
                  key={`${item.alt}-thumb-${idx}`}
                  onClick={() => selectStage(idx)}
                  className={cn(
                    "relative size-14 sm:size-18 lg:size-20 shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all cursor-pointer",
                    activeIndex === idx
                      ? "border-amber-400 ring-2 ring-amber-300 scale-105 shadow-md"
                      : "border-white/20 opacity-60 hover:opacity-100 hover:border-amber-200",
                  )}
                >
                  <img
                    src={getImageSrc(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                  {activeIndex === idx && (
                    <div className="absolute inset-0 bg-amber-500/20 border-2 border-amber-400 rounded-xl" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Grid of All Setups */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display text-lg sm:text-xl font-bold text-stone-900">
              Browse All {shown.length} Mandaps & Stage Designs
            </h4>
            <span className="text-xs font-semibold text-amber-800">
              Click any photo to feature it above ↑
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedItems.map((item, i) => (
              <Reveal key={`${item.alt}-${i}`} delay={(i % 8) * 40}>
                <div
                  onClick={() => selectStage(i)}
                  className={cn(
                    "card-3d group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-stone-950 border transition-all duration-300 cursor-pointer aspect-4/3 shadow-md",
                    activeIndex === i
                      ? "border-amber-400 ring-2 ring-amber-400 shadow-xl"
                      : "border-amber-300/40 hover:border-amber-400 hover:shadow-xl",
                  )}
                >
                  <img
                    src={getImageSrc(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={450}
                    className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="relative z-20 flex items-center justify-between p-3">
                    <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-300 border border-amber-300/30">
                      {item.cat}
                    </span>
                    <a
                      href={getEventWhatsAppLink(item.alt)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 rounded-full bg-emerald-600/90 hover:bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-xs backdrop-blur-md transition-colors"
                    >
                      <MessageCircle className="size-3.5 fill-white/20" />
                      Inquire
                    </a>
                  </div>

                  {/* Center Hover Zoom Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="flex items-center gap-1.5 rounded-full bg-amber-500/95 backdrop-blur-md px-4 py-2 text-xs font-black text-stone-950 shadow-xl">
                      <ZoomIn className="size-4" /> View in Spotlight
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="relative z-20 p-3 flex flex-col gap-1 text-left text-white">
                    <p className="line-clamp-2 font-display text-xs sm:text-sm font-bold text-stone-100 drop-shadow-md">
                      {item.alt}
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-white/15">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                        Vijayawada · Eluru
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Load More Button */}
          {shown.length > visibleCount && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="btn-gold-glow rounded-full px-6 py-3 text-xs sm:text-sm font-black shadow-lg cursor-pointer"
              >
                <Sparkles className="size-4 mr-1.5" />
                Load More Setups ({shown.length - visibleCount} More)
              </Button>
              <Button
                variant="outline"
                onClick={() => setVisibleCount(shown.length)}
                className="rounded-full border-amber-300/80 bg-white/90 text-stone-800 hover:bg-amber-100 font-bold text-xs sm:text-sm px-5 py-3 cursor-pointer shadow-xs"
              >
                Show All ({shown.length}) Setups
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
