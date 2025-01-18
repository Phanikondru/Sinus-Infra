/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '4xl': ['2.5rem', { lineHeight: '1.3' }],
        '3xl': ['2rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'xs': ['0.75rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};