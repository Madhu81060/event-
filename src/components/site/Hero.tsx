import { useEffect, useRef, useState } from "react";
import { CalendarDays, Images, MessageCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./Particles";
import { slides, PHONE, WHATSAPP_LINK } from "./data";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(id);
  }, []);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const active = slides[index]!;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[92dvh] min-h-[660px] max-h-[900px] w-full overflow-hidden pt-16 bg-amber-50"
    >
      {/* 100% Bright, Natural Full-Vibrancy Image Slider (Zero Dark Overlays) */}
      <div className="absolute inset-0 size-full">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 size-full transition-opacity duration-1000 ease-in-out",
              i === index ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              width={1920}
              height={1088}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              className="size-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Subtle Bottom Light Fade For Natural Grounding */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"
        aria-hidden
      />

      <Particles />

      {/* Previous / Next Slide Nav Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-xl border border-amber-300 hover:bg-amber-500 hover:text-white hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-xl border border-amber-300 hover:bg-amber-500 hover:text-white hover:scale-110 transition-all cursor-pointer"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Floating Royal Glass Content Card — High Contrast, Bright & Elegant */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-8">
        <div className="max-w-2xl rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-amber-300 p-6 sm:p-9 shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-300 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-900 shadow-xs mb-3">
            <Sparkles className="size-3.5 text-amber-600" />
            <span>{active.eyebrow}</span>
          </div>

          <h1
            key={active.title}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-[1.15]"
          >
            {active.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base font-semibold text-stone-700 leading-relaxed">
            {active.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="btn-gold-glow rounded-full px-6 py-2.5 text-sm font-bold shadow-lg">
              <a href="#book">
                <CalendarDays className="size-4.5 mr-1.5" />
                Book Your Date
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-amber-400 bg-amber-50 text-amber-950 font-bold hover:bg-amber-100 shadow-sm"
            >
              <a href="#gallery">
                <Images className="size-4.5 mr-1.5 text-amber-700" />
                Explore 45+ Real Setups
              </a>
            </Button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-500 hover:scale-103"
            >
              <MessageCircle className="size-4" />
              WhatsApp Direct
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-amber-200/80 pt-4 text-center">
            {[
              { k: "10+ Years", v: "Industry Experience" },
              { k: "1200+", v: "Celebrations" },
              { k: "3 Cities", v: "Hyd · Vjy · Eluru" },
            ].map((item) => (
              <div key={item.v}>
                <p className="font-display text-lg sm:text-xl font-black text-amber-600">
                  {item.k}
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold text-stone-600 uppercase tracking-wider">
                  {item.v}
                </p>
              </div>
            ))}
          </div>

          {/* Slide Dots Indicator */}
          <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Hero slides">
            {slides.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide: ${s.title}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  i === index ? "w-8 bg-amber-500 shadow-sm" : "w-3 bg-stone-300 hover:bg-amber-300",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
