/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",   // Primary color
        secondary: "#7b7b7b", // Secondary color
        tertiary: "#f8f8f8",  // Tertiary color
        white: "#ffffff",     // White color
      },
    },
  },
  plugins: [],
};
