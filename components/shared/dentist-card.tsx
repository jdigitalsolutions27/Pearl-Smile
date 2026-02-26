import Link from "next/link";
import { CalendarDays } from "lucide-react";

import type { Dentist } from "@/lib/types";
import { SafeImage } from "@/components/shared/safe-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DentistCardProps {
  dentist: Dentist;
}

export function DentistCard({ dentist }: DentistCardProps) {
  return (
    <Card className="h-full border-slate-200">
      <div className="relative h-60">
        <SafeImage
          src={dentist.image}
          alt={dentist.name}
          fill
          className="rounded-t-2xl object-cover"
          fallbackSrc="/images/placeholders/dentist.svg"
        />
      </div>
      <CardHeader>
        <CardTitle>{dentist.name}</CardTitle>
        <p className="text-sm font-medium text-cyan-700">{dentist.title}</p>
        <p className="text-sm text-slate-600">{dentist.bio}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {dentist.specialties.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            <CalendarDays className="h-3.5 w-3.5" />
            Availability
          </p>
          <div className="space-y-1">
            {dentist.schedule.map((slot) => (
              <p key={`${dentist.id}-${slot.day}`} className="text-xs text-slate-600">
                {slot.day}: {slot.hours}
              </p>
            ))}
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={`/booking?dentist=${dentist.id}`}>Book with this dentist</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
