import React, { useState } from 'react';
import { grammarTopics } from '../data/grammar';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  BookOpen, CheckCircle2, XCircle, ArrowRight, Volume2, 
  Lightbulb, Check, ChevronRight, Bookmark, Table, Eye, Sparkles,
  HelpCircle, AlertCircle
} from 'lucide-react';
import DeclensionMatrix8x8 from './DeclensionMatrix8x8';

export default function GrammarTrainer({ progress, setProgress }) {
  const [selectedTopicId, setSelectedTopicId] = useState(grammarTopics[0].id);
  // Pedagogical Phase Tabs: 'genesis', 'tables', 'rayx', 'practice'
  const [activePhase, setActivePhase] = useState('genesis');
  
  // Practice State
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // Active table tab within phase 2
  const [activeTableTab, setActiveTableTab] = useState('definite');

  const topic = grammarTopics.find(t => t.id === selectedTopicId) || grammarTopics[0];
  const exercises = topic.exercises || [];
  const currentExercise = exercises[currentExerciseIdx];

  const completedList = (progress.completedGrammarExercises && progress.completedGrammarExercises[topic.id]) || [];
  const isTopicDone = completedList.length === exercises.length;

  const handleSelectTopic = (id) => {
    setSelectedTopicId(id);
    setActivePhase('genesis');
    setCurrentExerciseIdx(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  const handleOptionClick = (idx) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const checkAnswer = () => {
    if (selectedOption === null || isAnswerChecked) return;
    setIsAnswerChecked(true);

    const isCorrect = selectedOption === currentExercise.correct;
    if (isCorrect) {
      if (!completedList.includes(currentExerciseIdx)) {
        const newCompleted = [...completedList, currentExerciseIdx];
        const updatedGrammar = {
          ...progress.completedGrammarExercises,
          [topic.id]: newCompleted,
        };
        const updated = saveProgress({ completedGrammarExercises: updatedGrammar });
        addXP(15);
        setProgress(updated);

        if (newCompleted.length === exercises.length) {
          confetti({
            particleCount: 60,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      }
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIdx < exercises.length - 1) {
      setCurrentExerciseIdx(currentExerciseIdx + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Grammatische Grundlagen • Método Didáctico Progresivo en 4 Fases</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
          Tratado de Gramática Alemana A2
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-2xl leading-relaxed">
          Comprende el origen y la función de los casos antes de ser evaluado. Tablas completas, matriz visual 8×8 y oraciones en rayos X.
        </p>

        {/* Horizontal Topic Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-6 no-scrollbar">
          {grammarTopics.map((item, index) => {
            const isSelected = item.id === topic.id;
            const completedCount = (progress.completedGrammarExercises && progress.completedGrammarExercises[item.id] || []).length;
            const isFinished = completedCount === item.exercises.length && item.exercises.length > 0;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTopic(item.id)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? 'text-amber-400' : 'text-stone-400'}`}>
                    Kap. {index + 1}
                  </span>
                  {isFinished && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>
                <div className="text-xs font-serif font-bold truncate max-w-[200px] mt-0.5">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Topic Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-800 text-[11px] font-mono font-bold border border-stone-200">
                {topic.level}
              </span>
              <span className="text-xs text-stone-400 font-mono">Lección Guiada</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {topic.title}
            </h1>
            <p className="text-amber-800 font-serif italic text-sm mt-1">
              {topic.subtitle}
            </p>
          </div>

          {/* Progress Pill */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200">
            <span className="text-xs font-mono text-stone-500">Ejercicios dominados:</span>
            <span className="text-xs font-mono font-bold text-stone-900">
              {completedList.length}/{exercises.length}
            </span>
          </div>
        </div>

        {/* The 4 Pedagogical Phase Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
          <button
            onClick={() => setActivePhase('genesis')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activePhase === 'genesis'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/70'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Génesis & Origen</span>
          </button>

          <button
            onClick={() => setActivePhase('tables')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activePhase === 'tables'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/70'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>2. Tablas & Matriz 8×8</span>
          </button>

          <button
            onClick={() => setActivePhase('rayx')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activePhase === 'rayx'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/70'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>3. Rayos X de Frases</span>
          </button>

          <button
            onClick={() => setActivePhase('practice')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activePhase === 'practice'
                ? 'bg-amber-600 text-white shadow-2xs font-bold'
                : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>4. Comprobación Práctica</span>
          </button>
        </div>
      </div>

      {/* PHASE 1: GÉNESIS & ORIGEN */}
      {activePhase === 'genesis' && (
        <div className="space-y-6 animate-in fade-in">
          {topic.originExplanation && (
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-6">
              <div className="border-b border-stone-100 pb-5">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                  ¿Por qué ocurre este fenómeno gramatical?
                </span>
                <p className="text-stone-700 text-sm leading-relaxed mt-2 font-serif text-base">
                  {topic.originExplanation.whyItExists}
                </p>
              </div>

              {/* Roles Breakdown */}
              {topic.originExplanation.theThreeRoles && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {topic.originExplanation.theThreeRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border ${
                        role.color === 'blue'
                          ? 'bg-blue-50/60 border-blue-200'
                          : role.color === 'purple'
                          ? 'bg-purple-50/60 border-purple-200'
                          : role.color === 'rose'
                          ? 'bg-rose-50/60 border-rose-200'
                          : role.color === 'emerald'
                          ? 'bg-emerald-50/60 border-emerald-200'
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold text-stone-900 mb-1">{role.name}</div>
                      {role.question && (
                        <div className="text-[11px] font-mono font-semibold text-amber-700 mb-2">
                          Pregunta clave: {role.question}
                        </div>
                      )}
                      <p className="text-xs text-stone-700 leading-relaxed mb-3">{role.role}</p>
                      
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200/70 text-xs font-serif italic text-stone-800">
                        "{role.example}"
                      </div>

                      {role.secret && (
                        <div className="mt-3 text-[11px] font-medium text-amber-900 bg-amber-100/70 p-2 rounded-lg leading-snug">
                          {role.secret}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Dativ Prepositions Callout if available */}
              {topic.originExplanation.dativPrepositions && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-700" />
                    <span>Indicadores Inquebrantables de Dativo (Doc 1)</span>
                  </div>
                  <p className="text-xs text-amber-900 mb-3">{topic.originExplanation.dativMnemonic}</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.originExplanation.dativPrepositions.map((prep) => (
                      <span
                        key={prep}
                        className="px-3 py-1 rounded-lg bg-white border border-amber-300 font-mono text-xs font-bold text-amber-900 shadow-2xs"
                      >
                        {prep}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Feminine Endings if available */}
              {topic.originExplanation.feminineEndings && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono font-bold text-stone-800 uppercase mb-2">
                    📌 Auswendig lernen: Sufijos que siempre son femeninos (die)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {topic.originExplanation.feminineEndings.map((ending, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white border border-stone-300 text-xs font-mono text-stone-700"
                      >
                        {ending}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Trick Callout if available */}
              {topic.originExplanation.quickTrick && (
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300/80 text-amber-950">
                  <div className="text-xs font-mono font-bold uppercase mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Regla Mnemotécnica Rápida</span>
                  </div>
                  <div className="text-xs font-mono whitespace-pre-line leading-relaxed font-semibold">
                    {topic.originExplanation.quickTrick}
                  </div>
                </div>
              )}

              {/* Theoretical Treatise Dossier (Google Docs Deep Theory) */}
              {topic.theoreticalDossier && (
                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-stone-700" />
                    <span>Dossier Teórico y Conceptual del Módulo</span>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {topic.theoreticalDossier.map((dossier, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-6 rounded-2xl bg-stone-50/90 border border-stone-200/90 text-stone-800"
                      >
                        <h4 className="font-serif font-bold text-base text-stone-950 mb-2">
                          {dossier.title}
                        </h4>
                        <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans whitespace-pre-line">
                          {dossier.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActivePhase('tables')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-all cursor-pointer"
                >
                  <span>Paso 2: Ver Tablas y Matriz 8×8</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PHASE 2: TABLAS COMPLETAS & MATRIZ VISUAL 8×8 */}
      {activePhase === 'tables' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Declension Tables Box */}
          {topic.tables && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Tablas de Declinación Sistemática
                  </h3>
                  <p className="text-stone-500 text-xs mt-0.5">
                    Selecciona el tipo de artículo para inspeccionar la declinación exacta en cada caso.
                  </p>
                </div>
                
                {/* Tables Tab Selector */}
                <div className="flex bg-stone-100 p-1 rounded-xl">
                  {topic.tables.definite && (
                    <button
                      onClick={() => setActiveTableTab('definite')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeTableTab === 'definite' ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'text-stone-600'
                      }`}
                    >
                      Definidos (der/die/das)
                    </button>
                  )}
                  {topic.tables.indefinite && (
                    <button
                      onClick={() => setActiveTableTab('indefinite')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeTableTab === 'indefinite' ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'text-stone-600'
                      }`}
                    >
                      Indefinidos (ein/eine)
                    </button>
                  )}
                  {topic.tables.possessive && (
                    <button
                      onClick={() => setActiveTableTab('possessive')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeTableTab === 'possessive' ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'text-stone-600'
                      }`}
                    >
                      Posesivos (mein)
                    </button>
                  )}
                  {topic.tables.negation && (
                    <button
                      onClick={() => setActiveTableTab('negation')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeTableTab === 'negation' ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'text-stone-600'
                      }`}
                    >
                      Negación (kein)
                    </button>
                  )}
                </div>
              </div>

              {/* Active Table Rendering */}
              {topic.tables[activeTableTab] && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500 text-xs font-mono uppercase">
                        <th className="py-3 px-4">Caso Gramatical</th>
                        <th className="py-3 px-4 text-blue-700">Masculino</th>
                        <th className="py-3 px-4 text-rose-700">Femenino</th>
                        <th className="py-3 px-4 text-emerald-700">Neutro</th>
                        <th className="py-3 px-4 text-amber-700">Plural</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-sm">
                      {topic.tables[activeTableTab].map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-stone-900">
                            {row.case}
                          </td>
                          <td className={`py-3.5 px-4 font-mono ${row.highlightM ? 'font-bold text-blue-700 bg-blue-50/50 rounded-lg' : 'text-stone-700'}`}>
                            {row.m}
                          </td>
                          <td className={`py-3.5 px-4 font-mono ${row.highlightAll ? 'font-bold text-rose-700 bg-rose-50/50 rounded-lg' : 'text-stone-700'}`}>
                            {row.f}
                          </td>
                          <td className={`py-3.5 px-4 font-mono ${row.highlightAll ? 'font-bold text-emerald-700 bg-emerald-50/50 rounded-lg' : 'text-stone-700'}`}>
                            {row.n}
                          </td>
                          <td className={`py-3.5 px-4 font-mono ${row.highlightAll ? 'font-bold text-amber-700 bg-amber-50/50 rounded-lg' : 'text-stone-700'}`}>
                            {row.pl}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Integrated 8x8 Visual Grid Component */}
          <DeclensionMatrix8x8 mode={topic.id === 'wechselpraepositionen' ? 'spatial' : 'cases'} />

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActivePhase('genesis')}
              className="text-stone-500 hover:text-stone-900 text-xs font-medium cursor-pointer"
            >
              ← Volver a Fundamento Teórico
            </button>
            <button
              onClick={() => setActivePhase('rayx')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-all cursor-pointer"
            >
              <span>Paso 3: Rayos X de Frases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* PHASE 3: RAYOS X DE FRASES (SATZ-LABOR) */}
      {activePhase === 'rayx' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                Satz-Labor • Descomposición Oracional Palabra por Palabra
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                Cómo se materializan los casos en el habla real
              </h3>
              <p className="text-stone-500 text-xs mt-1">
                Observa cómo cada bloque de la oración responde a una función y adopta su terminación precisa.
              </p>
            </div>

            {topic.sentenceRayX && topic.sentenceRayX.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-serif font-bold text-stone-950">{item.de}</div>
                    <div className="text-xs text-stone-500 italic mt-0.5">{item.es}</div>
                  </div>
                  <button
                    onClick={() => speechService.speak(item.de)}
                    className="p-2.5 rounded-xl bg-white hover:bg-stone-200 border border-stone-300 text-stone-700 cursor-pointer transition-all"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Broken down blocks */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {item.breakdown.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs"
                    >
                      <div className="font-mono text-xs font-bold text-stone-900">{b.segment}</div>
                      <div className="text-[10px] text-amber-800 font-medium mt-1">{b.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setActivePhase('tables')}
                className="text-stone-500 hover:text-stone-900 text-xs font-medium cursor-pointer"
              >
                ← Volver a Tablas
              </button>
              <button
                onClick={() => setActivePhase('practice')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                <span>¡Listo! Comenzar Comprobación Práctica</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PHASE 4: COMPROBACIÓN PRÁCTICA (EXERCISES) */}
      {activePhase === 'practice' && (
        <div className="space-y-6 animate-in fade-in">
          {currentExercise ? (
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="text-xs font-mono font-bold text-stone-400 uppercase">
                  Pregunta {currentExerciseIdx + 1} de {exercises.length}
                </span>
                <button
                  onClick={() => speechService.speak(currentExercise.question)}
                  className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Escuchar</span>
                </button>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
                  {currentExercise.question}
                </h3>
                <p className="text-stone-500 text-sm italic mt-1">
                  Traducción: {currentExercise.translation}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentExercise.options.map((opt, oIdx) => {
                  const isSelected = selectedOption === oIdx;
                  let btnStyle = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';

                  if (isAnswerChecked) {
                    if (oIdx === currentExercise.correct) {
                      btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-stone-900 text-white border-stone-900 font-semibold shadow-2xs';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleOptionClick(oIdx)}
                      disabled={isAnswerChecked}
                      className={`p-4 rounded-2xl border text-left font-mono text-sm transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswerChecked && oIdx === currentExercise.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Verification & Feedback */}
              {!isAnswerChecked ? (
                <button
                  onClick={checkAnswer}
                  disabled={selectedOption === null}
                  className={`w-full py-3.5 rounded-2xl font-medium text-xs transition-all cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Comprobar Respuesta
                </button>
              ) : (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    {selectedOption === currentExercise.correct ? (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ¡Exacto! Bien razonado (+15 XP)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                        <XCircle className="w-4 h-4 text-rose-600" /> No exactamente. Revisa la regla:
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {currentExercise.explanation}
                  </p>

                  <div className="pt-2 flex justify-end">
                    {currentExerciseIdx < exercises.length - 1 ? (
                      <button
                        onClick={handleNextExercise}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-all cursor-pointer"
                      >
                        <span>Siguiente Ejercicio</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                        🎉 ¡Has completado la comprobación de este capítulo!
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-stone-200">
              <p className="text-stone-500 text-sm">No hay ejercicios para este tema.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
