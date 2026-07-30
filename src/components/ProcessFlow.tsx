import { process } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

/**
 * The Ektelo method: Discover → Analyze → Design → Digitize → Automate → Optimize.
 * Desktop: 3×2 grid with a connecting rail. Mobile: vertical timeline.
 */
export function ProcessFlow() {
  return (
    <ol className="relative mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {process.map((step, i) => (
        <Reveal as="li" key={step.n} delay={i * 0.07} className="group relative">
          <div className="relative h-full border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-blue/50 hover:bg-white/[0.05]">
            {/* corner accent */}
            <span
              className="absolute right-0 top-0 h-6 w-6 border-l border-b border-white/10 transition-colors duration-300 group-hover:border-blue/50"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.25em] text-emerald">{step.n}</span>
              <step.icon className="h-5 w-5 text-slate-500 transition-colors duration-300 group-hover:text-blue-300" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-400">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
