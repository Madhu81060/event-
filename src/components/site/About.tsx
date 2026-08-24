"use client";

import { useEffect, useRef, useState } from "react";
import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { heroNewGanesha, heroNewLoveGanesha } from "./data";
import { getImageSrc } from "@/lib/utils";

const stats = [
  { value: 1200, suffix: "+", label: "Grand Events Crafted" },
  { value: 950, suffix: "+", label: "Happy Families" },
  { value: 50, suffix: "+", label: "Design & Crew Experts" },
  { value: 10, suffix: "+", label: "Years Industry Trust" },
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
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-amber-600 sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    icon: HeartHandshake,
    title: "Family First Craft",
    text: "We take care of every minute ritual detail so you and your family can enjoy without any stress.",
  },
  {
    icon: Award,
    title: "Grand Royalty",
    text: "South India's signature temple mandaps and royal celebrity-style stages at honest pricing.",
  },
  {
    icon: ShieldCheck,
    title: "100% In-House Team",
    text: "Our own floral warehouse, fabrication unit, sound-light setup, and senior event directors.",
  },
  {
    icon: Users,
    title: "2 City Hubs",
    text: "Dedicated design studios and full warehouses in Vijayawada and Eluru.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-14 sm:py-20 bg-white/75 backdrop-blur-[2px]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="inline-block rounded-full bg-amber-100 border border-amber-300/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-900 shadow-xs">
              Who We Are
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              10+ Years of Crafting Royal Celebrations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium leading-relaxed">
              Subhamasthu Events is South India&apos;s premier luxury event production house across Vijayawada and Eluru — specializing in royal temple mandaps, modern celebrity stages, and vibrant festive ceremonies.
            </p>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <article className="card-3d h-full rounded-2xl bg-amber-50/50 border border-amber-200/80 p-4.5 shadow-xs transition-all hover:border-amber-400 hover:shadow-md">
                    <p.icon className="size-5.5 text-amber-700" aria-hidden />
                    <h3 className="mt-2.5 font-bold text-stone-900 text-sm sm:text-base">{p.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-stone-600 leading-relaxed">{p.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={100}>
            <div className="relative">
              <img
                src={getImageSrc(heroNewLoveGanesha)}
                alt="Double heart Love neon & golden Ganesha luxury wedding reception stage designed by Subhamasthu Events"
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-4/5 w-full rounded-3xl object-cover object-center border-2 border-amber-300/60 shadow-xl"
              />
              <img
                src={getImageSrc(heroNewGanesha)}
                alt="Imperial traditional South Indian banana plantain & golden Ganesha mandap"
                width={500}
                height={500}
                loading="lazy"
                className="absolute -bottom-8 -left-6 hidden aspect-square w-48 rounded-2xl border-4 border-white object-cover sm:block shadow-2xl"
              />
              <div className="absolute -top-5 -right-4 rounded-2xl bg-amber-500 text-white px-5 py-3 text-center shadow-lg border border-white">
                <span className="font-display block text-3xl font-black">10+</span>
                <span className="text-[11px] font-bold tracking-wider uppercase">Years Of Craft</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Numbers Section */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Our Track Record"
            title="Trusted By 950+ Families Across AP & Telangana"
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 70}>
                <div className="card-3d rounded-2xl bg-amber-50/40 border border-amber-200/80 px-4 py-8 text-center shadow-xs hover:border-amber-400 hover:shadow-md">
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-sm font-bold text-stone-700">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
