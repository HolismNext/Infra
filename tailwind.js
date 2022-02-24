module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './Base/**/*.js',
    './UiComponents/**/*.js',
    './contents/**/*.{html,md}'
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 5s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(0.5rem) scale(0.5)'
          },
          '50%': {
            transform: 'translateY(0) scale(0.5)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}