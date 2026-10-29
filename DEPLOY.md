# Publish under navidotmy/bunyibaca

**Repo not yet created:** The connected GitHub integration can access and write to repositories but cannot create a new GitHub repository or change its Pages settings. Therefore this package cannot be truthfully described as live on GitHub yet.

## Android phone / GitHub Codespaces path

1. Open https://github.com/new while signed in as `navidotmy`.
2. Name the repository `bunyibaca`. Choose **Public**, default branch **main**. Create the empty repository; do not initialise with README if using the command below.
3. In a GitHub Codespace or on your computer, upload/extract the supplied `bunyibaca-pwa.zip` so that `index.html` is at the repository root.
4. From the extracted folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial BunyiBaca reading PWA"
git remote add origin https://github.com/navidotmy/bunyibaca.git
git push -u origin main
```

5. GitHub → **Settings → Pages → Build and deployment → GitHub Actions**.
6. Open **Actions** and confirm `Test and deploy BunyiBaca` succeeded.
7. Only after the successful run, visit `https://navidotmy.github.io/bunyibaca/` and install using browser **Add to Home Screen**.

If GitHub asks you to authenticate Git push, use Codespaces with the repository already signed in. Do not enter your password into the PWA or share credentials with ChatGPT.

## Security / licensing before a paid launch

This package is a functional **educational beta**, not a merchant-connected product. Real subscriptions require a payment service, a secure server, verified entitlements and non-public premium content distribution. The prototype includes 336 synthetic MP3 pronunciations that are not professionally reviewed and must be replaced or validated before classroom/commercial claims.
