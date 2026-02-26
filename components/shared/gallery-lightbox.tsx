"use client";

import { useMemo, useState } from "react";

import { galleryItems } from "@/data/gallery";
import { SafeImage } from "@/components/shared/safe-image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const filterOptions = ["All", "Whitening", "Braces", "Cleaning", "Fillings", "General"] as const;

export function GalleryLightbox() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`rounded-full border px-4 py-2 text-sm ${
              option === activeFilter
                ? "border-cyan-500 bg-cyan-500 text-white"
                : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group relative mb-4 w-full overflow-hidden rounded-2xl border border-slate-200 text-left"
              >
                <div className="relative h-72 w-full">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    fallbackSrc="/images/placeholders/smile.svg"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-cyan-100">{item.note}</p>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none">
              <DialogTitle className="sr-only">{item.title}</DialogTitle>
              <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-slate-700">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  fallbackSrc="/images/placeholders/smile.svg"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <p className="text-sm text-slate-500">Results may vary per patient.</p>
    </div>
  );
}
