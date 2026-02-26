import type { Metadata } from "next";
import Link from "next/link";

import { testimonials } from "@/data/testimonials";
import { ReviewsCarousel } from "@/components/shared/reviews-carousel";
import { StoryCards } from "@/components/shared/story-cards";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata(
  "Reviews & Patient Stories | PearlSmile Dental Clinic",
  "Read patient reviews, ratings, and stories about treatment experiences at PearlSmile Dental Clinic.",
  "/reviews",
);

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Social Proof"
        title="Patient reviews and stories that build confidence"
        description="Feedback-focused care with clear communication, hygiene standards, and gentle treatment experiences."
      />
      <section className="container py-12">
        <ReviewsCarousel />
      </section>
      <section className="container pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} className="border-slate-200">
              <CardContent className="space-y-3 p-6">
                <p className="text-sm text-slate-700">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="container pb-20">
        <StoryCards />
        <div className="mt-8">
          <Button asChild>
            <Link href="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
