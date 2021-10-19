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
        brown: {
          50: '#f8f3ed',
          100: '#f4ebe2',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
