import SectionHeading from "../components/SectionHeading.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-line py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Professional Experience" />

        <div className="mt-8 card p-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-lg font-semibold text-ink">{experience.role}</h3>
            <span className="text-sm font-medium text-ink-soft">{experience.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-brand-600">
            {experience.company} · {experience.location}
          </p>
          <ul className="mt-5 space-y-2.5">
            {experience.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-400" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
