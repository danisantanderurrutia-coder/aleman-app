import React, { useState } from 'react';
import { cognatesData } from '../data/cognates';
import { speechService } from '../utils/speech';
import { addXP } from '../utils/storage';
import { Volume2, Ghost, Check, AlertTriangle, Bookmark, Sparkles, ArrowRight } from 'lucide-react';

export default function CognatesTrainer() {
  const [activeSubTab, setActiveSubTab] = useState('false_friends'); // 'false_friends' | 'real_cognates' | 'quiz'
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [isQuizChecked, setIsQuizChecked] = useState(false);

  // Combine for quiz
  const quizItems = [
    { word: 'bekommen', isFalseFriend: true, trueMeaning: 'Recibir / Obtener', falseMeaning: 'Llegar a ser (become)' },
    { word: 'das Haus', isFalseFriend: false, trueMeaning: 'Casa (igual a house en inglés)', falseMeaning: 'Otra cosa' },
    { word: 'das Gift', isFalseFriend: true, trueMeaning: 'Veneno', falseMeaning: 'Regalo (gift)' },
    { word: 'helfen', isFalseFriend: false, trueMeaning: 'Ayudar (help en inglés)', falseMeaning: 'Otra cosa' },
    { word: 'der Chef', isFalseFriend: true, trueMeaning: 'El jefe del trabajo', falseMeaning: 'Cocinero de restaurante' },
    { word: 'aktuell', isFalseFriend: true, trueMeaning: 'Actual / vigente hoy en día', falseMeaning: 'En realidad (actually)' },
  ];

  const currentQuiz = quizItems[quizIdx] || quizItems[0];

  const handleQuizChoice = (choice) => {
    if (isQuizChecked) return;
    setSelectedQuizAnswer(choice);
    setIsQuizChecked(true);

    const isCorrect = choice === currentQuiz.isFalseFriend;
    speechService.speak(currentQuiz.word);
    if (isCorrect) {
      addXP(10);
    }
  };

  const nextQuizItem = () => {
    setQuizIdx((prev) => (prev + 1) % quizItems.length);
    setSelectedQuizAnswer(null);
    setIsQuizChecked(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Linguistischer Hack • Kognaten & Falsche Freunde</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Cognados y Falsos Amigos
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-2xl leading-relaxed">
          Acelera tu vocabulario aprovechando el 40% de similitud léxica con el inglés y el latín, mientras neutralizas las trampas cognitivas con el logo fantasma 👻.
        </p>

        {/* Subtabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveSubTab('false_friends')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'false_friends'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Ghost className="w-4 h-4 text-amber-400" />
            <span>Falsos Amigos Fantasma (8)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('real_cognates')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'real_cognates'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Puentes Reales (Inglés ↔ Alemán)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'quiz'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span>Detector Fantasma (Test Rápido)</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: FALSE FRIENDS WITH GHOST LOGO */}
      {activeSubTab === 'false_friends' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cognatesData.falseFriends.map((ff) => (
            <div
              key={ff.id}
              className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-sm transition-all relative overflow-hidden"
            >
              {/* Ghost Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
                  <Ghost className="w-3.5 h-3.5 text-amber-600" />
                  <span>ALERTA FANTASMA</span>
                </span>
                <button
                  onClick={() => speechService.speak(ff.german)}
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer shadow-2xs"
                  title="Pronunciar"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* German Word */}
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-1">
                {ff.german}
              </h3>

              {/* Illusion vs Reality */}
              <div className="my-4 space-y-2">
                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 flex items-center justify-between">
                  <span className="font-semibold">Trampa cognitiva:</span>
                  <span className="font-mono line-through text-rose-800">{ff.looksLikeEn}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                  <span className="font-semibold">Significado real:</span>
                  <span className="font-mono font-bold text-emerald-900">{ff.actualMeaning}</span>
                </div>
              </div>

              {/* Explanation & Example */}
              <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                {ff.ghostAlert}
              </p>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                <p className="font-serif italic font-medium text-stone-900">"{ff.exampleDe}"</p>
                <p className="text-stone-500 mt-0.5">"{ff.exampleEs}"</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: REAL COGNATES */}
      {activeSubTab === 'real_cognates' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 mb-6">
            <h4 className="font-serif font-bold text-sm text-emerald-950 mb-1">
              La Ley de Mutación Consonántica (Zweite Lautverschiebung):
            </h4>
            <p className="leading-relaxed text-emerald-900 font-sans">
              El inglés y el alemán son lenguas germánicas hermanas. Conociendo los cambios regulares de sonido (<code className="font-mono bg-white px-1 py-0.5 rounded border border-emerald-200">d ↔ t</code>, <code className="font-mono bg-white px-1 py-0.5 rounded border border-emerald-200">p ↔ f/pf</code>, <code className="font-mono bg-white px-1 py-0.5 rounded border border-emerald-200">k ↔ ch</code>), puedes desbloquear instantáneamente cientos de términos sin esfuerzo de memorización bruta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cognatesData.realCognates.map((rc) => (
              <div key={rc.id} className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                    Puente Germánico Válido
                  </span>
                  <button
                    onClick={() => speechService.speak(rc.german)}
                    className="p-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  {rc.german}
                </h4>

                <div className="flex items-center gap-3 text-xs font-mono text-stone-600 mb-3 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <span>🇬🇧 {rc.english}</span>
                  <span>•</span>
                  <span>🇪🇸 {rc.spanish}</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                  {rc.rule}
                </p>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs font-serif italic text-stone-800">
                  "{rc.exampleDe}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: GHOST DETECTOR QUIZ */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-xl mx-auto p-10 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-2">
            Detector de Trampas Léxicas
          </span>

          <h3 className="text-4xl font-serif font-bold text-stone-900 my-4">
            {currentQuiz.word}
          </h3>

          <p className="text-sm text-stone-600 mb-8 font-serif italic">
            ¿Es una palabra transparente (cognado real) o un Falso Amigo Fantasma 👻?
          </p>

          {!isQuizChecked ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleQuizChoice(false)}
                className="py-4 px-6 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-serif font-bold text-sm transition-all cursor-pointer border border-stone-200"
              >
                Es Real / Transparente
              </button>
              <button
                onClick={() => handleQuizChoice(true)}
                className="py-4 px-6 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-950 font-serif font-bold text-sm transition-all cursor-pointer border border-amber-300 flex items-center justify-center gap-2"
              >
                <Ghost className="w-4 h-4 text-amber-700" />
                <span>¡Es un Fantasma 👻!</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`p-5 rounded-2xl border text-sm ${
                selectedQuizAnswer === currentQuiz.isFalseFriend
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}>
                <div className="font-serif font-bold text-base mb-1">
                  {selectedQuizAnswer === currentQuiz.isFalseFriend ? '¡Exacto! (+10 XP)' : '¡Caíste en la trampa!'}
                </div>
                <p className="text-xs text-stone-700 font-sans">
                  {currentQuiz.isFalseFriend ? (
                    <>👻 <strong>{currentQuiz.word}</strong> no significa "{currentQuiz.falseMeaning}". En realidad significa <strong>{currentQuiz.trueMeaning}</strong>.</>
                  ) : (
                    <>✅ <strong>{currentQuiz.word}</strong> es un cognado real que significa <strong>{currentQuiz.trueMeaning}</strong>.</>
                  )}
                </p>
              </div>

              <button
                onClick={nextQuizItem}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-all cursor-pointer shadow-xs"
              >
                Siguiente Reactivo →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
