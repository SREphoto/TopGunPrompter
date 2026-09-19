import React, { useState } from 'react';
import {
    Sparkles, X, Check, Copy, Film, Tv, Gamepad2, Key,
    Plus, Trash2, Globe, Heart, Loader2
} from 'lucide-react';
import type { MediaItem, Scene, Style } from '../data/types';
import {
    askGeminiToAddFilm,
    getStoredGeminiKey,
    saveStoredGeminiKey
} from '../services/geminiService';
import { saveMediaItem } from '../services/communityMediaService';

interface GeminiAddMediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    onMediaAdded: (item: MediaItem, scenes: Scene[]) => void;
}

export const GeminiAddMediaModal: React.FC<GeminiAddMediaModalProps> = ({
    isOpen,
    onClose,
    onMediaAdded
}) => {
    // Mode: 'gemini' or 'manual'
    const [activeTab, setActiveTab] = useState<'gemini' | 'manual'>('gemini');

    // Gemini Input State
    const [mediaType, setMediaType] = useState<'movie' | 'series' | 'game'>('movie');
    const [titleInput, setTitleInput] = useState('');
    const [customNotes, setCustomNotes] = useState('');
    const [apiKey, setApiKey] = useState(() => getStoredGeminiKey());
    const [showKeyInput, setShowKeyInput] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Manual Form State
    const [manualTitle, setManualTitle] = useState('');
    const [manualYear, setManualYear] = useState(new Date().getFullYear().toString());
    const [manualDirector, setManualDirector] = useState('');
    const [manualGenres, setManualGenres] = useState('');
    const [manualActors, setManualActors] = useState('');
    const [manualPosterPrompt, setManualPosterPrompt] = useState('');
    const [manualStyles, setManualStyles] = useState<Style[]>([
        { name: 'Cinematic Anamorphic', promptString: '35mm anamorphic lens, golden hour lighting, cinematic film grain, photorealistic' }
    ]);
    const [manualScenes, setManualScenes] = useState<Scene[]>([
        { id: 1, title: 'Iconic Opening Scene', promptPayload: 'Cinematic wide establishing shot, high tension, detailed environment' }
    ]);

    // Review / Generated Result State
    const [generatedItem, setGeneratedItem] = useState<MediaItem | null>(null);
    const [generatedScenes, setGeneratedScenes] = useState<Scene[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [copiedJson, setCopiedJson] = useState(false);

    if (!isOpen) return null;

    const handleSaveKey = (val: string) => {
        setApiKey(val);
        saveStoredGeminiKey(val);
    };

    const handleGenerateWithGemini = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!titleInput.trim()) {
            setErrorMsg('Please enter a film, show, or video game title.');
            return;
        }

        setErrorMsg(null);
        setIsGenerating(true);

        try {
            const result = await askGeminiToAddFilm({
                title: titleInput.trim(),
                type: mediaType,
                customNotes: customNotes.trim(),
                apiKey: apiKey.trim()
            });

            setGeneratedItem(result.item);
            setGeneratedScenes(result.scenes);
        } catch (err: unknown) {
            console.error('Gemini generation error:', err);
            const msg = err instanceof Error ? err.message : 'Failed to generate media item. Please try again.';
            setErrorMsg(msg);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleManualSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!manualTitle.trim()) {
            setErrorMsg('Please enter a title.');
            return;
        }

        const slug = manualTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const item: MediaItem = {
            id: slug || `custom-${Date.now()}`,
            title: manualTitle.trim(),
            year: manualYear.trim() || new Date().getFullYear().toString(),
            director: manualDirector.trim() || 'Unknown Director',
            genres: manualGenres.split(',').map(g => g.trim()).filter(Boolean),
            actors: manualActors.split(',').map(a => a.trim()).filter(Boolean),
            type: mediaType,
            styles: manualStyles.length > 0 ? manualStyles : [
                { name: 'Standard Style', promptString: 'cinematic lighting, 35mm film stock, photorealistic' }
            ],
            posterPrompt: manualPosterPrompt.trim() || `Official poster for ${manualTitle.trim()} --ar 2:3`
        };

        setGeneratedItem(item);
        setGeneratedScenes(manualScenes);
    };

    const handleSaveForEveryone = async () => {
        if (!generatedItem) return;
        setIsSaving(true);

        try {
            await saveMediaItem(generatedItem, generatedScenes);
            setSaveSuccess(true);
            setTimeout(() => {
                onMediaAdded(generatedItem, generatedScenes);
                handleReset();
                onClose();
            }, 900);
        } catch (err) {
            console.error('Save failed:', err);
            setErrorMsg('Failed to save to community storage. Item will still be added locally.');
            onMediaAdded(generatedItem, generatedScenes);
            setTimeout(() => {
                handleReset();
                onClose();
            }, 1000);
        } finally {
            setIsSaving(false);
        }
    };

    const handleCopyCode = async () => {
        if (!generatedItem) return;
        const data = {
            item: generatedItem,
            scenes: generatedScenes
        };
        try {
            await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
            setCopiedJson(true);
            setTimeout(() => setCopiedJson(false), 2000);
        } catch (e) {
            console.error('Copy failed', e);
        }
    };

    const handleReset = () => {
        setGeneratedItem(null);
        setGeneratedScenes([]);
        setTitleInput('');
        setCustomNotes('');
        setErrorMsg(null);
        setSaveSuccess(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
                className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                Add Media on the Spot
                                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                                    Global Sync
                                </span>
                            </h2>
                            <p className="text-xs text-zinc-400">
                                Ask Gemini to generate a complete film prompt package or enter one manually.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Subheader / Tabs */}
                {!generatedItem && (
                    <div className="flex border-b border-zinc-800 bg-zinc-900/20 px-6 pt-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setActiveTab('gemini')}
                            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 ${activeTab === 'gemini'
                                    ? 'border-cyan-500 text-cyan-400'
                                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                                }`}
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            Ask Gemini (AI Auto-Craft)
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('manual')}
                            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 ${activeTab === 'manual'
                                    ? 'border-cyan-500 text-cyan-400'
                                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                                }`}
                        >
                            <Film className="w-3.5 h-3.5" />
                            Manual Entry
                        </button>
                    </div>
                )}

                {/* Scrollable Content Body */}
                <div className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                    {errorMsg && (
                        <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-xs text-rose-300 flex items-center justify-between">
                            <span>{errorMsg}</span>
                            <button onClick={() => setErrorMsg(null)} className="text-rose-400 hover:text-white">
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    )}

                    {/* REVIEW & APPROVAL VIEW */}
                    {generatedItem ? (
                        <div className="space-y-5">
                            {/* Success Banner */}
                            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/50 via-purple-950/30 to-zinc-900/50 border border-cyan-800/50 flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-bold text-white">{generatedItem.title}</h3>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                                            {generatedItem.year}
                                        </span>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase">
                                            {generatedItem.type}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-400 mt-1">
                                        Director / Creator: <span className="text-zinc-200">{generatedItem.director}</span> • Genres:{' '}
                                        <span className="text-zinc-200">{generatedItem.genres.join(', ')}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Styles Preview */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                    Generated Visual Styles ({generatedItem.styles.length})
                                </h4>
                                <div className="space-y-2">
                                    {generatedItem.styles.map((st, i) => (
                                        <div key={i} className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-xs">
                                            <span className="font-semibold text-cyan-300">{st.name}:</span>{' '}
                                            <span className="text-zinc-300">{st.promptString}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Scenes Preview */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                                    <Film className="w-3.5 h-3.5 text-purple-400" />
                                    Iconic Scenes ({generatedScenes.length})
                                </h4>
                                <div className="space-y-2 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                                    {generatedScenes.map((sc, i) => (
                                        <div key={i} className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-xs">
                                            <span className="font-semibold text-purple-300">
                                                #{sc.id} {sc.title}:
                                            </span>{' '}
                                            <span className="text-zinc-300">{sc.promptPayload}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Poster Prompt Preview */}
                            {generatedItem.posterPrompt && (
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                        Poster Art Prompt
                                    </h4>
                                    <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 font-mono">
                                        {generatedItem.posterPrompt}
                                    </div>
                                </div>
                            )}

                            {/* Global Save Notice */}
                            <div className="text-[11px] text-zinc-400 flex items-center gap-2 p-2.5 bg-zinc-900/40 rounded-lg border border-zinc-800/60">
                                <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                <span>
                                    Saving this title will add it to the community library so it gets added for{' '}
                                    <strong className="text-cyan-300">everyone</strong> and automatically marked as your favorite!
                                </span>
                            </div>
                        </div>
                    ) : activeTab === 'gemini' ? (
                        /* GEMINI PROMPT FORM */
                        <form onSubmit={handleGenerateWithGemini} className="space-y-5">
                            {/* Type Switcher */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                    Media Category
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setMediaType('movie')}
                                        className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 transition-all ${mediaType === 'movie'
                                                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                                            }`}
                                    >
                                        <Film className="w-3.5 h-3.5" />
                                        Movie / Film
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMediaType('series')}
                                        className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 transition-all ${mediaType === 'series'
                                                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                                            }`}
                                    >
                                        <Tv className="w-3.5 h-3.5" />
                                        TV Series
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMediaType('game')}
                                        className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 transition-all ${mediaType === 'game'
                                                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                                            }`}
                                    >
                                        <Gamepad2 className="w-3.5 h-3.5" />
                                        Video Game
                                    </button>
                                </div>
                            </div>

                            {/* Title Input */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                    Title of Film, Show, or Game
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder={
                                        mediaType === 'movie'
                                            ? 'e.g. Dune: Part Two (2024), Blade Runner 2049, Inception...'
                                            : mediaType === 'series'
                                                ? 'e.g. Arcane, Severance, Breaking Bad...'
                                                : 'e.g. God of War Ragnarok, Cyberpunk 2077, Bloodborne...'
                                    }
                                    value={titleInput}
                                    onChange={(e) => setTitleInput(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-zinc-600"
                                    disabled={isGenerating}
                                />
                            </div>

                            {/* Custom Creative Direction */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                    Creative Focus / Specific Scenes (Optional)
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder="e.g. Focus on desert sand worm sequences, orange spice lighting, and knife duel climax..."
                                    value={customNotes}
                                    onChange={(e) => setCustomNotes(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-zinc-600"
                                    disabled={isGenerating}
                                />
                            </div>

                            {/* Gemini API Key Toggle & Input */}
                            <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800/80">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                                        <Key className="w-3.5 h-3.5 text-cyan-400" />
                                        <span>Gemini API Key:</span>
                                        {apiKey ? (
                                            <span className="text-emerald-400 text-[11px] font-mono">Configured (••••••••)</span>
                                        ) : (
                                            <span className="text-amber-400 text-[11px] font-mono">Using Fallback Engine</span>
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowKeyInput(prev => !prev)}
                                        className="text-xs text-cyan-400 hover:underline"
                                    >
                                        {showKeyInput ? 'Hide' : 'Configure Key'}
                                    </button>
                                </div>

                                {showKeyInput && (
                                    <div className="mt-3 pt-3 border-t border-zinc-800/80 space-y-2">
                                        <input
                                            type="password"
                                            placeholder="Paste Gemini API Key (AI Studio)..."
                                            value={apiKey}
                                            onChange={(e) => handleSaveKey(e.target.value)}
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                                        />
                                        <p className="text-[10px] text-zinc-500 flex justify-between">
                                            <span>Stored securely in browser localStorage.</span>
                                            <a
                                                href="https://aistudio.google.com/app/apikey"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-cyan-400 hover:underline"
                                            >
                                                Get free Gemini Key →
                                            </a>
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isGenerating || !titleInput.trim()}
                                className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg ${isGenerating
                                        ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-cyan-500/20'
                                    }`}
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                                        <span>Consulting Gemini AI Cinematographer...</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4" />
                                        <span>Generate with Gemini</span>
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        /* MANUAL ENTRY FORM */
                        <form onSubmit={handleManualSubmit} className="space-y-4 text-xs">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-bold text-zinc-400 mb-1">Title *</label>
                                    <input
                                        type="text"
                                        required
                                        value={manualTitle}
                                        onChange={(e) => setManualTitle(e.target.value)}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                                        placeholder="e.g. Heat"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-zinc-400 mb-1">Year</label>
                                    <input
                                        type="text"
                                        value={manualYear}
                                        onChange={(e) => setManualYear(e.target.value)}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block font-bold text-zinc-400 mb-1">Director / Studio</label>
                                    <input
                                        type="text"
                                        value={manualDirector}
                                        onChange={(e) => setManualDirector(e.target.value)}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                                        placeholder="e.g. Michael Mann"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-zinc-400 mb-1">Genres (comma separated)</label>
                                    <input
                                        type="text"
                                        value={manualGenres}
                                        onChange={(e) => setManualGenres(e.target.value)}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                                        placeholder="Action, Crime, Drama"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-bold text-zinc-400 mb-1">Cast / Actors</label>
                                <input
                                    type="text"
                                    value={manualActors}
                                    onChange={(e) => setManualActors(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                                    placeholder="Al Pacino, Robert De Niro, Val Kilmer"
                                />
                            </div>

                            {/* Styles List */}
                            <div className="space-y-2 pt-2 border-t border-zinc-800">
                                <div className="flex items-center justify-between">
                                    <label className="font-bold text-zinc-300 uppercase tracking-wider">Visual Styles</label>
                                    <button
                                        type="button"
                                        onClick={() => setManualStyles(prev => [...prev, { name: 'New Style', promptString: 'cinematic lighting, 35mm film stock' }])}
                                        className="text-cyan-400 hover:underline flex items-center gap-1"
                                    >
                                        <Plus className="w-3 h-3" /> Add Style
                                    </button>
                                </div>
                                {manualStyles.map((st, idx) => (
                                    <div key={idx} className="flex gap-2 items-center">
                                        <input
                                            type="text"
                                            value={st.name}
                                            onChange={(e) => {
                                                const copy = [...manualStyles];
                                                copy[idx].name = e.target.value;
                                                setManualStyles(copy);
                                            }}
                                            placeholder="Style Name"
                                            className="w-1/3 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-white"
                                        />
                                        <input
                                            type="text"
                                            value={st.promptString}
                                            onChange={(e) => {
                                                const copy = [...manualStyles];
                                                copy[idx].promptString = e.target.value;
                                                setManualStyles(copy);
                                            }}
                                            placeholder="Prompt String..."
                                            className="w-2/3 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-white"
                                        />
                                        {manualStyles.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => setManualStyles(prev => prev.filter((_, i) => i !== idx))}
                                                className="text-zinc-500 hover:text-rose-400"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Scenes List */}
                            <div className="space-y-2 pt-2 border-t border-zinc-800">
                                <div className="flex items-center justify-between">
                                    <label className="font-bold text-zinc-300 uppercase tracking-wider">Scenes</label>
                                    <button
                                        type="button"
                                        onClick={() => setManualScenes(prev => [...prev, { id: prev.length + 1, title: 'New Scene', promptPayload: 'Cinematic scene description' }])}
                                        className="text-cyan-400 hover:underline flex items-center gap-1"
                                    >
                                        <Plus className="w-3 h-3" /> Add Scene
                                    </button>
                                </div>
                                {manualScenes.map((sc, idx) => (
                                    <div key={idx} className="flex gap-2 items-center">
                                        <input
                                            type="text"
                                            value={sc.title}
                                            onChange={(e) => {
                                                const copy = [...manualScenes];
                                                copy[idx].title = e.target.value;
                                                setManualScenes(copy);
                                            }}
                                            placeholder="Scene Title"
                                            className="w-1/3 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-white"
                                        />
                                        <input
                                            type="text"
                                            value={sc.promptPayload}
                                            onChange={(e) => {
                                                const copy = [...manualScenes];
                                                copy[idx].promptPayload = e.target.value;
                                                setManualScenes(copy);
                                            }}
                                            placeholder="Scene Prompt..."
                                            className="w-2/3 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-white"
                                        />
                                        {manualScenes.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => setManualScenes(prev => prev.filter((_, i) => i !== idx))}
                                                className="text-zinc-500 hover:text-rose-400"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2">
                                <label className="block font-bold text-zinc-400 mb-1">Poster Prompt (Optional)</label>
                                <input
                                    type="text"
                                    value={manualPosterPrompt}
                                    onChange={(e) => setManualPosterPrompt(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500 font-mono text-xs"
                                    placeholder="Official movie poster for [Title] --ar 2:3"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl uppercase tracking-wider text-xs transition-colors"
                            >
                                Preview & Save
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer Controls */}
                {generatedItem && (
                    <div className="p-4 bg-zinc-900/80 border-t border-zinc-800 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                            >
                                Discard & Edit
                            </button>
                            <button
                                type="button"
                                onClick={handleCopyCode}
                                className="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-1.5"
                                title="Copy JSON package"
                            >
                                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                <span>{copiedJson ? 'Copied' : 'Copy JSON'}</span>
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleSaveForEveryone}
                            disabled={isSaving}
                            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all ${saveSuccess
                                    ? 'bg-emerald-500 text-black'
                                    : 'bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-500 hover:opacity-90 text-white shadow-purple-500/20'
                                }`}
                        >
                            {saveSuccess ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    <span>Added for Everyone!</span>
                                </>
                            ) : isSaving ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Syncing to Everyone...</span>
                                </>
                            ) : (
                                <>
                                    <Heart className="w-4 h-4 fill-white" />
                                    <span>Save & Add for Everyone</span>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
