import { personal } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="section-shell flex flex-col items-center gap-3 py-8 text-sm text-ink-soft sm:flex-row sm:justify-between">
        <p>
          © {year} {personal.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={personal.github} className="hover:text-brand-600" aria-label="GitHub profile">
            GitHub
          </a>
          <a href={personal.linkedin} className="hover:text-brand-600" aria-label="LinkedIn profile">
            LinkedIn
          </a>
          <a href="#home" className="hover:text-brand-600">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
