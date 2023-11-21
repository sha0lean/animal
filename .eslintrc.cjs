module.exports = {
  // Indique que c'est la configuration ESLint racine.
  root: true,

  // Spécifie l'environnement, ajoutant la compatibilité avec ES2021.
  env: {
    browser: true,
    es2021: true,
  },

  // Ajoute les règles recommandées pour ESLint, React, React Hooks, et Prettier.
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],

  // Ignore les fichiers et dossiers spécifiés lors de la vérification ESLint.
  ignorePatterns: ["dist", ".eslintrc.js"],

  // Paramètres du parser pour la version ECMAScript, le type de module, et les fonctionnalités JSX.
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  // Configuration pour le détecteur automatique de la version de React.
  settings: {
    react: {
      version: "detect",
    },
  },

  // Ajoute les plugins nécessaires pour React, React Hooks, et Prettier.
  plugins: ["react", "react-hooks"],

  // Personnalise les règles selon tes préférences.
  rules: {
    // Désactive les PropTypes si tu n'utilises pas TypeScript.
    "react/prop-types": "off",

    // Règles pour les React Hooks.
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
}
