/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    
    extend: {
      theme: {
        colors: {
          'backgroundLight': '#C2C2C2',
          'backgroundDark': '#1C1C1C',
        },
        /** colors to be added */
        fontFamily: {
          sans: ['Teko', 'sans-serif'],
          sans: ['Poppins', 'sans-serif'],
        },
      }
    },
  },
  plugins: [],
}

