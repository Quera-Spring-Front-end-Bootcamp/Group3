/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          md: "1rem",
          lg: "2rem",
          xl: "3rem",
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
