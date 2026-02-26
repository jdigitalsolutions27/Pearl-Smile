import type { Metadata } from "next";
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

import { business } from "@/data/business";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Contact PearlSmile Dental Clinic",
  "Get in touch for appointments, directions, emergency support, and treatment inquiries.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to our clinic team"
        description="Reach us by phone, WhatsApp, or message form. We are here to guide your next visit."
      />
      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="inline-flex items-center gap-2 text-sm text-slate-700">
            <PhoneCall className="h-4 w-4 text-cyan-700" />
            <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-slate-700">
            <Mail className="h-4 w-4 text-cyan-700" />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-slate-700">
            <MapPin className="h-4 w-4 text-cyan-700" />
            {business.address}, {business.city}
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Clock3 className="h-4 w-4 text-cyan-700" />
              Clinic hours
            </p>
            {business.hours.map((slot) => (
              <p key={slot.day} className="text-xs text-slate-600">
                {slot.day}: {slot.open === "Closed" ? "Closed" : `${slot.open} - ${slot.close}`}
              </p>
            ))}
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <iframe
              src={business.mapEmbedUrl}
              className="h-72 w-full"
              loading="lazy"
              title="PearlSmile map"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
          <p className="mt-2 text-sm text-slate-600">For medical emergencies, call directly or visit emergency services.</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
