# Force Sports & Wears India

Premium custom sports uniforms & teamwear manufacturer — B2B catalog built with **Next.js 14**, **Firebase**, and **Tailwind CSS**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Firebase Firestore |
| Storage | Firebase Storage |
| Email | Resend API |
| Deployment | Firebase App Hosting (see `docs/FIREBASE-DEPLOY.md`) |
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

## Deployment (Vercel)

1. Connect the GitHub repository to Vercel.
2. Set all environment variables in the Vercel dashboard under **Settings → Environment Variables**.
3. Vercel automatically runs `next build` on every push to `main`.

---

## Running Tests

```bash
npx playwright test
```

Tests cover: Homepage, Products page, Uniforms page, Inquiry form, and Product detail pages.
