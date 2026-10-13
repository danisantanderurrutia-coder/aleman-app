import React, { useState } from 'react';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { Sparkles, Volume2, Check, X, RotateCcw, Palette, Trophy, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

// Definición de pictogramas 8x8 con nanobanana pixel-matrix
export const pixelPuzzles = [
  {
    id: 'px_haus',
    word: 'Haus',
    article: 'das',
    translation: 'la casa',
    // 8x8 matrix: 0=transparente, 1=techo teja (#b91c1c), 2=pared (#f5f5f4), 3=puerta (#78350f), 4=ventana (#38bdf8)
    palette: ['transparent', '#b91c1c', '#e7e5e4', '#78350f', '#38bdf8'],
    grid: [
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 2, 4, 2, 2, 4, 2, 0],
      [0, 2, 4, 2, 2, 4, 2, 0],
      [0, 2, 2, 3, 3, 2, 2, 0],
      [0, 2, 2, 3, 3, 2, 2, 0],
    ],
    distractors: ['das Auto', 'der Baum', 'die Stadt']
  },
  {
    id: 'px_apfel',
    word: 'Apfel',
    article: 'der',
    translation: 'la manzana',
    // 0=transp, 1=tallo (#78350f), 2=hoja (#15803d), 3=manzana (#dc2626), 4=brillo (#fca5a5)
    palette: ['transparent', '#78350f', '#15803d', '#dc2626', '#fca5a5'],
    grid: [
      [0, 0, 0, 0, 1, 2, 2, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 3, 3, 3, 3, 0, 0],
      [0, 3, 4, 3, 3, 3, 3, 0],
      [0, 3, 3, 3, 3, 3, 3, 0],
      [0, 3, 3, 3, 3, 3, 3, 0],
      [0, 0, 3, 3, 3, 3, 0, 0],
      [0, 0, 0, 3, 3, 0, 0, 0],
    ],
    distractors: ['die Birne', 'das Brot', 'der Käse']
  },
  {
    id: 'px_auto',
    word: 'Auto',
    article: 'das',
    translation: 'el coche / automóvil',
    // 0=transp, 1=carrocería (#2563eb), 2=cristal (#bae6fd), 3=rueda (#1c1917), 4=llanta (#d6d3d1)
    palette: ['transparent', '#1d4ed8', '#bae6fd', '#1c1917', '#e2e8f0'],
    grid: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 3, 3, 0, 0, 3, 3, 0],
      [0, 3, 4, 0, 0, 3, 4, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    distractors: ['der Zug', 'das Schiff', 'das Fahrrad']
  },
  {
    id: 'px_baum',
    word: 'Baum',
    article: 'der',
    translation: 'el árbol',
    // 0=transp, 1=copa hojas (#15803d), 2=hojas claras (#22c55e), 3=tronco (#78350f)
    palette: ['transparent', '#15803d', '#22c55e', '#78350f'],
    grid: [
      [0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 2, 1, 2, 1, 0, 0],
      [1, 2, 1, 1, 1, 2, 1, 0],
      [1, 1, 1, 2, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 3, 3, 0, 0, 0],
      [0, 0, 0, 3, 3, 0, 0, 0],
      [0, 0, 3, 3, 3, 3, 0, 0],
    ],
    distractors: ['die Blume', 'das Haus', 'der Wald']
  },
  {
    id: 'px_herz',
    word: 'Herz',
    article: 'das',
    translation: 'el corazón',
    palette: ['transparent', '#e11d48', '#fda4af'],
    grid: [
      [0, 1, 1, 0, 0, 1, 1, 0],
      [1, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    distractors: ['die Hand', 'der Kopf', 'das Auge']
  }
];

export default function PixelGame({ progress, setProgress }) {
  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // Creative Drawing Mode state
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'canvas'
  const [customCanvas, setCustomCanvas] = useState(
    Array(8).fill(null).map(() => Array(8).fill(0))
  );
  const [selectedColorIdx, setSelectedColorIdx] = useState(1);
  const drawingPalette = ['#ffffff', '#1e293b', '#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#7c3aed', '#ec4899'];

  const puzzle = pixelPuzzles[puzzleIdx] || pixelPuzzles[0];
  const correctAnswer = `${puzzle.article} ${puzzle.word}`;

  // Prepare 4 options: the correct one + distractors
  const allOptions = [correctAnswer, ...puzzle.distractors].sort();

  const handleSelect = (option) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === correctAnswer;
    speechService.speak(correctAnswer);

    if (isCorrect) {
      setScore(prev => prev + 1);
      addXP(10);
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNext = () => {
    setPuzzleIdx((prev) => (prev + 1) % pixelPuzzles.length);
    setSelectedAnswer(null);
    setIsAnswered(false);
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
            Ludificación Visual 8×8 & Codificación Dual
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Ludificación Visual 8×8
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Asociación mnemotécnica de imagen y concepto: el cerebro retiene un 65% más de vocabulario cuando se conecta a un pictograma.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-100 border border-stone-200 self-start">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'quiz' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Adivina el Píxel
          </button>
          <button
            onClick={() => setActiveTab('canvas')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'canvas' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Lienzo Libre 8×8
          </button>
        </div>
      </div>

      {activeTab === 'quiz' ? (
        /* QUIZ MODE */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: 8x8 Grid Display */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="p-8 rounded-3xl bg-white border border-stone-300 shadow-sm inline-block">
              <div className="w-56 h-56 sm:w-64 sm:h-64 grid grid-cols-8 grid-rows-8 gap-1.5 bg-stone-100 p-3 rounded-2xl border border-stone-200">
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
                Matriz de Píxeles 8×8
              </div>
            </div>
          </div>

          {/* Right: Question and Options */}
          <div className="md:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs">
              <span className="text-[11px] font-mono font-semibold text-stone-400 uppercase tracking-widest block mb-1">
                Enigma Visual {puzzleIdx + 1} de {pixelPuzzles.length}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                ¿Qué sustantivo representa este pictograma?
              </h3>

              <div className="space-y-3">
                {allOptions.map((opt) => {
                  const isChosen = selectedAnswer === opt;
                  const isRight = opt === correctAnswer;

                  let style = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';
                  if (isAnswered) {
                    if (isRight) {
                      style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                    } else if (isChosen && !isRight) {
                      style = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                    } else {
                      style = 'bg-stone-50/50 border-stone-200 text-stone-400';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border text-base font-serif transition-all flex items-center justify-between cursor-pointer ${style}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && isRight && <Check className="w-5 h-5 text-emerald-600" />}
                      {isAnswered && isChosen && !isRight && <X className="w-5 h-5 text-rose-600" />}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-serif font-bold text-stone-900 block text-sm">
                      {correctAnswer} = {puzzle.translation}
                    </span>
                    <span className="text-stone-500 font-mono">Pronunciación nativa reproducida</span>
                  </div>
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs cursor-pointer shadow-xs"
                  >
                    Siguiente dibujo →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* CREATIVE CANVAS MODE */
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
