import SectionHeading from "../components/SectionHeading.jsx";
import { featuredProject, secondProject } from "../data/portfolio.js";

export default function Projects() {
  return (
    <section id="project" className="scroll-mt-20 border-b border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Project"
          title="Featured Project"
          description="The project I've invested the most time in, applying ServiceNow platform capabilities end to end."
        />

        {/* Featured ServiceNow project — the most prominent piece on the page */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-200 bg-navy-deep shadow-card">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-medium text-brand-300">
              {featuredProject.category}
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              {featuredProject.title}
            </h3>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-300">
              {featuredProject.description}
            </p>

            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {featuredProject.features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-slate-200"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
                    aria-hidden="true"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {featuredProject.githubUrl ? (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
                >
                  View on GitHub
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-400"
                  title="Add the repository URL in src/data/portfolio.js"
                >
                  GitHub Link Coming Soon
                </span>
              )}

              {featuredProject.demoUrl ? (
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Demo
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-400"
                  title="Demo link coming soon"
                >
                  Demo Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Second project */}
        <div className="mt-8 card p-7">
          <p className="text-sm font-medium text-brand-600">
            {secondProject.category}
          </p>

          <h3 className="mt-2 font-display text-lg font-semibold text-ink">
            {secondProject.title}
          </h3>

          <ul className="mt-4 space-y-2.5">
            {secondProject.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {secondProject.demoUrl && (
            <div className="mt-6">
              <a
                href={secondProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
              >
                Demo ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}