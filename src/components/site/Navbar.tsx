"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Sparkles, MessageCircle, CalendarDays, X } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PHONE, WHATSAPP_LINK } from "./data";
import { getImageSrc } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Stages & Mandaps", href: "#gallery" },
  { label: "Photo Albums", href: "#albums" },
  { label: "Services & Catering", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current active section in viewport
      const sectionIds = [
        "contact",
        "faq",
        "blog",
        "book",
        "testimonials",
        "process",
        "compliance",
        "packages",
        "albums",
        "gallery",
        "services",
        "about",
        "home",
      ];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveHash(`#${id}`);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setOpen(false);
    setActiveHash(href);

    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        window.history.pushState(null, "", "#home");
      } catch {}
      return;
    }

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        window.history.pushState(null, "", href);
      } catch {}
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-amber-200/90 shadow-md py-1.5"
          : "bg-white/90 backdrop-blur-sm border-b border-amber-200/60 shadow-xs py-2"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:px-6"
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group shrink min-w-0"
        >
          <div className="relative flex size-10 sm:size-12 items-center justify-center rounded-full bg-white p-0.5 border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)] ring-1 ring-amber-300/60 transition-transform duration-300 group-hover:scale-106 shrink-0 overflow-hidden">
            <img
              src={getImageSrc(logo)}
              alt="Shubhamastu Events logo"
              width={48}
              height={48}
              className="size-full rounded-full object-cover object-center"
            />
          </div>
          <div className="leading-tight min-w-0">
            <span className="font-display block text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-tight text-amber-950 truncate">
              Shubhamastu Events
            </span>
            <span className="block text-[8px] sm:text-[9.5px] font-extrabold tracking-[0.14em] text-amber-700 uppercase truncate">
              Eluru · Vijayawada
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {links.map((l) => {
            const isActive = activeHash === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`rounded-full px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-[13.5px] font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-amber-500 text-white shadow-xs"
                      : "text-stone-700 hover:text-amber-800 hover:bg-amber-100/60"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Header CTAs & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* WhatsApp CTA (Tablet/Desktop) */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 hover:scale-103 shadow-xs shrink-0"
          >
            <MessageCircle className="size-3.5 text-emerald-600 fill-emerald-600/20" />
            <span>WhatsApp</span>
          </a>

          {/* Direct Phone CTA (Large Screens) */}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="hidden 2xl:inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 hover:scale-103 shadow-xs shrink-0"
          >
            <Phone className="size-3.5 text-amber-700" />
            <span>{PHONE}</span>
          </a>

          {/* Book Event Pill Button (Always visible on mobile & desktop) */}
          <Button
            asChild
            size="sm"
            className="btn-gold-glow rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold shadow-md shrink-0 h-8 sm:h-9"
          >
            <a href="#book" className="flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="size-3 sm:size-3.5 text-amber-950" />
              <span>Book Event</span>
            </a>
          </Button>

          {/* Mobile Hamburger Menu Toggle */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open mobile menu navigation"
                className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-amber-100/80 hover:bg-amber-200/90 text-amber-950 border border-amber-300/80 shadow-xs lg:hidden shrink-0 transition-colors cursor-pointer"
              >
                <Menu className="size-4.5 sm:size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-white border-l border-amber-200 p-5 sm:p-6 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center gap-3 mt-2 pb-4 border-b border-amber-100">
                  <div className="size-12 rounded-full border-2 border-amber-400 p-0.5 shadow-md ring-1 ring-amber-300 shrink-0 bg-white overflow-hidden">
                    <img
                      src={getImageSrc(logo)}
                      alt="Shubhamastu Events"
                      className="size-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <SheetTitle className="font-display text-lg font-black text-amber-950 text-left leading-tight">
                      Shubhamastu Events
                    </SheetTitle>
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                      Eluru (Rajeswari Nagar) · Vijayawada
                    </span>
                    <p className="text-[9.5px] font-semibold text-stone-500 italic mt-0.5">
                      Your Dreams • Our Planning • Memories Forever
                    </p>
                  </div>
                </div>

                {/* Navigation Links List */}
                <ul className="mt-5 grid gap-1.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={(e) => handleNavClick(e, l.href)}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                          activeHash === l.href
                            ? "bg-amber-500 text-white shadow-xs"
                            : "text-stone-800 hover:bg-amber-50 hover:text-amber-900"
                        }`}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#book"
                      onClick={(e) => handleNavClick(e, "#book")}
                      className="flex items-center gap-2 rounded-xl bg-amber-100/70 px-4 py-2.5 text-sm font-black text-amber-900 hover:bg-amber-200/80 transition-colors"
                    >
                      <CalendarDays className="size-4 text-amber-700" />
                      Book Consultation
                    </a>
                  </li>
                </ul>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-amber-100 flex flex-col gap-2.5 shrink-0">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Pavanswamy
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-amber-100 hover:bg-amber-200 py-3 text-xs sm:text-sm font-bold text-amber-950 transition-colors"
                >
                  <Phone className="size-4 text-amber-700" />
                  Call Pavanswamy: {PHONE}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
