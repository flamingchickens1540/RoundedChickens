/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    darkMode: 'class',
    extend: {
      'mainShadow' : '0px 0.5rem 0.5rem rgba(0, 0, 0, 0.25)',
    },
    colors: {
      backgroundLight: '#C2C2C2',
      backgroundDark: '#1C1C1C',
      primaryLight: '#D9D9D9',
      primaryDark: '#2C2C2C',
    },
    theme: {
      /** colors to be added */
      fontFamily: {
        sans: ['Teko', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

