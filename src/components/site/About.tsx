import { useEffect, useRef, useState } from "react";
import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { clientEvent1, clientEvent4 } from "./data";

const stats = [
  { value: 1000, suffix: "+", label: "Events Completed" },
  { value: 500, suffix: "+", label: "Happy Families" },
  { value: 50, suffix: "+", label: "Professional Team" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-gradient-luxe font-display text-4xl font-bold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    icon: HeartHandshake,
    title: "Our Mission",
    text: "To turn every family's most important day into a flawlessly produced, deeply personal celebration — without the stress.",
  },
  {
    icon: Award,
    title: "Our Vision",
    text: "To be South India's most trusted luxury event house, known for design integrity and immaculate execution.",
  },
  {
    icon: ShieldCheck,
    title: "Why Choose Us",
    text: "In-house decor, media and production teams. Transparent pricing. One coordinator accountable end to end.",
  },
  {
    icon: Users,
    title: "Professional Team",
    text: "50+ designers, florists, technicians, photographers and hospitality staff across three city offices.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-gradient-luxe animate-gradient-pan pointer-events-none absolute -top-40 -left-32 size-[28rem] rounded-full opacity-10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="text-gradient-gold text-xs font-semibold tracking-[0.35em] uppercase">
              Our Story
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-luxe">A decade of unforgettable celebrations</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Elite Events began in 2015 with a single mandap in Hyderabad and one belief — that a
              celebration should feel effortless to the family living it. Ten years and a thousand
              events later, we design and produce weddings, milestone celebrations, corporate
              summits and college festivals across Hyderabad, Vijayawada and Eluru.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Every project is led by a dedicated design director, supported by our own floral
              studio, production crew and media team — so what you approve on the moodboard is
              exactly what you walk into on the day.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <article className="glass-card card-3d h-full rounded-2xl p-5">
                    <p.icon className="text-accent size-6" aria-hidden />
                    <h3 className="mt-3 font-semibold">{p.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative">
              <img
                src={clientEvent1}
                alt="Grand floral mandap stage designed by Elite Events"
                width={1920}
                height={1088}
                loading="lazy"
                className="shadow-luxe aspect-4/5 w-full rounded-[2rem] object-cover"
              />
              <img
                src={clientEvent4}
                alt="Luxury wedding reception stage with royal sofa"
                width={1920}
                height={1088}
                loading="lazy"
                className="shadow-luxe absolute -bottom-10 -left-6 hidden aspect-square w-44 rounded-[1.5rem] border-4 border-background object-cover sm:block lg:w-56"
              />
              <div className="glass-card absolute -top-6 -right-4 rounded-2xl px-5 py-4 text-center">
                <span className="text-gradient-gold font-display block text-3xl font-bold">
                  10+
                </span>
                <span className="text-muted-foreground text-xs tracking-wide uppercase">
                  Years of craft
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-28">
          <SectionHeading
            eyebrow="By The Numbers"
            title="Trusted by families and brands"
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 90}>
                <div className="glass-card card-3d rounded-2xl px-4 py-8 text-center">
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="text-muted-foreground mt-2 text-sm font-medium">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
