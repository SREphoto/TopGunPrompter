import type { Movie } from './types';

export const movies: Movie[] = [
    {
        id: 'top-gun',
        title: 'Top Gun',
        year: '1986',
        genres: ['Action', 'Drama'],
        director: 'Tony Scott',
        actors: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        styles: [
            { name: '80s Sunset', promptString: 'golden hour, silhouette, intense heat haze distortion, Telephoto lens compression, Kodak 5247 film stock, heavy grain' },
            { name: 'Cockpit HUD', promptString: 'green digital phosphor glow, HUD reflection on glass, harsh sunlight, claustrophobic framing, high contrast' },
            { name: 'Volleyball Sweat', promptString: 'glistening oiled skin, hard sunlight, specular highlights, saturated Fujicolor film, slow motion aesthetic' }
        ]
    },
    {
        id: 'interview-vampire',
        title: 'Interview with the Vampire',
        year: '1994',
        genres: ['Horror', 'Drama', 'Fantasy'],
        director: 'Neil Jordan',
        actors: ['Tom Cruise', 'Brad Pitt', 'Kirsten Dunst'],
        styles: [
            { name: 'Gothic Candlelight', promptString: 'flickering candlelight, deep shadows, f/1.8 aperture, shallow depth of field, velvet textures, warm glow' },
            { name: 'New Orleans Decay', promptString: 'foggy streets, gas lamp glow, rotting wood texture, humid atmosphere, wet plate aesthetic, spanish moss' },
            { name: 'Vampire Pale', promptString: 'alabaster skin, translucent veins, piercing eyes, high contrast, cold blue undertones, subsurface scattering' }
        ]
    },
    {
        id: 'oldboy',
        title: 'Oldboy',
        year: '2003',
        genres: ['Action', 'Drama', 'Mystery'],
        director: 'Park Chan-wook',
        actors: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
        styles: [
            { name: 'Green Corridor', promptString: 'sickly green fluorescent lighting, flickering tubes, narrow hallway, dirty textures, neo-noir, 35mm film grain' },
            { name: 'Hammer Grit', promptString: 'extreme close up macro shot, motion blur, visceral violence, blood splatter, raw and gritty texture, high tension' },
            { name: 'Neon Noir', promptString: 'deep blacks, vibrant neon signs, wet streets, urban isolation, cinematic shadow, low key lighting' }
        ]
    },
    {
        id: 'john-wick',
        title: 'John Wick',
        year: '2014',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
        styles: [
            { name: 'Neon Club', promptString: 'vibrant pink and blue neon, Anamorphic lens flares, wet surface reflections, volumetric smoke, high contrast' },
            { name: 'Tactical Suit', promptString: 'sharp black suit texture, gun metal grey, clean lines, rim lighting, modern noir, Arri Alexa digital' },
            { name: 'Rainy NYC', promptString: 'heavy rain, wet pavement, city lights reflecting, dark atmosphere, moody, urban solitude, bokeh' }
        ]
    },
    {
        id: 'american-psycho',
        title: 'American Psycho',
        year: '2000',
        genres: ['Crime', 'Drama', 'Horror'],
        director: 'Mary Harron',
        actors: ['Christian Bale', 'Justin Theroux', 'Josh Lucas'],
        styles: [
            { name: 'Corporate Cold', promptString: 'sterile white environment, minimalism, harsh fluorescent light, expensive suits, emotionless, symmetrical' },
            { name: 'Blood Splatter', promptString: 'bright red blood on white plastic, shocking contrast, surreal violence, pristine horror, high key lighting' },
            { name: '80s Yuppie', promptString: 'warm upscale restaurant lighting, crystal glasses, designer clothing, excess, superficial beauty, soft focus' }
        ]
    },
    {
        id: 'gladiator',
        title: 'Gladiator',
        year: '2000',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ridley Scott',
        actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
        styles: [
            { name: 'Roman Dust', promptString: 'sun bleached, floating dust particles, arena sand, ancient stone, epic scale, atmospheric haze' },
            { name: 'Colosseum Sun', promptString: 'blinding sunlight, harsh shadows, metallic armor reflection, heat waves, intense action, high shutter speed' },
            { name: 'Wheat Field', promptString: 'golden wheat, soft focus, dreamlike, hand brushing through grain, ethereal light, magic hour' }
        ]
    },
    {
        id: 'seven',
        title: 'Se7en',
        year: '1995',
        genres: ['Crime', 'Drama', 'Mystery'],
        director: 'David Fincher',
        actors: ['Brad Pitt', 'Morgan Freeman', 'Kevin Spacey'],
        styles: [
            { name: 'Gritty Rain', promptString: 'constant downpour, urban decay, bleach bypass process, silver retention, high contrast, desaturated colors' },
            { name: 'Flashlight Beam', promptString: 'piercing volumetric light beam in darkness, dust motes, claustrophobic, chiaroscuro, shadow play' },
            { name: 'Desaturated City', promptString: 'sepia tones, grime, peeling paint, oppressive atmosphere, hopelessness, industrial texture, film grain' }
        ]
    },
    {
        id: 'fight-club',
        title: 'Fight Club',
        year: '1999',
        genres: ['Drama'],
        director: 'David Fincher',
        actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        styles: [
            { name: 'Basement Grime', promptString: 'sweat sheen, blood, concrete texture, sodium vapor lighting, fluorescent green tint, high ISO noise' },
            { name: 'Soap Pink', promptString: 'bright pink soap, chemical burns, surreal satire, consumerism, pop art contrast, macro photography' },
            { name: 'Insomnia Blue', promptString: 'cold blue color grading, sterile office lighting, dissociation, anti-glare coating, sleepless atmosphere' }
        ]
    },
    {
        id: 'aliens',
        title: 'Aliens',
        year: '1986',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Sigourney Weaver', 'Michael Biehn', 'Carrie Henn'],
        styles: [
            { name: 'Industrial Blue', promptString: 'cold steel, blue emergency rim lighting, volumetric steam, wet metal textures, James Cameron blue' },
            { name: 'Xenomorph Slime', promptString: 'organic resin, dripping slime, glistening black surfaces, biomechanical texture, low key lighting' },
            { name: 'Motion Tracker Green', promptString: 'grainy green screen, CRT scanlines, sonar blips, low light, claustrophobia, tech noir aesthetic' }
        ]
    },
    {
        id: 'predator',
        title: 'Predator',
        year: '1987',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'John McTiernan',
        actors: ['Arnold Schwarzenegger', 'Carl Weathers', 'Kevin Peter Hall'],
        styles: [
            { name: 'Jungle Heat', promptString: 'dense foliage, sweat, humidity, bright green leaves, dappled sunlight, survival, telephoto lens' },
            { name: 'Thermal Vision', promptString: 'heat signature spectrum, blue and red and yellow, alien pov, hunting mode, digital processing' },
            { name: 'Mud Camo', promptString: 'covered in mud, blending with nature, primal, dirty textures, stealth, natural lighting' }
        ]
    },
    {
        id: 'joker',
        title: 'Joker',
        year: '2019',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Todd Phillips',
        actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
        styles: [
            { name: 'Clown Makeup', promptString: 'smeared greasepaint texture, extreme close up, skin pores, tragic expression, vibrant colors, harsh lighting' },
            { name: 'Subway Green', promptString: 'flickering fluorescent lights, dirty subway tiles, teal and orange color grading, Arri Alexa digital noise' },
            { name: 'Talk Show Blue', promptString: 'bright tv studio lighting, retro curtains, saturated blue and red, media spectacle, broadcast look' }
        ]
    },
    {
        id: 'dune',
        title: 'Dune',
        year: '2021',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Denis Villeneuve',
        actors: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
        styles: [
            { name: 'Arrakis Sand', promptString: 'endless dunes, spice floating in air, heat haze, massive scale, monochromatic beige and gold, IMAX scale' },
            { name: 'Spice Blue', promptString: 'glowing blue eyes, deep indigo shadows, mystical atmosphere, desert night, cinematic lighting' },
            { name: 'Ornithopter Steel', promptString: 'brutalist architecture, industrial metal texture, dragonfly wings, dust and machinery, Greig Fraser cinematography' }
        ]
    },
    {
        id: 'the-matrix',
        title: 'The Matrix',
        year: '1999',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        styles: [
            { name: 'Digital Rain', promptString: 'falling green code, phosphor glow, CRT texture, black background, latex texture, 35mm film grain' },
            { name: 'Bullet Time', promptString: 'frozen time, 360-degree virtual camera, flow motion, ripple distortion, path tracing, fluid simulation' },
            { name: 'Construct White', promptString: 'infinite white space, clean, sterile, surreal minimalism, ambient occlusion, soft shadows' }
        ]
    },
    {
        id: 'blade-runner-2049',
        title: 'Blade Runner 2049',
        year: '2017',
        genres: ['Action', 'Drama', 'Mystery'],
        director: 'Denis Villeneuve',
        actors: ['Harrison Ford', 'Ryan Gosling', 'Ana de Armas'],
        styles: [
            { name: 'Orange Haze', promptString: 'radioactive dust, thick orange fog, atmospheric perspective, silhouette, Roger Deakins cinematography' },
            { name: 'Hologram Pink', promptString: 'giant holographic projection, neon pink and purple, transparency, rain on glass, volumetric light' },
            { name: 'Cyberpunk Rain', promptString: 'constant rain, neon reflections on wet pavement, flying cars, dark blue and grey palette, tech noir' }
        ]
    },
    {
        id: 'mad-max-fury-road',
        title: 'Mad Max: Fury Road',
        year: '2015',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'George Miller',
        actors: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
        styles: [
            { name: 'Chrome & Rust', promptString: 'shiny chrome spray paint, rusted metal, high contrast, overexposed sky, sharp focus, kinetic energy' },
            { name: 'Desert Storm', promptString: 'massive sandstorm, red lightning, volumetric dust, apocalyptic scale, orange and black contrast' },
            { name: 'High Octane Blue', promptString: 'day-for-night shooting technique, deep saturated blue, moonlight over desert, cold isolation' }
        ]
    },
    {
        id: 'the-dark-knight',
        title: 'The Dark Knight',
        year: '2008',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'Christopher Nolan',
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        styles: [
            { name: 'Gotham Night', promptString: 'city skyline at night, skyscrapers, dark blue and black, 70mm IMAX film, urban crime, aerial shot' },
            { name: 'Joker Purple', promptString: 'purple suit, green hair, chaotic energy, smeared makeup, handheld camera, interrogation lighting' },
            { name: 'IMAX Blue', promptString: 'cold color temperature, glass and steel, high tech surveillance, sharp focus, 70mm film grain' }
        ]
    },
    {
        id: 'pulp-fiction',
        title: 'Pulp Fiction',
        year: '1994',
        genres: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        styles: [
            { name: 'Vintage Diner', promptString: 'red vinyl booths, formica tables, warm lighting, 50s americana, retro cool, wide angle lens' },
            { name: 'Tarantino Trunk', promptString: 'low angle shot looking up, trunk lid framing, POV, fish-eye lens effect, cinematic signature' },
            { name: 'Monochrome Suit', promptString: 'black and white suits, thin ties, cool detachment, gangster chic, stylized, high contrast' }
        ]
    },
    {
        id: 'terminator-2',
        title: 'Terminator 2: Judgment Day',
        year: '1991',
        genres: ['Action', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
        styles: [
            { name: 'Liquid Metal', promptString: 'chrome surface, reflection, shapeshifting, fluid simulation, cold perfection, ray tracing' },
            { name: 'Nuclear Fire', promptString: 'apocalyptic destruction, burning playground, orange and black, nightmare sequence, high contrast' },
            { name: 'Steel Blue', promptString: 'cold blue night, industrial steel mill, sparks, James Cameron blue, tech noir, metallic texture' }
        ]
    },
    {
        id: 'inception',
        title: 'Inception',
        year: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
        styles: [
            { name: 'Folding City', promptString: 'bending architecture, defying gravity, surreal cityscape, dream logic, mind bending, anamorphic lens' },
            { name: 'Dream Layer', promptString: 'rainy city street, slow motion, texture of water, subconscious projection, phantom high speed' },
            { name: 'Zero Gravity', promptString: 'floating objects, spinning hallway, disorientation, sleek hotel interior, physics defying' }
        ]
    },
    {
        id: 'kill-bill-vol-1',
        title: 'Kill Bill: Vol. 1',
        year: '2003',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Uma Thurman', 'Lucy Liu', 'Vivica A. Fox'],
        styles: [
            { name: 'Yellow Jumpsuit', promptString: 'bright yellow track suit, black stripe, vibrant colors, pop art style, snap zoom aesthetic' },
            { name: 'Anime Blood', promptString: 'exaggerated blood spray, silhouette, high contrast, stylized violence, cel shaded influence --niji 6' },
            { name: 'Snowy Garden', promptString: 'serene japanese garden, falling snow, white silence, blood on snow, poetic duel, wide shot' }
        ]
    },
    {
        id: 'no-country-for-old-men',
        title: 'No Country for Old Men',
        year: '2007',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Ethan Coen, Joel Coen',
        actors: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        styles: [
            { name: 'Desert Silence', promptString: 'vast texas landscape, empty horizon, harsh midday sunlight, isolation, deep depth of field' },
            { name: 'Motel Shadow', promptString: 'dark motel room, light under the door, suspense, creeping shadow, neo-western, practical lighting' },
            { name: 'Coin Toss Silver', promptString: 'extreme close up of a silver coin, metallic texture, fate, cold indifference, macro lens' }
        ]
    },
    {
        id: 'drive',
        title: 'Drive',
        year: '2011',
        genres: ['Action', 'Drama'],
        director: 'Nicolas Winding Refn',
        actors: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston'],
        styles: [
            { name: 'Synthwave Neon', promptString: 'pink and blue neon, retro 80s aesthetic, night driving, sodium vapor streetlights, bokeh' },
            { name: 'Scorpion Jacket', promptString: 'white satin, golden embroidery, fabric texture, iconic costume, blood stains, high contrast' },
            { name: 'LA Night', promptString: 'los angeles skyline, streetlights, anamorphic bokeh, lonely atmosphere, noir lighting' }
        ]
    },
    {
        id: 'the-fifth-element',
        title: 'The Fifth Element',
        year: '1997',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Luc Besson',
        actors: ['Bruce Willis', 'Milla Jovovich', 'Gary Oldman'],
        styles: [
            { name: 'Multipass Orange', promptString: 'bright orange hair, futuristic fashion, Jean Paul Gaultier costumes, vibrant pop colors, sharp focus' },
            { name: 'Future NYC', promptString: 'flying cars, vertical city, dense traffic, fog, Moebius comic aesthetic, futuristic metropolis' },
            { name: 'Mondoshawan Gold', promptString: 'ancient alien armor, metallic gold, rusty textures, mystical light, temple setting, volumetric dust' }
        ]
    },
    {
        id: 'interstellar',
        title: 'Interstellar',
        year: '2014',
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        styles: [
            { name: 'Black Hole', promptString: 'gargantua accretion disk, bending light, deep space, cosmic scale, IMAX aspect ratio, gravitational lensing' },
            { name: 'Dust Bowl', promptString: 'cornfields, dust storms, americana, gritty realism, earth tones, dying earth, particulate matter' },
            { name: 'Tesseract', promptString: 'fourth dimension, infinite library, strings of time, surreal architecture, abstract, light rays' }
        ]
    },
    {
        id: 'the-shining',
        title: 'The Shining',
        year: '1980',
        genres: ['Drama', 'Horror'],
        director: 'Stanley Kubrick',
        actors: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
        styles: [
            { name: 'Overlook Carpet', promptString: 'hexagonal pattern, one-point perspective, Steadicam tracking shot, geometric symmetry, wide angle lens' },
            { name: 'Redrum', promptString: 'blood elevator, fluid physics, art deco hotel, psychological horror, symmetrical composition' },
            { name: 'Snow Maze', promptString: 'frozen hedge maze, blue moonlight, mist, isolation, cold atmosphere, winter night' }
        ]
    },
    {
        id: 'tron-legacy',
        title: 'Tron: Legacy',
        year: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Joseph Kosinski',
        actors: ['Jeff Bridges', 'Garrett Hedlund', 'Olivia Wilde'],
        styles: [
            { name: 'The Grid', promptString: 'neon blue lines, black glass, digital landscape, symmetry, self-illuminated, clean lines' },
            { name: 'Light Cycle', promptString: 'light trails, motion blur, high speed, sleek vehicles, cybernetic, neon orange and blue' },
            { name: 'Iso Orange', promptString: 'warm orange neon, contrast against blue, digital dna, organic code, simulation, glow effect' }
        ]
    },
    {
        id: 'taxi-driver',
        title: 'Taxi Driver',
        year: '1976',
        genres: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        actors: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        styles: [
            { name: 'Yellow Cab', promptString: 'checker cab, steam rising from streets, night city, urban decay, 35mm film grain' },
            { name: 'Mohawk', promptString: 'military jacket, sunglasses, mohawk haircut, mirror reflection, anti-hero, intense stare' },
            { name: 'Neon Rain', promptString: 'rain on windshield, blurred neon lights, bokeh, loneliness, jazz atmosphere, sodium vapor lights' }
        ]
    },
    {
        id: 'saving-private-ryan',
        title: 'Saving Private Ryan',
        year: '1998',
        genres: ['Drama', 'War'],
        director: 'Steven Spielberg',
        actors: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
        styles: [
            { name: 'Omaha Beach', promptString: 'desaturated, high contrast, 45-degree shutter angle, handheld camera shake, bleach bypass process, film grain' },
            { name: 'Sniper Bell Tower', promptString: 'rubble texture, soft diffused light, telephoto lens, shallow depth of field, particulate dust' },
            { name: 'Faded Glory', promptString: 'american flag, backlit sunlight, dust particles, emotional, somber, god rays, atmospheric haze' }
        ]
    },
    {
        id: 'iron-man',
        title: 'Iron Man',
        year: '2008',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Jon Favreau',
        actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard'],
        styles: [
            { name: 'Mark III', promptString: 'hot rod red and gold, automotive paint texture, ray traced reflections, photorealistic, 8k' },
            { name: 'Arc Reactor', promptString: 'glowing blue light, chest piece, cave darkness, palladium core, industrial contrast, chiaroscuro' },
            { name: 'Malibu Mansion', promptString: 'futuristic architecture, ocean view, glass walls, wealth, clean lines, morning sun, architectural photography' }
        ]
    },
    {
        id: 'starship-troopers',
        title: 'Starship Troopers',
        year: '1997',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Paul Verhoeven',
        actors: ['Casper Van Dien', 'Denise Richards', 'Dina Meyer'],
        styles: [
            { name: 'Klendathu Drop', promptString: 'chaotic, swarming arachnids, laser fire, desert planet, daylight horror, epic scale, harsh sunlight' },
            { name: 'Federal Network', promptString: 'propaganda film style, scanlines, bright colors, satire, fascist uniform, broadcast quality' },
            { name: 'Brain Bug', promptString: 'slimy organic texture, massive, underground cave, grotesque, subsurface scattering, low key lighting' }
        ]
    },
    {
        id: 'transformers',
        title: 'Transformers',
        year: '2007',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Michael Bay',
        actors: ['Shia LaBeouf', 'Megan Fox', 'Josh Duhamel'],
        styles: [
            { name: 'Transformation', promptString: 'complex mechanical parts shifting, metallic glare, sunset heavily saturated, Anamorphic lens flare, motion blur' },
            { name: 'City Battle', promptString: 'debris, explosions, giant robots, dust, destruction, low angle, telephoto compression' },
            { name: 'Bumblebee Garage', promptString: 'yellow camaro, scratched metal, expressive eyes, garage lighting, mist, atmospheric' }
        ]
    },
    {
        id: 'deadpool',
        title: 'Deadpool',
        year: '2016',
        genres: ['Action', 'Adventure', 'Comedy'],
        director: 'Tim Miller',
        actors: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
        styles: [
            { name: 'Maximum Effort', promptString: 'red spandex fabric texture, dirty suit, breaking fourth wall, comic book contrast, humor' },
            { name: 'Highway Fight', promptString: 'overcast day, slow motion violence, bullet casings, destruction, asphalt texture, high shutter speed' },
            { name: 'X-Mansion', promptString: 'grey sterile halls, emptiness, mockery, bright daylight, architectural symmetry, wide angle' }
        ]
    },
    {
        id: 'john-wick-2',
        title: 'John Wick: Chapter 2',
        year: '2017',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Riccardo Scamarcio', 'Ian McShane'],
        styles: [
            { name: 'Mirrors Room', promptString: 'multiple reflections, neon lights, confusion, sleek, museum art installation, blue and pink, kaleidoscope' },
            { name: 'Continental Lounge', promptString: 'warm gold lighting, leather chairs, drinking scotch, luxury, unspoken tension, cinematic lighting' },
            { name: 'Rome Catacombs', promptString: 'stone walls, dust, flashlight beams, shadows, tactical suit, ancient arches, rim lighting' }
        ]
    },
    {
        id: 'john-wick-3',
        title: 'John Wick: Chapter 3 - Parabellum',
        year: '2019',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Halle Berry', 'Ian McShane'],
        styles: [
            { name: 'Glass House', promptString: 'transparent walls, fighting silhouettes, pristine, shattering glass, cool blue light, emptiness' },
            { name: 'Continental Green', promptString: 'intense green neon, heavy armor, smoke, muzzle flashes, high contrast action, volumetric fog' },
            { name: 'Desert Walk', promptString: 'vast dunes, bright sun, black suit, high contrast, heat haze, wandering, telephoto lens' }
        ]
    },
    {
        id: 'die-hard',
        title: 'Die Hard',
        year: '1988',
        genres: ['Action', 'Thriller'],
        director: 'John McTiernan',
        actors: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
        styles: [
            { name: 'Air Duct', promptString: 'claustrophobic, silver metal, lighter flame, dirt on face, lighter reflection, macro shot' },
            { name: 'Nakatomi Plaza', promptString: 'skyscraper at night, broken glass, helicopter spotlight, 80s action, explosion, Anamorphic lens flare' },
            { name: 'Yippee Ki Yay', promptString: 'bloodied undershirt, desperate, machine gun, sweaty skin, Christmas tape, grimy texture' }
        ]
    },
    {
        id: 'matrix-reloaded',
        title: 'The Matrix Reloaded',
        year: '2003',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        styles: [
            { name: 'Freeway Chase', promptString: 'green tint, speeding cars, agents jumping, concrete, motion blur, overcast, 360-degree shutter' },
            { name: 'Burly Brawl', promptString: 'hundreds of smiths, black suits, courtyard, surreal, CGI slickness, bowling pin sound, wide angle' },
            { name: 'Chateau Fight', promptString: 'weapons on walls, grand staircase, marble texture, slow motion, medieval weaponry, cinematic lighting' }
        ]
    },
    {
        id: 'matrix-revolutions',
        title: 'The Matrix Revolutions',
        year: '2003',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        styles: [
            { name: 'Super Brawl', promptString: 'rain, lightning, flying silhouettes, green shockwaves, dark sky, epic scale, fluid simulation' },
            { name: 'Machine City', promptString: 'biomechanical squids, red eyes, swarms, mechanical coldness, cables, deus ex machina, metallic' },
            { name: 'Club Hel', promptString: 'leather straps, bondage gear, red laser lighting, gravity defied, upside down, fetish aesthetic' }
        ]
    },
    {
        id: 'casino-royale',
        title: 'Casino Royale',
        year: '2006',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Martin Campbell',
        actors: ['Daniel Craig', 'Eva Green', 'Judi Dench'],
        styles: [
            { name: 'Parkour Chase', promptString: 'construction crane, dust, bright sunlight, sweat, raw physicality, height, handheld camera' },
            { name: 'Poker Tension', promptString: 'green felt, focus on eyes, chips, tuxedo, smoke, high stakes, warm lighting, macro shot' },
            { name: 'Venice Sinking', promptString: 'collapsing building, turbulent water, tragedy, iron bars, drowning, underwater distortion' }
        ]
    },
    {
        id: 'point-break',
        title: 'Point Break',
        year: '1991',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Kathryn Bigelow',
        actors: ['Patrick Swayze', 'Keanu Reeves', 'Gary Busey'],
        styles: [
            { name: 'Ex-Presidents', promptString: 'president masks, sunset waves, bank robbery, adrenaline, wetsuits, beach vibe, handheld camera' },
            { name: 'Skydiving', promptString: 'blue sky, freefall, wide angle, freedom, adrenaline, holding hands, wind distortion' },
            { name: 'Foot Chase', promptString: 'Steadicam, alleyways, throwing dogs, shaky cam, pure kinetic energy, fence jumping' }
        ]
    },
    {
        id: 'die-hard-vengeance',
        title: 'Die Hard with a Vengeance',
        year: '1995',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'John McTiernan',
        actors: ['Bruce Willis', 'Jeremy Irons', 'Samuel L. Jackson'],
        styles: [
            { name: 'Harlem Heat', promptString: 'summer heat, bustling city, sandwich board, sweat, urban grit, yellow filter, heat haze' },
            { name: 'Gold Vault', promptString: 'heavy gold bars, underground, yellow sheen, greed, dump trucks, industrial lighting' },
            { name: 'Water Jugs', promptString: 'fountain, park setting, tension, bomb timer, puzzle, daylight, sharp focus' }
        ]
    },
    {
        id: 'commando',
        title: 'Commando',
        year: '1985',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Mark L. Lester',
        actors: ['Arnold Schwarzenegger', 'Rae Dawn Chong', 'Dan Hedaya'],
        styles: [
            { name: 'Gear Up', promptString: 'montage style, weapons, black grease paint, muscles, vest, preparation, high contrast' },
            { name: 'Island Raid', promptString: 'explosions, tropical garden, one man army, mayhem, machine gun hip fire, saturated colors' },
            { name: 'Log Carry', promptString: 'lumberjack shirt, massive tree trunk, mountains, raw strength, 80s macho, telephoto lens' }
        ]
    },
    {
        id: 'bad-boys',
        title: 'Bad Boys',
        year: '1995',
        genres: ['Action', 'Comedy', 'Crime'],
        director: 'Michael Bay',
        actors: ['Will Smith', 'Martin Lawrence', 'Lisa Boyle'],
        styles: [
            { name: 'Porsche 911', promptString: 'miami streets, sunset, shiny black car, banter, Michael Bay 360, lens flare, saturated colors' },
            { name: 'Club Shootout', promptString: 'strobe lights, slow motion, falling debris, stylish violence, unbuttoned shirts, chaotic' },
            { name: 'Miami Heat', promptString: 'palm trees, vibrant orange and teal, sweat, sunglasses, cool attitude, warm color grading' }
        ]
    },
    {
        id: 'total-recall',
        title: 'Total Recall',
        year: '1990',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
        director: 'Paul Verhoeven',
        actors: ['Arnold Schwarzenegger', 'Sharon Stone', 'Michael Ironside'],
        styles: [
            { name: 'Mars Red', promptString: 'red atmosphere, domes, mutants, dusty, Verhoeven satire, mining colony, miniature effect' },
            { name: 'Reactor Start', promptString: 'blinding white light, terraforming, wind, ancient alien tech, melting eyes, practical effects' },
            { name: 'Rekall Chair', promptString: 'futuristic medical chair, red light, electrodes, mind trip, sci-fi lab, industrial design' }
        ]
    },
    {
        id: 'last-crusade',
        title: 'Indiana Jones and the Last Crusade',
        year: '1989',
        genres: ['Action', 'Adventure'],
        director: 'Steven Spielberg',
        actors: ['Harrison Ford', 'Sean Connery', 'Alison Doody'],
        styles: [
            { name: 'Tank Chase', promptString: 'desert dust, nazi uniforms, gritty action, horse vs tank, rocky canyon, motion blur' },
            { name: 'Leap of Faith', promptString: 'invisible bridge, torchlight, abyss, ancient cave, wonder, painted texture, matte painting aesthetic' },
            { name: 'Grail Chamber', promptString: 'hundreds of cups, cobwebs, aging knight, gold vs clay, divine light, shafts of light' }
        ]
    },
    {
        id: 'first-blood',
        title: 'Rambo: First Blood',
        year: '1982',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ted Kotcheff',
        actors: ['Sylvester Stallone', 'Brian Dennehy', 'Richard Crenna'],
        styles: [
            { name: 'Forest Hunt', promptString: 'misty woods, survival, green army jacket, knife, booby traps, rain, damp texture' },
            { name: 'Town Fire', promptString: 'burning gas station, machine gun, night, rain, ptsd rage, destruction, pyrotechnics' },
            { name: 'Cave Rats', promptString: 'rats, darkness, torch light, wet rocks, claustrophobia, hiding, high contrast' }
        ]
    },
    {
        id: 'kill-bill-vol-2',
        title: 'Kill Bill: Vol. 2',
        year: '2004',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Uma Thurman', 'David Carradine', 'Michael Madsen'],
        styles: [
            { name: 'Coffin Escape', promptString: 'pitch black, flashlight beam, wood texture, claustrophobia, punches, dirt, extreme close up' },
            { name: 'Pai Mei Steps', promptString: 'white beard, stone steps, kung fu training, zoom snaps, 70s cinema style, bright sun' },
            { name: 'Trailer Fight', promptString: 'cramped interior, gritty, close quarters, intense dialogue, western feel, katana, wide angle' }
        ]
    },
    {
        id: 'jurassic-park',
        title: 'Jurassic Park',
        year: '1993',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Steven Spielberg',
        actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
        styles: [
            { name: 'T-Rex Breakout', promptString: 'rain, ripples in water, night, flares, massive dinosaur eye, goat leg, animatronic texture' },
            { name: 'Gallimimus Valley', promptString: 'green scenery, bright sun, running dinosaurs, sense of scale, flocking, CGI integration' },
            { name: 'Raptor Kitchen', promptString: 'stainless steel, reflection, stalking, silence, terror, condensation, claustrophobic' }
        ]
    },
    {
        id: 'titanic',
        title: 'Titanic',
        year: '1997',
        genres: ['Drama', 'Romance'],
        director: 'James Cameron',
        actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
        styles: [
            { name: 'Bow of Ship', promptString: 'sunset, embrace, endless ocean, king of the world, romantic golden hour, wind, panoramic' },
            { name: 'Grand Staircase', promptString: 'opulence, wood clock, flooding water, destruction of beauty, electric sparks, chaotic motion' },
            { name: 'Steerage Party', promptString: 'warm irish lighting, spinning, beer, sweat, joy, motion blur, wide angle' }
        ]
    },
    {
        id: 'avatar',
        title: 'Avatar',
        year: '2009',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'James Cameron',
        actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        styles: [
            { name: 'Pandora Night', promptString: 'bioluminescence, glowing plants, blue skin, floating seeds, magical forest, neon, 3D depth' },
            { name: 'Floating Mountains', promptString: 'vines, waterfalls in sky, clouds, immense scale, 3d depth, green and blue, aerial shot' },
            { name: 'AMP Suit', promptString: 'mechanical walker, jungle destruction, glass cockpit, industrial grey, heavy metal, photorealistic CGI' }
        ]
    },
    {
        id: 'the-avengers',
        title: 'The Avengers',
        year: '2012',
        genres: ['Action', 'Sci-Fi'],
        director: 'Joss Whedon',
        actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
        styles: [
            { name: 'Circle Shot', promptString: 'heroes assembled, new york rubble, confident stances, comic book splash page, daylight, parallax camera' },
            { name: 'Helicarrier', promptString: 'clouds, high tech turbines, glass bridge, blue sky, wide shot, industrial design' },
            { name: 'Stark Tower', promptString: 'iron man suit up, sleek architecture, city view, invasion portal, blue beam, high tech' }
        ]
    },
    {
        id: 'the-terminator',
        title: 'The Terminator',
        year: '1984',
        genres: ['Action', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
        styles: [
            { name: 'Tech Noir Blue', promptString: 'smoky club atmosphere, lasers, blue lighting, 80s punk hair, sweat, dark shadows, James Cameron' },
            { name: 'Future War', promptString: 'apocalyptic rubble, purple lasers, chrome endoskeletons, blue night, flash forward sequence, gritty' },
            { name: 'Los Angeles Night', promptString: 'gritty urban street, sodium vapor lights, trash, wet pavement, neo-noir, menacing, film grain' }
        ]
    },
    {
        id: 'robocop',
        title: 'RoboCop',
        year: '1987',
        genres: ['Action', 'Sci-Fi'],
        director: 'Paul Verhoeven',
        actors: ['Peter Weller', 'Nancy Allen', 'Dan O\'Herlihy'],
        styles: [
            { name: 'Detroit Rust', promptString: 'industrial decay, rust, steam, Verhoeven satire, daytime grit, broken glass, steel mill' },
            { name: 'Medi-Break', promptString: 'scanlines, TV static, fake commercial aesthetic, bright colors, satirical news, broadcast quality' },
            { name: 'Prime Directive HUD', promptString: 'green pixelated vector graphics, scanlines, digital interference, machine vision POV, low resolution' }
        ]
    },
    {
        id: 'lethal-weapon',
        title: 'Lethal Weapon',
        year: '1987',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Richard Donner',
        actors: ['Mel Gibson', 'Danny Glover', 'Gary Busey'],
        styles: [
            { name: 'Saxophone Noir', promptString: 'wet city streets, neon reflection, lonely atmosphere, cigarette smoke, bluesy, melancholic night, bokeh' },
            { name: 'California Dusk', promptString: 'sunset over LA, palm trees, warm orange glow, heat haze, buddy cop vibe, hazy atmosphere' },
            { name: 'Explosive Action', promptString: 'fireball, debris, stunt work, Shane Black energy, chaotic movement, smoke, practical effects' }
        ]
    },
    {
        id: 'escape-from-new-york',
        title: 'Escape from New York',
        year: '1981',
        genres: ['Action', 'Sci-Fi'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Lee Van Cleef', 'Ernest Borgnine'],
        styles: [
            { name: 'Grid Map', promptString: 'green wireframe computer graphics, retrofuturism, glowing lines, 80s CGI, tactical display, CRT texture' },
            { name: 'Manhattan Ruins', promptString: 'destroyed city, burning barrels, dark shadows, urban wasteland, graffiti, Carpenter synth atmosphere' },
            { name: 'Chandelier Car', promptString: 'bizarre lighting, lens flares, dirty luxury, punk aesthetic, night ride, weird gangs, surreal' }
        ]
    },
    {
        id: 'bloodsport',
        title: 'Bloodsport',
        year: '1988',
        genres: ['Action', 'Biography', 'Drama'],
        director: 'Newt Arnold',
        actors: ['Jean-Claude Van Damme', 'Donald Gibb', 'Leah Ayres'],
        styles: [
            { name: 'Kumite Sweat', promptString: 'dark arena, spotlight, oiled skin, muscle definition, bruises, intense focus, underground fight' },
            { name: 'Flashback Haze', promptString: 'soft focus, dreamlike, training sequence, golden hour, martial arts discipline, sunlight, diffusion filter' },
            { name: 'Hong Kong Neon', promptString: 'narrow alleys, bright neon signs, wet stone, crowded, mysterious atmosphere, night market' }
        ]
    },
    {
        id: 'big-trouble',
        title: 'Big Trouble in Little China',
        year: '1986',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Kim Cattrall', 'Dennis Dun'],
        styles: [
            { name: 'Chinatown Magic', promptString: 'neon green lightning, ancient sorcery, smoke, colorful robes, mystical temple, John Carpenter' },
            { name: 'Pork Chop Express', promptString: 'rainy highway, truck cab interior, CB radio, dark night, truckers view, wet asphalt, bokeh' },
            { name: 'Creature Feature', promptString: 'practical effects, slime, monster makeup, grotesque, 80s fantasy horror, elaborate costumes' }
        ]
    }
];
