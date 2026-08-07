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
    <section id="compliance" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Licensed & Certified"
          title="Food Authority & Event Permissions"
          description="Every Elite Events celebration is served by FSSAI-licensed kitchens and runs on properly filed permits — food safety, fire, sound and venue clearances handled end to end by our team."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {compliance.map((c, i) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <Reveal as="li" key={c.title} delay={(i % 3) * 100}>
                <article className="glass-card card-3d flex h-full flex-col rounded-3xl p-7">
                  <span className="bg-gradient-gold shadow-gold mb-5 flex size-12 items-center justify-center rounded-xl">
                    <Icon className="text-accent-foreground size-6" aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-bold">{c.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{c.text}</p>
                  <p className="text-gradient-luxe mt-4 text-xs font-semibold tracking-wide uppercase">
                    {c.badge}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10">
          <p className="glass-card text-muted-foreground mx-auto max-w-3xl rounded-2xl p-5 text-center text-sm">
            Licence copies, hygiene audit reports and permit acknowledgements are shared with every
            client before the event date.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
