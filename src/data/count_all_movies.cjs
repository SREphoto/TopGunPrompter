
const fs = require('fs');
const path = require('path');

const file = 'r:/Antigravity Multiple/TopGunPrompter/src/data/movies.ts';
const content = fs.readFileSync(file, 'utf8');
const count = (content.match(/id:\s*['"]/g) || []).length;
console.log(`Total movies in movies.ts: ${count}`);
