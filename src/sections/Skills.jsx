import SectionHeading from "../components/SectionHeading.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-line bg-paper py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title="ServiceNow Skills"
          description="ServiceNow is the primary platform I'm developing skills on, alongside foundational programming and web technologies."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* ServiceNow — visually emphasized, spans two columns on large screens */}
          <div className="rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 shadow-card lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-600 text-sm font-semibold text-white"
                aria-hidden="true"
              >
                SN
              </span>
              <h3 className="font-display text-lg font-semibold text-brand-800">
                {skills.servicenow.title}
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
              {skills.servicenow.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-brand-100 bg-white/70 px-3 py-2 text-sm font-medium text-brand-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting skill categories */}
          <div className="grid gap-6">
            {skills.categories.slice(0, 2).map((cat) => (
              <div key={cat.title} className="card p-6">
                <h3 className="font-display text-sm font-semibold text-ink">{cat.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.categories.slice(2).map((cat) => (
            <div key={cat.title} className="card p-6">
              <h3 className="font-display text-sm font-semibold text-ink">{cat.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
