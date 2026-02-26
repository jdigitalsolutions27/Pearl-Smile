"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { dentists } from "@/data/dentists";
import { DentistCard } from "@/components/shared/dentist-card";
import { Button } from "@/components/ui/button";

export function DentistsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="space-y-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {dentists.map((dentist) => (
            <div key={dentist.id} className="min-w-0 flex-[0_0_100%] pr-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <DentistCard dentist={dentist} />
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
