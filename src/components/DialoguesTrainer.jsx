import React, { useState } from 'react';
import { dialoguesData } from '../data/dialogues';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  MessageSquare, Volume2, Eye, EyeOff, CheckCircle2, 
  Bookmark, Play, Check, Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DialoguesTrainer({ progress, setProgress }) {
  const [selectedId, setSelectedId] = useState(dialoguesData[0].id);
  const [showTranslations, setShowTranslations] = useState(true);
  const [activeAudioIdx, setActiveAudioIdx] = useState(null);

  const dialogue = dialoguesData.find(d => d.id === selectedId) || dialoguesData[0];
  const completedList = progress.completedDialogues || [];
  const isCompleted = completedList.includes(dialogue.id);

  const handlePlayLine = (germanText, index) => {
    setActiveAudioIdx(index);
    speechService.speak(germanText);
    setTimeout(() => setActiveAudioIdx(null), 3000);
  };

  const handlePlayAll = () => {
    let delay = 0;
    dialogue.lines.forEach((line, index) => {
      setTimeout(() => {
        setActiveAudioIdx(index);
        speechService.speak(line.german);
      }, delay);
      delay += Math.max(2500, line.german.length * 90);
    });
    setTimeout(() => setActiveAudioIdx(null), delay + 1000);
  };

  const handleMarkAsCompleted = () => {
    if (!isCompleted) {
      const newCompleted = [...completedList, dialogue.id];
      const updated = saveProgress({ completedDialogues: newCompleted });
      addXP(25);
      setProgress(updated);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Konversationsanalyse • Corpus de Diálogos Cotidianos</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Situaciones Reales en Alemania
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xl">
          Transcripciones de interacción social auténtica orientadas al uso pragmático del nivel A2.
        </p>

        {/* Dialogue selector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {dialoguesData.map((d) => {
            const isSelected = d.id === dialogue.id;
            const isDone = completedList.includes(d.id);
            return (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedId(d.id);
                  setActiveAudioIdx(null);
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-stone-800 shadow-sm ring-1 ring-stone-800'
                    : 'bg-white hover:bg-stone-50 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                    {d.badge}
                  </span>
                  {isDone && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <h4 className="text-xs font-serif font-bold text-stone-900 line-clamp-1">{d.title}</h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Transcript Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm mb-10">
        {/* Title & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-stone-200">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-stone-400">
              {dialogue.badge} • Transcripción Didáctica
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              {dialogue.title}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              {dialogue.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-50 hover:bg-stone-100 text-xs font-mono font-medium text-stone-700 border border-stone-200 transition-all cursor-pointer shadow-2xs"
              title="Alternar traducción al español"
            >
              {showTranslations ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showTranslations ? 'Ocultar Glosa' : 'Mostrar Glosa'}</span>
            </button>

            <button
              onClick={handlePlayAll}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono font-semibold shadow-xs transition-all cursor-pointer"
              title="Escuchar transcripción completa"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Reproducir Diálogo</span>
            </button>
          </div>
        </div>

        {/* Cultural Footnote */}
        {dialogue.cultureTip && (
          <div className="my-6 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-800 flex items-start gap-3">
            <Globe className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-stone-900">Contexto Sociolingüístico (Landeskunde): </strong>
              {dialogue.cultureTip}
            </p>
          </div>
        )}

        {/* Lines */}
        <div className="space-y-4 my-8">
          {dialogue.lines.map((line, idx) => {
            const isUser = line.speaker.startsWith('Du');
            const isPlaying = activeAudioIdx === idx;

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl transition-all border ${
                  isUser
                    ? 'bg-amber-50/40 border-amber-200/80 sm:ml-8'
                    : 'bg-stone-50/70 border-stone-200 sm:mr-8'
                } ${isPlaying ? 'ring-2 ring-stone-900' : ''}`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                    isUser ? 'text-amber-900' : 'text-stone-600'
                  }`}>
                    {line.speaker}
                  </span>
                  <button
                    onClick={() => handlePlayLine(line.german, idx)}
                    className="p-1 rounded-md bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 cursor-pointer shadow-2xs"
                    title="Reproducir intervención"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-base font-serif font-medium text-stone-900 leading-relaxed">
                  {line.german}
                </p>

                {showTranslations && (
                  <p className="text-xs text-stone-500 mt-1.5 italic font-sans">
                    {line.spanish}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer completion */}
        <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-500 font-sans">
            Método recomendado: Lee cada frase en voz alta aplicando técnica de shadowing.
          </span>
          <button
            onClick={handleMarkAsCompleted}
            disabled={isCompleted}
            className={`px-6 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2 transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 cursor-default'
                : 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isCompleted ? 'Completado (+25 XP)' : 'Registrar como Practicado (+25 XP)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
