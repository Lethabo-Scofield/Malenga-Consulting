import { NextResponse } from "next/server";
import { contactPayloadSchema } from "@/lib/contact-schema";
import { MailNotConfiguredError, sendEnquiryEmail } from "@/lib/mailer";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MIN_FILL_MS = 2500;
const MAX_BODY_BYTES = 20_000;

type ErrorBody = { ok: false; error: string; fieldErrors?: Record<string, string[]> };

const fail = (error: string, status: number, fieldErrors?: ErrorBody["fieldErrors"]) =>
  NextResponse.json<ErrorBody>({ ok: false, error, fieldErrors }, { status });

export async function POST(request: Request) {
  // Same-origin check (browsers always send Origin on cross-origin POSTs).
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return fail("Request could not be verified.", 403);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return fail("Too many submissions. Please wait a few minutes and try again.", 429);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return fail("Your message is too large.", 413);

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return fail("Invalid request.", 400);
  }

  const parsed = contactPayloadSchema.safeParse(json);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (key === "website" || key === "startedAt") continue; // never reveal anti-spam fields
      (fieldErrors[key] ??= []).push(issue.message);
    }
    // A filled honeypot lands here too; give no hint to bots.
    return fail("Please check the form and try again.", 400, fieldErrors);
  }

  const { website, startedAt, ...enquiry } = parsed.data;
  if (website) return fail("Please check the form and try again.", 400);
  if (Date.now() - startedAt < MIN_FILL_MS) {
    return fail("That was quick. Please review your details and submit again.", 400);
  }

  try {
    await sendEnquiryEmail(enquiry);
  } catch (err) {
    if (err instanceof MailNotConfiguredError) {
      console.error("[contact] Email delivery is not configured (see .env.example).");
      return fail(
        "Our enquiry form is temporarily unavailable. Please email or call us directly using the details on this page.",
        503,
      );
    }
    console.error("[contact] Failed to send enquiry:", err instanceof Error ? err.message : "unknown error");
    return fail(
      "We could not send your enquiry just now. Please try again shortly or contact us directly.",
      502,
    );
  }

  return NextResponse.json({ ok: true });
}
