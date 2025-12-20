import type { Movie } from './types';

export const movies: Movie[] = [
    {
        type: 'movie',
        id: 'top-gun',
        title: 'Top Gun',
        year: '1986',
        genres: ['Action', 'Drama'],
        director: 'Tony Scott',
        actors: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        styles: [
            { name: '80s Sunset', promptString: 'golden hour, silhouette, heavy grain, 35mm film, warm orange and purple gradient, tony scott aesthetic' },
            { name: 'Cockpit HUD', promptString: 'green digital overlay, fighter jet interior, glass reflection, high tech military, claustrophobic' },
            { name: 'Volleyball Sweat', promptString: 'oiled skin, bright sunlight, beach setting, high contrast, saturated colors, heat haze' }
        ]
    },
    {
        type: 'movie',
        id: 'interview-vampire',
        title: 'Interview with the Vampire',
        year: '1994',
        genres: ['Horror', 'Drama', 'Fantasy'],
        director: 'Neil Jordan',
        actors: ['Tom Cruise', 'Brad Pitt', 'Kirsten Dunst'],
        styles: [
            { name: 'Gothic Candlelight', promptString: 'dimly lit, flickering candlelight, baroque interior, velvet textures, deep shadows, romantic horror' },
            { name: 'New Orleans Decay', promptString: 'foggy streets, gas lamps, rotting wood, spanish moss, humid atmosphere, 18th century' },
            { name: 'Vampire Pale', promptString: 'alabaster skin, translucent veins, piercing eyes, high contrast, cold blue undertones, supernatural' }
        ]
    },
    {
        type: 'movie',
        id: 'oldboy',
        title: 'Oldboy',
        year: '2003',
        genres: ['Action', 'Drama', 'Mystery'],
        director: 'Park Chan-wook',
        actors: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
        styles: [
            { name: 'Green Corridor', promptString: 'sickly green fluorescent lighting, narrow hallway, dirty textures, neo-noir, park chan-wook aesthetic' },
            { name: 'Hammer Grit', promptString: 'extreme close up, motion blur, visceral violence, blood splatter, raw and gritty, high tension' },
            { name: 'Neon Noir', promptString: 'deep blacks, vibrant neon signs, wet streets, urban isolation, mystery, cinematic shadow' }
        ]
    },
    {
        type: 'movie',
        id: 'john-wick',
        title: 'John Wick',
        year: '2014',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
        styles: [
            { name: 'Neon Club', promptString: 'vibrant pink and blue neon, club lighting, smoke machine, reflective surfaces, sleek action' },
            { name: 'Tactical Suit', promptString: 'sharp black suit, gun metal grey, clean lines, professional killer, high contrast, modern noir' },
            { name: 'Rainy NYC', promptString: 'heavy rain, wet pavement, city lights reflecting, dark atmosphere, moody, urban solitude' }
        ]
    },
    {
        type: 'movie',
        id: 'american-psycho',
        title: 'American Psycho',
        year: '2000',
        genres: ['Crime', 'Drama', 'Horror'],
        director: 'Mary Harron',
        actors: ['Christian Bale', 'Justin Theroux', 'Josh Lucas'],
        styles: [
            { name: 'Corporate Cold', promptString: 'sterile white environment, minimalism, harsh fluorescent light, expensive suits, emotionless' },
            { name: 'Blood Splatter', promptString: 'bright red blood on white plastic, shocking contrast, surreal violence, pristine horror' },
            { name: '80s Yuppie', promptString: 'warm upscale restaurant lighting, crystal glasses, designer clothing, excess, superficial beauty' }
        ]
    },
    {
        type: 'movie',
        id: 'gladiator',
        title: 'Gladiator',
        year: '2000',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ridley Scott',
        actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
        styles: [
            { name: 'Roman Dust', promptString: 'sun bleached, floating dust particles, arena sand, ancient stone, epic scale, ridley scott atmosphere' },
            { name: 'Colosseum Sun', promptString: 'blinding sunlight, harsh shadows, metallic armor reflection, heat waves, intense action' },
            { name: 'Wheat Field', promptString: 'golden wheat, soft focus, dreamlike, hand brushing through grain, ethereal, afterlife' }
        ]
    },
    {
        type: 'movie',
        id: 'seven',
        title: 'Se7en',
        year: '1995',
        genres: ['Crime', 'Drama', 'Mystery'],
        director: 'David Fincher',
        actors: ['Brad Pitt', 'Morgan Freeman', 'Kevin Spacey'],
        styles: [
            { name: 'Gritty Rain', promptString: 'constant downpour, urban decay, bleach bypass process, high contrast, desaturated colors, fincher aesthetic' },
            { name: 'Flashlight Beam', promptString: 'piercing light in darkness, dust motes, claustrophobic, crime scene investigation, shadow play' },
            { name: 'Desaturated City', promptString: 'sepia tones, grime, peeling paint, oppressive atmosphere, hopelessness, industrial texture' }
        ]
    },
    {
        type: 'movie',
        id: 'fight-club',
        title: 'Fight Club',
        year: '1999',
        genres: ['Drama'],
        director: 'David Fincher',
        actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        styles: [
            { name: 'Basement Grime', promptString: 'sweat, blood, concrete, dim single bulb lighting, raw visceral energy, underground' },
            { name: 'Soap Pink', promptString: 'bright pink soap, chemical burns, surreal satire, consumerism, pop art contrast' },
            { name: 'Insomnia Blue', promptString: 'cold blue tint, dark circles, ikea catalog sterile, corporate office, dissociation, sleepless' }
        ]
    },
    {
        type: 'movie',
        id: 'aliens',
        title: 'Aliens',
        year: '1986',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Sigourney Weaver', 'Michael Biehn', 'Carrie Henn'],
        styles: [
            { name: 'Industrial Blue', promptString: 'cold steel, blue emergency lighting, steam, futuristic military, james cameron aesthetic' },
            { name: 'Xenomorph Slime', promptString: 'organic resin, dripping slime, glistening black surfaces, biomechanical, horror' },
            { name: 'Motion Tracker Green', promptString: 'grainy green screen, sonar blips, low light, tension, claustrophobia, tech noir' }
        ]
    },
    {
        type: 'movie',
        id: 'predator',
        title: 'Predator',
        year: '1987',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'John McTiernan',
        actors: ['Arnold Schwarzenegger', 'Carl Weathers', 'Kevin Peter Hall'],
        styles: [
            { name: 'Jungle Heat', promptString: 'dense foliage, sweat, humidity, bright green leaves, dappled sunlight, survival' },
            { name: 'Thermal Vision', promptString: 'heat signature spectrum, blue and red and yellow, alien pov, hunting mode' },
            { name: 'Mud Camo', promptString: 'covered in mud, blending with nature, primal, dirty textures, stealth' }
        ]
    },
    {
        type: 'movie',
        id: 'joker',
        title: 'Joker',
        year: '2019',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Todd Phillips',
        actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
        styles: [
            { name: 'Clown Makeup', promptString: 'smeared greasepaint, extreme close up, texture of skin, tragic expression, vibrant colors' },
            { name: 'Subway Green', promptString: 'flickering fluorescent lights, dirty subway tiles, teal and orange color grading, urban isolation' },
            { name: 'Talk Show Blue', promptString: 'bright tv studio lighting, retro curtains, saturated blue and red, media spectacle' }
        ]
    },
    {
        type: 'movie',
        id: 'dune',
        title: 'Dune',
        year: '2021',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Denis Villeneuve',
        actors: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
        styles: [
            { name: 'Arrakis Sand', promptString: 'endless dunes, spice floating in air, heat haze, massive scale, monochromatic beige and gold' },
            { name: 'Spice Blue', promptString: 'glowing blue eyes, deep indigo shadows, mystical atmosphere, desert night' },
            { name: 'Ornithopter Steel', promptString: 'brutalist architecture, industrial metal, dragonfly wings, dust and machinery, villeneuve aesthetic' }
        ]
    },
    {
        type: 'movie',
        id: 'the-matrix',
        title: 'The Matrix',
        year: '1999',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        styles: [
            { name: 'Digital Rain', promptString: 'falling green code, black background, cyberpunk, glitch effects, simulation, phosphor glow, crt texture' },
            { name: 'Bullet Time', promptString: 'frozen time, 360 degree camera, ripples in air, high speed photography, action, path tracing, flow motion' },
            { name: 'Construct White', promptString: 'infinite white space, clean, sterile, nothingness, surreal minimalism, ambient occlusion, soft shadows' }
        ]
    },
    {
        type: 'movie',
        id: 'blade-runner-2049',
        title: 'Blade Runner 2049',
        year: '2017',
        genres: ['Action', 'Drama', 'Mystery'],
        director: 'Denis Villeneuve',
        actors: ['Harrison Ford', 'Ryan Gosling', 'Ana de Armas'],
        styles: [
            { name: 'Orange Haze', promptString: 'radioactive dust, thick orange fog, giant statues, post-apocalyptic las vegas, roger deakins cinematography' },
            { name: 'Hologram Pink', promptString: 'giant holographic advertisements, neon pink and purple, rain, cyberpunk city, artificial love' },
            { name: 'Cyberpunk Rain', promptString: 'constant rain, neon reflections on wet pavement, flying cars, dark blue and grey palette, tech noir' }
        ]
    },
    {
        type: 'movie',
        id: 'mad-max-fury-road',
        title: 'Mad Max: Fury Road',
        year: '2015',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'George Miller',
        actors: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
        styles: [
            { name: 'Chrome & Rust', promptString: 'shiny chrome spray paint, rusted metal, industrial waste, high contrast, kinetic energy' },
            { name: 'Desert Storm', promptString: 'massive sandstorm, red lightning, tornadoes, apocalyptic scale, orange and black' },
            { name: 'High Octane Blue', promptString: 'day for night shooting, deep saturated blue, moonlight over desert, cold isolation' }
        ]
    },
    {
        type: 'movie',
        id: 'the-dark-knight',
        title: 'The Dark Knight',
        year: '2008',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'Christopher Nolan',
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        styles: [
            { name: 'Gotham Night', promptString: 'city skyline at night, skyscrapers, dark blue and black, imax scale, urban crime, aerial shot, cinematic lighting' },
            { name: 'Joker Purple', promptString: 'purple suit, green hair, chaotic energy, smeared makeup, anarchist vibe, handheld camera' },
            { name: 'IMAX Blue', promptString: 'cold color temperature, glass and steel, high tech surveillance, nolan aesthetic, 70mm film, sharp focus' }
        ]
    },
    {
        type: 'movie',
        id: 'pulp-fiction',
        title: 'Pulp Fiction',
        year: '1994',
        genres: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        styles: [
            { name: 'Vintage Diner', promptString: 'red vinyl booths, formica tables, warm lighting, 50s americana, retro cool' },
            { name: 'Tarantino Trunk', promptString: 'low angle shot looking up, trunk lid framing, pov, cinematic signature' },
            { name: 'Monochrome Suit', promptString: 'black and white suits, thin ties, cool detachment, gangster chic, stylized' }
        ]
    },
    {
        type: 'movie',
        id: 'terminator-2',
        title: 'Terminator 2: Judgment Day',
        year: '1991',
        genres: ['Action', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
        styles: [
            { name: 'Liquid Metal', promptString: 'chrome surface, reflection, shapeshifting, fluid simulation, cold perfection' },
            { name: 'Nuclear Fire', promptString: 'apocalyptic destruction, burning playground, orange and black, nightmare sequence' },
            { name: 'Steel Blue', promptString: 'cold blue night, industrial steel mill, sparks, james cameron blue, tech noir' }
        ]
    },
    {
        type: 'movie',
        id: 'inception',
        title: 'Inception',
        year: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
        styles: [
            { name: 'Folding City', promptString: 'bending architecture, defying gravity, surreal cityscape, dream logic, mind bending' },
            { name: 'Dream Layer', promptString: 'rainy city street, slow motion, texture of water, subconscious projection' },
            { name: 'Zero Gravity', promptString: 'floating objects, spinning hallway, disorientation, sleek hotel interior, physics defying' }
        ]
    },
    {
        type: 'movie',
        id: 'kill-bill-vol-1',
        title: 'Kill Bill: Vol. 1',
        year: '2003',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Uma Thurman', 'Lucy Liu', 'Vivica A. Fox'],
        styles: [
            { name: 'Yellow Jumpsuit', promptString: 'bright yellow track suit, black stripe, bruce lee homage, vibrant colors, pop art' },
            { name: 'Anime Blood', promptString: 'exaggerated blood spray, silhouette, high contrast, stylized violence, japanese animation influence' },
            { name: 'Snowy Garden', promptString: 'serene japanese garden, falling snow, white silence, blood on snow, poetic duel' }
        ]
    },
    {
        type: 'movie',
        id: 'no-country-for-old-men',
        title: 'No Country for Old Men',
        year: '2007',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Ethan Coen, Joel Coen',
        actors: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        styles: [
            { name: 'Desert Silence', promptString: 'vast texas landscape, empty horizon, harsh sunlight, isolation, silence, coen brothers' },
            { name: 'Motel Shadow', promptString: 'dark motel room, light under the door, suspense, creeping shadow, neo-western' },
            { name: 'Coin Toss Silver', promptString: 'close up of a silver coin, metallic texture, fate, chance, cold indifference' }
        ]
    },
    {
        type: 'movie',
        id: 'drive',
        title: 'Drive',
        year: '2011',
        genres: ['Action', 'Drama'],
        director: 'Nicolas Winding Refn',
        actors: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston'],
        styles: [
            { name: 'Synthwave Neon', promptString: 'pink and blue neon, retro 80s aesthetic, night driving, cool detachment, nicolas winding refn' },
            { name: 'Scorpion Jacket', promptString: 'white satin, golden embroidery, texture, iconic costume, blood stains' },
            { name: 'LA Night', promptString: 'los angeles skyline, streetlights, bokeh, lonely atmosphere, noir' }
        ]
    },
    {
        type: 'movie',
        id: 'the-fifth-element',
        title: 'The Fifth Element',
        year: '1997',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Luc Besson',
        actors: ['Bruce Willis', 'Milla Jovovich', 'Gary Oldman'],
        styles: [
            { name: 'Multipass Orange', promptString: 'bright orange hair, futuristic fashion, jean paul gaultier costumes, vibrant pop colors, luc besson aesthetic' },
            { name: 'Future NYC', promptString: 'flying cars, vertical city, dense traffic, fog, moebius comic aesthetic, futuristic metropolis' },
            { name: 'Mondoshawan Gold', promptString: 'ancient alien armor, metallic gold, rusty textures, mystical light, temple setting' }
        ]
    },
    {
        type: 'movie',
        id: 'interstellar',
        title: 'Interstellar',
        year: '2014',
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        styles: [
            { name: 'Black Hole', promptString: 'gargantua accretion disk, bending light, deep space, cosmic scale, imax aspect ratio, christopher nolan' },
            { name: 'Dust Bowl', promptString: 'cornfields, dust storms, americana, gritty realism, earth tones, dying earth' },
            { name: 'Tesseract', promptString: 'fourth dimension, infinite library, strings of time, surreal architecture, abstract, light rays' }
        ]
    },
    {
        type: 'movie',
        id: 'the-shining',
        title: 'The Shining',
        year: '1980',
        genres: ['Drama', 'Horror'],
        director: 'Stanley Kubrick',
        actors: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
        styles: [
            { name: 'Overlook Carpet', promptString: 'hexagonal pattern, orange and brown, geometric, hypnotic, steadicam tracking shot, stanley kubrick' },
            { name: 'Redrum', promptString: 'blood elevator, bright red blood, art deco hotel, psychological horror, symmetrical composition' },
            { name: 'Snow Maze', promptString: 'frozen hedge maze, blue moonlight, mist, isolation, cold atmosphere, winter night' }
        ]
    },
    {
        type: 'movie',
        id: 'tron-legacy',
        title: 'Tron: Legacy',
        year: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Joseph Kosinski',
        actors: ['Jeff Bridges', 'Garrett Hedlund', 'Olivia Wilde'],
        styles: [
            { name: 'The Grid', promptString: 'neon blue lines, black glass, digital landscape, symmetry, daft punk aesthetic, clean lines' },
            { name: 'Light Cycle', promptString: 'light trails, motion blur, high speed, sleek vehicles, cybernetic, neon orange and blue' },
            { name: 'Iso Orange', promptString: 'warm orange neon, contrast against blue, digital dna, organic code, simulation' }
        ]
    },
    {
        type: 'movie',
        id: 'taxi-driver',
        title: 'Taxi Driver',
        year: '1976',
        genres: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        actors: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        styles: [
            { name: 'Yellow Cab', promptString: 'checker cab, steam rising from streets, night city, urban decay, martin scorsese grit' },
            { name: 'Mohawk', promptString: 'military jacket, sunglasses, mohawk haircut, mirror reflection, anti-hero, intense stare' },
            { name: 'Neon Rain', promptString: 'rain on windshield, blurred neon lights, bokeh, loneliness, jazz atmosphere, new york night' }
        ]
    },
    {
        type: 'movie',
        id: 'saving-private-ryan',
        title: 'Saving Private Ryan',
        year: '1998',
        genres: ['Drama', 'War'],
        director: 'Steven Spielberg',
        actors: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
        styles: [
            { name: 'Omaha Beach', promptString: 'desaturated, high contrast, handheld camera, 45-degree shutter angle, shaky, gritty, war torn, spielberg, silver bypass, bleach bypass, film grain' },
            { name: 'Sniper Bell Tower', promptString: 'rain, rubble, grey sky, tension, precision, stone texture, muddy, soft diffused light, telephoto lens' },
            { name: 'Faded Glory', promptString: 'american flag, backlit sunlight, dust particles, emotional, somber, cinematic, god rays, atmospheric' }
        ]
    },
    {
        type: 'movie',
        id: 'iron-man',
        title: 'Iron Man',
        year: '2008',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Jon Favreau',
        actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard'],
        styles: [
            { name: 'Mark III', promptString: 'hot rod red and gold, metal reflection, hud overlay, stark tech, sleek, mechanical, photorealistic, 8k, raytracing' },
            { name: 'Arc Reactor', promptString: 'glowing blue light, chest piece, cave darkness, palladium core, industrial contrast, chiaroscuro, volumetric lighting' },
            { name: 'Malibu Mansion', promptString: 'futuristic architecture, ocean view, glass walls, wealth, clean lines, morning sun, wide angle, architectural photography' }
        ]
    },
    {
        type: 'movie',
        id: 'starship-troopers',
        title: 'Starship Troopers',
        year: '1997',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Paul Verhoeven',
        actors: ['Casper Van Dien', 'Denise Richards', 'Dina Meyer'],
        styles: [
            { name: 'Klendathu Drop', promptString: 'chaotic, thousands of arachnids, laser fire, desert planet, daylight horror, gore, epic scale, wide shot, harsh sunlight' },
            { name: 'Federal Network', promptString: 'propaganda film style, scanlines, bright colors, satire, fascist uniform, "would you like to know more", broadcast quality' },
            { name: 'Brain Bug', promptString: 'slimy, organic, massive, underground cave, dark textured, grotesque, subsurface scattering, slimy texture' }
        ]
    },
    {
        type: 'movie',
        id: 'transformers',
        title: 'Transformers',
        year: '2007',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Michael Bay',
        actors: ['Shia LaBeouf', 'Megan Fox', 'Josh Duhamel'],
        styles: [
            { name: 'Transformation', promptString: 'complex mechanical parts shifting, metallic glare, sunset heavily saturated, michael bay spin, lens flare' },
            { name: 'City Battle', promptString: 'debris, explosions, giant robots, dust, destruction, low angle' },
            { name: 'Bumblebee Garage', promptString: 'yellow camaro, scratched metal, expressive eyes, garage lighting, mist' }
        ]
    },
    {
        type: 'movie',
        id: 'deadpool',
        title: 'Deadpool',
        year: '2016',
        genres: ['Action', 'Adventure', 'Comedy'],
        director: 'Tim Miller',
        actors: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
        styles: [
            { name: 'Maximum Effort', promptString: 'red spandex texture, dirty suit, breaking fourth wall, comic book contrast, humor' },
            { name: 'Highway Fight', promptString: 'overcast day, slow motion violence, bullet casings, destruction, asphalt' },
            { name: 'X-Mansion', promptString: 'grey sterile halls, emptiness, mockery, bright daylight, architectural symmetry' }
        ]
    },
    {
        type: 'movie',
        id: 'john-wick-2',
        title: 'John Wick: Chapter 2',
        year: '2017',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Riccardo Scamarcio', 'Ian McShane'],
        styles: [
            { name: 'Mirrors Room', promptString: 'multiple reflections, neon lights, confusion, sleek, museum art installation, blue and pink' },
            { name: 'Continental Lounge', promptString: 'warm gold lighting, leather chairs, drinking scotch, luxury, unspoken tension' },
            { name: 'Rome Catacombs', promptString: 'stone walls, dust, flashlight beams, shadows, tactical suit, ancient arches' }
        ]
    },
    {
        type: 'movie',
        id: 'john-wick-3',
        title: 'John Wick: Chapter 3 - Parabellum',
        year: '2019',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Halle Berry', 'Ian McShane'],
        styles: [
            { name: 'Glass House', promptString: 'transparent walls, fighting silhouettes, pristine, shattering glass, cool blue light, emptiness' },
            { name: 'Continental Green', promptString: 'intense green neon, heavy armor, smoke, muzzle flashes, high contrast action' },
            { name: 'Desert Walk', promptString: 'vast dunes, bright sun, black suit, high contrast, heat haze, wandering' }
        ]
    },
    {
        type: 'movie',
        id: 'die-hard',
        title: 'Die Hard',
        year: '1988',
        genres: ['Action', 'Thriller'],
        director: 'John McTiernan',
        actors: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
        styles: [
            { name: 'Air Duct', promptString: 'claustrophobic, silver metal, lighter flame, dirt on face, lighter reflection' },
            { name: 'Nakatomi Plaza', promptString: 'skyscraper at night, broken glass, helicopter spotlight, 80s action, explosion' },
            { name: 'Yippee Ki Yay', promptString: 'bloodied undershirt, desperate, machine gun, sweaty, christmas tape on back' }
        ]
    },
    {
        type: 'movie',
        id: 'matrix-reloaded',
        title: 'The Matrix Reloaded',
        year: '2003',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        styles: [
            { name: 'Freeway Chase', promptString: 'green tint, speeding cars, agents jumping, concrete, motion blur, overcast' },
            { name: 'Burly Brawl', promptString: 'hundreds of smiths, black suits, courtyard, surreal, cgi slickness, bowling pins' },
            { name: 'Chateau Fight', promptString: 'weapons on walls, grand staircase, marble, slow motion, medieval weaponry' }
        ]
    },
    {
        type: 'movie',
        id: 'matrix-revolutions',
        title: 'The Matrix Revolutions',
        year: '2003',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        styles: [
            { name: 'Super Brawl', promptString: 'rain, lightning, flying silhouettes, green shockwaves, dark sky, epic scale' },
            { name: 'Machine City', promptString: 'biomechanical squids, red eyes, swarms, mechanical coldness, cables, deus ex machina' },
            { name: 'Club Hel', promptString: 'leather straps, bondage gear, red laser lighting, gravity defied, upside down' }
        ]
    },
    {
        type: 'movie',
        id: 'casino-royale',
        title: 'Casino Royale',
        year: '2006',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Martin Campbell',
        actors: ['Daniel Craig', 'Eva Green', 'Judi Dench'],
        styles: [
            { name: 'Parkour Chase', promptString: 'construction crane, dust, bright sunlight, sweat, raw physicality, height' },
            { name: 'Poker Tension', promptString: 'green felt, focus on eyes, chips, tuxedo, smoke, high stakes, warm lighting' },
            { name: 'Venice Sinking', promptString: 'collapsing building, turbulent water, tragedy, iron bars, drowning' }
        ]
    },
    {
        type: 'movie',
        id: 'point-break',
        title: 'Point Break',
        year: '1991',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Kathryn Bigelow',
        actors: ['Patrick Swayze', 'Keanu Reeves', 'Gary Busey'],
        styles: [
            { name: 'Ex-Presidents', promptString: 'president masks, sunset waves, bank robbery, adrenaline, wetsuits, beach vibe' },
            { name: 'Skydiving', promptString: 'blue sky, freefall, wide angle, freedom, adrenaline, holding hands' },
            { name: 'Foot Chase', promptString: 'steadicam, alleyways, throwing dogs, shaky, pure kinetic energy, fence jumping' }
        ]
    },
    {
        type: 'movie',
        id: 'die-hard-vengeance',
        title: 'Die Hard with a Vengeance',
        year: '1995',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'John McTiernan',
        actors: ['Bruce Willis', 'Jeremy Irons', 'Samuel L. Jackson'],
        styles: [
            { name: 'Harlem Heat', promptString: 'summer heat, bustling city, sandwich board, sweat, urban grit, yellow filter' },
            { name: 'Gold Vault', promptString: 'heavy gold bars, underground, yellow sheen, greed, dump trucks' },
            { name: 'Water Jugs', promptString: 'fountain, park setting, tension, bomb timer, puzzle, daylight' }
        ]
    },
    {
        type: 'movie',
        id: 'commando',
        title: 'Commando',
        year: '1985',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Mark L. Lester',
        actors: ['Arnold Schwarzenegger', 'Rae Dawn Chong', 'Dan Hedaya'],
        styles: [
            { name: 'Gear Up', promptString: 'montage, weapons, black grease paint, muscles, vest, preparation' },
            { name: 'Island Raid', promptString: 'explosions, tropical garden, one man army, mayhem, machine gun hip fire' },
            { name: 'Log Carry', promptString: 'lumberjack shirt, massive tree trunk, mountains, raw strength, 80s macho' }
        ]
    },
    {
        type: 'movie',
        id: 'bad-boys',
        title: 'Bad Boys',
        year: '1995',
        genres: ['Action', 'Comedy', 'Crime'],
        director: 'Michael Bay',
        actors: ['Will Smith', 'Martin Lawrence', 'Lisa Boyle'],
        styles: [
            { name: 'Porsche 911', promptString: 'miami streets, sunset, shiny black car, banter, michael bay 360, lens flare' },
            { name: 'Club Shootout', promptString: 'strobe lights, slow motion, falling debris, stylish violence, unbuttoned shirts' },
            { name: 'Miami Heat', promptString: 'palm trees, vibrant orange and teal, sweat, sunglasses, cool attitude' }
        ]
    },
    {
        type: 'movie',
        id: 'total-recall',
        title: 'Total Recall',
        year: '1990',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
        director: 'Paul Verhoeven',
        actors: ['Arnold Schwarzenegger', 'Sharon Stone', 'Michael Ironside'],
        styles: [
            { name: 'Mars Red', promptString: 'red atmosphere, domes, mutants, dusty, verhoeven satire, mining colony' },
            { name: 'Reactor Start', promptString: 'blinding white light, terraforming, wind, ancient alien tech, melting eyes' },
            { name: 'Rekall Chair', promptString: 'futuristic medical chair, red light, electrodes, mind trip, sci-fi lab' }
        ]
    },
    {
        type: 'movie',
        id: 'last-crusade',
        title: 'Indiana Jones and the Last Crusade',
        year: '1989',
        genres: ['Action', 'Adventure'],
        director: 'Steven Spielberg',
        actors: ['Harrison Ford', 'Sean Connery', 'Alison Doody'],
        styles: [
            { name: 'Tank Chase', promptString: 'desert dust, nazi uniforms, gritty action, horse vs tank, rocky canyon' },
            { name: 'Leap of Faith', promptString: 'invisible bridge, torchlight, abyss, ancient cave, wonder, painted texture' },
            { name: 'Grail Chamber', promptString: 'hundreds of cups, cobwebs, aging knight, gold vs clay, divine light' }
        ]
    },
    {
        type: 'movie',
        id: 'first-blood',
        title: 'Rambo: First Blood',
        year: '1982',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ted Kotcheff',
        actors: ['Sylvester Stallone', 'Brian Dennehy', 'Richard Crenna'],
        styles: [
            { name: 'Forest Hunt', promptString: 'misty woods, survival, green army jacket, knife, booby traps, rain' },
            { name: 'Town Fire', promptString: 'burning gas station, machine gun, night, rain, ptsd rage, destruction' },
            { name: 'Cave Rats', promptString: 'rats, darkness, torch light, wet, claustrophobia, hiding' }
        ]
    },
    {
        type: 'movie',
        id: 'kill-bill-vol-2',
        title: 'Kill Bill: Vol. 2',
        year: '2004',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Uma Thurman', 'David Carradine', 'Michael Madsen'],
        styles: [
            { name: 'Coffin Escape', promptString: 'pitch black, flashlight beam, wood texture, claustrophobia, punches, dirt' },
            { name: 'Pai Mei Steps', promptString: 'white beard, stone steps, kung fu training, zoom snaps, 70s cinema style, bright sun' },
            { name: 'Trailer Fight', promptString: 'cramped interior, gritty, close quarters, intense dialogue, western feel, katana' }
        ]
    },
    {
        type: 'movie',
        id: 'jurassic-park',
        title: 'Jurassic Park',
        year: '1993',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Steven Spielberg',
        actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
        styles: [
            { name: 'T-Rex Breakout', promptString: 'rain, ripples in water, night, flares, massive dinosaur eye, goat leg' },
            { name: 'Gallimimus Valley', promptString: 'green scenery, bright sun, running dinosaurs, sense of scale, flocking' },
            { name: 'Raptor Kitchen', promptString: 'stainless steel, reflection, stalking, silence, terror, condensation' }
        ]
    },
    {
        type: 'movie',
        id: 'titanic',
        title: 'Titanic',
        year: '1997',
        genres: ['Drama', 'Romance'],
        director: 'James Cameron',
        actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
        styles: [
            { name: 'Bow of Ship', promptString: 'sunset, embrace, endless ocean, king of the world, romantic golden hour, wind' },
            { name: 'Grand Staircase', promptString: 'opulence, wood clock, flooding water, destruction of beauty, electric sparks' },
            { name: 'Steerage Party', promptString: 'warm irish lighting, spinning, beer, sweat, joy, motion blur' }
        ]
    },
    {
        type: 'movie',
        id: 'avatar',
        title: 'Avatar',
        year: '2009',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'James Cameron',
        actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        styles: [
            { name: 'Pandora Night', promptString: 'bioluminescence, glowing plants, blue skin, floating seeds, magical forest, neon' },
            { name: 'Floating Mountains', promptString: 'vines, waterfalls in sky, clouds, immense scale, 3d depth, green and blue' },
            { name: 'AMP Suit', promptString: 'mechanical walker, jungle destruction, glass cockpit, industrial grey, heavy metal' }
        ]
    },
    {
        type: 'movie',
        id: 'the-avengers',
        title: 'The Avengers',
        year: '2012',
        genres: ['Action', 'Sci-Fi'],
        director: 'Joss Whedon',
        actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
        styles: [
            { name: 'Circle Shot', promptString: 'heroes assembled, new york rubble, confident stances, comic book splash page, daylight' },
            { name: 'Helicarrier', promptString: 'clouds, high tech turbines, glass bridge, blue sky, wide shot' },
            { name: 'Stark Tower', promptString: 'iron man suit up, sleek architecture, city view, invasion portal, blue beam' }
        ]
    },
    {
        type: 'movie',
        id: 'the-terminator',
        title: 'The Terminator',
        year: '1984',
        genres: ['Action', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
        styles: [
            { name: 'Tech Noir Blue', promptString: 'smoky club atmosphere, lasers, blue lighting, 80s punk hair, sweat, dark shadows, james cameron' },
            { name: 'Future War', promptString: 'apocalyptic rubble, purple lasers, chrome endoskeletons, blue night, flash forward sequence, gritty' },
            { name: 'Los Angeles Night', promptString: 'gritty urban street, sodium vapor lights, trash, wet pavement, neo-noir, menacing' }
        ]
    },
    {
        type: 'movie',
        id: 'robocop',
        title: 'RoboCop',
        year: '1987',
        genres: ['Action', 'Sci-Fi'],
        director: 'Paul Verhoeven',
        actors: ['Peter Weller', 'Nancy Allen', 'Dan O\'Herlihy'],
        styles: [
            { name: 'Detroit Rust', promptString: 'industrial decay, rust, steam, verhoeven satire, daytime grit, broken glass, steel mill' },
            { name: 'Medi-Break', promptString: 'scanlines, tv static, fake commercial aesthetic, bright colors, satirical news, broadcast quality' },
            { name: 'Prime Directive HUD', promptString: 'green pixelated vector graphics, scanlines, digital interference, machine vision POV, low resolution' }
        ]
    },
    {
        type: 'movie',
        id: 'lethal-weapon',
        title: 'Lethal Weapon',
        year: '1987',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Richard Donner',
        actors: ['Mel Gibson', 'Danny Glover', 'Gary Busey'],
        styles: [
            { name: 'Saxophone Noir', promptString: 'wet city streets, neon reflection, lonely atmosphere, cigarette smoke, bluesy, melancholic night' },
            { name: 'California Dusk', promptString: 'sunset over LA, palm trees, warm orange glow, heat haze, buddy cop vibe, hazy' },
            { name: 'Explosive Action', promptString: 'fireball, debris, stunt work, shane black energy, chaotic movement, smoke' }
        ]
    },
    {
        type: 'movie',
        id: 'escape-from-new-york',
        title: 'Escape from New York',
        year: '1981',
        genres: ['Action', 'Sci-Fi'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Lee Van Cleef', 'Ernest Borgnine'],
        styles: [
            { name: 'Grid Map', promptString: 'green wireframe computer graphics, retrofuturism, glowing lines, 80s cgi, tactical display, crt texture' },
            { name: 'Manhattan Ruins', promptString: 'destroyed city, burning barrels, dark shadows, urban wasteland, graffiti, carpenter synth atmosphere' },
            { name: 'Chandelier Car', promptString: 'bizarre lighting, lens flares, dirty luxury, punk aesthetic, night ride, weird gangs' }
        ]
    },
    {
        type: 'movie',
        id: 'bloodsport',
        title: 'Bloodsport',
        year: '1988',
        genres: ['Action', 'Biography', 'Drama'],
        director: 'Newt Arnold',
        actors: ['Jean-Claude Van Damme', 'Donald Gibb', 'Leah Ayres'],
        styles: [
            { name: 'Kumite Sweat', promptString: 'dark arena, spotlight, oiled skin, muscle definition, bruises, intense focus, underground fight' },
            { name: 'Flashback Haze', promptString: 'soft focus, dreamlike, training sequence, golden hour, martial arts discipline, sunlight' },
            { name: 'Hong Kong Neon', promptString: 'narrow alleys, bright neon signs, wet stone, crowded, mysterious atmosphere, night market' }
        ]
    },
    {
        type: 'movie',
        id: 'big-trouble',
        title: 'Big Trouble in Little China',
        year: '1986',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Kim Cattrall', 'Dennis Dun'],
        styles: [
            { name: 'Chinatown Magic', promptString: 'neon green lightning, ancient sorcery, smoke, colorful robes, mystical temple, john carpenter' },
            { name: 'Pork Chop Express', promptString: 'rainy highway, truck cab interior, cb radio, dark night, truckers view, wet asphalt' },
            { name: 'Creature Feature', promptString: 'practical effects, slime, monster makeup, grotesque, 80s fantasy horror, elaborate costumes' }
        ]
    }
];
