import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarHeart, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { eventTypes, offices, WHATSAPP_LINK } from "./data";

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
  const [guests, setGuests] = useState(300);
  const [tier, setTier] = useState(2500);

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

  const estimate = guests * tier;

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
                <Field id="budget" label="Budget (optional)" error={errors["budget"]}>
                  <Input
                    id="budget"
                    name="budget"
                    className={fieldClass}
                    placeholder="e.g. ₹5,00,000"
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
                    placeholder="Rituals, themes, colour palette, artists, catering preferences…"
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
            <div className="glass-card sticky top-28 rounded-3xl p-7">
              <h3 className="font-display flex items-center gap-2 text-xl font-bold">
                <Calculator className="text-accent size-5" aria-hidden />
                Cost Calculator
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                A quick indicative estimate. Your final quote is always itemised.
              </p>

              <div className="mt-6">
                <Label htmlFor="calc-guests" className="text-sm">
                  Guests: <span className="text-primary font-semibold">{guests}</span>
                </Label>
                <input
                  id="calc-guests"
                  type="range"
                  min={50}
                  max={2000}
                  step={50}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="accent-primary mt-3 w-full"
                />
              </div>

              <div className="mt-6">
                <Label htmlFor="calc-tier" className="text-sm">
                  Experience level
                </Label>
                <select
                  id="calc-tier"
                  value={tier}
                  onChange={(e) => setTier(Number(e.target.value))}
                  className={`${fieldClass} mt-2 w-full px-3 text-sm`}
                >
                  <option value={1200}>Essential</option>
                  <option value={2500}>Premium</option>
                  <option value={4200}>Luxury</option>
                  <option value={6800}>Royal</option>
                </select>
              </div>

              <div className="border-border/60 mt-7 border-t pt-6">
                <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
                  Indicative total
                </p>
                <p className="text-gradient-luxe font-display mt-1 text-4xl font-bold">
                  ₹{estimate.toLocaleString("en-IN")}
                </p>
              </div>

              <Button asChild variant="gold" size="lg" className="mt-6 w-full">
                <a href="#contact">Get an exact quote</a>
              </Button>
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
