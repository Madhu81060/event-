import { useEffect, useState } from "react";
import { X, PlayCircle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
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
} from "./data";

type Item = {
  src: string;
  alt: string;
  cat: string;
  span?: string | undefined;
  video?: boolean | undefined;
};

const initialItems: Item[] = [
  {
    src: clientEvent9,
    alt: "Grand traditional golden carved mandap decor with Shankhu Chakra Namam",
    cat: "Wedding",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: clientEvent6,
    alt: "Name-themed floral backdrop setup for Sathwik & Akshaya ceremony with swan motifs",
    cat: "Engagement",
  },
  {
    src: clientEvent10,
    alt: "Royal wedding hall setup with golden banquet seating and illuminated mandap stage",
    cat: "Reception",
    span: "sm:col-span-2",
  },
  {
    src: clientEvent7,
    alt: "Botanical green flower wall with circular floral arch & swan decor",
    cat: "Wedding",
  },
  {
    src: clientEvent8,
    alt: "Pink & blue illuminated circular flower arch reception backdrop",
    cat: "Reception",
  },
  {
    src: clientEvent1,
    alt: "Grand floral stage & mandap decoration with gerbera garlands and luxury couch",
    cat: "Wedding",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: clientEvent4,
    alt: "Purple drapery wedding reception stage with royal silver sofa",
    cat: "Reception",
  },
  {
    src: clientEvent3,
    alt: "Circular flower arch backdrop setup with ambient lighting",
    cat: "Engagement",
  },
  {
    src: clientEvent2,
    alt: "Vibrant green botanical flower wall backdrop",
    cat: "Wedding",
    span: "sm:col-span-2",
  },
  {
    src: clientEvent5,
    alt: "Royal pink backdrop floral archway with ornate urn vases",
    cat: "Reception",
  },
];

const categories = [
  "All",
  "Wedding",
  "Reception",
  "Engagement",
  "Haldi",
  "Sangeet",
  "Birthday",
  "Corporate",
];

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const [galleryItems, setGalleryItems] = useState<Item[]>(initialItems);

  useEffect(() => {
    if (typeof window === "undefined") return;

    async function loadSupabaseItems() {
      try {
        const { data, error } = await supabase
          .from("events_gallery")
          .select("*")
          .order("display_order", { ascending: true });
        if (data && data.length > 0 && !error) {
          const fetched: Item[] = data.map((d: any) => ({
            src: String(d.image_url),
            alt: String(d.alt_text || d.title),
            cat: String(d.category || "Wedding"),
            span: d.is_featured ? "sm:col-span-2" : undefined,
          }));
          setGalleryItems([...fetched, ...initialItems]);
        }
      } catch (err) {
        // Silently fallback to initialItems
      }
    }
    loadSupabaseItems();
  }, []);

  const shown = galleryItems.filter((i) => cat === "All" || i.cat === cat);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="A Gallery of Grand Moments"
          description="Real setups, real celebrations. Filter by occasion or open the lightbox for a closer look."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                cat === c
                  ? "bg-gradient-luxe text-primary-foreground shadow-luxe"
                  : "glass-card text-foreground/75 hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div
          id="showreel"
          className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {shown.map((item, i) => (
            <Reveal
              key={`${item.alt}-${i}`}
              delay={(i % 6) * 70}
              className={cn("h-full", item.span)}
            >
              <button
                onClick={() => setLightbox(item)}
                className="group shadow-luxe relative block size-full overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label={`Open ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1920}
                  height={1088}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80"
                />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 text-left text-sm font-medium text-white">
                  {item.video && <PlayCircle className="size-5" aria-hidden />}
                  {item.cat}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <X className="size-5" aria-hidden />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              width={1920}
              height={1088}
              className="max-h-[80dvh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {lightbox.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
