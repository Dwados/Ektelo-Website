import nodemailer from "nodemailer";
import { site } from "@/lib/data";

/**
 * Contact-form delivery.
 *
 * Two providers, selected by whichever environment variables are present:
 *
 *   resend — set RESEND_API_KEY. Preferred once you own a domain, because
 *            Resend requires a verified sending domain before it will deliver
 *            to anyone other than the address the account was registered with.
 *   smtp   — set SMTP_HOST / SMTP_USER / SMTP_PASS. Works today with a Gmail
 *            app password and no domain, so the form is not blocked on the
 *            domain purchase.
 *
 * Resend wins if both are configured. If neither is, the caller falls back to
 * handing the visitor a pre-filled email so an enquiry is never lost.
 */

export type MailProvider = "resend" | "smtp" | "none";

export type Submission = {
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
  receivedAt: string;
};

export function activeProvider(): MailProvider {
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) return "smtp";
  return "none";
}

export function recipients(): string[] {
  const configured = process.env.CONTACT_TO;
  if (configured) {
    const list = configured.split(",").map((a) => a.trim()).filter(Boolean);
    if (list.length) return list;
  }
  return [...site.emails];
}

function senderFor(provider: MailProvider): string {
  if (process.env.CONTACT_FROM) return process.env.CONTACT_FROM;
  // Resend's shared sender works without a verified domain, but only delivers
  // to the address the Resend account was created with.
  if (provider === "resend") return "Ektelo Website <onboarding@resend.dev>";
  return `Ektelo Website <${process.env.SMTP_USER}>`;
}

function subjectFor(s: Submission) {
  return `Engagement inquiry — ${s.organization}`;
}

function bodyFor(s: Submission) {
  return [
    `Name:         ${s.name}`,
    `Organization: ${s.organization}`,
    `Email:        ${s.email}`,
    `Interest:     ${s.interest || "—"}`,
    "",
    s.message,
    "",
    `Received: ${s.receivedAt}`,
    `Reply directly to this email to reach ${s.name}.`,
  ].join("\n");
}

export type SendResult = { ok: true; provider: MailProvider } | { ok: false; reason: string };

export async function sendSubmission(submission: Submission): Promise<SendResult> {
  const provider = activeProvider();
  const to = recipients();

  if (provider === "none") return { ok: false, reason: "no provider configured" };

  try {
    if (provider === "resend") {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderFor("resend"),
          to,
          reply_to: submission.email,
          subject: subjectFor(submission),
          text: bodyFor(submission),
        }),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        return { ok: false, reason: `resend ${res.status}: ${detail.slice(0, 300)}` };
      }
      return { ok: true, provider };
    }

    const port = Number(process.env.SMTP_PORT ?? 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transport.sendMail({
      from: senderFor("smtp"),
      to,
      replyTo: submission.email,
      subject: subjectFor(submission),
      text: bodyFor(submission),
    });
    return { ok: true, provider };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : String(err) };
  }
}

/** Non-secret configuration summary, for the deployment health check. */
export function providerStatus() {
  const provider = activeProvider();
  return {
    provider,
    configured: provider !== "none",
    recipients: recipients().length,
    senderConfigured: Boolean(process.env.CONTACT_FROM),
    note:
      provider === "resend" && !process.env.CONTACT_FROM
        ? "Using Resend's shared sender. Until a domain is verified, delivery only reaches the address the Resend account was created with."
        : provider === "none"
          ? "Set RESEND_API_KEY, or SMTP_HOST/SMTP_USER/SMTP_PASS. The form falls back to a pre-filled email until then."
          : undefined,
  };
}
