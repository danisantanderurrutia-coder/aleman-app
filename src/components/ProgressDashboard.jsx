import React from 'react';
import { vocabularyList } from '../data/vocabulary';
import { grammarTopics } from '../data/grammar';
import { dialoguesData } from '../data/dialogues';
import { sentencePuzzles } from '../data/sentenceBuilder';
import { 
  BarChart3, Award, Flame, Zap, Trophy, CheckCircle, 
  BookOpen, Layers, MessageSquare, Puzzle, Bookmark, Check, ArrowRight, GraduationCap 
} from 'lucide-react';

export default function ProgressDashboard({ progress, setActiveTab }) {
  const totalVocab = vocabularyList.length;
  const masteredVocabCount = (progress.masteredVocab || []).length;
  const vocabPercent = Math.round((masteredVocabCount / totalVocab) * 100);

  const totalGrammarExercises = grammarTopics.reduce((acc, t) => acc + t.exercises.length, 0);
  const completedGrammarCount = Object.values(progress.completedGrammarExercises || {}).reduce(
    (acc, list) => acc + (list ? list.length : 0),
    0
  );
  const grammarPercent = Math.round((completedGrammarCount / totalGrammarExercises) * 100);

  const totalDialogues = dialoguesData.length;
  const completedDialoguesCount = (progress.completedDialogues || []).length;

  const totalSentences = sentencePuzzles.length;
  const completedSentencesCount = (progress.completedSentences || []).length;

  let subLevel = 'A2.1 Inicial';
  if (progress.xp >= 300) subLevel = 'A2.2 Avanzado';
  else if (progress.xp >= 150) subLevel = 'A2.1 Consolidado';

  const achievements = [
    {
      id: 'first_step',
      name: 'Primeros Pasos A2',
      desc: 'Acumulación de los primeros 20 XP de práctica formativa',
      unlocked: progress.xp >= 20,
      icon: '🌱'
    },
    {
      id: 'article_hunter',
      name: 'Determinación Nominal',
      desc: 'Racha de 5 aciertos seguidos en Der • Die • Das',
      unlocked: (progress.articleGameHighScore || 0) >= 5,
      icon: '🎯'
    },
    {
      id: 'grammar_champ',
      name: 'Rigor Sintáctico',
      desc: 'Resolución de 5 ejercicios analíticos de gramática',
      unlocked: completedGrammarCount >= 5,
      icon: '📚'
    },
    {
      id: 'vocab_master',
      name: 'Caudal Léxico Activo',
      desc: '10 fichas léxicas dominadas y retenidas',
      unlocked: masteredVocabCount >= 10,
      icon: '🧠'
    },
    {
      id: 'dialogue_explorer',
      name: 'Competencia Pragmática',
      desc: '2 situaciones reales analizadas e interiorizadas',
      unlocked: completedDialoguesCount >= 2,
      icon: '🇩🇪'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Dossier Header */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm mb-10 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-stone-900 text-white uppercase tracking-wider">
                Nivel MCER: {subLevel}
              </span>
              <span className="text-xs text-stone-400 font-mono">Expediente Personal del Estudiante</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Registro Académico de Progreso
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl leading-relaxed">
              Métricas consolidadas de retención léxica, exactitud morfosintáctica y destreza pragmática para nivel A2.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center p-5 rounded-2xl bg-stone-50 border border-stone-200 min-w-[110px]">
              <div className="text-3xl font-mono font-bold text-stone-900">
                {progress.xp}
              </div>
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">XP Totales</span>
            </div>

            <div className="text-center p-5 rounded-2xl bg-stone-50 border border-stone-200 min-w-[110px]">
              <div className="text-3xl font-mono font-bold text-amber-700 flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 fill-amber-500" />
                <span>{progress.streak}</span>
              </div>
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">Días Racha</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-semibold text-stone-500 uppercase">Léxico Retenido</span>
            <Layers className="w-4 h-4 text-stone-600" />
          </div>
          <div className="text-2xl font-mono font-bold text-stone-900 mb-2">
            {masteredVocabCount} <span className="text-xs text-stone-400 font-normal">/ {totalVocab}</span>
          </div>
          <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-stone-900 rounded-full" style={{ width: `${vocabPercent}%` }} />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-semibold text-stone-500 uppercase">Gramática Teórica</span>
            <BookOpen className="w-4 h-4 text-stone-600" />
          </div>
          <div className="text-2xl font-mono font-bold text-stone-900 mb-2">
            {completedGrammarCount} <span className="text-xs text-stone-400 font-normal">/ {totalGrammarExercises}</span>
          </div>
          <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-stone-900 rounded-full" style={{ width: `${grammarPercent}%` }} />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-semibold text-stone-500 uppercase">Exactitud Nominal</span>
            <Trophy className="w-4 h-4 text-stone-600" />
          </div>
          <div className="text-2xl font-mono font-bold text-stone-900 mb-1">
            {progress.articleGameHighScore || 0}
          </div>
          <p className="text-[11px] text-stone-500">Racha récord en artículos</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-semibold text-stone-500 uppercase">Casos Situacionales</span>
            <MessageSquare className="w-4 h-4 text-stone-600" />
          </div>
          <div className="text-2xl font-mono font-bold text-stone-900 mb-1">
            {completedDialoguesCount} <span className="text-xs text-stone-400 font-normal">/ {totalDialogues}</span>
          </div>
          <p className="text-[11px] text-stone-500">Transcripciones analizadas</p>
        </div>
      </div>

      {/* Badges / Diplomas */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-2xs mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Auszeichnungen • Certificaciones de Dominio</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">
          Hitos de Competencia Adquirida
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                item.unlocked
                  ? 'bg-stone-50 border-stone-300'
                  : 'bg-stone-50/40 border-stone-200 opacity-50 grayscale'
              }`}
            >
              <div className="text-2xl p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-bold text-sm text-stone-900">{item.name}</h4>
                  {item.unlocked && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <p className="text-xs text-stone-500 mt-1 leading-normal font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Advice Banner */}
      <div className="p-8 rounded-3xl bg-stone-900 text-stone-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest block mb-1">
            Pauta Pedagógica para la Sesión de Hoy
          </span>
          <h4 className="text-xl font-serif font-bold text-white mb-2">
            Consolidar el orden oracional en Nebensätze
          </h4>
          <p className="text-xs text-stone-300 max-w-xl leading-relaxed">
            La transición crítica de A2 a B1 depende de interiorizar la posición del verbo subordinado sin dudar al hablar.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab('grammar')}
            className="px-5 py-2.5 rounded-xl bg-white text-stone-900 font-medium text-xs hover:bg-stone-100 transition-all cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <span>Gramática</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTab('sentences')}
            className="px-5 py-2.5 rounded-xl bg-stone-800 text-stone-200 font-medium text-xs hover:bg-stone-700 border border-stone-700 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Sintaxis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
