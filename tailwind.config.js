/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      },
      colors: {
        gray: {
          700: 'rgb(96, 103, 112)',
        },
      },
      fontSize: {
        '13px': '13px',
      },
      lineHeight: {
        6: '24px',
      },
    },
  },
  plugins: [],
}
