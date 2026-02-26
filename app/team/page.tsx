import type { Metadata } from "next";

import { dentists } from "@/data/dentists";
import { DentistCard } from "@/components/shared/dentist-card";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Our Dentists | PearlSmile Dental Clinic",
  "Meet licensed dentists and specialists in general, cosmetic, orthodontic, and surgical dental care.",
  "/team",
);

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Dentists"
        title="Clinical expertise with patient-centered communication"
        description="Meet the team behind our clean, safe, and gentle care philosophy."
      />
      <section className="container py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dentists.map((dentist) => (
            <DentistCard key={dentist.id} dentist={dentist} />
          ))}
        </div>
      </section>
    </main>
  );
}
