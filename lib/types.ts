export type ServiceCategory =
  | "General Dentistry"
  | "Cosmetic Dentistry"
  | "Orthodontics"
  | "Oral Surgery"
  | "Pediatric Dentistry";

export type Concern =
  | "toothache"
  | "bleeding-gums"
  | "sensitive-teeth"
  | "missing-tooth"
  | "crooked-teeth"
  | "stains";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  overview: string;
  duration: string;
  priceRange: string;
  bestFor: Concern[];
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
  benefits: string[];
  whoItsFor: string[];
  steps: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
}

export interface Dentist {
  id: string;
  name: string;
  title: string;
  image: string;
  credentials: string[];
  specialties: string[];
  languages: string[];
  bio: string;
  schedule: { day: string; hours: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  service: string;
  quote: string;
  date: string;
}

export interface PatientStory {
  id: string;
  name: string;
  challenge: string;
  journey: string;
  outcome: string;
  service: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Whitening" | "Braces" | "Cleaning" | "Fillings" | "General";
  image: string;
  note: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export interface PricingRange {
  service: string;
  range: string;
  notes: string;
}

export interface PricingPackage {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappRaw: string;
  email: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  hours: { day: string; open: string; close: string }[];
  emergencyText: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export interface BookingRecord {
  reference: string;
  serviceOrConcern: string;
  dentistId?: string;
  date: string;
  time: string;
  patientName: string;
  phone: string;
  email?: string;
  ageGroup: string;
  notes?: string;
  painLevel?: number;
  createdAt: string;
}
