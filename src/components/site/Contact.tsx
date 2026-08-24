"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Sparkles, UserCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { EMAIL, PHONE, WHATSAPP_LINK, CONTACT_PERSON, PRIMARY_ADDRESS, offices } from "./data";
import { cn } from "@/lib/utils";

export function Contact() {
  const [activeCity, setActiveCity] = useState("Eluru");

  const currentOffice = offices.find((o) => o.city === activeCity) || offices[0];
  const MAP_QUERY = encodeURIComponent(`Subhamasthu Events, ${currentOffice.address}`);

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact & Visit Us"
          title="Direct Contact • Eluru & Vijayawada"
          description="Connect directly with our Event Director Pavanswamy for customized dates, venue discussions, and package quotes."
        />

        {/* Contact Person Highlight Banner */}
        <Reveal className="mt-8 max-w-3xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 border-2 border-amber-400/80 p-5 sm:p-7 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="flex size-12 sm:size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 font-black shadow-md shrink-0">
                <UserCheck className="size-6 sm:size-7" />
              </span>
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-widest text-amber-300 block">
                  Lead Event Director & Founder
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                  {CONTACT_PERSON}
                </h3>
                <p className="text-xs text-stone-300 font-medium">
                  {PRIMARY_ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <Phone className="size-4" />
                Call: {PHONE}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        {/* 2 City Presence Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {offices.map((o, i) => {
            const isSelected = o.city === activeCity;
            return (
              <Reveal key={o.city} delay={i * 80}>
                <article
                  onClick={() => setActiveCity(o.city)}
                  className={cn(
                    "card-3d relative h-full rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 cursor-pointer shadow-xs",
                    isSelected
                      ? "bg-white border-amber-500 ring-2 ring-amber-400/40 shadow-lg scale-102"
                      : "bg-white/80 border-amber-200/80 hover:border-amber-400 hover:bg-white",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold text-stone-900">
                      <span className={isSelected ? "text-gradient-luxe" : ""}>{o.city}</span>
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider",
                        o.city === "Eluru"
                          ? "bg-amber-500 text-white shadow-xs"
                          : "bg-amber-100 text-amber-900",
                      )}
                    >
                      {o.role || (o.city === "Eluru" ? "Head Office" : "Design Studio")}
                    </span>
                  </div>

                  <p className="mt-4 flex gap-2.5 text-xs sm:text-sm font-medium text-stone-600 leading-relaxed">
                    <MapPin className="text-amber-600 mt-0.5 size-4 shrink-0" aria-hidden />
                    {o.address}
                  </p>

                  <p className="mt-3 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-stone-800">
                    <UserCheck className="text-amber-600 size-4 shrink-0" aria-hidden />
                    <span>Contact Person: {CONTACT_PERSON}</span>
                  </p>

                  <p className="mt-2 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-stone-800">
                    <Phone className="text-amber-600 size-4 shrink-0" aria-hidden />
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-amber-700">
                      {o.phone}
                    </a>
                  </p>

                  <p className="mt-2 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-stone-600">
                    <Mail className="text-amber-600 size-4 shrink-0" aria-hidden />
                    <a href={`mailto:${EMAIL}`} className="hover:text-amber-700">
                      {EMAIL}
                    </a>
                  </p>

                  <p className="mt-2 flex items-center gap-2.5 text-xs text-stone-500 font-semibold">
                    <Clock className="text-amber-600 size-4 shrink-0" aria-hidden />
                    Mon – Sun, 9:00 AM – 9:00 PM
                  </p>

                  <div className="mt-5 pt-4 border-t border-amber-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-800">
                      {isSelected ? "● Viewing on map" : "Click to view map →"}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Featured Map Section */}
        <Reveal delay={120} className="mt-10">
          <div className="glass-card grid gap-0 overflow-hidden rounded-3xl lg:grid-cols-5 border-2 border-amber-200 shadow-xl">
            <div className="p-3 lg:col-span-3 bg-stone-50">
              <iframe
                title={`Map of Subhamasthu Events office, ${currentOffice.city}`}
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full rounded-2xl border-0 sm:h-[460px]"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 p-6 sm:p-7 lg:col-span-2 bg-white">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900 uppercase tracking-widest">
                    <Sparkles className="size-3 text-amber-600" />
                    {currentOffice.city === "Eluru" ? "Head Office & Studio" : "Regional Studio"}
                  </span>
                </div>

                <h3 className="font-display mt-3 text-2xl sm:text-3xl font-black text-stone-900">
                  <span className="text-gradient-luxe">{currentOffice.city} Office</span>
                </h3>

                <p className="mt-3 flex gap-3 text-sm font-medium text-stone-700 leading-relaxed">
                  <MapPin className="text-amber-600 mt-0.5 size-4 shrink-0" aria-hidden />
                  {currentOffice.address}
                </p>

                <p className="mt-2.5 flex items-center gap-2.5 text-sm font-bold text-stone-800">
                  <UserCheck className="text-amber-600 size-4 shrink-0" aria-hidden />
                  <span>Contact: {CONTACT_PERSON} ({PHONE})</span>
                </p>

                <p className="mt-2.5 flex items-center gap-3 text-sm text-stone-600 font-semibold">
                  <Clock className="text-amber-600 size-4 shrink-0" aria-hidden />
                  Open all 7 days: 9:00 AM – 9:00 PM
                </p>

                <p className="mt-2 text-xs text-amber-800 font-semibold">
                  Serving Eluru, Vijayawada, Guntur, and all districts across Andhra Pradesh & Telangana.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild variant="luxe" size="lg" className="btn-gold-glow rounded-full">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="size-4 mr-1.5" aria-hidden /> Get Directions
                  </a>
                </Button>

                <Button asChild className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold" size="lg">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4 mr-1.5" aria-hidden /> WhatsApp Us
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="rounded-full border-amber-300 text-amber-900 hover:bg-amber-100">
                  <a href={`tel:${currentOffice.phone.replace(/\s/g, "")}`}>
                    <Phone className="size-4 mr-1.5" aria-hidden /> Call {CONTACT_PERSON}
                  </a>
                </Button>

                <Button asChild variant="ghost" size="lg" className="rounded-full border border-stone-200 hover:bg-stone-100">
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Event enquiry — Subhamasthu Events (${CONTACT_PERSON})`)}`}>
                    <Mail className="size-4 mr-1.5" aria-hidden /> Email Studio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
