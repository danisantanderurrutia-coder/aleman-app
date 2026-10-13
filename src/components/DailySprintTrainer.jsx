import React, { useState } from 'react';
import { dailySprintsData } from '../data/dailySprint';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { CheckCircle2, Circle, Volume2, Sparkles, Bookmark, Calendar, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DailySprintTrainer({ progress, setProgress }) {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const sprint = dailySprintsData[selectedDayIdx] || dailySprintsData[0];
  const sprintKey = `daily_sprint_${sprint.id}`;
  const masteredInDay = (progress[sprintKey] || []);

  const handleToggleWord = (wordId) => {
    const isAlreadyMastered = masteredInDay.includes(wordId);
    let updatedList;
    if (isAlreadyMastered) {
      updatedList = masteredInDay.filter(id => id !== wordId);
    } else {
      updatedList = [...masteredInDay, wordId];
      addXP(5);
      
      // If completed all 7 words
      if (updatedList.length === sprint.words.length) {
        addXP(25);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }

    const updated = saveProgress({ [sprintKey]: updatedList });
    setProgress(updated);
  };

  const getArticleColor = (art) => {
    switch (art?.toLowerCase()) {
      case 'der': return 'text-blue-900 bg-blue-50 border-blue-200';
      case 'die': return 'text-rose-900 bg-rose-50 border-rose-200';
      case 'das': return 'text-emerald-900 bg-emerald-50 border-emerald-200';
      default: return 'text-stone-700 bg-stone-100 border-stone-200';
    }
  };

  const completionPercent = Math.round((masteredInDay.length / sprint.words.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Der 7-Wörter-Sprint • Método de Microaprendizaje</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          El Hack de las 7 Palabras Diarias
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xl">
          Aprender 7 palabras al día = 210 términos al mes. Suficiente para cubrir el 70% del léxico necesario para superar el examen A2 sin saturar tu memoria.
        </p>

        {/* Day selection tabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
          {dailySprintsData.map((d, idx) => {
            const isSelected = idx === selectedDayIdx;
            const completedCount = (progress[`daily_sprint_${d.id}`] || []).length;
            const isDone = completedCount === d.words.length;

            return (
              <button
                key={d.id}
                onClick={() => setSelectedDayIdx(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span>Día {d.dayNumber}</span>
                {isDone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="text-[10px] font-mono opacity-60">({completedCount}/7)</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sprint Card Header */}
      <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
              Día {sprint.dayNumber} de 7
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              {sprint.title}
            </h3>
            <p className="text-xs text-stone-500 mt-1">{sprint.description}</p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="text-right">
              <span className="font-mono text-lg font-bold text-stone-900">
                {masteredInDay.length} / {sprint.words.length}
              </span>
              <span className="block text-[11px] text-stone-400 font-mono">completadas</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center font-mono text-xs font-bold text-stone-800">
              {completionPercent}%
            </div>
          </div>
        </div>

        {/* Word Checklist */}
        <div className="divide-y divide-stone-100 mt-4">
          {sprint.words.map((w, index) => {
            const isChecked = masteredInDay.includes(w.id);
            const badgeStyle = getArticleColor(w.article);

            return (
              <div
                key={w.id}
                onClick={() => handleToggleWord(w.id)}
                className={`py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-colors px-2 rounded-xl hover:bg-stone-50/80 ${
                  isChecked ? 'opacity-85' : ''
                }`}
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Checkbox Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleWord(w.id);
                    }}
                    className="mt-1 sm:mt-0 p-1 text-stone-300 hover:text-stone-900 cursor-pointer"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-50" />
                    ) : (
                      <Circle className="w-6 h-6 text-stone-300" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-baseline gap-2.5">
                      {w.article && (
                        <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${badgeStyle}`}>
                          {w.article}
                        </span>
                      )}
                      <h4 className="text-xl font-serif font-bold text-stone-900">
                        {w.word}
                      </h4>
                      <span className="text-xs font-mono text-stone-400">
                        ({w.plural})
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 font-sans mt-0.5">
                      {w.translation}
                    </p>

                    <p className="text-xs text-stone-500 font-serif italic mt-1 bg-stone-50 p-2 rounded-lg border border-stone-200/80 inline-block">
                      "{w.exampleDe}" <span className="font-sans text-[11px] text-stone-400 not-italic">({w.exampleEs})</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speechService.speak(`${w.article ? w.article + ' ' : ''}${w.word}`);
                    }}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer border border-stone-200 shadow-2xs"
                    title="Escuchar locución"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
