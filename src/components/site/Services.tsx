import * as Icons from "lucide-react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { services, getEventWhatsAppLink, WHATSAPP_LINK } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative py-18 sm:py-24 bg-amber-50/25 border-y border-amber-200/50 backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Complete Production House"
          title="Signature Event Services"
          description="Everything for your royal celebration under one roof — flawlessly executed across Vijayawada & Eluru."
        />

        {/* Clean, Curated 8 Signature Luxury Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = (Icons[s.icon as keyof typeof Icons] ??
              Icons.Sparkles) as Icons.LucideIcon;
            return (
              <Reveal key={s.name} delay={i * 50}>
                <article className="card-3d group flex flex-col justify-between h-full rounded-3xl bg-white border border-amber-200/90 p-6 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <span className="rounded-full bg-amber-100/80 px-3 py-1 text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                        {s.group}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-black text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-bold text-amber-700 leading-snug">
                      {s.tagline}
                    </p>
                    <p className="mt-2 text-xs font-medium text-stone-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between">
                    <a
                      href={getEventWhatsAppLink(s.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <MessageCircle className="size-4 text-emerald-600 fill-emerald-600/20" />
                      Inquire on WhatsApp
                    </a>
                    <a
                      href="#gallery"
                      className="text-stone-400 hover:text-amber-700 transition-colors"
                      title="View Photos"
                    >
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Quick Custom Event Consultation Strip */}
        <Reveal delay={200} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 p-6 sm:p-8 text-white shadow-xl">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black">
                Looking for a Custom Event Concept?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-amber-100 font-medium">
                Talk directly with our senior event design team in Vijayawada or Eluru.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-black text-amber-950 shadow-lg hover:bg-amber-50 transition-all hover:scale-104 cursor-pointer"
            >
              <MessageCircle className="size-4.5 text-emerald-600" />
              Chat on WhatsApp Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
