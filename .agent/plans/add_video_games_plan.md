# Implementation Plan - Add Video Games Section

This plan outlines the steps to introduce a "Video Games" section to the TopGunPrompter application.

## User Review Required

> [!IMPORTANT]
> I will treat Video Games similarly to Movies for now (flat structure of styles), as most games have a consistent art direction or distinct "levels" that can be mapped to styles/scenes. If you prefer a Chapter/Level hierarchy like TV Seasons, please let me know. **I will proceed with the "Movie-like" flat structure for simplicity first.**

## Proposed Changes

### Data Layer

#### [src/data/types.ts]

- Update `MediaItem` interface:

  ```typescript
  type: 'movie' | 'series' | 'game';
  ```

#### [src/data/games.ts]

- **Create new file**.
- content: Export a `games` array conforming to `MediaItem`.
- **Initial Data**:
  - *The Last of Us Part I* (Post-apocalyptic, Overgrown, Emotional)
  - *Cyberpunk 2077* (Neon, Night City, Chrome, High Tech)
  - *Red Dead Redemption 2* (Western, Nature, Frontier, Golden Hour)
  - *Elden Ring* (Dark Fantasy, Erdtree Gold, Gothic, Mist)

### UI Layer

#### [src/App.tsx]

- **Imports**: Import `games` from `./data/games`.
- **State**: Update `appMode` to allow `'games'`.
- **Navigation**: Add a "Video Games" button in the top mode switcher.
- **Rendering**:
  - Add a conditional render block for `appMode === 'games'`.
  - Render the games grid (similar to Movies/TV).
- **Logic**: Ensure `currentMovie` (which holds the selected item) can find the game from the `games` array.

## Verification Plan

### Automated Tests

- None currently set up.

### Manual Verification

1. **Browser Check**:
    - Open `http://localhost:3020`.
    - Click the new "Video Games" button.
    - Confirm the list of games appears.
    - Click *Cyberpunk 2077*.
    - Confirm styles like "Neon Night" appear in the output.
