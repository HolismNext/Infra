module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contents/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'secondary': ['font-secondary'],
      'primary': ['font-primary'],
      'title': ['font-title'],
    },
    extend: {
      colors: {
        brown: {
          100: 'var(--color-brown-100)',
          200: 'var(--color-brown-200)',
          450: 'var(--color-brown-450)',
          700: 'var(--color-brown-700)',
          900: 'var(--color-brown-900)',
        },
        gray: {
          1100: 'var(--color-gray-1100)',
          1200: 'var(--color-gray-1200)',
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
