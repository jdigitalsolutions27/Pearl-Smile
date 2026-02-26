import type { Metadata } from "next";

import { business, clinicImages } from "@/data/business";
import { dentists } from "@/data/dentists";

const baseUrl = "https://pearlsmile-dental.vercel.app";

export function buildMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      images: [
        {
          url: clinicImages.hero,
          width: 1200,
          height: 630,
          alt: `${business.name} clinic interior`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        clinicImages.hero,
      ],
    },
  };
}

export function buildClinicJsonLd() {
  const physicianSchema = dentists.map((dentist) => ({
    "@type": "Dentist",
    name: dentist.name,
    description: dentist.title,
    image: dentist.image,
    medicalSpecialty: dentist.specialties,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        name: business.name,
        description: business.tagline,
        image: clinicImages.hero,
        telephone: business.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address,
          addressLocality: "San Diego",
          addressRegion: "CA",
          postalCode: "92101",
          addressCountry: "US",
        },
        openingHoursSpecification: business.hours
          .filter((slot) => slot.open !== "Closed")
          .map((slot) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: slot.day,
            opens: slot.open,
            closes: slot.close,
          })),
      },
      {
        "@type": "LocalBusiness",
        name: business.name,
        url: baseUrl,
        telephone: business.phoneDisplay,
        email: business.email,
        address: `${business.address}, ${business.city}`,
      },
      ...physicianSchema,
    ],
  };
}
