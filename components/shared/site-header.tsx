"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Menu, PhoneCall } from "lucide-react";

import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { makeWhatsAppUrl } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Dentists" },
  { href: "/gallery", label: "Smile Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const whatsappUrl = makeWhatsAppUrl(
    business.whatsappRaw,
    "Hi PearlSmile Dental Clinic, I need help with an emergency toothache.",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="hidden border-b border-slate-100 bg-slate-50 xl:block">
        <div className="container flex h-10 items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <PhoneCall className="h-3.5 w-3.5 text-primary" />
              {business.phoneDisplay}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {business.address}, {business.city}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 text-primary" />
              Mon-Sat | 9:00 AM - 6:00 PM
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white transition hover:bg-emerald-700"
          >
            Emergency toothache? WhatsApp
          </a>
        </div>
      </div>
      <div className="container flex h-16 items-center justify-between sm:h-[72px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="PearlSmile Dental Clinic logo"
            width={220}
            height={64}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/booking">Book Appointment</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
