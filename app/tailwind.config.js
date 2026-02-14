/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // o 'class'
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lemon: '#FACC15',
      },
      fontFamily: {
        title: ["Playfair Display", "serif"], // font per titoli
        body: ["Inter", "sans-serif"],        // font per testo normale
      },
    },
  },
  plugins: [],
};
