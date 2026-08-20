import { ShieldCheck, UtensilsCrossed, FlameKindling, FileCheck2, Music4, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { compliance } from "./data";

const iconMap = {
  UtensilsCrossed,
  ShieldCheck,
  FlameKindling,
  FileCheck2,
  Music4,
  Sparkles,
};

export function Compliance() {
  return (
    <section id="compliance" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Safety & Standards"
          title="FSSAI Licensed & Government Permitted"
          description="Every Elite Events celebration is served by certified FSSAI kitchens with sound, fire, and venue permissions fully managed."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {compliance.map((c, i) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <Reveal as="li" key={c.title} delay={(i % 3) * 70}>
                <article className="card-3d flex h-full flex-col rounded-3xl bg-amber-50/40 border border-amber-200/80 p-7 shadow-xs hover:border-amber-400 hover:shadow-md transition-all">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-xs">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-stone-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-stone-600 font-medium leading-relaxed">{c.text}</p>
                  <p className="mt-4 text-xs font-extrabold tracking-wider uppercase text-amber-700">
                    ✓ {c.badge}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
