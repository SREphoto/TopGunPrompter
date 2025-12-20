
import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { movies } from './data/movies';
import { series } from './data/series';
import { games } from './data/games';
import { movieScenes } from './data/scenes';
import { tvScenes } from './data/tvScenes';
import { styles as globalStyles } from './data/styles';
import type { Scene, Style } from './data/types';

// Load environment variables
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('ERROR: TELEGRAM_BOT_TOKEN is not defined in .env file.');
    process.exit(1);
}

const bot = new Telegraf(token);

// --- HELPER FUNCTIONS ---

const getRandomItem = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const generatePrompt = (type: 'movie' | 'series' | 'game', title: string, year: string, scene: Scene, style: Style) => {
    const anchor = `Cinematic shot from the ${type === 'series' ? 'TV Series' : type === 'game' ? 'Video Game' : 'movie'} ${title} (${year})`;
    const subject = scene.promptPayload;
    const visualStyle = style.promptString;
    const params = '--ar 16:9 --v 6.0 --style raw --stylize 300';

    return `${anchor}. ${subject}. ${visualStyle}. ${params}`;
};

// --- COMMANDS ---

bot.command('start', (ctx) => {
    ctx.reply(
        'Welcome to TopGunPrompter Bot! 🎬\n\n' +
        'I can generate Midjourney prompts for Movies, TV Series, and Games.\n\n' +
        'Commands:\n' +
        '/roll - Generate a completely random prompt\n' +
        '/movie - Pick a random Movie prompt\n' +
        '/tv - Pick a random TV Series prompt\n' +
        '/game - Pick a random Game prompt\n' +
        '/list - Show available titles'
    );
});

bot.command('roll', (ctx) => {
    const allMedia = [...movies, ...series, ...games];
    const media = getRandomItem(allMedia);

    let scenes: Scene[] = [];
    if (media.type === 'series') {
        // Flatten all scenes from all episodes/seasons for simplicity
        // For now, just try S1E1 or lookups
        const s1 = tvScenes[media.id]?.[1];
        if (s1) {
            Object.values(s1).forEach((epScenes: Scene[]) => {
                scenes = [...scenes, ...epScenes];
            });
        }
    } else if (media.type === 'game') {
        // Games also store in movieScenes for now based on our recent change involving scenes.ts? 
        // Wait, in the App we added games to scenes.ts imports? Yes.
        scenes = movieScenes[media.id] || [];
    } else {
        scenes = movieScenes[media.id] || [];
    }

    if (scenes.length === 0) {
        return ctx.reply(`Selected ${media.title} but found no scenes! Try again.`);
    }

    const scene = getRandomItem(scenes);
    const styles = [...(media.styles || []), ...globalStyles];
    const style = getRandomItem(styles);

    const prompt = generatePrompt(media.type, media.title, media.year, scene, style);

    ctx.reply(`🎲 **${media.title}**\n\n\`${prompt}\``, { parse_mode: 'Markdown' });
});

bot.command('movie', (ctx) => {
    const media = getRandomItem(movies);
    const scenes = movieScenes[media.id] || [];
    if (scenes.length === 0) return ctx.reply(`No scenes for ${media.title}`);

    const scene = getRandomItem(scenes);
    const style = getRandomItem([...(media.styles || []), ...globalStyles]);
    const prompt = generatePrompt('movie', media.title, media.year, scene, style);

    ctx.reply(`🎬 **${media.title}**\n\n\`${prompt}\``, { parse_mode: 'Markdown' });
});

bot.command('tv', (ctx) => {
    const media = getRandomItem(series);
    // Rough look up for S1E1 scenes for now
    const scenes = tvScenes[media.id]?.[1]?.[1] || [];
    if (scenes.length === 0) return ctx.reply(`No scenes for ${media.title}`);

    const scene = getRandomItem(scenes);
    const style = getRandomItem([...(media.styles || []), ...globalStyles]);
    const prompt = generatePrompt('series', media.title, media.year, scene, style);

    ctx.reply(`📺 **${media.title}**\n\n\`${prompt}\``, { parse_mode: 'Markdown' });
});

bot.command('game', (ctx) => {
    const media = getRandomItem(games);
    const scenes = movieScenes[media.id] || [];
    if (scenes.length === 0) return ctx.reply(`No scenes for ${media.title}`);

    const scene = getRandomItem(scenes);
    const style = getRandomItem([...(media.styles || []), ...globalStyles]);
    const prompt = generatePrompt('game', media.title, media.year, scene, style);

    ctx.reply(`🎮 **${media.title}**\n\n\`${prompt}\``, { parse_mode: 'Markdown' });
});

bot.command('list', (ctx) => {
    const movieList = movies.map(m => `🎬 ${m.title}`).join('\n');
    const tvList = series.map(s => `📺 ${s.title}`).join('\n');
    const gameList = games.map(g => `🎮 ${g.title}`).join('\n');

    ctx.reply(`Available Titles:\n\n${movieList}\n\n${tvList}\n\n${gameList}`);
});


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('Bot is starting...');
bot.launch();
