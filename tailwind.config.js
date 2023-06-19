/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        LightBackground: 'hsl(0, 0%, 97%)',
        VeryText: 'hsl(200, 15%, 8%)',
        DarkBackground: 'hsl(207, 26%, 17%)',
        DarkElement: 'hsl(209, 23%, 22%)',
  
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}

