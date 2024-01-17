/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--inter)',
        roboto: 'var(--roboto)',
        hoves_500: 'var(--hoves-500)'
      },
      colors: {
        purple: '#5D5FEF',
        smText: '#828282'
      }

    },
  },
  plugins: [],
}