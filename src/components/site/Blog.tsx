import { ArrowRight, Award, BadgeCheck, Download, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import heroHaldi from "@/assets/hero-haldi.jpg";
import heroChristian from "@/assets/hero-christian.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";

const posts = [
  {
    image: heroHaldi,
    tag: "Planning",
    title: "Haldi & Mehendi decor trends taking over 2026",
    excerpt:
      "Marigold ceilings, mirror-work seating and daylight photography setups that photograph beautifully.",
  },
  {
    image: heroChristian,
    tag: "Weddings",
    title: "A 12-month checklist for a Christian church wedding",
    excerpt:
      "From booking the parish to the reception seating chart — the timeline our planners actually use.",
  },
  {
    image: heroCorporate,
    tag: "Corporate",
    title: "How to produce a college fest that feels like a concert",
    excerpt:
      "Stage design, LED walls, sound rigs and artist management on a student-committee budget.",
  },
];

const badges = [
  { icon: Award, label: "Best Wedding Planner 2024 — Telangana Event Awards" },
  { icon: BadgeCheck, label: "ISO-certified event safety practices" },
  { icon: Handshake, label: "Preferred partner: 40+ premium venues" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Journal"
          title="Latest From Our Planners"
          description="Practical guidance from the team that produces a thousand celebrations."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="glass-card card-3d group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1920}
                    height={1088}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-gradient-gold text-xs font-semibold tracking-[0.25em] uppercase">
                    {p.tag}
                  </span>
                  <h3 className="font-display mt-2 text-xl leading-snug font-bold">{p.title}</h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                    {p.excerpt}
                  </p>
                  <a
                    href="#contact"
                    className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    Read more <ArrowRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="glass-card flex flex-col items-center gap-6 rounded-3xl p-8 text-center lg:flex-row lg:text-left">
            <ul className="grid flex-1 gap-3 sm:grid-cols-3">
              {badges.map((b) => (
                <li key={b.label} className="flex items-center gap-3 text-sm">
                  <b.icon className="text-accent size-6 shrink-0" aria-hidden />
                  <span className="text-muted-foreground">{b.label}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="xl">
              <a href="#book">
                <Download className="size-5" aria-hidden />
                Download Brochure
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
