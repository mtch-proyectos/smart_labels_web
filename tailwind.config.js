/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af', // Puedes personalizar tus colores corporativos
      }
    },
  },
  plugins: [],
}