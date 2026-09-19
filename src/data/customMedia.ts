import type { MediaItem, Scene } from './types';

/**
 * Custom & Community Media items saved permanently to the codebase.
 * When users or developers add a movie, show, or video game, it is saved here
 * and included in the production build for everyone.
 */
export const customMediaList: MediaItem[] = [];

export const customScenesRecord: Record<string, Scene[]> = {};
