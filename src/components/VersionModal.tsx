import { X, GitCommit } from 'lucide-react';
import { versionHistory } from '../data/versionHistory';

interface VersionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function VersionModal({ isOpen, onClose }: VersionModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl flex flex-col max-h-[80vh]">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-950/50 rounded-t-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                            <GitCommit className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-zinc-100 tracking-tight">Version History</h2>
                            <p className="text-xs text-zinc-500 font-mono mt-0.5">CHANGELOG & UPDATES</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
                    {versionHistory.map((update, index) => (
                        <div key={update.version} className="relative pl-4 border-l-2 border-zinc-800">
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border-2 ${index === 0 ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-zinc-900 border-zinc-600'}`}></div>

                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex items-center gap-2">
                                    <span className={`font-mono text-sm font-bold ${index === 0 ? 'text-cyan-400' : 'text-zinc-400'}`}>
                                        {update.version}
                                    </span>
                                    {update.isCurrent && (
                                        <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30 uppercase tracking-wide">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-zinc-200">{update.title}</h3>
                            </div>

                            <ul className="space-y-2">
                                {update.changes.map((change, i) => (
                                    <li key={i} className="text-zinc-400 text-sm leading-relaxed pl-1 flex items-start gap-2">
                                        <span className="block w-1 h-1 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                                        <span>
                                            {change.split(':').length > 1 ? (
                                                <>
                                                    <strong className="text-zinc-300">{change.split(':')[0]}:</strong>
                                                    {change.substring(change.indexOf(':') + 1)}
                                                </>
                                            ) : change}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="pt-8 border-t border-zinc-800 text-center">
                        <p className="text-xs text-zinc-600 italic">Developed by the Antigravity AI Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
