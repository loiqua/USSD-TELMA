# Prog-5-USSD

Un simulateur d'application USSD pour les services bancaires mobiles, développé en TypeScript avec des bonnes pratiques de développement.

## Fonctionnalités

- Simulation d'un service USSD Orange
- Menus interactifs pour différentes fonctionnalités bancaires
- Navigation intuitive entre les menus
- Affichage de données
- Stockage local pour les transactions

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation

```bash
# Cloner le repository
git clone https://github.com/votreusername/prog-5-ussd.git
cd prog-5-ussd

# Installer les dépendances
npm install
```

## Développement

```bash
# Démarrer l'application en mode développement
npm run dev
```

## Commandes disponibles

- `npm run dev` : Démarrer l'application en mode développement
- `npm run build` : Compiler le projet TypeScript
- `npm run start` : Démarrer l'application compilée
- `npm run lint` : Exécuter le linter ESLint
- `npm run lint:fix` : Corriger automatiquement les problèmes de lint
- `npm run format` : Formater le code avec Prettier
- `npm test` : Exécuter les tests

## Structure du projet

```
prog-5-ussd/
├── .github/           # Configuration GitHub Actions
├── dist/              # Code compilé (généré par TypeScript)
├── docs/              # Documentation
├── src/               # Code source
│   ├── cli.ts         # Interface en ligne de commande
│   ├── index.ts       # Point d'entrée de l'application
│   ├── menus.ts       # Définitions des menus USSD
│   ├── types.ts       # Types et interfaces
│   ├── ussdService.ts # Service USSD
│   └── utils.ts       # Fonctions utilitaires
├── .eslintrc.json     # Configuration ESLint
├── .prettierrc        # Configuration Prettier
├── package.json       # Dépendances et scripts
└── tsconfig.json      # Configuration TypeScript
```

## Conventions de code

Le projet suit des conventions de nommage et de style strictes. Consultez le fichier `docs/CONVENTIONS.md` pour plus d'informations.

## Licence

ISC 