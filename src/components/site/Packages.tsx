import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { packages } from "./data";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-gradient-luxe animate-gradient-pan pointer-events-none absolute top-1/3 -right-40 size-[30rem] rounded-full opacity-10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Investment"
          title="Packages For Every Scale"
          description="Transparent starting prices. Every package is customisable — mix, match and scale to your guest count."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal as="li" key={p.name} delay={(i % 3) * 100}>
              <article
                className={cn(
                  "glass-card card-3d relative flex h-full flex-col rounded-3xl p-7",
                  p.featured && "ring-2 ring-accent",
                )}
              >
                {p.featured && (
                  <span className="bg-gradient-gold text-accent-foreground absolute -top-3 left-7 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold">
                    <Crown className="size-3.5" aria-hidden /> Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{p.tagline}</p>
                <p className="text-gradient-luxe font-display mt-6 text-4xl font-bold">{p.price}</p>
                <p className="text-muted-foreground text-xs">starting from</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="bg-gradient-luxe mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <Check className="text-primary-foreground size-3" aria-hidden />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={p.featured ? "luxe" : "glass"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <a href="#book">Book {p.name}</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
