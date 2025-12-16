import { useState, useMemo } from 'react';
import { movieScenes } from './data/scenes';
import { styles as globalStyles } from './data/stylesV3';
import { movies } from './data/moviesV3';
import { Copy, Terminal, Settings, Film, ArrowRight, Palette, CheckCircle, ChevronDown, ChevronRight, Search, SortAsc, Layers, Maximize2, Minimize2 } from 'lucide-react';

type LayoutMode = 'split' | 'scene-focus' | 'style-focus';

function AppV3() {
  // New UI State
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('split');

  // Filter/Sort State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [groupBy, setGroupBy] = useState<'none' | 'genre' | 'decade'>('none');

  // Existing State
  const [selectedMovieId, setSelectedMovieId] = useState<string>('top-gun');
  const [selectedSceneId, setSelectedSceneId] = useState<number | null>(null);
  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);
  const [version, setVersion] = useState<string>('7');
  const [ar, setAr] = useState<string>('9:16');
  const [stylize, setStylize] = useState<number>(700);
  const [copied, setCopied] = useState(false);
  const [copyMode, setCopyMode] = useState<'standard' | 'next-scene' | 'next-style'>('standard');

  const currentMovie = useMemo(() => movies.find(m => m.id === selectedMovieId) || movies[0], [selectedMovieId]);
  const currentScenes = useMemo(() => movieScenes[selectedMovieId] || [], [selectedMovieId]);

  // Combine movie-specific styles with global styles for lookup
  const allStyles = useMemo(() => [
    ...(currentMovie.styles || []),
    ...globalStyles
  ], [currentMovie]);

  // --- Filtering & Sorting Logic ---
  const processedMovies = useMemo(() => {
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
      let valA = sortBy === 'title' ? a.title : a.year;
      let valB = sortBy === 'title' ? b.title : b.year;

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
      return `${scene.promptPayload}. ${style.promptString}. ESTABLISHING SHOT, cinematic footage from the movie ${currentMovie.title} (${currentMovie.year}) --style raw --ar ${ar} --v ${version} --stylize ${stylize}`;
    }
    return '';
  }, [selectedSceneId, selectedStyleName, currentScenes, allStyles, currentMovie, ar, version, stylize]);

  const handleMovieSelect = (id: string) => {
    setSelectedMovieId(id);
    setSelectedSceneId(null);
    setSelectedStyleName(null);
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

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-900 text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30">

      {/* HEADER SECTION */}
      <header className="flex-shrink-0 bg-zinc-950 border-b border-zinc-800 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Film className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              CINEMA ARCHIVE
            </h1>
            <span className="text-xs font-mono text-zinc-500 mt-1 ml-2 border border-zinc-800 px-2 py-0.5 rounded">MASTER EDITION</span>
          </div>

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
        </div>

        {/* Start Collapsible Movie Selector */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out border-b border-zinc-800 bg-zinc-900/50 flex flex-col
          ${isHeaderOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          {/* Controls Bar */}
          <div className="px-6 py-2 flex items-center gap-4 border-b border-zinc-800/50 bg-zinc-900">
            {/* Search */}
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
            <div className="h-4 w-px bg-zinc-800"></div>
            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center gap-1"><SortAsc className="w-3 h-3" /> Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
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
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value as any)}
                className="bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1 text-xs text-zinc-300 focus:outline-none focus:border-cyan-500"
              >
                <option value="none">None</option>
                <option value="genre">Genre</option>
                <option value="decade">Decade</option>
              </select>
            </div>
          </div>

          {/* Movie Grid */}
          <div className="px-6 py-4 overflow-x-auto pb-6 custom-scrollbar">
            <div className="flex gap-6">
              {Object.entries(groupedMovies).map(([groupName, groupMovies]) => (
                <div key={groupName} className="flex-shrink-0 flex flex-col gap-2">
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
                          <span className="truncate w-full">{movie.title}</span>
                          <span className="text-[10px] font-mono opacity-50 font-normal flex justify-between w-full">
                            <span>{movie.year}</span>
                            <span className="opacity-75">{movie.director.split(' ')[0]}</span>
                          </span>
                        </div>
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

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
              {currentScenes.length > 0 ? (
                <div className={`grid gap-3 pb-24 ${layoutMode === 'scene-focus' ? 'grid-cols-4 xl:grid-cols-6' : 'grid-cols-2 xl:grid-cols-3'}`}>
                  {currentScenes.map((scene) => (
                    <button
                      key={scene.id}
                      onClick={() => setSelectedSceneId(scene.id)}
                      className={`
                        relative p-4 h-32 flex flex-col items-start justify-end text-left transition-all duration-200 border rounded-xl overflow-hidden group
                        ${selectedSceneId === scene.id
                          ? 'bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50'
                          : 'bg-zinc-800/40 border-zinc-700/50 hover:border-zinc-500 hover:bg-zinc-800/80'}
                      `}
                    >
                      <div className="absolute inset-0 bg-zinc-950/95 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-start z-10 pointer-events-none border border-zinc-800 rounded-xl">
                        <p className="text-[10px] text-zinc-300 leading-relaxed font-mono overflow-hidden text-ellipsis">{scene.promptPayload}</p>
                      </div>
                      <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold ${selectedSceneId === scene.id ? 'text-cyan-400' : 'text-zinc-600 group-hover:text-zinc-500'}`}>
                        SCENE {String(scene.id).padStart(2, '0')}
                      </span>
                      <span className={`text-sm font-bold leading-tight line-clamp-2 relative z-0 ${selectedSceneId === scene.id ? 'text-cyan-50' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                        {scene.title}
                      </span>
                      {selectedSceneId === scene.id && (<div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-full"></div>)}
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
                  <h3 className="text-[10px] font-bold text-purple-400 mb-3 px-1 opacity-80 uppercase tracking-wider">Unique to Movie</h3>
                  <div className={`grid gap-2 ${layoutMode === 'style-focus' ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    {currentMovie.styles.map((style) => (
                      <button
                        key={style.name}
                        onClick={() => setSelectedStyleName(style.name)}
                        className={`
                            p-4 text-left text-xs font-medium transition-all duration-200 border rounded-lg relative overflow-hidden group
                            ${selectedStyleName === style.name
                            ? 'bg-purple-500/10 border-purple-500 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                            : 'bg-zinc-800/50 border-zinc-800/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'}
                          `}
                      >
                        <div className="relative z-10 font-bold mb-1">{style.name}</div>
                        <div className="relative z-10 text-[10px] opacity-50 line-clamp-2 leading-relaxed">{style.promptString}</div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-purple-500 to-transparent"></div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Styles */}
              <div>
                <h3 className="text-[10px] font-bold text-zinc-500 mb-3 px-1 uppercase tracking-wider">Standard Library</h3>
                <div className={`grid gap-2 ${layoutMode === 'style-focus' ? 'grid-cols-4' : 'grid-cols-2'}`}>
                  {globalStyles.map((style) => (
                    <button
                      key={style.name}
                      onClick={() => setSelectedStyleName(style.name)}
                      className={`
                          p-3 text-left text-[11px] font-medium transition-all duration-200 border rounded-lg h-auto flex flex-col justify-center
                          ${selectedStyleName === style.name
                          ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                          : 'bg-zinc-800/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'}
                        `}
                    >
                      <span className="font-bold">{style.name}</span>
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
                  {['1:2', '9:16', '2:3', '3:4', '5:6', '1:1', '6:5', '4:3', '3:2', '16:9', '2:1'].map((ratio) => (
                    <button key={ratio} onClick={() => setAr(ratio)} className={`py-1.5 text-[9px] font-bold rounded-md transition-all ${ar === ratio ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>{ratio}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5 ml-1">
                  <label className="text-[9px] font-mono text-zinc-600">STYLIZE</label>
                  <span className="text-[9px] font-mono text-cyan-500">{stylize}</span>
                </div>
                <input
                  type="range" min="0" max="1000" step="50" value={stylize} onChange={(e) => setStylize(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppV3;
