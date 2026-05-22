# Force Sports — Hosting Guide (Firebase App Hosting)

Complete guide to run, deploy, and maintain the live site.

| | |
|---|---|
| **Live site** | https://forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app |
| **Firebase project** | `force-sports-and-wears-i-a38aa` |
| **GitHub** | https://github.com/ritikyadav10888-oss/forcesportswearsindia- |
| **Backend ID** | `forcesportsandwearsindia` |
| **Stack** | Next.js 16 · App Router · Cloud Run · Firestore · Resend |

---

## 1. Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) 13.15.4+
- Firebase project on **Blaze** plan (billing required for App Hosting)
- GitHub repo connected to App Hosting (for auto-deploy)

```bash
npm install -g firebase-tools
firebase login
firebase use force-sports-and-wears-i-a38aa
```

---

## 2. Local development

```bash
git clone https://github.com/ritikyadav10888-oss/forcesportswearsindia-.git
cd forcesportswearsindia-
npm install
cp .env.example .env.local
# Edit .env.local — add RESEND_API_KEY and Firebase keys if needed
npm run dev
```

Open **http://localhost:3000**

### Environment file (`.env.local`)

Never commit this file. Example:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=force-sports-and-wears-i-a38aa.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=force-sports-and-wears-i-a38aa
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=force-sports-and-wears-i-a38aa.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=886374682791
NEXT_PUBLIC_FIREBASE_APP_ID=1:886374682791:web:dc57b91ae20cde9590cb82
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QYY8VZXZS2

RESEND_API_KEY=re_your_key_here

NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

Restart `npm run dev` after changing env vars.

---

## 3. How hosting works

```
GitHub (main)  →  Firebase App Hosting  →  Cloud Build  →  Cloud Run
                         ↓
                   CDN + SSL + your URL
                         ↓
              Next.js server (SSR + /api/contact)
                         ↓
         public/ images  ·  Firestore  ·  Resend email
```

- **Static assets** (`public/`) — product images, Sportex swatches, logo, PDF catalog
- **API route** — `POST /api/contact` sends inquiry emails via Resend
- **Admin** — `/force-hq` reads/writes Firestore (products, uniforms, fabrics, leads)

Config files in the repo:

| File | Purpose |
|------|---------|
| `.firebaserc` | Firebase project ID |
| `firebase.json` | Backend ID, root directory, deploy ignore list |
| `apphosting.yaml` | Env vars, secrets, Cloud Run CPU/memory |
| `next.config.mjs` | `output: 'standalone'` (required for App Hosting) |

---

## 4. Firebase Console setup

1. Open [App Hosting](https://console.firebase.google.com/project/force-sports-and-wears-i-a38aa/apphosting).
2. Confirm backend **`forcesportsandwearsindia`** exists.
3. Settings to verify:

| Setting | Value |
|---------|--------|
| App root directory | `.` (repo root) |
| Live branch | `main` |
| Repository | `ritikyadav10888-oss/forcesportswearsindia-` |
| Auto rollouts | Enabled (recommended) |

`backendId` in `firebase.json` must match the console backend name exactly.

---

## 5. Production environment variables

Set in **App Hosting → Backend → Settings → Environment**, or in `apphosting.yaml` (committed).

**Required for production:**

```env
NEXT_PUBLIC_SITE_URL=https://forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app
NEXT_PUBLIC_API_BASE_URL=https://forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app
```

Firebase `NEXT_PUBLIC_FIREBASE_*` values are in `apphosting.yaml`. Console values **override** YAML.

### Resend secret (inquiry emails)

Do not put `RESEND_API_KEY` in git. Use Secret Manager:

```bash
firebase apphosting:secrets:set RESEND_API_KEY
firebase apphosting:secrets:grantaccess RESEND_API_KEY --backend forcesportsandwearsindia
```

Then trigger a new rollout.

---

## 6. Secure deploy (no errors)

You are logged in and on the correct project when you see:

```text
firebase login          → Already logged in as …
firebase use force-sports-and-wears-i-a38aa   → Now using project …
```

### One-command helper (Windows)

From the repo root:

```powershell
.\scripts\secure-deploy.ps1
```

This will:

1. Run `npm run build` (fail fast if the app does not compile)
2. Store `RESEND_API_KEY` in **Secret Manager** (not in git)
3. Grant the secret to backend `forcesportsandwearsindia`
4. Remind you to `git push origin main` for a safe rollout

### Manual secure steps

```powershell
# 1. Build must pass
npm run build

# 2. Secret from .env.local (never commit the key)
$key = (Get-Content .env.local | Where-Object { $_ -match '^RESEND_API_KEY=' }) -replace '^RESEND_API_KEY=',''
$key | Out-File $env:TEMP\resend.txt -Encoding utf8NoBOM -NoNewline
firebase apphosting:secrets:set RESEND_API_KEY --data-file $env:TEMP\resend.txt --force
Remove-Item $env:TEMP\resend.txt

# 3. Allow App Hosting to read the secret
firebase apphosting:secrets:grantaccess RESEND_API_KEY --backend forcesportsandwearsindia

# 4. Deploy
git push origin main
```

### If `firebase deploy --only apphosting` asks to create a backend

That prompt means the CLI does not see backend `forcesportsandwearsindia` yet. Either:

- Type **`Y`** and finish the wizard (link GitHub, region **us-east4**, root **`.`**), or  
- Skip CLI and use **`git push origin main`** if App Hosting is already connected in the console (preferred).

### Security checklist before going live

| Item | Action |
|------|--------|
| Resend key | Only in Secret Manager + `.env.local`, never in git |
| `.env.local` | Listed in `.gitignore` |
| Admin `/force-hq` | Firebase Auth email/password only |
| Auth domains | Add `…hosted.app` (and custom domain) in Firebase Console |
| Firestore | Use production rules (not open test mode) when ready |

---

## 7. Deploy

### Option A — Automatic (recommended)

```bash
git add .
git commit -m "Your change"
git push origin main
```

Firebase builds and deploys when the push lands on the live branch. Watch status in the console **Rollouts** tab.

### Option B — Manual CLI

```bash
npm run build
npm run deploy:firebase
# same as: firebase deploy --only apphosting
```

---

## 8. Post-deploy checklist

- [ ] Home, `/products`, `/uniforms`, `/fabrics` load with images
- [ ] Product detail pages show front/back images
- [ ] `/inquiry` form submits (Firestore `inquiries` + email)
- [ ] `/force-hq` login works
- [ ] **Authentication → Settings → Authorized domains** — add  
  `forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app`
- [ ] Custom domain (optional) — App Hosting → **Domains**

---

## 9. Custom domain (optional)

1. App Hosting → your backend → **Domains** → Add custom domain.
2. Add the DNS records Firebase shows (usually CNAME).
3. SSL is provisioned automatically.
4. Update `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_API_BASE_URL` to `https://yourdomain.com`.
5. Add the custom domain to **Firebase Auth → Authorized domains**.

---

## 10. Images on the live site

Product and fabric images live in **`public/`** (e.g. `/T-shirts/11.png`, `/Sportex Fabrics/Dryfit.jpg`).

The app uses **`getCDNUrl()`** in `src/utils/cdnUtils.ts` to serve them from the **same origin** (not an external CDN). If images break after a deploy:

- Confirm files exist under `public/` in GitHub.
- Hard-refresh the browser (Ctrl+Shift+R).
- Check the browser Network tab for 404 paths.

---

## 11. Costs (Blaze plan)

App Hosting bills when you exceed free tiers. Typical for a small B2B site:

| Item | Free tier | Paid (approx.) |
|------|-----------|----------------|
| Outgoing bandwidth | 10 GiB/month | $0.15–0.20/GiB after |
| Cloud Run | Generous free tier | Low $ at small traffic |
| Cloud Build | 2,500 min/month | ~$0.01/min after |
| Firestore / Storage / Auth | Separate quotas | See [Firebase pricing](https://firebase.google.com/pricing) |

Set a **budget alert** in Google Cloud Billing. Details: [App Hosting costs](https://firebase.google.com/docs/app-hosting/costs).

---

## 12. Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails on GitHub | App root = `.`; `package.json` at repo root; check Rollout logs |
| `backendId` error on deploy | Match `firebase.json` with console backend name |
| Images 404 on live site | Assets must be in `public/`; redeploy after push |
| Inquiry email fails | Set `RESEND_API_KEY` secret + grant access; check `/api/contact` logs |
| Auth error on live site | Add hosting URL to Authorized domains |
| Env change not applied | Save env → create **new rollout** (not instant on running version) |
| Wrong links in emails/API | Update `NEXT_PUBLIC_SITE_URL` in console |

View logs: [Cloud Run](https://console.cloud.google.com/run) → select App Hosting service → Logs.

---

## 13. Useful commands

```bash
npm run dev              # Local dev (port 3000)
npm run build            # Production build test
npm run start            # Run production build locally
npm run deploy:firebase  # Deploy App Hosting from CLI
npx playwright test      # Smoke tests
firebase apphosting:backends:list
```

---

## 14. Security reminders

- Keep `/force-hq` behind Firebase Authentication.
- Never commit `.env.local` or Resend keys.
- Review Firestore and Storage security rules before high traffic.
- Rotate `RESEND_API_KEY` if it was ever exposed in chat or commits.

---

## Quick links

- [Firebase Console](https://console.firebase.google.com/project/force-sports-and-wears-i-a38aa)
- [App Hosting](https://console.firebase.google.com/project/force-sports-and-wears-i-a38aa/apphosting)
- [App Hosting docs](https://firebase.google.com/docs/app-hosting)
- [Configure env & secrets](https://firebase.google.com/docs/app-hosting/configure)
- Site audit: `docs/WEBSITE-FAULTS-AND-GAPS.md`
