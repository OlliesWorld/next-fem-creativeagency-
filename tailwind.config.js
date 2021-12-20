module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
          red: {
            DEFAULT: '#F94F4F',
          },
          black: {
            DEFAULT: '#191921',
            dark: '#000000',
          },
          white: {
            DEFAULT: '#ffffff',
          },
      },
      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
