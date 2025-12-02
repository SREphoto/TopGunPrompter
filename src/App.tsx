import { useState, useEffect } from 'react';
import { movieScenes } from './data/scenes';
import { styles as globalStyles } from './data/styles';
import { movies } from './data/movies';
import { Copy, Terminal, Settings, Film } from 'lucide-react';

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState<string>('top-gun');
  const [selectedSceneId, setSelectedSceneId] = useState<number | null>(null);
  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);
  const [version, setVersion] = useState<string>('7');
  const [ar, setAr] = useState<string>('9:16');
  const [stylize, setStylize] = useState<number>(700);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const currentMovie = movies.find(m => m.id === selectedMovieId) || movies[0];
  const currentScenes = movieScenes[selectedMovieId] || [];

  // Combine movie-specific styles with global styles for lookup
  const allStyles = [
    ...(currentMovie.styles || []),
    ...globalStyles
  ];

  useEffect(() => {
    if (selectedSceneId && selectedStyleName) {
      const scene = currentScenes.find(s => s.id === selectedSceneId);
      const style = allStyles.find(s => s.name === selectedStyleName);

      if (scene && style) {
        const prompt = `${style.promptString}, Subject: ${currentMovie.title} (${currentMovie.year}), Scene: ${scene.promptPayload} --style raw --ar ${ar} --v ${version} --stylize ${stylize}`;
        setGeneratedPrompt(prompt);
      }
    } else {
      setGeneratedPrompt('');
    }
  }, [selectedSceneId, selectedStyleName, version, ar, stylize, selectedMovieId, currentMovie, currentScenes, allStyles]);

  // Reset scene and style selection when movie changes
  useEffect(() => {
    setSelectedSceneId(null);
    setSelectedStyleName(null);
  }, [selectedMovieId]);

  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-900 text-zinc-100 flex font-sans selection:bg-cyan-500/30">
      {/* Left Column - Configuration & Style */}
      <div className="w-[300px] flex-shrink-0 flex flex-col h-full border-r border-zinc-800 bg-zinc-950/50 p-4 overflow-y-auto custom-scrollbar">
        <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Configuration
        </h2>

        {/* Settings */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-xs font-mono text-zinc-500 mb-2">MIDJOURNEY VERSION</label>
            <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
              {['5', '6', '6.1', '7'].map((v) => (
                <button
                  key={v}
                  onClick={() => setVersion(v)}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${version === v ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  v{v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-500 mb-2">ASPECT RATIO</label>
            <div className="grid grid-cols-4 gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
              {['1:2', '9:16', '2:3', '3:4', '5:6', '1:1', '6:5', '4:3', '3:2', '16:9', '2:1'].map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAr(ratio)}
                  className={`py-2 text-[10px] font-bold rounded-md transition-all ${ar === ratio ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-mono text-zinc-500">STYLIZE</label>
              <span className="text-xs font-mono text-cyan-400">{stylize}</span>
            </div>
            <select
              value={stylize}
              onChange={(e) => setStylize(parseInt(e.target.value))}
              className="w-full bg-zinc-900 text-zinc-300 text-xs font-mono p-3 rounded-lg border border-zinc-800 focus:outline-none focus:border-cyan-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none"
            >
              {Array.from({ length: 21 }, (_, i) => i * 50).map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="h-px bg-zinc-800 my-6"></div>

        {/* Style Selector */}
        <div className="flex-1">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Select Style
          </h2>

          {/* Unique Styles */}
          {currentMovie.styles && currentMovie.styles.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-bold text-zinc-500 mb-2 px-1">UNIQUE STYLES</h3>
              <div className="grid grid-cols-1 gap-2">
                {currentMovie.styles.map((style) => (
                  <button
                    key={style.name}
                    onClick={() => setSelectedStyleName(style.name)}
                    className={`
                      p-2 text-left text-[10px] font-medium transition-all duration-200 border rounded
                      ${selectedStyleName === style.name
                        ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                        : 'bg-zinc-800/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'}
                    `}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Standard Styles */}
          <div>
            <h3 className="text-xs font-bold text-zinc-500 mb-2 px-1">STANDARD STYLES</h3>
            <div className="grid grid-cols-2 gap-2">
              {globalStyles.map((style) => (
                <button
                  key={style.name}
                  onClick={() => setSelectedStyleName(style.name)}
                  className={`
                    p-2 text-left text-[10px] font-medium transition-all duration-200 border rounded
                    ${selectedStyleName === style.name
                      ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      : 'bg-zinc-800/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'}
                  `}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Column - Movie & Scene Selector */}
      <div className="flex-1 flex flex-col h-full p-6 overflow-hidden">
        <header className="mb-6 flex-shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <Film className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              CINEMA ARCHIVE
            </h1>
            <span className="text-xs font-mono text-zinc-500 mt-2 ml-2">MASTER EDITION</span>
          </div>

          {/* Movie Selector */}
          <div className="flex overflow-x-auto pb-4 gap-2 custom-scrollbar">
            {movies.map((movie) => (
              <button
                key={movie.id}
                onClick={() => setSelectedMovieId(movie.id)}
                className={`
                  whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border
                  ${selectedMovieId === movie.id
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-zinc-800/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'}
                `}
              >
                {movie.title}
              </button>
            ))}
          </div>
        </header>

        {/* Scene Selector */}
        <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar pr-2">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2 sticky top-0 bg-zinc-900 z-10 py-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            Select Scene ({currentScenes.length})
          </h2>
          {currentScenes.length > 0 ? (
            <div className="grid grid-cols-4 xl:grid-cols-5 gap-3">
              {currentScenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => setSelectedSceneId(scene.id)}
                  className={`
                    relative p-3 h-24 flex flex-col items-start justify-end text-left transition-all duration-200 border rounded-lg overflow-hidden group
                    ${selectedSceneId === scene.id
                      ? 'bg-cyan-500/10 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-zinc-800/50 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800'}
                  `}
                  title={scene.title}
                >
                  <span className={`
                    absolute top-2 left-3 text-xs font-mono font-bold
                    ${selectedSceneId === scene.id ? 'text-cyan-400' : 'text-zinc-600 group-hover:text-zinc-500'}
                  `}>
                    {String(scene.id).padStart(2, '0')}
                  </span>
                  <span className={`
                    text-xs font-medium leading-tight line-clamp-3
                    ${selectedSceneId === scene.id ? 'text-cyan-100' : 'text-zinc-400 group-hover:text-zinc-200'}
                  `}>
                    {scene.title}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-12 border border-dashed border-zinc-800 rounded-lg text-center text-zinc-600 font-mono text-sm">
              No scenes available for this movie yet.
            </div>
          )}
        </div>
      </div>

      {/* Right Column - Output */}
      <div className="w-[350px] bg-zinc-950 flex flex-col h-full border-l border-zinc-800 shadow-2xl z-20 p-6">
        <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          Output
        </h2>

        {/* Terminal Output */}
        <div className="bg-black rounded-lg border border-zinc-800 p-4 flex-1 overflow-y-auto font-mono text-xs relative group mb-6">
          {generatedPrompt ? (
            <p className="text-green-500 break-words leading-relaxed">
              <span className="text-zinc-500 select-none">$ </span>
              {generatedPrompt}
              <span className="animate-pulse inline-block w-2 h-4 bg-green-500 ml-1 align-middle"></span>
            </p>
          ) : (
            <p className="text-zinc-600 italic">
              <span className="text-zinc-700 select-none">$ </span>
              Waiting for input... Select a scene and style to generate prompt.
            </p>
          )}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          disabled={!generatedPrompt}
          className={`
            w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300
            ${generatedPrompt
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'}
          `}
        >
          {copied ? (
            <>COPIED TO CLIPBOARD</>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              COPY PROMPT
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
