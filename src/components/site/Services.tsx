"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Heart,
  Cake,
  Briefcase,
  Camera,
  UtensilsCrossed,
  Flower2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import {
  services,
  serviceGroups,
  corePillars,
  eventCategories,
  getEventWhatsAppLink,
  WHATSAPP_LINK,
} from "./data";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, typeof Heart> = {
  weddings: Heart,
  birthdays: Cake,
  corporate: Briefcase,
  private: Sparkles,
};

const pillarIconMap: Record<string, typeof Flower2> = {
  decor: Flower2,
  photography: Camera,
  catering: UtensilsCrossed,
};

export function Services() {
  const [activeGroup, setActiveGroup] = useState<string>("All");

  const filteredServices =
    activeGroup === "All"
      ? services
      : services.filter((s) => s.group === activeGroup);

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 bg-amber-50/25 border-y border-amber-200/50 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Complete Production House"
          title="3 Core Pillars of Subhamasthu Events"
          description="Everything for your royal celebration under one roof — flawless Decor, 4K Cinematic Photography, and 100% Hygienic Royal Catering."
        />

        {/* 3 Core Pillars Master Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corePillars.map((pillar, i) => {
            const PillarIcon =
              pillarIconMap[pillar.id as keyof typeof pillarIconMap] ?? Sparkles;
            return (
              <Reveal key={pillar.id} delay={i * 80}>
                <div className="card-3d group relative flex flex-col justify-between h-full rounded-3xl bg-white border border-amber-200/90 p-6 sm:p-7 shadow-md transition-all duration-500 hover:border-amber-400 hover:shadow-2xl">
                  <div>
                    {/* Pillar Header */}
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "flex size-12 sm:size-13 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-108",
                          pillar.gradient,
                        )}
                      >
                        <PillarIcon className="size-6 sm:size-6.5" aria-hidden />
                      </span>
                      <span className="rounded-full bg-amber-100/90 border border-amber-300/80 px-3 py-0.5 text-[10px] sm:text-[11px] font-black text-amber-900 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="text-[12px] font-bold text-amber-800 tracking-wide font-sans">
                        {pillar.subtitle}
                      </p>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-black text-stone-900 leading-tight group-hover:text-amber-900 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-stone-700">
                        {pillar.tagline}
                      </p>
                      <p className="mt-2.5 text-xs sm:text-[13px] text-stone-600 font-medium leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Pillar Key Features */}
                    <div className="mt-5 space-y-2 border-t border-amber-100/80 pt-4">
                      {pillar.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs font-semibold text-stone-700 leading-snug"
                        >
                          <CheckCircle2 className="size-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={getEventWhatsAppLink(pillar.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:scale-103 cursor-pointer"
                    >
                      <MessageCircle className="size-3.5" />
                      Inquire on WhatsApp
                    </a>

                    <a
                      href={pillar.id === "photography" ? "#albums" : "#gallery"}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-800 hover:text-amber-950 transition-colors"
                    >
                      <span>{pillar.id === "photography" ? "View Albums" : "View Setups"}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* 4 Occasions We Celebrate (Clean & Compact) */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-amber-100 border border-amber-300/80 px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-amber-900">
              Celebration Coverage
            </span>
            <h3 className="mt-2.5 font-display text-xl sm:text-2xl md:text-3xl font-black text-stone-900">
              Occasions We Celebrate
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 font-medium">
              From family weddings to milestone celebrations across Vijayawada, Eluru, and Telugu states.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventCategories.map((cat, i) => {
              const CatIcon = categoryIconMap[cat.id] ?? Sparkles;
              return (
                <Reveal key={cat.id} delay={i * 50}>
                  <div className="card-3d group h-full rounded-2xl bg-white border border-amber-200/80 p-5 shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors shrink-0">
                          <CatIcon className="size-4.5" />
                        </span>
                        <div>
                          <h4 className="font-display text-sm sm:text-base font-black text-stone-900 group-hover:text-amber-900 transition-colors">
                            {cat.title}
                          </h4>
                          <p className="text-[11px] font-bold text-amber-700 font-sans">
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-stone-600 font-medium leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-amber-50">
                      <a
                        href={getEventWhatsAppLink(cat.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <MessageCircle className="size-3 text-emerald-600" />
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Detailed Services Grid with Clean Tabs */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/60 pb-4">
            <div>
              <h3 className="font-display text-lg sm:text-2xl font-black text-stone-900">
                Service Catalogue
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Choose any service to customize for your upcoming event.
              </p>
            </div>

            {/* Service Group Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {serviceGroups.map((grp) => (
                <button
                  key={grp}
                  onClick={() => setActiveGroup(grp)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer",
                    activeGroup === grp
                      ? "bg-amber-600 text-white shadow-xs font-black"
                      : "bg-white text-stone-700 hover:bg-amber-100 hover:text-amber-900 border border-amber-200/80",
                  )}
                >
                  {grp}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map((s, i) => {
              const Icon = (Icons[s.icon as keyof typeof Icons] ??
                Icons.Sparkles) as Icons.LucideIcon;
              return (
                <Reveal key={s.name} delay={i * 30}>
                  <article className="card-3d group flex flex-col justify-between h-full rounded-2xl bg-white border border-amber-200/90 p-5 shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-xs transition-transform duration-300 group-hover:scale-108">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="rounded-full bg-amber-100/80 px-2.5 py-0.5 text-[9.5px] font-bold text-amber-900 uppercase tracking-wider">
                          {s.group}
                        </span>
                      </div>

                      <h4 className="mt-3.5 font-display text-sm sm:text-base font-black text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
                        {s.name}
                      </h4>
                      <p className="mt-1 text-xs font-bold text-amber-700 leading-snug">
                        {s.tagline}
                      </p>
                      <p className="mt-1.5 text-xs font-medium text-stone-600 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between">
                      <a
                        href={getEventWhatsAppLink(s.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <MessageCircle className="size-3 text-emerald-600 fill-emerald-600/20" />
                        Inquire
                      </a>
                      <a
                        href={s.group === "Photography" ? "#albums" : "#gallery"}
                        className="text-stone-400 hover:text-amber-700 transition-colors text-xs font-bold flex items-center gap-1"
                        title="View Showcase"
                      >
                        <span>Preview</span>
                        <ArrowRight className="size-3" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
