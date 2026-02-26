import { CircleCheck } from "lucide-react";

import { pricingDisclaimers, pricingPackages, pricingRanges } from "@/data/pricing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingCards() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        {pricingRanges.map((item) => (
          <Card key={item.service} className="border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{item.service}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-cyan-700">{item.range}</p>
              <p className="mt-2 text-sm text-slate-600">{item.notes}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {pricingPackages.map((pack) => (
          <Card key={pack.name} className="border-cyan-100 bg-gradient-to-b from-cyan-50 to-white">
            <CardHeader>
              <CardTitle className="text-lg">{pack.name}</CardTitle>
              <p className="text-sm text-slate-600">{pack.subtitle}</p>
              <p className="text-2xl font-semibold text-slate-900">{pack.price}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              {pack.features.map((feature) => (
                <p key={feature} className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <CircleCheck className="h-4 w-4 text-emerald-600" />
                  {feature}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        {pricingDisclaimers.map((line) => (
          <p key={line} className="mb-1 last:mb-0">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
