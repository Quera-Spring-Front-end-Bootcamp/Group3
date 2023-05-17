/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
<<<<<<< HEAD
          DEFAULT: '1rem',
          md: '1rem',
          lg: '2rem',
          "3xl": '3rem',

=======
          DEFAULT: "1rem",
          md: "1rem",
          lg: "2rem",
          xl: "3rem",
>>>>>>> 21885d4d380483841b7947ce064c574677e0431f
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
