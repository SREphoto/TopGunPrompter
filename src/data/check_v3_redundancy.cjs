
const fs = require('fs');

// Read moviesV3.ts - it's a TS file exporting an array, we'll try to regex it out
const v3Path = 'r:/Antigravity Multiple/TopGunPrompter/src/data/moviesV3.ts';
const v3Content = fs.readFileSync(v3Path, 'utf8');
const v3Ids = new Set();
let match;
const idRegex = /id:\s*['"](.*?)['"]/g;
while ((match = idRegex.exec(v3Content)) !== null) {
    v3Ids.add(match[1]);
}

// Read movies.ts
const mainPath = 'r:/Antigravity Multiple/TopGunPrompter/src/data/movies.ts';
const mainContent = fs.readFileSync(mainPath, 'utf8');
const mainIds = new Set();
while ((match = idRegex.exec(mainContent)) !== null) {
    mainIds.add(match[1]);
}

console.log(`MoviesV3 Count: ${v3Ids.size}`);
console.log(`Movies Main Count: ${mainIds.size}`);

const uniqueToV3 = [];
for (const id of v3Ids) {
    if (!mainIds.has(id)) {
        uniqueToV3.push(id);
    }
}

if (uniqueToV3.length > 0) {
    console.log('--- Unique IDs in V3 (DO NOT DELETE YET) ---');
    console.log(uniqueToV3);
} else {
    console.log('--- V3 is a perfect subset of Main. Safe to delete V3. ---');
}
