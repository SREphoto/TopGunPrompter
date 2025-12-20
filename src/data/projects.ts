
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
        id: 'cinema-archive',
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
        description: 'Professional Portfolio.',
        url: 'https://srephoto.github.io/SREdesigns/',
        icon: 'Aperture',
        color: 'text-white',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'word-music',
        title: 'Word Music Game',
        description: 'Rhythm based word challenge.',
        url: 'https://srephoto.github.io/Word-Music-Game/',
        icon: 'Music',
        color: 'text-yellow-400',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'home-planner',
        title: 'Home Planner',
        description: 'Interior design planning tool.',
        url: 'https://srephoto.github.io/HomePlanner/',
        icon: 'Heart',
        color: 'text-orange-400',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'word-slide',
        title: 'Word Slide',
        description: 'Word puzzle game.',
        url: 'https://srephoto.github.io/WordSlide/',
        icon: 'Gamepad2',
        color: 'text-yellow-500',
        visibility: 'Public',
        status: 'deployed'
    },
    {
        id: 'storyweaver',
        title: 'Story Weaver',
        description: 'Collaborative story writing.',
        url: 'https://srephoto.github.io/storyweaver/',
        icon: 'MessageCircle',
        color: 'text-indigo-500',
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
        id: 'iodine-gba',
        title: 'IodineGBA',
        description: 'Gameboy Advance legacy emulator.',
        url: 'https://github.com/SREphoto/IodineGBA',
        icon: 'Gamepad2',
        color: 'text-purple-500',
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
        id: 'pixel-platformer',
        title: 'Pixel Platformer',
        description: 'HTML5 Entity platformer engine.',
        url: 'https://github.com/SREphoto/PixelPlatformer',
        icon: 'Trophy',
        color: 'text-lime-400',
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
        description: 'Wellness platform.',
        url: 'https://github.com/SREphoto/WellNest',
        icon: 'Heart',
        color: 'text-rose-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'reia',
        title: 'Reia (Godot/Rust)',
        description: 'MMO engine networking project.',
        url: 'https://github.com/SREphoto/Reia',
        icon: 'Zap',
        color: 'text-indigo-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'aquaria',
        title: 'Aquaria',
        description: 'Open source underwater adventure.',
        url: 'https://github.com/SREphoto/Aquaria',
        icon: 'Waves',
        color: 'text-blue-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'roguish',
        title: 'Roguish',
        description: 'Extensible roguelike multiplayer.',
        url: 'https://github.com/SREphoto/roguish',
        icon: 'Skull',
        color: 'text-zinc-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'poker-texas',
        title: 'Texas Hold\'em',
        description: 'Web-based card game engine.',
        url: 'https://github.com/SREphoto/TEXASHOLD',
        icon: 'Coins',
        color: 'text-red-500',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'flirt-game',
        title: 'Flirt Game',
        description: 'Social interaction simulator.',
        url: 'https://github.com/SREphoto/Flirt-Game',
        icon: 'MessageCircle',
        color: 'text-pink-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'video-kit',
        title: 'Video Starter Kit',
        description: 'AI video production tools.',
        url: 'https://github.com/SREphoto/video-starter-kit',
        icon: 'Video',
        color: 'text-blue-600',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'supertuxkart',
        title: 'SuperTuxKart',
        description: 'Open source racing game.',
        url: 'https://github.com/SREphoto/SuperTuxKart',
        icon: 'Car',
        color: 'text-red-500',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'dynamic-prob-calc',
        title: 'Probability Calc',
        description: 'Advanced statistics suite.',
        url: 'https://github.com/SREphoto/dynamic-probability-calculator',
        icon: 'BarChart3',
        color: 'text-blue-400',
        visibility: 'Public',
        status: 'repo'
    },
    {
        id: 'fractalization',
        title: 'Fractalization',
        description: 'Fractal visualization.',
        url: 'https://github.com/SREphoto/Fractalization',
        icon: 'Aperture',
        color: 'text-purple-400',
        visibility: 'Public',
        status: 'repo'
    }
];

// SECTION 3: Local Only (Not deployed yet)
export const localApps: StudioProject[] = [
    {
        id: 'mad-men-stylist',
        title: 'Mad Men Stylist',
        description: 'Fashion & Scene Creator.',
        url: '',
        icon: 'Shirt',
        color: 'text-amber-500',
        visibility: 'Private',
        status: 'local'
    },
    {
        id: 'ocr-app',
        title: 'OCR App',
        description: 'Optical Character Recognition.',
        url: '',
        icon: 'Aperture',
        color: 'text-green-400',
        visibility: 'Private',
        status: 'local'
    },
    {
        id: 'tetris',
        title: 'Tetris',
        description: 'Classic block stacking game.',
        url: '',
        icon: 'Gamepad2',
        color: 'text-purple-500',
        visibility: 'Private',
        status: 'local'
    }
];

// Combined for backwards compatibility
export const studioProjects: StudioProject[] = [...deployedApps, ...repoApps, ...localApps];
