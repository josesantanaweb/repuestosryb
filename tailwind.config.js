/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#012C72',
        secondary: '#CB000D',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      screens: {
        '2xl': '1650px',
      },
    },
  },
  plugins: [],
}
