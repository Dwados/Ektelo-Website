"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Custom hero graphic — an abstract "operations grid" being transformed:
 * chaotic inputs on the left resolve into an ordered, accelerating flow.
 * Pure SVG, no stock imagery.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  const flow = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.4, delay, ease: "easeInOut" as const },
        };

  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-8 rounded-full bg-blue/10 blur-3xl" />
      <svg
        viewBox="0 0 560 460"
        fill="none"
        className="relative w-full max-w-[560px] drop-shadow-[0_24px_60px_rgba(45,127,249,0.25)]"
      >
        {/* Frame */}
        <rect x="8" y="8" width="544" height="444" rx="16" fill="#0C2438" stroke="rgba(255,255,255,0.08)" />
        <rect x="8" y="8" width="544" height="40" rx="16" fill="rgba(255,255,255,0.03)" />
        <circle cx="30" cy="28" r="4" fill="rgba(255,255,255,0.18)" />
        <circle cx="46" cy="28" r="4" fill="rgba(255,255,255,0.12)" />
        <circle cx="62" cy="28" r="4" fill="rgba(255,255,255,0.08)" />
        <text x="490" y="33" fontFamily="monospace" fontSize="11" fill="#5CE3BC" letterSpacing="2">
          LIVE
        </text>

        {/* Left: tangled legacy inputs */}
        <g stroke="rgba(148,163,184,0.4)" strokeWidth="1.5">
          <motion.path d="M40 110 C 90 150, 70 190, 130 210" {...flow(0.2)} />
          <motion.path d="M40 170 C 100 140, 90 230, 130 230" {...flow(0.35)} />
          <motion.path d="M40 240 C 80 220, 100 260, 130 250" {...flow(0.5)} />
          <motion.path d="M40 310 C 110 320, 80 250, 130 270" {...flow(0.65)} />
          <motion.path d="M40 370 C 100 380, 110 300, 130 290" {...flow(0.8)} />
        </g>
        {["Paper", "Email", "Silos", "Rework", "Delay"].map((t, i) => (
          <text
            key={t}
            x="38"
            y={104 + i * 66}
            fontFamily="monospace"
            fontSize="10.5"
            fill="rgba(148,163,184,0.75)"
            letterSpacing="1.5"
          >
            {t.toUpperCase()}
          </text>
        ))}

        {/* Center: the Ektelo engine */}
        <g>
          <rect x="150" y="180" width="150" height="120" rx="12" fill="#081A2B" stroke="#2D7FF9" strokeWidth="1.5" />
          <rect x="150" y="180" width="150" height="120" rx="12" fill="url(#engineGlow)" />
          <text x="176" y="228" fontFamily="monospace" fontSize="11" fill="#84B3FB" letterSpacing="2">
            EKTELO
          </text>
          <text x="176" y="248" fontFamily="monospace" fontSize="11" fill="#FFFFFF" letterSpacing="2">
            ENGINE
          </text>
          {!reduce && (
            <motion.rect
              x="150"
              y="180"
              width="150"
              height="120"
              rx="12"
              fill="none"
              stroke="#5CE3BC"
              strokeWidth="1.5"
              strokeDasharray="8 200"
              animate={{ strokeDashoffset: [0, -416] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
          )}
          {[196, 216, 236, 256, 276].map((y, i) => (
            <motion.line
              key={y}
              x1="266"
              y1={y + 2}
              x2="288"
              y2={y + 2}
              stroke={i === 2 ? "#00C48C" : "rgba(255,255,255,0.25)"}
              strokeWidth="2"
              strokeLinecap="round"
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0.2 },
                    animate: { opacity: [0.2, 1, 0.2] },
                    transition: { duration: 2, delay: i * 0.3, repeat: Infinity },
                  })}
            />
          ))}
        </g>

        {/* Right: ordered output lanes */}
        <g strokeWidth="2" strokeLinecap="round">
          <motion.path d="M300 205 H 470" stroke="#2D7FF9" {...flow(0.9)} />
          <motion.path d="M300 240 H 500" stroke="#00C48C" {...flow(1.05)} />
          <motion.path d="M300 275 H 450" stroke="#2D7FF9" {...flow(1.2)} />
        </g>
        {!reduce &&
          [205, 240, 275].map((y, i) => (
            <motion.circle
              key={y}
              r="3.5"
              cy={y}
              fill={i === 1 ? "#00C48C" : "#5799FA"}
              animate={{ cx: [302, i === 1 ? 498 : 468 - i * 9] }}
              transition={{ duration: 2.2, delay: 1 + i * 0.4, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
            />
          ))}
        {["THROUGHPUT", "COST / TXN", "CYCLE TIME"].map((t, i) => (
          <text
            key={t}
            x="302"
            y={198 + i * 35}
            fontFamily="monospace"
            fontSize="9.5"
            fill="rgba(148,163,184,0.85)"
            letterSpacing="1.5"
          >
            {t}
          </text>
        ))}

        {/* Bottom: metric readouts */}
        <g>
          <rect x="40" y="330" width="480" height="92" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" />
          {[
            { x: 66, v: "-64%", l: "CYCLE TIME" },
            { x: 196, v: "+38%", l: "THROUGHPUT" },
            { x: 336, v: "-52%", l: "COST / TXN" },
            { x: 452, v: "99.2%", l: "SLA" },
          ].map((m) => (
            <g key={m.l}>
              <text x={m.x} y="372" fontFamily="monospace" fontSize="20" fontWeight="600" fill="#FFFFFF">
                {m.v}
              </text>
              <text x={m.x} y="396" fontFamily="monospace" fontSize="9" fill="#5CE3BC" letterSpacing="1.5">
                {m.l}
              </text>
            </g>
          ))}
        </g>

        <defs>
          <linearGradient id="engineGlow" x1="150" y1="180" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2D7FF9" stopOpacity="0.14" />
            <stop offset="1" stopColor="#00C48C" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
