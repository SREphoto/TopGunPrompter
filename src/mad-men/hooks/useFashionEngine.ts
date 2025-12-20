import { useState, useMemo, useCallback } from 'react';
import type { ClothingItem, Character, ClothingCategory } from '../types/types';
import { Z_INDEX_LAYERS, EXCLUSIVITY_RULES } from '../constants';

const MULTI_ITEM_CATEGORIES: Set<ClothingCategory> = new Set(['Accessory']);

interface UseFashionEngineReturn {
    currentCharacter: Character | null;
    equippedItems: ClothingItem[];
    availableCategories: ClothingCategory[];
    selectCharacter: (character: Character) => void;
    equipItem: (item: ClothingItem) => void;
    removeItem: (itemId: string) => void;
    resetOutfit: () => void;
}

export function useFashionEngine(): UseFashionEngineReturn {
    const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
    const [equippedItemsMap, setEquippedItemsMap] = useState<Map<string, ClothingItem>>(new Map());

    // Derive the list of items sorted by Z-Index for rendering
    const equippedItems = useMemo(() => {
        return Array.from(equippedItemsMap.values()).sort((a, b) => {
            // Sort by Z-Index ascending (lower z-index = background, higher = foreground)
            // If logic requires specific internal z-index over category default, use item.z_index
            // The JSON has a 'z_index' field, which suggests the item itself carries its layer info.
            // We should respect that, but fallback to category defaults if missing or equal.
            if (a.z_index !== b.z_index) {
                return a.z_index - b.z_index;
            }
            // Fallback to strict category layering logic
            const zA = Z_INDEX_LAYERS[a.category] || 0;
            const zB = Z_INDEX_LAYERS[b.category] || 0;
            return zA - zB;
        });
    }, [equippedItemsMap]);

    const selectCharacter = useCallback((character: Character) => {
        setCurrentCharacter(character);
        setEquippedItemsMap(new Map()); // Reset outfit on new character
    }, []);

    const resetOutfit = useCallback(() => {
        setEquippedItemsMap(new Map());
    }, []);

    const removeItem = useCallback((itemId: string) => {
        setEquippedItemsMap(prev => {
            const next = new Map(prev);
            next.delete(itemId);
            return next;
        });
    }, []);

    const equipItem = useCallback((newItem: ClothingItem) => {
        if (!currentCharacter) {
            console.warn("No character selected.");
            return;
        }

        // Check compatibility
        if (!newItem.compatibility_tags.includes(currentCharacter.name) && !newItem.is_generated) {
            // Note: AI generated items might be generic or specific. 
            // If is_generated is true, we might skip strict tag check or assume the generator handled it.
            // For now, alerting or logging. In a strict UI, this might prevent equipping.
            console.warn(`Item ${newItem.name} might not be compatible with ${currentCharacter.name}`);
        }

        setEquippedItemsMap(prev => {
            const next = new Map(prev);

            // 1. Handle Exclusivity Rules (e.g. Dress removes Top/Bottom)
            const conflicts = EXCLUSIVITY_RULES[newItem.category];
            if (conflicts) {
                // Remove any items belonging to conflicting categories
                for (const [id, item] of next.entries()) {
                    if (conflicts.includes(item.category)) {
                        next.delete(id);
                    }
                }
            }

            // 2. Handle Reverse Exclusivity (e.g. Equipping Top removes Dress)
            // Check if existing items conflict with the NEW item
            for (const [id, existingItem] of next.entries()) {
                const existingConflicts = EXCLUSIVITY_RULES[existingItem.category];
                if (existingConflicts && existingConflicts.includes(newItem.category)) {
                    next.delete(id);
                }
            }

            // 3. Handle Single-Slot vs Multi-Slot
            if (!MULTI_ITEM_CATEGORIES.has(newItem.category)) {
                // Remove existing item of same category
                for (const [id, item] of next.entries()) {
                    if (item.category === newItem.category) {
                        next.delete(id);
                    }
                }
            }

            // 4. Add the new item
            next.set(newItem.item_id, newItem);
            return next;
        });
    }, [currentCharacter]);

    // Available categories could be dynamic based on user state, 
    // e.g. if Dress is equipped, disable 'Top'/'Bottom' buttons in UI?
    // For now return all.
    const availableCategories = Object.keys(Z_INDEX_LAYERS) as ClothingCategory[];

    return {
        currentCharacter,
        equippedItems,
        availableCategories,
        selectCharacter,
        equipItem,
        removeItem,
        resetOutfit
    };
}
