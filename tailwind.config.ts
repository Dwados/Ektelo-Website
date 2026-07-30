import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand — Ektelo
        navy: {
          DEFAULT: "#081A2B", // primary deep navy
          950: "#040E18",
          900: "#081A2B",
          800: "#0C2438",
          700: "#123049",
          600: "#1A3D5C",
        },
        blue: {
          DEFAULT: "#2D7FF9", // electric blue
          50: "#EBF3FF",
          100: "#D7E7FE",
          200: "#B0CFFD",
          300: "#84B3FB",
          400: "#5799FA",
          500: "#2D7FF9",
          600: "#1663D9", // accessible on white for text
          700: "#124EAC",
          800: "#0F3D85",
          900: "#0C2F66",
        },
        emerald: {
          DEFAULT: "#00C48C", // accent
          300: "#5CE3BC",
          400: "#26D3A2",
          500: "#00C48C",
          600: "#00A375",
          700: "#0A8060", // accessible on white for text
        },
        ink: {
          DEFAULT: "#1E293B", // charcoal body text
          soft: "#475569",
          faint: "#64748B",
        },
        mist: "#F4F6F9", // light gray section background
        line: {
          light: "#E4E9F0", // hairline on light
          dark: "rgba(255,255,255,0.08)", // hairline on dark
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.35rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        wrap: "76rem", // 1216px content wrapper
      },
      boxShadow: {
        card: "0 1px 2px rgba(8, 26, 43, 0.05), 0 8px 24px -12px rgba(8, 26, 43, 0.12)",
        "card-hover": "0 2px 4px rgba(8, 26, 43, 0.06), 0 16px 40px -12px rgba(8, 26, 43, 0.18)",
        glow: "0 0 60px -12px rgba(45, 127, 249, 0.45)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(80% 60% at 70% 20%, rgba(45,127,249,0.16) 0%, rgba(45,127,249,0.04) 45%, transparent 70%)",
        "cta-radial":
          "radial-gradient(70% 80% at 50% 100%, rgba(45,127,249,0.22) 0%, rgba(0,196,140,0.06) 55%, transparent 80%)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
