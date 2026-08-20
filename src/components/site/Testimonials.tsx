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
    <section id="testimonials" className="relative py-24 sm:py-32 bg-amber-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews & Feedback"
          title="Loved by 950+ Families Across AP & Telangana"
          description="Rated 4.9 out of 5 stars on Google Reviews from Hyderabad, Vijayawada and Eluru."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <Reveal key={`${t.name}-${start}-${i}`} delay={i * 80}>
              <article className="card-3d flex h-full flex-col rounded-3xl bg-white border border-amber-200/80 p-7 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all">
                <Quote className="size-8 text-amber-500" aria-hidden />
                <p className="mt-4 flex-1 text-stone-700 font-medium leading-relaxed">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 font-bold text-white shadow-xs">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-extrabold text-stone-900">{t.name}</p>
                    <p className="text-xs font-semibold text-amber-700">{t.city}</p>
                  </div>
                  <span className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-amber-500 text-amber-500" aria-hidden />
                    ))}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous testimonials"
            className="size-11 rounded-full border-amber-300 bg-white text-stone-800 hover:bg-amber-50 cursor-pointer"
            onClick={() => setStart((s) => (s - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next testimonials"
            className="size-11 rounded-full border-amber-300 bg-white text-stone-800 hover:bg-amber-50 cursor-pointer"
            onClick={() => setStart((s) => (s + 1) % testimonials.length)}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
