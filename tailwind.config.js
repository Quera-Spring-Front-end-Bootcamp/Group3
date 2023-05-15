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
        primary: "#1E1E1E",
        secondary: "#208D8E",
        gleft: "#118c80",
        gright: "#4ab7d8",
        white: "#fff",
        black: "#000",
        darkgray: "#aaa",
      },
    },
    fontSize: {
      "13xl": "32px",
      sm: "14px",
    },
  },
  plugins: [],
};
