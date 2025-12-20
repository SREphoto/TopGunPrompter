import React, { useEffect } from 'react';
import { useFashionEngine } from './hooks/useFashionEngine';
import { MOCK_CHARACTERS, MOCK_ITEMS } from './data/initialData';
import type { ClothingItem } from './types/types';
import { generateScenePrompt } from './utils/promptGenerator';
import './mad-men.css';

export const MadMenFashionApp: React.FC = () => {
    const {
        currentCharacter,
        equippedItems,
        selectCharacter,
        equipItem,
        removeItem,
        resetOutfit
    } = useFashionEngine();

    // Auto-select first character for demo
    useEffect(() => {
        if (!currentCharacter && MOCK_CHARACTERS.length > 0) {
            selectCharacter(MOCK_CHARACTERS[0]);
        }
    }, [selectCharacter, currentCharacter]);

    const handleEquip = (item: ClothingItem) => {
        // If already equipped, remove it? Toggle logic usually nice.
        const isEquipped = equippedItems.some(i => i.item_id === item.item_id);
        if (isEquipped) {
            removeItem(item.item_id);
        } else {
            equipItem(item);
        }
    };

    return (
        <div className="mad-men-app">
            <header>
                <h1>Mad Men Stylist</h1>
                <div className="header-subtitle">Sterling Cooper Draper Pryce</div>
            </header>

            <div className="app-container">

                {/* Sidebar / Controls */}
                <aside>
                    <div>
                        <h3>Select Client</h3>
                        <div className="char-grid">
                            {MOCK_CHARACTERS.map(char => (
                                <button
                                    key={char.id}
                                    onClick={() => selectCharacter(char)}
                                    className={`char-btn ${currentCharacter?.id === char.id ? 'active' : ''}`}
                                >
                                    {char.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3>Wardrobe</h3>
                        <div className="wardrobe-list">
                            {MOCK_ITEMS.map(item => {
                                const isEquipped = equippedItems.some(i => i.item_id === item.item_id);
                                const isCompatible = currentCharacter && item.compatibility_tags.includes(currentCharacter.name);

                                return (
                                    <button
                                        key={item.item_id}
                                        onClick={() => handleEquip(item)}
                                        disabled={!isCompatible}
                                        className={`item-btn ${isEquipped ? 'equipped' : ''}`}
                                    >
                                        <strong>{item.name}</strong>
                                        <span className="item-category">{item.category}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <button onClick={resetOutfit} className="reset-btn">
                        Reset Outfit
                    </button>
                </aside>

                {/* Stage / Preview */}
                <main className="stage">
                    {/* Debug Z-Index List */}
                    <div className="debug-panel">
                        <strong>Layer Stack</strong>
                        <ul>
                            {/* Show reversed so top is top */}
                            {[...equippedItems].reverse().map(i => (
                                <li key={i.item_id}>
                                    {i.name}
                                </li>
                            ))}
                            <li>Base Mannequin</li>
                        </ul>
                    </div>

                    {/* Mannequin Base */}
                    {currentCharacter ? (
                        <div className="layer" style={{ zIndex: 0 }}>
                            <div className="mannequin-placeholder">
                                <div className="mannequin-label">
                                    {currentCharacter.name}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="empty-stage">
                            Select a client to begin.
                        </div>
                    )}

                    {/* Layers */}
                    {equippedItems.map(item => (
                        <div
                            key={item.item_id}
                            className="layer"
                            style={{ zIndex: item.z_index }}
                        >
                            <div className="layer-content">
                                <div className="clothing-layer-label">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Live Prompt Display */}
                    <div className="prompt-overlay">
                        <div className="prompt-content">
                            <span className="prompt-label">AI Visual Prompt:</span>
                            <p>{generateScenePrompt(currentCharacter, equippedItems)}</p>
                            <button
                                className="copy-btn"
                                onClick={() => navigator.clipboard.writeText(generateScenePrompt(currentCharacter, equippedItems))}
                            >
                                Copy Prompt
                            </button>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};
