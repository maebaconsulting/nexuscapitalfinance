# Nexus Capital Finance — Site vitrine

Site vitrine statique de la holding **Nexus Capital Finance** et de ses 7 filiales.

Direction artistique : banque d'investissement privée, élitiste — **noir profond / blanc cassé / or sobre**, typographie *Cormorant Garamond*, grain doré discret, micro-animations.

## Caractéristiques

- 100 % statique (HTML, CSS, JavaScript vanilla) — **aucune étape de build**, aucun serveur applicatif.
- Déployable par simple upload **FTP** (ou via le GitHub Action inclus).
- Responsive (mobile-first) avec menu plein écran.
- Apparitions au défilement, en-tête qui se densifie, diagramme orbital « écosystème », formulaire de candidature avec confirmation (démonstration).
- Polices web via Google Fonts (Cormorant Garamond).

## Structure

```
.
├── index.html                          Page d'accueil
├── filiales/
│   ├── sport-sante.html                01 · Application Sport & Santé
│   ├── investissement-vert.html        02 · Investissement Vert Durable
│   ├── bien-etre-beaute.html           03 · Bien-être, Santé & Beauté
│   ├── production-audiovisuelle.html   04 · Production Audiovisuelle
│   ├── club-sportif.html               05 · Club Sportif
│   ├── wallet-web3.html                06 · Wallet & Finance Web3
│   └── fondation-humanitaire.html      07 · Fondation Humanitaire
├── css/style.css                       Feuille de style unique (design tokens)
├── js/main.js                          Interactions (vanilla JS)
├── .github/workflows/deploy-ftp.yml    Déploiement FTP automatisé
└── README.md
```

## Aperçu en local

Ouvrez `index.html` dans un navigateur, ou servez le dossier :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement

### Option A — GitHub Actions (automatique)
Un workflow (`.github/workflows/deploy-ftp.yml`) téléverse le site par FTP à chaque
push. Il faut définir 3 secrets dans **Settings → Secrets and variables → Actions** :
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

### Option B — FTP manuel
Téléversez à la racine web (souvent `www/`, `public_html/` ou `htdocs/`) **tout le
contenu** du dépôt sauf `.git/`, `.github/` et `README.md` — en conservant
l'arborescence. Vérifiez que `index.html` est bien à la racine publique.

## Personnalisation

- **Couleurs / typographie / rythme** : variables CSS en haut de `css/style.css` (`:root`).
- **Variante du hero** : sur la balise `<section class="hero" data-hero="a">` de
  `index.html`, remplacez `a` par `b` (éditorial asymétrique) ou `c` (emblème encadré).
- **Contenu des filiales** : fichiers HTML dans `filiales/`.
- **Formulaire de candidature** : purement visuel (démonstration côté client). Pour
  recevoir réellement les messages, branchez-le sur un service d'envoi (Formspree,
  script PHP `mail()`, etc.).
