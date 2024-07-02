/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'service' : ['url(assets/bg-dark-50.png), url(assets/bg_service.png)'],
      },
      colors: {
        'navy': '#190422',
      },
    },
    fontFamily: {
      'pop' : ['Poppins', 'sans-serif']
    },
    fontSize: {
      '2xl': ['24px', '32px'],
      '3xl': ['32px', '40px'],
      '4xl': ['48px', '72px'],
      '6xl': ['64px', '96px'],
      '8xl': ['80px', '96px'],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

