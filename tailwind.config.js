module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "Yuji Mai, serif",
      },
      colors: {
        main: "rgb(48,197,178)",
        maindarker: "#0F4847",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
