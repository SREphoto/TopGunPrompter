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
    }
];
