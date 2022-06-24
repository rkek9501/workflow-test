const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      "md": ["0.938rem", "1.5rem"], // 15px
    },
    screens: {
      ...defaultTheme.screens,
      "tablet": { min: "1px", max: "980px" },
    },
    spacing: {
      ...defaultTheme.spacing,
      "4.5": "1.125rem", // 18px
      "7.5": "1.875rem", // 30px
      "15": "3.75rem", // 60px
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
