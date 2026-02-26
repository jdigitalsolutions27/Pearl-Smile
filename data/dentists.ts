import type { Dentist } from "@/lib/types";

export const dentists: Dentist[] = [
  {
    id: "dr-isabel-chen",
    name: "Dr. Isabel Chen, DDS",
    title: "Lead General & Cosmetic Dentist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "DDS, University of California",
      "Advanced Aesthetic Dentistry Certification",
      "12+ years clinical experience",
    ],
    specialties: ["General", "Cosmetic", "Whitening"],
    languages: ["English", "Mandarin"],
    bio: "Known for precise smile design and calm patient communication.",
    schedule: [
      { day: "Mon", hours: "9:00 AM - 5:00 PM" },
      { day: "Tue", hours: "10:00 AM - 6:00 PM" },
      { day: "Thu", hours: "9:00 AM - 7:00 PM" },
    ],
  },
  {
    id: "dr-oliver-james",
    name: "Dr. Oliver James, DMD",
    title: "Endodontics & Restorative Care",
    image:
      "https://images.unsplash.com/photo-1612531385446-f7b6b8f8a466?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "DMD, Boston University",
      "Root Canal Excellence Program",
      "Member, American Association of Endodontists",
    ],
    specialties: ["Root Canal", "Fillings", "Pain Relief"],
    languages: ["English", "Spanish"],
    bio: "Focused on pain-conscious treatment with high-detail restorative planning.",
    schedule: [
      { day: "Mon", hours: "11:00 AM - 6:00 PM" },
      { day: "Wed", hours: "9:00 AM - 5:00 PM" },
      { day: "Fri", hours: "9:00 AM - 4:00 PM" },
    ],
  },
  {
    id: "dr-maya-patel",
    name: "Dr. Maya Patel, DDS",
    title: "Orthodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1594824475317-72f2f1dc4a2e?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "DDS, University of Michigan",
      "MS Orthodontics",
      "Invisalign Provider",
    ],
    specialties: ["Braces", "Aligners", "Bite Correction"],
    languages: ["English", "Hindi"],
    bio: "Designs orthodontic plans that balance aesthetics, function, and long-term stability.",
    schedule: [
      { day: "Tue", hours: "9:00 AM - 4:00 PM" },
      { day: "Thu", hours: "11:00 AM - 7:00 PM" },
      { day: "Sat", hours: "9:00 AM - 2:00 PM" },
    ],
  },
  {
    id: "dr-samuel-lee",
    name: "Dr. Samuel Lee, DMD",
    title: "Oral Surgery & Implant Dentistry",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "DMD, NYU College of Dentistry",
      "Implant Surgery Fellowship",
      "Certified in Surgical Sterilization Protocols",
    ],
    specialties: ["Extractions", "Implants", "Oral Surgery"],
    languages: ["English", "Korean"],
    bio: "Experienced in minimally invasive surgical workflows with recovery-focused care.",
    schedule: [
      { day: "Wed", hours: "10:00 AM - 6:00 PM" },
      { day: "Fri", hours: "10:00 AM - 6:00 PM" },
      { day: "Sat", hours: "10:00 AM - 3:00 PM" },
    ],
  },
  {
    id: "dr-nina-roberts",
    name: "Dr. Nina Roberts, DDS",
    title: "Family & Pediatric Dentistry",
    image:
      "https://images.unsplash.com/photo-1651008376851-b90baee60c1f?auto=format&fit=crop&w=900&q=80",
    credentials: [
      "DDS, University of Washington",
      "Pediatric Behavior Guidance Certification",
      "Family Preventive Dentistry Program",
    ],
    specialties: ["Pediatric", "Preventive", "Family Care"],
    languages: ["English"],
    bio: "Helps children and parents feel relaxed with step-by-step explanations and gentle pacing.",
    schedule: [
      { day: "Mon", hours: "9:00 AM - 3:00 PM" },
      { day: "Thu", hours: "9:00 AM - 4:00 PM" },
      { day: "Sat", hours: "9:00 AM - 1:00 PM" },
    ],
  },
];
