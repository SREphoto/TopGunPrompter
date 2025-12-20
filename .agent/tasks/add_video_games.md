# Task: Add "Video Games" Section

## Objective

Expand the application to include a "Video Games" section alongside Movies and TV Series. This involves updating data types, creating a new data source, and modifying the UI to support the new media type.

## Steps

1. **Update Data Types**
    * Modify `src/data/types.ts` to include `'game'` in the `MediaItem` type definition.

2. **Create Game Data**
    * Create `src/data/games.ts` with initial entries for popular video games (e.g., The Last of Us, Cyberpunk 2077, Red Dead Redemption 2, Elden Ring).
    * Ensure each game has unique IDs, titles, styles, and prompt payloads.

3. **Update Application Logic (`src/App.tsx`)**
    * Import `games` data.
    * Update `AppMode` type (if strictly typed locally) or state usage to support `'games'`.
    * Update `handleModeSwitch` to handle `'games'`.
    * Add a "Video Games" button to the mode switcher in the UI.
    * Render the list of games when the "Video Games" mode is active.
    * Ensure `handleMovieSelect` works for games (it should just work if the ID is found in the combined list).

4. **Verification**
    * Verify the new "Video Games" tab appears.
    * Verify games are listed.
    * Verify selecting a game loads its styles and scenes (if any) or just styles.
    * Note: Games might not have "scenes" in the same way TV shows do (Season/Episode), or they might just use the "movie" structure (flat list of scenes or styles). We will check the `games.ts` structure to match `Movie` (flat structure) unless we want "Levels/Chapters". For now, we'll treat them like Movies (flat structure) as it's simpler, or we can use the `seasons` field for "Chapters". Let's stick to the Movie (flat) structure for simplicity unless the user requested otherwise.

## Context

The user wants to prompt for video game aesthetics. Games often have distinct visual styles like "Cyberpunk", "Post-Apocalyptic", "High Fantasy".
