const fs = require('fs');
const content = fs.readFileSync('src/data/movies.ts', 'utf8');

// Extract movie objects - looking for id and title patterns
const idMatches = [...content.matchAll(/id:\s*'([^']+)'/g)];
const titleMatches = [...content.matchAll(/title:\s*'([^']+)'/g)];
const yearMatches = [...content.matchAll(/year:\s*'([^']+)'/g)];
const posterMatches = [...content.matchAll(/posterPrompt:\s*["']([^"'\n]+)/g)];

// Create a map of poster prompts by looking at each movie block
const movieBlocks = content.split(/(?=\s{4}\{[\s\n]+id:)/g).filter(b => b.includes("id:"));

let output = `# POSTER IMAGE GUIDE
## TopGun Prompter / Cinema Archive

This document lists all movies with their exact image filenames.
Save all poster images to: \`public/posters/\`

**File Format:** PNG or WebP (recommended)
**Naming Convention:** \`{movie-id}.png\` or \`{movie-id}.webp\`
**Recommended Size:** 800x1200px (2:3 aspect ratio)

---

## Movies Requiring Poster Images

| # | Movie Title | Year | Filename | Has Prompt |
|---|-------------|------|----------|------------|
`;

let count = 0;
for (const block of movieBlocks) {
    const idMatch = block.match(/id:\s*'([^']+)'/);
    const titleMatch = block.match(/title:\s*'([^']+)'/);
    const yearMatch = block.match(/year:\s*'([^']+)'/);
    const hasPoster = block.includes('posterPrompt:');

    if (idMatch && titleMatch && yearMatch) {
        count++;
        const id = idMatch[1];
        const title = titleMatch[1];
        const year = yearMatch[1];
        output += `| ${count} | ${title} | ${year} | \`${id}.png\` | ${hasPoster ? '✅' : '❌'} |\n`;
    }
}

output += `
---

## Total: ${count} movies

## Instructions

1. **Generate Posters**: Use the Poster Mode in the app to copy poster prompts
2. **Save Images**: Save each generated image with the exact filename listed above
3. **Upload**: Place all images in \`public/posters/\`
4. **Deploy**: Run \`npm run deploy\` to update the live site

## Notes

- Movies marked with ✅ have pre-written poster prompts
- Movies marked with ❌ will need manual prompts or won't show backgrounds
- Use 2:3 aspect ratio for best results
`;

fs.writeFileSync('POSTER_IMAGE_GUIDE.md', output);
console.log('Generated POSTER_IMAGE_GUIDE.md with', count, 'movies');
