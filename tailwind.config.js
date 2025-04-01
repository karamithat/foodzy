// tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.ts",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        segoe: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        inspiration: ["Inspiration", "sans-serif"],
        krona_one: ["Krona One", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          red: "#F53E32",
        },
      },
    },
  },
  plugins: [],
};
