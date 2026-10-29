# BunyiBaca — GitHub Pages publication

Repository: https://github.com/navidotmy/bunyibaca
Target public site: https://navidotmy.github.io/bunyibaca/

## Current status (30 October 2026)
All app source files, the 96-lesson curriculum, 336 prototype audio files, tests, and the workflow are committed to `main`. The automated build and 5/5 tests have passed.

The first Pages deployment was blocked because GitHub Pages is **not yet enabled** for this repository. Automatic enablement via the workflow was denied with `Resource not accessible by integration`. Only the repository owner can complete the one-time Pages setup.

## One-time action to activate the website
1. Open https://github.com/navidotmy/bunyibaca/settings/pages while logged into `navidotmy`.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (rather than "Deploy from a branch").
3. Return to https://github.com/navidotmy/bunyibaca/actions/workflows/pages.yml
4. Select **Run workflow** on branch `main`, and run it. Alternatively, push any commit to `main`.
5. Confirm that the latest run finishes with a green success check.
6. Then open https://navidotmy.github.io/bunyibaca/ and test installation (Chrome: Install app/Add to Home screen; supported iPhone Safari: Share → Add to Home Screen).

## What the automated workflow does
- Checks out the complete editable source code.
- Generates missing experimental MP3 clips only if needed.
- Executes `npm test` (all five checks).
- Uploads and deploys the static PWA to GitHub Pages.

## Public beta limitations
This is a public educational **beta**, not a commercial production launch. Synthetic audio has not been verified by Malay phonics specialists. The Premium access gate is demonstrative: there is no payment gateway, secure paid entitlement or private content delivery. Profiles and teacher rosters are stored in the browser; no accounts or cross-device school sync are connected. Do not enter sensitive child data into a shared device.

For local testing: `npm test`, then `python3 -m http.server 8080`.

The Github Pages workflow may run again if you change source files. It does not require manually uploading or unzipping the project.
