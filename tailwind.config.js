/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      backgroundImage: {
      'bg_img': "url('/src/assets/bg.png')",
    }},
  },
  plugins: [],
}

