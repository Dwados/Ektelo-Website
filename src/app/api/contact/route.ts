import { NextResponse } from "next/server";
import { activeProvider, providerStatus, sendSubmission } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  organization?: string;
  interest?: string;
  message?: string;
  /** Honeypot — real users never fill this because it is hidden. */
  website?: string;
  /** Milliseconds the form was on screen before submit. */
  elapsed?: number;
};

/**
 * In-memory rate limit. Adequate for a single-instance deployment; swap for a
 * shared store (Upstash, Redis) if this ever runs on more than one instance.
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude bound on memory
  return recent.length > MAX_PER_WINDOW;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly, or email us directly." },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Silently accept bot submissions so they don't learn the trap exists.
  if (body.website) return NextResponse.json({ ok: true });
  if (typeof body.elapsed === "number" && body.elapsed < 2000) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const organization = (body.organization ?? "").trim();
  const interest = (body.interest ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!isEmail(email)) errors.email = "Enter a valid work email so we can respond.";
  if (organization.length < 2) errors.organization = "Tell us which organization you represent.";
  if (message.length < 20) errors.message = "Give us a sentence or two about the operation.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    organization,
    interest,
    message,
  };

  if (activeProvider() === "none") {
    // Log it so a real enquiry is at least recoverable from server logs, and
    // tell the client to fall back rather than silently swallowing it.
    console.info("[contact] submission received (no mail provider configured)", submission);
    return NextResponse.json(
      { ok: false, fallback: true, error: "Email delivery is not configured yet." },
      { status: 503 }
    );
  }

  const result = await sendSubmission(submission);

  if (!result.ok) {
    // The reason carries provider detail — useful in logs, never sent to the client.
    console.error("[contact] send failed:", result.reason, submission);
    return NextResponse.json(
      { ok: false, fallback: true, error: "We couldn't send that just now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

/**
 * Health check for deployment. Reports which provider is wired up without
 * revealing any credential, so configuration can be confirmed in production.
 */
export async function GET() {
  return NextResponse.json(providerStatus());
}
