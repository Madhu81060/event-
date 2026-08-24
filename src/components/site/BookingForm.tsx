"use client";

import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarHeart, Sparkles, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { eventTypes, offices, WHATSAPP_LINK, PHONE, EMAIL } from "./data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,20}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  city: z.string().min(1, "Please choose a city"),
  eventType: z.string().min(1, "Please choose an event type"),
  eventDate: z.string().min(1, "Please choose a date"),
  venue: z.string().trim().max(160).optional(),
  guests: z.string().trim().max(10).optional(),
  budget: z.string().trim().max(30).optional(),
  requirements: z.string().trim().max(1000).optional(),
});

const fieldClass = "glass-card h-12 rounded-xl";

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form.entries()));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success("Enquiry received — our team will call you within 24 hours.");
  };

  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-gradient-luxe animate-gradient-pan pointer-events-none absolute -bottom-40 -left-32 size-[32rem] rounded-full opacity-10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Book Your Date"
          title="Let's Plan Something Unforgettable"
          description="Share your details and a planner from your nearest office will call you within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="glass-card rounded-3xl p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" error={errors["name"]}>
                  <Input id="name" name="name" className={fieldClass} placeholder="Your name" />
                </Field>
                <Field id="phone" label="Phone" error={errors["phone"]}>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="+91 98765 43210"
                  />
                </Field>
                <Field id="email" label="Email" error={errors["email"]}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </Field>
                <Field id="city" label="City" error={errors["city"]}>
                  <select
                    id="city"
                    name="city"
                    defaultValue=""
                    className={`${fieldClass} w-full px-3 text-sm`}
                  >
                    <option value="" disabled>
                      Select city
                    </option>
                    {offices.map((o) => (
                      <option key={o.city} value={o.city}>
                        {o.city}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="eventType" label="Event Type" error={errors["eventType"]}>
                  <select
                    id="eventType"
                    name="eventType"
                    defaultValue=""
                    className={`${fieldClass} w-full px-3 text-sm`}
                  >
                    <option value="" disabled>
                      Select event
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="eventDate" label="Event Date" error={errors["eventDate"]}>
                  <Input id="eventDate" name="eventDate" type="date" className={fieldClass} />
                </Field>
                <Field id="venue" label="Venue (optional)" error={errors["venue"]}>
                  <Input
                    id="venue"
                    name="venue"
                    className={fieldClass}
                    placeholder="Hotel / function hall"
                  />
                </Field>
                <Field id="guests" label="Guest Count (optional)" error={errors["guests"]}>
                  <Input
                    id="guests"
                    name="guests"
                    inputMode="numeric"
                    className={fieldClass}
                    placeholder="e.g. 500"
                  />
                </Field>
                <Field id="budget" label="Package / Budget (optional)" error={errors["budget"]}>
                  <Input
                    id="budget"
                    name="budget"
                    className={fieldClass}
                    placeholder="Silver / Gold / Premium / Custom"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field
                  id="requirements"
                  label="Special Requirements (optional)"
                  error={errors["requirements"]}
                >
                  <Textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    className="glass-card rounded-xl"
                    placeholder="Rituals, themes, colour palette, mandap setup, catering preferences…"
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button type="submit" variant="luxe" size="xl">
                  <CalendarHeart className="size-5" aria-hidden />
                  Submit Enquiry
                </Button>
                <Button asChild variant="glass" size="xl">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div className="glass-card sticky top-28 rounded-3xl p-7 border border-amber-300/60 shadow-lg bg-white/90">
              <div className="flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 border border-amber-300/80 shadow-xs">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-900">Customized Event Planning</h3>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">Silver • Gold • Premium</span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                Looking for tailored quotes on Mandap Decor, 4K Photography & Lookbook Albums, or Royal Catering? Connect directly with our Event Director Pavanswamy.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                  <span className="flex size-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                  <span>Direct consultation with Pavanswamy</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                  <span className="flex size-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                  <span>Head Office at Rajeswari Nagar, Eluru</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                  <span className="flex size-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                  <span>100% customized Silver, Gold & Premium packages</span>
                </div>
              </div>

              <div className="mt-7 border-t border-amber-200/80 pt-5 space-y-2.5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-xs sm:text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
                >
                  <MessageCircle className="size-4.5" />
                  WhatsApp Pavanswamy for Quote
                </a>

                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold py-2.5 text-xs transition-all cursor-pointer"
                >
                  <Phone className="size-3.5 text-amber-700" />
                  Direct Call: {PHONE} (Pavanswamy)
                </a>

                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Event Booking Inquiry — Subhamasthu Events")}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-stone-800 font-bold py-2 text-xs transition-all cursor-pointer"
                >
                  <Mail className="size-3.5 text-stone-600" />
                  Email: {EMAIL}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-sm">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-destructive mt-1.5 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
