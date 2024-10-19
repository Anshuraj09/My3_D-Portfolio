/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "gray-900": "#1a202c",  // Dark mode background
        "gray-800": "#2d3748",  // Dark mode elements
        "gray-200": "#edf2f7",  // Light mode background
        "gray-400": "#cbd5e0",  // Dark mode text color
      },
    },
  },
  plugins: [],
};
