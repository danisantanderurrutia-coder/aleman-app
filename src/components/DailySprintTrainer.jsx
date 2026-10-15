import React, { useState } from 'react';
import { dailySprintsData } from '../data/dailySprint';
import { repositoryWords, vocabularyCategories } from '../data/vocabularyRepository';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  CheckCircle2, Circle, Volume2, Sparkles, Bookmark, Calendar, 
  ArrowRight, Check, Search, BookOpen, Layers, Award, RotateCcw, Filter,
  Smile, Type, Hash, Apple, Utensils, Activity, Compass, Clock, Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

const categoryIcons = {
  Layers: Layers,
  Smile: Smile,
  Type: Type,
  Hash: Hash,
  Apple: Apple,
  Utensils: Utensils,
  Activity: Activity,
  Compass: Compass,
  Clock: Clock,
  Users: Users
};

export default function DailySprintTrainer({ progress, setProgress, setActiveTab, onOpenCalendar, onAddConsecutiveDay }) {
  // Mode: 'sprint' (7 palabras del día) o 'repository' (archivo / baúl de palabras aprendidas)
  const [viewMode, setViewMode] = useState('sprint');

  // Rotación guiada por el Día de Estudio del usuario (Día 1, 2, 3...)
  const curriculumDay = progress.curriculumDay || 1;
  const todayDefaultIdx = (curriculumDay - 1) % dailySprintsData.length;
  const [selectedDayIdx, setSelectedDayIdx] = useState(todayDefaultIdx);

  // Search and filter in Repository
  const [searchQuery, setSearchQuery] = useState('');
  const [repoFilterDay, setRepoFilterDay] = useState('all'); // 'all' or dayNumber
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' or category id from Doc 4
  const [onlyLearnedFilter, setOnlyLearnedFilter] = useState(false);

  const sprint = dailySprintsData[selectedDayIdx] || dailySprintsData[0];
  const sprintKey = `daily_sprint_${sprint.id}`;
  const masteredInDay = (progress[sprintKey] || []);

  const todayDate = new Date().toISOString().split('T')[0];
  const questsState = progress[`quests_${todayDate}`] || {};
  const isSprintFinished = masteredInDay.length >= sprint.words.length;
  const effectiveVocabDone = questsState.vocabDone || isSprintFinished;
  const allQuestsDone = !!(questsState.focusDone && effectiveVocabDone && questsState.grammarDone);

  // Collect all words across sprint days
  const allSprintWords = dailySprintsData.flatMap(d => 
    d.words.map(w => ({
      ...w,
      source: 'sprint',
      dayNumber: d.dayNumber,
      dayTitle: d.title,
      sprintId: d.id,
      isMastered: (progress[`daily_sprint_${d.id}`] || []).includes(w.id)
    }))
  );

  // Collect words from the new vocabulary repository (Doc 4)
  const formattedRepoWords = repositoryWords.map(w => ({
    id: w.id,
    source: 'repository',
    category: w.category,
    word: w.de,
    translation: w.es,
    article: w.article,
    plural: '',
    level: w.level,
    tip: w.tip,
    exampleDe: w.example,
    exampleEs: w.es,
    isMastered: (progress.masteredVocab || []).includes(w.id)
  }));

  const totalMasteredWords = allSprintWords.filter(w => w.isMastered).length + 
    formattedRepoWords.filter(w => w.isMastered).length;
  const totalAvailableWords = allSprintWords.length + formattedRepoWords.length;

  const handleToggleWord = (wordId, sprintId = sprint.id, isRepoItem = false) => {
    if (isRepoItem) {
      const currentList = progress.masteredVocab || [];
      const isAlreadyMastered = currentList.includes(wordId);
      const updatedList = isAlreadyMastered
        ? currentList.filter(id => id !== wordId)
        : [...currentList, wordId];

      if (!isAlreadyMastered) addXP(5);
      const updated = saveProgress({ masteredVocab: updatedList });
      setProgress(updated);
      return;
    }

    const key = `daily_sprint_${sprintId}`;
    const currentList = progress[key] || [];
    const isAlreadyMastered = currentList.includes(wordId);
    
    let updatedList;
    let extraUpdates = {};
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

        // Marcar Misión de Léxico Activo como completada en los Quests de Hoy
        const todayStr = new Date().toISOString().split('T')[0];
        const questsKey = `quests_${todayStr}`;
        const currentQuests = progress[questsKey] || {};
        extraUpdates[questsKey] = {
          ...currentQuests,
          vocabDone: true,
          vocabDone_awarded: true
        };
      }
    }

    const updated = saveProgress({ [key]: updatedList, ...extraUpdates });
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
  let pool = [];
  if (selectedCategory === 'all') {
    pool = [...allSprintWords, ...formattedRepoWords];
  } else if (selectedCategory === 'sprint') {
    pool = allSprintWords;
  } else {
    pool = formattedRepoWords.filter(w => w.category === selectedCategory);
  }

  const filteredRepoWords = pool.filter(w => {
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
          <span>Der 7-Wörter-Sprint & Wortschatz-Archiv</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Vocabulario Progresivo & Repositorio
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xl">
          Microaprendizaje diario (Día {curriculumDay}) y repositorio categorizado para consultar saludos regionales, alfabeto, frutas, cocina y verbos.
        </p>

        {/* Mode Switcher: Sprint vs Repositorio */}
        <div className="flex items-center gap-3 mt-6 border-b border-stone-200 pb-3">
          <button
            onClick={() => setViewMode('sprint')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer ${
              viewMode === 'sprint'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sprint de Hoy (7 Palabras • Día {curriculumDay})</span>
          </button>

          <button
            onClick={() => setViewMode('repository')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer ${
              viewMode === 'repository'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Wortschatz-Archiv (Repositorio de Vocabulario)</span>
            <span className="font-mono text-[10px] bg-stone-200 text-stone-800 px-1.5 py-0.5 rounded-full ml-1">
              {totalAvailableWords}
            </span>
          </button>
        </div>
      </div>

      {/* ===================== MODE 1: SPRINT DIARIO (7 PALABRAS) ===================== */}
      {viewMode === 'sprint' && (
        <>
          {/* Day Cycle Selector Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {dailySprintsData.map((d, idx) => {
              const isSelected = idx === selectedDayIdx;
              const isCurrentStudyDay = idx === todayDefaultIdx;
              const daySprintKey = `daily_sprint_${d.id}`;
              const countDone = (progress[daySprintKey] || []).length;
              const isAllDone = countDone === d.words.length;

              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`flex-shrink-0 text-left p-3.5 px-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-white border-stone-800 shadow-sm ring-1 ring-stone-800'
                      : 'bg-white hover:bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                      Día {d.dayNumber}
                    </span>
                    {isCurrentStudyDay && (
                      <span className="text-[9px] font-mono font-bold bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded">
                        Tu Día
                      </span>
                    )}
                    {isAllDone && (
                      <Check className="w-3 h-3 text-emerald-600" />
                    )}
                  </div>
                  <div className="font-serif font-bold text-stone-900 text-xs mt-1 truncate max-w-[130px]">
                    {d.title.split(':')[1]?.trim() || d.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Sprint Header Card */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px] font-mono font-bold">
                    Día {sprint.dayNumber} • Tema del Día
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Sprint de 7 Palabras</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  {sprint.title}
                </h3>
                <p className="text-stone-500 text-xs mt-1">
                  {sprint.description}
                </p>
              </div>

              {/* Progress counter & XP bonus */}
              <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-200 shrink-0">
                <div className="text-right">
                  <span className="font-mono text-sm font-bold text-stone-900 block leading-tight">
                    {masteredInDay.length} de {sprint.words.length}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">palabras listas</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center font-mono text-xs font-bold text-amber-800 bg-amber-50">
                  {completionPercent}%
                </div>
              </div>
            </div>

            {/* Word List */}
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

                        <p className="text-xs text-stone-600 font-sans mt-0.5 font-medium">
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

            {/* Banner de Finalización con Botón Negro y Letras Blancas */}
            {isSprintFinished && (
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                      ✓ ¡Sprint del Día Completado! (+25 XP)
                    </span>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900 mt-2">
                    {allQuestsDone 
                      ? '¡Has completado las 3 misiones de tu jornada!' 
                      : `¡Excelente! Has dominado las ${sprint.words.length} palabras de ${sprint.title}.`}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 max-w-lg">
                    {allQuestsDone
                      ? 'Todas las misiones del día han sido superadas. Añade tu día consecutivo al calendario para celebrar tu racha.'
                      : 'Continúa con el challenge diario para completar los retos de gramática y sintaxis de hoy.'}
                  </p>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  {allQuestsDone ? (
                    <button
                      onClick={onAddConsecutiveDay}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-102 transition-all"
                    >
                      <span>Añadir día consecutivo 📅</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab && setActiveTab('checkin')}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-102 transition-all"
                    >
                      <span>Continuar con el challenge diario →</span>
                    </button>
                  )}
                </div>
              </div>
            )}
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
                Wortschatz-Archiv • Repositorio Integral
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Repositorio de Vocabulario y Expresiones
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-lg leading-relaxed">
                Revisa todas las palabras aprendidas día tras día, o explora las categorías del temario (saludos regionales, alfabeto fonético, frutas por género, cocina y verbos).
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

          {/* Category Filter Pills (Doc 4 integration) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {vocabularyCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const IconComp = categoryIcons[cat.icon] || Layers;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-2xs font-bold'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
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
                placeholder="Buscar por término alemán, significado..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-xs font-sans text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
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
                No se encontraron términos con esos filtros
              </h4>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Prueba a seleccionar "Todo el Repositorio" o limpiar el texto de búsqueda.
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
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 capitalize">
                          {w.source === 'sprint' ? `Día ${w.dayNumber} • Sprint` : w.category || 'Léxico'}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleToggleWord(w.id, w.sprintId, w.source === 'repository')}
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
                        {w.plural && (
                          <span className="text-xs font-mono text-stone-400">
                            ({w.plural})
                          </span>
                        )}
                      </div>

                      {/* Translation */}
                      <p className="text-xs text-stone-600 font-sans mt-0.5 font-medium">
                        {w.translation}
                      </p>

                      {/* Tip or explanation if present */}
                      {w.tip && (
                        <p className="text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-lg border border-amber-200/60 mt-2 font-sans">
                          💡 {w.tip}
                        </p>
                      )}

                      {/* Example */}
                      {w.exampleDe && (
                        <div className="mt-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                          <p className="font-serif italic text-stone-800">
                            "{w.exampleDe}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Audio Playback Footer */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-stone-400">
                        {w.level || 'A1/A2'}
                      </span>

                      <button
                        onClick={() => speechService.speak(`${w.article ? w.article + ' ' : ''}${w.word}. ${w.exampleDe || ''}`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-mono cursor-pointer transition-colors"
                        title="Escuchar audio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
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
