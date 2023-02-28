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
    
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
    },  
    extend: {},
  },
  variants: {},
  plugins: [],
}
