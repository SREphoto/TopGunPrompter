
const fs = require('fs');
const path = require('path');

const moviesPath = path.join(__dirname, 'movies.ts');
const scenesPath = path.join(__dirname, 'scenes.ts');

const moviesContent = fs.readFileSync(moviesPath, 'utf8');
const scenesContent = fs.readFileSync(scenesPath, 'utf8');

// Extract movie IDs
const movieIds = [];
const movieRegex = /id:\s*'([^']+)'/g;
let match;
while ((match = movieRegex.exec(moviesContent)) !== null) {
    movieIds.push(match[1]);
}

// Extract scene keys
const sceneKeys = [];
const sceneRegex = /'([^']+)':/g; // Matches 'key': value
while ((match = sceneRegex.exec(scenesContent)) !== null) {
    sceneKeys.push(match[1]);
}

// Find missing
const missing = movieIds.filter(id => !sceneKeys.includes(id));

console.log(`Total Movies: ${movieIds.length}`);
console.log(`Total Scene Entries: ${sceneKeys.length}`);
console.log(`Missing Scenes for ${missing.length} movies:`);
console.log(missing.join('\n'));
