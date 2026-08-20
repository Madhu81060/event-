import { useState } from "react";
import { BookOpen, Sparkles, Eye, CheckCircle2, X, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  heroNewGanesha,
  heroNewLoveGanesha,
  heroNewBananaCanopy,
  getEventWhatsAppLink,
} from "./data";

export function Albums() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);

  const albums = [
    {
      id: "royal-wedding-vol1",
      title: "Royal South Indian Mandapam Portfolio",
      subtitle: "Volume 1 • 50+ High-Res Design Spreads",
      cover: heroNewGanesha,
      category: "Temple Mandap Artistry",
      count: "50+ Photos",
      desc: "Live banana plantain mandaps, golden Lord Ganesha sanctums, Tirupati Balaji silver shrines, and tiered jasmine floral canopies.",
    },
    {
      id: "luxury-reception-vol2",
      title: "Grand Reception & Celebrity Stage Lookbook",
      subtitle: "Volume 2 • 40+ High-Res Design Spreads",
      cover: heroNewLoveGanesha,
      category: "Luxury Stage Production",
      count: "40+ Photos",
      desc: "Double heart 'Love' neon stages, circular blush rose domes with hanging Edison bulbs, glowing feather light columns, and royal velvet lounges.",
    },
    {
      id: "heritage-tradition-vol3",
      title: "Eco-Heritage & Temple Gopuram Weddings",
      subtitle: "Volume 3 • 35+ High-Res Design Spreads",
      cover: heroNewBananaCanopy,
      category: "Vedic & Eco Traditions",
      count: "35+ Photos",
      desc: "Banana leaf ceiling canopies with antique bronze temple bells, traditional wooden carved thrones, brass samai deepams, and marigold garlands.",
    },
  ];

  return (
    <section id="albums" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-amber-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Digital Portfolios"
          title="Curated Wedding & Reception Albums"
          description="Browse our high-resolution wedding lookbooks and real event design catalogs crafted across Vijayawada, Hyderabad & Eluru."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {albums.map((album, i) => (
            <Reveal key={album.id} delay={i * 90}>
              <div className="card-3d group overflow-hidden rounded-3xl bg-white border border-amber-200/80 p-6 shadow-md transition-all duration-500 hover:border-amber-400 hover:shadow-xl">
                <div className="relative aspect-16/9 overflow-hidden rounded-2xl">
                  <img
                    src={album.cover}
                    alt={album.title}
                    width={1024}
                    height={576}
                    className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                    {album.category}
                  </span>
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1 text-xs font-black text-white shadow-lg">
                    <BookOpen className="size-3.5" />
                    {album.count}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                    {album.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-stone-900">
                    {album.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 font-medium leading-relaxed">
                    {album.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <Button
                      size="sm"
                      className="btn-gold-glow rounded-full px-5 py-2 text-xs font-bold cursor-pointer"
                      onClick={() => setActiveAlbum(album.title)}
                    >
                      <Eye className="size-4 mr-1.5" />
                      Preview Lookbook
                    </Button>
                    <a
                      href={getEventWhatsAppLink(album.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 hover:scale-103 cursor-pointer"
                    >
                      <MessageCircle className="size-3.5" />
                      WhatsApp Inquiry
                    </a>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-amber-300 bg-amber-50 text-amber-900 font-bold hover:bg-amber-100"
                      asChild
                    >
                      <a href="#book">
                        <Sparkles className="size-4 mr-1.5" />
                        Custom Design
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
            className="max-w-lg rounded-3xl bg-white p-8 text-center relative border border-amber-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveAlbum(null)}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 cursor-pointer"
            >
              <X className="size-5" />
            </button>
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-stone-900">{activeAlbum}</h3>
            <p className="mt-3 text-sm text-stone-600 font-medium leading-relaxed">
              All 45+ real high-resolution event photographs are loaded directly into the portfolio lookbook above.
              Book a consultation to customize these setups for your venue!
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button className="btn-gold-glow rounded-full px-6 py-2 cursor-pointer" onClick={() => setActiveAlbum(null)}>
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
