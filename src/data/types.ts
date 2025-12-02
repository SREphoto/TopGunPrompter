export interface Scene {
    id: number;
    title: string;
    promptPayload: string;
}

export interface Movie {
    id: string;
    title: string;
    year: string;
    styles: Style[];
}

export interface Style {
    name: string;
    promptString: string;
}
