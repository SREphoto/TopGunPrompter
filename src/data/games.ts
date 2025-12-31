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
    },

    // Wolfenstein 3D
    {
        id: 'wolfenstein', title: 'Wolfenstein 3D', year: '1992', genres: ['FPS', 'Action'], director: 'id Software', actors: [], type: 'game',
        styles: [{ name: 'Proto FPS', promptString: 'early first-person shooter, Nazi castle, pixel enemies' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: '32-bit', resolution: '64x64', colorPalette: 'VGA palette',
            characters: [
                {
                    name: 'Guard', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 1, description: 'Nazi soldier facing player' },
                        { action: 'walk', frames: 4, description: 'patrolling' },
                        { action: 'shoot', frames: 2, description: 'firing pistol' },
                        { action: 'death', frames: 4, description: 'falling dead' }
                    ]
                }
            ],
            tilesets: [{ name: 'Castle', type: 'wall', variants: 8, description: 'stone castle walls' }],
            items: [{ name: 'Health', category: 'consumable', animated: false, frames: 1, description: 'food items' }],
            ui: [{ name: 'Face', description: 'player face health indicator' }]
        }
    },

    // Half-Life
    {
        id: 'half-life', title: 'Half-Life', year: '1998', genres: ['FPS', 'Sci-Fi'], director: 'Valve', actors: [], type: 'game',
        styles: [{ name: 'GoldSrc', promptString: 'late 90s FPS, Black Mesa, crowbar, headcrabs' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'industrial',
            characters: [
                {
                    name: 'Headcrab', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'alien crab waiting' },
                        { action: 'leap', frames: 4, description: 'jumping at player' }
                    ]
                },
                {
                    name: 'Vortigaunt', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'alien slave' },
                        { action: 'attack', frames: 4, description: 'lightning attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Black Mesa', type: 'floor', variants: 8, description: 'research facility' }],
            items: [{ name: 'HEV Charger', category: 'equipment', animated: true, frames: 4, description: 'suit charger' }],
            ui: [{ name: 'HEV', description: 'suit power meter' }]
        }
    },

    // Portal
    {
        id: 'portal', title: 'Portal', year: '2007', genres: ['Puzzle', 'FPS'], director: 'Valve', actors: [], type: 'game',
        styles: [{ name: 'Aperture Science', promptString: 'clean test chambers, portal gun, GLaDOS' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sterile white',
            characters: [
                {
                    name: 'Turret', role: 'enemy', directions: 1, actions: [
                        { action: 'idle', frames: 2, description: 'white turret closed' },
                        { action: 'open', frames: 4, description: 'deploying guns' },
                        { action: 'fire', frames: 2, description: 'shooting' },
                        { action: 'death', frames: 4, description: 'tipping over' }
                    ]
                }
            ],
            tilesets: [{ name: 'Test Chamber', type: 'floor', variants: 6, description: 'clean white panels' }],
            items: [{ name: 'Companion Cube', category: 'equipment', animated: false, frames: 1, description: 'weighted cube with hearts' }],
            effects: [{ name: 'Portal', frames: 4, description: 'orange/blue portal effect' }],
            ui: [{ name: 'Crosshair', description: 'portal placement indicator' }]
        }
    },

    // Left 4 Dead
    {
        id: 'left-4-dead', title: 'Left 4 Dead', year: '2008', genres: ['FPS', 'Horror', 'Co-op'], director: 'Valve', actors: [], type: 'game',
        styles: [{ name: 'Zombie Apocalypse', promptString: 'modern zombie horror, infected hordes, survivors' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'gritty',
            characters: [
                {
                    name: 'Common Infected', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'zombie standing' },
                        { action: 'run', frames: 6, description: 'sprinting at survivors' },
                        { action: 'attack', frames: 4, description: 'clawing' }
                    ]
                },
                {
                    name: 'Boomer', role: 'boss', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'bloated zombie' },
                        { action: 'vomit', frames: 4, description: 'bile attack' },
                        { action: 'explode', frames: 6, description: 'death explosion' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 8, description: 'destroyed urban environment' }],
            items: [{ name: 'Medkit', category: 'consumable', animated: false, frames: 1, description: 'first aid kit' }],
            ui: [{ name: 'Health', description: 'survivor health bars' }]
        }
    },

    // Team Fortress 2
    {
        id: 'tf2', title: 'Team Fortress 2', year: '2007', genres: ['FPS', 'Team'], director: 'Valve', actors: [], type: 'game',
        styles: [{ name: 'Cartoon FPS', promptString: 'stylized 60s cartoon, class-based shooter, hats' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'RED/BLU',
            characters: [
                {
                    name: 'Heavy', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'large Russian with minigun' },
                        { action: 'rev', frames: 4, description: 'spinning up minigun' },
                        { action: 'fire', frames: 2, description: 'shooting Sasha' }
                    ]
                },
                {
                    name: 'Scout', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'Boston runner' },
                        { action: 'run', frames: 6, description: 'fast running' },
                        { action: 'double_jump', frames: 4, description: 'second jump' }
                    ]
                }
            ],
            tilesets: [{ name: '2Fort', type: 'floor', variants: 8, description: 'industrial cartoon base' }],
            items: [{ name: 'Health Pack', category: 'consumable', animated: false, frames: 1, description: 'medkit pickup' }],
            ui: [{ name: 'Ammo', description: 'ammunition counter' }]
        }
    },

    // Bioshock
    {
        id: 'bioshock', title: 'BioShock', year: '2007', genres: ['FPS', 'Horror'], director: '2K', actors: [], type: 'game',
        styles: [{ name: 'Art Deco Horror', promptString: 'underwater city Rapture, 1960s dystopia, plasmids' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'art deco',
            characters: [
                {
                    name: 'Big Daddy', role: 'boss', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'diving suit giant with drill' },
                        { action: 'walk', frames: 6, description: 'heavy footsteps' },
                        { action: 'charge', frames: 6, description: 'drill charge attack' }
                    ]
                },
                {
                    name: 'Splicer', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'deformed citizen' },
                        { action: 'attack', frames: 4, description: 'wrench swing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Rapture', type: 'floor', variants: 8, description: 'art deco underwater city' }],
            items: [{ name: 'EVE Hypo', category: 'consumable', animated: false, frames: 1, description: 'plasmid energy' }],
            ui: [{ name: 'Adam', description: 'gene currency' }]
        }
    },

    // Borderlands
    {
        id: 'borderlands', title: 'Borderlands', year: '2009', genres: ['FPS', 'Looter'], director: 'Gearbox', actors: [], type: 'game',
        styles: [{ name: 'Cell-Shaded Looter', promptString: 'cel-shaded wasteland, bazillion guns, vault hunters' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'desert wasteland',
            characters: [
                {
                    name: 'Psycho', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'masked bandit' },
                        { action: 'run', frames: 6, description: 'charging with axe' },
                        { action: 'throw', frames: 4, description: 'throwing buzz axe' }
                    ]
                }
            ],
            tilesets: [{ name: 'Pandora', type: 'floor', variants: 8, description: 'wasteland desert' }],
            items: [{ name: 'Gun', category: 'weapon', animated: false, frames: 1, description: 'random generated gun' }],
            ui: [{ name: 'Loot Rarity', description: 'white/green/blue/purple/orange' }]
        }
    },

    // XCOM
    {
        id: 'xcom', title: 'XCOM: Enemy Unknown', year: '2012', genres: ['Strategy', 'Tactics'], director: 'Firaxis', actors: [], type: 'game',
        styles: [{ name: 'Tactical Sci-Fi', promptString: 'turn-based tactics, alien invasion, squad management' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '32x32', colorPalette: 'military sci-fi',
            characters: [
                {
                    name: 'Soldier', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'XCOM operative' },
                        { action: 'move', frames: 6, description: 'tactical movement' },
                        { action: 'shoot', frames: 4, description: 'firing rifle' },
                        { action: 'overwatch', frames: 2, description: 'watching for enemies' }
                    ]
                },
                {
                    name: 'Sectoid', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'grey alien' },
                        { action: 'mind_merge', frames: 6, description: 'psionic attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'UFO', type: 'floor', variants: 8, description: 'alien ship interior' }],
            items: [],
            ui: [{ name: 'Action Points', description: 'movement/action indicators' }]
        }
    },

    // Civilization
    {
        id: 'civilization', title: 'Civilization VI', year: '2016', genres: ['Strategy', '4X'], director: 'Firaxis', actors: [], type: 'game',
        styles: [{ name: 'Stylized Strategy', promptString: 'hex-based world, historical leaders, wonders' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'cel-shaded', resolution: '32x32', colorPalette: 'vibrant world',
            characters: [
                {
                    name: 'Warrior', role: 'player', directions: 6, actions: [
                        { action: 'idle', frames: 4, description: 'ancient warrior unit' },
                        { action: 'attack', frames: 4, description: 'melee strike' }
                    ]
                },
                {
                    name: 'Settler', role: 'player', directions: 6, actions: [
                        { action: 'idle', frames: 2, description: 'settler with cart' },
                        { action: 'found', frames: 4, description: 'founding city' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Terrain', type: 'floor', variants: 12, description: 'hex tiles - plains, hills, desert, forest' },
                { name: 'Resources', type: 'prop', variants: 8, description: 'iron, horses, wheat' }
            ],
            items: [],
            ui: [{ name: 'Yields', description: 'food/production/gold icons' }]
        }
    },

    // Age of Empires
    {
        id: 'age-of-empires', title: 'Age of Empires II', year: '1999', genres: ['RTS', 'Strategy'], director: 'Ensemble', actors: [], type: 'game',
        styles: [{ name: 'Classic RTS', promptString: 'isometric medieval RTS, villagers, wololo' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'medieval',
            characters: [
                {
                    name: 'Villager', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'peasant worker' },
                        { action: 'walk', frames: 6, description: 'walking' },
                        { action: 'chop', frames: 4, description: 'chopping wood' },
                        { action: 'mine', frames: 4, description: 'mining gold' },
                        { action: 'build', frames: 4, description: 'constructing' }
                    ]
                },
                {
                    name: 'Knight', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'mounted knight' },
                        { action: 'charge', frames: 6, description: 'cavalry charge' }
                    ]
                },
                {
                    name: 'Monk', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'robed monk' },
                        { action: 'convert', frames: 8, description: 'wololo conversion' }
                    ]
                }
            ],
            tilesets: [{ name: 'Terrain', type: 'floor', variants: 8, description: 'grass, dirt, water' }],
            items: [{ name: 'Gold', category: 'collectible', animated: true, frames: 2, description: 'resource pile' }],
            ui: [{ name: 'Resources', description: 'wood/food/gold/stone counters' }]
        }
    },

    // Command and Conquer
    {
        id: 'command-conquer', title: 'Command & Conquer', year: '1995', genres: ['RTS', 'Strategy'], director: 'Westwood', actors: [], type: 'game',
        styles: [{ name: 'Westwood RTS', promptString: 'classic RTS, tiberium, GDI vs NOD' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'military',
            characters: [
                {
                    name: 'Minigunner', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'infantry soldier' },
                        { action: 'walk', frames: 6, description: 'marching' },
                        { action: 'fire', frames: 4, description: 'shooting' }
                    ]
                }
            ],
            tilesets: [{ name: 'Tiberium', type: 'prop', variants: 4, description: 'green crystal resource' }],
            items: [{ name: 'Crate', category: 'powerup', animated: true, frames: 2, description: 'bonus crate' }],
            ui: [{ name: 'Credits', description: 'money counter' }]
        }
    },

    // Warcraft
    {
        id: 'warcraft', title: 'Warcraft III', year: '2002', genres: ['RTS', 'Fantasy'], director: 'Blizzard', actors: [], type: 'game',
        styles: [{ name: 'Blizzard Fantasy', promptString: 'colorful fantasy RTS, orcs vs humans, heroes' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '48x48', colorPalette: 'fantasy',
            characters: [
                {
                    name: 'Footman', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'human soldier' },
                        { action: 'walk', frames: 6, description: 'marching' },
                        { action: 'attack', frames: 4, description: 'sword swing' }
                    ]
                },
                {
                    name: 'Grunt', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'orc warrior' },
                        { action: 'roar', frames: 6, description: 'battle cry' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 8, description: 'Lordaeron forest' }],
            items: [{ name: 'Health Potion', category: 'consumable', animated: true, frames: 2, description: 'red potion' }],
            ui: [{ name: 'Gold/Lumber', description: 'resource counters' }]
        }
    },

    // Angry Birds
    {
        id: 'angry-birds', title: 'Angry Birds', year: '2009', genres: ['Puzzle', 'Physics'], director: 'Rovio', actors: [], type: 'game',
        styles: [{ name: 'Mobile Cartoon', promptString: 'cartoon birds, catapult physics, green pigs' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'cartoon',
            characters: [
                {
                    name: 'Red Bird', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'angry red bird' },
                        { action: 'fly', frames: 2, description: 'flying through air' },
                        { action: 'impact', frames: 4, description: 'hitting structure' }
                    ]
                },
                {
                    name: 'Pig', role: 'enemy', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'green pig smiling' },
                        { action: 'scared', frames: 2, description: 'worried expression' },
                        { action: 'pop', frames: 4, description: 'popping when hit' }
                    ]
                }
            ],
            tilesets: [{ name: 'Wood', type: 'prop', variants: 4, description: 'wooden blocks' }],
            items: [],
            ui: [{ name: 'Score', description: 'points and stars' }]
        }
    },

    // Cut the Rope
    {
        id: 'cut-the-rope', title: 'Cut the Rope', year: '2010', genres: ['Puzzle', 'Physics'], director: 'ZeptoLab', actors: [], type: 'game',
        styles: [{ name: 'Cute Puzzle', promptString: 'physics puzzle, cute monster, candy swinging' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'colorful',
            characters: [
                {
                    name: 'Om Nom', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 6, description: 'cute green monster' },
                        { action: 'happy', frames: 4, description: 'excited for candy' },
                        { action: 'eat', frames: 6, description: 'eating candy' },
                        { action: 'sad', frames: 4, description: 'missed the candy' }
                    ]
                }
            ],
            tilesets: [{ name: 'Box', type: 'background', variants: 4, description: 'cardboard box levels' }],
            items: [{ name: 'Candy', category: 'collectible', animated: true, frames: 4, description: 'swinging candy' }],
            ui: [{ name: 'Stars', description: 'level rating' }]
        }
    },

    // Plants vs Zombies
    {
        id: 'plants-vs-zombies', title: 'Plants vs. Zombies', year: '2009', genres: ['Tower Defense', 'Strategy'], director: 'PopCap', actors: [], type: 'game',
        styles: [{ name: 'Cartoon Defense', promptString: 'comedic tower defense, zombie horde, garden warfare' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'hand-drawn', resolution: '48x48', colorPalette: 'cartoon',
            characters: [
                {
                    name: 'Peashooter', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 6, description: 'green pea plant' },
                        { action: 'shoot', frames: 4, description: 'spitting peas' }
                    ]
                },
                {
                    name: 'Sunflower', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 8, description: 'dancing flower' },
                        { action: 'produce', frames: 4, description: 'making sun' }
                    ]
                },
                {
                    name: 'Basic Zombie', role: 'enemy', directions: 1, actions: [
                        { action: 'walk', frames: 8, description: 'shambling zombie' },
                        { action: 'eat', frames: 6, description: 'eating plant' }
                    ]
                }
            ],
            tilesets: [{ name: 'Lawn', type: 'floor', variants: 4, description: 'grass lanes' }],
            items: [{ name: 'Sun', category: 'collectible', animated: true, frames: 4, description: 'falling sun' }],
            ui: [{ name: 'Sun Counter', description: 'currency display' }]
        }
    },

    // Fruit Ninja
    {
        id: 'fruit-ninja', title: 'Fruit Ninja', year: '2010', genres: ['Arcade', 'Mobile'], director: 'Halfbrick', actors: [], type: 'game',
        styles: [{ name: 'Slice Action', promptString: 'fruit slicing, juice explosions, ninja theme' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'juicy',
            characters: [],
            tilesets: [{ name: 'Background', type: 'background', variants: 4, description: 'wooden dojo' }],
            items: [
                { name: 'Watermelon', category: 'collectible', animated: true, frames: 4, description: 'large fruit' },
                { name: 'Apple', category: 'collectible', animated: true, frames: 4, description: 'red apple' },
                { name: 'Bomb', category: 'equipment', animated: true, frames: 4, description: 'game-ending bomb' }
            ],
            effects: [{ name: 'Slice', frames: 6, description: 'juice splash effect' }],
            ui: [{ name: 'Score', description: 'points and combo' }]
        }
    },

    // Temple Run
    {
        id: 'temple-run', title: 'Temple Run', year: '2011', genres: ['Endless Runner', 'Mobile'], director: 'Imangi', actors: [], type: 'game',
        styles: [{ name: 'Mobile Runner', promptString: 'endless runner, temple escape, demon monkeys' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'jungle temple',
            characters: [
                {
                    name: 'Explorer', role: 'player', directions: 1, actions: [
                        { action: 'run', frames: 8, description: 'running forward' },
                        { action: 'jump', frames: 4, description: 'jumping over gap' },
                        { action: 'slide', frames: 4, description: 'sliding under obstacle' },
                        { action: 'turn', frames: 4, description: 'sharp corner turn' },
                        { action: 'stumble', frames: 4, description: 'tripping' }
                    ]
                },
                {
                    name: 'Demon Monkey', role: 'enemy', directions: 1, actions: [
                        { action: 'chase', frames: 6, description: 'chasing player' }
                    ]
                }
            ],
            tilesets: [{ name: 'Temple', type: 'floor', variants: 6, description: 'ancient temple path' }],
            items: [{ name: 'Coin', category: 'collectible', animated: true, frames: 4, description: 'gold coin' }],
            ui: [{ name: 'Distance', description: 'meters run' }]
        }
    },

    // Subway Surfers
    {
        id: 'subway-surfers', title: 'Subway Surfers', year: '2012', genres: ['Endless Runner', 'Mobile'], director: 'SYBO', actors: [], type: 'game',
        styles: [{ name: 'Urban Runner', promptString: 'graffiti runner, train tracks, hover boards' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'urban graffiti',
            characters: [
                {
                    name: 'Jake', role: 'player', directions: 1, actions: [
                        { action: 'run', frames: 8, description: 'graffiti artist running' },
                        { action: 'jump', frames: 4, description: 'jumping' },
                        { action: 'roll', frames: 4, description: 'rolling under trains' },
                        { action: 'hoverboard', frames: 4, description: 'riding hoverboard' }
                    ]
                },
                {
                    name: 'Guard', role: 'enemy', directions: 1, actions: [
                        { action: 'chase', frames: 6, description: 'security guard with dog' }
                    ]
                }
            ],
            tilesets: [{ name: 'Tracks', type: 'floor', variants: 6, description: 'subway tracks' }],
            items: [{ name: 'Coin', category: 'collectible', animated: true, frames: 4, description: 'gold coin' }],
            ui: [{ name: 'Meters', description: 'distance counter' }]
        }
    },

    // Flappy Bird
    {
        id: 'flappy-bird', title: 'Flappy Bird', year: '2013', genres: ['Arcade', 'Mobile'], director: 'Dong Nguyen', actors: [], type: 'game',
        styles: [{ name: 'Retro Mobile', promptString: 'simple pixel art, one-tap gameplay, pipe obstacles' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'Super Mario',
            characters: [
                {
                    name: 'Bird', role: 'player', directions: 1, actions: [
                        { action: 'flap', frames: 3, description: 'yellow bird flapping' },
                        { action: 'fall', frames: 2, description: 'falling down' },
                        { action: 'death', frames: 4, description: 'hitting pipe' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Pipe', type: 'prop', variants: 2, description: 'green pipes up/down' },
                { name: 'Ground', type: 'floor', variants: 2, description: 'scrolling ground' }
            ],
            items: [],
            ui: [{ name: 'Score', description: 'pipe count' }]
        }
    },

    // Crossy Road
    {
        id: 'crossy-road', title: 'Crossy Road', year: '2014', genres: ['Arcade', 'Mobile'], director: 'Hipster Whale', actors: [], type: 'game',
        styles: [{ name: 'Voxel Frogger', promptString: 'voxel graphics, endless Frogger, many characters' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'voxel',
            characters: [
                {
                    name: 'Chicken', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'blocky chicken' },
                        { action: 'hop', frames: 2, description: 'hopping forward' },
                        { action: 'splat', frames: 4, description: 'hit by car' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Road', type: 'floor', variants: 4, description: 'lanes with cars' },
                { name: 'River', type: 'floor', variants: 4, description: 'water with logs' },
                { name: 'Grass', type: 'floor', variants: 4, description: 'safe grass strips' }
            ],
            items: [{ name: 'Coin', category: 'collectible', animated: true, frames: 4, description: 'gold coin pickup' }],
            ui: [{ name: 'Distance', description: 'hops counter' }]
        }
    },

    // Among Us
    {
        id: 'among-us', title: 'Among Us', year: '2018', genres: ['Party', 'Deduction'], director: 'Innersloth', actors: [], type: 'game',
        styles: [{ name: 'Colorful Impostors', promptString: 'bean-shaped crewmates, spaceship, colorful simple' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'hand-drawn', resolution: '32x32', colorPalette: 'colorful',
            characters: [
                {
                    name: 'Crewmate', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'bean astronaut' },
                        { action: 'walk', frames: 4, description: 'waddling' },
                        { action: 'task', frames: 6, description: 'doing task' },
                        { action: 'dead', frames: 1, description: 'bone corpse' }
                    ]
                },
                {
                    name: 'Impostor', role: 'enemy', directions: 4, actions: [
                        { action: 'kill', frames: 6, description: 'tongue stab kill' },
                        { action: 'vent', frames: 4, description: 'entering vent' }
                    ]
                }
            ],
            tilesets: [{ name: 'Skeld', type: 'floor', variants: 8, description: 'spaceship interior' }],
            items: [],
            ui: [{ name: 'Task Bar', description: 'task completion progress' }]
        }
    },

    // Fall Guys
    {
        id: 'fall-guys', title: 'Fall Guys', year: '2020', genres: ['Party', 'Battle Royale'], director: 'Mediatonic', actors: [], type: 'game',
        styles: [{ name: 'Bean Royale', promptString: 'jellybean characters, obstacle course, colorful chaos' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'bright pastel',
            characters: [
                {
                    name: 'Bean', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'wobbling jellybean' },
                        { action: 'run', frames: 8, description: 'running arms flailing' },
                        { action: 'jump', frames: 4, description: 'jumping' },
                        { action: 'dive', frames: 4, description: 'diving forward' },
                        { action: 'grab', frames: 4, description: 'grabbing other player' },
                        { action: 'fall', frames: 6, description: 'ragdoll falling' }
                    ]
                }
            ],
            tilesets: [{ name: 'Obstacle', type: 'prop', variants: 8, description: 'spinning obstacles, slime' }],
            items: [],
            ui: [{ name: 'Players Remaining', description: 'elimination counter' }]
        }
    },

    // Rocket League
    {
        id: 'rocket-league', title: 'Rocket League', year: '2015', genres: ['Sports', 'Racing'], director: 'Psyonix', actors: [], type: 'game',
        styles: [{ name: 'Car Soccer', promptString: 'rocket-powered cars, giant soccer ball, aerial plays' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sports arena',
            characters: [
                {
                    name: 'Car', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 2, description: 'driving on field' },
                        { action: 'boost', frames: 4, description: 'rocket boost flames' },
                        { action: 'jump', frames: 4, description: 'double jumping' },
                        { action: 'flip', frames: 6, description: 'dodge flip' },
                        { action: 'aerial', frames: 4, description: 'flying through air' }
                    ]
                }
            ],
            tilesets: [{ name: 'Arena', type: 'floor', variants: 4, description: 'soccer field turf' }],
            items: [{ name: 'Boost Pad', category: 'powerup', animated: true, frames: 4, description: 'boost pickup' }],
            ui: [{ name: 'Boost Meter', description: 'boost percentage' }]
        }
    },

    // FIFA
    {
        id: 'fifa', title: 'FIFA', year: '2023', genres: ['Sports', 'Soccer'], director: 'EA', actors: [], type: 'game',
        styles: [{ name: 'Realistic Soccer', promptString: 'realistic graphics, licensed teams, stadium atmosphere' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sports',
            characters: [
                {
                    name: 'Player', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'soccer player standing' },
                        { action: 'run', frames: 8, description: 'sprinting' },
                        { action: 'kick', frames: 4, description: 'kicking ball' },
                        { action: 'tackle', frames: 4, description: 'slide tackle' },
                        { action: 'header', frames: 4, description: 'heading ball' }
                    ]
                }
            ],
            tilesets: [{ name: 'Pitch', type: 'floor', variants: 4, description: 'grass patterns' }],
            items: [{ name: 'Ball', category: 'equipment', animated: true, frames: 8, description: 'soccer ball rolling' }],
            ui: [{ name: 'Scoreboard', description: 'score and time' }]
        }
    },

    // NBA 2K
    {
        id: 'nba-2k', title: 'NBA 2K', year: '2023', genres: ['Sports', 'Basketball'], director: 'Visual Concepts', actors: [], type: 'game',
        styles: [{ name: 'Realistic Basketball', promptString: 'realistic graphics, NBA licensed, court action' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sports arena',
            characters: [
                {
                    name: 'Player', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'basketball player' },
                        { action: 'run', frames: 6, description: 'running court' },
                        { action: 'dribble', frames: 6, description: 'dribbling ball' },
                        { action: 'shoot', frames: 6, description: 'shooting jumper' },
                        { action: 'dunk', frames: 8, description: 'slam dunk' }
                    ]
                }
            ],
            tilesets: [{ name: 'Court', type: 'floor', variants: 4, description: 'basketball court' }],
            items: [{ name: 'Basketball', category: 'equipment', animated: true, frames: 4, description: 'bouncing ball' }],
            ui: [{ name: 'Shot Meter', description: 'timing indicator' }]
        }
    },

    // Madden
    {
        id: 'madden', title: 'Madden NFL', year: '2023', genres: ['Sports', 'Football'], director: 'EA', actors: [], type: 'game',
        styles: [{ name: 'Realistic Football', promptString: 'realistic graphics, NFL licensed, American football' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sports stadium',
            characters: [
                {
                    name: 'Player', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'football player' },
                        { action: 'run', frames: 6, description: 'running play' },
                        { action: 'throw', frames: 6, description: 'quarterback throw' },
                        { action: 'tackle', frames: 4, description: 'tackling' },
                        { action: 'catch', frames: 4, description: 'receiving pass' }
                    ]
                }
            ],
            tilesets: [{ name: 'Field', type: 'floor', variants: 4, description: 'football field' }],
            items: [{ name: 'Football', category: 'equipment', animated: true, frames: 4, description: 'spiral throw' }],
            ui: [{ name: 'Play Call', description: 'formation selection' }]
        }
    },

    // Guitar Hero
    {
        id: 'guitar-hero', title: 'Guitar Hero', year: '2005', genres: ['Rhythm', 'Music'], director: 'Harmonix', actors: [], type: 'game',
        styles: [{ name: 'Rock Concert', promptString: 'rhythm game, note highway, rock and roll' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'rock stage',
            characters: [
                {
                    name: 'Rocker', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'guitarist on stage' },
                        { action: 'strum', frames: 4, description: 'strumming guitar' },
                        { action: 'star_power', frames: 8, description: 'activating star power' }
                    ]
                }
            ],
            tilesets: [{ name: 'Stage', type: 'background', variants: 4, description: 'concert stage' }],
            items: [
                { name: 'Green Note', category: 'collectible', animated: true, frames: 2, description: 'highway note' },
                { name: 'Red Note', category: 'collectible', animated: true, frames: 2, description: 'highway note' },
                { name: 'Yellow Note', category: 'collectible', animated: true, frames: 2, description: 'highway note' }
            ],
            ui: [{ name: 'Rock Meter', description: 'performance gauge' }]
        }
    },

    // Mass Effect
    {
        id: 'mass-effect', title: 'Mass Effect', year: '2007', genres: ['RPG', 'Shooter'], director: 'BioWare', actors: [], type: 'game',
        styles: [{ name: 'Space Opera', promptString: 'cinematic sci-fi, sleek armor, alien races, lens flares' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sci-fi blue',
            characters: [
                {
                    name: 'Shepard', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'N7 armor soldier' },
                        { action: 'run', frames: 6, description: 'combat run' },
                        { action: 'shoot', frames: 4, description: 'firing assault rifle' },
                        { action: 'cover', frames: 2, description: 'taking cover' },
                        { action: 'biotic', frames: 6, description: 'blue energy power' }
                    ]
                }
            ],
            tilesets: [{ name: 'Normandy', type: 'floor', variants: 6, description: 'spaceship interior' }],
            items: [{ name: 'Omni-gel', category: 'consumable', animated: false, frames: 1, description: 'orange gel' }],
            ui: [{ name: 'Dialogue Wheel', description: 'circular conversation options' }]
        }
    },

    // Dragon Age
    {
        id: 'dragon-age', title: 'Dragon Age: Origins', year: '2009', genres: ['RPG', 'Fantasy'], director: 'BioWare', actors: [], type: 'game',
        styles: [{ name: 'Dark Fantasy', promptString: 'gritty fantasy, blood splatter, medieval armor' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark fantasy',
            characters: [
                {
                    name: 'Warden', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'armored warrior' },
                        { action: 'attack', frames: 4, description: 'sword swing' },
                        { action: 'cast', frames: 6, description: 'spell casting' }
                    ]
                },
                {
                    name: 'Darkspawn', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'corrupted creature' },
                        { action: 'swarm', frames: 6, description: 'attacking in group' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ruins', type: 'floor', variants: 8, description: 'elven ruins' }],
            items: [{ name: 'Lyrium Potion', category: 'consumable', animated: true, frames: 2, description: 'blue potion' }],
            ui: [{ name: 'Hotbar', description: 'skill icons' }]
        }
    },

    // Fallout
    {
        id: 'fallout', title: 'Fallout 3', year: '2008', genres: ['RPG', 'Post-Apocalyptic'], director: 'Bethesda', actors: [], type: 'game',
        styles: [{ name: 'Wasteland', promptString: 'post-apocalyptic retro-futurism, greyscale decay, power armor' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'grey and green',
            characters: [
                {
                    name: 'Vault Dweller', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'blue jumpsuit pipboy' },
                        { action: 'aim', frames: 2, description: 'aiming VATS' },
                        { action: 'shoot', frames: 2, description: 'firing 10mm pistol' }
                    ]
                },
                {
                    name: 'Super Mutant', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'green giant with club' },
                        { action: 'roam', frames: 6, description: 'patrolling rubble' }
                    ]
                }
            ],
            tilesets: [{ name: 'Wasteland', type: 'floor', variants: 8, description: 'irradiated dirt and rubble' }],
            items: [{ name: 'Nuka Cola', category: 'consumable', animated: false, frames: 1, description: 'bottle rocket soda' }],
            ui: [{ name: 'Pip-Boy', description: 'green CRT interface' }]
        }
    },

    // Skyrim
    {
        id: 'skyrim', title: 'The Elder Scrolls V: Skyrim', year: '2011', genres: ['RPG', 'Fantasy'], director: 'Bethesda', actors: [], type: 'game',
        styles: [{ name: 'Nordic Fantasy', promptString: 'snowy mountains, viking aesthetics, dragons, realistic grit' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'cold nordic',
            characters: [
                {
                    name: 'Dragonborn', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'horned helmet warrior' },
                        { action: 'shout', frames: 4, description: 'fus ro dah shout' },
                        { action: 'swing', frames: 4, description: 'axe swing' },
                        { action: 'block', frames: 2, description: 'shield block' }
                    ]
                },
                {
                    name: 'Dragon', role: 'boss', directions: 4, actions: [
                        { action: 'fly', frames: 6, description: 'flying dragon' },
                        { action: 'breath', frames: 4, description: 'fire breath' }
                    ]
                }
            ],
            tilesets: [{ name: 'Tundra', type: 'floor', variants: 8, description: 'snow and rock' }],
            items: [{ name: 'Sweetroll', category: 'consumable', animated: false, frames: 1, description: 'pastry' }],
            ui: [{ name: 'Compass', description: 'navigation bar' }]
        }
    },

    // Darkest Dungeon
    {
        id: 'darkest-dungeon', title: 'Darkest Dungeon', year: '2016', genres: ['RPG', 'Roguelike'], director: 'Red Hook', actors: [], type: 'game',
        styles: [{ name: 'Gothic Horror', promptString: 'hand-drawn ink heavy dark lines, lovecraftian horror, shadows' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'ink black',
            characters: [
                {
                    name: 'Crusader', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'heavy armor knight' },
                        { action: 'attack', frames: 4, description: 'heavy sword swing' },
                        { action: 'stress', frames: 4, description: 'panicking' }
                    ]
                },
                {
                    name: 'Cultist', role: 'enemy', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'robed cultist' },
                        { action: 'chant', frames: 4, description: 'eldritch spell' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dungeon', type: 'background', variants: 4, description: 'gothic corridor' }],
            items: [{ name: 'Torch', category: 'consumable', animated: true, frames: 4, description: 'burning torch' }],
            ui: [{ name: 'Stress', description: 'stress meter' }]
        }
    },

    // Slay the Spire
    {
        id: 'slay-the-spire', title: 'Slay the Spire', year: '2017', genres: ['Roguelike', 'Card Game'], director: 'Mega Crit', actors: [], type: 'game',
        styles: [{ name: 'Card Battler', promptString: 'unique creature design, painted style, spire climbing' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: 'hand-drawn', resolution: '48x48', colorPalette: 'fantasy',
            characters: [
                {
                    name: 'Ironclad', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'masked warrior' },
                        { action: 'attack', frames: 4, description: 'sword strike' },
                        { action: 'block', frames: 2, description: 'raising shield' }
                    ]
                }
            ],
            tilesets: [{ name: 'Spire', type: 'background', variants: 4, description: 'bizarre tower background' }],
            items: [{ name: 'Card', category: 'equipment', animated: false, frames: 1, description: 'attack card' }],
            ui: [{ name: 'Energy', description: 'mana counter' }]
        }
    },

    // Into the Breach
    {
        id: 'into-the-breach', title: 'Into the Breach', year: '2018', genres: ['Strategy', 'Puzzle'], director: 'Subset Games', actors: [], type: 'game',
        styles: [{ name: 'Pixel Tactics', promptString: 'clean pixel art, mechs vs bugs, isometric tactics' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'pixel-art-hd', resolution: '32x32', colorPalette: 'clean sci-fi',
            characters: [
                {
                    name: 'Combat Mech', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'blue combat mech' },
                        { action: 'punch', frames: 4, description: 'mechanical punch' }
                    ]
                },
                {
                    name: 'Vek', role: 'enemy', directions: 4, actions: [
                        { action: 'idle', frames: 4, description: 'giant insect' },
                        { action: 'emerge', frames: 4, description: 'digging out of ground' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 4, description: 'civilian buildings' }],
            items: [],
            ui: [{ name: 'Grid', description: 'tactical grid' }]
        }
    },

    // FTL
    {
        id: 'ftl', title: 'FTL: Faster Than Light', year: '2012', genres: ['Strategy', 'Roguelike'], director: 'Subset Games', actors: [], type: 'game',
        styles: [{ name: 'Top-Down Space', promptString: 'top down spaceship management, simple pixel crew, starfield' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'pixel-art-hd', resolution: '16x16', colorPalette: 'space',
            characters: [
                {
                    name: 'Crew', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'tiny space crew' },
                        { action: 'repair', frames: 4, description: 'fixing system' },
                        { action: 'fight', frames: 4, description: 'fighting intruders' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ship Floor', type: 'floor', variants: 4, description: 'spaceship rooms' }],
            items: [{ name: 'Scrap', category: 'collectible', animated: false, frames: 1, description: 'metal currency' }],
            ui: [{ name: 'Systems', description: 'shield/engine/weapon powers' }]
        }
    },

    // Paper Mario
    {
        id: 'paper-mario', title: 'Paper Mario', year: '2000', genres: ['RPG', 'Adventure'], director: 'Intelligent Systems', actors: [], type: 'game',
        styles: [{ name: 'Paper Craft', promptString: '2D paper cutout characters in 3D world, cute, flat' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'hand-drawn', resolution: '48x48', colorPalette: 'bright paper',
            characters: [
                {
                    name: 'Mario Paper', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'flat paper Mario' },
                        { action: 'walk', frames: 4, description: 'paper shuffling walk' },
                        { action: 'jump', frames: 2, description: 'paper jump' },
                        { action: 'hammer', frames: 4, description: 'huge hammer swing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Cardboard', type: 'prop', variants: 8, description: 'cardboard scenery' }],
            items: [{ name: 'Mushroom', category: 'consumable', animated: false, frames: 1, description: 'paper mushroom' }],
            ui: [{ name: 'Badge', description: 'equipable badge' }]
        }
    },

    // Fire Emblem
    {
        id: 'fire-emblem', title: 'Fire Emblem', year: '2003', genres: ['RPG', 'Strategy'], director: 'Intelligent Systems', actors: [], type: 'game',
        styles: [{ name: 'GBA Strategy', promptString: 'GBA pixel art, anime battles, strategic grid, critical hits' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '24x24', colorPalette: 'GBA vibrant',
            characters: [
                {
                    name: 'Lord', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 4, description: 'blue haired lord' },
                        { action: 'map_walk', frames: 4, description: 'walking on map' },
                        { action: 'attack_crit', frames: 12, description: 'flashy critical hit animation' }
                    ]
                }
            ],
            tilesets: [{ name: 'Plains', type: 'floor', variants: 6, description: 'grassy battlefield' }],
            items: [{ name: 'Sword', category: 'weapon', animated: false, frames: 1, description: 'iron sword' }],
            ui: [{ name: 'Stats', description: 'level up screen' }]
        }
    },

    // Advance Wars
    {
        id: 'advance-wars', title: 'Advance Wars', year: '2001', genres: ['Strategy', 'Turn-Based'], director: 'Intelligent Systems', actors: [], type: 'game',
        styles: [{ name: 'GBA Military', promptString: 'cute military pixel art, tanks, soldiers, anime commanders' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '16x16', colorPalette: 'GBA vibrant',
            characters: [
                {
                    name: 'Infantry', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'little soldier' },
                        { action: 'capture', frames: 4, description: 'capturing city' },
                        { action: 'fire', frames: 2, description: 'shooting gun' }
                    ]
                },
                {
                    name: 'Tank', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'green tank' },
                        { action: 'move', frames: 2, description: 'treads moving' },
                        { action: 'fire', frames: 2, description: 'cannon firing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Map', type: 'floor', variants: 8, description: 'roads, forests, mountains' }],
            items: [],
            ui: [{ name: 'CO Power', description: 'power meter star' }]
        }
    },

    // Golden Sun
    {
        id: 'golden-sun', title: 'Golden Sun', year: '2001', genres: ['RPG', 'Fantasy'], director: 'Camelot', actors: [], type: 'game',
        styles: [{ name: 'GBA RPG', promptString: 'pseudo-3D GBA battles, djinn summons, elemental magic' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '24x24', colorPalette: 'GBA vibrant',
            characters: [
                {
                    name: 'Isaac', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'blonde adept' },
                        { action: 'cast', frames: 6, description: 'psynergy casting' },
                        { action: 'summon', frames: 8, description: 'summoning djinn' }
                    ]
                }
            ],
            tilesets: [{ name: 'Vale', type: 'floor', variants: 8, description: 'village tiles' }],
            items: [{ name: 'Djinn', category: 'collectible', animated: true, frames: 4, description: 'elemental spirit' }],
            ui: [{ name: 'Psynergy', description: 'spell menu' }]
        }
    },

    // Final Fantasy Tactics
    {
        id: 'ff-tactics', title: 'Final Fantasy Tactics', year: '1997', genres: ['RPG', 'Strategy'], director: 'Square', actors: [], type: 'game',
        styles: [{ name: 'Isometric Tactics', promptString: 'isometric pixel art, nose-less characters, ornate armor' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'ivalice',
            characters: [
                {
                    name: 'Ramza', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'mercenary sprite' },
                        { action: 'walk', frames: 4, description: 'walking in place' },
                        { action: 'attack', frames: 4, description: 'sword swing' },
                        { action: 'chant', frames: 4, description: 'casting spell' },
                        { action: 'hurt', frames: 1, description: 'kneeling in pain' }
                    ]
                }
            ],
            tilesets: [{ name: 'Battlefield', type: 'floor', variants: 8, description: 'isometric terrain blocks' }],
            items: [{ name: 'Crystal', category: 'collectible', animated: true, frames: 4, description: 'fallen unit crystal' }],
            ui: [{ name: 'CT', description: 'charge time' }]
        }
    },

    // Disgaea
    {
        id: 'disgaea', title: 'Disgaea: Hour of Darkness', year: '2003', genres: ['RPG', 'Strategy'], director: 'Nippon Ichi', actors: [], type: 'game',
        styles: [{ name: 'Anime Strategy', promptString: 'anime srpg, insane damage numbers, penguins, demons' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'hand-drawn', resolution: '48x48', colorPalette: 'anime',
            characters: [
                {
                    name: 'Laharl', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'demon prince' },
                        { action: 'laugh', frames: 4, description: 'evil laugh' },
                        { action: 'attack', frames: 6, description: 'over the top attack' }
                    ]
                },
                {
                    name: 'Prinny', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'blue penguin with knives' },
                        { action: 'throw', frames: 4, description: 'being thrown' },
                        { action: 'explode', frames: 6, description: 'explosion' }
                    ]
                }
            ],
            tilesets: [{ name: 'Netherworld', type: 'floor', variants: 6, description: 'demon world tiles' }],
            items: [],
            ui: [{ name: 'Damage', description: 'millions of damage text' }]
        }
    },

    // Ogre Battle
    {
        id: 'ogre-battle', title: 'Ogre Battle: The March of the Black Queen', year: '1993', genres: ['Strategy', 'RPG'], director: 'Quest', actors: [], type: 'game',
        styles: [{ name: 'Tarot Strategy', promptString: 'SNES strategy, tarot cards, unit squads, medieval map' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '16-bit', resolution: '24x24', colorPalette: 'medieval',
            characters: [
                {
                    name: 'Lord', role: 'player', directions: 4, actions: [
                        { action: 'idle', frames: 2, description: 'armored leader' },
                        { action: 'attack', frames: 2, description: 'commanding troops' }
                    ]
                }
            ],
            tilesets: [{ name: 'World Map', type: 'floor', variants: 8, description: 'mode 7 map' }],
            items: [{ name: 'Tarot Card', category: 'powerup', animated: false, frames: 1, description: 'major arcana' }],
            ui: [{ name: 'Reputation', description: 'alignment meter' }]
        }
    },

    // Castlevania SOTN
    {
        id: 'sotn', title: 'Castlevania: Symphony of the Night', year: '1997', genres: ['Metroidvania', 'Action'], director: 'Konami', actors: [], type: 'game',
        styles: [{ name: 'Gothic Pixel Masterpiece', promptString: 'luxurious pixel art, gothic castle, smooth animation, afterimages' }],
        gameAssets: {
            perspective: 'side-scroller', graphicsStyle: '32-bit', resolution: '64x64', colorPalette: 'gothic masterful',
            characters: [
                {
                    name: 'Alucard', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 8, description: 'vampire son, cape blowing' },
                        { action: 'run', frames: 12, description: 'smooth running with afterimage' },
                        { action: 'slash', frames: 6, description: 'sword attack' },
                        { action: 'backdash', frames: 4, description: 'sliding backwards' },
                        { action: 'mist', frames: 8, description: 'transforming into mist' },
                        { action: 'bat', frames: 4, description: 'transforming into bat' }
                    ]
                }
            ],
            tilesets: [{ name: 'Castle', type: 'floor', variants: 12, description: 'ornate castle interiors' }],
            items: [{ name: 'Relic', category: 'collectible', animated: true, frames: 4, description: 'magical artifact' }],
            ui: [{ name: 'Map', description: 'castle completion map' }]
        }
    },

    // Bloodborne
    {
        id: 'bloodborne', title: 'Bloodborne', year: '2015', genres: ['Action', 'RPG'], director: 'FromSoftware', actors: [], type: 'game',
        styles: [{ name: 'Victorian Horror', promptString: 'lovecraftian victorian, gothic horror, blood, trenchcoats' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark gothic',
            characters: [
                {
                    name: 'Hunter', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'hunter in trenchcoat' },
                        { action: 'dash', frames: 4, description: 'quick step dodge' },
                        { action: 'trick_weapon', frames: 6, description: 'transforming saw cleaver' },
                        { action: 'visceral', frames: 8, description: 'ripping attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Yharnam', type: 'floor', variants: 8, description: 'cobblestone streets, coffins' }],
            items: [{ name: 'Blood Vial', category: 'consumable', animated: false, frames: 1, description: 'healing blood' }],
            ui: [{ name: 'Echoes', description: 'blood echo counter' }]
        }
    },

    // Sekiro
    {
        id: 'sekiro', title: 'Sekiro: Shadows Die Twice', year: '2019', genres: ['Action', 'Adventure'], director: 'FromSoftware', actors: [], type: 'game',
        styles: [{ name: 'Feudal Japan', promptString: 'sengoku era, shinobi, sparks clashing, intense swordplay' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'autumn japan',
            characters: [
                {
                    name: 'Wolf', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'one-armed shinobi' },
                        { action: 'deflect', frames: 2, description: 'sparking sword parry' },
                        { action: 'grapple', frames: 4, description: 'grappling hook' },
                        { action: 'deathblow', frames: 6, description: 'killing finisher' }
                    ]
                }
            ],
            tilesets: [{ name: 'Castle', type: 'floor', variants: 8, description: 'japanese castle roof' }],
            items: [{ name: 'Gourd', category: 'consumable', animated: false, frames: 1, description: 'healing gourd' }],
            ui: [{ name: 'Posture', description: 'posture bar' }]
        }
    },

    // Nier Automata
    {
        id: 'nier-automata', title: 'NieR: Automata', year: '2017', genres: ['Action', 'RPG'], director: 'Yoko Taro', actors: [], type: 'game',
        styles: [{ name: 'Android Action', promptString: 'post-apocalyptic ruins, blindfolded androids, stylish combat, beige ruins' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'muted beige',
            characters: [
                {
                    name: '2B', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'battle android in dress' },
                        { action: 'run', frames: 8, description: 'fast graceful run' },
                        { action: 'slash', frames: 6, description: 'floating sword attack' },
                        { action: 'evade', frames: 6, description: 'perfect dodge' }
                    ]
                },
                {
                    name: 'Pod', role: 'player', directions: 8, actions: [
                        { action: 'hover', frames: 4, description: 'floating robot assistant' },
                        { action: 'fire', frames: 4, description: 'shooting laser' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ruins', type: 'floor', variants: 8, description: 'overgrown city ruins' }],
            items: [{ name: 'Chip', category: 'equipment', animated: false, frames: 1, description: 'plugin chip' }],
            ui: [{ name: 'System', description: 'minimalist beige UI' }]
        }
    },

    // Persona 5
    {
        id: 'persona-5', title: 'Persona 5', year: '2016', genres: ['JRPG', 'Social Sim'], director: 'Atlus', actors: [], type: 'game',
        styles: [{ name: 'Stylish Pop', promptString: 'punk red and black, comic book style, acid jazz aesthetic' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'red and black',
            characters: [
                {
                    name: 'Joker', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'thief in trenchcoat' },
                        { action: 'ambush', frames: 6, description: 'ripping mask off' },
                        { action: 'all_out', frames: 8, description: 'finishing pose' }
                    ]
                }
            ],
            tilesets: [{ name: 'Casino', type: 'floor', variants: 8, description: 'flashy palace interior' }],
            items: [{ name: 'Mask', category: 'collectible', animated: true, frames: 2, description: 'persona mask' }],
            ui: [{ name: 'Menu', description: 'stylish punk menu' }]
        }
    },

    // Kingdom Hearts
    {
        id: 'kingdom-hearts', title: 'Kingdom Hearts', year: '2002', genres: ['Action', 'RPG'], director: 'Square', actors: [], type: 'game',
        styles: [{ name: 'Disney Anime', promptString: 'anime boy with keyblade, disney characters, zipper clothes' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '48x48', colorPalette: 'colorful',
            characters: [
                {
                    name: 'Sora', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'spiky hair, big shoes' },
                        { action: 'attack', frames: 4, description: 'keyblade swing' },
                        { action: 'magic', frames: 4, description: 'casting magic' },
                        { action: 'glide', frames: 4, description: 'floating through air' }
                    ]
                },
                {
                    name: 'Heartless', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'shadow creature' },
                        { action: 'jump', frames: 4, description: 'leaping attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Traverse Town', type: 'floor', variants: 8, description: 'night town with stars' }],
            items: [{ name: 'Potion', category: 'consumable', animated: false, frames: 1, description: 'green bottled potion' }],
            ui: [{ name: 'command', description: 'battle menu list' }]
        }
    },

    // Monster Hunter
    {
        id: 'monster-hunter', title: 'Monster Hunter: World', year: '2018', genres: ['Action', 'RPG'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Hunting Action', promptString: 'giant realistic monsters, oversized weapons, nature, cooking' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'realistic nature',
            characters: [
                {
                    name: 'Hunter', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'armored hunter' },
                        { action: 'charge', frames: 6, description: 'charging greatsword' },
                        { action: 'dodge', frames: 4, description: 'dive dodge' },
                        { action: 'carve', frames: 4, description: 'carving materials' }
                    ]
                },
                {
                    name: 'Palico', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'cat companion' },
                        { action: 'heal', frames: 4, description: 'using vigorwasp' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 8, description: 'ancient forest' }],
            items: [{ name: 'Meat', category: 'consumable', animated: true, frames: 4, description: 'roasting spit' }],
            ui: [{ name: 'Sharpness', description: 'weapon sharpness gauge' }]
        }
    },

    // Devil May Cry
    {
        id: 'dmc', title: 'Devil May Cry 5', year: '2019', genres: ['Action', 'Hack and Slash'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Stylish Action', promptString: 'over the top action, demons, dual pistols, trenchcoats, SSS rank' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'gothic rock',
            characters: [
                {
                    name: 'Dante', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'legendary devil hunter' },
                        { action: 'stinger', frames: 4, description: 'sword thrust' },
                        { action: 'shoot', frames: 4, description: 'ebony and ivory' },
                        { action: 'taunt', frames: 6, description: 'stylish taunt' }
                    ]
                }
            ],
            tilesets: [{ name: 'Demon World', type: 'floor', variants: 8, description: 'twisted organic structures' }],
            items: [{ name: 'Orb', category: 'collectible', animated: true, frames: 4, description: 'red orb' }],
            ui: [{ name: 'Style Rank', description: 'D C B A S SS SSS letters' }]
        }
    },

    // Bayonetta
    {
        id: 'bayonetta', title: 'Bayonetta', year: '2009', genres: ['Action', 'Hack and Slash'], director: 'PlatinumGames', actors: [], type: 'game',
        styles: [{ name: 'Witch Time', promptString: 'sexy witch, hair magic, guns on feet, angels, climax action' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'baroque',
            characters: [
                {
                    name: 'Bayonetta', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'tall witch posing' },
                        { action: 'kick', frames: 4, description: 'gun heel kick' },
                        { action: 'summon', frames: 8, description: 'giant hair demon' },
                        { action: 'pose', frames: 4, description: 'vogue pose' }
                    ]
                }
            ],
            tilesets: [{ name: 'Paradiso', type: 'floor', variants: 6, description: 'heavenly architecture' }],
            items: [{ name: 'Lollipop', category: 'consumable', animated: false, frames: 1, description: 'green lollipop' }],
            ui: [{ name: 'Magic', description: 'magic gauge' }]
        }
    },

    // God of War
    {
        id: 'god-of-war', title: 'God of War (2018)', year: '2018', genres: ['Action', 'Adventure'], director: 'Santa Monica', actors: [], type: 'game',
        styles: [{ name: 'Norse Epic', promptString: 'bearded Kratos, snowy midgard, leviathan axe, boy' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'cold norse',
            characters: [
                {
                    name: 'Kratos', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'bearded god with axe' },
                        { action: 'swing', frames: 6, description: 'axe swing' },
                        { action: 'throw', frames: 4, description: 'throwing axe' },
                        { action: 'recall', frames: 4, description: 'catching axe' },
                        { action: 'rage', frames: 6, description: 'spartan rage' }
                    ]
                },
                {
                    name: 'Atreus', role: 'player', directions: 8, actions: [
                        { action: 'shoot', frames: 4, description: 'bow shot' },
                        { action: 'jump', frames: 4, description: 'jumping on enemy' }
                    ]
                }
            ],
            tilesets: [{ name: 'Midgard', type: 'floor', variants: 8, description: 'snowy forest' }],
            items: [{ name: 'Hacksilver', category: 'collectible', animated: true, frames: 2, description: 'currency' }],
            ui: [{ name: 'Rage Meter', description: 'red bar' }]
        }
    },

    // Uncharted
    {
        id: 'uncharted', title: 'Uncharted 2: Among Thieves', year: '2009', genres: ['Action', 'Adventure'], director: 'Naughty Dog', actors: [], type: 'game',
        styles: [{ name: 'Cinematic Adventure', promptString: 'pulp adventure, treasure hunting, explosions, climbing, set pieces' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'warm adventure',
            characters: [
                {
                    name: 'Drake', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'half tuck shirt adventurer' },
                        { action: 'climb', frames: 6, description: 'shimmying ledge' },
                        { action: 'shoot', frames: 4, description: 'cover shooting' },
                        { action: 'hang', frames: 4, description: 'hanging one hand' }
                    ]
                }
            ],
            tilesets: [{ name: 'Nepal', type: 'floor', variants: 8, description: 'war torn city' }],
            items: [{ name: 'Treasure', category: 'collectible', animated: true, frames: 2, description: 'glinting relic' }],
            ui: [{ name: 'Journal', description: 'notebook sketch' }]
        }
    },

    // The Last of Us
    {
        id: 'last-of-us', title: 'The Last of Us', year: '2013', genres: ['Action', 'Survival'], director: 'Naughty Dog', actors: [], type: 'game',
        styles: [{ name: 'Post-Pandemic', promptString: 'overgrown city, fungal zombies, clickers, gritty survival' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'overgrown green',
            characters: [
                {
                    name: 'Joel', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'tired survivor' },
                        { action: 'crouch', frames: 4, description: 'stealth crouching' },
                        { action: 'listen', frames: 2, description: 'listening mode' },
                        { action: 'melee', frames: 4, description: 'pipe swing' }
                    ]
                },
                {
                    name: 'Clicker', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'fungal blind zombie' },
                        { action: 'twitch', frames: 4, description: 'erratic movement' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 8, description: 'overgrown street' }],
            items: [{ name: 'Brick', category: 'weapon', animated: false, frames: 1, description: 'throwable brick' }],
            ui: [{ name: 'Crafting', description: 'shive/medkit icons' }]
        }
    },

    // Tomb Raider
    {
        id: 'tomb-raider', title: 'Tomb Raider (1996)', year: '1996', genres: ['Action', 'Adventure'], director: 'Core Design', actors: [], type: 'game',
        styles: [{ name: 'Classic Polygon', promptString: 'early 3D rugged polygons, tank controls, dual pistols, tombs' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '48x48', colorPalette: 'cave brown',
            characters: [
                {
                    name: 'Lara', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 1, description: 'polygon lara croft' },
                        { action: 'run', frames: 6, description: 'gymnastic run' },
                        { action: 'jump', frames: 4, description: 'flip jump' },
                        { action: 'climb', frames: 4, description: 'ledge pull up' },
                        { action: 'shoot', frames: 2, description: 'dual pistol fire' }
                    ]
                }
            ],
            tilesets: [{ name: 'Cave', type: 'floor', variants: 6, description: 'ancient ruins' }],
            items: [{ name: 'Medipack', category: 'consumable', animated: false, frames: 1, description: 'large medipack' }],
            ui: [{ name: 'Health', description: 'health bar' }]
        }
    },

    // Assassin's Creed
    {
        id: 'assassins-creed', title: "Assassin's Creed II", year: '2009', genres: ['Action', 'Adventure'], director: 'Ubisoft', actors: [], type: 'game',
        styles: [{ name: 'Renaissance', promptString: 'Italian renaissance, hooded assassin, parkour, hidden blade' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'warm italian',
            characters: [
                {
                    name: 'Ezio', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'hooded assassin' },
                        { action: 'run', frames: 8, description: 'sprinting' },
                        { action: 'parkour', frames: 6, description: 'climbing building' },
                        { action: 'leap', frames: 4, description: 'leap of faith' },
                        { action: 'stab', frames: 4, description: 'hidden blade assassination' }
                    ]
                }
            ],
            tilesets: [{ name: 'Roof', type: 'floor', variants: 8, description: 'terracotta tiles' }],
            items: [{ name: 'Feather', category: 'collectible', animated: true, frames: 2, description: 'eagle feather' }],
            ui: [{ name: 'Social Status', description: 'notoriety meter' }]
        }
    },

    // Prince of Persia
    {
        id: 'prince-of-persia', title: 'Prince of Persia: The Sands of Time', year: '2003', genres: ['Action', 'Platformer'], director: 'Ubisoft', actors: [], type: 'game',
        styles: [{ name: 'Time Rewind', promptString: 'arabian nights, acrobatics, time manipulation, sand monsters' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'golden sand',
            characters: [
                {
                    name: 'Prince', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'shirtless prince with dagger' },
                        { action: 'run', frames: 6, description: 'wall running' },
                        { action: 'rewind', frames: 6, description: 'time reversing effect' },
                        { action: 'freeze', frames: 4, description: 'sand freeze attack' }
                    ]
                }
            ],
            tilesets: [{ name: 'Palace', type: 'floor', variants: 8, description: 'persian palace' }],
            items: [{ name: 'Sand Cloud', category: 'collectible', animated: true, frames: 4, description: 'sands of time' }],
            ui: [{ name: 'Sand Tank', description: 'dagger energy' }]
        }
    },

    // Silent Hill
    {
        id: 'silent-hill', title: 'Silent Hill 2', year: '2001', genres: ['Horror', 'Survival'], director: 'Team Silent', actors: [], type: 'game',
        styles: [{ name: 'Psychological Horror', promptString: 'foggy town, rust and decay, pyramid head, psychological horror' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'foggy grey and rust',
            characters: [
                {
                    name: 'James', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'man in green jacket' },
                        { action: 'walk', frames: 6, description: 'slow walking' },
                        { action: 'swing', frames: 4, description: 'swinging wooden plank' }
                    ]
                },
                {
                    name: 'Nurse', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'twitching faceless nurse' },
                        { action: 'attack', frames: 4, description: 'pipe swing' }
                    ]
                },
                {
                    name: 'Pyramid Head', role: 'boss', directions: 4, actions: [
                        { action: 'drag', frames: 6, description: 'dragging great knife' },
                        { action: 'swing', frames: 4, description: 'heavy overhead swing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Otherworld', type: 'floor', variants: 8, description: 'chain link fence and rust' }],
            items: [{ name: 'Radio', category: 'equipment', animated: true, frames: 2, description: 'static noise radio' }],
            ui: [{ name: 'Inventory', description: 'minimalist item list' }]
        }
    },

    // Resident Evil 4
    {
        id: 're4', title: 'Resident Evil 4', year: '2005', genres: ['Horror', 'Action'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Rural Horror', promptString: 'dreary european village, ganados, cultists, brown and grey' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'autumn decay',
            characters: [
                {
                    name: 'Leon', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'agent with bomber jacket' },
                        { action: 'aim', frames: 2, description: 'laser sight aim' },
                        { action: 'kick', frames: 4, description: 'roundhouse kick' },
                        { action: 'suplex', frames: 6, description: 'wrestling move' }
                    ]
                },
                {
                    name: 'Chainsaw Man', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'bag head villager' },
                        { action: 'rev', frames: 4, description: 'revving chainsaw' }
                    ]
                }
            ],
            tilesets: [{ name: 'Village', type: 'floor', variants: 8, description: 'muddy village square' }],
            items: [{ name: 'Green Herb', category: 'consumable', animated: false, frames: 1, description: 'potted herb' }],
            ui: [{ name: 'Attache Case', description: 'inventory grid tetris' }]
        }
    },

    // Bioshock Infinite
    {
        id: 'bioshock-infinite', title: 'BioShock Infinite', year: '2013', genres: ['FPS', 'Action'], director: 'Irrational Games', actors: [], type: 'game',
        styles: [{ name: 'Sky City', promptString: 'floating city Columbia, bright americana, blue skies, steampunk' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'bright americana',
            characters: [
                {
                    name: 'Booker', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'holding skyhook' },
                        { action: 'shoot', frames: 4, description: 'firing pistol' },
                        { action: 'vigor', frames: 6, description: 'casting magic trap' },
                        { action: 'skyline', frames: 4, description: 'riding rail line' }
                    ]
                },
                {
                    name: 'Elizabeth', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'blue dress woman' },
                        { action: 'toss', frames: 4, description: 'throwing coin/ammo' }
                    ]
                }
            ],
            tilesets: [{ name: 'Columbia', type: 'floor', variants: 8, description: 'white marble floating platforms' }],
            items: [{ name: 'Vigor', category: 'consumable', animated: true, frames: 4, description: 'colorful potion bottle' }],
            ui: [{ name: 'Shield', description: 'breaking glass shield effect' }]
        }
    },

    // Dishonored
    {
        id: 'dishonored', title: 'Dishonored', year: '2012', genres: ['Stealth', 'Action'], director: 'Arkane', actors: [], type: 'game',
        styles: [{ name: 'Oil Painting Steampunk', promptString: 'whale oilpunk, victorian industrial, watercolor textures, mask' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'drab oil painting',
            characters: [
                {
                    name: 'Corvo', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'masked assassin' },
                        { action: 'blink', frames: 6, description: 'teleporting forward' },
                        { action: 'stab', frames: 4, description: 'sword assassination' },
                        { action: 'choke', frames: 6, description: 'non-lethal takedown' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dunwall', type: 'floor', variants: 8, description: 'cobblestone and brick' }],
            items: [{ name: 'Rune', category: 'collectible', animated: true, frames: 4, description: 'whale bone rune' }],
            ui: [{ name: 'Mana', description: 'blue elixir vial' }]
        }
    },

    // Dead Space
    {
        id: 'dead-space', title: 'Dead Space', year: '2008', genres: ['Horror', 'Sci-Fi'], director: 'EA Redwood Shores', actors: [], type: 'game',
        styles: [{ name: 'Industrial Horror', promptString: 'rusty spaceship corridors, necromorphs, holographic UI, engineering suit' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'rusty metal',
            characters: [
                {
                    name: 'Isaac', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'engineer in rig suit' },
                        { action: 'aim', frames: 2, description: 'aiming plasma cutter' },
                        { action: 'stomp', frames: 4, description: 'heavy boot stomp' }
                    ]
                },
                {
                    name: 'Necromorph', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'bladed limbs zombie' },
                        { action: 'crawl', frames: 6, description: 'scuttling vent' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ishimura', type: 'floor', variants: 8, description: 'metal grid floor' }],
            items: [{ name: 'Node', category: 'collectible', animated: false, frames: 1, description: 'power node' }],
            ui: [{ name: 'Spine Health', description: 'health bar on back of suit' }]
        }
    },

    // Control
    {
        id: 'control', title: 'Control', year: '2019', genres: ['Action', 'Adventure'], director: 'Remedy', actors: [], type: 'game',
        styles: [{ name: 'Brutalist Paranormal', promptString: 'concrete brutalism, shifting building, red lighting, floating bodies' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'concrete grey and red',
            characters: [
                {
                    name: 'Jesse', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'director with service weapon' },
                        { action: 'launch', frames: 6, description: 'throwing debris telekinetically' },
                        { action: 'levitate', frames: 4, description: 'floating in air' },
                        { action: 'shoot', frames: 4, description: 'morphing gun fire' }
                    ]
                }
            ],
            tilesets: [{ name: 'Oldest House', type: 'floor', variants: 8, description: 'concrete office floor' }],
            items: [{ name: 'File', category: 'collectible', animated: false, frames: 1, description: 'redacted document' }],
            ui: [{ name: 'Mission', description: 'giant bold sans-serif text' }]
        }
    },

    // Alan Wake
    {
        id: 'alan-wake', title: 'Alan Wake', year: '2010', genres: ['Horror', 'Action'], director: 'Remedy', actors: [], type: 'game',
        styles: [{ name: 'Psychological Thriller', promptString: 'dark pacific northwest forest, flashlight beam, shadow monsters' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark forest',
            characters: [
                {
                    name: 'Alan', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'writer with flashlight' },
                        { action: 'dodge', frames: 4, description: 'cinematic dodge' },
                        { action: 'burn', frames: 4, description: 'shining light on enemy' },
                        { action: 'shoot', frames: 4, description: 'revolver fire' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 8, description: 'pine needles and darkness' }],
            items: [{ name: 'Battery', category: 'consumable', animated: false, frames: 1, description: 'energizer battery' }],
            ui: [{ name: 'Manuscript', description: 'floating page text' }]
        }
    },

    // Horizon Zero Dawn
    {
        id: 'horizon', title: 'Horizon Zero Dawn', year: '2017', genres: ['Action', 'RPG'], director: 'Guerrilla', actors: [], type: 'game',
        styles: [{ name: 'Tribal Sci-Fi', promptString: 'nature reclaimed ruins, robotic dinosaurs, tribal clothing, bow and arrow' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'vibrant nature',
            characters: [
                {
                    name: 'Aloy', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'red hair tribal hunter' },
                        { action: 'draw', frames: 4, description: 'drawing bow' },
                        { action: 'slide', frames: 6, description: 'sliding under machine' },
                        { action: 'override', frames: 6, description: 'hacking machine with spear' }
                    ]
                },
                {
                    name: 'Watcher', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'small raptor robot' },
                        { action: 'scan', frames: 4, description: 'eye light changing color' },
                        { action: 'flash', frames: 4, description: 'blinding flash' }
                    ]
                }
            ],
            tilesets: [{ name: 'Wilds', type: 'floor', variants: 8, description: 'tall red grass' }],
            items: [{ name: 'Focus', category: 'equipment', animated: true, frames: 4, description: 'augmented reality device' }],
            ui: [{ name: 'Compass', description: 'top of screen compass' }]
        }
    },

    // Ghost of Tsushima
    {
        id: 'ghost-tsushima', title: 'Ghost of Tsushima', year: '2020', genres: ['Action', 'Adventure'], director: 'Sucker Punch', actors: [], type: 'game',
        styles: [{ name: 'Cinematic Samurai', promptString: 'feudal japan, blowing wind, falling leaves, kurosawa mode, samurai' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'vibrant japan',
            characters: [
                {
                    name: 'Jin', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'samurai with katana' },
                        { action: 'stance', frames: 4, description: 'changing combat stance' },
                        { action: 'strike', frames: 4, description: 'katana slash' },
                        { action: 'bow', frames: 4, description: 'honorable bow' },
                        { action: 'flute', frames: 4, description: 'playing flute' }
                    ]
                }
            ],
            tilesets: [{ name: 'Field', type: 'floor', variants: 8, description: 'pampas grass field' }],
            items: [{ name: 'Supply', category: 'collectible', animated: false, frames: 1, description: 'linen bundle' }],
            ui: [{ name: 'Wind', description: 'guiding wind particles' }]
        }
    },

    // Cyberpunk 2077
    {
        id: 'cyberpunk', title: 'Cyberpunk 2077', year: '2020', genres: ['RPG', 'FPS'], director: 'CD Projekt Red', actors: [], type: 'game',
        styles: [{ name: 'Night City', promptString: 'neon city, cybernetics, high tech low life, chrome' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'neon yellow and blue',
            characters: [
                {
                    name: 'V', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'cyberpunk mercenary' },
                        { action: 'mantis', frames: 6, description: 'arm blades extending' },
                        { action: 'hack', frames: 4, description: 'scanning environment' }
                    ]
                }
            ],
            tilesets: [{ name: 'Street', type: 'floor', variants: 8, description: 'wet neon pavement' }],
            items: [{ name: 'Chip', category: 'collectible', animated: false, frames: 1, description: 'biochip relic' }],
            ui: [{ name: 'HUD', description: 'red cybernetic overlay' }]
        }
    },

    // Fable
    {
        id: 'fable', title: 'Fable', year: '2004', genres: ['RPG', 'Adventure'], director: 'Lionhead', actors: [], type: 'game',
        styles: [{ name: 'Fairytale', promptString: 'magical forest, glowing will lines, exaggerated fantasy, chicken kicking' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'warm bloom',
            characters: [
                {
                    name: 'Hero', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'hero of oakvale' },
                        { action: 'swing', frames: 4, description: 'sword flourish' },
                        { action: 'bow', frames: 4, description: 'draw bow' },
                        { action: 'magic', frames: 6, description: 'lighting hands' }
                    ]
                }
            ],
            tilesets: [{ name: 'Albion', type: 'floor', variants: 8, description: 'lush green village' }],
            items: [{ name: 'Potion', category: 'consumable', animated: false, frames: 1, description: 'health potion' }],
            ui: [{ name: 'Alignment', description: 'halo or horns icon' }]
        }
    },

    // Kingdom Come
    {
        id: 'kingdom-come', title: 'Kingdom Come: Deliverance', year: '2018', genres: ['RPG', 'Simulation'], director: 'Warhorse', actors: [], type: 'game',
        styles: [{ name: 'Realistic Medieval', promptString: 'historical bohemian muddy village, authentic armor, no magic' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'muddy earth',
            characters: [
                {
                    name: 'Henry', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'peasant in tunic' },
                        { action: 'swing', frames: 6, description: 'clumsy sword swing' },
                        { action: 'block', frames: 4, description: 'desperate block' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mud', type: 'floor', variants: 8, description: 'muddy road' }],
            items: [{ name: 'Bread', category: 'consumable', animated: false, frames: 1, description: 'dry bread' }],
            ui: [{ name: 'Hunger', description: 'hunger icon' }]
        }
    },

    // Mount & Blade
    {
        id: 'mount-blade', title: 'Mount & Blade II: Bannerlord', year: '2020', genres: ['Strategy', 'RPG'], director: 'TaleWorlds', actors: [], type: 'game',
        styles: [{ name: 'Medieval Warfare', promptString: 'huge army battles, cavalry charge, siege engines, shield wall' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'earthy battle',
            characters: [
                {
                    name: 'Commander', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'mounted general' },
                        { action: 'point', frames: 2, description: 'ordering troops' },
                        { action: 'charge', frames: 6, description: 'couched lance charge' }
                    ]
                }
            ],
            tilesets: [{ name: 'Battlefield', type: 'floor', variants: 8, description: 'open plain' }],
            items: [{ name: 'Butter', category: 'consumable', animated: false, frames: 1, description: 'tub of butter' }],
            ui: [{ name: 'Command', description: 'unit order flags' }]
        }
    },

    // Crusader Kings
    {
        id: 'crusader-kings', title: 'Crusader Kings III', year: '2020', genres: ['Strategy', 'Simulation'], director: 'Paradox', actors: [], type: 'game',
        styles: [{ name: 'Grand Strategy Map', promptString: 'paper map, medieval portraits, crowns, court intrigue' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'parchment',
            characters: [
                {
                    name: 'King', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: '3D animated portrait' },
                        { action: 'angry', frames: 1, description: 'angry expression' },
                        { action: 'dead', frames: 1, description: 'skull icon' }
                    ]
                }
            ],
            tilesets: [{ name: 'Map', type: 'background', variants: 4, description: 'political map mode' }],
            items: [{ name: 'Crown', category: 'equipment', animated: false, frames: 1, description: 'gold crown' }],
            ui: [{ name: 'Succession', description: 'line of heirs' }]
        }
    },

    // Stellaris
    {
        id: 'stellaris', title: 'Stellaris', year: '2016', genres: ['Strategy', '4X'], director: 'Paradox', actors: [], type: 'game',
        styles: [{ name: 'Galactic Empire', promptString: 'star map, spaceships, alien diplomacy, nebula' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'low-poly-3d', resolution: '32x32', colorPalette: 'space nebula',
            characters: [
                {
                    name: 'Ship', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 2, description: 'corvette' },
                        { action: 'shoot', frames: 4, description: 'laser fire' },
                        { action: 'hyperlane', frames: 4, description: 'FTL jump' }
                    ]
                }
            ],
            tilesets: [{ name: 'Space', type: 'background', variants: 8, description: 'star field' }],
            items: [{ name: 'Relic', category: 'collectible', animated: true, frames: 4, description: 'ancient artifact' }],
            ui: [{ name: 'Resources', description: 'minerals/energy/alloys' }]
        }
    },

    // Divinity Original Sin 2
    {
        id: 'divinity-os2', title: 'Divinity: Original Sin 2', year: '2017', genres: ['RPG', 'Strategy'], director: 'Larian', actors: [], type: 'game',
        styles: [{ name: 'Elemental Fantasy', promptString: 'vibrant isometric fantasy, elemental surfaces, magic effects, origin characters' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '48x48', colorPalette: 'vibrant magic',
            characters: [
                {
                    name: 'Godwoken', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'mage with staff' },
                        { action: 'cast', frames: 6, description: 'casting fire spell' },
                        { action: 'sneak', frames: 4, description: 'turning into bush (barrelmancy)' }
                    ]
                }
            ],
            tilesets: [{ name: 'Rivellon', type: 'floor', variants: 8, description: 'beach sand and ruins' }],
            items: [{ name: 'Teleporter Pyramid', category: 'equipment', animated: true, frames: 2, description: 'pyramid' }],
            ui: [{ name: 'AP', description: 'action point bubbles' }]
        }
    },

    // Baldur's Gate 3
    {
        id: 'bg3', title: 'Baldur\'s Gate 3', year: '2023', genres: ['RPG', 'Strategy'], director: 'Larian', actors: [], type: 'game',
        styles: [{ name: 'Cinematic D&D', promptString: 'high fantasy photorealism, dice rolling, mind flayers, tadpole' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'rich fantasy',
            characters: [
                {
                    name: 'Tav', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'adventurer' },
                        { action: 'shove', frames: 4, description: 'push action' },
                        { action: 'jump', frames: 4, description: 'high jump' },
                        { action: 'cast', frames: 6, description: 'complex spell somatic component' }
                    ]
                }
            ],
            tilesets: [{ name: 'Camp', type: 'floor', variants: 8, description: 'wilderness camp' }],
            items: [{ name: 'D20', category: 'equipment', animated: true, frames: 20, description: 'rolling die' }],
            ui: [{ name: 'Hotbar', description: 'gold trim spell bar' }]
        }
    },

    // Pillars of Eternity
    {
        id: 'pillars-eternity', title: 'Pillars of Eternity', year: '2015', genres: ['RPG', 'Isometric'], director: 'Obsidian', actors: [], type: 'game',
        styles: [{ name: 'Painted Isometric', promptString: 'pre-rendered background style, souls, purple magic, classic CRPG' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '48x48', colorPalette: 'painted',
            characters: [
                {
                    name: 'Watcher', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'cloak wearing hero' },
                        { action: 'soul_read', frames: 6, description: 'purple soul touching' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dyrwood', type: 'background', variants: 4, description: 'detailed painted forest' }],
            items: [{ name: 'Grimoire', category: 'equipment', animated: false, frames: 1, description: 'spellbook' }],
            ui: [{ name: 'Combat Log', description: 'text log showing rolls' }]
        }
    },

    // Disco Elysium
    {
        id: 'disco-elysium', title: 'Disco Elysium', year: '2019', genres: ['RPG', 'Detective'], director: 'ZA/UM', actors: [], type: 'game',
        styles: [{ name: 'Oil Painting Decay', promptString: 'abstract oil painting, brush strokes, bleak city, thoughtful detective' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'muted oil',
            characters: [
                {
                    name: 'Raphaël', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'disheveled detective in green coat' },
                        { action: 'think', frames: 4, description: 'hand on chin' },
                        { action: 'disco', frames: 8, description: 'finger guns dance' },
                        { action: 'run', frames: 6, description: 'awkward jog' }
                    ]
                }
            ],
            tilesets: [{ name: 'Revachol', type: 'background', variants: 4, description: 'snowy painted streets' }],
            items: [{ name: 'Tie', category: 'equipment', animated: true, frames: 2, description: 'horrific necktie' }],
            ui: [{ name: 'Thought Cabinet', description: 'brain skill tree' }]
        }
    },

    // Outer Wilds
    {
        id: 'outer-wilds', title: 'Outer Wilds', year: '2019', genres: ['Adventure', 'Space'], director: 'Mobius Digital', actors: [], type: 'game',
        styles: [{ name: 'Rustic Space', promptString: 'wooden spaceship, marshmallows, camping, planets, time loop' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'campfire',
            characters: [
                {
                    name: 'Hatchling', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'four-eyed alien in suit' },
                        { action: 'jetpack', frames: 4, description: 'thrusting upward' },
                        { action: 'roast', frames: 4, description: 'roasting marshmallow' }
                    ]
                }
            ],
            tilesets: [{ name: 'Timber Hearth', type: 'floor', variants: 8, description: 'pine trees and geysers' }],
            items: [{ name: 'Signalscope', category: 'equipment', animated: false, frames: 1, description: 'listening device' }],
            ui: [{ name: 'Oxygen', description: 'tank gauge' }]
        }
    },

    // Subnautica
    {
        id: 'subnautica', title: 'Subnautica', year: '2018', genres: ['Survival', 'Adventure'], director: 'Unknown Worlds', actors: [], type: 'game',
        styles: [{ name: 'Alien Ocean', promptString: 'underwater, vibrant coral, terrifying leviathans, sci-fi tech' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'ocean blue',
            characters: [
                {
                    name: 'Diver', role: 'player', directions: 8, actions: [
                        { action: 'swim', frames: 6, description: 'swimming with fins' },
                        { action: 'knife', frames: 4, description: 'slashing knife' },
                        { action: 'scan', frames: 4, description: 'using scanner' }
                    ]
                },
                {
                    name: 'Reaper', role: 'enemy', directions: 8, actions: [
                        { action: 'swim', frames: 8, description: 'giant leviathan swimming' },
                        { action: 'grab', frames: 6, description: 'face grabbing claws' }
                    ]
                }
            ],
            tilesets: [{ name: 'Reef', type: 'floor', variants: 8, description: 'colorful coral' }],
            items: [{ name: 'Peeper', category: 'collectible', animated: true, frames: 4, description: 'eyeball fish' }],
            ui: [{ name: 'Oxygen', description: 'O2 indicator' }]
        }
    },

    // No Man's Sky
    {
        id: 'no-mans-sky', title: 'No Man\'s Sky', year: '2016', genres: ['Survival', 'Space'], director: 'Hello Games', actors: [], type: 'game',
        styles: [{ name: 'Procedural Sci-Fi', promptString: 'retro sci-fi book cover, vibrant colors, strange fauna, crystals' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'pastel sci-fi',
            characters: [
                {
                    name: 'Traveler', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'astronaut' },
                        { action: 'jetpack', frames: 4, description: 'boost jump' },
                        { action: 'laser', frames: 4, description: 'mining laser beam' }
                    ]
                }
            ],
            tilesets: [{ name: 'Planet', type: 'floor', variants: 8, description: 'red grass blue sky' }],
            items: [{ name: 'Ferrite', category: 'collectible', animated: false, frames: 1, description: 'rock element' }],
            ui: [{ name: 'Shield', description: 'hazard protection bar' }]
        }
    },

    // Valheim
    {
        id: 'valheim', title: 'Valheim', year: '2021', genres: ['Survival', 'Viking'], director: 'Iron Gate', actors: [], type: 'game',
        styles: [{ name: 'Low Poly Viking', promptString: 'PS1 style low poly textures, stunning lighting, vikings, forest' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '32x32', colorPalette: 'moody forest',
            characters: [
                {
                    name: 'Viking', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'bearded viking' },
                        { action: 'chop', frames: 6, description: 'chopping tree' },
                        { action: 'sneak', frames: 4, description: 'crouched sneaking' }
                    ]
                },
                {
                    name: 'Troll', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'giant blue troll' },
                        { action: 'smash', frames: 6, description: 'log smash' }
                    ]
                }
            ],
            tilesets: [{ name: 'Meadows', type: 'floor', variants: 8, description: 'green grass and bushes' }],
            items: [{ name: 'Hammer', category: 'equipment', animated: false, frames: 1, description: 'building hammer' }],
            ui: [{ name: 'Stamina', description: 'yellow bar' }]
        }
    },

    // Roblox
    {
        id: 'roblox', title: 'Roblox', year: '2006', genres: ['Platform', 'Creative'], director: 'Roblox Corp', actors: [], type: 'game',
        styles: [{ name: 'Blocky Avatar', promptString: 'plastic blocky characters, user generated worlds, simple shapes' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '32x32', colorPalette: 'plastic bright',
            characters: [
                {
                    name: 'Noob', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'yellow head blue shirt' },
                        { action: 'jump', frames: 4, description: 'stiff jump' },
                        { action: 'dance', frames: 8, description: 'floss dance' }
                    ]
                }
            ],
            tilesets: [{ name: 'Baseplate', type: 'floor', variants: 4, description: 'grey studs' }],
            items: [{ name: 'Coil', category: 'equipment', animated: true, frames: 4, description: 'gravity coil spring' }],
            ui: [{ name: 'Chat', description: 'bubble chat' }]
        }
    },

    // Genshin Impact
    {
        id: 'genshin', title: 'Genshin Impact', year: '2020', genres: ['Action', 'RPG'], director: 'HoYoverse', actors: [], type: 'game',
        styles: [{ name: 'Anime Open World', promptString: 'cel shaded anime, vibrant landscapes, elemental magic, gacha' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'anime vibrant',
            characters: [
                {
                    name: 'Traveler', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'anime hero' },
                        { action: 'skill', frames: 6, description: 'elemental skill burst' },
                        { action: 'glide', frames: 4, description: 'wind glider wings' }
                    ]
                },
                {
                    name: 'Slime', role: 'enemy', directions: 4, actions: [
                        { action: 'bounce', frames: 6, description: 'bouncing elemental slime' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mondstadt', type: 'floor', variants: 8, description: 'green plains and windmill' }],
            items: [{ name: 'Primogem', category: 'collectible', animated: true, frames: 4, description: 'star flaring gem' }],
            ui: [{ name: 'Burst', description: 'elemental burst icon' }]
        }
    },

    // Honkai Star Rail
    {
        id: 'honkai-star-rail', title: 'Honkai: Star Rail', year: '2023', genres: ['RPG', 'Strategy'], director: 'HoYoverse', actors: [], type: 'game',
        styles: [{ name: 'Space Anime', promptString: 'sci-fi anime, astral express, turn based ultimate, clean ui' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'sci-fi clean',
            characters: [
                {
                    name: 'Trailblazer', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'baseball bat carrier' },
                        { action: 'hit', frames: 4, description: 'swinging bat' },
                        { action: 'ultimate', frames: 8, description: 'galactic homerun' }
                    ]
                }
            ],
            tilesets: [{ name: 'Station', type: 'floor', variants: 8, description: 'sleek space station' }],
            items: [{ name: 'Ticket', category: 'collectible', animated: false, frames: 1, description: 'star rail pass' }],
            ui: [{ name: 'Technique', description: 'skill points' }]
        }
    },

    // Elden Ring
    {
        id: 'elden-ring', title: 'Elden Ring', year: '2022', genres: ['Action', 'RPG'], director: 'FromSoftware', actors: [], type: 'game',
        styles: [{ name: 'Golden Fantasy', promptString: 'erdtree gold light, dark fantasy, vast open world, weird monsters' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'gold and rot',
            characters: [
                {
                    name: 'Tarnished', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'knight looking at tree' },
                        { action: 'roll', frames: 6, description: 'combat roll' },
                        { action: 'flask', frames: 4, description: 'drinking crimson flask' },
                        { action: 'horse', frames: 4, description: 'summoning spectral steed' }
                    ]
                }
            ],
            tilesets: [{ name: 'Limgrave', type: 'floor', variants: 8, description: 'green fields and ruins' }],
            items: [{ name: 'Rune', category: 'collectible', animated: true, frames: 4, description: 'glowing golden rune' }],
            ui: [{ name: 'Grace', description: 'site of grace icon' }]
        }
    },

    // Dark Souls 3
    {
        id: 'dark-souls-3', title: 'Dark Souls III', year: '2016', genres: ['Action', 'RPG'], director: 'FromSoftware', actors: [], type: 'game',
        styles: [{ name: 'Ashen World', promptString: 'dying world, ash, embers, grey and fire, gothic spires' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'ash grey',
            characters: [
                {
                    name: 'Ashen One', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'knight in failing armor' },
                        { action: 'bonfire', frames: 4, description: 'resting at bonfire' },
                        { action: 'ember', frames: 4, description: 'restoring ember form' }
                    ]
                }
            ],
            tilesets: [{ name: 'Lothric', type: 'floor', variants: 8, description: 'high wall castle' }],
            items: [{ name: 'Estus', category: 'consumable', animated: true, frames: 2, description: 'orange glowing flask' }],
            ui: [{ name: 'Souls', description: 'soul counter' }]
        }
    },

    // Prey
    {
        id: 'prey', title: 'Prey (2017)', year: '2017', genres: ['Shooter', 'Immersive Sim'], director: 'Arkane', actors: [], type: 'game',
        styles: [{ name: 'Neo-Deco Sci-Fi', promptString: 'art deco space station, black mimic ooze, gloo gun, paranoia' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'gold and black',
            characters: [
                {
                    name: 'Morgan', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'scientist in red suit' },
                        { action: 'wrench', frames: 4, description: 'wrench swing' },
                        { action: 'mimic', frames: 4, description: 'transforming into coffee cup' }
                    ]
                },
                {
                    name: 'Mimic', role: 'enemy', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'black spider ooze' },
                        { action: 'hide', frames: 4, description: 'becoming object' }
                    ]
                }
            ],
            tilesets: [{ name: 'Talos I', type: 'floor', variants: 8, description: 'luxury space station carpet' }],
            items: [{ name: 'Neuromod', category: 'collectible', animated: false, frames: 1, description: 'eye needle device' }],
            ui: [{ name: 'Psi', description: 'blue psychic bar' }]
        }
    },

    // Doom Eternal
    {
        id: 'doom-eternal', title: 'DOOM Eternal', year: '2020', genres: ['FPS', 'Action'], director: 'id Software', actors: [], type: 'game',
        styles: [{ name: 'Arcade Metal', promptString: 'heavy metal hell, neon pickups, glory kills, fast demons' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'hell red',
            characters: [
                {
                    name: 'Slayer', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 4, description: 'green armor doomguy' },
                        { action: 'rip', frames: 6, description: 'tearing demon apart' },
                        { action: 'chainsaw', frames: 4, description: 'sawing ammo' }
                    ]
                },
                {
                    name: 'Cacodemon', role: 'enemy', directions: 4, actions: [
                        { action: 'float', frames: 4, description: 'flying red ball' },
                        { action: 'bite', frames: 4, description: 'huge mouth bite' }
                    ]
                }
            ],
            tilesets: [{ name: 'Hell', type: 'floor', variants: 8, description: 'flesh and stone' }],
            items: [{ name: '1Up', category: 'collectible', animated: true, frames: 4, description: 'green helmet pickup' }],
            ui: [{ name: 'Dash', description: 'dash recharge meter' }]
        }
    },

    // Street Fighter III: 3rd Strike
    {
        id: 'sf3-3rd', title: 'Street Fighter III: 3rd Strike', year: '1999', genres: ['Fighting', 'Arcade'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Fluid Pixel Art', promptString: 'sublime 2D animation, fluid movement, parry flash, hip hop aesthetic, urban' }],
        gameAssets: {
            perspective: 'fighting', graphicsStyle: 'pixel-art-hd', resolution: '128x128', colorPalette: 'urban vibrant',
            characters: [
                {
                    name: 'Ryu', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 10, description: 'bouncing fighting stance' },
                        { action: 'hadoken', frames: 8, description: 'blue energy ball thrust' },
                        { action: 'shoryuken', frames: 12, description: 'rising uppercut' },
                        { action: 'parry', frames: 4, description: 'blue flash block' }
                    ]
                },
                {
                    name: 'Chun-Li', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 10, description: 'wushu stance' },
                        { action: 'kicks', frames: 12, description: 'lightning kick barrage' }
                    ]
                }
            ],
            tilesets: [{ name: 'Subway', type: 'background', variants: 4, description: 'graffiti subway station' }],
            items: [{ name: 'Super Art', category: 'ui', animated: true, frames: 8, description: 'super meter bar' }],
            ui: [{ name: 'KO', description: 'giant KO text' }]
        }
    },

    // Tekken 3
    {
        id: 'tekken-3', title: 'Tekken 3', year: '1997', genres: ['Fighting', 'Arcade'], director: 'Namco', actors: [], type: 'game',
        styles: [{ name: 'Blocky 3D Fighter', promptString: 'early 3D polygons, blocky martial arts, sparks on hit, king of iron fist' }],
        gameAssets: {
            perspective: 'fighting', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'arcade bright',
            characters: [
                {
                    name: 'Jin', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'mishima style stance' },
                        { action: 'punch', frames: 4, description: 'electric wind god fist' },
                        { action: 'kick', frames: 4, description: 'high kick' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dojo', type: 'background', variants: 4, description: 'wooden floor dojo' }],
            items: [{ name: 'Spark', category: 'ui', animated: true, frames: 4, description: 'hit spark effect' }],
            ui: [{ name: 'Lifebar', description: 'yellow and red health bar' }]
        }
    },

    // SoulCalibur II
    {
        id: 'soulcalibur-2', title: 'SoulCalibur II', year: '2002', genres: ['Fighting', 'Arcade'], director: 'Namco', actors: [], type: 'game',
        styles: [{ name: 'Weapon Fighter', promptString: 'tale of souls and swords, medieval armor, intense weapon trails, arena ring out' }],
        gameAssets: {
            perspective: 'fighting', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'epic fantasy',
            characters: [
                {
                    name: 'Siegfried', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'holding giant sword' },
                        { action: 'slash', frames: 6, description: 'massive sword swing' },
                        { action: 'kick', frames: 4, description: 'armored kick' }
                    ]
                }
            ],
            tilesets: [{ name: 'Arena', type: 'floor', variants: 8, description: 'stone ring platform' }],
            items: [{ name: 'Soul Edge', category: 'equipment', animated: true, frames: 4, description: 'cursed eye sword' }],
            ui: [{ name: 'Timer', description: 'tournament timer' }]
        }
    },

    // Guilty Gear Xrd
    {
        id: 'guilty-gear-xrd', title: 'Guilty Gear Xrd', year: '2014', genres: ['Fighting', 'Anime'], director: 'Arc System Works', actors: [], type: 'game',
        styles: [{ name: 'Anime 3D Cel', promptString: '3D that looks like 2D anime, intense effects, heavy metal, oversized weapons' }],
        gameAssets: {
            perspective: 'fighting', graphicsStyle: 'cel-shaded', resolution: '128x128', colorPalette: 'anime neon',
            characters: [
                {
                    name: 'Sol', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 8, description: 'lazy stance with big sword' },
                        { action: 'slash', frames: 6, description: 'fire sword attack' },
                        { action: 'dragon', frames: 8, description: 'install transformation' }
                    ]
                }
            ],
            tilesets: [{ name: 'Stage', type: 'background', variants: 4, description: 'detailed anime background' }],
            items: [{ name: 'Burst', category: 'ui', animated: true, frames: 8, description: 'golden burst explosion' }],
            ui: [{ name: 'Tension', description: 'tension gauge' }]
        }
    },

    // The King of Fighters 98
    {
        id: 'kof-98', title: 'The King of Fighters \'98', year: '1998', genres: ['Fighting', 'Arcade'], director: 'SNK', actors: [], type: 'game',
        styles: [{ name: 'Neo Geo Pixel', promptString: 'snk pixel art, detailed backgrounds, team battle, 90s fashion' }],
        gameAssets: {
            perspective: 'fighting', graphicsStyle: '16-bit', resolution: '64x64', colorPalette: 'neo geo vibrant',
            characters: [
                {
                    name: 'Kyo', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'cool stance' },
                        { action: 'fire', frames: 6, description: 'purple flames' }
                    ]
                }
            ],
            tilesets: [{ name: 'Spain', type: 'background', variants: 4, description: 'alhambra fountain stage' }],
            items: [{ name: 'Letter', category: 'consumable', animated: false, frames: 1, description: 'invitation envelope' }],
            ui: [{ name: 'Time', description: 'counter' }]
        }
    },

    // Marvel vs Capcom 2
    {
        id: 'mvc2', title: 'Marvel vs. Capcom 2', year: '2000', genres: ['Fighting', 'Arcade'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Chaotic Crossover', promptString: 'superheroes vs street fighter, screen filling beams, jazz soundtrack, frenetic' }],
        gameAssets: {
            perspective: 'fighting', graphicsStyle: 'pixel-art-hd', resolution: '64x64', colorPalette: 'comic book',
            characters: [
                {
                    name: 'Wolverine', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'feral stance' },
                        { action: 'claw', frames: 4, description: 'berserker barrage' }
                    ]
                }
            ],
            tilesets: [{ name: 'Carnival', type: 'background', variants: 4, description: 'wacky circus background' }],
            items: [{ name: 'Assist', category: 'ui', animated: true, frames: 4, description: 'assist call icon' }],
            ui: [{ name: 'Hyper', description: 'hyper combo gauge' }]
        }
    },

    // Gran Turismo 3
    {
        id: 'gran-turismo-3', title: 'Gran Turismo 3: A-Spec', year: '2001', genres: ['Racing', 'Simulation'], director: 'Polyphony', actors: [], type: 'game',
        styles: [{ name: 'Realistic Sim', promptString: 'photorealistic cars, reflections, race track, replay mode, jazz lounge' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'realistic asphalt',
            characters: [
                {
                    name: 'Car', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 4, description: 'red sports car' },
                        { action: 'turn', frames: 4, description: 'wheels turning' },
                        { action: 'brake', frames: 2, description: 'brake lights on' }
                    ]
                }
            ],
            tilesets: [{ name: 'Track', type: 'floor', variants: 8, description: 'asphalt race track' }],
            items: [{ name: 'Tire', category: 'equipment', animated: false, frames: 1, description: 'racing slick tire' }],
            ui: [{ name: 'Speedo', description: 'analog speedometer' }]
        }
    },

    // Forza Horizon 5
    {
        id: 'forza-horizon-5', title: 'Forza Horizon 5', year: '2021', genres: ['Racing', 'Open World'], director: 'Playground Games', actors: [], type: 'game',
        styles: [{ name: 'Festival Vibes', promptString: 'mexico landscape, shiny cars, festival confetti, photorealism, blue sky' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'vibrant mexico',
            characters: [
                {
                    name: 'Supercar', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 4, description: 'green exotic car' },
                        { action: 'drift', frames: 4, description: 'drifting with smoke' }
                    ]
                }
            ],
            tilesets: [{ name: 'Jungle', type: 'floor', variants: 8, description: 'muddy jungle road' }],
            items: [{ name: 'XP Board', category: 'collectible', animated: false, frames: 1, description: 'purple xp signboard' }],
            ui: [{ name: 'Skill Chain', description: 'score multiplier' }]
        }
    },

    // Need for Speed Underground 2
    {
        id: 'nfs-underground-2', title: 'Need for Speed: Underground 2', year: '2004', genres: ['Racing', 'Open World'], director: 'EA Black Box', actors: [], type: 'game',
        styles: [{ name: 'Tuner Culture', promptString: 'neon underglow, wet asphalt at night, modified cars, riders on the storm' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'night neon',
            characters: [
                {
                    name: 'Tuner', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 4, description: 'modified hatchback with spoiler' },
                        { action: 'nos', frames: 4, description: 'motion blur boost' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 8, description: 'wet city street' }],
            items: [{ name: 'Nitrous', category: 'collectible', animated: true, frames: 4, description: 'blue N2O bottle' }],
            ui: [{ name: 'Map', description: 'mini-map with gps' }]
        }
    },

    // Burnout 3
    {
        id: 'burnout-3', title: 'Burnout 3: Takedown', year: '2004', genres: ['Racing', 'Arcade'], director: 'Criterion', actors: [], type: 'game',
        styles: [{ name: 'Crash Junction', promptString: 'high speed motion blur, sparks, twisted metal, explosion, takedown cam' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'motion blur',
            characters: [
                {
                    name: 'Racer', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 4, description: 'muscle car' },
                        { action: 'crash', frames: 6, description: 'car crumpling' }
                    ]
                }
            ],
            tilesets: [{ name: 'Highway', type: 'floor', variants: 8, description: 'busy highway' }],
            items: [{ name: 'Boost', category: 'ui', animated: true, frames: 4, description: 'flaming boost bar' }],
            ui: [{ name: 'Takedown', description: 'camera flash icon' }]
        }
    },

    // Wipeout
    {
        id: 'wipeout', title: 'Wipeout XL', year: '1996', genres: ['Racing', 'Future'], director: 'Psygnosis', actors: [], type: 'game',
        styles: [{ name: 'Anti-Grav Techno', promptString: 'futuristic anti-gravity ships, neon track, techno aesthetic, designers republic' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'techno neon',
            characters: [
                {
                    name: 'Ship', role: 'player', directions: 8, actions: [
                        { action: 'hover', frames: 4, description: 'ag-ship hovering' },
                        { action: 'turn', frames: 4, description: 'air brakes banking' }
                    ]
                }
            ],
            tilesets: [{ name: 'Track', type: 'floor', variants: 8, description: 'neon strip track' }],
            items: [{ name: 'Missile', category: 'projectile', animated: true, frames: 4, description: 'homing missile' }],
            ui: [{ name: 'Lap', description: 'digital lap counter' }]
        }
    },

    // F-Zero GX
    {
        id: 'f-zero-gx', title: 'F-Zero GX', year: '2003', genres: ['Racing', 'Future'], director: 'Amusement Vision', actors: [], type: 'game',
        styles: [{ name: 'High Speed Sci-Fi', promptString: 'blinding speed, twisting tubes, futuristic cities, captain falcon' }],
        gameAssets: {
            perspective: 'racing-behind', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'electric blue',
            characters: [
                {
                    name: 'Blue Falcon', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 4, description: 'blue futuristic racer' },
                        { action: 'boost', frames: 4, description: 'engine flare' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mute City', type: 'floor', variants: 8, description: 'floating gravity track' }],
            items: [{ name: 'Energy', category: 'collectible', animated: true, frames: 4, description: 'pink recharge strip' }],
            ui: [{ name: 'Speed', description: 'km/h > 2000' }]
        }
    },

    // Tetris Effect
    {
        id: 'tetris-effect', title: 'Tetris Effect', year: '2018', genres: ['Puzzle', 'Music'], director: 'Monstars', actors: [], type: 'game',
        styles: [{ name: 'Particle Zen', promptString: 'glowing tetris blocks, particle effects, whales in space, spiritual journey' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'vector', resolution: '32x32', colorPalette: 'particle neon',
            characters: [
                {
                    name: 'Block', role: 'player', directions: 1, actions: [
                        { action: 'fall', frames: 4, description: 'glowing tetromino' },
                        { action: 'spin', frames: 4, description: 'rotating piece' },
                        { action: 'clear', frames: 8, description: 'exploding into particles' }
                    ]
                }
            ],
            tilesets: [{ name: 'Grid', type: 'background', variants: 4, description: 'particle field' }],
            items: [{ name: 'Line', category: 'ui', animated: true, frames: 4, description: 'cleared line effect' }],
            ui: [{ name: 'Zone', description: 'zone trigger meter' }]
        }
    },

    // Puyo Puyo
    {
        id: 'puyo-puyo', title: 'Puyo Puyo Tetris', year: '2014', genres: ['Puzzle', 'Arcade'], director: 'Sonic Team', actors: [], type: 'game',
        styles: [{ name: 'Cute Blob Battle', promptString: 'colorful blobs, cute anime characters, combo chains, yelling spells' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '2d-clean', resolution: '32x32', colorPalette: 'candy pop',
            characters: [
                {
                    name: 'Puyo', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'squishy slime ball' },
                        { action: 'pop', frames: 4, description: 'popping slime' },
                        { action: 'connect', frames: 1, description: 'connected eyes' }
                    ]
                }
            ],
            tilesets: [{ name: 'Board', type: 'background', variants: 4, description: 'grid board' }],
            items: [{ name: 'Garbage', category: 'projectile', animated: false, frames: 1, description: 'grey nuisance puyo' }],
            ui: [{ name: 'Score', description: 'bouncy numbers' }]
        }
    },

    // Dr. Mario
    {
        id: 'dr-mario', title: 'Dr. Mario', year: '1990', genres: ['Puzzle'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Medical Puzzle', promptString: 'pixel art doctor, viruses, pills, magnifying glass' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'nes medical',
            characters: [
                {
                    name: 'Virus', role: 'enemy', directions: 1, actions: [
                        { action: 'dance', frames: 2, description: 'red blue yellow virus laughing' },
                        { action: 'die', frames: 2, description: 'spinning away' }
                    ]
                }
            ],
            tilesets: [{ name: 'Bottle', type: 'background', variants: 1, description: 'pill bottle interior' }],
            items: [{ name: 'Pill', category: 'projectile', animated: true, frames: 2, description: 'spinning capsule' }],
            ui: [{ name: 'Score', description: 'hiscore text' }]
        }
    },

    // Lemmings
    {
        id: 'lemmings', title: 'Lemmings', year: '1991', genres: ['Puzzle', 'Strategy'], director: 'DMA Design', actors: [], type: 'game',
        styles: [{ name: 'Tiny Sprites', promptString: 'tiny green hair lemmings, destructible terrain, pixel art, marching' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: '16-bit', resolution: '16x16', colorPalette: 'amiga vivid',
            characters: [
                {
                    name: 'Lemming', role: 'player', directions: 2, actions: [
                        { action: 'walk', frames: 8, description: 'marching tiny sprite' },
                        { action: 'dig', frames: 4, description: 'digging down' },
                        { action: 'block', frames: 1, description: 'armsout blocker' },
                        { action: 'explode', frames: 6, description: 'pop explosion' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dirt', type: 'floor', variants: 8, description: 'diggable dirt' }],
            items: [{ name: 'Umbrella', category: 'equipment', animated: true, frames: 4, description: 'floater umbrella' }],
            ui: [{ name: 'Panel', description: 'skill selection bar' }]
        }
    },

    // Worms
    {
        id: 'worms', title: 'Worms Armageddon', year: '1999', genres: ['Strategy', 'Artillery'], director: 'Team17', actors: [], type: 'game',
        styles: [{ name: 'Cartoon Artillery', promptString: 'cartoon worms, squeaky voices, bazookas, destructible surreal landscape' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: '2d-clean', resolution: '32x32', colorPalette: 'cartoon bright',
            characters: [
                {
                    name: 'Worm', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'pink worm breathing' },
                        { action: 'walk', frames: 8, description: 'inching movement' },
                        { action: 'aim', frames: 16, description: 'aiming bazooka arc' },
                        { action: 'fly', frames: 4, description: 'ninja rope swing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Island', type: 'floor', variants: 8, description: 'wacky terrain shape' }],
            items: [{ name: 'Sheep', category: 'projectile', animated: true, frames: 4, description: 'super sheep flying' }],
            ui: [{ name: 'Wind', description: 'wind direction arrow' }]
        }
    },

    // Arkanoid
    {
        id: 'arkanoid', title: 'Arkanoid', year: '1986', genres: ['Arcade'], director: 'Taito', actors: [], type: 'game',
        styles: [{ name: 'Sci-Fi Breakout', promptString: 'breakout clone, paddle ship, colored bricks, power pill darkness' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade neon',
            characters: [
                {
                    name: 'Vaus', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'paddle ship' },
                        { action: 'expand', frames: 4, description: 'growing wider' },
                        { action: 'laser', frames: 2, description: 'shooting lasers' }
                    ]
                }
            ],
            tilesets: [{ name: 'Wall', type: 'wall', variants: 4, description: 'tech boundary' }],
            items: [{ name: 'Capsule', category: 'powerup', animated: true, frames: 4, description: 'falling letter capsule' }],
            ui: [{ name: 'Score', description: '1UP text' }]
        }
    },

    // Pong
    {
        id: 'pong', title: 'Pong', year: '1972', genres: ['Arcade'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Minimalist Vector', promptString: 'black and white, two paddles, square ball, crt scanlines' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'vector', resolution: '8x8', colorPalette: 'monochrome',
            characters: [
                {
                    name: 'Paddle', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'white rectangle' }
                    ]
                }
            ],
            tilesets: [{ name: 'Net', type: 'background', variants: 1, description: 'dashed line' }],
            items: [{ name: 'Ball', category: 'projectile', animated: false, frames: 1, description: 'white square' }],
            ui: [{ name: 'Score', description: 'giant pixel numbers' }]
        }
    },

    // Missile Command
    {
        id: 'missile-command', title: 'Missile Command', year: '1980', genres: ['Arcade'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Cold War Arcade', promptString: 'vector lines, missile trails, expanding explosion circles, defending cities' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'vector', resolution: '16x16', colorPalette: 'vector color',
            characters: [
                {
                    name: 'Base', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'gun turret mound' },
                        { action: 'shoot', frames: 2, description: 'pixel fire' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 6, description: 'small pixel city' }],
            items: [{ name: 'Explosion', category: 'projectile', animated: true, frames: 8, description: 'expanding circle' }],
            ui: [{ name: 'Score', description: 'red vector text' }]
        }
    },

    // Defender
    {
        id: 'defender', title: 'Defender', year: '1981', genres: ['Arcade', 'Shooter'], director: 'Williams', actors: [], type: 'game',
        styles: [{ name: 'Vector Side Scroller', promptString: 'horizontal shooter, particle laser, mini map, snatching humans' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'vector', resolution: '16x16', colorPalette: 'neon vector',
            characters: [
                {
                    name: 'Ship', role: 'player', directions: 2, actions: [
                        { action: 'fly', frames: 2, description: 'sleek spaceship' },
                        { action: 'thrust', frames: 2, description: 'rear flame' },
                        { action: 'reverse', frames: 2, description: 'flipping direction' }
                    ]
                },
                {
                    name: 'Lander', role: 'enemy', directions: 1, actions: [
                        { action: 'hover', frames: 2, description: 'green alien lander' },
                        { action: 'carry', frames: 2, description: 'carrying humanoid' }
                    ]
                }
            ],
            tilesets: [{ name: 'Mountain', type: 'floor', variants: 4, description: 'vector line landscape' }],
            items: [{ name: 'Human', category: 'collectible', animated: true, frames: 2, description: 'falling tiny person' }],
            ui: [{ name: 'Radar', description: 'top screen minimap' }]
        }
    },

    // Robotron 2084
    {
        id: 'robotron', title: 'Robotron: 2084', year: '1982', genres: ['Arcade', 'Shooter'], director: 'Williams', actors: [], type: 'game',
        styles: [{ name: 'Twin Stick Neon', promptString: 'frantic horde shooter, grids, neon robots, save the family' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'vector', resolution: '16x16', colorPalette: 'neon red blue',
            characters: [
                {
                    name: 'Hero', role: 'player', directions: 8, actions: [
                        { action: 'run', frames: 4, description: 'running figure' },
                        { action: 'shoot', frames: 4, description: 'firing in any direction' }
                    ]
                },
                {
                    name: 'Grunt', role: 'enemy', directions: 4, actions: [
                        { action: 'march', frames: 4, description: 'robot marching' }
                    ]
                }
            ],
            tilesets: [{ name: 'Grid', type: 'floor', variants: 1, description: 'black background' }],
            items: [{ name: 'Human', category: 'collectible', animated: false, frames: 1, description: 'mom dad mikey' }],
            ui: [{ name: 'Score', description: 'glowing text' }]
        }
    },

    // Rampage
    {
        id: 'rampage', title: 'Rampage', year: '1986', genres: ['Arcade', 'Action'], director: 'Midway', actors: [], type: 'game',
        styles: [{ name: 'Monster Destruction', promptString: 'giant gorilla, lizard, wolf, smashing skyscrapers, eating people' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'arcade', resolution: '32x32', colorPalette: 'midway arcade',
            characters: [
                {
                    name: 'George', role: 'player', directions: 2, actions: [
                        { action: 'climb', frames: 4, description: 'climbing building' },
                        { action: 'punch', frames: 2, description: 'punching wall' },
                        { action: 'eat', frames: 2, description: 'eating civilian' },
                        { action: 'fall', frames: 4, description: 'falling from building' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'wall', variants: 8, description: 'skyscraper with windows' }],
            items: [{ name: 'Food', category: 'consumable', animated: false, frames: 1, description: 'roast chicken in window' }],
            ui: [{ name: 'Health', description: 'monster face bar' }]
        }
    },

    // Paperboy
    {
        id: 'paperboy', title: 'Paperboy', year: '1984', genres: ['Arcade'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Isometric Suburbia', promptString: 'isometric neighborhood, bicycle, throwing newspapers, breaking windows' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'arcade', resolution: '32x32', colorPalette: 'bright suburb',
            characters: [
                {
                    name: 'Boy', role: 'player', directions: 1, actions: [
                        { action: 'ride', frames: 4, description: 'pedaling bike' },
                        { action: 'throw', frames: 2, description: 'throwing paper left' }
                    ]
                }
            ],
            tilesets: [{ name: 'Street', type: 'floor', variants: 4, description: 'isometric road and sidewalk' }],
            items: [{ name: 'Paper', category: 'projectile', animated: true, frames: 4, description: 'spinning newspaper' }],
            ui: [{ name: 'Score', description: 'arcade font' }]
        }
    },

    // Marble Madness
    {
        id: 'marble-madness', title: 'Marble Madness', year: '1984', genres: ['Arcade', 'Puzzle'], director: 'Atari', actors: [], type: 'game',
        styles: [{ name: 'Tech Isometric', promptString: 'clean isometric geometric levels, marble physics, escher style' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'arcade', resolution: '16x16', colorPalette: 'cool blues',
            characters: [
                {
                    name: 'Marble', role: 'player', directions: 1, actions: [
                        { action: 'roll', frames: 8, description: 'spinning colorful marble' },
                        { action: 'shatter', frames: 4, description: 'breaking into pieces' }
                    ]
                }
            ],
            tilesets: [{ name: 'Course', type: 'floor', variants: 8, description: 'checkerboard ramps' }],
            items: [{ name: 'Enemy', category: 'projectile', animated: true, frames: 4, description: 'black marble eater' }],
            ui: [{ name: 'Time', description: 'digital timer' }]
        }
    },

    // BurgerTime
    {
        id: 'burgertime', title: 'BurgerTime', year: '1982', genres: ['Arcade', 'Platform'], director: 'Data East', actors: [], type: 'game',
        styles: [{ name: 'Fast Food Maze', promptString: 'chef peter pepper, giant burger ingredients, walking eggs and sausages' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: '8-bit', resolution: '16x16', colorPalette: 'arcade bright',
            characters: [
                {
                    name: 'Chef', role: 'player', directions: 4, actions: [
                        { action: 'walk', frames: 2, description: 'white hat chef walking' },
                        { action: 'pepper', frames: 2, description: 'shaking pepper' },
                        { action: 'die', frames: 4, description: 'spinning out' }
                    ]
                },
                {
                    name: 'Egg', role: 'enemy', directions: 4, actions: [
                        { action: 'walk', frames: 2, description: 'walking fried egg' }
                    ]
                }
            ],
            tilesets: [{ name: 'Ladder', type: 'floor', variants: 4, description: 'blue ladder' }],
            items: [{ name: 'Bun', category: 'consumable', animated: false, frames: 1, description: 'giant burger bun' }],
            ui: [{ name: 'Peppers', description: 'pepper count' }]
        }
    },

    // Joust
    {
        id: 'joust', title: 'Joust', year: '1982', genres: ['Arcade', 'Platform'], director: 'Williams', actors: [], type: 'game',
        styles: [{ name: 'Ostrich Knight', promptString: 'knights riding ostriches, lava pit, pterodactyl, lance combat' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'arcade', resolution: '16x16', colorPalette: 'lava cave',
            characters: [
                {
                    name: 'Knight', role: 'player', directions: 2, actions: [
                        { action: 'stand', frames: 1, description: 'ostrich idle' },
                        { action: 'run', frames: 4, description: 'ostrich running' },
                        { action: 'fly', frames: 4, description: 'flapping wings' },
                        { action: 'skid', frames: 2, description: 'stopping dust' }
                    ]
                }
            ],
            tilesets: [{ name: 'Platform', type: 'floor', variants: 4, description: 'brown rock platform' }],
            items: [{ name: 'Egg', category: 'collectible', animated: false, frames: 1, description: 'green egg' }],
            ui: [{ name: 'Lives', description: 'ostrich icon' }]
        }
    },

    // Braid
    {
        id: 'braid', title: 'Braid', year: '2008', genres: ['Platform', 'Puzzle'], director: 'Jonathan Blow', actors: [], type: 'game',
        styles: [{ name: 'Watercolor Time', promptString: 'painterly watercolor style, flowing clouds, time manipulation, suit guy' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'autumn paint',
            characters: [
                {
                    name: 'Tim', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'suit guy waiting' },
                        { action: 'run', frames: 8, description: 'running with tie flying' },
                        { action: 'jump', frames: 4, description: 'leap' }
                    ]
                }
            ],
            tilesets: [{ name: 'World', type: 'floor', variants: 8, description: 'puzzle piece landscape' }],
            items: [{ name: 'Key', category: 'equipment', animated: true, frames: 4, description: 'floating key' }],
            ui: [{ name: 'Pieces', description: 'jigsaw puzzle' }]
        }
    },

    // Limbo
    {
        id: 'limbo', title: 'Limbo', year: '2010', genres: ['Platform', 'Horror'], director: 'Playdead', actors: [], type: 'game',
        styles: [{ name: 'Silhouette Noir', promptString: 'black silhouette against grey fog, giant spider, spooky boy, film grain' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: '2d-clean', resolution: '32x32', colorPalette: 'monochrome fog',
            characters: [
                {
                    name: 'Boy', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'glowing eyes silhouette' },
                        { action: 'run', frames: 6, description: 'shadow boy running' },
                        { action: 'die', frames: 6, description: 'bloody brutal death' }
                    ]
                },
                {
                    name: 'Spider', role: 'enemy', directions: 1, actions: [
                        { action: 'stab', frames: 4, description: 'giant leg stab' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 8, description: 'black silhouette trees' }],
            items: [{ name: 'Trap', category: 'hazard', animated: false, frames: 1, description: 'bear trap' }],
            ui: [{ name: 'None', description: 'no ui' }]
        }
    },

    // Inside
    {
        id: 'inside', title: 'Inside', year: '2016', genres: ['Platform', 'Adventure'], director: 'Playdead', actors: [], type: 'game',
        styles: [{ name: 'Dystopian Muted', promptString: 'muted colors, soft lighting, faceless boy, industrial horror, mind control' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'muted blue grey',
            characters: [
                {
                    name: 'Boy', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'red shirt boy' },
                        { action: 'sneak', frames: 6, description: 'hunched walk' },
                        { action: 'drag', frames: 6, description: 'pushing box' }
                    ]
                }
            ],
            tilesets: [{ name: 'Facility', type: 'floor', variants: 8, description: 'clean laboratory floor' }],
            items: [{ name: 'Helmet', category: 'equipment', animated: true, frames: 4, description: 'glowing mind control helmet' }],
            ui: [{ name: 'None', description: 'no ui' }]
        }
    },

    // Rayman
    {
        id: 'rayman', title: 'Rayman', year: '1995', genres: ['Platform'], director: 'Ubisoft', actors: [], type: 'game',
        styles: [{ name: 'Whimsical Cartoon', promptString: 'vibrant cartoon, floating limbs, magical forest, colorful sprites' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'pixel-art-hd', resolution: '64x64', colorPalette: 'vibrant cartoon',
            characters: [
                {
                    name: 'Rayman', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 8, description: 'limbless hero animating' },
                        { action: 'punch', frames: 6, description: 'winding up fist throw' },
                        { action: 'helicopter', frames: 4, description: 'hair spinning' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dream Forest', type: 'floor', variants: 8, description: 'lush giant plants' }],
            items: [{ name: 'Electoon cage', category: 'collectible', animated: true, frames: 4, description: 'caged smiley faces' }],
            ui: [{ name: 'Lives', description: 'rayman head icon' }]
        }
    },

    // Crash Bandicoot
    {
        id: 'crash-bandicoot', title: 'Crash Bandicoot', year: '1996', genres: ['Platform'], director: 'Naughty Dog', actors: [], type: 'game',
        styles: [{ name: 'Wacky Jungle', promptString: 'wumpa islands, wooden crates, spinning marsupial, ancient ruins' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'jungle orange green',
            characters: [
                {
                    name: 'Crash', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'goofy orange bandicoot' },
                        { action: 'spin', frames: 4, description: 'tornado spin attack' },
                        { action: 'jump', frames: 4, description: 'crazy jump' }
                    ]
                }
            ],
            tilesets: [{ name: 'Beach', type: 'floor', variants: 8, description: 'sand and boxes' }],
            items: [{ name: 'Wumpa Fruit', category: 'collectible', animated: true, frames: 4, description: 'spinning orange fruit' }],
            ui: [{ name: 'Mask', description: 'aku aku floating mask' }]
        }
    },

    // Spyro the Dragon
    {
        id: 'spyro', title: 'Spyro the Dragon', year: '1998', genres: ['Platform'], director: 'Insomniac', actors: [], type: 'game',
        styles: [{ name: 'Fantasy Dragon', promptString: 'purple dragon, magical realms, gems, dragons in crystal' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'magical purple gold',
            characters: [
                {
                    name: 'Spyro', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'little purple dragon' },
                        { action: 'charge', frames: 4, description: 'horns down running' },
                        { action: 'flame', frames: 4, description: 'breathing fire' },
                        { action: 'glide', frames: 4, description: 'gliding wings spread' }
                    ]
                }
            ],
            tilesets: [{ name: 'Home', type: 'floor', variants: 8, description: 'green grass castle' }],
            items: [{ name: 'Gem', category: 'collectible', animated: true, frames: 8, description: 'sparkling faceted gem' }],
            ui: [{ name: 'Sparx', description: 'dragonfly health indicator' }]
        }
    },

    // Banjo-Kazooie
    {
        id: 'banjo-kazooie', title: 'Banjo-Kazooie', year: '1998', genres: ['Platform', 'Adventure'], director: 'Rare', actors: [], type: 'game',
        styles: [{ name: 'Googly Eye Collectathon', promptString: 'bear and bird, googly eyes on everything, jiggy puzzles, bright cartoon world' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'bright cartoon',
            characters: [
                {
                    name: 'Banjo', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'bear with backpack bird' },
                        { action: 'peck', frames: 4, description: 'kazooie pecking forward' },
                        { action: 'flap', frames: 4, description: 'kazooie flapping wings' }
                    ]
                }
            ],
            tilesets: [{ name: 'Spiral Mountain', type: 'floor', variants: 8, description: 'twisting grassy path' }],
            items: [{ name: 'Jiggy', category: 'collectible', animated: true, frames: 8, description: 'golden puzzle piece' }],
            ui: [{ name: 'Notes', description: 'musical note counter' }]
        }
    },

    // Conker's Bad Fur Day
    {
        id: 'conker', title: 'Conker\'s Bad Fur Day', year: '2001', genres: ['Platform', 'Adult'], director: 'Rare', actors: [], type: 'game',
        styles: [{ name: 'Mature Cartoon', promptString: 'cute squirrel, mature themes, movie parodies, poo mountain' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'cartoon contrast',
            characters: [
                {
                    name: 'Conker', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'hungover squirrel' },
                        { action: 'pan', frames: 4, description: 'frying pan hit' },
                        { action: 'drink', frames: 4, description: 'chugging beer' }
                    ]
                }
            ],
            tilesets: [{ name: 'Barn', type: 'floor', variants: 8, description: 'hay and wood' }],
            items: [{ name: 'Cash', category: 'collectible', animated: true, frames: 4, description: 'wads of money' }],
            ui: [{ name: 'Context', description: 'lightbulb moment' }]
        }
    },

    // Jak and Daxter
    {
        id: 'jak-daxter', title: 'Jak and Daxter: The Precursor Legacy', year: '2001', genres: ['Platform', 'Adventure'], director: 'Naughty Dog', actors: [], type: 'game',
        styles: [{ name: 'Eco Fantasy', promptString: 'seamless world, precursor ruins, eco energy, orange ottsel' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'tropical vibrant',
            characters: [
                {
                    name: 'Jak', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'elf boy with weasel on shoulder' },
                        { action: 'punch', frames: 4, description: 'straight punch' },
                        { action: 'spin', frames: 4, description: 'roundhouse kick' }
                    ]
                }
            ],
            tilesets: [{ name: 'Sandover', type: 'floor', variants: 8, description: 'beach village' }],
            items: [{ name: 'Power Cell', category: 'collectible', animated: true, frames: 8, description: 'golden orb sphere' }],
            ui: [{ name: 'Eco', description: 'green blue red yellow energy meter' }]
        }
    },

    // Ratchet & Clank
    {
        id: 'ratchet-clank', title: 'Ratchet & Clank', year: '2002', genres: ['Platform', 'Shooter'], director: 'Insomniac', actors: [], type: 'game',
        styles: [{ name: 'Sci-Fi Arsenal', promptString: 'lombax mechanic, tiny robot back, giant guns, nuts and bolts, futuristic cities' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'tech metal orange',
            characters: [
                {
                    name: 'Ratchet', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'holding giant wrench' },
                        { action: 'swing', frames: 4, description: 'wrench melee' },
                        { action: 'shoot', frames: 4, description: 'firing blaster' }
                    ]
                }
            ],
            tilesets: [{ name: 'Metropolis', type: 'floor', variants: 8, description: 'flying cars city' }],
            items: [{ name: 'Bolt', category: 'collectible', animated: true, frames: 8, description: 'spinning metal nut' }],
            ui: [{ name: 'Ammo', description: 'weapon icon and count' }]
        }
    },

    // Sly Cooper
    {
        id: 'sly-cooper', title: 'Sly Cooper and the Thievius Raccoonus', year: '2002', genres: ['Platform', 'Stealth'], director: 'Sucker Punch', actors: [], type: 'game',
        styles: [{ name: 'Comic Stealth', promptString: 'cel shaded noir, raccoon thief, cane hook, blue sparkles for stealth' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'noir blue',
            characters: [
                {
                    name: 'Sly', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'raccoon leaning on cane' },
                        { action: 'creep', frames: 6, description: 'tip toe sneak' },
                        { action: 'hook', frames: 4, description: 'cane hook swing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Rooftop', type: 'floor', variants: 8, description: 'paris rooftops' }],
            items: [{ name: 'Bottle', category: 'collectible', animated: false, frames: 1, description: 'clue bottle' }],
            ui: [{ name: 'Health', description: 'lucky charm horseshoe' }]
        }
    },

    // Psychonauts
    {
        id: 'psychonauts', title: 'Psychonauts', year: '2005', genres: ['Platform', 'Adventure'], director: 'Double Fine', actors: [], type: 'game',
        styles: [{ name: 'Twisted Mind', promptString: 'tim burton esque, mental worlds, glowing psychic powers, strange shapes' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'eccentric',
            characters: [
                {
                    name: 'Raz', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'goggled psychic boy' },
                        { action: 'psi-blast', frames: 4, description: 'hand to head blast' },
                        { action: 'ball', frames: 8, description: 'balancing on levitation ball' }
                    ]
                }
            ],
            tilesets: [{ name: 'Camp', type: 'floor', variants: 8, description: 'wobbly summer camp' }],
            items: [{ name: 'Arrowhead', category: 'collectible', animated: true, frames: 4, description: 'glowing psi arrowhead' }],
            ui: [{ name: 'Badge', description: 'psi cadet badge' }]
        }
    },

    // Beyond Good & Evil
    {
        id: 'beyond-good-evil', title: 'Beyond Good & Evil', year: '2003', genres: ['Action', 'Adventure'], director: 'Ubisoft', actors: [], type: 'game',
        styles: [{ name: 'Hillys Sci-Fi', promptString: 'green lipstick, camera photography, alien conspiracy, hovercraft water' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'teal and green',
            characters: [
                {
                    name: 'Jade', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'reporter with staff' },
                        { action: 'fight', frames: 6, description: 'aikido staff combat' },
                        { action: 'photo', frames: 4, description: 'taking picture' }
                    ]
                },
                {
                    name: 'Peyj', role: 'npc', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'pig uncle mechanic' }
                    ]
                }
            ],
            tilesets: [{ name: 'Lighthouse', type: 'floor', variants: 8, description: 'shielded island' }],
            items: [{ name: 'Pearl', category: 'collectible', animated: true, frames: 4, description: 'shiny pearl' }],
            ui: [{ name: 'Hearts', description: 'heart containers' }]
        }
    },

    // Viewtiful Joe
    {
        id: 'viewtiful-joe', title: 'Viewtiful Joe', year: '2003', genres: ['Action', 'Platform'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Comic Book Action', promptString: 'cel shaded comic, vfx powers, slow motion, mach speed, henshin a go go' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'comic red pink',
            characters: [
                {
                    name: 'Joe', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 6, description: 'sentai hero pose' },
                        { action: 'punch', frames: 4, description: 'red glove punch' },
                        { action: 'slow', frames: 4, description: 'heavy slow motion walk' },
                        { action: 'mach', frames: 12, description: 'movement blur fire' }
                    ]
                }
            ],
            tilesets: [{ name: 'Reel', type: 'background', variants: 4, description: 'film strip edges' }],
            items: [{ name: 'Burger', category: 'consumable', animated: false, frames: 1, description: 'cheeseburger' }],
            ui: [{ name: 'VFX', description: 'film reel meter' }]
        }
    },

    // Okami
    {
        id: 'okami', title: 'Okami', year: '2006', genres: ['Adventure', 'Action'], director: 'Clover', actors: [], type: 'game',
        styles: [{ name: 'Sumi-e Ink', promptString: 'japanese ink wash painting, white wolf, celestial brush, paper texture' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'ink wash',
            characters: [
                {
                    name: 'Amaterasu', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'white wolf with reflector' },
                        { action: 'run', frames: 6, description: 'flowers growing behind paws' },
                        { action: 'howl', frames: 4, description: 'wolf howling' },
                        { action: 'brush', frames: 1, description: 'ink screen freeze' }
                    ]
                }
            ],
            tilesets: [{ name: 'Nippon', type: 'floor', variants: 8, description: 'ink painted field' }],
            items: [{ name: 'Ink', category: 'collectible', animated: true, frames: 4, description: 'ink pot' }],
            ui: [{ name: 'Solar', description: 'sun energy meter' }]
        }
    },

    // Shadow of the Colossus
    {
        id: 'shadow-colossus', title: 'Shadow of the Colossus', year: '2005', genres: ['Adventure', 'Action'], director: 'Team Ico', actors: [], type: 'game',
        styles: [{ name: 'Desolate Giant', promptString: 'massive scale, foggy forbidden land, fur rendering, climbing titans, bloom lighting' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'desolate bloom',
            characters: [
                {
                    name: 'Wander', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'holding sword to light' },
                        { action: 'climb', frames: 6, description: 'struggling climb' },
                        { action: 'stab', frames: 4, description: 'downward sword stab' },
                        { action: 'horse', frames: 4, description: 'riding agro' }
                    ]
                },
                {
                    name: 'Colossus', role: 'boss', directions: 4, actions: [
                        { action: 'walk', frames: 12, description: 'earth shaking steps' },
                        { action: 'shake', frames: 8, description: 'trying to shake off player' }
                    ]
                }
            ],
            tilesets: [{ name: 'Bridge', type: 'floor', variants: 8, description: 'massive stone bridge' }],
            items: [{ name: 'Lizard', category: 'collectible', animated: true, frames: 4, description: 'black tail lizard' }],
            ui: [{ name: 'Grip', description: 'pink stamina circle' }]
        }
    },

    // Ico
    {
        id: 'ico', title: 'Ico', year: '2001', genres: ['Adventure', 'Puzzle'], director: 'Team Ico', actors: [], type: 'game',
        styles: [{ name: 'Blooming Castle', promptString: 'overexposed lighting, vast castle, hand holding, shadow figures' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'bright bloom',
            characters: [
                {
                    name: 'Ico', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'horned boy looking' },
                        { action: 'pull', frames: 6, description: 'pulling girl hand' },
                        { action: 'swing', frames: 4, description: 'stick swing' }
                    ]
                },
                {
                    name: 'Yorda', role: 'npc', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'glowing girl waiting' },
                        { action: 'drag', frames: 6, description: 'being pulled stumbling' }
                    ]
                }
            ],
            tilesets: [{ name: 'Castle', type: 'floor', variants: 8, description: 'sunlit stone masonry' }],
            items: [{ name: 'Stick', category: 'equipment', animated: false, frames: 1, description: 'wooden stick' }],
            ui: [{ name: 'None', description: 'minimalist no ui' }]
        }
    },

    // Katamari Damacy
    {
        id: 'katamari', title: 'Katamari Damacy', year: '2004', genres: ['Puzzle', 'Action'], director: 'Namco', actors: [], type: 'game',
        styles: [{ name: 'Quirky Rolling', promptString: 'rolling ball of junk, bright colors, blocky simple models, king of cosmos' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'rainbow bright',
            characters: [
                {
                    name: 'Prince', role: 'player', directions: 8, actions: [
                        { action: 'push', frames: 8, description: 'tiny green prince pushing' },
                        { action: 'dash', frames: 8, description: 'spinning charge' },
                        { action: 'climb', frames: 4, description: 'climbing over ball' }
                    ]
                }
            ],
            tilesets: [{ name: 'Room', type: 'floor', variants: 8, description: 'messy japanese floor' }],
            items: [{ name: 'Cousin', category: 'collectible', animated: true, frames: 4, description: 'weirdly shaped friend' }],
            ui: [{ name: 'Size', description: 'diameter measurement' }]
        }
    },

    // PaRappa the Rapper
    {
        id: 'parappa', title: 'PaRappa the Rapper', year: '1996', genres: ['Rhythm'], director: 'NanaOn-Sha', actors: [], type: 'game',
        styles: [{ name: 'Paper Flat', promptString: '2D paper characters in 3D world, rodney alan greenblat art, beanie dog' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'vector', resolution: '64x64', colorPalette: 'flat paper',
            characters: [
                {
                    name: 'PaRappa', role: 'player', directions: 2, actions: [
                        { action: 'rap', frames: 4, description: 'paper dog gesturing' },
                        { action: 'believe', frames: 4, description: 'thumbs up' },
                        { action: 'fail', frames: 4, description: 'crumpled paper look' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dojo', type: 'wall', variants: 4, description: 'paper walls' }],
            items: [{ name: 'Mic', category: 'equipment', animated: false, frames: 1, description: 'microphone' }],
            ui: [{ name: 'Cool', description: 'u rappin cool meter' }]
        }
    },

    // Jet Set Radio
    {
        id: 'jet-set-radio', title: 'Jet Set Radio', year: '2000', genres: ['Action', 'Skating'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Cel Shaded Tokyo', promptString: 'funky cel shading, graffiti tagging, roller skates, futuristic tokyo' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'cel-shaded', resolution: '64x64', colorPalette: 'neon funk',
            characters: [
                {
                    name: 'Beat', role: 'player', directions: 8, actions: [
                        { action: 'skate', frames: 8, description: 'aggressive inline skating' },
                        { action: 'spray', frames: 6, description: 'spraying graffiti can' },
                        { action: 'dance', frames: 8, description: 'funky dance move' }
                    ]
                }
            ],
            tilesets: [{ name: 'Shibuya', type: 'floor', variants: 8, description: 'busy street grind rails' }],
            items: [{ name: 'Can', category: 'collectible', animated: false, frames: 1, description: 'spray paint can' }],
            ui: [{ name: 'Arrow', description: 'tagging gesture arrows' }]
        }
    },

    // Crazy Taxi
    {
        id: 'crazy-taxi', title: 'Crazy Taxi', year: '1999', genres: ['Racing', 'Arcade'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Arcade City', promptString: 'bright sunny san francisco, yellow cab, offspring playing, green arrow' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sunny bright',
            characters: [
                {
                    name: 'Cab', role: 'player', directions: 8, actions: [
                        { action: 'drive', frames: 4, description: 'yellow convertible taxi' },
                        { action: 'jump', frames: 4, description: 'catching air' },
                        { action: 'drift', frames: 4, description: 'powerslide tire smoke' }
                    ]
                }
            ],
            tilesets: [{ name: 'City', type: 'floor', variants: 8, description: 'steep hills streets' }],
            items: [{ name: 'Customer', category: 'collectible', animated: true, frames: 4, description: 'waving person with colored circle' }],
            ui: [{ name: 'Fare', description: 'giant green dollar sign' }]
        }
    },

    // Samba de Amigo
    {
        id: 'samba-amigo', title: 'Samba de Amigo', year: '1999', genres: ['Rhythm'], director: 'Sonic Team', actors: [], type: 'game',
        styles: [{ name: 'Maraca Carnival', promptString: 'monkey with maracas, vibrant carnival, colorful lights, shakes' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'carnival',
            characters: [
                {
                    name: 'Amigo', role: 'player', directions: 1, actions: [
                        { action: 'shake_high', frames: 4, description: 'shaking maracas high' },
                        { action: 'shake_mid', frames: 4, description: 'shaking maracas middle' },
                        { action: 'shake_low', frames: 4, description: 'shaking maracas low' },
                        { action: 'pose', frames: 4, description: 'dynamic pose' }
                    ]
                }
            ],
            tilesets: [{ name: 'Stage', type: 'background', variants: 4, description: 'festive crowd' }],
            items: [{ name: 'Maraca', category: 'equipment', animated: true, frames: 4, description: 'red maraca' }],
            ui: [{ name: 'Dots', description: 'rhythm dots circle' }]
        }
    },

    // Space Channel 5
    {
        id: 'space-channel-5', title: 'Space Channel 5', year: '1999', genres: ['Rhythm'], director: 'Sega', actors: [], type: 'game',
        styles: [{ name: 'Retro Sci-Fi TV', promptString: 'swinging 60s sci-fi, pink hair reporter, dancing aliens, up down up down chu' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'retro plastic',
            characters: [
                {
                    name: 'Ulala', role: 'player', directions: 1, actions: [
                        { action: 'dance', frames: 8, description: 'groovy dance steps' },
                        { action: 'shoot', frames: 4, description: 'finger gun shoot' },
                        { action: 'rescue', frames: 4, description: 'rescuing hostage beam' }
                    ]
                }
            ],
            tilesets: [{ name: 'Station', type: 'background', variants: 4, description: 'spaceship corridor' }],
            items: [{ name: 'Morolian', category: 'hazard', animated: true, frames: 4, description: 'dancing alien' }],
            ui: [{ name: 'Ratings', description: 'viewership percentage' }]
        }
    },

    // Rez
    {
        id: 'rez', title: 'Rez', year: '2001', genres: ['Shooter', 'Rhythm'], director: 'United Game Artists', actors: [], type: 'game',
        styles: [{ name: 'Wireframe Synesthesia', promptString: 'wireframe cyberspace, hacking, techno beats, evolving avatar' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'vector', resolution: '64x64', colorPalette: 'wireframe neon',
            characters: [
                {
                    name: 'Avatar', role: 'player', directions: 8, actions: [
                        { action: 'float', frames: 8, description: 'evolving wireframe human' },
                        { action: 'lock-on', frames: 4, description: 'painting targets' },
                        { action: 'pulse', frames: 4, description: 'beat pulsing' }
                    ]
                }
            ],
            tilesets: [{ name: 'Net', type: 'background', variants: 4, description: 'infinite data tunnel' }],
            items: [{ name: 'Data', category: 'collectible', animated: true, frames: 4, description: 'blue data cube' }],
            ui: [{ name: 'Analyze', description: 'tech analysis text' }]
        }
    },

    // Lumines
    {
        id: 'lumines', title: 'Lumines', year: '2004', genres: ['Puzzle', 'Rhythm'], director: 'Q Entertainment', actors: [], type: 'game',
        styles: [{ name: 'Interactive Music Video', promptString: 'falling blocks, sweeping timeline, dynamic skins, music visualizer' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '2d-clean', resolution: '32x32', colorPalette: 'skin dependent',
            characters: [
                {
                    name: 'Block', role: 'player', directions: 1, actions: [
                        { action: 'drop', frames: 4, description: 'falling 2x2 block' },
                        { action: 'rotate', frames: 4, description: 'rotating animated block' }
                    ]
                }
            ],
            tilesets: [{ name: 'Skin', type: 'background', variants: 4, description: 'abstract music video' }],
            items: [{ name: 'Special', category: 'powerup', animated: true, frames: 4, description: 'diamond chain block' }],
            ui: [{ name: 'Timeline', description: 'sweeping bpm line' }]
        }
    },

    // Meteos
    {
        id: 'meteos', title: 'Meteos', year: '2005', genres: ['Puzzle'], director: 'Q Entertainment', actors: [], type: 'game',
        styles: [{ name: 'Falling Star', promptString: 'raining blocks, launching rockets, alien planets, frantic stacking' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '2d-clean', resolution: '16x16', colorPalette: 'cosmic',
            characters: [
                {
                    name: 'Meteo', role: 'player', directions: 1, actions: [
                        { action: 'fall', frames: 4, description: 'falling block' },
                        { action: 'ignite', frames: 4, description: 'rocket thruster firing' },
                        { action: 'launch', frames: 4, description: 'flying upward' }
                    ]
                }
            ],
            tilesets: [{ name: 'Planet', type: 'background', variants: 4, description: 'alien surface' }],
            items: [{ name: 'Bomb', category: 'hazard', animated: true, frames: 4, description: 'burnt meteo' }],
            ui: [{ name: 'Atmosphere', description: 'atmospheric entry warning' }]
        }
    },

    // Elite Beat Agents
    {
        id: 'elite-beat-agents', title: 'Elite Beat Agents', year: '2006', genres: ['Rhythm'], director: 'iNiS', actors: [], type: 'game',
        styles: [{ name: 'Comic Cheer', promptString: 'agents in suits, comic book panels, inspiring citizens, dancing to pop music' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'primary brights',
            characters: [
                {
                    name: 'Agent', role: 'player', directions: 1, actions: [
                        { action: 'dance', frames: 8, description: 'sharp choreography' },
                        { action: 'cheer', frames: 4, description: 'pointing skyward' },
                        { action: 'spin', frames: 6, description: 'rapid spinning' }
                    ]
                }
            ],
            tilesets: [{ name: 'Comic', type: 'background', variants: 4, description: 'manga comic panel' }],
            items: [{ name: 'Marker', category: 'ui', animated: true, frames: 4, description: 'numbered click marker' }],
            ui: [{ name: 'Groove', description: 'elite olympic gauge' }]
        }
    },

    // WarioWare
    {
        id: 'warioware', title: 'WarioWare, Inc.: Mega Microgame$!', year: '2003', genres: ['Action', 'Minigame'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Erratic Micro', promptString: 'crudely drawn sprites, 5 second games, weird humor, nose picking' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '8-bit', resolution: '32x32', colorPalette: 'crude clash',
            characters: [
                {
                    name: 'Wario', role: 'player', directions: 2, actions: [
                        { action: 'laugh', frames: 4, description: 'jagged tooth laugh' },
                        { action: 'lose', frames: 4, description: 'shocked face' }
                    ]
                }
            ],
            tilesets: [{ name: 'Simple', type: 'background', variants: 8, description: 'solid color minimalist' }],
            items: [{ name: 'Nose', category: 'collectible', animated: true, frames: 4, description: 'floating nose to pick' }],
            ui: [{ name: 'Timer', description: 'bomb fuse burning' }]
        }
    },

    // Rhythm Heaven
    {
        id: 'rhythm-heaven', title: 'Rhythm Heaven', year: '2008', genres: ['Rhythm', 'Minigame'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Simple Lines', promptString: 'clean vector lines, simple faces, quirky scenarios, singing choir' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'vector', resolution: '64x64', colorPalette: 'pastel clean',
            characters: [
                {
                    name: 'Karate Joe', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'stoic face' },
                        { action: 'punch', frames: 4, description: 'punches pot' },
                        { action: 'kick', frames: 4, description: 'kicks barrel' }
                    ]
                }
            ],
            tilesets: [{ name: 'Flat', type: 'background', variants: 4, description: 'single color background' }],
            items: [{ name: 'Pot', category: 'projectile', animated: false, frames: 1, description: 'flying flower pot' }],
            ui: [{ name: 'Rating', description: 'superb text' }]
        }
    },

    // Cooking Mama
    {
        id: 'cooking-mama', title: 'Cooking Mama', year: '2006', genres: ['Simulation', 'Minigame'], director: 'Office Create', actors: [], type: 'game',
        styles: [{ name: 'Cute Kitchen', promptString: 'shiny food, mama smiling, chopping vegetables, sparkles, delicious' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'kitchen bright',
            characters: [
                {
                    name: 'Mama', role: 'npc', directions: 1, actions: [
                        { action: 'cheer', frames: 4, description: 'mama eyes burning passion' },
                        { action: 'angry', frames: 4, description: 'mama disappointed' }
                    ]
                }
            ],
            tilesets: [{ name: 'Counter', type: 'floor', variants: 4, description: 'cutting board view' }],
            items: [{ name: 'Knife', category: 'equipment', animated: true, frames: 4, description: 'chopping knife' }],
            ui: [{ name: 'Step', description: 'step instruction arrow' }]
        }
    },

    // Trauma Center
    {
        id: 'trauma-center', title: 'Trauma Center: Under the Knife', year: '2005', genres: ['Simulation', 'Visual Novel'], director: 'Atlus', actors: [], type: 'game',
        styles: [{ name: 'Anime Surgery', promptString: 'anime doctors, surgical tools, pulsing organs, dramatic pentagram drawing' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'surgical blue',
            characters: [
                {
                    name: 'Dr. Styles', role: 'player', directions: 1, actions: [
                        { action: 'focus', frames: 4, description: 'healing touch activate eyes' },
                        { action: 'sweat', frames: 4, description: 'intense surgery concentration' }
                    ]
                }
            ],
            tilesets: [{ name: 'Patient', type: 'background', variants: 4, description: 'open surgery field' }],
            items: [{ name: 'Scalpel', category: 'equipment', animated: false, frames: 1, description: 'surgical scalpel' }],
            ui: [{ name: 'Vitals', description: 'heart rate monitor' }]
        }
    },

    // Phoenix Wright
    {
        id: 'phoenix-wright', title: 'Phoenix Wright: Ace Attorney', year: '2001', genres: ['Visual Novel', 'Adventure'], director: 'Capcom', actors: [], type: 'game',
        styles: [{ name: 'Courtroom Anime', promptString: 'objection finger point, shocked witness, intense cross examination, anime suits' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'courtroom brown',
            characters: [
                {
                    name: 'Phoenix', role: 'player', directions: 1, actions: [
                        { action: 'objection', frames: 6, description: 'finger pointing shout' },
                        { action: 'desk', frames: 4, description: 'slamming desk' },
                        { action: 'confused', frames: 4, description: 'sweating nervously' }
                    ]
                },
                {
                    name: 'Edgeworth', role: 'enemy', directions: 1, actions: [
                        { action: 'bow', frames: 4, description: 'smug bow' },
                        { action: 'shrug', frames: 4, description: 'shaking finger' }
                    ]
                }
            ],
            tilesets: [{ name: 'Bench', type: 'wall', variants: 4, description: 'defense attorney bench' }],
            items: [{ name: 'Badge', category: 'equipment', animated: false, frames: 1, description: 'attorney badge' }],
            ui: [{ name: 'Objection', description: 'giant spike bubble text' }]
        }
    },

    // Professor Layton
    {
        id: 'professor-layton', title: 'Professor Layton and the Curious Village', year: '2007', genres: ['Puzzle', 'Adventure'], director: 'Level-5', actors: [], type: 'game',
        styles: [{ name: 'European Anime', promptString: 'french cartoon style, top hat gentleman, cozy village, puzzle thinking' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'sepia cozy',
            characters: [
                {
                    name: 'Layton', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'gentleman in top hat' },
                        { action: 'point', frames: 4, description: 'solved puzzle point' },
                        { action: 'walk', frames: 8, description: 'dignified walk' }
                    ]
                },
                {
                    name: 'Luke', role: 'npc', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'boy in blue cap' }
                    ]
                }
            ],
            tilesets: [{ name: 'Village', type: 'background', variants: 4, description: 'watercolor european street' }],
            items: [{ name: 'Coin', category: 'collectible', animated: true, frames: 4, description: 'hint coin sparkle' }],
            ui: [{ name: 'Picarats', description: 'puzzle score number' }]
        }
    },

    // World of Warcraft
    {
        id: 'wow', title: 'World of Warcraft', year: '2004', genres: ['MMORPG', 'Fantasy'], director: 'Blizzard', actors: [], type: 'game',
        styles: [{ name: 'Azeroth Cartoon', promptString: 'exaggerated proportions, shoulder pads, colorful majestic fantasy, stylized hand painted textures' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'fantasy vibrant',
            characters: [
                {
                    name: 'Orc', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'hunchbacked orc breathing' },
                        { action: 'attack', frames: 6, description: 'axe swing two handed' },
                        { action: 'roar', frames: 4, description: 'shouting warcry' },
                        { action: 'dance', frames: 8, description: 'mc hammer dance' }
                    ]
                },
                {
                    name: 'Human', role: 'player', directions: 8, actions: [
                        { action: 'cast', frames: 6, description: 'glowing hands spell' }
                    ]
                }
            ],
            tilesets: [{ name: 'Stormwind', type: 'floor', variants: 8, description: 'cobblestone and majestic stone' }],
            items: [{ name: 'Sword', category: 'equipment', animated: false, frames: 1, description: 'thunderfury blessed blade' }],
            ui: [{ name: 'Action Bar', description: 'griffon bookends bar' }]
        }
    },

    // Final Fantasy XIV
    {
        id: 'ffxiv', title: 'Final Fantasy XIV', year: '2010', genres: ['MMORPG', 'Fantasy'], director: 'Square Enix', actors: [], type: 'game',
        styles: [{ name: 'Eorzea High Fantasy', promptString: 'beautiful anime realism, cat girls, glowing auras, crystal tower, ornate armor' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'crystal fantasy',
            characters: [
                {
                    name: 'Dragoon', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'spiky armor lance stance' },
                        { action: 'jump', frames: 4, description: 'high jump attack' },
                        { action: 'pose', frames: 4, description: 'battle pose' }
                    ]
                }
            ],
            tilesets: [{ name: 'Gridania', type: 'floor', variants: 8, description: 'forest city wood' }],
            items: [{ name: 'Crystal', category: 'collectible', animated: true, frames: 4, description: 'spinning blue crystal' }],
            ui: [{ name: 'Job Gauge', description: 'stylized meter' }]
        }
    },

    // League of Legends
    {
        id: 'league-of-legends', title: 'League of Legends', year: '2009', genres: ['MOBA', 'Strategy'], director: 'Riot Games', actors: [], type: 'game',
        styles: [{ name: 'Summoners Rift', promptString: 'hand painted textures, stylized fantasy, top down view, magic effects' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'fantasy painted',
            characters: [
                {
                    name: 'Champion', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'heroic stance' },
                        { action: 'Q', frames: 6, description: 'signature ability cast' },
                        { action: 'ult', frames: 8, description: 'ultimate massive effect' }
                    ]
                },
                {
                    name: 'Minion', role: 'enemy', directions: 4, actions: [
                        { action: 'march', frames: 4, description: 'little robed minion' },
                        { action: 'attack', frames: 4, description: 'shooting magic bolt' }
                    ]
                }
            ],
            tilesets: [{ name: 'Lane', type: 'floor', variants: 8, description: 'grass and river' }],
            items: [{ name: 'Ward', category: 'equipment', animated: true, frames: 4, description: 'glowing vision ward' }],
            ui: [{ name: 'Scoreboard', description: 'kda counter' }]
        }
    },

    // Dota 2
    {
        id: 'dota-2', title: 'Dota 2', year: '2013', genres: ['MOBA', 'Strategy'], director: 'Valve', actors: [], type: 'game',
        styles: [{ name: 'Source Fantasy', promptString: 'realistic lighting, muted darkness, source engine effects, ancient defense' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark fantasy',
            characters: [
                {
                    name: 'Pudge', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'gross butcher rotting' },
                        { action: 'hook', frames: 6, description: 'throwing meat hook' },
                        { action: 'rot', frames: 4, description: 'green gas cloud' }
                    ]
                }
            ],
            tilesets: [{ name: 'River', type: 'floor', variants: 8, description: 'water diagonal crossing' }],
            items: [{ name: 'BKB', category: 'equipment', animated: true, frames: 4, description: 'golden avatar staff' }],
            ui: [{ name: 'Hero', description: 'hero portrait hud' }]
        }
    },

    // Old School RuneScape
    {
        id: 'osrs', title: 'Old School RuneScape', year: '2013', genres: ['MMORPG'], director: 'Jagex', actors: [], type: 'game',
        styles: [{ name: 'Low Poly Nostalgia', promptString: 'extremely low poly primitive 3d, crude textures, clicking, medieval' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'retro pc',
            characters: [
                {
                    name: 'Bot', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 1, description: 'standing still low poly' },
                        { action: 'chop', frames: 4, description: 'chopping tree repetitive' },
                        { action: 'fish', frames: 4, description: 'fishing net animation' }
                    ]
                }
            ],
            tilesets: [{ name: 'Lumbridge', type: 'floor', variants: 8, description: 'green grass path' }],
            items: [{ name: 'Party Hat', category: 'equipment', animated: false, frames: 1, description: 'paper crown' }],
            ui: [{ name: 'Inventory', description: 'grid of 28 icons' }]
        }
    },

    // MapleStory
    {
        id: 'maplestory', title: 'MapleStory', year: '2003', genres: ['MMORPG', 'Platform'], director: 'Wizet', actors: [], type: 'game',
        styles: [{ name: 'Chibi 2D', promptString: 'cute big head anime, 2d scrolling, layered backgrounds, damage numbers' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'cute pastel',
            characters: [
                {
                    name: 'Mapler', role: 'player', directions: 2, actions: [
                        { action: 'stand', frames: 4, description: 'blinking breathing' },
                        { action: 'walk', frames: 4, description: 'walking bouncy' },
                        { action: 'prone', frames: 1, description: 'lying flat' },
                        { action: 'cast', frames: 4, description: 'magic skill effect' }
                    ]
                }
            ],
            tilesets: [{ name: 'Henesys', type: 'floor', variants: 4, description: 'mushroom house grasp' }],
            items: [{ name: 'Meso', category: 'collectible', animated: true, frames: 4, description: 'spinning gold coin' }],
            ui: [{ name: 'Chat', description: 'speech bubble' }]
        }
    },

    // Overwatch
    {
        id: 'overwatch', title: 'Overwatch', year: '2016', genres: ['Shooter', 'Hero'], director: 'Blizzard', actors: [], type: 'game',
        styles: [{ name: 'Hero Shooter', promptString: 'polished pixar style, future earth, diverse heroes, bright colors' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'vibrant future',
            characters: [
                {
                    name: 'Tracer', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 6, description: 'holding dual pulse pistols' },
                        { action: 'blink', frames: 2, description: 'blue streak blur' },
                        { action: 'recall', frames: 6, description: 'rewind glitch' }
                    ]
                }
            ],
            tilesets: [{ name: 'Payload', type: 'prop', variants: 1, description: 'hovering objective vehicle' }],
            items: [{ name: 'Health Pack', category: 'powerup', animated: true, frames: 4, description: 'spinning tube with cross' }],
            ui: [{ name: 'Ult', description: 'circular percentage charge' }]
        }
    },

    // Valorant
    {
        id: 'valorant', title: 'Valorant', year: '2020', genres: ['Shooter', 'Tactical'], director: 'Riot Games', actors: [], type: 'game',
        styles: [{ name: 'Tactical Edge', promptString: 'clean sharp lines, tactical magic, anime influence, muted competitive map' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'clean tactical',
            characters: [
                {
                    name: 'Jett', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 6, description: 'holding knife floating' },
                        { action: 'dash', frames: 2, description: 'wind dash' },
                        { action: 'kunai', frames: 6, description: 'throwing knives ult' }
                    ]
                }
            ],
            tilesets: [{ name: 'Site', type: 'wall', variants: 4, description: 'orange crate box' }],
            items: [{ name: 'Spike', category: 'equipment', animated: true, frames: 4, description: 'triangular bomb' }],
            ui: [{ name: 'Timer', description: 'top round timer' }]
        }
    },

    // Fortnite
    {
        id: 'fortnite', title: 'Fortnite', year: '2017', genres: ['Shooter', 'Battle Royale'], director: 'Epic Games', actors: [], type: 'game',
        styles: [{ name: 'Toon Royale', promptString: 'vibrant cartoon 3d, building structures, wacky skins, dance emotes' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'vibrant toon',
            characters: [
                {
                    name: 'Jonesy', role: 'player', directions: 8, actions: [
                        { action: 'idle', frames: 6, description: 'holding pickaxe' },
                        { action: 'build', frames: 6, description: 'holding blueprint pencil' },
                        { action: 'dance', frames: 16, description: 'default dance emote' }
                    ]
                }
            ],
            tilesets: [{ name: 'Wall', type: 'wall', variants: 4, description: 'wood plank wall' }],
            items: [{ name: 'Chug Jug', category: 'consumable', animated: true, frames: 4, description: 'blue liquid jar' }],
            ui: [{ name: 'Storm', description: 'purple shrinking circle' }]
        }
    },

    // CS:GO
    {
        id: 'csgo', title: 'Counter-Strike: Global Offensive', year: '2012', genres: ['Shooter', 'Tactical'], director: 'Valve', actors: [], type: 'game',
        styles: [{ name: 'Tactical Realism', promptString: 'military shooter, dust 2, ak-47, terrorists vs counter-terrorists' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'desert dust',
            characters: [
                {
                    name: 'CT', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'holding m4a4' },
                        { action: 'reload', frames: 8, description: 'magazine swap' },
                        { action: 'crouch', frames: 4, description: 'crouching peek' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dust', type: 'wall', variants: 8, description: 'sandstone wall' }],
            items: [{ name: 'Flashbang', category: 'projectile', animated: false, frames: 1, description: 'silver grenade' }],
            ui: [{ name: 'Money', description: 'green dollar count' }]
        }
    },

    // Animal Crossing
    {
        id: 'animal-crossing', title: 'Animal Crossing: New Horizons', year: '2020', genres: ['Simulation', 'Social'], director: 'Nintendo', actors: [], type: 'game',
        styles: [{ name: 'Island Life', promptString: 'cute round animals, soft lighting, relaxing island, furniture, bells' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'soft pastel',
            characters: [
                {
                    name: 'Villager', role: 'player', directions: 8, actions: [
                        { action: 'walk', frames: 6, description: 'toddling walk' },
                        { action: 'dig', frames: 4, description: 'shovel dig' },
                        { action: 'fish', frames: 6, description: 'casting rod' },
                        { action: 'emote', frames: 4, description: 'joy reaction flowers' }
                    ]
                },
                {
                    name: 'Nook', role: 'npc', directions: 1, actions: [
                        { action: 'idle', frames: 4, description: 'tanuki in shirt' }
                    ]
                }
            ],
            tilesets: [{ name: 'Grass', type: 'floor', variants: 4, description: 'triangle pattern grass' }],
            items: [{ name: 'Fossil', category: 'collectible', animated: false, frames: 1, description: 'blue star fossil' }],
            ui: [{ name: 'Speech', description: 'animalese bubble' }]
        }
    },

    // The Sims
    {
        id: 'the-sims', title: 'The Sims 4', year: '2014', genres: ['Simulation'], director: 'Maxis', actors: [], type: 'game',
        styles: [{ name: 'Life Sim', promptString: 'suburban home, plumbob, sims speaking simlish, customizing house' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'bright clean',
            characters: [
                {
                    name: 'Sim', role: 'player', directions: 8, actions: [
                        { action: 'talk', frames: 8, description: 'expressive hand gestures' },
                        { action: 'cook', frames: 6, description: 'mixing bowl' },
                        { action: 'panic', frames: 6, description: 'waving arms fire' }
                    ]
                }
            ],
            tilesets: [{ name: 'Floor', type: 'floor', variants: 8, description: 'wood linoleum carpet' }],
            items: [{ name: 'Plumbob', category: 'ui', animated: true, frames: 4, description: 'floating green diamond' }],
            ui: [{ name: 'Needs', description: 'green mood bars' }]
        }
    },

    // RollerCoaster Tycoon
    {
        id: 'rct', title: 'RollerCoaster Tycoon', year: '1999', genres: ['Simulation', 'Strategy'], director: 'Chris Sawyer', actors: [], type: 'game',
        styles: [{ name: 'Pixel Park', promptString: 'isometric amusement park, tiny guests, roller coaster tracks, vomiting' }],
        gameAssets: {
            perspective: 'isometric', graphicsStyle: '16-bit', resolution: '32x32', colorPalette: 'park bright',
            characters: [
                {
                    name: 'Guest', role: 'npc', directions: 4, actions: [
                        { action: 'walk', frames: 4, description: 'tiny strolling guest' },
                        { action: 'puke', frames: 2, description: 'green face sick' }
                    ]
                },
                {
                    name: 'Coaster', role: 'player', directions: 8, actions: [
                        { action: 'ride', frames: 4, description: 'coaster train moving' }
                    ]
                }
            ],
            tilesets: [{ name: 'Track', type: 'floor', variants: 16, description: 'steel coaster supports' }],
            items: [{ name: 'Balloon', category: 'collectible', animated: true, frames: 4, description: 'floating red balloon' }],
            ui: [{ name: 'Cash', description: 'money counter' }]
        }
    },

    // Spore
    {
        id: 'spore', title: 'Spore', year: '2008', genres: ['Simulation', 'Strategy'], director: 'Maxis', actors: [], type: 'game',
        styles: [{ name: 'Evolution', promptString: 'procedural creature, cell stage mouth, tribal dance, space stage' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'alien bright',
            characters: [
                {
                    name: 'Creature', role: 'player', directions: 8, actions: [
                        { action: 'waddle', frames: 6, description: 'weird leg walk' },
                        { action: 'sing', frames: 4, description: 'musical notes mouth' },
                        { action: 'bite', frames: 4, description: 'carnivore bite' }
                    ]
                }
            ],
            tilesets: [{ name: 'Terrain', type: 'floor', variants: 8, description: 'alien colored ground' }],
            items: [{ name: 'DNA', category: 'collectible', animated: true, frames: 4, description: 'colored double helix' }],
            ui: [{ name: 'Timeline', description: 'evolution progress bar' }]
        }
    },

    // Scribblenauts
    {
        id: 'scribblenauts', title: 'Scribblenauts', year: '2009', genres: ['Puzzle', 'Sandbox'], director: '5th Cell', actors: [], type: 'game',
        styles: [{ name: 'Paper Notebook', promptString: 'notebook paper background, cardboard cutout characters, typing words' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'hand-drawn', resolution: '64x64', colorPalette: 'paper doodle',
            characters: [
                {
                    name: 'Maxwell', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'rooster hat boy smiling' },
                        { action: 'walk', frames: 4, description: 'stiff paper walk' },
                        { action: 'write', frames: 4, description: 'holding notebook' }
                    ]
                }
            ],
            tilesets: [{ name: 'Paper', type: 'background', variants: 1, description: 'lined notebook paper' }],
            items: [{ name: 'Starite', category: 'collectible', animated: true, frames: 4, description: 'smiling star' }],
            ui: [{ name: 'Keyboard', description: 'typewriter text' }]
        }
    },

    // Amnesia
    {
        id: 'amnesia', title: 'Amnesia: The Dark Descent', year: '2010', genres: ['Horror'], director: 'Frictional', actors: [], type: 'game',
        styles: [{ name: 'Sanity Slip', promptString: 'dark castle, distortion effects, lantern oil, grunt monster, hiding' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark brown',
            characters: [
                {
                    name: 'Grunt', role: 'enemy', directions: 1, actions: [
                        { action: 'walk', frames: 6, description: 'shambling jawless monster' },
                        { action: 'scream', frames: 4, description: 'opening maw' }
                    ]
                }
            ],
            tilesets: [{ name: 'Dungeon', type: 'wall', variants: 4, description: 'stone wall with moss' }],
            items: [{ name: 'Oil', category: 'consumable', animated: false, frames: 1, description: 'lantern oil flask' }],
            ui: [{ name: 'Sanity', description: 'brain graphic distortion' }]
        }
    },

    // Five Nights at Freddy's
    {
        id: 'fnaf', title: 'Five Nights at Freddy\'s', year: '2014', genres: ['Horror'], director: 'Scott Cawthon', actors: [], type: 'game',
        styles: [{ name: 'Security Cam', promptString: 'grainy security camera, animatronics staring, pizzeria, dark office' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark static',
            characters: [
                {
                    name: 'Freddy', role: 'enemy', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'standing on stage' },
                        { action: 'jumpscare', frames: 4, description: 'screaming in face' }
                    ]
                },
                {
                    name: 'Foxy', role: 'enemy', directions: 1, actions: [
                        { action: 'run', frames: 4, description: 'running down hall' }
                    ]
                }
            ],
            tilesets: [{ name: 'Office', type: 'background', variants: 1, description: 'security desk fan' }],
            items: [{ name: 'Camera', category: 'equipment', animated: false, frames: 1, description: 'monitor tablet' }],
            ui: [{ name: 'Power', description: 'battery percentage' }]
        }
    },

    // Doki Doki Literature Club
    {
        id: 'ddlc', title: 'Doki Doki Literature Club!', year: '2017', genres: ['Horror', 'Visual Novel'], director: 'Team Salvato', actors: [], type: 'game',
        styles: [{ name: 'Glitch Anime', promptString: 'cute anime dating sim, suddenly glitching, horror eyes, deleting files, monika' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'pink glitch',
            characters: [
                {
                    name: 'Monika', role: 'npc', directions: 1, actions: [
                        { action: 'smile', frames: 1, description: 'perfect smile leaning' },
                        { action: 'glitch', frames: 4, description: 'face distoring pixels' }
                    ]
                }
            ],
            tilesets: [{ name: 'Classroom', type: 'background', variants: 1, description: 'school club room' }],
            items: [{ name: 'Poem', category: 'consumable', animated: false, frames: 1, description: 'paper with words' }],
            ui: [{ name: 'Text Box', description: 'pink dialogue box' }]
        }
    },

    // Slender
    {
        id: 'slender', title: 'Slender: The Eight Pages', year: '2012', genres: ['Horror'], director: 'Parsec', actors: [], type: 'game',
        styles: [{ name: 'Static Forest', promptString: 'dark forest at night, flashlight beam, tall faceless man in suit, static interference' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'flashlight dark',
            characters: [
                {
                    name: 'Slenderman', role: 'enemy', directions: 1, actions: [
                        { action: 'static', frames: 1, description: 'tall suit no face' },
                        { action: 'teleport', frames: 2, description: 'glitching closer' }
                    ]
                }
            ],
            tilesets: [{ name: 'Tree', type: 'wall', variants: 8, description: 'dark pine tree' }],
            items: [{ name: 'Page', category: 'collectible', animated: false, frames: 1, description: 'scrawled drawing page' }],
            ui: [{ name: 'Static', description: 'screen noise overlay' }]
        }
    },

    // Alien: Isolation
    {
        id: 'alien-isolation', title: 'Alien: Isolation', year: '2014', genres: ['Horror', 'Stealth'], director: 'Creative Assembly', actors: [], type: 'game',
        styles: [{ name: 'Retro Sci-Fi Horror', promptString: '70s sci-fi aesthetic, crt monitors, xenomorph, motion tracker, steam vents' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'dark green beep',
            characters: [
                {
                    name: 'Xenomorph', role: 'enemy', directions: 1, actions: [
                        { action: 'stalk', frames: 8, description: 'tail swinging hunting' },
                        { action: 'hiss', frames: 4, description: 'drooling inner mouth' }
                    ]
                }
            ],
            tilesets: [{ name: 'Vent', type: 'floor', variants: 4, description: 'claustrophobic duct' }],
            items: [{ name: 'Tracker', category: 'equipment', animated: true, frames: 4, description: 'green blip screen' }],
            ui: [{ name: 'Noise', description: 'noise detection meter' }]
        }
    },

    // Dead by Daylight
    {
        id: 'dbd', title: 'Dead by Daylight', year: '2016', genres: ['Horror', 'Multiplayer'], director: 'Behaviour', actors: [], type: 'game',
        styles: [{ name: 'Slasher Fog', promptString: 'misty junk yard, hooks, generators, killer chasing survivor, blood trail' }],
        gameAssets: {
            perspective: 'third-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'fog dark',
            characters: [
                {
                    name: 'Trapper', role: 'enemy', directions: 8, actions: [
                        { action: 'walk', frames: 6, description: 'menacing mask walk' },
                        { action: 'slash', frames: 4, description: 'cleaver swipe' },
                        { action: 'hook', frames: 4, description: 'hanging survivor' }
                    ]
                },
                {
                    name: 'Survivor', role: 'player', directions: 8, actions: [
                        { action: 'repair', frames: 6, description: 'fixing generator wires' },
                        { action: 'limp', frames: 6, description: 'injured run' }
                    ]
                }
            ],
            tilesets: [{ name: 'Generator', type: 'prop', variants: 4, description: 'pistons firing machine' }],
            items: [{ name: 'Pallet', category: 'equipment', animated: false, frames: 1, description: 'wooden pallet' }],
            ui: [{ name: 'Skill Check', description: 'circular timing minigame' }]
        }
    },

    // Phasmophobia
    {
        id: 'phasmophobia', title: 'Phasmophobia', year: '2020', genres: ['Horror'], director: 'Kinetic', actors: [], type: 'game',
        styles: [{ name: 'Ghost Hunt', promptString: 'suburban house dark, spirit box, uv light, emf reader, ghost writing' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'night vision',
            characters: [
                {
                    name: 'Ghost', role: 'enemy', directions: 1, actions: [
                        { action: 'manifest', frames: 4, description: 'flickering figure' },
                        { action: 'crawl', frames: 6, description: 'disturbed crawl' }
                    ]
                }
            ],
            tilesets: [{ name: 'House', type: 'floor', variants: 4, description: 'dark living room' }],
            items: [{ name: 'EMF', category: 'equipment', animated: true, frames: 5, description: 'lights 1 to 5' }],
            ui: [{ name: 'Journal', description: 'evidence checklist' }]
        }
    },

    // Starbound
    {
        id: 'starbound', title: 'Starbound', year: '2016', genres: ['Sandbox', 'Adventure'], director: 'Chucklefish', actors: [], type: 'game',
        styles: [{ name: 'Pixel Space', promptString: 'detailed pixel art, diverse planets, sci-fi camping, beam down' }],
        gameAssets: {
            perspective: 'side-view', graphicsStyle: 'pixel-art-hd', resolution: '32x32', colorPalette: 'pixel vibrant',
            characters: [
                {
                    name: 'Novakid', role: 'player', directions: 2, actions: [
                        { action: 'idle', frames: 4, description: 'glowing gas person' },
                        { action: 'mine', frames: 4, description: 'matter manipulator beam' }
                    ]
                }
            ],
            tilesets: [{ name: 'Planet', type: 'floor', variants: 8, description: 'alien dirt and trees' }],
            items: [{ name: 'Matter Manipulator', category: 'equipment', animated: true, frames: 4, description: 'yellow beam tool' }],
            ui: [{ name: 'Hotbar', description: 'inventory slots' }]
        }
    },

    // Factorio
    {
        id: 'factorio', title: 'Factorio', year: '2020', genres: ['Simulation', 'Strategy'], director: 'Wube', actors: [], type: 'game',
        styles: [{ name: 'Industrial Belt', promptString: 'endless conveyor belts, steam punk machinery, alien bugs, pollution' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: '2d-clean', resolution: '32x32', colorPalette: 'industrial rust',
            characters: [
                {
                    name: 'Engineer', role: 'player', directions: 8, actions: [
                        { action: 'run', frames: 8, description: 'tiny running figure' },
                        { action: 'shoot', frames: 4, description: 'machine gun turret' }
                    ]
                },
                {
                    name: 'Biter', role: 'enemy', directions: 8, actions: [
                        { action: 'swarm', frames: 4, description: 'bug leg scuttle' }
                    ]
                }
            ],
            tilesets: [{ name: 'Belt', type: 'floor', variants: 16, description: 'moving conveyor' }],
            items: [{ name: 'Gear', category: 'collectible', animated: true, frames: 4, description: 'spinning iron gear' }],
            ui: [{ name: 'Crafting', description: 'assembly grid' }]
        }
    },

    // RimWorld
    {
        id: 'rimworld', title: 'RimWorld', year: '2018', genres: ['Simulation', 'Strategy'], director: 'Ludeon', actors: [], type: 'game',
        styles: [{ name: 'Colony Story', promptString: 'simple vector pawns, wild west sci-fi, disaster alerts, farming and raids' }],
        gameAssets: {
            perspective: 'top-down', graphicsStyle: 'vector', resolution: '32x32', colorPalette: 'dusty planet',
            characters: [
                {
                    name: 'Pawn', role: 'player', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'oval body simple' },
                        { action: 'shoot', frames: 1, description: 'holding gun' },
                        { action: 'downed', frames: 1, description: 'lying sideways red' }
                    ]
                }
            ],
            tilesets: [{ name: 'Wall', type: 'wall', variants: 4, description: 'steel wall' }],
            items: [{ name: 'Meal', category: 'consumable', animated: false, frames: 1, description: 'simple meal icon' }],
            ui: [{ name: 'Alert', description: 'letter envelope warning' }]
        }
    },

    // Papers, Please
    {
        id: 'papers-please', title: 'Papers, Please', year: '2013', genres: ['Simulation', 'Puzzle'], director: 'Lucas Pope', actors: [], type: 'game',
        styles: [{ name: 'Dystopian Doc', promptString: 'pixel art muted drab, documents, stamps, checkpoint booth, glory to arstotzka' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'pixel-art-hd', resolution: '64x64', colorPalette: 'drab olive',
            characters: [
                {
                    name: 'Immigrant', role: 'npc', directions: 1, actions: [
                        { action: 'stand', frames: 1, description: 'nervous face pixel' },
                        { action: 'walk', frames: 4, description: 'walking away' }
                    ]
                }
            ],
            tilesets: [{ name: 'Booth', type: 'background', variants: 1, description: 'metal shutter counter' }],
            items: [{ name: 'Passport', category: 'consumable', animated: false, frames: 1, description: 'red passport book' }],
            ui: [{ name: 'Stamp', description: 'accept deny stamp' }]
        }
    },

    // Return of the Obra Dinn
    {
        id: 'obra-dinn', title: 'Return of the Obra Dinn', year: '2018', genres: ['Puzzle', 'Adventure'], director: 'Lucas Pope', actors: [], type: 'game',
        styles: [{ name: '1-Bit Dither', promptString: 'monochrome 1-bit dithering, freeze frame death, sailing ship detail, pocket watch' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'vector', resolution: '64x64', colorPalette: '1-bit monochrome',
            characters: [
                {
                    name: 'Crew', role: 'npc', directions: 1, actions: [
                        { action: 'die', frames: 1, description: 'frozen death pose wireframe' }
                    ]
                }
            ],
            tilesets: [{ name: 'Deck', type: 'floor', variants: 4, description: 'wood plank dithered' }],
            items: [{ name: 'Watch', category: 'equipment', animated: true, frames: 4, description: 'skull pocket watch opening' }],
            ui: [{ name: 'Book', description: 'crew manifest' }]
        }
    },

    // Her Story
    {
        id: 'her-story', title: 'Her Story', year: '2015', genres: ['Simulation', 'FMV'], director: 'Sam Barlow', actors: [], type: 'game',
        styles: [{ name: 'CRT Database', promptString: 'crt monitor reflection, police interrogation video, fmv woman talking' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: '2d-clean', resolution: '64x64', colorPalette: 'crt glare',
            characters: [
                {
                    name: 'Hannah', role: 'npc', directions: 1, actions: [
                        { action: 'talk', frames: 8, description: 'woman in blazar talking' },
                        { action: 'guitar', frames: 4, description: 'playing guitar' }
                    ]
                }
            ],
            tilesets: [{ name: 'Screen', type: 'background', variants: 1, description: 'windows 95 desktop' }],
            items: [{ name: 'Video', category: 'collectible', animated: true, frames: 4, description: 'video clip thumbnail' }],
            ui: [{ name: 'Search', description: 'database search bar' }]
        }
    },

    // Gone Home
    {
        id: 'gone-home', title: 'Gone Home', year: '2013', genres: ['Adventure', 'Simulation'], director: 'Fullbright', actors: [], type: 'game',
        styles: [{ name: '90s House', promptString: 'stormy night, empty house, 90s nostalgia, cassette tapes, riot grrrl' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'warm lamp',
            characters: [
                {
                    name: 'Duck', role: 'npc', directions: 1, actions: [
                        { action: 'idle', frames: 1, description: 'christmas duck photo' }
                    ]
                }
            ],
            tilesets: [{ name: 'Hallway', type: 'floor', variants: 4, description: 'carpeted floor' }],
            items: [{ name: 'Tape', category: 'collectible', animated: false, frames: 1, description: 'cassette tape' }],
            ui: [{ name: 'Journal', description: 'handwritten note overlay' }]
        }
    },

    // Firewatch
    {
        id: 'firewatch', title: 'Firewatch', year: '2016', genres: ['Adventure'], director: 'Campo Santo', actors: [], type: 'game',
        styles: [{ name: 'Olly Moss Sunset', promptString: 'stylized wilderness, orange sunset layers, fire tower, walkie talkie' }],
        gameAssets: {
            perspective: 'first-person', graphicsStyle: 'low-poly-3d', resolution: '64x64', colorPalette: 'sunset orange',
            characters: [
                {
                    name: 'Henry', role: 'player', directions: 1, actions: [
                        { action: 'radio', frames: 4, description: 'holding yellow radio' },
                        { action: 'climb', frames: 4, description: 'climbing rock rope' }
                    ]
                }
            ],
            tilesets: [{ name: 'Forest', type: 'floor', variants: 8, description: 'stylized pine trees' }],
            items: [{ name: 'Compass', category: 'equipment', animated: true, frames: 4, description: 'compass needle spinning' }],
            ui: [{ name: 'Map', description: 'paper map with creases' }]
        }
    }
];
