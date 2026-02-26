import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/data/services";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SafeImage } from "@/components/shared/safe-image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return buildMetadata("Service Not Found | PearlSmile", "Service details unavailable.");
  return buildMetadata(
    `${service.name} | PearlSmile Dental Clinic`,
    service.shortDescription,
    `/services/${service.slug}`,
  );
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="border-b border-slate-200 bg-white py-14">
        <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge>{service.category}</Badge>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">{service.name}</h1>
            <p className="text-base text-slate-600">{service.overview}</p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-700">
              <span>
                <strong>Duration:</strong> {service.duration}
              </span>
              <span>
                <strong>Starting range:</strong> {service.priceRange}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Final treatment recommendations and pricing are confirmed after clinical assessment.
            </p>
            <Button asChild>
              <Link href={`/booking?service=${service.slug}`}>Book consultation</Link>
            </Button>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60">
            <SafeImage
              src={service.heroImage}
              alt={service.name}
              fill
              className="object-cover"
              fallbackSrc="/images/placeholders/service.svg"
            />
          </div>
        </div>
      </section>

      <section className="container grid gap-8 py-12 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {service.whoItsFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Benefits</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {service.benefits.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Procedure overview</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-2">
            {service.steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  Step {index + 1}
                </span>
                <p className="mt-2">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Aftercare tips (general guidance)</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {service.aftercare.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Aftercare varies by case. Always follow your dentist’s personalized instructions.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">Service FAQs</h2>
        <FaqAccordion items={service.faqs} />
      </section>
    </main>
  );
}
