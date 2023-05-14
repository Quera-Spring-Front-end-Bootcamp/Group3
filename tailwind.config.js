/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gleft: "#118c80",
        gright: "#4ab7d8",
        white: "#fff",
        black: "#000",
        darkcyan: "#208d8e",
        darkgray: "#aaa",
      },
      fontFamily: {
        dana: "Dana",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "13xl": "32px",
      base: "16px",
      sm: "14px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
