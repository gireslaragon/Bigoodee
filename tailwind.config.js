/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          PinkR: '#CB5A90',
          PinkC: '#F1CFDF',
          PinkB: '#FDEBF1',
          WhiteB: '#CB5A90',
          WhiteR: '#FEF6F9'
        }
      },
    },
    plugins: [],
  }
  