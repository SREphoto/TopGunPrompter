
export interface StudioProject {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: string;
    color: string;
    visibility: 'Public' | 'Private';
    status: 'deployed' | 'repo' | 'local';
}

// SECTION 1: Deployed & Working Apps (GitHub Pages)
export const deployedApps: StudioProject[] = [
    {
        id: 'top-gun-prompter',
        title: 'Top Gun Prompter',
        description: 'V7 Master Prompt Engine for Midjourney.',
        url: 'https://srephoto.github.io/TopGunPrompter/',
        icon: 'Film',
        color: 'text-cyan-400',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'zelda-clone',
        title: 'Legend of Zelda',
        description: 'Classic action-adventure engine.',
        url: 'https://srephoto.github.io/zelda-clone/',
        icon: 'Sword',
        color: 'text-green-500',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'sre-designs',
        title: 'SREdesigns Portfolio',
        description: 'Professional Portfolio with interactive elements.',
        url: 'https://srephoto.github.io/SREdesigns/',
        icon: 'Aperture',
        color: 'text-white',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'word-music',
        title: 'Word Music Game',
        description: 'Rhythm based word challenge (Now Fixed).',
        url: 'https://srephoto.github.io/Word-Music-Game/',
        icon: 'Music',
        color: 'text-yellow-400',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'home-planner',
        title: 'Home Planner',
        description: 'AI-assisted interior design planning.',
        url: 'https://srephoto.github.io/HomePlanner/',
        icon: 'Heart',
        color: 'text-orange-400',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'word-slide',
        title: 'Word Finder (WordSlide)',
        description: 'Engaging word puzzle game with 100 levels.',
        url: 'https://srephoto.github.io/WordSlide/',
        icon: 'Gamepad2',
        color: 'text-yellow-500',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'storyweaver',
        title: 'Story Weaver',
        description: 'Collaborative AI story writing platform.',
        url: 'https://srephoto.github.io/storyweaver/#/',
        icon: 'MessageCircle',
        color: 'text-indigo-500',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'dynamic-prob-calc',
        title: 'Probability Calc',
        description: 'Advanced statistics and calculation suite.',
        url: 'https://srephoto.github.io/DynamicProbabilityCalculator/',
        icon: 'BarChart3',
        color: 'text-blue-400',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'fractalization',
        title: 'Fractalization',
        description: 'Mesmerizing fractal visualization tool.',
        url: 'https://srephoto.github.io/Fractalization/',
        icon: 'Aperture',
        color: 'text-purple-400',
        visibility: 'Public',
        status: 'deployed'
    }
];

// SECTION 2: GitHub Repos (Source code - click to view on GitHub)
export const repoApps: StudioProject[] = [
    {
        id: 'sprite-forge',
        title: 'SpriteForge',
        description: 'AI-powered sprite generation tool.',
        url: 'https://github.com/SREphoto/SpriteForge',
        icon: 'Palette',
        color: 'text-orange-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'diablo-js',
        title: 'Diablo JS',
        description: 'Isometric RPG engine recreation.',
        url: 'https://github.com/SREphoto/diablo-js',
        icon: 'Flame',
        color: 'text-red-600',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'pixel-art-pro',
        title: 'PixelArt Pro',
        description: 'Professional suite for pixel artists.',
        url: 'https://github.com/SREphoto/PixelArtPro',
        icon: 'Aperture',
        color: 'text-cyan-500',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'treasure-map',
        title: 'Local Treasure Map',
        description: 'Garage sale routing and local sales.',
        url: 'https://github.com/SREphoto/Local-Treasure-Map',
        icon: 'Map',
        color: 'text-emerald-500',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'wellnest',
        title: 'WellNest',
        description: 'Wellness and health tracking platform.',
        url: 'https://github.com/SREphoto/WellNest',
        icon: 'Heart',
        color: 'text-rose-400',
        visibility: 'Public',
        status: 'repo'
    }
];

// SECTION 3: Local Only (In development)
export const localApps: StudioProject[] = [
    {
        id: 'mad-men-stylist',
        title: 'Mad Men Stylist',
        description: 'Vintage fashion & scene creator.',
        url: '',
        icon: 'Shirt',
        color: 'text-amber-500',
        visibility: 'Private',
        status: 'local'
    },
    {
        id: 'ocr-app',
        title: 'OCR App',
        description: 'Optical Character Recognition scanner.',
        url: '',
        icon: 'Aperture',
        color: 'text-green-400',
        visibility: 'Private',
        status: 'local'
    },
    {
        id: 'tetris',
        title: 'Tetris Classic',
        description: 'Retro block stacking experience.',
        url: '',
        icon: 'Gamepad2',
        color: 'text-purple-500',
        visibility: 'Private',
        status: 'local'
    }
];

export const studioProjects: StudioProject[] = [...deployedApps, ...repoApps, ...localApps];
