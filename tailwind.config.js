/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'volkhov': ['Volkhov', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

