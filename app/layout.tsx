import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";
import { buildClinicJsonLd, buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { StickyMobileCTA } from "@/components/shared/sticky-mobile-cta";
import { PageTransition } from "@/components/shared/page-transition";
import { Toaster } from "@/components/ui/toaster";

const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = buildMetadata(
  "PearlSmile Dental Clinic | Gentle Care. Confident Smiles.",
  "Premium patient-first dental clinic website with modern care, trusted hygiene standards, and seamless appointment booking.",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = buildClinicJsonLd();

  return (
    <html lang="en">
      <body className={`${sansFont.variable} ${displayFont.variable} bg-slate-50 text-slate-900 antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <StickyMobileCTA />
        <Toaster />
      </body>
    </html>
  );
}
