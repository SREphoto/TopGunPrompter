const fs = require('fs');
const path = require('path');

const moviesPath = 'r:/Antigravity Multiple/TopGunPrompter/src/data/movies.ts';
const scenesPath = 'r:/Antigravity Multiple/TopGunPrompter/src/data/scenes.ts';

try {
    const moviesContent = fs.readFileSync(moviesPath, 'utf8');
    const scenesContent = fs.readFileSync(scenesPath, 'utf8');

    // Extract movie IDs
    // Looking for: id: 'some-id',
    const movieIdRegex = /id:\s*'([^']+)'/g;
    const movieIds = [];
    let match;
    while ((match = movieIdRegex.exec(moviesContent)) !== null) {
        movieIds.push(match[1]);
    }

    // Extract scene IDs
    // Looking for: 'some-id': someScenes, inside movieScenes object
    // Or simpler: just find all keys that map to something in the export object.
    // The export object starts with export const movieScenes: Record<string, Scene[]> = {

    // Let's just find all strings that are keys in the scenes.ts file.
    // They are formatted as 'key': value,
    const sceneKeyRegex = /'([^']+)':\s*[a-zA-Z0-9_]+,/g;
    const sceneIds = new Set();
    while ((match = sceneKeyRegex.exec(scenesContent)) !== null) {
        sceneIds.add(match[1]);
    }

    // Also manual checks if any are missing due to regex limitations
    // (e.g. if I missed some formatting)

    const missingIds = movieIds.filter(id => !sceneIds.has(id));

    console.log('Total Movies:', movieIds.length);
    console.log('Total Scenes defined:', sceneIds.size);
    console.log('Missing Scenes (' + missingIds.length + '):');
    missingIds.forEach(id => console.log(id));

} catch (err) {
    console.error('Error:', err);
}
