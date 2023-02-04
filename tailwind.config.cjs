/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './src/**/*.tsx',
  './index.html'],
  theme: {
    extend: {
       colors: {
        fonteVerde: '#1F9114',
        fonteBranca: '#f5fffb',
        fontePreta: '#070708',
        pretoClaro: '#0b0b0d',
      },
    },
  },
  plugins: [],
}
