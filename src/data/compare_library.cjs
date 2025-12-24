
const fs = require('fs');

// Read MD
const mdPath = 'r:/Antigravity Multiple/TopGunPrompter/COMPLETE_LIBRARY.md';
const mdContent = fs.readFileSync(mdPath, 'utf8');
const mdMovies = new Set();
let match;
const regex = /\*\*(.*?)\*\*\s+\((\d{4})\)/gm;
while ((match = regex.exec(mdContent)) !== null) {
    mdMovies.add(match[1].trim());
}

// Read TS
const tsPath = 'r:/Antigravity Multiple/TopGunPrompter/src/data/movies.ts';
const tsContent = fs.readFileSync(tsPath, 'utf8');
const tsMovies = new Set();
const titleRegex = /title:\s*['"](.*?)['"]/g;
while ((match = titleRegex.exec(tsContent)) !== null) {
    tsMovies.add(match[1].trim());
}

console.log(`MD Count: ${mdMovies.size}`);
console.log(`TS Count: ${tsMovies.size}`);

console.log('\n--- In MD but MISSING from TS ---');
for (const m of mdMovies) {
    if (!tsMovies.has(m)) {
        console.log(m);
    }
}

console.log('\n--- In TS but MISSING from MD ---');
for (const m of tsMovies) {
    if (!mdMovies.has(m)) {
        console.log(m);
    }
}
