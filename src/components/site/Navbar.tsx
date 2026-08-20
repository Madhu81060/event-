import { useEffect, useState } from "react";
import { Menu, Phone, Sparkles, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PHONE, WHATSAPP_LINK } from "./data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Mandaps & Stages", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Albums", href: "#albums" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200/80 py-2.5"
          : "bg-white/90 backdrop-blur-md shadow-md border-b border-amber-200/60 py-3.5",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Elite Events logo"
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </span>
          <div className="leading-tight">
            <span className="font-display block text-xl font-extrabold tracking-tight text-amber-950">
              Elite Events
            </span>
            <span className="block text-[10px] font-bold tracking-[0.25em] text-amber-700 uppercase">
              Hyderabad · Vijayawada · Eluru
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-stone-700 transition-all duration-200 hover:text-amber-700 hover:bg-amber-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 hover:scale-102"
          >
            <MessageCircle className="size-4 text-emerald-600" />
            WhatsApp
          </a>

          <a
            href={`tel:${PHONE}`}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 hover:scale-102"
          >
            <Phone className="size-3.5 text-amber-700" />
            {PHONE}
          </a>

          <Button asChild className="btn-gold-glow rounded-full px-5 py-2 text-sm shadow-md">
            <a href="#book">
              <Sparkles className="size-4 mr-1" />
              Book Event
            </a>
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="size-10 rounded-full lg:hidden text-stone-800 hover:bg-amber-50"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white border-l border-amber-200">
              <div className="flex items-center gap-2.5 mt-2">
                <img src={logo} alt="Elite Events" className="size-9 object-contain" />
                <SheetTitle className="font-display text-xl font-bold text-amber-950">
                  Elite Events
                </SheetTitle>
              </div>
              <ul className="mt-8 grid gap-1.5">
                {[...links, { label: "Book Consultation", href: "#book" }].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-stone-800 transition-colors hover:bg-amber-50 hover:text-amber-800"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-amber-100 flex flex-col gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-amber-100 py-3 text-sm font-bold text-amber-900"
                >
                  <Phone className="size-4" />
                  Call: {PHONE}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
