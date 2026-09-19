import type { MediaItem, Scene } from '../data/types';

const STORAGE_KEYS = {
    FAVORITES: 'topgun_favorites',
    COMMUNITY_MEDIA: 'topgun_community_media',
    COMMUNITY_SCENES: 'topgun_community_scenes',
    GEMINI_KEY: 'topgun_gemini_api_key'
};

// Default public cloud sync endpoint (can be overridden via environment variable)
const DEFAULT_CLOUD_API = (import.meta.env.VITE_COMMUNITY_SYNC_URL as string) ||
    'https://topgunprompter-community-default-rtdb.firebaseio.com';

// ==========================================
// 🌟 Favorites Management
// ==========================================

export function getFavorites(): string[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error('Failed to load favorites from localStorage:', e);
        return [];
    }
}

export function saveFavorites(ids: string[]): void {
    try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(ids));
    } catch (e) {
        console.error('Failed to save favorites to localStorage:', e);
    }
}

export function toggleFavorite(id: string): string[] {
    const current = getFavorites();
    const index = current.indexOf(id);
    let updated: string[];
    if (index >= 0) {
        updated = current.filter(item => item !== id);
    } else {
        updated = [...current, id];
    }
    saveFavorites(updated);
    return updated;
}

export function isFavorite(id: string): boolean {
    return getFavorites().includes(id);
}

// ==========================================
// 👥 Community Media Persistence & Cloud Sync
// ==========================================

export function getLocalCommunityMedia(): MediaItem[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.COMMUNITY_MEDIA);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error('Failed to load local community media:', e);
        return [];
    }
}

export function getLocalCommunityScenes(): Record<string, Scene[]> {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.COMMUNITY_SCENES);
        return stored ? JSON.parse(stored) : {};
    } catch (e) {
        console.error('Failed to load local community scenes:', e);
        return {};
    }
}

/**
 * Loads all community media, merging local cache with remote cloud store.
 */
export async function loadCommunityMedia(): Promise<{
    media: MediaItem[];
    scenes: Record<string, Scene[]>;
}> {
    // 1. Start with local cache for instant zero-latency loading
    const localMedia = getLocalCommunityMedia();
    const localScenes = getLocalCommunityScenes();

    const mediaMap = new Map<string, MediaItem>();
    localMedia.forEach(m => mediaMap.set(m.id, m));
    const scenesMap: Record<string, Scene[]> = { ...localScenes };

    // 2. Fetch from Cloud Store (Firebase Realtime DB or public store)
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

        const res = await fetch(`${DEFAULT_CLOUD_API}/community.json`, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
            const data = await res.json();
            if (data && typeof data === 'object') {
                // Parse items from cloud
                const record = data as Record<string, { item?: MediaItem; scenes?: Scene[] }>;
                Object.values(record).forEach(entry => {
                    if (entry?.item && entry?.item?.id) {
                        mediaMap.set(entry.item.id, entry.item);
                        if (entry.scenes) {
                            scenesMap[entry.item.id] = entry.scenes;
                        }
                    }
                });

                // Update local cache with remote sync
                const mergedMedia = Array.from(mediaMap.values());
                localStorage.setItem(STORAGE_KEYS.COMMUNITY_MEDIA, JSON.stringify(mergedMedia));
                localStorage.setItem(STORAGE_KEYS.COMMUNITY_SCENES, JSON.stringify(scenesMap));
            }
        }
    } catch {
        // Network or offline fallback - use local cache
    }

    return {
        media: Array.from(mediaMap.values()),
        scenes: scenesMap
    };
}

/**
 * Saves a media item and its scenes so that it gets added for everyone:
 * 1. Saves to local storage cache for instant update
 * 2. Saves to remote cloud store so all users on GitHub Pages see it
 * 3. Saves to local Vite dev server (if in local development) to write directly into source files
 */
export async function saveMediaItem(
    item: MediaItem,
    scenes: Scene[]
): Promise<{
    success: boolean;
    savedToFile: boolean;
    savedToCloud: boolean;
    error?: string;
}> {
    let savedToFile = false;
    let savedToCloud = false;

    // 1. Update Local Cache
    try {
        const currentMedia = getLocalCommunityMedia();
        const updatedMedia = [item, ...currentMedia.filter(m => m.id !== item.id)];
        localStorage.setItem(STORAGE_KEYS.COMMUNITY_MEDIA, JSON.stringify(updatedMedia));

        const currentScenes = getLocalCommunityScenes();
        currentScenes[item.id] = scenes;
        localStorage.setItem(STORAGE_KEYS.COMMUNITY_SCENES, JSON.stringify(currentScenes));
    } catch (e) {
        console.error('Failed to update localStorage for new media:', e);
    }

    // 2. Local Dev Server File Writer (if running via Vite dev server)
    try {
        const devRes = await fetch('/api/save-media', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item, scenes })
        });
        if (devRes.ok) {
            const devData = await devRes.json();
            if (devData.success) {
                savedToFile = true;
            }
        }
    } catch {
        // Not in local dev server or endpoint disabled
    }

    // 3. Remote Cloud Store (Firebase Realtime DB REST API)
    try {
        const cloudRes = await fetch(`${DEFAULT_CLOUD_API}/community/${item.id}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                item,
                scenes,
                createdAt: new Date().toISOString()
            })
        });
        if (cloudRes.ok) {
            savedToCloud = true;
        }
    } catch {
        // Cloud endpoint offline
    }

    return {
        success: true,
        savedToFile,
        savedToCloud
    };
}
