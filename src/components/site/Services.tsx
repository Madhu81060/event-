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
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Create"
          title="40+ Signature Services"
          description="From sacred rituals to concert-scale production — one team, every detail, across Hyderabad, Vijayawada and Eluru."
        />

        <Reveal className="mt-10 flex flex-col items-center gap-4">
          <div className="w-full max-w-md">
            <label htmlFor="service-search" className="sr-only">
              Search events and services
            </label>
            <div className="relative">
              <Icons.Search
                className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
                aria-hidden
              />
              <Input
                id="service-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events, decor, entertainment…"
                className="glass-card h-12 rounded-full pl-11"
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
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  group === g
                    ? "bg-gradient-luxe text-primary-foreground shadow-luxe"
                    : "glass-card text-foreground/75 hover:text-primary",
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
              <Reveal as="li" key={s.name} delay={(i % 10) * 45}>
                <article className="glass-card card-3d group h-full rounded-2xl p-5 [transform-style:preserve-3d]">
                  <span className="bg-gradient-luxe mb-4 flex size-12 items-center justify-center rounded-xl shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="text-primary-foreground size-6" aria-hidden />
                  </span>
                  <h3 className="text-base leading-snug font-semibold">{s.name}</h3>
                  <p className="text-muted-foreground mt-1 text-xs">{s.group}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        {filtered.length === 0 && (
          <p className="text-muted-foreground mt-12 text-center">
            No services matched “{query}”. Tell us what you need and we'll design it.
          </p>
        )}
      </div>
    </section>
  );
}
