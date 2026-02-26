import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import type { Metadata } from "next";

import { clinicImages, business } from "@/data/business";
import { featuredServiceSlugs, services } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { BookingWidget } from "@/components/booking/booking-widget";
import { DentistsCarousel } from "@/components/home/dentists-carousel";
import { SymptomChecker } from "@/components/home/symptom-checker";
import { TreatmentTimeline } from "@/components/home/treatment-timeline";
import { TrustBadges } from "@/components/home/trust-badges";
import { AnimatedSection } from "@/components/shared/animated-section";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SafeImage } from "@/components/shared/safe-image";
import { PricingCards } from "@/components/shared/pricing-cards";
import { ReviewsCarousel } from "@/components/shared/reviews-carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { StoryCards } from "@/components/shared/story-cards";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

const featuredServices = services.filter((item) => featuredServiceSlugs.includes(item.slug));

export const metadata: Metadata = buildMetadata(
  "PearlSmile Dental Clinic | Gentle Care. Confident Smiles.",
  "Modern premium dental care with transparent booking, trust-first treatment journey, and patient-centered comfort.",
  "/",
);

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-slate-50 to-white py-12 sm:py-16">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="font-display text-3xl font-medium italic text-cyan-700 sm:text-4xl">PearlSmile Dental Clinic</p>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Gentle Care. <span className="text-cyan-700">Confident Smiles.</span>
            </h1>
            <p className="max-w-lg text-base text-slate-600">
              Modern dentistry with patient-first care and strict hygiene. Experience transparent planning,
              anxiety-friendly support, and premium comfort from booking to follow-up.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/booking">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <TrustBadges />
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/70 shadow-2xl shadow-cyan-100 sm:h-[420px] lg:h-[520px]">
            <SafeImage
              src={clinicImages.hero}
              alt="Bright premium dental clinic interior"
              fill
              priority
              className="object-cover"
              fallbackSrc="/images/placeholders/clinic.svg"
            />
          </div>
        </div>
      </section>

      <section className="container -mt-10 relative z-10">
        <BookingWidget />
      </section>

      <AnimatedSection className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow="Why Choose PearlSmile"
          title="A trust-first clinic experience from your first message"
          description="Clean environment, licensed dentists, modern workflows, and compassionate communication."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Licensed Dentists",
            "Sterilization Standards",
            "Modern Equipment",
            "Friendly Care",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-cyan-700" />
              <p className="mt-3 text-sm font-semibold text-slate-900">{item}</p>
              <p className="mt-1 text-xs text-slate-600">
                Designed to support safe treatment and clear patient confidence.
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Featured Services"
          title="Essential treatments patients ask for most"
          description="Sample treatment ranges are shown for transparency. Final recommendations require consultation."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Smart Guidance"
          title="Not sure what to book? Start with our symptom checker."
          description="Get suggested service types to discuss with your dentist."
        />
        <div className="mt-8" id="symptom-checker">
          <SymptomChecker />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Treatment Journey"
          title="Know what happens at every stage"
          description="Consultation to follow-up, designed to feel calm, clear, and predictable."
        />
        <div className="mt-8">
          <TreatmentTimeline />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Meet The Dentists"
          title="Experienced professionals with a gentle approach"
          description="Choose your preferred dentist or ask us to match based on your concern."
        />
        <div className="mt-8">
          <DentistsCarousel />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-20">
        <SectionHeading
          eyebrow="Smile Gallery"
          title="Before and after style showcase"
          description="Sample gallery for whitening, braces, cleaning, and restorative care."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.slice(0, 4).map((item) => (
            <div key={item.id} className="group relative h-64 overflow-hidden rounded-2xl border border-slate-200">
              <SafeImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition group-hover:scale-105"
                fallbackSrc="/images/placeholders/smile.svg"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-xs font-semibold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-6">
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="No hidden-fee style communication"
          description="Pricing shown as starting ranges. Final fee depends on examination and treatment plan."
        />
        <div className="mt-8">
          <PricingCards />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Reviews & Stories"
          title="Real patient voices and trusted outcomes"
          description={`Rated highly by families and professionals. ${testimonials.length}+ sample testimonials.`}
        />
        <div className="mt-8">
          <ReviewsCarousel />
        </div>
        <div className="mt-8">
          <StoryCards />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading eyebrow="Anxiety-Friendly Care" title="Nervous about dental visits?" />
        <div className="mt-6 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-teal-50 p-6 sm:p-8">
          <p className="max-w-2xl text-slate-700">
            We use a gentle pace, clear explanations, and planned breaks so you feel informed and in control.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`https://wa.me/${business.whatsappRaw}`} target="_blank" rel="noreferrer">
                Message us - we&apos;ll guide you
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/patient-guide">See patient guide</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading eyebrow="FAQs" title="Common questions before booking" />
        <div className="mt-8">
          <FaqAccordion items={faqs.slice(0, 10)} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container pb-16 sm:pb-20">
        <SectionHeading eyebrow="Location" title="Easy to reach, calm clinical space" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              src={business.mapEmbedUrl}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PearlSmile location map"
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">{business.name}</h3>
            <p className="mt-2 text-sm text-slate-600">
              {business.address}, {business.city}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-700">
              <MapPin className="h-4 w-4" />
              <a href={business.mapDirectionsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">
                Contact clinic <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <section className="container pb-16 sm:pb-20">
        <div className="rounded-3xl bg-slate-900 p-6 text-white sm:p-10">
          <p className="font-display text-2xl italic text-cyan-200 sm:text-3xl">Book your visit today.</p>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold sm:text-3xl">Clean, safe, and patient-first dental care.</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            Start with a consultation and receive a clear plan designed around comfort and long-term oral health.
          </p>
          <Button asChild className="mt-6 bg-cyan-500 text-slate-900 hover:bg-cyan-400">
            <Link href="/booking">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
