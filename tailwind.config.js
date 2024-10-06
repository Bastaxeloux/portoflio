// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chemin vers les fichiers de votre projet où Tailwind sera appliqué
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Ajout du plugin Line Clamp
  ],
};
