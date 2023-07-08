/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      }
    },
    colors: {
      "primary-light": "#F9EFE4",
      "button-blue": "#176AE5",
      "bg-card": "#FFFFFF",
      "base-dark": "#2F2F30",
      "disabled-font": "#98999A",
      "secondary-light": "#FF751A",
      "white": "#FFFFFF"
    }
  },
  plugins: [],
}

