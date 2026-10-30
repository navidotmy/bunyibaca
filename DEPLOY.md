# Deploy BunyiBaca to GitHub Pages

The PWA is deployed from `navidotmy/bunyibaca` by the workflow `.github/workflows/pages.yml` on every change to `main`. Pages Source must remain **GitHub Actions** in repository Settings → Pages.

The GitHub Actions workflow uses Node 22, checks the 12-world + 8-book curriculum, generates additional *unreviewed synthetic* offline audio when needed, commits those audio assets back to GitHub, and deploys to Pages.

Production site: https://navidotmy.github.io/bunyibaca/
GitHub source: https://github.com/navidotmy/bunyibaca

## Current development limitations
- The unreviewed generated demo audio is not pedagogically validated, especially isolated consonants, digraphs, and e pepet/e taling.
- Premium is a demonstrative gate only. No payment processing and no server-enforced entitlement controls exist.
- Parent and teacher progress remains stored locally per device, with JSON and CSV export; no synced backend.
- Book-page practice counts indicate completion, not verified word decoding ability.

**Independent IP:** BunyiBaca's digital book series is original, not a reproduction or authorised adaptation of Bacalah Anakku. See `ORIGINAL-READING-SERIES.md`.