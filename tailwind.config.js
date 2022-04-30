const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Fira Sans'", ...defaultTheme.fontFamily.sans],
        serif: ["'Marcellus'", ...defaultTheme.fontFamily.serif],
        mono: ["'Inconsolata'", ...defaultTheme.fontFamily.mono],
      },

      colors: {
        brands: {
          js: "#ede15b",
          ts: "#4178e7",
          react: "#58e3ff",
          go: "#27aeef",
          python: "#4495d3",
          godot: "#3ebcc1",
          node: "#87bc45",
          html: "#ef9b20",
          medicine: "#ff604e",
          ws: "#f46a9b",
          git: "#edbf33",
          db: "#c37af8",
          cli: "#976aff",
        },
      },
    },
  },
  plugins: [],
};
