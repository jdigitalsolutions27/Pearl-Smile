import type { Metadata } from "next";
import Link from "next/link";

import { ServicesBrowser } from "@/components/services/services-browser";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Dental Services | PearlSmile Dental Clinic",
  "Browse general dentistry, cosmetic treatments, orthodontics, oral surgery, and family dental care services.",
  "/services",
);

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Comprehensive dental care with transparent treatment guidance"
        description="Filter by category, search by concern, and compare service details with duration and sample pricing ranges."
        actions={
          <Button asChild>
            <Link href="/booking">Book Consultation</Link>
          </Button>
        }
      />
      <section className="container py-12">
        <ServicesBrowser />
      </section>
    </main>
  );
}
