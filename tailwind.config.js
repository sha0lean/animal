/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // prettier-ignore
  theme: {
    // redéfinir complètement une propriété
    screens: {
      sm:   "480px",
      md:   "768px",
      lg:   "976px",
      xl:   "1440px",
    },

    extend: {
      // ajouter ou modifier légèrement les paramètres par défaut.
      colors: {
        // bg-"alias" || text-"alias" || border-"alias" || etc...
        blue:        "#1fb6ff",
        pink:        "#EA80FC",
        green:       "#13ce66",
        gray:        "#8492a6",
        graylight:   "#d3dce6",
        graydark:    "#273444",
      },
      backgroundColor: {
        // bg-"alias"
        primary:     "#292929",
        secondary:   "#fff0bf",
      },
      textColor: {
        // text-"alias"
        primary:     "#f3f3f3",
        secondary:   "#000000",
      },
      fontFamily: {
        // font-"alias"
        body:      ["Open Sans",  "sans-serif"],
        heading:   ["Montserrat", "sans-serif"],
        geist:     ["Geist",      "sans-serif"],
      },
    },
    plugins: [],
  },
}
