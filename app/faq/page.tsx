import type { Metadata } from "next";

import { faqs } from "@/data/faqs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Dental FAQ | PearlSmile Dental Clinic",
  "Find answers about appointments, treatment planning, safety, pricing, and aftercare.",
  "/faq",
);

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common patient questions"
        description="Booking, safety protocols, treatment planning, insurance guidance, and follow-up support."
      />
      <section className="container py-12">
        <FaqAccordion items={faqs} />
      </section>
    </main>
  );
}
