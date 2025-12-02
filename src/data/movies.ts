import type { Movie } from './types';

export const movies: Movie[] = [
    {
        id: 'top-gun',
        title: 'Top Gun',
        year: '1986',
        styles: [
            { name: '80s Sunset', promptString: 'golden hour, silhouette, heavy grain, 35mm film, warm orange and purple gradient, tony scott aesthetic' },
            { name: 'Cockpit HUD', promptString: 'green digital overlay, fighter jet interior, glass reflection, high tech military, claustrophobic' },
            { name: 'Volleyball Sweat', promptString: 'oiled skin, bright sunlight, beach setting, high contrast, saturated colors, heat haze' }
        ]
    },
    {
        id: 'interview-vampire',
        title: 'Interview with the Vampire',
        year: '1994',
        styles: [
            { name: 'Gothic Candlelight', promptString: 'dimly lit, flickering candlelight, baroque interior, velvet textures, deep shadows, romantic horror' },
            { name: 'New Orleans Decay', promptString: 'foggy streets, gas lamps, rotting wood, spanish moss, humid atmosphere, 18th century' },
            { name: 'Vampire Pale', promptString: 'alabaster skin, translucent veins, piercing eyes, high contrast, cold blue undertones, supernatural' }
        ]
    },
    {
        id: 'oldboy',
        title: 'Oldboy',
        year: '2003',
        styles: [
            { name: 'Green Corridor', promptString: 'sickly green fluorescent lighting, narrow hallway, dirty textures, neo-noir, park chan-wook aesthetic' },
            { name: 'Hammer Grit', promptString: 'extreme close up, motion blur, visceral violence, blood splatter, raw and gritty, high tension' },
            { name: 'Neon Noir', promptString: 'deep blacks, vibrant neon signs, wet streets, urban isolation, mystery, cinematic shadow' }
        ]
    },
    {
        id: 'john-wick',
        title: 'John Wick',
        year: '2014',
        styles: [
            { name: 'Neon Club', promptString: 'vibrant pink and blue neon, club lighting, smoke machine, reflective surfaces, sleek action' },
            { name: 'Tactical Suit', promptString: 'sharp black suit, gun metal grey, clean lines, professional killer, high contrast, modern noir' },
            { name: 'Rainy NYC', promptString: 'heavy rain, wet pavement, city lights reflecting, dark atmosphere, moody, urban solitude' }
        ]
    },
    {
        id: 'american-psycho',
        title: 'American Psycho',
        year: '2000',
        styles: [
            { name: 'Corporate Cold', promptString: 'sterile white environment, minimalism, harsh fluorescent light, expensive suits, emotionless' },
            { name: 'Blood Splatter', promptString: 'bright red blood on white plastic, shocking contrast, surreal violence, pristine horror' },
            { name: '80s Yuppie', promptString: 'warm upscale restaurant lighting, crystal glasses, designer clothing, excess, superficial beauty' }
        ]
    },
    {
        id: 'gladiator',
        title: 'Gladiator',
        year: '2000',
        styles: [
            { name: 'Roman Dust', promptString: 'sun bleached, floating dust particles, arena sand, ancient stone, epic scale, ridley scott atmosphere' },
            { name: 'Colosseum Sun', promptString: 'blinding sunlight, harsh shadows, metallic armor reflection, heat waves, intense action' },
            { name: 'Wheat Field', promptString: 'golden wheat, soft focus, dreamlike, hand brushing through grain, ethereal, afterlife' }
        ]
    },
    {
        id: 'seven',
        title: 'Se7en',
        year: '1995',
        styles: [
            { name: 'Gritty Rain', promptString: 'constant downpour, urban decay, bleach bypass process, high contrast, desaturated colors, fincher aesthetic' },
            { name: 'Flashlight Beam', promptString: 'piercing light in darkness, dust motes, claustrophobic, crime scene investigation, shadow play' },
            { name: 'Desaturated City', promptString: 'sepia tones, grime, peeling paint, oppressive atmosphere, hopelessness, industrial texture' }
        ]
    },
    {
        id: 'fight-club',
        title: 'Fight Club',
        year: '1999',
        styles: [
            { name: 'Basement Grime', promptString: 'sweat, blood, concrete, dim single bulb lighting, raw visceral energy, underground' },
            { name: 'Soap Pink', promptString: 'bright pink soap, chemical burns, surreal satire, consumerism, pop art contrast' },
            { name: 'Insomnia Blue', promptString: 'cold blue tint, dark circles, ikea catalog sterile, corporate office, dissociation, sleepless' }
        ]
    },
    {
        id: 'aliens',
        title: 'Aliens',
        year: '1986',
        styles: [
            { name: 'Industrial Blue', promptString: 'cold steel, blue emergency lighting, steam, futuristic military, james cameron aesthetic' },
            { name: 'Xenomorph Slime', promptString: 'organic resin, dripping slime, glistening black surfaces, biomechanical, horror' },
            { name: 'Motion Tracker Green', promptString: 'grainy green screen, sonar blips, low light, tension, claustrophobia, tech noir' }
        ]
    },
    {
        id: 'predator',
        title: 'Predator',
        year: '1987',
        styles: [
            { name: 'Jungle Heat', promptString: 'dense foliage, sweat, humidity, bright green leaves, dappled sunlight, survival' },
            { name: 'Thermal Vision', promptString: 'heat signature spectrum, blue and red and yellow, alien pov, hunting mode' },
            { name: 'Mud Camo', promptString: 'covered in mud, blending with nature, primal, dirty textures, stealth' }
        ]
    },
    {
        id: 'joker',
        title: 'Joker',
        year: '2019',
        styles: [
            { name: 'Clown Makeup', promptString: 'smeared greasepaint, extreme close up, texture of skin, tragic expression, vibrant colors' },
            { name: 'Subway Green', promptString: 'flickering fluorescent lights, dirty subway tiles, teal and orange color grading, urban isolation' },
            { name: 'Talk Show Blue', promptString: 'bright tv studio lighting, retro curtains, saturated blue and red, media spectacle' }
        ]
    },
    {
        id: 'dune',
        title: 'Dune',
        year: '2021',
        styles: [
            { name: 'Arrakis Sand', promptString: 'endless dunes, spice floating in air, heat haze, massive scale, monochromatic beige and gold' },
            { name: 'Spice Blue', promptString: 'glowing blue eyes, deep indigo shadows, mystical atmosphere, desert night' },
            { name: 'Ornithopter Steel', promptString: 'brutalist architecture, industrial metal, dragonfly wings, dust and machinery, villeneuve aesthetic' }
        ]
    },
    {
        id: 'the-matrix',
        title: 'The Matrix',
        year: '1999',
        styles: [
            { name: 'Digital Rain', promptString: 'falling green code, black background, cyberpunk, glitch effects, simulation' },
            { name: 'Bullet Time', promptString: 'frozen time, 360 degree camera, ripples in air, high speed photography, action' },
            { name: 'Construct White', promptString: 'infinite white space, clean, sterile, nothingness, surreal minimalism' }
        ]
    },
    {
        id: 'blade-runner-2049',
        title: 'Blade Runner 2049',
        year: '2017',
        styles: [
            { name: 'Orange Haze', promptString: 'radioactive dust, thick orange fog, giant statues, post-apocalyptic las vegas, roger deakins cinematography' },
            { name: 'Hologram Pink', promptString: 'giant holographic advertisements, neon pink and purple, rain, cyberpunk city, artificial love' },
            { name: 'Cyberpunk Rain', promptString: 'constant rain, neon reflections on wet pavement, flying cars, dark blue and grey palette, tech noir' }
        ]
    },
    {
        id: 'mad-max-fury-road',
        title: 'Mad Max: Fury Road',
        year: '2015',
        styles: [
            { name: 'Chrome & Rust', promptString: 'shiny chrome spray paint, rusted metal, industrial waste, high contrast, kinetic energy' },
            { name: 'Desert Storm', promptString: 'massive sandstorm, red lightning, tornadoes, apocalyptic scale, orange and black' },
            { name: 'High Octane Blue', promptString: 'day for night shooting, deep saturated blue, moonlight over desert, cold isolation' }
        ]
    },
    {
        id: 'the-dark-knight',
        title: 'The Dark Knight',
        year: '2008',
        styles: [
            { name: 'Gotham Night', promptString: 'city skyline at night, skyscrapers, dark blue and black, imax scale, urban crime' },
            { name: 'Joker Purple', promptString: 'purple suit, green hair, chaotic energy, smeared makeup, anarchist vibe' },
            { name: 'IMAX Blue', promptString: 'cold color temperature, glass and steel, high tech surveillance, nolan aesthetic' }
        ]
    },
    {
        id: 'pulp-fiction',
        title: 'Pulp Fiction',
        year: '1994',
        styles: [
            { name: 'Vintage Diner', promptString: 'red vinyl booths, formica tables, warm lighting, 50s americana, retro cool' },
            { name: 'Tarantino Trunk', promptString: 'low angle shot looking up, trunk lid framing, pov, cinematic signature' },
            { name: 'Monochrome Suit', promptString: 'black and white suits, thin ties, cool detachment, gangster chic, stylized' }
        ]
    },
    {
        id: 'terminator-2',
        title: 'Terminator 2: Judgment Day',
        year: '1991',
        styles: [
            { name: 'Liquid Metal', promptString: 'chrome surface, reflection, shapeshifting, fluid simulation, cold perfection' },
            { name: 'Nuclear Fire', promptString: 'apocalyptic destruction, burning playground, orange and black, nightmare sequence' },
            { name: 'Steel Blue', promptString: 'cold blue night, industrial steel mill, sparks, james cameron blue, tech noir' }
        ]
    },
    {
        id: 'inception',
        title: 'Inception',
        year: '2010',
        styles: [
            { name: 'Folding City', promptString: 'bending architecture, defying gravity, surreal cityscape, dream logic, mind bending' },
            { name: 'Dream Layer', promptString: 'rainy city street, slow motion, texture of water, subconscious projection' },
            { name: 'Zero Gravity', promptString: 'floating objects, spinning hallway, disorientation, sleek hotel interior, physics defying' }
        ]
    },
    {
        id: 'kill-bill-vol-1',
        title: 'Kill Bill: Vol. 1',
        year: '2003',
        styles: [
            { name: 'Yellow Jumpsuit', promptString: 'bright yellow track suit, black stripe, bruce lee homage, vibrant colors, pop art' },
            { name: 'Anime Blood', promptString: 'exaggerated blood spray, silhouette, high contrast, stylized violence, japanese animation influence' },
            { name: 'Snowy Garden', promptString: 'serene japanese garden, falling snow, white silence, blood on snow, poetic duel' }
        ]
    },
    {
        id: 'no-country-for-old-men',
        title: 'No Country for Old Men',
        year: '2007',
        styles: [
            { name: 'Desert Silence', promptString: 'vast texas landscape, empty horizon, harsh sunlight, isolation, silence, coen brothers' },
            { name: 'Motel Shadow', promptString: 'dark motel room, light under the door, suspense, creeping shadow, neo-western' },
            { name: 'Coin Toss Silver', promptString: 'close up of a silver coin, metallic texture, fate, chance, cold indifference' }
        ]
    },
    {
        id: 'drive',
        title: 'Drive',
        year: '2011',
        styles: [
            { name: 'Synthwave Neon', promptString: 'pink and blue neon, retro 80s aesthetic, night driving, cool detachment, nicolas winding refn' },
            { name: 'Scorpion Jacket', promptString: 'white satin, golden embroidery, texture, iconic costume, blood stains' },
            { name: 'LA Night', promptString: 'los angeles skyline, streetlights, bokeh, lonely atmosphere, noir' }
        ]
    },
    {
        id: 'the-fifth-element',
        title: 'The Fifth Element',
        year: '1997',
        styles: [
            { name: 'Multipass Orange', promptString: 'bright orange hair, futuristic fashion, jean paul gaultier costumes, vibrant pop colors, luc besson aesthetic' },
            { name: 'Future NYC', promptString: 'flying cars, vertical city, dense traffic, fog, moebius comic aesthetic, futuristic metropolis' },
            { name: 'Mondoshawan Gold', promptString: 'ancient alien armor, metallic gold, rusty textures, mystical light, temple setting' }
        ]
    },
    {
        id: 'interstellar',
        title: 'Interstellar',
        year: '2014',
        styles: [
            { name: 'Black Hole', promptString: 'gargantua accretion disk, bending light, deep space, cosmic scale, imax aspect ratio, christopher nolan' },
            { name: 'Dust Bowl', promptString: 'cornfields, dust storms, americana, gritty realism, earth tones, dying earth' },
            { name: 'Tesseract', promptString: 'fourth dimension, infinite library, strings of time, surreal architecture, abstract, light rays' }
        ]
    },
    {
        id: 'the-shining',
        title: 'The Shining',
        year: '1980',
        styles: [
            { name: 'Overlook Carpet', promptString: 'hexagonal pattern, orange and brown, geometric, hypnotic, steadicam tracking shot, stanley kubrick' },
            { name: 'Redrum', promptString: 'blood elevator, bright red blood, art deco hotel, psychological horror, symmetrical composition' },
            { name: 'Snow Maze', promptString: 'frozen hedge maze, blue moonlight, mist, isolation, cold atmosphere, winter night' }
        ]
    },
    {
        id: 'tron-legacy',
        title: 'Tron: Legacy',
        year: '2010',
        styles: [
            { name: 'The Grid', promptString: 'neon blue lines, black glass, digital landscape, symmetry, daft punk aesthetic, clean lines' },
            { name: 'Light Cycle', promptString: 'light trails, motion blur, high speed, sleek vehicles, cybernetic, neon orange and blue' },
            { name: 'Iso Orange', promptString: 'warm orange neon, contrast against blue, digital dna, organic code, simulation' }
        ]
    },
    {
        id: 'taxi-driver',
        title: 'Taxi Driver',
        year: '1976',
        styles: [
            { name: 'Yellow Cab', promptString: 'checker cab, steam rising from streets, night city, urban decay, martin scorsese grit' },
            { name: 'Mohawk', promptString: 'military jacket, sunglasses, mohawk haircut, mirror reflection, anti-hero, intense stare' },
            { name: 'Neon Rain', promptString: 'rain on windshield, blurred neon lights, bokeh, loneliness, jazz atmosphere, new york night' }
        ]
    }
];
