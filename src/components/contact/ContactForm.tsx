"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { contactSchema, serviceOptions, type ContactInput } from "@/lib/contact-schema";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/content/site";

type Status = { state: "idle" } | { state: "sending" } | { state: "success" } | { state: "error"; message: string };

const fieldBase =
  "w-full border bg-paper px-4 py-3.5 text-base text-ink placeholder:text-mute/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {optional && <span className="ml-2 font-normal text-mute">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#a12626]">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const confirmRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const initialService = serviceOptions.some((o) => o.value === defaultService) ? defaultService : "";

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: initialService as ContactInput["service"],
      message: "",
      consent: false,
    },
  });

  useEffect(() => {
    if (status.state === "success") confirmRef.current?.focus();
    if (status.state === "error") errorRef.current?.focus();
  }, [status]);

  const onSubmit = async (values: ContactInput) => {
    setStatus({ state: "sending" });
    try {
      const form = document.getElementById("enquiry-form") as HTMLFormElement | null;
      const website = (form?.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website, startedAt }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string; fieldErrors?: Record<string, string[]> }
        | null;

      if (res.ok && data?.ok === true) {
        reset();
        setStatus({ state: "success" });
        return;
      }

      if (data && data.ok === false && data.fieldErrors) {
        for (const [name, msgs] of Object.entries(data.fieldErrors)) {
          if (name in values) setError(name as keyof ContactInput, { message: msgs[0] });
        }
      }
      setStatus({
        state: "error",
        message:
          (data && data.ok === false && data.error) ||
          "Something went wrong while sending your enquiry. Please try again.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "We could not reach the server. Please check your connection and try again.",
      });
    }
  };

  if (status.state === "success") {
    return (
      <div
        ref={confirmRef}
        tabIndex={-1}
        role="status"
        className="border border-ink bg-paper p-8 outline-none sm:p-12"
      >
        <CheckCircle2 aria-hidden="true" className="size-9 text-accent" />
        <h2 className="display mt-6 text-3xl">Thank you. Your enquiry has been sent.</h2>
        <p className="mt-4 max-w-md text-mute">
          We have received your message and will respond to the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => {
            setStartedAt(Date.now());
            setStatus({ state: "idle" });
          }}
          className={buttonClass("secondary", "mt-8")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";
  const inputProps = (name: keyof ContactInput) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const border = (name: keyof ContactInput) => (errors[name] ? "border-[#a12626]" : "border-line");

  return (
    <form id="enquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {status.state === "error" && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="flex gap-3 border border-[#a12626] bg-[#a12626]/5 p-4 text-sm outline-none"
        >
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#a12626]" />
          <p>
            {status.message} You can also email{" "}
            <a className="underline underline-offset-2" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>{" "}
            or call{" "}
            <a className="underline underline-offset-2" href={`tel:${site.contact.telephone.href}`}>
              {site.contact.telephone.display}
            </a>
            .
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message}>
          <input id="fullName" type="text" autoComplete="name" className={`${fieldBase} ${border("fullName")}`} {...inputProps("fullName")} {...register("fullName")} />
        </Field>
        <Field id="company" label="Company name" optional error={errors.company?.message}>
          <input id="company" type="text" autoComplete="organization" className={`${fieldBase} ${border("company")}`} {...inputProps("company")} {...register("company")} />
        </Field>
        <Field id="email" label="Email address" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" inputMode="email" className={`${fieldBase} ${border("email")}`} {...inputProps("email")} {...register("email")} />
        </Field>
        <Field id="phone" label="Phone number" optional error={errors.phone?.message}>
          <input id="phone" type="tel" autoComplete="tel" inputMode="tel" className={`${fieldBase} ${border("phone")}`} {...inputProps("phone")} {...register("phone")} />
        </Field>
      </div>

      <Field id="service" label="Service of interest" error={errors.service?.message}>
        <select id="service" className={`${fieldBase} ${border("service")}`} {...inputProps("service")} {...register("service")}>
          <option value="">Select a service</option>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea id="message" rows={6} className={`${fieldBase} ${border("message")} resize-y`} {...inputProps("message")} {...register("message")} />
      </Field>

      {/* Honeypot: hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-5 shrink-0 accent-ink"
            {...inputProps("consent")}
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-mute">
            I consent to Malenga Consulting contacting me about this enquiry and processing the information I
            have provided for that purpose.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-[#a12626]">
            {errors.consent.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={sending} className={buttonClass("primary", "w-full sm:w-auto")}>
        {sending ? (
          <>
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send enquiry"
        )}
      </button>
      <p className="sr-only" aria-live="polite">
        {sending ? "Sending your enquiry" : ""}
      </p>
    </form>
  );
}
