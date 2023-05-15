/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {

        padding: {
          DEFAULT: '1rem',
          md: '1rem',
          lg: '2rem',
          "3xl": '3rem',

        },
      },
      colors: {
        primary: "#1E1E1E",
        secondary: "#208D8E"
      }
    },
  },
  plugins: [],
}