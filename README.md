# The Women's Healing Circle

Recovered and rebuilt from the supplied production `dist` bundle, connected to the live cPanel API, and configured with the organization’s donation bank-transfer details.

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

The frontend reads the API base from `VITE_API_BASE_URL`; if it is not set, it defaults to `https://whcfoundation.com.ng/api`.

Connected endpoints:

- `GET /public/home.php` — live homepage statistics
- `GET /public/blog.php` — published blog listing
- `GET /public/blog_post.php?slug=...` — blog detail pages
- `GET /gallery/public_list.php` — live gallery images
- `POST /contact.php` — contact form submissions
- `POST /inquiries/submit.php` — volunteer, circle, and support inquiries

## Donations

Donation details are stored in `src/config.js` and displayed in the homepage donation area, Support & Safety page, and Get Involved page. Visitors can copy the account number directly.

- Account name: `WOMANHOOD HEALING CIRCLE INITIATIVE`
- Bank: `Wema Bank`
- Account number: `0128165265`

## Vercel

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Root directory: `/`
