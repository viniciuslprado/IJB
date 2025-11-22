/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#532b2a',
        'primary-dark': '#411717',
        accent: '#be5838',
        secondary: '#678b64',
        'brown-warm': '#573c2c',
        'green-soft': '#6a8e67',
        'orange-soft': '#e77b5b',
        'orange-strong': '#e96b46',
        highlight: '#fbc046',
        text: '#2E2E2E',
        muted: '#6B6B6B',
        background: '#faf5f1'
      }
    ,
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 360ms ease-out both'
      }
    },
  },
  plugins: [],
}
