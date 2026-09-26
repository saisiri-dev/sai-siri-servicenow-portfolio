import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base ("./") means the built assets resolve correctly
// no matter what sub-path the site is deployed under (e.g. GitHub Pages
// project sites at https://username.github.io/repo-name/). Combined with
// `import.meta.env.BASE_URL` in the app code for linking to files in
// /public (like resume.pdf), this avoids hardcoding root-relative paths
// that would break on GitHub Pages.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
