"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { services } from "@/data/services";
import { concernOptions } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BookingWidget() {
  const router = useRouter();
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const serviceOptions = useMemo(
    () => services.slice(0, 10).map((item) => ({ label: item.name, value: item.slug })),
    [],
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = new URLSearchParams({
      service: form.service,
      date: form.date,
      time: form.time,
      name: form.name,
      phone: form.phone,
    });
    router.push(`/booking?${query.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl shadow-cyan-100/40 backdrop-blur md:grid-cols-2 md:items-end lg:grid-cols-3 xl:grid-cols-6"
      aria-label="Quick booking widget"
    >
      <div className="md:col-span-2 xl:col-span-2">
        <Label htmlFor="service" className="mb-2 block">
          Concern or service
        </Label>
        <select
          id="service"
          className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm"
          value={form.service}
          onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
          required
        >
          <option value="">Select one</option>
          <optgroup label="Common concerns">
            {concernOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Popular services">
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <div>
        <Label htmlFor="date" className="mb-2 block">
          Date
        </Label>
        <Input
          id="date"
          type="date"
          value={form.date}
          onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="time" className="mb-2 block">
          Time
        </Label>
        <Input
          id="time"
          type="time"
          value={form.time}
          onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="name" className="mb-2 block">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone" className="mb-2 block">
          Phone
        </Label>
        <Input
          id="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
          required
        />
      </div>
      <div className="md:col-span-2 lg:col-span-3 xl:col-span-6">
        <Button type="submit" className="w-full md:w-auto">
          Continue to Premium Booking
        </Button>
      </div>
    </form>
  );
}
