import { useState, useEffect } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, MessageCircle, Loader2, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  src: string;
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

  // Preload adjacent images for instant next/prev viewing
  useEffect(() => {
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % shown.length;
      const prevIdx = (lightboxIndex - 1 + shown.length) % shown.length;
      if (shown[nextIdx]) {
        const imgNext = new Image();
        imgNext.src = shown[nextIdx].src;
      }
      if (shown[prevIdx]) {
        const imgPrev = new Image();
        imgPrev.src = shown[prevIdx].src;
      }
    }
  }, [lightboxIndex, shown]);

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
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md scale-103 ring-2 ring-amber-300"
                    : "bg-white text-stone-700 border border-amber-200 hover:text-amber-800 hover:bg-amber-100/60",
                )}
              >
                {c} <span className="ml-1 opacity-80 text-[11px]">({count})</span>
              </button>
            );
          })}
        </Reveal>

        {/* Dynamic Portfolio Status Bar (Replaces empty white space with interactive info) */}
        <Reveal delay={80} className="mt-5">
          <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl bg-amber-100/80 border border-amber-300/80 px-4 py-2 text-xs font-bold text-amber-950 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Showing <strong className="text-amber-900">{shown.length} Real Event Setups</strong> in {cat}
              </span>
            </div>
            <div className="flex items-center gap-2 text-amber-800 text-[11px] sm:text-xs font-semibold">
              <span>✨ Tap any photo to zoom in HD</span>
              <span className="hidden sm:inline">• Direct WhatsApp booking available</span>
            </div>
          </div>
        </Reveal>

        {/* Wide Full-Bleed Gallery Grid with Beautiful Golden Borders & Zero Margin Wastes */}
        <div
          id="showreel"
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {shown.map((item, i) => (
            <Reveal
              key={`${item.alt}-${i}`}
              delay={(i % 8) * 35}
              className="h-[280px] sm:h-[310px] w-full"
            >
              <div
                onClick={() => openLightbox(i)}
                className="group relative flex flex-col justify-end size-full overflow-hidden rounded-2xl bg-white border-2 border-amber-200 shadow-md transition-all duration-400 hover:border-amber-500 hover:shadow-2xl cursor-pointer select-none"
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.alt}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                />

                {/* Subtle Bottom Shade */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                />

                {/* Top Category Badge & Direct WhatsApp Quick Action */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                  <span className="shrink-0 rounded-full bg-stone-950/70 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-300 shadow-sm">
                    {item.cat}
                  </span>

                  <a
                    href={getEventWhatsAppLink(item.alt)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-md transition hover:bg-emerald-500 hover:scale-105 cursor-pointer"
                    title="Inquire this decor on WhatsApp"
                  >
                    <MessageCircle className="size-3.5 fill-white/20" />
                    Inquire
                  </a>
                </div>

                {/* Center Hover Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="flex items-center gap-1.5 rounded-full bg-amber-500/95 backdrop-blur-md px-4 py-2 text-xs font-black text-white shadow-xl">
                    <ZoomIn className="size-4" /> View Full HD
                  </span>
                </div>

                {/* Bottom Caption & WhatsApp Connect Bar */}
                <div className="relative z-20 p-3.5 flex flex-col gap-2 text-left text-white">
                  <p className="line-clamp-2 font-display text-xs sm:text-sm font-bold text-stone-100 drop-shadow-md">
                    {item.alt}
                  </p>
                  <div className="flex items-center justify-between pt-1 border-t border-white/15">
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                      Vijayawada · Eluru
                    </span>
                    <a
                      href={getEventWhatsAppLink(item.alt)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-300 hover:text-emerald-200 transition-colors"
                    >
                      <MessageCircle className="size-3.5" /> Book on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen HD Modal — Responsive Luxury Dialog Card (No Vertical Scrolling, Fits Screen Flawlessly) */}
      {lightboxIndex !== null && shown[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[lightboxIndex].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/85 backdrop-blur-md p-3 sm:p-5 md:p-6 overflow-hidden animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col w-full max-w-4xl max-h-[94vh] rounded-3xl bg-stone-950/95 border-2 border-amber-400/80 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Top Modal Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-amber-400/20 bg-stone-900/80">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="shrink-0 rounded-full bg-amber-500/20 border border-amber-400/60 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-300">
                  {shown[lightboxIndex].cat}
                </span>
                <h3 className="truncate font-display text-xs sm:text-sm font-bold text-stone-100">
                  {shown[lightboxIndex].alt}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-bold text-amber-300/80">
                  {lightboxIndex + 1} / {shown.length}
                </span>
                <button
                  aria-label="Close HD viewer"
                  onClick={closeLightbox}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 text-stone-200 hover:text-stone-950 transition-all cursor-pointer"
                >
                  <X className="size-4.5" />
                </button>
              </div>
            </div>

            {/* Center Stage Image Container with Left/Right Arrow Navigators */}
            <div className="relative flex items-center justify-center bg-black/60 min-h-[280px] max-h-[60vh] sm:max-h-[66vh] overflow-hidden p-2 sm:p-4">
              {/* Previous Image Button */}
              <button
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 sm:left-4 z-20 flex size-10 sm:size-11 items-center justify-center rounded-full bg-stone-950/70 hover:bg-amber-500 text-white hover:text-stone-950 border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Next Image Button */}
              <button
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 sm:right-4 z-20 flex size-10 sm:size-11 items-center justify-center rounded-full bg-stone-950/70 hover:bg-amber-500 text-white hover:text-stone-950 border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-lg"
              >
                <ChevronRight className="size-6" />
              </button>

              {/* Loading Spinner */}
              {!imgLoaded && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="size-9 text-amber-400 animate-spin" />
                  <p className="mt-2 text-xs font-bold text-amber-200 tracking-wider uppercase">
                    Loading HD Showcase...
                  </p>
                </div>
              )}

              {/* HD Image */}
              <img
                src={shown[lightboxIndex].src}
                alt={shown[lightboxIndex].alt}
                loading="eager"
                decoding="async"
                onLoad={() => setImgLoaded(true)}
                className={cn(
                  "max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full rounded-xl object-contain shadow-xl transition-all duration-300",
                  imgLoaded ? "opacity-100 scale-100 block" : "opacity-0 scale-95 absolute pointer-events-none",
                )}
              />
            </div>

            {/* Bottom Modal Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 sm:px-6 py-3 border-t border-amber-400/20 bg-stone-900/90">
              <span className="text-[11px] font-bold text-amber-200 hidden sm:inline">
                ✨ 100% Real Elite Events Production
              </span>

              <div className="flex items-center gap-2.5 ml-auto">
                <a
                  href={getEventWhatsAppLink(shown[lightboxIndex].alt)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 sm:px-5 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-104 cursor-pointer"
                >
                  <MessageCircle className="size-4 fill-white/20" />
                  Inquire on WhatsApp
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-amber-400/80 bg-white/10 text-amber-200 font-bold hover:bg-amber-500 hover:text-stone-950 text-xs px-3.5 sm:px-4 py-2"
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
