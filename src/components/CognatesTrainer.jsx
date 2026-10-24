import React, { useState } from 'react';
import { cognatesData } from '../data/cognates';
import { speechService } from '../utils/speech';
import { addXP } from '../utils/storage';
import { Volume2, Ghost, Check, AlertTriangle, Bookmark, Sparkles, ArrowRight, Search, Globe, ShieldAlert } from 'lucide-react';

export default function CognatesTrainer() {
  const [activeSubTab, setActiveSubTab] = useState('false_friends'); // 'false_friends' | 'germanic' | 'latin' | 'quiz'
  const [searchQuery, setSearchQuery] = useState('');
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [isQuizChecked, setIsQuizChecked] = useState(false);

  // Combine for quiz
  const quizItems = [
    { word: 'der Schlüssel', isFalseFriend: true, trueMeaning: 'La llave (¡es MASCULINO en alemán der Schlüssel, a diferencia del español la llave!)', falseMeaning: 'El tazón (eso es die Schüssel)' },
    { word: 'die Schüssel', isFalseFriend: true, trueMeaning: 'El tazón / cuenco (¡es FEMENINO die Schüssel, a diferencia del español el tazón!)', falseMeaning: 'La llave' },
    { word: 'bekommen', isFalseFriend: true, trueMeaning: 'Recibir / Obtener', falseMeaning: 'Llegar a ser (become)' },
    { word: 'das Haus', isFalseFriend: false, trueMeaning: 'Casa (igual a house en inglés)', falseMeaning: 'Otra cosa' },
    { word: 'das Gift', isFalseFriend: true, trueMeaning: 'Veneno', falseMeaning: 'Regalo (gift)' },
    { word: 'helfen', isFalseFriend: false, trueMeaning: 'Ayudar (help en inglés)', falseMeaning: 'Otra cosa' },
    { word: 'der Chef', isFalseFriend: true, trueMeaning: 'El jefe del trabajo', falseMeaning: 'Cocinero de restaurante' },
    { word: 'aktuell', isFalseFriend: true, trueMeaning: 'Actual / vigente hoy en día', falseMeaning: 'En realidad (actually)' },
    { word: 'das Wasser', isFalseFriend: false, trueMeaning: 'Agua (water en inglés)', falseMeaning: 'Vaso' },
    { word: 'die Rente', isFalseFriend: true, trueMeaning: 'La jubilación / pensión de retiro', falseMeaning: 'El alquiler de la casa' },
    { word: 'das Problem', isFalseFriend: false, trueMeaning: 'El problema (cognado latino internacional)', falseMeaning: 'Otra cosa' },
    { word: 'spenden', isFalseFriend: true, trueMeaning: 'Donar a caridad / beneficencia', falseMeaning: 'Gastar dinero (spend)' },
    { word: 'die Information', isFalseFriend: false, trueMeaning: 'La información (palabras en -tion = -ción)', falseMeaning: 'Otra cosa' },
    { word: 'brav', isFalseFriend: true, trueMeaning: 'Obediente / bien educado', falseMeaning: 'Valiente (brave)' },
    { word: 'hell', isFalseFriend: true, trueMeaning: 'Claro / luminoso / soleado', falseMeaning: 'Infierno (hell)' },
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

  // Filtered lists by search query
  const q = searchQuery.toLowerCase().trim();

  const filteredFalseFriends = cognatesData.falseFriends.filter(ff => 
    ff.german.toLowerCase().includes(q) || 
    ff.actualMeaning.toLowerCase().includes(q) || 
    ff.looksLikeEn.toLowerCase().includes(q) || 
    ff.looksLikeEs.toLowerCase().includes(q)
  );

  const filteredGermanic = cognatesData.germanicCognates.filter(gc => 
    gc.german.toLowerCase().includes(q) || 
    gc.english.toLowerCase().includes(q) || 
    gc.spanish.toLowerCase().includes(q)
  );

  const filteredLatin = cognatesData.latinCognates.filter(lc => 
    lc.german.toLowerCase().includes(q) || 
    lc.spanish.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Linguistischer Hack • Kognaten & Falsche Freunde</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Cognados y Falsos Amigos (Español & Inglés)
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-2xl leading-relaxed">
          Acelera tu vocabulario aprovechando el 40% de similitud léxica con el inglés y el latín, mientras neutralizas las trampas cognitivas con el logo fantasma 👻.
        </p>

        {/* Subtabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveSubTab('false_friends')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'false_friends'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Ghost className="w-4 h-4 text-amber-400" />
            <span>Falsos Amigos Fantasma ({cognatesData.falseFriends.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('germanic')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'germanic'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Globe className="w-4 h-4 text-blue-500" />
            <span>Puentes con el Inglés ({cognatesData.germanicCognates.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('latin')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'latin'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Puentes con el Español ({cognatesData.latinCognates.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeSubTab === 'quiz'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span>Detector Fantasma (Quiz)</span>
          </button>
        </div>

        {/* Search Input for terms */}
        {activeSubTab !== 'quiz' && (
          <div className="mt-4 relative max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar palabra (ej: Schlüssel, bekommen, Gift, Haus...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white"
            />
          </div>
        )}
      </div>

      {/* VIEW 1: FALSE FRIENDS WITH GHOST LOGO */}
      {activeSubTab === 'false_friends' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <Ghost className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>El Protocolo Cazafantasmas:</strong> Estas palabras parecen significar algo en español o en inglés, pero en alemán significan algo radicalmente distinto, o tienen los géneros gramaticales invertidos. Memoriza su truco nemotécnico.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFalseFriends.map((ff) => (
              <div
                key={ff.id}
                className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-sm transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Ghost Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
                      <Ghost className="w-3.5 h-3.5 text-amber-600" />
                      <span>ALERTA FANTASMA 👻</span>
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
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-1">
                    {ff.german}
                  </h3>

                  {/* Illusion vs Reality */}
                  <div className="my-4 space-y-2">
                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-rose-900">Trampa cognitiva:</span>
                      <span className="font-mono line-through text-rose-700">{ff.looksLikeEn}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-emerald-900">Significado real:</span>
                      <span className="font-mono font-bold text-emerald-900">{ff.actualMeaning}</span>
                    </div>
                  </div>

                  {/* Explanation & Example */}
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4 whitespace-pre-line">
                    {ff.ghostAlert}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <p className="font-serif italic font-medium text-stone-900">"{ff.exampleDe}"</p>
                    <p className="text-stone-500 mt-0.5">"{ff.exampleEs}"</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60 text-[11px] font-mono font-semibold text-amber-900">
                    💡 {ff.trick}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: GERMANIC COGNATES WITH ENGLISH */}
      {activeSubTab === 'germanic' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950 mb-6">
            <h4 className="font-serif font-bold text-sm text-blue-950 mb-1">
              El Puente Germánico (Zweite Lautverschiebung):
            </h4>
            <p className="leading-relaxed text-blue-900 font-sans">
              El inglés y el alemán comparten un tronco común. Conociendo las mutaciones regulares de sonido (<code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">t ↔ ss (water → Wasser)</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">p ↔ f/pf (apple → Apfel)</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">k ↔ ch (book → Buch)</code>), tu inglés se convierte en un acelerador para el alemán.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredGermanic.map((gc) => (
              <div key={gc.id} className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-bold">
                      🇬🇧 Puente Germánico Válido
                    </span>
                    <button
                      onClick={() => speechService.speak(gc.german)}
                      className="p-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                    {gc.german}
                  </h4>

                  <div className="flex items-center gap-3 text-xs font-mono text-stone-600 mb-3 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                    <span>🇬🇧 <strong>{gc.english}</strong></span>
                    <span>•</span>
                    <span>🇪🇸 {gc.spanish}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    {gc.pattern}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs font-serif italic text-stone-800">
                  <p>"{gc.exampleDe}"</p>
                  <p className="text-stone-500 font-sans not-italic text-[11px] mt-0.5">"{gc.exampleEs}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: LATIN COGNATES WITH SPANISH */}
      {activeSubTab === 'latin' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 mb-6">
            <h4 className="font-serif font-bold text-sm text-emerald-950 mb-1">
              El Puente Latino con el Español:
            </h4>
            <p className="leading-relaxed text-emerald-900 font-sans">
              Cientos de términos de origen latino pasaron al alemán a través del vocabulario culto, científico e internacional. Tienen terminaciones y patrones regulares con un 95% de acierto si eres hispanohablante nativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredLatin.map((lc) => (
              <div key={lc.id} className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                      🇪🇸 Puente Latino Directo
                    </span>
                    <button
                      onClick={() => speechService.speak(lc.german)}
                      className="p-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {lc.german}
                  </h4>

                  <div className="text-xs font-mono text-stone-700 mb-3 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                    <span>🇪🇸 {lc.spanish}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                    {lc.pattern}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs font-serif italic text-stone-800">
                  <p>"{lc.exampleDe}"</p>
                  <p className="text-stone-500 font-sans not-italic text-[11px] mt-0.5">"{lc.exampleEs}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 4: GHOST DETECTOR QUIZ */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-xl mx-auto p-10 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-2">
            Detector de Trampas Léxicas • Reto {quizIdx + 1} de {quizItems.length}
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
                <p className="text-xs">
                  <strong>Significado real:</strong> {currentQuiz.trueMeaning}
                </p>
                {currentQuiz.falseMeaning && (
                  <p className="text-xs mt-1 text-stone-500 line-through">
                    La trampa era: {currentQuiz.falseMeaning}
                  </p>
                )}
              </div>

              <button
                onClick={nextQuizItem}
                className="py-3 px-8 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs cursor-pointer shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Siguiente Palabra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
