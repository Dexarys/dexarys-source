# Portfolio - Source Code

Ce repository contient le code source de mon portfolio personnel, développé avec **React** et **Vite**.

## Description

Ce projet est un portfolio dynamique qui présente mes projets, mes compétences, et d'autres informations importantes. Le frontend est construit avec React et géré par Vite pour une compilation rapide et un développement fluide.

## Structure du projet

- **Public** : Contient les fichiers statiques comme les images, les icônes, et autres assets accessibles directement.
- **Src** : Contient le code source du frontend, y compris les composants React et les fichiers de style.
- **Assets** : Contient les images et autres ressources nécessaires à l'application, maintenant déplacées pour un meilleur management des ressources.
- **Database** : Contient un fichier `base.json` avec les informations sur mes projets et autres données nécessaires au bon fonctionnement du portfolio.

## Développement local

Pour démarrer le projet en mode développement, exécutez la commande suivante :

```bash
npm install
npm run dev
```

Cela démarre le serveur de développement sur http://localhost:3000 avec HMR (Hot Module Replacement) activé.

## Build
Le build de production de l'application est généré et déployé dans un repository séparé, appelé /me. Le code source du portfolio est ensuite automatiquement compilé et mis à jour dans le repository de production pour être accessible via GitHub Pages.

## Dépendances
- React

- Vite

- ESLint pour le linting du code

## Plugins Vite utilisés
@vitejs/plugin-react : Utilise Babel pour le Fast Refresh dans le développement.

@vitejs/plugin-react-swc : Utilise SWC pour le Fast Refresh avec une meilleure performance.

## Configuration ESLint
Si vous développez une application de production, nous recommandons d'utiliser TypeScript et d'activer des règles de linting compatibles avec les types. Consultez le template TypeScript pour intégrer TypeScript et typescript-eslint dans votre projet.
