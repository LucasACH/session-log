const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      lightBackground: colors.blueGray[50],
      lightFont: colors.blueGray[800],

      darkBackground: colors.blueGray[800],
      darkFont: colors.blueGray[50],

      blueGray: colors.blueGray,

      accent: colors.teal[300],
      error: colors.red[500],
      warning: colors.orange[500],
      information: colors.blue[500],
      success: colors.emerald[500],

      facebook: "#1778F2",
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
