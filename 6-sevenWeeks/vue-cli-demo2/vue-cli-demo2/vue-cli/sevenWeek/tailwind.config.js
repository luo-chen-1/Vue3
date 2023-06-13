module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        'ocean': '#16c0b0',
        'leaf': '#84cf6a',
        'mist': '#d8d8d8',
        'midnight': '#39495c',
        'cloud': '#ffffff',
        'purple': '#BB7CD7',
      },
    },
    
    screen: {
      'md': '860px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
