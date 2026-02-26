import type { Metadata } from "next";

import { GalleryLightbox } from "@/components/shared/gallery-lightbox";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Smile Gallery | PearlSmile Dental Clinic",
  "Explore sample smile transformations and treatment visuals across whitening, braces, cleaning, and restorative care.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Smile Gallery"
        title="Before/after style treatment gallery"
        description="Sample visuals only. Outcomes vary by patient and treatment suitability."
      />
      <section className="container py-12">
        <GalleryLightbox />
      </section>
    </main>
  );
}
