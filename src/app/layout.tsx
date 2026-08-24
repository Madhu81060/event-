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
  title: "Shubhamastu Events | Royal Weddings, Mandaps & Catering in Eluru & Vijayawada",
  description:
    "Shubhamastu Events — Your Dreams • Our Planning • Memories Forever. Directed by Pavanswamy. Luxury weddings, temple mandapams, 4K cinematography and royal catering across Eluru & Vijayawada.",
  authors: [{ name: "Pavanswamy - Shubhamastu Events" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Shubhamastu Events | Royal Weddings, Mandaps & Catering",
    description:
      "Your Dreams • Our Planning • Memories Forever. Luxury weddings, celebrations and corporate events across Eluru and Vijayawada.",
    siteName: "Shubhamastu Events",
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
    title: "Shubhamastu Events | Royal Weddings, Mandaps & Catering",
    description:
      "Your Dreams • Our Planning • Memories Forever. Luxury weddings across Eluru and Vijayawada.",
    images: ["/logo.png"],
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
