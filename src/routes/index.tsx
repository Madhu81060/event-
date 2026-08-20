import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Albums } from "@/components/site/Albums";
import { Packages } from "@/components/site/Packages";
import { Compliance } from "@/components/site/Compliance";

import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { BookingForm } from "@/components/site/BookingForm";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { ShiningWavesCanvas } from "@/components/site/ShiningWavesCanvas";
import { faqs } from "@/components/site/data";

const title = "Elite Events | Luxury Event Management in Hyderabad, Vijayawada & Eluru";
const description =
  "Elite Events designs luxury weddings, birthdays, corporate summits and college fests across Hyderabad, Vijayawada and Eluru. 1000+ events, 10+ years, one flawless team.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elite Events",
  description,
  telephone: "+91 63022 13452",
  email: "hello@eliteevents.in",
  areaServed: ["Hyderabad", "Vijayawada", "Eluru"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jubilee Trade Centre, Road No. 36, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh relative">
      <ShiningWavesCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Albums />
        <Packages />
        <Compliance />

        <Process />
        <Testimonials />
        <BookingForm />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
