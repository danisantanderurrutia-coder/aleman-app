import React, { useState } from 'react';
import { grammarTopics } from '../data/grammar';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  BookOpen, CheckCircle2, XCircle, ArrowRight, Volume2, 
  Lightbulb, Check, ChevronRight, Bookmark
} from 'lucide-react';

export default function GrammarTrainer({ progress, setProgress }) {
  const [selectedTopicId, setSelectedTopicId] = useState(grammarTopics[0].id);
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const topic = grammarTopics.find(t => t.id === selectedTopicId) || grammarTopics[0];
  const exercises = topic.exercises || [];
  const currentExercise = exercises[currentExerciseIdx];

  const completedList = (progress.completedGrammarExercises && progress.completedGrammarExercises[topic.id]) || [];
  const isTopicDone = completedList.length === exercises.length;

  const handleSelectTopic = (id) => {
    setSelectedTopicId(id);
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
        addXP(10);
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
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Editorial Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Grammatische Grundlagen • Tratado Teórico y Práctico</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
          Módulos de Gramática Alemana A2
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-2xl leading-relaxed">
          Estructura formal, casos y sintaxis explicados de forma analítica y contrastiva con el español.
        </p>

        {/* Index Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {grammarTopics.map((item, index) => {
            const isSelected = item.id === topic.id;
            const completedCount = (progress.completedGrammarExercises && progress.completedGrammarExercises[item.id] || []).length;
            const totalCount = item.exercises.length;
            const isFinished = completedCount === totalCount;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTopic(item.id)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-stone-800 shadow-md ring-1 ring-stone-800'
                    : 'bg-white hover:bg-stone-50/80 border-stone-200/90 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-[11px] font-semibold text-stone-500 uppercase">
                    Kapitel {index + 1}
                  </span>
                  {isFinished ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3" /> Dominado
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-stone-400">
                      {completedCount}/{totalCount} ej.
                    </span>
                  )}
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-sm line-clamp-1">{item.title}</h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-1">{item.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Theoretical Treatise (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-stone-100 text-stone-800 border border-stone-300">
                {topic.level}
              </span>
              <span className="text-xs text-stone-400 font-mono">Tratado Gramatical</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-snug">
              {topic.title}
            </h2>
            <p className="text-amber-800 text-sm font-medium mt-1 mb-6 font-serif italic">
              {topic.subtitle}
            </p>

            <div className="prose text-stone-700 text-sm leading-relaxed mb-8 border-b border-stone-100 pb-6">
              <p>{topic.explanation.summary}</p>
            </div>

            {/* Prepositions Box */}
            {topic.explanation.prepositions && (
              <div className="mb-8 p-6 rounded-2xl bg-stone-50 border border-stone-200">
                <p className="text-xs font-mono font-bold text-stone-600 uppercase tracking-widest mb-3">
                  Catálogo de las 9 Preposiciones Mixtas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.explanation.prepositions.map((prep) => (
                    <span key={prep} className="px-3 py-1.5 rounded-lg bg-white text-stone-900 font-mono text-sm font-bold border border-stone-300 shadow-2xs">
                      {prep}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Connectors Box */}
            {topic.explanation.connectors && (
              <div className="mb-8 space-y-3">
                <p className="text-xs font-mono font-bold text-stone-600 uppercase tracking-widest mb-2">
                  Conjunciones Subordinantes y Régimen Verbal:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topic.explanation.connectors.map((c) => (
                    <div key={c.word} className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono font-bold text-stone-900 text-base">{c.word}</span>
                        <span className="text-xs text-stone-500 italic">({c.meaning})</span>
                      </div>
                      <p className="text-xs text-stone-700 mt-2 font-serif italic bg-white p-2.5 rounded-lg border border-stone-200">
                        "{c.example}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Golden Rules */}
            {topic.explanation.goldenRule && (
              <div className="space-y-4 mb-8">
                {topic.explanation.goldenRule.map((rule, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 border-b border-stone-200/60 pb-2">
                      <span className="text-xs font-mono font-semibold text-stone-600">{rule.question}</span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white border border-stone-300 text-stone-900">
                        {rule.case}
                      </span>
                    </div>
                    <div className="mt-3 text-sm text-stone-900 font-medium flex items-center gap-2.5">
                      <button
                        onClick={() => speechService.speak(rule.exampleDe)}
                        className="p-1.5 rounded-lg bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 cursor-pointer shadow-2xs"
                        title="Pronunciar locución"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-serif text-base">{rule.exampleDe}</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1 pl-8 font-sans">{rule.exampleEs}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Verb Pairs */}
            {topic.explanation.verbPairs && (
              <div className="mb-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <p className="text-xs font-mono font-bold text-stone-600 uppercase tracking-widest mb-3">
                  Oposición Morfológica: Acción Transitiva vs. Estado Estático:
                </p>
                <div className="space-y-2 text-xs">
                  {topic.explanation.verbPairs.map((pair, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between py-1.5 border-b border-stone-200 last:border-0">
                      <span className="text-blue-900 font-medium font-mono">{pair.action}</span>
                      <span className="text-stone-700 font-medium font-mono">{pair.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pedagogical Note / Tip */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="block font-semibold mb-0.5">Nota Filológica / Mnemotecnia:</strong>
                {topic.explanation.tip}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Exercises Panel (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 p-8 sm:p-9 rounded-3xl bg-white border border-stone-300 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                Comprobación Práctica
              </span>
              <span className="text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200">
                {currentExerciseIdx + 1} / {exercises.length}
              </span>
            </div>

            {/* Exercise Dots */}
            <div className="flex items-center gap-1.5 mb-6">
              {exercises.map((_, idx) => {
                const isCurrent = idx === currentExerciseIdx;
                const isDone = completedList.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentExerciseIdx(idx);
                      setSelectedOption(null);
                      setIsAnswerChecked(false);
                    }}
                    className={`h-1.5 flex-1 rounded-full transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-stone-900'
                        : isDone
                        ? 'bg-emerald-600'
                        : 'bg-stone-200 hover:bg-stone-300'
                    }`}
                  />
                );
              })}
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {currentExercise.question}
                </h4>
                <button
                  onClick={() => speechService.speak(currentExercise.question.replace('___', ''))}
                  className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer shrink-0 border border-stone-200"
                  title="Escuchar locución"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-stone-500 mt-2 font-serif italic">
                "{currentExercise.translation}"
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-2.5 mb-6">
              {currentExercise.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentExercise.correct;

                let btnStyle = 'bg-stone-50 hover:bg-stone-100/80 border-stone-200 text-stone-800';
                if (isAnswerChecked) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                  } else {
                    btnStyle = 'bg-stone-50/50 border-stone-200 text-stone-400';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-stone-900 border-stone-900 text-white font-semibold shadow-xs';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswerChecked}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span className="font-mono text-sm">{opt}</span>
                    {isAnswerChecked && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card */}
            {isAnswerChecked && (
              <div className={`p-4 rounded-xl mb-6 text-xs leading-relaxed border ${
                selectedOption === currentExercise.correct
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}>
                <div className="font-bold flex items-center gap-1.5 mb-1 font-serif text-sm">
                  {selectedOption === currentExercise.correct ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Respuesta Correcta (+10 XP)</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-700" />
                      <span>Análisis del Error:</span>
                    </>
                  )}
                </div>
                <p className="mt-1 text-stone-700 leading-normal">{currentExercise.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div>
              {!isAnswerChecked ? (
                <button
                  onClick={checkAnswer}
                  disabled={selectedOption === null}
                  className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Comprobar Solución
                </button>
              ) : (
                <button
                  onClick={handleNextExercise}
                  disabled={currentExerciseIdx === exercises.length - 1}
                  className="w-full py-3.5 rounded-xl font-medium text-sm bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Siguiente Ejercicio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
