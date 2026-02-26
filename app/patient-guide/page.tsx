import type { Metadata } from "next";

import { newPatientSteps, postTreatmentReminders, whatToBring } from "@/data/patientGuide";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Patient Guide | PearlSmile Dental Clinic",
  "New patient steps, insurance guidance, visit expectations, and post-treatment reminders.",
  "/patient-guide",
);

export default function PatientGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="Patient Guide"
        title="First time here? Here is what to expect."
        description="A clear patient journey from arrival and consultation to aftercare and follow-up."
      />
      <section className="container py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">New patient steps</h2>
            <ol className="mt-4 space-y-2 text-sm text-slate-600">
              {newPatientSteps.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">What to bring checklist</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {whatToBring.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Insurance / HMO</h2>
          <p className="mt-3 text-sm text-slate-600">
            Coverage policies differ by provider and plan. Please contact us with your policy details and our team
            will guide you on eligibility and documentation.
          </p>
          <p className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-900">
            If you are unsure about coverage: Ask us, and we&apos;ll help.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Post-treatment care reminders</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {postTreatmentReminders.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Kids policy</h2>
            <p className="mt-3 text-sm text-slate-600">
              Children are welcome with guardian supervision. We recommend shorter first visits for anxious kids and
              progressive familiarization with the dental environment.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Please inform us early if your child has special comfort or communication needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
