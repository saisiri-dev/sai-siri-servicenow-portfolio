import { contact, personal } from "../data/portfolio.js";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="section-shell">
        <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {contact.message}
          </p>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Location</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{personal.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Email</dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                <a href={`mailto:${personal.email}`} className="hover:text-brand-700">
                  {personal.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Phone</dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                <a href={`tel:${personal.phone.replace(/\s+/g, "")}`} className="hover:text-brand-700">
                  {personal.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">LinkedIn</dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                <a href={personal.linkedin} className="hover:text-brand-700">
                  {personal.linkedinLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">GitHub</dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                <a href={personal.github} className="hover:text-brand-700">
                  {personal.githubLabel}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Email Me
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center rounded-md border border-line bg-paper-raised px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
