"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="space-y-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((review) => (
            <div key={review.id} className="min-w-0 flex-[0_0_100%] pr-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <Card className="h-full border-slate-200">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`${review.id}-${index}`}
                        className={`h-4 w-4 ${index < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700">&quot;{review.quote}&quot;</p>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500">
                      {review.service} • {review.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Button type="button" variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
