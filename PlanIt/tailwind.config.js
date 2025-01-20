/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'green': '#39a1c4',
        // 'red': '#FF6868',
        // 'secondary' : '#555',
        // 'primary' : '#FCFCFC'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "garden"],
  },
}

