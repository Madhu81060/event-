"use client";

import { Check, Crown, MessageCircle, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { packages, WHATSAPP_NUMBER, EMAIL, WHATSAPP_LINK } from "./data";
import { cn } from "@/lib/utils";

export function Packages() {
  const getPackageWhatsAppLink = (pkgName: string) => {
    const msg = `Hello Subhamasthu Events,\nI would like to get a customized price quote and availability for the "${pkgName}" package for my event in Vijayawada / Eluru / AP.\nPlease share details.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="packages"
      className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-amber-50/25 via-white/70 to-amber-50/15 backdrop-blur-[2px]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Curated Event Packages"
          title="Tailored Luxury for Every Celebration"
          description="Every celebration is unique. Connect with us on WhatsApp or Email for transparent, customized pricing tailored to your guest count, venue, and design aspirations."
        />

        <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal as="li" key={p.name} delay={(i % 3) * 80}>
              <article
                className={cn(
                  "card-3d relative flex h-full flex-col rounded-3xl p-7 bg-white border transition-all duration-300 shadow-sm hover:shadow-xl",
                  p.featured
                    ? "border-amber-400 ring-2 ring-amber-400 shadow-amber-100/50"
                    : "border-amber-200/80 hover:border-amber-300",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-7 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 text-xs font-bold shadow-md">
                    <Crown className="size-3.5" /> Most Popular Choice
                  </span>
                )}

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-stone-900">{p.name}</h3>
                    <p className="text-stone-500 mt-1 text-sm font-medium leading-relaxed">{p.tagline}</p>
                  </div>
                </div>

                {/* Custom Quote Badge */}
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-amber-50/80 border border-amber-200/90 px-4 py-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block">
                      Pricing & Estimate
                    </span>
                    <span className="font-display text-base font-bold text-stone-900">
                      Customized Quote
                    </span>
                  </div>
                  <span className="rounded-full bg-amber-200/80 px-2.5 py-1 text-[11px] font-bold text-amber-900">
                    {p.badge || "Tailored Plan"}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                        <Check className="size-3.5 font-bold" />
                      </span>
                      <span className="text-stone-700 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action Buttons */}
                <div className="mt-8 space-y-2.5">
                  <a
                    href={getPackageWhatsAppLink(p.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
                  >
                    <MessageCircle className="size-4 fill-white/20" />
                    Enquire on WhatsApp
                  </a>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full rounded-full border-amber-300 bg-amber-50/50 text-amber-950 font-bold hover:bg-amber-100 cursor-pointer"
                  >
                    <a href="#book" className="flex items-center justify-center gap-1.5">
                      <Sparkles className="size-3.5 text-amber-600" />
                      Book Consultation
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Bottom Fast Quote Banner */}
        <Reveal delay={140} className="mt-14">
          <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6 sm:p-8 border border-amber-400/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-widest">
                Need a Custom Budget Plan?
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black mt-2 text-white">
                Get an Instant Quote via WhatsApp or Email
              </h3>
              <p className="text-stone-300 text-sm mt-1 max-w-2xl font-medium">
                Looking for standalone Photography, Royal Catering, or Mandap Decor? Tell us your venue and dates for an exact quote.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 text-sm shadow-lg transition-all hover:scale-104 cursor-pointer"
              >
                <MessageCircle className="size-4.5" />
                WhatsApp Quote
              </a>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Custom Package Quote Enquiry — Subhamasthu Events")}`}
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-amber-200 font-bold px-5 py-3 text-sm backdrop-blur-md transition-all cursor-pointer"
              >
                <Mail className="size-4.5" />
                Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
