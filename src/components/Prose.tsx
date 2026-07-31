import { Check } from "lucide-react";

export type Block = { type: "h2" | "p" | "ul" | "callout"; text: string };

/**
 * Renders the block arrays used by insight essays and the legal/trust pages.
 * Kept deliberately narrow — four block types, no arbitrary HTML.
 */
export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-[68ch]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 font-display text-2xl font-semibold text-ink-strong first:mt-0 sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );

          case "ul":
            return (
              <ul key={i} className="mt-6 space-y-3">
                {block.text
                  .split("\n")
                  .map((item) => item.trim())
                  .filter(Boolean)
                  .map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                      <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal-ink" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            );

          case "callout":
            return (
              <p
                key={i}
                className="mt-8 border-l-2 border-signal-ink bg-canvas-alt px-6 py-5 font-display text-lg font-medium leading-relaxed text-ink-strong"
              >
                {block.text}
              </p>
            );

          default:
            return (
              <p key={i} className="mt-5 text-[1.0625rem] leading-[1.75] text-ink-soft">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
