import React, { useState } from 'react';
import { a2DiagnosticTest } from '../data/tests';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  CheckCircle2, XCircle, ArrowRight, RotateCcw, Volume2, 
  Award, Bookmark, BarChart, AlertCircle, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SelfTest({ progress, setProgress }) {
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { [qId]: selectedOptionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = a2DiagnosticTest.questions;
  const currentQ = questions[currentQIdx];

  const handleSelectOption = (optIdx) => {
    if (isSubmitted) return;
    setAnswers({
      ...answers,
      [currentQ.id]: optIdx
    });
  };

  const handleNext = () => {
    if (currentQIdx < questions.length - 1) {
      setCurrentQIdx(currentQIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIdx > 0) {
      setCurrentQIdx(currentQIdx - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Calculate score
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    if (scorePercent >= a2DiagnosticTest.passingScore) {
      addXP(50);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      addXP(20);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQIdx(0);
    setIsSubmitted(false);
  };

  // Evaluation metrics
  const correctCount = questions.filter(q => answers[q.id] === q.correct).length;
  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const isPassed = scorePercent >= a2DiagnosticTest.passingScore;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Prüfungszentrum • Centro de Evaluación Diagnóstica</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Test de Comprobación A2
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xl">
          Verifica objetivamente tu nivel de dominio en casos, tiempos verbales, falsos amigos y sintaxis alemana.
        </p>
      </div>

      {!isSubmitted ? (
        /* TEST IN PROGRESS */
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm">
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-4 pb-3 border-b border-stone-100">
            <span>Reactivo {currentQIdx + 1} de {questions.length}</span>
            <span className="font-semibold text-stone-800">{currentQ.domain}</span>
          </div>

          <div className="w-full h-1.5 bg-stone-100 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-stone-900 transition-all duration-300 rounded-full"
              style={{ width: `${((currentQIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Prompt */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-serif font-bold text-stone-900 leading-snug">
                {currentQ.prompt}
              </h3>
              <button
                onClick={() => speechService.speak(currentQ.prompt.replace('___', ''))}
                className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer shadow-2xs shrink-0"
                title="Escuchar reactivo"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            {currentQ.context && (
              <p className="text-xs text-stone-500 font-sans mt-2 italic">
                Pauta de contexto: {currentQ.context}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, idx) => {
              const isSelected = answers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white font-semibold border-stone-900 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100/80 text-stone-800 border-stone-200'
                  }`}
                >
                  <span className="font-serif text-base">{opt}</span>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={handlePrev}
              disabled={currentQIdx === 0}
              className="px-5 py-2.5 rounded-xl border border-stone-200 text-xs font-mono font-medium text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Anterior
            </button>

            {currentQIdx < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={answers[currentQ.id] === undefined}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
              >
                Siguiente Pregunta →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < questions.length}
                className="px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-sm"
              >
                Finalizar y Calificar Examen
              </button>
            )}
          </div>
        </div>
      ) : (
        /* TEST RESULTS & REPORT */
        <div className="space-y-8">
          {/* Certificate Banner */}
          <div className={`p-8 sm:p-12 rounded-3xl border shadow-sm ${
            isPassed ? 'bg-white border-emerald-300' : 'bg-white border-amber-300'
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-stone-200">
              <div>
                <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider ${
                  isPassed ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-amber-50 text-amber-900 border border-amber-200'
                }`}>
                  {isPassed ? 'Examen Aprobado (Nivel A2 Consolidado)' : 'En Progreso (Revisión Recomendada)'}
                </span>
                <h3 className="text-3xl font-serif font-bold text-stone-900 mt-2">
                  Calificación: {scorePercent}% ({correctCount}/{questions.length} Aciertos)
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  {isPassed
                    ? '¡Enhorabuena! Tienes las bases estructurales de A2 bien asimiladas para comenzar a preparar el salto hacia B1.'
                    : 'Has demostrado buen avance, pero conviene repasar los casos gramaticales y los falsos amigos antes de dar el salto.'}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center gap-2 cursor-pointer shadow-xs self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Repetir Test</span>
              </button>
            </div>

            {/* Granular Breakdown per question */}
            <div className="mt-8 space-y-4">
              <h4 className="text-sm font-mono font-bold text-stone-700 uppercase tracking-widest">
                Desglose Analítico por Reactivo:
              </h4>

              {questions.map((q, idx) => {
                const userChoice = answers[q.id];
                const isCorrect = userChoice === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border text-xs ${
                      isCorrect ? 'bg-stone-50 border-stone-200' : 'bg-rose-50/60 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-stone-400">Pregunta {idx + 1} • {q.domain}</span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 font-mono font-bold text-emerald-700">
                          <Check className="w-3.5 h-3.5" /> Correcto
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 font-mono font-bold text-rose-700">
                          <XCircle className="w-3.5 h-3.5" /> Error
                        </span>
                      )}
                    </div>

                    <p className="font-serif font-bold text-sm text-stone-900 mb-1">
                      {q.prompt}
                    </p>

                    <div className="mt-2 text-stone-700 leading-relaxed font-sans">
                      <strong className="text-stone-900 font-serif">Fundamento: </strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
