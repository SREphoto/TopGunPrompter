export interface Scene {
    id: number;
    title: string;
    promptPayload: string;
}

export interface Movie {
    id: string;
    title: string;
    year: string;
    genres: string[];
    director: string;
    actors: string[];
    styles: Style[];
}

export interface Style {
    name: string;
    promptString: string;
}
