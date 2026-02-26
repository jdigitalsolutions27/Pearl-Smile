import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { business } from "@/data/business";

const footerLinks = [
  { href: "/patient-guide", label: "Patient Guide" },
  { href: "/forms", label: "Patient Forms" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing Transparency" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Dental Tips" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 pb-28 pt-14 text-slate-200 md:pb-10">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-lg font-semibold">{business.name}</p>
          <p className="max-w-xs text-sm text-slate-400">
            Modern dentistry with patient-first care, strict hygiene, and clear treatment communication.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Visit</h3>
          <p className="text-sm">{business.address}</p>
          <p className="text-sm">{business.city}</p>
          <p className="inline-flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="h-4 w-4 text-cyan-400" />
            <a href={business.mapDirectionsUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Contact</h3>
          <p className="inline-flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-cyan-400" />
            <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
          </p>
          <p className="inline-flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-cyan-400" />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Explore</h3>
          <div className="grid gap-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-3">
            <a href={business.socialLinks.instagram} aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={business.socialLinks.facebook} aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={business.socialLinks.youtube} aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
