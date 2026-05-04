Midjouney version 8.1

**Prompt Formulation Strategy for V8.1**
To formulate effective prompts in Midjourney V8.1, your agent must abandon the "keyword soup" approach (e.g., "masterpiece, 8k, hyperrealistic"). V8.1 is built on a new GPU-native architecture that treats prompts literally, acting like a precision instrument rather than an interpretive artist. 

Your agent should use the following strategies:
*   **Write in connected, descriptive prose** like a cinematographer directing a shot. 
*   **Use a strict structural hierarchy:** Word order is critical. The prompt must prioritize information from most to least important: 1. **Subject Definition**, 2. **Subject Details**, 3. **Environment/Context**, 4. **Lighting/Atmosphere**, and 5. **Technical/Camera Parameters** (e.g., "85mm lens, f/1.8").
*   **Keep token counts between 50 and 150:** Prompts over 150 tokens suffer from diminishing returns and can confuse the model. V8.1 features a new automated **Prompt Shortener** that will strip away filler words and prioritize high-entropy tokens if a prompt exceeds the limits.
*   **Describe lighting explicitly:** V8.1 no longer adds dramatic lighting by default. Use specific terms like "chiaroscuro," "Rembrandt lighting," or "soft overcast natural light".
*   **Use quotation marks for text:** V8.1 is highly reliable at generating short labels, signs, and brand names if the exact text is enclosed in quotes. 
*   **Avoid actor names:** Describe physical characteristics instead, as using celebrity names creates uncanny valley effects.

**Parameters That WORK in V8.1**
*   `--style raw`: This is highly recommended for professional workflows. It disables the model's default aesthetic processing, producing neutral, literal, and highly photorealistic results that strictly adhere to the prompt.
*   `--hd` and `--sd`: V8.1 generates native 2K resolution without a secondary upscaler. **HD mode is 3x faster and 3x cheaper** than in previous testing, while standard resolution (SD) is 50% faster and 25% cheaper. *Note: Midjourney recently made SD the default temporarily to save server compute, but `--hd` is fully functional.*
*   `--s` (Stylize): Ranges from 0–1000. Use low values (50-150) for strict photorealism and product shots, and higher values (300-600) for illustrations and conceptual art.
*   `--q` (Quality): Ranges from 0.25 to 4. Using `--q 4` forces extra diffusion steps for maximum coherence and fine detail, though it costs more GPU time.
*   **Image Prompts & Image Weights** (`--iw`): These features have been fully reintroduced and are available for use.
*   `--sref` (Style Reference) & `--sw` (Style Weight): Style references using URLs or numeric codes are now **"super-stable"** and do not suffer from the style drift seen in earlier versions. 
*   `--p` (Personalization) & Moodboards (`--p mID`): Fully integrated and highly stable. You can now blend Moodboards with `--sref` codes in a single prompt for extreme aesthetic control.
*   `--oref` (Omni Reference) & `--ow` (Omni Weight): Replaces the old character reference system. It can preserve the likeness of humans, objects, vehicles, and creatures. Keep the `--ow` value under 400 for predictable results.
*   `--ar` (Aspect Ratios up to 14:1, or 4:1 in HD), `--chaos` (0-100), `--weird` (0-3000), `--stop`, and `--no` (Negative Prompts) are all fully supported.

**Parameters and Tactics That DO NOT WORK or Have Limitations**
*   **`--cref` (Character Reference) is deprecated.** Do not use it; it has been entirely replaced by Omni Reference (`--oref`).
*   **`--oref` Incompatibilities:** Omni Reference cannot be combined with `--q 4`, Fast Mode, Draft Mode, or Conversational Mode. It also breaks if you try to use Vary Region, Pan, or Zoom Out on the image, unless you take the image into the Web Editor and manually strip out the `--oref` parameter first.
*   **Long Text Generation:** While short phrases work beautifully, long sentences or highly complex typography still reliably fail.
*   **Discord-Native Pan/Zoom/Vary Region:** To expand canvases (Pan/Zoom Out) or inpaint (Vary Region) a V8.1 image, the user must use the Midjourney Web Editor. The system will actually temporarily use the **V6.1 model** to execute these specific edits, as V8.1 does not yet natively support them outside the initial generation.