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

const description =
  "Subhamasthu Events designs luxury weddings, birthdays, corporate summits and festive celebrations across Vijayawada and Eluru. 1200+ events, 10+ years, one flawless team.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue", "ProfessionalService"],
  name: "Shubhamastu Events",
  alternateName: "Subhamasthu Events",
  url: "https://www.shubhamastuevents.com",
  logo: "https://www.shubhamastuevents.com/logo.png",
  image: "https://www.shubhamastuevents.com/logo.png",
  description,
  telephone: "+91 99664 49609",
  email: "info@subhamasthuevents.com",
  priceRange: "₹₹₹",
  openingHours: "Mo-Su 00:00-23:59",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.7107,
    longitude: 81.0952,
  },
  areaServed: [
    { "@type": "City", name: "Eluru" },
    { "@type": "City", name: "Vijayawada" },
    { "@type": "City", name: "Guntur" },
    { "@type": "City", name: "Amaravati" },
    { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
    { "@type": "AdministrativeArea", name: "Telangana" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajeswari Nagar, Near RTO Eluru Rd",
    addressLocality: "Eluru",
    addressRegion: "Andhra Pradesh",
    postalCode: "534005",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "950",
  },
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <div className="min-h-dvh relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
