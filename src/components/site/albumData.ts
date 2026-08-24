// 10 Curated HD Photographs Per Real Wedding Showcase
import tk1 from "@/assets/albums/thulasi-kiran-spread-1.jpg";
import tk2 from "@/assets/albums/thulasi-kiran-spread-2.jpg";
import tk3 from "@/assets/albums/thulasi-kiran-spread-3.jpg";
import tk4 from "@/assets/albums/thulasi-kiran-spread-4.jpg";
import tk5 from "@/assets/albums/thulasi-kiran-spread-5.jpg";
import tk6 from "@/assets/albums/thulasi-kiran-spread-6.jpg";
import tk7 from "@/assets/albums/thulasi-kiran-spread-7.jpg";
import tk8 from "@/assets/albums/thulasi-kiran-spread-8.jpg";
import tk9 from "@/assets/albums/thulasi-kiran-spread-9.jpg";
import tk10 from "@/assets/albums/thulasi-kiran-spread-10.jpg";

import tw1 from "@/assets/albums/tejaswini-wedding-spread-1.jpg";
import tw2 from "@/assets/albums/tejaswini-wedding-spread-2.jpg";
import tw3 from "@/assets/albums/tejaswini-wedding-spread-3.jpg";
import tw4 from "@/assets/albums/tejaswini-wedding-spread-4.jpg";
import tw5 from "@/assets/albums/tejaswini-wedding-spread-5.jpg";
import tw6 from "@/assets/albums/tejaswini-wedding-spread-6.jpg";
import tw7 from "@/assets/albums/tejaswini-wedding-spread-7.jpg";
import tw8 from "@/assets/albums/tejaswini-wedding-spread-8.jpg";
import tw9 from "@/assets/albums/tejaswini-wedding-spread-9.jpg";
import tw10 from "@/assets/albums/tejaswini-wedding-spread-10.jpg";

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
    spreadCount: 10,
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
        id: "tk-2",
        image: tk2,
        title: "Groom Mangala Snanam & Mandap Rituals",
        category: "Mandap Rituals",
        caption: "Groom in traditional white pattu turban performing holy kalasham rituals with floral mandap backdrop.",
      },
      {
        id: "tk-3",
        image: tk3,
        title: "Mangalasutradharana (మంగళసూత్రధారణ) Sacred Knot",
        category: "Sacred Muhurtham",
        caption: "The auspicious moment of tying the sacred Mangalasutram amid Vedic chants and flower showers.",
      },
      {
        id: "tk-4",
        image: tk4,
        title: "Jeelakarra Bellam & Shirodharana Auspicious Moment",
        category: "Vedic Muhurtham",
        caption: "Placing cumin seeds and jaggery on the couple's heads at the exact astrological muhurtham timestamp.",
      },
      {
        id: "tk-5",
        image: tk5,
        title: "Talambralu Sacred Pearl & Turmeric Shower",
        category: "Talambralu Joy",
        caption: "Joyous laughter as the bride and groom shower sacred turmeric rice and pearls over each other.",
      },
      {
        id: "tk-6",
        image: tk6,
        title: "Saptapadi (Seven Sacred Steps Around Agni)",
        category: "Holy Vows",
        caption: "Taking the seven sacred steps together around the sacrificial fire, sealing lifelong companionship.",
      },
      {
        id: "tk-7",
        image: tk7,
        title: "Traditional Ring Finding Wedding Games",
        category: "Playful Traditions",
        caption: "Lively moments as bride and groom hunt for gold rings inside the sacred milk-and-flower vessel.",
      },
      {
        id: "tk-8",
        image: tk8,
        title: "Grand Mandapam Couple Panoramic Portrait",
        category: "Royal Stage",
        caption: "Imperial stage grandeur with carved golden temple pillars, live banana canopies, and fresh jasmine.",
      },
      {
        id: "tk-9",
        image: tk9,
        title: "Kanyadanam & Emotional Family Blessings",
        category: "Emotional Moments",
        caption: "Heartfelt tears of joy, parents' tender blessings, and the sacred giving away of the bride.",
      },
      {
        id: "tk-10",
        image: tk10,
        title: "Royal Barat Procession & Pelli Koduku Moments",
        category: "Groom Procession",
        caption: "High-energy musical entrance with dhol beats, celebratory safa turbans, and cold pyros.",
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
    spreadCount: 10,
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
        id: "tw-3",
        image: tw3,
        title: "Vedic Mantras, Holy Homam & Sacred Offerings",
        category: "Vedic Rituals",
        caption: "Chanting sacred Vedic mantras while offering clarified butter and grains into the holy sacrificial fire.",
      },
      {
        id: "tw-4",
        image: tw4,
        title: "Grand Varmala Garland Exchange with Rose Petal Shower",
        category: "Varmala",
        caption: "Exchanging fragrant lotus and rose garlands under cascading crystal chandeliers.",
      },
      {
        id: "tw-5",
        image: tw5,
        title: "Mangalasutra Dharana & Sacred Brahma Mudi Knot",
        category: "Holy Knot",
        caption: "Tying the sacred golden Mangalasutra and solemnizing eternal companionship.",
      },
      {
        id: "tw-6",
        image: tw6,
        title: "Talambralu Festival & Golden Pearl Showers",
        category: "Talambralu",
        caption: "Unfiltered smiles as golden turmeric pearls cascade over the bride and groom.",
      },
      {
        id: "tw-7",
        image: tw7,
        title: "Joyous Couple Rituals & Traditional Games",
        category: "Celebration",
        caption: "Playful wedding competitions bringing warmth and hearty laughter to the whole family.",
      },
      {
        id: "tw-8",
        image: tw8,
        title: "Golden Temple Gopuram 40-Foot Panoramic Stage",
        category: "Stage Grandeur",
        caption: "Breathtaking wide-angle portrait showcasing the 40-foot golden carved temple gopuram stage.",
      },
      {
        id: "tw-9",
        image: tw9,
        title: "Bridal Haldi Glow & Floral Jewelry Styling",
        category: "Haldi Ceremony",
        caption: "Bright yellow marigold decor, brass urlis, and radiant candid shots during haldi application.",
      },
      {
        id: "tw-10",
        image: tw10,
        title: "Groom Royal Pelli Koduku Portrait & Turban",
        category: "Groom Styling",
        caption: "The groom in regal silk pattu attire, ceremonial brooch, and carved wooden throne seating.",
      },
    ],
  },
];
