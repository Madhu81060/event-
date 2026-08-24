"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);
  const thumbsContainerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const currentAlbum: WeddingAlbum =
    weddingAlbums.find((a) => a.id === selectedAlbumId) ?? weddingAlbums[0]!;

  const currentSpread: AlbumSpread =
    currentAlbum.spreads[activeSpreadIndex] ?? currentAlbum.spreads[0]!;

  const switchAlbum = (albumId: string, spreadIndex: number = 0) => {
    setSelectedAlbumId(albumId);
    setActiveSpreadIndex(spreadIndex);
  };

  const nextSpread = useCallback(() => {
    setActiveSpreadIndex((prev) => (prev + 1) % currentAlbum.spreads.length);
  }, [currentAlbum.spreads.length]);

  const prevSpread = useCallback(() => {
    setActiveSpreadIndex(
      (prev) => (prev - 1 + currentAlbum.spreads.length) % currentAlbum.spreads.length,
    );
  }, [currentAlbum.spreads.length]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    const container = thumbsContainerRef.current;
    if (!container) return;
    const activeThumb = container.children[activeSpreadIndex] as HTMLElement | undefined;
    if (activeThumb) {
      const scrollLeft =
        activeThumb.offsetLeft -
        container.offsetWidth / 2 +
        activeThumb.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeSpreadIndex, selectedAlbumId]);

  // Keyboard navigation when fullscreen is open
  useEffect(() => {
    if (!isFullscreenOpen) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreenOpen(false);
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
  }, [isFullscreenOpen, nextSpread, prevSpread]);

  const getAlbumWhatsAppLink = (album: WeddingAlbum, spreadTitle?: string) => {
    const msg = spreadTitle
      ? `Hello Subhamasthu Events,\nI am viewing your signature wedding highlight "${album.coupleName}" (${spreadTitle}).\n\nPlease share photography & album customization details for my event in Vijayawada / Eluru / AP.`
      : `Hello Subhamasthu Events,\nI am interested in your luxury wedding photography & album lookbook for "${album.coupleName}" (${album.albumTitle}).\n\nPlease share photography package details and date availability.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const scrollToLookbook = () => {
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
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

        {/* Wedding Collection Switcher Tabs */}
        <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
          {weddingAlbums.map((album) => {
            const isSelected = album.id === selectedAlbumId;
            return (
              <button
                key={album.id}
                onClick={() => switchAlbum(album.id, 0)}
                className={cn(
                  "flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm",
                  isSelected
                    ? "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-stone-950 font-black shadow-lg scale-103 ring-2 ring-amber-400"
                    : "bg-white/90 text-stone-700 hover:bg-amber-100/80 hover:text-amber-900 border border-amber-200/80",
                )}
              >
                <Sparkles className={cn("size-4", isSelected ? "text-stone-950 fill-stone-950/30" : "text-amber-600")} />
                <span>{album.coupleName} ({album.highlightTag})</span>
              </button>
            );
          })}
        </Reveal>

        {/* FEATURED INLINE INTERACTIVE LOOKBOOK STAGE */}
        <Reveal delay={100} className="mt-8">
          <div
            ref={showcaseRef}
            className="card-3d relative overflow-hidden rounded-3xl bg-stone-950 border-2 border-amber-400 shadow-[0_15px_50px_rgba(245,158,11,0.25)] p-3 sm:p-5 md:p-6 text-white"
          >
            {/* Stage Header Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-400/20">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-black shadow-md shrink-0">
                  <BookOpen className="size-4 sm:size-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-sm sm:text-lg font-black text-amber-200 truncate">
                      {currentAlbum.coupleName} • {currentAlbum.albumTitle}
                    </h3>
                    <span className="rounded-full bg-amber-500/20 border border-amber-400/40 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      {currentAlbum.location}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-stone-300 font-semibold block mt-0.5">
                    {currentSpread.category} · Photo {activeSpreadIndex + 1} of {currentAlbum.spreads.length}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-auto shrink-0">
                <button
                  onClick={() => setIsFullscreenOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/90 hover:bg-amber-500 hover:text-stone-950 text-amber-200 border border-amber-400/50 px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer shadow-sm"
                  title="Expand to Fullscreen HD"
                >
                  <Maximize2 className="size-3.5" />
                  <span>Fullscreen HD</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Stage Photo Display */}
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/10 max-h-[560px] my-3 rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-amber-400/30 group/stage">
              <img
                key={`${currentAlbum.id}-${currentSpread.id}`}
                src={getImageSrc(currentSpread.image)}
                alt={currentSpread.title}
                className="size-full object-contain object-center transition-all duration-300 animate-in fade-in zoom-in-95 select-none"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={prevSpread}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-400/60 shadow-xl transition-all hover:scale-110 cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="size-6 sm:size-7" />
              </button>

              <button
                onClick={nextSpread}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-400/60 shadow-xl transition-all hover:scale-110 cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="size-6 sm:size-7" />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent p-3 sm:p-5 pt-8 pointer-events-none flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="max-w-2xl">
                  <h4 className="font-display text-sm sm:text-base md:text-lg font-black text-white drop-shadow-md">
                    {currentSpread.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-stone-200 font-medium line-clamp-2 mt-0.5 drop-shadow-sm">
                    {currentSpread.caption}
                  </p>
                </div>

                <div className="pointer-events-auto shrink-0">
                  <a
                    href={getAlbumWhatsAppLink(currentAlbum, currentSpread.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-104 cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="size-4" />
                    <span>Inquire Photo on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 10 HD Photos Interactive Filmstrip */}
            <div className="pt-2 border-t border-amber-400/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
                  ✨ Click any photo to preview (10 HD Spreads):
                </span>
                <span className="text-[11px] font-semibold text-stone-400">
                  Showing {activeSpreadIndex + 1} of {currentAlbum.spreads.length}
                </span>
              </div>

              <div
                ref={thumbsContainerRef}
                className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none scroll-smooth"
              >
                {currentAlbum.spreads.map((spread, idx) => {
                  const isActive = idx === activeSpreadIndex;
                  return (
                    <button
                      key={spread.id}
                      onClick={() => setActiveSpreadIndex(idx)}
                      className={cn(
                        "group/thumb relative h-14 sm:h-18 w-20 sm:w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-sm",
                        isActive
                          ? "border-amber-400 ring-2 ring-amber-400 scale-105 opacity-100 z-10 shadow-[0_0_15px_rgba(245,158,11,0.7)]"
                          : "border-white/30 opacity-60 hover:opacity-100 hover:border-amber-300",
                      )}
                      title={spread.title}
                    >
                      <img
                        src={getImageSrc(spread.image)}
                        alt={spread.title}
                        className="size-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-transparent pointer-events-none ring-1 ring-inset ring-amber-300" />
                      )}
                      <span className="absolute bottom-1 right-1 rounded-sm bg-black/80 px-1 text-[9px] font-black text-amber-300">
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2 Flagship Wedding Showcases Information Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {weddingAlbums.map((album, i) => {
            const isSelected = selectedAlbumId === album.id;
            return (
              <Reveal key={album.id} delay={i * 100}>
                <div
                  className={cn(
                    "card-3d group relative overflow-hidden rounded-3xl bg-white border p-5 sm:p-7 shadow-md transition-all duration-500 hover:shadow-2xl flex flex-col justify-between",
                    isSelected
                      ? "border-amber-500 ring-2 ring-amber-400/50 bg-gradient-to-br from-white via-amber-50/30 to-white"
                      : "border-amber-200/90 hover:border-amber-400",
                  )}
                >
                  {/* Top Cover Banner */}
                  <div
                    onClick={() => {
                      switchAlbum(album.id, 0);
                      scrollToLookbook();
                    }}
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
                      10 HD Highlights
                    </span>

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/cover:opacity-100 bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-stone-950 px-5 py-2.5 text-xs sm:text-sm font-black shadow-xl transform scale-95 group-hover/cover:scale-100 transition-transform">
                        <Eye className="size-4" />
                        Explore {album.coupleName} Lookbook
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
                  <div className="mt-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                        {album.albumTitle}
                      </p>
                      <p className="mt-2 text-sm text-stone-700 font-medium leading-relaxed">
                        {album.description}
                      </p>

                      {/* 5 Preview Thumbnails for this Album */}
                      <div className="mt-4 grid grid-cols-5 gap-2">
                        {album.spreads.slice(0, 5).map((spread, sIdx) => (
                          <button
                            key={spread.id}
                            onClick={() => {
                              switchAlbum(album.id, sIdx);
                              scrollToLookbook();
                            }}
                            className="group/thumb relative aspect-16/10 rounded-lg overflow-hidden border border-amber-200/80 hover:border-amber-500 transition-all cursor-pointer shadow-xs hover:scale-105"
                            title={spread.title}
                          >
                            <img
                              src={getImageSrc(spread.image)}
                              alt={spread.title}
                              className="size-full object-cover"
                            />
                            {sIdx === 4 ? (
                              <div className="absolute inset-0 bg-black/75 flex items-center justify-center text-amber-300 text-[10px] font-black">
                                +5 More
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors" />
                            )}
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
                        onClick={() => {
                          switchAlbum(album.id, 0);
                          scrollToLookbook();
                        }}
                      >
                        <Eye className="size-4 mr-1.5" />
                        Open In Lookbook (10 Photos)
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

      {/* Modern Sleek Edge-to-Edge Fullscreen Lightbox (Only when fullscreen requested) */}
      {isFullscreenOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col justify-between p-3 sm:p-6 bg-black/95 backdrop-blur-2xl select-none text-white animate-in fade-in duration-200"
          onClick={() => setIsFullscreenOpen(false)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-20 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 min-w-0">
              <span className="rounded-full bg-amber-500 text-stone-950 px-3 py-1 text-xs font-black uppercase tracking-wider">
                {currentSpread.category}
              </span>
              <span className="text-xs sm:text-sm font-bold text-amber-200 truncate">
                {currentAlbum.coupleName} • Photo {activeSpreadIndex + 1} of {currentAlbum.spreads.length}
              </span>
            </div>

            <button
              onClick={() => setIsFullscreenOpen(false)}
              className="flex size-10 items-center justify-center rounded-full bg-white/15 hover:bg-amber-500 hover:text-stone-950 text-white transition-all cursor-pointer shadow-lg"
              title="Close Fullscreen (Esc)"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Center Image Viewport */}
          <div className="relative flex-1 min-h-0 w-full flex items-center justify-center my-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prevSpread}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 z-30 flex size-12 sm:size-14 items-center justify-center rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-400/60 shadow-2xl transition-all cursor-pointer"
            >
              <ChevronLeft className="size-7 sm:size-8" />
            </button>

            <img
              src={getImageSrc(currentSpread.image)}
              alt={currentSpread.title}
              className="max-h-[82vh] max-w-[95vw] w-auto h-auto object-contain rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 select-none"
            />

            <button
              onClick={nextSpread}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 z-30 flex size-12 sm:size-14 items-center justify-center rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-400/60 shadow-2xl transition-all cursor-pointer"
            >
              <ChevronRight className="size-7 sm:size-8" />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 z-20 shrink-0 bg-stone-900/80 backdrop-blur-xl rounded-2xl px-4 py-3 border border-amber-400/30" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-xl">
              <h4 className="font-display text-sm sm:text-base font-bold text-white">
                {currentSpread.title}
              </h4>
              <p className="text-xs text-stone-300 line-clamp-1">
                {currentSpread.caption}
              </p>
            </div>

            <a
              href={getAlbumWhatsAppLink(currentAlbum, currentSpread.title)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-104 cursor-pointer whitespace-nowrap ml-auto"
            >
              <MessageCircle className="size-4" />
              <span>Inquire Photo on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
