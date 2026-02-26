import type { Metadata } from "next";

import { BookingForm } from "@/components/booking/booking-form";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Book Appointment | PearlSmile Dental Clinic",
  "Premium multi-step dental appointment booking with dentist choice, time slots, and instant reference number.",
  "/booking",
);

interface BookingPageProps {
  searchParams: {
    service?: string;
    dentist?: string;
    date?: string;
    time?: string;
    name?: string;
    phone?: string;
  };
}

export default function BookingPage({ searchParams }: BookingPageProps) {
  return (
    <main>
      <PageHero
        eyebrow="Book Appointment"
        title="Premium scheduling experience"
        description="Choose service, dentist, preferred time, and submit in one guided flow."
      />
      <section className="container py-12">
        <BookingForm
          defaults={{
            serviceOrConcern: searchParams.service,
            dentistId: searchParams.dentist,
            date: searchParams.date,
            time: searchParams.time,
            patientName: searchParams.name,
            phone: searchParams.phone,
          }}
        />
      </section>
    </main>
  );
}
