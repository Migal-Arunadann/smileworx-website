export interface TreatmentInfo {
  id: string;
  name: string;
  tamilName?: string;
  tagline: string;
  image: string;
  alt: string;
  shortDesc: string;
  overview: string;
  involves: string[];
  suitability: string[];
  considerations: string;
}

export interface ClinicTiming {
  days: string;
  morning: string;
  evening: string;
  closed?: boolean;
}

export const CLINIC_DATA = {
  name: 'Smileworx Dental Care',
  tamilName: 'ஸ்மைல்ஒர்க்ஸ் பல் மருத்துவமனை',
  tamilTagline: 'பல் மருத்துவ மற்றும் சீரமைப்பு மையம்',
  doctor: {
    name: 'Dr. S. Helen Joice',
    title: 'Dental Surgeon',
    qualification: 'Dental Surgeon'
  },
  contact: {
    phoneDisplay: '+91 93605 53755',
    phoneLocal: '93605 53755',
    phoneTel: '+919360553755',
    whatsappNumber: '919360553755',
    email: 'contact@smileworx.in'
  },
  address: {
    line1: '#12/C, Valliammai Nagar Extn',
    line2: 'Ponniammanmedu, Chennai - 600110',
    city: 'Chennai',
    state: 'Tamil Nadu',
    postalCode: '600110',
    country: 'India',
    locationCode: '46PG+42 Chennai, Tamil Nadu',
    full: '#12/C, Valliammai Nagar Extn, Ponniammanmedu, Chennai - 600110, Tamil Nadu, India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Smileworx+Dental+Care+12%2FC+Valliammai+Nagar+Extn+Ponniammanmedu+Chennai+600110'
  },
  schedule: [
    { day: 'Monday', morning: '9:30 AM – 1:00 PM', evening: '5:30 PM – 9:00 PM', closed: false },
    { day: 'Tuesday', morning: '9:30 AM – 1:00 PM', evening: '5:30 PM – 9:00 PM', closed: false },
    { day: 'Wednesday', morning: '9:30 AM – 1:00 PM', evening: '5:30 PM – 9:00 PM', closed: false },
    { day: 'Thursday', morning: '9:30 AM – 1:00 PM', evening: '5:30 PM – 9:00 PM', closed: false },
    { day: 'Friday', morning: '9:30 AM – 1:00 PM', evening: '5:30 PM – 9:00 PM', closed: false },
    { day: 'Saturday', morning: '9:30 AM – 1:00 PM', evening: '5:30 PM – 9:00 PM', closed: false },
    { day: 'Sunday', morning: 'Based on Appointments', evening: 'Based on Appointments', closed: false, note: 'Sunday: Based on Appointments' }
  ],
  canonicalDomain: 'https://smileworxdentalcare.com'
};

export const TREATMENTS: TreatmentInfo[] = [
  {
    id: 'braces',
    name: 'Orthodontic Braces',
    tamilName: 'பல் வரிசைப் படுத்துதல் (Braces)',
    tagline: 'Precision alignment for crowding, spacing, and bite correction',
    image: '/images/treatments/braces.jpg',
    alt: 'Orthodontic aesthetic ceramic braces fitted on natural teeth',
    shortDesc: 'Fixed orthodontic brackets and archwires designed to gradually guide teeth into optimal alignment and balance.',
    overview: 'Dental braces remain one of the most reliable and proven methods in orthodontic care. Using carefully calibrated forces applied through brackets bonded to the teeth and connected by archwires, braces gradually correct misalignments, close gaps, and restore functional biting harmony.',
    involves: [
      'Comprehensive clinical examination and assessment of dental alignment',
      'Bonding of ceramic or metal brackets to the tooth surfaces',
      'Placement and periodic adjustment of flexible archwires',
      'Regular progress appointments to monitor tooth repositioning'
    ],
    suitability: [
      'Visible tooth crowding, overlapping, or rotated teeth',
      'Spacing or gaps between teeth requiring controlled closure',
      'Overbite, underbite, crossbite, or uneven chewing planes',
      'Patients seeking a reliable, time-tested orthodontic approach'
    ],
    considerations: 'Treatment duration varies depending on individual tooth movement rates and case complexity. Suitability is determined through a clinical evaluation.'
  },
  {
    id: 'aligners',
    name: 'Clear Aligners',
    tamilName: 'அலைனர்ஸ் (Aligners)',
    tagline: 'Discreet, removable transparent trays for contemporary orthodontic needs',
    image: '/images/treatments/aligners.jpg',
    alt: 'Crystal-clear transparent orthodontic aligner tray',
    shortDesc: 'Custom-molded transparent trays that gently realign teeth without permanent brackets or wires.',
    overview: 'Clear aligners are a modern orthodontic alternative for patients seeking a more discreet approach to tooth straightening. Fabricated from medical-grade, smooth transparent polymers, each set of custom trays is worn sequentially to move teeth in measured increments.',
    involves: [
      'Precise dental impression or 3D scan to plan individual tray stages',
      'Custom fabrication of a sequential series of clear polymer trays',
      'Daily tray wear (typically 20–22 hours per day), removed only for meals and brushing',
      'Progressive transition to subsequent trays according to your dentist’s guidance'
    ],
    suitability: [
      'Mild to moderate tooth crowding or minor spacing concerns',
      'Adults and working professionals desiring an unobtrusive appearance',
      'Patients who prefer removable appliances for easier brushing and eating',
      'Orthodontic relapse cases where teeth have slightly shifted over time'
    ],
    considerations: 'Successful alignment depends on consistent daily compliance. Not every complex skeletal bite discrepancy can be managed with aligners alone.'
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    tamilName: 'இம்ப்ளான்ட்ஸ் (Dental Implant)',
    tagline: 'Fixed biocompatible replacements for missing single or multiple teeth',
    image: '/images/treatments/implants.jpg',
    alt: 'Dental implant restoration model with titanium fixture and porcelain crown',
    shortDesc: 'Biocompatible titanium root fixtures placed to support permanent crowns, bridges, or overdentures.',
    overview: 'A dental implant is an established restorative treatment that replaces both the root and the crown of a missing tooth. The implant fixture is integrated into the jawbone, providing a solid foundation that looks, feels, and functions like a natural tooth without requiring alterations to adjacent healthy teeth.',
    involves: [
      'Detailed clinical evaluation including bone density and spatial assessment',
      'Surgical placement of the biocompatible titanium implant fixture',
      'Healing and osseointegration period allowing firm integration with bone',
      'Attachment of custom abutment and final porcelain or zirconia crown'
    ],
    suitability: [
      'One or more missing teeth requiring a standalone permanent replacement',
      'Patients looking to preserve adjacent healthy teeth without dental bridging',
      'Individuals seeking greater stability for loose or ill-fitting dentures',
      'Adults with adequate jawbone support and healthy periodontal tissues'
    ],
    considerations: 'Good general health, sufficient bone volume, and meticulous oral hygiene are essential prerequisites. A clinical consultation determines clinical feasibility.'
  },
  {
    id: 'dentures',
    name: 'Custom Dentures',
    tamilName: 'செயற்கை பல்செட் (Dentures)',
    tagline: 'Functional, comfortable prosthetic solutions for multiple missing teeth',
    image: '/images/treatments/dentures.jpg',
    alt: 'Custom dental prosthetic and precision denture restoration',
    shortDesc: 'Removable prosthetic appliances crafted to restore chewing comfort, speech clarity, and facial support.',
    overview: 'Dentures provide a practical and accessible solution for replacing multiple missing teeth or complete dental arches. Today’s prosthetics are custom-designed with natural-looking gum contours and tooth shades to restore oral function, facial volume, and every-day comfort.',
    involves: [
      'Accurate impressions of the gums, palate, and remaining ridge architecture',
      'Bite registration to establish natural jaw alignment and chewing height',
      'Wax try-in appointment to verify tooth shade, shape, and speech comfort',
      'Final fabrication, delivery, and post-placement adjustments for optimal fit'
    ],
    suitability: [
      'Extensive tooth loss across the upper, lower, or both dental arches',
      'Patients requiring partial tooth replacement where bridging is unsuitable',
      'Individuals seeking an economical, non-invasive restorative solution',
      'Patients transitioning towards implant-retained overdentures'
    ],
    considerations: 'An adjustment period is normal as facial muscles and oral tissues adapt to the new appliance. Periodic maintenance ensures long-term comfort.'
  },
  {
    id: 'veneers',
    name: 'Ceramic Veneers',
    tamilName: 'Veneers & Crowns (பல் முகப்பு சீரமைப்பு)',
    tagline: 'Ultra-thin aesthetic restorations designed for lasting smile harmony',
    image: '/images/treatments/veneers.jpg',
    alt: 'Handcrafted ultra-thin ceramic dental veneer shell',
    shortDesc: 'Thin porcelain shells bonded to the front surface of front teeth to refine shape, shade, and contour.',
    overview: 'Dental veneers are custom-crafted ceramic or composite restorations bonded directly to the visible frontal surface of anterior teeth. They provide a conservative cosmetic treatment for teeth with persistent discoloration, minor chipping, irregular proportions, or superficial surface enamel wear.',
    involves: [
      'Smile analysis, shade matching, and conservative enamel preparation',
      'Precision impressions to communicate exact anatomical contours to the laboratory',
      'Placement of temporary veneers while the final ceramics are handcrafted',
      'Permanent resin-bonding of individual veneers with meticulous bite verification'
    ],
    suitability: [
      'Permanent tooth discoloration that does not respond to conventional cleaning',
      'Chipped, worn, or slightly uneven incisal tooth edges',
      'Small interdental gaps in front teeth where orthodontics is not preferred',
      'Teeth with minor surface irregularities or developmental enamel flaws'
    ],
    considerations: 'Veneers require conservative preparation of the natural enamel surface. They are not recommended for teeth with severe structural damage or heavy bruxism without protection.'
  },
  {
    id: 'crowns',
    name: 'Dental Crowns',
    tamilName: 'Veneers & Crowns (பல் தொப்பி பாதுகாப்பு)',
    tagline: 'Full-coverage restorative caps that preserve and reinforce compromised teeth',
    image: '/images/treatments/crowns.jpg',
    alt: 'Porcelain and zirconia dental crowns resting on clinical die model',
    shortDesc: 'Custom full-coverage caps that restore structural strength, anatomical shape, and bite function.',
    overview: 'A dental crown encapsulates the entire visible portion of a compromised tooth above the gum line. Frequently indicated following root canal therapy, large dental restorations, or substantial tooth fractures, a crown restores normal chewing capability and protects against future tooth breakdown.',
    involves: [
      'Careful tooth preparation to create space for the full-coverage restoration',
      'High-precision impression capturing margins and relation to opposing bite',
      'Temporary crown placement to safeguard the prepared tooth between visits',
      'Definitive cementation of the custom zirconia, porcelain, or ceramic crown'
    ],
    suitability: [
      'Teeth treated with root canal therapy needing structural reinforcement',
      'Severely decayed or fractured teeth with insufficient remaining natural enamel',
      'Restoration of teeth with extensive, failing composite or amalgam fillings',
      'Final aesthetic and functional completion of dental implant restorations'
    ],
    considerations: 'Crowns provide excellent longevity when paired with consistent oral hygiene and routine dental examinations. The appropriate material is selected based on bite forces and cosmetic needs.'
  }
];
