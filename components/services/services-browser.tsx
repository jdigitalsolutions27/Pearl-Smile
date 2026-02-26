"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { services } from "@/data/services";
import { concernOptions } from "@/data/business";
import { symptomRecommendations } from "@/data/symptoms";
import { ServiceCard } from "@/components/shared/service-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categoryOptions = [
  "All",
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Oral Surgery",
  "Pediatric Dentistry",
] as const;

export function ServicesBrowser() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof categoryOptions)[number]>("All");

  const filtered = useMemo(() => {
    return services.filter((service) => {
      const categoryMatch = category === "All" || service.category === category;
      const searchMatch =
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [search, category]);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Input
          placeholder="Search service, symptom, or treatment"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search services"
        />
        <Tabs value={category} onValueChange={(value) => setCategory(value as (typeof categoryOptions)[number])}>
          <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
            {categoryOptions.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="rounded-full border border-slate-200 data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Best for your concern</h2>
        <p className="mt-2 text-sm text-slate-600">
          Choose your concern to see services often discussed during consultations.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {concernOptions.map((concern) => (
            <div key={concern.value} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{concern.label}</p>
              <div className="mt-2 space-y-1">
                {symptomRecommendations[concern.value as keyof typeof symptomRecommendations].recommendedSlugs.map((slug) => {
                  const matched = services.find((service) => service.slug === slug);
                  if (!matched) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="block text-xs text-cyan-700 hover:underline"
                    >
                      {matched.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
