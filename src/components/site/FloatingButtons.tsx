"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { EMAIL, PHONE, WHATSAPP_LINK } from "./data";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-2.5 sm:right-6 bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:bottom-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto">
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex size-9 sm:size-11 items-center justify-center rounded-full bg-white/90 text-stone-800 border border-amber-300 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-amber-500 hover:text-stone-950 cursor-pointer",
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4",
        )}
      >
        <ArrowUp className="size-4 sm:size-5" aria-hidden />
      </button>

      {/* Email Link (Desktop only) */}
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email Subhamasthu Events"
        className="hidden sm:flex size-11 items-center justify-center rounded-full bg-amber-500 text-stone-950 shadow-lg border border-amber-300 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <Mail className="size-5" aria-hidden />
      </a>

      {/* Direct Phone Call */}
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        aria-label="Call Subhamasthu Events now"
        className="flex size-10 sm:size-12 items-center justify-center rounded-full bg-amber-600 text-white shadow-xl border border-amber-400 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <Phone className="size-4.5 sm:size-5.5" aria-hidden />
      </a>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Subhamasthu Events on WhatsApp"
        className="flex size-11 sm:size-13 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl border-2 border-white/60 transition-transform duration-300 hover:-translate-y-1 hover:scale-108 animate-bounce-subtle"
      >
        <MessageCircle className="size-5.5 sm:size-7 fill-white/20" aria-hidden />
      </a>
    </div>
  );
}
