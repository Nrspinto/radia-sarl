# 🚀 Guide de Déploiement - RADIA SARL Website

Ce guide détaille les étapes pour déployer le site RADIA SARL sur GitHub Pages.

## 📋 Prérequis

- [ ] Un compte GitHub
- [ ] Git installé sur votre ordinateur
- [ ] Node.js et Yarn installés
- [ ] Le code source du projet RADIA SARL

## 🎯 Méthode 1 : Déploiement avec gh-pages (Recommandé)

### Étape 1 : Préparer le projet

```bash
cd /app/frontend
```

### Étape 2 : Installer gh-pages

```bash
yarn add -D gh-pages
```

### Étape 3 : Configurer package.json

Ouvrir `/app/frontend/package.json` et ajouter :

```json
{
  "homepage": "https://VOTRE-USERNAME.github.io/radia-sarl",
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

⚠️ **Important** : Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub

### Étape 4 : Créer un dépôt GitHub

1. Aller sur https://github.com
2. Cliquer sur "New repository"
3. Nom du repo : `radia-sarl` (ou autre nom de votre choix)
4. Description : "Site vitrine RADIA SARL - Architecture & Décoration"
5. Public ou Private : **Public** (pour GitHub Pages gratuit)
6. Ne pas initialiser avec README
7. Cliquer "Create repository"

### Étape 5 : Initialiser Git localement

```bash
cd /app
git init
git add .
git commit -m "Initial commit - RADIA SARL website"
```

### Étape 6 : Lier au dépôt GitHub

```bash
git remote add origin https://github.com/VOTRE-USERNAME/radia-sarl.git
git branch -M main
git push -u origin main
```

### Étape 7 : Déployer sur GitHub Pages

```bash
cd frontend
yarn deploy
```

Cette commande va :
- Compiler le projet (yarn build)
- Créer une branche `gh-pages`
- Pousser les fichiers compilés sur GitHub

### Étape 8 : Activer GitHub Pages

1. Aller sur votre repo GitHub
2. Cliquer sur "Settings"
3. Dans le menu gauche, cliquer "Pages"
4. Source : "Deploy from a branch"
5. Branch : `gh-pages` / `root`
6. Cliquer "Save"

### Étape 9 : Attendre le déploiement

Le site sera disponible dans 2-5 minutes à :
```
https://VOTRE-USERNAME.github.io/radia-sarl
```

---

## 🔧 Méthode 2 : Déploiement manuel

### Étape 1 : Build le projet

```bash
cd /app/frontend
yarn build
```

Cela crée un dossier `build/` avec les fichiers statiques.

### Étape 2 : Créer un repo sur GitHub

Suivre les mêmes étapes que la Méthode 1 - Étape 4

### Étape 3 : Déployer le dossier build

```bash
cd build
git init
git add .
git commit -m "Deploy RADIA SARL website"
git branch -M gh-pages
git remote add origin https://github.com/VOTRE-USERNAME/radia-sarl.git
git push -f origin gh-pages
```

### Étape 4 : Configurer GitHub Pages

Même chose que Méthode 1 - Étape 8

---

## ⚙️ Configuration avant déploiement

### 1. Mettre à jour les liens

#### WhatsApp
Remplacer dans :
- `frontend/src/components/Contact.js` ligne 150 et 213
- `frontend/src/components/Footer.js` ligne 38 et 119

```javascript
// De :
href="https://wa.me/237XXXXXXXXX"

// À :
href="https://wa.me/237VOTRE_NUMERO"
```

#### Facebook
Remplacer dans :
- `frontend/src/components/Contact.js` ligne 225
- `frontend/src/components/Footer.js` ligne 43

```javascript
// De :
href="https://facebook.com/radiasarl"

// À :
href="https://facebook.com/VOTRE_PAGE_FB"
```

### 2. Configurer EmailJS (Optionnel)

Si vous voulez que le formulaire de contact envoie des emails :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)

2. Créer un service email (Gmail, Outlook, etc.)

3. Créer un template avec ces variables :
   ```
   {{name}} - {{email}} - {{phone}} - {{city}}
   {{service}} - {{budget}} - {{message}}
   ```

4. Dans `frontend/src/components/Contact.js`, ligne 44-49, décommenter et configurer :
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',      // De EmailJS
     'YOUR_TEMPLATE_ID',     // De EmailJS
     formData,
     'YOUR_PUBLIC_KEY'       // De EmailJS
   );
   ```

### 3. Ajouter SEO et Meta tags

Modifier `frontend/public/index.html` :

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  
  <!-- SEO -->
  <meta name="description" content="RADIA SARL - Architecture et décoration d'intérieur de luxe à Douala et Yaoundé. Services : conception 3D, rénovation, aménagement sur mesure, construction, piscines et jardins au Cameroun." />
  <meta name="keywords" content="architecte intérieur Douala, décoration Yaoundé, architecture Cameroun, design intérieur, rénovation luxe, décoration 3D, aménagement intérieur, meubles sur mesure, piscine jardin Cameroun" />
  <meta name="author" content="RADIA SARL" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://VOTRE-USERNAME.github.io/radia-sarl/" />
  <meta property="og:title" content="RADIA SARL - Architecture & Décoration d'Intérieur de Luxe" />
  <meta property="og:description" content="Nous faisons de votre rêve une réalité ! Services d'architecture et décoration haut de gamme au Cameroun." />
  <meta property="og:image" content="URL_IMAGE_PREVIEW" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://VOTRE-USERNAME.github.io/radia-sarl/" />
  <meta property="twitter:title" content="RADIA SARL - Architecture & Décoration" />
  <meta property="twitter:description" content="Architecture et décoration d'intérieur de luxe au Cameroun" />
  <meta property="twitter:image" content="URL_IMAGE_PREVIEW" />
  
  <title>RADIA SARL - Architecture & Décoration d'Intérieur | Douala & Yaoundé</title>
</head>
```

---

## 📸 Remplacer les images

Les images actuelles sont des placeholders professionnels. Pour utiliser vos propres photos :

### Hero Section
Fichier : `frontend/src/components/Hero.js` ligne 19
```javascript
src="VOTRE_URL_IMAGE_HERO"
```

### Services
Fichier : `frontend/src/components/Services.js` lignes 9-16
```javascript
const serviceImages = [
  'URL_IMAGE_ARCHITECTURE',
  'URL_IMAGE_DECORATION',
  'URL_IMAGE_RENOVATION',
  // ... etc
];
```

### Portfolio
Fichier : `frontend/src/components/Portfolio.js` lignes 9-16
```javascript
const projectImages = [
  'URL_PROJET_1',
  'URL_PROJET_2',
  // ... etc
];
```

**Conseil** : Utilisez des services comme :
- [Unsplash](https://unsplash.com) (gratuit)
- [Pexels](https://pexels.com) (gratuit)
- Ou hébergez vos propres images sur un service cloud

---

## 🔄 Mettre à jour le site après déploiement

Après modification du code :

```bash
cd /app/frontend
yarn build
yarn deploy
```

ou

```bash
git add .
git commit -m "Description des modifications"
git push
yarn deploy
```

---

## 🐛 Dépannage

### Problème : Le site ne s'affiche pas

1. Vérifier que GitHub Pages est activé (Settings > Pages)
2. Vérifier que la branche `gh-pages` existe
3. Vérifier l'URL dans package.json (homepage)
4. Attendre 5-10 minutes après déploiement

### Problème : Le CSS ne charge pas

1. Vérifier le `homepage` dans package.json
2. Rebuild et redeploy :
   ```bash
   rm -rf build
   yarn build
   yarn deploy
   ```

### Problème : Les images ne s'affichent pas

1. Vérifier que les URLs des images sont absolues (commencent par http:// ou https://)
2. Vérifier que les images sont accessibles publiquement

### Problème : Le formulaire de contact ne fonctionne pas

Le formulaire actuel simule l'envoi. Pour un vrai envoi :
1. Configurer EmailJS (voir section Configuration)
2. Ou utiliser un service backend (ex: Formspree, Netlify Forms)

---

## 📊 Ajouter Google Analytics (Optionnel)

1. Créer un compte [Google Analytics](https://analytics.google.com)
2. Obtenir l'ID de suivi (ex: G-XXXXXXXXXX)
3. Ajouter dans `frontend/public/index.html` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🌐 Utiliser un nom de domaine personnalisé (Optionnel)

### Acheter un domaine

Acheter `radiasarldesign.cm` ou autre sur :
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- Registraire .cm local au Cameroun

### Configurer le domaine

1. Dans votre registraire de domaine, ajouter ces enregistrements DNS :
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: VOTRE-USERNAME.github.io
   ```

2. Dans votre repo GitHub :
   - Settings > Pages
   - Custom domain : `radiasarldesign.cm`
   - Save
   - Attendre la vérification (quelques heures)

3. Créer un fichier `frontend/public/CNAME` :
   ```
   radiasarldesign.cm
   ```

4. Redéployer

---

## ✅ Checklist finale avant déploiement

- [ ] Remplacer les numéros WhatsApp placeholder
- [ ] Remplacer les liens Facebook placeholder
- [ ] Remplacer les images par vos vraies photos (optionnel)
- [ ] Configurer EmailJS pour le formulaire (optionnel)
- [ ] Ajouter meta tags SEO
- [ ] Tester en local : `yarn start`
- [ ] Build sans erreur : `yarn build`
- [ ] Vérifier package.json homepage
- [ ] Créer repo GitHub
- [ ] Déployer : `yarn deploy`
- [ ] Activer GitHub Pages
- [ ] Tester le site en ligne
- [ ] Vérifier responsive mobile/tablet
- [ ] Tester toutes les sections
- [ ] Tester le changement de langue FR/EN
- [ ] Tester les liens sociaux

---

## 🆘 Support

En cas de problème :
1. Vérifier la [documentation GitHub Pages](https://docs.github.com/en/pages)
2. Vérifier les logs de build dans Actions > gh-pages deploy
3. Consulter le README_RADIA_SARL.md

---

## 🎉 Félicitations !

Votre site RADIA SARL est maintenant en ligne !

Partagez-le sur :
- ✅ WhatsApp Business
- ✅ Facebook
- ✅ Instagram
- ✅ LinkedIn
- ✅ Cartes de visite avec QR code

**Bonne chance ! 🚀**
