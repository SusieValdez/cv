const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Fira Sans'", ...defaultTheme.fontFamily.sans],
        serif: ["'Cormorant Garamond'", ...defaultTheme.fontFamily.serif],
        mono: ["'Inconsolata'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
