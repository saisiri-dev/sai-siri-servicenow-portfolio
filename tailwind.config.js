/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14201C",
          soft: "#3A4A44",
        },
        paper: {
          DEFAULT: "#F6F8F6",
          raised: "#FFFFFF",
        },
        line: "#DFE5E1",
        brand: {
          50: "#EEF6F1",
          100: "#D7EBDD",
          200: "#AED8BB",
          300: "#7FC199",
          400: "#4FA779",
          500: "#2E7D5B",
          600: "#236248",
          700: "#1B4C39",
          800: "#15392B",
          900: "#0F2A20",
        },
        navy: {
          DEFAULT: "#1E3345",
          deep: "#152634",
        },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 32, 28, 0.06), 0 1px 1px rgba(20, 32, 28, 0.04)",
      },
    },
  },
  plugins: [],
};
