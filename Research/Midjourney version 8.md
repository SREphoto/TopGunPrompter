Midjourney version 8

To program your AI agent to formulate effective Midjourney V8 prompts, it needs to adopt a fundamentally different approach from V7. V8 is a highly literal model that prioritizes physical accuracy and explicit instructions over automatic artistic interpretation. 

Here are the specific rules, structures, and parameter guidelines your agent should use:

### 1. How to Structure V8 Prompts
*   **Use Natural Language, Not Keyword Lists:** The agent must abandon comma-separated keyword lists (e.g., "mountain, fog, epic, cinematic"). Instead, it should generate cohesive, natural-language sentences (e.g., "A snow-capped mountain emerging from fog at sunrise, dramatic warm light...").
*   **Prioritize Visual Density Over Narrative:** V8 struggles with non-visual, emotional, or abstract narrative concepts (e.g., "melancholy atmosphere" or "laughing at a private joke") and will default to generic, moody photorealism when confused. The agent must use "anchor words" that describe physical textures, art mediums (e.g., "charcoal sketch", "1940s poster style"), and structural forms.
*   **Explicitly Define Lighting and Camera:** V8 starts with a neutral, photorealistic baseline and will not automatically add cinematic lighting. The agent should append specific lighting descriptors (e.g., "harsh midday sun from above," "golden hour directional light") and camera/lens details (e.g., "shot on an 85mm lens, f/1.8, shallow depth of field," "35mm film grain").

### 2. Parameters That Work in V8
*   **`--ar` (Aspect Ratio):** The agent should lock this in immediately. V8 heavily adapts its composition to the exact aspect ratio, and changing it mid-iteration often ruins the image structure. Use `--ar 9:16` for vertical subjects/portraits and `--ar 16:9` for wide scenes.
*   **`--s` (Stylize):** Works on a scale of 0–1000 to dictate creative freedom. 
    *   Instruct the agent to use `--s 50-150` for photorealistic work, as high stylize ruins realism in V8. 
    *   Use `--s 300-600` for illustrative or artistic work.
    *   Use lower stylize (`--s 0` to `--s 25`) to get the absolute best results when asking the model to render exact text.
*   **`--style raw` (or `--raw`):** Strips away Midjourney's default aesthetic bias. Program the agent to pair `--raw` with a low stylize value (e.g., `--s 50`) when generating product shots or technical illustrations requiring strict, literal accuracy.
*   **`--q` (Quality):** Controls rendering time and detail. The agent can use `--q 0.5` for faster, simpler drafting, or `--q 2` to heavily invest rendering power into intricate textures and nuanced lighting.
*   **`--hd` (HD Mode - V8.1 Only):** In the V8.1 update, appending `--hd` natively renders the image at 2K resolution (instead of 1K), which drastically improves fine details, small faces, and line art. 
*   **`--sref` (Style Reference) & `--cref` (Character Reference):** These work exceptionally well and are applied much more strictly in V8 than in previous versions. The agent can use `--sw` (Style Weight) to control how aggressively the style reference takes over the image.

### 3. What DOESN'T Work (Avoid These Pitfalls)
*   **Do Not Stack Too Many Modifiers:** V8 will produce incoherent results if the agent combines multiple style references (`--sref`), personalization codes (`--p`), style codes, high stylization (`--s 1000`), and a dozen text descriptors into a single prompt. Complexity should be layered sparingly.
*   **`--no` (Negative Prompting) Availability:** While negative prompting works very reliably in base V8 (e.g., `--no cluttered background, text`), be aware that the `--no` parameter is temporarily missing in recent V8.1 alpha builds, though it is expected to return soon.
*   **Omni Reference (Oref):** This feature is not yet available for V8/V8.1, so the agent should avoid trying to invoke it. 
*   **Relying on Default Aesthetics:** The biggest failure point for an automated prompter in V8 is assuming the AI will "make it look good" automatically. If the agent leaves out style, mood, and lighting, V8 will output technically accurate but visually flat and boring images.