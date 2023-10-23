/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    extend: {
      theme: {
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

