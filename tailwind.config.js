/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          Primary: '#1E1E1E',
          Secondary: '#161637',
          One:'#84BFC5',
          Two: '#8ECAA8',
          Three: '#95D38A',
          Four: '#78B7E2'
        }
      },
    },
    plugins: [],
  }
  