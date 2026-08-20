import { useState } from "react";
import * as Icons from "lucide-react";
import { Reveal } from "./Reveal";
import { services, serviceGroups, getEventWhatsAppLink } from "./data";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const [group, setGroup] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = services.filter(
    (s) =>
      (group === "All" || s.group === group) &&
      s.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <section id="services" className="relative py-14 sm:py-18 bg-amber-50/40 border-y border-amber-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Comprehensive Capabilities"
          title="40+ Signature Event Services"
          description="From palace mandapams and luxury receptions to sound, light, and catering — all under one roof."
        />

        {/* Compact Search & Category Filters */}
        <Reveal className="mt-8 flex flex-col items-center gap-3">
          <div className="w-full max-w-md">
            <label htmlFor="service-search" className="sr-only">
              Search events and services
            </label>
            <div className="relative">
              <Icons.Search
                className="text-amber-700 pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
                aria-hidden
              />
              <Input
                id="service-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search mandap, reception, haldi, birthday, photography…"
                className="h-10 rounded-full pl-10 text-xs sm:text-sm bg-white border border-amber-200 shadow-2xs focus-visible:ring-amber-500 text-stone-800 font-medium"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {serviceGroups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                aria-pressed={group === g}
                className={cn(
                  "rounded-full px-3.5 py-1 text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs",
                  group === g
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs scale-102"
                    : "bg-white text-stone-700 border border-amber-200/80 hover:text-amber-800 hover:bg-amber-100/50",
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Ultra-Compact Service Grid with Small Icons & Direct WhatsApp Connect */}
        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filtered.map((s, i) => {
            const Icon = (Icons[s.icon as keyof typeof Icons] ??
              Icons.Sparkles) as Icons.LucideIcon;
            return (
              <Reveal as="li" key={s.name} delay={(i % 12) * 20}>
                <a
                  href={getEventWhatsAppLink(s.name)}
                  target="_blank"
                  rel="noreferrer"
                  title={`Inquire about ${s.name} on WhatsApp`}
                  className="group flex items-center gap-2.5 rounded-xl bg-white border border-amber-200/80 p-2.5 shadow-2xs transition-all duration-200 hover:border-amber-400 hover:bg-amber-50/60 hover:shadow-sm cursor-pointer"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-2xs transition-transform duration-200 group-hover:scale-108">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-xs font-bold text-stone-900 group-hover:text-amber-900">
                      {s.name}
                    </h3>
                    <p className="truncate text-[10px] font-semibold text-amber-700">
                      {s.group}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-xs sm:text-sm text-stone-500 font-medium">
            No services matched “{query}”. Tell us your event idea and we'll craft it custom!
          </p>
        )}
      </div>
    </section>
  );
}
