import React, { useState } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  Music, Mic, ChevronDown, ChevronUp, Radio 
} from 'lucide-react';
import { indieSongs } from '../data/indieSongs';
import { indieAudioEngine } from '../utils/indieAudioEngine';

export default function TopMusicPlayer({
  activeSong,
  setActiveSong,
  isPlaying,
  setIsPlaying,
  playbackTime,
  setPlaybackTime,
  onOpenKaraoke
}) {
  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Play / Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      indieAudioEngine.pause();
      setIsPlaying(false);
    } else {
      indieAudioEngine.loadTrack(activeSong);
      indieAudioEngine.seek(playbackTime);
      indieAudioEngine.play();
      setIsPlaying(true);
    }
  };

  // Next / Prev track
  const handlePrev = () => {
    const currentIndex = indieSongs.findIndex(s => s.id === activeSong.id);
    const prevIndex = (currentIndex - 1 + indieSongs.length) % indieSongs.length;
    const newSong = indieSongs[prevIndex];
    setActiveSong(newSong);
    indieAudioEngine.loadTrack(newSong);
    setPlaybackTime(0);
    if (isPlaying) indieAudioEngine.play();
  };

  const handleNext = () => {
    const currentIndex = indieSongs.findIndex(s => s.id === activeSong.id);
    const nextIndex = (currentIndex + 1) % indieSongs.length;
    const newSong = indieSongs[nextIndex];
    setActiveSong(newSong);
    indieAudioEngine.loadTrack(newSong);
    setPlaybackTime(0);
    if (isPlaying) indieAudioEngine.play();
  };

  // Volume
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

  const duration = activeSong.duration || 60;
  const progressPercent = Math.min(100, (playbackTime / duration) * 100);

  const formatSeconds = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (isMinimized) {
    return (
      <aside aria-label="Reproductor de música indie minimizado" className="bg-stone-900 text-white px-6 py-1.5 border-b border-stone-800 text-xs flex items-center justify-between z-45">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 cursor-pointer transition-transform hover:scale-105"
              title={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? <Pause className="w-3 h-3 fill-stone-950" /> : <Play className="w-3 h-3 fill-stone-950 ml-0.2" />}
            </button>
            <div className="flex items-center gap-2">
              <span className="font-mono text-amber-400 font-bold">🎵 {activeSong.title}</span>
              <span className="text-stone-400 text-[11px] hidden sm:inline">• {activeSong.artist}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenKaraoke}
              className="text-[11px] font-serif font-bold text-amber-300 hover:text-white underline cursor-pointer"
            >
              🎤 Ver Letra
            </button>
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 text-stone-400 hover:text-white cursor-pointer"
              title="Expandir reproductor"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside aria-label="Reproductor de música indie superior" className="bg-stone-900/95 backdrop-blur-md text-white border-b border-stone-800 px-6 py-2.5 z-45 transition-all shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Track Information & Animated Equalizer */}
        <div className="flex items-center gap-3 min-w-48">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center text-white shadow-xs shrink-0 font-mono font-bold text-xs">
            🎸
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm text-white truncate max-w-40 sm:max-w-60 block leading-tight">
                {activeSong.title}
              </span>
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-amber-400 rounded-full animate-bounce h-2.5"></span>
                  <span className="w-0.5 bg-amber-400 rounded-full animate-bounce h-1.5 delay-100"></span>
                  <span className="w-0.5 bg-amber-400 rounded-full animate-bounce h-3 delay-200"></span>
                </div>
              )}
            </div>
            <p className="text-[11px] text-stone-400 truncate max-w-40 sm:max-w-60 font-sans">
              {activeSong.artist} • <span className="text-amber-400/90 font-mono">{activeSong.genre.split('/')[0]}</span>
            </p>
          </div>
        </div>

        {/* Center: Controls & Scrubber */}
        <div className="flex-1 max-w-md flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-1.5 text-stone-400 hover:text-white cursor-pointer transition-colors"
              title="Canción anterior"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="p-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold shadow-sm transition-transform hover:scale-105 cursor-pointer"
              title={isPlaying ? "Pausar música" : "Poner música indie en la app"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-stone-950" />
              ) : (
                <Play className="w-4 h-4 fill-stone-950 ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-1.5 text-stone-400 hover:text-white cursor-pointer transition-colors"
              title="Siguiente canción"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar with times */}
          <div className="w-full flex items-center gap-2">
            <span className="text-[10px] font-mono text-stone-400 w-8 text-right">
              {formatSeconds(playbackTime)}
            </span>
            <div 
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                const seekTime = pos * duration;
                indieAudioEngine.seek(seekTime);
                setPlaybackTime(seekTime);
              }}
              className="flex-1 h-1.5 bg-stone-800 hover:h-2 rounded-full cursor-pointer relative transition-all overflow-hidden"
            >
              <div 
                className="h-full bg-amber-400 rounded-full transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-stone-400 w-8">
              {formatSeconds(duration)}
            </span>
          </div>
        </div>

        {/* Right: Karaoke Button, Volume & Minimize */}
        <div className="flex items-center gap-3.5">
          {/* Karaoke Quick Button */}
          <button
            onClick={onOpenKaraoke}
            className="px-3 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-serif font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-amber-400/40 transition-all hover:scale-102"
            title="Abrir la letra y traducción sincronizada tipo karaoke"
          >
            <Mic className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Ver Letra & Karaoke</span>
            <span className="sm:hidden">Letra</span>
          </button>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-1.5">
            <button
              onClick={toggleMute}
              className="p-1 text-stone-400 hover:text-white cursor-pointer"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5 text-red-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-14 h-1 bg-stone-700 accent-amber-400 rounded-lg cursor-pointer"
              title="Volumen de la música"
            />
          </div>

          {/* Minimize Button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 text-stone-400 hover:text-white cursor-pointer"
            title="Minimizar reproductor"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
