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
}

// Backward compatibility alias if needed, though we should prefer MediaItem
export type Movie = MediaItem;
