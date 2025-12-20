import type { ClothingCategory } from './types/types';

export const Z_INDEX_LAYERS: Record<ClothingCategory, number> = {
    'Umbrella': 100, // Held item, front
    'Bag': 90,       // Held or over shoulder which is over coat
    'Hat': 80,       // Top of head
    'Accessory': 70, // Jewelry etc.
    'Coat': 60,      // Outerwear
    'Dress': 50,     // Main body (Mutually exclusive with Top/Bottom usually, or just Bottom)
    'Bottom': 45,    // Trousers/Skirts (Often Over shirts if tucked)
    'Top': 40,       // Shirts/Blouses
    'Shoe': 30,      // Shoes
    'Hosiery': 20,   // Socks/Tights
    'Undergarment': 10 // Base
};

// Rules for mutual exclusivity
// Key: The category being added. Value: Array of categories that must be removed.
export const EXCLUSIVITY_RULES: Partial<Record<ClothingCategory, ClothingCategory[]>> = {
    'Dress': ['Top', 'Bottom'], // Choosing a dress removes current tops and bottoms
    'Top': ['Dress'],           // Choosing a top removes dress
    'Bottom': ['Dress'],        // Choosing bottoms removes dress
    // Shoes might replace other Shoes (handled by single-item-per-category logic usually, or explicit exclusivity)
    // The requirements say "cannot wear a Dress and Trousers at the same time".
};

export const CHARACTERS = [
    { id: 'don_draper', name: 'Don Draper' },
    { id: 'betty_draper', name: 'Betty Draper' },
    { id: 'peggy_olson', name: 'Peggy Olson' },
    { id: 'joan_holloway', name: 'Joan Holloway' },
    { id: 'roger_sterling', name: 'Roger Sterling' },
    { id: 'pete_campbell', name: 'Pete Campbell' },
    { id: 'sally_draper', name: 'Sally Draper' }
] as const;
