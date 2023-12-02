/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        white: '#fcfcfc'
      },
      fontFamily: {
        'custom': ['Poppins', 'sans-serif',],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}