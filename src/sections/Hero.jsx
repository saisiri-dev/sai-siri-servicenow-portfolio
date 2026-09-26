import { hero } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(46,125,91,0.14) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div className="section-shell relative py-20 sm:py-28">
        <p className="eyebrow">{hero.label}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {hero.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {hero.primaryCta.label}
          </a>
          {hero.secondaryCtas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              {...(cta.label === "Download Resume" ? { download: true } : {})}
              className="inline-flex items-center rounded-md border border-line bg-paper-raised px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
