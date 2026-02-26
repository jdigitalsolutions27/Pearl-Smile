import { format } from "date-fns";

export const mockTimeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];

export function buildBookingReference() {
  const stamp = Date.now().toString().slice(-6);
  const rand = Math.floor(Math.random() * 900 + 100);
  return `PS-${stamp}-${rand}`;
}

export function createIcsFile(params: {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}) {
  const startDate = new Date(`${params.date} ${params.time}`);
  const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);
  const toIcs = (value: Date) => format(value, "yyyyMMdd'T'HHmmss");
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PearlSmile Dental Clinic//Booking//EN
BEGIN:VEVENT
UID:${crypto.randomUUID()}
DTSTAMP:${toIcs(new Date())}
DTSTART:${toIcs(startDate)}
DTEND:${toIcs(endDate)}
SUMMARY:${params.title}
DESCRIPTION:${params.description}
LOCATION:${params.location}
END:VEVENT
END:VCALENDAR`;
}
