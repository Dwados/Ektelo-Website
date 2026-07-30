import type { Config } from "tailwindcss";

/**
 * Colours resolve to CSS custom properties emitted by src/theme/palettes.ts, so
 * the whole site re-skins by swapping the active palette. The channel form
 * (`R G B`) is what lets Tailwind's opacity modifiers (bg-accent/40) keep working.
 */
const c = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark surfaces
        surface: {
          DEFAULT: c("--c-base"),
          deep: c("--c-deepest"),
          raised: c("--c-raised"),
        },
        // Text on dark surfaces
        "on-dark": {
          DEFAULT: c("--c-on-dark"),
          strong: c("--c-on-dark-strong"),
          soft: c("--c-on-dark-soft"),
          faint: c("--c-on-dark-faint"),
        },
        // Primary accent — actions, links, flow
        accent: {
          DEFAULT: c("--c-accent"),
          hover: c("--c-accent-hover"),
          soft: c("--c-accent-soft"),
          ink: c("--c-accent-ink"), // accessible as text on canvas
        },
        // Secondary accent — verified gain, eyebrow labels on dark
        signal: {
          DEFAULT: c("--c-signal"),
          ink: c("--c-signal-ink"), // accessible as text on canvas
        },
        // Light surfaces
        canvas: {
          DEFAULT: c("--c-canvas"),
          alt: c("--c-canvas-alt"),
        },
        hairline: c("--c-hairline"),
        // Text on light surfaces
        ink: {
          DEFAULT: c("--c-ink"),
          strong: c("--c-ink-strong"),
          soft: c("--c-ink-soft"),
          faint: c("--c-ink-faint"),
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
        wrap: "76rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--c-base) / 0.05), 0 8px 24px -12px rgb(var(--c-base) / 0.12)",
        "card-hover": "0 2px 4px rgb(var(--c-base) / 0.06), 0 16px 40px -12px rgb(var(--c-base) / 0.18)",
        accent: "0 1px 0 rgb(255 255 255 / 0.15) inset, 0 8px 24px -8px rgb(var(--c-accent) / 0.5)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(80% 60% at 70% 20%, rgb(var(--c-accent) / 0.16) 0%, rgb(var(--c-accent) / 0.04) 45%, transparent 70%)",
        "cta-radial":
          "radial-gradient(70% 80% at 50% 100%, rgb(var(--c-accent) / 0.22) 0%, rgb(var(--c-signal) / 0.06) 55%, transparent 80%)",
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
