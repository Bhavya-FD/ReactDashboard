/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#00712D',
        musturd: '#FF9100',
        lightGreen: '#D5ED9F',
        white : '#FFFBE6'
      }
    },
  },
  plugins: [],
}

