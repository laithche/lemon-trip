/** @type {import('tailwindcss').Config} */
module.exports = {
  // AGGIUNTO: Tailwind deve sapere quali file scansionare per le classi
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lemon: '#FACC15',
      },
      fontFamily: {
        title: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        // Ti consiglio di aggiungere anche Rajdhani qui se lo usi spesso
        rajdhani: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};