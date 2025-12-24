import type { MediaItem } from './types';

export const games: MediaItem[] = [
    {
        id: 'tetris',
        title: 'Tetris',
        year: '1985',
        genres: ['Puzzle'],
        director: 'Alexey Pajitnov',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Classic Tetris', promptString: 'falling blocks, grid playfield, russian aesthetic, simple clean design' }
        ],
        gameAssets: {
            items: [
                { name: 'Tetrominos', promptString: 'pixel art sprite sheet, I J L O S T Z blocks, different colors, clean geometric shapes, 16x16' }
            ],
            maps: [
                { name: 'Playfield', promptString: 'tetris game board, 10x20 grid, dark background, score display, next piece preview' }
            ]
        }
    },
    {
        id: 'zelda-ocarina-of-time',
        title: 'The Legend of Zelda: Ocarina of Time',
        year: '1998',
        genres: ['Action', 'Adventure', 'RPG'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Hyrule Field', promptString: 'vast green plains, distant castle, blue sky, epic fantasy landscape' },
            { name: 'Temple Dungeon', promptString: 'ancient stone corridors, torchlit, puzzle mechanisms, zelda dungeon' }
        ],
        gameAssets: {
            items: [
                { name: 'Master Sword', promptString: 'legendary blue sword sprite, glowing blade, multiple angles, 32x32' },
                { name: 'Heart Container', promptString: 'red heart icon sprite, health pickup, animation frames' },
                { name: 'Rupees', promptString: 'green blue red purple gems sprite sheet, currency items, shiny' }
            ],
            maps: [
                { name: 'Hyrule Tileset', promptString: 'top-down tileset, grass paths trees water, fantasy overworld, 16x16' },
                { name: 'Dungeon Tileset', promptString: 'stone floor walls doors torches, temple interior tiles' }
            ],
            heroes: [
                { name: 'Link Sprite', promptString: 'green tunic hero sprite sheet, sword shield, walk attack animations, 8 directions' }
            ],
            enemies: [
                { name: 'Octorok', promptString: 'octopus creature sprite, spitting rocks, 4 directions animation' },
                { name: 'Stalfos', promptString: 'skeleton warrior sprite, sword and shield, attack animation' }
            ],
            bosses: [
                { name: 'Ganondorf', promptString: 'dark king boss sprite, flowing cape, magic attacks, imposing' }
            ]
        }
    },
    {
        id: 'super-mario-64',
        title: 'Super Mario 64',
        year: '1996',
        genres: ['Platformer', 'Adventure'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Peach Castle', promptString: '3D platformer, colorful worlds, Nintendo 64 aesthetic' },
            { name: 'Bob-omb Battlefield', promptString: 'grassy hills, chain chomp, king bob-omb mountain' }
        ],
        gameAssets: {
            items: [
                { name: 'Power Stars', promptString: 'golden star sprite, spinning animation, collectible glow' },
                { name: 'Coins', promptString: 'yellow coin sprite sheet, spinning animation, mario style' },
                { name: 'Red Coins', promptString: 'red coin sprite, special collectible, shimmering' }
            ],
            maps: [
                { name: 'Castle Tileset', promptString: 'stone castle interior, stained glass, paintings, carpet' }
            ],
            heroes: [
                { name: 'Mario 64', promptString: 'red cap plumber sprite, jump punch dive animations' }
            ],
            enemies: [
                { name: 'Goomba', promptString: 'brown mushroom enemy, 3D style, walking animation' },
                { name: 'Bob-omb', promptString: 'walking bomb sprite, fuse lit, explosion animation' }
            ],
            bosses: [
                { name: 'King Bob-omb', promptString: 'giant bomb king boss, mustache crown, throwing pose' },
                { name: 'Bowser', promptString: 'koopa king boss sprite, fire breath, tail spin' }
            ]
        }
    },
    {
        id: 'half-life-2',
        title: 'Half-Life 2',
        year: '2004',
        genres: ['FPS', 'Sci-Fi', 'Action'],
        director: 'Valve',
        actors: [],
        type: 'game',
        styles: [
            { name: 'City 17', promptString: 'dystopian eastern european city, combine architecture, oppressive' },
            { name: 'Ravenholm', promptString: 'horror town, zombies, dark atmosphere, abandoned' }
        ],
        gameAssets: {
            items: [
                { name: 'Gravity Gun', promptString: 'physics gun sprite, orange glow, sci-fi weapon icon' },
                { name: 'Crowbar', promptString: 'red crowbar sprite, iconic melee weapon, simple design' },
                { name: 'Health Kit', promptString: 'white medical kit sprite, red cross, healing item' }
            ],
            heroes: [
                { name: 'Gordon Freeman', promptString: 'scientist in HEV suit sprite, glasses, crowbar, orange suit' }
            ],
            enemies: [
                { name: 'Combine Soldier', promptString: 'masked soldier sprite, white armor, pulse rifle' },
                { name: 'Headcrab', promptString: 'parasitic alien sprite, jumping animation, face hugger' },
                { name: 'Zombie', promptString: 'headcrab zombie sprite, shambling, claws, horror' }
            ],
            bosses: [
                { name: 'Strider', promptString: 'tripod walker boss, long legs, pulse cannon, alien machine' }
            ]
        }
    },
    {
        id: 'resident-evil-4',
        title: 'Resident Evil 4',
        year: '2005',
        genres: ['Action', 'Horror', 'Survival'],
        director: 'Shinji Mikami',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Spanish Village', promptString: 'rural horror, rain, cultists, dirty textures' },
            { name: 'Castle', promptString: 'gothic castle, red velvet, candlelit, religious zealotry' }
        ],
        gameAssets: {
            items: [
                { name: 'Handgun', promptString: 'pistol sprite, realistic firearm, RE4 style' },
                { name: 'Green Herb', promptString: 'healing herb sprite, green plant, health item' },
                { name: 'Treasure', promptString: 'gem and treasure sprites, jewels, collectibles' }
            ],
            heroes: [
                { name: 'Leon Kennedy', promptString: 'agent sprite sheet, tactical gear, knife, gun poses' }
            ],
            enemies: [
                { name: 'Ganados', promptString: 'villager enemy sprites, pitchforks, axes, infected' },
                { name: 'Zealots', promptString: 'cult enemy sprites, robes, crossbows, red eyes' }
            ],
            bosses: [
                { name: 'El Gigante', promptString: 'giant troll boss sprite, massive, chains, roaring' },
                { name: 'Saddler', promptString: 'cult leader boss, tentacle mutations, final form' }
            ]
        }
    },
    {
        id: 'bioshock',
        title: 'BioShock',
        year: '2007',
        genres: ['FPS', 'Horror', 'Sci-Fi'],
        director: 'Ken Levine',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Rapture Deco', promptString: 'underwater city, art deco, neon, 1950s retro-futurism' },
            { name: 'Big Daddy', promptString: 'diving suit, drill arm, glowing portholes' }
        ],
        gameAssets: {
            items: [
                { name: 'Plasmids', promptString: 'genetic power sprites, syringe, elemental icons, fire ice lightning' },
                { name: 'EVE Hypo', promptString: 'blue syringe sprite, mana/energy item' },
                { name: 'Audio Diary', promptString: 'tape recorder sprite, collectible item icon' }
            ],
            maps: [
                { name: 'Rapture Tileset', promptString: 'art deco tiles, brass copper, water leaks, neon signs' }
            ],
            heroes: [
                { name: 'Jack', promptString: 'protagonist sprite, sweater, wrench, plasmid hand' }
            ],
            enemies: [
                { name: 'Splicers', promptString: 'deformed enemy sprites, masks, various weapons' },
                { name: 'Security Bot', promptString: 'flying drone sprite, searchlight, turret' }
            ],
            bosses: [
                { name: 'Big Daddy', promptString: 'diving suit boss, drill and rivet gun variants' },
                { name: 'Fontaine', promptString: 'final boss sprite, ADAM mutations, monster form' }
            ]
        }
    },
    {
        id: 'final-fantasy-vii',
        title: 'Final Fantasy VII',
        year: '1997',
        genres: ['RPG', 'Fantasy', 'Sci-Fi'],
        director: 'Yoshinori Kitase',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Midgar', promptString: 'cyberpunk slums, mako reactors, industrial dystopia' },
            { name: 'Materia Magic', promptString: 'magical orbs, spell effects, summons' }
        ],
        gameAssets: {
            items: [
                { name: 'Materia', promptString: 'glowing orb sprites, green red yellow purple, magical spheres' },
                { name: 'Potions', promptString: 'healing item sprites, potion hi-potion elixir bottles' },
                { name: 'Buster Sword', promptString: 'massive sword sprite, iconic weapon, Cloud equipment' }
            ],
            maps: [
                { name: 'Midgar Tileset', promptString: 'industrial city tiles, pipes, slums, mako glow' },
                { name: 'World Map', promptString: 'FF7 overworld tiles, grasslands, mountains, towns' }
            ],
            heroes: [
                { name: 'Cloud Strife', promptString: 'spiky hair soldier sprite, buster sword, SOLDIER uniform' },
                { name: 'Tifa', promptString: 'martial artist sprite, fighting poses, black outfit' },
                { name: 'Aerith', promptString: 'flower girl sprite, staff, pink dress, healing' }
            ],
            enemies: [
                { name: 'Shinra Soldiers', promptString: 'military enemy sprites, blue uniform, guns' },
                { name: 'Monsters', promptString: 'FF7 creature sprites, various beasts and machines' }
            ],
            bosses: [
                { name: 'Sephiroth', promptString: 'silver hair villain sprite, masamune sword, black coat' },
                { name: 'Jenova', promptString: 'alien entity boss, tentacles, biomechanical horror' }
            ]
        }
    },
    {
        id: 'world-of-warcraft',
        title: 'World of Warcraft',
        year: '2004',
        genres: ['MMORPG', 'Fantasy'],
        director: 'Blizzard Entertainment',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Azeroth', promptString: 'warcraft fantasy world, stylized graphics, epic landscapes' },
            { name: 'Horde vs Alliance', promptString: 'faction conflict, orcs humans, banner flags' }
        ],
        gameAssets: {
            items: [
                { name: 'Weapons', promptString: 'WoW weapon sprites, epic swords axes staves, glowing enchants' },
                { name: 'Armor Sets', promptString: 'tier armor sprites, plate mail cloth leather, class sets' },
                { name: 'Mounts', promptString: 'mount sprites, horses wolves dragons, riding animals' }
            ],
            maps: [
                { name: 'Elwynn Forest', promptString: 'green forest tileset, human starting zone, peaceful' },
                { name: 'Durotar', promptString: 'red desert tileset, orc homeland, harsh terrain' }
            ],
            heroes: [
                { name: 'Human Warrior', promptString: 'Alliance warrior sprite, plate armor, sword shield' },
                { name: 'Orc Warrior', promptString: 'Horde warrior sprite, green skin, axes, spikes' }
            ],
            enemies: [
                { name: 'Kobolds', promptString: 'candle-wearing rat creatures, mining picks' },
                { name: 'Murlocs', promptString: 'fish creatures, coastal enemies, gurgling' }
            ],
            bosses: [
                { name: 'Ragnaros', promptString: 'fire elemental lord boss, magma, massive hammer' },
                { name: 'Arthas', promptString: 'Lich King boss, Frostmourne sword, undead armor' }
            ]
        }
    },
    {
        id: 'metal-gear-solid',
        title: 'Metal Gear Solid',
        year: '1998',
        genres: ['Stealth', 'Action', 'Tactical'],
        director: 'Hideo Kojima',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Shadow Moses', promptString: 'arctic military base, stealth infiltration, snow' },
            { name: 'Tactical Espionage', promptString: 'radar view, codec calls, cardboard box hiding' }
        ],
        gameAssets: {
            items: [
                { name: 'SOCOM Pistol', promptString: 'silenced pistol sprite, tactical firearm' },
                { name: 'Cardboard Box', promptString: 'hiding box sprite, stealth item, iconic' },
                { name: 'Rations', promptString: 'military food sprite, health item, camo pattern' }
            ],
            heroes: [
                { name: 'Solid Snake', promptString: 'stealth soldier sprite, bandana, sneaking suit, CQC poses' }
            ],
            enemies: [
                { name: 'Genome Soldiers', promptString: 'guard sprites, patrol animations, alert poses' }
            ],
            bosses: [
                { name: 'Gray Fox', promptString: 'cyborg ninja sprite, exoskeleton, sword' },
                { name: 'Metal Gear REX', promptString: 'bipedal tank boss sprite, nuclear mech' },
                { name: 'Liquid Snake', promptString: 'villain sprite, blonde, shirtless, twin brother' }
            ]
        }
    },
    {
        id: 'doom-1993',
        title: 'Doom',
        year: '1993',
        genres: ['FPS', 'Action', 'Horror'],
        director: 'id Software',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Mars Base', promptString: 'sci-fi corridors, hell portals, demon invasion' },
            { name: 'Hell', promptString: 'fire and brimstone, demonic architecture, gore' }
        ],
        gameAssets: {
            items: [
                { name: 'Weapons', promptString: 'doom weapon sprites, shotgun chaingun BFG, pixel art' },
                { name: 'Keycards', promptString: 'red blue yellow keycard sprites, door access' },
                { name: 'Health', promptString: 'medkit and stimpack sprites, healing items' }
            ],
            maps: [
                { name: 'Tech Base Tileset', promptString: 'doom WAD tiles, metal walls, computer panels, doors' },
                { name: 'Hell Tileset', promptString: 'hellish tiles, flesh walls, lava, demonic symbols' }
            ],
            heroes: [
                { name: 'Doomguy', promptString: 'space marine sprite, green armor, multiple weapons, sprite rotations' }
            ],
            enemies: [
                { name: 'Imp', promptString: 'brown demon sprite, fireball attack, melee claws' },
                { name: 'Pinky Demon', promptString: 'pink bull demon sprite, charging attack' },
                { name: 'Cacodemon', promptString: 'floating red eye ball demon, projectile attack' }
            ],
            bosses: [
                { name: 'Cyberdemon', promptString: 'massive demon boss, rocket launcher arm, cybernetic' },
                { name: 'Spider Mastermind', promptString: 'brain on spider legs boss, chaingun' }
            ]
        }
    }
];
