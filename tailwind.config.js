/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parish: {
          white: '#FFFFFF',      // O branco do topo
          light: '#EBE4DB',      // Fundo claro (Zag)
          beige: '#C6B7A0',      // Montserrat
          gold: '#9F7D4F',       // O tom dourado/ocre (Open Sans)
          brown: '#683B1C',      // Marrom médio (Poppins)
          terracotta: '#8B3322', // O tom avermelhado (Antom)
          dark: '#2C1E12',       // O tom café quase preto (Gagalin)
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'], // Substitutos para Hatton/Antom
      },
      backgroundImage: {
        'texture-paper': "url('/src/assets/textures/papel-amassado.jpg')", // Exemplo
      }
    },
  },
  plugins: [],
}