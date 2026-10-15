import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, GraduationCap, Flame, HelpCircle } from 'lucide-react';
import { speechService } from '../utils/speech';

export default function Header({ progress, onOpenGuide, onOpenCalendar, onGoToDaily }) {
  const [speechRate, setSpeechRate] = useState(0.85);

  const toggleRate = () => {
    const newRate = speechRate === 0.85 ? 1.0 : 0.85;
    setSpeechRate(newRate);
    speechService.setRate(newRate);
  };

  const handleSparkleClick = () => {
    speechService.speak('Guten Tag! Willkommen beim Institut für deutsche Sprache.');
    if (onOpenGuide) {
      onOpenGuide();
    }
  };

  const todayGoal = progress.dailyGoalXP || 50;
  const progressPercent = Math.min(100, Math.round(((progress.todayXP || 0) / todayGoal) * 100));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 px-6 py-4 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        {/* Brand / Academic Seal - Clic lleva a Día y Misiones */}
        <div 
          onClick={onGoToDaily}
          className="flex items-center gap-4 cursor-pointer group transition-all"
          title="Ir a Día y Misiones (Inicio)"
        >
          <div className="w-11 h-11 rounded-xl bg-stone-900 text-stone-50 flex items-center justify-center font-serif font-bold text-lg shadow-sm border border-stone-800 group-hover:bg-amber-600 transition-colors">
            D
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                DeutschMeister
              </h1>
              <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-stone-100 text-stone-700 border border-stone-300">
                NIVEAU A2
              </span>
            </div>
            <p className="text-xs text-stone-500 font-sans tracking-wide">
              Estudio Académico y Personal de la Lengua Alemana
            </p>
          </div>
        </div>

        {/* Academic Utilities & Metrics */}
        <div className="flex items-center flex-wrap gap-3">
          {/* Audio Speed Controller */}
          <button
            onClick={toggleRate}
            title={`Velocidad fonética: ${speechRate === 0.85 ? 'Pausada (0.85x estudio)' : 'Estándar (1.0x)'}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-xs font-medium text-stone-700 border border-stone-200 transition-all cursor-pointer shadow-2xs"
          >
            <Volume2 className="w-4 h-4 text-stone-600" />
            <span className="text-stone-500">Fonética:</span>
            <span className="font-mono font-semibold text-stone-900">
              {speechRate === 0.85 ? '0.85× Pausada' : '1.0× Estándar'}
            </span>
          </button>

          {/* Sparkle Guide Button: Plays audio and opens App Guide menu */}
          <button
            onClick={handleSparkleClick}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-serif font-semibold transition-all cursor-pointer shadow-2xs"
            title="Manual didáctico y guía de la aplicación"
          >
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>Guía de la App</span>
          </button>

          <div className="h-6 w-[1px] bg-stone-200 mx-1 hidden sm:block"></div>

          {/* Racha académica */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs font-semibold shadow-2xs">
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>{progress.streak} {progress.streak === 1 ? 'día consecutivo' : 'días consecutivos'}</span>
          </div>

          {/* Calendario con emoji 📅 al lado de días consecutivos */}
          <button
            onClick={onOpenCalendar}
            title="Abrir Calendario Académico y Registro de Progresión Diaria"
            className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-amber-100 hover:bg-amber-200/90 text-amber-950 text-xs font-serif font-bold border border-amber-300 transition-all cursor-pointer shadow-2xs hover:scale-103"
          >
            <span className="text-sm">📅</span>
            <span className="hidden md:inline text-[11px] font-mono font-semibold">Calendario</span>
          </button>

          {/* XP Progress */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-stone-50 border border-stone-200 text-xs shadow-2xs">
            <div className="flex items-center gap-1.5 text-stone-800 font-bold">
              <GraduationCap className="w-4 h-4 text-stone-700" />
              <span className="font-mono">{progress.xp}</span>
              <span className="text-[10px] text-stone-500 font-normal uppercase">XP</span>
            </div>
            <div className="w-16 h-1.5 bg-stone-200 rounded-full overflow-hidden" title={`Meta de hoy: ${progress.todayXP || 0}/${todayGoal} XP`}>
              <div
                className="h-full bg-stone-800 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
