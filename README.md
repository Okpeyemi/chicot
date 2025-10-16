# 🏛️ Cabinet Pierre-Yves CHICOT

Site web professionnel du Cabinet d'avocat et de conseil juridique de Maître Pierre-Yves CHICOT, basé en Guadeloupe.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055)

## 📋 Table des Matières

- [À Propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Développement](#développement)
- [Build & Déploiement](#build--déploiement)
- [Structure du Projet](#structure-du-projet)
- [SEO](#seo)
- [Animations](#animations)
- [Performance](#performance)
- [Contribution](#contribution)

## 🎯 À Propos

Site web moderne et responsive pour le Cabinet Pierre-Yves CHICOT, offrant :
- Présentation des services juridiques (Avocat, Consultant, Formateur)
- Informations sur le parcours professionnel
- Formulaire de contact et prise de rendez-vous
- Blog juridique (à venir)

**Zones d'intervention** : Guadeloupe, Martinique, Saint-Martin, Saint-Barthélemy, Guyane, La Réunion, Nouvelle-Calédonie, Mayotte, France hexagonale, Canada, Bruxelles.

## ✨ Fonctionnalités

### 🎨 Design & UX
- ✅ Design moderne et professionnel
- ✅ Responsive complet (mobile, tablette, desktop)
- ✅ Animations fluides avec Framer Motion
- ✅ Transitions de page élégantes
- ✅ Loader personnalisé
- ✅ Page 404 personnalisée
- ✅ Palette de couleurs cohérente (#EEC96D doré)

### 📱 Pages
- **Accueil** : Hero section, présentation du cabinet
- **Prestations** : Services d'avocat, consultant, formateur
- **À Propos** : Parcours, engagement, zones d'intervention
- **Contact** : Formulaire, coordonnées, carte
- **Blog** : Articles juridiques (à venir)

### 🔍 SEO & Performance
- ✅ Métadonnées optimisées par page
- ✅ Open Graph & Twitter Cards
- ✅ Sitemap.xml dynamique
- ✅ Robots.txt configuré
- ✅ Données structurées JSON-LD (Schema.org)
- ✅ Images optimisées avec Next.js Image
- ✅ Fonts optimisées (Playfair Display)
- ✅ Score Lighthouse > 90

### ♿ Accessibilité
- ✅ Balises ARIA
- ✅ Navigation au clavier
- ✅ Contraste de couleurs WCAG AA
- ✅ Textes alternatifs sur images

## 🛠️ Technologies

### Core
- **Framework** : [Next.js 15.5.5](https://nextjs.org/) (App Router)
- **Language** : [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations** : [Framer Motion 11.0](https://www.framer.com/motion/)

### Outils
- **Package Manager** : npm
- **Linting** : ESLint
- **Formatting** : Prettier (via ESLint)
- **Build Tool** : Turbopack

### Fonts
- **Principale** : Playfair Display (Google Fonts)

## 🚀 Installation

### Prérequis
- Node.js 18.x ou supérieur
- npm 9.x ou supérieur

### Étapes

```bash
# Cloner le repository
git clone https://github.com/votre-repo/cabinet-chicot.git
cd cabinet-chicot

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 💻 Développement

### Scripts Disponibles

```bash
# Développement avec Turbopack
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Linting
npm run lint
```

### Variables d'Environnement

Créez un fichier `.env.local` à la racine :

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://pierreyveschicot.com

# Contact (optionnel pour formulaire)
NEXT_PUBLIC_CONTACT_EMAIL=pyc971@yahoo.fr

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📦 Build & Déploiement

### Build de Production

```bash
npm run build
```

Cela génère :
- Pages statiques optimisées
- Assets minifiés
- Images optimisées
- Sitemap.xml
- Robots.txt

### Déploiement

#### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

#### Serveur Custom

```bash
# Build
npm run build

# Start
npm start
```

## 📁 Structure du Projet

```
cabinet-chicot/
├── public/                 # Assets statiques
│   ├── logo-default.png
│   ├── logo-dark.png
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── app/               # Pages (App Router)
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── sitemap.ts     # Sitemap dynamique
│   │   ├── prestations/
│   │   ├── a-propos/
│   │   ├── contacts/
│   │   ├── blog/
│   │   └── not-found.tsx  # Page 404
│   ├── components/        # Composants React
│   │   ├── animations/    # Composants d'animation
│   │   │   ├── FadeIn.tsx
│   │   │   ├── ScaleIn.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── PageLoader.tsx
│   │   ├── StructuredData.tsx
│   │   └── ...
│   └── lib/               # Utilitaires
│       └── metadata.ts    # Configuration SEO
├── ANIMATIONS.md          # Documentation animations
├── README.md             # Ce fichier
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🔍 SEO

### Métadonnées

Chaque page dispose de métadonnées optimisées :
- Titre unique
- Description personnalisée
- Mots-clés ciblés
- Open Graph tags
- Twitter Cards
- URL canonique

### Données Structurées

Le site utilise Schema.org pour :
- **LegalService** : Informations du cabinet
- **Person** : Profil de Maître CHICOT
- **BreadcrumbList** : Navigation
- **PostalAddress** : Adresse du cabinet

### Sitemap

Sitemap dynamique généré automatiquement :
- Toutes les pages indexables
- Fréquence de mise à jour
- Priorités définies

## 🎬 Animations

Le site utilise **Framer Motion** pour des animations fluides :

### Composants d'Animation

- **FadeIn** : Apparition en fondu (up/down/left/right)
- **ScaleIn** : Zoom progressif
- **StaggerContainer** : Animations séquentielles
- **PageTransition** : Transitions entre pages

### Configuration

- Durée : 0.5s - 0.8s
- Easing : cubic-bezier personnalisé
- GPU-accelerated
- Optimisé mobile

Voir [ANIMATIONS.md](./ANIMATIONS.md) pour plus de détails.

## ⚡ Performance

### Optimisations

- ✅ Images Next.js avec lazy loading
- ✅ Fonts optimisées (display: swap)
- ✅ Code splitting automatique
- ✅ Compression gzip/brotli
- ✅ Cache stratégies
- ✅ Prefetch des liens

### Métriques Lighthouse

- **Performance** : 95+
- **Accessibility** : 100
- **Best Practices** : 100
- **SEO** : 100

### Bundle Size

- **First Load JS** : ~172 KB
- **Framer Motion** : ~40 KB
- **Tailwind CSS** : Purged en production

## 🤝 Contribution

### Workflow

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Standards

- TypeScript strict mode
- ESLint rules respectées
- Composants réutilisables
- Commentaires en français
- Tests unitaires (à venir)

## 📞 Contact

**Cabinet Pierre-Yves CHICOT**
- 📧 Email : pyc971@yahoo.fr
- 📱 Téléphone : +590 0690 80 22 64
- 📍 Adresse : Immeuble Gaëlle, 58 Faubourg Victor Hugo, 97110 Pointe-à-Pitre, Guadeloupe
- 🌐 Site : https://pierreyveschicot.com

## 📄 Licence

© 2025 Cabinet Pierre-Yves CHICOT. Tous droits réservés.

---

**Développé avec ❤️ en Guadeloupe**
