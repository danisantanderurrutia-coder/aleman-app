import React, { useState, useEffect } from 'react';
import { sentencePuzzles } from '../data/sentenceBuilder';
import { speechService } from '../utils/speech';
import { addXP, saveProgress, getTodayDate } from '../utils/storage';
import { Puzzle, Check, X, RotateCcw, Volume2, ArrowRight, ArrowLeft, Bookmark, Lightbulb, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SentenceTrainer({ progress, setProgress, setActiveTab, onOpenCalendar, onAddConsecutiveDay }) {
  const completedList = progress.completedSentences || [];
  
  // Iniciar en la primera oración no completada por el usuario (o en la 0 si ya completó todas)
  const firstIncompleteIdx = sentencePuzzles.findIndex(p => !completedList.includes(p.id));
  const [puzzleIdx, setPuzzleIdx] = useState(firstIncompleteIdx !== -1 ? firstIncompleteIdx : 0);
  
  const [shuffledTokens, setShuffledTokens] = useState([]);
  const [userTokens, setUserTokens] = useState([]);
  const [status, setStatus] = useState('idle');

  const currentPuzzle = sentencePuzzles[puzzleIdx] || sentencePuzzles[0];
  const isCurrentCompleted = completedList.includes(currentPuzzle.id);

  const todayDate = getTodayDate();
  const questsState = progress[`quests_${todayDate}`] || {};
  const allQuestsDone = !!(questsState.focusDone && questsState.vocabDone && (questsState.grammarDone || status === 'correct'));

  useEffect(() => {
    resetPuzzle();
  }, [puzzleIdx]);

  const resetPuzzle = () => {
    const rawTokens = [...currentPuzzle.tokens];
    const shuffled = rawTokens
      .map((val, idx) => ({ id: `${idx}-${val}`, text: val }))
      .sort(() => Math.random() - 0.5);

    setShuffledTokens(shuffled);
    setUserTokens([]);
    setStatus('idle');
  };

  const handlePickToken = (tokenObj) => {
    if (status === 'correct') return;
    setShuffledTokens(shuffledTokens.filter(t => t.id !== tokenObj.id));
    setUserTokens([...userTokens, tokenObj]);
    setStatus('idle');
  };

  const handleRemoveToken = (tokenObj) => {
    if (status === 'correct') return;
    setUserTokens(userTokens.filter(t => t.id !== tokenObj.id));
    setShuffledTokens([...shuffledTokens, tokenObj]);
    setStatus('idle');
  };

  const handleCheck = () => {
    const userSentence = userTokens.map(t => t.text).join(' ');
    const targetSentence = currentPuzzle.tokens.join(' ');

    if (userSentence === targetSentence) {
      setStatus('correct');
      speechService.speak(targetSentence);
      
      const todayStr = getTodayDate();
      const questsKey = `quests_${todayStr}`;
      const currentQuests = progress[questsKey] || {};
      const day = ((progress.curriculumDay || 1) - 1) % 7 + 1;
      const isSentencesFocus = day === 5;
      const updatedQuests = {
        ...currentQuests,
        grammarDone: true,
        grammarDone_awarded: true,
        ...(isSentencesFocus ? { focusDone: true, focusDone_awarded: true } : {})
      };

      if (!completedList.includes(currentPuzzle.id)) {
        const newCompleted = [...completedList, currentPuzzle.id];
        const updated = saveProgress({ 
          completedSentences: newCompleted,
          [questsKey]: updatedQuests
        });
        addXP(15);
        setProgress(updated);
      } else {
        const updated = saveProgress({ [questsKey]: updatedQuests });
        setProgress(updated);
      }

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      setStatus('wrong');
    }
  };

  const handleNext = () => {
    setPuzzleIdx((prev) => (prev + 1) % sentencePuzzles.length);
  };

  const handlePrev = () => {
    setPuzzleIdx((prev) => (prev - 1 + sentencePuzzles.length) % sentencePuzzles.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
            <Bookmark className="w-3.5 h-3.5 text-stone-700" />
            <span>Satzbau • Estructura Morfosintáctica</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Sintaxis y Orden Oracional
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Ensamblaje guiado para consolidar la posición del verbo, cláusulas subordinadas y el doble objeto.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            ✓ {completedList.length} de {sentencePuzzles.length} Superadas
          </span>
        </div>
      </div>

      {/* Selector de Oraciones (Pills de navegación rápida para no repetir siempre la misma) */}
      <div className="mb-6 p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider">
            Selecciona cualquier reto ({sentencePuzzles.length} disponibles):
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 cursor-pointer"
              title="Oración anterior"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 cursor-pointer"
              title="Siguiente oración"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {sentencePuzzles.map((p, idx) => {
            const isCompleted = completedList.includes(p.id);
            const isCurrent = idx === puzzleIdx;
            return (
              <button
                key={p.id}
                onClick={() => setPuzzleIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 border ${
                  isCurrent
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
                title={`Reto ${idx + 1}: ${p.category} ${isCompleted ? '(Superado ✓)' : ''}`}
              >
                <span>{idx + 1}</span>
                {isCompleted && <span className="text-[10px]">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Sentence Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <div className="flex items-center justify-between gap-2">
          <span className="px-3 py-1 text-[11px] font-mono font-bold rounded-md bg-stone-100 text-stone-700 border border-stone-300 uppercase">
            Reto {puzzleIdx + 1} • {currentPuzzle.category}
          </span>
          {isCurrentCompleted && (
            <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Ya Superada</span>
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-4 mb-2">
          "{currentPuzzle.translation}"
        </h3>

        <div className="text-xs text-stone-500 flex items-center gap-2 mt-3 pt-3 border-t border-stone-100">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-sans leading-relaxed">{currentPuzzle.hint}</span>
        </div>
      </div>

      {/* Assembled Sentence Dropzone */}
      <div className={`p-8 rounded-3xl border min-h-[140px] flex flex-wrap items-center gap-2.5 mb-8 transition-all ${
        status === 'correct'
          ? 'bg-emerald-50/70 border-emerald-300'
          : status === 'wrong'
          ? 'bg-rose-50/70 border-rose-300'
          : 'bg-stone-50/80 border-stone-300 border-dashed'
      }`}>
        {userTokens.length === 0 ? (
          <p className="text-xs font-mono text-stone-400 italic select-none">
            Haz clic en los constituyentes sintácticos inferiores para ordenar la oración aquí...
          </p>
        ) : (
          userTokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handleRemoveToken(token)}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-serif font-semibold text-base border border-stone-300 transition-all cursor-pointer shadow-2xs"
            >
              {token.text}
            </button>
          ))
        )}
      </div>

      {/* Word Bank */}
      <div className="p-8 rounded-3xl bg-white border border-stone-200 mb-8">
        <p className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest mb-4">
          Constituyentes disponibles:
        </p>
        <div className="flex flex-wrap gap-2.5 min-h-[48px]">
          {shuffledTokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handlePickToken(token)}
              className="px-4 py-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 font-serif font-medium text-base border border-stone-200 transition-all cursor-pointer shadow-2xs hover:border-stone-400"
            >
              {token.text}
            </button>
          ))}
        </div>
      </div>

      {/* Evaluation Banner */}
      {status === 'correct' && (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <span className="font-serif font-bold text-sm block">Orden sintáctico impecable (+15 XP)</span>
              <span className="text-stone-700 mt-0.5 block">{currentPuzzle.grammarFocus}</span>
            </div>
          </div>
          <button
            onClick={() => speechService.speak(currentPuzzle.tokens.join(' '))}
            className="p-2 rounded-lg bg-white hover:bg-stone-100 text-stone-700 cursor-pointer border border-stone-200 shadow-2xs shrink-0"
            title="Escuchar locución completa"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      )}

      {status === 'wrong' && (
        <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-xs mb-8 flex items-center gap-3">
          <X className="w-5 h-5 text-rose-700 shrink-0" />
          <span>El orden sintáctico no concuerda. Comprueba la posición del verbo conjugado según el tipo de oración.</span>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={resetPuzzle}
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 text-xs font-mono font-medium border border-stone-200 flex items-center gap-2 cursor-pointer shadow-2xs w-full sm:w-auto justify-center"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restablecer</span>
        </button>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
          {status === 'correct' && (
            allQuestsDone ? (
              <button
                onClick={onAddConsecutiveDay}
                className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
              >
                <span>Añadir día consecutivo 📅</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab && setActiveTab('checkin')}
                className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
              >
                <span>Continuar con el challenge diario →</span>
              </button>
            )
          )}

          {status !== 'correct' ? (
            <button
              onClick={handleCheck}
              disabled={userTokens.length === 0}
              className={`px-7 py-3 rounded-xl font-medium text-xs transition-all cursor-pointer ${
                userTokens.length > 0
                  ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              Verificar Sintaxis
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl font-medium text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Siguiente Cláusula ({puzzleIdx + 1}/{sentencePuzzles.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
