/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { gold: '#c99a4a', ink: '#0e0e0e', zb: '#5a7fa8', zg: '#8aa062', zp: '#86609a', rd: '#c84d41' },
      fontFamily: {
        head: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        body: ['"Barlow Semi Condensed"', 'Arial Narrow', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
