# Mad Men Fashion App Architecture

## 1. Core Architecture
The application is designed as a modular React-based "Paper Doll" engine. It separates the **State Logic** (the engine) from the **Presentation Layer** (the UI), allowing for easy integration of both static assets and GenAI content.

### Directory Structure
```
src/mad-men/
├── types/         # TypeScript definitions (ClothingItem, JSON schema)
├── logic/         # Business logic (State management, sorting, compatibility)
├── hooks/         # React Hooks (useFashionEngine)
├── data/          # Mock data and initial state assets
├── components/    # UI Components (Mannequin, Wardrobe, Controls)
└── constants.ts   # Configuration (Rules, Z-Indexes)
```

## 2. Data Structure
We use a standardized JSON schema for all items, whether they are hand-crafted static assets or AI-generated on the fly.
- **`z_index`**: Determines rendering order.
- **`compatibility_tags`**: Ensures items fit the selected character (e.g. "Don Draper").
- **`assets`**: Contains URLs to the layers (supporting transparency).

## 3. Logic & State Management
The core logic is encapsulated in `useFashionEngine`.

### Z-Index Layering
Items are automatically sorted for rendering based on their `z_index`.
**Default Hierarchy:**
1. Accessories (Index: 70-100)
2. Coats (Index: 60)
3. Dresses / Tops (Index: 40-50)
4. Bottoms (Index: 45) - *Note: Interacts with tucking logic*
5. Shoes (Index: 30)
6. Base Character (Index: 0)

### Mutual Exclusivity
The engine enforces rules to prevent invalid combinations:
- **Dress vs. Separates**: Equipping a `Dress` automatically removes any equipped `Top` or `Bottom`. Conversely, equipping a `Top` or `Bottom` removes the `Dress`.
- **Single Slot Categories**: Logic ensures only one Hat, Shoe pair, or Coat is worn at a time.
- **Multi-Slot Exceptions**: `Accessories` allow multiple items (e.g., Necklace + Cigarette).

## 4. Asset Pipeline
- **Static**: Stored in `public/assets`. High-res PNGs.
- **Generative**: The app handles `is_generated: true` items. These are created via an API call (e.g., Stable Diffusion with ControlNet) using the `gen_ai_metadata` prompts, and returned as temporary `ClothingItem` objects to be equipped immediately.
