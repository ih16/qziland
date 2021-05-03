// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22C783",
          darker: "#008964",
          lighter: "#CBF9E5",
        },
        admin: {
          DEFAULT: "#8B9CE2",
          darker: "#667ACD",
          lighter: "#D0D8F5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
