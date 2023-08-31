/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primaryColor': '#14ad91',
      'secondaryColor': '#ba3033',
      'darkerColor': '#131313',
      'darkColor': '#181818',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#808080'
    },
    extend: {},
  },
  plugins: [],
}
