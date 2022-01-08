module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#1d9bf0",
          hover: "#1a8cd8",
        },
        secondary: {
          default: "#d9d9d9",
          gray: "#6e767d",
        },
      },
    },
  },
  plugins: [],
};
