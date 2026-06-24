/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C41B46",
          text: {
            primary: "#222222",
            secondary: "#6B7280",
          },
        },
      },
    },
  },
  plugins: [],
};
