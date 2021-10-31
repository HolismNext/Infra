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
      'title-1': ['font-title-1'],
      'body-1': ['font-body-1'],
      'title-2': ['font-title-2'],
      'body-2': ['font-body-2'],
    },
    extend: {
      colors: {
        brown: {
          100: 'var(--color-brown-100)',
          200: 'var(--color-brown-200)',
          300: 'var(--color-brown-300)',
          450: 'var(--color-brown-450)',
          700: 'var(--color-brown-700)',
          900: 'var(--color-brown-900)',
        },
        gray: {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
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
