/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // prettier-ignore
  theme: {
    // redéfinir complètement une propriété
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // ajouter ou modifier légèrement les paramètres par défaut.
      colors: {
        // bg-"alias" || text-"alias" || border-"alias" || etc...
        blue: "#1fb6ff",
        pink: "#EA80FC",
      },
      backgroundColor: {
        // bg-"alias"
        primary: "#1E1E1E",
        secondary: "#DDCFB9",
      },
      textColor: {
        // text-"alias"
        primary: "#f3f3f3",
        secondary: "#000000",
      },
      fontFamily: {
        // font-"alias"
        heading:  ["Italiana",  "sans-serif"],
        body:     ["Montserrat", "sans-serif"],
        special:  ["Geist",     "sans-serif"],
      },
      plugins: [
        '@tailwindcss/typography',
      ],
    },
  },
}
