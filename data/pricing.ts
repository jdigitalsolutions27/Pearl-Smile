import type { PricingPackage, PricingRange } from "@/lib/types";

export const pricingRanges: PricingRange[] = [
  {
    service: "Consultation & Checkup",
    range: "₱50-₱120",
    notes: "Includes exam; imaging may be added if clinically required.",
  },
  {
    service: "Dental Cleaning",
    range: "₱90-₱180",
    notes: "Final fee depends on plaque level and gum condition.",
  },
  {
    service: "Tooth Filling",
    range: "₱120-₱260",
    notes: "Varies by cavity size and restoration complexity.",
  },
  {
    service: "Root Canal Treatment",
    range: "₱450-₱1,100",
    notes: "Depends on tooth type, infection severity, and restoration needs.",
  },
  {
    service: "Tooth Extraction",
    range: "₱180-₱450",
    notes: "Surgical complexity can affect total cost.",
  },
  {
    service: "Wisdom Tooth Removal",
    range: "₱250-₱900",
    notes: "Impaction level and anesthesia needs are factors.",
  },
  {
    service: "Teeth Whitening",
    range: "₱180-₱550",
    notes: "In-clinic and take-home options have different pricing.",
  },
  {
    service: "Braces / Orthodontics",
    range: "₱2,200-₱5,500",
    notes: "Based on treatment duration and case complexity.",
  },
  {
    service: "Clear Aligners",
    range: "₱2,000-₱4,800",
    notes: "Depends on number of trays and correction scope.",
  },
  {
    service: "Dental Implants",
    range: "₱1,900-₱4,200 per tooth",
    notes: "Bone condition, grafting, and prosthetic choices affect cost.",
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    name: "Starter Smile Care",
    subtitle: "For first-time and preventive patients",
    price: "Starting at ₱199",
    features: [
      "Consultation & oral assessment",
      "Professional cleaning",
      "Basic oral hygiene kit",
      "Personalized care recommendations",
    ],
  },
  {
    name: "Family Care",
    subtitle: "Flexible preventive bundle for households",
    price: "Starting at ₱499",
    features: [
      "Checkups for 2 adults + 1 child",
      "Routine cleaning sessions",
      "Family oral care guidance",
      "Priority booking support",
    ],
  },
  {
    name: "Whitening Boost",
    subtitle: "Aesthetic refresh package",
    price: "Starting at ₱349",
    features: [
      "Pre-whitening assessment",
      "Professional whitening session",
      "Post-treatment sensitivity guidance",
      "Shade maintenance tips",
    ],
  },
  {
    name: "Align & Confidence",
    subtitle: "Orthodontic planning starter",
    price: "Starting at ₱299",
    features: [
      "Orthodontic records and scans",
      "Treatment suitability consultation",
      "Plan options breakdown",
      "Estimated timeline review",
    ],
  },
];

export const pricingDisclaimers = [
  "All prices are shown in Philippine Peso (₱).",
  "All prices are sample ranges for website demonstration and may change without notice.",
  "Final treatment fees depend on clinical assessment, complexity, materials, and dentist recommendations.",
  "A licensed dentist must complete an in-person evaluation before confirming a definitive treatment plan.",
];

