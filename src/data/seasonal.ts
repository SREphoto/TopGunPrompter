import type { MediaItem } from './types';

export const seasonalMedia: MediaItem[] = [
    // ==========================================
    // 🍂 FALL
    // ==========================================
    {
        id: 'over-the-garden-wall',
        title: 'Over the Garden Wall',
        year: '2014',
        genres: ['Animation', 'Adventure', 'Dark Fantasy', 'Fall'],
        director: 'Patrick McHale',
        actors: ['Elijah Wood', 'Collin Dean', 'Melanie Lynskey', 'Christopher Lloyd'],
        type: 'series',
        holiday: 'fall',
        styles: [
            { name: 'Unknown Woods', promptString: 'vintage 19th-century Americana, storybook watercolor illustration, misty autumn woods, glowing lantern, golden amber and russet palette, folk horror atmosphere' },
            { name: 'Pottsfield Harvest', promptString: 'corn husks, giant carved pumpkin heads, harvest festival, warm golden hour autumn lighting, rustic barn textures, antique storybook illustration' },
            { name: 'The Beast\'s Silhouette', promptString: 'dark silhouetted antlered figure, multi-colored glowing eyes, black edelwood forest, thick foggy atmosphere, high contrast chiaroscuro' }
        ],
        posterPrompt: "Official series poster for Over the Garden Wall (2014), Wirt with pointy red gnome hat and Greg with teapot on head in dark misty autumn woods with Woodsman's glowing lantern, pumpkin folk in background, vintage storybook watercolor aesthetic --ar 2:3"
    },
    {
        id: 'dead-poets-society',
        title: 'Dead Poets Society',
        year: '1989',
        genres: ['Drama', 'Fall'],
        director: 'Peter Weir',
        actors: ['Robin Williams', 'Robert Sean Leonard', 'Ethan Hawke'],
        type: 'movie',
        holiday: 'fall',
        styles: [
            { name: 'Welton Academy Fall', promptString: 'New England prep school, red brick architecture, vivid autumn maple leaves, woolen blazers, soft overcast October sunlight, nostalgic 35mm film grain' },
            { name: 'Cave by Moonlight', promptString: 'dark stone cave, flickering candle flames, boys reading poetry, shadows dancing on rock walls, intimate chiaroscuro' },
            { name: 'O Captain My Captain', promptString: 'classroom perspective, wooden school desks, boys standing atop desks, warm natural window light, emotional triumph' }
        ],
        posterPrompt: "Official movie poster for Dead Poets Society (1989), Robin Williams with students in New England prep school autumn foliage, 'DEAD POETS SOCIETY' classic typography, warm golden 80s film style --ar 2:3"
    },
    {
        id: 'autumn-in-new-york',
        title: 'Autumn in New York',
        year: '2000',
        genres: ['Drama', 'Romance', 'Fall'],
        director: 'Joan Chen',
        actors: ['Richard Gere', 'Winona Ryder', 'Anthony LaPaglia'],
        type: 'movie',
        holiday: 'fall',
        styles: [
            { name: 'Central Park Canopy', promptString: 'Central Park walking path, towering golden elm tree canopy, leaves raining down in wind, warm cashmere coats, romantic November atmosphere' },
            { name: 'Rooftop Conservatory', promptString: 'vintage glass greenhouse on Manhattan rooftop, rain streaks, warm fairy lights, autumn dusk, bittersweet romance' },
            { name: 'Gramercy Brownstone', promptString: 'Manhattan brownstone front steps, carved pumpkins, golden sodium streetlamp, sycamore leaves on wet pavement' }
        ],
        posterPrompt: "Official movie poster for Autumn in New York (2000), Richard Gere and Winona Ryder walking in Central Park under brilliant golden autumn foliage, Manhattan skyline in mist, romantic drama style --ar 2:3"
    },
    {
        id: 'fantastic-mr-fox',
        title: 'Fantastic Mr. Fox',
        year: '2009',
        genres: ['Animation', 'Adventure', 'Comedy', 'Fall'],
        director: 'Wes Anderson',
        actors: ['George Clooney', 'Meryl Streep', 'Bill Murray', 'Jason Schwartzman'],
        type: 'movie',
        holiday: 'fall',
        styles: [
            { name: 'Wes Anderson Autumn', promptString: 'Wes Anderson stop-motion aesthetic, russet orange, golden yellow, corduroy textures, symmetrical framing, tactile fur miniatures' },
            { name: 'Cider Cellar Heist', promptString: 'rustic stone cider cellar, barrels of glowing golden cider, warm tungsten lighting, meticulous miniature props' },
            { name: 'Ridge Wolf Encounter', promptString: 'snow-dusted rock ridge against autumn forest, wild black wolf silhouetted against crisp sky, solemn beauty' }
        ],
        posterPrompt: "Official movie poster for Fantastic Mr. Fox (2009), Mr. Fox in double-breasted corduroy suit with woodland creatures against glowing orange autumn landscape, Wes Anderson symmetrical style --ar 2:3"
    },
    {
        id: 'gilmore-girls-autumn',
        title: 'Gilmore Girls: Autumn in Stars Hollow',
        year: '2002',
        genres: ['Comedy', 'Drama', 'Fall'],
        director: 'Amy Sherman-Palladino',
        actors: ['Lauren Graham', 'Alexis Bledel', 'Scott Patterson', 'Melissa McCarthy'],
        type: 'series',
        holiday: 'fall',
        styles: [
            { name: 'Stars Hollow Festival', promptString: 'charming Connecticut small town square, wooden gazebo draped in autumn leaves, pumpkins and hay bales, cozy sunny fall morning' },
            { name: 'Luke\'s Diner Warmth', promptString: 'diner counter with giant steaming mugs of coffee, flannel shirts, pumpkin pie display, warm yellow incandescent light' },
            { name: 'Chilton Autumn Path', promptString: 'ivy-covered brick school building, fallen red maple leaves, navy prep blazers, crisp New England breeze' }
        ],
        posterPrompt: "Official series poster for Gilmore Girls Autumn, Lorelai and Rory holding coffee mugs in front of the Stars Hollow gazebo surrounded by glowing orange autumn trees and pumpkins, cozy nostalgic aesthetic --ar 2:3"
    },

    // ==========================================
    // 🎃 HALLOWEEN (Cartoons & Specials)
    // ==========================================
    {
        id: 'great-pumpkin-charlie-brown',
        title: 'It\'s the Great Pumpkin, Charlie Brown',
        year: '1966',
        genres: ['Animation', 'Comedy', 'Family', 'Halloween'],
        director: 'Bill Melendez',
        actors: ['Peter Robbins', 'Christopher Shea', 'Sally Dryer'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Peanuts Watercolor 1960s', promptString: '1960s hand-drawn cel animation, Charles Schulz comic linework, warm autumn watercolor washes, vibrant orange and violet skies' },
            { name: 'Sincere Pumpkin Patch', promptString: 'sprawling dark pumpkin patch under enormous glowing harvest moon, Linus with blue blanket, crisp October night' },
            { name: 'WWI Flying Ace', promptString: 'Snoopy atop red doghouse with aviator goggles and red scarf, imagined over smoky French battlefields, whimsical retro comic charm' }
        ],
        posterPrompt: "Official movie poster for It's the Great Pumpkin Charlie Brown (1966), Linus and Sally waiting in the moonlit pumpkin patch under giant full moon, Snoopy flying doghouse silhouette, vintage hand-drawn Peanuts style --ar 2:3"
    },
    {
        id: 'hocus-pocus',
        title: 'Hocus Pocus',
        year: '1993',
        genres: ['Comedy', 'Family', 'Fantasy', 'Halloween'],
        director: 'Kenny Ortega',
        actors: ['Bette Midler', 'Sarah Jessica Parker', 'Kathy Najimy'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Salem Witch Magic', promptString: '90s Disney dark fantasy, swirling purple and green magical smoke, antique velvet costumes, candlelit cottage interiors' },
            { name: 'Hallowed Ground Cemetery', promptString: 'foggy Salem graveyard, wrought iron gates, full moon, glowing jack-o\'-lanterns, Billy Butcherson rising from earth' },
            { name: 'Cabaret Spell', promptString: 'town hall Halloween dance party, theatrical green spotlights, bewitched dancing crowd, colorful 90s costumes' }
        ],
        posterPrompt: "Official movie poster for Hocus Pocus (1993), Sanderson sisters cackling around bubbling cauldron with green magical smoke, full moon and black cat Binx in Salem cemetery, 90s fantasy aesthetic --ar 2:3"
    },
    {
        id: 'beetlejuice',
        title: 'Beetlejuice',
        year: '1988',
        genres: ['Comedy', 'Fantasy', 'Halloween'],
        director: 'Tim Burton',
        actors: ['Michael Keaton', 'Winona Ryder', 'Geena Davis', 'Alec Baldwin'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Burtonesque Netherworld', promptString: 'Tim Burton German expressionism, black and white stripes, neon green and purple lighting, twisted architecture, surreal stop-motion' },
            { name: 'Lydia Goth Aesthetic', promptString: 'black lace veil, vintage camera, moody adolescent goth portrait, dusty attic lighting, macabre elegance' },
            { name: 'Dinner Table Possession', promptString: 'formal dining room, dancing shrimp cocktail hands, possessed dinner guests, surreal comedic horror' }
        ],
        posterPrompt: "Official movie poster for Beetlejuice (1988), Michael Keaton in black-and-white striped suit grinning wildly atop miniature cemetery with Lydia Deetz in black veil, neon green Burton typography --ar 2:3"
    },
    {
        id: 'simpsons-treehouse-horror-v',
        title: 'The Simpsons: Treehouse of Horror V',
        year: '1994',
        genres: ['Animation', 'Comedy', 'Horror', 'Halloween'],
        director: 'Jim Reardon',
        actors: ['Dan Castellaneta', 'Julie Kavner', 'Nancy Cartwright', 'Yeardley Smith'],
        type: 'series',
        holiday: 'halloween',
        styles: [
            { name: 'Classic 90s Cel Animation', promptString: 'vintage hand-drawn Simpsons 90s animation, saturated cartoon colors, cel-shaded linework, playful parody horror' },
            { name: 'The Shinning Lodge', promptString: 'snowy mountain lodge, elevator spewing cartoon blood, Homer with axe and wild unhinged eyes, Kubrick tribute' },
            { name: 'Prehistoric Time Jump', promptString: 'glowing prehistoric jungle, giant mosquitoes, time machine toaster, chaotic timeline distortion' }
        ],
        posterPrompt: "Official poster for The Simpsons Treehouse of Horror V (1994), Homer Simpson with axe breaking through wooden door shouting in horror lodge, Kang and Kodos hovering above in UFO, classic cartoon Halloween style --ar 2:3"
    },
    {
        id: 'trick-r-treat',
        title: 'Trick \'r Treat',
        year: '2007',
        genres: ['Horror', 'Mystery', 'Halloween'],
        director: 'Michael Dougherty',
        actors: ['Dylan Baker', 'Rochelle Aytes', 'Anna Paquin', 'Brian Cox'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Harvest Jack-o\'-Lanterns', promptString: 'hundreds of glowing carved jack-o\'-lanterns lighting small town street, foggy autumn night, amber and fiery orange illumination' },
            { name: 'Sam\'s Burlap Dread', promptString: 'burlap sack mask with stitched button eyes, orange footie pajamas, lollipop blade, innocent yet lethal autumn demon' },
            { name: 'Quarry Fog', promptString: 'flooded limestone quarry in October chill, misty water reflections, ghost children in vintage costumes, eerie moonlight' }
        ],
        posterPrompt: "Official movie poster for Trick 'r Treat (2007), mysterious figure Sam in burlap sack mask holding razor lollipop surrounded by glowing jack-o'-lanterns in foggy autumn town, dark horror aesthetic --ar 2:3"
    },
    {
        id: 'casper',
        title: 'Casper',
        year: '1995',
        genres: ['Comedy', 'Family', 'Fantasy', 'Halloween'],
        director: 'Brad Silberling',
        actors: ['Christina Ricci', 'Bill Pullman', 'Cathy Moriarty'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Whipstaff Gothic', promptString: 'crumbling Maine oceanfront Victorian mansion, stormy lightning, swirling dust motes, grand spiral staircases, 90s gothic charm' },
            { name: 'Translucent Glow', promptString: 'friendly glowing translucent white ghost, soft blue-white rim light, interactive floating animation, warm friendly eyes' },
            { name: 'Halloween Manor Ball', promptString: 'grand ballroom decorated for Halloween, thousands of floating candles, sparkling twilight, romantic fairytale magic' }
        ],
        posterPrompt: "Official movie poster for Casper (1995), friendly translucent ghost Casper floating inside grand gothic Whipstaff Manor with Christina Ricci, full moon through stained glass, 90s family fantasy style --ar 2:3"
    },
    {
        id: 'coraline',
        title: 'Coraline',
        year: '2009',
        genres: ['Animation', 'Drama', 'Fantasy', 'Halloween'],
        director: 'Henry Selick',
        actors: ['Dakota Fanning', 'Teri Hatcher', 'John Hodgman'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Other World Luminescence', promptString: 'stop-motion puppet textures, glowing neon purple and turquoise garden, whimsical tactile fabrics, sinister uncanny valley' },
            { name: 'Button Eyes Dread', promptString: 'creepy black button eyes with cross stitches, spider-like long spindly fingers, vintage kitchen in uncanny perfection' },
            { name: 'Needle and Thread Web', promptString: 'spider web made of thick black embroidery thread and steel needles, skeletal arachnid Beldam, shadowy nightmare climax' }
        ],
        posterPrompt: "Official movie poster for Coraline (2009), Coraline in yellow raincoat holding glowing seeing stone looking into small tunnel to the Other World, button eyes silhouetted in shadows, stop-motion animation style --ar 2:3"
    },
    {
        id: 'monster-house',
        title: 'Monster House',
        year: '2006',
        genres: ['Animation', 'Comedy', 'Family', 'Halloween'],
        director: 'Gil Kenan',
        actors: ['Mitchel Musso', 'Sam Lerner', 'Spencer Locke', 'Steve Buscemi'],
        type: 'movie',
        holiday: 'halloween',
        styles: [
            { name: 'Living Suburban Horror', promptString: 'autumn suburban dusk, decaying wooden house roaring with window eyes and carpet tongue, stormy clouds, stylized 3D animation' },
            { name: 'Furnace Heart', promptString: 'dark basement glowing with burning furnace embers, floorboards moving like ribs, smoke billowing, orange firelight' },
            { name: 'October Rain Street', promptString: 'rain-slicked suburban street, Halloween pumpkins on porches, children on bicycles, overcast gloomy October skies' }
        ],
        posterPrompt: "Official movie poster for Monster House (2006), monstrous living wooden house with glowing yellow window eyes and tree branch arms towering over three children on sidewalk, Halloween storm sky --ar 2:3"
    },

    // ==========================================
    // 🩸 DEDICATED HORROR CATEGORY
    // ==========================================
    {
        id: 'friday-the-13th',
        title: 'Friday the 13th',
        year: '1980',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'Sean S. Cunningham',
        actors: ['Betsy Palmer', 'Adrienne King', 'Jeannine Taylor', 'Kevin Bacon'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Camp Crystal Lake Night', promptString: 'misty lake surface at midnight, wooden dock, full moon reflection on black water, dense pine trees, 1980 grainy slasher cinematography' },
            { name: 'Point-of-View Stalker', promptString: 'first-person camera moving through wet woods, branches parting, heavy breathing audio cue, observing counselors through lit cabin window' },
            { name: 'Summer Deluge', promptString: 'torrential rain hammering wooden camp roof, lightning flashes illuminating wet faces, axe through door, raw practical slasher effects' }
        ],
        posterPrompt: "Official movie poster for Friday the 13th (1980), silhouette of killer with bloody knife towering over Camp Crystal Lake cabins under full moon, 'FRIDAY THE 13TH' iconic red lettering, vintage slasher poster --ar 2:3"
    },
    {
        id: 'the-texas-chain-saw-massacre',
        title: 'The Texas Chain Saw Massacre',
        year: '1974',
        genres: ['Horror'],
        director: 'Tobe Hooper',
        actors: ['Marilyn Burns', 'Paul A. Partain', 'Edwin Neal', 'Gunnar Hansen'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Gritty 16mm Texas Sun', promptString: 'scorching Texas sun, 16mm documentary film grain, washed out dust road, oppressive heat haze, visceral pioneer horror' },
            { name: 'Bone Room Macabre', promptString: 'farmhouse room decorated in animal bones and feathers, skull chair, dust motes in yellow sunbeams, grotesque folk nightmare' },
            { name: 'Sunrise Chainsaw Dance', promptString: 'Leatherface spinning with buzzing chainsaw against blood-red Texas sunrise, wild manic movements, pickup truck speeding away' }
        ],
        posterPrompt: "Official movie poster for The Texas Chain Saw Massacre (1974), Leatherface in bloody butcher apron swinging chainsaw above his head against fiery red sunset, 'THE TEXAS CHAINSAW MASSACRE' raw 70s grindhouse style --ar 2:3"
    },
    {
        id: 'hereditary',
        title: 'Hereditary',
        year: '2018',
        genres: ['Drama', 'Horror', 'Mystery'],
        director: 'Ari Aster',
        actors: ['Toni Collette', 'Alex Wolff', 'Milly Shapiro', 'Gabriel Byrne'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Miniature Symmetry', promptString: 'dollhouse miniature diorama perfection, clean geometric symmetry, natural warm daylight hiding unspeakable dread, architectural precision' },
            { name: 'Attic Shadow Terror', promptString: 'dark wooden attic ceiling, unnatural figure clinging upside down, breathless terror, deep inky shadows, psychological collapse' },
            { name: 'Paimon Treehouse Glow', promptString: 'golden candlelight radiating from wooden backyard treehouse at night, occult idol crowned with gold, kneeling headless figures, atmospheric dread' }
        ],
        posterPrompt: "Official movie poster for Hereditary (2018), Toni Collette and family portrait juxtaposed with sinister miniature dollhouse and backyard treehouse glowing at night, Ari Aster psychological horror aesthetic --ar 2:3"
    },
    {
        id: 'the-conjuring',
        title: 'The Conjuring',
        year: '2013',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'James Wan',
        actors: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor', 'Ron Livingston'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: '70s Cellar Haunting', promptString: '1970s farmhouse cellar, stone foundation, flickering match flame, floating dust motes, suffocating negative space, classic supernatural dread' },
            { name: 'Annabelle Display Case', promptString: 'creepy porcelain doll in rocking chair behind sacred glass case, warning sign, warm museum lamp, occult artifact room' },
            { name: 'Violent Poltergeist Surge', promptString: 'chandeliers swinging violently, picture frames crashing, furniture levitating, wind rushing through closed room, theatrical demonic force' }
        ],
        posterPrompt: "Official movie poster for The Conjuring (2013), Rhode Island farmhouse with ominous dead tree and noose silhouetted against cold grey sky, Ed and Lorraine Warren investigation, modern horror style --ar 2:3"
    },
    {
        id: 'saw',
        title: 'Saw',
        year: '2004',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'James Wan',
        actors: ['Cary Elwes', 'Leigh Whannell', 'Danny Glover', 'Tobin Bell'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Dirty Green Tile Bathroom', promptString: 'grimy underground bathroom, stained white tiles, rusty iron pipes, stagnant puddle of dark water, sickly greenish fluorescent lighting' },
            { name: 'Jigsaw Puppet Macabre', promptString: 'Billy the puppet on red tricycle, spiral red cheeks, staring black eyes, microcassette recorder, eerie clockwork mechanics' },
            { name: 'Kinetic Flash Editing', promptString: 'fast shutter angle, motion blur, mechanical gears ticking down, intense panic close-ups, industrial thriller grit' }
        ],
        posterPrompt: "Official movie poster for Saw (2004), severed foot chained to rusty bathroom pipe with rusty hacksaw lying on floor, green tile background, 'SAW' bold metallic title, gritty psychological horror --ar 2:3"
    },
    {
        id: 'childs-play',
        title: 'Child\'s Play',
        year: '1988',
        genres: ['Horror'],
        director: 'Tom Holland',
        actors: ['Catherine Hicks', 'Chris Sarandon', 'Alex Vincent', 'Brad Dourif'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Good Guy Toy Store', promptString: '80s Chicago toy store lightning storm, colorful Good Guy doll boxes stacked high, voodoo lightning sparks, commercial plastic consumerism' },
            { name: 'Kitchen Knife Shadow', promptString: 'tiny doll footprint in flour, silhouette of 2-foot doll holding butcher knife creeping down hallway, low camera angle, claustrophobic apartment' },
            { name: 'Melted Plastic Fiend', promptString: 'charred melted plastic Chucky head, exposed mechanical skull gears, burning fireplace embers, relentless animatronic menace' }
        ],
        posterPrompt: "Official movie poster for Child's Play (1988), Chucky Good Guy doll peeking out of bright yellow toy box holding a gleaming kitchen knife, Chicago apartment lightning storm, 80s horror classic --ar 2:3"
    },
    {
        id: 'night-of-the-living-dead',
        title: 'Night of the Living Dead',
        year: '1968',
        genres: ['Horror'],
        director: 'George A. Romero',
        actors: ['Duane Jones', 'Judith O\'Dea', 'Karl Hardman', 'Marilyn Eastman'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Stark 1968 Monochromatic', promptString: 'high-contrast black-and-white 35mm film stock, harsh shadows, gritty documentary realism, deep blacks and bone whites' },
            { name: 'Boarded Farmhouse Defense', promptString: 'planks of wood hammered over windows, flashlight beams slicing through darkness, grasping undead hands reaching through slats' },
            { name: 'Bleak Dawn Mist', promptString: 'cold morning fog drifting over Pennsylvania fields, armed men with rifles and hunting dogs, grim historical realism' }
        ],
        posterPrompt: "Official movie poster for Night of the Living Dead (1968), terrifying zombie horde swarming outside boarded rural farmhouse under full moon, stark black and white classic horror typography --ar 2:3"
    },
    {
        id: 'it-2017',
        title: 'It',
        year: '2017',
        genres: ['Horror'],
        director: 'Andy Muschietti',
        actors: ['Bill Skarsgård', 'Jaeden Martell', 'Finn Wolfhard', 'Sophia Lillis'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Derry Sewer Grate', promptString: 'dark street gutter drain in torrential rain, yellow rain jacket, glowing predatory eyes of Pennywise smiling from deep shadows, bright red balloon' },
            { name: 'Neibolt Victorian Decay', promptString: 'dilapidated Victorian mansion, rotting porch, overgrown weeds, sunless gray sky, children on vintage bicycles, atmospheric dread' },
            { name: 'Cistern Floating Abyss', promptString: 'underground sewer cavern, mountain of decaying carnival toys, children floating in slow motion spiral around ceiling, surreal nightmare spectacle' }
        ],
        posterPrompt: "Official movie poster for It (2017), young boy in yellow raincoat Georgie facing dark storm drain with glowing yellow clown eyes and bright red balloon, Derry rain street, modern horror blockbuster style --ar 2:3"
    },
    {
        id: 'the-ring',
        title: 'The Ring',
        year: '2002',
        genres: ['Horror', 'Mystery'],
        director: 'Gore Verbinski',
        actors: ['Naomi Watts', 'Martin Henderson', 'David Dorfman', 'Brian Cox'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Cold Pacific Northwest Rain', promptString: 'desaturated cold cyan-green color grade, torrential Seattle rainfall, misty pine forests, Puget Sound ferry, bleak melancholic dread, 35mm film grain' },
            { name: 'Cursed Static Broadcast', promptString: 'flickering cathode ray CRT monitor in dark room, white electronic static noise, tracking error distortion lines, avant-garde surreal nightmare montage' },
            { name: 'Well of Moesko Island', promptString: 'deep subterranean stone water well, dripping black stagnant water, solitary circular light patch above, sodden drenched long black hair, claustrophobic dread' }
        ],
        posterPrompt: "Official movie poster for The Ring (2002), glowing white ring of solar eclipse against pitch-black void with silhouette of ancient stone well, 'BEFORE YOU DIE, YOU SEE THE RING' typography, cold green psychological horror style --ar 2:3"
    },
    {
        id: 'rosemarys-baby',
        title: 'Rosemary\'s Baby',
        year: '1968',
        genres: ['Drama', 'Horror', 'Mystery'],
        director: 'Roman Polanski',
        actors: ['Mia Farrow', 'John Cassavetes', 'Ruth Gordon', 'Sidney Blackmer'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'The Bramford Gothic', promptString: 'late 1960s Manhattan luxury apartment, high ceilings, dark mahogany woodwork, shadowy hallways, ornate brass fixtures, subtle psychological dread' },
            { name: 'Vidal Sassoon Modernity', promptString: 'sharp geometric pixie cut, pale delicate features, pastel linen maternity dresses, bright sunlit Upper West Side rooms masking dark sinister paranoia' },
            { name: 'Occult Coven Elegance', promptString: 'vintage silver filigree tannis root pendant, antique velvet armchairs, flickering yellow candlelight, elderly aristocrats in formal evening wear, sinister intimacy' }
        ],
        posterPrompt: "Official movie poster for Rosemary's Baby (1968), Mia Farrow's delicate profile in pale green mist superimposed against dark silhouette of antique baby perambulator on rocky hilltop, 'ROSEMARY'S BABY' iconic title, psychological horror masterpiece --ar 2:3"
    },
    {
        id: 'a-quiet-place',
        title: 'A Quiet Place',
        year: '2018',
        genres: ['Drama', 'Horror', 'Sci-Fi'],
        director: 'John Krasinski',
        actors: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds', 'Noah Jupe'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Hushed Rural Sanctum', promptString: 'upstate New York farmhouse, white sand walking paths, golden hour cornfields, acoustic insulation foam walls, warm incandescent lamp glow, breathless silence' },
            { name: 'Crimson Warning Glow', promptString: 'strings of red incandescent fairy lights glowing across dark farmyard at night, torrential storm rain, high-contrast chiaroscuro emergency illumination' },
            { name: 'Acoustic Alien Terror', promptString: 'armored extraterrestrial apex predator with fluttering ear plates, subterranean grain silo darkness, industrial metal textures, razor-sharp hearing biology' }
        ],
        posterPrompt: "Official movie poster for A Quiet Place (2018), Emily Blunt clutching her face in silent terror inside clawfoot bathtub with blood on floor, string of glowing red lights, 'A QUIET PLACE' bold typography, suspense horror style --ar 2:3"
    },
    {
        id: 'the-descent',
        title: 'The Descent',
        year: '2005',
        genres: ['Adventure', 'Horror'],
        director: 'Neil Marshall',
        actors: ['Shauna Macdonald', 'Natalie Mendoza', 'Alex Reid', 'Saskia Mulder'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Claustrophobic Subterranean Flare', promptString: 'pitch-black limestone cavern illuminated solely by sputtering red emergency flares, jagged stalactites, deep inky shadows, suffocating subterranean dread' },
            { name: 'Night-Vision Green Dread', promptString: 'grainy monochrome night-vision infrared camera viewfinder, emerald green scan lines, pale blind crawler creature crouching on rock behind spelunker' },
            { name: 'Primal Bloodpool Emergence', promptString: 'survivor emerging coated in thick crimson blood from subterranean bone pool, wild primal eyes, clutching climbing pickaxe, raw visceral survival horror' }
        ],
        posterPrompt: "Official movie poster for The Descent (2005), six female spelunkers silhouetted against glowing red flare deep inside monstrous skull-shaped cavern formation, 'THE DESCENT' bold typography, intense claustrophobic horror --ar 2:3"
    },
    {
        id: '28-days-later',
        title: '28 Days Later',
        year: '2002',
        genres: ['Drama', 'Horror', 'Sci-Fi'],
        director: 'Danny Boyle',
        actors: ['Cillian Murphy', 'Naomie Harris', 'Christopher Eccleston', 'Megan Burns'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Desolate London Dawn', promptString: 'hauntingly empty London landmarks, deserted Westminster Bridge, abandoned red double-decker buses, early morning golden smog, Canon XL1 miniDV digital video grit' },
            { name: 'Furious Sprinting Rage', promptString: 'ferocious athletic infected sprinting through dark alleyways, bloodshot eyes weeping red tears, chaotic handheld motion blur, pure frenzied adrenaline' },
            { name: 'Rainbound Country Manor', promptString: 'fortified English country estate under torrential night thunderstorm, barbed wire and sandbags, military flares cutting through downpour, gothic militarism' }
        ],
        posterPrompt: "Official movie poster for 28 Days Later (2002), hazardous biohazard symbol with blood-red background, empty London street with solitary man in hospital scrubs, '28 DAYS LATER' distressed stencil typography, gritty post-apocalyptic horror --ar 2:3"
    },
    {
        id: 'paranormal-activity',
        title: 'Paranormal Activity',
        year: '2007',
        genres: ['Horror', 'Mystery'],
        director: 'Oren Peli',
        actors: ['Katie Featherston', 'Micah Sloat', 'Mark Fredrichs', 'Amber Armstrong'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Night-Vision Timecode Surveillance', promptString: 'fixed wide angle master bedroom camera, pale green-tinted night-vision glow, blue digital timecode 02:47:19 AM in corner, unsettling mundane stillness' },
            { name: 'Suburban Domestic Unease', promptString: 'bright California suburban house during daytime, polished granite countertops, open floor plan, contrast between mundane domesticity and invisible demonic menace' },
            { name: 'Invisible Force Kinetic', promptString: 'sheets slowly levitating in mid-air above bed, talcum powder on hardwood floor showing three-toed demon footprints, violent door slams, extreme tension' }
        ],
        posterPrompt: "Official movie poster for Paranormal Activity (2007), night-vision camera perspective of couple asleep in bed with door slowly swinging open in shadows, digital timecode, 'WHAT HAPPENS WHEN YOU SLEEP?' psychological horror style --ar 2:3"
    },
    {
        id: 'the-babadook',
        title: 'The Babadook',
        year: '2014',
        genres: ['Drama', 'Horror', 'Mystery'],
        director: 'Jennifer Kent',
        actors: ['Essie Davis', 'Noah Wiseman', 'Daniel Henshall', 'Hayley McElhinney'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Charcoal Pop-Up German Expressionism', promptString: 'Victorian pop-up book aesthetic, stark charcoal illustrations, deep German Expressionist shadows, jagged paper pop-up silhouette of top-hatted clawed figure' },
            { name: 'Depressive Suburban Palette', promptString: 'claustrophobic Australian suburban home, muted slate blue, cold ash grey, dreary overcast window light, psychological grief and sleep deprivation' },
            { name: 'Ceiling Shadow Menace', promptString: 'billowing inky black shadow stretching across high bedroom ceiling like a demonic cloak, glowing white eyes, coat and top hat hovering without form' }
        ],
        posterPrompt: "Official movie poster for The Babadook (2014), terrifying pop-up book open on dark wooden floor with giant silhouette of Mr. Babadook in top hat and trench coat towering over screaming mother and child, indie horror masterpiece --ar 2:3"
    },
    {
        id: 'insidious',
        title: 'Insidious',
        year: '2010',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'James Wan',
        actors: ['Patrick Wilson', 'Rose Byrne', 'Barbara Hershey', 'Lin Shaye'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'The Further Void', promptString: 'surreal astral projection realm, endless rolling black fog, Victorian wooden furniture floating in darkness, single antique red camping lantern beam, eerie limbo' },
            { name: 'Red-Faced Demon Lair', promptString: 'blood-red illuminated attic workshop, grinding wheel throwing fiery sparks, antique phonograph playing, shadowy clawed demon sharpening metallic talons' },
            { name: 'Vintage Seance Gas Mask', promptString: '1970s dark living room seance, medium wearing vintage WWI gas mask with speaking hose, candle flames flickering, poltergeist vibration rattling floor' }
        ],
        posterPrompt: "Official movie poster for Insidious (2010), young boy with hollow eyes standing in front of dark suburban house with glowing red window in attic, 'IT'S NOT THE HOUSE THAT'S HAUNTED' typography, James Wan supernatural horror style --ar 2:3"
    },
    {
        id: 'sinister',
        title: 'Sinister',
        year: '2012',
        genres: ['Horror', 'Mystery', 'Thriller'],
        director: 'Scott Derrickson',
        actors: ['Ethan Hawke', 'Juliet Rylance', 'Fred Dalton Thompson', 'James Ransone'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Super 8 Celluloid Macabre', promptString: 'grainy 1970s Super 8mm celluloid film stock, washed-out faded colors, projector dust and hair artifacts, horrific snuff murder home movie aesthetic' },
            { name: 'Midnight Study Obsession', promptString: 'dark home office illuminated solely by buzzing 8mm film projector beam, true crime author drinking whiskey, stacks of case files, atmospheric claustrophobia' },
            { name: 'Bughuul Pagan Entity', promptString: 'ghastly pale pagan deity face with stitched shut mouth and sunken hollow black eye sockets, dark tailored suit, standing motionless in stormy backyard bushes' }
        ],
        posterPrompt: "Official movie poster for Sinister (2012), little girl in nightgown painting horrifying demonic face of Bughuul on hallway wall using dripping human blood, 'ONCE YOU SEE HIM, NOTHING CAN SAVE YOU' typography --ar 2:3"
    },
    {
        id: 'the-cabin-in-the-woods',
        title: 'The Cabin in the Woods',
        year: '2011',
        genres: ['Comedy', 'Horror'],
        director: 'Drew Goddard',
        actors: ['Kristen Connolly', 'Chris Hemsworth', 'Anna Hutchison', 'Fran Kranz', 'Richard Jenkins'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Deconstructed Slasher Cabin', promptString: 'rustic lakeside wooden cabin, mounted taxidermy animal heads, two-way mirrors, dust motes in tungsten lamp glow, classic 80s horror trope subversion' },
            { name: 'High-Tech Subterranean Laboratory', promptString: 'fluorescent subterranean control room, pristine white consoles, giant digital monster betting board, surveillance monitors, bureaucratic black comedy' },
            { name: 'Glass Cube Menagerie Purge', promptString: 'thousands of glowing transparent glass containment cubes suspended in subterranean void holding every horror monster, red purge strobe lights, glorious chaos' }
        ],
        posterPrompt: "Official movie poster for The Cabin in the Woods (2011), dilapidated wooden cabin suspended and twisting like an intricate geometric Rubik's cube in dark forest, 'YOU THINK YOU KNOW THE STORY' meta-horror typography --ar 2:3"
    },
    {
        id: 'carrie',
        title: 'Carrie',
        year: '1976',
        genres: ['Horror'],
        director: 'Brian De Palma',
        actors: ['Sissy Spacek', 'Piper Laurie', 'Amy Irving', 'William Katt', 'John Travolta'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Prom Night Pig Blood Deluge', promptString: 'high school prom queen in pastel pink dress drenched completely in thick dripping crimson pig blood, wide staring unblinking eyes, terrifying telekinetic fury' },
            { name: 'Split-Screen 70s Grandeur', promptString: 'Brian De Palma split-screen cinematography, dual perspectives of prom stage and electrical wires sparking, soft 1970s incandescent glow, operatic tragedy' },
            { name: 'Gothic Religious Repression', promptString: 'dark prayer closet, flickering red glass votive candles, grotesque bleeding Saint Sebastian statue, crucifixes, suffocating religious trauma' }
        ],
        posterPrompt: "Official movie poster for Carrie (1976), Sissy Spacek standing frozen on prom stage drenched in vivid red blood with prom queen crown slipping off, gymnasium inferno in background, Brian De Palma classic horror style --ar 2:3"
    },
    {
        id: 'the-mist',
        title: 'The Mist',
        year: '2007',
        genres: ['Horror', 'Sci-Fi'],
        director: 'Frank Darabont',
        actors: ['Thomas Jane', 'Marcia Gay Harden', 'Laurie Holden', 'Andre Braugher'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Impenetrable White Fog', promptString: 'dense milky white fog pressing against supermarket plate glass windows, blinding whiteout, shadowy silhouettes of colossal tentacles and winged beasts moving outside' },
            { name: 'Fluorescent Supermarket Siege', promptString: 'crowded grocery store aisles barricaded with dog food bags and fertilizer, flickering industrial fluorescent bulbs, frantic human mob, apocalyptic dread' },
            { name: 'Lovecraftian Cosmic Behemoth', promptString: 'hundred-foot-tall six-legged cosmic behemoth striding slowly through mist above tiny stranded SUV, hanging tentacles, ground-shaking scale, awe-inspiring dread' }
        ],
        posterPrompt: "Official movie poster for The Mist (2007), supermarket glass storefront at night looking out into thick swirling white fog with colossal tentacled shadow looming above cars, Stephen King cosmic horror style --ar 2:3"
    },
    {
        id: 'the-last-house-on-the-left',
        title: 'The Last House on the Left',
        year: '1972',
        genres: ['Crime', 'Horror', 'Thriller'],
        director: 'Wes Craven',
        actors: ['Sandra Peabody', 'Lucy Grantham', 'David Hess', 'Fred J. Lincoln'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: '1970s Raw 16mm Exploitation', promptString: 'raw grainy 16mm film stock, harsh natural daylight, washed-out Connecticut lakeside forest, handheld documentary realism, visceral grindhouse tension' },
            { name: 'Lakeside Pastoral Dread', promptString: 'peaceful sunlit lake surface, autumn foliage, idyllic cottage porch with warm yellow lamp, contrast between serene nature and horrific human cruelty' },
            { name: 'Paternal Retribution', promptString: 'dark wood-paneled suburban living room, roaring gas chainsaw spitting blue exhaust smoke, surgical scalpels on silver tray, cold righteous revenge' }
        ],
        posterPrompt: "Official movie poster for The Last House on the Left (1972), terrified girl's face reflected in sunglasses with tagline 'TO AVOID FAINTING KEEP REPEATING: IT'S ONLY A MOVIE', Wes Craven raw grindhouse horror style --ar 2:3"
    },
    {
        id: 'the-last-house-on-the-left-2009',
        title: 'The Last House on the Left (2009)',
        year: '2009',
        genres: ['Crime', 'Horror', 'Thriller'],
        director: 'Dennis Iliadis',
        actors: ['Garret Dillahunt', 'Sara Paxton', 'Monica Potter', 'Tony Goldwyn', 'Aaron Paul', 'Spencer Treat Clark'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Rain-Drenched Lake Storm', promptString: 'torrential nocturnal downpour, violent lightning flashes illuminating deep dark lake water, rain streaming down modern glass windows, cold desaturated teal and slate palette' },
            { name: 'Surgical Home Defense', promptString: 'warm modern wood-paneled lake house, stainless steel surgical instruments, cast-iron skillet, kitchen disposal trap, cold calculating parental retribution' },
            { name: 'Grim Woodland Desperation', promptString: 'dense muddy Pacific Northwest forest in pouring rain, shaking handheld camera, visceral pursuit, flashlight beams cutting through mist, raw brutal tension' },
            { name: 'Microwave Oven Finality', promptString: 'chilling sterile kitchen counter, paralyzed face trapped inside stainless steel microwave oven, digital timer counting down, humming high voltage, uncompromising horror climax' },
            { name: 'Lakeside Morning Dawn', promptString: 'calm glassy lake surface at sunrise, mist lifting off evergreen trees, tranquil nature contrasted with psychological trauma, sombre resolution' }
        ],
        posterPrompt: "Official movie poster for The Last House on the Left (2009), modern isolated lake house at night in torrential rain with bloodied hand on window glass, 'THE LAST HOUSE ON THE LEFT' title, brutal thriller aesthetic --ar 2:3"
    },
    {
        id: 'house-of-1000-corpses',
        title: 'House of 1000 Corpses',
        year: '2003',
        genres: ['Horror'],
        director: 'Rob Zombie',
        actors: ['Sid Haig', 'Bill Moseley', 'Sheri Moon Zombie', 'Karen Black', 'Rainn Wilson'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Carnival Neon Nightmare', promptString: 'garish carnival aesthetic, neon red and electric green lighting, Captain Spaulding smeared clown makeup, retro roadside spookhouse, 16mm film grain, psychedelic dread' },
            { name: 'Firefly Farmhouse Macabre', promptString: 'dilapidated Victorian farmhouse, taxidermy roadkill, animal bones hanging from ceiling, rotten jack-o\'-lanterns, unhinged southern gothic madness' },
            { name: 'Dr. Satan Cybernetic Catacombs', promptString: 'subterranean industrial dungeon, sickly green fluorescent tubes, rusty surgical instruments, cybernetic undead surgeon with mechanical breathing apparatus' }
        ],
        posterPrompt: "Official movie poster for House of 1000 Corpses (2003), Captain Spaulding in smeared clown makeup and stars-and-stripes top hat grinning menacingly with Firefly family behind him, Rob Zombie neon horror style --ar 2:3"
    },
    {
        id: 'the-devils-rejects',
        title: 'The Devil\'s Rejects',
        year: '2005',
        genres: ['Action', 'Crime', 'Horror'],
        director: 'Rob Zombie',
        actors: ['Sid Haig', 'Bill Moseley', 'Sheri Moon Zombie', 'William Forsythe', 'Ken Foree'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Sun-Bleached Texas Grindhouse', promptString: 'scorching 1970s Texas sun, bleach-bypass 35mm film stock, dusty desert highways, battered vintage convertibles, Peckinpah-style outlaw grit' },
            { name: 'Motel Room Sadism', promptString: 'seedy desert motel, peeling floral wallpaper, slow-moving ceiling fan casting rotating shadows, unsparing visceral tension, sweaty realistic cruelty' },
            { name: 'Free Bird Roadblock Last Stand', promptString: 'epic slow-motion highway shootout, police roadblock cruisers, muzzle flashes in midday glare, bloodied outlaws raising revolvers with defiant smiles' }
        ],
        posterPrompt: "Official movie poster for The Devil's Rejects (2005), Captain Spaulding, Otis Driftwood, and Baby Firefly walking side by side down dusty Texas highway with guns, 'THE DEVIL'S REJECTS' bold metallic typography, 70s outlaw horror style --ar 2:3"
    },
    {
        id: 'halloween-2007',
        title: 'Halloween',
        year: '2007',
        genres: ['Horror'],
        director: 'Rob Zombie',
        actors: ['Malcolm McDowell', 'Tyler Mane', 'Sheri Moon Zombie', 'Scout Taylor-Compton', 'Brad Dourif'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Towering Juggernaut Shape', promptString: 'massive 6\'9" hulking Michael Myers in rotted weathered mask and grease-stained denim coveralls, brute physical force, heavy breathing, visceral modern slasher' },
            { name: 'Haddonfield White Trash Gothic', promptString: 'grimy 1970s Midwestern trailer park, chaotic clutter, autumn leaves blowing across dirt roads, psychological childhood trauma, 35mm gritty film stock' },
            { name: 'Smith\'s Grove Paper-Mache Cell', promptString: 'sterile sanitarium isolation room with every square inch of white walls covered in hundreds of bizarre hand-crafted paper-mache masks, haunting stillness' }
        ],
        posterPrompt: "Official movie poster for Rob Zombie's Halloween (2007), cracked and rotting white Michael Myers mask emerging from total shadow, 'ROB ZOMBIE'S HALLOWEEN' bold blood-red title, brutal modern horror style --ar 2:3"
    },
    {
        id: 'halloween-ii-2009',
        title: 'Halloween II',
        year: '2009',
        genres: ['Horror'],
        director: 'Rob Zombie',
        actors: ['Malcolm McDowell', 'Tyler Mane', 'Sheri Moon Zombie', 'Scout Taylor-Compton', 'Brad Dourif'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Feral Hermit Michael', promptString: 'rough Appalachian wilderness, feral bearded giant Michael Myers with half-exposed face beneath torn rotting mask, misty pine woods, raw survivalist fury' },
            { name: 'White Horse Ethereal Vision', promptString: 'surreal dreamscape, Deborah Myers in flowing white Victorian gown standing beside ethereal white stallion in misty field, haunting psychological psychosis' },
            { name: 'Rain-Flooded Hospital Nightmare', promptString: 'dark abandoned hospital corridors flooded with storm water, emergency red lights flashing, heavy woodcutter axe smashing through glass partitions' }
        ],
        posterPrompt: "Official movie poster for Halloween II (2009), weathered half-rotted Michael Myers mask showing jagged beard beneath, white horse silhouette in fog, 'H2' iconic blood-red title, psychological slasher aesthetic --ar 2:3"
    },
    {
        id: 'the-haunted-world-of-el-superbeasto',
        title: 'The Haunted World of El Superbeasto',
        year: '2009',
        genres: ['Animation', 'Action', 'Comedy', 'Horror'],
        director: 'Rob Zombie',
        actors: ['Tom Papa', 'Sheri Moon Zombie', 'Paul Giamatti', 'Rosario Dawson', 'Brian Posehn'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Psychedelic Cartoon Exploitation', promptString: 'hyper-vibrant 2D hand-drawn animation, saturated neon purple and hot pink palette, exaggerated comic book lines, 1970s adult cartoon style reminiscent of Ralph Bakshi' },
            { name: 'Monsterland Burlesque Castle', promptString: 'campy gothic castle, bubbling test tubes, zombie showgirls, flying rocket hearses, steampunk mad scientist laboratory with neon green lightning' },
            { name: 'Lucha Libre Comic Violence', promptString: 'masked Mexican wrestler El Superbeasto in golden leopard mask and cape performing flying wrestling moves on cartoon devils, comic-book action bursts' }
        ],
        posterPrompt: "Official movie poster for The Haunted World of El Superbeasto (2009), masked luchador El Superbeasto and sexy spy Suzi-X surrounded by cartoon monsters and Dr. Satan, wild psychedelic 70s comic art style --ar 2:3"
    },
    {
        id: 'the-lords-of-salem',
        title: 'The Lords of Salem',
        year: '2012',
        genres: ['Drama', 'Horror', 'Mystery'],
        director: 'Rob Zombie',
        actors: ['Sheri Moon Zombie', 'Bruce Davison', 'Jeff Daniel Phillips', 'Ken Foree', 'Patricia Quinn'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Kubrickian Velvet Surrealism', promptString: 'wide symmetrical apartment hallway, deep crimson red walls, slow hypnotic tracking camera, vintage horror posters, dreamlike avant-garde occult dread' },
            { name: '1692 Folk Witchcraft Ritual', promptString: 'primitive 16mm night footage, nude elderly witches dancing around woodland bonfire in ancient Salem forest, smoke, torchlight, goat skull idols' },
            { name: 'Neon Cross Leviathan Cathedral', promptString: 'hallucinatory gothic theater, neon red inverted crosses, glowing amber spotlights, baroque lace bridal gown with corpse paint, psychedelic Kenneth Anger aesthetic' }
        ],
        posterPrompt: "Official movie poster for The Lords of Salem (2012), Sheri Moon Zombie in gothic white face paint and dreadlocks with ancient witches dancing around bonfire in fog, Rob Zombie psychedelic occult horror style --ar 2:3"
    },
    {
        id: 'thirty-one',
        title: '31',
        year: '2016',
        genres: ['Horror', 'Thriller'],
        director: 'Rob Zombie',
        actors: ['Sheri Moon Zombie', 'Jeff Daniel Phillips', 'Lawrence Hilton-Jacobs', 'Richard Brake', 'Malcolm McDowell'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: '1976 Carnie Halloween Grime', promptString: 'Halloween 1976 aesthetic, vintage hippie van, autumn leaves on desolate Texas crossroads, gritty 16mm exploitation film stock, warm vintage grain' },
            { name: 'Murder World Industrial Labyrinth', promptString: 'sprawling abandoned industrial warehouse, flickering fluorescent cages, steel shipping containers, chains and meat hooks, claustrophobic death arena' },
            { name: 'Doom-Head Psychotic Menace', promptString: 'Richard Brake as Doom-Head, stark white greasepaint with black clown markings, wielding rusted machete, cold unhinged monologues, blood-spattered walls' }
        ],
        posterPrompt: "Official movie poster for 31 (2016), Richard Brake as psychotic clown Doom-Head with bloodied machete grinning in shadows, 'A ROB ZOMBIE FILM: 31' bold yellow typography, brutal survival horror style --ar 2:3"
    },
    {
        id: 'three-from-hell',
        title: '3 from Hell',
        year: '2019',
        genres: ['Action', 'Crime', 'Horror'],
        director: 'Rob Zombie',
        actors: ['Sheri Moon Zombie', 'Bill Moseley', 'Richard Brake', 'Sid Haig', 'Danny Trejo'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Day of the Dead Mexican Sun', promptString: 'sun-baked Mexican border town, colorful marigold flowers, Calavera skull face paint, vibrant Day of the Dead banners, dusty adobe courtyards' },
            { name: 'Outlaw Prison Break Violence', promptString: 'maximum security prison work gang, desert highway shootout, high-caliber assault rifles, heavy bullet hits, gritty modern exploitation cinema' },
            { name: 'Midnight Motel Courtyard Siege', promptString: 'bullet-riddled desert motel courtyard at midnight, muzzle flashes lighting adobe walls, Baby firing recurve bow from roof, burning cars in firelight' }
        ],
        posterPrompt: "Official movie poster for 3 from Hell (2019), Baby Firefly, Otis Driftwood, and Foxy Coltrane in Day of the Dead skull face paint holding guns with flames behind them, Rob Zombie outlaw horror style --ar 2:3"
    },
    {
        id: 'the-munsters-2022',
        title: 'The Munsters',
        year: '2022',
        genres: ['Comedy', 'Family', 'Fantasy', 'Horror'],
        director: 'Rob Zombie',
        actors: ['Sheri Moon Zombie', 'Jeff Daniel Phillips', 'Daniel Roebuck', 'Richard Brake', 'Jorge Garcia'],
        type: 'movie',
        holiday: 'horror',
        styles: [
            { name: 'Campy Gothic Technicolor', promptString: 'ultra-saturated neon green, electric purple, and vibrant magenta color palette, campy Transylvanian castle laboratory, bubbling colorful alchemy cauldrons' },
            { name: 'Classic 1960s Spooky Sitcom', promptString: 'suburban Mockingbird Lane Victorian haunted mansion, spiderweb drapes, coffin-shaped furniture, platform boots, neck bolts, retro comedy warmth' },
            { name: 'Transylvanian Punk Romance', promptString: 'romantic foggy midnight cemetery date, Herman and Lily holding hands between headstones, neon fog, bats fluttering, whimsical gothic fairy tale' }
        ],
        posterPrompt: "Official movie poster for The Munsters (2022), Herman Munster, Lily Munster, and The Count Grandpa standing on porch of 1313 Mockingbird Lane in eye-popping neon green and purple Technicolor, Rob Zombie camp classic --ar 2:3"
    },

    // ==========================================
    // 🦃 THANKSGIVING
    // ==========================================
    {
        id: 'charlie-brown-thanksgiving',
        title: 'A Charlie Brown Thanksgiving',
        year: '1973',
        genres: ['Animation', 'Comedy', 'Family', 'Thanksgiving'],
        director: 'Bill Melendez',
        actors: ['Todd Barbee', 'Robin Kohn', 'Stephen Shea'],
        type: 'movie',
        holiday: 'thanksgiving',
        styles: [
            { name: 'Peanuts Autumn Watercolor', promptString: '1970s hand-drawn animation, vibrant orange and gold fallen leaves, simple expressive linework, warm holiday nostalgia' },
            { name: 'Toast & Popcorn Banquet', promptString: 'ping pong table covered in white paper cloth, plates piled with buttered toast, mountains of popcorn, pretzel sticks, jellybeans, joyful cartoon feast' },
            { name: 'Snoopy Lawn Chair Battle', promptString: 'Snoopy wrestling striped folding lawn chair, slapstick cartoon timing, green grass and colorful foliage background' }
        ],
        posterPrompt: "Official movie poster for A Charlie Brown Thanksgiving (1973), Snoopy in chef hat serving buttered toast and popcorn to Peanuts gang around ping pong table in backyard, vintage cartoon holiday style --ar 2:3"
    },
    {
        id: 'planes-trains-and-automobiles',
        title: 'Planes, Trains and Automobiles',
        year: '1987',
        genres: ['Comedy', 'Drama', 'Thanksgiving'],
        director: 'John Hughes',
        actors: ['Steve Martin', 'John Candy', 'Laila Robins'],
        type: 'movie',
        holiday: 'thanksgiving',
        styles: [
            { name: '80s Holiday Travel Grit', promptString: '1980s holiday travel chaos, crowded airport terminals, snowbound Midwestern highway, warm neon motel signs in blizzard' },
            { name: 'Charred Rental Car', promptString: 'melted burnt-out convertible driving in freezing snow, Steve Martin frozen and exasperated, John Candy smiling in parka, comedic misery' },
            { name: 'Thanksgiving Arrival', promptString: 'warm golden light spilling from suburban family home, Thanksgiving dinner table seen through window, carrying heavy travel trunk' }
        ],
        posterPrompt: "Official movie poster for Planes Trains and Automobiles (1987), Steve Martin with briefcase and John Candy with giant trunk stranded on snowy highway, 'PLANES, TRAINS AND AUTOMOBILES' title, John Hughes comedy style --ar 2:3"
    },
    {
        id: 'friends-thanksgiving',
        title: 'Friends: The Thanksgiving Specials',
        year: '1998',
        genres: ['Comedy', 'Romance', 'Thanksgiving'],
        director: 'Kevin S. Bright',
        actors: ['Jennifer Aniston', 'Courteney Cox', 'Matthew Perry', 'Matt LeBlanc', 'Lisa Kudrow', 'David Schwimmer'],
        type: 'series',
        holiday: 'thanksgiving',
        styles: [
            { name: 'Purple Apartment Feast', promptString: 'cozy Manhattan apartment, purple walls, large roast turkey on dinner table, warm candle glow, 90s sitcom warmth' },
            { name: 'Turkey Head Dance', promptString: 'Monica dancing in doorway with giant raw turkey on head wearing giant sunglasses and red fez, hilarious iconic comedy' },
            { name: 'Central Park Football', promptString: 'autumn leaves on Central Park grass, friends in bulky oversized sweaters playing rough football, festive Thanksgiving afternoon' }
        ],
        posterPrompt: "Official series poster for Friends Thanksgiving, Monica dancing with raw turkey on head wearing sunglasses and fez in purple apartment surrounded by the gang, iconic 90s sitcom holiday aesthetic --ar 2:3"
    },
    {
        id: 'addams-family-values',
        title: 'Addams Family Values',
        year: '1993',
        genres: ['Comedy', 'Fantasy', 'Thanksgiving'],
        director: 'Barry Sonnenfeld',
        actors: ['Anjelica Huston', 'Raul Julia', 'Christopher Lloyd', 'Christina Ricci'],
        type: 'movie',
        holiday: 'thanksgiving',
        styles: [
            { name: 'Camp Chippewa Pageant', promptString: 'rustic wooden summer camp stage, Wednesday Addams as Pocahontas with straight braided hair and deadpan glare, cardboard pilgrim ship' },
            { name: 'Burning Pilgrim Village', promptString: 'outcast camp children setting fire to pilgrim village, roast turkey spinning on spit, joyful black comedy chaos, billowing smoke' },
            { name: 'Gothic Holiday Feast', promptString: 'Morticia and Gomez carving turkey with ancestral rapier, tall silver candelabras, black velvet dinner clothes, macabre family warmth' }
        ],
        posterPrompt: "Official movie poster for Addams Family Values (1993), Wednesday Addams as Pocahontas holding burning match at Camp Chippewa Thanksgiving play with Addams family behind her, dark comedy style --ar 2:3"
    },
    {
        id: 'pieces-of-april',
        title: 'Pieces of April',
        year: '2003',
        genres: ['Comedy', 'Drama', 'Thanksgiving'],
        director: 'Peter Hedges',
        actors: ['Katie Holmes', 'Patricia Clarkson', 'Derek Luke', 'Oliver Platt'],
        type: 'movie',
        holiday: 'thanksgiving',
        styles: [
            { name: 'Lower East Side Tenement', promptString: 'gritty NYC tenement apartment, broken oven, peeling wallpaper, warm handheld indie cinematography, bustling holiday urgency' },
            { name: 'Hallway Thanksgiving Banquet', promptString: 'long makeshift dining table in narrow tenement apartment corridor, mismatched chairs, diverse neighbors sharing roast turkey and sides' },
            { name: 'Suburban Highway Journey', promptString: 'family station wagon driving along bleak autumn highway to New York City, tense emotional silence, bittersweet family drama' }
        ],
        posterPrompt: "Official movie poster for Pieces of April (2003), Katie Holmes in punk sweater carrying roasting pan through Lower East Side apartment hallway, indie Thanksgiving drama style --ar 2:3"
    },

    // ==========================================
    // ❄️ WINTER
    // ==========================================
    {
        id: 'groundhog-day',
        title: 'Groundhog Day',
        year: '1993',
        genres: ['Comedy', 'Fantasy', 'Romance', 'Winter'],
        director: 'Harold Ramis',
        actors: ['Bill Murray', 'Andie MacDowell', 'Chris Elliott'],
        type: 'movie',
        holiday: 'winter',
        styles: [
            { name: 'Punxsutawney Winter Morning', promptString: 'small-town Pennsylvania square covered in snow, crowd in heavy wool parkas, frosted Victorian storefronts, crisp freezing February air' },
            { name: '6:00 AM Radio Glow', promptString: 'bedside table, glowing red flip-clock turning 6:00 AM, snowy windowpane, warm amber bedside lamp, cozy existential time loop' },
            { name: 'Ice Sculpture Mastery', promptString: 'downtown winter festival at night, chainsaw carving crystalline ice sculpture of Rita, sparkling ice dust, colorful holiday festival bulbs' }
        ],
        posterPrompt: "Official movie poster for Groundhog Day (1993), Bill Murray with giant groundhog against snowy Punxsutawney town square and giant 6:00 AM flip clock, classic 90s comedy aesthetic --ar 2:3"
    },
    {
        id: 'fargo',
        title: 'Fargo',
        year: '1996',
        genres: ['Crime', 'Drama', 'Thriller', 'Winter'],
        director: 'Joel Coen',
        actors: ['Frances McDormand', 'William H. Macy', 'Steve Buscemi', 'Peter Stormare'],
        type: 'movie',
        holiday: 'winter',
        styles: [
            { name: 'Endless White Horizon', promptString: 'stark white snow-covered highway in Minnesota, blinding overcast whiteout sky, single brown car driving in vast empty landscape, minimalist beauty' },
            { name: 'Parka & Earflaps', promptString: 'Marge Gunderson in heavy brown police winter parka and furry earflap hat, breath fogging in freezing air, roadside snowbank investigation' },
            { name: 'Red Wood Chipper in Snow', promptString: 'remote wooden lake cabin surrounded by snowdrifts, bright red wood chipper running against pure white snow, grim winter crime scene' }
        ],
        posterPrompt: "Official movie poster for Fargo (1996), Frances McDormand in winter police parka against desolate snowy Minnesota plains with needlepoint border, Coen brothers crime classic --ar 2:3"
    },
    {
        id: 'snowpiercer',
        title: 'Snowpiercer',
        year: '2013',
        genres: ['Action', 'Sci-Fi', 'Thriller', 'Winter'],
        director: 'Bong Joon Ho',
        actors: ['Chris Evans', 'Song Kang-ho', 'Tilda Swinton', 'Jamie Bell'],
        type: 'movie',
        holiday: 'winter',
        styles: [
            { name: 'Glacier Smashing Locomotive', promptString: 'massive futuristic 1,001-car armored train plowing through frozen mountain glaciers, ice chunks flying, post-apocalyptic ice age wasteland' },
            { name: 'Tail Section Grit', promptString: 'crowded industrial train car, steam pipes, grimy rags, torch flames casting orange highlights on determined faces, brutal revolution' },
            { name: 'The Seven-Minute Freeze', promptString: 'arm shoved out through train port into minus 100 degree frozen atmosphere, flesh freezing into solid marble, brutal cold aesthetic' }
        ],
        posterPrompt: "Official movie poster for Snowpiercer (2013), massive perpetual train carving through snowbound frozen Earth with Chris Evans and tail section rebels, Bong Joon Ho sci-fi style --ar 2:3"
    },
    {
        id: 'south-park-asspen',
        title: 'South Park: Asspen',
        year: '2002',
        genres: ['Animation', 'Comedy', 'Winter'],
        director: 'Trey Parker',
        actors: ['Trey Parker', 'Matt Stone'],
        type: 'series',
        holiday: 'winter',
        styles: [
            { name: 'Cutout Snow Slopes', promptString: 'construction paper cutout animation style, snowy Colorado ski slopes, colorful parkas and snow goggles, retro cartoon humor' },
            { name: '80s Ski Montage', promptString: 'hilarious 80s ski montage, neon ski gear, snowboards and ski poles, chalet hot tub, cheesy sports movie parody' },
            { name: 'The K-12 Abyss', promptString: 'sheer vertical snowy cliff of deadly K-12 ski run, icy rocks, cartoon daredevil skiing, bright blue alpine sky' }
        ],
        posterPrompt: "Official series poster for South Park Asspen (2002), Stan Marsh skiing downhill in colorful 80s ski gear being chased by ski instructor, snowy Aspen mountains, animated cutout comedy style --ar 2:3"
    },
    {
        id: 'balto',
        title: 'Balto',
        year: '1995',
        genres: ['Animation', 'Adventure', 'Drama', 'Winter'],
        director: 'Simon Wells',
        actors: ['Kevin Bacon', 'Bob Hoskins', 'Bridget Fonda'],
        type: 'movie',
        holiday: 'winter',
        styles: [
            { name: 'Arctic Whiteout Blizzard', promptString: 'blinding Alaskan snowstorm, sled dog team fighting 60-below-zero wind, ice crusting on fur, heroic canine determination' },
            { name: 'Glacier Cave Aurora', promptString: 'crystal blue ice cave, glowing northern lights reflecting through ice walls, white spirit wolf apparition, magical winter majesty' },
            { name: 'Nome Dawn Arrival', promptString: 'golden winter sunrise over snow-covered wooden town of Nome, sled dogs arriving with medicine box, triumph against elements' }
        ],
        posterPrompt: "Official movie poster for Balto (1995), wolf-dog Balto leading sled dog team through blinding Alaskan blizzard with northern lights glowing across Arctic sky, 90s animated adventure style --ar 2:3"
    },

    // ==========================================
    // 🎄 CHRISTMAS
    // ==========================================
    {
        id: 'charlie-brown-christmas',
        title: 'A Charlie Brown Christmas',
        year: '1965',
        genres: ['Animation', 'Comedy', 'Family', 'Christmas'],
        director: 'Bill Melendez',
        actors: ['Peter Robbins', 'Christopher Shea', 'Tracy Stratford'],
        type: 'movie',
        holiday: 'christmas',
        styles: [
            { name: 'Vince Guaraldi Jazz Winter', promptString: '1960s hand-drawn cel animation, Charles Schulz comic lines, frozen ice pond with skaters, peaceful falling snowflakes, timeless holiday innocence' },
            { name: 'The Scraggly Pine Tree', promptString: 'tiny drooping real pine tree with three needles and single heavy red glass ornament bending to the wooden floor, poignant holiday minimalism' },
            { name: 'Linus Gospel Spotlight', promptString: 'Linus on empty auditorium stage under single cool blue spotlight, dropping blue blanket, reciting the story of Christmas, theatrical simplicity' }
        ],
        posterPrompt: "Official movie poster for A Charlie Brown Christmas (1965), Charlie Brown holding tiny drooping pine tree with single red ornament surrounded by Peanuts gang singing in falling snow, iconic cartoon holiday style --ar 2:3"
    },
    {
        id: 'rudolph-red-nosed-reindeer',
        title: 'Rudolph the Red-Nosed Reindeer',
        year: '1964',
        genres: ['Animation', 'Adventure', 'Family', 'Christmas'],
        director: 'Larry Roemer',
        actors: ['Billie Mae Richards', 'Burl Ives', 'Paul Soles'],
        type: 'movie',
        holiday: 'christmas',
        styles: [
            { name: 'Rankin/Bass Stop-Motion', promptString: 'classic Rankin/Bass Animagic stop-motion puppet animation, tactile felt and wooden miniature textures, glowing cherry-red nose illuminating dark snow cave' },
            { name: 'Island of Misfit Toys', promptString: 'snowy island under starry arctic sky, polka dot elephant, Charlie-in-the-Box, quirky handmade toy puppets, endearing holiday charm' },
            { name: 'Santa\'s Sleigh Fog Flight', promptString: 'flying reindeer team led by blazing red nose cutting through pea-soup white fog, Santa in sleigh waving, snow-capped mountains below' }
        ],
        posterPrompt: "Official movie poster for Rudolph the Red-Nosed Reindeer (1964), Rudolph with glowing red nose, Hermey the elf, and Yukon Cornelius in snowy North Pole landscape, Rankin/Bass stop-motion style --ar 2:3"
    },
    {
        id: 'frosty-the-snowman',
        title: 'Frosty the Snowman',
        year: '1969',
        genres: ['Animation', 'Comedy', 'Family', 'Christmas'],
        director: 'Arthur Rankin Jr., Jules Bass',
        actors: ['Jackie Vernon', 'Jimmy Durante', 'Billy De Wolfe'],
        type: 'movie',
        holiday: 'christmas',
        styles: [
            { name: 'Golden Age TV Animation', promptString: 'warm 1960s hand-drawn cartoon style, jolly white snowman with black silk top hat and corncob pipe, bright snowy town square, vibrant primary colors' },
            { name: 'Greenhouse Melt Tragedy', promptString: 'warm flower greenhouse, Frosty melting into puddle of water with top hat resting on top, weeping Karen, touching emotional vulnerability' },
            { name: 'North Pole Whirlwind', promptString: 'Santa Claus in sleigh opening door, summoning cold north wind swirling Frosty back into life, joyful magical restoration' }
        ],
        posterPrompt: "Official movie poster for Frosty the Snowman (1969), jolly snowman Frosty with magic silk hat and corncob pipe dancing down snowy main street with cheering children, retro animated holiday style --ar 2:3"
    },
    {
        id: 'how-the-grinch-stole-christmas-1966',
        title: 'How the Grinch Stole Christmas!',
        year: '1966',
        genres: ['Animation', 'Comedy', 'Family', 'Christmas'],
        director: 'Chuck Jones',
        actors: ['Boris Karloff', 'June Foray', 'Thurl Ravenscroft'],
        type: 'movie',
        holiday: 'christmas',
        styles: [
            { name: 'Chuck Jones Dr. Seuss', promptString: 'Chuck Jones expressive animation, Dr. Seuss curved architecture and pastel colors, evil green grin with yellow eyes, masterclass cartoon physics' },
            { name: 'Chimney Slither', promptString: 'Grinch in homemade Santa suit slithering down chimney like a green snake, stuffing stockings and candy canes into giant sack' },
            { name: 'Heart Growing Three Sizes', promptString: 'cliff of Mt. Crumpit at sunrise, Grinch hearing singing without presents, chest glowing, tiny heart bursting through gauges and expanding three sizes' }
        ],
        posterPrompt: "Official movie poster for How the Grinch Stole Christmas (1966), Chuck Jones animated green Grinch with sinister curling smile looking down from Mt. Crumpit at snowy Whoville, classic Dr. Seuss cartoon style --ar 2:3"
    },
    {
        id: 'a-christmas-carol-1984',
        title: 'A Christmas Carol',
        year: '1984',
        genres: ['Drama', 'Family', 'Fantasy', 'Christmas'],
        director: 'Clive Donner',
        actors: ['George C. Scott', 'Frank Finlay', 'Angela Pleasence', 'Edward Woodward'],
        type: 'movie',
        holiday: 'christmas',
        styles: [
            { name: 'Victorian London Snow', promptString: 'cobblestone London streets blanketed in heavy snow, flickering gas lamps, horse-drawn carriages, dark wool cloaks, authentic Dickensian period atmosphere' },
            { name: 'Marley\'s Phantom Chains', promptString: 'transparent ghost of Jacob Marley bound in heavy iron ledgers, padlocks, and cashboxes, ethereal green supernatural luminescence' },
            { name: 'Ghost of Christmas Present Feast', promptString: 'towering jolly bearded spirit in green fur robe seated atop a mountain of roasted geese, plum puddings, and glowing torch of plenty' }
        ],
        posterPrompt: "Official movie poster for A Christmas Carol (1984), George C. Scott as Ebenezer Scrooge walking through snowy Victorian London street haunted by ghostly spirits, classic holiday drama aesthetic --ar 2:3"
    },
    {
        id: 'home-alone-2',
        title: 'Home Alone 2: Lost in New York',
        year: '1992',
        genres: ['Comedy', 'Family', 'Christmas'],
        director: 'Chris Columbus',
        actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Catherine O\'Hara'],
        type: 'movie',
        holiday: 'christmas',
        styles: [
            { name: 'Rockefeller Christmas Tree', promptString: 'giant illuminated Rockefeller Center Christmas tree at night, falling snow, Kevin in winter coat staring up in awe, turtle dove ornaments' },
            { name: 'Duncan\'s Toy Chest Wonderland', promptString: 'grand multi-story Manhattan toy store, mechanical toy trains circling overhead, carousel horses, glittering holiday lights, childhood wonder' },
            { name: 'Central Park Pigeon Lady', promptString: 'snowy Central Park gazebo at twilight, Pigeon Lady surrounded by gray pigeons, soft gentle bond, New York holiday warmth' }
        ],
        posterPrompt: "Official movie poster for Home Alone 2 Lost in New York (1992), Macaulay Culkin looking through Statue of Liberty binoculars with snowy NYC skyline and Rockefeller tree, holiday comedy style --ar 2:3"
    },

    // ==========================================
    // 🥂 NEW YEAR'S EVE
    // ==========================================
    {
        id: 'when-harry-met-sally-nye',
        title: 'When Harry Met Sally...',
        year: '1989',
        genres: ['Comedy', 'Drama', 'Romance', 'New Years'],
        director: 'Rob Reiner',
        actors: ['Billy Crystal', 'Meg Ryan', 'Carrie Fisher', 'Bruno Kirby'],
        type: 'movie',
        holiday: 'new-years',
        styles: [
            { name: 'NYE Ballroom Romance', promptString: 'grand ballroom New Year\'s Eve party, falling silver balloons and confetti, tuxedoes and cocktail dresses, warm champagne glow, romantic 80s film stock' },
            { name: 'Midnight Manhattan Sprint', promptString: 'Billy Crystal sprinting down snowy Broadway avenue at 11:50 PM, beige trench coat flying, breath steaming in night air, urgent romantic quest' },
            { name: 'Auld Lang Syne Midnight Kiss', promptString: 'crowded party singing Auld Lang Syne, couple embracing for passionate midnight kiss as confetti rains down around them, iconic rom-com perfection' }
        ],
        posterPrompt: "Official movie poster for When Harry Met Sally (1989) New Year's Eve, Billy Crystal and Meg Ryan embracing under falling confetti at midnight ballroom party, New York romantic comedy classic --ar 2:3"
    },
    {
        id: 'new-years-eve-movie',
        title: 'New Year\'s Eve',
        year: '2011',
        genres: ['Comedy', 'Romance', 'New Years'],
        director: 'Garry Marshall',
        actors: ['Halle Berry', 'Jessica Biel', 'Jon Bon Jovi', 'Robert De Niro', 'Zac Efron'],
        type: 'movie',
        holiday: 'new-years',
        styles: [
            { name: 'Times Square Ball Drop', promptString: 'massive glowing crystal New Year\'s ball dropping from roof of One Times Square, giant digital countdown clock, millions of cheering revelers' },
            { name: 'Confetti Blizzard', promptString: 'tons of colorful paper confetti swirling through neon-lit Times Square canyon, fireworks illuminating skyscrapers, electric midnight energy' },
            { name: 'Manhattan Midnight Rooftop', promptString: 'luxury Manhattan rooftop party overlooking city skyline, champagne flutes, sparklers burning, elegant black-tie celebration' }
        ],
        posterPrompt: "Official movie poster for New Year's Eve (2011), Times Square crystal ball drop glowing with raining confetti and ensemble cast across Manhattan skyline, holiday celebration romance style --ar 2:3"
    },
    {
        id: 'the-poseidon-adventure',
        title: 'The Poseidon Adventure',
        year: '1972',
        genres: ['Action', 'Adventure', 'Drama', 'New Years'],
        director: 'Ronald Neame',
        actors: ['Gene Hackman', 'Ernest Borgnine', 'Shelley Winters', 'Red Buttons'],
        type: 'movie',
        holiday: 'new-years',
        styles: [
            { name: 'New Year\'s Gala at Sea', promptString: '1970s luxury ocean liner grand ballroom, champagne toasts, paper hats and streamers, orchestra playing, glamorous retro celebration' },
            { name: 'Rogue Wave Nightmare', promptString: 'giant 90-foot rogue tidal wave towering out of black night sea, smashing into ocean liner, shattering glass, catastrophic 70s disaster cinema' },
            { name: 'Upside-Down Christmas Tree', promptString: 'inverted ballroom upside down, survivors climbing giant holiday tree like a ladder toward the ship\'s hull, rising ocean water below' }
        ],
        posterPrompt: "Official movie poster for The Poseidon Adventure (1972), massive luxury ocean liner capsized upside down in black stormy sea on New Year's Eve, 70s disaster epic poster style --ar 2:3"
    },
    {
        id: 'futurama-space-pilot-3000',
        title: 'Futurama: Space Pilot 3000',
        year: '1999',
        genres: ['Animation', 'Comedy', 'Sci-Fi', 'New Years'],
        director: 'Rich Moore',
        actors: ['Billy West', 'Katey Sagal', 'John DiMaggio'],
        type: 'series',
        holiday: 'new-years',
        styles: [
            { name: 'Y2K to 3000 Time Lapse', promptString: 'groening animation style, viewing New York through cryo tube glass as 1,000 years pass, alien invasions, castles rising, futuristic skyscrapers blooming' },
            { name: 'New New York Hover Skies', promptString: 'flying hover-cars in transparent traffic lanes, pneumatic transport tubes crossing between towering retro-futuristic skyscrapers, New Year\'s Eve 2999' },
            { name: 'Millennium Cryo Chamber', promptString: 'applied cryogenics lab on Dec 31 1999, red digital countdown clock hitting 00:00:00, falling backward into frosty freeze tube' }
        ],
        posterPrompt: "Official poster for Futurama Space Pilot 3000 (1999), Fry stepping out of cryo chamber into futuristic flying-car skyline of New New York on New Year's Eve 2999, Matt Groening sci-fi animation style --ar 2:3"
    },
    {
        id: 'trading-places-nye',
        title: 'Trading Places',
        year: '1983',
        genres: ['Comedy', 'New Years'],
        director: 'John Landis',
        actors: ['Dan Aykroyd', 'Eddie Murphy', 'Jamie Lee Curtis'],
        type: 'movie',
        holiday: 'new-years',
        styles: [
            { name: '80s Party Train Car', promptString: 'New Year\'s Eve costume party aboard passenger train to Philadelphia, party streamers, drunken revelers in 1980s party outfits, energetic screwball comedy' },
            { name: 'Disheveled Santa Aykroyd', promptString: 'Dan Aykroyd as dirty Santa Claus with blackened beard, stuffing whole smoked salmon into overcoat, desperate frantic comedic portrait' },
            { name: 'Wall Street Trading Floor', promptString: 'chaotic New York commodities trading floor, shouting traders in colored jackets, paper slips flying like confetti, 80s financial triumph' }
        ],
        posterPrompt: "Official movie poster for Trading Places (1983), Eddie Murphy and Dan Aykroyd in tuxedos surrounded by champagne and dollar bills on New Year's Eve train, 80s comedy classic style --ar 2:3"
    },

    // ==========================================
    // 💖 VALENTINE'S DAY
    // ==========================================
    {
        id: 'be-my-valentine-charlie-brown',
        title: 'Be My Valentine, Charlie Brown',
        year: '1975',
        genres: ['Animation', 'Comedy', 'Family', 'Valentines'],
        director: 'Phil Roman',
        actors: ['Duncan Watson', 'Stephen Shea', 'Melanie Marks'],
        type: 'movie',
        holiday: 'valentines',
        styles: [
            { name: 'Peanuts Valentine Watercolor', promptString: '1970s hand-drawn animation, red heart cutouts, pink and purple watercolor sky, charming Charles Schulz comic linework' },
            { name: 'Giant Satin Heart Box', promptString: 'Linus carrying enormous red satin heart-shaped candy box decorated with lace and ribbons, sweet grade-school romantic dedication' },
            { name: 'Empty Mailbox Melancholy', promptString: 'Charlie Brown standing by snow-dusted roadside mailbox with door open, empty inside, poignant childhood longing' }
        ],
        posterPrompt: "Official movie poster for Be My Valentine Charlie Brown (1975), Linus holding giant red satin heart candy box and Charlie Brown checking empty mailbox, vintage animated Valentine's Day style --ar 2:3"
    },
    {
        id: 'simpsons-i-love-lisa',
        title: 'The Simpsons: I Love Lisa',
        year: '1993',
        genres: ['Animation', 'Comedy', 'Valentines'],
        director: 'Wes Archer',
        actors: ['Dan Castellaneta', 'Julie Kavner', 'Nancy Cartwright', 'Yeardley Smith'],
        type: 'series',
        holiday: 'valentines',
        styles: [
            { name: 'I Choo-Choo-Choose You', promptString: 'vintage hand-drawn 90s animation, handmade Valentine card with smiling locomotive engine, classroom desks, sweet childhood innocence' },
            { name: 'President Washington Pageant', promptString: 'school stage, Ralph Wiggum in powdered wig and colonial general uniform delivering dramatic impassioned George Washington speech' },
            { name: 'Tire Swing Sunset', promptString: 'two children sitting on tire swing beneath golden sunset, sharing box of pastel conversation candy hearts, tender friendship' }
        ],
        posterPrompt: "Official series poster for The Simpsons I Love Lisa (1993), Ralph Wiggum holding handmade 'I Choo-Choo-Choose You' Valentine card with Lisa Simpson in Springfield classroom, 90s cartoon style --ar 2:3"
    },
    {
        id: 'my-bloody-valentine',
        title: 'My Bloody Valentine',
        year: '1981',
        genres: ['Horror', 'Mystery', 'Valentines'],
        director: 'George Mihalka',
        actors: ['Paul Kelman', 'Lori Hallier', 'Neil Affleck'],
        type: 'movie',
        holiday: 'valentines',
        styles: [
            { name: 'Hanniger Mine Slasher', promptString: 'narrow subterranean coal mine tunnel, red miner helmet lamp beam slicing through black dust, heavy gas mask breathing, 80s Canadian slasher grit' },
            { name: 'Heart Box of Horrors', promptString: 'vintage red lace heart chocolate box opened to reveal gruesome bloody human heart with rhyming Valentine note, classic practical gore' },
            { name: 'Sweethearts Dance Terror', promptString: 'union hall decorated in pink and red paper hearts, flickering lights, miner in gas mask holding gleaming pickaxe in doorway' }
        ],
        posterPrompt: "Official movie poster for My Bloody Valentine (1981), terrifying miner in black gas mask and helmet lamp holding bloody pickaxe and red lace heart candy box, 80s cult slasher style --ar 2:3"
    },
    {
        id: 'before-sunrise',
        title: 'Before Sunrise',
        year: '1995',
        genres: ['Drama', 'Romance', 'Valentines'],
        director: 'Richard Linklater',
        actors: ['Ethan Hawke', 'Julie Delpy'],
        type: 'movie',
        holiday: 'valentines',
        styles: [
            { name: 'Vienna Twilight Stroll', promptString: 'cobblestone streets of Vienna at dusk, amber streetlamps, quiet European bridges over the Danube canal, intimate 35mm naturalistic cinema' },
            { name: 'Record Store Listening Booth', promptString: 'cramped wooden vinyl listening booth, two young lovers making shy eye contact while listening to folk record, intense unspoken chemistry' },
            { name: 'Prater Ferris Wheel Kiss', promptString: 'vintage red wooden cabin of Riesenrad Ferris wheel rising over Vienna, golden hour sunset flooding interior, tender romantic embrace' }
        ],
        posterPrompt: "Official movie poster for Before Sunrise (1995), Ethan Hawke and Julie Delpy walking together along cobblestone Vienna canal bridge at twilight, Linklater romantic indie cinema style --ar 2:3"
    },
    {
        id: 'ten-things-i-hate-about-you',
        title: '10 Things I Hate About You',
        year: '1999',
        genres: ['Comedy', 'Drama', 'Romance', 'Valentines'],
        director: 'Gil Junger',
        actors: ['Heath Ledger', 'Julia Stiles', 'Joseph Gordon-Levitt', 'Larisa Oleynik'],
        type: 'movie',
        holiday: 'valentines',
        styles: [
            { name: '90s Bleachers Serenade', promptString: 'Heath Ledger singing into megaphone on high school stadium bleachers with marching band, dancing down steps, sun-drenched Seattle afternoon' },
            { name: 'Paintball Splash Kiss', promptString: 'splatters of neon pink and green paint on faces and clothes, laughing couple tumbling into hay bales, vibrant 90s teen romance' },
            { name: 'Classroom Poetry Reading', promptString: 'high school classroom, Julia Stiles reading tearfully from notebook, emotional vulnerability, soft natural window light' }
        ],
        posterPrompt: "Official movie poster for 10 Things I Hate About You (1999), Julia Stiles and Heath Ledger smiling on Seattle stadium bleachers, 90s romantic comedy teen classic style --ar 2:3"
    },
    {
        id: 'valentines-day-movie',
        title: 'Valentine\'s Day',
        year: '2010',
        genres: ['Comedy', 'Romance', 'Valentines'],
        director: 'Garry Marshall',
        actors: ['Jessica Alba', 'Kathy Bates', 'Jessica Biel', 'Bradley Cooper', 'Anne Hathaway', 'Ashton Kutcher'],
        type: 'movie',
        holiday: 'valentines',
        styles: [
            { name: 'LA Flower Shop Rush', promptString: 'bustling Los Angeles flower shop packed with thousands of long-stem red roses, heart-shaped boxes, golden California morning sunlight, romantic frenzy' },
            { name: 'Sunset Boulevard Romance', promptString: 'convertible driving beneath towering palm trees under vibrant pink and lavender twilight sky, red heart balloons waving' },
            { name: 'Candlelight Bistro Dinner', promptString: 'intimate candlelit Italian bistro, red tablecloths, crystal wine glasses, couples sharing spaghetti, warm golden hour ambience' }
        ],
        posterPrompt: "Official movie poster for Valentine's Day (2010), giant red heart collage of Los Angeles skyline and ensemble romance cast surrounded by red roses, Garry Marshall romantic comedy style --ar 2:3"
    }
];
