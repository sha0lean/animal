# Projet Animal

Ce projet est une application **React** configurée avec **Vite.js**
J'utilise **ESLint**, **Prettier** et **Husky** pour les hooks de pré-commit.

## Scripts NPM

Dans le fichier `package.json`, plusieurs scripts sont définis pour faciliter le développement :

- `dev` : Lance le serveur de développement avec Vite.
- `build` : Effectue la construction du projet avec Vite.
- `lintvite` : Lance ESLint selon les recommandations de Vite.
- `lint` : Lance ESLint pour vérifier tout le code.
- `lint:fix` : Lance ESLint pour corriger les erreurs automatiquement.

## Configuration ESLint

ESLint est configuré pour vérifier les fichiers `.js` et `.jsx` dans le projet.
Il est également configuré pour rapporter les directives de désactivation inutilisées et pour échouer en cas d'avertissements.

## Hooks Husky

Husky est utilisé pour définir un hook de pré-commit qui exécute `lint-staged`.
Cela signifie que chaque fois que je fais un commit, `lint-staged` sera exécuté pour vérifier les erreurs de linting dans les fichiers modifiés.

## Dépendances

Ce projet utilise React 18.2.0 comme dépendance principale. Pour le développement, il utilise plusieurs packages, dont :

- `@types/react` et `@types/react-dom` pour les définitions de types TypeScript pour plus tard.
- `@vitejs/plugin-react` pour utiliser Vite.js avec React.
- `autoprefixer` pour ajouter automatiquement les préfixes de fournisseur aux CSS.
- `eslint`, `eslint-config-prettier`, `eslint-plugin-prettier`, `eslint-plugin-react` et `eslint-plugin-react-hooks` pour la configuration ESLint.

---

**React + Vite**  
_default documentation_

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---
