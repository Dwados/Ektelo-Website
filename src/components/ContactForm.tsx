"use client";

import { useState } from "react";
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
 * Contact form with inline validation (on blur) and simulated submission.
 * No backend is wired yet — submission opens a pre-filled email as a reliable
 * fallback while always confirming state to the user.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [interest, setInterest] = useState(interests[0]);

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      (form.elements.namedItem(firstError) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    const subject = encodeURIComponent(`Engagement inquiry — ${values.organization}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nOrganization: ${values.organization}\nEmail: ${values.email}\nArea of interest: ${interest}\n\n${values.message}`
    );
    window.setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 600);
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-lg border border-emerald/30 bg-emerald/[0.06] p-10"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy">Message prepared.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          Your email client has opened with the details pre-filled — hit send and it lands with our
          engagement team. We respond within one business day. Prefer direct?{" "}
          <a href={`mailto:${site.email}`} className="cursor-pointer font-semibold text-blue-600 hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FieldErrors) =>
    `h-12 w-full rounded-md border bg-white px-4 text-[0.9375rem] text-ink transition-colors placeholder:text-ink-faint/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25 ${
      errors[field] ? "border-red-500" : "border-line-light"
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
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
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
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
        <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold text-navy">
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
        <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-navy">
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="h-12 w-full cursor-pointer rounded-md border border-line-light bg-white px-4 text-[0.9375rem] text-ink focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25"
        >
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          What should run better? <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          onBlur={onBlur}
          placeholder="Describe the operation, the pain, and what success would look like. Two sentences is enough to start."
          className={`w-full rounded-md border bg-white px-4 py-3 text-[0.9375rem] leading-relaxed text-ink transition-colors placeholder:text-ink-faint/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25 ${
            errors.message ? "border-red-500" : "border-line-light"
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
        className="group inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
