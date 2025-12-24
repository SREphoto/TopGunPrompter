
const fs = require('fs');

const libraryPath = 'r:/Antigravity Multiple/TopGunPrompter/COMPLETE_LIBRARY.md';
const content = fs.readFileSync(libraryPath, 'utf8');

const numberedRegex = /^\d+\.\s+\*\*(.*?)\*\*\s+\((\d{4})\)/gm;
const bulletRegex = /^\-\s+\*\*(.*?)\*\*\s+\((\d{4})\)/gm;

const allMovies = new Map(); // Title -> Year

let match;
while ((match = numberedRegex.exec(content)) !== null) {
    allMovies.set(match[1].trim(), match[2]);
}

while ((match = bulletRegex.exec(content)) !== null) {
    allMovies.set(match[1].trim(), match[2]);
}

console.log(`Total Unique Movies Found: ${allMovies.size}`);
console.log('--- Movies Breakdown ---');
const sortedTitles = Array.from(allMovies.keys()).sort();
sortedTitles.forEach(title => console.log(`${title} (${allMovies.get(title)})`));
