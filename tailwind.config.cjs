/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "hsl(240, 50%, 2%)",
        navGradient: "#121212",
        "rating-green": "#307841",
        "close-btn": "#181818",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
