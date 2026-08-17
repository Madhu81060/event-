export const SUPABASE_CDN_BASE = "https://eskworfjlnwshqtvwpes.supabase.co/storage/v1/object/public/event-gallery/events";

export const clientEvent1 = `${SUPABASE_CDN_BASE}/client-event-1.jpg`;
export const clientEvent2 = `${SUPABASE_CDN_BASE}/client-event-2.jpg`;
export const clientEvent3 = `${SUPABASE_CDN_BASE}/client-event-3.jpg`;
export const clientEvent4 = `${SUPABASE_CDN_BASE}/client-event-4.jpg`;
export const clientEvent5 = `${SUPABASE_CDN_BASE}/client-event-5.jpg`;
export const clientEvent6 = `${SUPABASE_CDN_BASE}/client-event-6.jpg`;
export const clientEvent7 = `${SUPABASE_CDN_BASE}/client-event-7.jpg`;
export const clientEvent8 = `${SUPABASE_CDN_BASE}/client-event-8.jpg`;
export const clientEvent9 = `${SUPABASE_CDN_BASE}/client-event-9.jpg`;
export const clientEvent10 = `${SUPABASE_CDN_BASE}/client-event-10.jpg`;

export const WHATSAPP_NUMBER = "916302213452";
export const WHATSAPP_MESSAGE =
  "Hello Elite Events,\nI would like to book an event.\nPlease contact me.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PHONE = "+91 63022 13452";
export const EMAIL = "hello@eliteevents.in";

export const slides = [
  {
    image: clientEvent9,
    eyebrow: "Sacred Traditions, Royal Scale",
    title: "Grand Traditional Mandap Setups",
    subtitle:
      "Intricately carved golden pillars, fresh gerbera garlands, and holy motif decor for sacred wedding vows.",
    alt: "Grand traditional golden carved mandap decor with Shankhu Chakra Namam",
  },
  {
    image: clientEvent10,
    eyebrow: "Palace-Scale Hospitality",
    title: "Luxury Wedding Hall Production",
    subtitle:
      "Royal banquet seating curation, carpeted grand aisles, and concert lighting across venue halls.",
    alt: "Royal wedding hall setup with golden banquet seating and illuminated mandap stage",
  },
  {
    image: clientEvent6,
    eyebrow: "Personalised Elegance",
    title: "Custom Name & Theme Backdrops",
    subtitle:
      "Bespoke couple naming backdrops, white swan sculptures, and marigold flower arches.",
    alt: "Name-themed floral backdrop setup for Sathwik & Akshaya ceremony with swan motifs",
  },
  {
    image: clientEvent1,
    eyebrow: "Royal Decor & Production",
    title: "Grand Floral Stage & Mandaps",
    subtitle:
      "Bespoke stage decorations, lush floral canopies, and regal seating crafted for lifetime memories.",
    alt: "Grand floral wedding stage decoration with red gerbera garlands and luxury sofa",
  },
  {
    image: clientEvent4,
    eyebrow: "Elegant & Sophisticated",
    title: "Luxury Reception Stages",
    subtitle:
      "Custom backdrop draping, crystal chandeliers, and wedding ring stage motifs for grand receptions.",
    alt: "Purple drapery wedding stage setup with luxury silver couch",
  },
  {
    image: clientEvent8,
    eyebrow: "Contemporary Illumination",
    title: "Circular Floral Arch & Lighting",
    subtitle:
      "Stunning circular floral arches with vibrant mood lighting and sheer backdrop drapes.",
    alt: "Pink & blue illuminated circular flower arch reception backdrop",
  },
];

export const services = [
  { name: "Hindu Wedding", icon: "Flower2", group: "Weddings" },
  { name: "Christian Wedding", icon: "Church", group: "Weddings" },
  { name: "Muslim Wedding", icon: "Moon", group: "Weddings" },
  { name: "Reception", icon: "GlassWater", group: "Weddings" },
  { name: "Engagement", icon: "Gem", group: "Weddings" },
  { name: "Haldi", icon: "Sun", group: "Weddings" },
  { name: "Mehendi", icon: "Hand", group: "Weddings" },
  { name: "Sangeet", icon: "Music4", group: "Weddings" },
  { name: "Destination Wedding", icon: "Plane", group: "Weddings" },
  { name: "Bridal Entry", icon: "Crown", group: "Weddings" },
  { name: "Groom Entry", icon: "Bike", group: "Weddings" },
  { name: "Birthday Party", icon: "Cake", group: "Celebrations" },
  { name: "Baby Shower", icon: "Baby", group: "Celebrations" },
  { name: "Naming Ceremony", icon: "Feather", group: "Celebrations" },
  { name: "House Warming", icon: "Home", group: "Celebrations" },
  { name: "Anniversary", icon: "Heart", group: "Celebrations" },
  { name: "Mature Function", icon: "Sparkles", group: "Celebrations" },
  { name: "College Events", icon: "GraduationCap", group: "Corporate & Campus" },
  { name: "School Events", icon: "BookOpen", group: "Corporate & Campus" },
  { name: "Corporate Events", icon: "Building2", group: "Corporate & Campus" },
  { name: "Farewell", icon: "HandHeart", group: "Corporate & Campus" },
  { name: "Freshers Party", icon: "PartyPopper", group: "Corporate & Campus" },
  { name: "DJ Night", icon: "Disc3", group: "Entertainment" },
  { name: "Live Orchestra", icon: "Drum", group: "Entertainment" },
  { name: "Live Music", icon: "Mic2", group: "Entertainment" },
  { name: "Artist Management", icon: "Star", group: "Entertainment" },
  { name: "Fireworks", icon: "Sparkle", group: "Entertainment" },
  { name: "Stage Decoration", icon: "Theater", group: "Decor & Production" },
  { name: "Flower Decoration", icon: "Flower", group: "Decor & Production" },
  { name: "Balloon Decoration", icon: "Circle", group: "Decor & Production" },
  { name: "LED Dance Floor", icon: "Grid3x3", group: "Decor & Production" },
  { name: "Sound System", icon: "Speaker", group: "Decor & Production" },
  { name: "LED Wall", icon: "MonitorPlay", group: "Decor & Production" },
  { name: "Luxury Car Decoration", icon: "Car", group: "Decor & Production" },
  { name: "Photography", icon: "Camera", group: "Media & Services" },
  { name: "Cinematic Videography", icon: "Clapperboard", group: "Media & Services" },
  { name: "Drone Shoot", icon: "Send", group: "Media & Services" },
  { name: "Catering", icon: "UtensilsCrossed", group: "Media & Services" },
  { name: "Invitation Design", icon: "Mail", group: "Media & Services" },
  { name: "Event Planning", icon: "CalendarCheck", group: "Media & Services" },
] as const;

export const serviceGroups = [
  "All",
  "Weddings",
  "Celebrations",
  "Corporate & Campus",
  "Entertainment",
  "Decor & Production",
  "Media & Services",
];

export const packages = [
  {
    name: "Silver",
    price: "₹85,000",
    tagline: "Intimate gatherings done beautifully",
    features: [
      "Stage & backdrop decoration",
      "Basic floral styling",
      "Sound system + 1 technician",
      "Photography (4 hrs)",
      "Event coordinator on site",
    ],
  },
  {
    name: "Gold",
    price: "₹1,75,000",
    tagline: "The most-loved celebration package",
    features: [
      "Designer stage & entrance arch",
      "Premium fresh flower decor",
      "DJ + lighting package",
      "Photography & videography",
      "Guest welcome & hospitality team",
    ],
  },
  {
    name: "Platinum",
    price: "₹3,50,000",
    tagline: "Full-scale luxury production",
    features: [
      "Themed 360° venue transformation",
      "Imported flowers & chandeliers",
      "LED wall + concert lighting",
      "Cinematic film + drone shoot",
      "Bridal & groom entry concepts",
    ],
    featured: true,
  },
  {
    name: "Diamond",
    price: "₹6,50,000",
    tagline: "Multi-day weddings, flawlessly run",
    features: [
      "Haldi, Mehendi, Sangeet & Reception",
      "Dedicated design director",
      "Celebrity artist management",
      "Luxury car & fireworks finale",
      "Full catering curation",
    ],
  },
  {
    name: "Royal Premium",
    price: "₹12,00,000",
    tagline: "Palace-scale, destination ready",
    features: [
      "Destination venue scouting",
      "Bespoke set fabrication",
      "Guest travel & stay management",
      "Full media crew + live streaming",
      "Round-the-clock concierge",
    ],
  },
  {
    name: "Custom Package",
    price: "On request",
    tagline: "Built precisely around your vision",
    features: [
      "Choose any services à la carte",
      "Flexible budget planning",
      "Transparent vendor pricing",
      "Free design consultation",
      "Available in all three cities",
    ],
  },
];

export const compliance = [
  {
    icon: "UtensilsCrossed",
    title: "FSSAI Licensed Catering",
    text: "All catering partners hold valid FSSAI food licences, with menu tasting, temperature-controlled transport and live counters run by trained staff.",
    badge: "FSSAI registered kitchens",
  },
  {
    icon: "ShieldCheck",
    title: "Food Safety & Hygiene Audits",
    text: "Pre-event kitchen inspection, water quality checks, gloved handling and sealed food sampling retained for 48 hours after service.",
    badge: "Hygiene audited",
  },
  {
    icon: "FileCheck2",
    title: "Venue & Municipal Permissions",
    text: "We file venue NOCs, GHMC/municipal event permissions and police intimation for large gatherings so your date is never at risk.",
    badge: "Permits handled",
  },
  {
    icon: "FlameKindling",
    title: "Fire Safety & Fireworks NOC",
    text: "Fire extinguishers on site, certified pyro operators and fire department NOC for fireworks, cold pyro and sparkler entries.",
    badge: "Fire dept. cleared",
  },
  {
    icon: "Music4",
    title: "Sound & Late-Night Clearance",
    text: "Decibel-compliant sound design plus late-night permission filings for DJ nights, sangeet and college fests.",
    badge: "Noise-norm compliant",
  },
  {
    icon: "Sparkles",
    title: "Insurance & Liability Cover",
    text: "Event liability cover, insured production crew and vendor agreements documented for every booking above the Gold package.",
    badge: "Insured production",
  },
];

export const testimonials = [

  {
    name: "Sravani & Karthik",
    city: "Hyderabad",
    text: "Our mandap looked like something out of a film. Elite Events handled 900 guests without a single hiccup — every ritual ran exactly on time.",
    initials: "SK",
  },
  {
    name: "Joseph Fernandes",
    city: "Vijayawada",
    text: "The church decoration and reception styling were breathtaking. Their team was calm, professional and genuinely kind to our families.",
    initials: "JF",
  },
  {
    name: "Ayesha Begum",
    city: "Eluru",
    text: "The nikah stage was elegant and respectful of every tradition. Guests still talk about the floral work and the lighting.",
    initials: "AB",
  },
  {
    name: "Dr. Ramesh Naidu",
    city: "Hyderabad",
    text: "We booked them for our annual corporate summit. LED wall, sound, hospitality — flawless execution and great value.",
    initials: "RN",
  },
  {
    name: "Priya Sharma",
    city: "Vijayawada",
    text: "My daughter's first birthday was pure magic. The balloon design and dessert table were beyond what we imagined.",
    initials: "PS",
  },
  {
    name: "Vamsi Krishna",
    city: "Eluru",
    text: "They produced our college fest with concert-level lighting and artist management. Best crowd energy we've ever had.",
    initials: "VK",
  },
];

export const faqs = [
  {
    q: "Which cities does Elite Events serve?",
    a: "We operate full-service offices in Hyderabad, Vijayawada and Eluru, and we regularly travel across Telangana and Andhra Pradesh for destination events.",
  },
  {
    q: "How far in advance should we book?",
    a: "For weddings we recommend 3–6 months ahead, especially in peak muhurat season. Birthdays and corporate events can often be arranged in 3–4 weeks.",
  },
  {
    q: "Can you work within our budget?",
    a: "Yes. Our Custom Package lets you pick services à la carte, and we share transparent vendor pricing so you always know where the money goes.",
  },
  {
    q: "Do you handle multi-religion and multi-day weddings?",
    a: "Absolutely. Hindu, Christian and Muslim ceremonies are all core specialisations, and our Diamond and Royal Premium packages are built for multi-day functions.",
  },
  {
    q: "What is included in photography and videography?",
    a: "Candid photography, traditional coverage, cinematic films, drone shoots and same-day edits are available depending on the package you choose.",
  },
  {
    q: "How do payments work?",
    a: "A booking advance confirms your date, followed by milestone payments before production. We accept UPI, bank transfer and card payments.",
  },
];

export const offices = [
  {
    city: "Hyderabad",
    address: "3rd Floor, Jubilee Trade Centre, Road No. 36, Jubilee Hills, Hyderabad 500033",
    phone: "+91 63022 13452",
  },
  {
    city: "Vijayawada",
    address: "2nd Floor, MG Road, Labbipet, Vijayawada 520010",
    phone: "+91 63022 13452",
  },
  {
    city: "Eluru",
    address: "Powerpet Main Road, Near Clock Tower, Eluru 534002",
    phone: "+91 63022 13452",
  },
];

export const eventTypes = [
  "Hindu Wedding",
  "Christian Wedding",
  "Muslim Wedding",
  "Reception",
  "Engagement",
  "Haldi / Mehendi",
  "Sangeet",
  "Birthday Party",
  "Baby Shower",
  "House Warming",
  "Anniversary",
  "College Event",
  "Corporate Event",
  "Other",
];
