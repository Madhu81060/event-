import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { EMAIL, PHONE, offices } from "./data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  "Hindu Weddings",
  "Christian Weddings",
  "Muslim Weddings",
  "Birthday Celebrations",
  "Corporate Events",
  "College Fests",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10">
      <div
        aria-hidden
        className="bg-gradient-luxe animate-gradient-pan absolute inset-0 opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="glass-card flex size-11 items-center justify-center rounded-2xl p-1.5">
                  <img
                    src={logo}
                    alt="Elite Events logo"
                    loading="lazy"
                    width={816}
                    height={816}
                    className="size-full object-contain"
                  />
                </span>
                <span className="font-display text-xl font-bold">Elite Events</span>
              </div>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Luxury event design and production across Hyderabad, Vijayawada and Eluru. Weddings,
                celebrations, corporate summits and college festivals since 2015.
              </p>
              <div className="mt-5 flex gap-2">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#contact"
                    aria-label={`Elite Events on ${label}`}
                    className="glass-card hover:text-primary flex min-h-11 min-w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Quick links">
              <h3 className="font-display text-lg font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-muted-foreground hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="font-display text-lg font-bold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-muted-foreground hover:text-primary">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold">Cities Served</h3>
              <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                {offices.map((o) => (
                  <li key={o.city}>{o.city}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-primary">
                  {PHONE}
                </a>
                <br />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                  {EMAIL}
                </a>
              </p>

              <form
                className="mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.currentTarget.reset();
                  toast.success("You're subscribed to Elite Events updates.");
                }}
              >
                <label htmlFor="newsletter" className="text-sm font-medium">
                  Newsletter
                </label>
                <div className="mt-2 flex gap-2">
                  <Input
                    id="newsletter"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="you@email.com"
                    className="glass-card h-11 rounded-full"
                  />
                  <Button type="submit" variant="luxe" size="icon" aria-label="Subscribe">
                    <Send className="size-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-border/60 text-muted-foreground mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs sm:flex-row">
            <p>© {new Date().getFullYear()} Elite Events. All rights reserved.</p>
            <p className="flex gap-4">
              <a href="#contact" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#contact" className="hover:text-primary">
                Terms
              </a>
              <a href="#faq" className="hover:text-primary">
                Cookies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
