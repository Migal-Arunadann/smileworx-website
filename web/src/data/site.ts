/**
 * Central clinic facts — single source of truth for the whole site.
 * Keep this file in sync with schema.org structured data in Seo.tsx.
 */

// Canonical domain is configurable. Replace with the real production
// domain once it is confirmed (e.g. via VITE_SITE_URL at build time).
export const SITE_URL: string =
  ((import.meta.env.VITE_SITE_URL as string | undefined) ?? "").replace(/\/+$/, "") ||
  "https://www.smileworx-dental-care.example.com";

export const CLINIC = {
  name: "Smileworx Dental Care",
  tamilName: "ஸ்மைல்வொர்க் டென்டல் கேர்",
  dentist: "Dr. S. Helen Joice",
  dentistTitle: "Dental Surgeon",
  phoneDisplay: "+91 93605 53755",
  phoneHref: "tel:+919360553755",
  whatsappNumber: "919360553755",
  addressLines: [
    "12/C Valliamman, Annapoorna Nagar Ext,",
    "Valliammai Nagar Extension,",
    "Ponniammanmedu,",
    "Chennai, Tamil Nadu 600110, India",
  ],
  addressOneLine:
    "12/C Valliamman, Annapoorna Nagar Ext, Valliammai Nagar Extension, Ponniammanmedu, Chennai, Tamil Nadu 600110, India",
  addressShort: "Ponniammanmedu, Chennai 600110",
  plusCode: "46PG+42 Chennai, Tamil Nadu",
  mapsQuery:
    "Smileworx%20Dental%20Care,%2012/C%20Valliamman,%20Annapoorna%20Nagar%20Ext,%20Valliammai%20Nagar%20Extension,%20Ponniammanmedu,%20Chennai,%20Tamil%20Nadu%20600110",
  hours: {
    weekdays: "Monday – Saturday",
    morning: "9:30 AM – 1:00 PM",
    evening: "5:30 PM – 9:00 PM",
    sunday: "Closed",
  },
} as const;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC.mapsQuery}`;
export const MAPS_PLACE_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${CLINIC.mapsQuery}`;

export type Treatment = {
  id: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  homeBlurb: string;
  involves: string[];
  whoFor: string[];
  image: string;
  alt: string;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "braces",
    index: "01",
    name: "Braces",
    kicker: "Orthodontics",
    summary:
      "Braces apply gentle, controlled pressure over time to guide crooked teeth into better alignment and improve how the upper and lower jaws meet.",
    homeBlurb:
      "Fixed appliances that gradually straighten crowded or uneven teeth and correct bite problems.",
    involves: [
      "A clinical assessment of tooth position and bite before any appliance is fitted.",
      "Brackets bonded to the teeth, connected by an archwire adjusted at follow-up visits.",
      "Periodic reviews through treatment, followed by a retainer phase.",
    ],
    whoFor: [
      "Crowded, spaced, rotated or protruding teeth.",
      "Overbite, underbite, crossbite and other bite-related concerns.",
      "Teenagers and adults — orthodontics is not limited by age when gums and bone are healthy.",
    ],
    image: "/images/treatments/braces.jpg",
    alt: "Close-up photograph of metal braces fitted on clean teeth — illustrative image, not a Smileworx patient.",
  },
  {
    id: "clear-aligners",
    index: "02",
    name: "Clear Aligners",
    kicker: "Discreet orthodontics",
    summary:
      "Clear aligners are a series of transparent, removable trays worn one after another to move selected malocclusions progressively, without fixed brackets.",
    homeBlurb:
      "Removable transparent trays for suitable cases — orthodontic movement with minimal visible change.",
    involves: [
      "Records and assessment to confirm the case is suitable for tray-based movement.",
      "A sequence of aligner trays, each worn for the period advised by the dentist.",
      "Consistent daily wear discipline and scheduled review appointments.",
    ],
    whoFor: [
      "Mild to moderate crowding, spacing or minor alignment issues.",
      "Patients who want a nearly invisible option for a suitable case.",
      "People able to commit to consistent daily wear and regular reviews.",
    ],
    image: "/images/treatments/aligners.jpg",
    alt: "Photograph of transparent clear aligner trays held against a neutral background — illustrative image.",
  },
  {
    id: "dental-implants",
    index: "03",
    name: "Dental Implants",
    kicker: "Tooth replacement",
    summary:
      "A dental implant is a titanium anchor placed in the jawbone to support a crown, bridge or denture when one or more teeth are missing and conditions allow.",
    homeBlurb:
      "Titanium anchors in the jawbone that support replacement teeth where a root is missing.",
    involves: [
      "Examination and imaging to assess bone volume and general suitability.",
      "Placement of the implant fixture, then a healing period for it to integrate with the bone.",
      "Fixing the final prosthetic tooth or teeth onto the healed implant.",
    ],
    whoFor: [
      "One or more missing teeth where neighbouring teeth need not be reduced.",
      "Patients with adequate bone and healthy gum tissue, assessed clinically.",
      "Those seeking a stable, fixed alternative to removable options in appropriate cases.",
    ],
    image: "/images/treatments/implant.jpg",
    alt: "Clinical photograph showing a dental implant component beside natural teeth — illustrative image.",
  },
  {
    id: "dentures",
    index: "04",
    name: "Dentures",
    kicker: "Removable prosthetics",
    summary:
      "Dentures are removable replacements for missing teeth and surrounding tissues — made as full sets or partial frameworks depending on what remains in the mouth.",
    homeBlurb:
      "Full or partial removable replacements that restore chewing function and facial support.",
    involves: [
      "Impressions and records of the jaws and remaining teeth.",
      "Trial fitting to check bite, appearance and comfort before finishing.",
      "Delivery with guidance on handling, hygiene and follow-up adjustments.",
    ],
    whoFor: [
      "Several missing teeth in one arch — partial dentures.",
      "Complete tooth loss in one or both jaws — complete dentures.",
      "A non-surgical rehabilitation route in suitable clinical situations.",
    ],
    image: "/images/treatments/denture.jpg",
    alt: "Photograph of a complete upper denture with natural-toned teeth resting on a neutral surface — illustrative image.",
  },
  {
    id: "veneers",
    index: "05",
    name: "Veneers",
    kicker: "Aesthetic bonding",
    summary:
      "Veneers are thin shells bonded to the front surface of teeth to alter colour, shape or proportion in carefully selected cases.",
    homeBlurb:
      "Thin custom-made shells that reshape and refine the front surface of selected teeth.",
    involves: [
      "Assessment of tooth position, enamel quality and bite before committing to enamel changes.",
      "Minimal preparation of the front tooth surfaces, impressions and laboratory fabrication.",
      "Bonding of the finished shells with careful shade and margin matching.",
    ],
    whoFor: [
      "Discoloured teeth that do not respond to conventional whitening routes.",
      "Chipped, worn or unevenly shaped front teeth.",
      "Small gaps or proportion concerns within a healthy, stable bite.",
    ],
    image: "/images/treatments/veneer.jpg",
    alt: "Close-up studio photograph of a single ceramic dental veneer shell — illustrative image.",
  },
  {
    id: "crowns",
    index: "06",
    name: "Crowns",
    kicker: "Restoration",
    summary:
      "A crown is a custom cap that encases a weakened, heavily restored or root-treated tooth, restoring its shape, strength and role in the bite.",
    homeBlurb:
      "Custom caps that cover and protect weakened teeth, restoring shape, strength and bite.",
    involves: [
      "Shaping the affected tooth and recording its exact form.",
      "Fabrication of the crown — metal-backed or all-ceramic depending on the situation.",
      "Cementation with attention to contact points and even bite distribution.",
    ],
    whoFor: [
      "Teeth with large fillings or fractures that need full coverage.",
      "Teeth after root canal treatment, which become more brittle over time.",
      "Worn or badly discoloured teeth in functional zones of the mouth.",
    ],
    image: "/images/treatments/crown.jpg",
    alt: "Photograph of a ceramic dental crown resting on a model tooth — illustrative image.",
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
