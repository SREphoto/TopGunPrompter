import type { MediaItem, Scene } from '../data/types';

const STORAGE_KEYS = {
    GEMINI_KEY: 'topgun_gemini_api_key'
};

export function getStoredGeminiKey(): string {
    return (
        localStorage.getItem(STORAGE_KEYS.GEMINI_KEY) ||
        (import.meta.env.VITE_GEMINI_API_KEY as string) ||
        ''
    );
}

export function saveStoredGeminiKey(key: string): void {
    if (key.trim()) {
        localStorage.setItem(STORAGE_KEYS.GEMINI_KEY, key.trim());
    } else {
        localStorage.removeItem(STORAGE_KEYS.GEMINI_KEY);
    }
}

export interface GeneratedFilmResult {
    item: MediaItem;
    scenes: Scene[];
}

/**
 * Intelligent fallback generator when no Gemini API key is provided or network fails.
 * Produces authentic, high-fidelity Midjourney prompts for the specified title.
 */
function generateFallbackFilm(title: string, type: 'movie' | 'series' | 'game' = 'movie', customNotes?: string): GeneratedFilmResult {
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    const currentYear = new Date().getFullYear().toString();

    // Context-aware defaults based on type
    const isGame = type === 'game';
    const isSeries = type === 'series';

    const cleanTitle = title.trim();

    const styles = [
        {
            name: `${cleanTitle} Signature Cinematic`,
            promptString: `masterpiece cinematography, anamorphic lens flares, shallow depth of field, 35mm Eastman Kodak film stock, authentic cinematic lighting, 8k resolution, photorealistic`
        },
        {
            name: 'Atmospheric Moody Shadow',
            promptString: `dramatic chiaroscuro lighting, heavy atmospheric haze, deep rich blacks, volumetric god rays, intense emotional contrast, Panavision prime lens`
        },
        {
            name: 'Golden Hour Epic',
            promptString: `warm sunset rim lighting, golden glow, dust motes dancing in light beams, sweeping wide angle, cinematic color grading, Kodak 5247 aesthetic`
        }
    ];

    const posterPrompt = `Official theatrical poster for ${cleanTitle}, featuring dramatic key characters, iconic visual motifs, high-contrast typography, artistic composition, premium Hollywood studio key art --ar 2:3`;

    const scenes: Scene[] = [
        {
            id: 1,
            title: 'Dramatic Introduction / Hero Shot',
            promptPayload: `Cinematic establishing shot of ${cleanTitle}, main protagonist standing in the center of the frame, dramatic rim lighting, epic environmental scale, photorealistic textures${customNotes ? `, ${customNotes}` : ''}`
        },
        {
            id: 2,
            title: 'Iconic Climax Encounter',
            promptPayload: `Tense face-to-face confrontation scene from ${cleanTitle}, low-angle shot, extreme detail, sweeping camera perspective, rain-slicked surfaces and atmospheric tension`
        },
        {
            id: 3,
            title: 'Quiet Character Solitude',
            promptPayload: `Close-up emotional portrait shot from ${cleanTitle}, intimate soft lighting, reflective eye catchlights, shallow depth of field with bokeh background, highly detailed skin textures`
        },
        {
            id: 4,
            title: 'High-Stakes Action Sequence',
            promptPayload: `Dynamic kinetic action sequence from ${cleanTitle}, motion blur, debris flying through the air, high shutter speed, gritty realistic impact, cinematic framing`
        },
        {
            id: 5,
            title: 'Sweeping World View / Finale',
            promptPayload: `Epic widescreen vista from ${cleanTitle}, breathtaking panoramic horizon, cinematic atmosphere, masterwork composition, evocative mood`
        }
    ];

    const item: MediaItem = {
        id: slug || `custom-${Date.now()}`,
        title: cleanTitle,
        year: currentYear,
        genres: isGame ? ['Action', 'Adventure'] : isSeries ? ['Drama', 'Thriller'] : ['Action', 'Drama', 'Sci-Fi'],
        director: isGame ? 'Game Director' : isSeries ? 'Series Showrunner' : 'Director',
        actors: ['Lead Actor 1', 'Lead Actor 2', 'Supporting Actor'],
        type,
        styles,
        posterPrompt
    };

    return { item, scenes };
}

/**
 * Ask Google Gemini to generate a complete film/media package on the spot.
 */
export async function askGeminiToAddFilm(params: {
    title: string;
    type?: 'movie' | 'series' | 'game';
    customNotes?: string;
    apiKey?: string;
}): Promise<GeneratedFilmResult> {
    const { title, type = 'movie', customNotes = '', apiKey = getStoredGeminiKey() } = params;

    // If no API key is present, use the intelligent fallback generator
    if (!apiKey || apiKey.trim() === '') {
        console.warn('No Gemini API key provided; generating via cinematic fallback engine.');
        // Small artificial delay for pleasant UX
        await new Promise(r => setTimeout(r, 600));
        return generateFallbackFilm(title, type, customNotes);
    }

    const cleanTitle = title.trim();
    const mediaTypeLabel = type === 'game' ? 'Video Game' : type === 'series' ? 'TV Series' : 'Movie / Film';

    const systemPrompt = `You are an elite Hollywood cinematographer, film historian, and Midjourney prompt engineering master.
Generate a complete cinematic prompt package for the ${mediaTypeLabel} titled "${cleanTitle}".
${customNotes ? `Additional user notes / focus: "${customNotes}".` : ''}

You MUST return a JSON object with this exact structure:
{
  "id": "kebab-case-unique-slug",
  "title": "${cleanTitle}",
  "year": "Release Year (e.g. 1999 or 2024)",
  "director": "Actual director / showrunner / game studio",
  "genres": ["Genre1", "Genre2", "Genre3"],
  "actors": ["Lead Actor 1", "Lead Actor 2", "Lead Actor 3"],
  "type": "${type}",
  "styles": [
    {
      "name": "Distinct Style Name (e.g. Neo-Noir Rain, Anamorphic Golden Hour)",
      "promptString": "Detailed Midjourney style prompt string describing lighting, lenses, film stock, color palette, and textures"
    },
    {
      "name": "Second Style Name",
      "promptString": "Style prompt details..."
    },
    {
      "name": "Third Style Name",
      "promptString": "Style prompt details..."
    }
  ],
  "posterPrompt": "Detailed prompt to generate the official movie poster in Midjourney including key visual art, mood, typography style, and --ar 2:3",
  "scenes": [
    {
      "id": 1,
      "title": "Scene 1 Title (Iconic moment name)",
      "promptPayload": "Photographic shot prompt describing exact action, composition, camera angle, atmosphere, and props"
    },
    {
      "id": 2,
      "title": "Scene 2 Title",
      "promptPayload": "Photographic shot prompt..."
    },
    {
      "id": 3,
      "title": "Scene 3 Title",
      "promptPayload": "Photographic shot prompt..."
    },
    {
      "id": 4,
      "title": "Scene 4 Title",
      "promptPayload": "Photographic shot prompt..."
    },
    {
      "id": 5,
      "title": "Scene 5 Title",
      "promptPayload": "Photographic shot prompt..."
    },
    {
      "id": 6,
      "title": "Scene 6 Title",
      "promptPayload": "Photographic shot prompt..."
    }
  ]
}

Ensure the scenes capture the most unforgettable, iconic, visual moments from "${cleanTitle}".
Output ONLY raw valid JSON. Do not include markdown code blocks (\`\`\`json) if possible, or only include the JSON.`;

    const modelsToTry = [
        'gemini-2.5-flash',
        'gemini-1.5-flash',
        'gemini-1.5-pro'
    ];

    let lastError: Error | null = null;

    for (const model of modelsToTry) {
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: systemPrompt }]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        responseMimeType: 'application/json'
                    }
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Gemini API error (${response.status}): ${errText}`);
            }

            const data = await response.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) {
                throw new Error('Empty response received from Gemini API');
            }

            // Clean markdown code fence if present
            const cleanedText = text
                .replace(/^```json\s*/i, '')
                .replace(/^```\s*/i, '')
                .replace(/\s*```$/i, '')
                .trim();

            const parsed = JSON.parse(cleanedText);

            // Validate and structure parsed response
            const item: MediaItem = {
                id: parsed.id || cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                title: parsed.title || cleanTitle,
                year: String(parsed.year || new Date().getFullYear()),
                director: parsed.director || 'Unknown Director',
                genres: Array.isArray(parsed.genres) ? parsed.genres : ['Drama'],
                actors: Array.isArray(parsed.actors) ? parsed.actors : ['Unknown Cast'],
                type: type,
                styles: Array.isArray(parsed.styles) && parsed.styles.length > 0 ? parsed.styles : [
                    { name: 'Cinematic Standard', promptString: '35mm anamorphic, natural lighting, high dynamic range' }
                ],
                posterPrompt: parsed.posterPrompt || `Official movie poster for ${cleanTitle} --ar 2:3`
            };

            const scenes: Scene[] = Array.isArray(parsed.scenes)
                ? parsed.scenes.map((s: Partial<Scene>, idx: number) => ({
                    id: typeof s.id === 'number' ? s.id : idx + 1,
                    title: s.title || `Scene ${idx + 1}`,
                    promptPayload: s.promptPayload || `${cleanTitle} cinematic scene`
                }))
                : [
                    { id: 1, title: 'Iconic Opening', promptPayload: `Opening scene from ${cleanTitle}` }
                ];

            return { item, scenes };
        } catch (err: unknown) {
            lastError = err instanceof Error ? err : new Error(String(err));
            console.warn(`Attempt with ${model} failed:`, lastError.message);
            // If rate limited or model not found, loop to try next model
        }
    }

    console.error('All Gemini model attempts failed, falling back to local cinematic generator:', lastError);
    return generateFallbackFilm(title, type, customNotes);
}
