import { ImageResponse } from "next/og";
import { resolveTheme } from "@/theme/palettes";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon — the three execution bars, drawn from the active palette. */
export default function AppleIcon() {
  const c = resolveTheme(process.env.EKTELIO_THEME).colors;
  const bar = (width: number) => (
    <div style={{ width, height: 16, borderRadius: 8, background: "#fff", display: "flex" }} />
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: c.accent,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {bar(96)}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {bar(60)}
          <div style={{ width: 16, height: 16, borderRadius: 8, background: c.signal, display: "flex" }} />
        </div>
        {bar(96)}
      </div>
    ),
    size
  );
}
