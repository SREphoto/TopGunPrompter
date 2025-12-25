import type { MediaItem } from './types';

/**
 * GAME SPRITE SHEET GENERATOR
 * 
 * This file contains games with detailed sprite sheet generation data.
 * Each game includes:
 * - perspective: Camera angle (side-scroller, top-down, isometric, etc.)
 * - graphicsStyle: Art style (8-bit, 16-bit, pixel-art-hd, etc.)
 * - resolution: Sprite dimensions (16x16, 32x32, etc.)
 * - characters: Player, enemy, boss sprites with animation frames
 * - tilesets: Ground, walls, props, backgrounds
 * - items: Weapons, power-ups, collectibles
 * - effects: Visual effects (explosions, particles)
 * - ui: HUD elements
 */

export const games: MediaItem[] = [
    // ==========================================
    // SIDE-SCROLLER GAMES
    // ==========================================
    {
        id: 'super-mario-bros',
        title: 'Super Mario Bros.',
        year: '1985',
        genres: ['Platformer', 'Side-Scroller'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: '8-bit NES', promptString: 'NES 8-bit pixel art, limited color palette, retro gaming' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Mario',
                    role: 'player',
                    directions: 2, // left and right only
                    actions: [
                        { action: 'idle', frames: 1, description: 'standing still facing right, red cap, blue overalls' },
                        { action: 'walk', frames: 3, description: 'walking cycle, arms and legs moving alternately' },
                        { action: 'run', frames: 3, description: 'running cycle, faster animation, leaning forward' },
                        { action: 'jump', frames: 1, description: 'jumping pose, arms up, legs tucked' },
                        { action: 'fall', frames: 1, description: 'falling pose, arms spread, looking down' },
                        { action: 'crouch', frames: 1, description: 'ducking, half height, looking forward' },
                        { action: 'climb', frames: 2, description: 'climbing vine, alternating hand positions' },
                        { action: 'swim', frames: 2, description: 'swimming strokes underwater' },
                        { action: 'skid', frames: 1, description: 'sliding to stop, dust effect' },
                        { action: 'die', frames: 1, description: 'death pose, arms up, eyes closed' }
                    ]
                },
                {
                    name: 'Small Mario',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 1, description: 'small mario standing, half height' },
                        { action: 'walk', frames: 3, description: 'small mario walking cycle' },
                        { action: 'jump', frames: 1, description: 'small mario jumping' }
                    ]
                },
                {
                    name: 'Fire Mario',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 1, description: 'white and red mario, fire power' },
                        { action: 'throw_fireball', frames: 2, description: 'throwing fireball, arm extended' }
                    ]
                },
                {
                    name: 'Goomba',
                    role: 'enemy',
                    directions: 1, // same both directions
                    actions: [
                        { action: 'walk', frames: 2, description: 'brown mushroom enemy, feet alternating left right' },
                        { action: 'squished', frames: 1, description: 'flattened after being stomped, pancake shape' }
                    ]
                },
                {
                    name: 'Koopa Troopa',
                    role: 'enemy',
                    directions: 2,
                    actions: [
                        { action: 'walk', frames: 2, description: 'green turtle walking, shell on back' },
                        { action: 'shell_spin', frames: 4, description: 'spinning shell, rotating rapidly' },
                        { action: 'emerge', frames: 3, description: 'coming out of shell, head first' }
                    ]
                },
                {
                    name: 'Piranha Plant',
                    role: 'enemy',
                    directions: 1,
                    actions: [
                        { action: 'emerge', frames: 4, description: 'rising from green pipe, spotted head' },
                        { action: 'bite', frames: 2, description: 'mouth snapping open and closed' },
                        { action: 'retreat', frames: 4, description: 'sinking back into pipe' }
                    ]
                },
                {
                    name: 'Bowser',
                    role: 'boss',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 2, description: 'breathing animation, spikes visible, menacing pose' },
                        { action: 'walk', frames: 4, description: 'heavy walking, ground shaking' },
                        { action: 'fire_breath', frames: 3, description: 'mouth open wide, flames shooting out' },
                        { action: 'hammer_throw', frames: 3, description: 'arm back, throwing hammers overhead' },
                        { action: 'defeat', frames: 4, description: 'falling into lava, flailing' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Ground Brick', type: 'floor', variants: 4, description: 'brown brick ground tiles, top and sides visible' },
                { name: 'Brick Block', type: 'wall', variants: 2, description: 'destructible brick blocks, breakable' },
                { name: 'Question Block', type: 'prop', variants: 4, description: 'yellow block with ? mark, shimmer animation frames' },
                { name: 'Empty Block', type: 'prop', variants: 1, description: 'hit question block, now empty, dark brown' },
                { name: 'Pipe', type: 'prop', variants: 6, description: 'green warp pipes, vertical entrance, horizontal, different heights' },
                { name: 'Cloud', type: 'background', variants: 3, description: 'white fluffy clouds, smiling faces, different sizes' },
                { name: 'Bush', type: 'decoration', variants: 3, description: 'green bushes, same shape as clouds but green' },
                { name: 'Hill', type: 'background', variants: 2, description: 'green rolling hills, background scenery' },
                { name: 'Castle', type: 'prop', variants: 1, description: 'end of level castle, gray stone, flag on top' },
                { name: 'Underground Brick', type: 'floor', variants: 4, description: 'blue underground tileset, darker palette' },
                { name: 'Underwater', type: 'background', variants: 4, description: 'blue water tiles, coral, seaweed decorations' }
            ],
            items: [
                { name: 'Super Mushroom', category: 'powerup', animated: true, frames: 1, description: 'red mushroom with white spots, bounces when spawned' },
                { name: 'Fire Flower', category: 'powerup', animated: true, frames: 4, description: 'red/orange flower, petal animation' },
                { name: 'Starman', category: 'powerup', animated: true, frames: 4, description: 'yellow star with eyes, spinning/flashing animation' },
                { name: '1-Up Mushroom', category: 'powerup', animated: false, frames: 1, description: 'green mushroom with white spots' },
                { name: 'Coin', category: 'collectible', animated: true, frames: 4, description: 'gold coin, spinning rotation animation' },
                { name: 'Fireball', category: 'projectile', animated: true, frames: 4, description: 'bouncing fireball, orange with trail' }
            ],
            effects: [
                { name: 'Brick Break', frames: 4, description: 'brick shattering into 4 pieces flying outward' },
                { name: 'Coin Spawn', frames: 4, description: 'coin popping out of block, spinning up then vanishing' },
                { name: 'Enemy Defeat', frames: 4, description: 'enemy flipping upside down and falling off screen' },
                { name: 'Firework', frames: 6, description: 'end of level fireworks, colorful bursts' }
            ],
            ui: [
                { name: 'Score Display', description: '6-digit score counter at top' },
                { name: 'Coin Counter', description: 'coin icon x number collected' },
                { name: 'World Display', description: 'WORLD 1-1 style level indicator' },
                { name: 'Time Counter', description: 'TIME countdown in seconds' },
                { name: 'Lives Counter', description: 'Mario head x number of lives' }
            ]
        }
    },

    // ==========================================
    // TOP-DOWN GAMES
    // ==========================================
    {
        id: 'zelda-link-to-the-past',
        title: 'The Legend of Zelda: A Link to the Past',
        year: '1991',
        genres: ['Action', 'Adventure', 'Top-Down'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: '16-bit SNES', promptString: 'SNES 16-bit pixel art, vibrant colors, fantasy adventure' }
        ],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '16-bit',
            resolution: '16x16',
            colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Link',
                    role: 'player',
                    directions: 4, // up, down, left, right
                    actions: [
                        { action: 'idle', frames: 1, description: 'standing still, green tunic, facing direction' },
                        { action: 'walk', frames: 8, description: 'walking cycle, smooth animation, shield visible' },
                        { action: 'run', frames: 6, description: 'running faster, pegasus boots animation' },
                        { action: 'sword_slash', frames: 6, description: 'horizontal sword swing arc in facing direction' },
                        { action: 'sword_stab', frames: 4, description: 'forward thrust with sword' },
                        { action: 'spin_attack', frames: 8, description: '360 degree sword spin, charging then release' },
                        { action: 'shield_block', frames: 2, description: 'raising shield defensively' },
                        { action: 'push', frames: 4, description: 'pushing heavy object, strain animation' },
                        { action: 'pull', frames: 4, description: 'pulling object backward' },
                        { action: 'lift', frames: 3, description: 'lifting pot/rock overhead' },
                        { action: 'throw', frames: 3, description: 'throwing held object forward' },
                        { action: 'fall_pit', frames: 4, description: 'falling into hole, shrinking' },
                        { action: 'swim', frames: 4, description: 'swimming in water, head visible' },
                        { action: 'use_item', frames: 4, description: 'using equipped item animation' },
                        { action: 'damage', frames: 2, description: 'getting hit, knockback pose' }
                    ]
                },
                {
                    name: 'Hyrule Soldier',
                    role: 'enemy',
                    directions: 4,
                    actions: [
                        { action: 'patrol', frames: 4, description: 'walking with spear, blue armor' },
                        { action: 'alert', frames: 2, description: 'exclamation mark appears, noticed player' },
                        { action: 'chase', frames: 4, description: 'running toward player aggressively' },
                        { action: 'attack', frames: 3, description: 'thrusting spear forward' },
                        { action: 'defeat', frames: 4, description: 'spinning and exploding into poof' }
                    ]
                },
                {
                    name: 'Octorok',
                    role: 'enemy',
                    directions: 4,
                    actions: [
                        { action: 'walk', frames: 2, description: 'octopus-like creature hopping' },
                        { action: 'shoot', frames: 3, description: 'spitting rock projectile' }
                    ]
                },
                {
                    name: 'Ganon',
                    role: 'boss',
                    directions: 4,
                    actions: [
                        { action: 'idle', frames: 2, description: 'large blue pig demon, breathing, trident in hand' },
                        { action: 'teleport_out', frames: 4, description: 'dissolving into darkness' },
                        { action: 'teleport_in', frames: 4, description: 'materializing from darkness' },
                        { action: 'trident_throw', frames: 4, description: 'throwing trident spinning' },
                        { action: 'fire_bats', frames: 4, description: 'summoning flaming keese' },
                        { action: 'stunned', frames: 2, description: 'vulnerable to silver arrows' },
                        { action: 'defeat', frames: 8, description: 'exploding into light particles' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Grass', type: 'floor', variants: 4, description: 'green grass tiles with occasional flowers' },
                { name: 'Dirt Path', type: 'floor', variants: 4, description: 'brown dirt walking path' },
                { name: 'Water', type: 'floor', variants: 4, description: 'blue water tiles, animated ripples' },
                { name: 'Deep Water', type: 'hazard', variants: 2, description: 'darker blue, drowning hazard' },
                { name: 'Trees', type: 'wall', variants: 6, description: 'dark green tree tops, various sizes' },
                { name: 'Rocks', type: 'wall', variants: 4, description: 'gray boulders, some liftable' },
                { name: 'Cliffs', type: 'wall', variants: 8, description: 'cliff edges, multiple directions' },
                { name: 'House Exterior', type: 'wall', variants: 8, description: 'stone house walls, windows, doors' },
                { name: 'Roof Tiles', type: 'decoration', variants: 4, description: 'brown thatched rooftops' },
                { name: 'Dungeon Floor', type: 'floor', variants: 4, description: 'gray stone dungeon floor' },
                { name: 'Dungeon Walls', type: 'wall', variants: 8, description: 'dark stone walls, torch sconces' },
                { name: 'Pit', type: 'hazard', variants: 2, description: 'black bottomless pit' }
            ],
            items: [
                { name: 'Heart', category: 'consumable', animated: true, frames: 2, description: 'red heart, pulsing animation' },
                { name: 'Heart Container', category: 'collectible', animated: true, frames: 4, description: 'full heart piece, glowing' },
                { name: 'Rupee Green', category: 'collectible', animated: true, frames: 4, description: 'green gem, sparkling, worth 1' },
                { name: 'Rupee Blue', category: 'collectible', animated: true, frames: 4, description: 'blue gem, worth 5' },
                { name: 'Rupee Red', category: 'collectible', animated: true, frames: 4, description: 'red gem, worth 20' },
                { name: 'Small Key', category: 'collectible', animated: false, frames: 1, description: 'bronze key for dungeon doors' },
                { name: 'Big Key', category: 'collectible', animated: true, frames: 2, description: 'ornate boss door key, glowing' },
                { name: 'Bomb', category: 'weapon', animated: true, frames: 4, description: 'round bomb with lit fuse' },
                { name: 'Arrow', category: 'projectile', animated: false, frames: 1, description: 'wooden arrow projectile' }
            ],
            effects: [
                { name: 'Grass Cut', frames: 4, description: 'grass being slashed, pieces flying' },
                { name: 'Enemy Poof', frames: 6, description: 'defeated enemy smoke cloud' },
                { name: 'Bomb Explosion', frames: 6, description: 'circular explosion with debris' },
                { name: 'Sparkle', frames: 4, description: 'magical sparkle effect' }
            ],
            ui: [
                { name: 'Heart Row', description: 'row of heart icons for health' },
                { name: 'Magic Meter', description: 'vertical green bar for magic' },
                { name: 'Rupee Counter', description: 'currency display with icon' },
                { name: 'Item Box', description: 'equipped item display' }
            ]
        }
    },

    // ==========================================
    // ISOMETRIC / 3/4 VIEW GAMES  
    // ==========================================
    {
        id: 'pokemon-red-blue',
        title: 'Pokemon Red & Blue',
        year: '1996',
        genres: ['RPG', 'Adventure', '3/4-View'],
        director: 'Game Freak',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Game Boy', promptString: 'Game Boy 8-bit, 4 shades of green/gray, pixel art' }
        ],
        gameAssets: {
            perspective: '3/4-view',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'Game Boy green',
            characters: [
                {
                    name: 'Red (Trainer)',
                    role: 'player',
                    directions: 4,
                    actions: [
                        { action: 'idle', frames: 1, description: 'standing with cap, facing direction' },
                        { action: 'walk', frames: 4, description: 'walking cycle, bag bouncing' },
                        { action: 'run', frames: 4, description: 'running animation, faster cycle' },
                        { action: 'bike', frames: 4, description: 'riding bicycle' }
                    ]
                },
                {
                    name: 'Pikachu',
                    role: 'player',
                    directions: 4,
                    actions: [
                        { action: 'idle', frames: 2, description: 'yellow mouse standing, ears twitching' },
                        { action: 'walk', frames: 4, description: 'following trainer, happy' },
                        { action: 'battle_idle', frames: 2, description: 'battle stance, ready to fight' },
                        { action: 'attack', frames: 4, description: 'thunderbolt attack, electricity' },
                        { action: 'faint', frames: 3, description: 'knocked out, falling over' }
                    ]
                },
                {
                    name: 'Wild Pokemon',
                    role: 'enemy',
                    directions: 1,
                    actions: [
                        { action: 'battle_idle', frames: 2, description: 'facing player, battle ready' },
                        { action: 'attack', frames: 4, description: 'basic attack animation' },
                        { action: 'damage', frames: 2, description: 'taking hit, flinching' },
                        { action: 'faint', frames: 3, description: 'defeated, falling' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Grass', type: 'floor', variants: 2, description: 'walkable grass tiles' },
                { name: 'Tall Grass', type: 'floor', variants: 2, description: 'encounter grass, rustling animation' },
                { name: 'Path', type: 'floor', variants: 4, description: 'brown dirt path tiles' },
                { name: 'Water', type: 'hazard', variants: 4, description: 'blue water, surfable with HM' },
                { name: 'Trees', type: 'wall', variants: 4, description: 'blocking trees, cuttable' },
                { name: 'Buildings', type: 'wall', variants: 8, description: 'Pokemon Center, Mart, Gym exteriors' },
                { name: 'Ledges', type: 'platform', variants: 4, description: 'one-way jump-down ledges' }
            ],
            items: [
                { name: 'Pokeball', category: 'consumable', animated: true, frames: 4, description: 'red and white ball, opening animation' },
                { name: 'Potion', category: 'consumable', animated: false, frames: 1, description: 'purple spray bottle' },
                { name: 'Badge', category: 'collectible', animated: true, frames: 2, description: 'gym badge, shining' },
                { name: 'TM/HM', category: 'equipment', animated: false, frames: 1, description: 'technical machine disc' }
            ],
            ui: [
                { name: 'HP Bar', description: 'green/yellow/red health bar' },
                { name: 'Battle Menu', description: 'FIGHT BAG POKEMON RUN options' },
                { name: 'Dialogue Box', description: 'text box at bottom of screen' }
            ]
        }
    },

    // ==========================================
    // FIGHTING GAMES
    // ==========================================
    {
        id: 'street-fighter-ii',
        title: 'Street Fighter II',
        year: '1991',
        genres: ['Fighting', 'Arcade'],
        director: 'Capcom',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Arcade 16-bit', promptString: 'arcade fighting game, detailed 16-bit sprites, vibrant backgrounds' }
        ],
        gameAssets: {
            perspective: 'fighting',
            graphicsStyle: '16-bit',
            resolution: '64x64',
            colorPalette: 'CPS-1 arcade',
            characters: [
                {
                    name: 'Ryu',
                    role: 'player',
                    directions: 2, // facing left or right
                    actions: [
                        { action: 'idle', frames: 6, description: 'fighting stance, white gi, fists up, breathing bob' },
                        { action: 'walk_forward', frames: 6, description: 'stepping forward, guard up' },
                        { action: 'walk_backward', frames: 6, description: 'stepping back defensively' },
                        { action: 'crouch', frames: 2, description: 'low crouch, one knee down' },
                        { action: 'jump_neutral', frames: 4, description: 'straight up jump, tucked' },
                        { action: 'jump_forward', frames: 4, description: 'forward arc jump' },
                        { action: 'jump_back', frames: 4, description: 'backward arc jump' },
                        { action: 'light_punch', frames: 3, description: 'quick jab, arm extends' },
                        { action: 'medium_punch', frames: 4, description: 'stronger straight punch' },
                        { action: 'heavy_punch', frames: 5, description: 'powerful hook, wind-up' },
                        { action: 'light_kick', frames: 3, description: 'quick snap kick' },
                        { action: 'medium_kick', frames: 4, description: 'side kick, good range' },
                        { action: 'heavy_kick', frames: 5, description: 'roundhouse, spinning' },
                        { action: 'crouch_punch', frames: 3, description: 'low punch from crouch' },
                        { action: 'crouch_kick', frames: 3, description: 'sweep kick from crouch' },
                        { action: 'jump_kick', frames: 3, description: 'aerial kick' },
                        { action: 'hadouken', frames: 8, description: 'hands together, blue fireball, cupped palms forward thrust' },
                        { action: 'shoryuken', frames: 10, description: 'rising dragon punch, leaping uppercut, fist raised high' },
                        { action: 'tatsumaki', frames: 12, description: 'spinning hurricane kick, horizontal rotation in air' },
                        { action: 'block_stand', frames: 2, description: 'standing block, arms up' },
                        { action: 'block_crouch', frames: 2, description: 'crouching block, low guard' },
                        { action: 'hit_light', frames: 3, description: 'slight recoil from light hit' },
                        { action: 'hit_heavy', frames: 5, description: 'big recoil from heavy hit' },
                        { action: 'knockdown', frames: 6, description: 'falling to ground, spinning' },
                        { action: 'get_up', frames: 4, description: 'rising from knockdown' },
                        { action: 'dizzy', frames: 8, description: 'wobbling, stars/birds around head' },
                        { action: 'victory', frames: 1, description: 'arms crossed, confident pose' },
                        { action: 'defeat', frames: 1, description: 'slumped on ground, exhausted' }
                    ]
                },
                {
                    name: 'M. Bison',
                    role: 'boss',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 6, description: 'arms crossed, cape billowing, floating slightly' },
                        { action: 'walk', frames: 6, description: 'slow menacing steps' },
                        { action: 'psycho_crusher', frames: 12, description: 'horizontal flying torpedo spin, purple energy' },
                        { action: 'scissor_kick', frames: 8, description: 'jumping flip kick combo' },
                        { action: 'head_stomp', frames: 8, description: 'diving stomp from above' },
                        { action: 'victory', frames: 1, description: 'laughing with arms spread' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Japan Stage', type: 'background', variants: 1, description: 'traditional dojo courtyard, wooden floor, spectators' },
                { name: 'China Stage', type: 'background', variants: 1, description: 'street market, bicycles, lanterns, crowd' },
                { name: 'USA Stage', type: 'background', variants: 1, description: 'air force base, jets, american flags' },
                { name: 'Fight Floor', type: 'floor', variants: 1, description: 'stage floor with shadows cast' }
            ],
            items: [
                { name: 'Hadouken', category: 'projectile', animated: true, frames: 4, description: 'blue spiraling energy ball' },
                { name: 'Sonic Boom', category: 'projectile', animated: true, frames: 4, description: 'yellow crescent wave' }
            ],
            effects: [
                { name: 'Hit Spark', frames: 4, description: 'impact flash when attack connects' },
                { name: 'Block Spark', frames: 3, description: 'smaller spark when blocked' },
                { name: 'Super Flash', frames: 6, description: 'screen flash for super moves' }
            ],
            ui: [
                { name: 'Health Bar', description: 'yellow bar draining to red' },
                { name: 'Timer', description: '99 second countdown' },
                { name: 'Round Counter', description: 'best of 3 indicators' },
                { name: 'KO Text', description: 'knockout announcement' },
                { name: 'VS Screen', description: 'character portraits face-off' }
            ]
        }
    },

    // ==========================================
    // FIRST-PERSON GAMES (sprites face camera)
    // ==========================================
    {
        id: 'doom',
        title: 'Doom',
        year: '1993',
        genres: ['FPS', 'Action', 'Horror'],
        director: 'id Software',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Doom Engine', promptString: 'Doom engine sprites, 8 rotations, dark sci-fi horror' }
        ],
        gameAssets: {
            perspective: 'first-person',
            graphicsStyle: '32-bit',
            resolution: '64x64',
            colorPalette: 'Doom palette',
            characters: [
                {
                    name: 'Doomguy HUD Face',
                    role: 'player',
                    directions: 1, // just the face in HUD
                    actions: [
                        { action: 'normal', frames: 3, description: 'status bar face, healthy, looking around' },
                        { action: 'hurt_slight', frames: 1, description: 'slightly damaged, small cuts' },
                        { action: 'hurt_moderate', frames: 1, description: 'bloody nose, grimacing' },
                        { action: 'hurt_severe', frames: 1, description: 'very bloody, desperate' },
                        { action: 'look_left', frames: 1, description: 'eyes glancing left' },
                        { action: 'look_right', frames: 1, description: 'eyes glancing right' },
                        { action: 'pickup_grin', frames: 1, description: 'evil grin, just got a weapon' },
                        { action: 'god_mode', frames: 1, description: 'golden invincible face' },
                        { action: 'dead', frames: 1, description: 'dead face, eyes closed, bloody' }
                    ]
                },
                {
                    name: 'Imp',
                    role: 'enemy',
                    directions: 8, // enemy faces all angles in doom
                    actions: [
                        { action: 'idle', frames: 2, description: 'brown spiky demon, claws ready' },
                        { action: 'walk', frames: 4, description: 'walking toward player' },
                        { action: 'attack_melee', frames: 3, description: 'claw slash attack' },
                        { action: 'attack_ranged', frames: 4, description: 'throwing fireball' },
                        { action: 'pain', frames: 1, description: 'flinching from damage' },
                        { action: 'death', frames: 5, description: 'collapsing death' },
                        { action: 'gib', frames: 5, description: 'explosive bloody death' }
                    ]
                },
                {
                    name: 'Cacodemon',
                    role: 'enemy',
                    directions: 8,
                    actions: [
                        { action: 'idle', frames: 2, description: 'red floating orb, single green eye' },
                        { action: 'attack', frames: 4, description: 'mouth opening, spitting lightning ball' },
                        { action: 'pain', frames: 1, description: 'eye squinting, hurt' },
                        { action: 'death', frames: 6, description: 'deflating and falling' }
                    ]
                },
                {
                    name: 'Cyberdemon',
                    role: 'boss',
                    directions: 8,
                    actions: [
                        { action: 'idle', frames: 2, description: 'massive demon, rocket launcher arm, hooves' },
                        { action: 'walk', frames: 4, description: 'heavy stomping walk' },
                        { action: 'attack', frames: 4, description: 'firing 3 rockets from arm' },
                        { action: 'death', frames: 10, description: 'massive explosion death' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Tech Base Wall', type: 'wall', variants: 8, description: 'gray metal panels, computer screens, lights' },
                { name: 'Tech Base Floor', type: 'floor', variants: 4, description: 'metal grating, industrial floor' },
                { name: 'Hell Stone', type: 'wall', variants: 6, description: 'red fleshy rock, demonic faces' },
                { name: 'Lava Floor', type: 'hazard', variants: 4, description: 'bubbling orange lava, damaging' },
                { name: 'Door', type: 'prop', variants: 4, description: 'sliding doors, keyed variants' },
                { name: 'Barrel', type: 'prop', variants: 1, description: 'explosive green toxic barrel' }
            ],
            items: [
                { name: 'Shotgun', category: 'weapon', animated: false, frames: 1, description: 'pickup sprite, pump shotgun on ground' },
                { name: 'Chaingun', category: 'weapon', animated: false, frames: 1, description: 'rotating barrel minigun pickup' },
                { name: 'Rocket Launcher', category: 'weapon', animated: false, frames: 1, description: 'green tube launcher pickup' },
                { name: 'BFG 9000', category: 'weapon', animated: true, frames: 2, description: 'big green plasma weapon, glowing' },
                { name: 'Health Bonus', category: 'consumable', animated: true, frames: 2, description: 'blue vial, +1 health' },
                { name: 'Medikit', category: 'consumable', animated: false, frames: 1, description: 'white box with cross, +25 health' },
                { name: 'Blue Keycard', category: 'collectible', animated: true, frames: 2, description: 'blue skull key, floating' },
                { name: 'Red Keycard', category: 'collectible', animated: true, frames: 2, description: 'red skull key' },
                { name: 'Yellow Keycard', category: 'collectible', animated: true, frames: 2, description: 'yellow skull key' }
            ],
            effects: [
                { name: 'Rocket Explosion', frames: 6, description: 'fiery explosion with debris' },
                { name: 'Plasma Ball', frames: 2, description: 'blue/green plasma projectile' },
                { name: 'Blood Splat', frames: 4, description: 'red blood spray on hit' },
                { name: 'Teleport Flash', frames: 6, description: 'green teleporter effect' }
            ],
            ui: [
                { name: 'Status Bar', description: 'bottom bar with health, armor, ammo, face, arms' },
                { name: 'Ammo Counter', description: 'current and max ammo' },
                { name: 'Weapon HUD', description: 'weapon slots 1-7 indicators' }
            ]
        }
    },

    // ==========================================
    // FAST SIDE-SCROLLER (Sonic style)
    // ==========================================
    {
        id: 'sonic-the-hedgehog',
        title: 'Sonic the Hedgehog',
        year: '1991',
        genres: ['Platformer', 'Fast Action'],
        director: 'Sega',
        actors: [],
        type: 'game',
        styles: [
            { name: '16-bit Genesis', promptString: 'Sega Genesis 16-bit, vibrant colors, speed blur effects' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '16-bit',
            resolution: '32x32',
            colorPalette: 'Genesis palette',
            characters: [
                {
                    name: 'Sonic',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 4, description: 'blue hedgehog tapping foot impatiently, looking at camera' },
                        { action: 'walk', frames: 8, description: 'walking cycle, arms swinging' },
                        { action: 'run', frames: 4, description: 'running fast, legs spinning blur' },
                        { action: 'spin_dash', frames: 4, description: 'crouching, spinning in place, charging' },
                        { action: 'ball', frames: 8, description: 'curled into ball, rolling, spinning' },
                        { action: 'jump', frames: 1, description: 'jumping while in ball form' },
                        { action: 'spring_launch', frames: 4, description: 'launched high in air, arms spread' },
                        { action: 'skid', frames: 2, description: 'braking, dust cloud behind' },
                        { action: 'look_up', frames: 1, description: 'looking upward' },
                        { action: 'crouch', frames: 1, description: 'crouching low' }
                    ]
                },
                {
                    name: 'Dr. Robotnik',
                    role: 'boss',
                    directions: 2,
                    actions: [
                        { action: 'egg_mobile', frames: 2, description: 'sitting in hovering egg-shaped vehicle' },
                        { action: 'laugh', frames: 4, description: 'mustache bouncing, evil laugh' },
                        { action: 'angry', frames: 2, description: 'shaking fist, frustrated' },
                        { action: 'defeated', frames: 4, description: 'vehicle smoking, fleeing' }
                    ]
                },
                {
                    name: 'Motobug',
                    role: 'enemy',
                    directions: 2,
                    actions: [
                        { action: 'roll', frames: 4, description: 'ladybug robot rolling on wheel' },
                        { action: 'destroyed', frames: 4, description: 'exploding, animal released' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Green Hill Zone', type: 'background', variants: 8, description: 'checkered hills, palm trees, blue sky, loop-de-loops' },
                { name: 'Grass Platform', type: 'platform', variants: 6, description: 'brown dirt with grass top' },
                { name: 'Loop', type: 'prop', variants: 4, description: 'circular loop track pieces' },
                { name: 'Water', type: 'hazard', variants: 4, description: 'blue water surface, drowning danger' },
                { name: 'Spikes', type: 'hazard', variants: 2, description: 'metal spikes, damage on touch' }
            ],
            items: [
                { name: 'Ring', category: 'collectible', animated: true, frames: 4, description: 'golden ring, spinning animation' },
                { name: 'Shield', category: 'powerup', animated: true, frames: 4, description: 'blue shield bubble' },
                { name: 'Speed Shoes', category: 'powerup', animated: true, frames: 2, description: 'white sneakers, speed boost' },
                { name: 'Invincibility', category: 'powerup', animated: true, frames: 4, description: 'sparkling stars, invincible' },
                { name: 'Spring', category: 'equipment', animated: true, frames: 2, description: 'red/yellow spring, bounces player high' }
            ],
            effects: [
                { name: 'Ring Loss', frames: 6, description: 'rings scattering outward on damage' },
                { name: 'Speed Blur', frames: 4, description: 'horizontal blur lines behind Sonic' },
                { name: 'Goal Post', frames: 4, description: 'spinning end-of-level signpost' }
            ],
            ui: [
                { name: 'Ring Counter', description: 'number of rings collected' },
                { name: 'Score', description: 'point total' },
                { name: 'Time', description: 'level timer counting up' },
                { name: 'Lives', description: 'Sonic face x number' }
            ]
        }
    },

    // ==========================================
    // ISOMETRIC RPG (Diablo style)
    // ==========================================
    {
        id: 'diablo',
        title: 'Diablo',
        year: '1996',
        genres: ['Action RPG', 'Isometric', 'Dark Fantasy'],
        director: 'Blizzard',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Gothic Isometric', promptString: 'dark gothic isometric, pre-rendered sprites, grim atmosphere' }
        ],
        gameAssets: {
            perspective: 'isometric',
            graphicsStyle: '32-bit',
            resolution: '64x64',
            colorPalette: 'dark gothic',
            characters: [
                {
                    name: 'Warrior',
                    role: 'player',
                    directions: 8,
                    actions: [
                        { action: 'idle', frames: 8, description: 'standing in armor, sword ready' },
                        { action: 'walk', frames: 8, description: 'walking in heavy armor' },
                        { action: 'run', frames: 8, description: 'running with shield' },
                        { action: 'attack_sword', frames: 6, description: 'overhead sword swing' },
                        { action: 'attack_spell', frames: 6, description: 'casting holy magic' },
                        { action: 'block', frames: 2, description: 'shield raised defensively' },
                        { action: 'hit', frames: 3, description: 'staggering from damage' },
                        { action: 'death', frames: 8, description: 'falling forward, dead' }
                    ]
                },
                {
                    name: 'Skeleton',
                    role: 'enemy',
                    directions: 8,
                    actions: [
                        { action: 'idle', frames: 4, description: 'rattling bones, hunched pose' },
                        { action: 'walk', frames: 8, description: 'shambling walk' },
                        { action: 'attack', frames: 6, description: 'sword slash' },
                        { action: 'death', frames: 6, description: 'bones collapsing into pile' }
                    ]
                },
                {
                    name: 'Diablo',
                    role: 'boss',
                    directions: 8,
                    actions: [
                        { action: 'idle', frames: 6, description: 'massive red demon lord, wings, horns' },
                        { action: 'walk', frames: 8, description: 'heavy demonic stride' },
                        { action: 'claw_attack', frames: 6, description: 'swiping with claws' },
                        { action: 'fire_breath', frames: 8, description: 'breathing hellfire' },
                        { action: 'lightning', frames: 4, description: 'summoning red lightning' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Dungeon Floor', type: 'floor', variants: 8, description: 'stone dungeon floor, blood stains, cracks' },
                { name: 'Dungeon Walls', type: 'wall', variants: 8, description: 'dark stone walls, torch sconces' },
                { name: 'Hell Tiles', type: 'floor', variants: 6, description: 'lava, brimstone, demonic symbols' },
                { name: 'Cathedral', type: 'floor', variants: 8, description: 'broken church tiles, fallen pillars' }
            ],
            items: [
                { name: 'Gold Pile', category: 'collectible', animated: true, frames: 2, description: 'glittering gold coins' },
                { name: 'Health Potion', category: 'consumable', animated: true, frames: 2, description: 'red potion bottle' },
                { name: 'Mana Potion', category: 'consumable', animated: true, frames: 2, description: 'blue potion bottle' },
                { name: 'Sword', category: 'weapon', animated: false, frames: 1, description: 'rusty to legendary swords' },
                { name: 'Armor', category: 'equipment', animated: false, frames: 1, description: 'plate armor on ground' }
            ],
            effects: [
                { name: 'Blood Splash', frames: 4, description: 'dark blood spray' },
                { name: 'Fire Bolt', frames: 4, description: 'orange fire projectile' },
                { name: 'Holy Light', frames: 6, description: 'golden healing glow' },
                { name: 'Resurrect', frames: 8, description: 'skeleton rising from ground' }
            ],
            ui: [
                { name: 'Health Orb', description: 'red orb showing health' },
                { name: 'Mana Orb', description: 'blue orb showing magic' },
                { name: 'Belt Slots', description: 'potion quick-use slots' },
                { name: 'Skill Icons', description: 'spell ability buttons' }
            ]
        }
    },

    // ==========================================
    // GOTHIC PLATFORMER (Castlevania style)
    // ==========================================
    {
        id: 'castlevania',
        title: 'Castlevania',
        year: '1986',
        genres: ['Platformer', 'Horror', 'Gothic'],
        director: 'Konami',
        actors: [],
        type: 'game',
        styles: [
            { name: 'NES Gothic', promptString: '8-bit gothic horror, dark castle, monster sprites' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Simon Belmont',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 1, description: 'standing with whip coiled' },
                        { action: 'walk', frames: 4, description: 'walking in leather armor' },
                        { action: 'crouch', frames: 1, description: 'kneeling low' },
                        { action: 'jump', frames: 1, description: 'jumping straight up, stiff' },
                        { action: 'whip', frames: 3, description: 'whip extending forward, snapping' },
                        { action: 'whip_crouch', frames: 3, description: 'crouching whip attack' },
                        { action: 'stairs_up', frames: 2, description: 'climbing stairs upward' },
                        { action: 'stairs_down', frames: 2, description: 'descending stairs' },
                        { action: 'throw', frames: 2, description: 'throwing sub-weapon' },
                        { action: 'damage', frames: 1, description: 'knocked back, arms spread' }
                    ]
                },
                {
                    name: 'Dracula',
                    role: 'boss',
                    directions: 2,
                    actions: [
                        { action: 'appear', frames: 4, description: 'materializing from cape swirl' },
                        { action: 'idle', frames: 2, description: 'cape flowing, menacing pose' },
                        { action: 'fireball', frames: 3, description: 'throwing triple fireballs' },
                        { action: 'teleport', frames: 4, description: 'dissolving into bats' },
                        { action: 'transform', frames: 6, description: 'transforming into demon form' }
                    ]
                },
                {
                    name: 'Zombie',
                    role: 'enemy',
                    directions: 2,
                    actions: [
                        { action: 'rise', frames: 4, description: 'emerging from ground' },
                        { action: 'walk', frames: 4, description: 'shambling forward, arms out' },
                        { action: 'death', frames: 3, description: 'falling apart' }
                    ]
                },
                {
                    name: 'Medusa Head',
                    role: 'enemy',
                    directions: 2,
                    actions: [
                        { action: 'fly', frames: 4, description: 'floating head with snake hair, sine wave motion' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Castle Brick', type: 'wall', variants: 6, description: 'gothic castle stone bricks, dark' },
                { name: 'Castle Floor', type: 'floor', variants: 4, description: 'stone floor, red carpet' },
                { name: 'Stairs', type: 'platform', variants: 4, description: 'diagonal staircase tiles' },
                { name: 'Windows', type: 'background', variants: 4, description: 'stained glass, moonlit' },
                { name: 'Candles', type: 'prop', variants: 2, description: 'wall-mounted candles, breakable' }
            ],
            items: [
                { name: 'Whip Upgrade', category: 'powerup', animated: true, frames: 2, description: 'chain whip, morning star' },
                { name: 'Heart', category: 'collectible', animated: true, frames: 2, description: 'small heart, sub-weapon ammo' },
                { name: 'Holy Water', category: 'weapon', animated: false, frames: 1, description: 'blue vial sub-weapon' },
                { name: 'Cross', category: 'weapon', animated: false, frames: 1, description: 'boomerang cross sub-weapon' },
                { name: 'Axe', category: 'weapon', animated: false, frames: 1, description: 'throwing axe sub-weapon' },
                { name: 'Meat', category: 'consumable', animated: false, frames: 1, description: 'health-restoring wall meat' }
            ],
            effects: [
                { name: 'Candle Break', frames: 4, description: 'candle breaking, item dropping' },
                { name: 'Holy Fire', frames: 6, description: 'blue holy water flame' },
                { name: 'Enemy Death', frames: 4, description: 'monster bursting into flames' }
            ],
            ui: [
                { name: 'Health Bar', description: 'red health bar' },
                { name: 'Hearts Counter', description: 'sub-weapon ammo' },
                { name: 'Sub-Weapon', description: 'current sub-weapon icon' },
                { name: 'Score', description: 'point counter' }
            ]
        }
    },

    // ==========================================
    // ACTION PLATFORMER (Mega Man style)
    // ==========================================
    {
        id: 'mega-man',
        title: 'Mega Man',
        year: '1987',
        genres: ['Platformer', 'Action', 'Sci-Fi'],
        director: 'Capcom',
        actors: [],
        type: 'game',
        styles: [
            { name: 'NES Robot', promptString: '8-bit sci-fi, blue robot hero, colorful robot masters' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Mega Man',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 2, description: 'blue robot standing, blinking' },
                        { action: 'walk', frames: 4, description: 'walking with arm cannon' },
                        { action: 'run', frames: 4, description: 'running animation' },
                        { action: 'jump', frames: 1, description: 'jumping, legs together' },
                        { action: 'shoot', frames: 2, description: 'firing arm cannon, muzzle flash' },
                        { action: 'shoot_walk', frames: 4, description: 'walking while shooting' },
                        { action: 'climb', frames: 4, description: 'climbing ladder' },
                        { action: 'slide', frames: 2, description: 'sliding under obstacles' },
                        { action: 'damage', frames: 1, description: 'flickering, knocked back' },
                        { action: 'teleport_in', frames: 4, description: 'beaming in from top of screen' }
                    ]
                },
                {
                    name: 'Met (Hard Hat)',
                    role: 'enemy',
                    directions: 2,
                    actions: [
                        { action: 'hide', frames: 1, description: 'hiding under hard hat, invincible' },
                        { action: 'peek', frames: 2, description: 'popping up to shoot' },
                        { action: 'shoot', frames: 2, description: 'firing three bullets' }
                    ]
                },
                {
                    name: 'Robot Master',
                    role: 'boss',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 4, description: 'unique robot design, elemental theme' },
                        { action: 'attack', frames: 6, description: 'special weapon attack' },
                        { action: 'jump', frames: 2, description: 'boss jump pattern' },
                        { action: 'defeat', frames: 8, description: 'exploding into orbs' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Tech Stage', type: 'floor', variants: 8, description: 'metallic platforms, sci-fi' },
                { name: 'Spikes', type: 'hazard', variants: 2, description: 'instant-death spikes' },
                { name: 'Ladder', type: 'prop', variants: 2, description: 'climbable ladder' },
                { name: 'Conveyor', type: 'floor', variants: 4, description: 'moving conveyor belt' },
                { name: 'Disappearing Blocks', type: 'platform', variants: 4, description: 'blocks that appear/disappear' }
            ],
            items: [
                { name: 'Health Pellet', category: 'consumable', animated: false, frames: 1, description: 'small health restore' },
                { name: 'Health Large', category: 'consumable', animated: false, frames: 1, description: 'large health restore' },
                { name: 'Weapon Energy', category: 'consumable', animated: false, frames: 1, description: 'refills special weapon' },
                { name: 'Extra Life', category: 'powerup', animated: true, frames: 2, description: 'Mega Man head 1-up' },
                { name: 'E-Tank', category: 'consumable', animated: false, frames: 1, description: 'stores full health refill' }
            ],
            effects: [
                { name: 'Buster Shot', frames: 2, description: 'yellow energy pellet projectile' },
                { name: 'Explosion', frames: 6, description: 'robot explosion, debris' },
                { name: 'Teleport', frames: 6, description: 'beam of light up/down' }
            ],
            ui: [
                { name: 'Health Bar', description: 'vertical health bar' },
                { name: 'Weapon Menu', description: 'pause menu weapon select' },
                { name: 'Lives', description: 'remaining lives counter' }
            ]
        }
    },

    // ==========================================
    // MAZE GAME (Pac-Man style)
    // ==========================================
    {
        id: 'pac-man',
        title: 'Pac-Man',
        year: '1980',
        genres: ['Arcade', 'Maze', 'Classic'],
        director: 'Namco',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Arcade Classic', promptString: 'classic arcade, simple shapes, neon on black' }
        ],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'arcade neon',
            characters: [
                {
                    name: 'Pac-Man',
                    role: 'player',
                    directions: 4,
                    actions: [
                        { action: 'chomp', frames: 3, description: 'yellow circle, mouth opening and closing' },
                        { action: 'death', frames: 8, description: 'shrinking and disappearing' }
                    ]
                },
                {
                    name: 'Blinky',
                    role: 'enemy',
                    directions: 4,
                    actions: [
                        { action: 'chase', frames: 2, description: 'red ghost, eyes looking at Pac-Man' },
                        { action: 'frightened', frames: 2, description: 'blue ghost, wavy mouth' },
                        { action: 'eyes', frames: 1, description: 'just eyes, returning to base' }
                    ]
                },
                {
                    name: 'Pinky',
                    role: 'enemy',
                    directions: 4,
                    actions: [
                        { action: 'chase', frames: 2, description: 'pink ghost, ambush behavior' },
                        { action: 'frightened', frames: 2, description: 'blue ghost' },
                        { action: 'eyes', frames: 1, description: 'eyes only' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Maze Walls', type: 'wall', variants: 8, description: 'blue neon maze walls, corners, straights' },
                { name: 'Maze Floor', type: 'floor', variants: 2, description: 'black floor, dot positions' },
                { name: 'Ghost House', type: 'prop', variants: 4, description: 'center ghost spawn area' }
            ],
            items: [
                { name: 'Dot', category: 'collectible', animated: false, frames: 1, description: 'small white dot, 10 points' },
                { name: 'Power Pellet', category: 'powerup', animated: true, frames: 2, description: 'large flashing dot, eat ghosts' },
                { name: 'Cherry', category: 'collectible', animated: false, frames: 1, description: 'bonus fruit, 100 points' },
                { name: 'Strawberry', category: 'collectible', animated: false, frames: 1, description: 'bonus fruit, 300 points' }
            ],
            effects: [
                { name: 'Ghost Eaten', frames: 4, description: 'point value appearing (200, 400, 800, 1600)' }
            ],
            ui: [
                { name: 'Score', description: 'point counter at top' },
                { name: 'High Score', description: 'best score display' },
                { name: 'Lives', description: 'remaining Pac-Man icons' },
                { name: 'Fruit Display', description: 'collected bonus fruits' }
            ]
        }
    },

    // ==========================================
    // PUZZLE GAME (Tetris style)
    // ==========================================
    {
        id: 'tetris',
        title: 'Tetris',
        year: '1984',
        genres: ['Puzzle', 'Classic'],
        director: 'Alexey Pajitnov',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Game Boy Classic', promptString: 'Game Boy green palette, simple blocks, minimal' }
        ],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '8-bit',
            resolution: '8x8',
            colorPalette: 'Game Boy green',
            characters: [], // Tetris has no characters
            tilesets: [
                { name: 'Playfield Border', type: 'wall', variants: 4, description: 'border around 10x20 grid' },
                { name: 'Block Grid', type: 'background', variants: 1, description: 'subtle grid pattern' }
            ],
            items: [
                { name: 'I-Block', category: 'collectible', animated: false, frames: 1, description: 'cyan 4-long straight piece' },
                { name: 'O-Block', category: 'collectible', animated: false, frames: 1, description: 'yellow 2x2 square piece' },
                { name: 'T-Block', category: 'collectible', animated: false, frames: 1, description: 'purple T-shaped piece' },
                { name: 'S-Block', category: 'collectible', animated: false, frames: 1, description: 'green S-zigzag piece' },
                { name: 'Z-Block', category: 'collectible', animated: false, frames: 1, description: 'red Z-zigzag piece' },
                { name: 'J-Block', category: 'collectible', animated: false, frames: 1, description: 'blue J-shaped piece' },
                { name: 'L-Block', category: 'collectible', animated: false, frames: 1, description: 'orange L-shaped piece' }
            ],
            effects: [
                { name: 'Line Clear', frames: 4, description: 'row flashing then disappearing' },
                { name: 'Tetris Clear', frames: 6, description: 'four rows clearing at once, flashy' }
            ],
            ui: [
                { name: 'Score', description: 'point total' },
                { name: 'Level', description: 'current level indicator' },
                { name: 'Lines', description: 'lines cleared count' },
                { name: 'Next Piece', description: 'preview of upcoming piece' }
            ]
        }
    },

    // ==========================================
    // CITY BUILDER (SimCity style)
    // ==========================================
    {
        id: 'simcity',
        title: 'SimCity',
        year: '1989',
        genres: ['Simulation', 'City Builder', 'Strategy'],
        director: 'Maxis',
        actors: [],
        type: 'game',
        styles: [
            { name: 'SNES Isometric', promptString: '16-bit isometric, tiny buildings, city management' }
        ],
        gameAssets: {
            perspective: 'isometric',
            graphicsStyle: '16-bit',
            resolution: '32x32',
            colorPalette: 'SNES palette',
            characters: [], // SimCity has no character sprites
            tilesets: [
                { name: 'Grass', type: 'floor', variants: 4, description: 'green grass, undeveloped land' },
                { name: 'Roads', type: 'floor', variants: 16, description: 'gray roads, intersections, curves' },
                { name: 'Water', type: 'floor', variants: 4, description: 'blue water, coastline' },
                { name: 'Residential', type: 'prop', variants: 8, description: 'houses of various sizes and density' },
                { name: 'Commercial', type: 'prop', variants: 8, description: 'stores, offices, varying heights' },
                { name: 'Industrial', type: 'prop', variants: 6, description: 'factories, smokestacks, warehouses' },
                { name: 'Power Plant', type: 'prop', variants: 2, description: 'coal or nuclear power buildings' },
                { name: 'Police Station', type: 'prop', variants: 1, description: 'public safety building' },
                { name: 'Fire Station', type: 'prop', variants: 1, description: 'fire department building' },
                { name: 'Park', type: 'decoration', variants: 4, description: 'trees and park spaces' }
            ],
            items: [
                { name: 'Zone Marker', category: 'equipment', animated: true, frames: 2, description: 'R/C/I zone indicators' },
                { name: 'Bulldozer Cursor', category: 'equipment', animated: true, frames: 2, description: 'demolition cursor' }
            ],
            effects: [
                { name: 'Construction', frames: 4, description: 'building appearing, dust' },
                { name: 'Fire', frames: 4, description: 'building on fire, flames' },
                { name: 'Disaster', frames: 6, description: 'tornado, earthquake effects' }
            ],
            ui: [
                { name: 'Funds', description: 'money available' },
                { name: 'Date', description: 'current year and month' },
                { name: 'Minimap', description: 'overview of city' },
                { name: 'Demand Bars', description: 'R/C/I demand indicators' }
            ]
        }
    },

    // ==========================================
    // HAND-DRAWN STYLE (Cuphead style)
    // ==========================================
    {
        id: 'cuphead',
        title: 'Cuphead',
        year: '2017',
        genres: ['Run and Gun', 'Platformer', 'Boss Rush'],
        director: 'Studio MDHR',
        actors: [],
        type: 'game',
        styles: [
            { name: '1930s Cartoon', promptString: '1930s rubber hose animation, hand-drawn, watercolor backgrounds, vintage cartoon' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: 'hand-drawn',
            resolution: '128x128',
            colorPalette: 'vintage sepia',
            characters: [
                {
                    name: 'Cuphead',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 12, description: 'cup character, straw bending, gloved hands, bouncing slightly' },
                        { action: 'run', frames: 8, description: 'running with stretched limbs, rubber hose style' },
                        { action: 'jump', frames: 4, description: 'jumping with squash and stretch' },
                        { action: 'duck', frames: 2, description: 'crouching low' },
                        { action: 'shoot', frames: 4, description: 'finger gun pose, shooting stars' },
                        { action: 'parry', frames: 4, description: 'pink slap motion' },
                        { action: 'dash', frames: 4, description: 'quick dash with ghosting effect' },
                        { action: 'death', frames: 8, description: 'ghost leaving body, angel wings' }
                    ]
                },
                {
                    name: 'King Dice',
                    role: 'boss',
                    directions: 1,
                    actions: [
                        { action: 'idle', frames: 8, description: 'dice head villain, tuxedo, menacing grin' },
                        { action: 'attack', frames: 6, description: 'cards flying, magical attack' },
                        { action: 'taunt', frames: 8, description: 'pointing and laughing' }
                    ]
                },
                {
                    name: 'Flower Boss',
                    role: 'boss',
                    directions: 1,
                    actions: [
                        { action: 'idle', frames: 6, description: 'giant angry flower with face' },
                        { action: 'seed_spit', frames: 6, description: 'spitting seed projectiles' },
                        { action: 'vine_attack', frames: 8, description: 'vines emerging from ground' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Watercolor Background', type: 'background', variants: 4, description: 'painterly watercolor skies and landscapes' },
                { name: 'Platform', type: 'platform', variants: 6, description: 'cartoony platforms with bounce' },
                { name: 'Casino', type: 'background', variants: 4, description: 'art deco casino interior' }
            ],
            items: [
                { name: 'Coin', category: 'collectible', animated: true, frames: 8, description: 'spinning gold coin with face' },
                { name: 'Pink Object', category: 'powerup', animated: true, frames: 4, description: 'parry-able pink items' },
                { name: 'Heart', category: 'consumable', animated: true, frames: 4, description: 'heart health pickup' }
            ],
            effects: [
                { name: 'Shot Impact', frames: 4, description: 'star burst impact' },
                { name: 'Smoke Puff', frames: 6, description: 'vintage cartoon smoke ring' },
                { name: 'Finger Gun', frames: 4, description: 'bullet projectile, star-shaped' },
                { name: 'Parry Spark', frames: 4, description: 'pink spark effect' }
            ],
            ui: [
                { name: 'Health Cards', description: '3 HP shown as cards' },
                { name: 'Super Meter', description: '5 cards for special attack' },
                { name: 'Boss Health', description: 'progress bar for boss phases' }
            ]
        }
    },

    // ==========================================
    // METROIDVANIA (Hollow Knight style)
    // ==========================================
    {
        id: 'hollow-knight',
        title: 'Hollow Knight',
        year: '2017',
        genres: ['Metroidvania', 'Action', 'Indie'],
        director: 'Team Cherry',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Dark Bug World', promptString: 'hand-drawn insect world, melancholic atmosphere, detailed backgrounds' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: 'hand-drawn',
            resolution: '64x64',
            colorPalette: 'muted dark blues',
            characters: [
                {
                    name: 'The Knight',
                    role: 'player',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 4, description: 'small bug knight, horned mask, cape flowing' },
                        { action: 'walk', frames: 6, description: 'smooth walking animation' },
                        { action: 'run', frames: 6, description: 'faster movement' },
                        { action: 'jump', frames: 2, description: 'jumping with cape flutter' },
                        { action: 'double_jump', frames: 4, description: 'monarch wings double jump' },
                        { action: 'dash', frames: 4, description: 'shadowy dash through' },
                        { action: 'nail_slash', frames: 4, description: 'horizontal sword swing' },
                        { action: 'nail_up', frames: 4, description: 'upward slash' },
                        { action: 'nail_down', frames: 4, description: 'downward pogo attack' },
                        { action: 'focus', frames: 6, description: 'healing meditation, soul particles' },
                        { action: 'spell_cast', frames: 4, description: 'vengeful spirit projectile' },
                        { action: 'death', frames: 6, description: 'shade escaping, body falling' }
                    ]
                },
                {
                    name: 'Hornet',
                    role: 'boss',
                    directions: 2,
                    actions: [
                        { action: 'idle', frames: 4, description: 'spider-like warrior, red cloak, needle weapon' },
                        { action: 'dash', frames: 4, description: 'fast dash attack with needle' },
                        { action: 'throw', frames: 4, description: 'throwing needle on thread' },
                        { action: 'jump_attack', frames: 6, description: 'aerial dive attack' }
                    ]
                },
                {
                    name: 'Crawlid',
                    role: 'enemy',
                    directions: 2,
                    actions: [
                        { action: 'walk', frames: 4, description: 'simple crawling bug enemy' },
                        { action: 'death', frames: 3, description: 'bursting into particles' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Forgotten Crossroads', type: 'floor', variants: 8, description: 'rocky cave tiles, shells, fossils' },
                { name: 'Greenpath', type: 'floor', variants: 8, description: 'mossy tiles, leaves, vegetation' },
                { name: 'City of Tears', type: 'floor', variants: 8, description: 'blue city tiles, rain effects' },
                { name: 'Background Layer', type: 'background', variants: 6, description: 'parallax dark cavern backgrounds' }
            ],
            items: [
                { name: 'Geo', category: 'collectible', animated: true, frames: 4, description: 'pale ore currency, spinning' },
                { name: 'Grub', category: 'collectible', animated: true, frames: 4, description: 'trapped grub larva in jar' },
                { name: 'Mask Shard', category: 'collectible', animated: true, frames: 2, description: 'health upgrade fragment' },
                { name: 'Charm', category: 'equipment', animated: false, frames: 1, description: 'equippable ability items' }
            ],
            effects: [
                { name: 'Soul Particle', frames: 4, description: 'white soul energy floating' },
                { name: 'Slash Trail', frames: 3, description: 'white arc from nail attack' },
                { name: 'Shade', frames: 6, description: 'dark ghost enemy from death' }
            ],
            ui: [
                { name: 'Mask Health', description: 'white masks showing HP' },
                { name: 'Soul Meter', description: 'white orb for magic/healing' },
                { name: 'Geo Counter', description: 'currency display' }
            ]
        }
    },

    // ==========================================
    // RACING GAME (OutRun style)
    // ==========================================
    {
        id: 'outrun',
        title: 'OutRun',
        year: '1986',
        genres: ['Racing', 'Arcade'],
        director: 'Sega',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Arcade Racer', promptString: '16-bit arcade racing, sprite scaling, blue sky, palm trees' }
        ],
        gameAssets: {
            perspective: 'racing-behind',
            graphicsStyle: '16-bit',
            resolution: '64x64',
            colorPalette: 'vivid arcade',
            characters: [
                {
                    name: 'Ferrari Testarossa',
                    role: 'player',
                    directions: 1, // car faces away from camera
                    actions: [
                        { action: 'straight', frames: 1, description: 'red convertible driving straight, passengers visible' },
                        { action: 'turn_left', frames: 3, description: 'car banking left' },
                        { action: 'turn_right', frames: 3, description: 'car banking right' },
                        { action: 'crash', frames: 6, description: 'car flipping, passengers flying out' }
                    ]
                },
                {
                    name: 'Traffic Car',
                    role: 'enemy',
                    directions: 1,
                    actions: [
                        { action: 'drive', frames: 1, description: 'various colored traffic cars to dodge' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Beach Road', type: 'floor', variants: 4, description: 'striped road, palm trees, ocean' },
                { name: 'Desert Road', type: 'floor', variants: 4, description: 'desert highway, cacti, rocks' },
                { name: 'Forest Road', type: 'floor', variants: 4, description: 'tree-lined road, shadows' },
                { name: 'City Road', type: 'floor', variants: 4, description: 'urban highway, buildings' }
            ],
            items: [
                { name: 'Road Signs', category: 'equipment', animated: false, frames: 1, description: 'roadside markers, distance signs' },
                { name: 'Palm Tree', category: 'equipment', animated: true, frames: 2, description: 'roadside palm trees, scaling sprites' },
                { name: 'Billboard', category: 'equipment', animated: false, frames: 1, description: 'advertising signs' }
            ],
            effects: [
                { name: 'Tire Screech', frames: 4, description: 'smoke from tires on hard turn' },
                { name: 'Dust Cloud', frames: 4, description: 'dust when going off road' }
            ],
            ui: [
                { name: 'Speedometer', description: 'KM/H speed display' },
                { name: 'Timer', description: 'countdown time remaining' },
                { name: 'Score', description: 'distance/points' },
                { name: 'Gear', description: 'LOW/HIGH gear indicator' }
            ]
        }
    },

    // JRPG - Final Fantasy
    {
        id: 'final-fantasy',
        title: 'Final Fantasy VI',
        year: '1994',
        genres: ['JRPG', 'Turn-Based'],
        director: 'Square',
        actors: [],
        type: 'game',
        styles: [{ name: 'SNES JRPG', promptString: '16-bit JRPG, detailed character sprites, fantasy world' }],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '16-bit',
            resolution: '32x32',
            colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Terra', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'green-haired mage standing' },
                        { action: 'walk', frames: 4, description: 'walking animation' },
                        { action: 'battle_idle', frames: 4, description: 'fighting stance, side view' },
                        { action: 'attack', frames: 4, description: 'sword swing' },
                        { action: 'cast_spell', frames: 6, description: 'magic casting, arms raised' },
                        { action: 'victory', frames: 4, description: 'celebration pose' }
                    ]
                }
            ],
            tilesets: [
                { name: 'World Map', type: 'floor', variants: 16, description: 'overworld tiles, forests, mountains, water' },
                { name: 'Town', type: 'floor', variants: 12, description: 'cobblestone, buildings, shops' }
            ],
            items: [
                { name: 'Potion', category: 'consumable', animated: false, frames: 1, description: 'healing potion' },
                { name: 'Sword', category: 'weapon', animated: false, frames: 1, description: 'various swords' }
            ],
            ui: [{ name: 'Battle Menu', description: 'ATB gauge, HP/MP bars, command menu' }]
        }
    },

    // Run and Gun - Metal Slug
    {
        id: 'metal-slug',
        title: 'Metal Slug',
        year: '1996',
        genres: ['Run and Gun', 'Arcade'],
        director: 'SNK',
        actors: [],
        type: 'game',
        styles: [{ name: 'Neo Geo', promptString: 'Neo Geo arcade, highly detailed sprites, military comedy' }],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '32-bit',
            resolution: '64x64',
            colorPalette: 'Neo Geo',
            characters: [
                {
                    name: 'Marco', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'soldier standing, breathing' },
                        { action: 'run', frames: 8, description: 'running with gun' },
                        { action: 'shoot', frames: 3, description: 'firing pistol/machine gun' },
                        { action: 'crouch', frames: 2, description: 'ducking low' },
                        { action: 'jump', frames: 4, description: 'jumping, legs spread' },
                        { action: 'knife', frames: 4, description: 'melee knife attack' },
                        { action: 'grenade', frames: 4, description: 'throwing grenade' },
                        { action: 'death', frames: 6, description: 'comical death animation' }
                    ]
                },
                {
                    name: 'Rebel Soldier', role: 'enemy', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'enemy soldier standing' },
                        { action: 'shoot', frames: 3, description: 'firing rifle' },
                        { action: 'death', frames: 4, description: 'dramatic death' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Military Base', type: 'floor', variants: 8, description: 'industrial military environment' }
            ],
            items: [
                { name: 'Heavy Machine Gun', category: 'weapon', animated: true, frames: 2, description: 'H letter powerup' },
                { name: 'Shotgun', category: 'weapon', animated: true, frames: 2, description: 'S letter powerup' }
            ],
            effects: [{ name: 'Explosion', frames: 8, description: 'detailed fiery explosion' }],
            ui: [{ name: 'Ammo Counter', description: 'weapon ammo display' }]
        }
    },

    // Classic Shooter - Contra
    {
        id: 'contra',
        title: 'Contra',
        year: '1987',
        genres: ['Run and Gun', 'Action'],
        director: 'Konami',
        actors: [],
        type: 'game',
        styles: [{ name: 'NES Action', promptString: '8-bit military action, alien invasion, tough commandos' }],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Bill Rizer', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'muscular commando, shirtless' },
                        { action: 'run', frames: 4, description: 'running with rifle' },
                        { action: 'jump', frames: 1, description: 'somersault jump' },
                        { action: 'shoot_forward', frames: 2, description: 'shooting straight' },
                        { action: 'shoot_up', frames: 2, description: 'aiming upward' },
                        { action: 'shoot_diagonal', frames: 2, description: 'aiming 45 degrees' },
                        { action: 'prone', frames: 1, description: 'lying flat, shooting' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Jungle', type: 'floor', variants: 6, description: 'jungle platforms, vines' },
                { name: 'Base', type: 'wall', variants: 6, description: 'alien base tiles' }
            ],
            items: [
                { name: 'Spread Gun', category: 'powerup', animated: true, frames: 2, description: 'S powerup capsule' },
                { name: 'Laser', category: 'powerup', animated: true, frames: 2, description: 'L powerup' }
            ],
            ui: [{ name: 'Lives', description: 'remaining lives counter' }]
        }
    },

    // Survival Horror - Resident Evil
    {
        id: 'resident-evil',
        title: 'Resident Evil',
        year: '1996',
        genres: ['Survival Horror', 'Action'],
        director: 'Capcom',
        actors: [],
        type: 'game',
        styles: [{ name: 'PS1 Horror', promptString: 'PS1 pre-rendered backgrounds, low-poly 3D characters, horror atmosphere' }],
        gameAssets: {
            perspective: 'isometric',
            graphicsStyle: 'low-poly-3d',
            resolution: '64x64',
            colorPalette: 'dark muted',
            characters: [
                {
                    name: 'Jill Valentine', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'STARS member standing alert' },
                        { action: 'walk', frames: 8, description: 'cautious walking' },
                        { action: 'run', frames: 6, description: 'running' },
                        { action: 'aim', frames: 2, description: 'aiming handgun' },
                        { action: 'shoot', frames: 3, description: 'firing weapon' },
                        { action: 'damage', frames: 2, description: 'getting hit, stagger' }
                    ]
                },
                {
                    name: 'Zombie', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'shambling zombie' },
                        { action: 'walk', frames: 8, description: 'slow zombie walk' },
                        { action: 'grab', frames: 4, description: 'grabbing attack' },
                        { action: 'death', frames: 6, description: 'collapsing' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Mansion', type: 'floor', variants: 8, description: 'creepy mansion interior' }
            ],
            items: [
                { name: 'First Aid Spray', category: 'consumable', animated: false, frames: 1, description: 'healing item' },
                { name: 'Handgun Ammo', category: 'consumable', animated: false, frames: 1, description: 'ammunition box' }
            ],
            ui: [{ name: 'Health Status', description: 'ECG heartbeat, FINE/CAUTION/DANGER' }]
        }
    },

    // RTS - StarCraft
    {
        id: 'starcraft',
        title: 'StarCraft',
        year: '1998',
        genres: ['RTS', 'Strategy', 'Sci-Fi'],
        director: 'Blizzard',
        actors: [],
        type: 'game',
        styles: [{ name: 'Blizzard RTS', promptString: 'isometric sci-fi RTS, three distinct races, detailed unit sprites' }],
        gameAssets: {
            perspective: 'isometric',
            graphicsStyle: '32-bit',
            resolution: '32x32',
            colorPalette: 'sci-fi',
            characters: [
                {
                    name: 'Marine', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'power armor soldier' },
                        { action: 'walk', frames: 8, description: 'marching' },
                        { action: 'attack', frames: 4, description: 'firing gauss rifle' },
                        { action: 'death', frames: 6, description: 'falling dead' }
                    ]
                },
                {
                    name: 'Zergling', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'alien dog creature' },
                        { action: 'run', frames: 6, description: 'fast scuttling' },
                        { action: 'attack', frames: 4, description: 'claw swipe' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Space Platform', type: 'floor', variants: 8, description: 'metal sci-fi tiles' },
                { name: 'Zerg Creep', type: 'floor', variants: 4, description: 'organic alien ground' }
            ],
            items: [
                { name: 'Minerals', category: 'collectible', animated: true, frames: 2, description: 'blue crystal resource' },
                { name: 'Vespene Geyser', category: 'collectible', animated: true, frames: 4, description: 'green gas' }
            ],
            ui: [{ name: 'Minimap', description: 'tactical map view' }]
        }
    },

    // Rhythm - DDR
    {
        id: 'ddr',
        title: 'Dance Dance Revolution',
        year: '1998',
        genres: ['Rhythm', 'Music', 'Arcade'],
        director: 'Konami',
        actors: [],
        type: 'game',
        styles: [{ name: 'Arcade Rhythm', promptString: 'colorful arcade, neon arrows, dance energy' }],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '32-bit',
            resolution: '64x64',
            colorPalette: 'neon vibrant',
            characters: [
                {
                    name: 'Dancer', role: 'player', directions: 1, actions: [
                        { action: 'dance', frames: 8, description: 'dancing to beat' },
                        { action: 'perfect', frames: 4, description: 'celebration move' },
                        { action: 'miss', frames: 2, description: 'stumble' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Dance Stage', type: 'background', variants: 4, description: 'colorful stage lighting' }
            ],
            items: [
                { name: 'Arrow Up', category: 'collectible', animated: true, frames: 4, description: 'scrolling up arrow' },
                { name: 'Arrow Down', category: 'collectible', animated: true, frames: 4, description: 'scrolling down arrow' },
                { name: 'Arrow Left', category: 'collectible', animated: true, frames: 4, description: 'scrolling left arrow' },
                { name: 'Arrow Right', category: 'collectible', animated: true, frames: 4, description: 'scrolling right arrow' }
            ],
            effects: [
                { name: 'Perfect', frames: 4, description: 'rainbow burst effect' },
                { name: 'Good', frames: 3, description: 'yellow flash' }
            ],
            ui: [{ name: 'Combo Counter', description: 'hit streak display' }]
        }
    },

    // Sports - Tony Hawk
    {
        id: 'tony-hawk',
        title: "Tony Hawk's Pro Skater",
        year: '1999',
        genres: ['Sports', 'Skateboarding'],
        director: 'Neversoft',
        actors: [],
        type: 'game',
        styles: [{ name: 'PS1 Skate', promptString: 'late 90s skateboarding, urban environments, trick-focused' }],
        gameAssets: {
            perspective: 'third-person',
            graphicsStyle: 'low-poly-3d',
            resolution: '64x64',
            colorPalette: 'urban',
            characters: [
                {
                    name: 'Skater', role: 'player', directions: 8, actions: [
                        { action: 'push', frames: 6, description: 'pushing on skateboard' },
                        { action: 'ollie', frames: 4, description: 'jumping with board' },
                        { action: 'kickflip', frames: 6, description: 'board spinning under feet' },
                        { action: 'grind', frames: 4, description: 'grinding on rail' },
                        { action: 'manual', frames: 2, description: 'balancing on two wheels' },
                        { action: 'bail', frames: 6, description: 'crash and fall' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Skatepark', type: 'floor', variants: 8, description: 'concrete ramps, rails, halfpipes' },
                { name: 'Street', type: 'floor', variants: 6, description: 'urban environment, stairs, benches' }
            ],
            items: [
                { name: 'S-K-A-T-E Letter', category: 'collectible', animated: true, frames: 4, description: 'floating letter pickup' },
                { name: 'Stat Point', category: 'powerup', animated: true, frames: 4, description: 'upgrade pickup' }
            ],
            ui: [{ name: 'Trick List', description: 'current combo display' }]
        }
    },

    // Fighting - Mortal Kombat
    {
        id: 'mortal-kombat',
        title: 'Mortal Kombat',
        year: '1992',
        genres: ['Fighting', 'Arcade'],
        director: 'Midway',
        actors: [],
        type: 'game',
        styles: [{ name: 'Digitized Fighters', promptString: 'digitized sprites, dark martial arts, blood and gore' }],
        gameAssets: {
            perspective: 'fighting',
            graphicsStyle: '32-bit',
            resolution: '64x64',
            colorPalette: 'dark gritty',
            characters: [
                {
                    name: 'Scorpion', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'yellow ninja stance' },
                        { action: 'walk', frames: 6, description: 'walking forward' },
                        { action: 'punch', frames: 4, description: 'punching' },
                        { action: 'kick', frames: 4, description: 'high kick' },
                        { action: 'spear', frames: 6, description: 'throwing spear rope, GET OVER HERE' },
                        { action: 'teleport', frames: 4, description: 'hellfire teleport' },
                        { action: 'fatality', frames: 12, description: 'fire breath skull' }
                    ]
                },
                {
                    name: 'Sub-Zero', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'blue ninja stance' },
                        { action: 'ice_ball', frames: 6, description: 'throwing freezing projectile' },
                        { action: 'slide', frames: 4, description: 'ice slide kick' }
                    ]
                }
            ],
            tilesets: [
                { name: 'The Pit', type: 'background', variants: 1, description: 'bridge over spikes, moon' }
            ],
            items: [],
            effects: [
                { name: 'Blood Splash', frames: 4, description: 'red blood spray' },
                { name: 'Freeze', frames: 4, description: 'ice encasing opponent' }
            ],
            ui: [{ name: 'Health Bar', description: 'fighter health bars' }]
        }
    },

    // Classic Arcade - Space Invaders
    {
        id: 'space-invaders',
        title: 'Space Invaders',
        year: '1978',
        genres: ['Shooter', 'Arcade', 'Classic'],
        director: 'Taito',
        actors: [],
        type: 'game',
        styles: [{ name: 'Arcade Pioneer', promptString: 'earliest arcade, monochrome sprites, simple but iconic' }],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '8-bit',
            resolution: '8x8',
            colorPalette: 'monochrome green',
            characters: [
                {
                    name: 'Cannon', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'player cannon at bottom' },
                        { action: 'shoot', frames: 2, description: 'firing upward' },
                        { action: 'death', frames: 4, description: 'explosion' }
                    ]
                },
                {
                    name: 'Invader Type A', role: 'enemy', directions: 1, actions: [
                        { action: 'march', frames: 2, description: 'squid invader, legs alternating' }
                    ]
                },
                {
                    name: 'Invader Type B', role: 'enemy', directions: 1, actions: [
                        { action: 'march', frames: 2, description: 'crab invader, claws moving' }
                    ]
                },
                {
                    name: 'UFO', role: 'boss', directions: 1, actions: [
                        { action: 'fly', frames: 2, description: 'mystery ship crossing top' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Shield', type: 'prop', variants: 4, description: 'destructible bunker shields' }
            ],
            items: [],
            effects: [{ name: 'Invader Death', frames: 4, description: 'explosion sprite' }],
            ui: [{ name: 'Score', description: 'point counter' }]
        }
    },

    // Classic Arcade - Frogger
    {
        id: 'frogger',
        title: 'Frogger',
        year: '1981',
        genres: ['Arcade', 'Action', 'Classic'],
        director: 'Konami',
        actors: [],
        type: 'game',
        styles: [{ name: 'Arcade Classic', promptString: 'early arcade, simple colorful sprites, road crossing' }],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            colorPalette: 'arcade',
            characters: [
                {
                    name: 'Frog', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 1, description: 'green frog sitting' },
                        { action: 'hop', frames: 2, description: 'jumping forward' },
                        { action: 'death', frames: 4, description: 'squished or drowned' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Road', type: 'floor', variants: 4, description: 'highway lanes' },
                { name: 'River', type: 'hazard', variants: 4, description: 'water lanes' },
                { name: 'Safe Zone', type: 'floor', variants: 2, description: 'grass median' }
            ],
            items: [
                { name: 'Log', category: 'equipment', animated: true, frames: 2, description: 'floating log to ride' },
                { name: 'Turtle', category: 'equipment', animated: true, frames: 4, description: 'swimming turtle platform' },
                { name: 'Car', category: 'equipment', animated: true, frames: 2, description: 'traffic car hazard' },
                { name: 'Truck', category: 'equipment', animated: true, frames: 2, description: 'long truck hazard' }
            ],
            ui: [{ name: 'Lives', description: 'remaining frogs' }]
        }
    },

    // Donkey Kong
    {
        id: 'donkey-kong', title: 'Donkey Kong', year: '1981', genres: ['Arcade', 'Platformer'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Arcade Classic', promptString: 'early arcade, climbing platformer, barrels and ladders' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade',
            characters: [
                {
                    name: 'Jumpman', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'red shirt, blue overalls, early Mario' },
                        { action: 'walk', frames: 2, description: 'walking on girders' },
                        { action: 'jump', frames: 1, description: 'jumping over barrels' },
                        { action: 'climb', frames: 2, description: 'climbing ladder' }
                    ]
                },
                {
                    name: 'Donkey Kong', role: 'boss', directions: 1, actions: [
                        { action: 'idle', frames: 2, description: 'giant ape at top' },
                        { action: 'throw_barrel', frames: 4, description: 'throwing barrel' }
                    ]
                }
            ],
            tilesets: [{ name: 'Girders', type: 'platform', variants: 4, description: 'red construction girders' }],
            items: [{ name: 'Barrel', category: 'equipment', animated: true, frames: 4, description: 'rolling barrel hazard' }],
            ui: [{ name: 'Score', description: 'point display' }]
        }
    },

    // Galaga
    {
        id: 'galaga', title: 'Galaga', year: '1981', genres: ['Shooter', 'Arcade'], director: 'Namco', actors: [], type: 'game',
        styles: [{ name: 'Space Shooter', promptString: 'fixed shooter arcade, colorful aliens, space background' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade space',
            characters: [
                {
                    name: 'Fighter', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'white spaceship at bottom' },
                        { action: 'shoot', frames: 2, description: 'firing upward' },
                        { action: 'captured', frames: 4, description: 'being abducted by boss' }
                    ]
                },
                {
                    name: 'Galaga Bee', role: 'enemy', directions: 1, actions: [
                        { action: 'fly', frames: 2, description: 'bee-shaped alien, wings flapping' },
                        { action: 'dive', frames: 4, description: 'diving attack pattern' }
                    ]
                },
                {
                    name: 'Boss Galaga', role: 'boss', directions: 1, actions: [
                        { action: 'fly', frames: 2, description: 'large green boss alien' },
                        { action: 'beam', frames: 4, description: 'tractor beam capture' }
                    ]
                }
            ],
            tilesets: [{ name: 'Starfield', type: 'background', variants: 1, description: 'scrolling star background' }],
            items: [],
            effects: [{ name: 'Explosion', frames: 4, description: 'enemy explosion' }],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Asteroids
    {
        id: 'asteroids', title: 'Asteroids', year: '1979', genres: ['Shooter', 'Arcade'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Vector Graphics', promptString: 'vector line art, white on black, geometric shapes' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'vector white',
            characters: [
                {
                    name: 'Ship', role: 'player', directions: 16, actions: [
                        { action: 'idle', frames: 1, description: 'triangular spaceship' },
                        { action: 'thrust', frames: 2, description: 'engine flame visible' },
                        { action: 'hyperspace', frames: 4, description: 'disappearing/reappearing' }
                    ]
                }
            ],
            tilesets: [],
            items: [
                { name: 'Large Asteroid', category: 'equipment', animated: true, frames: 8, description: 'large rotating rock' },
                { name: 'Medium Asteroid', category: 'equipment', animated: true, frames: 8, description: 'medium rock' },
                { name: 'Small Asteroid', category: 'equipment', animated: true, frames: 8, description: 'small fast rock' },
                { name: 'UFO', category: 'equipment', animated: true, frames: 2, description: 'enemy saucer' }
            ],
            effects: [{ name: 'Explosion', frames: 8, description: 'line segments flying outward' }],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Centipede
    {
        id: 'centipede', title: 'Centipede', year: '1981', genres: ['Shooter', 'Arcade'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Trackball Shooter', promptString: 'colorful arcade, mushroom field, insect enemies' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '8x8', colorPalette: 'arcade',
            characters: [
                {
                    name: 'Shooter', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'small gun turret' },
                        { action: 'shoot', frames: 2, description: 'firing dart upward' }
                    ]
                },
                {
                    name: 'Centipede', role: 'enemy', directions: 2, actions: [
                        { action: 'crawl', frames: 2, description: 'segmented body moving' }
                    ]
                },
                {
                    name: 'Spider', role: 'enemy', directions: 4, actions: [
                        { action: 'bounce', frames: 4, description: 'spider bouncing around' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mushroom', type: 'prop', variants: 4, description: 'colorful mushrooms, destructible' }],
            items: [],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Dig Dug
    {
        id: 'dig-dug', title: 'Dig Dug', year: '1982', genres: ['Arcade', 'Action'], director: 'Namco', actors: [], type: 'game',
        styles: [{ name: 'Digging Arcade', promptString: 'colorful underground, digging tunnels, inflating enemies' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade',
            characters: [
                {
                    name: 'Dig Dug', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 1, description: 'white suit, red visor' },
                        { action: 'dig', frames: 4, description: 'digging through dirt' },
                        { action: 'pump', frames: 4, description: 'pumping air at enemy' }
                    ]
                },
                {
                    name: 'Pooka', role: 'enemy', directions: 4, actions: [
                        { action: 'walk', frames: 2, description: 'round orange enemy' },
                        { action: 'inflate', frames: 4, description: 'inflating and popping' }
                    ]
                },
                {
                    name: 'Fygar', role: 'enemy', directions: 2, actions: [
                        { action: 'walk', frames: 2, description: 'green dragon' },
                        { action: 'fire', frames: 3, description: 'breathing fire' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Dirt', type: 'floor', variants: 4, description: 'colored dirt layers' },
                { name: 'Rock', type: 'prop', variants: 1, description: 'droppable rock hazard' }
            ],
            items: [{ name: 'Vegetable', category: 'collectible', animated: false, frames: 1, description: 'bonus vegetable' }],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Q*bert
    {
        id: 'qbert', title: 'Q*bert', year: '1982', genres: ['Arcade', 'Puzzle'], director: 'Gottlieb', actors: [], type: 'game',
        styles: [{ name: 'Isometric Puzzle', promptString: 'isometric pyramid, color-changing cubes, cute character' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade',
            characters: [
                {
                    name: 'Q*bert', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 1, description: 'orange creature with long nose' },
                        { action: 'hop', frames: 2, description: 'jumping diagonally' },
                        { action: 'fall', frames: 4, description: 'falling off pyramid' }
                    ]
                },
                {
                    name: 'Coily', role: 'enemy', directions: 4, actions: [
                        { action: 'egg', frames: 1, description: 'purple egg bouncing' },
                        { action: 'snake', frames: 2, description: 'hatched snake chasing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Cubes', type: 'platform', variants: 6, description: 'isometric cubes changing colors' }],
            items: [{ name: 'Flying Disc', category: 'equipment', animated: true, frames: 2, description: 'escape disc' }],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Bubble Bobble
    {
        id: 'bubble-bobble', title: 'Bubble Bobble', year: '1986', genres: ['Platformer', 'Arcade'], director: 'Taito', actors: [], type: 'game',
        styles: [{ name: 'Cute Arcade', promptString: 'cute colorful arcade, bubble dragons, single-screen levels' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'pastel arcade',
            characters: [
                {
                    name: 'Bub', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'green bubble dragon' },
                        { action: 'walk', frames: 4, description: 'waddling' },
                        { action: 'blow_bubble', frames: 3, description: 'blowing bubble' },
                        { action: 'pop', frames: 2, description: 'popping trapped enemy' }
                    ]
                },
                {
                    name: 'Bob', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'blue bubble dragon' }
                    ]
                }
            ],
            tilesets: [{ name: 'Platforms', type: 'platform', variants: 6, description: 'colorful solid platforms' }],
            items: [
                { name: 'Bubble', category: 'weapon', animated: true, frames: 4, description: 'trapping bubble' },
                { name: 'Fruit', category: 'collectible', animated: false, frames: 1, description: 'bonus fruits' }
            ],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Bomberman
    {
        id: 'bomberman', title: 'Bomberman', year: '1983', genres: ['Maze', 'Action'], director: 'Hudson', actors: [], type: 'game',
        styles: [{ name: 'Bomb Maze', promptString: 'top-down maze, cute bomber, explosions, destructible walls' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Bomberman', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 1, description: 'white bomber with antenna' },
                        { action: 'walk', frames: 4, description: 'walking in maze' },
                        { action: 'place_bomb', frames: 2, description: 'placing bomb' },
                        { action: 'death', frames: 4, description: 'caught in explosion' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Hard Block', type: 'wall', variants: 1, description: 'indestructible wall' },
                { name: 'Soft Block', type: 'wall', variants: 1, description: 'destructible brick' },
                { name: 'Floor', type: 'floor', variants: 2, description: 'walkable ground' }
            ],
            items: [
                { name: 'Bomb', category: 'weapon', animated: true, frames: 4, description: 'ticking bomb' },
                { name: 'Fire Powerup', category: 'powerup', animated: true, frames: 2, description: 'bigger explosions' },
                { name: 'Bomb Powerup', category: 'powerup', animated: true, frames: 2, description: 'more bombs' }
            ],
            effects: [{ name: 'Explosion', frames: 6, description: 'cross-shaped explosion' }],
            ui: [{ name: 'Timer', description: 'countdown' }]
        }
    },

    // Double Dragon
    {
        id: 'double-dragon', title: 'Double Dragon', year: '1987', genres: ['Beat em Up', 'Arcade'], director: 'Technos', actors: [], type: 'game',
        styles: [{ name: 'Beat em Up', promptString: 'side-scrolling brawler, urban streets, martial arts' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '32x32', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Billy Lee', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'martial artist, blue outfit' },
                        { action: 'walk', frames: 4, description: 'walking forward' },
                        { action: 'punch', frames: 3, description: 'punching' },
                        { action: 'kick', frames: 3, description: 'roundhouse kick' },
                        { action: 'jump_kick', frames: 4, description: 'flying kick' },
                        { action: 'elbow', frames: 3, description: 'back elbow' }
                    ]
                },
                {
                    name: 'Williams', role: 'enemy', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'punk gang member' },
                        { action: 'punch', frames: 3, description: 'attacking' }
                    ]
                }
            ],
            tilesets: [{ name: 'City Street', type: 'floor', variants: 6, description: 'urban environment' }],
            items: [
                { name: 'Bat', category: 'weapon', animated: false, frames: 1, description: 'baseball bat weapon' },
                { name: 'Whip', category: 'weapon', animated: false, frames: 1, description: 'enemy whip' }
            ],
            ui: [{ name: 'Health Bar', description: 'player health' }]
        }
    },

    // Golden Axe
    {
        id: 'golden-axe', title: 'Golden Axe', year: '1989', genres: ['Beat em Up', 'Fantasy'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Fantasy Brawler', promptString: '16-bit fantasy beat em up, barbarians, magic' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'Genesis palette',
            characters: [
                {
                    name: 'Ax Battler', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'barbarian with sword' },
                        { action: 'walk', frames: 6, description: 'walking' },
                        { action: 'attack', frames: 4, description: 'sword swing' },
                        { action: 'magic', frames: 6, description: 'casting earth magic' },
                        { action: 'mount', frames: 4, description: 'riding dragon' }
                    ]
                }
            ],
            tilesets: [{ name: 'Fantasy Ground', type: 'floor', variants: 8, description: 'medieval fantasy terrain' }],
            items: [
                { name: 'Magic Pot', category: 'collectible', animated: true, frames: 2, description: 'blue magic potion' },
                { name: 'Meat', category: 'consumable', animated: false, frames: 1, description: 'health meat' }
            ],
            ui: [{ name: 'Health Bar', description: 'life gauge' }]
        }
    },

    // R-Type
    {
        id: 'r-type', title: 'R-Type', year: '1987', genres: ['Shmup', 'Arcade'], director: 'Irem', actors: [], type: 'game',
        styles: [{ name: 'Horizontal Shmup', promptString: 'horizontal shooter, biomechanical aliens, detailed sprites' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'arcade',
            characters: [
                {
                    name: 'R-9', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'sleek fighter spacecraft' },
                        { action: 'charge', frames: 4, description: 'charging wave cannon' },
                        { action: 'fire', frames: 2, description: 'releasing charged shot' }
                    ]
                },
                {
                    name: 'Force Pod', role: 'player', directions: 1, actions: [
                        { action: 'orbit', frames: 4, description: 'indestructible helper pod' }
                    ]
                }
            ],
            tilesets: [{ name: 'Bydo Base', type: 'wall', variants: 8, description: 'organic alien walls' }],
            items: [{ name: 'Powerup', category: 'powerup', animated: true, frames: 4, description: 'weapon upgrade orbs' }],
            effects: [{ name: 'Beam', frames: 4, description: 'wave cannon blast' }],
            ui: [{ name: 'Score', description: 'points' }]
        }
    },

    // Gradius
    {
        id: 'gradius', title: 'Gradius', year: '1985', genres: ['Shmup', 'Arcade'], director: 'Konami', actors: [], type: 'game',
        styles: [{ name: 'Classic Shmup', promptString: 'horizontal shooter, powerup bar, Moai heads' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Vic Viper', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'blue starfighter' },
                        { action: 'shoot', frames: 2, description: 'firing lasers' }
                    ]
                },
                {
                    name: 'Option', role: 'player', directions: 1, actions: [
                        { action: 'follow', frames: 2, description: 'orange helper orb' }
                    ]
                }
            ],
            tilesets: [{ name: 'Volcano', type: 'wall', variants: 6, description: 'volcanic terrain' }],
            items: [{ name: 'Capsule', category: 'powerup', animated: true, frames: 2, description: 'red powerup capsule' }],
            ui: [{ name: 'Powerup Bar', description: 'SPEED MISSILE DOUBLE LASER OPTION ?' }]
        }
    },

    // Gauntlet
    {
        id: 'gauntlet', title: 'Gauntlet', year: '1985', genres: ['Dungeon Crawler', 'Arcade'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Dungeon Arcade', promptString: 'top-down dungeon crawler, four player, monster hordes' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade',
            characters: [
                {
                    name: 'Warrior', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'red armored warrior' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'attack', frames: 3, description: 'sword swing' }
                    ]
                },
                {
                    name: 'Elf', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'green archer' },
                        { action: 'shoot', frames: 3, description: 'firing arrows' }
                    ]
                },
                {
                    name: 'Ghost', role: 'enemy', directions: 4, actions: [
                        { action: 'float', frames: 4, description: 'ghostly enemy' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Dungeon Floor', type: 'floor', variants: 4, description: 'stone dungeon' },
                { name: 'Walls', type: 'wall', variants: 4, description: 'dungeon walls' }
            ],
            items: [
                { name: 'Food', category: 'consumable', animated: false, frames: 1, description: 'health food' },
                { name: 'Key', category: 'collectible', animated: true, frames: 2, description: 'door key' }
            ],
            ui: [{ name: 'Health Counter', description: 'health as number' }]
        }
    },

    // Ghosts 'n Goblins
    {
        id: 'ghosts-n-goblins', title: "Ghosts 'n Goblins", year: '1985', genres: ['Platformer', 'Action'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Hard Platformer', promptString: '8-bit gothic horror, knight vs monsters, notoriously difficult' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Arthur', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'knight in silver armor' },
                        { action: 'walk', frames: 4, description: 'marching' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'throw', frames: 2, description: 'throwing lance' },
                        { action: 'underwear', frames: 4, description: 'running in boxers after hit' },
                        { action: 'death', frames: 4, description: 'skeleton collapse' }
                    ]
                },
                {
                    name: 'Zombie', role: 'enemy', directions: 2, actions: [
                        { action: 'rise', frames: 4, description: 'emerging from ground' },
                        { action: 'walk', frames: 4, description: 'shambling' }
                    ]
                }
            ],
            tilesets: [{ name: 'Graveyard', type: 'floor', variants: 6, description: 'haunted graveyard tiles' }],
            items: [
                { name: 'Lance', category: 'weapon', animated: false, frames: 1, description: 'throwing lance' },
                { name: 'Torch', category: 'weapon', animated: true, frames: 2, description: 'fire weapon' }
            ],
            ui: [{ name: 'Timer', description: 'countdown timer' }]
        }
    },

    // Punch-Out!!
    {
        id: 'punch-out', title: 'Punch-Out!!', year: '1987', genres: ['Sports', 'Boxing'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Boxing Arcade', promptString: 'behind-boxer view, pattern-based boxing, colorful opponents' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: '8-bit', resolution: '32x32', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Little Mac', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 2, description: 'small boxer from behind' },
                        { action: 'left_jab', frames: 3, description: 'left punch' },
                        { action: 'right_jab', frames: 3, description: 'right punch' },
                        { action: 'body_blow', frames: 3, description: 'low punch' },
                        { action: 'star_punch', frames: 6, description: 'powerful uppercut' },
                        { action: 'dodge_left', frames: 2, description: 'dodging left' },
                        { action: 'dodge_right', frames: 2, description: 'dodging right' },
                        { action: 'block', frames: 1, description: 'blocking' }
                    ]
                },
                {
                    name: 'Glass Joe', role: 'enemy', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'French boxer facing player' },
                        { action: 'wind_up', frames: 4, description: 'telegraphing punch' },
                        { action: 'punch', frames: 4, description: 'throwing punch' },
                        { action: 'stunned', frames: 4, description: 'seeing stars' },
                        { action: 'knockdown', frames: 6, description: 'falling to canvas' }
                    ]
                }
            ],
            tilesets: [{ name: 'Boxing Ring', type: 'background', variants: 1, description: 'ring ropes, crowd' }],
            items: [],
            effects: [{ name: 'Star', frames: 4, description: 'earned star power' }],
            ui: [{ name: 'Hearts', description: 'stamina hearts' }]
        }
    },

    // Metroid
    {
        id: 'metroid', title: 'Metroid', year: '1986', genres: ['Metroidvania', 'Action'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'NES Sci-Fi', promptString: '8-bit sci-fi exploration, alien planet, power suit' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Samus', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'orange power suit, arm cannon' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'spin jump' },
                        { action: 'morph_ball', frames: 2, description: 'curled into ball' },
                        { action: 'shoot', frames: 2, description: 'firing arm cannon' }
                    ]
                }
            ],
            tilesets: [{ name: 'Zebes', type: 'floor', variants: 8, description: 'alien planet tiles' }],
            items: [{ name: 'Missile', category: 'weapon', animated: true, frames: 2, description: 'missile pickup' }],
            ui: [{ name: 'Energy', description: 'health tanks' }]
        }
    },

    // Kid Icarus
    {
        id: 'kid-icarus', title: 'Kid Icarus', year: '1986', genres: ['Platformer', 'Action'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'NES Mythology', promptString: '8-bit Greek mythology, angelic hero, vertical scrolling' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Pit', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'angel boy with bow' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping with wings' },
                        { action: 'shoot', frames: 2, description: 'firing arrows' }
                    ]
                }
            ],
            tilesets: [{ name: 'Underworld', type: 'floor', variants: 6, description: 'Greek temple blocks' }],
            items: [{ name: 'Heart', category: 'collectible', animated: true, frames: 2, description: 'currency hearts' }],
            ui: [{ name: 'Health', description: 'life bar' }]
        }
    },

    // Ninja Gaiden
    {
        id: 'ninja-gaiden', title: 'Ninja Gaiden', year: '1988', genres: ['Action', 'Platformer'], director: 'Tecmo', actors: [], type: 'game',
        styles: [{ name: 'NES Ninja', promptString: '8-bit ninja action, cinematic cutscenes, fast paced' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Ryu Hayabusa', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'blue ninja' },
                        { action: 'run', frames: 4, description: 'running fast' },
                        { action: 'jump', frames: 1, description: 'flip jump' },
                        { action: 'wall_cling', frames: 1, description: 'clinging to wall' },
                        { action: 'slash', frames: 3, description: 'sword slash' },
                        { action: 'throw', frames: 2, description: 'throwing shuriken' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 6, description: 'urban ninja environment' }],
            items: [{ name: 'Ninpo', category: 'weapon', animated: true, frames: 2, description: 'ninja magic' }],
            ui: [{ name: 'Timer', description: 'stage timer' }]
        }
    },

    // Battletoads
    {
        id: 'battletoads', title: 'Battletoads', year: '1991', genres: ['Beat em Up', 'Action'], director: 'Rare', actors: [], type: 'game',
        styles: [{ name: 'Rare NES', promptString: '8-bit extreme action, muscular toads, varied gameplay' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '24x24', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Rash', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'green muscular toad' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'punch', frames: 3, description: 'giant fist attack' },
                        { action: 'kick', frames: 3, description: 'big boot attack' },
                        { action: 'headbutt', frames: 4, description: 'ram horns headbutt' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ragnarok', type: 'floor', variants: 6, description: 'spaceship interior' }],
            items: [],
            ui: [{ name: 'Health', description: 'toad icons' }]
        }
    },

    // Earthworm Jim
    {
        id: 'earthworm-jim', title: 'Earthworm Jim', year: '1994', genres: ['Platformer', 'Action'], director: 'Shiny', actors: [], type: 'game',
        styles: [{ name: 'Genesis Cartoon', promptString: '16-bit cartoon animation, bizarre humor, fluid sprites' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '48x48', colorPalette: 'Genesis palette',
            characters: [
                {
                    name: 'Jim', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'worm in super suit, breathing' },
                        { action: 'walk', frames: 8, description: 'walking animation' },
                        { action: 'run', frames: 6, description: 'running' },
                        { action: 'jump', frames: 4, description: 'jumping' },
                        { action: 'shoot', frames: 4, description: 'plasma gun fire' },
                        { action: 'whip', frames: 6, description: 'using self as whip' }
                    ]
                }
            ],
            tilesets: [{ name: 'New Junk City', type: 'floor', variants: 8, description: 'junkyard level' }],
            items: [{ name: 'Plasma', category: 'weapon', animated: true, frames: 2, description: 'ammo pickup' }],
            ui: [{ name: 'Health', description: 'percentage counter' }]
        }
    },

    // Shinobi
    {
        id: 'shinobi', title: 'Shinobi', year: '1987', genres: ['Action', 'Arcade'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Arcade Ninja', promptString: 'arcade ninja action, rescue hostages, throwing stars' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'arcade',
            characters: [
                {
                    name: 'Joe Musashi', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'white ninja' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'throw', frames: 3, description: 'throwing shurikens' },
                        { action: 'kick', frames: 3, description: 'close range kick' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 6, description: 'urban Japan' }],
            items: [{ name: 'Hostage', category: 'collectible', animated: true, frames: 2, description: 'rescued hostage' }],
            ui: [{ name: 'Shurikens', description: 'ammo count' }]
        }
    },

    // Altered Beast
    {
        id: 'altered-beast', title: 'Altered Beast', year: '1988', genres: ['Beat em Up', 'Action'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Genesis Launch', promptString: '16-bit mythology, werewolf transformation, RISE FROM YOUR GRAVE' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '48x48', colorPalette: 'Genesis palette',
            characters: [
                {
                    name: 'Centurion', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'muscular Roman soldier' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'punch', frames: 3, description: 'punching' },
                        { action: 'kick', frames: 3, description: 'kicking' },
                        { action: 'transform', frames: 8, description: 'becoming werewolf' },
                        { action: 'wolf_idle', frames: 4, description: 'werewolf form' }
                    ]
                }
            ],
            tilesets: [{ name: 'Graveyard', type: 'floor', variants: 6, description: 'Greek underworld' }],
            items: [{ name: 'Spirit Ball', category: 'powerup', animated: true, frames: 4, description: 'blue power orb' }],
            ui: [{ name: 'Power Level', description: 'transformation meter' }]
        }
    },

    // Splatterhouse
    {
        id: 'splatterhouse', title: 'Splatterhouse', year: '1988', genres: ['Beat em Up', 'Horror'], director: 'Namco', actors: [], type: 'game',
        styles: [{ name: 'Horror Brawler', promptString: 'horror beat em up, hockey mask, gore and monsters' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '48x48', colorPalette: 'dark horror',
            characters: [
                {
                    name: 'Rick', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'Jason-like mask, muscular' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'punch', frames: 3, description: 'punching' },
                        { action: 'slide_kick', frames: 4, description: 'sliding kick' },
                        { action: 'weapon_swing', frames: 4, description: 'swinging 2x4' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mansion', type: 'floor', variants: 6, description: 'haunted house' }],
            items: [{ name: '2x4', category: 'weapon', animated: false, frames: 1, description: 'wooden plank' }],
            effects: [{ name: 'Blood', frames: 4, description: 'blood splatter' }],
            ui: [{ name: 'Health', description: 'heart icons' }]
        }
    },

    // Excitebike
    {
        id: 'excitebike', title: 'Excitebike', year: '1984', genres: ['Racing', 'Sports'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'NES Racing', promptString: '8-bit motocross, dirt bikes, track editor' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Biker', role: 'player', directions: 1, actions: [
                        { action: 'ride', frames: 2, description: 'riding motorcycle' },
                        { action: 'wheelie', frames: 2, description: 'front wheel up' },
                        { action: 'lean_back', frames: 2, description: 'leaning backward' },
                        { action: 'crash', frames: 4, description: 'falling off bike' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Track', type: 'floor', variants: 4, description: 'dirt track' },
                { name: 'Ramps', type: 'prop', variants: 4, description: 'jump ramps' }
            ],
            items: [],
            ui: [{ name: 'Temp Gauge', description: 'overheating bar' }]
        }
    },

    // Ice Climber
    {
        id: 'ice-climber', title: 'Ice Climber', year: '1985', genres: ['Platformer', 'Arcade'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'NES Classic', promptString: '8-bit vertical climbing, ice blocks, vegetables' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Popo', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'blue parka climber' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'hammer', frames: 3, description: 'swinging hammer upward' }
                    ]
                },
                {
                    name: 'Nana', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'pink parka climber' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ice', type: 'floor', variants: 4, description: 'ice blocks' }],
            items: [{ name: 'Vegetable', category: 'collectible', animated: false, frames: 1, description: 'bonus eggplant' }],
            ui: [{ name: 'Height', description: 'floor counter' }]
        }
    },

    // Balloon Fight
    {
        id: 'balloon-fight', title: 'Balloon Fight', year: '1984', genres: ['Arcade', 'Action'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'NES Arcade', promptString: '8-bit balloon popping, Joust-like gameplay' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Balloon Fighter', role: 'player', directions: 2, actions: [
                        { action: 'fly', frames: 4, description: 'flapping with two balloons' },
                        { action: 'one_balloon', frames: 4, description: 'flying with one balloon' },
                        { action: 'fall', frames: 2, description: 'falling without balloons' }
                    ]
                },
                {
                    name: 'Balloon Bird', role: 'enemy', directions: 2, actions: [
                        { action: 'fly', frames: 4, description: 'enemy with balloons' },
                        { action: 'parachute', frames: 2, description: 'falling after pop' }
                    ]
                }
            ],
            tilesets: [{ name: 'Platforms', type: 'platform', variants: 4, description: 'floating platforms' }],
            items: [],
            ui: [{ name: 'Lives', description: 'remaining lives' }]
        }
    },

    // Lode Runner
    {
        id: 'lode-runner', title: 'Lode Runner', year: '1983', genres: ['Puzzle', 'Platformer'], director: 'Broderbund', actors: [], type: 'game',
        styles: [{ name: 'Puzzle Platformer', promptString: 'climbing ladders, digging holes, collecting gold' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'retro',
            characters: [
                {
                    name: 'Runner', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'gold collector' },
                        { action: 'run', frames: 4, description: 'running' },
                        { action: 'climb', frames: 4, description: 'climbing ladder' },
                        { action: 'hang', frames: 2, description: 'hanging on bar' },
                        { action: 'dig', frames: 4, description: 'digging hole' }
                    ]
                },
                {
                    name: 'Guard', role: 'enemy', directions: 2, actions: [
                        { action: 'chase', frames: 4, description: 'chasing player' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Brick', type: 'floor', variants: 4, description: 'diggable bricks' },
                { name: 'Ladder', type: 'prop', variants: 2, description: 'climbable ladder' }
            ],
            items: [{ name: 'Gold', category: 'collectible', animated: true, frames: 2, description: 'gold bar' }],
            ui: [{ name: 'Level', description: 'level number' }]
        }
    },

    // Adventure Island
    {
        id: 'adventure-island', title: 'Adventure Island', year: '1986', genres: ['Platformer', 'Action'], director: 'Hudson', actors: [], type: 'game',
        styles: [{ name: 'Tropical Platformer', promptString: '8-bit tropical island, caveman hero, skateboard' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Master Higgins', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'grass skirt caveman' },
                        { action: 'run', frames: 4, description: 'running' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'throw', frames: 2, description: 'throwing axe' },
                        { action: 'skateboard', frames: 2, description: 'riding skateboard' }
                    ]
                }
            ],
            tilesets: [{ name: 'Island', type: 'floor', variants: 6, description: 'tropical island tiles' }],
            items: [
                { name: 'Fruit', category: 'consumable', animated: false, frames: 1, description: 'energy fruit' },
                { name: 'Stone Axe', category: 'weapon', animated: false, frames: 1, description: 'throwing weapon' }
            ],
            ui: [{ name: 'Vitality', description: 'draining energy bar' }]
        }
    },

    // Wonder Boy
    {
        id: 'wonder-boy', title: 'Wonder Boy', year: '1986', genres: ['Platformer', 'Action'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Sega Platformer', promptString: '8-bit action platformer, skateboard, similar to Adventure Island' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'Master System',
            characters: [
                {
                    name: 'Tom-Tom', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'blonde boy' },
                        { action: 'run', frames: 4, description: 'running' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'throw', frames: 2, description: 'throwing hammer' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 6, description: 'forest tiles' }],
            items: [{ name: 'Fruit', category: 'consumable', animated: false, frames: 1, description: 'health fruit' }],
            ui: [{ name: 'Vitality', description: 'energy gauge' }]
        }
    },

    // Alex Kidd
    {
        id: 'alex-kidd', title: 'Alex Kidd in Miracle World', year: '1986', genres: ['Platformer', 'Action'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Master System', promptString: 'Sega 8-bit, big-eared hero, rock paper scissors' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'Master System',
            characters: [
                {
                    name: 'Alex Kidd', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'big ears, red outfit' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'punch', frames: 3, description: 'big punch attack' },
                        { action: 'swim', frames: 4, description: 'swimming' }
                    ]
                }
            ],
            tilesets: [{ name: 'Radaxian', type: 'floor', variants: 8, description: 'kingdom tiles' }],
            items: [{ name: 'Rice Ball', category: 'consumable', animated: false, frames: 1, description: 'health item' }],
            ui: [{ name: 'Money', description: 'currency counter' }]
        }
    },

    // Kirby's Dream Land
    {
        id: 'kirby', title: "Kirby's Dream Land", year: '1992', genres: ['Platformer', 'Action'], director: 'HAL', actors: [], type: 'game',
        styles: [{ name: 'Game Boy Cute', promptString: 'Game Boy, cute pink puffball, inhaling enemies' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'Game Boy',
            characters: [
                {
                    name: 'Kirby', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'pink round puffball' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'inhale', frames: 4, description: 'sucking in air' },
                        { action: 'fly', frames: 4, description: 'puffed up flying' },
                        { action: 'spit', frames: 3, description: 'spitting star attack' }
                    ]
                },
                {
                    name: 'King Dedede', role: 'boss', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'penguin king with hammer' },
                        { action: 'swing', frames: 6, description: 'hammer swing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dream Land', type: 'floor', variants: 6, description: 'fluffy cloud world' }],
            items: [{ name: 'Maxim Tomato', category: 'consumable', animated: false, frames: 1, description: 'full heal' }],
            ui: [{ name: 'Health', description: 'health bars' }]
        }
    },

    // Wario Land
    {
        id: 'wario-land', title: 'Wario Land', year: '1994', genres: ['Platformer', 'Action'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Game Boy Greed', promptString: 'Game Boy, greedy anti-hero, treasure hunting' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'Game Boy',
            characters: [
                {
                    name: 'Wario', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'yellow outfit, pointy mustache' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'run', frames: 4, description: 'running' },
                        { action: 'shoulder_bash', frames: 4, description: 'charging attack' },
                        { action: 'ground_pound', frames: 4, description: 'butt stomp' }
                    ]
                }
            ],
            tilesets: [{ name: 'Kitchen Island', type: 'floor', variants: 6, description: 'pirate treasure levels' }],
            items: [{ name: 'Coin', category: 'collectible', animated: true, frames: 4, description: 'gold coin' }],
            ui: [{ name: 'Hearts', description: 'health hearts' }]
        }
    },

    // Donkey Kong Country
    {
        id: 'dkc', title: 'Donkey Kong Country', year: '1994', genres: ['Platformer', 'Action'], director: 'Rare', actors: [], type: 'game',
        styles: [{ name: 'Pre-rendered 3D', promptString: 'SNES pre-rendered 3D, jungle adventure, smooth animations' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '48x48', colorPalette: 'SNES ACM',
            characters: [
                {
                    name: 'Donkey Kong', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'big gorilla, red tie' },
                        { action: 'walk', frames: 6, description: 'walking' },
                        { action: 'run', frames: 4, description: 'running' },
                        { action: 'roll', frames: 6, description: 'rolling attack' },
                        { action: 'ground_slap', frames: 4, description: 'slapping ground' }
                    ]
                },
                {
                    name: 'Diddy Kong', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'small chimp, red cap' },
                        { action: 'cartwheel', frames: 6, description: 'cartwheel attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Jungle', type: 'floor', variants: 8, description: 'lush jungle tiles' }],
            items: [
                { name: 'Banana', category: 'collectible', animated: false, frames: 1, description: 'banana pickup' },
                { name: 'KONG Letter', category: 'collectible', animated: true, frames: 2, description: 'K-O-N-G letters' }
            ],
            ui: [{ name: 'Lives', description: 'balloon lives' }]
        }
    },

    // Earthbound
    {
        id: 'earthbound', title: 'EarthBound', year: '1994', genres: ['JRPG', 'Comedy'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Quirky RPG', promptString: '16-bit modern day RPG, psychic powers, bizarre humor' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '24x24', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Ness', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'boy with baseball cap' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'bat_swing', frames: 4, description: 'baseball bat attack' },
                        { action: 'psi', frames: 4, description: 'psychic attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Onett', type: 'floor', variants: 8, description: 'suburban town' }],
            items: [{ name: 'Hamburger', category: 'consumable', animated: false, frames: 1, description: 'health food' }],
            ui: [{ name: 'HP Roller', description: 'rolling HP counter' }]
        }
    },

    // Chrono Trigger
    {
        id: 'chrono-trigger', title: 'Chrono Trigger', year: '1995', genres: ['JRPG', 'Time Travel'], director: 'Square', actors: [], type: 'game',
        styles: [{ name: 'SNES Akira Toriyama', promptString: '16-bit RPG, Dragon Ball artist style, time travel adventure' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '24x24', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Crono', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'red spiky hair, katana' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'slash', frames: 4, description: 'sword slash' },
                        { action: 'lightning', frames: 6, description: 'casting lightning magic' }
                    ]
                }
            ],
            tilesets: [{ name: 'Time Periods', type: 'floor', variants: 12, description: 'prehistoric to future tiles' }],
            items: [{ name: 'Potion', category: 'consumable', animated: false, frames: 1, description: 'healing item' }],
            ui: [{ name: 'ATB', description: 'active time battle' }]
        }
    },

    // Secret of Mana
    {
        id: 'secret-of-mana', title: 'Secret of Mana', year: '1993', genres: ['Action RPG', 'Fantasy'], director: 'Square', actors: [], type: 'game',
        styles: [{ name: 'SNES Action RPG', promptString: '16-bit colorful action RPG, ring menu system' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '24x24', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Randi', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'boy with sword' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'swing', frames: 4, description: 'sword swing' },
                        { action: 'charge', frames: 4, description: 'charging attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 8, description: 'lush fantasy forest' }],
            items: [{ name: 'Candy', category: 'consumable', animated: false, frames: 1, description: 'health restore' }],
            ui: [{ name: 'Ring Menu', description: 'circular item menu' }]
        }
    },

    // Super Smash Bros
    {
        id: 'smash-bros', title: 'Super Smash Bros.', year: '1999', genres: ['Fighting', 'Party'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'N64 Mascot Fighter', promptString: 'Nintendo crossover fighting, platform stages' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'N64 palette',
            characters: [
                {
                    name: 'Mario SSB', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'fighting stance' },
                        { action: 'jab', frames: 3, description: 'punch combo' },
                        { action: 'smash', frames: 6, description: 'charged attack' },
                        { action: 'special', frames: 4, description: 'fireball throw' }
                    ]
                }
            ],
            tilesets: [{ name: 'Final Destination', type: 'platform', variants: 4, description: 'floating stage' }],
            items: [{ name: 'Smash Ball', category: 'powerup', animated: true, frames: 4, description: 'final smash' }],
            ui: [{ name: 'Damage Percent', description: 'knockback percentage' }]
        }
    },

    // Mario Kart
    {
        id: 'mario-kart', title: 'Super Mario Kart', year: '1992', genres: ['Racing', 'Kart'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Mode 7 Racing', promptString: 'SNES Mode 7 kart racing, item chaos' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Mario Kart', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 1, description: 'driving kart' },
                        { action: 'turn', frames: 2, description: 'leaning into turn' },
                        { action: 'spin_out', frames: 4, description: 'spinning from hit' },
                        { action: 'jump', frames: 2, description: 'feather jump' }
                    ]
                }
            ],
            tilesets: [{ name: 'Track', type: 'floor', variants: 8, description: 'race track tiles' }],
            items: [
                { name: 'Banana', category: 'weapon', animated: false, frames: 1, description: 'slip hazard' },
                { name: 'Shell', category: 'weapon', animated: true, frames: 4, description: 'homing projectile' },
                { name: 'Star', category: 'powerup', animated: true, frames: 4, description: 'invincibility' }
            ],
            ui: [{ name: 'Lap Counter', description: 'race position' }]
        }
    },

    // F-Zero
    {
        id: 'f-zero', title: 'F-Zero', year: '1990', genres: ['Racing', 'Futuristic'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'SNES Mode 7', promptString: 'futuristic anti-gravity racing, Mode 7 graphics' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Blue Falcon', role: 'player', directions: 1, actions: [
                        { action: 'drive', frames: 1, description: 'blue racer hovering' },
                        { action: 'boost', frames: 4, description: 'afterburner effect' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mute City', type: 'floor', variants: 8, description: 'futuristic track' }],
            items: [],
            ui: [{ name: 'Energy', description: 'health/boost bar' }]
        }
    },

    // Pilotwings
    {
        id: 'pilotwings', title: 'Pilotwings', year: '1990', genres: ['Flight Sim', 'Sports'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Mode 7 Flight', promptString: 'SNES flight simulation, skydiving, hang gliding' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Pilot', role: 'player', directions: 8, actions: [
                        { action: 'plane', frames: 2, description: 'flying light plane' },
                        { action: 'skydive', frames: 4, description: 'free falling' },
                        { action: 'parachute', frames: 2, description: 'parachute open' }
                    ]
                }
            ],
            tilesets: [{ name: 'Landing Zone', type: 'floor', variants: 4, description: 'target platforms' }],
            items: [],
            ui: [{ name: 'Altitude', description: 'height meter' }]
        }
    },

    // Star Fox
    {
        id: 'star-fox', title: 'Star Fox', year: '1993', genres: ['Rail Shooter', 'Sci-Fi'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Super FX', promptString: 'SNES 3D polygons, anthropomorphic pilots, space combat' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: 'low-poly-3d', resolution: '48x48', colorPalette: 'SNES palette',
            characters: [
                {
                    name: 'Arwing', role: 'player', directions: 1, actions: [
                        { action: 'fly', frames: 2, description: 'flying spacecraft' },
                        { action: 'barrel_roll', frames: 6, description: 'do a barrel roll' },
                        { action: 'somersault', frames: 6, description: 'loop maneuver' }
                    ]
                }
            ],
            tilesets: [{ name: 'Corneria', type: 'background', variants: 4, description: 'planet surface' }],
            items: [{ name: 'Laser Powerup', category: 'powerup', animated: true, frames: 2, description: 'weapon upgrade' }],
            ui: [{ name: 'Shield', description: 'ship health' }]
        }
    },

    // Yoshi's Island
    {
        id: 'yoshis-island', title: "Yoshi's Island", year: '1995', genres: ['Platformer', 'Action'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Crayon Art', promptString: 'hand-drawn crayon style, baby Mario, egg throwing' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'crayon pastel',
            characters: [
                {
                    name: 'Yoshi', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'green dinosaur, baby on back' },
                        { action: 'walk', frames: 6, description: 'walking' },
                        { action: 'flutter', frames: 6, description: 'flutter jump' },
                        { action: 'tongue', frames: 4, description: 'eating enemy' },
                        { action: 'egg_aim', frames: 1, description: 'aiming egg throw' },
                        { action: 'ground_pound', frames: 4, description: 'butt stomp' }
                    ]
                }
            ],
            tilesets: [{ name: 'Crayon World', type: 'floor', variants: 8, description: 'hand-drawn style tiles' }],
            items: [{ name: 'Egg', category: 'weapon', animated: false, frames: 1, description: 'throwable egg' }],
            ui: [{ name: 'Star Counter', description: 'baby Mario timer' }]
        }
    },

    // Celeste
    {
        id: 'celeste', title: 'Celeste', year: '2018', genres: ['Platformer', 'Indie'], director: 'Matt Thorson', actors: [], type: 'game',
        styles: [{ name: 'Modern Pixel', promptString: 'modern pixel art, precision platforming, emotional story' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'muted palette',
            characters: [
                {
                    name: 'Madeline', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'red-haired girl' },
                        { action: 'run', frames: 6, description: 'running' },
                        { action: 'jump', frames: 2, description: 'jumping' },
                        { action: 'dash', frames: 4, description: 'air dash, hair color changes' },
                        { action: 'climb', frames: 4, description: 'wall climbing' },
                        { action: 'death', frames: 6, description: 'burst into particles' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mountain', type: 'floor', variants: 8, description: 'snowy mountain tiles' }],
            items: [{ name: 'Strawberry', category: 'collectible', animated: true, frames: 4, description: 'optional collectible' }],
            ui: [{ name: 'Deaths', description: 'death counter' }]
        }
    },

    // Shovel Knight
    {
        id: 'shovel-knight', title: 'Shovel Knight', year: '2014', genres: ['Platformer', 'Retro'], director: 'Yacht Club', actors: [], type: 'game',
        styles: [{ name: 'Neo NES', promptString: 'NES-style with modern polish, knight with shovel' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES enhanced',
            characters: [
                {
                    name: 'Shovel Knight', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'blue armored knight' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'dig', frames: 3, description: 'shovel swing' },
                        { action: 'pogo', frames: 2, description: 'downward shovel bounce' }
                    ]
                }
            ],
            tilesets: [{ name: 'Plains', type: 'floor', variants: 8, description: 'medieval platformer tiles' }],
            items: [{ name: 'Gem', category: 'collectible', animated: true, frames: 4, description: 'currency' }],
            ui: [{ name: 'Health', description: 'health bar' }]
        }
    },

    // Undertale
    {
        id: 'undertale', title: 'Undertale', year: '2015', genres: ['RPG', 'Indie'], director: 'Toby Fox', actors: [], type: 'game',
        styles: [{ name: 'Minimalist RPG', promptString: 'simple pixel art, bullet hell battles, choice matters' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'minimal',
            characters: [
                {
                    name: 'Frisk', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 1, description: 'striped shirt child' },
                        { action: 'walk', frames: 4, description: 'walking' }
                    ]
                },
                {
                    name: 'Sans', role: 'enemy', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'skeleton in hoodie, grin' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ruins', type: 'floor', variants: 6, description: 'underground ruins' }],
            items: [{ name: 'Soul', category: 'equipment', animated: true, frames: 2, description: 'red heart in battle' }],
            ui: [{ name: 'ACT Menu', description: 'FIGHT ACT ITEM MERCY' }]
        }
    },

    // Stardew Valley
    {
        id: 'stardew-valley', title: 'Stardew Valley', year: '2016', genres: ['Farming Sim', 'RPG'], director: 'ConcernedApe', actors: [], type: 'game',
        styles: [{ name: 'Cozy Farming', promptString: 'pixel art farming, seasons, village life' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'pastoral',
            characters: [
                {
                    name: 'Farmer', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 1, description: 'farmer with tool' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'hoe', frames: 4, description: 'tilling soil' },
                        { action: 'water', frames: 4, description: 'watering crops' },
                        { action: 'fish', frames: 6, description: 'fishing cast and reel' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Farm', type: 'floor', variants: 8, description: 'farm land tiles' },
                { name: 'Crops', type: 'prop', variants: 16, description: 'various crop growth stages' }
            ],
            items: [{ name: 'Seeds', category: 'equipment', animated: false, frames: 1, description: 'planting seeds' }],
            ui: [{ name: 'Energy', description: 'stamina bar' }]
        }
    },

    // Terraria
    {
        id: 'terraria', title: 'Terraria', year: '2011', genres: ['Sandbox', 'Action'], director: 'Re-Logic', actors: [], type: 'game',
        styles: [{ name: '2D Minecraft', promptString: 'pixel sandbox, mining, boss fights, building' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'vibrant',
            characters: [
                {
                    name: 'Terrarian', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 1, description: 'customizable character' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'swing', frames: 3, description: 'weapon swing' },
                        { action: 'grapple', frames: 2, description: 'grappling hook' },
                        { action: 'mine', frames: 4, description: 'pickaxe mining' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Dirt', type: 'floor', variants: 8, description: 'minable dirt blocks' },
                { name: 'Stone', type: 'wall', variants: 8, description: 'stone layers' },
                { name: 'Ores', type: 'prop', variants: 8, description: 'valuable ore deposits' }
            ],
            items: [{ name: 'Heart Crystal', category: 'powerup', animated: true, frames: 4, description: 'health upgrade' }],
            ui: [{ name: 'Health Hearts', description: 'heart containers' }]
        }
    },

    // Dead Cells
    {
        id: 'dead-cells', title: 'Dead Cells', year: '2018', genres: ['Roguelike', 'Metroidvania'], director: 'Motion Twin', actors: [], type: 'game',
        styles: [{ name: 'Fluid Pixel', promptString: 'smooth pixel animation, procedural dungeon, permadeath' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'pixel-art-hd', resolution: '32x32', colorPalette: 'dark dungeon',
            characters: [
                {
                    name: 'Prisoner', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'headless body, flame for head' },
                        { action: 'run', frames: 8, description: 'fast running' },
                        { action: 'roll', frames: 6, description: 'dodge roll' },
                        { action: 'slash', frames: 4, description: 'sword combo' },
                        { action: 'ground_slam', frames: 6, description: 'aerial slam attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Prison', type: 'floor', variants: 8, description: 'starting prison area' }],
            items: [{ name: 'Cell', category: 'collectible', animated: true, frames: 4, description: 'upgrade currency' }],
            ui: [{ name: 'Weapons', description: 'loadout slots' }]
        }
    },

    // Hades
    {
        id: 'hades', title: 'Hades', year: '2020', genres: ['Roguelike', 'Action'], director: 'Supergiant', actors: [], type: 'game',
        styles: [{ name: 'Stylized Greek', promptString: 'stylized Greek mythology, fluid combat, isometric' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'Greek underworld',
            characters: [
                {
                    name: 'Zagreus', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'prince of underworld, burning feet' },
                        { action: 'run', frames: 8, description: 'running' },
                        { action: 'dash', frames: 4, description: 'quick dash' },
                        { action: 'sword', frames: 6, description: 'Stygian blade combo' },
                        { action: 'cast', frames: 4, description: 'bloodstone throw' }
                    ]
                }
            ],
            tilesets: [{ name: 'Tartarus', type: 'floor', variants: 8, description: 'underworld chambers' }],
            items: [{ name: 'Boon', category: 'powerup', animated: true, frames: 4, description: 'god blessing' }],
            ui: [{ name: 'Death Defiance', description: 'extra lives' }]
        }
    },

    // Enter the Gungeon
    {
        id: 'enter-the-gungeon', title: 'Enter the Gungeon', year: '2016', genres: ['Roguelike', 'Shooter'], director: 'Dodge Roll', actors: [], type: 'game',
        styles: [{ name: 'Bullet Hell', promptString: 'pixel bullet hell, gun-themed dungeon, dodge rolling' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'dungeon',
            characters: [
                {
                    name: 'Marine', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'soldier with gun' },
                        { action: 'walk', frames: 6, description: 'walking' },
                        { action: 'dodge_roll', frames: 8, description: 'invincible roll' },
                        { action: 'shoot', frames: 2, description: 'firing weapon' }
                    ]
                }
            ],
            tilesets: [{ name: 'Gungeon', type: 'floor', variants: 8, description: 'gun-themed dungeon' }],
            items: [{ name: 'Gun', category: 'weapon', animated: true, frames: 2, description: 'random gun pickup' }],
            ui: [{ name: 'Blanks', description: 'bullet clear counter' }]
        }
    },

    // Spelunky
    {
        id: 'spelunky', title: 'Spelunky', year: '2008', genres: ['Roguelike', 'Platformer'], director: 'Mossmouth', actors: [], type: 'game',
        styles: [{ name: 'Cave Explorer', promptString: 'procedural caves, traps, whip and bombs' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'cave',
            characters: [
                {
                    name: 'Spelunker', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'adventurer with hat' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'whip', frames: 4, description: 'whip attack' },
                        { action: 'rope', frames: 2, description: 'throwing rope' },
                        { action: 'bomb', frames: 2, description: 'placing bomb' }
                    ]
                }
            ],
            tilesets: [{ name: 'Caves', type: 'floor', variants: 8, description: 'mine tiles' }],
            items: [{ name: 'Gold', category: 'collectible', animated: true, frames: 4, description: 'treasure' }],
            ui: [{ name: 'Bombs', description: 'bomb count' }]
        }
    },

    // Binding of Isaac
    {
        id: 'binding-of-isaac', title: 'Binding of Isaac', year: '2011', genres: ['Roguelike', 'Shooter'], director: 'Edmund McMillen', actors: [], type: 'game',
        styles: [{ name: 'Flash Horror', promptString: 'grotesque cartoon, twin-stick shooter, biblical themes' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'hand-drawn', resolution: '32x32', colorPalette: 'basement',
            characters: [
                {
                    name: 'Isaac', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'naked crying child' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'shoot', frames: 2, description: 'shooting tears' }
                    ]
                }
            ],
            tilesets: [{ name: 'Basement', type: 'floor', variants: 6, description: 'basement room tiles' }],
            items: [{ name: 'Heart', category: 'consumable', animated: true, frames: 2, description: 'health pickup' }],
            ui: [{ name: 'Hearts', description: 'health hearts' }]
        }
    },

    // Hotline Miami
    {
        id: 'hotline-miami', title: 'Hotline Miami', year: '2012', genres: ['Action', 'Top-Down Shooter'], director: 'Dennaton', actors: [], type: 'game',
        styles: [{ name: 'Neon Violence', promptString: '80s neon, ultraviolent, animal masks, pulsing soundtrack' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'neon 80s',
            characters: [
                {
                    name: 'Jacket', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'varsity jacket, animal mask' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'punch', frames: 3, description: 'melee attack' },
                        { action: 'shoot', frames: 2, description: 'firing gun' },
                        { action: 'execute', frames: 4, description: 'ground finisher' }
                    ]
                }
            ],
            tilesets: [{ name: 'Building', type: 'floor', variants: 8, description: '80s interior' }],
            items: [{ name: 'Weapon', category: 'weapon', animated: false, frames: 1, description: 'dropped weapon' }],
            effects: [{ name: 'Blood', frames: 1, description: 'blood pool' }],
            ui: [{ name: 'Score', description: 'combo multiplier' }]
        }
    },

    // Super Meat Boy
    {
        id: 'super-meat-boy', title: 'Super Meat Boy', year: '2010', genres: ['Platformer', 'Hardcore'], director: 'Team Meat', actors: [], type: 'game',
        styles: [{ name: 'Bloody Platformer', promptString: 'tough-as-nails platformer, meat character, saw blades' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'bloody',
            characters: [
                {
                    name: 'Meat Boy', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'cube of meat, no skin' },
                        { action: 'run', frames: 6, description: 'running, leaving blood trail' },
                        { action: 'jump', frames: 2, description: 'jumping' },
                        { action: 'wall_slide', frames: 2, description: 'sliding down wall' },
                        { action: 'death', frames: 4, description: 'exploding into chunks' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 6, description: 'world 1 tiles' }],
            items: [{ name: 'Bandage', category: 'collectible', animated: true, frames: 2, description: 'hidden collectible' }],
            ui: [{ name: 'Timer', description: 'level time' }]
        }
    },

    // VVVVVV
    {
        id: 'vvvvvv', title: 'VVVVVV', year: '2010', genres: ['Platformer', 'Puzzle'], director: 'Terry Cavanagh', actors: [], type: 'game',
        styles: [{ name: 'Commodore 64', promptString: 'retro C64 style, gravity flipping, single screen rooms' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '8x8', colorPalette: 'C64',
            characters: [
                {
                    name: 'Viridian', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'simple smiling figure' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'flip', frames: 2, description: 'gravity flip' },
                        { action: 'sad', frames: 1, description: 'frowning when dead' }
                    ]
                }
            ],
            tilesets: [{ name: 'Space Station', type: 'floor', variants: 4, description: 'blocky space station' }],
            items: [{ name: 'Trinket', category: 'collectible', animated: true, frames: 4, description: 'shiny collectible' }],
            ui: [{ name: 'Deaths', description: 'death counter' }]
        }
    },

    // Cave Story
    {
        id: 'cave-story', title: 'Cave Story', year: '2004', genres: ['Metroidvania', 'Indie'], director: 'Pixel', actors: [], type: 'game',
        styles: [{ name: 'Freeware Classic', promptString: 'charming pixel art, rabbit creatures, weapon leveling' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'vibrant',
            characters: [
                {
                    name: 'Quote', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 2, description: 'robot soldier, red scarf' },
                        { action: 'walk', frames: 4, description: 'walking' },
                        { action: 'jump', frames: 1, description: 'jumping' },
                        { action: 'shoot', frames: 2, description: 'firing polar star' },
                        { action: 'look_up', frames: 1, description: 'aiming upward' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mimiga Village', type: 'floor', variants: 8, description: 'cave village tiles' }],
            items: [
                { name: 'Missile', category: 'weapon', animated: true, frames: 2, description: 'missile ammo' },
                { name: 'Triangle', category: 'collectible', animated: true, frames: 4, description: 'weapon energy' }
            ],
            ui: [{ name: 'Weapon Level', description: 'EXP bar' }]
        }
    },

    // Duck Hunt
    {
        id: 'duck-hunt', title: 'Duck Hunt', year: '1984', genres: ['Shooter', 'Light Gun'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'NES Zapper', promptString: 'light gun shooter, ducks and dog, point and shoot' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'NES palette',
            characters: [
                {
                    name: 'Dog', role: 'player', directions: 2, actions: [
                        { action: 'sniff', frames: 4, description: 'sniffing grass' },
                        { action: 'jump', frames: 4, description: 'jumping into grass' },
                        { action: 'laugh', frames: 4, description: 'laughing at missed shots' },
                        { action: 'hold_duck', frames: 2, description: 'holding caught duck' }
                    ]
                },
                {
                    name: 'Duck', role: 'enemy', directions: 8, actions: [
                        { action: 'fly', frames: 4, description: 'flying duck' },
                        { action: 'fall', frames: 4, description: 'shot duck falling' }
                    ]
                }
            ],
            tilesets: [{ name: 'Field', type: 'background', variants: 2, description: 'grass field and sky' }],
            items: [],
            ui: [{ name: 'Shots', description: 'bullets remaining' }]
        }
    }
];
