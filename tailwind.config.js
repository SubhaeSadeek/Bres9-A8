/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainGray: "rgba(9, 8, 15, 0.60)",
        priceGRay: "rgba(9, 8, 15, 0.80)",
        mainTitle: "#0B0B0B",
        subTitle: "#09080F",
        themeText: "#9538E2",
        inStockText: "#309C08",
      },
      borderColor:{
        themeBorder: "#9538E2",
        inStockBrd: "#309C08",
      },
      backgroundColor:{
        themeBG: "#9538E2",
        inStockBG: "#309C08"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

