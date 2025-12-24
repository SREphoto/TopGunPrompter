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
    }
];
