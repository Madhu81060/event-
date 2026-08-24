// Real High-Resolution Wedding Albums & Photography Spreads
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
import tk11 from "@/assets/albums/thulasi-kiran-spread-11.jpg";
import tk12 from "@/assets/albums/thulasi-kiran-spread-12.jpg";
import tk13 from "@/assets/albums/thulasi-kiran-spread-13.jpg";
import tk14 from "@/assets/albums/thulasi-kiran-spread-14.jpg";
import tk15 from "@/assets/albums/thulasi-kiran-spread-15.jpg";

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
import tw11 from "@/assets/albums/tejaswini-wedding-spread-11.jpg";
import tw12 from "@/assets/albums/tejaswini-wedding-spread-12.jpg";
import tw13 from "@/assets/albums/tejaswini-wedding-spread-13.jpg";
import tw14 from "@/assets/albums/tejaswini-wedding-spread-14.jpg";
import tw15 from "@/assets/albums/tejaswini-wedding-spread-15.jpg";

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
    tagline: "Traditional Vedic Kalyanam, Bridal Saree Draping & Mangalasutradharana",
    location: "Vijayawada • A-Plus Convention Centre",
    coverImage: tk1,
    spreadCount: 15,
    highlightTag: "Vedic South Indian Kalyanam",
    description:
      "A timeless luxury wedding album featuring bridal preparations with gold vaddanam, traditional mangala kalasham rituals, the sacred Mangalasutradharana (మంగళసూత్రధారణ), joyous talambralu, and grand reception portraits.",
    photographyHighlights: [
      "Master Bridal Portrait & Jewelry Close-ups",
      "Mangalasutradharana (మంగళసూత్రధారణ) Sacred Knot Capture",
      "Vedic Rituals & Brass Kalasham Candid Frames",
      "4K Flush-Mount Glossy Album Print Layout",
    ],
    spreads: [
      {
        id: "tk-1",
        image: tk1,
        title: "Bridal Preparation & Royal Vaddanam (Thulasi)",
        category: "Bridal Dressing",
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
      {
        id: "tk-11",
        image: tk11,
        title: "Multi-Generation Family Heritage Portraits",
        category: "Family Keepsakes",
        caption: "Cherished portraits with grandparents, parents, siblings, and extended family on stage.",
      },
      {
        id: "tk-12",
        image: tk12,
        title: "Evening Glamour Reception Stage Moments",
        category: "Reception Gala",
        caption: "The couple in evening couture amidst shimmering fairy light waterfalls and velvet lounges.",
      },
      {
        id: "tk-13",
        image: tk13,
        title: "Tiered Cake Cutting & Champagne Toast",
        category: "Celebration",
        caption: "Modern reception celebrations with three-tier customized floral cake and celebratory toast.",
      },
      {
        id: "tk-14",
        image: tk14,
        title: "First Dance & Cinematic Sparkler Send-off",
        category: "Cinematography",
        caption: "Romantic slow dance framed by low-lying fog and sparkling cold pyrotechnics.",
      },
      {
        id: "tk-15",
        image: tk15,
        title: "Highlights Montage & Story Album Back Cover",
        category: "Album Keepsake",
        caption: "Signature flush-mount album finale summarizing the most radiant laughter and timeless moments.",
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
    spreadCount: 15,
    highlightTag: "Temple Gopuram Elegance",
    description:
      "An opulent wedding story capturing the bride's regal red veil and diamond jewelry, sacred vermillion application, Vedic homam rituals, and full panoramic temple gopuram stage portraits.",
    photographyHighlights: [
      "Signature Red Veil Bridal Closeup & Candid Expressions",
      "Sacred Sindoor & Varmala Garland Exchange",
      "Grand Golden Temple Gopuram Stage Panorama",
      "Cinematic Lighting & Luxury Acrylic Hardcover Design",
    ],
    spreads: [
      {
        id: "tw-1",
        image: tw1,
        title: "Tejaswini - Regal Red Bridal Veil & Diamond Choker",
        category: "Bridal Elegance",
        caption: "Signature red bridal net veil with delicate embroidery, polki emerald choker, and joyous bridal smile.",
      },
      {
        id: "tw-2",
        image: tw2,
        title: "Wedding Story - Sindoor & Muhurtham Smiles",
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
        title: "Golden Temple Gopuram Panoramic Couple Portrait",
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
      {
        id: "tw-11",
        image: tw11,
        title: "Elders' Ashirvadam & Akshintalu Blessing Ceremony",
        category: "Family Blessings",
        caption: "Grandparents and parents placing sacred yellow grains (akshintalu) on the couple's heads.",
      },
      {
        id: "tw-12",
        image: tw12,
        title: "Grand Evening Reception & Neon Heart Arch",
        category: "Reception Night",
        caption: "Glitz and glamour on the modern double heart stage with cold spark fountains.",
      },
      {
        id: "tw-13",
        image: tw13,
        title: "Candid Moments with Cousins & Bridal Squad",
        category: "Bridal Squad",
        caption: "Spontaneous high-fives, hugs, and laughter captured in candid documentary style.",
      },
      {
        id: "tw-14",
        image: tw14,
        title: "Cinematic Drone Aerial Views of Royal Mandapam",
        category: "Drone Aerials",
        caption: "Spectacular bird's-eye view of the grand venue architecture and illuminated pathways.",
      },
      {
        id: "tw-15",
        image: tw15,
        title: "Everlasting Impressions - Wedding Story Album Finale",
        category: "Album Keepsake",
        caption: "The closing spread of the bespoke album crafted with velvet touch paper and embossed gold foil.",
      },
    ],
  },
];
