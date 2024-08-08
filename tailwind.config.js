// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', // Global padding for all containers
      screens: {
        'xl': '1312px', // Extra-large screens
      },
    },
    fontFamily: {
      'teko': ['Teko', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#FF9900',
      }
    }
  },
  plugins: [],
}