"use client";

import { useState, useEffect, useCallback } from "react";
import {
  BookOpen,
  Sparkles,
  Eye,
  X,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Camera,
  Layers,
  MapPin,
  Heart,
  ZoomIn,
  CheckCircle2,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  weddingAlbums,
  WeddingAlbum,
  AlbumSpread,
} from "./albumData";
import { WHATSAPP_NUMBER } from "./data";
import { cn, getImageSrc } from "@/lib/utils";

export function Albums() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>("thulasi-kiran-wedding");
  const [activeSpreadIndex, setActiveSpreadIndex] = useState<number>(0);
  const [isReaderOpen, setIsReaderOpen] = useState<boolean>(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const currentAlbum: WeddingAlbum =
    weddingAlbums.find((a) => a.id === selectedAlbumId) ?? weddingAlbums[0]!;

  const currentSpread: AlbumSpread =
    currentAlbum.spreads[activeSpreadIndex] ?? currentAlbum.spreads[0]!;

  // Open the interactive reader for a specific album and spread index
  const openReader = (albumId: string, spreadIndex: number = 0) => {
    setSelectedAlbumId(albumId);
    setActiveSpreadIndex(spreadIndex);
    setIsReaderOpen(true);
    setIsZoomed(false);
  };

  const nextSpread = useCallback(() => {
    setIsZoomed(false);
    setActiveSpreadIndex((prev) => (prev + 1) % currentAlbum.spreads.length);
  }, [currentAlbum.spreads.length]);

  const prevSpread = useCallback(() => {
    setIsZoomed(false);
    setActiveSpreadIndex(
      (prev) => (prev - 1 + currentAlbum.spreads.length) % currentAlbum.spreads.length,
    );
  }, [currentAlbum.spreads.length]);

  // Keyboard navigation for the reader modal
  useEffect(() => {
    if (!isReaderOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsReaderOpen(false);
      } else if (e.key === "ArrowRight") {
        nextSpread();
      } else if (e.key === "ArrowLeft") {
        prevSpread();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReaderOpen, nextSpread, prevSpread]);

  // Filter spreads for the gallery grid
  const allSpreads = currentAlbum.spreads;
  const filteredSpreads =
    activeCategoryFilter === "all"
      ? allSpreads
      : allSpreads.filter(
          (s) =>
            s.category.toLowerCase().includes(activeCategoryFilter.toLowerCase()) ||
            s.title.toLowerCase().includes(activeCategoryFilter.toLowerCase()),
        );

  const getAlbumWhatsAppLink = (album: WeddingAlbum, spreadTitle?: string) => {
    const msg = spreadTitle
      ? `Hello Subhamasthu Events,\nI am viewing your real wedding album "${album.coupleName}" (Spread: "${spreadTitle}").\n\nPlease share photography & album customization packages for my event in Vijayawada / AP / Telangana.`
      : `Hello Subhamasthu Events,\nI am interested in your luxury wedding photography & album lookbook for "${album.coupleName}" (${album.albumTitle}).\n\nPlease share photography package details and date availability.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="albums"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white/90 via-amber-50/40 to-white/90 backdrop-blur-[2px] border-t border-amber-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Signature Photography & Lookbooks"
          title="Real Luxury Wedding Albums & Candid Photography"
          description="Flippable high-resolution wedding albums, candid cinematography, and flush-mount velvet lookbooks crafted for our clients across Vijayawada & Eluru."
        />

        {/* 2 Flagship Wedding Album Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {weddingAlbums.map((album, i) => {
            const isSelected = selectedAlbumId === album.id;
            return (
              <Reveal key={album.id} delay={i * 100}>
                <div
                  className={cn(
                    "card-3d group relative overflow-hidden rounded-3xl bg-white border p-6 sm:p-7 shadow-md transition-all duration-500 hover:shadow-2xl",
                    isSelected
                      ? "border-amber-500 ring-2 ring-amber-400/50 bg-gradient-to-br from-white via-amber-50/20 to-white"
                      : "border-amber-200/90 hover:border-amber-400",
                  )}
                >
                  {/* Top Cover Image Banner with Interactive Lookbook Trigger */}
                  <div
                    onClick={() => openReader(album.id, 0)}
                    className="relative aspect-16/9 w-full overflow-hidden rounded-2xl cursor-pointer group/cover"
                  >
                    <img
                      src={getImageSrc(album.coverImage)}
                      alt={album.albumTitle}
                      width={1200}
                      height={675}
                      className="size-full object-cover object-center transition-transform duration-700 group-hover/cover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Category & Badge */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/80 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md border border-amber-300/40">
                        <Sparkles className="size-3 text-amber-400" />
                        {album.highlightTag}
                      </span>
                    </div>

                    <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-white shadow-lg">
                      <BookOpen className="size-3.5" />
                      {album.spreadCount} HD Spreads
                    </span>

                    {/* Hover Overlay Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/cover:opacity-100 bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-stone-950 px-5 py-2.5 text-xs sm:text-sm font-black shadow-xl transform scale-95 group-hover/cover:scale-100 transition-transform">
                        <Eye className="size-4" />
                        Open Interactive Lookbook
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                        <MapPin className="size-3 text-amber-400" />
                        <span>{album.location}</span>
                      </div>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-black text-white drop-shadow-md">
                        {album.coupleName}
                      </h3>
                    </div>
                  </div>

                  {/* Album Details */}
                  <div className="mt-6">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                      {album.albumTitle}
                    </p>
                    <p className="mt-2 text-sm text-stone-700 font-medium leading-relaxed">
                      {album.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-amber-100 pt-4">
                      {album.photographyHighlights.map((hl) => (
                        <div
                          key={hl}
                          className="flex items-center gap-2 text-xs font-semibold text-stone-700"
                        >
                          <CheckCircle2 className="size-3.5 text-amber-600 shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Button
                        size="sm"
                        className="btn-gold-glow rounded-full px-5 py-2.5 text-xs font-bold cursor-pointer"
                        onClick={() => openReader(album.id, 0)}
                      >
                        <BookOpen className="size-4 mr-1.5" />
                        Browse Lookbook ({album.spreadCount} Spreads)
                      </Button>

                      <a
                        href={getAlbumWhatsAppLink(album)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 hover:scale-103 cursor-pointer"
                      >
                        <MessageCircle className="size-3.5" />
                        WhatsApp Photography Quote
                      </a>

                      <button
                        onClick={() => {
                          setSelectedAlbumId(album.id);
                          setActiveCategoryFilter("all");
                        }}
                        className={cn(
                          "px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer",
                          isSelected
                            ? "bg-amber-100 text-amber-900 border border-amber-300 font-black"
                            : "text-stone-600 hover:text-amber-800 hover:bg-amber-50",
                        )}
                      >
                        View Gallery Grid ↓
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Real Album Spreads Grid Section */}
        <div className="mt-16 rounded-3xl bg-white border border-amber-200/80 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-100 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500 text-white font-black text-xs shadow-xs">
                  <Layers className="size-4" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-stone-900">
                  {currentAlbum.coupleName} • Real Album Spreads ({currentAlbum.spreads.length} Pages)
                </h3>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 font-medium">
                Click any spread to view full-screen high resolution with story captions.
              </p>
            </div>

            {/* Album Tab Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              {weddingAlbums.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    setSelectedAlbumId(a.id);
                    setActiveCategoryFilter("all");
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-black transition-all cursor-pointer",
                    selectedAlbumId === a.id
                      ? "bg-amber-500 text-stone-950 shadow-md scale-103"
                      : "bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900",
                  )}
                >
                  {a.coupleName}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-500 mr-1">Filter Moments:</span>
            {[
              { id: "all", label: "All Spreads (15)" },
              { id: "bridal", label: "Bridal Styling" },
              { id: "muhurtham", label: "Vedic Muhurtham & Rituals" },
              { id: "stage", label: "Royal Stage & Mandapam" },
              { id: "reception", label: "Reception Gala" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategoryFilter(filter.id)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-bold transition-colors cursor-pointer",
                  activeCategoryFilter === filter.id
                    ? "bg-amber-800 text-white shadow-xs"
                    : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200/60",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Spreads Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSpreads.map((spread) => {
              const originalIndex = currentAlbum.spreads.findIndex((s) => s.id === spread.id);
              return (
                <article
                  key={spread.id}
                  onClick={() => openReader(currentAlbum.id, originalIndex)}
                  className="card-3d group cursor-pointer overflow-hidden rounded-2xl bg-stone-50 border border-amber-200/70 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-xl"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-900">
                    <img
                      src={getImageSrc(spread.image)}
                      alt={spread.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-bold text-amber-200 backdrop-blur-md border border-white/20">
                      {spread.category}
                    </span>

                    <span className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-amber-500/90 text-stone-950 shadow-md group-hover:scale-110 transition-transform">
                      <ZoomIn className="size-3.5" />
                    </span>

                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[11px] font-bold text-amber-300">
                        Spread {originalIndex + 1} of {currentAlbum.spreads.length}
                      </p>
                      <h4 className="mt-0.5 font-display text-sm font-bold text-white line-clamp-1">
                        {spread.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 bg-white">
                    <p className="text-xs text-stone-600 font-medium line-clamp-2 leading-relaxed">
                      {spread.caption}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-amber-50 pt-2.5">
                      <span className="text-[11px] font-extrabold text-amber-700 group-hover:text-amber-900 transition-colors flex items-center gap-1">
                        <Eye className="size-3" />
                        Preview Spread
                      </span>
                      <span className="text-[10px] font-bold text-stone-400">
                        4K Print Ready
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Photography & Cinematography Services Feature Callout Strip */}
        <Reveal delay={200} className="mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 border-2 border-amber-400/60 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 size-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-amber-300">
                  <Camera className="size-3.5 text-amber-400" />
                  <span>Cinematic 4K Films & Luxury Printed Albums</span>
                </div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black text-amber-100">
                  Want Your Wedding Story Crafted into a Luxury Keepsake?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 font-medium leading-relaxed">
                  Our dedicated cinematography team provides Sony FX3 4K cameras, DJI drone shoots, candid photography, same-day edit teasers, and Italian flush-mount velvet photo albums.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello Subhamasthu Events,\nI would like to book a Wedding Photography & Luxury Album package in Vijayawada / Eluru.\nPlease share packages and portfolio.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-104 cursor-pointer"
                >
                  <MessageCircle className="size-4" />
                  Book Photography on WhatsApp
                </a>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-amber-400/60 bg-stone-900 text-amber-200 hover:bg-amber-500 hover:text-stone-950 font-bold text-xs sm:text-sm px-5 py-3 cursor-pointer"
                >
                  <a href="#book">
                    <Sparkles className="size-4 mr-1.5" />
                    Custom Package Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* High-End Fullscreen Interactive Lookbook Reader Modal */}
      {isReaderOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-stone-950/95 backdrop-blur-md select-none text-white animate-in fade-in duration-200"
          onClick={() => setIsReaderOpen(false)}
        >
          {/* Header Bar */}
          <header
            className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-stone-900/80 backdrop-blur-xl z-20 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-black shadow-md">
                <BookOpen className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-sm sm:text-base font-extrabold text-amber-200">
                  {currentAlbum.coupleName} • Lookbook
                </h3>
                <p className="text-[11px] text-stone-400 font-medium">
                  Spread {activeSpreadIndex + 1} of {currentAlbum.spreads.length} •{" "}
                  {currentSpread.category}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="hidden sm:flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
              </button>

              <a
                href={getAlbumWhatsAppLink(currentAlbum, currentSpread.title)}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition cursor-pointer"
              >
                <MessageCircle className="size-3.5" />
                Inquire on WhatsApp
              </a>

              <button
                onClick={() => setIsReaderOpen(false)}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                title="Close Reader (Esc)"
              >
                <X className="size-5" />
              </button>
            </div>
          </header>

          {/* Main Spread Viewer Stage */}
          <main
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Spread Button */}
            <button
              onClick={prevSpread}
              aria-label="Previous Page Spread"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex size-11 sm:size-14 items-center justify-center rounded-full bg-stone-900/80 text-white backdrop-blur-xl border border-amber-400/40 shadow-2xl hover:bg-amber-500 hover:text-stone-950 transition-all hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="size-6 sm:size-8" />
            </button>

            {/* Next Spread Button */}
            <button
              onClick={nextSpread}
              aria-label="Next Page Spread"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex size-11 sm:size-14 items-center justify-center rounded-full bg-stone-900/80 text-white backdrop-blur-xl border border-amber-400/40 shadow-2xl hover:bg-amber-500 hover:text-stone-950 transition-all hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="size-6 sm:size-8" />
            </button>

            {/* High-Resolution Spread Container */}
            <div
              className={cn(
                "relative max-h-full max-w-full rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-300 bg-stone-900 flex items-center justify-center",
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in",
              )}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                key={currentSpread.id}
                src={getImageSrc(currentSpread.image)}
                alt={currentSpread.title}
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl animate-in fade-in zoom-in-98 duration-300"
              />

              {/* Spread Info Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 pointer-events-none">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-black text-stone-950 uppercase tracking-wider">
                      {currentSpread.category}
                    </span>
                    <h4 className="mt-1 font-display text-base sm:text-xl font-black text-white drop-shadow-md">
                      {currentSpread.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-stone-200 font-medium max-w-2xl line-clamp-2">
                      {currentSpread.caption}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-amber-300">
                    {activeSpreadIndex + 1} / {currentAlbum.spreads.length}
                  </span>
                </div>
              </div>
            </div>
          </main>

          {/* Bottom Thumbnail Strip Navigator */}
          <footer
            className="border-t border-white/10 bg-stone-900/90 backdrop-blur-xl px-4 py-2.5 z-20 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-5xl flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none pb-1">
              {currentAlbum.spreads.map((spread, idx) => {
                const isActive = idx === activeSpreadIndex;
                return (
                  <button
                    key={spread.id}
                    onClick={() => {
                      setActiveSpreadIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={cn(
                      "relative h-12 sm:h-14 w-20 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer shadow-md group",
                      isActive
                        ? "border-amber-400 ring-2 ring-amber-400 scale-105 opacity-100"
                        : "border-white/30 opacity-60 hover:opacity-100 hover:border-amber-200",
                    )}
                  >
                    <img
                      src={getImageSrc(spread.image)}
                      alt={spread.title}
                      className="size-full object-cover object-center"
                    />
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-black text-white bg-black/70 px-1 rounded">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </footer>
        </div>
      )}
    </section>
  );
}
