/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        transitionProperty: {
          'max-height': 'max-height',
          'transform': 'transform',
          'opacity': 'opacity',
          'left': 'left',
        },
        fontFamily: {
          sans: ['Manrope', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        colors: {
          'white': '#ffffff',
          'gray': {
            200: '#D9D9D9',
            300: '#9D9D9D',
            400: '#686868',
            500: '#57534E',
            550: '#727272',
            600: '#403F40',
            625: '#837A7A',
            650: '#959595',
            700: '#282627',
            800: '#1E1C1D',
            900: '#100E0F',
            950: '#2F2E2F'
          },
          'cyan': {
            350: '#70e6ff',
            500: '#00D2FF',
            700: '#155B75',
            900: '#001923'
          },
          'red': {
            500: '#FF4D4D',
            600: '#D92D20',
            800: '#912018',
            900: '#742621'
          },
          'yellow': {
            400: '#FFBE5B',
            500: '#F79009',
            600: '#DC6803',
            800: '#93370D',
          },
          'green': {
            700: '#027A48',
            800: '#05603a'
          }
        }
      },
    },
  plugins: [],
}