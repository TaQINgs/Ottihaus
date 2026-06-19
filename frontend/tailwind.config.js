/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d362e",
        secondary: "#ceb69e",
        background: "#e8e2d5",
        border: "rgba(77, 54, 46, 0.2)",
        "primary-light": "rgba(77, 54, 46, 0.08)",
      },
      fontFamily: {
        heading: ['"Courier Prime"', '"Courier New"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}
