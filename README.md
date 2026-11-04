# Nine-67 AI Applications

Editable static portfolio and interactive application demos. The site is served from `dist/`. Its HTML, JavaScript, CSS, fonts, logos and industry photographs are included. No package installation or build command is required.

## Run locally

From the extracted repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000/ and choose an industry. The demos use fictional records and simulated AI.

## Put the project on GitHub

Extract the ZIP. In the directory containing this README and the dist folder, run:

```sh
git init -b main
git add .
git commit -m "Import Nine-67 AI Applications portfolio"
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-EMPTY-REPOSITORY.git
git push -u origin main
```

Use the URL of a new empty repository. If importing into an existing repository, copy the extracted files into the intended directory of your existing checkout and use its normal branch and review workflow.

## Project map

- `dist/index.html` is the portfolio entry point.
- `dist/apps/` contains the standalone applications and shared application screens.
- `dist/client-content.js` contains the project and industry example data.
- `dist/industry-media/` contains all 13 industry banners.
- `docs/` contains the existing project guide and design references.

For deployment, use a static host with `dist` as its publish directory. The portfolio works standalone or inside an iframe. The separate main Nine-67 website manages its own navigation and embedding route.

Exported from commit: f6047dab2d5060177c1f262e9e605ab3c205995f
