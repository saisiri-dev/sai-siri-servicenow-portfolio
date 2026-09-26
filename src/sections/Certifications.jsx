import SectionHeading from "../components/SectionHeading.jsx";
import { certifications } from "../data/portfolio.js";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 border-b border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Certifications" title="Certifications" />

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className={`rounded-xl border p-6 shadow-card ${
                cert.highlight
                  ? "border-brand-300 bg-gradient-to-br from-brand-50 to-white"
                  : "border-line bg-paper-raised"
              }`}
            >
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold ${
                  cert.highlight ? "bg-brand-600 text-white" : "bg-navy text-white"
                }`}
                aria-hidden="true"
              >
                {cert.highlight ? "SN" : "AWS"}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-ink">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
