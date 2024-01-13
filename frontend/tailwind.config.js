/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: '#FF8C00',    // Dark Orange
      secondary: '#FFD700',  // Gold
      accent: '#FFA07A',     // Light Salmon
      background: '#FFDAB9'  // Peach Puff
      ,
    }},
  },
  plugins: [],
}
