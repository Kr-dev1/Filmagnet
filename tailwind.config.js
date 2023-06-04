/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "876px", // Updated value
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        electro: ["Electrolize", "sans-serif"],
        homenaje: ["Homenaje", "sans-serif"],
        french: ["IM Fell French Canon", "san-serif"],
        imprima: ["Imprima", "sans-serif"],
      },
    },
  },
  plugins: [],
};
