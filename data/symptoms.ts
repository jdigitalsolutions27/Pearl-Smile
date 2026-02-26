import type { Concern } from "@/lib/types";

export const symptomRecommendations: Record<
  Concern,
  { title: string; recommendedSlugs: string[]; guidance: string }
> = {
  toothache: {
    title: "Toothache",
    recommendedSlugs: [
      "emergency-dentistry",
      "consultation-checkup",
      "root-canal-treatment",
    ],
    guidance:
      "Tooth pain may have different causes. A clinical exam helps determine the safest next step.",
  },
  "bleeding-gums": {
    title: "Bleeding Gums",
    recommendedSlugs: ["gum-treatment", "dental-cleaning", "consultation-checkup"],
    guidance:
      "Persistent gum bleeding should be assessed for inflammation and oral hygiene support planning.",
  },
  "sensitive-teeth": {
    title: "Sensitive Teeth",
    recommendedSlugs: ["consultation-checkup", "tooth-filling", "night-guard"],
    guidance:
      "Sensitivity can come from multiple factors. Your dentist can evaluate causes and treatment options.",
  },
  "missing-tooth": {
    title: "Missing Tooth",
    recommendedSlugs: ["dental-implants", "dental-crown-bridge", "dentures"],
    guidance:
      "Replacement options vary by health status, budget, and long-term function goals.",
  },
  "crooked-teeth": {
    title: "Crooked Teeth",
    recommendedSlugs: ["braces-orthodontics", "clear-aligners", "consultation-checkup"],
    guidance:
      "Orthodontic suitability depends on bite relationships, crowding level, and treatment goals.",
  },
  stains: {
    title: "Tooth Stains",
    recommendedSlugs: ["teeth-whitening", "dental-cleaning", "veneers"],
    guidance:
      "Staining type and enamel condition influence cosmetic treatment choices.",
  },
};
