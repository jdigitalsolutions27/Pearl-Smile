import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-14">
      <div className="container space-y-5">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base text-slate-600">{description}</p>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
