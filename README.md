# The Women's Healing Circle

Recovered and rebuilt from the supplied production `dist` bundle.

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

The project is a Vite + React app with React Router. `vercel.json` rewrites all routes to `index.html` so direct links work on Vercel.

## Important recovery note

The original production bundle referenced backend-powered content/forms, but the supplied archive did not include that backend or source maps. The rebuilt app preserves the public pages, copy, navigation, assets and styling, and includes static fallback content plus front-end form states. Connect the forms to the original provider or a new form endpoint before relying on submissions in production.
