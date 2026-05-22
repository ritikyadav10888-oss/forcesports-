# Force Sports & Wears India

Premium custom sports uniforms & teamwear manufacturer — B2B catalog built with **Next.js 16**, **Firebase**, and **Tailwind CSS**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Database | Firebase Firestore |
| Storage | Firebase Storage |
| Email | Resend API |
| Deployment | Firebase App Hosting — **[Hosting guide](docs/HOSTING-GUIDE.md)** |
| Tests | Playwright |

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your Firebase and Resend credentials:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase project API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID |
| `RESEND_API_KEY` | Resend API key for email notifications |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for the inquiry API (e.g. `https://your-site.vercel.app`) |

---

## Key Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, and CTA |
| `/products` | Full product catalog with filters |
| `/uniforms` | Uniforms catalog (schools, corporate, etc.) |
| `/fabrics` | Sportex fabric library with GSM guide |
| `/inquiry` | Quote request form |
| `/catalog` | Downloadable product catalog |
| `/faq` | Frequently asked questions |
| `/force-hq` | **Admin portal** — manage products, uniforms, fabrics, leads |

---

## Admin Portal (`/force-hq`)

The `/force-hq` route provides a Firebase-backed admin panel for managing:
- **Products** — Add, edit, delete product listings
- **Uniforms** — Manage uniform categories
- **Fabrics** — Sportex fabric library management
- **Leads** — View and manage inquiry submissions

> ⚠️ Secure this route with Firebase Authentication before deploying to production.

---

## Fabric Fallback

The Fabrics page (`/fabrics`) uses a **Firebase-first, local-fallback** approach:
- If Firebase `fabrics` collection is populated, it shows live data.
- If Firebase is empty or unreachable, it falls back to `/src/data/sportexFabrics.ts` — so the page always shows 23+ fabrics without any manual sync required.

---

## Inquiry Flow

1. Customer clicks **"Customize"** on any product/uniform card.
2. They pick logo placement, size, and fabric (if applicable).
3. Clicking **"Add to Inquiry"** routes them to `/inquiry` with URL params pre-filled.
4. The form auto-populates with product name, code, fabric, and placement.
5. On submit: saved to Firestore `inquiries` collection + email notification via Resend API.

---

## Deployment

**Live site:** https://forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app

See **[docs/HOSTING-GUIDE.md](docs/HOSTING-GUIDE.md)** for local setup, env vars, secrets, deploy, custom domain, costs, and troubleshooting.

Quick deploy: push to `main` (GitHub connected to Firebase App Hosting) or run `npm run deploy:firebase`.

### Vercel (optional)

This app is **Next.js**, not Vite. If Vercel shows *“No Output Directory named dist”*:

1. [Vercel Dashboard](https://vercel.com) → your project → **Settings → General**
2. **Framework Preset:** `Next.js`
3. **Build Command:** `npm run build` (or leave default)
4. **Output Directory:** leave **empty** (do not use `dist` or `.next`)
5. **Install Command:** `npm install`
6. Add the same env vars as `.env.local` under **Environment Variables**
7. Redeploy

`vercel.json` in the repo sets `framework: "nextjs"` so new deploys pick the right preset.

Use **either** Firebase App Hosting **or** Vercel for production—not both with conflicting settings.

---

## Running Tests

```bash
npx playwright test
```

Tests cover: Homepage, Products page, Uniforms page, Inquiry form, and Product detail pages.
