const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './Base/**/*.js',
    './UiComponents/**/*.js',
    './contents/**/*.{html,md}'
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
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
  important: true
}

const xs = '360px'
const { sm, md, lg, xl } = defaultTheme.screens
const xxl = defaultTheme.screens['2xl']

module.exports.xs = xs.replace('px', '') * 1;
module.exports.sm = sm.replace('px', '') * 1;
module.exports.md = md.replace('px', '') * 1;
module.exports.lg = lg.replace('px', '') * 1;
module.exports.xl = xl.replace('px', '') * 1;
module.exports.xxl = xxl.replace('px', '') * 1;