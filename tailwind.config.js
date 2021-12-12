module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './Base/**/*.{js,ts,jsx,tsx}',
    './UiComponents/**/*.{js,ts,jsx,tsx}',
    './contents/**/*.html'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}