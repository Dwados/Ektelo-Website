import { ImageResponse } from "next/og";
import { resolveTheme } from "@/theme/palettes";

export const runtime = "nodejs";
export const alt = "Ektelio — We digitize operations, not just software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded social card, drawn from the active palette so it never drifts from
 * the site. Rendered at build time into a static PNG.
 */
export default async function OpengraphImage() {
  const c = resolveTheme(process.env.EKTELIO_THEME).colors;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: c.base,
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* accent rule along the top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: c.accent,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: c.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ width: 28, height: 5, borderRadius: 3, background: "#fff", display: "flex" }} />
            <div style={{ width: 18, height: 5, borderRadius: 3, background: "#fff", display: "flex" }} />
            <div style={{ width: 28, height: 5, borderRadius: 3, background: "#fff", display: "flex" }} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: -1 }}>ektelio</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              color: c.signal,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Operational Transformation
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>We digitize operations,</span>
            <span style={{ color: c.onDarkFaint }}>not just software.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${c.raised}`,
            paddingTop: 28,
            fontSize: 22,
            color: c.onDarkBody,
          }}
        >
          <span>Governments · Enterprises · Corporations</span>
          <span style={{ color: c.signal, letterSpacing: 3 }}>EKTELIO.COM</span>
        </div>
      </div>
    ),
    size
  );
}
