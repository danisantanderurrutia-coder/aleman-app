import React, { useState } from 'react';
import { indieSongs } from '../data/indieSongs';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  Volume2, Bookmark, Sparkles, BookOpen, Clock, Heart, 
  RotateCcw, CheckCircle2, ChevronRight, Info, ExternalLink,
  Music, Mic, Check, Play, Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function IndieKaraokeTrainer({ progress, setProgress }) {
  const [selectedSongId, setSelectedSongId] = useState(indieSongs[0].id);
  const [activeViewMode, setActiveViewMode] = useState('didactic'); // 'didactic' | 'singalong'
  const [activeSpokenLine, setActiveSpokenLine] = useState(null);

  const activeSong = indieSongs.find(s => s.id === selectedSongId) || indieSongs[0];
  const completedSongs = progress.completedSongs || [];
  const isSongCompleted = completedSongs.includes(activeSong.id);

  const handleSpeakLine = (lineDe, idx) => {
    setActiveSpokenLine(idx);
    speechService.speak(lineDe);
    setTimeout(() => setActiveSpokenLine(null), 3500);
  };

  const handleMarkComplete = () => {
    if (!isSongCompleted) {
      addXP(40);
      const updated = [...completedSongs, activeSong.id];
      const updatedProgress = saveProgress({ completedSongs: updated });
      if (setProgress) setProgress(updatedProgress);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Music className="w-3.5 h-3.5 text-stone-700" />
          <span>Deutsche Indie-Kultur • Letras Reales & Cancionero Auténtico</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Lyrics del Indie Alemán (Letras Reales Completas)
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-2xl leading-relaxed">
          Aprende el alemán vivo de la calle y los clubes berlineses a través de letras 100% auténticas, sin sintetizadores artificiales. Escucha los temas originales en Spotify o YouTube mientras analizas cada estrofa verso a verso.
        </p>

        {/* Song Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-6">
          {indieSongs.map((s) => {
            const isSelected = s.id === activeSong.id;
            const isDone = completedSongs.includes(s.id);

            return (
              <button
                key={s.id}
                onClick={() => setSelectedSongId(s.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400 ring-offset-1'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {s.year}
                    </span>
                    {isDone && (
                      <span className="text-[10px] text-emerald-500 font-bold">✓</span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-xs mt-1.5 leading-snug line-clamp-1">
                    {s.title}
                  </h4>
                  <p className={`text-[11px] truncate ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {s.artist}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Song Hero Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xs mb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-stone-900 text-white font-mono text-xs font-bold uppercase tracking-wider">
                {activeSong.genre}
              </span>
              <span className="text-xs font-mono text-stone-500">
                Álbum: {activeSong.album} ({activeSong.year})
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              {activeSong.title}
            </h1>
            <h2 className="text-lg font-serif italic text-amber-800 mt-0.5">
              por {activeSong.artist}
            </h2>
            <p className="text-xs text-stone-600 mt-2 max-w-2xl leading-relaxed">
              {activeSong.description}
            </p>
          </div>

          {/* Links to Official Streaming and Completion Status */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            {/* Spotify search button */}
            <a
              href={`https://open.spotify.com/search/${encodeURIComponent(activeSong.spotifyQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#1DB954] hover:bg-[#1aa34a] text-white font-serif font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-transform hover:scale-102"
              title="Abrir canción original en Spotify"
            >
              <span>🎧 Escuchar en Spotify</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* YouTube official search button */}
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(activeSong.youtubeQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#cc0000] text-white font-serif font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-transform hover:scale-102"
              title="Ver videoclip oficial en YouTube"
            >
              <span>▶️ Ver en YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Mark as mastered button */}
            <button
              onClick={handleMarkComplete}
              className={`px-4 py-2.5 rounded-xl border text-xs font-serif font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                isSongCompleted
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-200'
              }`}
            >
              {isSongCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Letra Dominada (+40 XP)</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Marcar como estudiada</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Pedagogical Dossier Pills */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
            <span className="font-mono font-bold uppercase tracking-wider block mb-1 text-amber-900">
              🎯 Foco Gramatical del Tema:
            </span>
            <p className="leading-relaxed">
              {activeSong.grammaticalFocus}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-800">
            <span className="font-mono font-bold uppercase tracking-wider block mb-1 text-stone-500">
              📚 Vocabulario y Giros Idiomáticos:
            </span>
            <div className="space-y-1">
              {activeSong.vocabNotes.map((vn, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="font-mono font-bold text-stone-900">{vn.de}:</span>
                  <span className="text-stone-600 italic">{vn.es}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
            Modo de Visualización:
          </span>
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveViewMode('didactic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer ${
                activeViewMode === 'didactic'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              📖 Modo Didáctico (Verso + Notas)
            </button>
            <button
              onClick={() => setActiveViewMode('singalong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer ${
                activeViewMode === 'singalong'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              🎤 Modo Canto / Letra Continua
            </button>
          </div>
        </div>
      </div>

      {/* ======================= LYRICS CONTAINER ======================= */}
      <div className="space-y-8">
        {activeSong.sections.map((section, sIdx) => (
          <div key={sIdx} className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs">
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-stone-100">
              <span className="px-2.5 py-0.5 rounded-md bg-stone-100 font-mono text-xs font-bold text-stone-700">
                {section.name}
              </span>
            </div>

            {/* Lines List */}
            <div className="space-y-4">
              {section.lines.map((line, lIdx) => {
                const uniqueKey = `${sIdx}-${lIdx}`;
                const isSpeakingThis = activeSpokenLine === uniqueKey;

                if (activeViewMode === 'singalong') {
                  // Mode: Singalong (Clean large text)
                  return (
                    <div
                      key={lIdx}
                      className="py-2.5 px-4 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-relaxed">
                          {line.de}
                        </p>
                        <p className="text-xs text-stone-500 italic mt-0.5">
                          {line.es}
                        </p>
                      </div>

                      <button
                        onClick={() => handleSpeakLine(line.de, uniqueKey)}
                        className="opacity-0 group-hover:opacity-100 p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer transition-opacity"
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                }

                // Mode: Didactic (Line + Audio + Meaning + Grammar note)
                return (
                  <div
                    key={lIdx}
                    className={`p-4 rounded-2xl border transition-all ${
                      isSpeakingThis
                        ? 'bg-amber-50/60 border-amber-300 ring-2 ring-amber-300'
                        : 'bg-stone-50/60 hover:bg-stone-50 border-stone-200/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        {/* German Lyric */}
                        <div className="flex items-baseline gap-2">
                          <p className="text-base sm:text-lg font-serif font-bold text-stone-900">
                            {line.de}
                          </p>
                        </div>

                        {/* Spanish Translation */}
                        <p className="text-xs sm:text-sm text-stone-600 font-sans italic">
                          {line.es}
                        </p>

                        {/* Grammatical breakdown pill */}
                        {line.notes && (
                          <div className="pt-1.5 flex items-center gap-1.5 text-[11px] font-mono text-amber-900">
                            <span className="font-bold">💡 Nota:</span>
                            <span>{line.notes}</span>
                          </div>
                        )}
                      </div>

                      {/* Line Audio button */}
                      <button
                        onClick={() => handleSpeakLine(line.de, uniqueKey)}
                        className={`p-2 rounded-xl border text-stone-700 cursor-pointer shadow-2xs transition-all ${
                          isSpeakingThis
                            ? 'bg-amber-500 text-stone-950 border-amber-500 scale-105'
                            : 'bg-white hover:bg-stone-100 border-stone-200'
                        }`}
                        title="Escuchar locución alemana con voz nativa"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
