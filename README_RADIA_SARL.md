# RADIA SARL - Site Vitrine

Site vitrine multilingue (FR/EN) pour RADIA SARL, entreprise d'architecture et de décoration d'intérieur basée à Douala et Yaoundé, Cameroun.

## 🌟 Fonctionnalités

- ✅ Design luxueux contemporain (palette noir #000000 + or #D4AF37)
- ✅ Multilingue FR/EN avec changement dynamique
- ✅ 7 sections complètes : Accueil, À propos, Services, Portfolio, Blog, Témoignages, Contact
- ✅ Images professionnelles haute qualité
- ✅ Formulaire de contact avancé avec EmailJS
- ✅ Responsive mobile-first
- ✅ Navigation smooth scroll
- ✅ Animations et transitions élégantes
- ✅ Intégration WhatsApp & Facebook

## 📋 Sections

### 1. Hero Section
- Slogan principal : "Nous faisons de votre rêve une réalité"
- Badge "Excellence & Innovation"
- CTA vers portfolio
- Scroll indicator animé

### 2. À Propos
- Notre Mission
- Nos Bureaux (Douala & Yaoundé)
- Notre Expertise

### 3. Services (8 services)
- Architecture d'Intérieur
- Décoration 3D
- Rénovation Complète
- Aménagement sur Mesure
- Construction
- Jardins & Piscines
- Meubles sur Mesure
- Suivi de Chantier

### 4. Portfolio
- 8 projets avec images professionnelles
- Catégories : Résidentiel, Commercial, Extérieur
- Modal avec détails des projets

### 5. Blog
- 4 articles fictifs
- Catégories : Tendances, Conseils, Design, Guides
- Dates et extraits

### 6. Témoignages
- 5 témoignages clients
- Notation 5 étoiles
- Avatars avec initiales

### 7. Contact
- Formulaire complet avec :
  - Nom, Email, Téléphone
  - Ville (Douala, Yaoundé, Autre)
  - Service souhaité
  - Budget estimé (< 1M, 1-5M, 5-10M, > 10M XAF)
  - Message
- Informations de contact
- Liens sociaux (WhatsApp, Facebook)

### 8. Footer
- Liens rapides
- Services
- Contact
- Réseaux sociaux

## 🛠️ Technologies

- **Frontend**: React 19
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn/UI (Radix UI)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner
- **Email**: EmailJS
- **Routing**: Smooth scroll (single page)

## 📦 Installation

```bash
cd /app/frontend
yarn install
```

## 🚀 Développement

```bash
yarn start
# Ouvre http://localhost:3000
```

## 🏗️ Build pour Production

```bash
yarn build
# Génère le dossier build/ avec les fichiers statiques
```

## 🌐 Déploiement sur GitHub Pages

### Option 1 : Déploiement manuel

1. **Build le projet**
   ```bash
   cd /app/frontend
   yarn build
   ```

2. **Créer un repo GitHub**
   - Créer un nouveau repo sur GitHub (ex: `radia-sarl-website`)
   - Initialiser Git dans le dossier build

3. **Déployer**
   ```bash
   cd build
   git init
   git add .
   git commit -m "Deploy RADIA SARL website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/radia-sarl-website.git
   git push -u origin main
   ```

4. **Configurer GitHub Pages**
   - Aller dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main / (root)
   - Save

5. **Accéder au site**
   - URL : https://USERNAME.github.io/radia-sarl-website

### Option 2 : Déploiement automatique avec gh-pages

1. **Installer gh-pages**
   ```bash
   cd /app/frontend
   yarn add -D gh-pages
   ```

2. **Ajouter dans package.json**
   ```json
   {
     "homepage": "https://USERNAME.github.io/radia-sarl-website",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Déployer**
   ```bash
   yarn deploy
   ```

## 📝 Configuration EmailJS

Le formulaire de contact utilise EmailJS. Pour activer l'envoi d'emails :

1. **Créer un compte sur [EmailJS](https://www.emailjs.com/)**

2. **Créer un service email** (Gmail, Outlook, etc.)

3. **Créer un template email** avec les variables :
   - {{name}}
   - {{email}}
   - {{phone}}
   - {{city}}
   - {{service}}
   - {{budget}}
   - {{message}}

4. **Obtenir les identifiants**
   - Service ID
   - Template ID
   - Public Key

5. **Mettre à jour le code**
   
   Dans `/app/frontend/src/components/Contact.js`, décommenter et configurer :
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   );
   ```

## 🔗 Liens à mettre à jour

Avant déploiement, mettre à jour les placeholders :

1. **WhatsApp** : Remplacer `+237 XXX XXX XXX` par le numéro réel
   - Dans `Contact.js` : `https://wa.me/237XXXXXXXXX`
   - Dans `Footer.js` : `https://wa.me/237XXXXXXXXX`

2. **Facebook** : Remplacer `https://facebook.com/radiasarl` par la page réelle

3. **Email** : Vérifier `contact@radiasarldesign.cm`

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont dans `/app/frontend/src/index.css` :
- Noir : `#000000`
- Or : `#D4AF37`

### Images
Remplacer les images professionnelles par vos propres photos :
- Hero : ligne 19 dans `Hero.js`
- Services : lignes 9-16 dans `Services.js`
- Portfolio : lignes 9-16 dans `Portfolio.js`

### Contenu
Tout le contenu est centralisé dans `/app/frontend/src/translations.js`

## 📱 Responsive

Le site est optimisé pour :
- Mobile : 320px - 768px
- Tablet : 768px - 1024px
- Desktop : 1024px+

## 🔍 SEO

Pour améliorer le SEO :

1. **Ajouter dans public/index.html**
   ```html
   <meta name="description" content="RADIA SARL - Architecture et décoration d'intérieur de luxe à Douala et Yaoundé. Conception 3D, rénovation, aménagement sur mesure au Cameroun.">
   <meta name="keywords" content="architecte intérieur Douala, décoration Yaoundé, architecture Cameroun, design intérieur, rénovation luxe">
   <meta property="og:title" content="RADIA SARL - Architecture & Décoration d'Intérieur">
   <meta property="og:description" content="Nous faisons de votre rêve une réalité - Services d'architecture et décoration au Cameroun">
   <meta property="og:image" content="URL_IMAGE_PREVIEW">
   ```

2. **Ajouter Google Analytics** (optionnel)

## 📄 Structure du projet

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   ├── Blog.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── context/
│   │   └── LanguageContext.js
│   ├── translations.js
│   ├── App.js
│   ├── App.css
│   └── index.css
└── package.json
```

## ✨ Améliorations futures possibles

- [ ] Ajouter un système de blog dynamique (CMS)
- [ ] Intégrer Google Maps pour localisation bureaux
- [ ] Ajouter un système de réservation en ligne
- [ ] Galerie photos avec lightbox
- [ ] Témoignages vidéo
- [ ] Chat en direct (WhatsApp Business)
- [ ] Calculateur de budget interactif
- [ ] Section actualités/presse

## 📞 Support

Pour toute question technique :
- Email : contact@radiasarldesign.cm
- WhatsApp : +237 XXX XXX XXX

## 📜 Licence

© 2024 RADIA SARL. Tous droits réservés.

---

**Made with ❤️ by RADIA SARL Team**
