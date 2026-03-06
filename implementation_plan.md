# Plan de Refonte Visuelle : Accueil Ultra-Premium et "Cool"

L'objectif est de transformer la page d'accueil pour qu'elle offre une expérience visuelle mémorable, moderne et digne des plus grandes ligues sportives professionnelles. Nous allons utiliser des techniques de web design "State of the Art".

## User Review Required

> [!IMPORTANT]
> Veuillez valider cette approche. Ce design modifiera l'apparence de l'accueil pour la rendre beaucoup plus dynamique (effet de verre, animations, néon). Si cela vous convient, je procèderai à l'implémentation.

## Proposed Changes

### 1. Hero Section (Haut de page) : Immersion Totale
- **Superposition "Glassmorphism" :** Ajout de petites cartes d'information flottantes semi-transparentes par-dessus la vidéo de fond (ex: "Saison 2026", "Direct").
- **Typographie Impactante :** Le titre principal ("LIGUE PRO DES ACADÉMIES") aura un effet d'ombre portée lumineuse (glowing text) pour ressortir de façon dramatique sur la vidéo.
- **Micro-animations :** Ajout d'une flèche animée invitant au scroll vers le bas.

### 2. Design System : Effet Verre & Néon
- **Navbar & Ticker :** Application d'un effet `backdrop-filter: blur(15px)` (verre dépoli) pour la barre de navigation et le bandeau des matchs, laissant deviner le fond lors du défilement.
- **Cartes 3D :** Les cartes de la section "Nos Compétitions" se soulèveront avec une ombre colorée intense au survol, donnant une sensation de profondeur (effet 3D/Tilt).
- **Couleurs :** Accentuation du contraste entre le fond très sombre et des touches de vert vibrant (néon) sur les boutons et les bordures actives.

### 3. Animations au Défilement (Scroll Reveal)
- Tous les éléments de la page (textes, images, statistiques) n'apparaîtront plus d'un coup de manière statique, mais glisseront et apparaîtront en fondu (Fade-in Up) au fur et à mesure que l'utilisateur descend sur la page.

## Fichiers Modifiés

#### [MODIFY] style.css
Ajout de toutes les classes CSS modernes (Glassmorphism, animations clés, ombres lumineuses, refonte du Hero).

#### [MODIFY] index.html
Restructuration du Hero pour inclure les éléments flottants dynamiques.

## Verification Plan

### Manual Verification
- Je déploierai le serveur local et prendrai des captures d'écran de la nouvelle page d'accueil montrant les effets de transparence et de luminosité pour m'assurer que l'aspect "cool" est bien atteint.
