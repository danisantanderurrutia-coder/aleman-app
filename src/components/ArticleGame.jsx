import React, { useState } from 'react';
import { vocabularyList } from '../data/vocabulary';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { Trophy, Flame, Volume2, Sparkles, Check, X, Bookmark, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ArticleGame({ progress, setProgress }) {
  const wordsWithArticles = vocabularyList.filter(v => ['der', 'die', 'das'].includes(v.article?.toLowerCase()));

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastAnswer, setLastAnswer] = useState(null);
  const [highScore, setHighScore] = useState(progress.articleGameHighScore || 0);

  const currentWord = wordsWithArticles[currentWordIndex];

  const nextRandomWord = () => {
    let nextIdx = Math.floor(Math.random() * wordsWithArticles.length);
    if (nextIdx === currentWordIndex && wordsWithArticles.length > 1) {
      nextIdx = (nextIdx + 1) % wordsWithArticles.length;
    }
    setCurrentWordIndex(nextIdx);
    setLastAnswer(null);
  };

  const handleGuess = (articleChoice) => {
    if (!currentWord || lastAnswer) return;

    const isCorrect = articleChoice.toLowerCase() === currentWord.article.toLowerCase();
    speechService.speak(`${currentWord.article} ${currentWord.word}`);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      addXP(5);

      if (newStreak > highScore) {
        setHighScore(newStreak);
        const updated = saveProgress({ articleGameHighScore: newStreak });
        setProgress(updated);
      }

      if (newStreak % 5 === 0) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      }

      setLastAnswer({
        isCorrect: true,
        chosen: articleChoice,
        correctArticle: currentWord.article,
        word: currentWord.word,
        translation: currentWord.translation,
        tips: currentWord.tips,
      });
    } else {
      setStreak(0);
      setLastAnswer({
        isCorrect: false,
        chosen: articleChoice,
        correctArticle: currentWord.article,
        word: currentWord.word,
        translation: currentWord.translation,
        tips: currentWord.tips,
      });
    }
  };

  const articleRules = [
    { gender: 'DIE • Femininum', rule: 'Terminaciones morfológicas: -ung, -heit, -keit, -schaft, -tät, -tion, -ik, -ie.' },
    { gender: 'DAS • Neutrum', rule: 'Diminutivos en -chen y -lein; infinitivos sustantivados (das Essen, das Lernen); prefijo Ge- (das Gebäude).' },
    { gender: 'DER • Maskulinum', rule: 'Sufijos de agente: -or, -er, -ling, -ismus; días de la semana, meses y estaciones del año.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
            <Bookmark className="w-3.5 h-3.5 text-stone-700" />
            <span>Genusbestimmung • Determinación del Género Gramatical</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Der • Die • Das
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Automatización morfológica y auditiva del artículo determinado.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-800 text-xs font-mono shadow-2xs">
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Racha: {streak}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-800 text-xs font-mono shadow-2xs">
            <Trophy className="w-4 h-4 text-stone-600" />
            <span>Récord: {highScore}</span>
          </div>
        </div>
      </div>

      {/* Main Play Area */}
      <div className="p-10 sm:p-14 rounded-3xl bg-white border border-stone-200/90 shadow-sm text-center mb-10">
        <span className="text-xs font-mono font-semibold text-stone-400 uppercase tracking-widest">
          Asignación de Género Nominal
        </span>

        {/* Word Display */}
        <div className="my-8">
          <h3 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
            {currentWord?.word}
          </h3>
          <p className="text-sm font-serif italic text-stone-500 mt-2">
            "{currentWord?.translation}"
          </p>
          <p className="text-xs font-mono text-stone-400 mt-1">
            Plural: {currentWord?.plural}
          </p>
        </div>

        {/* Feedback Alert */}
        {lastAnswer ? (
          <div className={`p-6 rounded-2xl mb-6 text-sm border flex flex-col items-center justify-center gap-2 max-w-lg mx-auto ${
            lastAnswer.isCorrect
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              : 'bg-rose-50/80 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-serif font-bold text-base">
              {lastAnswer.isCorrect ? (
                <>
                  <Check className="w-5 h-5 text-emerald-700" />
                  <span>Correcto: {lastAnswer.correctArticle} {lastAnswer.word}</span>
                </>
              ) : (
                <>
                  <X className="w-5 h-5 text-rose-700" />
                  <span>Incorrecto: es {lastAnswer.correctArticle} {lastAnswer.word} (indicaste {lastAnswer.chosen})</span>
                </>
              )}
            </div>
            {lastAnswer.tips && (
              <p className="text-xs text-stone-600 mt-1 font-sans">{lastAnswer.tips}</p>
            )}

            <button
              onClick={nextRandomWord}
              className="mt-4 px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-all cursor-pointer shadow-xs"
            >
              Siguiente sustantivo →
            </button>
          </div>
        ) : (
          /* 3 Classical Gender Buttons */
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto my-6">
            <button
              onClick={() => handleGuess('der')}
              className="py-4 px-6 rounded-2xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xl transition-all cursor-pointer shadow-xs active:scale-98 border border-blue-950"
            >
              DER
              <span className="block font-mono text-[11px] font-normal opacity-80 mt-0.5">Maskulinum</span>
            </button>

            <button
              onClick={() => handleGuess('die')}
              className="py-4 px-6 rounded-2xl bg-rose-900 hover:bg-rose-800 text-white font-serif font-bold text-xl transition-all cursor-pointer shadow-xs active:scale-98 border border-rose-950"
            >
              DIE
              <span className="block font-mono text-[11px] font-normal opacity-80 mt-0.5">Femininum</span>
            </button>

            <button
              onClick={() => handleGuess('das')}
              className="py-4 px-6 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-white font-serif font-bold text-xl transition-all cursor-pointer shadow-xs active:scale-98 border border-emerald-950"
            >
              DAS
              <span className="block font-mono text-[11px] font-normal opacity-80 mt-0.5">Neutrum</span>
            </button>
          </div>
        )}
      </div>

      {/* Academic Morphological Rules Reference */}
      <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs">
        <h4 className="text-xs font-mono font-bold text-stone-600 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-stone-700" />
          Reglas de Determinación Morfológica:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articleRules.map((rule, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <span className="font-serif font-bold text-stone-900 text-sm block mb-1">{rule.gender}</span>
              <p className="text-stone-600 leading-relaxed font-sans">{rule.rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
