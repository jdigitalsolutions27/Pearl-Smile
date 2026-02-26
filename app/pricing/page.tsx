import type { Metadata } from "next";
import Link from "next/link";

import { PricingCards } from "@/components/shared/pricing-cards";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata(
  "Pricing Guide | PearlSmile Dental Clinic",
  "Transparent starting ranges, care packages, and cost factors for dental treatment planning.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing Guide"
        title="Transparent pricing ranges and sample care packages"
        description="Our aim is clear communication. Final fees depend on examination, treatment complexity, and personalized planning."
        actions={
          <Button asChild>
            <Link href="/booking">Book for exact estimate</Link>
          </Button>
        }
      />
      <section className="container py-12">
        <PricingCards />
      </section>
      <section className="container pb-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">What affects final price?</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Clinical findings from exam and imaging",
              "Number of visits and procedure complexity",
              "Materials and restoration type",
              "Specialist involvement if required",
            ].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
