import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-navy text-white">
      <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
      <div className="wrap relative py-32">
        <p className="eyebrow text-emerald">Error 404</p>
        <h1 className="mt-6 max-w-2xl font-display text-display-lg font-semibold">
          This page doesn’t exist. Inefficiency located — eliminating it.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          The link you followed points nowhere. Head back to solid ground and we’ll take it from
          there.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline-dark" arrow={false}>
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
