import type { Metadata } from "next";
import { FileDown } from "lucide-react";

import { UploadMock } from "@/components/forms/upload-mock";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Patient Forms | PearlSmile Dental Clinic",
  "Download registration and consent forms, and use a mock secure upload interface for records.",
  "/forms",
);

const formDownloads = [
  { name: "New Patient Registration Form", href: "#" },
  { name: "Treatment Consent Form", href: "#" },
  { name: "Medical History Form", href: "#" },
];

export default function FormsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Patient Forms"
        title="Prepare before your visit"
        description="Download forms ahead of time and use our upload mock UI for insurance card or records preview."
      />
      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Downloads</h2>
          <div className="mt-4 space-y-3">
            {formDownloads.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700"
              >
                <span>{item.name}</span>
                <FileDown className="h-4 w-4 text-cyan-700" />
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Upload records (mock)</h2>
          <p className="mt-2 text-sm text-slate-600">
            Upload interface sample for insurance card, previous x-rays, or referral letters.
          </p>
          <div className="mt-4">
            <UploadMock />
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Privacy note: This page demonstrates interface flow only and does not store medical files.
          </p>
        </div>
      </section>
    </main>
  );
}
