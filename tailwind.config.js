module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 900: "#302828", "800_9e": "#3b3b3b9e", "900_01": "#24272a" },
        white: { A700: "#ffffff" },
        black: { 900: "#000000" },
        lime: { 800: "#b2a500" },
        blue_gray: { 100: "#d5d1cf", 900: "#2d3438", "100_01": "#d4d0cf" },
        amber: { 600: "#ffb700" },
      },
      boxShadow: {},
      fontFamily: {
        inter: "Inter",
        calibri: "Calibri",
        inriaserif: "Inria Serif",
        arial: "Arial",
        berlinsansfbdemi: "Berlin Sans FB Demi",
      },
      textShadow: { ts: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
