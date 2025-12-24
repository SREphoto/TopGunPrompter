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
export interface SpriteAction {
    action: string;           // e.g., "idle", "run", "jump", "attack_sword"
    description: string;      // Detailed prompt for this action animation
}

export interface CharacterSprite {
    name: string;
    role: string;             // "player", "enemy", "boss", "npc"
    actions: SpriteAction[];  // All animation states for this character
}

export interface TilesetPrompt {
    name: string;
    type: string;             // "floor", "wall", "prop", "background", "hazard"
    description: string;      // Detailed tileset description
}

export interface ItemSprite {
    name: string;
    category: string;         // "weapon", "powerup", "collectible", "consumable", "equipment"
    description: string;
}

export interface GameAssets {
    // Core game properties
    perspective: string;      // "top-down", "side-scroller", "isometric", "first-person", "third-person", "2.5D"
    graphicsStyle: string;    // "8-bit", "16-bit", "32-bit", "pixel-art", "low-poly-3D", "cel-shaded", "realistic"
    resolution: string;       // "16x16", "32x32", "64x64", "128x128" for sprites

    // Sprite categories
    characters?: CharacterSprite[];  // All characters with their action sets
    tilesets?: TilesetPrompt[];      // Map tiles and backgrounds
    items?: ItemSprite[];            // Weapons, power-ups, collectibles
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
