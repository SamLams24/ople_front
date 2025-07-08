/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#FDFBF5", // Notre fond principal
        "noir-profond": "#1a1a1a", // Pour les textes importants
        "gris-moyen": "#6b7280", // Pour les textes secondaires
        accent: "#FF6B00", // Un orange vif et moderne pour les boutons
        "accent-hover": "#E66000"
      },
      fontFamily: {
        // On choisit une police moderne.
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
