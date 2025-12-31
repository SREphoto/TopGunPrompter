import type { MediaItem } from './types';

export const series: MediaItem[] = [
    {
        id: 'mad-men',
        title: 'Mad Men',
        year: '2007',
        genres: ['Drama', 'Period'],
        director: 'Matthew Weiner',
        actors: ['Jon Hamm', 'Elisabeth Moss', 'Vincent Kartheiser', 'January Jones', 'Christina Hendricks'],
        type: 'series',
        styles: [
            { name: '60s Ad Ave', promptString: 'Kodachrome 64 film stock, saturdated primary colors, cigarette smoke haze, mid-century modern office, overhead fluorescent lighting' },
            { name: 'Suburban Ennui', promptString: 'pastel color palette, static framing, wide angle, manicured lawns, soft natural lighting, sense of isolation' },
            { name: 'Martini Lunch', promptString: 'dimly lit restaurant, high contrast chiaroscuro, glass reflections, sharp suits, close up intimacy, noir aesthetic' }
        ],
        seasons: [
            {
                id: 1,
                episodes: [
                    { id: 1, title: 'Smoke Gets in Your Eyes' },
                    { id: 2, title: 'Ladies Room' },
                    { id: 3, title: 'Marriage of Figaro' },
                    { id: 4, title: 'New Amsterdam' },
                    { id: 5, title: '5G' },
                    { id: 6, title: 'Babylon' },
                    { id: 7, title: 'Red in the Face' },
                    { id: 8, title: 'The Hobo Code' },
                    { id: 9, title: 'Shoot' },
                    { id: 10, title: 'Long Weekend' },
                    { id: 11, title: 'Indian Summer' },
                    { id: 12, title: 'Nixon vs. Kennedy' },
                    { id: 13, title: 'The Wheel' }
                ]
            }
        ]
    },
    {
        id: 'sopranos',
        title: 'The Sopranos',
        year: '1999',
        genres: ['Crime', 'Drama'],
        director: 'David Chase',
        actors: ['James Gandolfini', 'Lorraine Bracco', 'Edie Falco', 'Michael Imperioli'],
        type: 'series',
        styles: [
            { name: 'Jersey Grit', promptString: 'handheld camera movement, desaturated earthy tones, industrial background, overcast sky, raw realism' },
            { name: 'Therapy Session', promptString: 'shot-reverse-shot, sterile office lighting, tight close-up on facial micro-expressions, psychological tension' },
            { name: 'Mob Dinner', promptString: 'warm incandescent lighting, red sauce, cigar smoke, crowded table, shallow depth of field, family atmosphere' }
        ],
        seasons: [
            {
                id: 1,
                episodes: [
                    { id: 1, title: 'The Sopranos' },
                    { id: 2, title: '46 Long' },
                    { id: 3, title: 'Denial, Anger, Acceptance' },
                    { id: 4, title: 'Meadowlands' },
                    { id: 5, title: 'College' },
                    { id: 6, title: 'Pax Soprana' },
                    { id: 7, title: 'Down Neck' },
                    { id: 8, title: 'The Legend of Tennessee Moltisanti' },
                    { id: 9, title: 'Boca' },
                    { id: 10, title: 'A Hit Is a Hit' },
                    { id: 11, title: 'Nobody Knows Anything' },
                    { id: 12, title: 'Isabella' },
                    { id: 13, title: 'I Dream of Jeannie Cusamano' }
                ]
            }
        ]
    },
    {
        id: 'band-of-brothers',
        title: 'Band of Brothers',
        year: '2001',
        genres: ['Action', 'Drama', 'History', 'War'],
        director: 'Various',
        actors: ['Damian Lewis', 'Ron Livingston', 'Donnie Wahlberg'],
        type: 'series',
        styles: [
            { name: 'Bleach Bypass', promptString: 'desaturated colors, high contrast, silver retention process, grainy film texture, gritty realism' },
            { name: 'Paratrooper Night', promptString: 'dark blue night, explosions lighting up the sky, tracers, silhouettes, intense chaos' },
            { name: 'Bastogne Snow', promptString: 'white snow, grey sky, frozen breath, muted colors, foxholes, isolation, freezing atmosphere' }
        ],
        seasons: [
            {
                id: 1,
                episodes: [
                    { id: 1, title: 'Currahee' },
                    { id: 2, title: 'Day of Days' },
                    { id: 3, title: 'Carentan' },
                    { id: 4, title: 'Replacements' },
                    { id: 5, title: 'Crossroads' },
                    { id: 6, title: 'Bastogne' },
                    { id: 7, title: 'The Breaking Point' },
                    { id: 8, title: 'The Last Patrol' },
                    { id: 9, title: 'Why We Fight' },
                    { id: 10, title: 'Points' }
                ]
            }
        ]
    },
    {
        id: 'breaking-bad',
        title: 'Breaking Bad',
        year: '2008',
        genres: ['Crime', 'Drama'],
        director: 'Vince Gilligan',
        actors: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
        type: 'series',
        styles: [
            { name: 'Albuquerque Desert', promptString: 'wide shot, desert landscape, time lapse clouds, vibrant yellow sky, saturation, isolation, heat waves' },
            { name: 'Meth Lab', promptString: 'fluorescent lighting, yellow hazmat suits, scientific glass, blue crystals, industrial setting, cold tones, wide angle' },
            { name: 'POV Cam', promptString: 'unusual camera angles, looking up through glass, mounting camera on objects, extreme close up, visceral perspective' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Pilot' }, { id: 2, title: 'Cat\'s in the Bag...' }, { id: 3, title: '...And the Bag\'s in the River' }, { id: 4, title: 'Cancer Man' }, { id: 5, title: 'Gray Matter' }, { id: 6, title: 'Crazy Handful of Nothin\'' }, { id: 7, title: 'A No-Rough-Stuff-Type Deal' }] }
        ]
    },
    {
        id: 'game-of-thrones',
        title: 'Game of Thrones',
        year: '2011',
        genres: ['Fantasy', 'Drama'],
        director: 'David Benioff',
        actors: ['Emilia Clarke', 'Kit Harington', 'Peter Dinklage'],
        type: 'series',
        styles: [
            { name: 'Winter is Coming', promptString: 'muted blue and white palette, snow, fur cloaks, medieval armor, castles, cinematic lighting, epic scale' },
            { name: 'King\'s Landing', promptString: 'warm mediterranean light, red stones, gold accents, intricate costumes, political intrigue, sunny exterior' },
            { name: 'Dragon Fire', promptString: 'high contrast, orange fire light, deep shadows, smoke, intense action, mystical atmosphere' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Winter Is Coming' }, { id: 2, title: 'The Kingsroad' }, { id: 3, title: 'Lord Snow' }, { id: 4, title: 'Cripples, Bastards, and Broken Things' }, { id: 5, title: 'The Wolf and the Lion' }, { id: 6, title: 'A Golden Crown' }, { id: 7, title: 'You Win or You Die' }, { id: 8, title: 'The Pointy End' }, { id: 9, title: 'Baelor' }, { id: 10, title: 'Fire and Blood' }] }
        ]
    },
    {
        id: 'stranger-things',
        title: 'Stranger Things',
        year: '2016',
        genres: ['Sci-Fi', 'Horror'],
        director: 'Duffer Brothers',
        actors: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
        type: 'series',
        styles: [
            { name: '80s Nostalgia', promptString: 'neon lights, suburban streets at night, bicycles, wood paneling, synthwave aesthetic, film grain, retro fashion' },
            { name: 'The Upside Down', promptString: 'dark blue and grey tones, floating ash particles, organic vines, slime, flashlight beams, horrific atmosphere' },
            { name: 'Lab Experiment', promptString: 'sterile hospital white, flickering fluorescent lights, nosebleeds, telekinesis, cold clinical fear' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Chapter One: The Vanishing of Will Byers' }, { id: 2, title: 'Chapter Two: The Weirdo on Maple Street' }, { id: 3, title: 'Chapter Three: Holly, Jolly' }, { id: 4, title: 'Chapter Four: The Body' }, { id: 5, title: 'Chapter Five: The Flea and the Acrobat' }, { id: 6, title: 'Chapter Six: The Monster' }, { id: 7, title: 'Chapter Seven: The Bathtub' }, { id: 8, title: 'Chapter Eight: The Upside Down' }] }
        ]
    },
    {
        id: 'mandalorian',
        title: 'The Mandalorian',
        year: '2019',
        genres: ['Sci-Fi', 'Western'],
        director: 'Jon Favreau',
        actors: ['Pedro Pascal', 'Carl Weathers', 'Giancarlo Esposito'],
        type: 'series',
        styles: [
            { name: 'Space Western', promptString: 'desert planets, worn armor, sweeping landscapes, sunset horizon, saloon lighting, dusty atmosphere' },
            { name: 'Beskar Shine', promptString: 'chrome reflections, metallic texture, blaster bolts, futuristic hud, industrial sci-fi' },
            { name: 'Volume Stage', promptString: 'dramatic lighting, alien worlds, unreal engine background, cinematic composition, rim light' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Chapter 1: The Mandalorian' }, { id: 2, title: 'Chapter 2: The Child' }, { id: 3, title: 'Chapter 3: The Sin' }, { id: 4, title: 'Chapter 4: Sanctuary' }, { id: 5, title: 'Chapter 5: The Gunslinger' }, { id: 6, title: 'Chapter 6: The Prisoner' }, { id: 7, title: 'Chapter 7: The Reckoning' }, { id: 8, title: 'Chapter 8: Redemption' }] }
        ]
    },
    {
        id: 'the-crown',
        title: 'The Crown',
        year: '2016',
        genres: ['Drama', 'History'],
        director: 'Peter Morgan',
        actors: ['Claire Foy', 'Matt Smith', 'Olivia Colman'],
        type: 'series',
        styles: [
            { name: 'Royal Opulence', promptString: 'gold gilded frames, lush velvet, crystal chandeliers, symmetrical framing, soft expensive lighting, grand halls' },
            { name: 'Fog of London', promptString: 'muted grey tones, rain slicked streets, rolls royce, heavy coats, somber atmosphere, historical drama' },
            { name: 'Private Moment', promptString: 'medium shot, intimate lighting, jewelry sparkle, emotional restraint, breaking the facade' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Wolferton Splash' }, { id: 2, title: 'Hyde Park Corner' }, { id: 3, title: 'Windsor' }, { id: 4, title: 'Act of God' }, { id: 5, title: 'Smoke and Mirrors' }, { id: 6, title: 'Gelignite' }, { id: 7, title: 'Scientia Potentia Est' }, { id: 8, title: 'Pride & Joy' }, { id: 9, title: 'Assassins' }, { id: 10, title: 'Gloriana' }] }
        ]
    },
    {
        id: 'twin-peaks',
        title: 'Twin Peaks',
        year: '1990',
        genres: ['Mystery', 'Horror'],
        director: 'David Lynch',
        actors: ['Kyle MacLachlan', 'Michael Ontkean', 'Mädchen Amick'],
        type: 'series',
        styles: [
            { name: 'Lynchian Dream', promptString: 'red curtains, chevron floor, surreal lighting, backwards motion, uncannny valley, dream logic, jazz mood' },
            { name: 'Pacific Northwest', promptString: 'misty douglas fir trees, waterfall, wood logging truck, gloomy overcast, coffee and pie, small town mystery' },
            { name: 'Soap Opera', promptString: 'soft focus, melodrama lighting, emotional close ups, high school hallway, secret affairs' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Pilot' }, { id: 2, title: 'Episode 1' }, { id: 3, title: 'Episode 2' }, { id: 4, title: 'Episode 3' }, { id: 5, title: 'Episode 4' }, { id: 6, title: 'Episode 5' }, { id: 7, title: 'Episode 6' }, { id: 8, title: 'Episode 7' }] }
        ]
    },
    {
        id: 'x-files',
        title: 'The X-Files',
        year: '1993',
        genres: ['Sci-Fi', 'Mystery'],
        director: 'Chris Carter',
        actors: ['David Duchovny', 'Gillian Anderson'],
        type: 'series',
        styles: [
            { name: 'Flashlight Beam', promptString: 'dark warehouse, beams of flashlights cutting through fog, dust particles, ominous shadows, paranormal investigation' },
            { name: 'Government Conspiracy', promptString: 'filing cabinets, cigarette smoke, shadowed figures, backlit silhouettes, parking garages, paranoia' },
            { name: 'Monster of the Week', promptString: 'practical creature effects, slime, gore, eerie forest, stormy night, horrific discovery' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Pilot' }, { id: 2, title: 'Deep Throat' }, { id: 3, title: 'Squeeze' }, { id: 4, title: 'Conduit' }, { id: 5, title: 'The Jersey Devil' }, { id: 6, title: 'Shadows' }, { id: 7, title: 'Ghost in the Machine' }, { id: 8, title: 'Ice' }, { id: 9, title: 'Space' }, { id: 10, title: 'Fallen Angel' }] }
        ]
    },
    {
        id: 'friends',
        title: 'Friends',
        year: '1994',
        genres: ['Comedy', 'Romance'],
        director: 'David Crane',
        actors: ['Jennifer Aniston', 'Courteney Cox', 'Matthew Perry'],
        type: 'series',
        styles: [
            { name: 'Sitcom Bright', promptString: 'high key lighting, vibrant colors, multi-camera setup, apartment set, cozy atmosphere, 90s fashion' },
            { name: 'Coffee Shop', promptString: 'orange velvet sofa, brick walls, steam from mugs, warm ambient light, bustling background, central perk' },
            { name: 'New York Transition', promptString: 'nyc skyline, establishing shot, fountain at night, building exterior, upbeat mood' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'The Pilot' }, { id: 2, title: 'The One with the Sonogram at the End' }, { id: 3, title: 'The One with the Thumb' }, { id: 4, title: 'The One with George Stephanopoulos' }, { id: 5, title: 'The One with the East German Laundry Detergent' }, { id: 6, title: 'The One with the Butt' }, { id: 7, title: 'The One with the Blackout' }, { id: 8, title: 'The One Where Nana Dies Twice' }, { id: 9, title: 'The One Where Underdog Gets Away' }, { id: 10, title: 'The One with the Monkey' }] }
        ]
    },
    {
        id: 'the-office',
        title: 'The Office',
        year: '2005',
        genres: ['Comedy', 'Mockumentary'],
        director: 'Greg Daniels',
        actors: ['Steve Carell', 'John Krasinski', 'Jenna Fischer'],
        type: 'series',
        styles: [
            { name: 'Mockumentary Zoom', promptString: 'handheld camera shake, snap zoom onto face, looking at camera, fluorescent office lighting, mundane setting' },
            { name: 'Talking Head', promptString: 'interview setup, blinds in background, shallow depth of field, direct address, documentary style' },
            { name: 'Break Room', promptString: 'vending machines, dull grey walls, bad carpet, water cooler, awkward silence, fluorescent hum' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'Pilot' }, { id: 2, title: 'Diversity Day' }, { id: 3, title: 'Health Care' }, { id: 4, title: 'The Alliance' }, { id: 5, title: 'Basketball' }, { id: 6, title: 'Hot Girl' }] }
        ]
    },
    {
        id: 'westworld',
        title: 'Westworld',
        year: '2016',
        genres: ['Sci-Fi', 'Western'],
        director: 'Jonathan Nolan',
        actors: ['Evan Rachel Wood', 'Thandiwe Newton', 'Jeffrey Wright'],
        type: 'series',
        styles: [
            { name: 'Western Vista', promptString: 'grand canyon landscape, steam train, cowboys on horseback, john ford composition, epic scale, natural light' },
            { name: 'Lab Glass', promptString: 'futuristic glass walls, sterile white environment, observing robots, 3d printing, clean lines, cold atmosphere' },
            { name: 'Robot Core', promptString: 'milk bath assembly, mechanical skeleton, wires, artificial intelligence scrutiny, Vitruvian man aesthetic' }
        ],
        seasons: [
            { id: 1, episodes: [{ id: 1, title: 'The Original' }, { id: 2, title: 'Chestnut' }, { id: 3, title: 'The Stray' }, { id: 4, title: 'Dissonance Theory' }, { id: 5, title: 'Contrapasso' }, { id: 6, title: 'The Adversary' }, { id: 7, title: 'Trompe L\'Oeil' }, { id: 8, title: 'Trace Decay' }, { id: 9, title: 'The Well-Tempered Clavier' }, { id: 10, title: 'The Bicameral Mind' }] }
        ]
    }
];
