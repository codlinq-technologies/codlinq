/** @type {import('tailwindcss').Config} */
// import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // Enables dark mode with 'dark' class
  theme: {
    extend: {
      colors: {
        brand: "#ff7722",
        darkbg: "#2c2c2c",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
  // plugins: [lineClamp], // Add the line-clamp plugin for clamping testimonial text
};
