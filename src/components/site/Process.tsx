import { ClipboardList, PenTool, Flower2, Settings2, PartyPopper } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Planning",
    text: "A free consultation to understand your rituals, guest count, venue and budget.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Moodboards, 3D stage renders and a costed proposal you approve before anything is booked.",
  },
  {
    icon: Flower2,
    title: "Decoration",
    text: "Our floral studio and fabrication crew build the set on site, ahead of schedule.",
  },
  {
    icon: Settings2,
    title: "Execution",
    text: "Run-sheets, sound checks, hospitality and a coordinator who owns the timeline.",
  },
  {
    icon: PartyPopper,
    title: "Celebration",
    text: "You stay present with your family while we handle every moving part behind the scenes.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="From First Call to Final Toast"
          description="A five-stage process refined over a thousand events."
        />

        <ol className="relative mt-16 grid gap-8 lg:grid-cols-5">
          <span
            aria-hidden
            className="bg-gradient-luxe absolute top-8 right-0 left-0 hidden h-0.5 opacity-40 lg:block"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110} className="relative">
              <div className="flex flex-col items-center text-center">
                <span className="bg-gradient-luxe shadow-luxe relative z-10 flex size-16 items-center justify-center rounded-full ring-8 ring-background">
                  <s.icon className="text-primary-foreground size-7" aria-hidden />
                </span>
                <span className="text-gradient-gold mt-4 text-xs font-semibold tracking-[0.3em] uppercase">
                  Step {i + 1}
                </span>
                <h3 className="font-display mt-1 text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
