/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'colorPrimary': '#14ad91',
      'secondaryColor': '#ba3033',
      'darkColor': '#181818',
      'white': '#ffffff',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}
