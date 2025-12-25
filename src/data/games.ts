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
    }
];
