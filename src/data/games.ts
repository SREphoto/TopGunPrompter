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
    },
    {
        id: 'skyrim',
        title: 'The Elder Scrolls V: Skyrim',
        year: '2011',
        genres: ['RPG', 'Fantasy', 'Open World'],
        director: 'Bethesda',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Nordic Winter', promptString: 'snowy mountains, nordic ruins, aurora borealis' }
        ],
        gameAssets: {
            items: [
                { name: 'Iron Sword', promptString: 'nordic sword sprite, iron blade, leather grip' },
                { name: 'Potions', promptString: 'alchemy potion sprites, health magicka stamina bottles' },
                { name: 'Soul Gems', promptString: 'glowing gem sprites, petty to grand, magic containers' }
            ],
            heroes: [
                { name: 'Dragonborn', promptString: 'nord warrior sprite, horned helmet, various armor' }
            ],
            enemies: [
                { name: 'Draugr', promptString: 'undead nordic warrior sprites, ancient weapons' },
                { name: 'Bandits', promptString: 'human enemy sprites, fur armor, various weapons' }
            ],
            bosses: [
                { name: 'Alduin', promptString: 'black dragon boss sprite, world eater, fire breath' }
            ]
        }
    },
    {
        id: 'mass-effect-2',
        title: 'Mass Effect 2',
        year: '2010',
        genres: ['RPG', 'Sci-Fi', 'Action'],
        director: 'BioWare',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Omega', promptString: 'neon sci-fi slums, criminal underworld, space station' }
        ],
        gameAssets: {
            items: [
                { name: 'Assault Rifle', promptString: 'sci-fi rifle sprite, thermal clip, sleek design' },
                { name: 'Medi-gel', promptString: 'healing item sprite, orange gel pack' }
            ],
            heroes: [
                { name: 'Commander Shepard', promptString: 'N7 armor sprite, red stripe, omni-tool' }
            ],
            enemies: [
                { name: 'Collectors', promptString: 'insectoid alien enemy sprites, glowing eyes' },
                { name: 'Husks', promptString: 'cybernetic zombie sprites, reaper tech' }
            ],
            bosses: [
                { name: 'Human Reaper', promptString: 'massive terminator boss, larval form, skeleton' }
            ]
        }
    },
    {
        id: 'the-last-of-us',
        title: 'The Last of Us',
        year: '2013',
        genres: ['Action', 'Adventure', 'Horror'],
        director: 'Neil Druckmann',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Overgrown City', promptString: 'nature reclaiming civilization, post-apocalyptic' }
        ],
        gameAssets: {
            items: [
                { name: 'Revolver', promptString: 'worn pistol sprite, survival weapon' },
                { name: 'Molotov', promptString: 'bottle firebomb sprite, rag fuse, crafted weapon' },
                { name: 'Med Kit', promptString: 'bandage health kit sprite, scavenged materials' }
            ],
            heroes: [
                { name: 'Joel', promptString: 'grizzled survivor sprite, backpack, flannel shirt' },
                { name: 'Ellie', promptString: 'teenage girl sprite, switchblade, hoodie' }
            ],
            enemies: [
                { name: 'Runners', promptString: 'fresh infected sprites, aggressive, screaming' },
                { name: 'Clickers', promptString: 'blind fungal zombie sprites, clicking echolocation' }
            ],
            bosses: [
                { name: 'Bloater', promptString: 'massive infected boss, armored fungus, spore throw' }
            ]
        }
    },
    {
        id: 'super-mario-world',
        title: 'Super Mario World',
        year: '1991',
        genres: ['Platformer', 'Action'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Dinosaur Land', promptString: 'colorful SNES platformer, Yoshi, bright colors' }
        ],
        gameAssets: {
            items: [
                { name: 'Super Mushroom', promptString: 'red mushroom sprite, power-up, 16-bit' },
                { name: 'Cape Feather', promptString: 'yellow feather sprite, flight power-up' },
                { name: 'Yoshi Coins', promptString: 'dragon coin collectible sprite' }
            ],
            maps: [
                { name: 'Overworld Tileset', promptString: 'SMW tiles, grass hills, pipes, blocks, 16-bit' }
            ],
            heroes: [
                { name: 'Mario', promptString: 'SNES mario sprite, cape, run jump animations' },
                { name: 'Yoshi', promptString: 'green dinosaur mount sprite, tongue, flutter' }
            ],
            enemies: [
                { name: 'Koopa Troopa', promptString: '16-bit turtle enemy, shell kick' },
                { name: 'Chargin Chuck', promptString: 'football koopa sprite, tackle attack' }
            ],
            bosses: [
                { name: 'Bowser', promptString: 'clown car boss, hammer throw, SMW style' }
            ]
        }
    },
    {
        id: 'chrono-trigger',
        title: 'Chrono Trigger',
        year: '1995',
        genres: ['RPG', 'Fantasy', 'Time Travel'],
        director: 'Square',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Time Periods', promptString: 'prehistoric to future, varied eras, Toriyama art' }
        ],
        gameAssets: {
            items: [
                { name: 'Katana', promptString: 'Crono sword sprites, rainbow to crisis blade' },
                { name: 'Potions', promptString: 'tonic and ether healing item sprites' }
            ],
            heroes: [
                { name: 'Crono', promptString: 'spiky red hair hero sprite, katana, lightning magic' },
                { name: 'Marle', promptString: 'princess sprite, crossbow, ice magic, blonde' },
                { name: 'Lucca', promptString: 'inventor girl sprite, glasses, fire magic, gun' }
            ],
            enemies: [
                { name: 'Imps', promptString: 'small demon enemy sprites, various colors' },
                { name: 'Reptites', promptString: 'dinosaur humanoid enemy sprites' }
            ],
            bosses: [
                { name: 'Lavos', promptString: 'cosmic parasite boss, shell forms, final boss' },
                { name: 'Magus', promptString: 'dark wizard sprite, scythe, shadow magic, cape' }
            ]
        }
    },
    {
        id: 'zelda-link-to-the-past',
        title: 'The Legend of Zelda: A Link to the Past',
        year: '1991',
        genres: ['Action', 'Adventure', 'RPG'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Light World', promptString: 'bright hyrule, SNES zelda, green fields' },
            { name: 'Dark World', promptString: 'corrupted realm, purple palette, twisted' }
        ],
        gameAssets: {
            items: [
                { name: 'Master Sword', promptString: '16-bit master sword sprite, beam attack' },
                { name: 'Hookshot', promptString: 'grappling hook item sprite, chain extension' },
                { name: 'Bow', promptString: 'wooden bow sprite, arrow projectiles' }
            ],
            maps: [
                { name: 'Light World Tiles', promptString: 'SNES hyrule tileset, grass trees water' },
                { name: 'Dark World Tiles', promptString: 'corrupted purple tileset, skull rocks' }
            ],
            heroes: [
                { name: 'Link', promptString: 'pink hair hero sprite, green tunic, 16-bit animations' }
            ],
            enemies: [
                { name: 'Soldiers', promptString: 'castle guard enemy sprites, sword and spear' },
                { name: 'Moblins', promptString: 'pig warrior enemy sprites, spear throwing' }
            ],
            bosses: [
                { name: 'Ganon', promptString: 'blue pig demon boss sprite, trident, fire bats' }
            ]
        }
    },
    {
        id: 'red-dead-redemption',
        title: 'Red Dead Redemption',
        year: '2010',
        genres: ['Action', 'Adventure', 'Western'],
        director: 'Rockstar Games',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Old West', promptString: 'frontier america, desert towns, horseback' }
        ],
        gameAssets: {
            items: [
                { name: 'Revolver', promptString: 'western six shooter sprite, cowboy pistol' },
                { name: 'Rifle', promptString: 'lever action rifle sprite, western firearms' },
                { name: 'Lasso', promptString: 'rope lasso sprite, catching tool' }
            ],
            heroes: [
                { name: 'John Marston', promptString: 'scarred cowboy sprite, hat, duster coat' }
            ],
            enemies: [
                { name: 'Outlaws', promptString: 'western bandit enemy sprites, various weapons' }
            ],
            bosses: [
                { name: 'Dutch', promptString: 'gang leader boss, fancy clothes, dual pistols' }
            ]
        }
    },
    {
        id: 'goldeneye-007',
        title: 'GoldenEye 007',
        year: '1997',
        genres: ['FPS', 'Action', 'Spy'],
        director: 'Rare',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Facility', promptString: 'cold war russian base, industrial, N64 graphics' }
        ],
        gameAssets: {
            items: [
                { name: 'PP7', promptString: 'bond pistol sprite, silenced variant' },
                { name: 'Golden Gun', promptString: 'one-hit-kill golden pistol sprite' },
                { name: 'Body Armor', promptString: 'protective vest pickup sprite' }
            ],
            heroes: [
                { name: 'James Bond', promptString: 'secret agent sprite, tuxedo, various weapons' }
            ],
            enemies: [
                { name: 'Russian Soldiers', promptString: 'military guard enemy sprites, AK47' }
            ],
            bosses: [
                { name: 'Trevelyan', promptString: '006 villain sprite, final boss, dual wielding' }
            ]
        }
    },
    {
        id: 'halo-combat-evolved',
        title: 'Halo: Combat Evolved',
        year: '2001',
        genres: ['FPS', 'Sci-Fi', 'Action'],
        director: 'Bungie',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Ringworld', promptString: 'alien megastructure, forerunner architecture' }
        ],
        gameAssets: {
            items: [
                { name: 'Assault Rifle', promptString: 'MA5B rifle sprite, UNSC weapon, ammo counter' },
                { name: 'Plasma Pistol', promptString: 'covenant pistol sprite, green glow, overcharge' },
                { name: 'Frag Grenade', promptString: 'UNSC grenade sprite, explosive' }
            ],
            heroes: [
                { name: 'Master Chief', promptString: 'spartan armor sprite, green mjolnir, visor' }
            ],
            enemies: [
                { name: 'Grunts', promptString: 'covenant grunt enemy sprites, small aliens' },
                { name: 'Elites', promptString: 'sangheili warrior sprites, energy sword' },
                { name: 'Flood', promptString: 'parasite zombie sprites, infection forms' }
            ],
            bosses: [
                { name: '343 Guilty Spark', promptString: 'floating AI orb, blue eye, forerunner' }
            ]
        }
    },
    {
        id: 'portal-2',
        title: 'Portal 2',
        year: '2011',
        genres: ['Puzzle', 'Sci-Fi', 'First Person'],
        director: 'Valve',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Aperture Science', promptString: 'test chambers, white panels, portal gun' }
        ],
        gameAssets: {
            items: [
                { name: 'Portal Gun', promptString: 'ASHPD device sprite, blue and orange portals' },
                { name: 'Companion Cube', promptString: 'weighted cube with hearts, iconic' },
                { name: 'Gels', promptString: 'repulsion propulsion conversion gel sprites' }
            ],
            heroes: [
                { name: 'Chell', promptString: 'test subject sprite, orange jumpsuit, long fall boots' }
            ],
            enemies: [
                { name: 'Turrets', promptString: 'sentry turret sprites, aperture design, laser sight' }
            ],
            bosses: [
                { name: 'GLaDOS', promptString: 'AI boss sprite, hanging chassis, yellow eye' },
                { name: 'Wheatley', promptString: 'blue personality core sprite, mechanical eye' }
            ]
        }
    },
    {
        id: 'minecraft',
        title: 'Minecraft',
        year: '2011',
        genres: ['Sandbox', 'Survival', 'Creative'],
        director: 'Markus Persson',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Blocky World', promptString: 'voxel landscape, cubic everything, procedural' }
        ],
        gameAssets: {
            items: [
                { name: 'Diamond Sword', promptString: 'blue diamond blade sprite, 16x16 minecraft' },
                { name: 'Pickaxes', promptString: 'wood stone iron gold diamond pickaxe sprites' },
                { name: 'Food', promptString: 'steak apple bread carrot minecraft food sprites' }
            ],
            maps: [
                { name: 'Block Textures', promptString: 'minecraft blocks, grass dirt stone ore, 16x16' }
            ],
            heroes: [
                { name: 'Steve', promptString: 'default player skin, blocky humanoid' },
                { name: 'Alex', promptString: 'female player skin, orange hair, slim' }
            ],
            enemies: [
                { name: 'Creeper', promptString: 'green exploding monster, iconic, silent' },
                { name: 'Skeleton', promptString: 'bow-wielding undead, bone texture' },
                { name: 'Zombie', promptString: 'green undead, blue shirt, shambling' }
            ],
            bosses: [
                { name: 'Ender Dragon', promptString: 'black dragon boss, purple eyes, end dimension' },
                { name: 'Wither', promptString: 'three-headed skeleton boss, flying, skulls' }
            ]
        }
    },
    {
        id: 'street-fighter-ii',
        title: 'Street Fighter II',
        year: '1991',
        genres: ['Fighting', 'Arcade'],
        director: 'Capcom',
        actors: [],
        type: 'game',
        styles: [
            { name: 'World Warriors', promptString: 'arcade fighting, 16-bit sprites, world stages' }
        ],
        gameAssets: {
            heroes: [
                { name: 'Ryu', promptString: 'karate fighter sprite, white gi, hadouken' },
                { name: 'Ken', promptString: 'american fighter sprite, red gi, shoryuken' },
                { name: 'Chun-Li', promptString: 'kung fu woman sprite, blue qipao, lightning kick' }
            ],
            bosses: [
                { name: 'M. Bison', promptString: 'dictator boss sprite, red uniform, psycho power' },
                { name: 'Sagat', promptString: 'muay thai boss, eye patch, tiger uppercut' }
            ],
            maps: [
                { name: 'World Stages', promptString: 'fighting game backgrounds, japan china usa india' }
            ]
        }
    },
    {
        id: 'portal',
        title: 'Portal',
        year: '2007',
        genres: ['Puzzle', 'Sci-Fi'],
        director: 'Valve',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Test Chambers', promptString: 'sterile white chambers, orange and blue portals' }
        ],
        gameAssets: {
            items: [
                { name: 'Portal Gun', promptString: 'handheld portal device sprite, sci-fi tool' },
                { name: 'Companion Cube', promptString: 'weighted storage cube, pink hearts' }
            ],
            heroes: [
                { name: 'Chell', promptString: 'silent protagonist sprite, orange jumpsuit' }
            ],
            bosses: [
                { name: 'GLaDOS', promptString: 'AI antagonist sprite, cake is a lie, robotic' }
            ]
        }
    },
    {
        id: 'witcher-3',
        title: 'The Witcher 3: Wild Hunt',
        year: '2015',
        genres: ['RPG', 'Fantasy', 'Action'],
        director: 'CD Projekt Red',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Northern Realms', promptString: 'slavic dark fantasy, war-torn, mature themes' }
        ],
        gameAssets: {
            items: [
                { name: 'Silver Sword', promptString: 'witcher sword for monsters, runes, silver blade' },
                { name: 'Potions', promptString: 'alchemy bottles sprites, various witcher brews' }
            ],
            heroes: [
                { name: 'Geralt', promptString: 'white hair witcher sprite, two swords, cat eyes' },
                { name: 'Ciri', promptString: 'ashen-haired woman sprite, blink ability, sword' }
            ],
            enemies: [
                { name: 'Drowners', promptString: 'water monster sprites, webbed claws, amphibian' },
                { name: 'Wraiths', promptString: 'ghost enemy sprites, spectral, screaming' }
            ],
            bosses: [
                { name: 'Wild Hunt', promptString: 'frost elf rider boss sprites, spectral armor' }
            ]
        }
    },
    {
        id: 'super-metroid',
        title: 'Super Metroid',
        year: '1994',
        genres: ['Action', 'Adventure', 'Metroidvania'],
        director: 'Nintendo',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Zebes', promptString: 'alien planet, biomechanical corridors, isolated' }
        ],
        gameAssets: {
            items: [
                { name: 'Missiles', promptString: 'missile ammo sprites, expansion pickups' },
                { name: 'Energy Tank', promptString: 'health upgrade sprite, glowing container' }
            ],
            maps: [
                { name: 'Brinstar Tiles', promptString: 'organic cave tileset, green flora, alien' },
                { name: 'Norfair Tiles', promptString: 'lava cavern tileset, red hot metal, volcanic' }
            ],
            heroes: [
                { name: 'Samus', promptString: 'power suit sprite, arm cannon, morph ball, 16-bit' }
            ],
            enemies: [
                { name: 'Space Pirates', promptString: 'alien soldier sprites, laser weapons' },
                { name: 'Metroids', promptString: 'floating jellyfish aliens, life drain' }
            ],
            bosses: [
                { name: 'Ridley', promptString: 'purple dragon boss sprite, fire breath, wings' },
                { name: 'Mother Brain', promptString: 'giant brain boss, laser eye, final form' }
            ]
        }
    },
    {
        id: 'super-mario-bros',
        title: 'Super Mario Bros.',
        year: '1985',
        genres: ['Platformer', 'Action'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'World 1-1', promptString: 'iconic NES platformer, blue sky, green pipes' }
        ],
        gameAssets: {
            items: [
                { name: 'Super Mushroom', promptString: 'red power-up mushroom sprite, 8-bit' },
                { name: 'Fire Flower', promptString: 'orange flower power-up sprite' },
                { name: 'Coins', promptString: 'gold coin sprite, spinning animation' }
            ],
            maps: [
                { name: 'Overworld Tiles', promptString: 'NES mario tileset, bricks, question blocks, pipes' },
                { name: 'Underground Tiles', promptString: 'blue underground tileset, dark' }
            ],
            heroes: [
                { name: 'Mario', promptString: 'red cap plumber sprite, 8-bit, run jump animations' }
            ],
            enemies: [
                { name: 'Goomba', promptString: 'brown mushroom enemy sprite, walking' },
                { name: 'Koopa Troopa', promptString: 'turtle enemy sprite, shell kick' }
            ],
            bosses: [
                { name: 'Bowser', promptString: 'koopa king boss sprite, fire breath, bridge' }
            ]
        }
    },
    {
        id: 'shadow-of-the-colossus',
        title: 'Shadow of the Colossus',
        year: '2005',
        genres: ['Action', 'Adventure', 'Puzzle'],
        director: 'Fumito Ueda',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Forbidden Lands', promptString: 'vast empty landscape, ancient ruins, lonely' }
        ],
        gameAssets: {
            items: [
                { name: 'Ancient Sword', promptString: 'glowing blade sprite, light beam, guidance' },
                { name: 'Bow', promptString: 'wooden bow sprite, arrow projectiles' }
            ],
            heroes: [
                { name: 'Wander', promptString: 'young warrior sprite, cloak, climbing poses' },
                { name: 'Agro', promptString: 'faithful horse sprite, riding animations' }
            ],
            bosses: [
                { name: 'Colossi', promptString: 'giant stone creature boss sprites, various forms, weak points' }
            ]
        }
    },
    {
        id: 'deus-ex',
        title: 'Deus Ex',
        year: '2000',
        genres: ['RPG', 'FPS', 'Stealth'],
        director: 'Ion Storm',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Cyberpunk Future', promptString: 'conspiracy, augmentations, dark near-future' }
        ],
        gameAssets: {
            items: [
                { name: 'GEP Gun', promptString: 'rocket launcher sprite, bulky military weapon' },
                { name: 'Augmentation Canister', promptString: 'upgrade item sprite, nano tech' },
                { name: 'Lockpicks', promptString: 'electronic lockpick sprite, hacking tool' }
            ],
            heroes: [
                { name: 'JC Denton', promptString: 'sunglasses agent sprite, trenchcoat, augmented' }
            ],
            enemies: [
                { name: 'MJ12 Troops', promptString: 'paramilitary soldier sprites, conspiracy troops' },
                { name: 'MIB', promptString: 'men in black enemy sprites, sunglasses, suits' }
            ],
            bosses: [
                { name: 'Walton Simons', promptString: 'augmented villain sprite, nano-augs, boss fight' }
            ]
        }
    },
    {
        id: 'super-mario-bros-3',
        title: 'Super Mario Bros. 3',
        year: '1990',
        genres: ['Platformer', 'Action'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Grass Land', promptString: 'NES platformer, colorful worlds, koopa kids' }
        ],
        gameAssets: {
            items: [
                { name: 'Super Leaf', promptString: 'raccoon tail power-up sprite, tanooki' },
                { name: 'Frog Suit', promptString: 'swimming power-up sprite, green frog' },
                { name: 'P-Wing', promptString: 'infinite flight power-up sprite' }
            ],
            maps: [
                { name: 'World Map Tiles', promptString: 'SMB3 world map tileset, levels, secrets' }
            ],
            heroes: [
                { name: 'Mario', promptString: 'NES mario sprites, raccoon tail, frog suit variants' }
            ],
            enemies: [
                { name: 'Hammer Bros', promptString: 'hammer-throwing koopa sprites' },
                { name: 'Boo', promptString: 'ghost enemy sprite, shy when looked at' }
            ],
            bosses: [
                { name: 'Koopalings', promptString: 'koopa kid boss sprites, seven variants, magic wands' },
                { name: 'Bowser', promptString: 'king koopa boss sprite, ground pound, final battle' }
            ]
        }
    },
    {
        id: 'gta-v',
        title: 'Grand Theft Auto V',
        year: '2013',
        genres: ['Action', 'Open World', 'Crime'],
        director: 'Rockstar Games',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Los Santos', promptString: 'LA satire, modern crime, three protagonists' }
        ],
        gameAssets: {
            items: [
                { name: 'Weapons', promptString: 'modern gun sprites, pistol SMG rifle, realistic' },
                { name: 'Cash', promptString: 'money bundle sprites, heist loot, dollar stacks' }
            ],
            heroes: [
                { name: 'Michael', promptString: 'retired criminal sprite, suit, middle-aged' },
                { name: 'Franklin', promptString: 'young gangster sprite, streetwear, ambitious' },
                { name: 'Trevor', promptString: 'psycho criminal sprite, unhinged, bald' }
            ],
            enemies: [
                { name: 'Police', promptString: 'LSPD cop sprites, various weapons, pursuit' },
                { name: 'Gang Members', promptString: 'street gang enemy sprites, various factions' }
            ]
        }
    }
];
