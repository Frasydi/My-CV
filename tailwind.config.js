/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8d5a3',
          dark: '#a08030',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          section: '#0f0f18',
          card: '#141420',
        }
      }
    },
  },
  plugins: [],
}
