/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px",
      wd: "1280px",
    },
    extend: {
      colors: {
        primary: "#F2CB05",
        secondary: "#F29F05",
        tertiary: "#277365",
        fourth: "#1D594E",
        black: "#000",
        gold: "#f2cb05",
        white: "#fff",
        gray: "#7B9D97",
        "light-gray": "#3E3E3E",
        "dark-gray": "#232323",
        "lighter-gray": "#6c6c6c",
      },
      fontFamily: {
        "title-font": "'Krona One'",
        "title-font-secondary": "Helvetica",
      },
      borderRadius: {
        xl: "20px",
        "40xl": "59px",
      },
    },
    fontSize: {
      xl: "1.2rem",
      "11xl": "30px",
      "31xl": "50px",
      "81xl": "100px",
      "131xl": "150px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
