/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: 'var(--green)',
        dark: 'var(--dark)',
        grey: 'var(--grey)',
      },
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
