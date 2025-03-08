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
        primary: '#721917',
        secondary: '#FAF4E6',
        tertiary: '#3A2902',
      },
      fontSize: {
        base: '38px',
        medium: '48px',
        large: '96px',
      },
      fontFamily: {
        'sloop': ['Sloop', 'sans-serif'],
        'zt-formom': ['ZT-Formom', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
