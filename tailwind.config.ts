/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fredoka', 'Nunito', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        titan: ['"Titan One"', 'cursive'],
      },
      colors: {
        sky: {
          400: '#38bdf8',
          900: '#0c4a6e',
        },
        lime: {
          300: '#bef264',
          400: '#a3e635',
          600: '#65a30d',
        },
        yellow: {
          300: '#fde047',
          400: '#facc15',
          600: '#ca8a04',
          900: '#713f12',
        }
      }
    },
  },
  plugins: [],
}
