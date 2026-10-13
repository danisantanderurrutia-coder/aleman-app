import React, { useState } from 'react';
import { curriculumRoadmap, cefrMilestones } from '../data/curriculumRoadmap';
import { addXP, getProgress, saveProgress } from '../utils/storage';
import { 
  Compass, CheckCircle2, Circle, ArrowRight, Trophy, 
  Sparkles, Bookmark, Target, Award, Calendar, Check, Lock, ChevronRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProgressionRoadmap({ progress, setProgress, setActiveTab, isEmbedded = false }) {
  const currentDay = progress.curriculumDay || 1;
  const [selectedDayNum, setSelectedDayNum] = useState(currentDay);

  const completedDays = progress.completedCurriculumDays || [];
  const selectedDayData = curriculumRoadmap.find(d => d.day === selectedDayNum) || curriculumRoadmap[0];

  const handleMarkDayComplete = () => {
    if (completedDays.includes(selectedDayNum)) return;

    const newCompleted = [...completedDays, selectedDayNum];
    const nextDay = Math.min(curriculumRoadmap.length, selectedDayNum + 1);

    addXP(50);
    const updated = saveProgress({
      curriculumDay: nextDay,
      completedCurriculumDays: newCompleted,
    });
    setProgress(updated);
    setSelectedDayNum(nextDay);

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const isSelectedDayCompleted = completedDays.includes(selectedDayNum);

  return (
    <div className={isEmbedded ? "mt-12 pt-10 border-t border-stone-200" : "max-w-5xl mx-auto px-6 py-12"}>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Der Lernpfad • El Camino Progresivo de Aprendizaje</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Progresión Día a Día: De A2 hacia B1 y B2
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-2xl leading-relaxed">
          Cada jornada tiene un propósito didáctico único que entrelaza gramática, vocabulario y soltura social para que sientas un avance tangible día tras día.
        </p>
      </div>

      {/* CEFR Milestones Ladder (A2 -> B1 -> B2 -> C1) */}
      <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm mb-10">
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-100">
          <div>
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
              Escalera del Marco Común Europeo (MCER)
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
              Tu Ruta de Evolución Lingüística
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-bold">
            Fase Activa: Nivel A2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cefrMilestones.filter(m => m.level !== 'A1').map((m) => {
            const isCurrent = m.level === 'A2';
            const isNext = m.level === 'B1';

            return (
              <div
                key={m.level}
                className={`p-5 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-amber-50/40 border-amber-300 shadow-2xs ring-1 ring-amber-300'
                    : isNext
                    ? 'bg-stone-50/80 border-stone-200'
                    : 'bg-stone-50/40 border-stone-200/60 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-serif font-bold ${isCurrent ? 'text-amber-950' : 'text-stone-700'}`}>
                    {m.level}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-stone-500">
                    {m.status}
                  </span>
                </div>

                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isCurrent ? 'bg-amber-600' : isNext ? 'bg-stone-600' : 'bg-stone-400'
                    }`}
                    style={{ width: `${m.progress}%` }}
                  />
                </div>

                <h4 className="font-serif font-bold text-xs text-stone-900 mb-1 leading-snug">
                  {m.name}
                </h4>
                <p className="text-[11px] text-stone-500 leading-normal font-sans">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 14-Day Visual Timeline (Los Días del Plan) */}
      <div className="mb-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
            Selecciona el Día del Currículum:
          </span>
          <span className="text-xs font-mono text-stone-600">
            {completedDays.length} de {curriculumRoadmap.length} jornadas superadas
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {curriculumRoadmap.map((item) => {
            const isSelected = item.day === selectedDayNum;
            const isDone = completedDays.includes(item.day);
            const isUnlocked = item.day <= currentDay;

            return (
              <button
                key={item.day}
                onClick={() => isUnlocked && setSelectedDayNum(item.day)}
                disabled={!isUnlocked}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer min-w-[130px] shrink-0 ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : isDone
                    ? 'bg-emerald-50/70 border-emerald-200 text-stone-800'
                    : isUnlocked
                    ? 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                    : 'bg-stone-100/60 border-stone-200 text-stone-400 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-stone-400'}`}>
                    Día {item.day}
                  </span>
                  {isDone ? (
                    <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  ) : !isUnlocked ? (
                    <Lock className="w-3 h-3 text-stone-400" />
                  ) : null}
                </div>
                <h5 className={`font-serif font-bold text-xs line-clamp-1 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {item.title.split(': ')[1] || item.title}
                </h5>
                <span className={`text-[10px] font-mono ${isSelected ? 'text-stone-400' : 'text-stone-500'}`}>
                  {item.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Capsule Details */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-stone-100 text-stone-700 uppercase">
                {selectedDayData.phase}
              </span>
              <span className="text-xs font-mono text-stone-400">{selectedDayData.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {selectedDayData.title}
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-xl leading-relaxed">
              <strong>Objetivo didáctico:</strong> {selectedDayData.objective}
            </p>
          </div>

          <div className="self-start sm:self-auto">
            {isSelectedDayCompleted ? (
              <span className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Jornada Completada (+50 XP)</span>
              </span>
            ) : (
              <button
                onClick={handleMarkDayComplete}
                className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center gap-2 cursor-pointer shadow-xs transition-all"
              >
                <Check className="w-4 h-4" />
                <span>Marcar Día como Superado (+50 XP)</span>
              </button>
            )}
          </div>
        </div>

        {/* 3 Progressive Steps for the Day */}
        <div className="my-8 space-y-4">
          <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
            Las 3 Tareas de Esta Jornada:
          </h4>

          {selectedDayData.steps.map((step, idx) => (
            <div
              key={step.id}
              className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center font-mono text-xs font-bold text-stone-800 shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="font-serif font-bold text-sm text-stone-900">
                    {step.title}
                  </h5>
                  <span className="text-[11px] font-mono text-stone-500">Recompensa: +{step.xp} XP</span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab(step.tab)}
                className="px-4 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-900 text-xs font-mono font-medium border border-stone-200 cursor-pointer shadow-2xs flex items-center gap-1.5 self-end sm:self-auto"
              >
                <span>Ir al módulo</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Competencia del MCER Adquirida */}
        <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
          <span>
            <strong>Competencia evaluada:</strong> {selectedDayData.cefrSkill}
          </span>
          <span className="font-mono text-stone-400">Progreso guardado automáticamente</span>
        </div>
      </div>
    </div>
  );
}
