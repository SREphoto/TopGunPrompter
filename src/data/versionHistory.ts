export interface VersionUpdate {
    version: string;
    title: string;
    isCurrent?: boolean;
    changes: string[];
}

export const versionHistory: VersionUpdate[] = [
    {
        version: "v3.4.0",
        title: "The Midjourney V8 & V8.1 Upgrade",
        isCurrent: true,
        changes: [
            "V8 & V8.1 Engine: Switched prompt generator from keyword clusters to natural-language prose with explicit lighting definitions.",
            "Prompt Only Mode: Added ability to generate raw prose without technical parameters.",
            "Advanced Parameters: Added UI controls for Quality (--q), Style Reference (--sref, --sw), Omni Reference (--oref, --ow), Chaos, and Weird.",
            "HD Mode: Support for native 2K rendering via --hd in V8.1.",
            "Version Validation: Built-in safeguards to prevent incompatible parameter stacking (e.g. blocking --hd or --oref in V8)."
        ]
    },
    {
        version: "v3.3.0",
        title: "The Poster Prompt Update",
        isCurrent: false,
        changes: [
            "Poster Prompts: Added posterPrompt field to Movie interface in types.ts.",
            "Content Upgrade: Added official movie poster prompts for over 50 'Elite' and 'Classic' movies (e.g., Top Gun, Matrix, Godfather, Alien, Blade Runner).",
            "Visual Enhancement: Enabled high-quality poster generation for UI backgrounds.",
            "Build Success: Verified clean build with new data structures."
        ]
    },
    {
        version: "v3.2.0",
        title: "The Elite V7 Standard Update",
        changes: [
            "Elite V7 Standard: Upgraded 10 legendary films to the new 'Elite' prompt standard (50 High-Detail scenes each).",
            "Cinematic Descriptions: Every new scene now includes detailed camera angles, lighting, and atmosphere metadata.",
            "Movies Upgraded: The Godfather, Alien, Blade Runner, Apocalypse Now, 2001: A Space Odyssey, A Clockwork Orange, Psycho, Full Metal Jacket, Shawshank Redemption, Schindler's List.",
            "Codebase Optimization: Cleaned up fragmented scene data and removed 100+ duplicate scene definitions.",
            "Build Stabilization: Resolved TypeScript and import errors in experimental components."
        ]
    },
    {
        version: "v3.1.0",
        title: "The Mega-Expansion Update",
        changes: [
            "Massive Content Drop: Expanded the scene database to ensure major franchises and categories have 50 scenes per title.",
            "Improved UI Architecture: Refactored the main application into a more modular structure for better performance.",
            "Enhanced Search: Implemented more robust filtering by Genre and Category.",
            "Cleaned Data: Resolved hundreds of duplicate imports and mapping errors in scenes.ts.",
            "New Category: 'Gaming Legends' - 50 scenes added for top-tier titles like The Last of Us, Cyberpunk 2077, and Red Dead Redemption 2."
        ]
    },
    {
        version: "v3.0.0",
        title: "The Aesthetic Overhaul",
        changes: [
            "Glassmorphism UI: Implemented a modern, premium design with translucent layers and vibrant gradients.",
            "Style Presets: Added unique visual style prompts for every movie to help users generate specific 'looks'.",
            "Dynamic Backdrop: The UI now reacts to the selected movie with themed background effects.",
            "Responsive Layout: Fully optimized for Desktop, Tablet, and Mobile viewing."
        ]
    },
    {
        version: "v2.5.0",
        title: "The Classics Expansion",
        changes: [
            "Added Classic Movies 1 & 2 containing 100+ iconic cinema moments.",
            "Introduced Horror Classics and Eighties Action categories.",
            "Basic scene mapping system established."
        ]
    },
    {
        version: "v2.0.0",
        title: "Franchise Support",
        changes: [
            "Added support for large movie franchises: Fast & Furious, Back to the Future, Indiana Jones.",
            "Implemented the first version of the Scene Selector."
        ]
    },
    {
        version: "v1.0.0",
        title: "Initial Release",
        changes: [
            "Core prompter functionality.",
            "Initial set of 20 blockbusters including Top Gun, The Matrix, and Inception.",
            "Basic copy-to-clipboard functionality."
        ]
    }
];
