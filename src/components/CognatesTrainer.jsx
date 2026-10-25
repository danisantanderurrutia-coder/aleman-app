import React, { useState } from 'react';
import { cognatesData } from '../data/cognates';
import { speechService } from '../utils/speech';
import { addXP } from '../utils/storage';
import { 
  Volume2, Ghost, Check, AlertTriangle, Bookmark, Sparkles, 
  ArrowRight, Search, Globe, ShieldAlert, BookOpen, Layers, Lightbulb,
  ShieldCheck, Compass
} from 'lucide-react';

export default function CognatesTrainer() {
  const [activeSubTab, setActiveSubTab] = useState('false_friends'); // 'false_friends' | 'spanish_allies' | 'phonetic_en' | 'latin_es' | 'universal' | 'quiz'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoneticRule, setSelectedPhoneticRule] = useState(cognatesData.phoneticRulesEn[0].id);
  const [selectedLatinFormula, setSelectedLatinFormula] = useState(cognatesData.latinSuffixFormulas[0].id);

  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [isQuizChecked, setIsQuizChecked] = useState(false);

  // Expanded Quiz items
  const quizItems = [
    { word: 'die Fabrik', isFalseFriend: false, trueMeaning: 'La fábrica (¡cognado real con el español! La trampa de "fabric = tela" solo existe si piensas en inglés)', falseMeaning: 'Tela o tejido (eso es der Stoff)' },
    { word: 'sensibel', isFalseFriend: false, trueMeaning: 'Sensible / empático / delicado (¡cognado directo con el español! En inglés sensible = sensato/vernünftig)', falseMeaning: 'Sensato o prudente (eso es vernünftig)' },
    { word: 'eventuell', isFalseFriend: false, trueMeaning: 'Posiblemente / contingente (¡cognado real con español "eventual"! En inglés "eventually" significa al final)', falseMeaning: 'Al final / a la larga (eso es schließlich)' },
    { word: 'die See / der See', isFalseFriend: false, trueMeaning: 'El mar (die See) y el lago (der See) son cognados germánicos directos del inglés "sea" (*saiwaz)', falseMeaning: 'Un falso amigo' },
    { word: 'der Schlüssel', isFalseFriend: true, trueMeaning: 'La llave (¡es MASCULINO en alemán der Schlüssel, a diferencia del español la llave!)', falseMeaning: 'El tazón (eso es die Schüssel)' },
    { word: 'die Schüssel', isFalseFriend: true, trueMeaning: 'El tazón / cuenco (¡es FEMENINO die Schüssel, a diferencia del español el tazón!)', falseMeaning: 'La llave' },
    { word: 'bekommen', isFalseFriend: true, trueMeaning: 'Recibir / Obtener', falseMeaning: 'Llegar a ser (become)' },
    { word: 'das Haus', isFalseFriend: false, trueMeaning: 'Casa (igual a house en inglés)', falseMeaning: 'Otra cosa' },
    { word: 'das Gift', isFalseFriend: true, trueMeaning: 'Veneno', falseMeaning: 'Regalo (gift)' },
    { word: 'helfen', isFalseFriend: false, trueMeaning: 'Ayudar (help en inglés)', falseMeaning: 'Otra cosa' },
    { word: 'der Chef', isFalseFriend: true, trueMeaning: 'El jefe del trabajo', falseMeaning: 'Cocinero de restaurante' },
    { word: 'aktuell', isFalseFriend: true, trueMeaning: 'Actual / vigente hoy en día', falseMeaning: 'En realidad (actually)' },
    { word: 'das Wasser', isFalseFriend: false, trueMeaning: 'Agua (water en inglés)', falseMeaning: 'Vaso' },
    { word: 'die Rente', isFalseFriend: true, trueMeaning: 'La jubilación / pensión de retiro', falseMeaning: 'El alquiler de la casa (die Miete)' },
    { word: 'das Problem', isFalseFriend: false, trueMeaning: 'El problema (cognado latino internacional)', falseMeaning: 'Otra cosa' },
    { word: 'spenden', isFalseFriend: true, trueMeaning: 'Donar a caridad / beneficencia', falseMeaning: 'Gastar dinero (spend)' },
    { word: 'die Information', isFalseFriend: false, trueMeaning: 'La información (palabras en -tion = -ción)', falseMeaning: 'Otra cosa' },
    { word: 'brav', isFalseFriend: true, trueMeaning: 'Obediente / bien educado', falseMeaning: 'Valiente (brave)' },
    { word: 'hell', isFalseFriend: true, trueMeaning: 'Claro / luminoso / soleado', falseMeaning: 'Infierno (die Hölle)' },
    { word: 'organisieren', isFalseFriend: false, trueMeaning: 'Organizar (verbos en -ieren sin ge-)', falseMeaning: 'Otra cosa' },
    { word: 'die Universität', isFalseFriend: false, trueMeaning: 'La universidad (sufijo -dad = -tät)', falseMeaning: 'Otra cosa' }
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

  const q = searchQuery.toLowerCase().trim();

  // Filtered False Friends
  const filteredFalseFriends = cognatesData.falseFriends.filter(ff => 
    ff.german.toLowerCase().includes(q) || 
    ff.actualMeaning.toLowerCase().includes(q) || 
    ff.looksLikeEn.toLowerCase().includes(q) || 
    ff.looksLikeEs.toLowerCase().includes(q)
  );

  // Filtered Spanish Allies (English Traps)
  const filteredSpanishAllies = (cognatesData.spanishTrueFriendsEnglishTrap || []).filter(item => 
    item.german.toLowerCase().includes(q) || 
    item.spanishFriend.toLowerCase().includes(q) || 
    item.englishTrap.toLowerCase().includes(q) || 
    item.exactMeaning.toLowerCase().includes(q)
  );

  // Active phonetic rule
  const activePhoneticRule = cognatesData.phoneticRulesEn.find(r => r.id === selectedPhoneticRule) || cognatesData.phoneticRulesEn[0];
  const filteredPhoneticExamples = activePhoneticRule.examples.filter(ex => 
    ex.de.toLowerCase().includes(q) || 
    ex.en.toLowerCase().includes(q) || 
    ex.es.toLowerCase().includes(q)
  );

  // Active Latin formula
  const activeLatinFormula = cognatesData.latinSuffixFormulas.find(f => f.id === selectedLatinFormula) || cognatesData.latinSuffixFormulas[0];
  const filteredLatinExamples = activeLatinFormula.examples.filter(ex => 
    ex.de.toLowerCase().includes(q) || 
    ex.es.toLowerCase().includes(q)
  );

  // Universal twins & triangles
  const allUniversal = [
    ...cognatesData.directEnglishTwins.map(t => ({ de: t.de, en: t.en, es: t.es, note: 'Gemelo Germánico Inglés' })),
    ...cognatesData.universalTriangles
  ];
  const filteredUniversal = allUniversal.filter(item => 
    item.de.toLowerCase().includes(q) || 
    item.en.toLowerCase().includes(q) || 
    item.es.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Linguistisches Lexikon • El Puente de 1.000 Palabras</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Puentes Reales y Falsos Amigos (Español & Inglés)
        </h2>
        <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
          Ya conoces más del 40% del vocabulario alemán. El inglés te regala las raíces germánicas cotidianas mediante leyes de mutación fonética (<code className="font-mono bg-stone-100 px-1 py-0.5 rounded">T → SS</code>, <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">P → PF</code>, <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">K → CH</code>); y el español te regala miles de términos cultos a través de 8 fórmulas morfológicas mágicas (<code className="font-mono bg-stone-100 px-1 py-0.5 rounded">-tion</code>, <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">-tät</code>, <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">-ieren</code>).
        </p>

        {/* 6 Main Subtabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveSubTab('false_friends')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
              activeSubTab === 'false_friends'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Ghost className="w-4 h-4 text-amber-400" />
            <span>Falsos Amigos Reales ({cognatesData.falseFriends.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('spanish_allies')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
              activeSubTab === 'spanish_allies'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>🇪🇸 Amigos en Español / Trampas en Inglés ({cognatesData.spanishTrueFriendsEnglishTrap.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('phonetic_en')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
              activeSubTab === 'phonetic_en'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Globe className="w-4 h-4 text-blue-500" />
            <span>🇬🇧 7 Leyes Fonéticas con el Inglés (90+ Palabras)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('latin_es')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
              activeSubTab === 'latin_es'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>🇪🇸 8 Fórmulas Latinas con el Español (100+ Palabras)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('universal')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
              activeSubTab === 'universal'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4 text-purple-600" />
            <span>🌐 Gemelos & Triángulos Universales ({allUniversal.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
              activeSubTab === 'quiz'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span>Detector Fantasma (Quiz)</span>
          </button>
        </div>

        {/* Global Search Bar */}
        {activeSubTab !== 'quiz' && (
          <div className="mt-4 relative max-w-lg">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar término en español, inglés o alemán (ej: Schlüssel, water, información, gift...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white shadow-2xs"
            />
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. VIEW: FALSE FRIENDS (Falsche Freunde 👻) */}
      {/* ========================================================================= */}
      {activeSubTab === 'false_friends' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <Ghost className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>El Protocolo Cazafantasmas:</strong> Estas 23 palabras engañan a tu cerebro porque parecen significar algo en español o en inglés, o tienen sus géneros gramaticales exactamente invertidos. Memoriza el truco nemotécnico.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFalseFriends.map((ff) => (
              <div
                key={ff.id}
                className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-sm transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
                      <Ghost className="w-3.5 h-3.5 text-amber-600" />
                      <span>ALERTA FANTASMA 👻</span>
                    </span>
                    <button
                      onClick={() => speechService.speak(ff.german.split('vs.')[0].trim())}
                      className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer shadow-2xs"
                      title="Pronunciar"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-1">
                    {ff.german}
                  </h3>

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

      {/* ========================================================================= */}
      {/* 2. VIEW: AMIGOS REALES EN ESPAÑOL (Trampa SOLO para el inglés) */}
      {/* ========================================================================= */}
      {activeSubTab === 'spanish_allies' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <h4 className="font-serif font-bold text-sm text-emerald-950 mb-1">
                ⭐ El Superpoder del Hispanohablante: ¡Desmontando el Sesgo Anglosajón!
              </h4>
              <p className="text-emerald-900 font-sans">
                Muchos libros de texto de alemán traducidos del inglés catalogan erróneamente estas palabras como «falsos amigos». Pero para un angloparlante son trampas porque en inglés <em>fabric</em> es tela, <em>sensible</em> es sensato y <em>eventually</em> es al final. <strong>¡Para ti en español son COGNADOS REALES y directos!</strong> Tu lengua materna aquí es una ventaja absoluta frente a los estudiantes de habla inglesa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSpanishAllies.map((ally) => (
              <div
                key={ally.id}
                className="p-7 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:shadow-sm transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>COGNADO REAL CON ESPAÑOL 🇪🇸</span>
                    </span>
                    <button
                      onClick={() => speechService.speak(ally.german)}
                      className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer shadow-2xs"
                      title="Pronunciar"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-1">
                    {ally.german}
                  </h3>

                  <div className="my-4 space-y-2">
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-emerald-900">En español (amigo directo):</span>
                      <span className="font-mono font-bold text-emerald-900">{ally.spanishFriend}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-amber-900">Trampa (solo en inglés):</span>
                      <span className="font-mono text-amber-800">{ally.englishTrap}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                    {ally.explanation}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <p className="font-serif italic font-medium text-stone-900">"{ally.exampleDe}"</p>
                    <p className="text-stone-500 mt-0.5">"{ally.exampleEs}"</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70 text-[11px] font-mono font-semibold text-emerald-900">
                    {ally.superpower}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. VIEW: 7 PHONETIC RULES WITH ENGLISH (🇬🇧 ↔ 🇩🇪) */}
      {/* ========================================================================= */}
      {activeSubTab === 'phonetic_en' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950">
            <h4 className="font-serif font-bold text-sm text-blue-950 mb-1">
              La Segunda Mutación Consonántica Germánica (Zweite Lautverschiebung):
            </h4>
            <p className="leading-relaxed text-blue-900 font-sans">
              El inglés y el alemán divergieron a partir del siglo VI mediante cambios fonéticos regulares en las consonantes oclusivas. Si conoces estas 7 reglas, cualquier palabra inglesa se convierte en una pista directa para descifrar el alemán.
            </p>
          </div>

          {/* 7 Rule Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {cognatesData.phoneticRulesEn.map((rule) => {
              const isSelected = rule.id === activePhoneticRule.id;
              return (
                <button
                  key={rule.id}
                  onClick={() => setSelectedPhoneticRule(rule.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold shrink-0 cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  {rule.name.split(':')[0]}
                </button>
              );
            })}
          </div>

          {/* Active Rule Details Banner */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Regla de Transformación Fonética
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-2">
                  {activePhoneticRule.name}
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  {activePhoneticRule.rule}
                </p>
              </div>
            </div>

            {/* Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {filteredPhoneticExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-between gap-2 hover:bg-white hover:border-stone-300 transition-all"
                >
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-mono font-bold text-stone-900">
                        {ex.de}
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 font-mono mt-0.5">
                      🇬🇧 <strong>{ex.en}</strong> • 🇪🇸 {ex.es}
                    </div>
                  </div>

                  <button
                    onClick={() => speechService.speak(ex.de)}
                    className="p-1.5 rounded-lg bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 cursor-pointer shadow-2xs"
                    title="Pronunciar"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. VIEW: 8 LATIN SUFFIX FORMULAS WITH SPANISH (🇪🇸 ↔ 🇩🇪) */}
      {/* ========================================================================= */}
      {activeSubTab === 'latin_es' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
            <h4 className="font-serif font-bold text-sm text-emerald-950 mb-1">
              Las 8 Fórmulas Morfológicas Latinas (El Arsenal del Hispanohablante):
            </h4>
            <p className="leading-relaxed text-emerald-900 font-sans">
              El alemán incorporó miles de términos cultos del latín y del griego a lo largo de los siglos. Estos términos siguen patrones mecánicos de transformación de sufijos. ¡Al dominarlos, ganas cientos de palabras de golpe con su género gramatical fijado al 100%!
            </p>
          </div>

          {/* 8 Formula Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {cognatesData.latinSuffixFormulas.map((form) => {
              const isSelected = form.id === activeLatinFormula.id;
              return (
                <button
                  key={form.id}
                  onClick={() => setSelectedLatinFormula(form.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold shrink-0 cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  {form.name.split(':')[0]}
                </button>
              );
            })}
          </div>

          {/* Active Formula Details Banner */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <span className="text-[11px] font-mono font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {activeLatinFormula.gender}
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-2">
                  {activeLatinFormula.name}
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  💡 {activeLatinFormula.accentRule}
                </p>
              </div>
            </div>

            {/* Formula Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {filteredLatinExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-between gap-2 hover:bg-white hover:border-stone-300 transition-all"
                >
                  <div>
                    <span className="text-sm font-serif font-bold text-stone-900 block">
                      {ex.de}
                    </span>
                    <span className="text-xs text-stone-500 font-sans mt-0.5 block">
                      🇪🇸 {ex.es}
                    </span>
                  </div>

                  <button
                    onClick={() => speechService.speak(ex.de.split('(')[0].trim())}
                    className="p-1.5 rounded-lg bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 cursor-pointer shadow-2xs"
                    title="Pronunciar"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. VIEW: UNIVERSAL TWINS & TRIANGLES (🇩🇪 ↔ 🇬🇧 ↔ 🇪🇸) */}
      {/* ========================================================================= */}
      {activeSubTab === 'universal' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-950">
            <h4 className="font-serif font-bold text-sm text-purple-950 mb-1">
              Términos Gemelos y Triángulos Lingüísticos:
            </h4>
            <p className="leading-relaxed text-purple-900 font-sans">
              Palabras cotidianas transparentes que existen en alemán, inglés y español prácticamente iguales. Te permiten construir oraciones desde el primer día sin dudar.
            </p>
          </div>

          {/* Germanic Root Highlight: der See vs die See */}
          <div className="p-6 rounded-3xl bg-blue-50/80 border border-blue-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5 text-blue-950 text-xs font-mono font-bold">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>COGNADO GERMÁNICO DIRECTO (CON BIFURCACIÓN DE GÉNERO)</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              der See vs. die See ↔ English "sea"
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Ambos descienden directamente del Proto-Germánico <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200 text-blue-900">*saiwaz</code> (igual que el inglés <em>sea</em> o el neerlandés <em>zee</em>). <strong>No es un falso amigo</strong>, sino un cognado genuino que en alemán desdobló su significado mediante el género:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-stone-900">die See (Fem)</span>
                  <button onClick={() => speechService.speak('die See')} className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-600 cursor-pointer border border-stone-200" title="Pronunciar">
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs font-semibold text-blue-900 mt-1">EL MAR (mar abierto, océano)</p>
                <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">Exactamente igual que <em>sea</em> en inglés. Ej: <em>die Nordsee</em> (North Sea), <em>die Ostsee</em> (Baltic Sea), <em>zur See fahren</em> (navegar en alta mar).</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-stone-900">der See (Masc)</span>
                  <button onClick={() => speechService.speak('der See')} className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-600 cursor-pointer border border-stone-200" title="Pronunciar">
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs font-semibold text-blue-900 mt-1">EL LAGO (agua dulce interior)</p>
                <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">Misma raíz germánica con género masculino para masas de agua cerradas. Ej: <em>der Bodensee</em> (Lago Constanza), <em>der Wannsee</em>.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {filteredUniversal.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center justify-between gap-3 hover:border-stone-300 transition-all"
              >
                <div>
                  <span className="text-base font-serif font-bold text-stone-900 block leading-tight">
                    {item.de}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 mt-1">
                    <span>🇬🇧 {item.en}</span>
                    <span>•</span>
                    <span>🇪🇸 {item.es}</span>
                  </div>
                  {item.note && (
                    <span className="text-[10px] text-amber-800 font-sans mt-1 block">
                      {item.note}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => speechService.speak(item.de)}
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 cursor-pointer shrink-0"
                  title="Pronunciar"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. VIEW: GHOST DETECTOR QUIZ */}
      {/* ========================================================================= */}
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
                <p className="text-xs leading-relaxed">
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
