/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '0',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: "#208D8E",
        secondary: "#06846F",
      },
    },
  },
  plugins: [],
};
