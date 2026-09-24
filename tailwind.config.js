/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#E3F2FD',      // Baby Blue
          lilac: '#EBD6FB',     // Ungu Muda
          lavender: '#898AC4',  // Accent Lavender
          navy: '#021A54',      // Text / Deep Contrast
        }
      }
    },
  },
  plugins: [],
}