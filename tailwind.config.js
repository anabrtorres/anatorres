const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { transitionDuration: ['hover', 'focus', 'display'] },
    fontFamily: {
      sans: ['montserrat', 'ui-sans-serif'],
      serif: ['fira code', 'ui-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: {
        550: '#30C1FF',
        450: '#30FFF3',
        350: '#64D1FF',
        250: '#97E0FF',
        150: '#CBF0FF',
      },
      yellow: {
        450: '#FFF330',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'group-hover', 'hover'],
      display: ['responsive', 'group-hover', 'hover'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
};
