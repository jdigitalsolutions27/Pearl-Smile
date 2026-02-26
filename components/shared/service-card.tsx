import Link from "next/link";
import { Clock3 } from "lucide-react";

import type { Service } from "@/lib/types";
import { SafeImage } from "@/components/shared/safe-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group h-full overflow-hidden border-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100/60">
      <div className="relative h-48 overflow-hidden">
        <SafeImage
          src={service.cardImage}
          alt={service.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          fallbackSrc="/images/placeholders/service.svg"
        />
      </div>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{service.category}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Clock3 className="h-3.5 w-3.5" />
            {service.duration}
          </span>
        </div>
        <CardTitle>{service.name}</CardTitle>
        <p className="text-sm text-slate-600">{service.shortDescription}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-medium text-slate-700">Starting range: {service.priceRange}</p>
        <p className="text-xs text-slate-500">
          Final cost depends on clinical assessment and treatment plan.
        </p>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href={`/services/${service.slug}`}>Learn More</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={`/booking?service=${service.slug}`}>Book</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
