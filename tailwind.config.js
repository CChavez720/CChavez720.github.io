/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techblue: "#0f172a",
        neon: "#38bdf8",
        glitch: "#a855f7",
      },
    },
  },
  plugins: [],
};
