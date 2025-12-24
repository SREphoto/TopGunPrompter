import { useState, useMemo, useRef } from 'react';
import { movieScenes } from './data/scenes';
import { tvScenes } from './data/tvScenes';
import { styles as globalStyles } from './data/styles';
import { movies } from './data/movies';
import { series } from './data/series';
import { games } from './data/games';
import { deployedApps, repoApps, localApps } from './data/projects';
import {
  Copy, Terminal, Film, Palette, CheckCircle, ChevronDown, ChevronRight, Search, SortAsc,
  Layers, Maximize2, Minimize2, Filter, Dices, Lock, Unlock, Trophy, Grid, X,
  ExternalLink, Shirt, Sword, Car, Rocket, Flame, Gamepad2, Aperture, Map, Music,
  Heart, Zap, Waves, BarChart3, Skull, Coins, MessageCircle, Video, Citrus, Mail, Info, FileText, User, Image
} from 'lucide-react';
import type { MediaItem } from './data/types';
import { topMoviesYearly } from './data/topMoviesYearly';
import { VersionModal } from './components/VersionModal';
import { versionHistory } from './data/versionHistory';

const getTopMovieInfo = (title: string, year: string) => {
  const entry = topMoviesYearly.find(y => y.year === year);
  if (!entry) return null;
  const categories = Object.entries(entry.categories)
    .filter(([, t]) => t === title)
    .map(([c]) => c); // check for exact match
  if (categories.length === 0) return null;
  return categories.join(', ');
};

type LayoutMode = 'split' | 'scene-focus' | 'style-focus';

function App() {
  // New UI State
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('split');

  // Filter/Sort State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [groupBy, setGroupBy] = useState<'none' | 'genre' | 'decade'>('none');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Existing State
  const [appMode, setAppMode] = useState<'movies' | 'tv' | 'games'>('movies');
  const [selectedMovieId, setSelectedMovieId] = useState<string>('top-gun');
  // TV Series State
  const [selectedSeasonId, setSelectedSeasonId] = useState<number>(1);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number>(1);

  const [selectedSceneId, setSelectedSceneId] = useState<number | null>(null);
  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);
  const [version, setVersion] = useState<string>('7');
  const [ar, setAr] = useState<string>('16:9');
  const [stylize, setStylize] = useState<number>(300);
  const [copied, setCopied] = useState(false);
  const [copyMode, setCopyMode] = useState<'standard' | 'next-scene' | 'next-style'>('standard');

  // V7 Features
  const [compareLenses, setCompareLenses] = useState(false);
  const [burstMode, setBurstMode] = useState(false);
  const [cleanUp, setCleanUp] = useState(false);
  const [draftMode, setDraftMode] = useState(false);

  // Randomizer State
  const [lockMovie, setLockMovie] = useState(false);
  const [lockScene, setLockScene] = useState(false);
  const [lockStyle, setLockStyle] = useState(false);

  // Quick Copy Feedback State
  const [copiedSceneId, setCopiedSceneId] = useState<number | string | null>(null);
  const [copiedStyleName, setCopiedStyleName] = useState<string | null>(null);
  const [isStudioHubOpen, setIsStudioHubOpen] = useState(false);
  const [isVersionModalOpen, setIsVersionModalOpen] = useState(false);
  const [posterMode, setPosterMode] = useState(false);
  const [posterCopied, setPosterCopied] = useState(false);

  // Unified Media List
  const allMedia: MediaItem[] = useMemo(() => [...movies, ...series, ...games], []);

  // Handlers for interactive cards
  const handleQuickCopy = async (e: React.MouseEvent, text: string, type: 'scene' | 'style', id: number | string) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'scene') {
        setCopiedSceneId(id as number);
        setTimeout(() => setCopiedSceneId(null), 1500);
      } else {
        setCopiedStyleName(id as string);
        setTimeout(() => setCopiedStyleName(null), 1500);
      }
    } catch (err) { console.error('Quick copy failed', err); }
  };

  const handleToggleLock = (e: React.MouseEvent, type: 'scene' | 'style') => {
    e.stopPropagation();
    if (type === 'scene') setLockScene(prev => !prev);
    if (type === 'style') setLockStyle(prev => !prev);
  };

  const currentMovie = useMemo(() => allMedia.find(m => m.id === selectedMovieId) || allMedia[0], [selectedMovieId, allMedia]);
  const isChristmas = useMemo(() => currentMovie.genres.includes('Christmas'), [currentMovie]);
  const isWar = useMemo(() => currentMovie.genres.includes('War'), [currentMovie]);

  // Scenes Logic - for games, convert gameAssets to scene-like format
  const currentScenes = useMemo(() => {
    if (currentMovie.type === 'series') {
      return tvScenes[currentMovie.id]?.[selectedSeasonId]?.[selectedEpisodeId] || [];
    }
    if (currentMovie.type === 'game' && currentMovie.gameAssets) {
      // Convert gameAssets to scene-like format for display
      const assets = currentMovie.gameAssets;
      const scenes: { id: number; title: string; promptPayload: string }[] = [];
      let idCounter = 1;

      // Add game info header
      const stylePrefix = `${assets.graphicsStyle} ${assets.perspective} game sprite, ${assets.resolution} resolution`;

      // Add characters with their actions
      assets.characters?.forEach(char => {
        const roleIcon = char.role === 'player' ? '⚔️' : char.role === 'boss' ? '👹' : char.role === 'enemy' ? '👾' : '🧑';
        char.actions.forEach(action => {
          scenes.push({
            id: idCounter++,
            title: `${roleIcon} ${char.name}: ${action.action}`,
            promptPayload: `${stylePrefix}, ${char.name} character sprite sheet, ${action.action} animation, ${action.description}`
          });
        });
      });

      // Add tilesets
      assets.tilesets?.forEach(tile => {
        const typeIcon = tile.type === 'floor' ? '🟫' : tile.type === 'wall' ? '🧱' : tile.type === 'hazard' ? '⚠️' : tile.type === 'background' ? '🌄' : '📦';
        scenes.push({
          id: idCounter++,
          title: `${typeIcon} Tile: ${tile.name}`,
          promptPayload: `${stylePrefix}, tileset sprite sheet, ${tile.name}, ${tile.type} tiles, ${tile.description}`
        });
      });

      // Add items
      assets.items?.forEach(item => {
        const catIcon = item.category === 'weapon' ? '🗡️' : item.category === 'powerup' ? '⭐' : item.category === 'consumable' ? '💊' : item.category === 'equipment' ? '🛡️' : '💎';
        scenes.push({
          id: idCounter++,
          title: `${catIcon} Item: ${item.name}`,
          promptPayload: `${stylePrefix}, item sprite sheet, ${item.name}, ${item.category}, ${item.description}`
        });
      });

      // Add UI elements
      assets.ui?.forEach(ui => {
        scenes.push({
          id: idCounter++,
          title: `🖼️ UI: ${ui.name}`,
          promptPayload: `${stylePrefix}, game UI element, ${ui.name}, ${ui.description}`
        });
      });

      return scenes;
    }
    return movieScenes[selectedMovieId] || [];
  }, [selectedMovieId, currentMovie, selectedSeasonId, selectedEpisodeId]);

  // Combine movie-specific styles with global styles for lookup
  const allStyles = useMemo(() => [
    ...(currentMovie.styles || []),
    ...globalStyles
  ], [currentMovie]);

  // --- Filtering & Sorting Logic ---
  // --- Filtering & Sorting Logic ---
  const processedMovies = useMemo(() => {
    // Only process MOVIES here for the main list, we will handle series separately
    let result = [...movies];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.actors.some(a => a.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => {
      const valA = sortBy === 'title' ? a.title : a.year;
      const valB = sortBy === 'title' ? b.title : b.year;

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [searchQuery, sortBy, sortOrder]);

  const groupedMovies = useMemo(() => {
    if (groupBy === 'none') return { 'All Movies': processedMovies };
    const groups: Record<string, typeof movies> = {};
    processedMovies.forEach(movie => {
      let keys: string[] = [];
      if (groupBy === 'decade') {
        const decade = Math.floor(parseInt(movie.year) / 10) * 10;
        keys = [`${decade}s`];
      } else if (groupBy === 'genre') {
        keys = movie.genres || ['Uncategorized'];
      }
      keys.forEach(key => {
        if (!groups[key]) groups[key] = [];
        groups[key].push(movie);
      });
    });
    return Object.keys(groups).sort().reduce((acc, key) => { acc[key] = groups[key]; return acc; }, {} as Record<string, typeof movies>);
  }, [processedMovies, groupBy]);


  const generatedPrompt = useMemo(() => {
    if (!selectedSceneId || !selectedStyleName) return '';
    const scene = currentScenes.find(s => s.id === selectedSceneId);
    const style = allStyles.find(s => s.name === selectedStyleName);

    if (scene && style) {
      // 1. Anchor (Context)
      const anchor = `Cinematic shot from the ${currentMovie.type === 'series' ? 'TV Series' : currentMovie.type === 'game' ? 'Video Game' : 'movie'} ${currentMovie.title} (${currentMovie.year})`;

      // 2. Subject & Action
      const subject = scene.promptPayload;

      // 3. Visual Style
      const visualStyle = style.promptString;

      // 4. Technical Specs (Hardware/Lenses)
      let techSpecs = '';
      if (compareLenses) {
        techSpecs += ' {35mm lens, 85mm lens, Fisheye lens} --fast';
      }

      // 5. Parameters
      let params = `--ar ${ar} --v ${version} --style raw`;
      if (stylize > 0) params += ` --stylize ${stylize}`;
      if (burstMode) params += ' --repeat 5';
      if (draftMode) params += ' --draft';
      if (cleanUp) params += ' --no text, watermark, signature, blur, distortion';

      // Assemble: Context + Subject + Style + Tech + Params
      return `${anchor}. ${subject}. ${visualStyle}.${techSpecs} ${params}`;
    }
    return '';
  }, [selectedSceneId, selectedStyleName, currentScenes, allStyles, currentMovie, ar, version, stylize, compareLenses, burstMode, draftMode, cleanUp]);

  const handleMovieSelect = async (id: string) => {
    setSelectedMovieId(id);
    setSelectedSceneId(null);
    setSelectedStyleName(null);
    // Reset series state if switching
    const media = allMedia.find(m => m.id === id);
    if (media?.type === 'series') {
      setSelectedSeasonId(1);
      setSelectedEpisodeId(1);
    }

    // Poster Mode: Auto-copy poster prompt
    if (posterMode && media?.posterPrompt) {
      try {
        await navigator.clipboard.writeText(media.posterPrompt);
        setPosterCopied(true);
        setTimeout(() => setPosterCopied(false), 1500);
      } catch (err) {
        console.error('Poster copy failed', err);
      }
    }
  };

  const handleModeSwitch = (mode: 'movies' | 'tv' | 'games') => {
    setAppMode(mode);
    // Reset selection when switching modes
    if (mode === 'movies') {
      handleMovieSelect('top-gun');
    } else if (mode === 'tv') {
      handleMovieSelect('mad-men');
    } else {
      handleMovieSelect('the-last-of-us-part-1');
    }
  };

  const handleJumpToGenre = (genre: string) => {
    if (sectionRefs.current[genre]) {
      sectionRefs.current[genre]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const handleCopy = async () => {
    if (generatedPrompt) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(generatedPrompt);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = generatedPrompt;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try { document.execCommand('copy'); } catch (err) { console.error('Fallback copy', err); }
          document.body.removeChild(textArea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) { console.error('Copy failed', err); }

      if (copyMode === 'next-scene' && currentScenes.length > 0) {
        const currentIndex = currentScenes.findIndex(s => s.id === selectedSceneId);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % currentScenes.length;
          setSelectedSceneId(currentScenes[nextIndex].id);
        }
      } else if (copyMode === 'next-style' && allStyles.length > 0) {
        const currentIndex = allStyles.findIndex(s => s.name === selectedStyleName);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % allStyles.length;
          setSelectedStyleName(allStyles[nextIndex].name);
        }
      }
    }
  };

  const handleRandomize = () => {
    // 1. Randomize Movie (if not locked)
    let newMovieId = selectedMovieId;
    let newMovie = currentMovie;

    if (!lockMovie) {
      // Pick random from all media
      const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];
      newMovieId = randomMedia.id;
      newMovie = randomMedia;
      setSelectedMovieId(newMovieId);

      if (randomMedia.type === 'series') {
        // Randomize season/episode if series
        // Simplify for now: always S1E1 as we only have that
        setSelectedSeasonId(1);
        setSelectedEpisodeId(1);
      }
    }

    // 2. Randomize Scene (if not locked, OR if movie changed)
    // If movie changed, we MUST pick a new scene because scene IDs are not consistent across movies (or logically shouldn't be reused)
    if (!lockScene || !lockMovie) {
      let scenes: { id: number; title: string; promptPayload: string }[] = [];

      if (newMovie.type === 'series') {
        scenes = tvScenes[newMovieId]?.[1]?.[1] || []; // Hardcoded to S1E1 for randomizer for now
      } else {
        scenes = movieScenes[newMovieId] || [];
      }

      if (scenes.length > 0) {
        const randomScene = scenes[Math.floor(Math.random() * scenes.length)];
        setSelectedSceneId(randomScene.id);
      } else {
        setSelectedSceneId(null);
      }
    }

    // 3. Randomize Style (if not locked)
    if (!lockStyle) {
      const styles = [
        ...(newMovie.styles || []),
        ...globalStyles
      ];
      if (styles.length > 0) {
        const randomStyle = styles[Math.floor(Math.random() * styles.length)];
        setSelectedStyleName(randomStyle.name);
      }
    }
  };

  return (
    <div className={`h-screen w-screen overflow-hidden text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 transition-colors duration-700 ${isChristmas ? 'bg-slate-900' : isWar ? 'bg-stone-950' : 'bg-zinc-900'}`}>

      {isChristmas && (
        <div className="snow-container pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="snowflake">❅</div>
          ))}
        </div>
      )}

      {isWar && (
        <div className="ember-container pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="ember"></div>
          ))}
        </div>
      )}

      {/* HEADER SECTION */}
      <header className={`flex-shrink-0 border-b z-50 transition-colors duration-500 ${isWar ? 'bg-stone-900 border-stone-800' : 'bg-zinc-950 border-zinc-800'}`}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Film className={`w-8 h-8 ${isChristmas ? 'text-red-500' : isWar ? 'text-orange-600' : 'text-cyan-400'} transition-colors duration-500`} />
            <h1 className={`text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${isChristmas ? 'from-red-500 to-green-500' : isWar ? 'from-orange-500 to-stone-400' : 'from-cyan-400 to-blue-600'}`}>
              CINEMA ARCHIVE
            </h1>
            <button
              onClick={() => setIsVersionModalOpen(true)}
              className={`group flex items-center gap-1.5 ml-2 border px-2 py-1 rounded transition-all duration-200 ${isWar ? 'border-stone-800 hover:border-orange-500/50 hover:bg-orange-500/10' : 'border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-500/10'} bg-zinc-900/50`}
            >
              <Info className={`w-3 h-3 ${isWar ? 'text-stone-500 group-hover:text-orange-400' : 'text-zinc-500 group-hover:text-cyan-400'}`} />
              <span className={`text-xs font-mono font-bold ${isWar ? 'text-stone-500 group-hover:text-orange-400' : 'text-zinc-500 group-hover:text-cyan-400'}`}>V7 MASTER <span className="opacity-50">({versionHistory[0].version})</span></span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Poster Mode Toggle */}
            <button
              onClick={() => setPosterMode(!posterMode)}
              className={`
                p-2 rounded-lg transition-all relative flex items-center gap-2 border
                ${posterMode
                  ? 'bg-purple-500/20 text-purple-400 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-800 border-zinc-800'}
              `}
              title={posterMode ? "Poster Mode ON - Click movie to copy poster prompt" : "Enable Poster Mode"}
            >
              <Image className="w-5 h-5" />
              {posterMode && <span className="text-[10px] font-bold uppercase">Poster</span>}
              {posterCopied && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap">
                  POSTER COPIED!
                </div>
              )}
            </button>

            <button
              onClick={() => setIsHeaderOpen(!isHeaderOpen)}
              className={`
                text-zinc-400 hover:text-white transition-all duration-200 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider
                ${isHeaderOpen ? 'bg-zinc-800 text-white border-zinc-700' : ''}
              `}
            >
              {isHeaderOpen ? 'Hide Movies' : 'Select Movie'}
              {isHeaderOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsStudioHubOpen(true)}
              className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all group relative"
              title="Studio Hub"
            >
              <Grid className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-500 rounded-full border-2 border-zinc-950"></div>
            </button>
          </div>
        </div>

        {/* Start Collapsible Movie Selector */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out border-b border-zinc-800 bg-zinc-900/50 flex flex-col
          ${isHeaderOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          {/* Top Divider with Mode Switch */}
          <div className="h-px w-full bg-zinc-800 flex justify-center items-center relative my-4">
            <div className="bg-zinc-950 px-4 flex gap-2">
              <button
                onClick={() => handleModeSwitch('movies')}
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-all ${appMode === 'movies' ? 'bg-cyan-900 text-cyan-400' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                Movies
              </button>
              <button
                onClick={() => handleModeSwitch('tv')}
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-all ${appMode === 'tv' ? 'bg-cyan-900 text-cyan-400' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                TV Series
              </button>
              <button
                onClick={() => handleModeSwitch('games')}
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-all ${appMode === 'games' ? 'bg-cyan-900 text-cyan-400' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                Video Games
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 pb-4 pt-2">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              {/* Search */}
              {appMode === 'movies' && (
                <div className="relative group">
                  <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-zinc-500 group-focus-within:text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-zinc-950 border border-zinc-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500 w-48 placeholder-zinc-600"
                  />
                </div>
              )}
              {appMode === 'movies' && (
                <>
                  <div className="h-4 w-px bg-zinc-800"></div>
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center gap-1"><SortAsc className="w-3 h-3" /> Sort</span>
                    <select
                      aria-label="Sort by"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'title' | 'year')}
                      className="bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1 text-xs text-zinc-300 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="title">Title</option>
                      <option value="year">Year</option>
                    </select>
                    <button
                      onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                      className="p-1 hover:bg-zinc-800 rounded text-zinc-400 text-xs font-mono border border-zinc-800"
                    >
                      {sortOrder === 'asc' ? 'ASC' : 'DESC'}
                    </button>
                  </div>
                  <div className="h-4 w-px bg-zinc-800"></div>
                  {/* Group */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center gap-1"><Layers className="w-3 h-3" /> Group</span>
                    <select
                      aria-label="Group by"
                      value={groupBy}
                      onChange={(e) => setGroupBy(e.target.value as 'none' | 'genre' | 'decade')}
                      className="bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1 text-xs text-zinc-300 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="none">None</option>
                      <option value="genre">Genre</option>
                      <option value="decade">Decade</option>
                    </select>
                  </div>
                </>
              )}
              {appMode === 'movies' && groupBy === 'genre' && (
                <>
                  <div className="h-4 w-px bg-zinc-800"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center gap-1"><Filter className="w-3 h-3" /> Jump to</span>
                    <select
                      aria-label="Jump to Genre"
                      onChange={(e) => handleJumpToGenre(e.target.value)}
                      className="bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1 text-xs text-zinc-300 focus:outline-none focus:border-cyan-500"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Genre</option>
                      {Object.keys(groupedMovies).map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Movie Grid */}
          <div className="px-6 py-4 overflow-x-auto pb-6 custom-scrollbar">
            <div className="flex gap-6">
              {/* TV SERIES GRID */}
              {appMode === 'tv' && (
                <div className="flex-shrink-0 flex flex-col gap-2 w-full">
                  {/* <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 border-b border-zinc-800 pb-1 mb-1 whitespace-nowrap flex items-center gap-2">
                        <Tv className="w-3 h-3" /> TV Series
                    </h3> */}
                  <div className="flex gap-3">
                    {series.map(s => (
                      <button
                        key={s.id}
                        onClick={() => handleMovieSelect(s.id)}
                        className={`
                                flex-shrink-0 whitespace-nowrap px-5 py-3 rounded-lg text-sm font-bold transition-all duration-200 border relative overflow-hidden w-[180px] text-left
                                ${selectedMovieId === s.id
                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] scale-105 z-10'
                            : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'}
                            `}
                      >
                        <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
                          <span className="truncate w-full">{s.title}</span>
                          <span className="text-[10px] font-mono opacity-50 font-normal flex justify-between w-full">
                            <span>{s.year}</span>
                            <span className="opacity-75">Series</span>
                          </span>
                        </div>
                        {selectedMovieId === s.id && (<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"></div>)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* VIDEO GAMES GRID */}
              {appMode === 'games' && (
                <div className="flex-shrink-0 flex flex-col gap-2 w-full">
                  <div className="flex gap-3">
                    {games.map(g => (
                      <button
                        key={g.id}
                        onClick={() => handleMovieSelect(g.id)}
                        className={`
                                flex-shrink-0 whitespace-nowrap px-5 py-3 rounded-lg text-sm font-bold transition-all duration-200 border relative overflow-hidden w-[180px] text-left
                                ${selectedMovieId === g.id
                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] scale-105 z-10'
                            : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'}
                            `}
                      >
                        <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
                          <span className="truncate w-full">{g.title}</span>
                          <span className="text-[10px] font-mono opacity-50 font-normal flex justify-between w-full">
                            <span>{g.year}</span>
                            <span className="opacity-75">Game</span>
                          </span>
                        </div>
                        {selectedMovieId === g.id && (<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"></div>)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {appMode === 'movies' && Object.entries(groupedMovies).map(([groupName, groupMovies]) => (
                <div
                  key={groupName}
                  ref={(el) => { sectionRefs.current[groupName] = el; }}
                  className="flex-shrink-0 flex flex-col gap-2"
                >
                  {groupBy !== 'none' && (
                    <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 border-b border-zinc-800 pb-1 mb-1 whitespace-nowrap">{groupName}</h3>
                  )}
                  <div className="flex gap-3">
                    {groupMovies.map((movie) => (
                      <button
                        key={`${groupName}-${movie.id}`}
                        onClick={() => handleMovieSelect(movie.id)}
                        className={`
                          flex-shrink-0 whitespace-nowrap px-5 py-3 rounded-lg text-sm font-bold transition-all duration-200 border relative overflow-hidden w-[180px] text-left
                          ${selectedMovieId === movie.id
                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] scale-105 z-10'
                            : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'}
                        `}
                      >
                        <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
                          <span className="truncate w-full pr-4">{movie.title}</span>
                          <span className="text-[10px] font-mono opacity-50 font-normal flex justify-between w-full">
                            <span>{movie.year}</span>
                            <span className="opacity-75">{movie.director.split(' ')[0]}</span>
                          </span>
                        </div>
                        {getTopMovieInfo(movie.title, movie.year) && (
                          <div className="absolute top-1 right-1" title={`Top Office: ${getTopMovieInfo(movie.title, movie.year)}`}>
                            <Trophy className="w-3 h-3 text-yellow-500/80" />
                          </div>
                        )}
                        {selectedMovieId === movie.id && (<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"></div>)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>


      {/* MAIN CONTENT AREA - SPLIT VIEW */}
      <div className="flex-1 flex overflow-hidden">

        {/* CENTER WORKSPACE */}
        <div className="flex-1 flex gap-px bg-zinc-800 relative">

          {/* PANE A: SCENES */}
          <div className={`
             flex flex-col bg-zinc-900/50 relative transition-all duration-300 ease-in-out
             ${layoutMode === 'split' ? 'w-1/2' : layoutMode === 'scene-focus' ? 'w-full' : 'w-0 overflow-hidden'}
          `}>
            <div className="flex items-center justify-between p-4 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800/50 sticky top-0 z-20">
              <div className="flex flex-col">
                <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <Film className="w-3 h-3 text-cyan-400" />
                  Selecting Scenes For:
                </h2>
                <span className="text-lg font-bold text-zinc-100 mt-1 truncate max-w-[300px]">{currentMovie.title}</span>
              </div>

              <div className="flex items-center gap-1">
                {/* View Toggle */}
                <button
                  onClick={() => setLayoutMode(layoutMode === 'scene-focus' ? 'split' : 'scene-focus')}
                  className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-cyan-400 transition-colors"
                  title={layoutMode === 'scene-focus' ? "Split View" : "Maximize Scenes"}
                >
                  {layoutMode === 'scene-focus' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* TV EPISODE SELECTOR */}
            {currentMovie.type === 'series' && currentMovie.seasons && (
              <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase">Season</span>
                  <select
                    value={selectedSeasonId}
                    onChange={(e) => setSelectedSeasonId(Number(e.target.value))}
                    className="bg-black/20 text-sm text-cyan-400 border border-zinc-700 rounded px-2 py-1 outline-none focus:border-cyan-500"
                    title="Select Season"
                  >
                    {currentMovie.seasons.map(s => <option key={s.id} value={s.id}>Season {s.id}</option>)}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase">Episode</span>
                  <select
                    value={selectedEpisodeId}
                    onChange={(e) => setSelectedEpisodeId(Number(e.target.value))}
                    className="bg-black/20 text-sm text-zinc-200 border border-zinc-700 rounded px-2 py-1 outline-none focus:border-cyan-500"
                    title="Select Episode"
                  >
                    {currentMovie.seasons.find(s => s.id === selectedSeasonId)?.episodes.map(e => (
                      <option key={e.id} value={e.id}>{e.id}. {e.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
              {currentScenes.length > 0 ? (
                <div className={`smart-grid grid gap-3 pb-24 ${layoutMode === 'scene-focus' ? 'grid-cols-4 xl:grid-cols-5' : 'grid-cols-2 xl:grid-cols-3'}`}>
                  {currentScenes.map((scene) => (
                    <button
                      key={scene.id}
                      onClick={() => setSelectedSceneId(scene.id)}
                      className={`
                        smart-card relative p-4 h-36 flex flex-col text-left overflow-hidden group border
                        ${selectedSceneId === scene.id
                          ? 'smart-active z-10'
                          : 'bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700'}
                        `}
                    >
                      {/* Header */}
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] font-mono font-bold ${selectedSceneId === scene.id ? 'text-cyan-500' : 'text-zinc-600'}`}>
                          SCENE {String(scene.id).padStart(2, '0')}
                        </span>
                        {/* Status Dot */}
                        {selectedSceneId === scene.id && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-h-0">
                        <h3 className={`smart-title text-sm mb-1 line-clamp-1 ${selectedSceneId === scene.id ? 'text-white' : 'text-zinc-300'}`}>
                          {scene.title}
                        </h3>
                        <p className={`smart-detail text-[11px] leading-relaxed ${selectedSceneId === scene.id ? 'line-clamp-none overflow-y-auto max-h-[60px] custom-scrollbar' : 'line-clamp-2'}`}>
                          {scene.promptPayload}
                        </p>
                      </div>

                      {/* Action Bar (Footer) */}
                      <div className="smart-actions">
                        <div
                          onClick={(e) => handleToggleLock(e, 'scene')}
                          className={`p-1 rounded cursor-pointer transition-colors ${lockScene ? 'text-cyan-400 bg-cyan-950/30' : 'text-zinc-500 hover:text-cyan-400 hover:bg-zinc-800'}`}
                          title={lockScene ? "Unlock Scene" : "Lock Scene"}
                        >
                          {lockScene ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                        </div>
                        <div
                          onClick={(e) => handleQuickCopy(e, scene.promptPayload, 'scene', scene.id)}
                          className={`p-1 rounded cursor-pointer transition-colors ${copiedSceneId === scene.id ? 'text-green-400 bg-green-950/30' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'}`}
                          title="Copy Prompt Only"
                        >
                          {copiedSceneId === scene.id ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-zinc-600 font-mono text-sm">No scenes available.</div>
              )}
            </div>
          </div>


          {/* PANE B: STYLES */}
          <div className={`
             flex flex-col bg-zinc-900/30 relative transition-all duration-300 ease-in-out border-l border-zinc-800
             ${layoutMode === 'split' ? 'w-1/2' : layoutMode === 'style-focus' ? 'w-full' : 'w-0 overflow-hidden'}
          `}>
            <div className="flex items-center justify-between p-4 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800/50 sticky top-0 z-20">
              <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <Palette className="w-3 h-3 text-purple-400" />
                Visual Style
              </h2>

              <button
                onClick={() => setLayoutMode(layoutMode === 'style-focus' ? 'split' : 'style-focus')}
                className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-purple-400 transition-colors"
                title={layoutMode === 'style-focus' ? "Split View" : "Maximize Styles"}
              >
                {layoutMode === 'style-focus' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">

              {/* Unique Styles */}
              {currentMovie.styles && currentMovie.styles.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold text-purple-400 mb-3 px-1 opacity-80 uppercase tracking-wider">Unique to {currentMovie.type === 'series' ? 'Series' : currentMovie.type === 'game' ? 'Game' : 'Movie'}</h3>
                  <div className={`smart-grid grid gap-3 ${layoutMode === 'style-focus' ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    {currentMovie.styles.map((style) => (
                      <button
                        key={style.name}
                        onClick={() => setSelectedStyleName(style.name)}
                        className={`
                          smart-card relative p-4 text-left min-h-[100px] flex flex-col justify-between border
                          ${selectedStyleName === style.name
                            ? 'smart-active style-active z-10'
                            : 'bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700'}
                        `}
                      >
                        <div className="mb-2">
                          <div className={`smart-title text-xs ${selectedStyleName === style.name ? 'text-purple-300' : 'text-zinc-300'}`}>
                            {style.name}
                          </div>
                          <div className={`smart-detail text-[10px] mt-1 ${selectedStyleName === style.name ? 'opacity-100' : 'opacity-60'}`}>
                            {style.promptString}
                          </div>
                        </div>

                        {/* Action Bar */}
                        <div className="smart-actions">
                          <div
                            onClick={(e) => handleToggleLock(e, 'style')}
                            className={`p-1 rounded cursor-pointer transition-colors ${lockStyle ? 'text-purple-400 bg-purple-950/30' : 'text-zinc-500 hover:text-purple-400 hover:bg-zinc-800'}`}
                            title={lockStyle ? "Unlock Style" : "Lock Style"}
                          >
                            {lockStyle ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                          </div>
                          <div
                            onClick={(e) => handleQuickCopy(e, style.promptString, 'style', style.name)}
                            className={`p-1 rounded cursor-pointer transition-colors ${copiedStyleName === style.name ? 'text-green-400 bg-green-950/30' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'}`}
                            title="Copy Style Prompt"
                          >
                            {copiedStyleName === style.name ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Styles */}
              <div className="mt-8">
                <h3 className="text-[10px] font-bold text-zinc-500 mb-3 px-1 uppercase tracking-wider">Standard Library</h3>
                <div className={`smart-grid grid gap-3 ${layoutMode === 'style-focus' ? 'grid-cols-4' : 'grid-cols-2'}`}>
                  {globalStyles.map((style) => (
                    <button
                      key={style.name}
                      onClick={() => setSelectedStyleName(style.name)}
                      className={`
                          smart-card relative p-3 text-left min-h-[90px] flex flex-col justify-between border
                          ${selectedStyleName === style.name
                          ? 'smart-active style-active z-10'
                          : 'bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700'}
                        `}
                    >
                      <div className={`smart-title text-xs ${selectedStyleName === style.name ? 'text-purple-300' : 'text-zinc-400'}`}>
                        {style.name}
                      </div>

                      {/* Action Bar */}
                      <div className="smart-actions">
                        <div
                          onClick={(e) => handleToggleLock(e, 'style')}
                          className={`p-1 rounded cursor-pointer transition-colors ${lockStyle ? 'text-purple-400 bg-purple-950/30' : 'text-zinc-500 hover:text-purple-400 hover:bg-zinc-800'}`}
                          title={lockStyle ? "Unlock Style" : "Lock Style"}
                        >
                          {lockStyle ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                        </div>
                        <div
                          onClick={(e) => handleQuickCopy(e, style.promptString, 'style', style.name)}
                          className={`p-1 rounded cursor-pointer transition-colors ${copiedStyleName === style.name ? 'text-green-400 bg-green-950/30' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'}`}
                          title="Copy Style Prompt"
                        >
                          {copiedStyleName === style.name ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - SETTINGS & OUTPUT */}
        <div className="w-[300px] bg-zinc-950 flex flex-col h-full border-l border-zinc-800 shadow-2xl z-30 flex-shrink-0">

          {/* TOP SECTION: OUTPUT CONSOLE (Fixed Height) */}
          <div className="h-[200px] flex flex-col border-b border-zinc-800">
            <div className="p-3 border-b border-zinc-900 bg-zinc-950 flex items-center justify-between">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Output
              </h2>
              <div className={`w-1.5 h-1.5 rounded-full ${generatedPrompt ? 'bg-green-500 animate-pulse' : 'bg-red-500/30'}`}></div>
            </div>
            <div className="flex-1 bg-black p-3 font-mono text-[10px] overflow-y-auto custom-scrollbar relative">
              {generatedPrompt ? (
                <p className="text-green-500 break-words leading-relaxed">
                  <span className="text-zinc-600 select-none mr-1">$</span>
                  {generatedPrompt}
                </p>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-800 italic">
                  Waiting for input...
                </div>
              )}
            </div>
          </div>

          {/* MIDDLE SECTION: ACTIONS */}
          <div className="p-4 flex flex-col gap-2 border-b border-zinc-800 bg-zinc-950/50">
            <button
              onClick={handleCopy}
              disabled={!generatedPrompt}
              className={`
                w-full py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all
                ${generatedPrompt
                  ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                  : 'bg-zinc-900 text-zinc-700 border border-zinc-800 cursor-not-allowed'}
              `}
            >
              {copied ? <span className="text-green-400">COPIED</span> : <>QUICK COPY</>}
            </button>
            <button
              onClick={handleCopy}
              disabled={!generatedPrompt}
              className={`
                w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg
                ${generatedPrompt
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-zinc-900 text-zinc-700 border border-zinc-800 cursor-not-allowed'}
              `}
            >
              {copied ? <span>COPIED TO CLIPBOARD</span> : <><Copy className="w-4 h-4" /> GENERATE & COPY</>}
            </button>
          </div>

          {/* BOTTOM SECTION: CONFIGURATION */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">Settings</h2>

            {/* Randomizer Section */}
            <div className="mb-6 border-b border-zinc-900 pb-6">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Dices className="w-3 h-3 text-pink-500" /> Randomizer
              </h2>
              <div className="flex gap-1 mb-3">
                <button
                  onClick={() => setLockMovie(!lockMovie)}
                  className={`flex-1 py-2 rounded-md flex flex-col items-center justify-center gap-1 border transition-all ${lockMovie ? 'bg-zinc-800 border-pink-500/50 text-pink-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
                  title={lockMovie ? "Unlock Movie" : "Lock Movie"}
                >
                  {lockMovie ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  <span className="text-[9px] font-bold uppercase">Movie</span>
                </button>
                <button
                  onClick={() => setLockScene(!lockScene)}
                  className={`flex-1 py-2 rounded-md flex flex-col items-center justify-center gap-1 border transition-all ${lockScene ? 'bg-zinc-800 border-pink-500/50 text-pink-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
                  title={lockScene ? "Unlock Scene" : "Lock Scene"}
                >
                  {lockScene ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  <span className="text-[9px] font-bold uppercase">Scene</span>
                </button>
                <button
                  onClick={() => setLockStyle(!lockStyle)}
                  className={`flex-1 py-2 rounded-md flex flex-col items-center justify-center gap-1 border transition-all ${lockStyle ? 'bg-zinc-800 border-pink-500/50 text-pink-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
                  title={lockStyle ? "Unlock Style" : "Lock Style"}
                >
                  {lockStyle ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  <span className="text-[9px] font-bold uppercase">Style</span>
                </button>
              </div>
              <button
                onClick={handleRandomize}
                className="w-full py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 shadow-md hover:shadow-pink-500/20 active:scale-95"
              >
                <Dices className="w-4 h-4" /> ROLL THE DICE
              </button>
            </div>

            {/* Copy Mode - Redesigned for reliability */}
            <div className="mb-6">
              <label className="block text-[9px] font-mono text-zinc-500 mb-2 uppercase">Copy Logic</label>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setCopyMode('standard')}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium border transition-all text-left ${copyMode === 'standard' ? 'bg-zinc-800 text-cyan-400 border-cyan-500/50' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700'}`}
                >
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Standard Copy</span>
                </button>
                <button
                  onClick={() => setCopyMode('next-scene')}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium border transition-all text-left ${copyMode === 'next-scene' ? 'bg-zinc-800 text-cyan-400 border-cyan-500/50' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700'}`}
                >
                  <Film className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Auto-Next Scene</span>
                </button>
                <button
                  onClick={() => setCopyMode('next-style')}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium border transition-all text-left ${copyMode === 'next-style' ? 'bg-zinc-800 text-cyan-400 border-cyan-500/50' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700'}`}
                >
                  <Palette className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Auto-Next Style</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-mono text-zinc-600 mb-1.5 ml-1">MIDJOURNEY VERSION</label>
                <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
                  {['5', '6', '6.1', '7'].map((v) => (
                    <button key={v} onClick={() => setVersion(v)} className={`flex-1 py-1.5 text-[10px] font-bold rounded-md transition-all ${version === v ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>v{v}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-mono text-zinc-600 mb-1.5 ml-1">ASPECT RATIO</label>
                <div className="grid grid-cols-4 gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
                  {['16:9', '2.39:1', '1.85:1', '4:3', '3:2', '1:1', '9:16', '2:3'].map((ratio) => (
                    <button key={ratio} onClick={() => setAr(ratio)} className={`py-1.5 text-[9px] font-bold rounded-md transition-all ${ar === ratio ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>{ratio}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5 ml-1">
                  <label className="text-[9px] font-mono text-zinc-600">STYLIZE</label>
                  <label htmlFor="stylize-range" className="text-[9px] font-mono text-cyan-500">{stylize}</label>
                </div>
                <input
                  id="stylize-range"
                  type="range" min="0" max="1000" step="50" value={stylize} onChange={(e) => setStylize(parseInt(e.target.value))}
                  title="Stylize level"
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* V7 Features */}
              <div className="pt-2 border-t border-zinc-900 space-y-2">
                <label className="block text-[9px] font-mono text-zinc-600 mb-1 uppercase">V7 Features</label>

                <button
                  onClick={() => setCompareLenses(!compareLenses)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold border transition-all ${compareLenses ? 'bg-zinc-800 text-cyan-400 border-cyan-500/50' : 'bg-zinc-900 text-zinc-500 border-zinc-800'}`}
                >
                  <span>Use Permutations</span>
                  <span className="text-[9px] font-mono opacity-50">{compareLenses ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => setBurstMode(!burstMode)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold border transition-all ${burstMode ? 'bg-zinc-800 text-green-400 border-green-500/50' : 'bg-zinc-900 text-zinc-500 border-zinc-800'}`}
                >
                  <span>Burst Mode (x5)</span>
                  <span className="text-[9px] font-mono opacity-50">{burstMode ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => setCleanUp(!cleanUp)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold border transition-all ${cleanUp ? 'bg-zinc-800 text-purple-400 border-purple-500/50' : 'bg-zinc-900 text-zinc-500 border-zinc-800'}`}
                >
                  <span>Auto Clean Up</span>
                  <span className="text-[9px] font-mono opacity-50">{cleanUp ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => setDraftMode(!draftMode)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold border transition-all ${draftMode ? 'bg-zinc-800 text-yellow-400 border-yellow-500/50' : 'bg-zinc-900 text-zinc-500 border-zinc-800'}`}
                >
                  <span>Draft Mode</span>
                  <span className="text-[9px] font-mono opacity-50">{draftMode ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

            {/* FOOTER & SUGGESTIONS */}
            <div className="mt-8 pt-8 border-t border-zinc-900 pb-12">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <MessageCircle className="w-3 h-3 text-cyan-400" /> Support & Suggestions
              </h2>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-[11px] text-zinc-400 leading-relaxed mb-3">
                    Have a movie suggestion or technical issue? We want to hear from you!
                  </p>
                  <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Movie or Feature Suggestion"
                      className="w-full bg-black/40 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-cyan-500 transition-colors"
                    />
                    <textarea
                      placeholder="Details..."
                      className="w-full bg-black/40 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-cyan-500 transition-colors h-20 resize-none"
                    ></textarea>
                    <button className="w-full py-2 bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 rounded-lg text-[10px] font-bold uppercase hover:bg-cyan-600 hover:text-white transition-all">
                      Send Feedback
                    </button>
                  </form>
                </div>

                <div className="space-y-2 px-1">
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px]">
                    <Mail className="w-3 h-3" />
                    <a href="mailto:SREphotoMN@gmail.com" className="hover:text-cyan-400 transition-colors">SREphotoMN@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px]">
                    <Info className="w-3 h-3" />
                    <button onClick={() => setIsStudioHubOpen(true)} className="hover:text-cyan-400 transition-colors">About Samuel Erwin</button>
                  </div>
                  <div className="flex items-center gap-4 py-2 opacity-50">
                    <a href="PRIVACY_POLICY.txt" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-tighter hover:text-white flex items-center gap-1">
                      <FileText className="w-2.5 h-2.5" /> Privacy
                    </a>
                    <a href="TERMS_OF_SERVICE.txt" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-tighter hover:text-white flex items-center gap-1">
                      <FileText className="w-2.5 h-2.5" /> Terms
                    </a>
                    <a href="MEDIA_KIT.txt" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-tighter hover:text-white flex items-center gap-1">
                      <FileText className="w-2.5 h-2.5" /> Media Kit
                    </a>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-[9px] text-zinc-700 font-mono">© 2025 TopGun Prompter • MN, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STUDIO HUB DRAWER */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isStudioHubOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsStudioHubOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-[400px] bg-zinc-900 border-l border-zinc-800 shadow-2xl transition-transform duration-300 ease-out transform ${isStudioHubOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-lg">
                  <Grid className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-tight">SRE Studio Hub</h2>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-0.5">Unified Ecosystem</p>
                </div>
              </div>
              <button
                onClick={() => setIsStudioHubOpen(false)}
                className="p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-white transition-colors"
                title="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Profile Section */}
              <div className="p-6 border-b border-zinc-800 bg-zinc-950/30">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20">
                    <div className="w-full h-full rounded-[14px] bg-zinc-900 flex items-center justify-center">
                      <User className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Samuel Erwin</h3>
                    <p className="text-xs text-zinc-500 font-medium">Creative Director & Lead Developer</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-500 text-[10px] font-bold rounded uppercase tracking-wider border border-cyan-500/20">MN, USA</span>
                      <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] font-bold rounded uppercase tracking-wider border border-zinc-700">Founder</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    "Building high-fidelity interactive systems and AI-powered creative engines."
                  </p>
                  <div className="flex gap-3">
                    <a href="mailto:SREphotoMN@gmail.com" className="flex-1 flex items-center justify-center gap-2 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg text-[10px] font-bold transition-all border border-zinc-700">
                      <Mail className="w-3 h-3" /> EMAIL
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 1: Working Apps */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Live Apps ({deployedApps.length})
                </h3>
                <div className="space-y-3">
                  {deployedApps.map((project) => {
                    const IconComponent = {
                      Film, Palette, Shirt, Sword, Car, Rocket, Flame,
                      Gamepad2, Aperture, Map, Music, Heart, Zap, Waves, BarChart3,
                      Skull, Coins, MessageCircle, Video, Citrus
                    }[project.icon] || Grid;
                    return (
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 bg-emerald-950/30 border border-emerald-700/30 rounded-xl hover:bg-emerald-900/40 hover:border-emerald-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-zinc-950 rounded-lg group-hover:scale-110 transition-transform duration-300 ${project.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                              <ExternalLink className="w-3 h-3 text-emerald-600 group-hover:text-emerald-400" />
                            </div>
                            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Section 2: GitHub Repos */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> GitHub Repos ({repoApps.length})
                </h3>
                <div className="space-y-3">
                  {repoApps.map((project) => {
                    const IconComponent = {
                      Film, Palette, Shirt, Sword, Car, Rocket, Flame,
                      Gamepad2, Aperture, Map, Music, Heart, Zap, Waves, BarChart3,
                      Skull, Coins, MessageCircle, Video, Citrus
                    }[project.icon] || Grid;
                    return (
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 bg-blue-950/30 border border-blue-700/30 rounded-xl hover:bg-blue-900/40 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-zinc-950 rounded-lg group-hover:scale-110 transition-transform duration-300 ${project.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                              <ExternalLink className="w-3 h-3 text-blue-600 group-hover:text-blue-400" />
                            </div>
                            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Section 3: Local Only */}
              <div className="mb-4">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Local Only ({localApps.length})
                </h3>
                <div className="space-y-3">
                  {localApps.map((project) => {
                    const IconComponent = {
                      Film, Palette, Shirt, Sword, Car, Rocket, Flame,
                      Gamepad2, Aperture, Map, Music, Heart, Zap, Waves, BarChart3,
                      Skull, Coins, MessageCircle, Video, Citrus
                    }[project.icon] || Grid;
                    return (
                      <div
                        key={project.id}
                        className="group block p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl opacity-60"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-zinc-950 rounded-lg ${project.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <h3 className="font-bold text-zinc-400">{project.title}</h3>
                                <span className="text-[8px] bg-zinc-800 text-zinc-600 border border-zinc-700 px-1 py-0.5 rounded uppercase font-black">Local</span>
                              </div>
                            </div>
                            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-zinc-800 bg-zinc-950/50 text-center">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">© 2025 SRE Studio • All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      <VersionModal isOpen={isVersionModalOpen} onClose={() => setIsVersionModalOpen(false)} />
    </div>
  );
}

export default App;
