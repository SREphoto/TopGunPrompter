import type { Movie } from './types';

export const movies: Movie[] = [
    {
        id: 'top-gun',
        title: 'Top Gun',
        year: '1986',
        genres: ['Action', 'Drama'],
        director: 'Tony Scott',
        actors: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        type: 'movie',
        styles: [
            { name: '80s Sunset', promptString: 'golden hour, silhouette, intense heat haze distortion, Telephoto lens compression, Kodak 5247 film stock, heavy grain' },
            { name: 'Cockpit HUD', promptString: 'green digital phosphor glow, HUD reflection on glass, harsh sunlight, claustrophobic framing, high contrast' },
            { name: 'Volleyball Sweat', promptString: 'glistening oiled skin, hard sunlight, specular highlights, saturated Fujicolor film, slow motion aesthetic' }
        ],
        posterPrompt: "Official movie poster for Top Gun (1986), close-up of Tom Cruise as Maverick in flight suit and aviator sunglasses, fighter jets reflecting in the glasses, red and white stripes background, bold patriotic colors, military aesthetic, 'TOP GUN' title logo in metallic silver gradient at bottom, 80s blockbuster style --ar 2:3"
    },
    {
        id: 'interview-vampire',
        title: 'Interview with the Vampire',
        year: '1994',
        genres: ['Horror', 'Drama', 'Fantasy'],
        director: 'Neil Jordan',
        actors: ['Tom Cruise', 'Brad Pitt', 'Kirsten Dunst'],
        type: 'movie',
        styles: [
            { name: 'Gothic Candlelight', promptString: 'flickering candlelight, deep shadows, f/1.8 aperture, shallow depth of field, velvet textures, warm glow' },
            { name: 'New Orleans Decay', promptString: 'foggy streets, gas lamp glow, rotting wood texture, humid atmosphere, wet plate aesthetic, spanish moss' },
            { name: 'Vampire Pale', promptString: 'alabaster skin, translucent veins, piercing eyes, high contrast, cold blue undertones, subsurface scattering' }
        ],
        posterPrompt: "Official movie poster for Interview with the Vampire (1994), split face composition of Tom Cruise and Brad Pitt, pale vampire skin, piercing blue and green eyes, gothic baroque typography, dark moody atmosphere, New Orleans lace texture overlay, romantic horror aesthetic --ar 2:3"
    },
    {
        id: 'oldboy',
        title: 'Oldboy',
        year: '2003',
        genres: ['Action', 'Drama', 'Mystery'],
        director: 'Park Chan-wook',
        actors: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
        type: 'movie',
        styles: [
            { name: 'Green Corridor', promptString: 'sickly green fluorescent lighting, flickering tubes, narrow hallway, dirty textures, neo-noir, 35mm film grain' },
            { name: 'Hammer Grit', promptString: 'extreme close up macro shot, motion blur, visceral violence, blood splatter, raw and gritty texture, high tension' },
            { name: 'Neon Noir', promptString: 'deep blacks, vibrant neon signs, wet streets, urban isolation, cinematic shadow, low key lighting' }
        ],
        posterPrompt: "Official movie poster for Oldboy (2003), Oh Dae-su wearing sunglasses and a black suit, holding a hammer, looking downward with a stoic expression, purple and green neon lighting, gritty texture, mystery thriller vibe, Korean typography elements, high contrast --ar 2:3"
    },
    {
        id: 'john-wick',
        title: 'John Wick',
        year: '2014',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
        type: 'movie',
        styles: [
            { name: 'Neon Club', promptString: 'vibrant pink and blue neon, Anamorphic lens flares, wet surface reflections, volumetric smoke, high contrast' },
            { name: 'Tactical Suit', promptString: 'sharp black suit texture, gun metal grey, clean lines, rim lighting, modern noir, Arri Alexa digital' },
            { name: 'Rainy NYC', promptString: 'heavy rain, wet pavement, city lights reflecting, dark atmosphere, moody, urban solitude, bokeh' }
        ],
        posterPrompt: "Official movie poster for John Wick (2014), Keanu Reeves standing in a black suit with a gun in hand, looking at camera with intensity, neon blue and purple city lights in background, wet pavement reflections, collar turned up, 'JOHN WICK' text in sleek sans-serif font, neo-noir action style --ar 2:3"
    },
    {
        id: 'american-psycho',
        title: 'American Psycho',
        year: '2000',
        genres: ['Crime', 'Drama', 'Horror'],
        director: 'Mary Harron',
        actors: ['Christian Bale', 'Justin Theroux', 'Josh Lucas'],
        type: 'movie',
        styles: [
            { name: 'Corporate Cold', promptString: 'sterile white environment, minimalism, harsh fluorescent light, expensive suits, emotionless, symmetrical' },
            { name: 'Blood Splatter', promptString: 'bright red blood on white plastic, shocking contrast, surreal violence, pristine horror, high key lighting' },
            { name: '80s Yuppie', promptString: 'warm upscale restaurant lighting, crystal glasses, designer clothing, excess, superficial beauty, soft focus' }
        ],
        posterPrompt: "Official movie poster for American Psycho (2000), Christian Bale as Patrick Bateman with a perfect smile holding a knife, prestigious suit, blood splatter on his face, clean white background, red serif typography 'AMERICAN PSYCHO', satire horror aesthetic, pristine and disturbing --ar 2:3"
    },
    {
        id: 'gladiator',
        title: 'Gladiator',
        year: '2000',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ridley Scott',
        actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
        type: 'movie',
        styles: [
            { name: 'Roman Dust', promptString: 'sun bleached, floating dust particles, arena sand, ancient stone, epic scale, atmospheric haze' },
            { name: 'Colosseum Sun', promptString: 'blinding sunlight, harsh shadows, metallic armor reflection, heat waves, intense action, high shutter speed' },
            { name: 'Wheat Field', promptString: 'golden wheat, soft focus, dreamlike, hand brushing through grain, ethereal light, magic hour' }
        ],
        posterPrompt: "Official movie poster for Gladiator (2000), Russell Crowe as Maximus in gladiator armor, walking through a wheat field, hand brushing the grain, colosseum looming in the background, golden hour lighting, epic historical drama style, 'GLADIATOR' in chiseled stone font --ar 2:3"
    },
    {
        id: 'seven',
        title: 'Se7en',
        year: '1995',
        genres: ['Crime', 'Drama', 'Mystery'],
        director: 'David Fincher',
        actors: ['Brad Pitt', 'Morgan Freeman', 'Kevin Spacey'],
        type: 'movie',
        styles: [
            { name: 'Gritty Rain', promptString: 'constant downpour, urban decay, bleach bypass process, silver retention, high contrast, desaturated colors' },
            { name: 'Flashlight Beam', promptString: 'piercing volumetric light beam in darkness, dust motes, claustrophobic, chiaroscuro, shadow play' },
            { name: 'Desaturated City', promptString: 'sepia tones, grime, peeling paint, oppressive atmosphere, hopelessness, industrial texture, film grain' }
        ],
        posterPrompt: "Official movie poster for Se7en (1995), gritty texture, photos of Brad Pitt and Morgan Freeman, scratchy handwritten text overlay 'gluttony greed sloth envy wrath pride lust', dark sepia timeline, rain streaks, psychological thriller aesthetic, distressing collage style --ar 2:3"
    },
    {
        id: 'fight-club',
        title: 'Fight Club',
        year: '1999',
        genres: ['Drama'],
        director: 'David Fincher',
        actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        type: 'movie',
        styles: [
            { name: 'Basement Grime', promptString: 'sweat sheen, blood, concrete texture, sodium vapor lighting, fluorescent green tint, high ISO noise' },
            { name: 'Soap Pink', promptString: 'bright pink soap, chemical burns, surreal satire, consumerism, pop art contrast, macro photography' },
            { name: 'Insomnia Blue', promptString: 'cold blue color grading, sterile office lighting, dissociation, anti-glare coating, sleepless atmosphere' }
        ],
        posterPrompt: "Official movie poster for Fight Club (1999), close-up shot of a pink bar of soap with 'FIGHT CLUB' carved into it, placed on a wet surface with water droplets, brutalist typography, gritty texture, satire black comedy vibe, simple and iconic, Fincher lighting --ar 2:3"
    },
    {
        id: 'aliens',
        title: 'Aliens',
        year: '1986',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Sigourney Weaver', 'Michael Biehn', 'Carrie Henn'],
        type: 'movie',
        styles: [
            { name: 'Industrial Blue', promptString: 'cold steel, blue emergency rim lighting, volumetric steam, wet metal textures, James Cameron blue' },
            { name: 'Xenomorph Slime', promptString: 'organic resin, dripping slime, glistening black surfaces, biomechanical texture, low key lighting' },
            { name: 'Motion Tracker Green', promptString: 'grainy green screen, CRT scanlines, sonar blips, low light, claustrophobia, tech noir aesthetic' }
        ],
        posterPrompt: "Official movie poster for Aliens (1986), Ripley holding a pulse rifle, sweaty and intense, protecting Newt, background of xenomorph eggs and blue mist, high contrast lighting, metallic textures, 'ALIENS' title in spaced-out blue font, sci-fi action horror --ar 2:3"
    },
    {
        id: 'predator',
        title: 'Predator',
        year: '1987',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'John McTiernan',
        actors: ['Arnold Schwarzenegger', 'Carl Weathers', 'Kevin Peter Hall'],
        type: 'movie',
        styles: [
            { name: 'Jungle Heat', promptString: 'dense foliage, sweat, humidity, bright green leaves, dappled sunlight, survival, telephoto lens' },
            { name: 'Thermal Vision', promptString: 'heat signature spectrum, blue and red and yellow, alien pov, hunting mode, digital processing' },
            { name: 'Mud Camo', promptString: 'covered in mud, blending with nature, primal, dirty textures, stealth, natural lighting' }
        ],
        posterPrompt: "Official movie poster for Predator (1987), thermal heat vision view of Arnold Schwarzenegger's face, pixelated spectrum colors of red yellow and blue, tri-dot laser sight on his forehead, raw and intense, 'PREDATOR' in red sci-fi font, jungle warfare aesthetic --ar 2:3"
    },
    {
        id: 'joker',
        title: 'Joker',
        year: '2019',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Todd Phillips',
        actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
        type: 'movie',
        styles: [
            { name: 'Clown Makeup', promptString: 'smeared greasepaint texture, extreme close up, skin pores, tragic expression, vibrant colors, harsh lighting' },
            { name: 'Subway Green', promptString: 'flickering fluorescent lights, dirty subway tiles, teal and orange color grading, Arri Alexa digital noise' },
            { name: 'Talk Show Blue', promptString: 'bright tv studio lighting, retro curtains, saturated blue and red, media spectacle, broadcast look' }
        ],
        posterPrompt: "Official movie poster for Joker (2019), low angle shot of Joaquin Phoenix in full clown makeup dancing on concrete stairs, bright sunlight, Gotham city buildings in background, colorful suit, 'JOKER' title in bold white font, psychological drama masterpiece --ar 2:3"
    },
    {
        id: 'dune',
        title: 'Dune',
        year: '2021',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Denis Villeneuve',
        actors: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
        type: 'movie',
        styles: [
            { name: 'Arrakis Sand', promptString: 'endless dunes, spice floating in air, heat haze, massive scale, monochromatic beige and gold, IMAX scale' },
            { name: 'Spice Blue', promptString: 'glowing blue eyes, deep indigo shadows, mystical atmosphere, desert night, cinematic lighting' },
            { name: 'Ornithopter Steel', promptString: 'brutalist architecture, industrial metal texture, dragonfly wings, dust and machinery, Greig Fraser cinematography' }
        ],
        posterPrompt: "Official movie poster for Dune (2021), Paul Atreides walking alone on a massive sand dune, tiny silhouette against vast scale, floating spice particles, orange and beige color palette, minimalist epic sci-fi aesthetic, 'DUNE' logo in customized futura font --ar 2:3"
    },
    {
        id: 'the-matrix',
        title: 'The Matrix',
        year: '1999',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        type: 'movie',
        styles: [
            { name: 'Digital Rain', promptString: 'falling green code, phosphor glow, CRT texture, black background, latex texture, 35mm film grain' },
            { name: 'Bullet Time', promptString: 'frozen time, 360-degree virtual camera, flow motion, ripple distortion, path tracing, fluid simulation' },
            { name: 'Construct White', promptString: 'infinite white space, clean, sterile, surreal minimalism, ambient occlusion, soft shadows' }
        ],
        posterPrompt: "Official movie poster for The Matrix (1999), Neo, Trinity, and Morpheus in long black trench coats and sunglasses, raining green digital code overlay, cyber-noir atmosphere, cool green color grading, 'THE MATRIX' glitch text logo, late 90s sci-fi classic --ar 2:3"
    },
    {
        id: 'blade-runner-2049',
        title: 'Blade Runner 2049',
        year: '2017',
        genres: ['Action', 'Drama', 'Mystery'],
        director: 'Denis Villeneuve',
        actors: ['Harrison Ford', 'Ryan Gosling', 'Ana de Armas'],
        type: 'movie',
        styles: [
            { name: 'Orange Haze', promptString: 'radioactive dust, thick orange fog, atmospheric perspective, silhouette, Roger Deakins cinematography' },
            { name: 'Hologram Pink', promptString: 'giant holographic projection, neon pink and purple, transparency, rain on glass, volumetric light' },
            { name: 'Cyberpunk Rain', promptString: 'constant rain, neon reflections on wet pavement, flying cars, dark blue and grey palette, tech noir' }
        ],
        posterPrompt: "Official movie poster for Blade Runner 2049 (2017), Ryan Gosling standing in front of a futuristic spinner car, split composition with Harrison Ford, massive orange haze background, teal neon rain in foreground, 'BLADE RUNNER 2049' title text, cyberpunk masterpiece aesthetic --ar 2:3"
    },
    {
        id: 'mad-max-fury-road',
        title: 'Mad Max: Fury Road',
        year: '2015',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'George Miller',
        actors: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
        type: 'movie',
        styles: [
            { name: 'Chrome & Rust', promptString: 'shiny chrome spray paint, rusted metal, high contrast, overexposed sky, sharp focus, kinetic energy' },
            { name: 'Desert Storm', promptString: 'massive sandstorm, red lightning, volumetric dust, apocalyptic scale, orange and black contrast' },
            { name: 'High Octane Blue', promptString: 'day-for-night shooting technique, deep saturated blue, moonlight over desert, cold isolation' }
        ],
        posterPrompt: "Official movie poster for Mad Max: Fury Road (2015), Tom Hardy looking back next to his Interceptor car, Charlize Theron as Furiosa in foreground with war paint, explosion of orange sand and fire in background, high contrast teal and orange color grading, 'MAD MAX: FURY ROAD' distressed metal logo --ar 2:3"
    },
    {
        id: 'the-dark-knight',
        title: 'The Dark Knight',
        year: '2008',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'Christopher Nolan',
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        type: 'movie',
        styles: [
            { name: 'Gotham Night', promptString: 'city skyline at night, skyscrapers, dark blue and black, 70mm IMAX film, urban crime, aerial shot' },
            { name: 'Joker Purple', promptString: 'purple suit, green hair, chaotic energy, smeared makeup, handheld camera, interrogation lighting' },
            { name: 'IMAX Blue', promptString: 'cold color temperature, glass and steel, high tech surveillance, sharp focus, 70mm film grain' }
        ],
        posterPrompt: "Official movie poster for The Dark Knight (2008), Joker drawing a smile with red lipstick on a frosted glass window, blurry Batman silhouette in the reflection, 'WHY SO SERIOUS?' scrawled text, dark blue and black color palette, menacing and iconic --ar 2:3"
    },
    {
        id: 'pulp-fiction',
        title: 'Pulp Fiction',
        year: '1994',
        genres: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        type: 'movie',
        styles: [
            { name: 'Vintage Diner', promptString: 'red vinyl booths, formica tables, warm lighting, 50s americana, retro cool, wide angle lens' },
            { name: 'Tarantino Trunk', promptString: 'low angle shot looking up, trunk lid framing, POV, fish-eye lens effect, cinematic signature' },
            { name: 'Monochrome Suit', promptString: 'black and white suits, thin ties, cool detachment, gangster chic, stylized, high contrast' }
        ],
        posterPrompt: "Official movie poster for Pulp Fiction (1994), Uma Thurman lying on a bed smoking a cigarette, pistol and pulp magazine in foreground, stylized retro kitsch aesthetic, vibrant red and yellow colors, 'PULP FICTION' title in bold retro font, cult classic style --ar 2:3"
    },
    {
        id: 'terminator-2',
        title: 'Terminator 2: Judgment Day',
        year: '1991',
        genres: ['Action', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
        type: 'movie',
        styles: [
            { name: 'Liquid Metal', promptString: 'chrome surface, reflection, shapeshifting, fluid simulation, cold perfection, ray tracing' },
            { name: 'Nuclear Fire', promptString: 'apocalyptic destruction, burning playground, orange and black, nightmare sequence, high contrast' },
            { name: 'Steel Blue', promptString: 'cold blue night, industrial steel mill, sparks, James Cameron blue, tech noir, metallic texture' }
        ],
        posterPrompt: "Official movie poster for Terminator 2: Judgment Day (1991), Arnold Schwarzenegger on a Harley Davidson motorcycle holding a shotgun, T-1000 liquid metal face reflection, blue steel color palette, fire in background, metallic font 'T2', blockbuster action style --ar 2:3"
    },
    {
        id: 'inception',
        title: 'Inception',
        year: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
        type: 'movie',
        styles: [
            { name: 'Folding City', promptString: 'bending architecture, defying gravity, surreal cityscape, dream logic, mind bending, anamorphic lens' },
            { name: 'Dream Layer', promptString: 'rainy city street, slow motion, texture of water, subconscious projection, phantom high speed' },
            { name: 'Zero Gravity', promptString: 'floating objects, spinning hallway, disorientation, sleek hotel interior, physics defying' }
        ],
        posterPrompt: "Official movie poster for Inception (2010), Leonardo DiCaprio standing in the middle of a city street that is folding over onto itself, defying gravity, surreal architecture, gun metal grey suit, cool blue tones, 'INCEPTION' title in bottom center with maze grid texture --ar 2:3"
    },
    {
        id: 'kill-bill-vol-1',
        title: 'Kill Bill: Vol. 1',
        year: '2003',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Uma Thurman', 'Lucy Liu', 'Vivica A. Fox'],
        type: 'movie',
        styles: [
            { name: 'Yellow Jumpsuit', promptString: 'bright yellow track suit, black stripe, vibrant colors, pop art style, snap zoom aesthetic' },
            { name: 'Anime Blood', promptString: 'exaggerated blood spray, silhouette, high contrast, stylized violence, cel shaded influence --niji 6' },
            { name: 'Snowy Garden', promptString: 'serene japanese garden, falling snow, white silence, blood on snow, poetic duel, wide shot' }
        ],
        posterPrompt: "Official movie poster for Kill Bill: Vol. 1 (2003), Uma Thurman in yellow jumpsuit holding a katana, blood splatter on yellow background, minimalist silhouette style, 'KILL BILL' text in bold black font with scratch marks, grindhouse cinema aesthetic --ar 2:3"
    },
    {
        id: 'no-country-for-old-men',
        title: 'No Country for Old Men',
        year: '2007',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Ethan Coen, Joel Coen',
        actors: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        type: 'movie',
        styles: [
            { name: 'Desert Silence', promptString: 'vast texas landscape, empty horizon, harsh midday sunlight, isolation, deep depth of field' },
            { name: 'Motel Shadow', promptString: 'dark motel room, light under the door, suspense, creeping shadow, neo-western, practical lighting' },
            { name: 'Coin Toss Silver', promptString: 'extreme close up of a silver coin, metallic texture, fate, cold indifference, macro lens' }
        ],
        posterPrompt: "Official movie poster for No Country for Old Men (2007), silhouette of Anton Chigurh holding a captive bolt gun against a Texas sunset, vast desert landscape, oppressive atmosphere, 'NO COUNTRY FOR OLD MEN' western font, gritty and realistic --ar 2:3"
    },
    {
        id: 'drive',
        title: 'Drive',
        year: '2011',
        genres: ['Action', 'Drama'],
        director: 'Nicolas Winding Refn',
        actors: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston'],
        type: 'movie',
        styles: [
            { name: 'Synthwave Neon', promptString: 'pink and blue neon, retro 80s aesthetic, night driving, sodium vapor streetlights, bokeh' },
            { name: 'Scorpion Jacket', promptString: 'white satin, golden embroidery, fabric texture, iconic costume, blood stains, high contrast' },
            { name: 'LA Night', promptString: 'los angeles skyline, streetlights, anamorphic bokeh, lonely atmosphere, noir lighting' }
        ],
        posterPrompt: "Official movie poster for Drive (2011), Ryan Gosling in satin scorpion jacket, driving gloves, pink neon font 'DRIVE', 80s synthwave color palette, cyan and magenta lighting, cool and stylish --ar 2:3"
    },
    {
        id: 'the-fifth-element',
        title: 'The Fifth Element',
        year: '1997',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Luc Besson',
        actors: ['Bruce Willis', 'Milla Jovovich', 'Gary Oldman'],
        type: 'movie',
        styles: [
            { name: 'Multipass Orange', promptString: 'bright orange hair, futuristic fashion, Jean Paul Gaultier costumes, vibrant pop colors, sharp focus' },
            { name: 'Future NYC', promptString: 'flying cars, vertical city, dense traffic, fog, Moebius comic aesthetic, futuristic metropolis' },
            { name: 'Mondoshawan Gold', promptString: 'ancient alien armor, metallic gold, rusty textures, mystical light, temple setting, volumetric dust' }
        ],
        posterPrompt: "Official movie poster for The Fifth Element (1997), Milla Jovovich with orange hair and white bandage outfit, Bruce Willis protecting her, flying cars in futuristic NYC background, vibrant orange and blue colors, 'THE FIFTH ELEMENT' sci-fi typography --ar 2:3"
    },
    {
        id: 'interstellar',
        title: 'Interstellar',
        year: '2014',
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        type: 'movie',
        styles: [
            { name: 'Black Hole', promptString: 'gargantua accretion disk, bending light, deep space, cosmic scale, IMAX aspect ratio, gravitational lensing' },
            { name: 'Dust Bowl', promptString: 'cornfields, dust storms, americana, gritty realism, earth tones, dying earth, particulate matter' },
            { name: 'Tesseract', promptString: 'fourth dimension, infinite library, strings of time, surreal architecture, abstract, light rays' }
        ],
        posterPrompt: "Official movie poster for Interstellar (2014), Matthew McConaughey walking in a cornfield looking up at the night sky, massive black hole Gargantua looming in space above, 'INTERSTELLAR' thin crisp font, epic scale, cosmic wonder aesthetic --ar 2:3"
    },
    {
        id: 'the-shining',
        title: 'The Shining',
        year: '1980',
        genres: ['Drama', 'Horror'],
        director: 'Stanley Kubrick',
        actors: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
        type: 'movie',
        styles: [
            { name: 'Overlook Carpet', promptString: 'hexagonal pattern, one-point perspective, Steadicam tracking shot, geometric symmetry, wide angle lens' },
            { name: 'Redrum', promptString: 'blood elevator, fluid physics, art deco hotel, psychological horror, symmetrical composition' },
            { name: 'Snow Maze', promptString: 'frozen hedge maze, blue moonlight, mist, isolation, cold atmosphere, winter night' }
        ],
        posterPrompt: "Official movie poster for The Shining (1980), disturbing yellow graphic design with black face silhouette, 'THE SHINING' text, minimalist Saul Bass style, unsettling atmosphere, classic horror iconography --ar 2:3"
    },
    {
        id: 'tron-legacy',
        title: 'Tron: Legacy',
        year: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Joseph Kosinski',
        actors: ['Jeff Bridges', 'Garrett Hedlund', 'Olivia Wilde'],
        type: 'movie',
        styles: [
            { name: 'The Grid', promptString: 'neon blue lines, black glass, digital landscape, symmetry, self-illuminated, clean lines' },
            { name: 'Light Cycle', promptString: 'light trails, motion blur, high speed, sleek vehicles, cybernetic, neon orange and blue' },
            { name: 'Iso Orange', promptString: 'warm orange neon, contrast against blue, digital dna, organic code, simulation, glow effect' }
        ],
        posterPrompt: "Official movie poster for Tron: Legacy (2010), two light cycles racing with neon trails, blue vs orange, sleek digital grid background, daft punk helmet reflection, 'TRON LEGACY' glowing tech font, high-tech sci-fi style --ar 2:3"
    },
    {
        id: 'taxi-driver',
        title: 'Taxi Driver',
        year: '1976',
        genres: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        actors: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        type: 'movie',
        styles: [
            { name: 'Yellow Cab', promptString: 'checker cab, steam rising from streets, night city, urban decay, 35mm film grain' },
            { name: 'Mohawk', promptString: 'military jacket, sunglasses, mohawk haircut, mirror reflection, anti-hero, intense stare' },
            { name: 'Neon Rain', promptString: 'rain on windshield, blurred neon lights, bokeh, loneliness, jazz atmosphere, sodium vapor lights' }
        ],
        posterPrompt: "Official movie poster for Taxi Driver (1976), Robert De Niro walking down a wet NYC street at night, military jacket, steam rising from vents, neon pornography signs in background, 'TAXI DRIVER' yellow font, gritty 70s cinema verite style --ar 2:3"
    },
    {
        id: 'saving-private-ryan',
        title: 'Saving Private Ryan',
        year: '1998',
        genres: ['Drama', 'War'],
        director: 'Steven Spielberg',
        actors: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
        type: 'movie',
        styles: [
            { name: 'Omaha Beach', promptString: 'desaturated, high contrast, 45-degree shutter angle, handheld camera shake, bleach bypass process, film grain' },
            { name: 'Sniper Bell Tower', promptString: 'rubble texture, soft diffused light, telephoto lens, shallow depth of field, particulate dust' },
            { name: 'Faded Glory', promptString: 'american flag, backlit sunlight, dust particles, emotional, somber, god rays, atmospheric haze' }
        ],
        posterPrompt: "Official movie poster for Saving Private Ryan (1998), silhouette of soldiers marching against a grey overcast sky and large american flag, desaturated sepia colors, 'SAVING PRIVATE RYAN' bold serif font, gritty war drama style --ar 2:3"
    },
    {
        id: 'iron-man',
        title: 'Iron Man',
        year: '2008',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Jon Favreau',
        actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard'],
        type: 'movie',
        styles: [
            { name: 'Mark III', promptString: 'hot rod red and gold, automotive paint texture, ray traced reflections, photorealistic, 8k' },
            { name: 'Arc Reactor', promptString: 'glowing blue light, chest piece, cave darkness, palladium core, industrial contrast, chiaroscuro' },
            { name: 'Malibu Mansion', promptString: 'futuristic architecture, ocean view, glass walls, wealth, clean lines, morning sun, architectural photography' }
        ],
        posterPrompt: "Official movie poster for Iron Man (2008), Close up of Iron Man's helmet with glowing blue eyes, metallic red and gold texture, 'IRON MAN' title in metallic font, modern superhero blockbuster aesthetic --ar 2:3"
    },
    {
        id: 'starship-troopers',
        title: 'Starship Troopers',
        year: '1997',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Paul Verhoeven',
        actors: ['Casper Van Dien', 'Denise Richards', 'Dina Meyer'],
        type: 'movie',
        styles: [
            { name: 'Klendathu Drop', promptString: 'chaotic, swarming arachnids, laser fire, desert planet, daylight horror, epic scale, harsh sunlight' },
            { name: 'Federal Network', promptString: 'propaganda film style, scanlines, bright colors, satire, fascist uniform, broadcast quality' },
            { name: 'Brain Bug', promptString: 'slimy organic texture, massive, underground cave, grotesque, subsurface scattering, low key lighting' }
        ],
        posterPrompt: "Official movie poster for Starship Troopers (1997), propaganda style recruiting poster, Johnny Rico holding a rifle, 'JOIN THE MOBILE INFANTRY' text, hordes of arachnids in background, satirical fascist aesthetic --ar 2:3"
    },
    {
        id: 'transformers',
        title: 'Transformers',
        year: '2007',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Michael Bay',
        actors: ['Shia LaBeouf', 'Megan Fox', 'Josh Duhamel'],
        type: 'movie',
        styles: [
            { name: 'Transformation', promptString: 'complex mechanical parts shifting, metallic glare, sunset heavily saturated, Anamorphic lens flare, motion blur' },
            { name: 'City Battle', promptString: 'debris, explosions, giant robots, dust, destruction, low angle, telephoto compression' },
            { name: 'Bumblebee Garage', promptString: 'yellow camaro, scratched metal, expressive eyes, garage lighting, mist, atmospheric' }
        ],
        posterPrompt: "Official movie poster for Transformers (2007), Close up of Optimus Prime's mechanical eye, complex metal parts, sunset reflection in metal, 'TRANSFORMERS' bold title, lens flare, high budget sci-fi action --ar 2:3"
    },
    {
        id: 'deadpool',
        title: 'Deadpool',
        year: '2016',
        genres: ['Action', 'Adventure', 'Comedy'],
        director: 'Tim Miller',
        actors: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
        type: 'movie',
        styles: [
            { name: 'Maximum Effort', promptString: 'red spandex fabric texture, dirty suit, breaking fourth wall, comic book contrast, humor' },
            { name: 'Highway Fight', promptString: 'overcast day, slow motion violence, bullet casings, destruction, asphalt texture, high shutter speed' },
            { name: 'X-Mansion', promptString: 'grey sterile halls, emptiness, mockery, bright daylight, architectural symmetry, wide angle' }
        ],
        posterPrompt: "Official movie poster for Deadpool (2016), Deadpool lying seductively on a bearskin rug in front of a fireplace, 'DEADPOOL' title, satirical romantic comedy vibe, red and black suit textures --ar 2:3"
    },
    {
        id: 'john-wick-2',
        title: 'John Wick: Chapter 2',
        year: '2017',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Riccardo Scamarcio', 'Ian McShane'],
        type: 'movie',
        styles: [
            { name: 'Mirrors Room', promptString: 'multiple reflections, neon lights, confusion, sleek, museum art installation, blue and pink, kaleidoscope' },
            { name: 'Continental Lounge', promptString: 'warm gold lighting, leather chairs, drinking scotch, luxury, unspoken tension, cinematic lighting' },
            { name: 'Rome Catacombs', promptString: 'stone walls, dust, flashlight beams, shadows, tactical suit, ancient arches, rim lighting' }
        ],
        posterPrompt: "Official movie poster for John Wick: Chapter 2 (2017), Keanu Reeves being surrounded by many guns pointed at his head, calm expression, 'JOHN WICK CHAPTER 2' text, cool blue lighting --ar 2:3"
    },
    {
        id: 'john-wick-3',
        title: 'John Wick: Chapter 3 - Parabellum',
        year: '2019',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Halle Berry', 'Ian McShane'],
        type: 'movie',
        styles: [
            { name: 'Glass House', promptString: 'transparent walls, fighting silhouettes, pristine, shattering glass, cool blue light, emptiness' },
            { name: 'Continental Green', promptString: 'intense green neon, heavy armor, smoke, muzzle flashes, high contrast action, volumetric fog' },
            { name: 'Desert Walk', promptString: 'vast dunes, bright sun, black suit, high contrast, heat haze, wandering, telephoto lens' }
        ],
        posterPrompt: "Official movie poster for John Wick: Chapter 3 - Parabellum (2019), Keanu Reeves looking through rain-soaked glass, purple neon reflection, 'PARABELLUM' text, moody neo-noir --ar 2:3"
    },
    {
        id: 'die-hard',
        title: 'Die Hard',
        year: '1988',
        genres: ['Action', 'Thriller', 'Christmas'],
        director: 'John McTiernan',
        actors: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
        type: 'movie',
        styles: [
            { name: 'Air Duct', promptString: 'claustrophobic, silver metal, lighter flame, dirt on face, lighter reflection, macro shot' },
            { name: 'Nakatomi Plaza', promptString: 'skyscraper at night, broken glass, helicopter spotlight, 80s action, explosion, Anamorphic lens flare' },
            { name: 'Yippee Ki Yay', promptString: 'bloodied undershirt, desperate, machine gun, sweaty skin, Christmas tape, grimy texture' }
        ],
        posterPrompt: "Official movie poster for Die Hard (1988), Bruce Willis holding a gun next to the Nakatomi Plaza skyscraper building, 'DIE HARD' red bold font, explosion in background, classic 80s action poster --ar 2:3"
    },
    {
        id: 'matrix-reloaded',
        title: 'The Matrix Reloaded',
        year: '2003',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        type: 'movie',
        styles: [
            { name: 'Freeway Chase', promptString: 'green tint, speeding cars, agents jumping, concrete, motion blur, overcast, 360-degree shutter' },
            { name: 'Burly Brawl', promptString: 'hundreds of smiths, black suits, courtyard, surreal, CGI slickness, bowling pin sound, wide angle' },
            { name: 'Chateau Fight', promptString: 'weapons on walls, grand staircase, marble texture, slow motion, medieval weaponry, cinematic lighting' }
        ],
        posterPrompt: "Official movie poster for The Matrix Reloaded (2003), Neo stopping bullets in mid-air, Trinity and Morpheus ready to fight, green code background, 'THE MATRIX RELOADED' title, cyber-action style --ar 2:3"
    },
    {
        id: 'matrix-revolutions',
        title: 'The Matrix Revolutions',
        year: '2003',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        type: 'movie',
        styles: [
            { name: 'Super Brawl', promptString: 'rain, lightning, flying silhouettes, green shockwaves, dark sky, epic scale, fluid simulation' },
            { name: 'Machine City', promptString: 'biomechanical squids, red eyes, swarms, mechanical coldness, cables, deus ex machina, metallic' },
            { name: 'Club Hel', promptString: 'leather straps, bondage gear, red laser lighting, gravity defied, upside down, fetish aesthetic' }
        ],
        posterPrompt: "Official movie poster for The Matrix Revolutions (2003), Neo standing in rain with smith clones, lightning striking, epic finale green tint, 'THE MATRIX REVOLUTIONS' title --ar 2:3"
    },
    {
        id: 'casino-royale',
        title: 'Casino Royale',
        year: '2006',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Martin Campbell',
        actors: ['Daniel Craig', 'Eva Green', 'Judi Dench'],
        type: 'movie',
        styles: [
            { name: 'Parkour Chase', promptString: 'construction crane, dust, bright sunlight, sweat, raw physicality, height, handheld camera' },
            { name: 'Poker Tension', promptString: 'green felt, focus on eyes, chips, tuxedo, smoke, high stakes, warm lighting, macro shot' },
            { name: 'Venice Sinking', promptString: 'collapsing building, turbulent water, tragedy, iron bars, drowning, underwater distortion' }
        ],
        posterPrompt: "Official movie poster for Casino Royale (2006), Daniel Craig in tuxedo walking out of the ocean, or walking with Vesper Lynd, sleek modern spy aesthetic, '007' logo, cool blue color grading --ar 2:3"
    },
    {
        id: 'point-break',
        title: 'Point Break',
        year: '1991',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Kathryn Bigelow',
        actors: ['Patrick Swayze', 'Keanu Reeves', 'Gary Busey'],
        type: 'movie',
        styles: [
            { name: 'Ex-Presidents', promptString: 'president masks, sunset waves, bank robbery, adrenaline, wetsuits, beach vibe, handheld camera' },
            { name: 'Skydiving', promptString: 'blue sky, freefall, wide angle, freedom, adrenaline, holding hands, wind distortion' },
            { name: 'Foot Chase', promptString: 'Steadicam, alleyways, throwing dogs, shaky cam, pure kinetic energy, fence jumping' }
        ],
        posterPrompt: "Official movie poster for Point Break (1991), Patrick Swayze and Keanu Reeves surfing on a giant wave, bank robbery masks in background, 'POINT BREAK' title, sun-soaked action thriller style --ar 2:3"
    },
    {
        id: 'die-hard-vengeance',
        title: 'Die Hard with a Vengeance',
        year: '1995',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'John McTiernan',
        actors: ['Bruce Willis', 'Jeremy Irons', 'Samuel L. Jackson'],
        type: 'movie',
        styles: [
            { name: 'Harlem Heat', promptString: 'summer heat, bustling city, sandwich board, sweat, urban grit, yellow filter, heat haze' },
            { name: 'Gold Vault', promptString: 'heavy gold bars, underground, yellow sheen, greed, dump trucks, industrial lighting' },
            { name: 'Water Jugs', promptString: 'fountain, park setting, tension, bomb timer, puzzle, daylight, sharp focus' }
        ],
        posterPrompt: "Official movie poster for Die Hard with a Vengeance (1995), Bruce Willis and Samuel L. Jackson back to back in New York City streets, yellow taxi cabs, 'DIE HARD WITH A VENGEANCE' title, summer action thriller style --ar 2:3"
    },
    {
        id: 'commando',
        title: 'Commando',
        year: '1985',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Mark L. Lester',
        actors: ['Arnold Schwarzenegger', 'Rae Dawn Chong', 'Dan Hedaya'],
        type: 'movie',
        styles: [
            { name: 'Gear Up', promptString: 'montage style, weapons, black grease paint, muscles, vest, preparation, high contrast' },
            { name: 'Island Raid', promptString: 'explosions, tropical garden, one man army, mayhem, machine gun hip fire, saturated colors' },
            { name: 'Log Carry', promptString: 'lumberjack shirt, massive tree trunk, mountains, raw strength, 80s macho, telephoto lens' }
        ],
        posterPrompt: "Official movie poster for Commando (1985), Arnold Schwarzenegger shirtless holding a rocket launcher, explosions behind him, muscular action hero pose, 'COMMANDO' bold red title, 80s action movie aesthetic --ar 2:3"
    },
    {
        id: 'bad-boys',
        title: 'Bad Boys',
        year: '1995',
        genres: ['Action', 'Comedy', 'Crime'],
        director: 'Michael Bay',
        actors: ['Will Smith', 'Martin Lawrence', 'Lisa Boyle'],
        type: 'movie',
        styles: [
            { name: 'Porsche 911', promptString: 'miami streets, sunset, shiny black car, banter, Michael Bay 360, lens flare, saturated colors' },
            { name: 'Club Shootout', promptString: 'strobe lights, slow motion, falling debris, stylish violence, unbuttoned shirts, chaotic' },
            { name: 'Miami Heat', promptString: 'palm trees, vibrant orange and teal, sweat, sunglasses, cool attitude, warm color grading' }
        ],
        posterPrompt: "Official movie poster for Bad Boys (1995), Will Smith and Martin Lawrence in suits holding guns, black Porsche 911, Miami sunset with palm trees, 'BAD BOYS' title, orange and teal color grading, Michael Bay style --ar 2:3"
    },
    {
        id: 'total-recall',
        title: 'Total Recall',
        year: '1990',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
        director: 'Paul Verhoeven',
        actors: ['Arnold Schwarzenegger', 'Sharon Stone', 'Michael Ironside'],
        type: 'movie',
        styles: [
            { name: 'Mars Red', promptString: 'red atmosphere, domes, mutants, dusty, Verhoeven satire, mining colony, miniature effect' },
            { name: 'Reactor Start', promptString: 'blinding white light, terraforming, wind, ancient alien tech, melting eyes, practical effects' },
            { name: 'Rekall Chair', promptString: 'futuristic medical chair, red light, electrodes, mind trip, sci-fi lab, industrial design' }
        ],
        posterPrompt: "Official movie poster for Total Recall (1990), Arnold Schwarzenegger's face with red Mars background, futuristic cityscape, 'TOTAL RECALL' metallic chrome title, sci-fi action thriller style, Verhoeven aesthetic --ar 2:3"
    },
    {
        id: 'last-crusade',
        title: 'Indiana Jones and the Last Crusade',
        year: '1989',
        genres: ['Action', 'Adventure'],
        director: 'Steven Spielberg',
        actors: ['Harrison Ford', 'Sean Connery', 'Alison Doody'],
        type: 'movie',
        styles: [
            { name: 'Tank Chase', promptString: 'desert dust, nazi uniforms, gritty action, horse vs tank, rocky canyon, motion blur' },
            { name: 'Leap of Faith', promptString: 'invisible bridge, torchlight, abyss, ancient cave, wonder, painted texture, matte painting aesthetic' },
            { name: 'Grail Chamber', promptString: 'hundreds of cups, cobwebs, aging knight, gold vs clay, divine light, shafts of light' }
        ],
        posterPrompt: "Official movie poster for Indiana Jones and the Last Crusade (1989), Harrison Ford and Sean Connery father and son poses, Holy Grail artifact glowing, Nazi soldiers in background, 'INDIANA JONES AND THE LAST CRUSADE' title, Spielberg adventure style --ar 2:3"
    },
    {
        id: 'first-blood',
        title: 'Rambo: First Blood',
        year: '1982',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ted Kotcheff',
        actors: ['Sylvester Stallone', 'Brian Dennehy', 'Richard Crenna'],
        type: 'movie',
        styles: [
            { name: 'Forest Hunt', promptString: 'misty woods, survival, green army jacket, knife, booby traps, rain, damp texture' },
            { name: 'Town Fire', promptString: 'burning gas station, machine gun, night, rain, ptsd rage, destruction, pyrotechnics' },
            { name: 'Cave Rats', promptString: 'rats, darkness, torch light, wet rocks, claustrophobia, hiding, high contrast' }
        ],
        posterPrompt: "Official movie poster for Rambo: First Blood (1982), Sylvester Stallone in torn military jacket holding a knife, misty forest background, 'FIRST BLOOD' bold red title, gritty 80s action style --ar 2:3"
    },
    {
        id: 'kill-bill-vol-2',
        title: 'Kill Bill: Vol. 2',
        year: '2004',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Uma Thurman', 'David Carradine', 'Michael Madsen'],
        type: 'movie',
        styles: [
            { name: 'Coffin Escape', promptString: 'pitch black, flashlight beam, wood texture, claustrophobia, punches, dirt, extreme close up' },
            { name: 'Pai Mei Steps', promptString: 'white beard, stone steps, kung fu training, zoom snaps, 70s cinema style, bright sun' },
            { name: 'Trailer Fight', promptString: 'cramped interior, gritty, close quarters, intense dialogue, western feel, katana, wide angle' }
        ],
        posterPrompt: "Official movie poster for Kill Bill: Vol. 2 (2004), Uma Thurman as The Bride in white wedding dress, katana, David Carradine as Bill silhouette, 'KILL BILL VOL. 2' yellow and black title, Tarantino grindhouse style --ar 2:3"
    },
    {
        id: 'jurassic-park',
        title: 'Jurassic Park',
        year: '1993',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Steven Spielberg',
        actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
        type: 'movie',
        styles: [
            { name: 'T-Rex Breakout', promptString: 'rain, ripples in water, night, flares, massive dinosaur eye, goat leg, animatronic texture' },
            { name: 'Gallimimus Valley', promptString: 'green scenery, bright sun, running dinosaurs, sense of scale, flocking, CGI integration' },
            { name: 'Raptor Kitchen', promptString: 'stainless steel, reflection, stalking, silence, terror, condensation, claustrophobic' }
        ],
        posterPrompt: "Official movie poster for Jurassic Park (1993), T-Rex silhouette breaking through jungle foliage, 'JURASSIC PARK' red logo, black background, classic Spielberg adventure, iconic dinosaur movie aesthetic --ar 2:3"
    },
    {
        id: 'titanic',
        title: 'Titanic',
        year: '1997',
        genres: ['Drama', 'Romance'],
        director: 'James Cameron',
        actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
        type: 'movie',
        styles: [
            { name: 'Bow of Ship', promptString: 'sunset, embrace, endless ocean, king of the world, romantic golden hour, wind, panoramic' },
            { name: 'Grand Staircase', promptString: 'opulence, wood clock, flooding water, destruction of beauty, electric sparks, chaotic motion' },
            { name: 'Steerage Party', promptString: 'warm irish lighting, spinning, beer, sweat, joy, motion blur, wide angle' }
        ],
        posterPrompt: "Official movie poster for Titanic (1997), Leonardo DiCaprio and Kate Winslet embracing at the bow of the ship, sunset over ocean, 'TITANIC' elegant title, romantic epic tragedy aesthetic, James Cameron style --ar 2:3"
    },
    {
        id: 'avatar',
        title: 'Avatar',
        year: '2009',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'James Cameron',
        actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        type: 'movie',
        styles: [
            { name: 'Pandora Night', promptString: 'bioluminescence, glowing plants, blue skin, floating seeds, magical forest, neon, 3D depth' },
            { name: 'Floating Mountains', promptString: 'vines, waterfalls in sky, clouds, immense scale, 3d depth, green and blue, aerial shot' },
            { name: 'AMP Suit', promptString: 'mechanical walker, jungle destruction, glass cockpit, industrial grey, heavy metal, photorealistic CGI' }
        ],
        posterPrompt: "Official movie poster for Avatar (2009), Jake Sully as a Na'vi warrior on a banshee flying over Pandora, bioluminescent floating mountains, blue alien world, 'AVATAR' title with alien font, James Cameron epic style --ar 2:3"
    },
    {
        id: 'the-avengers',
        title: 'The Avengers',
        year: '2012',
        genres: ['Action', 'Sci-Fi'],
        director: 'Joss Whedon',
        actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
        type: 'movie',
        styles: [
            { name: 'Circle Shot', promptString: 'heroes assembled, new york rubble, confident stances, comic book splash page, daylight, parallax camera' },
            { name: 'Helicarrier', promptString: 'clouds, high tech turbines, glass bridge, blue sky, wide shot, industrial design' },
            { name: 'Stark Tower', promptString: 'iron man suit up, sleek architecture, city view, invasion portal, blue beam, high tech' }
        ],
        posterPrompt: "Official movie poster for The Avengers (2012), all heroes assembled in circle formation, Iron Man, Captain America, Thor, Hulk, Black Widow, Hawkeye, New York City alien invasion backdrop, 'THE AVENGERS' title, Marvel Cinematic Universe style --ar 2:3"
    },
    {
        id: 'the-terminator',
        title: 'The Terminator',
        year: '1984',
        genres: ['Action', 'Sci-Fi'],
        director: 'James Cameron',
        actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
        type: 'movie',
        styles: [
            { name: 'Tech Noir Blue', promptString: 'smoky club atmosphere, lasers, blue lighting, 80s punk hair, sweat, dark shadows, James Cameron' },
            { name: 'Future War', promptString: 'apocalyptic rubble, purple lasers, chrome endoskeletons, blue night, flash forward sequence, gritty' },
            { name: 'Los Angeles Night', promptString: 'gritty urban street, sodium vapor lights, trash, wet pavement, neo-noir, menacing, film grain' }
        ],
        posterPrompt: "Official movie poster for The Terminator (1984), Arnold Schwarzenegger as the Terminator with red glowing eye, chrome endoskeleton visible, 'THE TERMINATOR' metallic title, dark blue cyberpunk future, James Cameron sci-fi action --ar 2:3"
    },
    {
        id: 'robocop',
        title: 'RoboCop',
        year: '1987',
        genres: ['Action', 'Sci-Fi'],
        director: 'Paul Verhoeven',
        actors: ['Peter Weller', 'Nancy Allen', 'Dan O\'Herlihy'],
        type: 'movie',
        styles: [
            { name: 'Detroit Rust', promptString: 'industrial decay, rust, steam, Verhoeven satire, daytime grit, broken glass, steel mill' },
            { name: 'Medi-Break', promptString: 'scanlines, TV static, fake commercial aesthetic, bright colors, satirical news, broadcast quality' },
            { name: 'Prime Directive HUD', promptString: 'green pixelated vector graphics, scanlines, digital interference, machine vision POV, low resolution' }
        ],
        posterPrompt: "Official movie poster for RoboCop (1987), chrome cyborg police officer aiming gun, Detroit cityscape in ruins, 'ROBOCOP' metallic title, blue and silver color scheme, Verhoeven satire style --ar 2:3"
    },
    {
        id: 'lethal-weapon',
        title: 'Lethal Weapon',
        year: '1987',
        genres: ['Action', 'Crime', 'Thriller', 'Christmas'],
        director: 'Richard Donner',
        actors: ['Mel Gibson', 'Danny Glover', 'Gary Busey'],
        type: 'movie',
        styles: [
            { name: 'Saxophone Noir', promptString: 'wet city streets, neon reflection, lonely atmosphere, cigarette smoke, bluesy, melancholic night, bokeh' },
            { name: 'California Dusk', promptString: 'sunset over LA, palm trees, warm orange glow, heat haze, buddy cop vibe, hazy atmosphere' },
            { name: 'Explosive Action', promptString: 'fireball, debris, stunt work, Shane Black energy, chaotic movement, smoke, practical effects' }
        ],
        posterPrompt: "Official movie poster for Lethal Weapon (1987), Mel Gibson and Danny Glover back to back with guns, Los Angeles sunset, 'LETHAL WEAPON' bold title, buddy cop action style --ar 2:3"
    },
    {
        id: 'escape-from-new-york',
        title: 'Escape from New York',
        year: '1981',
        genres: ['Action', 'Sci-Fi'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Lee Van Cleef', 'Ernest Borgnine'],
        type: 'movie',
        styles: [
            { name: 'Grid Map', promptString: 'green wireframe computer graphics, retrofuturism, glowing lines, 80s CGI, tactical display, CRT texture' },
            { name: 'Manhattan Ruins', promptString: 'destroyed city, burning barrels, dark shadows, urban wasteland, graffiti, Carpenter synth atmosphere' },
            { name: 'Chandelier Car', promptString: 'bizarre lighting, lens flares, dirty luxury, punk aesthetic, night ride, weird gangs, surreal' }
        ],
        posterPrompt: "Official movie poster for Escape from New York (1981), Kurt Russell as Snake Plissken with eyepatch, destroyed Manhattan skyline with Statue of Liberty, 'ESCAPE FROM NEW YORK' title, dark dystopian John Carpenter style --ar 2:3"
    },
    {
        id: 'bloodsport',
        title: 'Bloodsport',
        year: '1988',
        genres: ['Action', 'Biography', 'Drama'],
        director: 'Newt Arnold',
        actors: ['Jean-Claude Van Damme', 'Donald Gibb', 'Leah Ayres'],
        type: 'movie',
        styles: [
            { name: 'Kumite Sweat', promptString: 'dark arena, spotlight, oiled skin, muscle definition, bruises, intense focus, underground fight' },
            { name: 'Flashback Haze', promptString: 'soft focus, dreamlike, training sequence, golden hour, martial arts discipline, sunlight, diffusion filter' },
            { name: 'Hong Kong Neon', promptString: 'narrow alleys, bright neon signs, wet stone, crowded, mysterious atmosphere, night market' }
        ],
        posterPrompt: "Official movie poster for Bloodsport (1988), Jean-Claude Van Damme in fighting stance, underground Kumite arena, 'BLOODSPORT' bold red title, martial arts action style --ar 2:3"
    },
    {
        id: 'big-trouble',
        title: 'Big Trouble in Little China',
        year: '1986',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Kim Cattrall', 'Dennis Dun'],
        type: 'movie',
        styles: [
            { name: 'Chinatown Magic', promptString: 'neon green lightning, ancient sorcery, smoke, colorful robes, mystical temple, John Carpenter' },
            { name: 'Pork Chop Express', promptString: 'rainy highway, truck cab interior, CB radio, dark night, truckers view, wet asphalt, bokeh' },
            { name: 'Creature Feature', promptString: 'practical effects, slime, monster makeup, grotesque, 80s fantasy horror, elaborate costumes' }
        ],
        posterPrompt: "Official movie poster for Big Trouble in Little China (1986), Kurt Russell as Jack Burton with green lightning bolts, mystical Chinatown background, 'BIG TROUBLE IN LITTLE CHINA' title, John Carpenter fantasy adventure style --ar 2:3"
    },
    // HORROR CLASSICS EXPANSION
    {
        id: 'the-thing',
        title: 'The Thing',
        year: '1982',
        genres: ['Horror', 'Mystery', 'Sci-Fi'],
        director: 'John Carpenter',
        actors: ['Kurt Russell', 'Wilford Brimley', 'Keith David'],
        type: 'movie',
        styles: [
            { name: 'Antarctic White', promptString: 'blinding white snow, blue shadows, isolation, flare signal, Panavision anamorphic, sub-zero atmosphere' },
            { name: 'Body Horror', promptString: 'twisting flesh, tentacles, practical effects gore, slime, grotesque transformation, visceral texture' },
            { name: 'Flamethrower Glow', promptString: 'orange firelight in darkness, snow particles, silhouette, high contrast, heat distortion, survival horror' }
        ],
        posterPrompt: "Official movie poster for The Thing (1982), silhouette of man with light beams coming from face, Antarctic research station, 'THE THING' title, blue and white frozen color palette, John Carpenter horror --ar 2:3"
    },
    {
        id: 'nightmare-elm-street',
        title: 'A Nightmare on Elm Street',
        year: '1984',
        genres: ['Horror'],
        director: 'Wes Craven',
        actors: ['Heather Langenkamp', 'Johnny Depp', 'Robert Englund'],
        type: 'movie',
        styles: [
            { name: 'Boiler Room Red', promptString: 'intense red gel lighting, steam, industrial pipes, wet metal, claustrophobic, surreal nightmare' },
            { name: 'Dream Logic', promptString: 'melting floor, defying gravity, rubber wall stretching, soft focus, distorted reality, uneasiness' },
            { name: 'Razor Claw', promptString: 'macro shot of metal blades, sparks, dirty sweater texture, menacing shadow, hard lighting, fear' }
        ],
        posterPrompt: "Official movie poster for A Nightmare on Elm Street (1984), Freddy Krueger's razor glove above sleeping teen, red and green striped sweater, 'A NIGHTMARE ON ELM STREET' horror title, dreamlike surreal atmosphere --ar 2:3"
    },
    {
        id: 'hellraiser',
        title: 'Hellraiser',
        year: '1987',
        genres: ['Horror', 'Thriller'],
        director: 'Clive Barker',
        actors: ['Andrew Robinson', 'Clare Higgins', 'Ashley Laurence'],
        type: 'movie',
        styles: [
            { name: 'Cenobite Blue', promptString: 'cold blue moonlight, fog, leather fetish gear, hooks, chains, gothic industrial, high contrast' },
            { name: 'Flesh & Blood', promptString: 'flayed skin, muscle texture, visceral gore, wetness, practical effects, body horror masterpiece' },
            { name: 'Puzzle Box Gold', promptString: 'lacquered wood, intricate gold inlay, magical glow, macro detail, supernatural object, mysterious' }
        ],
        posterPrompt: "Official movie poster for Hellraiser (1987), Pinhead cenobite with grid pattern face and pins, golden puzzle box, 'HELLRAISER' title, blue gothic horror aesthetic, Clive Barker nightmare --ar 2:3"
    },
    {
        id: 'the-fly',
        title: 'The Fly',
        year: '1986',
        genres: ['Drama', 'Horror', 'Sci-Fi'],
        director: 'David Cronenberg',
        actors: ['Jeff Goldblum', 'Geena Davis', 'John Getz'],
        type: 'movie',
        styles: [
            { name: 'Telepod Lab', promptString: 'sterile scientific equipment, computer monitors, cold lighting, condensation, industrial loft, ominous hum' },
            { name: 'Insect Transformation', promptString: 'prosthetic makeup, peeling skin, goo, coarse hair, tragedy, visceral body horror, extreme close up' },
            { name: 'Acid Slime', promptString: 'dissolving organic matter, bubbling liquid, gross textures, dripping slime, nausea, detailed practical effects' }
        ],
        posterPrompt: "Official movie poster for The Fly (1986), Jeff Goldblum transforming into fly creature, telepod chamber, 'THE FLY' title, body horror tragedy, David Cronenberg sci-fi style --ar 2:3"
    },
    {
        id: 'evil-dead-2',
        title: 'Evil Dead II',
        year: '1987',
        genres: ['Comedy', 'Horror'],
        director: 'Sam Raimi',
        actors: ['Bruce Campbell', 'Sarah Berry', 'Dan Hicks'],
        type: 'movie',
        styles: [
            { name: 'Raimi Cam', promptString: 'extreme wide angle, dutch tilt, rushing camera movement, motion blur, kinetic energy, frantic horror' },
            { name: 'Deadite Moon', promptString: 'spooky woods, full moon, mist, twisted branches, blue backlight, comic book horror aesthetic' },
            { name: 'Splatterhouse', promptString: 'excessive blood spray, colorful lighting, chainsaw, shotgun, cabin interior, manic energy' }
        ],
        posterPrompt: "Official movie poster for Evil Dead II (1987), Bruce Campbell with chainsaw hand and shotgun, possessed cabin with evil spirits, 'EVIL DEAD II' horror comedy title, Sam Raimi splatter style --ar 2:3"
    },
    {
        id: 'poltergeist',
        title: 'Poltergeist',
        year: '1982',
        genres: ['Horror', 'Thriller'],
        director: 'Tobe Hooper',
        actors: ['JoBeth Williams', 'Heather O\'Rourke', 'Craig T. Nelson'],
        type: 'movie',
        styles: [
            { name: 'TV Static', promptString: 'close up CRT pixels, white noise, blue glow on face, strobe effect, supernatural communication' },
            { name: 'Suburban Eerie', promptString: 'perfect neighborhood, eerie silence, wind blowing leaves, mundane horror, spielbergian light beams' },
            { name: 'Spectral Light', promptString: 'blinding white portal, spirits, windstorm indoors, debris, ectoplasm, visual effects extravaganza' }
        ],
        posterPrompt: "Official movie poster for Poltergeist (1982), little girl in front of static TV screen, haunted suburban house, 'POLTERGEIST' title, Spielberg supernatural horror style --ar 2:3"
    },
    {
        id: 're-animator',
        title: 'Re-Animator',
        year: '1985',
        genres: ['Comedy', 'Horror', 'Sci-Fi'],
        director: 'Stuart Gordon',
        actors: ['Jeffrey Combs', 'Bruce Abbott', 'Barbara Crampton'],
        type: 'movie',
        styles: [
            { name: 'Reagent Green', promptString: 'glowing neon green liquid, syringe, medical lab, dark shadows, mad scientist vibe, vibrant colors' },
            { name: 'Morgue Cold', promptString: 'stainless steel, tiles, fluorescent flicker, dead bodies, blood splatter, clinical horror' },
            { name: 'Lovecraft Madness', promptString: 'wide eyed insanity, sweat, chaotic violence, grotesque mutations, dark humor, practical gore' }
        ],
        posterPrompt: "Official movie poster for Re-Animator (1985), Jeffrey Combs holding glowing green syringe, reanimated corpses, 'RE-ANIMATOR' title, 80s horror comedy cult classic style --ar 2:3"
    },
    {
        id: 'videodrome',
        title: 'Videodrome',
        year: '1983',
        genres: ['Horror', 'Sci-Fi', 'Thriller'],
        director: 'David Cronenberg',
        actors: ['James Woods', 'Debbie Harry', 'Sonja Smits'],
        type: 'movie',
        styles: [
            { name: 'Living VHS', promptString: 'breathing television, veins, bio-mechanical fusion, analog tape texture, surreal nightmare' },
            { name: 'Flesh Gun', promptString: 'hand merging with pistol, organic metal, body horror, slime, disturbing transformation, cronenberg' },
            { name: 'Signal Static', promptString: 'distorted video signal, scanlines, glitch art, mind control, paranoia, gritty low-fi aesthetic' }
        ],
        posterPrompt: "Official movie poster for Videodrome (1983), James Woods with hand merging into TV screen, flesh and technology, 'VIDEODROME' title, Cronenberg body horror style --ar 2:3"
    },
    {
        id: 'the-lost-boys',
        title: 'The Lost Boys',
        year: '1987',
        genres: ['Comedy', 'Horror'],
        director: 'Joel Schumacher',
        actors: ['Jason Patric', 'Corey Haim', 'Dianne Wiest'],
        type: 'movie',
        styles: [
            { name: 'Boardwalk Neon', promptString: 'santa cruz fairground, sunset, neon tubes, fog, leather jackets, 80s cool, purple and pink' },
            { name: 'Vampire Flight', promptString: 'floating outside window, fog, moonlight, defiance of gravity, supernatural POV, wind' },
            { name: 'Lair Candlelight', promptString: 'cave interior, hundreds of candles, jim morrison poster, grunge luxury, warm glow, shadows' }
        ],
        posterPrompt: "Official movie poster for The Lost Boys (1987), vampire gang flying in moonlight, Santa Cruz boardwalk, 'THE LOST BOYS' title, 80s teen horror style --ar 2:3"
    },
    {
        id: 'american-werewolf',
        title: 'An American Werewolf in London',
        year: '1981',
        genres: ['Comedy', 'Horror'],
        director: 'John Landis',
        actors: ['David Naughton', 'Jenny Agutter', 'Griffin Dunne'],
        type: 'movie',
        styles: [
            { name: 'Moors Mist', promptString: 'english countryside, heavy fog, full moon, blue night, isolation, eerie silence, gothic atmosphere' },
            { name: 'Bone Cracking', promptString: 'mid-transformation, stretching skin, hair growth, agony, bright room, rick baker makeup detail' },
            { name: 'Undead Rot', promptString: 'decaying ghosts, ripped flesh, practical makeup, dark humor, theater lighting, gruesome' }
        ],
        posterPrompt: "Official movie poster for An American Werewolf in London (1981), werewolf transformation scene, foggy English moors, full moon, 'AN AMERICAN WEREWOLF IN LONDON' title, horror comedy --ar 2:3"
    },
    {
        id: 'scream',
        title: 'Scream',
        year: '1996',
        genres: ['Horror', 'Mystery'],
        director: 'Wes Craven',
        actors: ['Neve Campbell', 'Courteney Cox', 'David Arquette'],
        type: 'movie',
        styles: [
            { name: 'Suburban Night', promptString: 'large house, porch lights, dark lawn, suspense, 90s thriller aesthetic, anamorphic lens' },
            { name: 'Ghostface White', promptString: 'white mask, black robe, sharp knife reflection, sudden movement, flashlight beam, terror' },
            { name: 'Dutch Angle', promptString: 'tilted camera, disorientation, panic, close up on phone, distorted reflection, fisheye lens' }
        ],
        posterPrompt: "Official movie poster for Scream (1996), Ghostface mask with knife, suburban house at night, 'SCREAM' title, Wes Craven 90s slasher style --ar 2:3"
    },
    {
        id: 'silence-of-lambs',
        title: 'The Silence of the Lambs',
        year: '1991',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Jonathan Demme',
        actors: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
        type: 'movie',
        styles: [
            { name: 'Lecter Stare', promptString: 'extreme close up, breaking fourth wall, unblinking eyes, shallow depth of field, psychological horror' },
            { name: 'Dungeon Gloom', promptString: 'stone walls, brick, darkness, shadow bars, despair, cold atmosphere, industrial lighting' },
            { name: 'Night Vision Green', promptString: 'grainy green phosphor pov, darkness, heavy breathing, claustrophobia, stalking, intense tension' }
        ],
        posterPrompt: "Official movie poster for The Silence of the Lambs (1991), death's head moth covering mouth, Jodie Foster and Anthony Hopkins, 'THE SILENCE OF THE LAMBS' title, psychological thriller style --ar 2:3"
    },
    {
        id: 'candyman',
        title: 'Candyman',
        year: '1992',
        genres: ['Horror', 'Thriller'],
        director: 'Bernard Rose',
        actors: ['Virginia Madsen', 'Xander Berkeley', 'Tony Todd'],
        type: 'movie',
        styles: [
            { name: 'Urban Decay', promptString: 'graffiti, peeling paint, concrete housing projects, bleak atmosphere, overhead fluorescent light' },
            { name: 'Bees & Honey', promptString: 'covered in bees, dripping honey, amber warm lighting, surreal nightmare, macro texture' },
            { name: 'Mirror Myth', promptString: 'bathroom mirror, reflection, candlelight, bloody hook, summoning ritual, dread' }
        ],
        posterPrompt: "Official movie poster for Candyman (1992), Tony Todd as Candyman with hook hand, bees swarming, urban housing projects, 'CANDYMAN' title, gothic urban horror style --ar 2:3"
    },
    {
        id: 'dracula',
        title: 'Bram Stoker\'s Dracula',
        year: '1992',
        genres: ['Horror', 'Romance'],
        director: 'Francis Ford Coppola',
        actors: ['Gary Oldman', 'Winona Ryder', 'Anthony Hopkins'],
        type: 'movie',
        styles: [
            { name: 'Gothic Romance', promptString: 'lush velvet, deep reds, gold, candlelit shadows, theatrical lighting, old hollywood effects' },
            { name: 'Shadow Play', promptString: 'independent shadows, expressionist lighting, silhouettes, fog, supernatural atmosphere, eerie' },
            { name: 'Blood Red', promptString: 'blood fountain, scarlet robes, saturated red filter, biological organic shapes, microscopic cells' }
        ],
        posterPrompt: "Official movie poster for Bram Stoker's Dracula (1992), Gary Oldman as Dracula in armor, Winona Ryder, red velvet and gold, 'BRAM STOKER'S DRACULA' title, Coppola gothic romance style --ar 2:3"
    },
    {
        id: 'misery',
        title: 'Misery',
        year: '1990',
        genres: ['Drama', 'Thriller'],
        director: 'Rob Reiner',
        actors: ['James Caan', 'Kathy Bates', 'Richard Farnsworth'],
        type: 'movie',
        styles: [
            { name: 'Claustrophobia', promptString: 'tight framing, bedroom interior, low angle, sweat, captivity, helplessness, sterile light' },
            { name: 'Winter Isolation', promptString: 'blizzard outside window, white out, cold blue light, buried in snow, hopeless landscape' },
            { name: 'Sledgehammer', promptString: 'low angle menace, heavy object, tension, domestic setting turned horrific, sharp focus' }
        ],
        posterPrompt: "Official movie poster for Misery (1990), Kathy Bates with menacing smile, James Caan in bed, snowy isolation, 'MISERY' title, psychological thriller style --ar 2:3"
    },
    {
        id: 'blair-witch',
        title: 'The Blair Witch Project',
        year: '1999',
        genres: ['Horror', 'Mystery'],
        director: 'Daniel Myrick, Eduardo Sánchez',
        actors: ['Heather Donahue', 'Michael C. Williams', 'Joshua Leonard'],
        type: 'movie',
        styles: [
            { name: 'Hi8 Camcorder', promptString: 'video noise, date stamp, handheld shake, direct flash lighting, low resolution, found footage' },
            { name: 'Flashlight Terror', promptString: 'beam cutting through darkness, running, motion blur, panic, breathing fog, terrifying unseen' },
            { name: 'Stick Figures', promptString: 'hanging wooden symbols, autumn forest, bleak daylight, grainy 16mm b&w texture, ominous' }
        ],
        posterPrompt: "Official movie poster for The Blair Witch Project (1999), found footage camera frame, dark forest with stick figures, 'THE BLAIR WITCH PROJECT' title, lo-fi found footage horror style --ar 2:3"
    },
    {
        id: 'event-horizon',
        title: 'Event Horizon',
        year: '1997',
        genres: ['Horror', 'Sci-Fi', 'Thriller'],
        director: 'Paul W.S. Anderson',
        actors: ['Laurence Fishburne', 'Sam Neill', 'Kathleen Quinlan'],
        type: 'movie',
        styles: [
            { name: 'Gothic Spaceship', promptString: 'industrial cathedral architecture, green lighting, steam, spikes, claustrophobia, tech horror' },
            { name: 'Gravity Drive', promptString: 'spinning rings, black hole core, blinding light, magnetic distortion, mechanical intricate detail' },
            { name: 'Hell Flash', promptString: 'subliminal gore frames, red wash, torture, chaos, motion blur, scream, nightmare vision' }
        ],
        posterPrompt: "Official movie poster for Event Horizon (1997), spaceship with hellish gothic interior, Sam Neill with bleeding eyes, 'EVENT HORIZON' title, sci-fi horror style --ar 2:3"
    },
    {
        id: 'jacobs-ladder',
        title: 'Jacob\'s Ladder',
        year: '1990',
        genres: ['Drama', 'Horror', 'Mystery'],
        director: 'Adrian Lyne',
        actors: ['Tim Robbins', 'Elizabeth Peña', 'Danny Aiello'],
        type: 'movie',
        styles: [
            { name: 'Subway Blur', promptString: 'motion blur, shaking head effect, vibrating reality, fluorescent lights, urban paranoia' },
            { name: 'Hospital Nightmare', promptString: 'dirty tiles, blood on floor, broken gurney, wheel POV, industrial decay, despair' },
            { name: 'Strobe Demon', promptString: 'strobe lighting, club atmosphere, creature wings, disorientation, fever dream, sweat' }
        ],
        posterPrompt: "Official movie poster for Jacob's Ladder (1990), Tim Robbins with distorted face, Vietnam flashbacks, stairway to heaven, 'JACOB'S LADDER' title, psychological horror style --ar 2:3"
    },
    {
        id: 'from-dusk-till-dawn',
        title: 'From Dusk Till Dawn',
        year: '1996',
        genres: ['Action', 'Crime', 'Horror'],
        director: 'Robert Rodriguez',
        actors: ['Harvey Keitel', 'George Clooney', 'Juliette Lewis'],
        type: 'movie',
        styles: [
            { name: 'Grindhouse Dust', promptString: 'desert heat, sweat, grainy film stock, yellow tint, neon bar sign, road movie aesthetic' },
            { name: 'Snake Dance', promptString: 'warm stage lighting, hypnotic, curves, python, mesmerized crowd, slow motion, sultry' },
            { name: 'Vampire Gore', promptString: 'melting faces, exploding bodies, green blood, chaotic action, practical effects, creature feature' }
        ],
        posterPrompt: "Official movie poster for From Dusk Till Dawn (1996), George Clooney and Quentin Tarantino with guns, vampire dancers, Titty Twister bar neon sign, 'FROM DUSK TILL DAWN' title, Rodriguez grindhouse style --ar 2:3"
    },
    {
        id: 'sleepy-hollow',
        title: 'Sleepy Hollow',
        year: '1999',
        genres: ['Fantasy', 'Horror', 'Mystery'],
        director: 'Tim Burton',
        actors: ['Johnny Depp', 'Christina Ricci', 'Miranda Richardson'],
        type: 'movie',
        styles: [
            { name: 'Hammer Haze', promptString: 'desaturated colors, grey sky, fog, twisting trees, gothic atmosphere, monochromatic palette' },
            { name: 'Horseman Speed', promptString: 'motion blur, cape billowing, black horse, sword flash, dynamic action, low angle' },
            { name: 'Bleeding Tree', promptString: 'gnarled wood texture, red blood sap, spooky forest, studio set aesthetic, tim burton style' }
        ],
        posterPrompt: "Official movie poster for Sleepy Hollow (1999), Johnny Depp as Ichabod Crane, Headless Horseman on black horse, twisted dead trees, 'SLEEPY HOLLOW' gothic title, Tim Burton horror style --ar 2:3"
    },
    // CHRISTMAS CLASSICS
    {
        id: 'its-a-wonderful-life',
        title: 'It\'s a Wonderful Life',
        year: '1946',
        genres: ['Drama', 'Family', 'Fantasy', 'Christmas'],
        director: 'Frank Capra',
        actors: ['James Stewart', 'Donna Reed', 'Lionel Barrymore'],
        type: 'movie',
        styles: [
            { name: 'Bedford Snow', promptString: 'falling snow, black and white film stock, soft focus, dreamlike, small town america, night street' },
            { name: 'Pottersville Noir', promptString: 'high contrast, neon signs, dark shadows, crowded streets, chaotic atmosphere, film noir aesthetic' },
            { name: 'Zuzu\'s Petals', promptString: 'macro close up, sentimental lighting, soft bloom, magical realism, warm glow (b&w)' }
        ],
        posterPrompt: "Official movie poster for It's a Wonderful Life (1946), James Stewart embracing family, snowy Bedford Falls, black and white classic, 'IT'S A WONDERFUL LIFE' elegant title, Frank Capra heartwarming style --ar 2:3"
    },
    {
        id: 'home-alone',
        title: 'Home Alone',
        year: '1990',
        genres: ['Comedy', 'Family', 'Christmas'],
        director: 'Chris Columbus',
        actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'],
        type: 'movie',
        styles: [
            { name: 'McCallister House', promptString: 'warm interior lighting, red and green decor, festive clutter, wide angle lens, symmetrical composition' },
            { name: 'Wet Bandits', promptString: 'cold blue outdoor night, slapstick action, motion blur, icy pavement, steam breath, cartoon violence' },
            { name: 'Battle Plan', promptString: 'top down view of blueprints, crayon aesthetic, macro details, childhood wonder, mischievous lighting' }
        ],
        posterPrompt: "Official movie poster for Home Alone (1990), Macaulay Culkin with hands on face screaming, McCallister house decorated for Christmas, 'HOME ALONE' title, 90s family comedy style --ar 2:3"
    },
    {
        id: 'elf',
        title: 'Elf',
        year: '2003',
        genres: ['Comedy', 'Family', 'Fantasy', 'Christmas'],
        director: 'Jon Favreau',
        actors: ['Will Ferrell', 'James Caan', 'Bob Newhart'],
        type: 'movie',
        styles: [
            { name: 'North Pole', promptString: 'forced perspective, Rankin/Bass stop motion aesthetic, saturated primary colors, snowy landscape, magical' },
            { name: 'NYC Wonder', promptString: 'low angle skyscrapers, city lights, christmas decorations, wide angle, child-like POV, depth of field' },
            { name: 'Candy Cane Forest', promptString: 'swirling patterns, pastel colors, gumdrop texture, fantastical set design, bright high key lighting' }
        ],
        posterPrompt: "Official movie poster for Elf (2003), Will Ferrell in green elf costume in New York City, Empire State Building, snow falling, 'ELF' title, Christmas comedy style --ar 2:3"
    },
    {
        id: 'christmas-vacation',
        title: 'National Lampoon\'s Christmas Vacation',
        year: '1989',
        genres: ['Comedy', 'Christmas'],
        director: 'Jeremiah S. Chechik',
        actors: ['Chevy Chase', 'Beverly D\'Angelo', 'Randy Quaid'],
        type: 'movie',
        styles: [
            { name: '25,000 Lights', promptString: 'blinding lens flare, extreme brightness, suburban night, glowing halo, electrical sparks, comedic excess' },
            { name: 'Attic Memories', promptString: 'dust motes, shafts of light, old film projector look, nostalgic warmth, sentimental close up' },
            { name: 'Squirrel Chaos', promptString: 'motion blur, destruction, debris flying, wide angle distortion, chaotic energy, messy interior' }
        ],
        posterPrompt: "Official movie poster for National Lampoon's Christmas Vacation (1989), Chevy Chase tangled in Christmas lights on roof, Griswold house lit up, 'CHRISTMAS VACATION' title, holiday comedy style --ar 2:3"
    },
    {
        id: 'miracle-34th-street',
        title: 'Miracle on 34th Street',
        year: '1947',
        genres: ['Comedy', 'Drama', 'Family', 'Christmas'],
        director: 'George Seaton',
        actors: ['Edmund Gwenn', 'Maureen O\'Hara', 'Natalie Wood'],
        type: 'movie',
        styles: [
            { name: 'Macy\'s Parade', promptString: 'black and white, crowd texture, giant balloons, urban canyon, vintage nyc, documentary style' },
            { name: 'Courtroom Drama', promptString: 'indoor lighting, wood paneling, serious expressions, mail bags piling up, deep focus' },
            { name: 'Believe', promptString: 'soft focus on face, twinkle in eye, santa beard texture, heartwarming glow, magical realism' }
        ],
        posterPrompt: "Official movie poster for Miracle on 34th Street (1947), Edmund Gwenn as Kris Kringle with Natalie Wood, Macy's department store, black and white classic, 'MIRACLE ON 34TH STREET' title --ar 2:3"
    },
    {
        id: 'nightmare-before-christmas',
        title: 'The Nightmare Before Christmas',
        year: '1993',
        genres: ['Animation', 'Family', 'Fantasy', 'Christmas'],
        director: 'Henry Selick',
        actors: ['Danny Elfman', 'Chris Sarandon', 'Catherine O\'Hara'],
        type: 'movie',
        styles: [
            { name: 'Halloween Town', promptString: 'german expressionism, twisted architecture, long shadows, monochromatic with orange pop, stop motion texture' },
            { name: 'Christmas Town', promptString: 'vibrant colors, snow texture, round shapes, warm glow, carousel lighting, festive joy' },
            { name: 'Spiral Hill', promptString: 'iconic silhouette against yellow moon, curling cliff, burtonesque style, gothic fantasy, wide shot' }
        ],
        posterPrompt: "Official movie poster for The Nightmare Before Christmas (1993), Jack Skellington on spiral hill against giant moon, Halloween Town, 'THE NIGHTMARE BEFORE CHRISTMAS' title, Tim Burton stop motion style --ar 2:3"
    },
    {
        id: 'christmas-story',
        title: 'A Christmas Story',
        year: '1983',
        genres: ['Comedy', 'Family', 'Christmas'],
        director: 'Bob Clark',
        actors: ['Peter Billingsley', 'Melinda Dillon', 'Darren McGavin'],
        type: 'movie',
        styles: [
            { name: 'Leg Lamp', promptString: 'soft glow of fringe, stocking texture, fishnet, living room window, warm nostalgic lighting, obsession' },
            { name: 'Red Ryder BB', promptString: 'dream sequence, heroic pose, cowboy aesthetic, soft vignette, childhood fantasy' },
            { name: 'Frozen Pole', promptString: 'cold winter grey, playground texture, close up on tongue, panic, icy metal, comedic framing' }
        ],
        posterPrompt: "Official movie poster for A Christmas Story (1983), Ralphie in pink bunny suit and Red Ryder BB gun, leg lamp, 'A CHRISTMAS STORY' title, nostalgic holiday comedy style --ar 2:3"
    },
    {
        id: 'white-christmas',
        title: 'White Christmas',
        year: '1954',
        genres: ['Musical', 'Romance', 'Christmas'],
        director: 'Michael Curtiz',
        actors: ['Bing Crosby', 'Danny Kaye', 'Rosemary Clooney'],
        type: 'movie',
        styles: [
            { name: 'Technicolor Stage', promptString: 'vibrant saturated red and green, technicolor process, stage lighting, soundstage aesthetic, theatrical' },
            { name: 'Vermont Inn', promptString: 'cozy fireplace, wood texture, falling snow outside window, warm amber interior, romantic' },
            { name: 'Blue Dress', promptString: 'rich blue fabric, fan dance, spotlight, glamour photography, lush textures, 50s elegance' }
        ],
        posterPrompt: "Official movie poster for White Christmas (1954), Bing Crosby and Danny Kaye in tuxedos, Vermont inn with snow, 'WHITE CHRISTMAS' elegant title, Technicolor musical style --ar 2:3"
    },
    {
        id: 'bad-santa',
        title: 'Bad Santa',
        year: '2003',
        genres: ['Comedy', 'Crime', 'Drama', 'Christmas'],
        director: 'Terry Zwigoff',
        actors: ['Billy Bob Thornton', 'Bernie Mac', 'Lauren Graham'],
        type: 'movie',
        styles: [
            { name: 'Gritty Mall', promptString: 'fluorescent lighting, cheap decorations, dirty santa suit, depressed atmosphere, realistic texture' },
            { name: 'Dive Bar', promptString: 'neon sign, cigarette smoke, dark corner, alcohol bottles, despair, low key lighting' },
            { name: 'Boxing Ring', promptString: 'gym interior, sweat, harsh light, unlikely friendship, underdog vibe' }
        ],
        posterPrompt: "Official movie poster for Bad Santa (2003), Billy Bob Thornton as drunk disheveled Santa, mall setting, 'BAD SANTA' title, dark comedy style --ar 2:3"
    },
    {
        id: 'love-actually',
        title: 'Love Actually',
        year: '2003',
        genres: ['Comedy', 'Drama', 'Romance', 'Christmas'],
        director: 'Richard Curtis',
        actors: ['Hugh Grant', 'Martine McCutcheon', 'Liam Neeson'],
        type: 'movie',
        styles: [
            { name: 'Airport Arrival', promptString: 'candid moments, embracing figures, telephoto compression, emotional warmth, real life documentary feel' },
            { name: 'Cue Cards', promptString: 'doorway framing, white cards, handwritten text, silent emotion, shallow depth of field, romantic' },
            { name: 'London Lights', promptString: 'oxford street lights, night bokeh, festive atmosphere, urban romance, cinematic gloss' }
        ],
        posterPrompt: "Official movie poster for Love Actually (2003), ensemble cast montage, London at Christmas, 'LOVE ACTUALLY' romantic title, British romantic comedy style --ar 2:3"
    },
    {
        id: 'the-santa-clause',
        title: 'The Santa Clause',
        year: '1994',
        genres: ['Comedy', 'Drama', 'Family', 'Christmas'],
        director: 'John Pasquin',
        actors: ['Tim Allen', 'Judge Reinhold', 'Wendy Crewson'],
        type: 'movie',
        styles: [
            { name: 'North Pole Shop', promptString: 'warm golden lighting, magical workshop, steam punk toys, cozy atmosphere, production design' },
            { name: 'Roof Walker', promptString: 'snowy rooftop, night sky, magical sparkles, high angle, suburbia, chimney smoke' },
            { name: 'Transformation', promptString: 'white beard texture, gaining weight, rosy cheeks, mirror reflection, magical realism' }
        ],
        posterPrompt: "Official movie poster for The Santa Clause (1994), Tim Allen as Santa on rooftop with sleigh, snowy suburb, 'THE SANTA CLAUSE' title, family fantasy comedy style --ar 2:3"
    },
    {
        id: 'scrooged',
        title: 'Scrooged',
        year: '1988',
        genres: ['Comedy', 'Drama', 'Fantasy', 'Christmas'],
        director: 'Richard Donner',
        actors: ['Bill Murray', 'Karen Allen', 'John Forsythe'],
        type: 'movie',
        styles: [
            { name: 'TV Studio', promptString: 'broadcast cameras, studio lights, behind the scenes, chaos, 80s corporate aesthetic' },
            { name: 'Frozen Ghost', promptString: 'icy makeup, blue lighting, corpse texture, practical effects, spooky humor' },
            { name: 'Burning Ribcage', promptString: 'interior chest cavity, hellfire, practical creature effects, horror comedy, nightmare' }
        ],
        posterPrompt: "Official movie poster for Scrooged (1988), Bill Murray in suit with ghosts, TV studio setting, 'SCROOGED' title, 80s comedy horror style --ar 2:3"
    },
    {
        id: 'gremlins',
        title: 'Gremlins',
        year: '1984',
        genres: ['Comedy', 'Fantasy', 'Horror', 'Christmas'],
        director: 'Joe Dante',
        actors: ['Zach Galligan', 'Phoebe Cates', 'Hoyt Axton'],
        type: 'movie',
        styles: [
            { name: 'Mogui Fur', promptString: 'soft fur texture, big eyes, cute, warm lighting, macro shot, spielbergian wonder' },
            { name: 'Kitchen Chaos', promptString: 'blender slime, microwave explosion, green goo, practical puppet effects, chaotic movement' },
            { name: 'Snowy Kingston', promptString: 'small town square, christmas lights, night snow, idyllic americana gone wrong, fog' }
        ],
        posterPrompt: "Official movie poster for Gremlins (1984), cute Gizmo mogwai with scary Gremlin behind, Christmas lights, 'GREMLINS' title, Spielberg horror comedy style --ar 2:3"
    },
    {
        id: 'polar-express',
        title: 'The Polar Express',
        year: '2004',
        genres: ['Animation', 'Adventure', 'Comedy', 'Christmas'],
        director: 'Robert Zemeckis',
        actors: ['Tom Hanks', 'Chris Coppola', 'Michael Jeter'],
        type: 'movie',
        styles: [
            { name: 'Train Steam', promptString: 'volumetric steam, massive locomotive, glowing headlight, motion capture animation style, golden glow' },
            { name: 'Frozen Lake', promptString: 'breaking ice, slippery surface, blue cold lighting, speed, danger, vast landscape' },
            { name: 'North Pole City', promptString: 'vintage architecture, brick texture, endless elves, warm windows, festive assembly' }
        ],
        posterPrompt: "Official movie poster for The Polar Express (2004), magical steam train in snowy night, boy in pajamas, 'THE POLAR EXPRESS' title, motion capture animation style --ar 2:3"
    },
    {
        id: 'jingle-all-the-way',
        title: 'Jingle All the Way',
        year: '1996',
        genres: ['Comedy', 'Family', 'Christmas'],
        director: 'Brian Levant',
        actors: ['Arnold Schwarzenegger', 'Sinbad', 'Phil Hartman'],
        type: 'movie',
        styles: [
            { name: 'Turbo Man', promptString: 'plastic toy texture, red and gold suit, action figure aesthetic, commercial lighting, superhero' },
            { name: 'Mall Mob', promptString: 'crowds, consumer chaos, frantic motion, bright fluorescent lights, claustrophobia' },
            { name: 'Parade Jetpack', promptString: 'flying through air, confetti, parade floats, shaky cam, action comedy, low angle' }
        ],
        posterPrompt: "Official movie poster for Jingle All the Way (1996), Arnold Schwarzenegger as Turbo Man flying, toy store chaos, 'JINGLE ALL THE WAY' title, holiday action comedy style --ar 2:3"
    },
    {
        id: 'how-the-grinch-stole',
        title: 'How the Grinch Stole Christmas',
        year: '2000',
        genres: ['Comedy', 'Family', 'Fantasy', 'Christmas'],
        director: 'Ron Howard',
        actors: ['Jim Carrey', 'Taylor Momsen', 'Jeffrey Tambor'],
        type: 'movie',
        styles: [
            { name: 'Whoville', promptString: 'curved architecture, Dr. Seuss style, spirals, pastel colors, whimsical set design, fantasy' },
            { name: 'Grinch Cave', promptString: 'steampunk trash, rusty metal, dark jagged rocks, green fur texture, clutter' },
            { name: 'Sleigh Ride', promptString: 'massive bag of gifts, snowy peak, precarious balance, moonlit night, cartoon physics' }
        ],
        posterPrompt: "Official movie poster for How the Grinch Stole Christmas (2000), Jim Carrey as the Grinch with green fur and mischievous grin, Whoville backdrop, 'HOW THE GRINCH STOLE CHRISTMAS' title, Dr. Seuss fantasy style --ar 2:3"
    },
    {
        id: 'klaus',
        title: 'Klaus',
        year: '2019',
        genres: ['Animation', 'Adventure', 'Comedy', 'Christmas'],
        director: 'Sergio Pablos',
        actors: ['Jason Schwartzman', 'J.K. Simmons', 'Rashida Jones'],
        type: 'movie',
        styles: [
            { name: '2D Lighting', promptString: 'hand drawn 2D animation, volumetric lighting, paper texture, stylized characters, warm vs cold contrast' },
            { name: 'Smeerensburg', promptString: 'grey fog, jagged houses, depressing atmosphere, monochromatic, sharp angles' },
            { name: 'Toy Workshop', promptString: 'golden wood, floating dust, magic of creation, warm localized light, intricate detail' }
        ],
        posterPrompt: "Official movie poster for Klaus (2019), postman and old woodsman Klaus, hand-drawn 2D animation style, snowy village, 'KLAUS' title, heartwarming animated Christmas style --ar 2:3"
    },
    {
        id: 'christmas-in-connecticut',
        title: 'Christmas in Connecticut',
        year: '1945',
        genres: ['Comedy', 'Romance', 'Christmas'],
        director: 'Peter Godfrey',
        actors: ['Barbara Stanwyck', 'Dennis Morgan', 'Sydney Greenstreet'],
        type: 'movie',
        styles: [
            { name: 'Farmhouse Kitchen', promptString: 'b&w cozy kitchen, cooking steam, checkered curtains, domestic bliss aesthetic, soft light' },
            { name: 'Sleigh Ride', promptString: 'horse drawn sleigh, snowy woods, romantic close up, hollywood studio snow, vintage glamour' },
            { name: 'Fireplace', promptString: 'crackling fire, shadows, intimate conversation, classic hollywood lighting, warmth' }
        ],
        posterPrompt: "Official movie poster for Christmas in Connecticut (1945), Barbara Stanwyck in 1940s dress, farmhouse kitchen, black and white classic, 'CHRISTMAS IN CONNECTICUT' title, vintage Hollywood romance style --ar 2:3"
    },
    {
        id: 'batman-returns',
        title: 'Batman Returns',
        year: '1992',
        genres: ['Action', 'Crime', 'Fantasy', 'Christmas'],
        director: 'Tim Burton',
        actors: ['Michael Keaton', 'Danny DeVito', 'Michelle Pfeiffer'],
        type: 'movie',
        styles: [
            { name: 'Gotham Snow', promptString: 'gothic architecture, heavy snow, art deco statues, dark night, tim burton aesthetic, cold blue' },
            { name: 'Penguin Sewer', promptString: 'green slime, wet bricks, rubber duck boat, industrial pipes, grotesque, sewers' },
            { name: 'Catwoman Neon', promptString: 'latex suit stitches, neon sign "Hell Here", rooftop silhouette, snowy ledge, duality' }
        ],
        posterPrompt: "Official movie poster for Batman Returns (1992), Batman, Catwoman and Penguin in snowy Gotham, gothic architecture, 'BATMAN RETURNS' title, Tim Burton dark fantasy style --ar 2:3"
    },
    {
        id: 'muppet-christmas-carol',
        title: 'The Muppet Christmas Carol',
        year: '1992',
        genres: ['Comedy', 'Drama', 'Family', 'Christmas'],
        director: 'Brian Henson',
        actors: ['Michael Caine', 'Dave Goelz', 'Steve Whitmire'],
        type: 'movie',
        styles: [
            { name: 'Victorian London', promptString: 'cobblestone streets, snow, period costumes, muppet integration, Dickensian atmosphere, matte painting' },
            { name: 'Ghost of Past', promptString: 'ethereal floating child, soft focus, transparency, magical flight, window observation' },
            { name: 'Scrooge Bedroom', promptString: 'cold blue night, four poster bed, candlelight, shadows, spooky but kid friendly' }
        ],
        posterPrompt: "Official movie poster for The Muppet Christmas Carol (1992), Michael Caine as Scrooge with Muppet characters, Victorian London, 'THE MUPPET CHRISTMAS CAROL' title, family musical style --ar 2:3"
    },
    // WAR CLASSICS
    {
        id: 'the-thin-red-line',
        title: 'The Thin Red Line',
        year: '1998',
        genres: ['Drama', 'War'],
        director: 'Terrence Malick',
        actors: ['Jim Caviezel', 'Sean Penn', 'Nick Nolte'],
        type: 'movie',
        styles: [
            { name: 'Tall Grass', promptString: 'tall swaying grass, tropical sunlight, nature vs war, poetic visual flow, low angle, vast landscape' },
            { name: 'Jungle Canopy', promptString: 'dappled sunlight through leaves, vivid green foliage, intense contrast with military gear, ethereal atmosphere' },
            { name: 'Hill Assault', promptString: 'smoke covered hill, explosions, chaotic movement, natural lighting, philosophical gaze, wide shot' }
        ],
        posterPrompt: "Official movie poster for The Thin Red Line (1998), soldiers in tall grass with jungle behind, philosophical war, 'THE THIN RED LINE' title, Terrence Malick poetic style --ar 2:3"
    },
    {
        id: 'striped-pajamas',
        title: 'The Boy in the Striped Pajamas',
        year: '2008',
        genres: ['Drama', 'War'],
        director: 'Mark Herman',
        actors: ['Asa Butterfield', 'David Thewlis', 'Rupert Friend'],
        type: 'movie',
        styles: [
            { name: 'Fence Line', promptString: 'barbed wire fence, duality of worlds, muted colors, soft focus background, loss of innocence, visual barrier' },
            { name: 'Blue Room', promptString: 'cold sterile interior, striped fabric texture, isolation, innocent perspective, symmetrical framing' },
            { name: 'Forest Edge', promptString: 'sunlight filtering through trees, soft bloom, exploration, contrast between nature and horror, quiet atmosphere' }
        ],
        posterPrompt: "Official movie poster for The Boy in the Striped Pajamas (2008), two boys through fence, concentration camp background, 'THE BOY IN THE STRIPED PAJAMAS' title, WWII drama style --ar 2:3"
    },
    {
        id: 'inglourious-basterds',
        title: 'Inglourious Basterds',
        year: '2009',
        genres: ['Adventure', 'Drama', 'War'],
        director: 'Quentin Tarantino',
        actors: ['Brad Pitt', 'Diane Kruger', 'Eli Roth'],
        type: 'movie',
        styles: [
            { name: 'Cinema Fire', promptString: 'raging red fire, smoke, projection screen, high contrast, facial sweat, chaotic destruction, film grain' },
            { name: 'Tavern Cellar', promptString: 'low warm lighting, stone walls, uniform texture, tension, cigarette smoke, claustrophobic gathering' },
            { name: 'Woods Swing', promptString: 'sunny forest clearing, baseball bat, brutal violence, low angle, vibrant colors, spaghetti western vibe' }
        ],
        posterPrompt: "Official movie poster for Inglourious Basterds (2009), Brad Pitt leading soldiers, cinema on fire, Nazi symbols, 'INGLOURIOUS BASTERDS' title, Tarantino WWII style --ar 2:3"
    },
    {
        id: 'fury',
        title: 'Fury',
        year: '2014',
        genres: ['Action', 'Drama', 'War'],
        director: 'David Ayer',
        actors: ['Brad Pitt', 'Shia LaBeouf', 'Logan Lerman'],
        type: 'movie',
        styles: [
            { name: 'Tank Interior', promptString: 'cramped metal space, grease, sweat, green ambient light, claustrophobia, dirty faces, machinery details' },
            { name: 'Tracer Fire', promptString: 'green and red laser-like tracers, night battle, mud spray, explosions, intense contrast, visceral action' },
            { name: 'Muddy Tracks', promptString: 'heavy mud texture, tank treads, cold grey sky, grime, bleak atmosphere, desaturated palette' }
        ],
        posterPrompt: "Official movie poster for Fury (2014), Brad Pitt with Sherman tank crew, muddy battlefield, 'FURY' title, gritty WWII tank warfare style --ar 2:3"
    },
    {
        id: 'kingdom-of-heaven',
        title: 'Kingdom of Heaven',
        year: '2005',
        genres: ['Action', 'Adventure', 'Drama', 'War'],
        director: 'Ridley Scott',
        actors: ['Orlando Bloom', 'Eva Green', 'Liam Neeson'],
        type: 'movie',
        styles: [
            { name: 'Jerusalem Wall', promptString: 'desert sun, ancient stone texture, massive armies, siege towers, heat haze, epic scale, Ridley Scott atmosphere' },
            { name: 'Blue Night Siege', promptString: 'cold blue night, fire arrows, torches, sparks, high contrast, battle chaos, cinematic lighting' },
            { name: 'Snowy Forest', promptString: 'cold winter woods, blacksmith fire, falling snow, medieval grit, steel texture, muted colors' }
        ],
        posterPrompt: "Official movie poster for Kingdom of Heaven (2005), Orlando Bloom as knight, Jerusalem walls, crusader army, 'KINGDOM OF HEAVEN' title, Ridley Scott epic war style --ar 2:3"
    },
    {
        id: 'braveheart',
        title: 'Braveheart',
        year: '1995',
        genres: ['Biography', 'Drama', 'History', 'War'],
        director: 'Mel Gibson',
        actors: ['Mel Gibson', 'Sophie Marceau', 'Patrick McGoohan'],
        type: 'movie',
        styles: [
            { name: 'Blue Face Paint', promptString: 'woad paint texture, screaming face, battle rage, rain, hair matted, raw emotion, epic close up' },
            { name: 'Green Highlands', promptString: 'rolling green hills, grey overcast sky, mist, epic landscape, wet grass, raw nature' },
            { name: 'Battle Line', promptString: 'long spears, hordes of soldiers, mud, blood, chaotic motion, brutal realism, desaturated greens' }
        ],
        posterPrompt: "Official movie poster for Braveheart (1995), Mel Gibson as William Wallace with blue face paint, Scottish highlands, 'BRAVEHEART' title, epic war drama style --ar 2:3"
    },
    {
        id: 'apocalypse-now',
        title: 'Apocalypse Now',
        year: '1979',
        genres: ['Drama', 'Mystery', 'War'],
        director: 'Francis Ford Coppola',
        actors: ['Martin Sheen', 'Marlon Brando', 'Robert Duvall'],
        type: 'movie',
        styles: [
            { name: 'Napalm Morning', promptString: 'orange fireballs, helicopters, jungle treeline, silhouette, heavy smoke, heat haze, iconic sunrise' },
            { name: 'River Boat', promptString: 'PBR patrol boat, mist, purple haze, jungle river, psychedelic lighting, sweat, atmospheric' },
            { name: 'Kurtz Compound', promptString: 'deep shadows, amber light, indigenous tribe, rain, severed heads, heart of darkness, chiaroscuro' }
        ],
        posterPrompt: "Official movie poster for Apocalypse Now (1979), helicopter silhouettes against napalm sunset, Martin Sheen and Marlon Brando, 'APOCALYPSE NOW' title, Coppola Vietnam epic style --ar 2:3"
    },
    {
        id: 'pans-labyrinth',
        title: 'Pan\'s Labyrinth',
        year: '2006',
        genres: ['Drama', 'Fantasy', 'War'],
        director: 'Guillermo del Toro',
        actors: ['Ivana Baquero', 'Ariadna Gil', 'Sergi López'],
        type: 'movie',
        styles: [
            { name: 'Faun\'s Labyrinth', promptString: 'ancient stone texture, moss, magical realism, blue night light, swirling dust, mysterious atmosphere' },
            { name: 'Pale Man', promptString: 'grotesque monster, banquet table, warm firelight, creepy, surreal, high contrast, skin texture' },
            { name: 'War Torn Woods', promptString: 'blue military uniforms, forest, mud, rain, cold reality vs fantasy, gritty texture' }
        ],
        posterPrompt: "Official movie poster for Pan's Labyrinth (2006), young girl with faun creature, magical labyrinth doorway, 'PAN'S LABYRINTH' title, Guillermo del Toro dark fantasy style --ar 2:3"
    },
    {
        id: 'the-patriot',
        title: 'The Patriot',
        year: '2000',
        genres: ['Action', 'Drama', 'History', 'War'],
        director: 'Roland Emmerich',
        actors: ['Mel Gibson', 'Heath Ledger', 'Joely Richardson'],
        type: 'movie',
        styles: [
            { name: 'Red Coats', promptString: 'bright red uniforms, green field, musket smoke, linear formation, daylight, revolutionary war aesthetic' },
            { name: 'Tomahawk Ambush', promptString: 'fast motion blur, swamp setting, sunlight filtering through trees, savage action, blood, practical effects' },
            { name: 'Burning Church', promptString: 'engulfed in flames, night, orange glow, silhouettes, tragedy, smoke, cinematic lighting' }
        ],
        posterPrompt: "Official movie poster for The Patriot (2000), Mel Gibson and Heath Ledger, American Revolutionary War, colonial flag, 'THE PATRIOT' title, epic historical war style --ar 2:3"
    },
    {
        id: 'the-mission',
        title: 'The Mission',
        year: '1986',
        genres: ['Adventure', 'Drama', 'History', 'War'],
        director: 'Roland Joffé',
        actors: ['Robert De Niro', 'Jeremy Irons', 'Liam Neeson'],
        type: 'movie',
        styles: [
            { name: 'Waterfall Cross', promptString: 'massive waterfall, jungle mist, climbing figures, epic scale, water spray, lush green, struggle' },
            { name: 'Jungle Jesuit', promptString: 'muddy robes, dense foliage, natural light, peaceful mission, wood texture, humidity' },
            { name: 'River Battle', promptString: 'musket fire, canoes, river current, smoke mixing with mist, tragic defense, green and earth tones' }
        ],
        posterPrompt: "Official movie poster for The Mission (1986), Robert De Niro and Jeremy Irons at waterfall, jungle mission, 'THE MISSION' title, historical drama style --ar 2:3"
    },
    {
        id: 'platoon',
        title: 'Platoon',
        year: '1986',
        genres: ['Drama', 'War'],
        director: 'Oliver Stone',
        actors: ['Charlie Sheen', 'Tom Berenger', 'Willem Dafoe'],
        type: 'movie',
        styles: [
            { name: 'Jungle Rain', promptString: 'monsoon downpour, wet fatigues, mud, green lushness, misery, close up sweat, atmospheric dampness' },
            { name: 'Village Fire', promptString: 'burning thatched huts, chaos, orange fire, heavy smoke, sunset, war crimes, gritty realism' },
            { name: 'Helicopter Lift', promptString: 'arms raised in defeat/prayer, silhouette, dust kickup, wind, tragic pose, iconic war imagery' }
        ],
        posterPrompt: "Official movie poster for Platoon (1986), Charlie Sheen with arms raised, Vietnam jungle, 'PLATOON' title, Oliver Stone war drama style --ar 2:3"
    },
    {
        id: 'dunkirk',
        title: 'Dunkirk',
        year: '2017',
        genres: ['Action', 'Drama', 'History', 'War'],
        director: 'Christopher Nolan',
        actors: ['Fionn Whitehead', 'Barry Keoghan', 'Mark Rylance'],
        type: 'movie',
        styles: [
            { name: 'The Mole', promptString: 'cold beach, grey sea, lines of soldiers, vastness, IMAX 70mm, sharp focus, desaturated palette' },
            { name: 'Spitfire Cockpit', promptString: 'aerial view, vibrating frame, reflection on glass, blue sky, vast ocean, exhilarating speed' },
            { name: 'Oil Fire', promptString: 'ocean on fire, black smoke, orange flames, survival swimming, high contrast, disaster scale' }
        ],
        posterPrompt: "Official movie poster for Dunkirk (2017), soldiers on beach looking at sky, Spitfire plane flying overhead, ocean and ships, 'DUNKIRK' title, Christopher Nolan WWII epic style --ar 2:3"
    },
    {
        id: 'greyhound',
        title: 'Greyhound',
        year: '2020',
        genres: ['Action', 'Drama', 'History', 'War'],
        director: 'Aaron Schneider',
        actors: ['Tom Hanks', 'Elisabeth Shue', 'Stephen Graham'],
        type: 'movie',
        styles: [
            { name: 'North Atlantic', promptString: 'massive grey waves, heavy sea spray, cold atmosphere, destroyer grey, storm clouds, motion' },
            { name: 'Radar Room', promptString: 'glowing green scope, red battle lighting, sweat, tension, cramped interior, naval tech' },
            { name: 'Wolfpack Night', promptString: 'surfacing u-boat, ice, night, tracers, searchlights, danger, freezing ocean spray' }
        ],
        posterPrompt: "Official movie poster for Greyhound (2020), Tom Hanks as naval captain on destroyer bridge, stormy Atlantic Ocean, U-boats, 'GREYHOUND' title, WWII naval warfare style --ar 2:3"
    },
    {
        id: 'tropic-thunder',
        title: 'Tropic Thunder',
        year: '2008',
        genres: ['Action', 'Comedy', 'War'],
        director: 'Ben Stiller',
        actors: ['Ben Stiller', 'Jack Black', 'Robert Downey Jr.'],
        type: 'movie',
        styles: [
            { name: 'Fake Vietnam', promptString: 'saturated colors, napalm explosion, jungle, comedy action, pyrotechnics, movie set aesthetic' },
            { name: 'Panda Cover', promptString: 'jungle foliage, bamboo, ridiculous action pose, sweat, grime, vivid greens' },
            { name: 'Flaming Dragon', promptString: 'night compound, drug lab, jungle night, blue moonlight, tactical gear, explosions' }
        ],
        posterPrompt: "Official movie poster for Tropic Thunder (2008), Ben Stiller, Jack Black, Robert Downey Jr in jungle warfare gear, explosions behind them, 'TROPIC THUNDER' title, action comedy style --ar 2:3"
    },

    {
        id: 'metropolis',
        title: 'Metropolis',
        year: '1927',
        genres: ['Drama', 'Sci-Fi'],
        director: 'Fritz Lang',
        actors: ['Brigitte Helm', 'Alfred Abel', 'Gustav Fröhlich'],
        type: 'movie',
        styles: [
            { name: 'Art Deco Future', promptString: 'towering skyscrapers, art deco architecture, beams of light, industrial haze, black and white german expressionism, dramatic shadows' },
            { name: 'Moloch Machine', promptString: 'massive industrial machinery, steam, workers in unison, rhythmic movement, mechanical horror, high contrast' },
            { name: 'Robot Maria', promptString: 'metallic female robot, glowing rings, halo effect, retrofuturistic, surrealism, cinematic lighting' }
        ],
        posterPrompt: "Official movie poster for Metropolis (1927), Robot Maria with art deco skyscrapers, towering futuristic cityscape, German expressionist style, sepia and gold tones, 'METROPOLIS' art deco typography, Fritz Lang masterpiece --ar 2:3"
    },
    {
        id: 'cabinet-caligari',
        title: 'The Cabinet of Dr. Caligari',
        year: '1920',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'Robert Wiene',
        actors: ['Werner Krauss', 'Conrad Veidt', 'Friedrich Feher'],
        type: 'movie',
        styles: [
            { name: 'Expressionist Angles', promptString: 'jagged architecture, painted shadows, slanted walls, distorted perspective, german expressionism, silent film aesthetic' },
            { name: 'Somnambulist', promptString: 'black leotard, pale face, heavy eye makeup, stiff movement, surreal set design, high contrast' },
            { name: 'Carnival Tent', promptString: 'fairground, mysterious tent, crowd, hand painted backdrop, eerie atmosphere, monochromatic' }
        ],
        posterPrompt: "Official movie poster for The Cabinet of Dr. Caligari (1920), German expressionist art style, jagged angular architecture, Cesare the Somnambulist carrying a woman, distorted perspective, black and white high contrast, silent film typography --ar 2:3"
    },
    {
        id: 'nosferatu',
        title: 'Nosferatu',
        year: '1922',
        genres: ['Fantasy', 'Horror'],
        director: 'F.W. Murnau',
        actors: ['Max Schreck', 'Greta Schröder', 'Ruth Landshoff'],
        type: 'movie',
        styles: [
            { name: 'Count Orlok', promptString: 'rat-like vampire, long claws, bald head, hunched silhouette, shadow on wall, eerie silence, gothic horror' },
            { name: 'Ghost Ship', promptString: 'sailing ship, empty ocean, rats, plague, silent film grain, vignette, foreboding' },
            { name: 'Shadow Creep', promptString: 'shadow of hand grasping heart, climbing stairs, expressionist lighting, high contrast, fear' }
        ],
        posterPrompt: "Official movie poster for Nosferatu (1922), Count Orlok's creepy silhouette standing in an archway, long fingers, bald head, rat-like features, gothic font, sepia tone silent horror, grainy texture --ar 2:3"
    },
    {
        id: 'm',
        title: 'M',
        year: '1931',
        genres: ['Crime', 'Mystery', 'Thriller'],
        director: 'Fritz Lang',
        actors: ['Peter Lorre', 'Ellen Widmann', 'Inge Landgut'],
        type: 'movie',
        styles: [
            { name: 'Balloon Shadow', promptString: 'shadow on wanted poster, ball rolling, child silhouette, foreboding, german expressionism, urban unease' },
            { name: 'Underground Court', promptString: 'criminal underworld, smoke filled cellar, basement, mob judgment, harsh lighting, faces in shadow' },
            { name: 'Whistle', promptString: 'urban street corner, night, reflection in window, police investigation, noir lighting, suspense' }
        ],
        posterPrompt: "Official movie poster for M (1931), a large letter 'M' chalked on the back of a man's coat, ominous shadow of a child murderer, German typography, black and white Fritz Lang noir style --ar 2:3"
    },
    {
        id: 'citizen-kane',
        title: 'Citizen Kane',
        year: '1941',
        genres: ['Drama', 'Mystery'],
        director: 'Orson Welles',
        actors: ['Orson Welles', 'Joseph Cotten', 'Dorothy Comingore'],
        type: 'movie',
        styles: [
            { name: 'Deep Focus', promptString: 'extreme depth of field, foreground and background in focus, low angle shot, ceiling visible, gregg toland cinematography' },
            { name: 'Xanadu Silhouettes', promptString: 'massive fireplace, vast empty hall, jigsaw puzzle, loneliness, high contrast, gothic architecture' },
            { name: 'Podium Speech', promptString: 'huge poster of self, political rally, low angle powerhouse, microphone, black and white drama' }
        ],
        posterPrompt: "Official movie poster for Citizen Kane (1941), Orson Welles as Kane standing at a podium, low angle shot, deep focus, 'KANE' campaign poster in background, bold black and white dramatic lighting, cinematic masterpiece --ar 2:3"
    },
    {
        id: 'casablanca',
        title: 'Casablanca',
        year: '1942',
        genres: ['Drama', 'Romance', 'War'],
        director: 'Michael Curtiz',
        actors: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'],
        type: 'movie',
        styles: [
            { name: 'Foggy Airport', promptString: 'trench coat, fedora, heavy fog, plane propeller, tarmac, noir lighting, tearful goodbye' },
            { name: 'Rick\'s Cafe', promptString: 'moroccan lamp, piano, smoke, shadows, exotic interior, romantic gaze, soft focus' },
            { name: 'Piano Man', promptString: 'close up on hands, piano keys, half empty glass, melancholic atmosphere, black and white glamour' }
        ],
        posterPrompt: "Official movie poster for Casablanca (1942), Humphrey Bogart and Ingrid Bergman close up, romantic and sorrowful, trench coat and fedora, foggy airport runway in background, vintage Hollywood glamour, black and white --ar 2:3"
    },
    {
        id: 'the-third-man',
        title: 'The Third Man',
        year: '1949',
        genres: ['Film-Noir', 'Mystery', 'Thriller'],
        director: 'Carol Reed',
        actors: ['Orson Welles', 'Joseph Cotten', 'Alida Valli'],
        type: 'movie',
        styles: [
            { name: 'Dutch Angle', promptString: 'tilted camera, cobblestone streets, night, wet pavement, massive shadows, vienna ruins, noir' },
            { name: 'Sewer Chase', promptString: 'underground tunnels, rushing water, torchlight, echoes, bars of shadow, claustrophobic' },
            { name: 'Ferris Wheel', promptString: 'prater wheel, moody sky, height, tension, cold wind, black and white masterpiece' }
        ],
        posterPrompt: "Official movie poster for The Third Man (1949), Orson Welles grinning in a doorway, Dutch angle composition, giant ferris wheel in background, zither instrument, noir shadows, Vienna ruins, black and white --ar 2:3"
    },
    {
        id: 'rear-window',
        title: 'Rear Window',
        year: '1954',
        genres: ['Mystery', 'Thriller'],
        director: 'Alfred Hitchcock',
        actors: ['James Stewart', 'Grace Kelly', 'Wendell Corey'],
        type: 'movie',
        styles: [
            { name: 'Courtyard View', promptString: 'apartment complex, brick walls, multiple windows, voyeuristic pov, telephoto lens, technicolor' },
            { name: 'Fashion Chic', promptString: 'grace kelly dress, elegant interior, warm lamp light, 50s glamour, soft lighting' },
            { name: 'Flashbulb Defense', promptString: 'blinding camera flash, dark apartment, red gel effect, tension, point of view' }
        ],
        posterPrompt: "Official movie poster for Rear Window (1954), James Stewart holding a camera with telephoto lens, looking out a window, binoculars, silhouette of Grace Kelly, apartment courtyard background, technicolor suspense --ar 2:3"
    },
    {
        id: 'vertigo',
        title: 'Vertigo',
        year: '1958',
        genres: ['Mystery', 'Romance', 'Thriller'],
        director: 'Alfred Hitchcock',
        actors: ['James Stewart', 'Kim Novak', 'Barbara Bel Geddes'],
        type: 'movie',
        styles: [
            { name: 'Dolly Zoom', promptString: 'stairwell, vertigo effect, distorting perspective, dizzying, high anxiety, technicolor' },
            { name: 'Neon Hotel', promptString: 'green neon light washing over room, silhouette, obsession, dreamlike, eerie atmosphere' },
            { name: 'Golden Gate', promptString: 'san francisco bay, water, jumper, foggy day, mystery, soft focus, romantic tragedy' }
        ],
        posterPrompt: "Official movie poster for Vertigo (1958), Saul Bass spiral graphic design, silhouette of falling man, James Stewart and Kim Novak faces, 'VERTIGO' distinct typography, dizzying psychedelic hitchcock style --ar 2:3"
    },
    {
        id: 'north-by-northwest',
        title: 'North by Northwest',
        year: '1959',
        genres: ['Action', 'Adventure', 'Mystery'],
        director: 'Alfred Hitchcock',
        actors: ['Cary Grant', 'Eva Marie Saint', 'James Mason'],
        type: 'movie',
        styles: [
            { name: 'Crop Duster', promptString: 'wide open field, biplane low pass, running man, bright daylight, dust, isolation, suspense' },
            { name: 'Mt Rushmore', promptString: 'climbing stone faces, night, peril, monumental scale, floodlights, high contrast action' },
            { name: 'Train Dining', promptString: 'elegant dining car, white tablecloth, flirting, 50s suit, scenic window view, technicolor' }
        ],
        posterPrompt: "Official movie poster for North by Northwest (1959), Cary Grant running from a crop duster plane in a cornfield, kinetic action, Saul Bass arrow graphics, vibrant technicolor, classic suspense --ar 2:3"
    },
    {
        id: 'psycho',
        title: 'Psycho',
        year: '1960',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'Alfred Hitchcock',
        actors: ['Anthony Perkins', 'Janet Leigh', 'Vera Miles'],
        type: 'movie',
        styles: [
            { name: 'Shower Scene', promptString: 'knife silhouette, splashing water, drain, fast cuts, screaming mouth, high key lighting, black and white' },
            { name: 'Bates Motel', promptString: 'gothic house on hill, rain, noir lighting, isolation, creepy atmosphere, low angle' },
            { name: 'Taxidermy Parlor', promptString: 'stuffed birds, shadows, nervous eating, profile shot, unease, claustrophobic' }
        ],
        posterPrompt: "Official movie poster for Psycho (1960), Janet Leigh screaming in the shower, knife silhouette, Bates Motel neon sign in background, shattered glass effect, black and white horror classic, Hitchcock branding --ar 2:3"
    },
    {
        id: '12-angry-men',
        title: '12 Angry Men',
        year: '1957',
        genres: ['Crime', 'Drama'],
        director: 'Sidney Lumet',
        actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
        type: 'movie',
        styles: [
            { name: 'Jury Room', promptString: 'sweaty faces, fan spinning, cigarette smoke, claustrophobic, heat, tension, close up' },
            { name: 'Knife Table', promptString: 'switchblade stuck in wood, shock, group reaction, depth of field, black and white realism' },
            { name: 'Rain Window', promptString: 'rain against glass, gloom, looking out window, reflection, pensive, breaking the heat' }
        ],
        posterPrompt: "Official movie poster for 12 Angry Men (1957), twelve men sitting around a table arguing, switchblade stuck in the table, intense facial expressions, sweaty atmosphere, 'LIFE IS IN THEIR HANDS' tagline, black and white courtroom drama --ar 2:3"
    },
    {
        id: 'seven-samurai',
        title: 'Seven Samurai',
        year: '1954',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Akira Kurosawa',
        actors: ['Toshiro Mifune', 'Takashi Shimura', 'Keiko Tsushima'],
        type: 'movie',
        styles: [
            { name: 'Rain Battle', promptString: 'heavy rain, mud, samurai armor, katana, running, chaos, telephoto lens compression, black and white' },
            { name: 'Village Defense', promptString: 'bamboo spears, barricades, dust, rural japan, strategy, wide shot, epic scale' },
            { name: 'Silent Duel', promptString: 'wind blowing grass, intense stare, hand on hilt, tension, stillness before action, nature background' }
        ],
        posterPrompt: "Official movie poster for Seven Samurai (1954), Toshiro Mifune holding a giant katana, seven samurai standing in the rain, mud and battle gear, brush stroke typography, epic Kurosawa composition, black and white --ar 2:3"
    },
    {
        id: 'rashomon',
        title: 'Rashomon',
        year: '1950',
        genres: ['Crime', 'Drama', 'Mystery'],
        director: 'Akira Kurosawa',
        actors: ['Toshiro Mifune', 'Machiko Kyô', 'Masayuki Mori'],
        type: 'movie',
        styles: [
            { name: 'Forest Light', promptString: 'sunlight through leaves, dappled light, dense forest, high contrast, shadows, nature texture' },
            { name: 'Rain Gate', promptString: 'torrential rain, ruined gate, misery, mud, discussion, atmospheric, black and white' },
            { name: 'Duel', promptString: 'frantic sword fight, tripping, sweat, desperate struggle, dynamic camera movement, realism' }
        ],
        posterPrompt: "Official movie poster for Rashomon (1950), three characters giving different testimonies in the rain at a ruined gate, sun shining through forest leaves, intense Japanese drama, Kurosawa masterpiece --ar 2:3"
    },
    {
        id: '2001-space-odyssey',
        title: '2001: A Space Odyssey',
        year: '1968',
        genres: ['Adventure', 'Sci-Fi'],
        director: 'Stanley Kubrick',
        actors: ['Keir Dullea', 'Gary Lockwood', 'William Sylvester'],
        type: 'movie',
        styles: [
            { name: 'Centrifuge', promptString: 'running on walls, rotating set, white sterile interior, futuristic design, symmetry, wide angle' },
            { name: 'HAL 9000', promptString: 'glowing red camera eye, extreme close up, fisheye reflection, cold logic, minimalism, sinister' },
            { name: 'Star Gate', promptString: 'slit scan photography, neon colors, warping light, psychedelic, speed, abstract landscape' }
        ],
        posterPrompt: "Official movie poster for 2001: A Space Odyssey (1968), Pan Am space clipper flying towards a spinning space station, star child embryo in bubble, HAL 9000 red eye lens, 'the ultimate trip' text, sci-fi masterpiece art by Robert McCall --ar 2:3"
    },
    {
        id: 'dr-strangelove',
        title: 'Dr. Strangelove',
        year: '1964',
        genres: ['Comedy', 'War'],
        director: 'Stanley Kubrick',
        actors: ['Peter Sellers', 'George C. Scott', 'Sterling Hayden'],
        type: 'movie',
        styles: [
            { name: 'War Room', promptString: 'huge circular table, big board map, spotlight, halo lighting, ken adam set design, black and white, satire' },
            { name: 'B-52 Cockpit', promptString: 'cramped interior, instrument panels, sweat, concentration, handheld camera, documentarian style' },
            { name: 'Bomb Ride', promptString: 'falling cowboy, rodeo style, nuclear bomb, wide angle, absurdity, iconic silhouette' }
        ],
        posterPrompt: "Official movie poster for Dr. Strangelove (1964), Major Kong riding a nuclear bomb like a rodeo cowboy, waving his hat, B-52 plane above, 'HOW I LEARNED TO STOP WORRYING AND LOVE THE BOMB' typography, satirical black and white --ar 2:3"
    },
    {
        id: 'clockwork-orange',
        title: 'A Clockwork Orange',
        year: '1971',
        genres: ['Crime', 'Drama', 'Sci-Fi'],
        director: 'Stanley Kubrick',
        actors: ['Malcolm McDowell', 'Patrick Magee', 'Michael Bates'],
        type: 'movie',
        styles: [
            { name: 'Korova Milk Bar', promptString: 'mannequin furniture, white sterile room, bowler hats, menacing stare, symmetry, wide angle' },
            { name: 'Ludovico Technique', promptString: 'eyes clamped open, screaming, movie theater light, medical equipment, psychological horror' },
            { name: 'Droogs Walk', promptString: 'slow motion, tunnel, backlighting, shadows, white outfits, ominous unison' }
        ],
        posterPrompt: "Official movie poster for A Clockwork Orange (1971), Alex DeLarge with one eye wide open wearing a bowler hat and false eyelashes, holding a glass of milk, triangle graphic composition, 'A CLOCKWORK ORANGE' bold futuristic font, disturbing Kubrick style --ar 2:3"
    },
    {
        id: 'the-godfather',
        title: 'The Godfather',
        year: '1972',
        genres: ['Crime', 'Drama'],
        director: 'Francis Ford Coppola',
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        type: 'movie',
        styles: [
            { name: 'Don\'s Study', promptString: 'venetian blinds, dark shadows, warm lamp light, tuxedo, power, gordon willis cinematography' },
            { name: 'Wedding Sunny', promptString: 'bright kodachrome colors, outdoor party, dancing, contrast with dark interior, 70s film stock' },
            { name: 'Orange Peel', promptString: 'orange in mouth, playfulness, monster improvisation, garden setting, natural light' }
        ],
        posterPrompt: "Official movie poster for The Godfather (1972), Don Corleone wearing a tuxedo holding a cat, marionette strings logo above title 'THE GODFATHER', dark moody lighting, elegant crime drama masterpiece --ar 2:3"
    },
    {
        id: 'chinatown',
        title: 'Chinatown',
        year: '1974',
        genres: ['Drama', 'Mystery', 'Thriller'],
        director: 'Roman Polanski',
        actors: ['Jack Nicholson', 'Faye Dunaway', 'John Huston'],
        type: 'movie',
        styles: [
            { name: 'LA Drought', promptString: 'dry riverbed, heat haze, blazing sun, pale colors, neo-noir, isolation' },
            { name: 'Venetian Blinds', promptString: 'office interior, slatted shadows on face, cigarette smoke, sweat, mystery, noir lighting' },
            { name: 'Nose Bandage', promptString: 'white bandage, fedora, sunglasses, driving convertible, classic hollywood composition' }
        ],
        posterPrompt: "Official movie poster for Chinatown (1974), illustration style of Jack Nicholson's face formed by smoke from a cigarette, Faye Dunaway silhouette in background, neo-noir mystery aesthetic, beige and brown tones --ar 2:3"
    },
    {
        id: 'raging-bull',
        title: 'Raging Bull',
        year: '1980',
        genres: ['Biography', 'Drama', 'Sport'],
        director: 'Martin Scorsese',
        actors: ['Robert De Niro', 'Cathy Moriarty', 'Joe Pesci'],
        type: 'movie',
        styles: [
            { name: 'Use of Flash', promptString: 'camera flash bulbs popping, boxing ring, sweat flying, slow motion, chaotic energy, black and white' },
            { name: 'Ropes Perspective', promptString: 'ring size changing, distortion, heat haze, exhaustion, blood on mat, intense focus' },
            { name: 'Mirror Monologue', promptString: 'dressing room, reflection, lonely, shadow, preparation, psychological intensity' }
        ],
        posterPrompt: "Official movie poster for Raging Bull (1980), Robert De Niro as Jake LaMotta inside the boxing ring, leaning on ropes, bloody and battered, high contrast black and white photography, gritty sports drama --ar 2:3"
    },
    {
        id: 'annie-hall',
        title: 'Annie Hall',
        year: '1977',
        genres: ['Comedy', 'Romance'],
        director: 'Woody Allen',
        actors: ['Woody Allen', 'Diane Keaton', 'Tony Roberts'],
        type: 'movie',
        styles: [
            { name: 'Lobster Kitchen', promptString: 'kitchen chaos, live lobsters, spontaneous laughter, handheld camera, natural lighting, warm vibe' },
            { name: 'Balcony Talk', promptString: 'nyc skyline background, golden hour, conversation, intellectual vibe, 70s fashion, soft focus' },
            { name: 'Split Screen', promptString: 'therapy session, dual perspective, comparison, interior lighting, dialogue focus' }
        ],
        posterPrompt: "Official movie poster for Annie Hall (1977), Woody Allen and Diane Keaton standing back to back, wearing vest and tie, clean white background, simple serif typography, romantic comedy classic --ar 2:3"
    },
    {
        id: 'star-wars-new-hope',
        title: 'Star Wars: Episode IV - A New Hope',
        year: '1977',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'George Lucas',
        actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        type: 'movie',
        styles: [
            { name: 'Binary Sunset', promptString: 'twin suns, desert horizon, farm boy, longing, john williams swelling, silhouette, heat haze' },
            { name: 'Death Star Trench', promptString: 'grey greebles, motion blur, x-wing cockpit, lasers, explosions, speed, industrial sci-fi' },
            { name: 'Cantina Bar', promptString: 'aliens, smoke, dark shadows, crowded, weird creatures, practical effects, dirty sci-fi' }
        ],
        posterPrompt: "Official movie poster for Star Wars: A New Hope (1977), Luke Skywalker holding a lightsaber above his head, Princess Leia with a blaster, Darth Vader helmet looming in background, X-Wings attacking Death Star, classic Hildebrandt brothers art style, epic space opera --ar 2:3"
    },
    {
        id: 'empire-strikes-back',
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: '1980',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'Irvin Kershner',
        actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        type: 'movie',
        styles: [
            { name: 'Hoth Battle', promptString: 'white snow landscape, AT-AT walkers, trenches, contrast with white, explosions, cold blue shadows' },
            { name: 'Dagobah Swamp', promptString: 'fog, twisted roots, mud, yoda, organic texture, low key lighting, mysterious' },
            { name: 'Carbonite Freeze', promptString: 'orange industrial steam, blue floor lights, silhouette, machinery, ominous, high contrast' }
        ],
        posterPrompt: "Official movie poster for The Empire Strikes Back (1980), Han Solo and Princess Leia embracing, Darth Vader looming large in starry background, AT-AT walkers on snow below, 'THE EMPIRE STRIKES BACK' blue and silver logo, operatic sci-fi style --ar 2:3"
    },
    {
        id: 'jaws',
        title: 'Jaws',
        year: '1975',
        genres: ['Adventure', 'Thriller'],
        director: 'Steven Spielberg',
        actors: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss'],
        type: 'movie',
        styles: [
            { name: 'Dolly Zoom Beach', promptString: 'beach chair, sudden realization, background compression, panic, sunny day, heat' },
            { name: 'Orca Boat', promptString: 'cramped cabin, singing, swaying lantern, yellow light, night sea, camaraderie, beer cans' },
            { name: 'Barrel Chase', promptString: 'yellow barrels on water, ocean surface, speed, harpoon, salt spray, relentless pursuit' }
        ],
        posterPrompt: "Official movie poster for Jaws (1975), swimming woman on ocean surface at top, giant shark rising from the deep bottom with open mouth, red title 'JAWS', terrifying minimalist design --ar 2:3"
    },
    {
        id: 'close-encounters',
        title: 'Close Encounters of the Third Kind',
        year: '1977',
        genres: ['Drama', 'Sci-Fi'],
        director: 'Steven Spielberg',
        actors: ['Richard Dreyfuss', 'François Truffaut', 'Teri Garr'],
        type: 'movie',
        styles: [
            { name: 'Mothership Lights', promptString: 'blinding colorful lights, massive scale, silhouette of crowd, awe, night sky, lens flares' },
            { name: 'Mashed Potatoes', promptString: 'sculpting food, obsession, suburban dining room, texture, messy, madness' },
            { name: 'Abduction Light', promptString: 'orange light through keyhole, shaking objects, blinding beam, terror, supernatural' }
        ],
        posterPrompt: "Official movie poster for Close Encounters of the Third Kind (1977), straight road leading to a bright horizon light, silhouette of a person standing, starry night sky, tagline 'WE ARE NOT ALONE', mysterious sci-fi wonder --ar 2:3"
    },
    {
        id: 'alien',
        title: 'Alien',
        year: '1979',
        genres: ['Horror', 'Sci-Fi'],
        director: 'Ridley Scott',
        actors: ['Sigourney Weaver', 'Tom Skerritt', 'John Hurt'],
        type: 'movie',
        styles: [
            { name: 'Nostromo Hallway', promptString: 'padded white walls, claustrophobia, sterile lighting, ominous shadows, derelict spaceship, industrial sci-fi' },
            { name: 'Space Jockey', promptString: 'massive fossilized pilot, biomechanical texture, hr giger design, atmosphere, flashlight beam, scale' },
            { name: 'Dinner Scene', promptString: 'bright medical bay lighting, laughter, sweat, sudden terror, chestburster, blood splatter, white table' }
        ],
        posterPrompt: "Official movie poster for Alien (1979), large cracking alien egg hovering over a strange grid, glowing green light, 'IN SPACE NO ONE CAN HEAR YOU SCREAM' tagline at top, minimalist sci-fi horror --ar 2:3"
    },
    {
        id: 'rocky',
        title: 'Rocky',
        year: '1976',
        genres: ['Drama', 'Sport'],
        director: 'John G. Avildsen',
        actors: ['Sylvester Stallone', 'Talia Shire', 'Burt Young'],
        type: 'movie',
        styles: [
            { name: 'Philly Steps', promptString: 'running up steps, grey overcast sky, philadelphia museum of art, triumph, wide shot, raw energy' },
            { name: 'Meat Locker', promptString: 'hanging beef carcasses, punching meat, cold breath, industrial lighting, raw texture, training montage' },
            { name: 'Final Round', promptString: 'swollen eyes, blood, sweat, hugging adrian, chaotic ring, flashbulbs, emotional victory' }
        ],
        posterPrompt: "Official movie poster for Rocky (1976), black and white silhouette of Rocky Balboa and Adrian holding hands in the boxing ring, bright spotlights, 'ROCKY' bold title, inspirational sports drama --ar 2:3"
    },
    {
        id: 'the-exorcist',
        title: 'The Exorcist',
        year: '1973',
        genres: ['Horror'],
        director: 'William Friedkin',
        actors: ['Ellen Burstyn', 'Max von Sydow', 'Linda Blair'],
        type: 'movie',
        styles: [
            { name: 'Arrival', promptString: 'priest standing under streetlamp, foggy night, glowing window, iconic silhouette, suburban horror, exorcist' },
            { name: 'Cold Bedroom', promptString: 'visible breath, freezing room, levitating bed, demonic possession, unnatural lighting, terror' },
            { name: 'Stairs', promptString: 'steep stone steps, night, fog, ominous angle, georgetown, shadows, streetlights' }
        ],
        posterPrompt: "Official movie poster for The Exorcist (1973), silhouette of Father Merrin standing under a street light in the fog outside the MacNeil house, light beaming from a bedroom window, purple and black atmosphere, iconic horror image --ar 2:3"
    },
    {
        id: 'blade-runner',
        title: 'Blade Runner',
        year: '1982',
        genres: ['Sci-Fi', 'Thriller'],
        director: 'Ridley Scott',
        actors: ['Harrison Ford', 'Rutger Hauer', 'Sean Young'],
        type: 'movie',
        styles: [
            { name: 'Cyberpunk City', promptString: 'neon billboards, constant rain, flying spinners, futuristic los angeles, massive pyramids, noir atmosphere' },
            { name: 'Tears in Rain', promptString: 'white dove, rain on face, rooftop, neon backlight, poetic death, wet metal texture' },
            { name: 'Voight-Kampff', promptString: 'eye close up, smoke, retina reflection, interrogator machine, noir lighting, shadow blinds' }
        ],
        posterPrompt: "Official movie poster for Blade Runner (1982), Harrison Ford holding a gun in front, Sean Young smoking a cigarette, futuristic neon city skyline in background, flying spinner car, 'BLADE RUNNER' red stencil font, neo-noir sci-fi art --ar 2:3"
    },
    {
        id: 'et-extra-terrestrial',
        title: 'E.T. the Extra-Terrestrial',
        year: '1982',
        genres: ['Adventure', 'Family', 'Sci-Fi'],
        director: 'Steven Spielberg',
        actors: ['Henry Thomas', 'Drew Barrymore', 'Peter Coyote'],
        type: 'movie',
        styles: [
            { name: 'Flying Bikes', promptString: 'silhouette against full moon, bicycles in sky, forest tree line, night blue, amblin magic' },
            { name: 'Glowing Finger', promptString: 'glowing fingertip, healing light, alien skin texture, emotional connection, suburban bedroom' },
            { name: 'Hazmat Home', promptString: 'plastic tunnels, government agents, flashlights, quarantine, sci-fi invasion, menacing contrast' }
        ],
        posterPrompt: "Official movie poster for E.T. the Extra-Terrestrial (1982), young Elliott and E.T. touching fingers, glowing fingertip, bicycle flying across full moon in background, 'E.T.' large title, magical Amblin style --ar 2:3"
    },
    {
        id: 'ghostbusters',
        title: 'Ghostbusters',
        year: '1984',
        genres: ['Action', 'Comedy', 'Fantasy'],
        director: 'Ivan Reitman',
        actors: ['Bill Murray', 'Dan Aykroyd', 'Sigourney Weaver'],
        type: 'movie',
        styles: [
            { name: 'Proton Stream', promptString: 'crossing the streams, wiggly orange energy, lightning effects, rooftop battle, 80s special effects' },
            { name: 'Stay Puft', promptString: 'massive marshmallow man, walking through city, low angle, terror and comedy, nyc street' },
            { name: 'Library Ghost', promptString: 'transparent purple ghost, floating books, card catalog, spooky library, jumpscare aesthetic' }
        ],
        posterPrompt: "Official movie poster for Ghostbusters (1984), four ghostbusters firing proton streams, crossing streams, Stay Puft Marshmallow Man looming in NYC skyline, 'NO GHOSTS' logo, comedy horror classic --ar 2:3"
    },
    {
        id: 'amadeus',
        title: 'Amadeus',
        year: '1984',
        genres: ['Biography', 'Drama', 'History'],
        director: 'Milos Forman',
        actors: ['F. Murray Abraham', 'Tom Hulce', 'Elizabeth Berridge'],
        type: 'movie',
        styles: [
            { name: 'Opera House', promptString: 'candlelight, baroque architecture, powdered wigs, lavish costumes, opera performance, warm glow' },
            { name: 'Composition Bed', promptString: 'dictating music, feverish, sheet music scattered, quill pen, candlelight, intensity, shadows' },
            { name: 'Masquerade', promptString: 'venetian masks, elaborate parties, decadence, 18th century vienna, rich textures, silk' }
        ],
        posterPrompt: "Official movie poster for Amadeus (1984), Mozart silhouette conducting with wild hair, Salieri lurking in shadow, 18th century musical notes overlay, opulent gold and red color palette, dramatic biography --ar 2:3"
    },
    {
        id: 'brazil',
        title: 'Brazil',
        year: '1985',
        genres: ['Drama', 'Sci-Fi'],
        director: 'Terry Gilliam',
        actors: ['Jonathan Pryce', 'Kim Greist', 'Robert De Niro'],
        type: 'movie',
        styles: [
            { name: 'Ductwork', promptString: 'overwhelmed by pipes, industrial bureaucracy, retro technology, ducts everywhere, wide angle distortion' },
            { name: 'Dream Knight', promptString: 'silver winged armor, giant samurai, clouds, fantasy sequence, surrealism, gilliam aesthetic' },
            { name: 'Ministry of Info', promptString: 'massive brutalist architecture, tiny people, bureaucracy, paperwork, totalitarian scale' }
        ],
        posterPrompt: "Official movie poster for Brazil (1985), Sam Lowry strapped into a chair with tubes, winged knight flying in clouds above, retro-futuristic industrial pipes background, 'BRAZIL' neon neon blue title, Terry Gilliam surrealism --ar 2:3"
    },
    {
        id: 'scarface',
        title: 'Scarface',
        year: '1983',
        genres: ['Crime', 'Drama'],
        director: 'Brian De Palma',
        actors: ['Al Pacino', 'Michelle Pfeiffer', 'Steven Bauer'],
        type: 'movie',
        styles: [
            { name: 'Say Hello', promptString: 'm-16 with grenade launcher, balcony, explosion, mansion interior, red carpets, chaotic violence' },
            { name: 'Chainsaw Bathroom', promptString: 'pastel colors, cramped motel bathroom, shower curtain, blood, tension, miami vibe' },
            { name: 'Money Laundry', promptString: 'stacks of cash, bank bags, counting money, greed, 80s excess, gold and green' }
        ],
        posterPrompt: "Official movie poster for Scarface (1983), Tony Montana in a black suit divided by white negative space, holding a gun, red title 'SCARFACE', high contrast black and white minimalist design --ar 2:3"
    },
    {
        id: 'untouchables',
        title: 'The Untouchables',
        year: '1987',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Brian De Palma',
        actors: ['Kevin Costner', 'Sean Connery', 'Robert De Niro'],
        type: 'movie',
        styles: [
            { name: 'Union Station', promptString: 'falling baby carriage, slow motion, marble stairs, sailors, shootout, tension, de palma angle' },
            { name: 'Baseball Bat', promptString: 'tuxedo dinner, round table, overhead shot, violence, posh interior, sudden brutality' },
            { name: 'Border Raid', promptString: 'canadian border, horseback, bridge, leather jackets, shotgun, western vibe, wide shot' }
        ],
        posterPrompt: "Official movie poster for The Untouchables (1987), Kevin Costner, Sean Connery, and team standing tall with shotguns, Al Capone face in background, prohibition era Chicago style, art deco typography --ar 2:3"
    },
    {
        id: 'stand-by-me',
        title: 'Stand by Me',
        year: '1986',
        genres: ['Adventure', 'Drama'],
        director: 'Rob Reiner',
        actors: ['Wil Wheaton', 'River Phoenix', 'Corey Feldman'],
        type: 'movie',
        styles: [
            { name: 'Train Tracks', promptString: 'walking on railroad tracks, summer forest, camaraderie, nostalgia, vanishing point, soft sunlight' },
            { name: 'The Bridge', promptString: 'running from train, steam engine smoke, panic, height, dangerous drop, action' },
            { name: 'Campfire', promptString: 'night woods, firelight on faces, storytelling, youth, intimacy, crickets, emotional' }
        ],
        posterPrompt: "Official movie poster for Stand by Me (1986), four boys walking along train tracks, summer sunset, lush green forest, nostalgic coming of age vibe, 'STAND BY ME' title at top --ar 2:3"
    },
    {
        id: 'blue-velvet',
        title: 'Blue Velvet',
        year: '1986',
        genres: ['Crime', 'Drama', 'Mystery'],
        director: 'David Lynch',
        actors: ['Kyle MacLachlan', 'Isabella Rossellini', 'Dennis Hopper'],
        type: 'movie',
        styles: [
            { name: 'Suburban Roses', promptString: 'bright red roses, white picket fence, hyper saturated, fake perfection, blue sky, low angle' },
            { name: 'Closet Voyeur', promptString: 'view through slats, dark room, velvet robe, fear, voyeurism, lynchian atmosphere' },
            { name: 'Gas Mask', promptString: 'oxygen mask, velvet texture, manic intensity, disturbed, dim lighting, psychological horror' }
        ],
        posterPrompt: "Official movie poster for Blue Velvet (1986), Isabella Rossellini singing at a microphone, blue velvet curtain background, close up on red lips, neo-noir mystery atmospheric art --ar 2:3"
    },
    {
        id: 'paris-texas',
        title: 'Paris, Texas',
        year: '1984',
        genres: ['Drama'],
        director: 'Wim Wenders',
        actors: ['Harry Dean Stanton', 'Nastassja Kinski', 'Dean Stockwell'],
        type: 'movie',
        styles: [
            { name: 'Desert Walk', promptString: 'red baseball cap, dusty suit, endless highway, american southwest, isolation, robby muller cinematography' },
            { name: 'Peep Show', promptString: 'two way mirror, reflection, telephone, neon lighting, separation, emotional confession' },
            { name: 'Green Light', promptString: 'fluorescent green light, parking lot, dusk, lonely atmosphere, urban alienation, color mood' }
        ],
        posterPrompt: "Official movie poster for Paris, Texas (1984), Travis wearing a red baseball cap looking at a vast desert landscape, neon green sign reflection, lonely americana aesthetic, Wim Wenders style --ar 2:3"
    },
    {
        id: 'full-metal-jacket',
        title: 'Full Metal Jacket',
        year: '1987',
        genres: ['Drama', 'War'],
        director: 'Stanley Kubrick',
        actors: ['Matthew Modine', 'R. Lee Ermey', 'Vincent D\'Onofrio'],
        type: 'movie',
        styles: [
            { name: 'Barracks Lineup', promptString: 'perfect symmetry, drill instructor yelling, immaculate beds, cold blue light, wide angle lens' },
            { name: 'Sniper Ruins', promptString: 'burning building, hue city, rubble, desaturated, fire, urban warfare, tension' },
            { name: 'Mickey Mouse', promptString: 'soldiers marching, silhouettes against fire, hellish landscape, surreal war, night' }
        ],
        posterPrompt: "Official movie poster for Full Metal Jacket (1987), a military helmet with 'BORN TO KILL' written on it, bullets as peace sign, white background, bold black title, Kubrick war movie minimalism --ar 2:3"
    },
    {
        id: 'wings-of-desire',
        title: 'Wings of Desire',
        year: '1987',
        genres: ['Drama', 'Fantasy', 'Romance'],
        director: 'Wim Wenders',
        actors: ['Bruno Ganz', 'Solveig Dommartin', 'Otto Sander'],
        type: 'movie',
        styles: [
            { name: 'Angel View', promptString: 'black and white, high angle looking down on berlin, trench coat, solitude, rooftop, spiritual' },
            { name: 'Library Thoughts', promptString: 'library interior, whispering, soft light, intellectual, listening to thoughts, peaceful' },
            { name: 'Color Transition', promptString: 'shift from b&w to color, vibrant aesthetic, falling in love, sensory detail, cinematic poetry' }
        ],
        posterPrompt: "Official movie poster for Wings of Desire (1987), an angel perched on a stone statue overlooking Berlin, black and white photography, gold title text, atmospheric spiritual drama --ar 2:3"
    },
    {
        id: 'ran',
        title: 'Ran',
        year: '1985',
        genres: ['Action', 'Drama', 'War'],
        director: 'Akira Kurosawa',
        actors: ['Tatsuya Nakadai', 'Akira Terao', 'Jinpachi Nezu'],
        type: 'movie',
        styles: [
            { name: 'Color Armies', promptString: 'primary colors, red yellow blue banners, massive armies, green hills, telephoto compression, painterly' },
            { name: 'Burning Castle', promptString: 'burning wooden fortress, arrows flying, chaotic battle, smoke, blood, noh theater makeup' },
            { name: 'Mad King', promptString: 'wild hair, kimono, wandering in wilderness, storm clouds, shakespearean tragedy, epic scale' }
        ],
        posterPrompt: "Official movie poster for Ran (1985), an old warlord sitting in front of a burning castle, arrows stuck in floor, vibrant red and yellow colors, chaotic samurai battle background, Kurosawa epic --ar 2:3"
    },
    {
        id: 'cinema-paradiso',
        title: 'Cinema Paradiso',
        year: '1988',
        genres: ['Drama', 'Romance'],
        director: 'Giuseppe Tornatore',
        actors: ['Philippe Noiret', 'Enzo Cannavale', 'Antonella Attili'],
        type: 'movie',
        styles: [
            { name: 'Projection Booth', promptString: 'beam of light, film reels, dust motes, face illuminated by projector, magic of cinema' },
            { name: 'Town Square', promptString: 'outdoor screening, white sheet on wall, italian village, night, community, nostalgia, warm light' },
            { name: 'Film Kiss', promptString: 'montage of kisses, celluloid texture, black & white clips, emotional, tears, close up' }
        ],
        posterPrompt: "Official movie poster for Cinema Paradiso (1988), young boy Toto looking up at an old film projector light, Alfredo the projectionist smiling, film strips floating, warm nostalgic Italian cinema style --ar 2:3"
    },
    {
        id: 'goodfellas',
        title: 'Goodfellas',
        year: '1990',
        genres: ['Biography', 'Crime', 'Drama'],
        director: 'Martin Scorsese',
        actors: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
        type: 'movie',
        styles: [
            { name: 'Copa Shot', promptString: 'steadicam tracking shot, kitchen corridor, red light, bustling restaurant, entering club, immersion' },
            { name: 'Trunk Shot', promptString: 'looking up from trunk, red brake lights, three gangsters, brutal, high contrast, low angle' },
            { name: 'Helicopter Paranoia', promptString: 'driving car, looking at sky, frantic, sweat, cocaine energy, jump cuts, erratic camera' }
        ],
        posterPrompt: "Official movie poster for Goodfellas (1990), Henry Hill, Jimmy Conway, and Tommy DeVito looking down at a body in a car trunk, red taillight glow, 'As far back as I can remember I always wanted to be a gangster' tagline --ar 2:3"
    },
    {
        id: 'schindlers-list',
        title: 'Schindler\'s List',
        year: '1993',
        genres: ['Biography', 'Drama', 'History'],
        director: 'Steven Spielberg',
        actors: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
        type: 'movie',
        styles: [
            { name: 'Girl in Red', promptString: 'black and white crowd, selective color red coat, devastation, high angle, poignant contrast' },
            { name: 'Typewriter', promptString: 'names on list, close up keys, cigarette smoke, documents, life and death, janusz kaminski lighting' },
            { name: 'Candle Smoke', promptString: 'extinguishing candle, smoke rising, darkness, transition, somber atmosphere, metaphor' }
        ],
        posterPrompt: "Official movie poster for Schindler's List (1993), close up of two hands holding, one adult one child, selective color red coat sleeve, otherwise black and white, 'Whoever saves one life, saves the world entire' --ar 2:3"
    },
    {
        id: 'the-pianist',
        title: 'The Pianist',
        year: '2002',
        genres: ['Biography', 'Drama', 'Music'],
        director: 'Roman Polanski',
        actors: ['Adrien Brody', 'Thomas Kretschmann', 'Frank Finlay'],
        type: 'movie',
        styles: [
            { name: 'Ruined Warsaw', promptString: 'destroyed city, mountains of rubble, grey dust, loneliness, survival, wide shot devastation' },
            { name: 'Frozen Hands', promptString: 'cold breath, dirty window light, starving, playing piano air, desperation, texture' },
            { name: 'Moonlight Sonata', promptString: 'shaft of light, german officer, piano silhouette, dust particles, tension, art salvation' }
        ],
        posterPrompt: "Official movie poster for The Pianist (2002), Adrien Brody looking out a shattered window at snowy destroyed Warsaw ruins, lonely atmosphere, grand piano silhouette, somber historical drama --ar 2:3"
    },
    {
        id: 'shawshank-redemption',
        title: 'The Shawshank Redemption',
        year: '1994',
        genres: ['Drama'],
        director: 'Frank Darabont',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        type: 'movie',
        styles: [
            { name: 'Rain Freedom', promptString: 'arms wide open, pouring rain, lightning, ripped shirt, freedom, shirtless, catharsis, high angle' },
            { name: 'Library Light', promptString: 'sunlight through high bars, dust motes, books, prison library, hope, warm atmosphere' },
            { name: 'Zihuatanejo', promptString: 'bright blue ocean, white sand, wooden boat, reunion, saturated colors, paradise, wide shot' }
        ],
        posterPrompt: "Official movie poster for The Shawshank Redemption (1994), Andy Dufresne standing in the rain with arms raised to the sky, Shawshank prison in background, lightning, iconic pose of freedom --ar 2:3"
    },
    {
        id: 'reservoir-dogs',
        title: 'Reservoir Dogs',
        year: '1992',
        genres: ['Crime', 'Thriller'],
        director: 'Quentin Tarantino',
        actors: ['Harvey Keitel', 'Tim Roth', 'Michael Madsen'],
        type: 'movie',
        styles: [
            { name: 'Walking Title', promptString: 'slow motion walking, black suits, sunglasses, parking lot, cool attitude, ensemble cast, low angle' },
            { name: 'Ear Scene', promptString: 'dancing with razor, warehouse interior, radio, psychotic joy, torture, industrial grit' },
            { name: 'Mexican Standoff', promptString: 'guns pointed at each other, triangle formation, blood soaked shirts, tension, high contrast' }
        ],
        posterPrompt: "Official movie poster for Reservoir Dogs (1992), six men in black suits and sunglasses walking in slow motion, white background, blood splatter, 'RESERVOIR DOGS' title in bold, Tarantino debut classic --ar 2:3"
    },
    {
        id: 'fargo',
        title: 'Fargo',
        year: '1996',
        genres: ['Crime', 'Thriller'],
        director: 'Joel Coen',
        actors: ['William H. Macy', 'Frances McDormand', 'Steve Buscemi'],
        type: 'movie',
        styles: [
            { name: 'White Warning', promptString: 'car in snow, endless white horizon, isolation, tiny silhouette, bleak landscape, overcast' },
            { name: 'Wood Chipper', promptString: 'red blood on white snow, industrial machine, shock, black comedy contrast, daylight' },
            { name: 'Sheriff Coffee', promptString: 'warm diner interior, police uniform, coffee steam, friendly demeanor, minnesota winter outside' }
        ],
        posterPrompt: "Official movie poster for Fargo (1996), a car driving on a lonely road in a vast white snowy landscape, needlepoint art style tagline 'A HOMESPUN MURDER STORY', red blood contrast against snow --ar 2:3"
    },
    {
        id: 'big-lebowski',
        title: 'The Big Lebowski',
        year: '1998',
        genres: ['Comedy', 'Crime'],
        director: 'Joel Coen',
        actors: ['Jeff Bridges', 'John Goodman', 'Julianne Moore'],
        type: 'movie',
        styles: [
            { name: 'Bowling Jesus', promptString: 'purple jumpsuit, bowling alley, slow motion, cleaning ball, jesus quintana, surreal lighting' },
            { name: 'Rug Room', promptString: 'persian rug, bathrobe, white russian, sunglasses inside, slacker vibe, messy apartment' },
            { name: 'Gutter Dreams', promptString: 'dream sequence, bowling pin headdress, valkyrie, checkered floor, surreal musical, wide angle' }
        ],
        posterPrompt: "Official movie poster for The Big Lebowski (1998), The Dude wearing sunglasses and a bathrobe, Walter holding a bowling ball, Donny in background, neon bowling alley aesthetic, 'THE BIG LEBOWSKI' retro font --ar 2:3"
    },
    {
        id: 'trainspotting',
        title: 'Trainspotting',
        year: '1996',
        genres: ['Drama'],
        director: 'Danny Boyle',
        actors: ['Ewan McGregor', 'Ewen Bremner', 'Jonny Lee Miller'],
        type: 'movie',
        styles: [
            { name: 'Edinburgh Run', promptString: 'running down street, shopping bags, britpop energy, motion blur, freeze frame, urban decay' },
            { name: 'Toilet Dive', promptString: 'underwater surrealism, crystal clear water, swimming, fantasy, blue light, dreamlike' },
            { name: 'Ceiling Baby', promptString: 'hallucination, baby crawling on ceiling, distorted perspective, withdrawal horror, dutch angle' }
        ],
        posterPrompt: "Official movie poster for Trainspotting (1996), Ewan McGregor wrapping arms around himself, orange and white text layout lists 'Choose Life. Choose a Job. Choose a Career.', gritty 90s British cinema style --ar 2:3"
    },
    {
        id: 'princess-bride',
        title: 'The Princess Bride',
        year: '1987',
        genres: ['Adventure', 'Family', 'Fantasy'],
        director: 'Rob Reiner',
        actors: ['Cary Elwes', 'Mandy Patinkin', 'Robin Wright'],
        type: 'movie',
        styles: [
            { name: 'Cliffs of Insanity', promptString: 'rope climbing massive cliff, silhouette against blue sky, peril, dizzying height, fantasy landscape' },
            { name: 'Sword Duel', promptString: 'fencing on ruins, acrobatics, witty banter implied, warm stone texture, dynamic poses, sunlight' },
            { name: 'Storybook', promptString: 'grandpa reading book, bedroom candlelight, warmth, fantasy vignette overlay, golden glow, nostalgia' }
        ],
        posterPrompt: "Official movie poster for The Princess Bride (1987), Westley and Buttercup silhouette against a giant setting sun, grandfather reading a book border, fantasy adventure romance style, 'AS YOU WISH' text --ar 2:3"
    },
    {
        id: 'akira',
        title: 'Akira',
        year: '1988',
        genres: ['Action', 'Animation', 'Sci-Fi'],
        director: 'Katsuhiro Otomo',
        actors: ['Mitsuo Iwata', 'Nozomu Sasaki', 'Mami Koyama'],
        type: 'movie',
        styles: [
            { name: 'Neo-Tokyo Bike', promptString: 'kaneda bike slide, red trails, electric sparks, futuristic city, neon skyline, speed lines, anime aesthetic' },
            { name: 'Stadium Mutation', promptString: 'massive flesh transformation, fleshy organic horror, crumbling concrete, dust, apocalypse, visceral' },
            { name: 'Laser Satellite', promptString: 'orbital laser beam, destruction, white light, explosion shockwave, massive scale, sci-fi anime' }
        ],
        posterPrompt: "Official movie poster for Akira (1988), Kaneda walking towards his red motorcycle, Neo-Tokyo explosive background, 'AKIRA' bold red kanji title, cyber-punk anime masterpiece art --ar 2:3"
    },
    {
        id: 'unforgiven',
        title: 'Unforgiven',
        year: '1992',
        genres: ['Drama', 'Western'],
        director: 'Clint Eastwood',
        actors: ['Clint Eastwood', 'Gene Hackman', 'Morgan Freeman'],
        type: 'movie',
        styles: [
            { name: 'Rainy Saloon', promptString: 'pouring rain, mud, shotgun silhouette, dim lantern light, tension, grim western, shadows' },
            { name: 'Pig Farm', promptString: 'muddy pen, failing sunlight, rough texture, weary cowboy, realism, desaturated earth tones' },
            { name: 'Last Stand', promptString: 'whiskey bottle, dark saloon, thunderstorm outside, flashes of lightning, solitary anti-hero' }
        ],
        posterPrompt: "Official movie poster for Unforgiven (1992), Clint Eastwood silhouette in rain, holding a rifle, dark moody western sky, 'UNFORGIVEN' text in weathered font, gritty revisionist western --ar 2:3"
    },
    {
        id: 'lion-king',
        title: 'The Lion King',
        year: '1994',
        genres: ['Animation', 'Adventure', 'Drama'],
        director: 'Roger Allers, Rob Minkoff',
        actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
        type: 'movie',
        styles: [
            { name: 'Circle of Life', promptString: 'pride rock sunrise, african savanna, herds of animals, golden light, epic scale, vibrant colors' },
            { name: 'Wildebeest Stampede', promptString: 'canyon dust, rushing herd, shadows, peril, movement blur, dramatic angle, tragedy' },
            { name: 'Ghost in Clouds', promptString: 'cloud formation lion face, starry night, mystical blue light, wisdom, ethereal atmosphere' }
        ],
        posterPrompt: "Official movie poster for The Lion King (1994), Pride Rock silhouette against a massive red rising sun, Simba standing on the edge, African savanna animals bowing below, epic Disney animation style --ar 2:3"
    },
    {
        id: 'heat',
        title: 'Heat',
        year: '1995',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'Michael Mann',
        actors: ['Al Pacino', 'Robert De Niro', 'Val Kilmer'],
        type: 'movie',
        styles: [
            { name: 'Bank Heist', promptString: 'grey suits, assault rifles, downtown la, deafening sound implied, shattering glass, urban warfare, blue tint' },
            { name: 'Diner Coffee', promptString: 'two men talking, simple diner table, focus, blurred background, professional respect, stillness' },
            { name: 'LA Airport', promptString: 'planes landing, night, runway lights, chase, shadows, noise, industrial solitude' }
        ],
        posterPrompt: "Official movie poster for Heat (1995), Al Pacino and Robert De Niro faces superimposed over a blue night city skyline of Los Angeles, 'HEAT' bold metallic title, crime saga masterpiece --ar 2:3"
    },
    {
        id: 'toy-story',
        title: 'Toy Story',
        year: '1995',
        genres: ['Animation', 'Adventure', 'Comedy'],
        director: 'John Lasseter',
        actors: ['Tom Hanks', 'Tim Allen', 'Don Rickles'],
        type: 'movie',
        styles: [
            { name: 'Bedroom Floor', promptString: 'toys eye view, giant furniture, vibrant plastic textures, bedspread pattern, nostalgia, cgi' },
            { name: 'The Claw', promptString: 'aliens looking up, green glow, arcade crane, awe, plastic texture, reflection' },
            { name: 'Rocket Chase', promptString: 'rc car speeding, moving truck, rocket ignition, motion blur, asphalt texture, dynamic action' }
        ],
        posterPrompt: "Official movie poster for Toy Story (1995), Woody and Buzz Lightyear smiling, cloudy blue wallpaper background, Pixar 3D animation style, 'TOY STORY' yellow and blue logo, classic --ar 2:3"
    },
    {
        id: 'princess-mononoke',
        title: 'Princess Mononoke',
        year: '1997',
        genres: ['Animation', 'Adventure', 'Fantasy'],
        director: 'Hayao Miyazaki',
        actors: ['Yôji Matsuda', 'Yuriko Ishida', 'Yûko Tanaka'],
        type: 'movie',
        styles: [
            { name: 'Cursed Arm', promptString: 'black worm infection, hatred, glowing aura, dynamic lines, anime violence, ghibli style' },
            { name: 'Forest Spirit', promptString: 'glowing deer god, walking on water, serene nature, lush green forest, kodama spirits, magical' },
            { name: 'Iron Town', promptString: 'industrial bellows, fire, wooden fortress, female workers, smoke, feudal japan fantasy' }
        ],
        posterPrompt: "Official movie poster for Princess Mononoke (1997), San with blood on her face riding a giant white wolf, Ashitaka riding a red elk, forest spirits background, Studio Ghibli fantasy epic art --ar 2:3"
    },
    {
        id: 'truman-show',
        title: 'The Truman Show',
        year: '1998',
        genres: ['Comedy', 'Drama'],
        director: 'Peter Weir',
        actors: ['Jim Carrey', 'Ed Harris', 'Laura Linney'],
        type: 'movie',
        styles: [
            { name: 'Hidden Camera', promptString: 'fisheye lens, vignette, surveillance angle, fake suburban perfection, bright lighting, unnatural' },
            { name: 'The Wall', promptString: 'boat hitting painted sky, artificial horizon, realization, tear in reality, blue sky wall' },
            { name: 'Exit Door', promptString: 'black stairs against sky, spotlight, final bow, silhouette, escaping simulation, surrealism' }
        ],
        posterPrompt: "Official movie poster for The Truman Show (1998), mosaic of hundreds of tiny photos forming Jim Carrey's face, 'ON THE AIR' graphic, television monitors background, satirical drama --ar 2:3"
    },
    {
        id: 'american-beauty',
        title: 'American Beauty',
        year: '1999',
        genres: ['Drama'],
        director: 'Sam Mendes',
        actors: ['Kevin Spacey', 'Annette Bening', 'Thora Birch'],
        type: 'movie',
        styles: [
            { name: 'Rose Petals', promptString: 'bed of red roses, birds eye view, fantasy, vivid red, smooth skin, surreal desire, dream' },
            { name: 'Plastic Bag', promptString: 'floating white bag, leaves dancing, mundane beauty, lo-fi video texture, wind, serenity' },
            { name: 'Dining Table', promptString: 'distant composition, symmetry, candlelight, cold atmosphere, suburban dysfunction, shadows' }
        ],
        posterPrompt: "Official movie poster for American Beauty (1999), a girl lying in a bed of red rose petals seen from above, minimalist composition, '...look closer' tagline, provocative drama art --ar 2:3"
    },
    {
        id: 'crouching-tiger',
        title: 'Crouching Tiger, Hidden Dragon',
        year: '2000',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Ang Lee',
        actors: ['Chow Yun-Fat', 'Michelle Yeoh', 'Zhang Ziyi'],
        type: 'movie',
        styles: [
            { name: 'Bamboo Fight', promptString: 'balancing on green bamboo, swaying, gravity defying, sweeping camera, wuxia elegance, forest' },
            { name: 'Rooftop Chase', promptString: 'running on tiles, night, blue moonlight, floating robes, stealth, ancient china architecture' },
            { name: 'Desert Cave', promptString: 'candlelight, rocky texture, intimacy, isolation, flashback, warm glow, romance' }
        ],
        posterPrompt: "Official movie poster for Crouching Tiger, Hidden Dragon (2000), Michelle Yeoh and Zhang Ziyi fighting in a green bamboo forest, flying wire-fu action, blurred motion, elegant wuxia art style --ar 2:3"
    },
    {
        id: 'spirited-away',
        title: 'Spirited Away',
        year: '2001',
        genres: ['Animation', 'Adventure', 'Family'],
        director: 'Hayao Miyazaki',
        actors: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
        type: 'movie',
        styles: [
            { name: 'Bathhouse Night', promptString: 'glowing lanterns, bridge, spirits crossing, reflection on water, massive wooden structure, ghibli magic' },
            { name: 'Train on Water', promptString: 'train tracks submerged, endless ocean, lonely shadow passengers, melancholic beauty, sunset' },
            { name: 'Dragon Flight', promptString: 'white dragon flying, scales, wind in hair, night sky, friendship, dynamic anime angle' }
        ],
        posterPrompt: "Official movie poster for Spirited Away (2001), Chihiro standing on a bridge in front of the massive bathhouse, No Face spirit standing next to her, twilight purple sky, Ghibli masterpiece --ar 2:3"
    },
    {
        id: 'amelie',
        title: 'Amélie',
        year: '2001',
        genres: ['Comedy', 'Romance'],
        director: 'Jean-Pierre Jeunet',
        actors: ['Audrey Tautou', 'Mathieu Kassovitz', 'Rufus'],
        type: 'movie',
        styles: [
            { name: 'Green & Red', promptString: 'saturated green and red palette, parisian street, whimsical, wide angle close up, mischievous smile' },
            { name: 'Spoon Cracking', promptString: 'creme brulee, cracking crust, sensory detail, macro shot, golden light, simple pleasure' },
            { name: 'Photobooth', promptString: 'torn photo pieces, mystery, montage, quirky interior, warm lighting, eccentric' }
        ],
        posterPrompt: "Official movie poster for Amélie (2001), Audrey Tautou looking mischievously at the camera, spoon breaking creme brulee crust, warm red and green saturated colors, French whimsical cinema --ar 2:3"
    },
    {
        id: 'city-of-god',
        title: 'City of God',
        year: '2002',
        genres: ['Crime', 'Drama'],
        director: 'Fernando Meirelles, Kátia Lund',
        actors: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele'],
        type: 'movie',
        styles: [
            { name: 'Chicken Chase', promptString: 'low angle, chicken running, knife sharpening, favela streets, frantic editing style, gritty color' },
            { name: 'Favela Dust', promptString: 'golden hour, dust kicking up, kids with guns, raw realism, claustrophobic alleyways, heat' },
            { name: ' strobe Party', promptString: 'disco lights, sweat, dancing, sudden violence, motion blur, chaotic night, high contrast' }
        ],
        posterPrompt: "Official movie poster for City of God (2002), Rocket holding a camera, Lil Ze holding a gun, chicken running in foreground, golden sun over favela background, vibrant Kinetic energy --ar 2:3"
    },
    {
        id: 'lost-in-translation',
        title: 'Lost in Translation',
        year: '2003',
        genres: ['Comedy', 'Drama'],
        director: 'Sofia Coppola',
        actors: ['Bill Murray', 'Scarlett Johansson', 'Giovanni Ribisi'],
        type: 'movie',
        styles: [
            { name: 'Tokyo Neon', promptString: 'taxi window reflection, neon city lights, bokeh, loneliness, dreamy atmosphere, shoegaze vibe' },
            { name: 'Hotel Bar', promptString: 'jazz band, whiskey glass, blurred background, connection, sadness, soft warm light' },
            { name: 'Pink Wig', promptString: 'karaoke room, pink wig, singing, hallway, blue lighting, finding joy, candid moment' }
        ],
        posterPrompt: "Official movie poster for Lost in Translation (2003), Bill Murray and Scarlett Johansson back to back in Tokyo, neon city lights bokeh, melancholic romance, Sofia Coppola style --ar 2:3"
    },
    {
        id: 'eternal-sunshine',
        title: 'Eternal Sunshine of the Spotless Mind',
        year: '2004',
        genres: ['Drama', 'Romance', 'Sci-Fi'],
        director: 'Michel Gondry',
        actors: ['Jim Carrey', 'Kate Winslet', 'Tom Wilkinson'],
        type: 'movie',
        styles: [
            { name: 'Ice Bed', promptString: 'bed on frozen lake, cracking ice, surrealism, cold blue, memory fading, lovers lying together' },
            { name: 'Bookstore Erasure', promptString: 'books disappearing to white, lights going out, collapsing reality, panic, handheld camera' },
            { name: 'Hair Color', promptString: 'blue hair, orange hoodie, train interior, mundane romance, soft focus, indie aesthetic' }
        ],
        posterPrompt: "Official movie poster for Eternal Sunshine of the Spotless Mind (2004), Jim Carrey and Kate Winslet lying on cracked ice, memories fading, surrealist romance, Michel Gondry style --ar 2:3"
    },
    {
        id: 'shaun-of-the-dead',
        title: 'Shaun of the Dead',
        year: '2004',
        genres: ['Comedy', 'Horror'],
        director: 'Edgar Wright',
        actors: ['Simon Pegg', 'Nick Frost', 'Kate Ashfield'],
        type: 'movie',
        styles: [
            { name: 'Fence Jump', promptString: 'falling fence, backyard, zombie apocalypse, comedy pratfall, daylight, suburban chaos' },
            { name: 'Pub Defense', promptString: 'winchester pub interior, pool cues, queen soundtrack implied, zombies at window, desperate' },
            { name: 'Cornetto', promptString: 'eating ice cream, hungover, oblivious to chaos, shop interior, morning light, visual comedy' }
        ],
        posterPrompt: "Official movie poster for Shaun of the Dead (2004), Simon Pegg and Nick Frost with cricket bat and shovel, zombies behind them, Winchester pub, 'A ROMANTIC COMEDY WITH ZOMBIES' tagline, horror comedy style --ar 2:3"
    },
    {
        id: 'the-incredibles',
        title: 'The Incredibles',
        year: '2004',
        genres: ['Animation', 'Action', 'Adventure'],
        director: 'Brad Bird',
        actors: ['Craig T. Nelson', 'Holly Hunter', 'Samuel L. Jackson'],
        type: 'movie',
        styles: [
            { name: 'Jungle Run', promptString: 'dense jungle foliage, red speedster blur, robots chasing, kinetic energy, pixar lighting, dynamic' },
            { name: 'Volcano Lair', promptString: 'sleek 60s design, lava glow, bond villain architecture, silhouette, computer screens' },
            { name: 'Super Suit', promptString: 'spandex texture, logo close up, family pose, urban battle debris, heroic lighting' }
        ],
        posterPrompt: "Official movie poster for The Incredibles (2004), superhero family in classic hero poses, red spandex suits, retro 60s style city background, 'THE INCREDIBLES' title, Pixar animation --ar 2:3"
    },
    {
        id: 'v-for-vendetta',
        title: 'V for Vendetta',
        year: '2005',
        genres: ['Action', 'Drama', 'Sci-Fi'],
        director: 'James McTeigue',
        actors: ['Hugo Weaving', 'Natalie Portman', 'Rupert Graves'],
        type: 'movie',
        styles: [
            { name: 'Mask & Daggers', promptString: 'guy fawkes mask, black cape, motion trail, throwing knives, london alley, noir lighting' },
            { name: 'Dominoes', promptString: 'falling dominoes pattern, intricate setup, red and black, symbol of chaos, overhead shot' },
            { name: 'Exploding Parliament', promptString: 'fireworks, old bailey explosion, tchaikovsky implied, awe, crowd in masks, revolution' }
        ],
        posterPrompt: "Official movie poster for V for Vendetta (2005), V in Guy Fawkes mask with cape and daggers, Parliament exploding in fireworks, 'REMEMBER REMEMBER THE 5TH OF NOVEMBER' text, revolutionary action style --ar 2:3"
    },
    {
        id: 'children-of-men',
        title: 'Children of Men',
        year: '2006',
        genres: ['Action', 'Drama', 'Sci-Fi'],
        director: 'Alfonso Cuarón',
        actors: ['Julianne Moore', 'Clive Owen', 'Chiwetel Ejiofor'],
        type: 'movie',
        styles: [
            { name: 'Car Ambush', promptString: 'forest road, shattered glass, ping pong ball cam urgency, long take, chaos, burning car' },
            { name: 'Ceasefire Cry', promptString: 'baby crying, soldiers stopping fire, ruined building, awe, dirty texture, religious symbolism' },
            { name: 'Foggy Boat', promptString: 'rowboat in fog, buoy light, hope, grey misery, sea texture, despair vs survival' }
        ],
        posterPrompt: "Official movie poster for Children of Men (2006), Clive Owen protecting a pregnant woman, ruined urban London, 'THE YEAR IS 2027' text, gritty dystopian sci-fi style --ar 2:3"
    },
    {
        id: 'there-will-be-blood',
        title: 'There Will Be Blood',
        year: '2007',
        genres: ['Drama'],
        director: 'Paul Thomas Anderson',
        actors: ['Daniel Day-Lewis', 'Paul Dano', 'Ciarán Hinds'],
        type: 'movie',
        styles: [
            { name: 'Oil Gusher', promptString: 'oil raining down, fire in background, silhouette, black grease, madness, hellish landscape' },
            { name: 'Bowling Alley', promptString: 'private bowling lane, wooden pins, violent confrontation, milk, shadows, insanity' },
            { name: 'Desert Plain', promptString: 'barren california landscape, oil derrick, harsh sun, isolation, greed, wide shot' }
        ],
        posterPrompt: "Official movie poster for There Will Be Blood (2007), Daniel Day-Lewis as Daniel Plainview covered in oil, fire erupting from oil well, 'THERE WILL BE BLOOD' bold title, Paul Thomas Anderson epic drama --ar 2:3"
    },
    {
        id: 'wall-e',
        title: 'WALL·E',
        year: '2008',
        genres: ['Animation', 'Adventure', 'Family'],
        director: 'Andrew Stanton',
        actors: ['Ben Burtt', 'Elissa Knight', 'Jeff Garlin'],
        type: 'movie',
        styles: [
            { name: 'Trash Planet', promptString: 'towers of garbage, rusty cube robot, smoggy orange sky, loneliness, post-apocalyptic, detail' },
            { name: 'Space Dance', promptString: 'fire extinguisher propulsion, floating in space, stardust, romance, silence, blue cosmos' },
            { name: 'Green Plant', promptString: 'single green leaf, boot, sterile white robot, contrast, hope, macro lens' }
        ],
        posterPrompt: "Official movie poster for WALL·E (2008), lonely robot WALL·E holding hands with EVE among stars, Earth with trash mountains below, 'WALL·E' title, Pixar sci-fi romance --ar 2:3"
    },
    {
        id: 'district-9',
        title: 'District 9',
        year: '2009',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
        director: 'Neill Blomkamp',
        actors: ['Sharlto Copley', 'David James', 'Jason Cope'],
        type: 'movie',
        styles: [
            { name: 'Mothership Hover', promptString: 'massive ship over johannesburg, slums below, documentary style, handheld shake, gritty realism' },
            { name: 'Prawn Mech', promptString: 'alien mech suit, garbage tech, missiles, dirt exploding, body horror transformation, sun flare' },
            { name: 'Cat Food', promptString: 'alien hovel, eating cat food, squalor, flies, found footage aesthetic, harsh sunlight' }
        ],
        posterPrompt: "Official movie poster for District 9 (2009), alien 'prawn' creature in Johannesburg slum, massive mothership hovering overhead, documentary-style, 'DISTRICT 9' stencil font, gritty sci-fi --ar 2:3"
    },
    {
        id: 'black-swan',
        title: 'Black Swan',
        year: '2010',
        genres: ['Drama', 'Thriller'],
        director: 'Darren Aronofsky',
        actors: ['Natalie Portman', 'Mila Kunis', 'Vincent Cassel'],
        type: 'movie',
        styles: [
            { name: 'Mirror Crack', promptString: 'infinite reflection, cracking glass, double identity, ballet studio, psychological horror, grainy' },
            { name: 'Black Feathers', promptString: 'skin transforming into feathers, red eyes, stage lights, madness, visceral texture, metamorphosis' },
            { name: 'Stage Spotlight', promptString: 'blinded by white light, silhouette dancing, sweat, perfection, hallucination, high contrast' }
        ],
        posterPrompt: "Official movie poster for Black Swan (2010), Natalie Portman's face transforming into black feathered swan, cracking mirror, psychological thriller, 'BLACK SWAN' elegant title --ar 2:3"
    },
    {
        id: 'social-network',
        title: 'The Social Network',
        year: '2010',
        genres: ['Biography', 'Drama'],
        director: 'David Fincher',
        actors: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake'],
        type: 'movie',
        styles: [
            { name: 'Hacking Glare', promptString: 'monitor glow on face, coding frenzy, dark dorm room, isolation, fincher yellow-green tint' },
            { name: 'Regatta', promptString: 'tilt shift effect, rowing boats, water spray, elite ivy league, soft focus, music video style' },
            { name: 'Laptop Smash', promptString: 'shattered laptop, rain window, betrayal, frustration, cold office lighting, sharp focus' }
        ],
        posterPrompt: "Official movie poster for The Social Network (2010), Mark Zuckerberg silhouette formed by Facebook friend icons, 'YOU DON'T GET TO 500 MILLION FRIENDS WITHOUT MAKING A FEW ENEMIES' tagline --ar 2:3"
    },
    {
        id: 'her',
        title: 'Her',
        year: '2013',
        genres: ['Drama', 'Romance', 'Sci-Fi'],
        director: 'Spike Jonze',
        actors: ['Joaquin Phoenix', 'Amy Adams', 'Scarlett Johansson'],
        type: 'movie',
        styles: [
            { name: 'Red Shirt', promptString: 'bright red shirt, high waisted pants, soft pastels, future los angeles, emotional close up, warm' },
            { name: 'OS Earbud', promptString: 'lonely walk, talking to air, ear piece, city background, soft focus, intimacy, melancholic' },
            { name: 'Future Skyline', promptString: 'hazy skyscrapers, no cars, pedestrian utopia, soft light, loneliness, clean design' }
        ],
        posterPrompt: "Official movie poster for Her (2013), Joaquin Phoenix looking lonely with earpiece, soft pastel Los Angeles skyline, 'HER' minimalist title, Spike Jonze romantic sci-fi --ar 2:3"
    },
    {
        id: 'whiplash',
        title: 'Whiplash',
        year: '2014',
        genres: ['Drama', 'Music'],
        director: 'Damien Chazelle',
        actors: ['Miles Teller', 'J.K. Simmons', 'Paul Reiser'],
        type: 'movie',
        styles: [
            { name: 'Drum Solo', promptString: 'sweat dripping on cymbal, blood on snare drum, extreme close up, intense focus, motion blur, warm stage light' },
            { name: 'Fletcher\'s Hand', promptString: 'clenched fist conducting, veins popping, black t-shirt, terrifying authority, darkened room, spotlight' },
            { name: 'Car Crash', promptString: 'overturned car, drumsticks scattered, broken glass, disorientation, tinnitus ringing implied, shock' }
        ],
        posterPrompt: "Official movie poster for Whiplash (2014), J.K. Simmons and Miles Teller face to face in intense confrontation, drum kit silhouette, 'WHIPLASH' bold title, music drama --ar 2:3"
    },
    {
        id: 'la-la-land',
        title: 'La La Land',
        year: '2016',
        genres: ['Comedy', 'Drama', 'Music'],
        director: 'Damien Chazelle',
        actors: ['Ryan Gosling', 'Emma Stone', 'Rosemarie DeWitt'],
        type: 'movie',
        styles: [
            { name: 'Griffith Dance', promptString: 'dancing at twilight, purple sky, yellow dress, lamppost, los angeles valley background, magical realism' },
            { name: 'Planetarium', promptString: 'floating in stars, observatory, silhouette waltz, blue cosmos, dreamy, romance' },
            { name: 'Epilogue Jazz', promptString: 'spotlight on piano, smoky club, blue velvet curtain, melancholic nostalgia, cinematic lighting' }
        ],
        posterPrompt: "Official movie poster for La La Land (2016), Ryan Gosling and Emma Stone dancing against purple LA skyline, stars and lamp posts, 'LA LA LAND' golden text, musical romance --ar 2:3"
    },
    {
        id: 'grand-budapest-hotel',
        title: 'The Grand Budapest Hotel',
        year: '2014',
        genres: ['Adventure', 'Comedy', 'Crime'],
        director: 'Wes Anderson',
        actors: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
        type: 'movie',
        styles: [
            { name: 'Pink Facade', promptString: 'pastel pink hotel, snowy mountain, perfect symmetry, miniature model aesthetic, wes anderson style, whimsical' },
            { name: 'Mendl\'s Box', promptString: 'pink pastry box, blue ribbon, delicious cake, symmetrical composition, pastel colors, overhead shot' },
            { name: 'Hotel Lobby', promptString: 'red carpet, purple uniforms, grand staircase, wide angle, eccentric characters, intricate detail' }
        ],
        posterPrompt: "Official movie poster for The Grand Budapest Hotel (2014), pink hotel on snowy mountain, M. Gustave in purple uniform, Wes Anderson symmetrical composition, pastel color palette --ar 2:3"
    },
    {
        id: 'birdman',
        title: 'Birdman',
        year: '2014',
        genres: ['Comedy', 'Drama'],
        director: 'Alejandro G. Iñárritu',
        actors: ['Michael Keaton', 'Zach Galifianakis', 'Edward Norton'],
        type: 'movie',
        styles: [
            { name: 'Times Square', promptString: 'walking in underwear, crowded street, continuous shot, handheld camera, chaotic energy, broadway night' },
            { name: 'Dressing Room', promptString: 'mirror reflection, telekinetic objects, ego, magical realism, warm light bulb, clutter' },
            { name: ' rooftop Flight', promptString: 'flying over nyc streets, freedom, sunset, liberation, superhero silhouette, surreal' }
        ],
        posterPrompt: "Official movie poster for Birdman (2014), Michael Keaton as Riggan Thomson with Birdman shadow behind him, Broadway marquee, 'BIRDMAN' title, continuous shot surreal style --ar 2:3"
    },
    {
        id: 'ex-machina',
        title: 'Ex Machina',
        year: '2014',
        genres: ['Drama', 'Sci-Fi', 'Thriller'],
        director: 'Alex Garland',
        actors: ['Alicia Vikander', 'Domhnall Gleeson', 'Oscar Isaac'],
        type: 'movie',
        styles: [
            { name: 'Glass Box', promptString: 'ava robot, transparent midsection, glass walls, reflection, nature outside, sterile modern architecture' },
            { name: 'Red Lockdown', promptString: 'emergency red lighting, claustrophobia, geometric shadows, technological thriller, tension' },
            { name: 'Robot Skin', promptString: 'peeling skin revealing metal, mesh texture, uncanny valley, soft lighting, delicate' }
        ],
        posterPrompt: "Official movie poster for Ex Machina (2014), Ava the AI robot with transparent mechanical body, glass walls reflecting nature, 'EX MACHINA' minimalist title, sci-fi thriller --ar 2:3"
    },
    {
        id: 'the-revenant',
        title: 'The Revenant',
        year: '2015',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Alejandro G. Iñárritu',
        actors: ['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'],
        type: 'movie',
        styles: [
            { name: 'Bear Attack', promptString: 'grizzly bear breath, fogging lens, blood in snow, raw survival, terrifying close up, natural light' },
            { name: 'Frozen Beard', promptString: 'icicles on beard, extreme cold, wide angle close up, suffering, wilderness, emmanuel lubezki' },
            { name: 'Horse Carcass', promptString: 'sleeping inside horse, steam, gore, snow storm, primal survival, bleak landscape' }
        ],
        posterPrompt: "Official movie poster for The Revenant (2015), Leonardo DiCaprio as Hugh Glass in frozen wilderness, bear attack scars, 'THE REVENANT' bold title, survival epic --ar 2:3"
    },
    {
        id: 'moonlight',
        title: 'Moonlight',
        year: '2016',
        genres: ['Drama'],
        director: 'Barry Jenkins',
        actors: ['Mahershala Ali', 'Naomie Harris', 'Trevante Rhodes'],
        type: 'movie',
        styles: [
            { name: 'Blue Skin', promptString: 'black skin glowing blue under moonlight, ocean breeze, intimacy, high contrast, soulful eyes' },
            { name: 'Swimming Lesson', promptString: 'ocean waves, holding head above water, trust, sunlight, sparkling water, tenderness' },
            { name: 'Diner Booth', promptString: 'cooking meal, warm light, reunion, smoke, nervous energy, love, close up' }
        ],
        posterPrompt: "Official movie poster for Moonlight (2016), three versions of Chiron at different ages, blue moonlight on black skin, 'MOONLIGHT' elegant title, Barry Jenkins poetic drama --ar 2:3"
    },
    {
        id: 'get-out',
        title: 'Get Out',
        year: '2017',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'Jordan Peele',
        actors: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'],
        type: 'movie',
        styles: [
            { name: 'The Sunken Place', promptString: 'falling into darkness, watching through tv screen, paralysis, floating, surreal horror, void' },
            { name: 'Tearing Up', promptString: 'hypnosis, single tear rolling down cheek, frozen expression, wide eyes, fear, close up' },
            { name: 'Flashbulb', promptString: 'camera flash, nose bleed, sudden aggression, party guest, psychological thriller, tension' }
        ],
        posterPrompt: "Official movie poster for Get Out (2017), Daniel Kaluuya screaming while being pulled into darkness, single tear rolling, 'GET OUT' horror title, Jordan Peele's social thriller --ar 2:3"
    },
    {
        id: 'lady-bird',
        title: 'Lady Bird',
        year: '2017',
        genres: ['Comedy', 'Drama'],
        director: 'Greta Gerwig',
        actors: ['Saoirse Ronan', 'Laurie Metcalf', 'Tracy Letts'],
        type: 'movie',
        styles: [
            { name: 'Car Jump', promptString: 'opening door moving car, sacramento suburbs, pink cast, arguing, teenage rebellion, daylight' },
            { name: 'Prom Dress', promptString: 'pink dress, thrift shop, mother daughter, mirror reflection, coming of age, warm light' },
            { name: 'Airport Drive', promptString: 'driving loop, sacramento scenery, nostalgia, golden hour, acceptance, melancholic' }
        ],
        posterPrompt: "Official movie poster for Lady Bird (2017), Saoirse Ronan looking out car window, Sacramento suburbs, pink and golden tones, 'LADY BIRD' handwritten title, coming of age style --ar 2:3"
    },
    {
        id: 'call-me-by-your-name',
        title: 'Call Me by Your Name',
        year: '2017',
        genres: ['Drama', 'Romance'],
        director: 'Luca Guadagnino',
        actors: ['Armie Hammer', 'Timothée Chalamet', 'Michael Stuhlbarg'],
        type: 'movie',
        styles: [
            { name: 'Italian Summer', promptString: 'lush green garden, peach tree, sunlight, sweat, lazy afternoon, villa architecture, 35mm film' },
            { name: 'Fireplace', promptString: 'crying by fire, snow outside, long take, heartbreak, flickering light, emotional close up' },
            { name: 'Bike Ride', promptString: 'riding bicycles, countryside road, sunglasses, summer breeze, friendship, wide shot' }
        ],
        posterPrompt: "Official movie poster for Call Me by Your Name (2017), Timothée Chalamet and Armie Hammer in Italian summer villa, peach tree, golden sunlight, 'CALL ME BY YOUR NAME' title, romantic drama --ar 2:3"
    },
    {
        id: 'spider-verse',
        title: 'Spider-Man: Into the Spider-Verse',
        year: '2018',
        genres: ['Animation', 'Action', 'Adventure'],
        director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
        actors: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld'],
        type: 'movie',
        styles: [
            { name: 'Leap of Faith', promptString: 'upside down city skyline, glass reflection, hoodie, falling upward, chromatic aberration, comic book dots' },
            { name: 'Glitch Effect', promptString: 'digital distortion, rgb split, comic panels, dynamic action, neon colors, graffiti style' },
            { name: 'Collider', promptString: 'psychedelic colors, dimensional rift, cubism, kirby krackle, energy beam, massive scale' }
        ],
        posterPrompt: "Official movie poster for Spider-Man: Into the Spider-Verse (2018), Miles Morales falling upward over NYC skyline, comic book halftone dots, multiple Spider-People, chromatic aberration, animated masterpiece --ar 2:3"
    },
    {
        id: 'parasite',
        title: 'Parasite',
        year: '2019',
        genres: ['Comedy', 'Drama', 'Thriller'],
        director: 'Bong Joon Ho',
        actors: ['Kang-ho Song', 'Sun-kyun Lee', 'Yeo-jeong Cho'],
        type: 'movie',
        styles: [
            { name: 'Scholar\'s Rock', promptString: 'holding heavy stone, obsessive stare, basement apartment, clutter, symbolic weight, metaphor' },
            { name: 'Flood', promptString: 'sewage water rising, toilet overflowing, rainstorm, desperate, darkness, social commentary' },
            { name: 'Garden Party', promptString: 'bright sunlight, manicured lawn, bloody chaos, hidden horror, social contrast, slow motion' }
        ],
        posterPrompt: "Official movie poster for Parasite (2019), Kim family with eyes blacked out by censorship bars, luxury house and poor semi-basement split design, 'PARASITE' Korean text, Bong Joon Ho masterpiece --ar 2:3"
    },
    {
        id: 'midsommar',
        title: 'Midsommar',
        year: '2019',
        genres: ['Drama', 'Horror', 'Mystery'],
        director: 'Ari Aster',
        actors: ['Florence Pugh', 'Jack Reynor', 'Vilhelm Blomgren'],
        type: 'movie',
        styles: [
            { name: 'May Queen', promptString: 'covered in flowers, crying and laughing, bright daylight horror, floral crown, pagan ritual, psychedelic' },
            { name: 'Yellow Temple', promptString: 'triangular wooden building, burning, blue sky, idyllic nightmare, symmetry, wide shot' },
            { name: 'Attestupa', promptString: 'cliff jump, white robes, blood on rock, shock, gathered community, bright sun' }
        ],
        posterPrompt: "Official movie poster for Midsommar (2019), Florence Pugh as May Queen covered in flowers, bright daylight Swedish village, floral crown, 'MIDSOMMAR' title, Ari Aster folk horror --ar 2:3"
    },
    {
        id: 'lighthouse',
        title: 'The Lighthouse',
        year: '2019',
        genres: ['Drama', 'Fantasy', 'Horror'],
        director: 'Robert Eggers',
        actors: ['Robert Pattinson', 'Willem Dafoe', 'Valeriia Karaman'],
        type: 'movie',
        styles: [
            { name: 'Fresnel Lens', promptString: 'hypnotic light rotation, madness, monochrome, 1.19:1 aspect ratio, high contrast texture, obsession' },
            { name: 'Seagull', promptString: 'one eyed gull, rain, storm, omen, staring contest, gritty texture, misery' },
            { name: 'Promethean Fire', promptString: 'screaming at light, tentacles, cosmic horror, insanity, stark shadows, german expressionism' }
        ],
        posterPrompt: "Official movie poster for The Lighthouse (2019), Robert Pattinson and Willem Dafoe with hypnotic lighthouse beam, 1.19:1 black and white aspect ratio, 'THE LIGHTHOUSE' stencil title, Robert Eggers psychological horror --ar 2:3"
    },
    {
        id: 'lady-on-fire',
        title: 'Portrait of a Lady on Fire',
        year: '2019',
        genres: ['Drama', 'Romance'],
        director: 'Céline Sciamma',
        actors: ['Noémie Merlant', 'Adèle Haenel', 'Luàna Bajrami'],
        type: 'movie',
        styles: [
            { name: 'Bonfire Dress', promptString: 'dress on fire, night beach, staring, desire, painterly composition, warm light vs cold blue' },
            { name: 'Beach Walk', promptString: 'wind in scarves, covering face, cliffs, ocean waves, yearning, natural light' },
            { name: 'Page 28', promptString: 'drawing in book, mirror reflection, secret love, art texture, candlelight, intimacy' }
        ],
        posterPrompt: "Official movie poster for Portrait of a Lady on Fire (2019), two women gazing at each other, bonfire at night, 18th century French coastal setting, painterly composition, romantic drama --ar 2:3"
    },
    {
        id: 'uncut-gems',
        title: 'Uncut Gems',
        year: '2019',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Benny Safdie, Josh Safdie',
        actors: ['Adam Sandler', 'Julia Fox', 'Idina Menzel'],
        type: 'movie',
        styles: [
            { name: 'Opal Glow', promptString: 'macro shot inside opal, universe within, colors, obsession, greed, psychedelic transition' },
            { name: 'Jewelry Store', promptString: 'security door, claustrophobia, reflection, shouting, chaotic energy, fluorescent light' },
            { name: 'Night Club', promptString: 'black light, neon, smoke, sweating, anxiety attack, crowded, noise' }
        ],
        posterPrompt: "Official movie poster for Uncut Gems (2019), Adam Sandler as Howard Ratner looking at glowing opal gem, chaotic NYC jewelry district, 'UNCUT GEMS' neon title, Safdie Brothers thriller --ar 2:3"
    },
    {
        id: '1917',
        title: '1917',
        year: '2019',
        genres: ['Action', 'Drama', 'War'],
        director: 'Sam Mendes',
        actors: ['Dean-Charles Chapman', 'George MacKay', 'Daniel Mays'],
        type: 'movie',
        styles: [
            { name: 'No Man\'s Land', promptString: 'barbed wire, mud (craters), rotting horses, continuous shot, desaturated, corpses, tension' },
            { name: 'Burning Church', promptString: 'flares lighting up ruins, silhouettes running, shadows moving, hellscape, orange and black' },
            { name: 'Cherry Blossoms', promptString: 'floating petals in river, bloated bodies, contrast of beauty and death, nature, serenity' }
        ],
        posterPrompt: "Official movie poster for 1917 (2019), two soldiers crossing no man's land, continuous shot illusion, trenches and flares, '1917' bold title, Sam Mendes WWI epic --ar 2:3"
    },
    {
        id: 'everything-everywhere',
        title: 'Everything Everywhere All at Once',
        year: '2022',
        genres: ['Action', 'Adventure', 'Comedy'],
        director: 'Dan Kwan, Daniel Scheinert',
        actors: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'],
        type: 'movie',
        styles: [
            { name: 'Googly Eyes', promptString: 'third eye sticker, rock with eyes, absurdity, multiverse jump, vibrant chaos, surreal' },
            { name: 'Bagel Void', promptString: 'black hole bagel, swirling darkness, entropy, white temple, wind, philosophical despair' },
            { name: 'Hot Dog Fingers', promptString: 'sausage fingers, romance, piano playing, pastel colors, bizarre universe, soft focus' }
        ],
        posterPrompt: "Official movie poster for Everything Everywhere All at Once (2022), Michelle Yeoh surrounded by multiverse portals, googly eyes, Daniels surrealism, 'EVERYTHING EVERYWHERE ALL AT ONCE' title --ar 2:3"
    },
    {
        id: 'the-batman',
        title: 'The Batman',
        year: '2022',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'Matt Reeves',
        actors: ['Robert Pattinson', 'Zoë Kravitz', 'Jeffrey Wright'],
        type: 'movie',
        styles: [
            { name: 'Red Flare', promptString: 'holding flare in dark water, guiding people, heavy rain, deep red lighting, noir hero, gritty' },
            { name: 'Batmobile Engine', promptString: 'blue flame exhaust, muscle car silhouette, rain, blurred lights, visceral sound implied, darkness' },
            { name: 'Riddler Coffee', promptString: 'foam art question mark, diner window, surveillance view, rain streaks, mystery, green tint' }
        ],
        posterPrompt: "Official movie poster for The Batman (2022), Robert Pattinson as Batman in rain with red flare, Gotham City flooded, dark noir style, 'THE BATMAN' title, Matt Reeves gritty superhero --ar 2:3"
    },
    {
        id: 'oppenheimer',
        title: 'Oppenheimer',
        year: '2023',
        genres: ['Biography', 'Drama', 'History'],
        director: 'Christopher Nolan',
        actors: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
        type: 'movie',
        styles: [
            { name: 'Trinity Test', promptString: 'wall of fire, silent explosion, blinding light, mushroom cloud, imax scale, desert' },
            { name: 'Quantum Ripples', promptString: 'rain drops on pond, subatomic particles, visualization of physics, abstract, mind, vibration' },
            { name: 'Interrogation', promptString: 'small room, harsh lighting, sweat, claustrophobia, black and white vs color, intense staring' }
        ],
        posterPrompt: "Official movie poster for Oppenheimer (2023), Cillian Murphy as J. Robert Oppenheimer, nuclear explosion and Trinity test, 'OPPENHEIMER' bold title, Christopher Nolan IMAX epic biography --ar 2:3"
    },
    {
        id: 'barbie',
        title: 'Barbie',
        year: '2023',
        genres: ['Adventure', 'Comedy', 'Fantasy'],
        director: 'Greta Gerwig',
        actors: ['Margot Robbie', 'Ryan Gosling', 'Issa Rae'],
        type: 'movie',
        styles: [
            { name: 'Dreamhouse', promptString: 'plastic texture, hot pink architecture, slide, artificial blue sky, perfect day, doll aesthetic' },
            { name: 'Ken\'s Mojo Dojo', promptString: 'horses, fringe leather, mini fridge, patriarchal nonsense, cowboy aesthetic, funny' },
            { name: 'Bus Stop', promptString: 'sitting on bench, emotional realization, soft lighting, real world tear, human connection' }
        ],
        posterPrompt: "Official movie poster for Barbie (2023), Margot Robbie as Barbie waving in pink Dreamhouse, Ken Ryan Gosling, hot pink everything, 'BARBIE' bold pink title, Greta Gerwig comedy --ar 2:3"
    },
    {
        id: 'past-lives',
        title: 'Past Lives',
        year: '2023',
        genres: ['Drama', 'Romance'],
        director: 'Celine Song',
        actors: ['Greta Lee', 'Teo Yoo', 'John Magaro'],
        type: 'movie',
        styles: [
            { name: 'Subway Hold', promptString: 'holding onto bar, looking at each other, new york subway, longing, silence, reflection' },
            { name: 'Merry Go Round', promptString: 'carousel lights, night, childhood memory, blurred motion, nostalgia, warm glow' },
            { name: 'Uber Wait', promptString: 'waiting on street corner, saying goodbye, night city lights, distance, fate, in-yun' }
        ],
        posterPrompt: "Official movie poster for Past Lives (2023), Greta Lee and Teo Yoo looking at each other silently, New York City lights, Korean romance, 'PAST LIVES' elegant title, Celine Song debut --ar 2:3"
    },
    {
        id: 'anatomy-fall',
        title: 'Anatomy of a Fall',
        year: '2023',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Justine Triet',
        actors: ['Sandra Hüller', 'Swann Arlaud', 'Milo Machado Graner'],
        type: 'movie',
        styles: [
            { name: 'Snow Blood', promptString: 'snowy chalet, blood trail, bright white, mystery, dog perspective, cold atmosphere' },
            { name: 'Courtroom', promptString: 'wood paneling, tense testimony, language barrier, microphone, harsh interior light, realism' },
            { name: 'P.I.M.P.', promptString: 'loud music implied, attic window view, renovation chaos, domestic tension, isolation' }
        ],
        posterPrompt: "Official movie poster for Anatomy of a Fall (2023), snowy chalet with blood trail, trial courtroom drama, 'ANATOMY OF A FALL' title, Justine Triet French thriller --ar 2:3"
    },
    {
        id: 'zone-interest',
        title: 'The Zone of Interest',
        year: '2023',
        genres: ['Drama', 'History', 'War'],
        director: 'Jonathan Glazer',
        actors: ['Christian Friedel', 'Sandra Hüller', 'Johann Karthaus'],
        type: 'movie',
        styles: [
            { name: 'Garden Wall', promptString: 'lush flower garden, concrete wall background, smoke stack, horrifying contrast, bright summer day, static shot' },
            { name: 'Thermal Night', promptString: 'thermal camera, black and white negative, girl hiding apples, morality in darkness, surreal' },
            { name: 'River Bath', promptString: 'swimming in river, ash in water, realization, panic, nature vs industrial horror' }
        ],
        posterPrompt: "Official movie poster for The Zone of Interest (2023), idyllic family garden with concentration camp wall visible in background, smoke stacks, disturbing contrast, 'THE ZONE OF INTEREST' title, Jonathan Glazer horror --ar 2:3"
    },
    {
        id: 'godzilla-minus-one',
        title: 'Godzilla Minus One',
        year: '2023',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Takashi Yamazaki',
        actors: ['Ryunosuke Kamiki', 'Minami Hamabe', 'Yuki Yamada'],
        type: 'movie',
        styles: [
            { name: 'Ginza Destruction', promptString: 'massive heat ray, crumbling buildings, mushroom cloud, screaming crowd, disaster scale, debris' },
            { name: 'Ocean Chase', promptString: 'wooden boat, godzilla swimming, dorsal fins, mine explosion, water spray, high tension' },
            { name: 'Salute', promptString: 'pilots saluting, emotional finale, sunset, sacrifice, redemption, tearful, hero shot' }
        ],
        posterPrompt: "Official movie poster for Godzilla Minus One (2023), massive Godzilla emerging from ocean, post-war Japan destruction, 'GODZILLA MINUS ONE' title, Toho kaiju epic --ar 2:3"
    },
    {
        id: 'raiders-lost-ark',
        title: 'Raiders of the Lost Ark',
        year: '1981',
        genres: ['Action', 'Adventure'],
        director: 'Steven Spielberg',
        actors: ['Harrison Ford', 'Karen Allen', 'Paul Freeman'],
        type: 'movie',
        styles: [
            { name: 'Golden Idol', promptString: 'golden light, ancient temple shadows, dust motes, trap mechanisms, jungle exterior, cinematic adventure' },
            { name: 'Desert Dig', promptString: 'blinding sun, tan colors, desert landscape, map room, beam of light, archaeological grit' },
            { name: 'Map Room Beam', promptString: 'god rays, dusty air, ancient miniature city, staff of ra, glowing medallion, mystery' }
        ],
        posterPrompt: "Official movie poster for Raiders of the Lost Ark (1981), Harrison Ford as Indiana Jones with whip and fedora, golden ark beam, 'RAIDERS OF THE LOST ARK' title, Spielberg adventure classic --ar 2:3"
    },
    {
        id: 'temple-of-doom',
        title: 'Indiana Jones and the Temple of Doom',
        year: '1984',
        genres: ['Action', 'Adventure'],
        director: 'Steven Spielberg',
        actors: ['Harrison Ford', 'Kate Capshaw', 'Ke Huy Quan'],
        type: 'movie',
        styles: [
            { name: 'Lava Glow', promptString: 'intense red and orange glow, firelight, cult ritual, dark cavern, underground temple, heat distortion' },
            { name: 'Mine Cart', promptString: 'fast motion, industrial rail, wooden supports, torches, rock walls, dynamic action, sparks' },
            { name: 'Shanghai Night', promptString: 'white tuxedo, cabaret lights, 30s glamour, shadows, car chase, club interior' }
        ],
        posterPrompt: "Official movie poster for Indiana Jones and the Temple of Doom (1984), Indiana Jones in mine cart chase, lava glow, Thuggee cult, 'TEMPLE OF DOOM' title, adventure horror --ar 2:3"
    },
    {
        id: 'crystal-skull',
        title: 'Indiana Jones and the Kingdom of the Crystal Skull',
        year: '2008',
        genres: ['Action', 'Adventure'],
        director: 'Steven Spielberg',
        actors: ['Harrison Ford', 'Cate Blanchett', 'Shia LaBeouf'],
        type: 'movie',
        styles: [
            { name: 'Jungle Convoy', promptString: 'vibrant green jungle, military trucks, dust, duck-tail hair, 50s aesthetic, sharp focus' },
            { name: 'Crystal Glow', promptString: 'translucent crystal skull, internal refraction, magnetic energy, alien technology, bioluminescence' },
            { name: 'Hangar 51', promptString: 'massive warehouse, crates, Roswell mystery, government shadows, 50s atomic age' }
        ],
        posterPrompt: "Official movie poster for Indiana Jones and the Kingdom of the Crystal Skull (2008), Indiana Jones with crystal skull, jungle ruins, 'KINGDOM OF THE CRYSTAL SKULL' title, 50s adventure --ar 2:3"
    },
    {
        id: 'dial-of-destiny',
        title: 'Indiana Jones and the Dial of Destiny',
        year: '2023',
        genres: ['Action', 'Adventure'],
        director: 'James Mangold',
        actors: ['Harrison Ford', 'Phoebe Waller-Bridge', 'Mads Mikkelsen'],
        type: 'movie',
        styles: [
            { name: 'Antique Gold', promptString: 'aged bronze texture, mechanical gears, sun-drenched sicily, gritty realism, digital clarity, old world charm' },
            { name: 'Young Indy CGI', promptString: '80s indy face, sharp lighting, night train, nazi fortress, vintage action feel' },
            { name: 'Ancient Siege', promptString: 'classical era, stone towers, fire arrows, historical epic scale, dusty, mediterranean blue' }
        ],
        posterPrompt: "Official movie poster for Indiana Jones and the Dial of Destiny (2023), Harrison Ford as aged Indiana Jones, Antikythera mechanism, 'DIAL OF DESTINY' title, final adventure --ar 2:3"
    },
    {
        id: 'matrix-resurrections',
        title: 'The Matrix Resurrections',
        year: '2021',
        genres: ['Action', 'Sci-Fi'],
        director: 'Lana Wachowski',
        actors: ['Keanu Reeves', 'Carrie-Anne Moss', 'Yahya Abdul-Mateen II'],
        type: 'movie',
        styles: [
            { name: 'Digital Sun', promptString: 'vibrant warm color palette, digital clarity, modern San Francisco, sleek technology, meta commentary' },
            { name: 'Modal Glitch', promptString: 'glitching reality, code bleed, recursive loops, dark green and black, cybernetic evolution' },
            { name: 'Human Battery', promptString: 'pods, cables, machine city evolution, red glow, advanced robotics, biological interface' }
        ],
        posterPrompt: "Official movie poster for The Matrix Resurrections (2021), Neo and Trinity reunited, red and blue pills, modern Matrix code, 'THE MATRIX RESURRECTIONS' title, Wachowski sci-fi --ar 2:3"
    },
    {
        id: 'john-wick-4',
        title: 'John Wick: Chapter 4',
        year: '2023',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård'],
        type: 'movie',
        styles: [
            { name: 'Osaka Neon', promptString: 'vibrant pink and blue, traditional japanese architecture, modern neon, swords and guns, high contrast' },
            { name: 'Dragon\'s Breath', promptString: 'overhead shot, fire bullets, sparks, orange glow in darkness, top-down perspective, intense violence' },
            { name: 'Arc de Triomphe', promptString: 'Paris night, swirling cars, rain, high speed action, headlights, chaotic beauty' }
        ],
        posterPrompt: "Official movie poster for John Wick: Chapter 4 (2023), Keanu Reeves in suit with gun, neon-lit Osaka and Paris, 'JOHN WICK 4' title, stylized action epic --ar 2:3"
    },
    {
        id: 'fast-furious-1',
        title: 'The Fast and the Furious',
        year: '2001',
        genres: ['Action', 'Crime'],
        director: 'Rob Cohen',
        actors: ['Paul Walker', 'Vin Diesel', 'Michelle Rodriguez'],
        type: 'movie',
        styles: [
            { name: 'Street Race', promptString: 'nitrous oxide blue flames, night city streets, blurred lights, roaring engines, highly tuned import cars' },
            { name: 'Toretto Backyard', promptString: 'golden hour, family barbecue, warm sunlight, corona beers, muscle cars in the driveway, 2000s haze' }
        ],
        posterPrompt: "Official movie poster for The Fast and the Furious (2001), Paul Walker and Vin Diesel racing, tuned import cars, 'THE FAST AND THE FURIOUS' title, street racing action --ar 2:3"
    },
    {
        id: 'fast-furious-2',
        title: '2 Fast 2 Furious',
        year: '2003',
        genres: ['Action', 'Crime'],
        director: 'John Singleton',
        actors: ['Paul Walker', 'Tyrese Gibson', 'Eva Mendes'],
        type: 'movie',
        styles: [
            { name: 'Miami Neon', promptString: 'vibrant neon colors, pink and blue lighting, wet streets, silver skyline, luxury tuner cars, high speed bridge jump' }
        ],
        posterPrompt: "Official movie poster for 2 Fast 2 Furious (2003), Paul Walker and Tyrese Gibson, Miami neon skyline, pink and blue colors, '2 FAST 2 FURIOUS' title --ar 2:3"
    },
    {
        id: 'fast-furious-3',
        title: 'The Fast and the Furious: Tokyo Drift',
        year: '2006',
        genres: ['Action', 'Crime'],
        director: 'Justin Lin',
        actors: ['Lucas Black', 'Sung Kang', 'Bow Wow'],
        type: 'movie',
        styles: [
            { name: 'Shibuya Drift', promptString: 'drifting around Shibuya Crossing, neon billboards, smoke from tires, Japanese tuner culture, night aesthetics' }
        ],
        posterPrompt: "Official movie poster for The Fast and the Furious: Tokyo Drift (2006), drifting cars in Tokyo, Shibuya neon lights, 'TOKYO DRIFT' title, Japanese street racing --ar 2:3"
    },
    {
        id: 'fast-furious-4',
        title: 'Fast & Furious',
        year: '2009',
        genres: ['Action', 'Crime'],
        director: 'Justin Lin',
        actors: ['Vin Diesel', 'Paul Walker', 'Jordana Brewster'],
        type: 'movie',
        styles: [
            { name: 'Desert Tunnel', promptString: 'dusty tunnels, high beams, claustrophobic chase, muscle cars, desert heat haze' }
        ],
        posterPrompt: "Official movie poster for Fast & Furious (2009), Vin Diesel and Paul Walker reunited, desert highway chase, 'FAST & FURIOUS' title, franchise return --ar 2:3"
    },
    {
        id: 'fast-furious-5',
        title: 'Fast Five',
        year: '2011',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Justin Lin',
        actors: ['Vin Diesel', 'Paul Walker', 'Dwayne Johnson'],
        type: 'movie',
        styles: [
            { name: 'Rio Vault Chase', promptString: 'two Chargers towing a massive vault through Rio streets, destruction, dust, kinetic energy, sun-drenched city' }
        ],
        posterPrompt: "Official movie poster for Fast Five (2011), ensemble cast with Dwayne Johnson, Rio de Janeiro favela, vault heist, 'FAST FIVE' title, action blockbuster --ar 2:3"
    },
    {
        id: 'fast-furious-6',
        title: 'Fast & Furious 6',
        year: '2013',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Justin Lin',
        actors: ['Vin Diesel', 'Paul Walker', 'Dwayne Johnson'],
        type: 'movie',
        styles: [
            { name: 'London Night Chase', promptString: 'sleek supercars on London streets at night, cold blue tones, wet pavement, high precision driving' }
        ],
        posterPrompt: "Official movie poster for Fast & Furious 6 (2013), team vs tank on highway, London streets, 'FAST & FURIOUS 6' title, international action --ar 2:3"
    },
    {
        id: 'fast-furious-7',
        title: 'Furious 7',
        year: '2015',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'James Wan',
        actors: ['Vin Diesel', 'Paul Walker', 'Jason Statham'],
        type: 'movie',
        styles: [
            { name: 'Abu Dhabi Skyscrapers', promptString: 'lykan hypersport jumping between skyscrapers, sunset glow, glass shattering, luxury desert city' }
        ],
        posterPrompt: "Official movie poster for Furious 7 (2015), Paul Walker tribute, Abu Dhabi skyscraper jump, 'FURIOUS 7' title, emotional farewell action --ar 2:3"
    },
    {
        id: 'fast-furious-8',
        title: 'The Fate of the Furious',
        year: '2017',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'F. Gary Gray',
        actors: ['Vin Diesel', 'Dwayne Johnson', 'Charlize Theron'],
        type: 'movie',
        styles: [
            { name: 'Ice Submarine Chase', promptString: 'cars racing on a frozen lake, massive submarine breaking the ice, explosions, cold blue and white tones' }
        ],
        posterPrompt: "Official movie poster for The Fate of the Furious (2017), Dom vs family, submarine on ice chase, 'THE FATE OF THE FURIOUS' title, betrayal action --ar 2:3"
    },
    {
        id: 'fast-furious-9',
        title: 'F9: The Fast Saga',
        year: '2021',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Justin Lin',
        actors: ['Vin Diesel', 'John Cena', 'Michelle Rodriguez'],
        type: 'movie',
        styles: [
            { name: 'Magnet Chaos', promptString: 'cars being pulled through buildings by magnets, urban destruction, high-octane physics defying action' }
        ],
        posterPrompt: "Official movie poster for F9: The Fast Saga (2021), Dom and Jakob rivalry, space car sequence, 'F9' title, over-the-top action --ar 2:3"
    },
    {
        id: 'fast-furious-10',
        title: 'Fast X',
        year: '2023',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Louis Leterrier',
        actors: ['Vin Diesel', 'Jason Momoa', 'Brie Larson'],
        type: 'movie',
        styles: [
            { name: 'Rome Bomb', promptString: 'massive spherical bomb rolling through Rome, Vatican in distance, warm Italian sunlight, chaos' }
        ],
        posterPrompt: "Official movie poster for Fast X (2023), ensemble cast, Rome destruction, Jason Momoa villain, 'FAST X' title, franchise finale --ar 2:3"
    },
    {
        id: 'hobbs-shaw',
        title: 'Fast & Furious Presents: Hobbs & Shaw',
        year: '2019',
        genres: ['Action', 'Sci-Fi'],
        director: 'David Leitch',
        actors: ['Dwayne Johnson', 'Jason Statham', 'Idris Elba'],
        type: 'movie',
        styles: [
            { name: 'Samoan Sunset', promptString: 'golden hour on the beach, traditional warriors, muscle trucks, palm trees, warm orange glow' }
        ],
        posterPrompt: "Official movie poster for Hobbs & Shaw (2019), Dwayne Johnson and Jason Statham back to back, Idris Elba villain, 'HOBBS & SHAW' title, spinoff action --ar 2:3"
    },
    {
        id: 'pirates-1',
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        year: '2003',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'Gore Verbinski',
        actors: ['Johnny Depp', 'Geoffrey Rush', 'Orlando Bloom'],
        type: 'movie',
        styles: [
            { name: 'Moonlight Skeletons', promptString: 'undead pirates under the moonlight, skeleton forms visible through skin, eerie blue light, ocean spray' },
            { name: 'Port Royal', promptString: 'colonial port town, wooden ships, sunset, dusty streets, golden age of piracy' }
        ],
        posterPrompt: "Official movie poster for Pirates of the Caribbean: The Curse of the Black Pearl (2003), Johnny Depp as Captain Jack Sparrow, Black Pearl ship, 'PIRATES OF THE CARIBBEAN' title, Disney adventure --ar 2:3"
    },
    {
        id: 'pirates-2',
        title: 'Pirates of the Caribbean: Dead Man\'s Chest',
        year: '2006',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'Gore Verbinski',
        actors: ['Johnny Depp', 'Orlando Bloom', 'Keira Knightley'],
        type: 'movie',
        styles: [
            { name: 'Kraken Attack', promptString: 'massive tentacles crushing a ship, sea foam, rainy ocean, dark green water, terror' }
        ],
        posterPrompt: "Official movie poster for Pirates of the Caribbean: Dead Man's Chest (2006), Jack Sparrow facing the Kraken, Davy Jones, 'DEAD MAN'S CHEST' title, fantasy adventure --ar 2:3"
    },
    {
        id: 'pirates-3',
        title: 'Pirates of the Caribbean: At World\'s End',
        year: '2007',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'Gore Verbinski',
        actors: ['Johnny Depp', 'Geoffrey Rush', 'Orlando Bloom'],
        type: 'movie',
        styles: [
            { name: 'Edge of the World', promptString: 'ship sailing off a massive waterfall, white void, surreal sky, ice and stars' }
        ],
        posterPrompt: "Official movie poster for Pirates of the Caribbean: At World's End (2007), armada of ships in maelstrom, final battle, 'AT WORLD'S END' title, epic pirate finale --ar 2:3"
    },
    {
        id: 'pirates-4',
        title: 'Pirates of the Caribbean: On Stranger Tides',
        year: '2011',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'Rob Marshall',
        actors: ['Johnny Depp', 'Penélope Cruz', 'Ian McShane'],
        type: 'movie',
        styles: [
            { name: 'Fountain of Youth', promptString: 'jungle cave, magical glowing water, silver chalices, lush greenery, humid atmosphere' }
        ],
        posterPrompt: "Official movie poster for Pirates of the Caribbean: On Stranger Tides (2011), Jack Sparrow with Blackbeard, Fountain of Youth, 'ON STRANGER TIDES' title, pirate adventure --ar 2:3"
    },
    {
        id: 'pirates-5',
        title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
        year: '2017',
        genres: ['Action', 'Adventure', 'Fantasy'],
        director: 'Joachim Rønning, Espen Sandberg',
        actors: ['Johnny Depp', 'Javier Bardem', 'Geoffrey Rush'],
        type: 'movie',
        styles: [
            { name: 'Ghost Shark', promptString: 'undead skeletal sharks in the water, glowing embers, dark ocean, supernatural horror' }
        ],
        posterPrompt: "Official movie poster for Pirates of the Caribbean: Dead Men Tell No Tales (2017), ghost Captain Salazar, Jack Sparrow, 'DEAD MEN TELL NO TALES' title, supernatural pirate action --ar 2:3"
    },
    {
        id: 'karate-kid',
        title: 'The Karate Kid',
        year: '1984',
        genres: ['Action', 'Drama', 'Sport'],
        director: 'John G. Avildsen',
        actors: ['Ralph Macchio', 'Pat Morita', 'Elisabeth Shue'],
        type: 'movie',
        styles: [
            { name: 'Crane Kick', promptString: 'standing on one leg, balancing on a wooden post, beach sunset, silhouette, martial arts pose' },
            { name: 'Mr. Miyagi Garden', promptString: 'zen garden, bonsai trees, wooden fence, warm afternoon light, peaceful atmosphere' }
        ],
        posterPrompt: "Official movie poster for The Karate Kid (1984), Daniel-san in crane kick pose, Mr. Miyagi watching, 'THE KARATE KID' title, 80s martial arts classic --ar 2:3"
    },
    {
        id: 'league-own',
        title: 'A League of Their Own',
        year: '1992',
        genres: ['Comedy', 'Drama', 'Sport'],
        director: 'Penny Marshall',
        actors: ['Tom Hanks', 'Geena Davis', 'Madonna'],
        type: 'movie',
        styles: [
            { name: 'Baseball Dirt', promptString: 'sliding into home plate, dust cloud, vintage baseball uniforms, bright sunlight, 1940s aesthetic' }
        ],
        posterPrompt: "Official movie poster for A League of Their Own (1992), Geena Davis and Tom Hanks, women's baseball team, 'A LEAGUE OF THEIR OWN' title, WWII sports drama --ar 2:3"
    },
    {
        id: 'slap-shot',
        title: 'Slap Shot',
        year: '1977',
        genres: ['Comedy', 'Drama', 'Sport'],
        director: 'George Roy Hill',
        actors: ['Paul Newman', 'Michael Ontkean', 'Strother Martin'],
        type: 'movie',
        styles: [
            { name: 'Ice Brawl', promptString: 'hockey players fighting on ice, gritty industrial arena, 70s aesthetics, missing teeth, blood on ice' }
        ],
        posterPrompt: "Official movie poster for Slap Shot (1977), Paul Newman in hockey gear, Hanson Brothers, 'SLAP SHOT' title, 70s sports comedy --ar 2:3"
    },
    {
        id: 'sandlot',
        title: 'The Sandlot',
        year: '1993',
        genres: ['Comedy', 'Drama', 'Sport'],
        director: 'David Mickey Evans',
        actors: ['Tom Guiry', 'Mike Vitar', 'Patrick Renna'],
        type: 'movie',
        styles: [
            { name: 'Summer Baseball', promptString: 'dusty sandlot field, kids in caps, golden hour, wooden fence, heavy nostalgia haze' }
        ],
        posterPrompt: "Official movie poster for The Sandlot (1993), group of boys with baseball gear, summer afternoon, 'THE SANDLOT' title, nostalgic coming of age --ar 2:3"
    },
    {
        id: 'major-league',
        title: 'Major League',
        year: '1989',
        genres: ['Comedy', 'Sport'],
        director: 'David S. Ward',
        actors: ['Tom Berenger', 'Charlie Sheen', 'Corbin Bernsen'],
        type: 'movie',
        styles: [
            { name: 'Wild Thing', promptString: 'Charlie Sheen with glasses, stadium lights at night, roaring crowd, intense focus on the mound' }
        ],
        posterPrompt: "Official movie poster for Major League (1989), Cleveland Indians team logo, 'WILD THING' Charlie Sheen, 'MAJOR LEAGUE' title, baseball comedy --ar 2:3"
    },
    {
        id: 'natural',
        title: 'The Natural',
        year: '1984',
        genres: ['Drama', 'Sport'],
        director: 'Barry Levinson',
        actors: ['Robert Redford', 'Robert Duvall', 'Glenn Close'],
        type: 'movie',
        styles: [
            { name: 'Lightning Strike', promptString: 'hitting a home run, stadium lights exploding, sparks falling, slow motion, epic hero lighting' }
        ],
        posterPrompt: "Official movie poster for The Natural (1984), Robert Redford as Roy Hobbs swinging bat, stadium lights exploding, 'THE NATURAL' title, magical baseball drama --ar 2:3"
    },
    {
        id: 'rudy',
        title: 'Rudy',
        year: '1993',
        genres: ['Biography', 'Drama', 'Sport'],
        director: 'David Anspaugh',
        actors: ['Sean Astin', 'Jon Favreau', 'Ned Beatty'],
        type: 'movie',
        styles: [
            { name: 'Notre Dame Tunnel', promptString: 'running out onto the field, stadium roar, golden helmets, green grass, high emotional triumph' }
        ],
        posterPrompt: "Official movie poster for Rudy (1993), Sean Astin in Notre Dame jersey being carried off field, 'RUDY' title, inspirational sports drama --ar 2:3"
    },
    {
        id: 'field-dreams',
        title: 'Field of Dreams',
        year: '1989',
        genres: ['Drama', 'Family', 'Fantasy'],
        director: 'Phil Alden Robinson',
        actors: ['Kevin Costner', 'James Earl Jones', 'Ray Liotta'],
        type: 'movie',
        styles: [
            { name: 'Cornfield Ballpark', promptString: 'ghostly baseball players emerging from tall corn stalks, twilight, soft fog, magical atmosphere' }
        ],
        posterPrompt: "Official movie poster for Field of Dreams (1989), Kevin Costner in cornfield with ghostly baseball diamond, 'FIELD OF DREAMS' title, magical sports fantasy --ar 2:3"
    },
    {
        id: 'mighty-ducks',
        title: 'The Mighty Ducks',
        year: '1992',
        genres: ['Comedy', 'Drama', 'Family'],
        director: 'Stephen Herek',
        actors: ['Emilio Estevez', 'Joss Ackland', 'Lane Smith'],
        type: 'movie',
        styles: [
            { name: 'Flying V', promptString: 'hockey team in formation, bright uniforms, outdoor ice rink, childhood enthusiasm' }
        ],
        posterPrompt: "Official movie poster for The Mighty Ducks (1992), Emilio Estevez with youth hockey team, 'MIGHTY DUCKS' title, 90s family sports comedy --ar 2:3"
    },
    {
        id: 'longest-yard',
        title: 'The Longest Yard',
        year: '2005',
        genres: ['Comedy', 'Sport'],
        director: 'Peter Segal',
        actors: ['Adam Sandler', 'Burt Reynolds', 'Chris Rock'],
        type: 'movie',
        styles: [
            { name: 'Prison Football', promptString: 'muddy football field, prison walls in background, grit, intense tackling, sun-drenched yard' }
        ],
        posterPrompt: "Official movie poster for The Longest Yard (2005), Adam Sandler leading prison football team, 'THE LONGEST YARD' title, sports comedy --ar 2:3"
    },
    {
        id: 'invincible',
        title: 'Invincible',
        year: '2006',
        genres: ['Biography', 'Drama', 'Sport'],
        director: 'Ericson Core',
        actors: ['Mark Wahlberg', 'Greg Kinnear', 'Elizabeth Banks'],
        type: 'movie',
        styles: [
            { name: 'Philly Grit', promptString: '70s Philadelphia, blue collar aesthetic, muddy tryouts, stadium lights, gritty textures' }
        ],
        posterPrompt: "Official movie poster for Invincible (2006), Mark Wahlberg as Vince Papale, Philadelphia Eagles, 'INVINCIBLE' title, inspirational sports drama --ar 2:3"
    },
    {
        id: 'few-good-men',
        title: 'A Few Good Men',
        year: '1992',
        genres: ['Drama', 'Thriller'],
        director: 'Rob Reiner',
        actors: ['Tom Cruise', 'Jack Nicholson', 'Demi Moore'],
        type: 'movie',
        styles: [
            { name: 'Courtroom Confrontation', promptString: 'Jack Nicholson in dress blues, shouting "You can\'t handle the truth!", sharp lighting, military formality' }
        ],
        posterPrompt: "Official movie poster for A Few Good Men (1992), Tom Cruise and Jack Nicholson in courtroom standoff, 'A FEW GOOD MEN' title, military courtroom drama --ar 2:3"
    },
    {
        id: 'nosferatu-2024',
        title: 'Nosferatu (2024)',
        year: '2024',
        genres: ['Horror', 'Fantasy'],
        director: 'Robert Eggers',
        actors: ['Bill Skarsgård', 'Nicholas Hoult', 'Lily-Rose Depp'],
        type: 'movie',
        styles: [
            { name: 'Eggers Gothic', promptString: 'bleak desaturated palette, candlelit shadows, high contrast, 19th century gothic aesthetic, macabre' }
        ],
        posterPrompt: "Official movie poster for Nosferatu (2024), Bill Skarsgård as vampire Count Orlok, gothic shadows, 'NOSFERATU' old german typography, Robert Eggers horror remake --ar 2:3"
    },
    {
        id: 'dracula-2025',
        title: 'Dracula (2025)',
        year: '2025',
        genres: ['Horror', 'Drama'],
        director: 'Luc Besson',
        actors: ['Caleb Landry Jones', 'Christoph Waltz'],
        type: 'movie',
        styles: [
            { name: 'Besson Baroque', promptString: 'opulent costumes, dramatic lighting, vibrant but dark colors, visual flair, high fashion horror' }
        ],
        posterPrompt: "Official movie poster for Dracula (2025), Caleb Landry Jones as Count Dracula, Gothic castle, 'DRACULA' title, Luc Besson horror --ar 2:3"
    },
    {
        id: 'the-chosen',
        title: 'The Chosen',
        year: '2019',
        genres: ['Drama', 'History'],
        director: 'Dallas Jenkins',
        actors: ['Jonathan Roumie', 'Shahar Isaac'],
        type: 'series',
        styles: [
            { name: 'Biblical Realism', promptString: 'dusty desert roads, linen robes, warm natural sunlight, ancient city of Galilee, cinematic lighting' }
        ],
        posterPrompt: "Official movie poster for The Chosen (2019), Jonathan Roumie as Jesus Christ, biblical setting, 'THE CHOSEN' title, faith-based drama series --ar 2:3"
    },
    {
        id: 'ripley',
        title: 'Ripley',
        year: '2024',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Steven Zaillian',
        actors: ['Andrew Scott', 'Dakota Fanning'],
        type: 'series',
        styles: [
            { name: 'High Contrast Noir', promptString: 'stark black and white, deep shadows, Italian coastal architecture, 1960s style, atmospheric' }
        ],
        posterPrompt: "Official movie poster for Ripley (2024), Andrew Scott as Tom Ripley, black and white Italian Riviera, 'RIPLEY' title, Netflix noir thriller --ar 2:3"
    },
    {
        id: 'hamlet',
        title: 'Hamlet',
        year: '1996',
        genres: ['Drama'],
        director: 'Kenneth Branagh',
        actors: ['Kenneth Branagh', 'Julie Christie', 'Derek Jacobi'],
        type: 'movie',
        styles: [
            { name: 'Royal Grandeur', promptString: 'elaborate palace interiors, snow covered courtyard, vibrant colors, 70mm film aesthetic, dramatic staging' }
        ],
        posterPrompt: "Official movie poster for Hamlet (1996), Kenneth Branagh as Hamlet, Elsinore castle, 'HAMLET' title, Shakespeare epic --ar 2:3"
    },
    {
        id: 'rocky-2',
        title: 'Rocky II',
        year: '1979',
        genres: ['Drama', 'Sport'],
        director: 'Sylvester Stallone',
        actors: ['Sylvester Stallone', 'Talia Shire', 'Burt Young'],
        type: 'movie',
        styles: [
            { name: 'Training Run', promptString: 'Rocky running through Philadelphia streets, children following, grey sweatsuit, urban triumph, soft sunlight' }
        ],
        posterPrompt: "Official movie poster for Rocky II (1979), Sylvester Stallone as Rocky Balboa, boxing rematch, 'ROCKY II' title, sports drama sequel --ar 2:3"
    },
    {
        id: 'rocky-3',
        title: 'Rocky III',
        year: '1982',
        genres: ['Drama', 'Sport'],
        director: 'Sylvester Stallone',
        actors: ['Sylvester Stallone', 'Talia Shire', 'Mr. T'],
        type: 'movie',
        styles: [
            { name: 'Eye of the Tiger', promptString: 'Clubber Lang glaring, intensity, gold chains, boxing ring, high contrast action, 80s grit' }
        ],
        posterPrompt: "Official movie poster for Rocky III (1982), Sylvester Stallone vs Mr. T, boxing confrontation, 'ROCKY III' title, Eye of the Tiger --ar 2:3"
    },
    {
        id: 'rocky-4',
        title: 'Rocky IV',
        year: '1985',
        genres: ['Drama', 'Sport'],
        director: 'Sylvester Stallone',
        actors: ['Sylvester Stallone', 'Talia Shire', 'Dolph Lundgren'],
        type: 'movie',
        styles: [
            { name: 'Siberian Training', promptString: 'training in the snow, lifting logs, beard, cold breath, rural Russia, blue and white tones' },
            { name: 'Drago Coldness', promptString: 'Ivan Drago, flat top haircut, Soviet imagery, high tech gym, sterile, red and yellow lighting' }
        ],
        posterPrompt: "Official movie poster for Rocky IV (1985), Sylvester Stallone vs Dolph Lundgren, USA vs USSR, 'ROCKY IV' title, Cold War boxing --ar 2:3"
    },
    {
        id: 'rocky-5',
        title: 'Rocky V',
        year: '1990',
        genres: ['Drama', 'Sport'],
        director: 'John G. Avildsen',
        actors: ['Sylvester Stallone', 'Talia Shire', 'Sage Stallone'],
        type: 'movie',
        styles: [
            { name: 'Street Fight', promptString: 'fighting in an alleyway at night, city grit, rain, shadows, raw and unpolished' }
        ],
        posterPrompt: "Official movie poster for Rocky V (1990), Sylvester Stallone as trainer, street fight, 'ROCKY V' title, back to basics --ar 2:3"
    },
    {
        id: 'rocky-balboa',
        title: 'Rocky Balboa',
        year: '2006',
        genres: ['Drama', 'Sport'],
        director: 'Sylvester Stallone',
        actors: ['Sylvester Stallone', 'Burt Young', 'Milo Ventimiglia'],
        type: 'movie',
        styles: [
            { name: 'Aging Champ', promptString: 'overcast Philadelphia, Adrian\'s restaurant, soft melancholic lighting, emotional weight, grey hair' }
        ],
        posterPrompt: "Official movie poster for Rocky Balboa (2006), aging Sylvester Stallone returning to the ring, 'ROCKY BALBOA' title, comeback story --ar 2:3"
    },
    {
        id: 'creed-1',
        title: 'Creed',
        year: '2015',
        genres: ['Action', 'Drama', 'Sport'],
        director: 'Ryan Coogler',
        actors: ['Michael B. Jordan', 'Sylvester Stallone', 'Tessa Thompson'],
        type: 'movie',
        styles: [
            { name: 'One Take Fight', promptString: 'dynamic long take in the ring, sweat spraying, blood, intense movement, modern cinematic lighting' }
        ],
        posterPrompt: "Official movie poster for Creed (2015), Michael B. Jordan as Adonis Creed, 'CREED' title, Rocky legacy boxing drama --ar 2:3"
    },
    {
        id: 'creed-2',
        title: 'Creed II',
        year: '2018',
        genres: ['Action', 'Drama', 'Sport'],
        director: 'Steven Caple Jr.',
        actors: ['Michael B. Jordan', 'Sylvester Stallone', 'Tessa Thompson'],
        type: 'movie',
        styles: [
            { name: 'Desert Training', promptString: 'training in the harsh desert sun, dust, heat haze, tires and sledgehammers, orange and teal' }
        ],
        posterPrompt: "Official movie poster for Creed II (2018), Michael B. Jordan vs Viktor Drago, 'CREED II' title, legacy revenge --ar 2:3"
    },
    {
        id: 'creed-3',
        title: 'Creed III',
        year: '2023',
        genres: ['Action', 'Drama', 'Sport'],
        director: 'Michael B. Jordan',
        actors: ['Michael B. Jordan', 'Jonathan Majors', 'Tessa Thompson'],
        type: 'movie',
        styles: [
            { name: 'The Void', promptString: 'boxers in a dark void, stylized psychological focus, high contrast, anime-influenced visuals' }
        ],
        posterPrompt: "Official movie poster for Creed III (2023), Michael B. Jordan vs Jonathan Majors, 'CREED III' title, stylized boxing drama --ar 2:3"
    },
    {
        id: 'bttf-1',
        title: 'Back to the Future',
        year: '1985',
        genres: ['Adventure', 'Comedy', 'Sci-Fi'],
        director: 'Robert Zemeckis',
        actors: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
        type: 'movie',
        styles: [
            { name: '88 MPH', promptString: 'Delorean with fire trails, electrical arcs, night parking lot, orange and blue sparks, 80s glow' },
            { name: 'Hill Valley 1955', promptString: 'pastel colors, 50s cars, clean town square, bright sunlight, nostalgic charm' }
        ],
        posterPrompt: "Official movie poster for Back to the Future (1985), DeLorean with fire trails, Marty McFly looking at watch, 'BACK TO THE FUTURE' title, 80s sci-fi adventure --ar 2:3"
    },
    {
        id: 'bttf-2',
        title: 'Back to the Future Part II',
        year: '1989',
        genres: ['Adventure', 'Comedy', 'Sci-Fi'],
        director: 'Robert Zemeckis',
        actors: ['Michael J. Fox', 'Christopher Lloyd', 'Thomas F. Wilson'],
        type: 'movie',
        styles: [
            { name: 'Hill Valley 2015', promptString: 'vibrant neon colors, flying cars, holographic shark, hoverboards, futuristic 80s aesthetic' }
        ],
        posterPrompt: "Official movie poster for Back to the Future Part II (1989), flying DeLorean, Marty on hoverboard, 'BACK TO THE FUTURE PART II' title, retro-futuristic --ar 2:3"
    },
    {
        id: 'bttf-3',
        title: 'Back to the Future Part III',
        year: '1990',
        genres: ['Adventure', 'Comedy', 'Sci-Fi'],
        director: 'Robert Zemeckis',
        actors: ['Michael J. Fox', 'Christopher Lloyd', 'Mary Steenburgen'],
        type: 'movie',
        styles: [
            { name: 'Clock Tower Wild West', promptString: '1885 Hill Valley, steam train, dusty streets, western aesthetic, golden afternoon sun' }
        ],
        posterPrompt: "Official movie poster for Back to the Future Part III (1990), DeLorean on train tracks, Wild West setting, 'BACK TO THE FUTURE PART III' title, western sci-fi --ar 2:3"
    },
    {
        id: 'the-rock',
        title: 'The Rock',
        year: '1996',
        genres: ['Action', 'Adventure', 'Thriller'],
        director: 'Michael Bay',
        actors: ['Sean Connery', 'Nicolas Cage', 'Ed Harris'],
        type: 'movie',
        styles: [
            { name: 'Green Smoke', promptString: 'green gas spheres, Alcatraz tunnels, flares, wet concrete, intense action, high saturation' }
        ],
        posterPrompt: "Official movie poster for The Rock (1996), Sean Connery and Nicolas Cage, Alcatraz prison, 'THE ROCK' title, Michael Bay action --ar 2:3"
    },
    {
        id: 'con-air',
        title: 'Con Air',
        year: '1997',
        genres: ['Action', 'Crime', 'Thriller'],
        director: 'Simon West',
        actors: ['Nicolas Cage', 'John Cusack', 'John Malkovich'],
        type: 'movie',
        styles: [
            { name: 'Caged Hair', promptString: 'Cameron Poe with long hair blowing in wind, sunset, explosions, desert landing, 90s action' }
        ],
        posterPrompt: "Official movie poster for Con Air (1997), Nicolas Cage as Cameron Poe, prison plane, 'CON AIR' title, 90s action thriller --ar 2:3"
    },
    {
        id: 'face-off',
        title: 'Face/Off',
        year: '1997',
        genres: ['Action', 'Crime', 'Sci-Fi'],
        director: 'John Woo',
        actors: ['John Travolta', 'Nicolas Cage'],
        type: 'movie',
        styles: [
            { name: 'John Woo Ballistic', promptString: 'doves flying, dual wielding pistols, slow motion, trench coats, sparks, high stylistic violence' }
        ],
        posterPrompt: "Official movie poster for Face/Off (1997), John Travolta and Nicolas Cage faces merging, twin guns, 'FACE/OFF' title, John Woo action --ar 2:3"
    },
    {
        id: 'national-treasure-1',
        title: 'National Treasure',
        year: '2004',
        genres: ['Action', 'Adventure', 'Mystery'],
        director: 'Jon Turteltaub',
        actors: ['Nicolas Cage', 'Diane Kruger', 'Justin Bartha'],
        type: 'movie',
        styles: [
            { name: 'Declaration Heist', promptString: 'back of the declaration of independence, invisible ink, lemon juice, blue light, historic archives' }
        ],
        posterPrompt: "Official movie poster for National Treasure (2004), Nicolas Cage as Ben Gates, Declaration of Independence, 'NATIONAL TREASURE' title, adventure mystery --ar 2:3"
    },
    {
        id: 'mandy',
        title: 'Mandy',
        year: '2018',
        genres: ['Action', 'Fantasy', 'Horror'],
        director: 'Panos Cosmatos',
        actors: ['Nicolas Cage', 'Andrea Riseborough', 'Linus Roache'],
        type: 'movie',
        styles: [
            { name: 'Psychedelic Blood', promptString: 'deep red and purple saturated lighting, heavy grainy texture, demonic bike gang, surreal horror, chromatic aberration' }
        ],
        posterPrompt: "Official movie poster for Mandy (2018), Nicolas Cage covered in blood holding an axe, psychedelic red and purple colors, 'MANDY' title, Panos Cosmatos surreal horror --ar 2:3"
    },
    {
        id: 'pig',
        title: 'Pig',
        year: '2021',
        genres: ['Drama', 'Thriller'],
        director: 'Michael Sarnoski',
        actors: ['Nicolas Cage', 'Alex Wolff'],
        type: 'movie',
        styles: [
            { name: 'Woodland Solitude', promptString: 'Pacific Northwest forest, mossy trees, soft morning fog, dirty face, truffle pig, melancholic' }
        ],
        posterPrompt: "Official movie poster for Pig (2021), Nicolas Cage as reclusive truffle hunter, forest setting, 'PIG' minimalist title, quiet character drama --ar 2:3"
    },
    {
        id: 'longlegs',
        title: 'Longlegs',
        year: '2024',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'Osgood Perkins',
        actors: ['Maika Monroe', 'Nicolas Cage'],
        type: 'movie',
        styles: [
            { name: 'Uncanny Pale', promptString: 'uncanny valley makeup, pale white skin, grainy 70s film look, disturbing stillness, occult symbols' }
        ],
        posterPrompt: "Official movie poster for Longlegs (2024), Maika Monroe as FBI agent, Nicolas Cage as Longlegs serial killer, 70s occult horror style, 'LONGLEGS' mysterious title --ar 2:3"
    },
    {
        id: 'raising-arizona',
        title: 'Raising Arizona',
        year: '1987',
        genres: ['Comedy', 'Crime'],
        director: 'Joel Coen, Ethan Coen',
        actors: ['Nicolas Cage', 'Holly Hunter'],
        type: 'movie',
        styles: [
            { name: 'Coen Kinetic', promptString: 'dynamic tracking shots, vibrant desert colors, diaper chase, slapstick crime, wide angle distortion' }
        ],
        posterPrompt: "Official movie poster for Raising Arizona (1987), Nicolas Cage and Holly Hunter with stolen baby, desert setting, 'RAISING ARIZONA' quirky title, Coen Brothers comedy --ar 2:3"
    },
    {
        id: 'leaving-las-vegas',
        title: 'Leaving Las Vegas',
        year: '1995',
        genres: ['Drama', 'Romance'],
        director: 'Mike Figgis',
        actors: ['Nicolas Cage', 'Elisabeth Shue'],
        type: 'movie',
        styles: [
            { name: 'Vegas Neon Blur', promptString: 'blurry neon lights, motel room, whiskey, 16mm film grain, handheld, desperate intimacy' }
        ],
        posterPrompt: "Official movie poster for Leaving Las Vegas (1995), Nicolas Cage and Elisabeth Shue, neon Vegas lights, 'LEAVING LAS VEGAS' title, Oscar-winning drama --ar 2:3"
    },
    {
        id: 'grand-prix',
        title: 'Grand Prix',
        year: '1966',
        genres: ['Drama', 'Sport'],
        director: 'John Frankenheimer',
        actors: ['James Garner', 'Eva Marie Saint'],
        type: 'movie',
        styles: [
            { name: '60s Racing', promptString: 'vintage F1 cars, split screen shots, Monaco streets, high speed blur, Super Panavision 70, vibrant 60s color' }
        ],
        posterPrompt: "Official movie poster for Grand Prix (1966), James Garner in vintage F1 racing, Monaco circuit, 'GRAND PRIX' title, 60s racing epic --ar 2:3"
    },
    {
        id: 'rendezvous',
        title: 'C\'était un rendez-vous (Rendezvous)',
        year: '1976',
        genres: ['Short', 'Action'],
        director: 'Claude Lelouch',
        actors: [],
        type: 'movie',
        styles: [
            { name: 'Paris POV', promptString: 'low angle car mount POV, high speed through early morning Paris, blur of city streets, red lights, engine roar' }
        ],
        posterPrompt: "Official movie poster for C'était un rendez-vous (1976), Ferrari speeding through Paris dawn, 'RENDEZVOUS' title, legendary car chase short film --ar 2:3"
    },
    {
        id: 'days-heaven',
        title: 'Days of Heaven',
        year: '1978',
        genres: ['Drama', 'Romance'],
        director: 'Terrence Malick',
        actors: ['Richard Gere', 'Brooke Adams', 'Sam Shepard'],
        type: 'movie',
        styles: [
            { name: 'Magic Hour', promptString: 'golden hour, silhouettes against orange sky, wheat fields, soft natural light, painterly composition, prairie' }
        ],
        posterPrompt: "Official movie poster for Days of Heaven (1978), silhouettes in wheat field at golden hour, Terrence Malick cinematography, 'DAYS OF HEAVEN' title, visual poetry --ar 2:3"
    },
    {
        id: 'moulin-rouge',
        title: 'Moulin Rouge!',
        year: '2001',
        genres: ['Drama', 'Musical', 'Romance'],
        director: 'Baz Luhrmann',
        actors: ['Nicole Kidman', 'Ewan McGregor'],
        type: 'movie',
        styles: [
            { name: 'Luhrmann Opulence', promptString: 'theatrical red lighting, glitter falling, frantic editing, bohemian Paris, vibrant saturated colors' }
        ],
        posterPrompt: "Official movie poster for Moulin Rouge! (2001), Nicole Kidman and Ewan McGregor, red windmill, 'MOULIN ROUGE!' title, Baz Luhrmann musical --ar 2:3"
    },
    {
        id: 'mulholland-drive',
        title: 'Mulholland Drive',
        year: '2001',
        genres: ['Drama', 'Mystery', 'Thriller'],
        director: 'David Lynch',
        actors: ['Naomi Watts', 'Laura Harring'],
        type: 'movie',
        styles: [
            { name: 'Lynchian Dream', promptString: 'blue key, mysterious box, smoke, surreal Hollywood, soft focus, uncanny atmosphere, deep shadows' }
        ],
        posterPrompt: "Official movie poster for Mulholland Drive (2001), Naomi Watts and Laura Harring, Hollywood mystery, 'MULHOLLAND DRIVE' title, David Lynch neo-noir --ar 2:3"
    },
    {
        id: 'dead-poets-society',
        title: 'Dead Poets Society',
        year: '1989',
        genres: ['Comedy', 'Drama'],
        director: 'Peter Weir',
        actors: ['Robin Williams', 'Robert Sean Leonard', 'Ethan Hawke'],
        type: 'movie',
        styles: [
            { name: 'O Captain My Captain', promptString: 'standing on desks, classroom setting, warm wooden textures, prep school uniforms, emotional triumph' }
        ],
        posterPrompt: "Official movie poster for Dead Poets Society (1989), Robin Williams as John Keating, students standing on desks, 'DEAD POETS SOCIETY' title, inspirational drama --ar 2:3"
    },
    {
        id: 'passion-christ',
        title: 'The Passion of the Christ',
        year: '2004',
        genres: ['Drama'],
        director: 'Mel Gibson',
        actors: ['Jim Caviezel'],
        type: 'movie',
        styles: [
        ],
        posterPrompt: "Official movie poster for The Passion of the Christ (2004), Jim Caviezel as Jesus Christ, crown of thorns, 'THE PASSION OF THE CHRIST' title, Mel Gibson biblical drama --ar 2:3"
    },
    {
        id: 'vampires-kiss',
        title: 'Vampire\'s Kiss',
        year: '1988',
        genres: ['Comedy', 'Crime', 'Horror'],
        director: 'Robert Bierman',
        actors: ['Nicolas Cage', 'Maria Conchita Alonso', 'Jennifer Beals'],
        type: 'movie',
        styles: [
            { name: 'Unhinged Mania', promptString: 'Nicolas Cage extreme facial expression, wild eyes, sweaty skin, office lighting, surreal descent into madness' },
            { name: 'NYC 80s Grime', promptString: 'dirty streets, neon signs, harsh shadows, film grain, urban isolation, 80s aesthetic' }
        ],
        posterPrompt: "Official movie poster for Vampire's Kiss (1988), Nicolas Cage with plastic vampire fangs, 80s NYC, 'VAMPIRE'S KISS' title, cult horror comedy --ar 2:3"
    },
    {
        id: 'wild-at-heart',
        title: 'Wild at Heart',
        year: '1990',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'David Lynch',
        actors: ['Nicolas Cage', 'Laura Dern', 'Willem Dafoe'],
        type: 'movie',
        styles: [
            { name: 'Snake Skin Jacket', promptString: 'snakeskin pattern texture, fire in background, high contrast, lynchian surrealism, saturated colors, romantic rebellion' },
            { name: 'Roadside Nightmare', promptString: 'dark highway, car headlights, strange characters, dream-like atmosphere, high dramatic lighting' }
        ],
        posterPrompt: "Official movie poster for Wild at Heart (1990), Nicolas Cage and Laura Dern, snakeskin jacket, 'WILD AT HEART' title, David Lynch romance --ar 2:3"
    },
    {
        id: 'red-rock-west',
        title: 'Red Rock West',
        year: '1993',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'John Dahl',
        actors: ['Nicolas Cage', 'Dennis Hopper', 'Lara Flynn Boyle'],
        type: 'movie',
        styles: [
            { name: 'Neo-Noir Desert', promptString: 'dusty roads, pale blue moonlight, shadows of silhouettes, diner interior, desolate landscape, suspenseful' }
        ],
        posterPrompt: "Official movie poster for Red Rock West (1993), Nicolas Cage in neo-noir setting, desert bar, 'RED ROCK WEST' title, neo-western thriller --ar 2:3"
    },
    {
        id: 'willys-wonderland',
        title: 'Willy\'s Wonderland',
        year: '2021',
        genres: ['Action', 'Comedy', 'Horror'],
        director: 'Kevin Lewis',
        actors: ['Nicolas Cage', 'Emily Tosta'],
        type: 'movie',
        styles: [
            { name: 'Animatronic Night', promptString: 'neon purple and pink glow, oil-slicked floor, demonic mechanical creatures, intense silent focus, arcade lighting' }
        ],
        posterPrompt: "Official movie poster for Willy's Wonderland (2021), Nicolas Cage fighting animatronics, neon arcade, 'WILLY'S WONDERLAND' title, horror action --ar 2:3"
    },
    {
        id: 'color-out-of-space',
        title: 'Color Out of Space',
        year: '2019',
        genres: ['Horror', 'Sci-Fi'],
        director: 'Richard Stanley',
        actors: ['Nicolas Cage', 'Joely Richardson'],
        type: 'movie',
        styles: [
            { name: 'Eldritch Magenta', promptString: 'vibrant unearthly purple and magenta light, swirling nebula textures, biological mutation, cosmic horror, high saturation' }
        ],
        posterPrompt: "Official movie poster for Color Out of Space (2019), Nicolas Cage with cosmic purple meteor horror, 'COLOR OUT OF SPACE' title, Lovecraft adaptation --ar 2:3"
    },
    {
        id: 'unbearable-weight',
        title: 'The Unbearable Weight of Massive Talent',
        year: '2022',
        genres: ['Action', 'Comedy', 'Crime'],
        director: 'Tom Gormican',
        actors: ['Nicolas Cage', 'Pedro Pascal'],
        type: 'movie',
        styles: [
            { name: 'Meta Meta', promptString: 'bright Mediterranean sunlight, high-end villa, gold statues of self, cinematic warmth, friendship' }
        ],
        posterPrompt: "Official movie poster for The Unbearable Weight of Massive Talent (2022), Nicolas Cage with Pedro Pascal, 'THE UNBEARABLE WEIGHT OF MASSIVE TALENT' title, meta-comedy --ar 2:3"
    },
    {
        id: 'dream-scenario',
        title: 'Dream Scenario',
        year: '2023',
        genres: ['Comedy', 'Fantasy'],
        director: 'Kristoffer Borgli',
        actors: ['Nicolas Cage', 'Julianne Nicholson'],
        type: 'movie',
        styles: [
            { name: 'Dream Logic', promptString: 'surreal suburban setting, muted colors, soft focus background, awkward presence, uncanny atmosphere' }
        ],
        posterPrompt: "Official movie poster for Dream Scenario (2023), Nicolas Cage appearing in everyone's dreams, 'DREAM SCENARIO' title, surreal comedy --ar 2:3"
    },
    {
        id: 'arcadian',
        title: 'Arcadian',
        year: '2024',
        genres: ['Action', 'Horror', 'Sci-Fi'],
        director: 'Ben Brewer',
        actors: ['Nicolas Cage', 'Jaeden Martell'],
        type: 'movie',
        styles: [
            { name: 'Twilight Defense', promptString: 'cold blue dusk, farmhouse fortifications, flickering candlelight, creature shadows, survival grit' }
        ],
        posterPrompt: "Official movie poster for Arcadian (2024), Nicolas Cage defending farmhouse, 'ARCADIAN' title, post-apocalyptic horror --ar 2:3"
    },
    {
        id: 'valley-girl',
        title: 'Valley Girl',
        year: '1983',
        genres: ['Comedy', 'Romance'],
        director: 'Martha Coolidge',
        actors: ['Nicolas Cage', 'Deborah Foreman'],
        type: 'movie',
        styles: [
            { name: 'Punk 80s', promptString: 'skinny ties, bright makeup, neon club lighting, soft focus romance, vibrant 80s fashion' }
        ],
        posterPrompt: "Official movie poster for Valley Girl (1983), Nicolas Cage and Deborah Foreman, 80s punk romance, 'VALLEY GIRL' title, teen romantic comedy --ar 2:3"
    },
    {
        id: 'the-trust',
        title: 'The Trust',
        year: '2016',
        genres: ['Crime', 'Thriller'],
        director: 'Alex Brewer, Benjamin Brewer',
        actors: ['Nicolas Cage', 'Elijah Wood'],
        type: 'movie',
        styles: [
            { name: 'Heist Static', promptString: 'cramped vault interior, industrial masks, mechanical tools, cold lighting, clinical crime aesthetic' }
        ],
        posterPrompt: "Official movie poster for The Trust (2016), Nicolas Cage and Elijah Wood, vault heist, 'THE TRUST' title, crime thriller --ar 2:3"
    },
    {
        id: 'the-prestige',
        title: 'The Prestige',
        year: '2006',
        genres: ['Drama', 'Mystery', 'Sci-Fi'],
        director: 'Christopher Nolan',
        actors: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'],
        type: 'movie',
        styles: [
            { name: 'Tesla Glow', promptString: 'electrical arcs, mechanical stage props, Victorian textures, deep shadows, amber and blue light' }
        ],
        posterPrompt: "Official movie poster for The Prestige (2006), Christian Bale and Hugh Jackman, magical illusion, 'THE PRESTIGE' title, Nolan mystery thriller --ar 2:3"
    },
    {
        id: 'arrival',
        title: 'Arrival',
        year: '2016',
        genres: ['Drama', 'Sci-Fi'],
        director: 'Denis Villeneuve',
        actors: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
        type: 'movie',
        styles: [
            { name: 'Monolith Mist', promptString: 'grey foggy landscape, giant sleek alien ship silhouette, volumetric lighting, minimal design, cold atmosphere' }
        ],
        posterPrompt: "Official movie poster for Arrival (2016), Amy Adams facing giant alien spacecraft, 'ARRIVAL' title, Denis Villeneuve cerebral sci-fi --ar 2:3"
    },
    {
        id: 'sicario',
        title: 'Sicario',
        year: '2015',
        genres: ['Action', 'Crime', 'Drama'],
        director: 'Denis Villeneuve',
        actors: ['Emily Blunt', 'Josh Brolin', 'Benicio del Toro'],
        type: 'movie',
        styles: [
            { name: 'Border Heat', promptString: 'harsh yellow sunlight, dust trails, shadows across faces, gritty textures, high contrast military gear' }
        ],
        posterPrompt: "Official movie poster for Sicario (2015), Emily Blunt and Benicio del Toro, Mexican border, 'SICARIO' title, Denis Villeneuve crime thriller --ar 2:3"
    },
    {
        id: 'the-northman',
        title: 'The Northman',
        year: '2022',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Robert Eggers',
        actors: ['Alexander Skarsgård', 'Nicole Kidman', 'Claes Bang'],
        type: 'movie',
        styles: [
            { name: 'Viking Ritual', promptString: 'cold grey rain, fire embers, blood-soaked skin, monochromatic blues, mud and steel texture' }
        ],
        posterPrompt: "Official movie poster for The Northman (2022), Alexander Skarsgård as Viking prince, 'THE NORTHMAN' title, Robert Eggers epic revenge --ar 2:3"
    },
    {
        id: 'the-witch',
        title: 'The Witch',
        year: '2015',
        genres: ['Horror', 'Mystery'],
        director: 'Robert Eggers',
        actors: ['Anya Taylor-Joy', 'Ralph Ineson'],
        type: 'movie',
        styles: [
            { name: 'Folklore Gloom', promptString: 'desaturated grey tones, natural lighting, dark forest edge, wooden textures, oppressive atmosphere' }
        ],
        posterPrompt: "Official movie poster for The Witch (2015), Anya Taylor-Joy on colonial farm, 'THE WITCH' title, Robert Eggers folk horror --ar 2:3"
    },
    {
        id: 'django-unchained',
        title: 'Django Unchained',
        year: '2012',
        genres: ['Drama', 'Western'],
        director: 'Quentin Tarantino',
        actors: ['Jamie Foxx', 'Christoph Waltz', 'Leonardo DiCaprio'],
        type: 'movie',
        styles: [
            { name: 'Candyland Red', promptString: 'bright red blood spray, white cotton fields, saturated primary colors, high contrast western sun' }
        ],
        posterPrompt: "Official movie poster for Django Unchained (2012), Jamie Foxx as Django, 'DJANGO UNCHAINED' title, Tarantino spaghetti western --ar 2:3"
    },
    {
        id: 'the-hateful-eight',
        title: 'The Hateful Eight',
        year: '2015',
        genres: ['Crime', 'Drama', 'Mystery'],
        director: 'Quentin Tarantino',
        actors: ['Samuel L. Jackson', 'Kurt Russell', 'Jennifer Jason Leigh'],
        type: 'movie',
        styles: [
            { name: 'Blizzard Interior', promptString: 'warm cabin glow, wood texture, snow particles in air, ultra-wide 70mm lens, shallow depth of field' }
        ],
        posterPrompt: "Official movie poster for The Hateful Eight (2015), eight strangers in a cabin, 'THE HATEFUL EIGHT' title, Tarantino 70mm western mystery --ar 2:3"
    },
    {
        id: 'nightcrawler',
        title: 'Nightcrawler',
        year: '2014',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Dan Gilroy',
        actors: ['Jake Gyllenhaal', 'Rene Russo'],
        type: 'movie',
        styles: [
            { name: 'LA Night Glare', promptString: 'sodium vapor yellow streetlights, digital camera glare, city at night, cold clinical focus, sweat' }
        ],
        posterPrompt: "Official movie poster for Nightcrawler (2014), Jake Gyllenhaal with camera, LA night scene, 'NIGHTCRAWLER' title, neo-noir thriller --ar 2:3"
    },
    {
        id: 'american-gangster',
        title: 'American Gangster',
        year: '2007',
        genres: ['Biography', 'Crime', 'Drama'],
        director: 'Ridley Scott',
        actors: ['Denzel Washington', 'Russell Crowe'],
        type: 'movie',
        styles: [
            { name: '70s Harlem', promptString: 'sepia tones, fur coats, period nyc streets, soft film grain, cool luxury aesthetic' }
        ],
        posterPrompt: "Official movie poster for American Gangster (2007), Denzel Washington as Frank Lucas, 'AMERICAN GANGSTER' title, Ridley Scott crime epic --ar 2:3"
    },
    {
        id: 'last-mohicans',
        title: 'The Last of the Mohicans',
        year: '1992',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Michael Mann',
        actors: ['Daniel Day-Lewis', 'Madeleine Stowe'],
        type: 'movie',
        styles: [
            { name: 'Wilderness Epic', promptString: 'lush blue forests, golden hour, firelight silhouettes, running through nature, cinematic landscape' }
        ],
        posterPrompt: "Official movie poster for The Last of the Mohicans (1992), Daniel Day-Lewis with rifle, colonial frontier, 'THE LAST OF THE MOHICANS' title, Michael Mann epic --ar 2:3"
    },
    {
        id: 'master-commander',
        title: 'Master and Commander: The Far Side of the World',
        year: '2003',
        genres: ['Action', 'Adventure', 'Drama'],
        director: 'Peter Weir',
        actors: ['Russell Crowe', 'Paul Bettany'],
        type: 'movie',
        styles: [
            { name: 'Age of Sail', promptString: 'wooden ship deck, sea salt spray, fog, dawn light, candlelit cabin, intricate rope and wood texture' }
        ],
        posterPrompt: "Official movie poster for Master and Commander: The Far Side of the World (2003), Russell Crowe on ship deck, 'MASTER AND COMMANDER' title, naval epic --ar 2:3"
    },
    {
        id: 'the-green-knight',
        title: 'The Green Knight',
        year: '2021',
        genres: ['Adventure', 'Drama', 'Fantasy'],
        director: 'David Lowery',
        actors: ['Dev Patel', 'Alicia Vikander'],
        type: 'movie',
        styles: [
            { name: 'Medieval Psychedelia', promptString: 'glowing green moss, golden sunlight filtering through fog, giant silhouettes, painterly textures' }
        ],
        posterPrompt: "Official movie poster for The Green Knight (2021), Dev Patel as Sir Gawain, mystical forest, 'THE GREEN KNIGHT' title, Arthurian fantasy --ar 2:3"
    },
    {
        id: '12-years-slave',
        title: '12 Years a Slave',
        year: '2013',
        genres: ['Biography', 'Drama', 'History'],
        director: 'Steve McQueen',
        actors: ['Chiwetel Ejiofor', 'Michael Fassbender'],
        type: 'movie',
        styles: [
            { name: 'McQueen Realism', promptString: 'sharp natural lighting, sweltering heat haze, heavy textures of cotton and wood, long focus shots' }
        ],
        posterPrompt: "Official movie poster for 12 Years a Slave (2013), Chiwetel Ejiofor as Solomon Northup, 'TWELVE YEARS A SLAVE' title, Steve McQueen historical drama --ar 2:3"
    },
    {
        id: 'gravity',
        title: 'Gravity',
        year: '2013',
        genres: ['Action', 'Drama', 'Sci-Fi'],
        director: 'Alfonso Cuarón',
        actors: ['Sandra Bullock', 'George Clooney'],
        type: 'movie',
        styles: [
            { name: 'Earth Glow', promptString: 'blinding white sunlight from the earth, pitch black space, lens flare, visor reflections, isolation' }
        ],
        posterPrompt: "Official movie poster for Gravity (2013), Sandra Bullock floating in space, Earth below, 'GRAVITY' title, Alfonso Cuarón space thriller --ar 2:3"
    },
    {
        id: 'poor-things',
        title: 'Poor Things',
        year: '2023',
        genres: ['Comedy', 'Drama', 'Romance'],
        director: 'Yorgos Lanthimos',
        actors: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe'],
        type: 'movie',
        styles: [
            { name: 'Surreal Fisheye', promptString: 'vivid saturated color, Victorian steampunk, fisheye lens distortion, ornate costumes, dreamlike sets' }
        ],
        posterPrompt: "Official movie poster for Poor Things (2023), Emma Stone as Bella Baxter, Victorian surrealism, 'POOR THINGS' title, Yorgos Lanthimos dark comedy --ar 2:3"
    },
    {
        id: 'civil-war',
        title: 'Civil War',
        year: '2024',
        genres: ['Action', 'Thriller'],
        director: 'Alex Garland',
        actors: ['Kirsten Dunst', 'Wagner Moura'],
        type: 'movie',
        styles: [
            { name: 'War Photojournalism', promptString: 'digital grain, desaturated colors, modern urban ruins, smoke, intense combat chaos, sharp focus' }
        ],
        posterPrompt: "Official movie poster for Civil War (2024), Kirsten Dunst as war photographer, American flag divided, 'CIVIL WAR' title, Alex Garland action thriller --ar 2:3"
    },
    {
        id: 'furiosa',
        title: 'Furiosa: A Mad Max Saga',
        year: '2024',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'George Miller',
        actors: ['Anya Taylor-Joy', 'Chris Hemsworth'],
        type: 'movie',
        styles: [
            { name: 'Chrome & Dust', promptString: 'vibrant orange desert, deep blue sky, metallic reflections, massive war rigs, fire explosions, high contrast' }
        ],
        posterPrompt: "Official movie poster for Furiosa: A Mad Max Saga (2024), Anya Taylor-Joy as young Furiosa, 'FURIOSA' title, George Miller post-apocalyptic prequel --ar 2:3"
    },
    {
        id: 'the-holdovers',
        title: 'The Holdovers',
        year: '2023',
        genres: ['Comedy', 'Drama'],
        director: 'Alexander Payne',
        actors: ['Paul Giamatti', 'Dominic Sessa'],
        type: 'movie',
        styles: [
            { name: '70s Film Stock', promptString: 'warm autumn palette, heavy film grain, boarding school interior, soft lighting, 1970s aesthetic' }
        ],
        posterPrompt: "Official movie poster for The Holdovers (2023), Paul Giamatti as prep school teacher, snowy campus, 'THE HOLDOVERS' title, Alexander Payne comedy drama --ar 2:3"
    },
    {
        id: 'killers-flower-moon',
        title: 'Killers of the Flower Moon',
        year: '2023',
        genres: ['Crime', 'Drama', 'History'],
        director: 'Martin Scorsese',
        actors: ['Leonardo DiCaprio', 'Robert De Niro', 'Lily Gladstone'],
        type: 'movie',
        styles: [
            { name: 'Osage Hills', promptString: 'vast Oklahoma sunset, period accurate oil fields, shadows in shadows, rich earth tones, epic scale' }
        ],
        posterPrompt: "Official movie poster for Killers of the Flower Moon (2023), Leonardo DiCaprio and Lily Gladstone, 1920s Oklahoma, 'KILLERS OF THE FLOWER MOON' title, Scorsese historical epic --ar 2:3"
    },
    {
        id: 'monkey-man',
        title: 'Monkey Man',
        year: '2024',
        genres: ['Action', 'Thriller'],
        director: 'Dev Patel',
        actors: ['Dev Patel', 'Sharlto Copley'],
        type: 'movie',
        styles: [
            { name: 'Neon Underworld', promptString: 'saturated red lighting, sweat, close-up frantic movement, gritty urban texture, vibrant chaos' }
        ],
        posterPrompt: "Official movie poster for Monkey Man (2024), Dev Patel in monkey mask, 'MONKEY MAN' title, Indian revenge action thriller --ar 2:3"
    },
    {
        id: 'adaptation',
        title: 'Adaptation',
        year: '2002',
        genres: ['Comedy', 'Drama'],
        director: 'Spike Jonze',
        actors: ['Nicolas Cage', 'Meryl Streep', 'Chris Cooper'],
        type: 'movie',
        styles: [
            { name: 'Swamp Poetics', promptString: 'humid Florida Everglades, lush green foliage, misty air, macro orchid focus, sunlight through cypress trees' },
            { name: 'Neurotic Noir', promptString: 'low light, clutteredwriter desk, shadow play on face, intense close-up, dusty atmosphere' }
        ],
        posterPrompt: "Official movie poster for Adaptation (2002), Nicolas Cage as twin brothers, orchid flowers, 'ADAPTATION' title, Charlie Kaufman meta-comedy --ar 2:3"
    },
    {
        id: 'family-man',
        title: 'The Family Man',
        year: '2000',
        genres: ['Comedy', 'Drama', 'Fantasy'],
        director: 'Brett Ratner',
        actors: ['Nicolas Cage', 'Tea Leoni'],
        type: 'movie',
        styles: [
            { name: 'Manhattan Chrome', promptString: 'cold blue steel, floor-to-ceiling glass, city lights, luxury Ferrari reflection, penthouse aesthetic' },
            { name: 'Suburban Warmth', promptString: 'warm incandescent light, messy living room, snow-covered neighborhood, holiday decorations, domestic comfort' }
        ],
        posterPrompt: "Official movie poster for The Family Man (2000), Nicolas Cage in two different worlds, Christmas setting, 'THE FAMILY MAN' title, holiday fantasy drama --ar 2:3"
    },
    {
        id: 'fear-and-loathing',
        title: 'Fear and Loathing in Las Vegas',
        year: '1998',
        genres: ['Adventure', 'Comedy', 'Drama'],
        director: 'Terry Gilliam',
        actors: ['Johnny Depp', 'Benicio Del Toro'],
        type: 'movie',
        styles: [
            { name: 'Gonzo Vision', promptString: 'distorted wide angle lens, Dutch tilt, vibrant psychedelic colors, desert heat haze, hallucinogenic motion blur' },
            { name: 'Vegas Neon Night', promptString: 'flickering neon, blurry hotel bar, lizard-like shadows, excessive smoke, chaos' }
        ],
        posterPrompt: "Official movie poster for Fear and Loathing in Las Vegas (1998), Johnny Depp with sunglasses and cigarette, psychedelic Las Vegas, 'FEAR AND LOATHING' title, Terry Gilliam gonzo comedy --ar 2:3"
    },
    {
        id: 'coherence',
        title: 'Coherence',
        year: '2013',
        genres: ['Mystery', 'Sci-Fi', 'Thriller'],
        director: 'James Ward Byrkit',
        actors: ['Emily Foxler', 'Maury Sterling'],
        type: 'movie',
        styles: [
            { name: 'Glow Stick Haze', promptString: 'blue and red glow sticks, lighting from below, pitch black environment, handheld camera, high contrast' },
            { name: 'Parallel Tension', promptString: 'split focus, reflection in glass, dark neighborhood, strobe-like flickering, paranoid atmosphere' }
        ],
        posterPrompt: "Official movie poster for Coherence (2013), dinner party in multiverse chaos, 'COHERENCE' title, indie sci-fi mystery thriller --ar 2:3"
    },
    {
        id: 'ikiru',
        title: 'Ikiru',
        year: '1952',
        genres: ['Drama'],
        director: 'Akira Kurosawa',
        actors: ['Takashi Shimura'],
        type: 'movie',
        styles: [
            { name: 'Kurosawa Monochrome', promptString: 'high contrast black and white, deep focus, Japanese office bureaucracy, rain and mud, snow on a swing' },
            { name: 'Metropolitan Melancholy', promptString: '1952 Tokyo streets, crowded bars, smoke trails, spiritual awakening' }
        ],
        posterPrompt: "Official movie poster for Ikiru (1952), Takashi Shimura on a swing in snow, 'IKIRU' title, Kurosawa Japanese cinema masterpiece --ar 2:3"
    },
    {
        id: 'long-days-journey',
        title: 'Long Day\'s Journey into Night',
        year: '2018',
        genres: ['Drama', 'Mystery'],
        director: 'Bi Gan',
        actors: ['Huang Jue', 'Tang Wei'],
        type: 'movie',
        styles: [
            { name: 'Emerald Dream', promptString: 'sickly emerald green lighting, wet cave walls, 3D long take effect, floating movement, magical realism' },
            { name: 'Kaili Noir', promptString: 'damp urban decay, neon reflections in puddles, blue night sky, cinematic drone shots, foggy landscape' }
        ],
        posterPrompt: "Official movie poster for Long Day's Journey into Night (2018), dreamy Chinese noir, emerald lighting, 'LONG DAY'S JOURNEY INTO NIGHT' title, Bi Gan art cinema --ar 2:3"
    },
    {
        id: 'flashdance',
        title: 'Flashdance',
        year: '1983',
        genres: ['Drama', 'Music', 'Romance'],
        director: 'Adrian Lyne',
        actors: ['Jennifer Beals'],
        type: 'movie',
        styles: [
            { name: 'Steel Mill Grit', promptString: 'welding sparks, orange fire, blue collar industrial texture, sweat on skin, grit' },
            { name: 'Spotlight Silhouette', promptString: 'water drenching, stage spotlight, strobe light, high energy dance, 80s aerobics aesthetic' }
        ],
        posterPrompt: "Official movie poster for Flashdance (1983), Jennifer Beals in iconic dance pose, water splash, 'FLASHDANCE' title, 80s dance drama --ar 2:3"
    },
    {
        id: 'in-the-mood-for-love',
        title: 'In the Mood for Love',
        year: '2000',
        genres: ['Drama', 'Romance'],
        director: 'Wong Kar-wai',
        actors: ['Tony Leung', 'Maggie Cheung'],
        type: 'movie',
        styles: [
            { name: 'Wong Kar-wai Glow', promptString: 'saturated red and green palette, step printing motion blur, narrow hallways, cigarette smoke trails, qipao patterns' },
            { name: 'Hong Kong Noir', promptString: 'rain-soaked alleys, tungsten street lamps, reflective puddles, 1960s nostalgia, repressed emotion' }
        ],
        posterPrompt: "Official movie poster for In the Mood for Love (2000), Tony Leung and Maggie Cheung in 1960s Hong Kong, 'IN THE MOOD FOR LOVE' title, Wong Kar-wai romantic drama --ar 2:3"
    },
    {
        id: 'star-is-born',
        title: 'A Star Is Born',
        year: '2018',
        genres: ['Drama', 'Music', 'Romance'],
        director: 'Bradley Cooper',
        actors: ['Lady Gaga', 'Bradley Cooper'],
        type: 'movie',
        styles: [
            { name: 'Stage Glare', promptString: 'blinding white spotlights, lens flare, sweat and hair, roaring crowd, intimate close-up' },
            { name: 'Sunset Rock', promptString: 'golden hour, desert studio, dusty warm lighting, blue and orange color grade, raw emotion' }
        ],
        posterPrompt: "Official movie poster for A Star Is Born (2018), Lady Gaga and Bradley Cooper singing together, 'A STAR IS BORN' title, music romance drama --ar 2:3"
    },
    {
        id: 'the-long-goodbye',
        title: 'The Long Goodbye',
        year: '1973',
        genres: ['Comedy', 'Crime', 'Drama'],
        director: 'Robert Altman',
        actors: ['Elliott Gould'],
        type: 'movie',
        styles: [
            { name: 'Altman Haze', promptString: '70s film grain, constant camera movement, sun-bleached Malibu, tobacco smoke, hazy blue and orange' },
            { name: 'California Noir', promptString: 'beach house glass reflections, 1970s cars, relaxed gumshoe aesthetic, neon in the fog' }
        ],
        posterPrompt: "Official movie poster for The Long Goodbye (1973), Elliott Gould as Philip Marlowe, 70s Malibu, 'THE LONG GOODBYE' title, Robert Altman noir --ar 2:3"
    },
    {
        id: 'all-about-eve',
        title: 'All About Eve',
        year: '1950',
        genres: ['Drama'],
        director: 'Joseph L. Mankiewicz',
        actors: ['Bette Davis', 'Anne Baxter'],
        type: 'movie',
        styles: [
            { name: 'Margo\'s Martini', promptString: 'crisp 1950 black and white, martini glass, elegant evening gowns, cigarette smoke in a crowded room, sharp focus' },
            { name: 'Backstage Shadows', promptString: 'theater wings, stage lights, ambitious glint in eyes, dramatic shadows, Hollywood golden era' }
        ],
        posterPrompt: "Official movie poster for All About Eve (1950), Bette Davis as Margo Channing, Broadway theater setting, 'ALL ABOUT EVE' title, classic Hollywood drama --ar 2:3"
    },
    {
        id: 'body-heat',
        title: 'Body Heat',
        year: '1981',
        genres: ['Crime', 'Drama', 'Romance'],
        director: 'Lawrence Kasdan',
        actors: ['William Hurt', 'Kathleen Turner'],
        type: 'movie',
        styles: [
            { name: 'Florida Sweat', promptString: 'humid night, amber and orange glow, spinning fans, skin sheen, tropical moisture, 80s noir' },
            { name: 'Lady in White', promptString: 'white dress silhouette, moonlit beach, breaking glass, intense shadows, dangerous mystery' }
        ],
        posterPrompt: "Official movie poster for Body Heat (1981), William Hurt and Kathleen Turner, steamy Florida noir, 'BODY HEAT' title, erotic thriller --ar 2:3"
    },
    {
        id: 'talented-mr-ripley',
        title: 'The Talented Mr. Ripley',
        year: '1999',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Anthony Minghella',
        actors: ['Matt Damon', 'Gwyneth Paltrow', 'Jude Law'],
        type: 'movie',
        styles: [
            { name: 'Mediterranean Bliss', promptString: 'sun-drenched Italy, turquoise water, yellow sun, 1950s linen fashion, vintage boat, luxury' },
            { name: 'Ripley\'s Shadow', promptString: 'dark Venetian canals, moody evening light, mirror forgeries, cold blue and gold, obsession' }
        ],
        posterPrompt: "Official movie poster for The Talented Mr. Ripley (1999), Matt Damon in Italian Riviera, 'THE TALENTED MR. RIPLEY' title, psychological thriller --ar 2:3"
    },
    {
        id: 'war-of-the-worlds',
        title: 'War of the Worlds',
        year: '2005',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Steven Spielberg',
        actors: ['Tom Cruise', 'Dakota Fanning'],
        type: 'movie',
        styles: [
            { name: 'Tripod Terror', promptString: 'massive alien machinery, red pulse, urban dust and ash, lightning strikes, Spielberg scale, blue-grey palette' },
            { name: 'Technicolor Invasion', promptString: '1953 technicolor, glowing green forcefields, heat ray beams, retro-futuristic ships, vibrant chaos' }
        ],
        posterPrompt: "Official movie poster for War of the Worlds (2005), Tom Cruise fleeing alien tripods, 'WAR OF THE WORLDS' title, Spielberg sci-fi disaster --ar 2:3"
    },
    {
        id: 'this-is-the-end',
        title: 'This Is The End',
        year: '2013',
        genres: ['Comedy', 'Fantasy'],
        director: 'Seth Rogen, Evan Goldberg',
        actors: ['James Franco', 'Seth Rogen', 'Jonah Hill'],
        type: 'movie',
        styles: [
            { name: 'Hollywood Rapture', promptString: 'blue heavenly beams, Hollywood hills on fire, burning mansion, neon party, apocalyptic chaos' },
            { name: 'Heavenly Glow', promptString: 'infinite white space, golden details, bright lens flare, ethereal music video aesthetic' }
        ],
        posterPrompt: "Official movie poster for This Is The End (2013), celebrities at apocalypse party, 'THIS IS THE END' title, comedy disaster --ar 2:3"
    },
    {
        id: 'any-given-sunday',
        title: 'Any Given Sunday',
        year: '1999',
        genres: ['Drama', 'Sport'],
        director: 'Oliver Stone',
        actors: ['Al Pacino', 'Cameron Diaz', 'Jamie Foxx'],
        type: 'movie',
        styles: [
            { name: 'Gridiron Grit', promptString: 'muddy uniforms, rain, sweat, aggressive handheld shots, high shutter speed, gritty texture, stadium lights' },
            { name: 'Miami Glitz', promptString: 'vibrant 90s colors, luxury offices, neon nightlife, fast-paced editing, power dynamics' }
        ],
        posterPrompt: "Official movie poster for Any Given Sunday (1999), Al Pacino as football coach, 'ANY GIVEN SUNDAY' title, Oliver Stone sports drama --ar 2:3"
    },
    {
        id: 'red-dragon',
        title: 'Red Dragon',
        year: '2002',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Brett Ratner',
        actors: ['Edward Norton', 'Anthony Hopkins', 'Ralph Fiennes'],
        type: 'movie',
        styles: [
            { name: 'Tooth Fairy Glow', promptString: 'dark lunar lighting, Red Dragon tattoo, full moon, museum shadows, intense close-up on eyes' },
            { name: 'Hannibal\'s Study', promptString: 'refined leather and wood, warm amber lighting, intellectual horror, meticulous detail' }
        ],
        posterPrompt: "Official movie poster for Red Dragon (2002), Anthony Hopkins as Hannibal Lecter, 'RED DRAGON' title, psychological thriller prequel --ar 2:3"
    },
    {
        id: 'hannibal',
        title: 'Hannibal',
        year: '2001',
        genres: ['Crime', 'Drama', 'Thriller'],
        director: 'Ridley Scott',
        actors: ['Anthony Hopkins', 'Julianne Moore'],
        type: 'movie',
        styles: [
            { name: 'Florence Elegance', promptString: 'warm Italian sunset, Palazzo architecture, leather coat, refined violence, Tuscan palette' },
            { name: 'Boar Pen Horror', promptString: 'muddy ground, grey misty light, gothic atmosphere, high contrast, industrial farming grit' }
        ],
        posterPrompt: "Official movie poster for Hannibal (2001), Anthony Hopkins as Hannibal Lecter in Florence, 'HANNIBAL' title, Ridley Scott thriller sequel --ar 2:3"
    },
    {
        id: 'almost-famous',
        title: 'Almost Famous',
        year: '2000',
        genres: ['Adventure', 'Comedy', 'Drama'],
        director: 'Cameron Crowe',
        actors: ['Billy Crudup', 'Patrick Fugit', 'Kate Hudson'],
        type: 'movie',
        styles: [
            { name: 'Band-Aid Gold', promptString: 'warm golden hour, 1970s sun-bleached look, fur collar, round sunglasses, backstage glow' },
            { name: 'Tour Bus Haze', promptString: '70s film grain, smoky bus interior, American landscape out window, nostalgic rock vibe' }
        ],
        posterPrompt: "Official movie poster for Almost Famous (2000), 1970s rock band on tour, 'ALMOST FAMOUS' title, Cameron Crowe music drama --ar 2:3"
    },
    {
        id: 'edward-scissorhands',
        title: 'Edward Scissorhands',
        year: '1990',
        genres: ['Drama', 'Fantasy', 'Romance'],
        director: 'Tim Burton',
        actors: ['Johnny Depp', 'Winona Ryder'],
        type: 'movie',
        styles: [
            { name: 'Gothic Winter', promptString: 'dark castle silhouette, blue starlight, ice sculpture shavings, pale skin, Tim Burton contrast' },
            { name: 'Pastel Suburbia', promptString: 'candy-colored houses, perfectly manicured lawns, topiary bushes, 1950s aesthetic, vibrant saturation' }
        ],
        posterPrompt: "Official movie poster for Edward Scissorhands (1990), Johnny Depp with scissor hands, gothic castle, 'EDWARD SCISSORHANDS' title, Tim Burton fantasy romance --ar 2:3"
    },
    {
        id: 'cocktail',
        title: 'Cocktail',
        year: '1988',
        genres: ['Comedy', 'Drama', 'Romance'],
        director: 'Roger Donaldson',
        actors: ['Tom Cruise', 'Bryan Brown'],
        type: 'movie',
        styles: [
            { name: '80s Flair', promptString: 'spinning bottles, neon blue and pink bar, sweat, 80s glam, high energy motion blur' },
            { name: 'Jamaica Beach', promptString: 'turquoise water, white sand, tiki bar, tropical sunrise, vibrant 80s island look' }
        ],
        posterPrompt: "Official movie poster for Cocktail (1988), Tom Cruise as bartender, 'COCKTAIL' title, 80s romantic drama --ar 2:3"
    },
    {
        id: 'wolf-of-wall-street',
        title: 'The Wolf of Wall Street',
        year: '2013',
        genres: ['Biography', 'Comedy', 'Crime'],
        director: 'Martin Scorsese',
        actors: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie'],
        type: 'movie',
        styles: [
            { name: 'Broker Chaos', promptString: 'hectic office BULLPEN, flying papers, sweat, wide angle lens, 90s corporate excess, vibrant satire' },
            { name: 'Duchess Pink', promptString: 'opulent white mansion, high-end fashion, yacht in a storm, Ferrari 512 TR, sheer decadence' }
        ],
        posterPrompt: "Official movie poster for The Wolf of Wall Street (2013), Leonardo DiCaprio with money raining down, 'THE WOLF OF WALL STREET' title, Scorsese crime comedy --ar 2:3"
    },
    {
        id: 'the-big-short',
        title: 'The Big Short',
        year: '2015',
        genres: ['Biography', 'Comedy', 'Drama'],
        director: 'Adam McKay',
        actors: ['Christian Bale', 'Steve Carell', 'Ryan Gosling'],
        type: 'movie',
        styles: [
            { name: 'Wall Street Ticker', promptString: 'clinical office lighting, stock market numbers, handheld camera, fourth wall break, 2008 urban grit' },
            { name: 'Vegas Boom', promptString: 'neon casino floor, poolside greed, desert heat, vibrant and cynical documentary style' }
        ],
        posterPrompt: "Official movie poster for The Big Short (2015), Christian Bale and ensemble cast, Wall Street collapse, 'THE BIG SHORT' title, Adam McKay financial satire --ar 2:3"
    },
    {
        id: 'halloween',
        title: 'Halloween',
        year: '1978',
        genres: ['Horror', 'Thriller'],
        director: 'John Carpenter',
        actors: ['Jamie Lee Curtis', 'Donald Pleasence'],
        type: 'movie',
        styles: [
            { name: 'Suburban Stalking', promptString: 'wide shot of suburban street, autumn leaves, daytime, figure in background, eerie voyeurism, panavision' },
            { name: 'The Shape', promptString: 'white mask in shadows, heavy breathing, silhouette, darkness, blue moonlight, terrifying presence' },
            { name: 'Closet POV', promptString: 'slatted closet door, light slicing through darkness, trapped, suspense, claustrophobic' }
        ],
        posterPrompt: "Official movie poster for Halloween (1978), Michael Myers white mask in shadows, pumpkin, 'HALLOWEEN' title, John Carpenter slasher horror classic --ar 2:3"
    },
    {
        id: 'vampires-kiss',
        title: 'Vampire\'s Kiss',
        year: '1988',
        genres: ['Comedy', 'Horror'],
        director: 'Robert Bierman',
        actors: ['Nicolas Cage', 'Maria Conchita Alonso'],
        type: 'movie',
        styles: [
            { name: 'New York Madness', promptString: 'wide eyes, sweat, chaotic office, 80s suit, unhinged energy, urban isolation' },
            { name: 'Plastic Fangs', promptString: 'cheap vampire teeth, mirror reflection, delusion, neon city lights, tragic comedy' },
            { name: 'Sofa Fort', promptString: 'upside down furniture, makeshift cage, erratic movements, shadows, insanity' }
        ],
        posterPrompt: "Official movie poster for Vampire's Kiss (1988), Nicolas Cage with plastic vampire fangs, 80s NYC, 'VAMPIRE'S KISS' title, cult horror comedy --ar 2:3"
    },
    {
        id: 'willys-wonderland',
        title: 'Willy\'s Wonderland',
        year: '2021',
        genres: ['Action', 'Comedy', 'Horror'],
        director: 'Kevin Lewis',
        actors: ['Nicolas Cage', 'Emily Tosta'],
        type: 'movie',
        styles: [
            { name: 'Animatronic Horror', promptString: 'creepy mascot, fur texture, oil and grease, flickering fluorescent lights, jump scare' },
            { name: 'Pinball Break', promptString: 'intense pinball playing, neon flashing lights, energy drink, stoic silence, rhythmic action' },
            { name: 'Janitor Rage', promptString: 'mop handle weapon, fighting stance, exploding robot parts, grime, blood and oil splatter' }
        ],
        posterPrompt: "Official movie poster for Willy's Wonderland (2021), Nicolas Cage fighting animatronics, neon arcade, 'WILLY'S WONDERLAND' title, horror action --ar 2:3"
    }
];



