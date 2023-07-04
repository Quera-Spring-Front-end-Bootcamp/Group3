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
        '208D8E': 'rgba(32, 141, 142, 1)',
        '50bae0': 'rgba(80, 186, 224, 1)',
        'OP50bae0':'rgba(80, 186, 224, 0.2)',
        '78C6B0': 'rgba(120, 198, 176, 1)',
        '6EE7B7': 'rgba(110, 231, 183, 1)',
        'OP6EE7B7': 'rgba(110, 231, 183, 0.2)',
        '76BC86': 'rgba(118, 188, 134, 1)',
        '4ADE80': 'rgba(74, 222, 128, 1)',
        'OP4ADE80': 'rgba(74, 222, 128, 0.2)',
        '80DC69': 'rgba(128, 220, 105, 1)',
        'E46161': 'rgba(228, 97, 97, 1)',
        'F87171': 'rgba(248, 113, 113, 1)',
        'OPF87171': 'rgba(248, 113, 113, 0.2)',
        'E17E80': 'rgba(225, 126, 128, 1)',
        'FB7185': 'rgba(251, 113, 133, 1)',
        'OPFB7185': 'rgba(251, 113, 133, 0.2)',
        'EC8182': 'rgba(236, 129, 130, 1)',
        'F3C567': 'rgba(243, 197, 103, 1)',
        'FDBA74': 'rgba(253, 186, 116, 1)',
        'OPFDBA74': 'rgba(253, 186, 116, 0.2)',
        'E57A57': 'rgba(229, 122, 87, 1)',
        'F1A25C': 'rgba(241, 162, 92, 1)',
        textPrimary: 'var(--textPrimary)',
        primary: 'var(--primary)',
        secondary:  'var(--secondary) ',
        secondary20:'var(--secondary20)'
      

      }
    },
  },
  plugins: [],

};