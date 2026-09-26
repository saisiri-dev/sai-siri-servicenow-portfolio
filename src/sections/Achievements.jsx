import SectionHeading from "../components/SectionHeading.jsx";
import { achievements } from "../data/portfolio.js";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 border-b border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Achievements" title="Achievements & Extra-Curriculars" />

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="card p-6">
              <h3 className="font-display text-sm font-semibold leading-snug text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
