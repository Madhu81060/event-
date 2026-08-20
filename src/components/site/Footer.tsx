import { Facebook, Instagram, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { EMAIL, PHONE, offices } from "./data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Mandaps & Stages", href: "#gallery" },
  { label: "Our Services", href: "#services" },
  { label: "Packages & Pricing", href: "#packages" },
  { label: "Lookbook Albums", href: "#albums" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  "Grand Hindu Weddings",
  "Christian & Muslim Ceremonies",
  "Traditional Haldi & Mehendi",
  "Luxury Reception & Sangeet",
  "Milestone 1st Birthdays",
  "Corporate & Campus Summits",
];

export function Footer() {
  return (
    <footer className="relative bg-amber-950 text-white pt-20 pb-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 p-1 border border-amber-400/40">
                <img
                  src={logo}
                  alt="Elite Events logo"
                  loading="lazy"
                  width={40}
                  height={40}
                  className="size-full object-contain"
                />
              </span>
              <div>
                <span className="font-display text-xl font-extrabold text-amber-200">Elite Events</span>
                <span className="block text-[10px] tracking-widest uppercase text-amber-400 font-bold">
                  Vijayawada · Eluru
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-stone-300 font-medium leading-relaxed">
              South India's signature event management house. Traditional temple mandaps, modern luxury receptions, and milestone celebrations since 2015.
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
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-amber-300 transition hover:bg-amber-500 hover:text-white"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-lg font-bold text-amber-200">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-stone-300 hover:text-amber-300 font-medium transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-lg font-bold text-amber-200">Specializations</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-stone-300 hover:text-amber-300 font-medium transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-amber-200">Direct Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-300">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-amber-400 shrink-0" />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-amber-300 font-bold">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-amber-400 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-amber-300 font-medium">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <MapPin className="size-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-stone-300">
                  Offices in MG Road (Vijayawada) & Powerpet (Eluru)
                </span>
              </li>
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("You're subscribed to Elite Events updates.");
              }}
            >
              <label htmlFor="newsletter" className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Get Updates & Lookbooks
              </label>
              <div className="mt-2 flex gap-2">
                <Input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="h-10 rounded-full bg-white/10 border-white/20 text-white placeholder:text-stone-400 text-xs"
                />
                <Button type="submit" size="icon" className="btn-gold-glow size-10 rounded-full shrink-0">
                  <Send className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-amber-900/60 pt-6 flex flex-col items-center justify-between gap-3 text-xs text-stone-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Elite Events. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#contact" className="hover:text-amber-300">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-amber-300">
              Terms & Conditions
            </a>
            <a href="#faq" className="hover:text-amber-300">
              FAQs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
