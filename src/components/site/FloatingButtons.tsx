import { useEffect, useState } from "react";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { EMAIL, PHONE, WHATSAPP_LINK } from "./data";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "flex min-h-12 min-w-12 items-center justify-center rounded-full shadow-luxe transition-transform duration-300 hover:-translate-y-1";

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3 sm:right-6">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Elite Events on WhatsApp"
        className={cn(base, "bg-[oklch(0.72_0.17_150)] text-white")}
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        aria-label="Call Elite Events now"
        className={cn(base, "bg-gradient-luxe text-primary-foreground")}
      >
        <Phone className="size-5" aria-hidden />
      </a>
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email Elite Events"
        className={cn(base, "bg-gradient-gold text-accent-foreground")}
      >
        <Mail className="size-5" aria-hidden />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          base,
          "glass-card text-foreground",
          showTop ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ArrowUp className="size-5" aria-hidden />
      </button>
    </div>
  );
}
