# Midjourney V8 & V8.1 — Prompt & Parameter Rules

## V8 Core Rules
- **Natural language prose**, NOT keyword lists. "A snow-capped mountain emerging from fog at sunrise" instead of "mountain, fog, epic, cinematic"
- **Explicit lighting required** — V8 starts from neutral photorealistic baseline; no auto-cinematic
- **Anchor words** — physical textures, art mediums, structural forms (not emotional/abstract concepts)
- **Parameters:** `--ar`, `--s 50-150` (photo) / `--s 300-600` (art), `--style raw` + low stylize for product shots, `--q 0.5-2`, `--sref`/`--cref`/`--sw`, `--no` works
- **Pitfalls:** Don't stack too many modifiers. No `--oref` in V8.

## V8.1 Core Rules  
- **Connected descriptive prose** like a cinematographer directing a shot
- **Strict hierarchy:** Subject Definition → Subject Details → Environment/Context → Lighting/Atmosphere → Technical/Camera
- **Token count 50-150** (auto Prompt Shortener kicks in above)
- **Quotation marks for text rendering**, avoid actor names
- **Parameters:** `--style raw` (highly recommended), `--hd`/`--sd` (native 2K), `--s 0-1000`, `--q 0.25-4`, `--sref`/`--sw` (super-stable), `--p`/moodboards, `--oref`/`--ow` (replaces `--cref`), `--ar` up to 14:1 (4:1 HD), `--chaos 0-100`, `--weird 0-3000`, `--stop`, `--no`
- **DEPRECATED:** `--cref` replaced by `--oref`. `--oref` incompatible with `--q 4`, Fast/Draft/Conversational Mode.

## Current App State
- Version selector: `['5', '6', '6.1', '7']` in App.tsx:1105, AppClassic.tsx:102, AppV3.tsx:492
- Default version: `'7'`
- Prompt structure: Anchor + Subject + Style + TechSpecs + Params (`--ar --v --style raw --stylize`)
- V7 features: compareLenses, burstMode, cleanUp, draftMode
