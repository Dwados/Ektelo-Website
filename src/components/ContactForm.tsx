"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/data";

type FieldErrors = Partial<Record<"name" | "email" | "organization" | "message", string>>;

const interests = [
  "Operational Transformation",
  "AI & Automation",
  "Government Modernization",
  "Enterprise Software",
  "Data & Analytics",
  "Not sure yet — advise us",
];

/**
 * Contact form with inline validation on blur, posting to /api/contact.
 * A hidden honeypot field and a minimum time-on-form filter out bots. If the
 * server has no mail provider configured, or delivery fails, the visitor is
 * handed a pre-filled email instead of losing their message.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "prepared">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [interest, setInterest] = useState(interests[0]);
  const mountedAt = useRef(Date.now());

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Please enter your full name." : undefined;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? undefined
          : "Enter a valid work email so we can respond.";
      case "organization":
        return value.trim().length < 2 ? "Tell us which organization you represent." : undefined;
      case "message":
        return value.trim().length < 20
          ? "Give us a sentence or two — what operation should run better?"
          : undefined;
      default:
        return undefined;
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const mailtoFor = (v: Record<string, string>) => {
    const subject = encodeURIComponent(`Engagement inquiry — ${v.organization}`);
    const body = encodeURIComponent(
      `Name: ${v.name}\nOrganization: ${v.organization}\nEmail: ${v.email}\nArea of interest: ${interest}\n\n${v.message}`
    );
    return `mailto:${site.emails[0]}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      organization: String(data.get("organization") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextErrors: FieldErrors = {};
    (Object.keys(values) as (keyof typeof values)[]).forEach((k) => {
      const err = validateField(k, values[k]);
      if (err) nextErrors[k] = err;
    });
    setErrors(nextErrors);
    setFormError(null);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      (form.elements.namedItem(firstError) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          interest,
          website: String(data.get("website") ?? ""),
          elapsed: Date.now() - mountedAt.current,
        }),
      });
      const payload = await res.json().catch(() => ({}));

      if (res.ok && payload.ok) {
        setStatus("sent");
        return;
      }
      if (payload.errors) {
        setErrors(payload.errors);
        setStatus("idle");
        return;
      }
      if (res.status === 429) {
        setFormError(payload.error ?? "Too many submissions. Please try again shortly.");
        setStatus("idle");
        return;
      }
      // Delivery unavailable — hand them a pre-filled email rather than lose it.
      window.location.href = mailtoFor(values);
      setStatus("prepared");
    } catch {
      window.location.href = mailtoFor(values);
      setStatus("prepared");
    }
  };

  if (status === "sent" || status === "prepared") {
    const prepared = status === "prepared";
    return (
      <div
        role="status"
        className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-lg border border-signal/30 bg-signal/[0.06] p-10"
      >
        <CheckCircle2 className="h-10 w-10 text-signal" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-strong">
          {prepared ? "Message prepared." : "Message received."}
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          {prepared ? (
            <>
              Your email client has opened with the details filled in — send it and it reaches our
              engagement team. Prefer to write directly?{" "}
            </>
          ) : (
            <>
              It&rsquo;s with our engagement team and a senior person will reply within one business
              day. If it&rsquo;s urgent, call {site.phones[0]} or write to{" "}
            </>
          )}
          <a
            href={`mailto:${site.emails[0]}`}
            className="cursor-pointer font-semibold text-accent-ink hover:underline"
          >
            {site.emails[0]}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FieldErrors) =>
    `h-12 w-full rounded-md border bg-canvas px-4 text-[0.9375rem] text-ink transition-colors placeholder:text-ink-faint/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 ${
      errors[field] ? "border-red-500" : "border-hairline"
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError && (
        <p role="alert" className="rounded-md border border-red-500/40 bg-red-50 px-4 py-3 text-sm text-red-700">
          {formError}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-strong">
            Full name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            onBlur={onBlur}
            placeholder="Amara Okafor"
            className={inputClass("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-[0.8125rem] text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-strong">
            Work email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            onBlur={onBlur}
            placeholder="a.okafor@ministry.go.ug"
            className={inputClass("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-[0.8125rem] text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold text-ink-strong">
          Organization <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          required
          onBlur={onBlur}
          placeholder="Ministry, corporation, or enterprise"
          className={inputClass("organization")}
          aria-invalid={!!errors.organization}
          aria-describedby={errors.organization ? "organization-error" : undefined}
        />
        {errors.organization && (
          <p id="organization-error" role="alert" className="mt-1.5 text-[0.8125rem] text-red-600">
            {errors.organization}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-ink-strong">
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="h-12 w-full cursor-pointer rounded-md border border-hairline bg-canvas px-4 text-[0.9375rem] text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
        >
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-strong">
          What should run better? <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          onBlur={onBlur}
          placeholder="Describe the operation, the pain, and what success would look like. Two sentences is enough to start."
          className={`w-full rounded-md border bg-canvas px-4 py-3 text-[0.9375rem] leading-relaxed text-ink transition-colors placeholder:text-ink-faint/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 ${
            errors.message ? "border-red-500" : "border-hairline"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-1.5 text-[0.8125rem] text-red-600">
            {errors.message}
          </p>
        ) : (
          <p id="message-help" className="mt-1.5 text-[0.8125rem] text-ink-faint">
            Confidential. We sign NDAs before any discovery work.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-hover active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Preparing…
          </>
        ) : (
          <>
            Request a working session
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
