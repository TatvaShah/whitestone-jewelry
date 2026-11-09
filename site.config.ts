import type { Img, SiteConfig } from "@/lib/types";
import { EMAIL, ETSY, FACEBOOK, INSTAGRAM_DM, MAPS, PHONE_DISPLAY, PHONE_TEL, SHOWROOM, WHATSAPP } from "@/lib/channels";

// Facts only, from the 9 Nov 2026 research notes. Empty fields would hide a section.
// Prices below are copied from public captions. They are examples, not a live list.

const shot = (file: string, alt: string, width = 640, height = 1136): Img => ({
  src: `/images/${file}.jpg`,
  alt,
  width,
  height,
});

const MAPS_HREF = MAPS;

export const site: SiteConfig = {
  name: "Whitestone Jewelry",
  tagline: "Lab grown and natural diamonds, set in a Mississauga studio.",
  category: "Lab grown and natural diamonds",
  schemaType: "JewelryStore",
  area: "Mississauga",

  theme: {
    preset: "salon-luxe",
    radius: "sharp",
    wordmark: "display",
    headingCase: "normal",
    fonts: { display: "cormorant", body: "outfit", script: "cormorant" },
    colors: {
      bg: "#f7f3ee",
      surface: "#fffdfb",
      ink: "#202020",
      text: "#303030",
      muted: "#4e453f",
      accent: "#6f5344",
      accentInk: "#f7f3ee",
      soft: "#efe6dc",
      line: "#e0d5c8",
    },
  },
  motion: { enabled: true, smoothScroll: true, intensity: "subtle", pin: true },
  logo: "/images/logo-profile.jpg",
  showNameWithLogo: false,

  rating: { value: 5, count: 62 },

  hero: {
    variant: "editorial",
    depth: false,
    eyebrow: "Mississauga studio",
    headline: "Your shape. Your story.",
    subhead:
      "Engagement rings, wedding bands, hip hop pieces, and everyday jewellery. Lab grown and natural diamonds, by appointment.",
    images: [
      shot(
        "DfUvUe-zkYv",
        "Hand wearing a 10 carat emerald cut diamond ring in 14KT white gold, from a Whitestone reel.",
      ),
      shot(
        "DfVu759DlJk",
        "Whitestone Jewelry Inc. poster of loose diamond shapes around a seated person, with the line Your shape. Your story.",
        1080,
        1350,
      ),
    ],
    primaryCta: { label: "Book on WhatsApp", href: WHATSAPP },
    secondaryCta: { label: "Pick your shape", href: "#shapes" },
  },

  highlights: [
    "Lab grown",
    "Natural diamonds",
    "Custom CAD",
    "IGI and GIA",
    "Fancy colour",
    "Appointment only",
    "Mississauga",
  ],

  shapes: {
    title: "Pick your shape",
    intro:
      "Oval, round, emerald, princess, Asscher, cushion, marquise, heart, or radiant. Choose one and WhatsApp opens with MY SHAPE already written, the note the studio asks for on Instagram.",
    items: [
      {
        name: "Oval",
        prompt: "MY SHAPE: Oval",
        note: "Recent posts include a 10.00 ct oval, E colour, VVS2, IGI, at $6,669 CAD, and a 5 ct lab grown oval in a cathedral setting at $3,800 CAD.",
        image: shot(
          "DfQfOXou9Vn",
          "Hand wearing a large oval diamond ring with side stones. The still is labeled 10 ct oval, E VVS2, IGI, 11.20 ctw, $6,669 CAD.",
        ),
        href: "https://www.instagram.com/reel/DfQfOXou9Vn/",
      },
      {
        name: "Round",
        prompt: "MY SHAPE: Round",
        note: "Round lab grown rings are named in Google reviews, including a 1 ct round. The introduction reel shows a round centre among diamond bands.",
        href: "https://www.instagram.com/reel/DK-B_UXuDXl/",
      },
      {
        name: "Emerald",
        prompt: "MY SHAPE: Emerald",
        note: "A 10.00 ct emerald cut, E VVS2, IGI, in 14KT white gold with three rows of diamonds, was posted at $7,800 CAD.",
        image: shot(
          "DfUvUe-zkYv",
          "Hand wearing an emerald cut diamond ring with three rows of diamonds on the band. The still is labeled 10 ct, E VVS2, IGI, 14KT white gold, $7,800 CAD.",
        ),
        href: "https://www.instagram.com/reel/DfUvUe-zkYv/",
      },
      {
        name: "Princess",
        prompt: "MY SHAPE: Princess",
        note: "A 3.00 ct princess cut, E VVS2, IGI, with a tulip basket and cathedral setting in 14KT white gold, was posted at $2,399 CAD.",
        image: shot(
          "DfLMwEVzIMl",
          "Hand wearing a princess cut diamond ring. The still is labeled 3 ct, E VVS2, IGI, tulip basket, $2,399 CAD.",
        ),
        href: "https://www.instagram.com/reel/DfLMwEVzIMl/",
      },
      {
        name: "Asscher",
        prompt: "MY SHAPE: Asscher",
        note: "A 2.00 ct Asscher cut, E VVS2, IGI, on a 2 mm 14KT white gold band, was posted at $1,850 CAD.",
        image: shot(
          "DfA4N0AT6eu",
          "Hand wearing an Asscher cut diamond ring. The still is labeled 2 ct, E VVS2, IGI, 14KT white gold, $1,850 CAD.",
        ),
        href: "https://www.instagram.com/reel/DfA4N0AT6eu/",
      },
      {
        name: "Cushion",
        prompt: "MY SHAPE: Cushion",
        note: "A 1.50 ct square cushion, D VVS2, 1:1 ratio, tulip basket, 14KT white gold, was posted at $1,499 CAD.",
        image: shot(
          "De79hbtu0LI",
          "Hand wearing a square cushion diamond ring. The still is labeled 1.5 ct, D VVS2, tulip basket, $1,499 CAD.",
        ),
        href: "https://www.instagram.com/reel/De79hbtu0LI/",
      },
      {
        name: "Marquise",
        prompt: "MY SHAPE: Marquise",
        note: "A reel describes a 2.5 ct E VVS2 marquise cut lab grown diamond in 14KT yellow gold, IGI certified. Marquise is also an Instagram highlight.",
        href: "https://www.instagram.com/reel/DQ5YeX9jtwX/",
      },
      {
        name: "Heart",
        prompt: "MY SHAPE: Heart",
        note: "A 5.00 ct heart shaped diamond, E VVS2, IGI, in 14KT white gold, was posted at $3,499 CAD.",
        image: shot(
          "DfDd-AEzuQA",
          "Hand wearing a heart shaped diamond ring. The still is labeled 5 ct, E VVS2, IGI, 14KT white gold, $3,499 CAD.",
        ),
        href: "https://www.instagram.com/reel/DfDd-AEzuQA/",
      },
      {
        name: "Radiant",
        prompt: "MY SHAPE: Radiant",
        note: "A six shape post names radiant beside oval, marquise, and emerald. A caption prompt on file is 4CT RADIANT.",
        href: "https://www.instagram.com/reel/De5HykTTN9g/",
      },
    ],
  },

  menu: {
    label: "Services",
    title: "What the studio makes",
    intro:
      "Engagement rings, wedding bands, custom CAD, hip hop and everyday jewellery, in lab grown and natural diamonds.",
    variant: "list",
    showPrices: true,
    groups: [
      {
        title: "Engagement",
        note: "The centre of the feed",
        items: [
          {
            name: "Shapes they post",
            description: "Oval, round, emerald, princess, Asscher, cushion, marquise, heart, and radiant.",
          },
          {
            name: "Settings named in captions",
            description: "Solitaire, cathedral, tulip basket, and three rows of diamonds on an emerald cut.",
          },
          {
            name: "Certificates",
            description: "IGI is named on recent ring posts. A custom post also names GIA.",
          },
          {
            name: "A published starting figure",
            description: "One post lists 2.00 ct solitaires, D to E colour, VVS2, IGI, 14KT gold, starting at $1,850 CAD.",
          },
        ],
      },
      {
        title: "Wedding bands",
        note: "Including a men’s band highlight",
        items: [
          {
            name: "Bands",
            description: "Wedding bands, and a men’s band, are part of the published work. Instagram highlights include Men’s band.",
          },
          {
            name: "Widths they have posted",
            description: "A plain 14KT gold band at about 1.7 to 1.8 mm, and 2 mm bands on several solitaires.",
          },
        ],
      },
      {
        title: "Custom",
        note: "CAD, then the piece",
        items: [
          {
            name: "Design before the make",
            description: "A caption says custom CAD design happens before the piece is made.",
          },
          {
            name: "How to ask",
            description: "Captions ask people to DM MY SHAPE or CUSTOM. The bio links a ShowroomPro page titled Design your dream ring.",
          },
          {
            name: "Same day quote",
            description: "A shapes post offers a free personalized quote the same day.",
          },
        ],
      },
      {
        title: "Hip hop and everyday",
        note: "From the bio and the introduction reel",
        items: [
          {
            name: "Chains, tennis, eternity",
            description: "The introduction reel names iced out chains, tennis bracelets, and eternity rings.",
          },
          {
            name: "A tennis necklace they posted",
            description:
              "48.00 ctw of oval lab grown diamonds, 87 stones, E to F colour, VVS to VS, solid 18KT white gold, 18 inches.",
          },
          {
            name: "Earrings",
            description: "Earrings and studs are part of the work. A Google review describes a custom 3 ct diamond earring piece.",
          },
        ],
      },
      {
        title: "Lab grown and natural",
        note: "Both are offered",
        items: [
          {
            name: "Side by side",
            description: "The bio and the introduction reel offer lab grown and natural diamonds.",
          },
          {
            name: "Fancy colour",
            description: "Highlights include fancy colour. One post shows a 5.93 ct light pink, rose petal cut, lab grown diamond.",
          },
          {
            name: "Metals",
            description: "Captions name 14KT and 18KT gold, and platinum options.",
          },
          {
            name: "Beyond the appointment",
            description:
              "The introduction reel also names worldwide WhatsApp orders, and work for other jewellers, stylists, and resellers.",
          },
        ],
      },
      {
        title: "Posted examples",
        note: "Public captions, not a live inventory",
        items: [
          {
            name: "2.00 ct Asscher cut",
            price: "$1,850 CAD",
            description: "E VVS2, IGI, 14KT white gold, 2 mm band. Posted 27 Oct 2026.",
            image: shot("DfA4N0AT6eu", "Asscher cut diamond ring still labeled $1,850 CAD."),
            href: "https://www.instagram.com/reel/DfA4N0AT6eu/",
          },
          {
            name: "1.50 ct square cushion",
            price: "$1,499 CAD",
            description: "D VVS2, 1:1 ratio, tulip basket, 14KT white gold, 2 mm band. Posted 26 Oct 2026.",
            image: shot("De79hbtu0LI", "Square cushion diamond ring still labeled $1,499 CAD."),
            href: "https://www.instagram.com/reel/De79hbtu0LI/",
          },
          {
            name: "3.00 ct princess cut",
            price: "$2,399 CAD",
            description: "E VVS2, IGI, tulip basket, cathedral, 14KT white gold. Posted 31 Oct 2026.",
            image: shot("DfLMwEVzIMl", "Princess cut diamond ring still labeled $2,399 CAD."),
            href: "https://www.instagram.com/reel/DfLMwEVzIMl/",
          },
          {
            name: "5.00 ct heart",
            price: "$3,499 CAD",
            description: "E VVS2, IGI, 14KT white gold. Posted 28 Oct 2026.",
            image: shot("DfDd-AEzuQA", "Heart shaped diamond ring still labeled $3,499 CAD."),
            href: "https://www.instagram.com/reel/DfDd-AEzuQA/",
          },
          {
            name: "10.00 ct oval",
            price: "$6,669 CAD",
            description: "E VVS2, IGI, 11.20 ctw with side stones. Posted 2 Nov 2026.",
            image: shot("DfQfOXou9Vn", "Oval diamond ring still labeled $6,669 CAD."),
            href: "https://www.instagram.com/reel/DfQfOXou9Vn/",
          },
          {
            name: "10.00 ct emerald cut",
            price: "$7,800 CAD",
            description: "E VVS2, IGI, 14KT white gold, three rows of diamonds, about 12.00 ctw. Posted 4 Nov 2026.",
            image: shot("DfUvUe-zkYv", "Emerald cut diamond ring still labeled $7,800 CAD."),
            href: "https://www.instagram.com/reel/DfUvUe-zkYv/",
          },
          {
            name: "5 ct lab grown oval",
            price: "$3,800 CAD",
            description: "E VVS2, IGI, 14KT white gold, cathedral setting. Posted 3 Nov 2025.",
            image: shot("DQnOiTejvCt", "Oval diamond held in gloved fingers, still labeled $3,800 CAD."),
            href: "https://www.instagram.com/reel/DQnOiTejvCt/",
          },
          {
            name: "2 ct lab grown solitaire",
            price: "$1,699 CAD",
            description: "D, E, or F colour, VVS to VS, IGI, 14KT gold, plain band. Posted 8 Dec 2025.",
            image: shot("DSBO0qWjsJj", "Stack of five diamond rings, still labeled 1,699 CAD."),
            href: "https://www.instagram.com/reel/DSBO0qWjsJj/",
          },
        ],
      },
    ],
    footnote:
      "Google also lists the studio as a jewellery store, diamond buyer, diamond dealer, designer, manufacturer, and repair service. WeddingWire lists appraisal, cleaning, certification, payment plans, ring sizing, shipping, stone upgrades, warranties, and free resizing and polishing. Figures above are copied from captions. Ask for a current quote.",
  },

  gallery: {
    title: "The lookbook",
    intro: "Stills from the studio Instagram. Each frame opens the original post.",
    layout: "strip",
    items: [
      {
        ...shot(
          "DfVu759DlJk",
          "Whitestone Jewelry Inc. poster of loose diamond shapes around a seated person, with the line Your shape. Your story.",
          1080,
          1350,
        ),
        caption: "Your shape. Your story.",
        href: "https://www.instagram.com/p/DfVu759DlJk/",
      },
      {
        ...shot(
          "DfQfOXou9Vn",
          "Hand wearing a large oval diamond ring with side stones. The still is labeled 10 ct oval, E VVS2, IGI, 11.20 ctw, $6,669 CAD.",
        ),
        caption: "10 ct oval",
        href: "https://www.instagram.com/reel/DfQfOXou9Vn/",
      },
      {
        ...shot(
          "DfUvUe-zkYv",
          "Hand wearing an emerald cut diamond ring with three rows of diamonds on the band. The still is labeled 10 ct, E VVS2, IGI, 14KT white gold, $7,800 CAD.",
        ),
        caption: "10 ct emerald cut",
        href: "https://www.instagram.com/reel/DfUvUe-zkYv/",
      },
      {
        ...shot(
          "DfDd-AEzuQA",
          "Hand wearing a heart shaped diamond ring. The still is labeled 5 ct, E VVS2, IGI, 14KT white gold, $3,499 CAD.",
        ),
        caption: "5 ct heart",
        href: "https://www.instagram.com/reel/DfDd-AEzuQA/",
      },
      {
        ...shot(
          "DfA4N0AT6eu",
          "Hand wearing an Asscher cut diamond ring. The still is labeled 2 ct, E VVS2, IGI, 14KT white gold, $1,850 CAD.",
        ),
        caption: "2 ct Asscher",
        href: "https://www.instagram.com/reel/DfA4N0AT6eu/",
      },
      {
        ...shot(
          "De-fmMLOobp",
          "Oval diamond tennis necklace at the neck. The still is labeled 48 carats, 87 ovals, 18KT white gold, 18 inches.",
        ),
        caption: "Oval tennis necklace",
        href: "https://www.instagram.com/reel/De-fmMLOobp/",
      },
      {
        ...shot(
          "De9m517xNfd",
          "Light pink rose petal cut diamond held in a white cloth. The still is labeled 5.93 carats, lab grown.",
        ),
        caption: "5.93 ct light pink",
        href: "https://www.instagram.com/reel/De9m517xNfd/",
      },
      {
        ...shot(
          "De5HykTTN9g",
          "Six solitaire rings of different diamond shapes worn on one hand, from a 2 carat shapes reel.",
        ),
        caption: "Six shapes, from $1,850 CAD",
        href: "https://www.instagram.com/reel/De5HykTTN9g/",
      },
      {
        ...shot(
          "DK-B_UXuDXl",
          "A finger stacked with diamond bands beside the studio phone, email, and Mississauga address.",
        ),
        caption: "How to reach the studio",
        href: "https://www.instagram.com/reel/DK-B_UXuDXl/",
      },
    ],
  },

  reels: {
    title: "Play the work",
    intro:
      "Four recent reels, hosted on this site. They loop with the sound off. Instagram embeds further down include these and older posts, if you want sound and the full caption.",
    items: [
      {
        src: "/reels/DfUvUe-zkYv.mp4",
        poster: "/images/DfUvUe-zkYv-poster.jpg",
        title: "10 ct emerald cut",
        caption: "E VVS2, IGI, 14KT white gold. Posted at $7,800 CAD.",
        href: "https://www.instagram.com/reel/DfUvUe-zkYv/",
      },
      {
        src: "/reels/DfQfOXou9Vn.mp4",
        poster: "/images/DfQfOXou9Vn-poster.jpg",
        title: "10 ct oval",
        caption: "E VVS2, IGI, 11.20 ctw. Posted at $6,669 CAD.",
        href: "https://www.instagram.com/reel/DfQfOXou9Vn/",
      },
      {
        src: "/reels/DfDd-AEzuQA.mp4",
        poster: "/images/DfDd-AEzuQA-poster.jpg",
        title: "5 ct heart",
        caption: "E VVS2, IGI, 14KT white gold. Posted at $3,499 CAD.",
        href: "https://www.instagram.com/reel/DfDd-AEzuQA/",
      },
      {
        src: "/reels/DfA4N0AT6eu.mp4",
        poster: "/images/DfA4N0AT6eu-poster.jpg",
        title: "2 ct Asscher",
        caption: "E VVS2, IGI, 14KT white gold. Posted at $1,850 CAD.",
        href: "https://www.instagram.com/reel/DfA4N0AT6eu/",
      },
    ],
  },

  about: {
    title: "A Mississauga studio",
    statement: "Your shape. Your story. Your forever ring.",
    image: shot(
      "DfVu759DlJk",
      "Whitestone Jewelry Inc. poster of loose diamond shapes around a seated person, with the line Your shape. Your story.",
      1080,
      1350,
    ),
    body: [
      "Whitestone Jewelry Inc. is a Mississauga studio for engagement rings, wedding bands, hip hop pieces, and everyday jewellery in lab grown and natural diamonds. The Instagram bio talks about insider prices and says the studio is trusted by 5K+ people across Canada. On 9 Nov 2026 the profile showed 10,256 followers, 454 posts, and a verified badge.",
      "Google lists the business as women owned and LGBTQ+ friendly. Reviews name Ankit Jain, and one of them calls him the owner. Visits are by appointment, in the studio or virtually. The published address is on the 15th floor at 4 Robert Speck Pkwy.",
    ],
  },

  instagram: {
    handle: "whitestonejewelryinc",
    embedsTitle: "From the feed",
    embeds: [
      "https://www.instagram.com/reel/DfUvUe-zkYv/",
      "https://www.instagram.com/reel/DfQfOXou9Vn/",
      "https://www.instagram.com/reel/DfDd-AEzuQA/",
      "https://www.instagram.com/reel/DfA4N0AT6eu/",
      "https://www.instagram.com/reel/DK-B_UXuDXl/",
      "https://www.instagram.com/reel/DQ5YeX9jtwX/",
      "https://www.instagram.com/p/DfVu759DlJk/",
      "https://www.instagram.com/reel/De5HykTTN9g/",
      "https://www.instagram.com/reel/De79hbtu0LI/",
      "https://www.instagram.com/reel/De9m517xNfd/",
      "https://www.instagram.com/reel/De-fmMLOobp/",
      "https://www.instagram.com/reel/DfLMwEVzIMl/",
      "https://www.instagram.com/reel/DSBO0qWjsJj/",
      "https://www.instagram.com/reel/DQnOiTejvCt/",
      "https://www.instagram.com/reel/DW46lTOji_P/",
    ],
  },

  order: {
    label: "Book",
    headerCtaLabel: "Book on WhatsApp",
    preferLinks: true,
    title: "Book an appointment",
    intro: "Appointment only, in the studio near Square One or virtually. Write on WhatsApp, call, email, or send an Instagram DM.",
    steps: [
      "Tell them the shape. Captions ask for a DM that says MY SHAPE or CUSTOM. WhatsApp, phone, and email are published too.",
      "See the design. Posts describe custom CAD before anything is made, and one post offers a free personalized quote the same day.",
      "Make it in Mississauga. Captions describe the work at the studio, with IGI or GIA named on the piece.",
      "Pick up or ship. Visits are by appointment, with virtual appointments on WeddingWire. Captions mention same day pickup and worldwide shipping. One post mentions 5 to 10 days. Reviews mention a ring ready in 7 days and a rush order in 8 days.",
    ],
    dmMessage:
      "Hi Whitestone Jewelry! I would like to book an appointment.\nPiece:\nShape:\nLab or natural:\nTiming:",
    links: [
      { label: "WhatsApp", href: WHATSAPP },
      { label: "Call", href: `tel:${PHONE_TEL}` },
      { label: "Email", href: `mailto:${EMAIL}` },
      { label: "Instagram DM", href: INSTAGRAM_DM },
      { label: "Design your dream ring", href: SHOWROOM },
      { label: "Etsy shop", href: ETSY },
      { label: "Google Maps", href: MAPS_HREF },
    ],
    note: "Any price on this page is an example copied from a public caption. Ask the studio for a current quote.",
  },

  reviews: {
    title: "What clients wrote",
    intro: "Google rating 5.0 from 62 reviews. WeddingWire rating 5.0 from 3 reviews.",
    items: [
      {
        author: "Hani",
        source: "Google Maps, 14 Jan 2026",
        href: MAPS_HREF,
        quote:
          "I do not write reviews often, but I truly do not have words for the honesty, integrity, and exceptional service of Mr. Ankit Jain at Whitestone Jewellers. On my finger is now a 2.5 ct lab-grown diamond engagement ring... He does not push, he does not upsell... Other jewellers quoted my ring at $3.6K minimum. I paid $1K less for the same (if not better) quality.",
      },
      {
        author: "Muneer",
        source: "Google Maps, around Dec 2025",
        href: MAPS_HREF,
        quote:
          "I had a great experience at Whitestone Jewellery Inc in Mississauga. I worked directly with the owner, who was honest, knowledgeable, and never pushy... After visiting several jewellery stores, Whitestone had the best prices by far without compromising on quality.",
      },
      {
        author: "Dami",
        source: "Google Maps, around Dec 2025",
        href: MAPS_HREF,
        quote:
          "Ankit Jain was professional and a pleasure to work with. No haggle no second guesses. Beautiful custom ring. Fiancé likes. Will keep working with him on all custom work",
      },
      {
        author: "Ilija",
        source: "Google Maps, around Dec 2025",
        href: MAPS_HREF,
        quote:
          "Amazing customer service very nice and fast, knows what they’re doing doesn’t waste time. Best prices by far.",
      },
      {
        author: "Bindusar",
        source: "Google Maps, around Nov 2025",
        href: MAPS_HREF,
        quote:
          "I’m so impressed with this jewelry store! From the moment I walked in, Mr Ankit made me feel welcome and helped me find the perfect diamond ring. He is knowledgeable, patient, and never rushed me.",
      },
      {
        author: "Zee-Shan",
        source: "Google Maps, around Nov 2025",
        href: MAPS_HREF,
        quote:
          "What an amazing find. Was referred to this jeweller and honestly blown away by their service and options. Definitely wholesale pricing with showroom quality and service. Had a custom 3 ct diamond earring piece made for the Mrs.",
      },
      {
        author: "Yiğit",
        source: "Google Maps, around Nov 2025",
        href: MAPS_HREF,
        quote:
          "Got my 1 carat oval and 1 carat round lab-grown diamond rings from Whitestone Jewelry Mississauga stunning quality, best price, and amazing service by Ankit Jain.",
      },
      {
        author: "Shivani",
        source: "WeddingWire, 27 Feb 2026",
        quote:
          "Absolutely beautiful work! The ring is perfect, the service was outstanding, and the turnaround time was incredibly fast. Amazing value for the price.",
      },
      {
        author: "Tanvi",
        source: "WeddingWire, 27 Feb 2026",
        quote:
          "So this engagement ring was a surprise from my fiancé, he just told them about my expectations and they designed it into a dream engagement ring. Their professionalism was top notch and client interaction was beyond amazing",
      },
      {
        author: "Neha",
        source: "WeddingWire, 27 Feb 2026",
        quote:
          "I honestly had such a good experience. The ring turned out even more beautiful than I expected. The pricing was amazing, it truly felt like wholesale, and they had my ring ready in just 7 days.",
      },
    ],
  },

  faq: [
    {
      q: "Do you work with lab grown and natural diamonds?",
      a: "Yes. The bio and the posts offer both. Recent captions name IGI certificates, and one custom post also names GIA.",
    },
    {
      q: "Where is the studio, and do I need an appointment?",
      a: "15th Floor, Unit 1563, 4 Robert Speck Pkwy, Mississauga. WeddingWire describes private appointments near Square One or virtually. A TikTok caption says the visit is appointment only. Opening hours are not published on Google Maps. See the placeholder in Visit.",
    },
    {
      q: "How do I start a ring?",
      a: "Send MY SHAPE or CUSTOM by Instagram DM, message WhatsApp, call +1 437 770 1834, or email whitestonesjewelry@gmail.com. The bio also links a ShowroomPro page titled Design your dream ring. There is an Etsy shop named WhitestoneJewelryInc.",
    },
    {
      q: "Do you ship?",
      a: "A caption says same day pickup and worldwide shipping are available, and the introduction reel says WhatsApp orders are available worldwide. Confirm the current option when you write.",
    },
    {
      q: "What about resizing, polishing, and warranties?",
      a: "WeddingWire lists free resizing and polishing, plus appraisal, cleaning, certification, payment plans, ring sizing, shipping, stone upgrades, and warranties. One caption says lifetime polish and resize are included, with an appraisal, certificate, and box. Ask which terms apply to your piece.",
    },
    {
      q: "Are the prices on this page current?",
      a: "No. Every figure is copied from a public caption and dated. Message the studio for a quote.",
    },
  ],

  contact: {
    title: "Visit the studio",
    area: "Mississauga, Toronto, and the GTA",
    address: "15th Floor, Unit 1563, 4 Robert Speck Pkwy, Mississauga, ON L4Z 3Y4",
    phone: PHONE_DISPLAY,
    email: EMAIL,
    note: "The address above uses L4Z 3Y4, from WeddingWire and the introduction reel. A November 2025 reel lists L4Z 1S1. Confirm the postal code before print.",
    socials: [
      { label: "Facebook", href: FACEBOOK },
      { label: "Design your dream ring", href: SHOWROOM },
      { label: "Etsy shop", href: ETSY },
      { label: "Google Maps", href: MAPS_HREF },
    ],
  },

  seo: {
    title: "Whitestone Jewelry | Lab grown and natural diamonds in Mississauga",
    description:
      "Mississauga studio for lab grown and natural diamonds. Custom engagement rings, wedding bands, and everyday pieces. Book by WhatsApp or Instagram.",
    keywords: [
      "lab grown diamonds Mississauga",
      "natural diamonds Mississauga",
      "custom engagement rings Toronto",
      "wedding bands Mississauga",
      "Whitestone Jewelry",
    ],
    ogPhoto: "/images/DfVu759DlJk.jpg",
  },
};
