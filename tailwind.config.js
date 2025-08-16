/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        bg: "#0b0c10",
        card: "rgba(255,255,255,0.06)",
        accent: "#36d1dc",
        accent2: "#5b86e5"
      },
      boxShadow: {
        glow: "0 0 40px rgba(86, 187, 255, .25)"
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
