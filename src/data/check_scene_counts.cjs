
const fs = require('fs');
const path = require('path');

const scenesDir = 'r:/Antigravity Multiple/TopGunPrompter/src/data/scenes';
const files = fs.readdirSync(scenesDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

console.log('--- SCENE COUNT AUDIT ---');
files.forEach(file => {
    const content = fs.readFileSync(path.join(scenesDir, file), 'utf8');
    // Rough count of objects with 'id:'
    const count = (content.match(/id:\s*\d+/g) || []).length;
    console.log(`${file}: ${count} scenes`);
});
