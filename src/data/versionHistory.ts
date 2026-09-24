export interface VersionUpdate {
    version: string;
    title: string;
    isCurrent?: boolean;
    changes: string[];
}

export const versionHistory: VersionUpdate[] = [
    {
        version: "v3.8.0",
        title: "The 50-Scene Masterworks Expansion: 80s Icons, National Lampoon, Jennifer Connelly & Classics",
        isCurrent: true,
        changes: [
            "50-Scene Standard for 21 Iconic Titles: Added 1,050 handcrafted, director-grade cinematic scene prompts (exactly 50 scenes per title) with 35mm anamorphic camera angles, lighting cues, color grading, and film stocks.",
            "5 Authentic Visual Styles Per Title: Expanded each film with 5 bespoke aesthetic presets capturing distinctive eras, directors, and cinematographers.",
            "80s Sci-Fi, Adventure & Comedy Legends: Added 50 scenes and 5 styles each for The Goonies, Weird Science, Real Genius, and Airplane!.",
            "The Complete National Lampoon Anthology: Added 50 scenes and 5 styles each for Animal House (1978), National Lampoon's Vacation (1983), European Vacation (1985), Vegas Vacation (1997), and overhauled Christmas Vacation (1989).",
            "Ghostbusters I & II: Comprehensive 50-scene expansions for both Ivan Reitman classics (Ghostbusters 1984 & Ghostbusters II 1989) with proton beam glow and slime aesthetics.",
            "The Jennifer Connelly Cinematic Showcase: Added 50-scene suites and 5 custom styles each for 7 seminal works: Labyrinth (1986), Phenomena (1985), Career Opportunities (1991), The Rocketeer (1991), Dark City (1998), Requiem for a Dream (2000), and A Beautiful Mind (2001).",
            "Classics & Remakes: Complete 50-scene overhauls for Steven Spielberg's Jaws (1975) and Bob Clark's A Christmas Story (1983), plus Dennis Iliadis' gritty 2009 remake of The Last House on the Left."
        ]
    },
    {
        version: "v3.7.0",
        title: "The Ultimate Horror Expansion & Rob Zombie Collection",
        isCurrent: false,
        changes: [
            "Horror Category Expansion: Added 22 new horror masterworks for a grand total of 30 iconic films in the dedicated Horror category.",
            "25 Scenes Standard: Every horror film now features exactly 25 hand-crafted, high-detail Midjourney scene prompts with camera angles, lighting conditions, and dialogue excerpts (750+ total horror scenes).",
            "Complete Rob Zombie Filmography: Added all 9 Rob Zombie feature films (House of 1000 Corpses, The Devil's Rejects, Halloween 2007, Halloween II 2009, El Superbeasto, The Lords of Salem, 31, 3 from Hell, The Munsters 2022).",
            "Grindhouse & Exploitation Classics: Added Wes Craven's 1972 boundary-pushing classic The Last House on the Left with raw 16mm grindhouse aesthetics.",
            "Modern & Psychological Horror Staples: Added The Ring, Rosemary's Baby, A Quiet Place, The Descent, 28 Days Later, Paranormal Activity, The Babadook, Insidious, Sinister, The Cabin in the Woods, Carrie, and The Mist.",
            "3 Custom Visual Styles Per Film: Bespoke aesthetic presets capturing Rob Zombie's carnival grindhouse neon, 1970s sun-bleached exploitation, and psychological atmospheric dread."
        ]
    },
    {
        version: "v3.6.0",
        title: "Favorites System, On-The-Spot Gemini AI Media Creator & Community Sync",
        isCurrent: false,
        changes: [
            "Favorites System: Favorite any movie, TV series, or video game with a single click. Dedicated Favorites tab with live count badge.",
            "Ask Gemini to Add Media: On-the-spot AI generation tool powered by Google Gemini to create complete film, show, or video game prompt packages.",
            "Complete Media Package Generation: Generates official metadata, director/studio, cast, genres, 3-5 unique visual styles, 5-10 iconic scenes, and official poster art prompts.",
            "Global Community Persistence: Multi-tiered sync across cloud storage, local Vite dev server auto-writing, and local cache so added media is saved and accessible for everyone.",
            "Manual Title Creator: Comprehensive manual entry tab for authors wanting to craft their own custom titles, scenes, and visual styles.",
            "Intelligent Fallback Engine: Built-in cinematic prompt generator that works seamlessly even without an API key or offline."
        ]
    },
    {
        version: "v3.5.0",
        title: "The Seasonal, Holiday & Horror Mega-Expansion",
        isCurrent: false,
        changes: [
            "Seasonal & Holiday Hub: Added a dedicated top-level mode for Fall, Halloween, Horror, Thanksgiving, Winter, Christmas, New Year's Eve, and Valentine's Day.",
            "Dedicated Horror Category: Separate first-class category featuring iconic slashers and horror masterpieces (Friday the 13th, A Nightmare on Elm Street, Texas Chain Saw Massacre, Halloween, Saw, The Conjuring, Hereditary, Night of the Living Dead, IT, Child's Play) alongside family Halloween and cartoon classics.",
            "48 Curated Titles: Extensive coverage of seasonal films, beloved animated specials (Charlie Brown specials, The Simpsons Treehouse of Horror & I Love Lisa, Over the Garden Wall, Rankin/Bass stop-motion classics), and cozy holiday favorites.",
            "Tailored Midjourney Styles & Scenes: Added rich visual style presets (e.g., Unknown Woods, Wes Anderson Autumn, 80s Slasher Gritty VHS, Rankin/Bass Animagic, 90s Rom-Com Golden Glow) and handcrafted scene prompts for every seasonal title.",
            "Atmospheric UI Particle FX: Dynamic theme effects with floating autumn leaves, falling snow, festive confetti, glowing hearts, and blood-red horror atmospheric lighting."
        ]
    },
    {
        version: "v3.4.0",
        title: "The Midjourney V8 & V8.1 Upgrade",
        isCurrent: false,
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
