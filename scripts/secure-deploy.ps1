# Secure deploy helper - Force Sports App Hosting
# Run from repo root:  .\scripts\secure-deploy.ps1

$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

Write-Host "`n=== 1/4 Production build ===" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "`n=== 2/4 Resend secret (Secret Manager) ===" -ForegroundColor Cyan
if (-not (Test-Path ".env.local")) {
    Write-Host "Missing .env.local - copy from .env.example and add RESEND_API_KEY." -ForegroundColor Red
    exit 1
}
$resendLine = Get-Content ".env.local" | Where-Object { $_ -match '^\s*RESEND_API_KEY=' } | Select-Object -First 1
if (-not $resendLine) {
    Write-Host "RESEND_API_KEY not found in .env.local" -ForegroundColor Red
    exit 1
}
$resendKey = ($resendLine -replace '^\s*RESEND_API_KEY=', '').Trim().Trim('"').Trim("'")
if ($resendKey -match 'your_|xxxx') {
    Write-Host "Replace placeholder RESEND_API_KEY in .env.local with your real re_ key." -ForegroundColor Red
    exit 1
}

$secretFile = Join-Path $env:TEMP "forcesports_resend_secret.txt"
[System.IO.File]::WriteAllText($secretFile, $resendKey)
firebase apphosting:secrets:set RESEND_API_KEY --data-file $secretFile --force
Remove-Item $secretFile -Force
if ($LASTEXITCODE -ne 0) {
    Write-Host "CLI secret upload failed. Add RESEND_API_KEY in Firebase Console:" -ForegroundColor Yellow
    Write-Host "  App Hosting -> forcesportsandwearsindia -> Settings -> Environment -> Add secret" -ForegroundColor Yellow
    Write-Host "  Or: https://console.cloud.google.com/security/secret-manager" -ForegroundColor Yellow
}

Write-Host "`n=== 3/4 Grant secret to App Hosting backend ===" -ForegroundColor Cyan
firebase apphosting:secrets:grantaccess RESEND_API_KEY --backend forcesportsandwearsindia
if ($LASTEXITCODE -ne 0) {
    Write-Host "If grant fails, run the same command from Firebase Console or check backend name." -ForegroundColor Yellow
}

Write-Host "`n=== 4/4 Deploy (GitHub - recommended) ===" -ForegroundColor Cyan
$dirty = git status --porcelain
if ($dirty) {
    Write-Host "Uncommitted changes detected. Commit and push to main:" -ForegroundColor Yellow
    Write-Host "  git add -A" -ForegroundColor White
    Write-Host "  git commit -m `"Your message`"" -ForegroundColor White
    Write-Host "  git push origin main" -ForegroundColor White
} else {
    Write-Host "Working tree clean. Push any new commits to main for auto-deploy." -ForegroundColor Green
    Write-Host "  git push origin main" -ForegroundColor White
}

Write-Host "`n=== After deploy (Firebase Console) ===" -ForegroundColor Cyan
Write-Host @"
  [ ] Rollout succeeded (App Hosting -> Rollouts)
  [ ] Auth - Authorized domains - add hosted.app domain
  [ ] Test /inquiry form + /force-hq login
  [ ] Hard-refresh site if images look broken

Live: https://forcesportsandwearsindia--force-sports-and-wears-i-a38aa.us-east4.hosted.app
"@ -ForegroundColor Gray

Write-Host "`nOptional CLI deploy (if backend exists):" -ForegroundColor Yellow
Write-Host "  firebase deploy --only apphosting" -ForegroundColor White
Write-Host "  (Answer Y when asked to create/link backend if prompted)`n" -ForegroundColor Gray
