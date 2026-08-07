import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-card border-x-0 border-t-0 py-2" : "py-4",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="glass-card shadow-gold flex size-11 items-center justify-center rounded-2xl p-1.5">
            <img
              src={logo}
              alt="Elite Events logo"
              width={816}
              height={816}
              className="size-full object-contain drop-shadow-sm"
            />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "font-display block text-lg font-bold tracking-tight transition-colors",
                scrolled
                  ? "text-foreground"
                  : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]",
              )}
            >
              Elite Events
            </span>
            <span
              className={cn(
                "block text-[10px] tracking-[0.28em] uppercase transition-colors",
                scrolled
                  ? "text-muted-foreground"
                  : "text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]",
              )}
            >
              Hyd · Vjy · Eluru
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-foreground/80 hover:bg-secondary hover:text-primary"
                    : "text-white/90 hover:bg-white/15 hover:text-white",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDark((d) => !d)}
            className={cn(
              "min-h-11 min-w-11 rounded-full",
              scrolled ? "" : "text-white hover:bg-white/15 hover:text-white",
            )}
          >
            {dark ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </Button>

          <Button asChild variant="luxe" className="hidden sm:inline-flex">
            <a href="#book">Book Event</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "min-h-11 min-w-11 rounded-full xl:hidden",
                  scrolled ? "" : "text-white hover:bg-white/15 hover:text-white",
                )}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="font-display text-2xl">Elite Events</SheetTitle>
              <ul className="mt-6 grid gap-1">
                {[...links, { label: "Book Event", href: "#book" }].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
