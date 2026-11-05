import React, { useState } from 'react';
import { yodaQuotesList, yodaHistoryStory } from '../data/yodaQuotes';
import { addXP } from '../utils/storage';
import { 
  Sparkles, CheckCircle2, XCircle, Volume2, VolumeX, ArrowRight, 
  RotateCcw, BookOpen, HelpCircle, ShieldAlert, Award, Lightbulb, 
  Scroll, Compass, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function YodaSyntaxTrainer({ setActiveTab }) {
  const [activeTabMode, setActiveTabMode] = useState('game'); // 'game' | 'story' | 'howToPlay'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuote = yodaQuotesList[currentIndex] || yodaQuotesList[0];

  // Generar opciones mezclando la respuesta correcta con las erróneas
  const [shuffledOptions, setShuffledOptions] = useState(() => {
    return prepareOptions(currentQuote);
  });

  function prepareOptions(quote) {
    const correctOpt = {
      text: quote.standardGerman,
      isCorrect: true,
      explanation: '¡Excelente! En alemán estándar (Hochdeutsch), el verbo conjugado ocupa la posición 2 de la oración principal.'
    };
    const wrongOpts = quote.wrongOptions.map(o => ({
      text: o.text,
      isCorrect: false,
      explanation: o.explanation
    }));
    return [correctOpt, ...wrongOpts].sort(() => Math.random() - 0.5);
  }

  const handleSelectOption = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    if (opt.isCorrect) {
      setScore(prev => prev + 1);
      addXP(25);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextQuote = () => {
    const nextIdx = (currentIndex + 1) % yodaQuotesList.length;
    setCurrentIndex(nextIdx);
    setSelectedOption(null);
    setIsAnswered(false);
    setShuffledOptions(prepareOptions(yodaQuotesList[nextIdx]));
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShuffledOptions(prepareOptions(yodaQuotesList[0]));
  };

  // Reproducción de voz nativa SOLO para el alemán estándar correcto
  const speakCorrectGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8 animate-in fade-in duration-200">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 mb-1 text-emerald-800 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Sintaxis Galáctica • Meister Yoda</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Entendiendo lo que Yoda dice en Alemán
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Descifra el dialecto "Yodaisch", detecta la regla V2 violada y reconstruye el alemán estándar impecable.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-2xl border border-stone-200 self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveTabMode('game')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabMode === 'game'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>🪐 Desafío</span>
          </button>
          <button
            onClick={() => setActiveTabMode('story')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabMode === 'story'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Scroll className="w-3.5 h-3.5 text-amber-500" />
            <span>📜 Historia del Doblaje</span>
          </button>
          <button
            onClick={() => setActiveTabMode('howToPlay')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabMode === 'howToPlay'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>¿Cómo se juega?</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: GAMEPLAY */}
      {activeTabMode === 'game' && (
        <div className="space-y-6">
          {/* Progress / Status Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-500">
            <span className="font-bold text-stone-800">
              Frase {currentIndex + 1} de {yodaQuotesList.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                ✓ Aciertos: {score}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-bold">
                +25 XP por acierto
              </span>
            </div>
          </div>

          {/* Main Yoda Hologram Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-stone-950 text-white border border-stone-800 shadow-xl relative overflow-hidden">
            {/* Background glowing emerald aesthetic */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-sm font-bold">
                    🧙‍♂️
                  </span>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Yoda en Alemán ("Yodaisch")
                  </span>
                </div>

                <span className="text-[11px] font-mono text-stone-400 bg-stone-900/90 px-3 py-1 rounded-full border border-stone-800">
                  {currentQuote.context}
                </span>
              </div>

              {/* The Distorted Yoda German Phrase */}
              <div className="py-4">
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-amber-200 tracking-wide leading-tight">
                  "{currentQuote.yodaGerman}"
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-stone-400 mt-2">
                  Significado real: "{currentQuote.spanishMeaning}"
                </p>
              </div>

              {/* Critical Audio Rule Callout: Audio is INTENTIONALLY disabled for the broken sentence */}
              <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 text-amber-200 flex items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <VolumeX className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] leading-snug">
                    <strong>Audio desactivado en la frase de Yoda:</strong> Para no contaminar tu memoria auditiva con sintaxis agramatical, el audio nativo de-DE solo está activo para la versión correcta (Hochdeutsch).
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-400 shrink-0 font-bold uppercase">
                  Regla Pedagógica
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Challenge: Find the correct Hochdeutsch sentence */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4 text-stone-700" />
                <span>Misión de Restauración Sintáctica:</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900">
                ¿Cómo dirías esto en alemán estándar (Hochdeutsch) gramaticalmente correcto?
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {shuffledOptions.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                let btnStyle = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-50 border-rose-300 text-rose-950 line-through opacity-70';
                  } else {
                    btnStyle = 'bg-stone-50/50 border-stone-200 text-stone-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-white border border-stone-300 text-stone-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="font-serif leading-snug">{opt.text}</span>
                    </div>

                    {isAnswered && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Philological Explanation */}
            {isAnswered && (
              <div className="mt-6 pt-6 border-t border-stone-100 space-y-4 animate-in fade-in">
                {/* Result Banner */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                  selectedOption?.isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}>
                  <div className="flex items-center gap-2.5">
                    {selectedOption?.isCorrect ? (
                      <Check className="w-5 h-5 text-emerald-700" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-700" />
                    )}
                    <span className="font-serif font-bold text-xs sm:text-sm">
                      {selectedOption?.isCorrect
                        ? '¡Acertaste! Has restaurado el orden canónico del Hochdeutsch.'
                        : '¡Atención a la trampa sintáctica! Revisa la explicación filológica.'}
                    </span>
                  </div>

                  {/* Audio Button: ONLY active for the correct sentence */}
                  <button
                    type="button"
                    onClick={() => speakCorrectGerman(currentQuote.standardGerman)}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-transform hover:scale-103 shrink-0"
                    title={`Escuchar "${currentQuote.standardGerman}" en alemán correcto`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Escuchar Hochdeutsch</span>
                  </button>
                </div>

                {/* Philological Diagnosis Dossier */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-mono font-bold text-amber-900 uppercase text-[11px]">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span>Diagnóstico Gramatical: {currentQuote.brokenRule}</span>
                  </div>
                  <p className="text-stone-700 font-serif leading-relaxed">
                    <strong>¿Qué hizo Yoda?</strong> {currentQuote.syntaxDiagnosis}
                  </p>
                  <p className="text-stone-600 font-sans text-[11px] leading-relaxed pt-1 border-t border-stone-200">
                    💡 <strong>Opción seleccionada:</strong> {selectedOption?.explanation}
                  </p>
                </div>

                {/* Next Button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuote}
                    className="px-6 py-3 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
                  >
                    <span>Siguiente Frase de Yoda</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: THE HISTORICAL STORY OF GERMAN YODA */}
      {activeTabMode === 'story' && (
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-5">
            <span className="text-[10px] font-mono font-bold text-amber-900 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              Historia de la Traducción & Lingüística Aplicada
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-2">
              {yodaHistoryStory.title}
            </h3>
            <p className="text-xs font-serif italic text-stone-500 mt-1">
              {yodaHistoryStory.subtitle} • {yodaHistoryStory.year}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 font-mono space-y-1">
            <div><strong>Equipo Histórico:</strong> {yodaHistoryStory.protagonists}</div>
            <div><strong>Estudio:</strong> Berliner Synchron (Berlín Occidental, 1980)</div>
          </div>

          <div className="prose prose-stone text-xs sm:text-sm font-serif leading-relaxed text-stone-700 whitespace-pre-line space-y-4">
            {yodaHistoryStory.article}
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-3 mt-6">
            <h4 className="font-serif font-bold text-sm text-amber-300">
              Los 3 Pilares del "Yodaisch" Alemán:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-800 border border-stone-700">
                <strong className="text-amber-400 block mb-1">1. Ruptura V2:</strong>
                Lanza el verbo conjugado de la principal al final absoluto, como si fuera una subordinada sin nexo.
              </div>
              <div className="p-3 rounded-xl bg-stone-800 border border-stone-700">
                <strong className="text-amber-400 block mb-1">2. Inmunidad por Casos:</strong>
                Mantiene intactos Nominativo, Acusativo y Dativo para que el significado no se desintegre.
              </div>
              <div className="p-3 rounded-xl bg-stone-800 border border-stone-700">
                <strong className="text-amber-400 block mb-1">3. Ruptura del Marco:</strong>
                Desacopla el verbo modal y el infinitivo, enviándolos pegados al final.
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setActiveTabMode('game')}
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
            >
              <span>Ir al Desafío Práctico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: HOW TO PLAY INSTRUCTIONS */}
      {activeTabMode === 'howToPlay' && (
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-5">
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              ¿Cómo se juega al Desafío de Sintaxis de Yoda?
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Entrenamiento de alta agudeza mental para no cometer los mismos errores sintácticos al hablar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-mono font-bold text-xs">
                1
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Lee la frase galáctica</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Observa la frase de Yoda en alemán y su traducción al español. Analiza qué palabra está fuera de su sitio gramatical natural.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-mono font-bold text-xs">
                2
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Detecta la Regla Rota</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                ¿Movió el verbo al final? ¿Olvidó la inversión verbo-sujeto en posición 2? Selecciona la reconstrucción correcta en Hochdeutsch.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-mono font-bold text-xs">
                3
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Fija la Fonética Correcta</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                El audio está bloqueado en las frases de Yoda. Una vez aciertes, escucha la versión correcta para grabar el ritmo nativo limpio.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setActiveTabMode('game')}
              className="px-6 py-3 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
            >
              <span>¡Comenzar el Entrenamiento Jedi! →</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
