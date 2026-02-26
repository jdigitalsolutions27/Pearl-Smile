import { NextResponse } from "next/server";
import { z } from "zod";

import { buildBookingReference } from "@/lib/booking";
import type { BookingRecord } from "@/lib/types";

const bookingInputSchema = z.object({
  serviceOrConcern: z.string().min(1),
  dentistId: z.string().optional(),
  date: z.string().min(1),
  time: z.string().min(1),
  patientName: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  ageGroup: z.string().min(1),
  notes: z.string().optional(),
  painLevel: z.number().optional(),
  imageFile: z.string().optional(),
  consent: z.boolean(),
});

const bookingStore: BookingRecord[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingInputSchema.parse(body);

    const reference = buildBookingReference();
    const booking: BookingRecord = {
      reference,
      serviceOrConcern: parsed.serviceOrConcern,
      dentistId: parsed.dentistId,
      date: parsed.date,
      time: parsed.time,
      patientName: parsed.patientName,
      phone: parsed.phone,
      email: parsed.email,
      ageGroup: parsed.ageGroup,
      notes: parsed.notes,
      painLevel: parsed.painLevel,
      createdAt: new Date().toISOString(),
    };

    bookingStore.unshift(booking);

    return NextResponse.json({
      success: true,
      reference,
      booking,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid booking payload.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    total: bookingStore.length,
    bookings: bookingStore,
  });
}
