import SectionHeading from "../components/SectionHeading.jsx";
import { research } from "../data/portfolio.js";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-b border-line py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Research" title="Research Publication" />

        <div className="mt-8 card p-7">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {research.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-brand-600">
            {research.authorship} — {research.publication}
          </p>

          {research.doi && (
            <a
              href={research.doi}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center text-sm font-semibold text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-700"
            >
              DOI: 10.58257/IJPREMS54213 ↗
            </a>
          )}

          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {research.summary}
          </p>
        </div>
      </div>
    </section>
  );
}