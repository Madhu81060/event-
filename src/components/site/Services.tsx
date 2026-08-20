import { useState } from "react";
import * as Icons from "lucide-react";
import { Reveal } from "./Reveal";
import { services, serviceGroups } from "./data";
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
    <section id="services" className="relative py-24 sm:py-32 bg-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="40+ Signature Event Services"
          description="Everything under one roof — floral mandap artistry, lighting, DJ, catering, and end-to-end production."
        />

        <Reveal className="mt-10 flex flex-col items-center gap-4">
          <div className="w-full max-w-md">
            <label htmlFor="service-search" className="sr-only">
              Search events and services
            </label>
            <div className="relative">
              <Icons.Search
                className="text-amber-700 pointer-events-none absolute top-1/2 left-4 size-4.5 -translate-y-1/2"
                aria-hidden
              />
              <Input
                id="service-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search mandap, haldi, birthday, photography…"
                className="h-12 rounded-full pl-11 bg-white border border-amber-200 shadow-xs focus-visible:ring-amber-500 text-stone-800 font-medium"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {serviceGroups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                aria-pressed={group === g}
                className={cn(
                  "rounded-full px-4.5 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer shadow-xs",
                  group === g
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md scale-103"
                    : "bg-white text-stone-700 border border-amber-200/80 hover:text-amber-800 hover:bg-amber-100/50",
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((s, i) => {
            const Icon = (Icons[s.icon as keyof typeof Icons] ??
              Icons.Sparkles) as Icons.LucideIcon;
            return (
              <Reveal as="li" key={s.name} delay={(i % 10) * 35}>
                <article className="card-3d group h-full rounded-2xl bg-white border border-amber-200/70 p-5 shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
                  <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="text-base font-bold text-stone-900 leading-snug">{s.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-amber-700">{s.group}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-stone-500 font-medium">
            No services matched “{query}”. Tell us your event idea and we'll craft it custom!
          </p>
        )}
      </div>
    </section>
  );
}
