# BunyiBaca — Fonik Bahasa Melayu PWA

An original, mobile-first, offline-capable Malay reading PWA for children aged 4–8, with separate parent and teacher screens.

## Current implementation

- **12 curriculum worlds / 96 lessons** covering listening, letter sounds, phoneme blending, KV/KVK syllables, digraphs, diphthongs, longer words, sentences, stories and comprehension.
- **32 genuinely usable free lessons** (the first four worlds). **64 premium lessons** appear as locked previews. Full curricular source is provided for review.
- Interactive auditory choices, syllable/phoneme tile building, audio-assisted reading, comprehension, scoring and spaced review.
- Parent progress dashboard, multiple child profiles, local teacher roster, assignments, CSV progress reports, and JSON backup/import.
- Device theme, colour accents, text size, speech rate, optional PIN and reduced motion.
- Web app manifest and service worker for offline caching.

## Important launch boundaries

### Audio
The prototype now ships **336 experimental, offline-generated Malay synthetic clips** produced with eSpeak. It also uses the browser's `speechSynthesis` if it finds an `ms-MY`/Malay voice when no clip exists. It does not silently substitute an English voice. Some Malaysian devices have no Malay voice installed. Browser speech synthesis may pronounce isolated phonemes incorrectly and may need network access depending on the chosen device voice. The source uses a clip-first engine in `speech.mjs`, but **no professionally reviewed Malay phoneme recording pack is shipped yet**. Short isolated consonants are intentionally not synthesized when they risk being read as letter names; those require authentic recorded phonemes. Before advertising the app as educationally validated, replace experimental clips with reviewed native-speaker audio, perform linguistic review, and test on common Android/iOS devices. Speech recognition and automated diagnosis are intentionally not implemented.

### Premium and transactions
The visible Free/Premium segmentation is a **product demonstration**, not a secure checkout. Purchase UI clearly says sales have not opened; no money is collected. Static web pages cannot protect premium lesson files placed in a public repository. To sell subscriptions: select a merchant processor supported in Malaysia, implement secure webhook validation and verified user entitlements on a backend, and serve premium content from an authenticated API or independently signed, encrypted offline packs. **Do not claim the client-side gate is secure DRM**. Prices shown are proposed, not commitments.

### Data protection
All child profiles currently live in **localStorage of this browser**, not a school database. There is no remote tracking, account sign-in, or telemetry. Export is plain JSON: store it privately. Local parent PIN helps prevent casual access but is not professional account security. For public school rollout, build verified parental consent, secure server-side authentication, PDPA review, role-based access, retention/deletion policies and audit logs.

### Pedagogy
The 96 lessons are an original initial curriculum. Some illustrative examples have more advanced spelling than their stage would ideally introduce; educators must review **every word and audio file** for controlled decodability, Standard Malay pronunciation (particularly `e` pepet vs `e` taling and digraphs), syllabification, comprehension, ages and accessibility. Progress scores are *informal gameplay metrics*, not a standardised reading diagnosis. A controlled pilot and validated pre/post literacy measures are required before making efficacy claims.

## Audio generation and AI speech integration

The bundled MP3s were generated offline by a conventional synthesizer, **not a neural AI speech model**. They are unverified and only for evaluating flow. Use `python3 tools/generate_demo_audio.py --all` to regenerate locally (needs `espeak` and `ffmpeg`).

A secure production upgrade can generate **pre-rendered AI TTS audio** during content production, using a provider's API behind a developer-only process, and then review every clip manually before inclusion. Never put an AI provider API key in the PWA or call paid TTS from the browser. As of October 2026, OpenAI's older Speech API TTS models have announced retirement on 6 January 2027; any provider integration should be checked against the current voice API rather than hardcoding a deprecated model.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
npm test
```

Do not use `file://` when testing service workers. No build system or dependencies required.

## Publish to GitHub Pages

1. Create **public** repository `navidotmy/bunyibaca` (or a name you prefer). Avoid adding starter files if you plan to push the contents directly.
2. Add every file in this folder, preserving `.github/workflows/pages.yml` and `.nojekyll`.
3. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. Push to `main`. GitHub Actions will run tests and publish the static files.
5. Confirm the public site at `https://navidotmy.github.io/bunyibaca/` only **after GitHub shows successful deployment**.

GitHub Pages deployment alone does not enable protected premium content or live purchase processing. Repo creation and Pages settings must be enabled using an account or GitHub tool with those permissions.

## Parent/teacher interaction

- Child mode starts automatically after creating a local nickname.
- **Penjaga** opens a math-based parent gate; configure a PIN in parent settings if desired.
- The teacher tab shows local profiles and assignments; this is *not* a cloud-synced classroom system.
- Only the first 32 lessons can be started without a verified premium entitlement system. Remaining content is visible for curriculum review in `curriculum.mjs`.

## Recommended production sequence

1. Native Malay audio recordings by professional speakers and phonics educator review.
2. Lesson word-bank audit for 100% taught-grapheme coverage, with multiple trials of unseen-word decoding.
3. Parent usability testing and independent educator validation.
4. Optional Firebase Auth/Firestore or similar secure synchronisation, with privacy-by-design safeguards.
5. Real merchant checkout and webhook-verified premium entitlements; authenticated premium-content delivery.
6. Classroom multi-device role-based permissions and stronger assessment engine.
7. Android TWA packaging and iOS install instruction pages only after live PWA is stable.

## License

All source and original stories in this prototype are intended for this project. Add an explicit software license and verify any third-party audio, fonts or images prior to commercial distribution. Icons use native emoji, and the app includes no external font/CDN dependency.
