/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B3C5A", // Match the logo's deep slate/blue lettering
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0284C7", // Cyan/blue gradient match
          foreground: "#FFFFFF",
        },
        background: "#F9FAFB", // Clean light background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

