"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormValues {
  name: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();
  const { toast } = useToast();

  function onSubmit() {
    toast({
      title: "Message received",
      description: "Our team will contact you shortly.",
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name", { required: true })} />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" {...register("phone", { required: true })} />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} {...register("message", { required: true })} />
      </div>
      <Button type="submit">Send Inquiry</Button>
    </form>
  );
}
