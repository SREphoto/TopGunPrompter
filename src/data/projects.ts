
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
        id: 'sre-designs',
        title: 'SREdesigns',
        description: 'Premium Digital Experiences & Design Studio.',
        url: 'https://sredesigns.com/',
        icon: 'Palette',
        color: 'text-purple-400'
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
        url: 'https://srephoto.github.io/InteractiveAppDeploymentLaunchpad/',
        icon: 'Rocket',
        color: 'text-blue-500'
    }
];
