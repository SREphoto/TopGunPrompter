import type { MediaItem } from './types';

export const games: MediaItem[] = [
    {
        id: 'the-last-of-us-part-1',
        title: 'The Last of Us Part I',
        year: '2022',
        genres: ['Action', 'Adventure', 'Horror'],
        director: 'Neil Druckmann',
        actors: ['Pedro Pascal', 'Bella Ramsey'], // Using show actors/voice actors mix or just characters? Sticking to voice/show actors for familiarity
        type: 'game',
        styles: [
            { name: 'Overgrown City', promptString: 'nature reclaiming civilization, lush green vegetation on buildings, concrete decay, soft overcast natural lighting, melancholic' },
            { name: 'Spore Dark', promptString: 'dark basement, floating spores, flashlight beam, intense shadows, green fungal growth, terrifying atmosphere, claustrophobic' },
            { name: 'Emotional Close-up', promptString: 'shallow depth of field, dirty face, tear streaks, raw emotion, cinematic lighting, 85mm portrait lens' }
        ]
    },
    {
        id: 'cyberpunk-2077',
        title: 'Cyberpunk 2077',
        year: '2020',
        genres: ['Action', 'RPG', 'Sci-Fi'],
        director: 'Adam Badowski',
        actors: ['Keanu Reeves'],
        type: 'game',
        styles: [
            { name: 'Night City', promptString: 'neon signs, wet pavement, towering skyscrapers, holographic ads, dense crowd, rain, pink and blue color palette' },
            { name: 'Badlands', promptString: 'desert wasteland, dust storm, rusted metal, blinding sun, nomad vehicles, wide open space, heat haze' },
            { name: 'Braindance', promptString: 'digital glitch, datamoshing, scanlines, distorted reality, thermal vision overlay, cybernetic interface' }
        ]
    },
    {
        id: 'red-dead-redemption-2',
        title: 'Red Dead Redemption 2',
        year: '2018',
        genres: ['Action', 'Adventure', 'Western'],
        director: 'Rockstar Games',
        actors: ['Roger Clark'],
        type: 'game',
        styles: [
            { name: 'The Heartlands', promptString: 'rolling green hills, bison herd, golden hour sunlight, volumetric clouds, grassy plains, painterly landscape' },
            { name: 'Saint Denis Fog', promptString: 'dense industrial fog, gas lamps, cobblestone streets, swamp humidity, mysterious silhouette, moonlit' },
            { name: 'Snowy Grizzlies', promptString: 'deep snow, heavy blizzard, fur coat texture, cold blue tones, mountain peaks, survival atmosphere' }
        ]
    },
    {
        id: 'elden-ring',
        title: 'Elden Ring',
        year: '2022',
        genres: ['Action', 'RPG', 'Fantasy'],
        director: 'Hidetaka Miyazaki',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Erdtree Gold', promptString: 'giant glowing golden tree in sky, falling golden leaves, ethereal light, grand fantasy landscape, awe inspiring' },
            { name: 'Caelid Rot', promptString: 'red sky, twisted fungal growths, swamp of rot, desolate, horrifying, disease texture, alien landscape' },
            { name: 'Liurnia Mist', promptString: 'thick magical fog, blue crystals, flooded ruins, gothic academy silhouette, cool color temperature, mystical' }
        ]
    },
    {
        id: 'control',
        title: 'Control',
        year: '2019',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Mikael Kasurinen',
        actors: ['Courtney Hope'],
        type: 'game',
        styles: [
            { name: 'Brutalist Red', promptString: 'imposing concrete architecture, harsh red emergency lighting, geometric shapes, supernatural suspension, unsettling' },
            { name: 'Astral Plane', promptString: 'infinite white void, black stone monoliths, minimal, sterile, abstract shapes, soft ambient occlusion' },
            { name: 'Hiss Distortion', promptString: 'reality warping, chromatic aberration, fluid floating debris, red smoke, chaotic energy, motion blur' }
        ]
    },
    {
        id: 'death-stranding',
        title: 'Death Stranding',
        year: '2019',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Hideo Kojima',
        actors: ['Norman Reedus', 'Mads Mikkelsen', 'Léa Seydoux'],
        type: 'game',
        styles: [
            { name: 'Icelandic Black Sand', promptString: 'volcanic black rock, green moss, overcast grey sky, lonely figure walking, vast scale, photorealistic landscape' },
            { name: 'Timefall Rain', promptString: 'heavy rain that ages things, inverted rainbow, black tar creatures, dark moody atmosphere, mist' },
            { name: 'Hades War', promptString: 'world war trenches, barbed wire, skeletal soldiers, oil slick texture, hellish red sky, nightmare' }
        ]
    },
    {
        id: 'bioshock',
        title: 'BioShock',
        year: '2007',
        genres: ['Action', 'Sci-Fi', 'Horror'],
        director: 'Ken Levine',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Rapture Deco', promptString: 'underwater city, art deco architecture, neon signs, water leaking, rusting brass, retro 1950s aesthetic' },
            { name: 'Big Daddy', promptString: 'heavy diving suit, glowing portholes, drill arm, industrial texture, rivets, dark corridor, scary' },
            { name: 'Splicer Shadow', promptString: 'deformed silhouette, bunny mask, dirty hospital tiles, flickering light, horror atmosphere, tilted angle' }
        ]
    },
    {
        id: 'bloodborne',
        title: 'Bloodborne',
        year: '2015',
        genres: ['Action', 'RPG', 'Horror'],
        director: 'Hidetaka Miyazaki',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Yharnam Gothic', promptString: 'victorian gothic architecture, cobblestones, gas lamps, dark night, full moon, cosmic horror, blood slicked' },
            { name: 'Hunter Garb', promptString: 'leather trench coat, tricorne hat, saw cleaver, intricate fabric texture, dark and gritty, blood splatter' },
            { name: 'Nightmare Swirl', promptString: 'purple and red sky, twisted organic shapes, eyes on walls, frenzy, lovecraftian madness, surreal' }
        ]
    },
    {
        id: 'god-of-war-ragnarok',
        title: 'God of War Ragnarok',
        year: '2022',
        genres: ['Action', 'Adventure'],
        director: 'Eric Williams',
        actors: ['Christopher Judge', 'Sunny Suljic'],
        type: 'game',
        styles: [
            { name: 'Fimbulwinter', promptString: 'frozen midgard, thick snow, biting frost, wolf sled, nordic runes, cold white and blue lighting' },
            { name: 'Vanaheim Jungle', promptString: 'lush mystical jungle, bioluminescent plants, ancient stone structures, river, vibrant greens and purples' },
            { name: 'Spartan Rage', promptString: 'burning orange embers, fire, intense anger, glowing red eyes, chaos blades, high contrast, heat' }
        ]
    },
    {
        id: 'horizon-forbidden-west',
        title: 'Horizon Forbidden West',
        year: '2022',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Mathijs de Jonge',
        actors: ['Ashly Burch'],
        type: 'game',
        styles: [
            { name: 'Machine Graveyard', promptString: 'giant rusted mechanical beasts, desert ruins, wires and cables, high tech parts in sand, bright desert sun' },
            { name: 'Oceanic Bloom', promptString: 'tropical beach, clear turquoise water, palm trees, giant mechanical turtle, sun flare, paradise' },
            { name: 'Focus HUD', promptString: 'holographic projections, blue digital lines, scan data, augmented reality overlay on nature' }
        ]
    },
    {
        id: 'ghost-of-tsushima',
        title: 'Ghost of Tsushima',
        year: '2020',
        genres: ['Action', 'Adventure'],
        director: 'Nate Fox',
        actors: ['Daisuke Tsuji'],
        type: 'game',
        styles: [
            { name: 'Autumn Leaves', promptString: 'carpet of bright red maple leaves, falling leaves, traditional japanese temple, peaceful wind, vibrant color' },
            { name: 'Kurosawa Mode', promptString: 'high contrast black and white, heavy film grain, samurai duel, wind blowing grass, 1950s japanese cinema aesthetic' },
            { name: 'Moonlit Duel', promptString: 'field of white spider lilies, giant full moon, silhouette of samurai, cherry blossoms in breeze, poetic' }
        ]
    },
    {
        id: 'alan-wake-2',
        title: 'Alan Wake 2',
        year: '2023',
        genres: ['Horror', 'Mystery'],
        director: 'Sam Lake',
        actors: ['Ilkka Villi', 'Matthew Porretta'],
        type: 'game',
        styles: [
            { name: 'Dark Place NYC', promptString: 'twisted noir version of New York, shifting neon signs, overlapping graffiti, dark ink shadows, surreal urban horror' },
            { name: 'The Overlap', promptString: 'forest woods merging with strange dimensions, doppler effect, distorted trees, unsettling light, portal' },
            { name: 'Flashlight Beam', promptString: 'harsh flashlight cutting through deep darkness, particle effects in beam, high contrast shadows, tense' }
        ]
    },
    {
        id: 'resident-evil-4-remake',
        title: 'Resident Evil 4',
        year: '2023',
        genres: ['Action', 'Horror'],
        director: 'Yasuhiro Anpo',
        actors: ['Nick Apostolides'],
        type: 'game',
        styles: [
            { name: 'Spanish Village', promptString: 'muddy rural village, rain, burning hay, dirty textures, villagers with pitchforks, overcast grey sky' },
            { name: 'Castle Grandeur', promptString: 'european gothic castle, red velvet, gold trim, candlelit, massive chandeliers, religious zealotry' },
            { name: 'Island Lab', promptString: 'industrial facility, blue clinical lighting, body bags, biohazard signs, metal grates, scientific horror' }
        ]
    },
    {
        id: 'final-fantasy-vii-rebirth',
        title: 'Final Fantasy VII Rebirth',
        year: '2024',
        genres: ['RPG', 'Fantasy', 'Sci-Fi'],
        director: 'Naoki Hamaguchi',
        actors: ['Cody Christian'],
        type: 'game',
        styles: [
            { name: 'Midgar Steel', promptString: 'industrial piping, mako energy glow, cyberpunk slums, massive buster sword, steampunk details' },
            { name: 'Grasslands', promptString: 'vast green meadows, chocobos grazing, crystal clear blue sky, mountain range, epic fantasy scale' },
            { name: 'Cosmo Canyon', promptString: 'red rock canyons, stargazing observatory, bonfire embers, sunset, native american inspired motifs' }
        ]
    },
    {
        id: 'hollow-knight',
        title: 'Hollow Knight',
        year: '2017',
        genres: ['Action', 'Adventure', 'Indie'],
        director: 'William Pellen',
        actors: [],
        type: 'game',
        styles: [
            { name: 'City of Tears', promptString: 'rainy blue stone city, glowing blue lanterns, beautiful melancholy, insectoid architecture, gothic' },
            { name: 'Deepnest', promptString: 'dark tunnels, spider webs, claustrophobic, many eyes in dark, eerie, arachnophobia, scratching sounds' },
            { name: 'Greenpath', promptString: 'winding plant tunnels, acidic pools, vibrant green leaves, insect shells, soft natural light' }
        ]
    },
    {
        id: 'hades',
        title: 'Hades',
        year: '2020',
        genres: ['Action', 'RPG', 'Indie'],
        director: 'Greg Kasavin',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Tartarus', promptString: 'greek underworld, dark halls with green glowing details, chains, skeletal motifs, isometric perspective' },
            { name: 'Asphodel', promptString: 'hellish lava pools, burning skeletons, islands of bone in magma, orange and yellow light, heat' },
            { name: 'Elysium', promptString: 'pink and white flowers, golden armor, heroic statues, starry blue sky, celestial paradise' }
        ]
    },
    {
        id: 'mass-effect-legendary-edition',
        title: 'Mass Effect',
        year: '2021',
        genres: ['RPG', 'Sci-Fi'],
        director: 'Casey Hudson',
        actors: ['Mark Meer', 'Jennifer Hale'],
        type: 'game',
        styles: [
            { name: 'The Citadel', promptString: 'futuristic space station interior, white sleek architecture, massive holographic trees, alien species, utopia' },
            { name: 'N7 Armor', promptString: 'black combat hardsuit with red and white stripe, omni-tool glowing, orbital view of planet, sci-fi action' },
            { name: 'Normandy Bridge', promptString: 'starship cockpit, blue console lights, galaxy map hologram, view of a nebula through glass' }
        ]
    },
    {
        id: 'starfield',
        title: 'Starfield',
        year: '2023',
        genres: ['RPG', 'Sci-Fi'],
        director: 'Todd Howard',
        actors: [],
        type: 'game',
        styles: [
            { name: 'NASA-Punk', promptString: 'functional space technology, realistic buttons and switches, white suits with patches, practical scifi, industrial' },
            { name: 'Neon City', promptString: 'cyberpunk ocean city, fish oil smoke, bright kanji signs, wet catwalks, shady underworld' },
            { name: 'Alien Frontier', promptString: 'barren moon, low gravity, ringed planet in sky, craters, lonely spaceship landed' }
        ]
    },
    {
        id: 'baldurs-gate-3',
        title: 'Baldur\'s Gate 3',
        year: '2023',
        genres: ['RPG', 'Fantasy'],
        director: 'Swen Vincke',
        actors: ['Neil Newbon'],
        type: 'game',
        styles: [
            { name: 'Emerald Grove', promptString: 'druid camp, ancient trees, sunlight through leaves, high fantasy, stone statues, hidden sanctuary' },
            { name: 'Underdark', promptString: 'giant bioluminescent mushrooms, purple glowing crystals, dark caverns, drow architecture, mysterious' },
            { name: 'Mind Flayer Ship', promptString: 'organic alien interior, fleshy walls, purple lighting, tentacles, nautiloid, body horror' }
        ]
    },
    {
        id: 'marvels-spider-man-2',
        title: 'Spider-Man 2',
        year: '2023',
        genres: ['Action', 'Adventure'],
        director: 'Bryan Intihar',
        actors: ['Yuri Lowenthal'],
        type: 'game',
        styles: [
            { name: 'Queens Sunset', promptString: 'low rise nyc neighborhood, golden hour, spider-man swinging between houses, suburban feel' },
            { name: 'Symbiote Black', promptString: 'slick black oil texture, venom details, dark aggressive energy, nighttime nyc, menacing' },
            { name: 'Empire State View', promptString: 'top of skyscraper, tiny cars below, vast scale of manhattan, bright midday sun, heroic' }
        ]
    }
];
