
export interface StudioProject {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: string;
    color: string;
    visibility: 'Public' | 'Private';
    status: 'deployed' | 'repo' | 'local';
    backgroundImage?: string;
}

// SECTION 1: Deployed & Working Apps (GitHub Pages)
export const deployedApps: StudioProject[] = [
    {
        id: 'launchpad',
        title: 'Deployment Launchpad',
        description: 'Interactive AI-guided app deployment tool.',
        url: 'https://interactive-app-deployment-launchpad-zdgy.onrender.com/',
        icon: 'Rocket',
        color: 'text-orange-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000'
    },
    {
        id: 'top-gun-prompter',
        title: 'Top Gun Prompter',
        description: 'V7 Master Prompt Engine for Midjourney.',
        url: 'https://srephoto.github.io/TopGunPrompter/',
        icon: 'Film',
        color: 'text-cyan-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000'
    },
    {
        id: 'zelda-clone',
        title: 'Legend of Zelda',
        description: 'Classic action-adventure engine.',
        url: 'https://srephoto.github.io/zelda-clone/',
        icon: 'Sword',
        color: 'text-green-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000'
    },
    {
        id: 'sre-designs',
        title: 'SREdesigns Portfolio',
        description: 'Professional Portfolio with interactive elements.',
        url: 'https://srephoto.github.io/SREdesigns/',
        icon: 'Aperture',
        color: 'text-white',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000'
    },
    {
        id: 'home-planner',
        title: 'Home Planner',
        description: 'AI-assisted interior design planning.',
        url: 'https://srephoto.github.io/HomePlanner/',
        icon: 'Heart',
        color: 'text-orange-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000'
    },
    {
        id: 'word-slide',
        title: 'Word Finder (WordSlide)',
        description: 'Engaging word puzzle game with 100 levels.',
        url: 'https://srephoto.github.io/WordSlide/',
        icon: 'Gamepad2',
        color: 'text-yellow-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=1000'
    },
    {
        id: 'storyweaver',
        title: 'Story Weaver',
        description: 'Collaborative AI story writing platform.',
        url: 'https://srephoto.github.io/storyweaver/#/',
        icon: 'MessageCircle',
        color: 'text-indigo-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000'
    },
    {
        id: 'dynamic-prob-calc',
        title: 'Probability Calc',
        description: 'Advanced statistics and calculation suite.',
        url: 'https://srephoto.github.io/DynamicProbabilityCalculator/',
        icon: 'BarChart3',
        color: 'text-blue-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000'
    },
    {
        id: 'fractalization',
        title: 'Fractalization',
        description: 'Mesmerizing fractal visualization tool.',
        url: 'https://srephoto.github.io/Fractalization/',
        icon: 'Aperture',
        color: 'text-purple-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000'
    },
    {
        id: 'sprite-forge',
        title: 'SpriteForge',
        description: 'AI-powered sprite generation tool.',
        url: 'https://srephoto.github.io/SpriteForge/',
        icon: 'Palette',
        color: 'text-orange-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000'
    },
    {
        id: 'diablo-js',
        title: 'Diablo JS',
        description: 'Isometric RPG engine recreation.',
        url: 'https://srephoto.github.io/diablo-js/',
        icon: 'Flame',
        color: 'text-red-600',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000'
    },
    {
        id: 'pixel-art-pro',
        title: 'PixelArt Pro',
        description: 'Professional suite for pixel artists.',
        url: 'https://srephoto.github.io/PixelArtPro/',
        icon: 'Aperture',
        color: 'text-cyan-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000'
    },
    {
        id: 'treasure-map',
        title: 'Local Treasure Map',
        description: 'Garage sale routing and local sales.',
        url: 'https://srephoto.github.io/Local-Treasure-Map/',
        icon: 'Map',
        color: 'text-emerald-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000'
    },
    {
        id: 'b2gthr',
        title: 'B2GTHR',
        description: 'Wellness and health tracking platform.',
        url: 'https://b2gthr.web.app/',
        icon: 'Heart',
        color: 'text-rose-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'iodine-gba',
        title: 'IodineGBA',
        description: 'JavaScript GameBoy Advance emulator.',
        url: 'https://srephoto.github.io/IodineGBA/',
        icon: 'Gamepad2',
        color: 'text-fuchsia-500',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1598550476439-c94841dd0ad3?q=80&w=1000'
    },
    {
        id: 'punchline-master',
        title: 'Punchline Master',
        description: 'Social party game.',
        url: 'https://srephoto.github.io/Punchline-Master/',
        icon: 'MessageCircle',
        color: 'text-lime-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1525268323814-e87b2f9df8dc?q=80&w=1000'
    },
    {
        id: 'lane-shark',
        title: 'LaneShark',
        description: 'A thrilling underwater bowling experience.',
        url: 'https://srephoto.github.io/LaneShark/',
        icon: 'Waves',
        color: 'text-cyan-400',
        visibility: 'Public',
        status: 'deployed',
        backgroundImage: 'https://images.unsplash.com/photo-1538513639417-62091dd7929e?q=80&w=1000'
    }
];


// SECTION 2: GitHub Repos (Source code - click to view on GitHub)
export const repoApps: StudioProject[] = [
    {
        id: 'outrun',
        title: 'Outrun Port',
        description: 'Classic arcade racing game port.',
        url: 'https://github.com/SREphoto/Outrun',
        icon: 'Car',
        color: 'text-pink-500',
        visibility: 'Public',
        status: 'repo',
        backgroundImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000'
    },
    {
        id: 'vibe-check',
        title: 'VibeCheck',
        description: 'Vibe analysis tool.',
        url: 'https://github.com/SREphoto/VibeCheck_V0.3',
        icon: 'Waves',
        color: 'text-purple-400',
        visibility: 'Public',
        status: 'repo',
        backgroundImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000'
    },
];

// SECTION 3: Local Only (In development)
export const localApps: StudioProject[] = [
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
