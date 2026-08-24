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
};

export const metadata: Metadata = {
  title: "Subhamasthu Events | Luxury Event Management in Vijayawada & Eluru",
  description:
    "Subhamasthu Events designs luxury weddings, birthdays, corporate summits and festive celebrations across Vijayawada and Eluru. 1200+ events, 10+ years, one flawless team.",
  authors: [{ name: "Subhamasthu Events" }],
  icons: {
    icon: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Subhamasthu Events | Luxury Event Management",
    description:
      "Luxury weddings, celebrations and corporate events across Vijayawada and Eluru.",
    siteName: "Subhamasthu Events",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhamasthu Events | Luxury Event Management",
    description:
      "Luxury weddings, celebrations and corporate events across Vijayawada and Eluru.",
  },
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
