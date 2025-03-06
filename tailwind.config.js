/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9C312F',
        secondary: '#FCF8F2',
      },
      fontSize: {
        base: '32px',
      }
    },
  },
  plugins: [],
}
