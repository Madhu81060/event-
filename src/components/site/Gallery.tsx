"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, MessageCircle, Loader2, Sparkles } from "lucide-react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const shown = allGalleryItems.filter((i) => cat === "All Setups" || i.cat === cat);

  const openLightbox = (index: number) => {
    setImgLoaded(false);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setImgLoaded(false);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setImgLoaded(false);
      setLightboxIndex((lightboxIndex + 1) % shown.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setImgLoaded(false);
      setLightboxIndex((lightboxIndex - 1 + shown.length) % shown.length);
    }
  };

  // Lock body scroll and handle keyboard navigation when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % shown.length : null));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + shown.length) % shown.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, shown.length]);

  return (
    <section id="gallery" className="relative py-12 sm:py-16 bg-gradient-to-b from-amber-50/35 via-white/70 to-amber-50/25 backdrop-blur-[2px]">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="100% Real Celebrations"
          title="Mandaps & Luxury Stages Portfolio"
          description="Grand temple mandapams, reception setups, and festive decor crafted across Vijayawada & Eluru."
        />

        {/* Category Filter Tabs */}
        <Reveal className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((c) => {
            const count = allGalleryItems.filter((i) => c === "All Setups" || i.cat === c).length;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={cn(
                  "rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs",
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

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((item, i) => (
            <Reveal key={`${item.alt}-${i}`} delay={(i % 8) * 40}>
              <div
                onClick={() => openLightbox(i)}
                className="card-3d group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-stone-950 border border-amber-300/40 shadow-md transition-all duration-500 hover:border-amber-400 hover:shadow-2xl cursor-pointer aspect-4/3"
              >
                <img
                  src={getImageSrc(item.src)}
                  alt={item.alt}
                  loading="lazy"
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
                    <ZoomIn className="size-4" /> View Full HD
                  </span>
                </div>

                {/* Bottom Caption & WhatsApp Connect Bar */}
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
      </div>

      {/* Royal Gold Centered Fullscreen HD Lightbox Modal */}
      {lightboxIndex !== null && shown[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[lightboxIndex].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-xl select-none text-white animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Royal Decorative Frame Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col justify-between w-full max-w-4xl max-h-[90vh] rounded-3xl bg-gradient-to-b from-stone-900/95 via-stone-950/98 to-stone-900/95 border-2 border-amber-400 shadow-[0_0_60px_rgba(245,158,11,0.45)] ring-1 ring-amber-300/40 p-4 sm:p-5 overflow-hidden"
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between border-b border-amber-400/20 pb-3 z-10 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="shrink-0 rounded-full bg-amber-500 text-stone-950 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {shown[lightboxIndex].cat}
                </span>
                <h3 className="truncate font-display text-xs sm:text-sm font-bold text-amber-200">
                  {shown[lightboxIndex].alt}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-bold text-amber-300/90">
                  {lightboxIndex + 1} / {shown.length}
                </span>
                <button
                  aria-label="Close HD viewer"
                  onClick={closeLightbox}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-white transition-all cursor-pointer shadow-md"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Center Stage Image with Nav Arrows */}
            <div className="relative flex items-center justify-center w-full my-3 flex-1 min-h-0">
              {/* Previous Image Button */}
              <button
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-1 sm:left-3 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full bg-stone-900/85 text-amber-300 border border-amber-400/60 shadow-xl hover:bg-amber-500 hover:text-stone-950 hover:scale-110 transition-all cursor-pointer"
              >
                <ChevronLeft className="size-6 sm:size-7" />
              </button>

              {/* Main Image in Decorative Glow Frame */}
              <div className="relative max-h-full max-w-full flex items-center justify-center overflow-hidden rounded-2xl border border-amber-300/40 shadow-2xl bg-stone-950">
                {!imgLoaded && (
                  <div className="flex flex-col items-center justify-center py-16 px-8">
                    <Loader2 className="size-8 text-amber-400 animate-spin" />
                    <p className="mt-2 text-xs font-bold text-amber-200 tracking-wider uppercase">
                      Loading HD Showcase...
                    </p>
                  </div>
                )}
                <img
                  key={shown[lightboxIndex].alt}
                  src={getImageSrc(shown[lightboxIndex].src)}
                  alt={shown[lightboxIndex].alt}
                  loading="eager"
                  onLoad={() => setImgLoaded(true)}
                  className={cn(
                    "max-h-[50vh] sm:max-h-[58vh] md:max-h-[62vh] w-auto max-w-full object-contain rounded-2xl transition-all duration-200",
                    imgLoaded ? "opacity-100 scale-100 block" : "opacity-0 scale-95 absolute pointer-events-none",
                  )}
                />
              </div>

              {/* Next Image Button */}
              <button
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-1 sm:right-3 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full bg-stone-900/85 text-amber-300 border border-amber-400/60 shadow-xl hover:bg-amber-500 hover:text-stone-950 hover:scale-110 transition-all cursor-pointer"
              >
                <ChevronRight className="size-6 sm:size-7" />
              </button>
            </div>

            {/* Bottom Modal Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-amber-400/20 pt-3 z-10 shrink-0">
              <span className="text-[11px] font-bold text-amber-200 hidden sm:inline">
                ✨ Subhamasthu Events • Mandapams & Stages Portfolio
              </span>

              <div className="flex items-center gap-2.5 ml-auto">
                <a
                  href={getEventWhatsAppLink(shown[lightboxIndex].alt)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-104 cursor-pointer"
                >
                  <MessageCircle className="size-3.5" />
                  Inquire on WhatsApp
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-amber-400/80 bg-stone-900 text-amber-200 font-bold hover:bg-amber-500 hover:text-stone-950 text-xs px-3.5 py-2 cursor-pointer"
                  asChild
                >
                  <a href="#book" onClick={closeLightbox}>
                    Book Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
