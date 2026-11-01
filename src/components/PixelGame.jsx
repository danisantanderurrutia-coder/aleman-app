import React, { useState } from 'react';
import { pixelPuzzles } from '../data/pixelPuzzles';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  Sparkles, Volume2, Check, X, RotateCcw, Palette, Trophy, 
  Lightbulb, ArrowRight, ArrowLeft, Flame, CheckCircle2, ShieldAlert 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export { pixelPuzzles };

export default function PixelGame({ progress, setProgress }) {
  // Modes: 'dual' (Paso 1: Objeto + Paso 2: Artículo) | 'blitz' (Ráfaga Der Die Das) | 'canvas' (Lienzo Libre)
  const [activeTab, setActiveTab] = useState('dual');
  const [puzzleIdx, setPuzzleIdx] = useState(0);

  // Dual Challenge State
  // stage: 'word' (adivinar sustantivo) | 'article' (adivinar der/die/das) | 'finished' (resuelto)
  const [stage, setStage] = useState('word');
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [wordCorrect, setWordCorrect] = useState(false);
  const [articleCorrect, setArticleCorrect] = useState(false);

  // Blitz Streak State
  const [blitzStreak, setBlitzStreak] = useState(0);
  const [blitzFeedback, setBlitzFeedback] = useState(null); // { correct: boolean, expected: string }

  // Track completed puzzles in this session
  const [completedPuzzles, setCompletedPuzzles] = useState([]);

  // Creative Drawing Canvas state
  const [customCanvas, setCustomCanvas] = useState(
    Array(8).fill(null).map(() => Array(8).fill(0))
  );
  const [selectedColorIdx, setSelectedColorIdx] = useState(1);
  const drawingPalette = ['#ffffff', '#1e293b', '#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#7c3aed', '#ec4899'];

  const puzzle = pixelPuzzles[puzzleIdx] || pixelPuzzles[0];
  const fullCorrectName = `${puzzle.article} ${puzzle.word}`;

  // Word choices: correct word + distractors (sorted without revealing article)
  const wordOptions = React.useMemo(() => {
    return [puzzle.word, ...puzzle.distractors].sort();
  }, [puzzle]);

  // Handle Word Selection in Dual Mode
  const handleSelectWord = (chosenWord) => {
    if (stage !== 'word') return;
    setSelectedWord(chosenWord);

    const isMatch = chosenWord === puzzle.word;
    setWordCorrect(isMatch);

    if (isMatch) {
      addXP(5);
      setStage('article');
    } else {
      // Wrong word
      setStage('article'); // Still allow seeing or trying article with feedback
    }
  };

  // Handle Article Selection (Der, Die, Das)
  const handleSelectArticle = (chosenArticle) => {
    if (stage !== 'article') return;
    setSelectedArticle(chosenArticle);

    const isMatch = chosenArticle === puzzle.article;
    setArticleCorrect(isMatch);
    setStage('finished');

    speechService.speak(fullCorrectName);

    if (isMatch && wordCorrect) {
      addXP(15);
      if (!completedPuzzles.includes(puzzle.id)) {
        setCompletedPuzzles(prev => [...prev, puzzle.id]);
      }
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else if (isMatch) {
      addXP(10);
    }
  };

  // Handle Blitz Article Choice (Instant 1-Click Game)
  const handleBlitzChoice = (chosenArticle) => {
    if (blitzFeedback) return;

    const isMatch = chosenArticle === puzzle.article;
    speechService.speak(fullCorrectName);

    if (isMatch) {
      setBlitzStreak(prev => prev + 1);
      setBlitzFeedback({ correct: true, expected: puzzle.article });
      addXP(10);
      if (!completedPuzzles.includes(puzzle.id)) {
        setCompletedPuzzles(prev => [...prev, puzzle.id]);
      }
    } else {
      setBlitzStreak(0);
      setBlitzFeedback({ correct: false, expected: puzzle.article });
    }

    // Auto advance after 1.2s in Blitz
    setTimeout(() => {
      setPuzzleIdx((prev) => (prev + 1) % pixelPuzzles.length);
      setBlitzFeedback(null);
    }, 1300);
  };

  // Navigation
  const handleNextPuzzle = () => {
    setPuzzleIdx((prev) => (prev + 1) % pixelPuzzles.length);
    resetPuzzleState();
  };

  const handlePrevPuzzle = () => {
    setPuzzleIdx((prev) => (prev - 1 + pixelPuzzles.length) % pixelPuzzles.length);
    resetPuzzleState();
  };

  const resetPuzzleState = () => {
    setStage('word');
    setSelectedWord(null);
    setSelectedArticle(null);
    setWordCorrect(false);
    setArticleCorrect(false);
    setBlitzFeedback(null);
  };

  const handlePixelClick = (r, c) => {
    const updated = customCanvas.map((row, ri) =>
      row.map((val, ci) => (ri === r && ci === c ? selectedColorIdx : val))
    );
    setCustomCanvas(updated);
  };

  const handleResetCanvas = () => {
    setCustomCanvas(Array(8).fill(null).map(() => Array(8).fill(0)));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest block mb-1">
            Ludificación Visual 8×8 & Mnemotecnia de Género
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Pictogramas 8×8 & Reto de Artículos
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            20 pictogramas diseñados con trampas de género del español. Identifica el objeto y vence el olvido de <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">der</code>, <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">die</code> y <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">das</code>.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-stone-100 border border-stone-200 self-start">
          <button
            onClick={() => { setActiveTab('dual'); resetPuzzleState(); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'dual' ? 'bg-stone-900 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Desafío 2 Fases
          </button>
          <button
            onClick={() => { setActiveTab('blitz'); resetPuzzleState(); }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'blitz' ? 'bg-stone-900 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Ráfaga Der•Die•Das</span>
          </button>
          <button
            onClick={() => setActiveTab('canvas')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'canvas' ? 'bg-stone-900 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Lienzo 8×8
          </button>
        </div>
      </div>

      {/* 20-Sprite Selector Carousel */}
      {activeTab !== 'canvas' && (
        <div className="mb-6 p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider">
                Catálogo de Pictogramas:
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ✓ {completedPuzzles.length} de {pixelPuzzles.length} Dominados
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevPuzzle}
                className="p-1 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 cursor-pointer"
                title="Pictograma anterior"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextPuzzle}
                className="p-1 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 cursor-pointer"
                title="Siguiente pictograma"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {pixelPuzzles.map((p, idx) => {
              const isDone = completedPuzzles.includes(p.id);
              const isSelected = idx === puzzleIdx;
              return (
                <button
                  key={p.id}
                  onClick={() => { setPuzzleIdx(idx); resetPuzzleState(); }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : isDone
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                  }`}
                  title={`${idx + 1}: ${p.word} (${p.translation}) ${isDone ? '✓' : ''}`}
                >
                  <span>{idx + 1}</span>
                  {isDone && <span className="text-[10px]">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. MODO DESAFÍO EN 2 FASES (OBJETO + ARTÍCULO OBLIGATORIO) */}
      {/* ========================================================================= */}
      {activeTab === 'dual' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: 8x8 Pixel Grid Display */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="p-8 rounded-3xl bg-white border border-stone-300 shadow-sm inline-block w-full text-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto grid grid-cols-8 grid-rows-8 gap-1.5 bg-stone-100 p-3 rounded-2xl border border-stone-200 shadow-inner">
                {puzzle.grid.map((row, rIdx) =>
                  row.map((cellVal, cIdx) => {
                    const color = puzzle.palette[cellVal] || 'transparent';
                    return (
                      <div
                        key={`${rIdx}-${cIdx}`}
                        className="rounded-xs transition-colors duration-150 shadow-2xs"
                        style={{ backgroundColor: color }}
                      />
                    );
                  })
                )}
              </div>
              <div className="text-center mt-4 text-[11px] font-mono text-stone-400">
                Matriz de Píxeles 8×8 • Enigma {puzzleIdx + 1} de {pixelPuzzles.length}
              </div>
            </div>
          </div>

          {/* Right: Two-Stage Gameplay Panel */}
          <div className="md:col-span-7 space-y-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs">
              
              {/* Progress Indicator within puzzle */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase ${
                  stage === 'word' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                }`}>
                  {stage === 'word' ? 'Paso 1: ¿Qué objeto es?' : 'Paso 2: ¡El Reto del Artículo!'}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  {stage === 'word' ? 'Fase de Identificación' : 'Fase de Género Gramatical'}
                </span>
              </div>

              {/* FASE 1: Adivinar la palabra alemana */}
              {stage === 'word' && (
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    ¿Qué sustantivo representa este pictograma?
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">
                    Cuidado con las palabras parecidas: ¡observa bien los detalles visuales de la matriz!
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {wordOptions.map((w) => (
                      <button
                        key={w}
                        onClick={() => handleSelectWord(w)}
                        className="p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 text-stone-800 font-serif font-bold text-base border border-stone-200 hover:border-stone-400 transition-all cursor-pointer text-center shadow-2xs hover:scale-101"
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FASE 2: Adivinar el Artículo (Der, Die, Das) */}
              {(stage === 'article' || stage === 'finished') && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-stone-400 uppercase">Sustantivo identificado:</span>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 mt-0.5">
                        {wordCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1.5">
                            <Check className="w-5 h-5 text-emerald-600" />
                            <span>{puzzle.word} ({puzzle.translation})</span>
                          </span>
                        ) : (
                          <span className="text-stone-700">
                            {puzzle.word} ({puzzle.translation})
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
                    <p className="font-serif font-semibold text-sm">
                      Ahora la prueba de fuego: ¿Cuál es su género gramatical exacto?
                    </p>
                    <p className="text-[11px] text-amber-900 mt-0.5">
                      Recuerda que muchos sustantivos en alemán tienen su género invertido respecto al español.
                    </p>
                  </div>

                  {/* The 3 Big Article Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* DER */}
                    <button
                      onClick={() => handleSelectArticle('der')}
                      disabled={stage === 'finished'}
                      className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        stage === 'finished'
                          ? puzzle.article === 'der'
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-102 font-bold'
                            : selectedArticle === 'der'
                            ? 'bg-rose-50 border-rose-300 text-rose-700 line-through opacity-70'
                            : 'bg-stone-50 border-stone-200 text-stone-400 opacity-40'
                          : 'bg-blue-50/80 hover:bg-blue-100 border-blue-300 text-blue-950 hover:scale-102 shadow-2xs'
                      }`}
                    >
                      <span className="text-xl font-mono font-extrabold block">DER</span>
                      <span className="text-[10px] font-sans opacity-80">Masculino</span>
                    </button>

                    {/* DIE */}
                    <button
                      onClick={() => handleSelectArticle('die')}
                      disabled={stage === 'finished'}
                      className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        stage === 'finished'
                          ? puzzle.article === 'die'
                            ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-102 font-bold'
                            : selectedArticle === 'die'
                            ? 'bg-rose-50 border-rose-300 text-rose-700 line-through opacity-70'
                            : 'bg-stone-50 border-stone-200 text-stone-400 opacity-40'
                          : 'bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-950 hover:scale-102 shadow-2xs'
                      }`}
                    >
                      <span className="text-xl font-mono font-extrabold block">DIE</span>
                      <span className="text-[10px] font-sans opacity-80">Femenino</span>
                    </button>

                    {/* DAS */}
                    <button
                      onClick={() => handleSelectArticle('das')}
                      disabled={stage === 'finished'}
                      className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        stage === 'finished'
                          ? puzzle.article === 'das'
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-102 font-bold'
                            : selectedArticle === 'das'
                            ? 'bg-rose-50 border-rose-300 text-rose-700 line-through opacity-70'
                            : 'bg-stone-50 border-stone-200 text-stone-400 opacity-40'
                          : 'bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-950 hover:scale-102 shadow-2xs'
                      }`}
                    >
                      <span className="text-xl font-mono font-extrabold block">DAS</span>
                      <span className="text-[10px] font-sans opacity-80">Neutro</span>
                    </button>
                  </div>
                </div>
              )}

              {/* FASE 3: Feedback Filológico y Mnemotecnia */}
              {stage === 'finished' && (
                <div className="mt-6 pt-5 border-t border-stone-100 space-y-4">
                  <div className={`p-4 rounded-2xl border ${
                    articleCorrect && wordCorrect
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        {articleCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                        )}
                        <span className="font-serif font-bold text-base">
                          {fullCorrectName} ({puzzle.translation})
                        </span>
                      </div>
                      <button
                        onClick={() => speechService.speak(fullCorrectName)}
                        className="p-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 cursor-pointer shadow-2xs"
                        title="Escuchar pronunciación alemana"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Mnemonic and Gender Trap Note */}
                    <div className="mt-3 space-y-1.5 text-xs">
                      {puzzle.genderTrap && (
                        <p className="font-sans text-amber-900 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60 leading-relaxed">
                          ⚠️ {puzzle.genderTrap}
                        </p>
                      )}
                      <p className="font-sans text-stone-600 bg-white p-2.5 rounded-xl border border-stone-200 leading-relaxed">
                        💡 {puzzle.mnemonic}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-mono text-stone-500">
                      {articleCorrect && wordCorrect ? '¡Combo Perfecto! (+20 XP)' : '¡Sigue entrenando!'}
                    </span>
                    <button
                      onClick={handleNextPuzzle}
                      className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-all hover:scale-102"
                    >
                      <span>Siguiente Pictograma ({puzzleIdx + 1}/{pixelPuzzles.length})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. MODO BLITZ: RÁFAGA RELÁMPAGO DER • DIE • DAS */}
      {/* ========================================================================= */}
      {activeTab === 'blitz' && (
        <div className="max-w-xl mx-auto space-y-6">
          {/* Blitz Streak Bar */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-600" />
              <span>Racha de Aciertos Seguidos:</span>
              <span className="text-base font-bold text-amber-900">{blitzStreak}</span>
            </div>
            <span className="text-[11px] text-amber-800">Velocidad & Memoria Muscular</span>
          </div>

          {/* Central Sprite Box */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
            <div className="w-48 h-48 mx-auto grid grid-cols-8 grid-rows-8 gap-1.5 bg-stone-100 p-3 rounded-2xl border border-stone-200 shadow-inner mb-6">
              {puzzle.grid.map((row, rIdx) =>
                row.map((cellVal, cIdx) => (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className="rounded-xs transition-colors duration-150 shadow-2xs"
                    style={{ backgroundColor: puzzle.palette[cellVal] || 'transparent' }}
                  />
                ))
              )}
            </div>

            <div className="text-3xl font-serif font-bold text-stone-900 mb-2">
              <span className="text-amber-600 underline mr-2">___</span> {puzzle.word}
            </div>
            <p className="text-xs text-stone-500 font-sans mb-6">
              "{puzzle.translation}"
            </p>

            {/* 3 Quick Blitz Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleBlitzChoice('der')}
                className="py-4 rounded-2xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-950 font-mono font-extrabold text-lg border border-blue-300 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                DER
              </button>
              <button
                onClick={() => handleBlitzChoice('die')}
                className="py-4 rounded-2xl bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-950 font-mono font-extrabold text-lg border border-rose-300 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                DIE
              </button>
              <button
                onClick={() => handleBlitzChoice('das')}
                className="py-4 rounded-2xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-950 font-mono font-extrabold text-lg border border-emerald-300 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                DAS
              </button>
            </div>

            {/* Instant Blitz Feedback */}
            {blitzFeedback && (
              <div className={`mt-5 p-3 rounded-xl border text-xs font-mono font-bold animate-in fade-in ${
                blitzFeedback.correct
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}>
                {blitzFeedback.correct
                  ? `¡Correcto! ${fullCorrectName} (+10 XP)`
                  : `¡Error! El artículo correcto es "${puzzle.article.toUpperCase()}" (${fullCorrectName})`}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MODO LIENZO LIBRE 8×8 */}
      {/* ========================================================================= */}
      {activeTab === 'canvas' && (
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Lienzo de Píxeles 8×8: Crea tu Mnemotecnia Visual
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Dibuja un icono para fijar una palabra que te cueste recordar. El acto motor de pintar activa la corteza parietal.
              </p>
            </div>

            <button
              onClick={handleResetCanvas}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2 cursor-pointer border border-stone-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar lienzo</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* 8x8 Canvas */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 grid grid-cols-8 grid-rows-8 gap-1.5 bg-stone-100 p-3 rounded-2xl border-2 border-stone-300 shadow-inner">
              {customCanvas.map((row, r) =>
                row.map((colorIdx, c) => (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handlePixelClick(r, c)}
                    className="rounded-xs transition-colors cursor-pointer border border-stone-200/50 hover:opacity-80"
                    style={{ backgroundColor: drawingPalette[colorIdx] }}
                  />
                ))
              )}
            </div>

            {/* Color Palette */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-stone-600 uppercase tracking-widest block">
                Paleta Cromática:
              </span>
              <div className="grid grid-cols-4 gap-2">
                {drawingPalette.map((col, idx) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColorIdx(idx)}
                    className={`w-9 h-9 rounded-xl border-2 transition-transform cursor-pointer ${
                      selectedColorIdx === idx ? 'scale-110 border-stone-900 shadow-sm' : 'border-stone-300'
                    }`}
                    style={{ backgroundColor: col }}
                    title={`Color ${idx + 1}`}
                  />
                ))}
              </div>
              <p className="text-[11px] text-stone-400 max-w-xs mt-2">
                Haz clic en cualquier celda para pintar píxel a píxel.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
