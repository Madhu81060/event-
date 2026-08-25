import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "../styles.css";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#d97706",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shubhamastuevents.com"),
  title: "Shubhamastu Events | Best Event Planners, Royal Weddings & Catering in Eluru & Vijayawada",
  description:
    "Shubhamastu Events — #1 Luxury Wedding Planners & Event Organizers in Eluru & Vijayawada. Grand mandapam decoration, Vedic muhurtham stages, 4K cinematography & royal catering services. Directed by Pavanswamy.",
  keywords: [
    "Shubhamastu Events",
    "Subhamasthu Events",
    "Shubhamastu Events Eluru",
    "Shubhamastu Events Vijayawada",
    "Event Planners in Eluru",
    "Best Wedding Planners in Eluru",
    "Wedding Planners in Vijayawada",
    "Event Management Companies in Eluru",
    "Mandap Decoration in Eluru",
    "Stage Decoration Vijayawada",
    "Pavanswamy Events",
    "Catering Services in Eluru",
    "Birthday Party Organizers Eluru",
    "Corporate Event Planners AP",
    "Telugu Wedding Decorators",
    "Flower Decoration in Eluru",
  ],
  authors: [{ name: "Pavanswamy - Shubhamastu Events" }],
  creator: "Shubhamastu Events",
  publisher: "Shubhamastu Events",
  alternates: {
    canonical: "https://www.shubhamastuevents.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1_X_FLTXsVMDJ_8a0i4RS99G7XED4GCrCZbheEOOT2w",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Shubhamastu Events | #1 Royal Weddings, Mandaps & Catering in Eluru & Vijayawada",
    description:
      "Your Dreams • Our Planning • Memories Forever. 1200+ Luxury weddings, celebrations and corporate events across Eluru and Vijayawada.",
    url: "https://www.shubhamastuevents.com",
    siteName: "Shubhamastu Events",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Shubhamastu Events Official Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhamastu Events | Royal Weddings, Mandaps & Catering in Eluru & Vijayawada",
    description:
      "Your Dreams • Our Planning • Memories Forever. Luxury weddings across Eluru and Vijayawada.",
    images: ["/logo.png"],
  },
  category: "Event Management & Wedding Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
