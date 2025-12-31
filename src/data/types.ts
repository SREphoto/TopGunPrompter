export interface Scene {
    id: number;
    title: string;
    promptPayload: string;
}

export interface Style {
    name: string;
    promptString: string;
}

export interface Episode {
    id: number;
    title: string;
}

export interface Season {
    id: number;
    episodes: Episode[];
}

// Sprite sheet generation prompts for game assets

// Standard game perspectives/camera angles
export type GamePerspective =
    | 'side-scroller'      // Mario, Sonic, Mega Man - horizontal view
    | 'top-down'           // Zelda ALTTP, Hotline Miami - overhead view
    | 'isometric'          // Diablo, SimCity - 3/4 angled view
    | '3/4-view'           // RPG Maker style - slightly angled overhead
    | 'first-person'       // Doom, Wolfenstein - player view (enemies face camera)
    | 'third-person'       // Tony Hawk, action games - behind player
    | 'fighting'           // Street Fighter - side view with facing opponent
    | 'racing-overhead'    // Micro Machines - top-down vehicle view
    | 'racing-behind'      // OutRun - third-person behind vehicle
    | 'side-view';         // General side view (Limbo, Inside)

// Standard graphics styles
export type GraphicsStyle =
    | '8-bit'              // NES, Game Boy - 4 colors, chunky pixels
    | '16-bit'             // SNES, Genesis - more colors, detailed
    | '32-bit'             // PS1, Saturn - early 3D or detailed 2D
    | 'pixel-art-hd'       // Shovel Knight - modern pixel art, higher res
    | 'low-poly-3d'        // PS1 style 3D
    | 'cel-shaded'         // Jet Set Radio style
    | 'vector'             // Clean scalable graphics
    | 'hand-drawn'         // Cuphead, Hollow Knight
    | 'arcade'             // Classic arcade detailed pixel art
    | '2d-clean';          // Modern sharp 2D (Flash, Vector-like)

export interface SpriteAction {
    action: string;           // e.g., "idle", "run", "jump", "attack_sword"
    frames: number;           // Number of animation frames (e.g., 4, 6, 8)
    description: string;      // Detailed prompt for this action animation
}

export interface CharacterSprite {
    name: string;
    role: 'player' | 'enemy' | 'boss' | 'npc';
    directions: number;       // 1 (side only), 2 (left/right), 4 (cardinal), 8 (full rotation)
    actions: SpriteAction[];  // All animation states for this character
}

export interface TilesetPrompt {
    name: string;
    type: 'floor' | 'wall' | 'prop' | 'background' | 'hazard' | 'platform' | 'decoration';
    variants: number;         // How many tile variations
    description: string;      // Detailed tileset description
}

export interface ItemSprite {
    name: string;
    category: 'weapon' | 'powerup' | 'collectible' | 'consumable' | 'equipment' | 'projectile' | 'hazard' | 'ui';
    animated: boolean;        // Does this item animate?
    frames: number;           // Animation frames if animated
    description: string;
}

export interface GameAssets {
    // Core game properties for sprite sheet generation
    perspective: GamePerspective;
    graphicsStyle: GraphicsStyle;
    resolution: '8x8' | '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '128x128';
    colorPalette?: string;    // e.g., "NES palette", "PICO-8", "Game Boy green"

    // Sprite sheet categories
    characters?: CharacterSprite[];  // All characters with their action sets
    tilesets?: TilesetPrompt[];      // Map tiles and backgrounds
    items?: ItemSprite[];            // Weapons, power-ups, collectibles
    effects?: { name: string; frames: number; description: string }[];  // VFX sprites
    ui?: { name: string; description: string }[];  // HUD elements, menus
}

export interface MediaItem {
    id: string;
    title: string;
    year: string;
    genres: string[];
    director: string; // Or Creator for TV
    actors: string[];
    styles: Style[];
    type: 'movie' | 'series' | 'game';
    seasons?: Season[]; // Only for type === 'series'
    posterPrompt?: string; // Prompt to generate the original movie poster
    gameAssets?: GameAssets; // Only for type === 'game' - sprite sheet prompts
}

// Backward compatibility alias if needed, though we should prefer MediaItem
export type Movie = MediaItem;
