import React, { useState, useEffect } from 'react';
import { vocabularyList, vocabularyCategories } from '../data/vocabulary';
import { speechService } from '../utils/speech';
import { addXP, saveProgress } from '../utils/storage';
import { 
  Volume2, RotateCw, CheckCircle, ArrowLeft, 
  ArrowRight, Shuffle, Sparkles, Bookmark, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FlashcardsTrainer({ progress, setProgress }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(true);

  const filteredCards = selectedCategory === 'all'
    ? vocabularyList
    : vocabularyList.filter(item => item.category === selectedCategory);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const masteredList = progress.masteredVocab || [];
  const isMastered = masteredList.includes(currentCard?.id);

  useEffect(() => {
    if (autoPlayAudio && currentCard) {
      const textToSpeak = `${currentCard.article ? currentCard.article + ' ' : ''}${currentCard.word}`;
      speechService.speak(textToSpeak);
    }
    setIsFlipped(false);
  }, [currentIndex, selectedCategory]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    const randomIdx = Math.floor(Math.random() * filteredCards.length);
    setIsFlipped(false);
    setCurrentIndex(randomIdx);
  };

  const handleRating = (difficulty) => {
    if (!currentCard) return;

    if (difficulty === 'mastered') {
      if (!masteredList.includes(currentCard.id)) {
        const newMastered = [...masteredList, currentCard.id];
        const updated = saveProgress({ masteredVocab: newMastered });
        addXP(15);
        setProgress(updated);
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    } else if (difficulty === 'learning') {
      addXP(5);
    }

    handleNext();
  };

  const getArticleBadge = (article) => {
    switch (article?.toLowerCase()) {
      case 'der':
        return { text: 'der • Maskulinum', bg: 'bg-blue-50 text-blue-900 border-blue-200' };
      case 'die':
        return { text: 'die • Femininum', bg: 'bg-rose-50 text-rose-900 border-rose-200' };
      case 'das':
        return { text: 'das • Neutrum', bg: 'bg-emerald-50 text-emerald-900 border-emerald-200' };
      default:
        return { text: 'Wortschatz', bg: 'bg-stone-100 text-stone-700 border-stone-300' };
    }
  };

  const articleInfo = getArticleBadge(currentCard?.article);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
              <Bookmark className="w-3.5 h-3.5 text-stone-700" />
              <span>Kartothek-System • Repetición Espaciada</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Léxico y Fichas A2
            </h2>
          </div>

          <div className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-700 flex items-center gap-2 shadow-2xs self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>{masteredList.length} de {vocabularyList.length} fichas memorizadas</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {vocabularyCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Flashcard Component */}
      <div className="min-h-[400px] sm:min-h-[440px] flex flex-col justify-center">
        {currentCard ? (
          <div
            onClick={handleFlip}
            className={`w-full rounded-3xl border transition-all duration-300 p-8 sm:p-12 cursor-pointer shadow-sm relative select-none flex flex-col justify-between ${
              isFlipped
                ? 'bg-white border-stone-300 shadow-md ring-1 ring-stone-200'
                : 'bg-white border-stone-200 hover:border-stone-400'
            }`}
          >
            {/* Top Bar of the Index Card */}
            <div className="flex items-center justify-between gap-4">
              <span className={`px-3.5 py-1 rounded-md text-xs font-mono font-bold border ${articleInfo.bg}`}>
                {articleInfo.text}
              </span>

              <div className="flex items-center gap-2">
                {isMastered && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Check className="w-3.5 h-3.5" /> Memorizada
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const phrase = `${currentCard.article ? currentCard.article + ' ' : ''}${currentCard.word}`;
                    speechService.speak(phrase);
                  }}
                  className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-all cursor-pointer border border-stone-200"
                  title="Reproducir pronunciación"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content (Front vs Back) */}
            {!isFlipped ? (
              // FRONT
              <div className="my-10 text-center">
                <div className="flex items-baseline justify-center gap-3">
                  {currentCard.article && (
                    <span className={`text-2xl sm:text-3xl font-serif font-bold italic opacity-75 ${
                      currentCard.article === 'der' ? 'text-blue-900' :
                      currentCard.article === 'die' ? 'text-rose-900' : 'text-emerald-900'
                    }`}>
                      {currentCard.article}
                    </span>
                  )}
                  <h3 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight">
                    {currentCard.word}
                  </h3>
                </div>

                <div className="mt-4 inline-block px-3 py-1 rounded-md bg-stone-100 text-xs font-mono text-stone-600 border border-stone-200">
                  Plural: {currentCard.plural}
                </div>

                <p className="text-xs text-stone-400 mt-8 flex items-center justify-center gap-1.5 font-sans">
                  <RotateCw className="w-3.5 h-3.5 text-stone-400" /> Clic en la ficha para ver definición lexicográfica y contexto
                </p>
              </div>
            ) : (
              // BACK
              <div className="my-6 space-y-6">
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                    {currentCard.translation}
                  </h4>
                  <p className="text-xs font-mono text-stone-500 mt-1">
                    Forma Plural: {currentCard.plural}
                  </p>
                </div>

                {/* Example sentence in box */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider">
                      Uso en contexto oracional
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speechService.speak(currentCard.exampleDe);
                      }}
                      className="p-1 rounded bg-white hover:bg-stone-100 text-stone-700 cursor-pointer border border-stone-200"
                      title="Escuchar oración"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-base font-serif font-medium text-stone-900">
                    "{currentCard.exampleDe}"
                  </p>
                  <p className="text-xs text-stone-500 mt-1 italic font-sans">
                    "{currentCard.exampleEs}"
                  </p>
                </div>

                {/* Lexical / cultural note */}
                {currentCard.tips && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
                    <span className="font-semibold text-amber-900">Anotación etimológica / práctica: </span>
                    {currentCard.tips}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Card Footer */}
            <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-t border-stone-100 pt-4">
              <span>Ficha {currentIndex + 1} de {filteredCards.length}</span>
              <span className="text-[11px] text-stone-400">Volteo bilateral</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-stone-500">No hay entradas para este filtro.</p>
        )}
      </div>

      {/* Action Controls */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 transition-all cursor-pointer shadow-2xs"
            title="Anterior"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleShuffle}
            className="p-3 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 transition-all cursor-pointer shadow-2xs"
            title="Barajar fichas aleatoriamente"
          >
            <Shuffle className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 transition-all cursor-pointer shadow-2xs"
            title="Siguiente"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Evaluation Buttons */}
        <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
          <button
            onClick={() => handleRating('hard')}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-medium text-xs transition-all cursor-pointer text-center shadow-2xs"
          >
            En revisión
          </button>
          <button
            onClick={() => handleRating('learning')}
            className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-semibold text-xs transition-all cursor-pointer text-center"
          >
            Parcial (+5 XP)
          </button>
          <button
            onClick={() => handleRating('mastered')}
            className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-all cursor-pointer text-center shadow-xs"
          >
            Dominada (+15 XP)
          </button>
        </div>
      </div>
    </div>
  );
}
