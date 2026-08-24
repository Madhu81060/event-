"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "./data";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-amber-50/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Quick Answers"
          title="Frequently Asked Questions"
          description="Have questions regarding booking, dates, or budgeting? Here are the most common details."
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="rounded-3xl bg-white border border-amber-200/80 px-6 sm:px-8 py-3 shadow-sm">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-amber-100 py-1">
                <AccordionTrigger className="text-left text-base font-bold text-stone-900 hover:text-amber-700 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 font-medium leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
