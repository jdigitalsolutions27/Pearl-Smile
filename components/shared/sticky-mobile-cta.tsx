"use client";

import Link from "next/link";
import { CalendarPlus, MessageCircleMore, PhoneCall } from "lucide-react";

import { business } from "@/data/business";
import { makeWhatsAppUrl } from "@/lib/utils";

export function StickyMobileCTA() {
  const whatsappUrl = makeWhatsAppUrl(
    business.whatsappRaw,
    "Hi PearlSmile Dental Clinic, I would like to ask about booking an appointment.",
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={`tel:${business.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-xs font-semibold text-white"
          aria-label="Call clinic"
        >
          <PhoneCall className="h-4 w-4" /> Call
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-xs font-semibold text-white"
          aria-label="WhatsApp clinic"
        >
          <MessageCircleMore className="h-4 w-4" /> WhatsApp
        </a>
        <Link
          href="/booking"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3 py-3 text-xs font-semibold text-white"
          aria-label="Book appointment"
        >
          <CalendarPlus className="h-4 w-4" /> Book
        </Link>
      </div>
    </div>
  );
}
