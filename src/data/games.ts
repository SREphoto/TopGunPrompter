import type { MediaItem } from './types';

export const games: MediaItem[] = [
    {
        id: 'super-mario-bros',
        title: 'Super Mario Bros.',
        year: '1985',
        genres: ['Platformer', 'Action'],
        director: 'Shigeru Miyamoto',
        actors: [],
        type: 'game',
        styles: [
            { name: 'World 1-1', promptString: 'iconic NES platformer, blue sky, green pipes, brick blocks' },
            { name: '8-bit NES', promptString: 'retro 8-bit pixel art, limited color palette, nostalgic' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '8-bit',
            resolution: '16x16',
            characters: [
                {
                    name: 'Mario',
                    role: 'player',
                    actions: [
                        { action: 'idle', description: 'standing still, facing right, arms at sides' },
                        { action: 'walk', description: '3-frame walk cycle, arms swinging, legs moving' },
                        { action: 'run', description: 'faster walk cycle, 3 frames, leaning forward slightly' },
                        { action: 'jump', description: 'legs tucked, arms up, ascending pose' },
                        { action: 'fall', description: 'arms spread, legs down, descending pose' },
                        { action: 'crouch', description: 'ducking down, half height, looking forward' },
                        { action: 'climb', description: 'climbing vine/pole, alternating hand positions' },
                        { action: 'swim', description: 'underwater swimming stroke animation' },
                        { action: 'die', description: 'arms up, spinning upward then falling' },
                        { action: 'victory', description: 'jumping with fist in air, celebrating' }
                    ]
                },
                {
                    name: 'Goomba',
                    role: 'enemy',
                    actions: [
                        { action: 'walk', description: '2-frame waddle cycle, feet alternating left right' },
                        { action: 'squished', description: 'flattened flat sprite, eyes closed, defeated' }
                    ]
                },
                {
                    name: 'Koopa Troopa',
                    role: 'enemy',
                    actions: [
                        { action: 'walk', description: '2-frame walk cycle, green shell on back' },
                        { action: 'shell', description: 'hiding in shell, no limbs visible, spinning' },
                        { action: 'shell_slide', description: 'shell sliding fast, motion blur lines' }
                    ]
                },
                {
                    name: 'Piranha Plant',
                    role: 'enemy',
                    actions: [
                        { action: 'emerge', description: 'rising from pipe, mouth opening, 4 frames' },
                        { action: 'idle', description: 'fully emerged, mouth snapping open and closed' },
                        { action: 'retreat', description: 'sinking back into pipe, 4 frames reverse' }
                    ]
                },
                {
                    name: 'Bowser',
                    role: 'boss',
                    actions: [
                        { action: 'idle', description: 'standing menacingly, breathing, spikes visible' },
                        { action: 'walk', description: '4-frame heavy walk cycle' },
                        { action: 'fire_breath', description: 'mouth open, breathing fire projectile' },
                        { action: 'hammer_throw', description: 'arm back, throwing hammer overhead' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Ground Tiles', type: 'floor', description: 'brown brick ground blocks with shading, seamless horizontal tile' },
                { name: 'Brick Blocks', type: 'wall', description: 'destructible brown brick blocks, crack pattern' },
                { name: 'Question Blocks', type: 'prop', description: 'yellow blocks with white question mark, shimmer animation' },
                { name: 'Pipes', type: 'prop', description: 'green pipes in various sizes, warp pipe entrances, vertical and horizontal' },
                { name: 'Clouds', type: 'background', description: 'white fluffy clouds on blue sky, smiling faces' },
                { name: 'Bushes', type: 'background', description: 'green rounded bushes, decorative foreground' },
                { name: 'Castle', type: 'prop', description: 'gray stone castle with flag, end of level marker' },
                { name: 'Underground', type: 'background', description: 'dark blue underground tiles, different brick pattern' }
            ],
            items: [
                { name: 'Super Mushroom', category: 'powerup', description: 'red mushroom with white spots, bouncing animation, makes Mario big' },
                { name: 'Fire Flower', category: 'powerup', description: 'red and white flower, petal animation, grants fireball ability' },
                { name: 'Starman', category: 'powerup', description: 'yellow star with eyes, spinning animation, grants invincibility' },
                { name: '1-Up Mushroom', category: 'powerup', description: 'green mushroom with white spots, extra life' },
                { name: 'Coin', category: 'collectible', description: 'gold coin with spinning animation, 4 frames rotating' },
                { name: 'Fireball', category: 'weapon', description: 'bouncing fireball projectile, orange with flame trail' }
            ],
            ui: [
                { name: 'Lives Counter', description: 'MARIO text with x and number, 8-bit font' },
                { name: 'Coin Counter', description: 'coin icon with x and count' },
                { name: 'World Display', description: 'WORLD text with level number like 1-1' },
                { name: 'Time Counter', description: 'TIME text with countdown numbers' },
                { name: 'Score', description: 'point counter at top of screen' }
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
            perspective: 'top-down',
            graphicsStyle: '16-bit',
            resolution: '16x16',
            characters: [
                {
                    name: 'Link',
                    role: 'player',
                    actions: [
                        { action: 'idle_down', description: 'facing down/toward camera, green tunic, blonde hair' },
                        { action: 'idle_up', description: 'facing away from camera, back of head and shield visible' },
                        { action: 'idle_left', description: 'facing left, side profile, sword sheathed' },
                        { action: 'idle_right', description: 'facing right, side profile' },
                        { action: 'walk_down', description: '8-frame walk cycle facing down' },
                        { action: 'walk_up', description: '8-frame walk cycle facing up' },
                        { action: 'walk_left', description: '8-frame walk cycle facing left' },
                        { action: 'walk_right', description: '8-frame walk cycle facing right' },
                        { action: 'sword_slash_down', description: 'sword swing arc in front, facing down' },
                        { action: 'sword_slash_up', description: 'sword swing arc behind, facing up' },
                        { action: 'sword_slash_left', description: 'horizontal sword swing left' },
                        { action: 'sword_slash_right', description: 'horizontal sword swing right' },
                        { action: 'spin_attack', description: '360 degree sword spin, full rotation' },
                        { action: 'push', description: 'hands out, pushing heavy object animation' },
                        { action: 'pull', description: 'pulling object backward animation' },
                        { action: 'lift', description: 'lifting pot or rock overhead' },
                        { action: 'throw', description: 'throwing held object forward' },
                        { action: 'fall', description: 'falling into pit, arms flailing' },
                        { action: 'swim', description: 'swimming in water, head above surface' },
                        { action: 'drown', description: 'sinking in deep water, struggling' }
                    ]
                },
                {
                    name: 'Hyrule Soldier',
                    role: 'enemy',
                    actions: [
                        { action: 'patrol', description: 'walking back and forth, spear forward' },
                        { action: 'alert', description: 'exclamation mark, spotted player' },
                        { action: 'chase', description: 'running toward player, spear ready' },
                        { action: 'attack', description: 'thrusting spear forward' },
                        { action: 'defeat', description: 'spinning and disappearing in poof' }
                    ]
                },
                {
                    name: 'Moblin',
                    role: 'enemy',
                    actions: [
                        { action: 'walk', description: 'pig-like creature walking, spear in hand' },
                        { action: 'throw_spear', description: 'throwing spear projectile' },
                        { action: 'defeat', description: 'explosion poof animation' }
                    ]
                },
                {
                    name: 'Ganon',
                    role: 'boss',
                    actions: [
                        { action: 'idle', description: 'large blue pig demon, trident in hand, cape flowing' },
                        { action: 'teleport', description: 'disappearing into darkness, reappearing' },
                        { action: 'trident_throw', description: 'throwing spinning trident' },
                        { action: 'fire_bats', description: 'summoning fire keese projectiles' },
                        { action: 'vulnerable', description: 'stunned, open to silver arrow' },
                        { action: 'defeat', description: 'exploding into particles' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Grass', type: 'floor', description: 'green grass tile with occasional flowers' },
                { name: 'Path', type: 'floor', description: 'dirt path, worn brown trail' },
                { name: 'Water', type: 'floor', description: 'animated water tiles, 4-frame ripple' },
                { name: 'Deep Water', type: 'hazard', description: 'darker blue, drowning hazard' },
                { name: 'Trees', type: 'wall', description: 'dark green tree tops, blocks movement' },
                { name: 'Rocks', type: 'wall', description: 'gray boulder obstacles, some liftable' },
                { name: 'House Wall', type: 'wall', description: 'stone house exterior walls' },
                { name: 'House Roof', type: 'prop', description: 'brown thatched roof tiles' },
                { name: 'Dungeon Floor', type: 'floor', description: 'stone dungeon floor, cracks' },
                { name: 'Dungeon Walls', type: 'wall', description: 'dark stone blocks, torch sconces' },
                { name: 'Pit', type: 'hazard', description: 'black bottomless pit, falling hazard' }
            ],
            items: [
                { name: 'Heart', category: 'consumable', description: 'red heart, restores health' },
                { name: 'Heart Container', category: 'collectible', description: 'full heart, increases max health' },
                { name: 'Rupee Green', category: 'collectible', description: 'green gem, worth 1 rupee' },
                { name: 'Rupee Blue', category: 'collectible', description: 'blue gem, worth 5 rupees' },
                { name: 'Rupee Red', category: 'collectible', description: 'red gem, worth 20 rupees' },
                { name: 'Small Key', category: 'collectible', description: 'bronze key, opens one door' },
                { name: 'Big Key', category: 'collectible', description: 'ornate boss key, opens boss door' },
                { name: 'Master Sword', category: 'weapon', description: 'legendary blue-hilted sword' },
                { name: 'Bow', category: 'weapon', description: 'wooden bow with quiver' },
                { name: 'Bombs', category: 'weapon', description: 'round black bomb with fuse' },
                { name: 'Hookshot', category: 'equipment', description: 'grappling hook chain tool' },
                { name: 'Boomerang', category: 'weapon', description: 'curved throwing weapon, returns' },
                { name: 'Lamp', category: 'equipment', description: 'oil lamp, lights torches' }
            ],
            ui: [
                { name: 'Heart Row', description: 'row of heart icons showing health' },
                { name: 'Magic Meter', description: 'vertical green bar for magic power' },
                { name: 'Rupee Counter', description: 'rupee icon with 3-digit count' },
                { name: 'Item Slot', description: 'equipped item display box' },
                { name: 'Map', description: 'dungeon map grid view' }
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
            { name: 'Arcade', promptString: '16-bit fighting game, vibrant colors, detailed backgrounds' }
        ],
        gameAssets: {
            perspective: 'side-scroller',
            graphicsStyle: '16-bit',
            resolution: '64x64',
            characters: [
                {
                    name: 'Ryu',
                    role: 'player',
                    actions: [
                        { action: 'idle', description: 'fighting stance, white gi, fists up, slight bob animation' },
                        { action: 'walk_forward', description: 'stepping forward, guard up' },
                        { action: 'walk_backward', description: 'stepping backward, defensive crouch' },
                        { action: 'crouch', description: 'low crouch position, one knee down' },
                        { action: 'jump', description: 'vertical jump, tucked position' },
                        { action: 'jump_forward', description: 'forward arc jump' },
                        { action: 'jump_backward', description: 'backward arc jump' },
                        { action: 'light_punch', description: 'quick jab punch, arm extension' },
                        { action: 'medium_punch', description: 'straight punch, more wind-up' },
                        { action: 'heavy_punch', description: 'powerful hook punch, full body rotation' },
                        { action: 'light_kick', description: 'quick snap kick' },
                        { action: 'medium_kick', description: 'side kick, good range' },
                        { action: 'heavy_kick', description: 'roundhouse kick, spinning' },
                        { action: 'hadouken', description: 'hands together, blue fireball projectile, cupped hands thrust forward' },
                        { action: 'shoryuken', description: 'rising dragon punch, leaping uppercut with fist raised' },
                        { action: 'tatsumaki', description: 'spinning hurricane kick, horizontal spin in air' },
                        { action: 'hit_high', description: 'recoiling from high hit, head snapping back' },
                        { action: 'hit_low', description: 'bending from body hit' },
                        { action: 'knockdown', description: 'falling to ground, spinning' },
                        { action: 'get_up', description: 'rising from knockdown' },
                        { action: 'dizzy', description: 'wobbling, stars circling head' },
                        { action: 'victory', description: 'arms crossed, confident pose, gi flapping' },
                        { action: 'defeat', description: 'collapsed on ground, exhausted' }
                    ]
                },
                {
                    name: 'M. Bison',
                    role: 'boss',
                    actions: [
                        { action: 'idle', description: 'floating slightly, cape flowing, arms crossed menacingly' },
                        { action: 'walk', description: 'slow deliberate steps, cape swaying' },
                        { action: 'psycho_crusher', description: 'horizontal flying torpedo spin, purple energy surrounding' },
                        { action: 'scissor_kick', description: 'jumping flip kick combo' },
                        { action: 'head_stomp', description: 'diving head stomp attack from above' },
                        { action: 'psycho_power', description: 'purple energy aura flaring around body' },
                        { action: 'victory', description: 'laughing with arms spread, cape billowing' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Japan Stage', type: 'background', description: 'traditional dojo, wooden floor, hanging scrolls, paper walls' },
                { name: 'China Stage', type: 'background', description: 'marketplace street, bicycles, hanging lanterns, crowd watching' },
                { name: 'USA Stage', type: 'background', description: 'air force base, jets in background, american flags' },
                { name: 'Floor', type: 'floor', description: 'fighting stage floor with shadows' }
            ],
            items: [
                { name: 'Hadouken Fireball', category: 'weapon', description: 'blue energy ball projectile, spiraling' },
                { name: 'Sonic Boom', category: 'weapon', description: 'yellow crescent projectile' },
                { name: 'Fight UI', category: 'collectible', description: 'VS screen, character portraits, health bars' }
            ],
            ui: [
                { name: 'Health Bar', description: 'yellow bar that drains to red when damaged' },
                { name: 'Timer', description: '99 second countdown timer' },
                { name: 'Player Names', description: 'P1 and P2 indicators with character names' },
                { name: 'Round Counter', description: 'best of 3 round indicators' },
                { name: 'KO Text', description: 'knockout announcement graphic' },
                { name: 'Perfect Text', description: 'flawless victory announcement' }
            ]
        }
    },
    {
        id: 'tetris',
        title: 'Tetris',
        year: '1984',
        genres: ['Puzzle'],
        director: 'Alexey Pajitnov',
        actors: [],
        type: 'game',
        styles: [
            { name: 'Classic', promptString: 'falling blocks, clean grid, minimalist design' }
        ],
        gameAssets: {
            perspective: 'top-down',
            graphicsStyle: '8-bit',
            resolution: '8x8',
            characters: [], // Tetris has no characters
            tilesets: [
                { name: 'Playfield Border', type: 'wall', description: 'gray border around 10x20 play area' },
                { name: 'Playfield Background', type: 'background', description: 'black or dark grid background' }
            ],
            items: [
                { name: 'I-Tetromino', category: 'collectible', description: 'cyan straight piece, 4 blocks in a line' },
                { name: 'O-Tetromino', category: 'collectible', description: 'yellow square piece, 2x2 blocks' },
                { name: 'T-Tetromino', category: 'collectible', description: 'purple T-shaped piece' },
                { name: 'S-Tetromino', category: 'collectible', description: 'green S-shaped zigzag piece' },
                { name: 'Z-Tetromino', category: 'collectible', description: 'red Z-shaped zigzag piece' },
                { name: 'J-Tetromino', category: 'collectible', description: 'blue J-shaped piece' },
                { name: 'L-Tetromino', category: 'collectible', description: 'orange L-shaped piece' }
            ],
            ui: [
                { name: 'Score', description: 'point counter display' },
                { name: 'Level', description: 'current level indicator' },
                { name: 'Lines', description: 'lines cleared counter' },
                { name: 'Next Piece', description: 'preview box showing upcoming tetromino' }
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
            perspective: 'first-person',
            graphicsStyle: '32-bit',
            resolution: '64x64',
            characters: [
                {
                    name: 'Doomguy',
                    role: 'player',
                    actions: [
                        { action: 'face_forward', description: 'HUD face, looking ahead, normal health' },
                        { action: 'face_hurt', description: 'HUD face grimacing, bloodied, damaged' },
                        { action: 'face_look_left', description: 'HUD face eyes glancing left' },
                        { action: 'face_look_right', description: 'HUD face eyes glancing right' },
                        { action: 'face_fierce', description: 'HUD face grinning, just picked up weapon' },
                        { action: 'face_dead', description: 'HUD face showing death, eyes closed' }
                    ]
                },
                {
                    name: 'Imp',
                    role: 'enemy',
                    actions: [
                        { action: 'idle', description: 'hunched brown demon, clawed hands, 8 rotations' },
                        { action: 'walk', description: '4-frame walk cycle, 8 rotations' },
                        { action: 'attack_melee', description: 'slashing claw attack animation' },
                        { action: 'attack_fireball', description: 'throwing fireball, arm extended' },
                        { action: 'pain', description: 'flinching from damage' },
                        { action: 'death', description: 'falling death animation, collapsing' },
                        { action: 'gib', description: 'explosive death, body parts flying' }
                    ]
                },
                {
                    name: 'Cacodemon',
                    role: 'enemy',
                    actions: [
                        { action: 'idle', description: 'floating red orb with single green eye, mouth closed' },
                        { action: 'attack', description: 'mouth open, shooting lightning ball' },
                        { action: 'pain', description: 'wincing, eye squinting' },
                        { action: 'death', description: 'deflating, falling to ground' }
                    ]
                },
                {
                    name: 'Cyberdemon',
                    role: 'boss',
                    actions: [
                        { action: 'idle', description: 'massive demon with rocket launcher arm, hooves, horns' },
                        { action: 'walk', description: 'heavy stomping walk cycle, ground shaking' },
                        { action: 'attack', description: 'firing 3 rockets from arm launcher' },
                        { action: 'death', description: 'massive explosion death sequence' }
                    ]
                }
            ],
            tilesets: [
                { name: 'Tech Base Walls', type: 'wall', description: 'gray metal panels, rivets, computer terminals' },
                { name: 'Tech Base Floor', type: 'floor', description: 'metal grating, industrial floor' },
                { name: 'Hell Stone', type: 'wall', description: 'red flesh-like rock walls, demonic textures' },
                { name: 'Lava', type: 'hazard', description: 'bubbling lava floor, orange glow' },
                { name: 'Door', type: 'prop', description: 'sliding metal door, colored key indicators' },
                { name: 'Barrel', type: 'prop', description: 'explosive green toxic barrel' }
            ],
            items: [
                { name: 'Shotgun', category: 'weapon', description: 'pump-action shotgun sprite, first-person view' },
                { name: 'Chaingun', category: 'weapon', description: 'rotating barrel minigun, first-person' },
                { name: 'Rocket Launcher', category: 'weapon', description: 'green rocket launcher, projectiles' },
                { name: 'BFG 9000', category: 'weapon', description: 'massive green plasma weapon' },
                { name: 'Chainsaw', category: 'weapon', description: 'melee chainsaw, revving animation' },
                { name: 'Health Bonus', category: 'consumable', description: 'blue health vial, +1 health' },
                { name: 'Stimpack', category: 'consumable', description: 'small medkit, +10 health' },
                { name: 'Medikit', category: 'consumable', description: 'large medikit with cross, +25 health' },
                { name: 'Armor', category: 'equipment', description: 'green armor vest pickup' },
                { name: 'Blue Keycard', category: 'collectible', description: 'blue skull key or keycard' },
                { name: 'Red Keycard', category: 'collectible', description: 'red skull key or keycard' },
                { name: 'Yellow Keycard', category: 'collectible', description: 'yellow skull key or keycard' }
            ],
            ui: [
                { name: 'Status Bar', description: 'bottom HUD with ammo, health, armor, face, arms' },
                { name: 'Ammo Counter', description: 'current ammo and max ammo display' },
                { name: 'Health Percent', description: 'health percentage 0-200%' },
                { name: 'Armor Percent', description: 'armor percentage 0-200%' },
                { name: 'Weapon Icons', description: 'weapon slot indicators 1-7' }
            ]
        }
    }
];
