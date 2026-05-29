# Nexus Capital Finance — Site vitrine

Site vitrine statique de la holding **Nexus Capital Finance** et de ses 7 filiales.

Style : banque d'investissement privée, élitiste — palette **noir / blanc / or**.

## Caractéristiques

- 100 % statique (HTML, CSS, JavaScript) — **aucune étape de build**, aucun serveur applicatif.
- Déployable par simple upload **FTP**.
- Responsive (mobile, tablette, desktop) avec menu mobile.
- Animations d'apparition au défilement, navigation fixe, formulaire de contact (démonstration).
- Polices web via Google Fonts (Cormorant Garamond + Inter).

## Structure

```
.
├── index.html                          Page d'accueil
├── filiales/
│   ├── application-sport.html          01 · Application Sport & Santé
│   ├── investissement-vert.html        02 · Investissement Vert Durable
│   ├── bien-etre-sante.html            03 · Bien-être, Santé & Beauté
│   ├── production-audiovisuelle.html   04 · Production Audiovisuelle
│   ├── club-sportif.html               05 · Club Sportif
│   ├── wallet-decentralise.html        06 · Wallet & Finance Web3
│   └── fondation-humanitaire.html      07 · Fondation Humanitaire
├── assets/
│   ├── css/style.css                   Feuille de style unique
│   ├── js/main.js                      Interactions
│   └── img/                            (réservé aux visuels)
└── README.md
```

## Aperçu en local

Ouvrez simplement `index.html` dans un navigateur, ou servez le dossier :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement FTP

1. Connectez-vous à votre serveur FTP (FileZilla, Cyberduck, etc.).
2. Téléversez **tout le contenu** du dossier (en conservant l'arborescence)
   à la racine web de l'hébergement (souvent `www/`, `public_html/` ou `htdocs/`).
3. Vérifiez que `index.html` se trouve bien à la racine publique.

> Le formulaire de contact est purement visuel (démonstration côté client).
> Pour recevoir réellement les messages, branchez-le sur un service d'envoi
> (formspree, script PHP `mail()`, etc.) selon les possibilités de l'hébergeur.

## Personnalisation

- **Couleurs / typographie** : variables CSS en haut de `assets/css/style.css` (`:root`).
- **Contenu des filiales** : fichiers HTML dans `filiales/`.
- **Logo / favicon** : favicon SVG en ligne dans chaque `<head>`.
