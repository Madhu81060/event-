import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "./data";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStart((s) => (s + 1) % testimonials.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((o) => testimonials[(start + o) % testimonials.length]!);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by 500+ Families"
          description="Rated 4.9 out of 5 across Google Reviews from Hyderabad, Vijayawada and Eluru."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <Reveal key={`${t.name}-${start}-${i}`} delay={i * 90}>
              <article className="glass-card card-3d flex h-full flex-col rounded-3xl p-7">
                <Quote className="text-accent size-8" aria-hidden />
                <p className="text-foreground/85 mt-4 flex-1 leading-relaxed">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="bg-gradient-luxe text-primary-foreground flex size-12 items-center justify-center rounded-full font-semibold">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.city}</p>
                  </div>
                  <span className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="fill-accent text-accent size-4" aria-hidden />
                    ))}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Button
            variant="glass"
            size="icon"
            aria-label="Previous testimonials"
            className="min-h-11 min-w-11"
            onClick={() => setStart((s) => (s - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            aria-label="Next testimonials"
            className="min-h-11 min-w-11"
            onClick={() => setStart((s) => (s + 1) % testimonials.length)}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
