import React, { useState, useEffect, useRef } from 'react';
import { indieSongs } from '../data/indieSongs';
import { indieAudioEngine } from '../utils/indieAudioEngine';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  Music, Mic, Bookmark, Sparkles, BookOpen, Clock, Heart, 
  RotateCcw, CheckCircle2, ChevronRight, Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function IndieKaraokeTrainer({ 
  progress, 
  setProgress,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  playbackTime,
  setPlaybackTime
}) {
  // If parent didn't provide global state, fall back to local
  const [localSong, setLocalSong] = useState(indieSongs[0]);
  const activeSong = currentSong || localSong;
  const selectSong = setCurrentSong || setLocalSong;

  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const playing = isPlaying !== undefined ? isPlaying : localIsPlaying;
  const setPlaying = setIsPlaying || setLocalIsPlaying;

  const [localTime, setLocalTime] = useState(0);
  const time = playbackTime !== undefined ? playbackTime : localTime;
  const setTime = setPlaybackTime || setLocalTime;

  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [completedSongs, setCompletedSongs] = useState(progress.completedSongs || []);

  const lyricsContainerRef = useRef(null);
  const activeLineRef = useRef(null);

  // Sync with indieAudioEngine time updates
  useEffect(() => {
    indieAudioEngine.onTimeUpdateCallback = (currTime) => {
      setTime(currTime);
    };

    indieAudioEngine.onTrackEndCallback = () => {
      // Award XP when track completes
      if (!completedSongs.includes(activeSong.id)) {
        addXP(30);
        const updated = [...completedSongs, activeSong.id];
        setCompletedSongs(updated);
        const updatedProgress = saveProgress({ completedSongs: updated });
        if (setProgress) setProgress(updatedProgress);
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    };
  }, [activeSong, completedSongs, setTime, setProgress]);

  // Load track when activeSong changes
  useEffect(() => {
    indieAudioEngine.loadTrack(activeSong);
    setTime(0);
    if (playing) {
      indieAudioEngine.play();
    }
  }, [activeSong]);

  // Auto-scroll lyrics smoothly to active line
  useEffect(() => {
    if (autoScroll && activeLineRef.current && lyricsContainerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [time, autoScroll]);

  // Play / Pause toggle
  const togglePlay = () => {
    if (playing) {
      indieAudioEngine.pause();
      setPlaying(false);
    } else {
      indieAudioEngine.loadTrack(activeSong);
      indieAudioEngine.seek(time);
      indieAudioEngine.play();
      setPlaying(true);
    }
  };

  // Jump to specific line in song
  const handleLineClick = (lineTime, lineDe) => {
    indieAudioEngine.seek(lineTime);
    setTime(lineTime);
    if (!playing) {
      indieAudioEngine.play();
      setPlaying(true);
    }
    // Also pronounce with speech
    speechService.speak(lineDe);
  };

  // Volume slider
  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    indieAudioEngine.setVolume(val);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      indieAudioEngine.setVolume(volume || 0.6);
    } else {
      setIsMuted(true);
      indieAudioEngine.setVolume(0);
    }
  };

  // Find active line index based on time
  const activeLineIndex = activeSong.lyrics.findIndex((line, idx) => {
    const nextLine = activeSong.lyrics[idx + 1];
    if (nextLine) {
      return time >= line.time && time < nextLine.time;
    }
    return time >= line.time;
  });

  const currentLine = activeSong.lyrics[activeLineIndex] || activeSong.lyrics[0];

  const formatSeconds = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const duration = activeSong.duration || 60;
  const progressPercent = Math.min(100, (time / duration) * 100);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Music className="w-3.5 h-3.5 text-stone-700" />
          <span>Indie-Musik & Karaoke • Aprendizaje Inmersivo por Ritmo y Poesía</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
          Indie Alemán & Indie Rap: Cancionero Karaoke Bilingüe
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-2xl leading-relaxed">
          Aprende el alemán real, poético y urbano a través de canciones icónicas. Sigue la letra sincronizada verso a verso con traducción al español y análisis de expresiones coloquiales.
        </p>

        {/* Song Selector Pills / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {indieSongs.map((song) => {
            const isSelected = song.id === activeSong.id;
            const isCompleted = completedSongs.includes(song.id);

            return (
              <button
                key={song.id}
                onClick={() => {
                  selectSong(song);
                  indieAudioEngine.loadTrack(song);
                  indieAudioEngine.seek(0);
                  if (playing) indieAudioEngine.play();
                }}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400 ring-offset-2'
                    : 'bg-white hover:bg-stone-50 border-stone-200/90 shadow-2xs text-stone-900'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                    isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {song.genre.split('/')[0]}
                  </span>
                  {isCompleted && (
                    <span className="text-emerald-500 text-xs font-mono flex items-center gap-1 font-bold">
                      ✓ Cantada
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-base leading-snug line-clamp-1">
                  {song.title}
                </h3>
                <p className={`text-xs mt-0.5 font-sans line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {song.artist} ({song.year})
                </p>

                {/* Animated sound wave bars if currently playing this song */}
                {isSelected && playing && (
                  <div className="flex items-end gap-1 mt-3 h-3">
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-3"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-2 delay-100"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-3.5 delay-200"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-1.5 delay-150"></span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Layout (Left = Karaoke Teleprompter, Right = Audio Player & Colloquial Glosas) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Live Synchronized Karaoke Display (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 flex flex-col h-[680px]">
          
          {/* Karaoke Bar Header */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 shrink-0">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
                Modo Karaoke Activo 🎤
              </span>
              <h3 className="text-lg font-serif font-bold text-stone-900 mt-1">
                {activeSong.title} — {activeSong.artist}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoScroll(!autoScroll)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                  autoScroll 
                    ? 'bg-stone-900 text-white border-stone-900' 
                    : 'bg-stone-100 text-stone-600 border-stone-200'
                }`}
                title="Desplazamiento automático de letra"
              >
                {autoScroll ? 'Auto-scroll ON' : 'Auto-scroll OFF'}
              </button>
            </div>
          </div>

          {/* Current Active Line Spotlight Banner */}
          <div className="my-4 p-5 rounded-2xl bg-amber-50/70 border border-amber-300 shadow-2xs shrink-0">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-mono text-amber-900 font-bold uppercase tracking-widest">
                Verso en Reproducción ({formatSeconds(time)})
              </span>
              <button
                onClick={() => speechService.speak(currentLine.de)}
                className="flex items-center gap-1 text-[11px] font-serif font-semibold text-amber-900 hover:text-amber-950 underline cursor-pointer"
                title="Pronunciar este verso"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Oír Dicción</span>
              </button>
            </div>
            <p className="text-lg sm:text-xl font-serif font-bold text-stone-950 leading-snug">
              "{currentLine.de}"
            </p>
            <p className="text-sm font-sans text-stone-700 mt-1 italic">
              {currentLine.es}
            </p>
            {currentLine.notes && (
              <div className="mt-2.5 pt-2 border-t border-amber-200/80 text-[11px] font-mono text-amber-950 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-700" />
                <span><strong>Filología:</strong> {currentLine.notes}</span>
              </div>
            )}
          </div>

          {/* Full Synchronized Verses Teleprompter */}
          <div 
            ref={lyricsContainerRef}
            className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-stone-200"
          >
            {activeSong.lyrics.map((line, idx) => {
              const isActive = idx === activeLineIndex;
              const isPast = line.time < time;

              return (
                <div
                  key={idx}
                  ref={isActive ? activeLineRef : null}
                  onClick={() => handleLineClick(line.time, line.de)}
                  className={`p-4 rounded-2xl transition-all border cursor-pointer group ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md scale-101 ring-2 ring-amber-400'
                      : isPast
                      ? 'bg-stone-50/50 hover:bg-stone-100 border-stone-200/80 text-stone-700'
                      : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className={`font-serif text-base ${isActive ? 'font-bold text-amber-300' : 'font-medium'}`}>
                        {line.de}
                      </p>
                      <p className={`text-xs mt-1 font-sans ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                        {line.es}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`text-[10px] font-mono ${isActive ? 'text-amber-400' : 'text-stone-400'}`}>
                        {formatSeconds(line.time)}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                        <Volume2 className="w-3.5 h-3.5 text-stone-400 hover:text-stone-900" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Audio Console & Colloquial Lexicon (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Music Control Deck */}
          <div className="bg-stone-900 text-white p-7 rounded-3xl shadow-lg border border-stone-800">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-800">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  Reproductor de Música Indie
                </span>
                <h4 className="font-serif font-bold text-lg text-white mt-0.5">
                  {activeSong.title}
                </h4>
                <p className="text-xs text-stone-400">
                  {activeSong.artist} • {activeSong.bpm} BPM
                </p>
              </div>

              {/* Animated Equalizer Visualizer */}
              <div className="flex items-end gap-1 h-8 px-3 py-1 bg-stone-800 rounded-xl border border-stone-700">
                <span className={`w-1 bg-amber-400 rounded-full ${playing ? 'animate-bounce h-6' : 'h-2'}`}></span>
                <span className={`w-1 bg-amber-400 rounded-full ${playing ? 'animate-bounce h-4 delay-100' : 'h-3'}`}></span>
                <span className={`w-1 bg-amber-400 rounded-full ${playing ? 'animate-bounce h-7 delay-200' : 'h-1.5'}`}></span>
                <span className={`w-1 bg-amber-400 rounded-full ${playing ? 'animate-bounce h-5 delay-150' : 'h-2'}`}></span>
                <span className={`w-1 bg-amber-400 rounded-full ${playing ? 'animate-bounce h-3 delay-75' : 'h-1'}`}></span>
              </div>
            </div>

            {/* Scrubber / Progress Bar */}
            <div className="mt-5 space-y-1.5">
              <div 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  const seekTime = pos * duration;
                  indieAudioEngine.seek(seekTime);
                  setTime(seekTime);
                }}
                className="w-full h-2 bg-stone-800 hover:h-2.5 rounded-full cursor-pointer relative transition-all overflow-hidden"
              >
                <div 
                  className="h-full bg-amber-400 rounded-full transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-stone-400">
                <span>{formatSeconds(time)}</span>
                <span>{formatSeconds(duration)}</span>
              </div>
            </div>

            {/* Playback Buttons */}
            <div className="flex items-center justify-between gap-4 mt-6">
              <button
                onClick={() => {
                  indieAudioEngine.seek(0);
                  setTime(0);
                }}
                className="p-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer transition-colors"
                title="Reiniciar canción"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 transition-all hover:scale-103"
              >
                {playing ? (
                  <>
                    <Pause className="w-5 h-5 fill-stone-950" />
                    <span>Pausar Música</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-stone-950 ml-0.5" />
                    <span>Poner Música Indie</span>
                  </>
                )}
              </button>

              {/* Volume Controller */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 text-stone-400 hover:text-white cursor-pointer"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1.5 bg-stone-700 accent-amber-400 rounded-lg cursor-pointer"
                  title="Volumen"
                />
              </div>
            </div>
          </div>

          {/* Song Didactic Context Box */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block mb-2">
              Contexto Cultural & Gramatical
            </span>
            <h4 className="font-serif font-bold text-stone-900 text-base">
              ¿Por qué estudiar con "{activeSong.title}"?
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              {activeSong.description}
            </p>

            <div className="mt-4 p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <span className="font-mono font-bold text-stone-800 block mb-1">
                🎯 Enfoque Pedagógico A2/B1:
              </span>
              <p className="text-stone-600 font-sans">
                {activeSong.grammaticalFocus}
              </p>
            </div>
          </div>

          {/* Colloquial Lexicon & Slang Dossier */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block mb-2">
              Léxico Coloquial & Slang Alemán de la Canción
            </span>
            <div className="space-y-2.5 mt-3">
              {activeSong.vocabNotes.map((vocab, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-mono font-bold text-stone-900">
                    {vocab.de}
                  </span>
                  <span className="text-stone-500 font-serif italic text-[11px]">
                    = {vocab.es}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
