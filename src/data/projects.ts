
export interface StudioProject {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: string; // Lucide icon name or type
    color: string;
}

export const studioProjects: StudioProject[] = [
    {
        id: 'cinema-archive',
        title: 'Cinema Archive',
        description: 'V7 Master Prompt Engine for Midjourney.',
        url: 'https://srephoto.github.io/TopGunPrompter/',
        icon: 'Film',
        color: 'text-cyan-400'
    },
    {
        id: 'sprite-forge',
        title: 'SpriteForge',
        description: 'AI-powered sprite generation tool.',
        url: 'https://srephoto.github.io/SpriteForge/',
        icon: 'Palette',
        color: 'text-orange-400'
    },
    {
        id: 'mad-men-stylist',
        title: 'Mad Men Stylist',
        description: '60s Fashion & Scene Creator.',
        url: 'https://srephoto.github.io/MadMenPromptCreator/',
        icon: 'Shirt',
        color: 'text-amber-500'
    },
    {
        id: 'zelda-clone',
        title: 'Legend of Zelda',
        description: 'Web-based action adventure engine.',
        url: 'https://srephoto.github.io/zelda-clone/',
        icon: 'Sword',
        color: 'text-green-500'
    },
    {
        id: 'retro-outrun',
        title: 'Retro Outrun',
        description: 'Synthwave visualizer and game.',
        url: 'https://srephoto.github.io/Gemini-Turbo-Outrun/',
        icon: 'Car',
        color: 'text-pink-500'
    },
    {
        id: 'launchpad',
        title: 'Studio Launchpad',
        description: 'App deployment & management suite.',
        url: 'https://srephoto.github.io/Interactive-App-Deployment-Launchpad-/',
        icon: 'Rocket',
        color: 'text-blue-500'
    },
    {
        id: 'diablo-js',
        title: 'Diablo JS',
        description: 'Action RPG engine recreation in JavaScript.',
        url: 'https://srephoto.github.io/diablo-js/',
        icon: 'Flame',
        color: 'text-red-600'
    },
    {
        id: 'iodine-gba',
        title: 'IodineGBA',
        description: 'High-performance Gameboy Advance emulator.',
        url: 'https://srephoto.github.io/IodineGBA/',
        icon: 'Gamepad2',
        color: 'text-purple-500'
    },
    {
        id: 'pixel-art-pro',
        title: 'PixelArt Pro',
        description: 'Professional suite for pixel art creation.',
        url: 'https://srephoto.github.io/PixelArtPro/',
        icon: 'Aperture',
        color: 'text-cyan-500'
    },
    {
        id: 'treasure-map',
        title: 'Treasure Map',
        description: 'Local sales and garage sale routing app.',
        url: 'https://srephoto.github.io/Local-Treasure-Map/',
        icon: 'Map',
        color: 'text-emerald-500'
    },
    {
        id: 'word-music-game',
        title: 'Rhythm Word Game',
        description: 'Music-based word challenge engine.',
        url: 'https://srephoto.github.io/Word-Music-Game/',
        icon: 'Music',
        color: 'text-yellow-400'
    },
    {
        id: 'wellnest',
        title: 'WellNest Social',
        description: 'Wellness-focused social platform (Next.js).',
        url: 'https://srephoto.github.io/WellNestSocialBaseApp/',
        icon: 'Heart',
        color: 'text-rose-400'
    },
    {
        id: 'reia-project',
        title: 'Reia (Sustenet)',
        description: 'Advanced networking and state management engine.',
        url: 'https://srephoto.github.io/sustenet/',
        icon: 'Zap',
        color: 'text-indigo-400'
    },
    {
        id: 'aquaria',
        title: 'Aquaria',
        description: 'Underwater simulation and adventure project.',
        url: 'https://srephoto.github.io/Aquaria/',
        icon: 'Waves',
        color: 'text-blue-400'
    },
    {
        id: 'probability-suite',
        title: 'Probability Suite',
        description: 'Advanced statistical analysis and simulation.',
        url: 'https://srephoto.github.io/probability-suite/',
        icon: 'BarChart3',
        color: 'text-teal-500'
    }
];
