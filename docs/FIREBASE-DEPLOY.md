# Firebase deploy (short reference)

**Full guide:** [HOSTING-GUIDE.md](./HOSTING-GUIDE.md)

| | |
|---|---|
| Live URL | https://forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app |
| Project | `force-sports-and-wears-i-a38aa` |
| Backend ID | `forcesportsandwearsindia` |

```bash
firebase login
firebase use force-sports-and-wears-i-a38aa
firebase apphosting:secrets:set RESEND_API_KEY
firebase apphosting:secrets:grantaccess RESEND_API_KEY --backend forcesportsandwearsindia
git push origin main   # auto deploy
# or
npm run deploy:firebase
```
