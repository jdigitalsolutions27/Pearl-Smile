"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

import { concernOptions } from "@/data/business";
import { services } from "@/data/services";
import { symptomRecommendations } from "@/data/symptoms";
import type { Concern } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SymptomChecker() {
  const [selectedConcern, setSelectedConcern] = useState<Concern>("toothache");

  const recommendedServices = useMemo(() => {
    const matchedSlugs = symptomRecommendations[selectedConcern].recommendedSlugs;
    return services.filter((service) => matchedSlugs.includes(service.slug));
  }, [selectedConcern]);

  return (
    <Card className="overflow-hidden border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-teal-50 shadow-lg shadow-cyan-100/50">
      <CardHeader>
        <CardTitle className="text-2xl">Symptom Checker</CardTitle>
        <p className="text-sm text-slate-600">
          Select what you are feeling, and we&apos;ll suggest services to discuss with a dentist.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {concernOptions.map((concern) => (
            <button
              key={concern.value}
              onClick={() => setSelectedConcern(concern.value as Concern)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                selectedConcern === concern.value
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300"
              }`}
              aria-pressed={selectedConcern === concern.value}
              type="button"
            >
              {concern.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="text-base font-semibold text-slate-900">
            Recommended for {symptomRecommendations[selectedConcern].title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {symptomRecommendations[selectedConcern].guidance}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {recommendedServices.map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.slug}`}
                className="group rounded-xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="mt-1 text-xs text-slate-500">{item.duration}</p>
                <p className="mt-2 inline-flex items-center text-xs text-cyan-700">
                  Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 p-4 md:flex-row md:items-center">
            <p className="inline-flex items-start gap-2 text-xs text-amber-900">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              This tool is not medical advice or diagnosis. Please consult a licensed dentist.
            </p>
            <Button asChild size="sm">
              <Link href={`/booking?service=${selectedConcern}`}>Book Consultation</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
