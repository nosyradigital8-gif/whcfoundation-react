# The Women's Healing Circle

Recovered and rebuilt from the supplied production `dist` bundle, then connected to the live cPanel API at `https://whcfoundation.com.ng/api`.

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

## Live API integration

The frontend reads the API base from `VITE_API_BASE_URL`; if it is not set, it defaults to:

```text
https://whcfoundation.com.ng/api
```

Connected endpoints:

- `GET /public/home.php` — live homepage statistics
- `GET /public/blog.php` — published blog listing
- `GET /public/blog_post.php?slug=...` — blog detail pages
- `GET /gallery/public_list.php` — live gallery images
- `POST /contact.php` — contact form submissions
- `POST /inquiries/submit.php` — volunteer, circle, and support inquiries

The site keeps local fallback content for public sections if the API is temporarily unavailable.

## Vercel

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Root directory: `/`

The API already exposes CORS headers for browser requests. If the API domain changes, add `VITE_API_BASE_URL` in Vercel Project Settings → Environment Variables.
