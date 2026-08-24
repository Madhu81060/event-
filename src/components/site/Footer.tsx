"use client";

import { Facebook, Instagram, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-elite-events.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { EMAIL, PHONE, offices } from "./data";
import { getImageSrc } from "@/lib/utils";

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
    <footer className="relative bg-amber-950 text-white pt-16 sm:pt-20 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3.5">
              <div className="flex size-14 sm:size-16 items-center justify-center rounded-full bg-white p-0.5 border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.45)] ring-2 ring-amber-300/50 shrink-0 overflow-hidden">
                <img
                  src={getImageSrc(logo)}
                  alt="Shubhamastu Events logo"
                  loading="lazy"
                  width={64}
                  height={64}
                  className="size-full rounded-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-black text-amber-200 block leading-tight">
                  Shubhamastu Events
                </span>
                <span className="block text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-amber-400 font-extrabold mt-0.5">
                  Eluru (Rajeswari Nagar) · Vijayawada
                </span>
                <p className="text-[10px] font-semibold text-amber-200/90 italic mt-0.5">
                  Your Dreams • Our Planning • Memories Forever
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-stone-300 font-medium leading-relaxed">
              South India&apos;s signature event management house directed by <strong>Pavanswamy</strong>. Traditional temple mandaps, 4K cinematography, and royal catering since 2015.
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
                  aria-label={`Subhamasthu Events on ${label}`}
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
            <ul className="mt-4 space-y-2.5 text-sm text-stone-300">
              <li className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400">Contact:</span>
                <span className="text-stone-100 font-bold">Pavanswamy</span>
              </li>
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
                <span className="text-xs text-stone-300 leading-snug">
                  Head Office: Rajeswari Nagar, Eluru 534006<br />
                  Studio: MG Road, Vijayawada
                </span>
              </li>
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("You're subscribed to Subhamasthu Events updates.");
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
          <p>© {new Date().getFullYear()} Subhamasthu Events. All rights reserved.</p>
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
