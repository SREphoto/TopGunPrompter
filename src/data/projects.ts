
export interface StudioProject {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: string; // Lucide icon name or type
    color: string;
    visibility: 'Public' | 'Private';
}

export const studioProjects: StudioProject[] = [
    {
        id: 'cinema-archive',
        title: 'Cinema Archive',
        description: 'V7 Master Prompt Engine for Midjourney.',
        url: 'https://srephoto.github.io/TopGunPrompter/',
        icon: 'Film',
        color: 'text-cyan-400',
        visibility: 'Public'
    },
    {
        id: 'sprite-forge',
        title: 'SpriteForge',
        description: 'AI-powered sprite generation tool.',
        url: 'https://srephoto.github.io/SpriteForge/',
        icon: 'Palette',
        color: 'text-orange-400',
        visibility: 'Public'
    },
    {
        id: 'zelda-clone',
        title: 'Legend of Zelda',
        description: 'Classic action-adventure engine.',
        url: 'https://srephoto.github.io/zelda-clone/',
        icon: 'Sword',
        color: 'text-green-500',
        visibility: 'Public'
    },
    {
        id: 'diablo-js',
        title: 'Diablo JS',
        description: 'Isometric RPG engine recreation.',
        url: 'https://srephoto.github.io/diablo-js/',
        icon: 'Flame',
        color: 'text-red-600',
        visibility: 'Public'
    },
    {
        id: 'iodine-gba',
        title: 'IodineGBA',
        description: 'Gameboy Advance legacy emulator.',
        url: 'https://srephoto.github.io/IodineGBA/',
        icon: 'Gamepad2',
        color: 'text-purple-500',
        visibility: 'Public'
    },
    {
        id: 'pixel-art-pro',
        title: 'PixelArt Pro',
        description: 'Professional suite for pixel artists.',
        url: 'https://srephoto.github.io/PixelArtPro/',
        icon: 'Aperture',
        color: 'text-cyan-500',
        visibility: 'Public'
    },
    {
        id: 'launchpad',
        title: 'Studio Launchpad',
        description: 'Deployment & management suite.',
        url: 'https://srephoto.github.io/Interactive-App-Deployment-Launchpad-/',
        icon: 'Rocket',
        color: 'text-blue-500',
        visibility: 'Public'
    },
    {
        id: 'treasure-map',
        title: 'Local Treasure Map',
        description: 'Garage sale routing and local sales.',
        url: 'https://srephoto.github.io/Local-Treasure-Map/',
        icon: 'Map',
        color: 'text-emerald-500',
        visibility: 'Public'
    },
    {
        id: 'wellnest',
        title: 'WellNest Social',
        description: 'Wellness platform and base app.',
        url: 'https://srephoto.github.io/WellNestSocialBaseApp/',
        icon: 'Heart',
        color: 'text-rose-400',
        visibility: 'Public'
    },
    {
        id: 'word-music',
        title: 'Word Music Game',
        description: 'Rhythm based word challenge.',
        url: 'https://srephoto.github.io/Word-Music-Game/',
        icon: 'Music',
        color: 'text-yellow-400',
        visibility: 'Public'
    },
    {
        id: 'reia',
        title: 'Reia (Godot/Rust)',
        description: 'MMO engine networking project.',
        url: 'https://srephoto.github.io/Reia/',
        icon: 'Zap',
        color: 'text-indigo-400',
        visibility: 'Public'
    },
    {
        id: 'aquaria',
        title: 'Aquaria',
        description: 'Open source underwater adventure.',
        url: 'https://srephoto.github.io/Aquaria/',
        icon: 'Waves',
        color: 'text-blue-400',
        visibility: 'Public'
    },
    {
        id: 'pixel-platformer',
        title: 'Pixel Platformer',
        description: 'HTML5 Entity platformer engine.',
        url: 'https://srephoto.github.io/PixelPlatformer/',
        icon: 'Trophy',
        color: 'text-lime-400',
        visibility: 'Public'
    },
    {
        id: 'roguish',
        title: 'Roguish',
        description: 'Extensible roguelike multiplayer.',
        url: 'https://srephoto.github.io/roguish/',
        icon: 'Skull',
        color: 'text-zinc-400',
        visibility: 'Public'
    },
    {
        id: 'poker-texas',
        title: 'Texas Hold\'em',
        description: 'Web-based card game engine.',
        url: 'https://srephoto.github.io/TEXASHOLD/',
        icon: 'Coins',
        color: 'text-red-500',
        visibility: 'Public'
    },
    {
        id: 'flirt-game',
        title: 'Flirt Game',
        description: 'Social interaction simulator.',
        url: 'https://srephoto.github.io/Flirt-Game/',
        icon: 'MessageCircle',
        color: 'text-pink-400',
        visibility: 'Public'
    },
    {
        id: 'video-kit',
        title: 'Video Starter Kit',
        description: 'AI video production tools.',
        url: 'https://srephoto.github.io/video-starter-kit/',
        icon: 'Video',
        color: 'text-blue-600',
        visibility: 'Public'
    },
    {
        id: 'mad-men-stylist',
        title: 'Mad Men Stylist',
        description: 'Fashion & Scene Creator.',
        url: 'https://srephoto.github.io/MadMenPromptCreator/',
        icon: 'Shirt',
        color: 'text-amber-500',
        visibility: 'Private'
    },
    {
        id: 'retro-outrun',
        title: 'Retro Outrun',
        description: 'Synthwave visualizer.',
        url: 'https://srephoto.github.io/Gemini-Turbo-Outrun/',
        icon: 'Car',
        color: 'text-pink-500',
        visibility: 'Private'
    },
    {
        id: 'sky-metropolis',
        title: 'Sky Metropolis',
        description: 'Cloud city builder simulator.',
        url: 'https://github.com/SREphoto/Sky-Metropolis',
        icon: 'Citrus',
        color: 'text-sky-400',
        visibility: 'Private'
    },
    {
        id: '3d-asset-studio',
        title: '3D Asset Studio',
        description: '3D asset preview & management.',
        url: 'https://srephoto.github.io/3DAssetStudio/3D-Asset-Studio/',
        icon: 'Video',
        color: 'text-blue-500',
        visibility: 'Public'
    },
    {
        id: 'tetris',
        title: 'Tetris',
        description: 'Classic block stacking game.',
        url: 'https://srephoto.github.io/Tetris/Tetris/',
        icon: 'Gamepad2',
        color: 'text-purple-500',
        visibility: 'Public'
    },
    {
        id: 'fantasy-map-designer',
        title: 'Fantasy Map Designer',
        description: 'Create fantasy world maps.',
        url: 'https://srephoto.github.io/Fantasy%20World%20Map%20Designer/fantasy-map-designer/',
        icon: 'Map',
        color: 'text-emerald-600',
        visibility: 'Public'
    },
    {
        id: 'home-planner',
        title: 'Home Planner',
        description: 'Interior design planning tool.',
        url: 'https://srephoto.github.io/HomePlanner/',
        icon: 'Heart',
        color: 'text-orange-400',
        visibility: 'Public'
    },
    {
        id: 'iconify',
        title: 'Iconify',
        description: 'Icon generation management.',
        url: 'https://srephoto.github.io/Iconify/Iconify-Nov-2025/',
        icon: 'Palette',
        color: 'text-cyan-500',
        visibility: 'Public'
    },
    {
        id: 'punchline-master',
        title: 'Punchline Master',
        description: 'AI Punchline Meme Calendar.',
        url: 'https://srephoto.github.io/Punchline%20Master/AI-Punchline-Meme-Calendar/',
        icon: 'MessageCircle',
        color: 'text-pink-500',
        visibility: 'Public'
    },
    {
        id: 'storyboard-creator',
        title: 'StoryBoard Creator',
        description: 'Visual storytelling tool.',
        url: 'https://srephoto.github.io/StoryBoard%20Creator/StoryBoardCreator/',
        icon: 'Film',
        color: 'text-zinc-400',
        visibility: 'Public'
    },
    {
        id: 'ocr-app',
        title: 'OCR App',
        description: 'Optical Character Recognition.',
        url: 'https://srephoto.github.io/ocr-app/',
        icon: 'Aperture',
        color: 'text-green-400',
        visibility: 'Public'
    },
    {
        id: 'storyweaver',
        title: 'Story Weaver',
        description: 'Collaborative story writing.',
        url: 'https://srephoto.github.io/storyweaver/',
        icon: 'MessageCircle',
        color: 'text-indigo-500',
        visibility: 'Public'
    },
    {
        id: 'word-slide',
        title: 'Word Slide',
        description: 'Word puzzle game.',
        url: 'https://srephoto.github.io/WordSlide/',
        icon: 'Gamepad2',
        color: 'text-yellow-500',
        visibility: 'Public'
    },
    {
        id: 'sre-designs',
        title: 'SREdesigns',
        description: 'Professional Portfolio.',
        url: 'https://srephoto.github.io/SREdesigns/',
        icon: 'Aperture',
        color: 'text-white',
        visibility: 'Public'
    },
    {
        id: 'supertuxkart',
        title: 'SuperTuxKart',
        description: 'Open source racing game.',
        url: 'https://github.com/SREphoto/SuperTuxKart',
        icon: 'Car',
        color: 'text-red-500',
        visibility: 'Public'
    },
    {
        id: 'dynamic-prob-calc',
        title: 'Probability Calc',
        description: 'Advanced statistics suite.',
        url: 'https://github.com/SREphoto/DynamicProbabilityCalculator',
        icon: 'BarChart3',
        color: 'text-blue-400',
        visibility: 'Public'
    }
];
