import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import {
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
} from "./data";

type Item = {
  src: string;
  alt: string;
  cat: string;
};

// 48+ Verified, Crystal-Clear Right-Side-Up Real Event Photographs
const allGalleryItems: Item[] = [
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

  const shown = allGalleryItems.filter((i) => cat === "All Setups" || i.cat === cat);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % shown.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + shown.length) % shown.length);
    }
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="100% Real Celebrations"
          title="Mandaps & Luxury Stages Portfolio"
          description="Explore our grand temple mandapams, reception setups, and festive decor crafted across Hyderabad, Vijayawada & Eluru."
        />

        {/* Category Filter Tabs */}
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((c) => {
            const count = allGalleryItems.filter((i) => c === "All Setups" || i.cat === c).length;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={cn(
                  "rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm",
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

        {/* Wide Full-Bleed Gallery Grid with Beautiful Golden Borders & Zero Margin Wastes */}
        <div
          id="showreel"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {shown.map((item, i) => (
            <Reveal
              key={`${item.alt}-${i}`}
              delay={(i % 8) * 35}
              className="h-[270px] sm:h-[300px] w-full"
            >
              <button
                onClick={() => openLightbox(i)}
                className="group relative block size-full overflow-hidden rounded-2xl bg-white border-2 border-amber-200 shadow-md transition-all duration-400 hover:border-amber-500 hover:shadow-2xl focus-visible:outline-none cursor-pointer"
                aria-label={`Open ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                />

                {/* Subtle Bottom Shade */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* Center Hover Zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-xs font-black text-white shadow-xl backdrop-blur-md">
                    <ZoomIn className="size-4" /> View Full HD
                  </span>
                </div>

                {/* Caption & Category Badge */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-left text-white">
                  <span className="truncate pr-2 font-display text-xs sm:text-sm font-bold drop-shadow-md">
                    {item.alt}
                  </span>
                  <span className="shrink-0 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                    {item.cat}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen HD Modal */}
      {lightboxIndex !== null && shown[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[lightboxIndex].alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close viewer"
            onClick={closeLightbox}
            className="absolute top-6 right-6 flex size-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 hover:scale-110 cursor-pointer"
          >
            <X className="size-6" aria-hidden />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="size-7" />
          </button>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="size-7" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl max-h-[92vh] flex flex-col items-center px-4"
          >
            <img
              src={shown[lightboxIndex].src}
              alt={shown[lightboxIndex].alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-amber-300/40"
            />
            <figcaption className="mt-4 text-center font-display text-base font-bold text-amber-200 drop-shadow-md">
              {shown[lightboxIndex].alt}
            </figcaption>
            <span className="mt-1 text-xs text-stone-300 font-semibold">
              {lightboxIndex + 1} of {shown.length} • {shown[lightboxIndex].cat}
            </span>
          </figure>
        </div>
      )}
    </section>
  );
}
