import SectionHeading from "../components/SectionHeading.jsx";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-line py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Education" />

        <ol className="mt-8 space-y-5">
          {education.map((ed) => (
            <li key={ed.school} className="card flex flex-col gap-1 p-6 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{ed.school}</h3>
                <p className="mt-1 text-sm text-ink-soft">{ed.credential}</p>
                <p className="mt-1 text-sm font-medium text-brand-600">{ed.detail}</p>
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-ink-soft">{ed.period}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
