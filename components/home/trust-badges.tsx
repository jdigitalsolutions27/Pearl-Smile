"use client";

import { ShieldCheck, Sparkles, Users } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const badges = [
  {
    label: "Trusted by families",
    detail: "Long-term patient relationships through clear, respectful care.",
    icon: Users,
  },
  {
    label: "Modern equipment",
    detail: "Digital diagnostics and contemporary treatment workflows.",
    icon: Sparkles,
  },
  {
    label: "Hygiene standards",
    detail: "Strict sterilization and clinic-grade infection control protocols.",
    icon: ShieldCheck,
  },
];

export function TrustBadges() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-3">
        {badges.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <div className="inline-flex cursor-default items-center gap-2 rounded-full border border-cyan-100 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <item.icon className="h-4 w-4 text-cyan-600" />
                {item.label}
              </div>
            </TooltipTrigger>
            <TooltipContent>{item.detail}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
