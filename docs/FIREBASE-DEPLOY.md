# Firebase App Hosting — Deployment Plan

Project: **force-sports-and-wears-i-a38aa**  
Stack: **Next.js 16** (App Router, API routes, Firebase client SDK, Resend)

Use **Firebase App Hosting** (not legacy Hosting frameworks). It runs your Next.js server on Cloud Run with GitHub auto-deploy.

---

## 1. Match console settings to this repo

In [Firebase Console → App Hosting](https://console.firebase.google.com/project/force-sports-and-wears-i-a38aa/apphosting):

| Setting | Value |
|--------|--------|
| **App root directory** | `.` (repo root — where `package.json` lives) |
| **Live branch** | `main` (or your production branch) |
| **Framework** | Next.js (auto-detected) |
| **Backend ID** | Must match `firebase.json` → `forcesports-web` (rename either side if yours differs) |

If you used a different backend name in the console, update `backendId` in `firebase.json` to match exactly.

---

## 2. One-time CLI setup

```bash
npm install -g firebase-tools
firebase login
firebase use force-sports-and-wears-i-a38aa
```

Link GitHub in the console (App Hosting → your backend → Repository) so pushes to the live branch trigger rollouts.

---

## 3. Secrets (required for inquiry emails)

The contact API uses **Resend**. Store the API key in Secret Manager (never commit it):

```bash
firebase apphosting:secrets:set RESEND_API_KEY
# Paste your re_... key when prompted

firebase apphosting:secrets:grantaccess RESEND_API_KEY --backend forcesports-web
```

`apphosting.yaml` already references `secret: RESEND_API_KEY`.

---

## 4. Environment variables

| Source | Purpose |
|--------|---------|
| `apphosting.yaml` | Firebase public config + `NEXT_PUBLIC_SITE_URL` |
| Firebase Console → Backend → Environment | Overrides YAML; good for per-environment URLs |
| `.env.local` | Local dev only (not deployed) |

After the first deploy, set **`NEXT_PUBLIC_SITE_URL`** in the console to your real App Hosting URL (shown on the backend overview).

Optional: copy all vars from `.env.local` into the console **Environment** tab in one paste (KEY=value format).

---

## 5. Deploy

### Automatic (recommended)

Push to the **live branch** connected in App Hosting. Firebase builds with `next build` (standalone) and rolls out.

### Manual from your machine

```bash
npm run build
firebase deploy --only apphosting
```

Or use the npm script:

```bash
npm run deploy:firebase
```

---

## 6. Post-deploy checklist

- [ ] Open live URL — home, products, `/force-hq` login, inquiry form
- [ ] Submit test inquiry — check Firestore `inquiries` + Resend inbox
- [ ] **Authentication → Settings → Authorized domains** — add your App Hosting domain
- [ ] **Firestore / Storage rules** — ensure production rules (not test mode) if you add `firestore.rules` later
- [ ] Custom domain (optional): App Hosting → Domains → connect `forcesportswearsindia.com`

---

## 7. Files in this repo

| File | Role |
|------|------|
| `.firebaserc` | Default Firebase project ID |
| `firebase.json` | App Hosting backend + ignore paths |
| `apphosting.yaml` | Cloud Run sizing, env vars, secrets |
| `next.config.mjs` | `output: 'standalone'` for App Hosting |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on GitHub but works locally | Console **App root directory** must be `.` (same as `rootDir` in `firebase.json`) |
| `backendId` mismatch | Align `firebase.json` with console backend ID |
| Emails 500 on submit | Set `RESEND_API_KEY` secret + grant access to backend |
| Firebase auth fails on live site | Add hosting domain to Authorized domains |
| Wrong API URL in client | Update `NEXT_PUBLIC_SITE_URL` after deploy |

---

## Related

- [App Hosting configure](https://firebase.google.com/docs/app-hosting/configure)
- [Multiple environments](https://firebase.google.com/docs/app-hosting/multiple-environments)
- Local env template: `.env.example`
