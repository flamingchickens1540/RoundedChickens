/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    extend: {
      'mainShadow' : '0px 0.5rem 0.5rem rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [],
}

