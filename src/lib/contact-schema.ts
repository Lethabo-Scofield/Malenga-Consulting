import { z } from "zod";
import { services } from "@/content/services";

/** Selectable values: the five divisions plus a general option. */
export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "general", label: "General enquiry / not sure yet" },
] as const;

const serviceValues = serviceOptions.map((o) => o.value) as [string, ...string[]];

/** Phone numbers: digits, spaces and common punctuation, 7–20 characters. */
const phoneRegex = /^\+?[0-9][0-9\s()\-]{5,18}[0-9]$/;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  company: z.string().trim().max(120, "Company name is too long.").optional().or(z.literal("")),
  email: z.string().trim().max(160).email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(25)
    .refine((v) => v === "" || phoneRegex.test(v), "Please enter a valid phone number.")
    .optional(),
  service: z.enum(serviceValues, { message: "Please select a service." }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(4000, "Message is too long (4000 characters maximum)."),
  consent: z.boolean().refine((v) => v === true, "Please confirm your consent to continue."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Server payload adds anti-spam fields. */
export const contactPayloadSchema = contactSchema.extend({
  /** Honeypot: must stay empty. */
  website: z.string().max(0).optional().default(""),
  /** Client timestamp (ms) of when the form was rendered. */
  startedAt: z.number().int().positive(),
});

export const serviceLabel = (value: string) =>
  serviceOptions.find((o) => o.value === value)?.label ?? value;
