/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gold: "#f2cb05",
        white: "#fff",
        gray: "#0a0a00",
        lemonchiffon: "#ffffc8",
      },
      fontFamily: {
        "krona-one": "'Krona One'",
        helvetica: "Helvetica",
      },
      borderRadius: {
        xl: "20px",
        "40xl": "59px",
      },
    },
    fontSize: {
      "31xl": "50px",
      "11xl": "30px",
      "131xl": "150px",
      "81xl": "100px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
