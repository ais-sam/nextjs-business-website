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
    container: {
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        "dark-blue": "#001E6C",
        "w-blue": "#035397",
        "w-orange": "#E8630A",
        "w-yellow": "#FCD900",
        "light-blue": "EFFFFD"
      },
      backgroundImage: {
        'hero': "url('public/images/hero.jpg')",
      }
    },
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
      "inter":  ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}