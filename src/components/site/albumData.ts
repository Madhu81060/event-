// Top 3 Curated Signature Photographs Per Real Wedding Showcase
import tk1 from "@/assets/albums/thulasi-kiran-spread-1.jpg";
import tk3 from "@/assets/albums/thulasi-kiran-spread-3.jpg";
import tk5 from "@/assets/albums/thulasi-kiran-spread-5.jpg";

import tw1 from "@/assets/albums/tejaswini-wedding-spread-1.jpg";
import tw2 from "@/assets/albums/tejaswini-wedding-spread-2.jpg";
import tw8 from "@/assets/albums/tejaswini-wedding-spread-8.jpg";

export interface AlbumSpread {
  id: string;
  image: any;
  title: string;
  category: string;
  caption: string;
}

export interface WeddingAlbum {
  id: string;
  coupleName: string;
  albumTitle: string;
  tagline: string;
  location: string;
  coverImage: any;
  spreadCount: number;
  highlightTag: string;
  description: string;
  photographyHighlights: string[];
  spreads: AlbumSpread[];
}

export const weddingAlbums: WeddingAlbum[] = [
  {
    id: "thulasi-kiran-wedding",
    coupleName: "Kiran & Thulasi",
    albumTitle: "Royal Vedic Kalyana Mahotsavam Lookbook",
    tagline: "Vedic Muhurtham, Bridal Saree Draping & Talambralu Joy",
    location: "Vijayawada • A-Plus Convention Centre",
    coverImage: tk1,
    spreadCount: 3,
    highlightTag: "Vedic South Indian Kalyanam",
    description:
      "A curated signature wedding collection featuring the bride's peacock blue silk styling, the sacred Mangalasutradharana (మంగళసూత్రధారణ), and joyous talambralu turmeric showers.",
    photographyHighlights: [
      "Royal Bridal Portrait & Antique Gold Jewelry",
      "Mangalasutradharana (మంగళసూత్రధారణ) Sacred Knot",
      "Joyous Talambralu Sacred Pearl & Turmeric Shower",
      "Sony FX3 4K Cinematography & Flush-Mount Velvet Album",
    ],
    spreads: [
      {
        id: "tk-1",
        image: tk1,
        title: "Royal Bridal Elegance & Antique Gold Vaddanam",
        category: "Bridal Styling",
        caption: "Peacock blue & magenta silk saree styling, antique gold temple vaddanam, and exquisite bridal makeup.",
      },
      {
        id: "tk-3",
        image: tk3,
        title: "Mangalasutradharana (మంగళసూత్రధారణ) Sacred Knot",
        category: "Sacred Muhurtham",
        caption: "The auspicious moment of tying the sacred Mangalasutram amid Vedic chants and flower showers.",
      },
      {
        id: "tk-5",
        image: tk5,
        title: "Talambralu Sacred Pearl & Turmeric Shower",
        category: "Talambralu Joy",
        caption: "Joyous laughter as the bride and groom shower sacred turmeric rice and pearls over each other.",
      },
    ],
  },
  {
    id: "tejaswini-raghu-wedding",
    coupleName: "Tejaswini & Raghu",
    albumTitle: "Regal Red Bridal & Temple Gopuram Wedding Story",
    tagline: "Red Bridal Veil Artistry, Golden Temple Mandapam & Sindoor Muhurtham",
    location: "Eluru • Royal Palace Mandapam",
    coverImage: tw1,
    spreadCount: 3,
    highlightTag: "Temple Gopuram Elegance",
    description:
      "An opulent wedding story capturing the bride's regal red veil and diamond jewelry, sacred vermillion application, and full panoramic golden temple gopuram stage portraits.",
    photographyHighlights: [
      "Signature Red Veil Bridal Closeup & Candid Expressions",
      "Sacred Sindoor & Holy Muhurtham Exchange",
      "Grand 40-Foot Golden Temple Gopuram Stage Panorama",
      "Cinematic Lighting & Luxury Acrylic Hardcover Design",
    ],
    spreads: [
      {
        id: "tw-1",
        image: tw1,
        title: "Regal Red Bridal Veil & Diamond Choker Styling",
        category: "Bridal Elegance",
        caption: "Signature red bridal net veil with delicate embroidery, polki emerald choker, and joyous bridal smile.",
      },
      {
        id: "tw-2",
        image: tw2,
        title: "Auspicious Sindoor Application & Muhurtham Smiles",
        category: "Sacred Muhurtham",
        caption: "The groom gently applying sacred sindoor with golden temple backdrop and happy bridal laughter.",
      },
      {
        id: "tw-8",
        image: tw8,
        title: "Golden Temple Gopuram 40-Foot Panoramic Stage",
        category: "Stage Grandeur",
        caption: "Breathtaking wide-angle portrait showcasing the 40-foot golden carved temple gopuram stage.",
      },
    ],
  },
];
