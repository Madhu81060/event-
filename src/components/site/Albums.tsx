import { useState } from "react";
import { BookOpen, Download, Sparkles, Eye, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { clientEvent9, clientEvent10 } from "./data";

export function Albums() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);

  const albums = [
    {
      id: "royal-wedding-vol1",
      title: "Royal South Indian Wedding Portfolio",
      subtitle: "Volume 1 • 40 High-Res Design Spreads",
      cover: clientEvent9,
      category: "Mandap & Stage Artistry",
      count: "40 Photos",
      desc: "Traditional carved mandaps, gerbera floral gateways, and luxury couple stages curated across Hyderabad & Vijayawada.",
    },
    {
      id: "luxury-reception-vol2",
      title: "Grand Reception & Sangeet Lookbook",
      subtitle: "Volume 2 • 40 High-Res Design Spreads",
      cover: clientEvent10,
      category: "Hall Production & Draping",
      count: "40 Photos",
      desc: "Palace-scale banquet seating, custom name-themed backdrops, and concert-grade stage lighting setups.",
    },
  ];

  return (
    <section id="albums" className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Digital Portfolios"
          title="Explore Our Wedding Albums"
          description="Browse our curated high-resolution wedding lookbooks & PDF design catalogs."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {albums.map((album, i) => (
            <Reveal key={album.id} delay={i * 120}>
              <div className="glass-card card-3d group overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-primary/40">
                <div className="relative aspect-16/9 overflow-hidden rounded-2xl">
                  <img
                    src={album.cover}
                    alt={album.title}
                    width={1920}
                    height={1088}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {album.category}
                  </span>
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                    <BookOpen className="size-3.5" />
                    {album.count}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {album.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                    {album.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {album.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button
                      variant="goldGlow"
                      size="sm"
                      onClick={() => setActiveAlbum(album.title)}
                    >
                      <Eye className="size-4 mr-1.5" />
                      Preview Album
                    </Button>
                    <Button variant="outlineLight" size="sm" asChild>
                      <a href="#book">
                        <Sparkles className="size-4 mr-1.5" />
                        Request PDF Copy
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {activeAlbum && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActiveAlbum(null)}
        >
          <div
            className="glass-card max-w-lg rounded-3xl p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-luxe text-primary-foreground">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">{activeAlbum}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              PDF ఆల్బమ్స్ మరియు 78+ ఫొటోలు సుపాబేస్ క్లౌడ్ స్టోరేజ్‌కి కనెక్ట్ కాబడుతున్నాయి.
              మీరు PDF లు పంపగానే పూర్తి ఆల్బమ్ డిజిటల్ ఫ్లిప్‌బుక్‌గా లైవ్ అవుతుంది!
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="goldGlow" onClick={() => setActiveAlbum(null)}>
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
