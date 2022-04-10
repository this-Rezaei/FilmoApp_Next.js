module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode:"jit"
  ,
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"', 'cursive']
      },
      screens:{
        "3xl":"2000px"
      }
    },
    
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
