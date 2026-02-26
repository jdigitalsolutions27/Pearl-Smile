"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck2, CircleAlert, MessageCircleMore } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { business, concernOptions } from "@/data/business";
import { dentists } from "@/data/dentists";
import { services } from "@/data/services";
import { mockTimeSlots, createIcsFile } from "@/lib/booking";
import { makeWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const bookingSchema = z.object({
  serviceOrConcern: z.string().min(1, "Please select a service or concern"),
  dentistId: z.string().optional(),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  patientName: z.string().min(2, "Enter your full name"),
  phone: z.string().min(8, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  ageGroup: z.string().min(1, "Select age group"),
  notes: z.string().optional(),
  painLevel: z.number().min(0).max(10).optional(),
  imageFile: z.string().optional(),
  consent: z.boolean().refine((value) => value, {
    message: "You must agree to the privacy consent to continue.",
  }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const ageGroups = ["Child", "Teen", "Adult", "Senior"];

const steps = [
  "Choose service",
  "Choose dentist",
  "Pick date/time",
  "Patient details",
  "Notes & comfort",
  "Consent",
];

const stepFieldMap: (keyof BookingFormValues)[][] = [
  ["serviceOrConcern"],
  ["dentistId"],
  ["date", "time"],
  ["patientName", "phone", "email", "ageGroup"],
  ["notes", "painLevel", "imageFile"],
  ["consent"],
];

interface BookingFormProps {
  defaults?: Partial<BookingFormValues>;
}

export function BookingForm({ defaults }: BookingFormProps) {
  const [step, setStep] = useState(0);
  const [reference, setReference] = useState("");
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(null);
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceOrConcern: defaults?.serviceOrConcern ?? "",
      dentistId: defaults?.dentistId ?? "",
      date: defaults?.date ?? "",
      time: defaults?.time ?? "",
      patientName: defaults?.patientName ?? "",
      phone: defaults?.phone ?? "",
      email: defaults?.email ?? "",
      ageGroup: defaults?.ageGroup ?? "",
      notes: "",
      painLevel: 3,
      imageFile: "",
      consent: false,
    },
    mode: "onChange",
  });

  const selectedService = form.watch("serviceOrConcern");
  const selectedDentist = form.watch("dentistId");
  const selectedTime = form.watch("time");
  const painLevel = form.watch("painLevel");

  const chosenService = services.find((item) => item.slug === selectedService)?.name ?? selectedService;

  const whatsappMessage = submittedData
    ? `Hi PearlSmile Dental Clinic, my booking reference is ${reference}. Name: ${submittedData.patientName}, Date: ${submittedData.date}, Time: ${submittedData.time}.`
    : "";

  async function handleNext() {
    if (step === 1) {
      setStep((prev) => prev + 1);
      return;
    }
    const valid = await form.trigger(stepFieldMap[step], { shouldFocus: true });
    if (valid) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  }

  async function onSubmit(values: BookingFormValues) {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      toast({
        variant: "destructive",
        title: "Booking failed",
        description: "Please retry or message our team on WhatsApp.",
      });
      return;
    }

    const payload = (await response.json()) as { reference: string };
    setReference(payload.reference);
    setSubmittedData(values);
    toast({
      title: "Booking request sent",
      description: `Reference number: ${payload.reference}`,
    });
  }

  function handleDownloadIcs() {
    if (!submittedData || !reference) return;
    const icsString = createIcsFile({
      title: `Dental Appointment - ${business.name}`,
      date: submittedData.date,
      time: submittedData.time,
      description: `Booking reference: ${reference}`,
      location: `${business.address}, ${business.city}`,
    });
    const blob = new Blob([icsString], { type: "text/calendar;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${reference}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (submittedData) {
    return (
      <Card className="border-cyan-200">
        <CardHeader>
          <CardTitle className="text-2xl">Booking Request Confirmed</CardTitle>
          <p className="text-sm text-slate-600">
            Thank you, {submittedData.patientName}. Your reference number is:
          </p>
          <p className="rounded-xl bg-cyan-50 px-4 py-3 text-lg font-semibold text-cyan-700">
            {reference}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-900">What happens next</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <p className="text-sm text-slate-600">1. Our team reviews your request.</p>
              <p className="text-sm text-slate-600">2. We confirm details by call or WhatsApp.</p>
              <p className="text-sm text-slate-600">3. You receive final appointment confirmation.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild>
              <a href={makeWhatsAppUrl(business.whatsappRaw, whatsappMessage)} target="_blank" rel="noreferrer">
                <MessageCircleMore className="mr-2 h-4 w-4" />
                Send on WhatsApp
              </a>
            </Button>
            <Button type="button" variant="outline" onClick={handleDownloadIcs}>
              <CalendarCheck2 className="mr-2 h-4 w-4" />
              Add to Calendar (.ics)
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-slate-200">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {steps.map((label, index) => (
            <div
              key={label}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                index === step
                  ? "bg-cyan-600 text-white"
                  : index < step
                    ? "bg-cyan-100 text-cyan-700"
                    : "bg-slate-100 text-slate-500"
              }`}
            >
              {index + 1}. {label}
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 0 ? (
          <div className="space-y-2">
            <Label htmlFor="serviceOrConcern">Service or concern</Label>
            <select
              id="serviceOrConcern"
              className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm"
              {...form.register("serviceOrConcern")}
              aria-invalid={!!form.formState.errors.serviceOrConcern}
            >
              <option value="">Choose your concern or service</option>
              <optgroup label="Concerns">
                {concernOptions.map((concern) => (
                  <option key={concern.value} value={concern.value}>
                    {concern.label}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Services">
                {services.map((service) => (
                  <option key={service.id} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </optgroup>
            </select>
            {form.formState.errors.serviceOrConcern ? (
              <p className="text-xs text-red-600">{form.formState.errors.serviceOrConcern.message}</p>
            ) : null}
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-3">
            <Label>Choose dentist (optional)</Label>
            <div className="grid gap-3 md:grid-cols-2">
              {dentists.map((dentist) => (
                <label
                  key={dentist.id}
                  className={`cursor-pointer rounded-xl border p-4 text-sm transition ${
                    selectedDentist === dentist.id
                      ? "border-cyan-500 bg-cyan-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <input type="radio" className="sr-only" value={dentist.id} {...form.register("dentistId")} />
                  <p className="font-semibold text-slate-900">{dentist.name}</p>
                  <p className="text-xs text-slate-600">{dentist.title}</p>
                </label>
              ))}
              <button
                type="button"
                onClick={() => form.setValue("dentistId", "")}
                className="rounded-xl border border-dashed border-slate-300 p-4 text-left text-sm text-slate-600"
              >
                No preference
              </button>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="date">Preferred date</Label>
                <Input id="date" type="date" {...form.register("date")} />
                {form.formState.errors.date ? (
                  <p className="mt-1 text-xs text-red-600">{form.formState.errors.date.message}</p>
                ) : null}
              </div>
              <div>
                <Label>Selected service</Label>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  {chosenService || "Not selected"}
                </div>
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Preferred time slot</Label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {mockTimeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => form.setValue("time", slot, { shouldValidate: true })}
                    className={`rounded-xl border px-3 py-2 text-sm ${
                      selectedTime === slot
                        ? "border-cyan-500 bg-cyan-500 text-white"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {form.formState.errors.time ? (
                <p className="mt-1 text-xs text-red-600">{form.formState.errors.time.message}</p>
              ) : null}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="patientName">Full name</Label>
              <Input id="patientName" {...form.register("patientName")} />
              {form.formState.errors.patientName ? (
                <p className="text-xs text-red-600">{form.formState.errors.patientName.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" {...form.register("phone")} />
              {form.formState.errors.phone ? (
                <p className="text-xs text-red-600">{form.formState.errors.phone.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email ? (
                <p className="text-xs text-red-600">{form.formState.errors.email.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ageGroup">Age group</Label>
              <select
                id="ageGroup"
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm"
                {...form.register("ageGroup")}
              >
                <option value="">Select age group</option>
                {ageGroups.map((ageGroup) => (
                  <option key={ageGroup} value={ageGroup}>
                    {ageGroup}
                  </option>
                ))}
              </select>
              {form.formState.errors.ageGroup ? (
                <p className="text-xs text-red-600">{form.formState.errors.ageGroup.message}</p>
              ) : null}
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Describe symptoms, preferences, or relevant details."
                {...form.register("notes")}
              />
            </div>
            <div>
              <Label htmlFor="painLevel" className="mb-2 block">
                Pain level (optional): {painLevel ?? 0}/10
              </Label>
              <Input id="painLevel" type="range" min={0} max={10} {...form.register("painLevel", { valueAsNumber: true })} />
            </div>
            <div>
              <Label htmlFor="imageFile" className="mb-2 block">
                Upload image (mock UI)
              </Label>
              <Input
                id="imageFile"
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  form.setValue("imageFile", file?.name ?? "");
                }}
              />
              <p className="mt-1 text-xs text-slate-500">Sample upload flow only. No file is transmitted.</p>
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="space-y-4">
            <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700">
              <input type="checkbox" className="mt-0.5 h-4 w-4" {...form.register("consent")} />
              I consent to be contacted regarding this appointment request and understand privacy terms.
            </label>
            {form.formState.errors.consent ? (
              <p className="inline-flex items-center gap-1 text-xs text-red-600">
                <CircleAlert className="h-3.5 w-3.5" />
                {form.formState.errors.consent.message}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={() => setStep((prev) => Math.max(0, prev - 1))} disabled={step === 0}>
            Back
          </Button>
          {step < steps.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Continue
            </Button>
          ) : (
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
              Submit Booking Request
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
