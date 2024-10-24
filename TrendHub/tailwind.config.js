/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans serif"],
      },
      colors: {
        AboutCirclePurple: "#977DF4",
        AboutCircleDarkPurple: "#977DF4",
        AboutCirclePink: "#FFE9EA",
        AboutCircleLightPink: "#FFE9EA",
        AboutCircleLight: "#FFE9EA",
        productGraphDesign: "#252B42",
        heroLeft: "#96E9FB",
        heroRight: "#ABECD6",
        aboutBlue: "#2A7CC7",
        heroBonus: "#977DF4",
        customLightBlue: "#23A6F0",
        customBlue: "#2D8BC0",
        success: "#2DC071",
        iconGray: "#737373",
        lightTextGray: "#858585",
        bgGray: "#FAFAFA",
        bgInput: "#F9F9F9",
        productGray: "#BDBDBD",
        productGreen: "#23856D",
        alert: "#E77C40",
        dangerRed: "#E74040",
        lightGray: "#ECECEC",
        borderGray: "#DDDDDD",
        dropDownGray: "#F9F9F9",
        yellow: "#F3CD03",
      },
      opacity: {
        75: "0.75",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
