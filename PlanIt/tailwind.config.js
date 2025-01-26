/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#F23834',
        'linen': '#f0ddc7',
        'cream' : '#FAF7F2',
        'black' : '#0D0D0C',
        'tasktext' : '#4B332F',
        'tasktext2' : '#201713',
        'amber' : '#F2B258',
        'pink' : '#F87777',
        'ashrose' : '#C4A49F',
        'green' : '#5C9967',
        'lightgreen' : '#73a17d',
        'gray' : '#63605F',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "garden", "pastel"],
  },
}

