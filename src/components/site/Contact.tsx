import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { EMAIL, PHONE, WHATSAPP_LINK, offices } from "./data";
import officeHyderabad from "@/assets/office-hyderabad.jpg";

const hyderabad = offices.find((o) => o.city === "Hyderabad")!;
const HYD_QUERY = encodeURIComponent(`Elite Events, ${hyderabad.address}`);

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Visit Us"
          title="Three Cities, One Standard"
          description="Walk into any of our studios for a design consultation over coffee."
        />

        <Reveal className="mt-14">
          <figure className="glass-card overflow-hidden rounded-3xl p-2">
            <img
              src={officeHyderabad}
              alt="Elite Events design studio reception in Hyderabad with marble desk and floral display"
              width={1920}
              height={1088}
              loading="lazy"
              className="h-[300px] w-full rounded-2xl object-cover sm:h-[420px]"
            />
            <figcaption className="text-muted-foreground py-3 text-center text-sm">
              Our flagship design studio — Jubilee Hills, Hyderabad
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 100}>
              <article className="glass-card card-3d h-full rounded-3xl p-7">
                <h3 className="font-display text-2xl font-bold">
                  <span className="text-gradient-luxe">{o.city}</span>
                </h3>
                <p className="text-muted-foreground mt-4 flex gap-3 text-sm leading-relaxed">
                  <MapPin className="text-accent mt-0.5 size-4 shrink-0" aria-hidden />
                  {o.address}
                </p>
                <p className="mt-3 flex items-center gap-3 text-sm">
                  <Phone className="text-accent size-4 shrink-0" aria-hidden />
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {o.phone}
                  </a>
                </p>
                <p className="mt-3 flex items-center gap-3 text-sm">
                  <Mail className="text-accent size-4 shrink-0" aria-hidden />
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                    {EMAIL}
                  </a>
                </p>
                <p className="text-muted-foreground mt-3 flex items-center gap-3 text-sm">
                  <Clock className="text-accent size-4 shrink-0" aria-hidden />
                  Mon – Sun, 9:00 AM – 9:00 PM
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="glass-card grid gap-0 overflow-hidden rounded-3xl lg:grid-cols-5">
            <div className="p-2 lg:col-span-3">
              <iframe
                title="Map of Elite Events office, Jubilee Hills, Hyderabad"
                src={`https://www.google.com/maps?q=${HYD_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full rounded-2xl border-0 sm:h-[460px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-7 lg:col-span-2">
              <div>
                <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                  Head Office
                </p>
                <h3 className="font-display mt-2 text-3xl font-bold">
                  <span className="text-gradient-luxe">Hyderabad Studio</span>
                </h3>
                <p className="text-muted-foreground mt-3 flex gap-3 text-sm leading-relaxed">
                  <MapPin className="text-accent mt-0.5 size-4 shrink-0" aria-hidden />
                  {hyderabad.address}
                </p>
                <p className="text-muted-foreground mt-3 flex items-center gap-3 text-sm">
                  <Clock className="text-accent size-4 shrink-0" aria-hidden />
                  Mon – Sun, 9:00 AM – 9:00 PM
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild variant="luxe" size="lg">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${HYD_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation aria-hidden /> Get Directions
                  </a>
                </Button>
                <Button asChild variant="gold" size="lg">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone aria-hidden /> Call Now
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Event enquiry — Elite Events")}`}>
                    <Mail aria-hidden /> Email Us
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
