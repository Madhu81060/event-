import { Check, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { packages } from "./data";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-amber-50/25 via-white/70 to-amber-50/15 backdrop-blur-[2px]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing & Packages"
          title="Transparent Packages For Every Budget"
          description="Starting prices with full clarity. Every package is completely customizable according to your venue size and theme."
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
                    <Crown className="size-3.5" /> Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-extrabold text-stone-900">{p.name}</h3>
                <p className="text-stone-500 mt-1 text-sm font-medium">{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold text-amber-600">{p.price}</span>
                  <span className="text-stone-400 text-xs font-medium uppercase tracking-wider">starts at</span>
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

                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "mt-8 w-full rounded-full font-bold shadow-md cursor-pointer",
                    p.featured
                      ? "btn-gold-glow"
                      : "bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200",
                  )}
                >
                  <a href="#book">
                    <Sparkles className="size-4 mr-1.5" />
                    Book {p.name}
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
