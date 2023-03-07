/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#001E6C",
        "blue": "#035397",
        "orange": "#E8630A",
        "yellow": "FCD900",
        "light-blue": "EFFFFD"
      }
    },
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}