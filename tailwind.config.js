// @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
      }
    },
  },
  plugins: [],
}

