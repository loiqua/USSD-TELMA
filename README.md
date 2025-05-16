# 🏦 MVola USSD Simulator

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

> 💡 Bienvenue dans le projet USSD Simulateur MVola. Ce projet simule l'interface USSD de MVola pour le code `#111*1#`.

## 🚀 Démarrage Rapide

### Prérequis

- ⚡ Node.js (version 18 ou supérieure)
- 📦 npm (gestionnaire de paquets Node.js)

### Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd prog-5-ussd
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## ✨ Fonctionnalités

- 📱 Simulation de l'interface USSD MVola
- 🔄 Menu interactif avec navigation
- 💰 Gestion des transactions
- ✅ Validation des entrées utilisateur

## 📁 Structure du Projet

```
prog-5-ussd/
├── src/
│   ├── types/          # Types TypeScript
│   │   └── ussd.ts
│   ├── utils/          # Utilitaires
│   │   └── validation.ts
│   ├── config/         # Configuration
│   │   └── constants.ts
│   ├── services/       # Services
│   │   └── ussdService.ts
│   └── index.ts        # Point d'entrée
├── .eslintrc.json     # Configuration ESLint
├── .prettierrc        # Configuration Prettier
├── tsconfig.json      # Configuration TypeScript
└── package.json       # Dépendances et scripts
```

## 🛠️ Bonnes Pratiques de Développement

### 📝 Convention de Nommage
- `camelCase` pour les variables et fonctions
- `PascalCase` pour les classes et interfaces
- `kebab-case` pour les noms de fichiers

### 🔍 Linting et Formatting
- ESLint pour la détection des erreurs de code
- Prettier pour le formatage automatique du code
- Configuration stricte TypeScript

### 🔄 Intégration Continue
Le projet utilise GitHub Actions pour :
- ✅ Vérification automatique du code à chaque push
- 🔍 Exécution des tests de linting
- 🎯 Validation de la qualité du code

## 📜 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | 🚀 Lance le serveur de développement |
| `npm run build` | 📦 Compile le projet |
| `npm run lint` | 🔍 Exécute le linter |
| `npm run format` | ✨ Formate le code avec Prettier |

## 🤝 Contribution

1. 🍴 Créez une branche pour votre fonctionnalité
2. 💾 Committez vos changements
3. 📤 Poussez vers la branche
4. 🔄 Créez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
  <sub>Construit avec ❤️ par l'équipe MVola USSD</sub>
</div>
