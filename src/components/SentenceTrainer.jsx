import React, { useState, useEffect } from 'react';
import { sentencePuzzles } from '../data/sentenceBuilder';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { Puzzle, Check, X, RotateCcw, Volume2, ArrowRight, Bookmark, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SentenceTrainer({ progress, setProgress, setActiveTab, onOpenCalendar, onAddConsecutiveDay }) {
  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [shuffledTokens, setShuffledTokens] = useState([]);
  const [userTokens, setUserTokens] = useState([]);
  const [status, setStatus] = useState('idle');

  const currentPuzzle = sentencePuzzles[puzzleIdx] || sentencePuzzles[0];

  const todayDate = new Date().toISOString().split('T')[0];
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
      
      const todayStr = new Date().toISOString().split('T')[0];
      const questsKey = `quests_${todayStr}`;
      const currentQuests = progress[questsKey] || {};
      const updatedQuests = {
        ...currentQuests,
        grammarDone: true,
        grammarDone_awarded: true
      };

      const completedList = progress.completedSentences || [];
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

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
            <Bookmark className="w-3.5 h-3.5 text-stone-700" />
            <span>Satzbau • Estructura Morfosintáctica</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Sintaxis y Orden Oracional
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Ensamblaje guiado para consolidar la posición del verbo y las cláusulas subordinadas.
          </p>
        </div>

        <span className="text-xs font-mono text-stone-600 px-3.5 py-1.5 rounded-xl bg-white border border-stone-200 shadow-2xs self-start">
          Cláusula {puzzleIdx + 1} de {sentencePuzzles.length}
        </span>
      </div>

      {/* Target Sentence Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <span className="px-3 py-1 text-[11px] font-mono font-bold rounded-md bg-stone-100 text-stone-700 border border-stone-300 uppercase">
          {currentPuzzle.category}
        </span>

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
              <span>Siguiente Cláusula</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
