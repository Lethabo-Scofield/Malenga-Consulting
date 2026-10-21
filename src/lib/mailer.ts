import "server-only";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { serviceLabel, type ContactInput } from "./contact-schema";

export class MailNotConfiguredError extends Error {
  constructor() {
    super("Email delivery is not configured.");
    this.name = "MailNotConfiguredError";
  }
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Remove CR/LF to prevent header injection. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

function buildEmail(data: ContactInput) {
  const service = serviceLabel(data.service);
  const subject = oneLine(`New website enquiry: ${service} (${data.fullName})`).slice(0, 200);
  const rows: [string, string][] = [
    ["Name", data.fullName],
    ["Company", data.company || "Not provided"],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service of interest", service],
  ];
  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    data.message,
    "",
    "Consent to be contacted: Yes",
  ].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#111">
<h2 style="font-weight:600">New website enquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#555">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table>
<h3 style="margin-top:20px">Message</h3>
<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
<p style="color:#555;font-size:12px">The sender consented to be contacted about this enquiry.</p>
</div>`;
  return { subject, text, html };
}

/**
 * Sends the enquiry to CONTACT_TO_EMAIL using Resend (RESEND_API_KEY) or,
 * failing that, SMTP (SMTP_HOST etc.). Throws if neither is configured or
 * if the provider reports a failure, so callers never report false success.
 */
export async function sendEnquiryEmail(data: ContactInput): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!to || !from) throw new MailNotConfiguredError();

  const { subject, text, html } = buildEmail(data);

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: data.email,
      subject,
      text,
      html,
    });
    if (error) throw new Error(`Resend error: ${error.message}`);
    return;
  }

  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
    });
    await transporter.sendMail({ from, to, replyTo: data.email, subject, text, html });
    return;
  }

  throw new MailNotConfiguredError();
}
