/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ['Prata', 'serif'],
        Outfit:['Outfit','serif'],
       
      },
    },
  },
  plugins: [],
}

