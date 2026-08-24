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
  MapPin,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
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

  // Keyboard navigation and body scroll lock for the reader modal
  useEffect(() => {
    if (!isReaderOpen) return;

    document.body.style.overflow = "hidden";

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
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isReaderOpen, nextSpread, prevSpread]);

  const getAlbumWhatsAppLink = (album: WeddingAlbum, spreadTitle?: string) => {
    const msg = spreadTitle
      ? `Hello Subhamasthu Events,\nI am viewing your signature wedding highlight "${album.coupleName}" (${spreadTitle}).\n\nPlease share photography & album customization details for my event in Vijayawada / Eluru / AP.`
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
          eyebrow="Signature Wedding Lookbooks"
          title="Real Wedding Highlights & 4K Photography"
          description="Curated signature wedding moments — from royal bridal styling to auspicious Vedic muhurthams and grand 40-foot mandap stage panoramas."
        />

        {/* 2 Flagship Wedding Showcases */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {weddingAlbums.map((album, i) => {
            const isSelected = selectedAlbumId === album.id;
            return (
              <Reveal key={album.id} delay={i * 100}>
                <div
                  className={cn(
                    "card-3d group relative overflow-hidden rounded-3xl bg-white border p-6 sm:p-7 shadow-md transition-all duration-500 hover:shadow-2xl flex flex-col justify-between",
                    isSelected
                      ? "border-amber-500 ring-2 ring-amber-400/50 bg-gradient-to-br from-white via-amber-50/20 to-white"
                      : "border-amber-200/90 hover:border-amber-400",
                  )}
                >
                  {/* Top Cover Banner */}
                  <div
                    onClick={() => openReader(album.id, 0)}
                    className="relative aspect-16/9 w-full overflow-hidden rounded-2xl cursor-pointer group/cover shadow-md"
                  >
                    <img
                      src={getImageSrc(album.coverImage)}
                      alt={album.albumTitle}
                      width={1200}
                      height={675}
                      className="size-full object-cover object-center transition-transform duration-700 group-hover/cover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/85 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md border border-amber-300/40 shadow-sm">
                        <Sparkles className="size-3 text-amber-400" />
                        {album.highlightTag}
                      </span>
                    </div>

                    <span className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-stone-950 shadow-lg">
                      <BookOpen className="size-3.5" />
                      3 Signature Highlights
                    </span>

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/cover:opacity-100 bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-stone-950 px-5 py-2.5 text-xs sm:text-sm font-black shadow-xl transform scale-95 group-hover/cover:scale-100 transition-transform">
                        <Eye className="size-4" />
                        View Full HD Showcase
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                        <MapPin className="size-3 text-amber-400" />
                        <span>{album.location}</span>
                      </div>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-black text-white drop-shadow-md">
                        {album.coupleName}
                      </h3>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className="mt-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                        {album.albumTitle}
                      </p>
                      <p className="mt-2 text-sm text-stone-700 font-medium leading-relaxed">
                        {album.description}
                      </p>

                      {/* 3 Micro-Thumbnails for this Album */}
                      <div className="mt-4 grid grid-cols-3 gap-2.5">
                        {album.spreads.map((spread, sIdx) => (
                          <button
                            key={spread.id}
                            onClick={() => openReader(album.id, sIdx)}
                            className="group/thumb relative aspect-16/10 rounded-xl overflow-hidden border-2 border-amber-200/80 hover:border-amber-500 transition-all cursor-pointer shadow-xs hover:scale-103"
                            title={spread.title}
                          >
                            <img
                              src={getImageSrc(spread.image)}
                              alt={spread.title}
                              className="size-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-transparent transition-colors" />
                            <span className="absolute bottom-1 right-1 bg-black/75 text-amber-300 text-[9px] font-black px-1.5 py-0.5 rounded">
                              {sIdx + 1}/3
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Highlights checklist */}
                      <div className="mt-4 space-y-1.5 border-t border-amber-100 pt-3.5">
                        {album.photographyHighlights.map((hl) => (
                          <div
                            key={hl}
                            className="flex items-center gap-2 text-xs font-semibold text-stone-700"
                          >
                            <CheckCircle2 className="size-3.5 text-amber-600 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Button
                        size="sm"
                        className="btn-gold-glow rounded-full px-5 py-2.5 text-xs font-bold cursor-pointer"
                        onClick={() => openReader(album.id, 0)}
                      >
                        <Eye className="size-4 mr-1.5" />
                        View 3 Signature Highlights
                      </Button>

                      <a
                        href={getAlbumWhatsAppLink(album)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:scale-103 cursor-pointer"
                      >
                        <MessageCircle className="size-3.5" />
                        WhatsApp Photography Quote
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Photography & Cinematography Services Feature Callout Strip */}
        <Reveal delay={200} className="mt-14">
          <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 border-2 border-amber-400/60 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 size-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-amber-300">
                  <Camera className="size-3.5 text-amber-400" />
                  <span>Cinematic 4K Films & Flush-Mount Velvet Photo Albums</span>
                </div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black text-amber-100">
                  Want Your Wedding Story Captured in Royal Perfection?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 font-medium leading-relaxed">
                  Our dedicated cinematography crew provides Sony FX3 4K cameras, DJI drone shoots, candid photography, same-day edit teasers, and Italian flush-mount velvet photo albums.
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

      {/* Royal Gold Decorated Fullscreen Showcase Lightbox Modal */}
      {isReaderOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-xl select-none text-white animate-in fade-in duration-200"
          onClick={() => setIsReaderOpen(false)}
        >
          {/* Royal Decorative Frame Container */}
          <div
            className="relative flex flex-col justify-between w-full max-w-4xl max-h-[92vh] rounded-3xl bg-gradient-to-b from-stone-900/95 via-stone-950/98 to-stone-900/95 border-2 border-amber-400 shadow-[0_0_60px_rgba(245,158,11,0.45)] ring-1 ring-amber-300/40 p-4 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between border-b border-amber-400/20 pb-3 z-10 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-black shadow-md">
                  <BookOpen className="size-4 sm:size-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-extrabold text-amber-200">
                    {currentAlbum.coupleName} • Signature Lookbook
                  </h3>
                  <span className="text-[11px] text-amber-400/90 font-bold">
                    {currentSpread.category} · Photo {activeSpreadIndex + 1} of {currentAlbum.spreads.length}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="hidden sm:flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut className="size-4" /> : <ZoomIn className="size-4" />}
                </button>

                <button
                  onClick={() => setIsReaderOpen(false)}
                  className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-white transition-all cursor-pointer shadow-md"
                  title="Close (Esc)"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Centered Image Area with Navigation Buttons */}
            <div className="relative flex items-center justify-center w-full my-3 flex-1 min-h-0">
              {/* Previous Image Arrow */}
              <button
                onClick={prevSpread}
                aria-label="Previous photo"
                className="absolute left-1 sm:left-3 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full bg-stone-900/85 text-amber-300 border border-amber-400/60 shadow-xl hover:bg-amber-500 hover:text-stone-950 hover:scale-110 transition-all cursor-pointer"
              >
                <ChevronLeft className="size-6 sm:size-7" />
              </button>

              {/* Main Image in Decorative Glow Frame */}
              <div
                className={cn(
                  "relative max-h-full max-w-full flex items-center justify-center overflow-hidden rounded-2xl border border-amber-300/50 shadow-[0_15px_40px_rgba(0,0,0,0.85)] transition-transform duration-300 bg-stone-950",
                  isZoomed ? "scale-110" : "scale-100",
                )}
              >
                <img
                  key={currentSpread.id}
                  src={getImageSrc(currentSpread.image)}
                  alt={currentSpread.title}
                  className="max-h-[50vh] sm:max-h-[58vh] md:max-h-[62vh] w-auto max-w-full object-contain rounded-2xl animate-in fade-in zoom-in-95 duration-200"
                />
              </div>

              {/* Next Image Arrow */}
              <button
                onClick={nextSpread}
                aria-label="Next photo"
                className="absolute right-1 sm:right-3 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full bg-stone-900/85 text-amber-300 border border-amber-400/60 shadow-xl hover:bg-amber-500 hover:text-stone-950 hover:scale-110 transition-all cursor-pointer"
              >
                <ChevronRight className="size-6 sm:size-7" />
              </button>
            </div>

            {/* Bottom Modal Caption & Interactive Controls */}
            <div className="border-t border-amber-400/20 pt-3 z-10 shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Photo Details */}
                <div className="max-w-md">
                  <h4 className="font-display text-sm sm:text-base font-bold text-white">
                    {currentSpread.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-300 font-medium line-clamp-1 mt-0.5">
                    {currentSpread.caption}
                  </p>
                </div>

                {/* 3 Thumbnail Switchers & WhatsApp CTA */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 mr-2">
                    {currentAlbum.spreads.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setActiveSpreadIndex(idx);
                          setIsZoomed(false);
                        }}
                        className={cn(
                          "relative size-9 sm:size-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shadow-xs",
                          idx === activeSpreadIndex
                            ? "border-amber-400 ring-2 ring-amber-400 scale-108"
                            : "border-white/30 opacity-60 hover:opacity-100",
                        )}
                        title={s.title}
                      >
                        <img
                          src={getImageSrc(s.image)}
                          alt={s.title}
                          className="size-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <a
                    href={getAlbumWhatsAppLink(currentAlbum, currentSpread.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-104 cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="size-3.5" />
                    Inquire Photo on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
