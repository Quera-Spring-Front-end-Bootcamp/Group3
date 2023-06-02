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
        '208D8E': '#208D8E',
        '50bae0': '#50bae0',
        '78C6B0': '#78C6B0',
        '6EE7B7': '#6EE7B7',
        '76BC86': '#76BC86',
        '4ADE80': '#4ADE80',
        '80DC69': '#80DC69',
        'E46161': '#E46161',
        'F87171': '#F87171',
        'E17E80': '#E17E80',
        'FB7185': '#FB7185',
        'EC8182': '#EC8182',
        'F3C567': '#F3C567',
        'FDBA74': '#FDBA74',
        'E57A57': '#E57A57',
        'F1A25C': '#F1A25C',
        textPrimary: 'var(--textPrimary)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      }
    },
  },
  plugins: [],

};