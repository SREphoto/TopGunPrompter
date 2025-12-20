import type { Character, ClothingItem } from '../types/types';

export function generateScenePrompt(character: Character | null, equippedItems: ClothingItem[]): string {
    if (!character) return "Select a character to begin.";

    const itemsList = equippedItems.map(item => item.name.toLowerCase()).join(', ');
    const displayItems = itemsList ? `wearing a ${itemsList}` : "in base attire";

    return `A highly detailed cinematic portrait of ${character.name}, ${displayItems}. 
    Style: 1960s Mad Men aesthetic, mid-century modern office background, soft cigarette smoke, 
    warm whiskey tones, Kodak Portra 400 film stock, sharp focus on character, shallow depth of field, 
    sterling cooper draper pryce office setting, dramatic side lighting.`.replace(/\s+/g, ' ').trim();
}
