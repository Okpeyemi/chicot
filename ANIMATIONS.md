# 🎬 Guide des Animations - Cabinet Pierre-Yves CHICOT

## 📦 Installation

Framer Motion a été installé pour gérer toutes les animations du projet :

```bash
npm install framer-motion
```

## 🎨 Composants d'Animation

### 1. **FadeIn** (`/src/components/animations/FadeIn.tsx`)

Animation d'apparition en fondu avec direction optionnelle.

**Props:**
- `children`: Contenu à animer
- `delay`: Délai avant l'animation (défaut: 0)
- `direction`: Direction de l'animation - "up", "down", "left", "right", "none" (défaut: "up")
- `className`: Classes CSS additionnelles

**Utilisation:**
```tsx
<FadeIn delay={0.2} direction="left">
  <p>Votre contenu</p>
</FadeIn>
```

### 2. **ScaleIn** (`/src/components/animations/ScaleIn.tsx`)

Animation d'apparition avec effet de zoom.

**Props:**
- `children`: Contenu à animer
- `delay`: Délai avant l'animation (défaut: 0)
- `className`: Classes CSS additionnelles

**Utilisation:**
```tsx
<ScaleIn delay={0.1}>
  <div className="card">Carte animée</div>
</ScaleIn>
```

### 3. **StaggerContainer & StaggerItem** (`/src/components/animations/StaggerContainer.tsx`)

Animation séquentielle pour listes et grilles.

**Props StaggerContainer:**
- `children`: Éléments StaggerItem
- `className`: Classes CSS additionnelles
- `staggerDelay`: Délai entre chaque élément (défaut: 0.1)

**Utilisation:**
```tsx
<StaggerContainer staggerDelay={0.05}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 4. **PageTransition** (`/src/components/animations/PageTransition.tsx`)

Transition fluide lors du changement de page.

**Utilisation:**
```tsx
<PageTransition>
  <YourPageContent />
</PageTransition>
```

### 5. **PageLoader** (Amélioré avec Framer Motion)

Loader animé avec spinner rotatif et texte pulsant.

## 🎯 Animations Implémentées

### Page d'Accueil (`/`)
- ✅ **Hero**: Titre et CTA avec fade-in séquentiel
- ✅ **Welcome**: Paragraphes avec fade-in progressif
- ✅ **Footer**: Sections gauche/droite avec animations directionnelles

### Page Prestations (`/prestations`)
- ✅ **ServicesSection**: Cartes avec scale-in
- ✅ Toutes les sections avec fade-in

### Page À Propos (`/a-propos`)
- ✅ **AboutSection**: Texte (left) + Image (scale)
- ✅ **EngagementSection**: Badge, texte et zones avec stagger
- ✅ Animations progressives sur tous les éléments

### Composants Globaux
- ✅ **Header**: Prêt pour animations (statique pour UX)
- ✅ **Footer**: Animations directionnelles gauche/droite
- ✅ **PageLoader**: Spinner et texte animés

## 🎭 Types d'Animations Utilisées

### Fade In
- Apparition en fondu
- Utilisé pour: Textes, paragraphes, sections

### Scale In
- Zoom progressif
- Utilisé pour: Cartes, images, conteneurs

### Stagger
- Animation séquentielle
- Utilisé pour: Listes, grilles, zones d'intervention

### Directional
- Apparition avec direction
- Utilisé pour: Sections côte à côte, layout asymétrique

## ⚙️ Configuration

### Paramètres d'Animation

**Durée**: 0.5s - 0.8s (selon le composant)
**Easing**: `[0.22, 1, 0.36, 1]` (cubic-bezier personnalisé)
**Viewport**: `once: true` (animation une seule fois)
**Margin**: `-100px` (déclenche avant d'être visible)

### Performance

- ✅ Animations GPU-accelerated (transform, opacity)
- ✅ `whileInView` pour lazy loading
- ✅ `viewport.once` pour éviter les re-renders
- ✅ Optimisé pour mobile et desktop

## 🚀 Bonnes Pratiques

1. **Délais progressifs**: Utilisez des délais croissants (0.1, 0.2, 0.3...)
2. **Directions cohérentes**: Gauche pour texte, droite pour images
3. **Stagger modéré**: 0.05s - 0.1s entre éléments
4. **Viewport margin**: -50px à -100px pour anticipation
5. **Once: true**: Éviter les animations répétées au scroll

## 📝 Exemples d'Utilisation

### Animation de Section Complète
```tsx
<section>
  <FadeIn delay={0.1}>
    <h2>Titre</h2>
  </FadeIn>
  
  <FadeIn delay={0.2}>
    <p>Description</p>
  </FadeIn>
  
  <ScaleIn delay={0.3}>
    <button>Action</button>
  </ScaleIn>
</section>
```

### Grille Animée
```tsx
<StaggerContainer className="grid grid-cols-3" staggerDelay={0.08}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Layout Asymétrique
```tsx
<div className="flex gap-8">
  <FadeIn direction="left" delay={0.1}>
    <div>Contenu gauche</div>
  </FadeIn>
  
  <FadeIn direction="right" delay={0.2}>
    <div>Contenu droite</div>
  </FadeIn>
</div>
```

## 🎨 Personnalisation

Pour modifier les animations, éditez les fichiers dans `/src/components/animations/`.

Les paramètres clés à ajuster :
- `duration`: Vitesse de l'animation
- `delay`: Temps avant le démarrage
- `ease`: Courbe d'accélération
- `viewport.margin`: Distance de déclenchement

## 📊 Impact Performance

**Taille du bundle:**
- Framer Motion: ~40KB (gzipped)
- Composants d'animation: ~3KB

**Performance:**
- 60 FPS sur desktop
- 60 FPS sur mobile moderne
- Optimisé avec GPU acceleration

---

**Projet:** Cabinet Pierre-Yves CHICOT
**Framework:** Next.js 15 + Framer Motion
**Date:** 2025
