module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contents/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown2: {
          50: '#f8f3ed',
          100: '#f5f2ea',
          200: '#eadac8',
          300: '#dac0a0',
          400: '#c7a070',
          450: '#bf925b',
          500: '#ad7d43',
          600: '#846033',
          700: '#674b28',
          800: '#584022',
          900: '#46331b'
        },
      },
      brown: {
        50: '#f8f3ed',
        100: '#f3ece2',
        200: '#e9dcc8',
        300: '#d8c09d',
        400: '#c5a26d',
        450: '#bc9355',
        500: '#a87f43',
        600: '#806133',
        700: '#664e29',
        800: '#544021',
        900: '#49371d',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
