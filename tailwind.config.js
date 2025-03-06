/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#9C312F',
        secondary: '#F3ECE0',
      },
      fontSize: {
        base: '32px',
        large: '96px',
      }
    },
  },
  plugins: [],
}
