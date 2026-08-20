import { ArrowRight, Award, BadgeCheck, Download, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { clientEvent13, clientEvent43, clientEvent42 } from "./data";

const posts = [
  {
    image: clientEvent13,
    tag: "Haldi & Traditions",
    title: "Traditional Banana Leaf & Urli Haldi Trends",
    excerpt:
      "Lotus bath tubs, fresh marigold garlands, and natural banana leaf backdrops for vibrant rituals.",
  },
  {
    image: clientEvent43,
    tag: "Weddings & Mandaps",
    title: "Sacred Golden Carved Temple Mandapams",
    excerpt:
      "Lord Venkateswara Namam art, floral canopies, and antique carved pillars for auspicious wedding muhurthams.",
  },
  {
    image: clientEvent42,
    tag: "Reception & Sangeet",
    title: "Circular Rose Arches & Ambient Candle Stages",
    excerpt:
      "Grand circular rose structures, velvet couches, and warm golden lighting for romantic couple stages.",
  },
];

const badges = [
  { icon: Award, label: "Best Luxury Event Planner — Telangana & AP Awards" },
  { icon: BadgeCheck, label: "100% In-house production and transparent pricing" },
  { icon: Handshake, label: "Trusted partner at 50+ 5-star banquet halls" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Event Tips & Guides"
          title="Inspiration From Our Real Weddings"
          description="Design guides and decor insights directly from our senior event directors."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="card-3d group flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-xl transition-all">
                <div className="overflow-hidden aspect-16/10">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-amber-700">
                    {p.tag}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-extrabold text-stone-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-stone-600 font-medium leading-relaxed">
                    {p.excerpt}
                  </p>
                  <a
                    href="#book"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-900"
                  >
                    Discuss this setup <ArrowRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-14">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-amber-50/70 border border-amber-200 p-8 text-center lg:flex-row lg:text-left shadow-xs">
            <ul className="grid flex-1 gap-3.5 sm:grid-cols-3">
              {badges.map((b) => (
                <li key={b.label} className="flex items-center gap-3 text-sm">
                  <b.icon className="size-6 text-amber-700 shrink-0" aria-hidden />
                  <span className="font-bold text-stone-700">{b.label}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="xl" className="btn-gold-glow rounded-full px-6 shadow-md cursor-pointer">
              <a href="#book">
                <Download className="size-5 mr-1.5" />
                Download Event Brochure
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
