import type { BusinessInfo } from "@/lib/types";

export const business: BusinessInfo = {
  name: "PearlSmile Dental Clinic",
  tagline: "Gentle Care. Confident Smiles.",
  address: "125 Harbor View Avenue, Suite 210",
  city: "San Diego, CA 92101",
  phoneDisplay: "(619) 555-0148",
  phoneRaw: "16195550148",
  whatsappRaw: "16195550148",
  email: "care@pearlsmiledental.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=San%20Diego%20Dental%20Clinic&output=embed",
  mapDirectionsUrl: "https://maps.google.com/?q=San+Diego+Dental+Clinic",
  emergencyText: "Emergency toothache? Chat with our team now.",
  hours: [
    { day: "Monday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "3:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const trustBadges = [
  "Trusted by families",
  "Modern equipment",
  "Strict hygiene standards",
];

export const clinicImages = {
  hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
  interior:
    "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1400&q=80",
  consultation:
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80",
  sterilization:
    "https://images.unsplash.com/photo-1588776814546-bcf5ff9f2f45?auto=format&fit=crop&w=1400&q=80",
  smile: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
  beforeAfter:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
};

export const concernOptions = [
  { label: "Toothache", value: "toothache" },
  { label: "Bleeding gums", value: "bleeding-gums" },
  { label: "Sensitive teeth", value: "sensitive-teeth" },
  { label: "Missing tooth", value: "missing-tooth" },
  { label: "Crooked teeth", value: "crooked-teeth" },
  { label: "Tooth stains", value: "stains" },
];

export const timelineSteps = [
  {
    title: "Consultation",
    description:
      "We discuss your concerns, comfort preferences, and goals in a calm one-to-one setting.",
  },
  {
    title: "X-ray / Diagnosis",
    description:
      "Digital scans and exam findings help your dentist understand your current oral health.",
  },
  {
    title: "Treatment Plan",
    description:
      "You get clear options, expected timelines, and transparent starting price ranges.",
  },
  {
    title: "Procedure",
    description:
      "Care is delivered with a gentle approach, modern tools, and strict sterilization protocols.",
  },
  {
    title: "Aftercare",
    description:
      "We share practical home-care steps and warning signs to watch while healing.",
  },
  {
    title: "Follow-up",
    description:
      "Progress checks make sure your recovery and long-term smile goals stay on track.",
  },
];
