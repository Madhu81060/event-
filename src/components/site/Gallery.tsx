import { useState } from "react";
import { X, PlayCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import heroHindu from "@/assets/hero-hindu.jpg";
import heroChristian from "@/assets/hero-christian.jpg";
import heroMuslim from "@/assets/hero-muslim.jpg";
import heroHaldi from "@/assets/hero-haldi.jpg";
import heroBirthday from "@/assets/hero-birthday.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import eventReception from "@/assets/event-reception.jpg";
import eventSangeet from "@/assets/event-sangeet.jpg";
import eventConference from "@/assets/event-conference.jpg";
import eventDrone from "@/assets/event-drone.jpg";
import eventEngagement from "@/assets/event-engagement.jpg";
import eventBabyShower from "@/assets/event-babyshower.jpg";
import officeHyderabad from "@/assets/office-hyderabad.jpg";

type Item = { src: string; alt: string; cat: string; span?: string; video?: boolean };

const items: Item[] = [
  {
    src: heroHindu,
    alt: "Floral mandap with chandeliers at a luxury Hindu wedding",
    cat: "Wedding",
    span: "sm:row-span-2",
  },
  { src: heroChristian, alt: "Church wedding with white floral aisle", cat: "Christian" },
  { src: heroMuslim, alt: "Gold and emerald nikah stage setup", cat: "Muslim" },
  {
    src: heroHaldi,
    alt: "Marigold haldi ceremony decoration",
    cat: "Haldi",
    span: "sm:col-span-2",
  },
  { src: heroBirthday, alt: "Pink and gold birthday balloon arch", cat: "Birthday" },
  {
    src: heroCorporate,
    alt: "College fest stage with LED wall and lighting",
    cat: "College",
    video: true,
  },
  {
    src: eventReception,
    alt: "Golden reception stage with orchid florals and chandeliers",
    cat: "Reception",
    span: "sm:row-span-2",
  },
  { src: eventSangeet, alt: "Sangeet night dance floor with confetti and LED screens", cat: "Sangeet" },
  { src: eventEngagement, alt: "Pastel pink engagement ring ceremony setup", cat: "Engagement" },
  {
    src: eventConference,
    alt: "Corporate summit stage with large LED wall and blue lighting",
    cat: "Corporate",
    span: "sm:col-span-2",
  },
  { src: eventBabyShower, alt: "Pastel baby shower balloon and dessert table setup", cat: "Birthday" },
  {
    src: officeHyderabad,
    alt: "Elite Events design studio reception in Hyderabad",
    cat: "Our Office",
  },
  {
    src: eventDrone,
    alt: "Aerial drone view of an illuminated outdoor wedding venue at dusk",
    cat: "Drone Videos",
    video: true,
    span: "sm:col-span-2",
  },
];

const categories = [
  "All",
  "Wedding",
  "Birthday",
  "Haldi",
  "Christian",
  "Muslim",
  "Reception",
  "Sangeet",
  "Engagement",
  "Corporate",
  "College",
  "Drone Videos",
  "Our Office",
];

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const shown = items.filter((i) => cat === "All" || i.cat === cat);

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
