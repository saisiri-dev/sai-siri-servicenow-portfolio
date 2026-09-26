import SectionHeading from "../components/SectionHeading.jsx";
import { about } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Building a foundation in enterprise applications" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="card p-6 text-[15px] leading-relaxed text-ink-soft"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
