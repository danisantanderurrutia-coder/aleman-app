import React, { useState } from 'react';
import { dailySprintsData } from '../data/dailySprint';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  CheckCircle2, Circle, Volume2, Sparkles, Bookmark, Calendar, 
  ArrowRight, Check, Search, BookOpen, Layers, Award, RotateCcw, Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DailySprintTrainer({ progress, setProgress }) {
  // Mode: 'sprint' (7 palabras del día) o 'repository' (archivo / baúl de palabras aprendidas)
  const [viewMode, setViewMode] = useState('sprint');

  // Rotación automática diaria: Lunes=0 (Tag 1), Martes=1 (Tag 2), etc.
  const currentDayOfWeek = new Date().getDay(); // 0 es Domingo, 1 es Lunes...
  const todayDefaultIdx = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
  const [selectedDayIdx, setSelectedDayIdx] = useState(todayDefaultIdx);

  // Search and filter in Repository
  const [searchQuery, setSearchQuery] = useState('');
  const [repoFilterDay, setRepoFilterDay] = useState('all'); // 'all' or dayNumber
  const [onlyLearnedFilter, setOnlyLearnedFilter] = useState(false);

  const sprint = dailySprintsData[selectedDayIdx] || dailySprintsData[0];
  const sprintKey = `daily_sprint_${sprint.id}`;
  const masteredInDay = (progress[sprintKey] || []);

  // Collect all words across all days
  const allSprintWords = dailySprintsData.flatMap(d => 
    d.words.map(w => ({
      ...w,
      dayNumber: d.dayNumber,
      dayTitle: d.title,
      sprintId: d.id,
      isMastered: (progress[`daily_sprint_${d.id}`] || []).includes(w.id)
    }))
  );

  const totalMasteredWords = allSprintWords.filter(w => w.isMastered).length;
  const totalAvailableWords = allSprintWords.length;

  const handleToggleWord = (wordId, sprintId = sprint.id) => {
    const key = `daily_sprint_${sprintId}`;
    const currentList = progress[key] || [];
    const isAlreadyMastered = currentList.includes(wordId);
    
    let updatedList;
    if (isAlreadyMastered) {
      updatedList = currentList.filter(id => id !== wordId);
    } else {
      updatedList = [...currentList, wordId];
      addXP(5);
      
      const targetSprint = dailySprintsData.find(d => d.id === sprintId) || sprint;
      if (updatedList.length === targetSprint.words.length) {
        addXP(25);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }

    const updated = saveProgress({ [key]: updatedList });
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

  // Filtered words for Repository mode
  const filteredRepoWords = allSprintWords.filter(w => {
    const matchesSearch = 
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (w.exampleDe && w.exampleDe.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDay = repoFilterDay === 'all' || w.dayNumber === Number(repoFilterDay);
    const matchesLearned = !onlyLearnedFilter || w.isMastered;

    return matchesSearch && matchesDay && matchesLearned;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Der 7-Wörter-Sprint • Método de Microaprendizaje</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          El Hack de las 7 Palabras Diarias & Repositorio
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xl">
          Aprender 7 palabras al día = 210 términos al mes. Rotación progresiva automática y archivo permanente para nunca olvidar lo aprendido.
        </p>

        {/* Mode Switcher: Sprint vs Repositorio */}
        <div className="flex items-center gap-3 mt-6 border-b border-stone-200 pb-3">
          <button
            onClick={() => setViewMode('sprint')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-serif font-bold cursor-pointer transition-all flex items-center gap-2 ${
              viewMode === 'sprint'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sprint de Hoy (7 Palabras)</span>
          </button>

          <button
            onClick={() => setViewMode('repository')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-serif font-bold cursor-pointer transition-all flex items-center gap-2 ${
              viewMode === 'repository'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Repositorio de Palabras Aprendidas ({totalMasteredWords}/{totalAvailableWords})</span>
          </button>
        </div>
      </div>

      {/* ===================== MODE 1: DAILY SPRINT ===================== */}
      {viewMode === 'sprint' && (
        <>
          {/* Day selection tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 no-scrollbar">
            {dailySprintsData.map((d, idx) => {
              const isSelected = idx === selectedDayIdx;
              const isToday = idx === todayDefaultIdx;
              const completedCount = (progress[`daily_sprint_${d.id}`] || []).length;
              const isDone = completedCount === d.words.length;

              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs ring-2 ring-amber-400'
                      : isToday
                      ? 'bg-amber-50 text-amber-900 border border-amber-300'
                      : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <span>Día {d.dayNumber}</span>
                  {isToday && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-200 text-amber-950 uppercase font-bold">
                      Hoy
                    </span>
                  )}
                  {isDone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <span className="text-[10px] font-mono opacity-60">({completedCount}/7)</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sprint Card Header */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
                    Día {sprint.dayNumber} de 7
                  </span>
                  {selectedDayIdx === todayDefaultIdx && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                      Activo Hoy
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  {sprint.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">{sprint.description}</p>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-stone-900">
                    {masteredInDay.length} / {sprint.words.length}
                  </span>
                  <span className="block text-[11px] text-stone-400 font-mono">aprendidas</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center font-mono text-xs font-bold text-stone-800">
                  {completionPercent}%
                </div>
              </div>
            </div>

            {/* Word Checklist */}
            <div className="divide-y divide-stone-100 mt-4">
              {sprint.words.map((w) => {
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
        </>
      )}

      {/* ===================== MODE 2: REPOSITORIO DE PALABRAS APRENDIDAS ===================== */}
      {viewMode === 'repository' && (
        <div className="space-y-6">
          {/* Summary Dashboard Card */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block mb-1">
                Wortschatz-Archiv • Baúl de Léxico
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Repositorio de Días Pasados y Términos Aprendidos
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-lg leading-relaxed">
                Aquí se conservan todas las palabras que has ido aprendiendo jornada a jornada para que puedas repasar su fonética, género y ejemplos en cualquier momento.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200 shrink-0">
              <div className="text-center px-2">
                <span className="font-mono text-2xl font-bold text-emerald-800 block leading-none">
                  {totalMasteredWords}
                </span>
                <span className="text-[10px] text-stone-500 font-mono uppercase">Aprendidas</span>
              </div>
              <div className="h-8 w-[1px] bg-stone-200" />
              <div className="text-center px-2">
                <span className="font-mono text-2xl font-bold text-stone-800 block leading-none">
                  {totalAvailableWords}
                </span>
                <span className="text-[10px] text-stone-500 font-mono uppercase">En Catálogo</span>
              </div>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por palabra, significado..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-xs font-sans text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {/* Day filter */}
              <select
                value={repoFilterDay}
                onChange={(e) => setRepoFilterDay(e.target.value)}
                className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-mono bg-white text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
              >
                <option value="all">Todos los Días (1 al 7)</option>
                {dailySprintsData.map(d => (
                  <option key={d.dayNumber} value={d.dayNumber}>
                    Día {d.dayNumber}: {d.title.split(':')[1]?.trim() || d.title}
                  </option>
                ))}
              </select>

              {/* Only Mastered Toggle Button */}
              <button
                onClick={() => setOnlyLearnedFilter(!onlyLearnedFilter)}
                className={`px-3 py-2 rounded-xl text-xs font-serif font-bold transition-colors cursor-pointer border flex items-center gap-1.5 ${
                  onlyLearnedFilter
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Solo Aprendidas</span>
              </button>
            </div>
          </div>

          {/* Words Grid in Repository */}
          {filteredRepoWords.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-stone-200">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <h4 className="font-serif font-bold text-stone-800 text-lg">
                No se encontraron palabras con esos filtros
              </h4>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Prueba a desmarcar "Solo Aprendidas" o limpiar el texto de búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRepoWords.map((w) => {
                const badgeStyle = getArticleColor(w.article);

                return (
                  <div
                    key={w.id}
                    className={`p-5 rounded-2xl border transition-all bg-white shadow-2xs flex flex-col justify-between ${
                      w.isMastered ? 'border-emerald-200 ring-1 ring-emerald-200/60' : 'border-stone-200'
                    }`}
                  >
                    <div>
                      {/* Top Bar of Card */}
                      <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-100">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                          Día {w.dayNumber} • {w.dayTitle.split(':')[1]?.trim() || ''}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleToggleWord(w.id, w.sprintId)}
                            className="text-xs cursor-pointer"
                            title={w.isMastered ? "Marcar como pendiente" : "Marcar como aprendida"}
                          >
                            {w.isMastered ? (
                              <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                                <Check className="w-3 h-3" /> Aprendida
                              </span>
                            ) : (
                              <span className="font-mono text-[11px] text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full border border-stone-200 hover:text-stone-700">
                                Por aprender
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Word Header */}
                      <div className="flex items-baseline gap-2 mb-1">
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

                      {/* Translation */}
                      <p className="text-xs text-stone-600 font-sans mt-0.5 font-medium">
                        {w.translation}
                      </p>

                      {/* Example */}
                      <div className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                        <p className="font-serif italic text-stone-800">
                          "{w.exampleDe}"
                        </p>
                        <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                          {w.exampleEs}
                        </p>
                      </div>
                    </div>

                    {/* Audio Playback Footer */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-stone-400">
                        {w.id.toUpperCase()}
                      </span>

                      <button
                        onClick={() => speechService.speak(`${w.article ? w.article + ' ' : ''}${w.word}. ${w.exampleDe}`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-serif font-bold cursor-pointer transition-colors shadow-2xs"
                        title="Escuchar palabra y ejemplo"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-stone-600" />
                        <span>Escuchar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
