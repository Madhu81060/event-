import { useEffect, useState } from "react";
import { Menu, Phone, Sparkles, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PHONE, WHATSAPP_LINK } from "./data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Mandaps & Stages", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Lookbooks", href: "#albums" },
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
        "about",
        "albums",
        "packages",
        "services",
        "gallery",
        "home",
      ];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-amber-200/90 shadow-md"
          : "bg-white/90 backdrop-blur-md border-b border-amber-200/60 shadow-xs"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <span className="flex size-10 sm:size-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 p-1 shadow-xs transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Elite Events logo"
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </span>
          <div className="leading-tight">
            <span className="font-display block text-lg sm:text-xl font-black tracking-tight text-amber-950">
              Elite Events
            </span>
            <span className="block text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] text-amber-700 uppercase">
              Vijayawada · Hyderabad · Eluru
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

        {/* CTA Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 hover:scale-103 shadow-xs shrink-0"
          >
            <MessageCircle className="size-3.5 text-emerald-600 fill-emerald-600/20" />
            WhatsApp
          </a>

          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="hidden 2xl:inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 hover:scale-103 shadow-xs shrink-0"
          >
            <Phone className="size-3.5 text-amber-700" />
            {PHONE}
          </a>

          <Button asChild className="btn-gold-glow rounded-full px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold shadow-md shrink-0">
            <a href="#book" className="flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="size-3.5" />
              <span>Book Event</span>
            </a>
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="size-9 rounded-full lg:hidden text-stone-800 hover:bg-amber-50"
              >
                <Menu className="size-5.5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white border-l border-amber-200 p-6">
              <div className="flex items-center gap-2.5 mt-1">
                <img src={logo} alt="Elite Events" className="size-8 object-contain" />
                <div>
                  <SheetTitle className="font-display text-lg font-black text-amber-950 text-left">
                    Elite Events
                  </SheetTitle>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                    Vijayawada · Hyderabad · Eluru
                  </span>
                </div>
              </div>
              <ul className="mt-6 grid gap-1">
                {[...links, { label: "Book Consultation", href: "#book" }].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleNavClick(e, l.href)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                        activeHash === l.href
                          ? "bg-amber-500 text-white"
                          : "text-stone-800 hover:bg-amber-50 hover:text-amber-800"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-amber-100 flex flex-col gap-2.5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-amber-100 py-2.5 text-xs font-bold text-amber-900"
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
