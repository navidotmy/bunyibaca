# BunyiBaca — AI Voice Studio (native Malay speech audit)

## Recommended voice configuration

- Teaching voice: Azure `ms-MY-YasminNeural` (`ms-MY`, female).
- Male alternate: Azure `ms-MY-OsmanNeural`.
- Stories: audition a Malay-trained ElevenLabs voice or Azure HD *separately*; don't assume expressiveness implies accurate phonics.
- Single consonants, such as /b/ and /k/, are not automatically synthesized in the approved teaching set: record with a native Malaysian Malay speaker or develop validated IPA-targeted samples. Avoid extra schwa vowels or English letter names.

## How to create the first 16 natural voice clips

1. Create an Azure Speech resource in a supported region. Confirm **paid-tier commercial output rights** under Microsoft's current Product Terms before publishing commercial app audio. The F0 tier is for testing only; do not assume F0 recordings have commercial reuse rights.
2. In the GitHub repository, navigate to `Settings > Secrets and variables > Actions > New repository secret`. Set these secrets, WITHOUT posting the key in ChatGPT or any GitHub file:
   - `AZURE_SPEECH_KEY`: Azure Speech resource key.
   - `AZURE_SPEECH_REGION`: e.g. `southeastasia` *only if that is the region of your resource*.
3. Navigate to `Actions > Produce Malay AI voice audition clips (private review)`.
4. `Run workflow`, default voice `ms-MY-YasminNeural`, clip limit `16`, **full_catalog unchecked**. This authorises up to 16 potentially billed calls; verify pricing first.
5. Download the workflow **artifact** ZIP (not a published URL) containing the audio and a CSV quality-assurance list. The output remains separate from the public PWA. The artifact is retained for 7 days and is accessible according to repository permissions. Because this repository is public, treat generated artifacts as potentially visible: do not include private children's recordings or sensitive data.
6. Have a native Malay phonics educator assess: two pronunciations of `e` (*emak* vs *ekor*), `ng/ny/sy/kh`, vowel clarity, fluency, child accessibility, whether isolated syllables sound natural, whether any consonant has an inserted /ə/, and audio clipping.
7. Only approved recordings should later replace the current synthetic prototype files after a distinct release and validation process. Use stable folder names `assets/audio/word`, `segment`, `story`. Do not overwrite or publish unreviewed clips.

## Local command examples

Plan with no network or billing:

```bash
python3 tools/generate_azure_voice.py --dry-run --limit 16
python3 tools/generate_azure_voice.py --all --dry-run --limit 1000
```

After explicitly approving paid generation and setting both environment variables in your private terminal:

```bash
python3 tools/generate_azure_voice.py --confirm-billing --limit 16
python3 tools/generate_azure_voice.py --voice ms-MY-OsmanNeural --confirm-billing --limit 16
```

Output is placed under `voice-review/`, with `qa-ms-MY-YasminNeural.csv` or `qa-ms-MY-OsmanNeural.csv` for reviewer comments. No secrets are stored in source code, generated files, or console logs.

## Audio content taxonomy

| Type | Production guideline | Why |
|---|---|---|
| Single consonants | Human-recorded or reviewed IPA rendering | Stop sounds often synthesize as letter names or include an extra vowel |
| Vowels and KV syllables | TTS candidates with IPA override where needed, expert review | Precise blending is the core objective |
| Real words | Azure Neural batch generation + reviewer sign-off | Accurate Malay pronunciation and consistent timbre |
| Sentences and stories | Expressive TTS with slower voice options + QA | Natural speech rhythm, comprehension |
| Encouragement | Short teacher recordings, optionally TTS | Warmth without dependence on a live online API |

## Privacy and licence cautions

- Never place API keys in JavaScript, a GitHub commit, a downloaded PWA or public Pages settings.
- Azure terms explicitly permit **commercial use of audio output of prebuilt neural voices only for paid-tier customers**; check current terms before release.
- Save files for offline playback so each family does not incur repeated per-listen TTS charges.
- Do not collect or upload children's voices to a third-party API without consent, privacy review and child-data safeguards.
- Clearly label narrations as AI-generated in parent-facing About or audio settings.
- The pronunciation of every individual phoneme must be tested. No inference from a successful script run to educational correctness.