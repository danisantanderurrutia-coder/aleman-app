import React, { useState } from 'react';
import { vocabularyList } from '../data/vocabulary';
import { grammarTopics } from '../data/grammar';
import { dialoguesData } from '../data/dialogues';
import { sentencePuzzles } from '../data/sentenceBuilder';
import { 
  BarChart3, Award, Flame, Zap, Trophy, CheckCircle, 
  BookOpen, Layers, MessageSquare, Puzzle, Bookmark, Check, ArrowRight, GraduationCap,
  LayoutGrid, Compass, MapPin, Sparkles, Heart, Music, Ghost, Palette, Library, Sun
} from 'lucide-react';

export default function ProgressDashboard({ progress, setActiveTab, onOpenClaraMentor }) {
  // Graphing Mode Switcher: 'campus' (Blueprint del campus), 'matrix' (Cuadrícula 8x8), 'radar' (Radar de competencias), 'timeline' (Línea de progresión)
  const [graphMode, setGraphMode] = useState('campus');

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

  // Sections of the App with Hand-Drawn / SVG Style Illustrations & Descriptions
  const sections = [
    {
      id: 'grammar',
      name: 'Institut für Grammatik',
      subtitle: 'Origen de Casos & Tablas 8×8',
      category: 'Estructura Teórica',
      level: 'A2.1',
      drawingType: 'temple',
      desc: 'Comprende la génesis ontológica de Nominativ, Akkusativ y Dativ, la negación y los verbos modales.',
      progress: `${completedGrammarCount}/${totalGrammarExercises} ejercicios`,
      percent: grammarPercent,
      color: 'amber'
    },
    {
      id: 'dating',
      name: 'Café Tandem Kreuzberg',
      subtitle: 'Flirt & Date Conversacional',
      category: 'Competencia Pragmática',
      level: 'A2 Conversación',
      drawingType: 'coffee',
      desc: 'Practica alemán real con Clara y citas en Berlín. Aprende el por qué de las expresiones y objetos situacionales.',
      progress: `${(progress.datingProgress || []).length || 1} encuentros`,
      percent: Math.min(100, ((progress.datingProgress || []).length || 1) * 33),
      color: 'rose'
    },
    {
      id: 'karaoke',
      name: 'Indie Club & Bar',
      subtitle: 'Indie Karaoke Fonético',
      category: 'Inmersión Auditiva',
      level: 'A2/B1',
      drawingType: 'guitar',
      desc: 'Aprende alemán cantando con letras sincronizadas, traducciones poéticas y reproductor musical superior.',
      progress: '4 temas disponibles',
      percent: 50,
      color: 'purple'
    },
    {
      id: 'sprint',
      name: 'Bulevar 7 Palabras',
      subtitle: 'Sprints Diarios & Repositorio',
      category: 'Caudal Léxico',
      level: 'Vocabulario Diario',
      drawingType: 'lightning',
      desc: '7 palabras nuevas por día de estudio con pronunciación, género por color y baúl de palabras dominadas.',
      progress: `${masteredVocabCount} dominadas`,
      percent: vocabPercent,
      color: 'emerald'
    },
    {
      id: 'articles',
      name: 'Casino Der • Die • Das',
      subtitle: 'Automatización del Género',
      category: 'Declinación Nominal',
      level: 'A2.1 Reflejos',
      drawingType: 'dice',
      desc: 'Juego de reflejos rápidos con sufijos morfológicos (-ung, -heit, -chen) y racha récord de aciertos.',
      progress: `Récord: ${progress.articleGameHighScore || 0} seguidos`,
      percent: Math.min(100, (progress.articleGameHighScore || 0) * 10),
      color: 'blue'
    },
    {
      id: 'sentences',
      name: 'Taller de Sintaxis Satzbau',
      subtitle: 'Ensamblaje & Subordinadas',
      category: 'Morfosintaxis',
      level: 'A2 ➔ B1',
      drawingType: 'train',
      desc: 'Arma cláusulas principales y subordinadas con "weil", dominando la posición del verbo conjugado al final.',
      progress: `${completedSentencesCount}/${totalSentences} cláusulas`,
      percent: Math.round((completedSentencesCount / totalSentences) * 100),
      color: 'stone'
    },
    {
      id: 'cognates',
      name: 'Cuartel Cazafantasmas',
      subtitle: 'Falsos Amigos Germano-Español',
      category: 'Trampas Cognitivas',
      level: 'Agudeza Auditiva',
      drawingType: 'ghost',
      desc: 'Caza trampas cognitivas como "Gift" (veneno), "bekommen" (recibir) o "bald" (pronto) con feedback auditivo.',
      progress: '10 trampas activas',
      percent: 70,
      color: 'cyan'
    },
    {
      id: 'pixel',
      name: 'Estudio Píxel 8×8',
      subtitle: 'Asociación Visual por Color',
      category: 'Ludificación Visual',
      level: 'A2 Mnemotecnia',
      drawingType: 'palette',
      desc: 'Matriz visual que conecta pictogramas con géneros gramaticales (azul masc, rosa fem, verde neutro).',
      progress: 'Activo',
      percent: 80,
      color: 'indigo'
    },
    {
      id: 'pedagogy',
      name: 'Biblioteca Pedagógica',
      subtitle: 'Dossiers Teóricos Completos',
      category: 'Archivo Teórico',
      level: 'A2 Tratados',
      drawingType: 'library',
      desc: 'Consulta los tratados teóricos y análisis oracionales de los documentos de estudio en cualquier momento.',
      progress: '4 tratados',
      percent: 100,
      color: 'amber'
    },
    {
      id: 'test',
      name: 'Sala de Diagnóstico A2',
      subtitle: 'Auditoría & Checkpoints',
      category: 'Certificación Interna',
      level: 'Examen A2',
      drawingType: 'trophy',
      desc: 'Batería de preguntas diagnósticas para comprobar tu retención semanal y salto al nivel B1.',
      progress: 'Disponible',
      percent: 40,
      color: 'amber'
    }
  ];

  // SVG Drawing Illustration Component for each section
  const renderDrawing = (type) => {
    switch (type) {
      case 'temple':
        return (
          <svg className="w-12 h-12 text-amber-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Greek/Roman temple for grammar */}
            <path d="M6 14 L24 4 L42 14 Z" fill="#fef3c7" />
            <path d="M4 14 H44" />
            <path d="M4 18 H44" />
            <path d="M10 18 V38" strokeWidth="2.5" />
            <path d="M19 18 V38" strokeWidth="2.5" />
            <path d="M29 18 V38" strokeWidth="2.5" />
            <path d="M38 18 V38" strokeWidth="2.5" />
            <path d="M4 38 H44" />
            <path d="M2 42 H46" strokeWidth="2.5" />
          </svg>
        );
      case 'coffee':
        return (
          <svg className="w-12 h-12 text-rose-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Coffee cup with heart steam */}
            <path d="M10 16 H34 V32 C34 37 30 40 22 40 C14 40 10 37 10 32 Z" fill="#ffe4e6" />
            <path d="M34 20 H38 C41 20 42 22 42 25 C42 28 41 30 38 30 H34" />
            <path d="M6 42 H38" strokeWidth="2.5" />
            {/* Heart steam */}
            <path d="M22 6 C20 4 17 6 17 8 C17 11 22 13 22 13 C22 13 27 11 27 8 C27 6 24 4 22 6 Z" fill="#f43f5e" stroke="none" />
          </svg>
        );
      case 'guitar':
        return (
          <svg className="w-12 h-12 text-purple-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Electric guitar */}
            <path d="M12 28 C8 32 8 38 13 41 C18 44 24 42 26 36 C27 33 26 31 24 29 C26 27 28 27 30 25 C34 21 34 16 30 14" fill="#f3e8ff" />
            <circle cx="20" cy="34" r="3" fill="#9333ea" />
            <path d="M30 14 L42 2" strokeWidth="2.5" />
            <circle cx="42" cy="4" r="1.5" fill="currentColor" />
            <circle cx="44" cy="6" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'lightning':
        return (
          <svg className="w-12 h-12 text-emerald-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Lightning bolt over treasure box */}
            <rect x="8" y="24" width="32" height="18" rx="3" fill="#d1fae5" />
            <path d="M8 28 H40" />
            <circle cx="24" cy="33" r="2" fill="#047857" />
            <path d="M28 4 L16 20 H25 L20 32 L34 16 H25 Z" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
          </svg>
        );
      case 'dice':
        return (
          <svg className="w-12 h-12 text-blue-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Isometric 3-gender dice */}
            <path d="M24 6 L40 15 V33 L24 42 L8 33 V15 Z" fill="#dbeafe" />
            <path d="M24 6 V24 L40 15" />
            <path d="M24 24 L8 15" />
            <path d="M24 24 V42" />
            <circle cx="16" cy="18" r="2" fill="#1e40af" />
            <circle cx="32" cy="22" r="2" fill="#1e40af" />
            <circle cx="24" cy="33" r="2" fill="#1e40af" />
          </svg>
        );
      case 'train':
        return (
          <svg className="w-12 h-12 text-stone-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Train engine and clause car */}
            <rect x="6" y="16" width="22" height="18" rx="2" fill="#e7e5e4" />
            <rect x="10" y="20" width="8" height="6" fill="#78716c" />
            <path d="M28 22 H42 V34 H28 Z" fill="#f5f5f4" />
            <circle cx="12" cy="36" r="3" fill="#292524" />
            <circle cx="22" cy="36" r="3" fill="#292524" />
            <circle cx="35" cy="36" r="3" fill="#292524" />
            <path d="M12 16 V10 H16 V16" fill="#a8a29e" />
          </svg>
        );
      case 'ghost':
        return (
          <svg className="w-12 h-12 text-cyan-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Friendly ghost */}
            <path d="M12 24 C12 16 16 10 24 10 C32 10 36 16 36 24 V38 L32 35 L28 38 L24 35 L20 38 L16 35 L12 38 Z" fill="#cffafe" />
            <circle cx="20" cy="22" r="2.5" fill="#0e7490" />
            <circle cx="28" cy="22" r="2.5" fill="#0e7490" />
            <circle cx="24" cy="28" r="1.5" fill="#0e7490" />
          </svg>
        );
      case 'palette':
        return (
          <svg className="w-12 h-12 text-indigo-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Artist palette with 8x8 pixel dots */}
            <path d="M24 6 C34 6 42 14 42 24 C42 34 36 40 28 40 C26 40 24 38 24 36 C24 34 25 33 25 31 C25 29 23 27 21 27 H18 C11 27 6 22 6 15 C6 10 14 6 24 6 Z" fill="#e0e7ff" />
            <circle cx="16" cy="15" r="2.5" fill="#3b82f6" />
            <circle cx="24" cy="12" r="2.5" fill="#ec4899" />
            <circle cx="32" cy="16" r="2.5" fill="#10b981" />
            <circle cx="36" cy="24" r="2.5" fill="#f59e0b" />
          </svg>
        );
      case 'library':
        return (
          <svg className="w-12 h-12 text-amber-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Bookcase */}
            <rect x="8" y="8" width="32" height="34" rx="2" fill="#fef3c7" />
            <path d="M8 20 H40" />
            <path d="M8 32 H40" />
            <path d="M14 8 V20" strokeWidth="2.5" stroke="#92400e" />
            <path d="M20 8 V20" strokeWidth="2.5" stroke="#b45309" />
            <path d="M26 8 V20" strokeWidth="2.5" stroke="#d97706" />
            <path d="M14 20 V32" strokeWidth="2.5" stroke="#92400e" />
            <path d="M24 20 V32" strokeWidth="2.5" stroke="#b45309" />
          </svg>
        );
      case 'trophy':
      default:
        return (
          <svg className="w-12 h-12 text-amber-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Trophy cup with laurel */}
            <path d="M14 10 H34 V22 C34 28 30 32 24 32 C18 32 14 28 14 22 Z" fill="#fef3c7" />
            <path d="M14 14 H8 C8 20 12 24 14 24" />
            <path d="M34 14 H40 C40 20 36 24 34 24" />
            <path d="M24 32 V38" strokeWidth="2.5" />
            <path d="M16 42 H32" strokeWidth="2.5" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      
      {/* Top Banner: Dossier & Level Metrics */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-stone-900 text-white uppercase tracking-wider">
                Nivel MCER: {subLevel}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                Día de Estudio {progress.curriculumDay || 1} de 28
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Dashboard General del Sistema & Campus
            </h2>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Explora las diferentes secciones de la web representadas en mapas visuales, esquemas ilustrados y métricas de adquisición del idioma alemán.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Quick button to open Clara Mentor */}
            <button
              onClick={onOpenClaraMentor}
              className="px-4 py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-950 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer border border-amber-300 shadow-2xs transition-all hover:scale-102"
              title="Abrir cuaderno pedagógico de Clara"
            >
              <span>✍️ Cuaderno de Clara</span>
            </button>

            <div className="text-center p-3.5 rounded-2xl bg-stone-50 border border-stone-200 min-w-[90px]">
              <div className="text-2xl font-mono font-bold text-stone-900 leading-tight">
                {progress.xp}
              </div>
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">XP Totales</span>
            </div>

            <div className="text-center p-3.5 rounded-2xl bg-amber-50 border border-amber-200 min-w-[90px]">
              <div className="text-2xl font-mono font-bold text-amber-800 flex items-center justify-center gap-1 leading-tight">
                <Flame className="w-5 h-5 fill-amber-500" />
                <span>{progress.streak}</span>
              </div>
              <span className="text-[10px] font-mono text-amber-900 uppercase tracking-wider">Días Racha</span>
            </div>
          </div>
        </div>

        {/* Graphing Mode Selector Pills */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
            <span>Visualizar Campus por:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setGraphMode('campus')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                graphMode === 'campus'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <span>🏛️ Vista Campus Blueprint</span>
            </button>

            <button
              onClick={() => setGraphMode('matrix')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                graphMode === 'matrix'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <span>🎨 Vista Matriz Ilustrada</span>
            </button>

            <button
              onClick={() => setGraphMode('radar')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                graphMode === 'radar'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <span>🧭 Radar de Competencias</span>
            </button>

            <button
              onClick={() => setGraphMode('timeline')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                graphMode === 'timeline'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              <span>📈 Ruta Semanal A2➔B1</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================= MODE 1: CAMPUS BLUEPRINT (VISTA ILUSTRADA DE INSTITUTOS) ======================= */}
      {graphMode === 'campus' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Plano Arquitectónico del Campus Académico
              </h3>
              <p className="text-xs text-stone-500">
                Cada edificio representa un instituto especializado dentro de la plataforma.
              </p>
            </div>
            <span className="text-xs font-mono text-stone-400">10 Institutos Interconectados</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((sec) => (
              <div
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-stone-400 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 group-hover:scale-105 transition-transform">
                      {renderDrawing(sec.drawingType)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-200 uppercase">
                      {sec.category}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                    {sec.name}
                  </h4>
                  <div className="text-xs font-mono font-semibold text-amber-800 mb-2">
                    {sec.subtitle}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-stone-500">
                    {sec.progress}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(sec.id);
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900 group-hover:bg-amber-600 text-white text-xs font-medium transition-colors"
                  >
                    <span>Entrar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================= MODE 2: MATRIZ ILUSTRADA (CUADRÍCULA 8x8) ======================= */}
      {graphMode === 'matrix' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Matriz Visual de Cuadrícula Activa
              </h3>
              <p className="text-xs text-stone-500">
                Resumen esquemático en losetas con progreso porcentual y acceso instantáneo.
              </p>
            </div>
            <span className="text-xs font-mono text-stone-400">Total: {sections.length} Módulos</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {sections.map((sec) => (
              <div
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-500 hover:shadow-sm transition-all cursor-pointer flex flex-col items-center text-center group"
              >
                <div className="p-2 mb-2 group-hover:scale-110 transition-transform">
                  {renderDrawing(sec.drawingType)}
                </div>
                <span className="text-xs font-serif font-bold text-stone-900 line-clamp-1 group-hover:text-amber-800">
                  {sec.name}
                </span>
                <span className="text-[10px] font-mono text-stone-400 mt-0.5 line-clamp-1">
                  {sec.subtitle}
                </span>
                <div className="w-full bg-stone-100 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-stone-900 h-full rounded-full" style={{ width: `${sec.percent}%` }} />
                </div>
                <span className="text-[10px] font-mono text-stone-500 mt-1 font-semibold">
                  {sec.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================= MODE 3: RADAR DE COMPETENCIAS ======================= */}
      {graphMode === 'radar' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Radar de Competencias A2 (Los 4 Pilares del Estudiante)
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Evaluación cuantitativa y balance de destrezas para la transición hacia el nivel B1.
              </p>
            </div>

            {/* Visual Radar Bars / Gauges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Pillar 1: Caudal Léxico */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      1. Caudal Léxico & Retención
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-800">{vocabPercent}%</span>
                </div>
                <p className="text-xs text-stone-600 mb-3">
                  {masteredVocabCount} palabras dominadas de {totalVocab} en el vocabulario central.
                </p>
                <div className="w-full h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full transition-all" style={{ width: `${vocabPercent}%` }} />
                </div>
              </div>

              {/* Pillar 2: Casos & Artículos */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏛️</span>
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      2. Dominio de Casos (Nom / Akk / Dat)
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-800">{grammarPercent}%</span>
                </div>
                <p className="text-xs text-stone-600 mb-3">
                  {completedGrammarCount} de {totalGrammarExercises} ejercicios gramaticales resueltos.
                </p>
                <div className="w-full h-2.5 bg-amber-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full transition-all" style={{ width: `${grammarPercent}%` }} />
                </div>
              </div>

              {/* Pillar 3: Morfosintaxis & Satzbau */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🧱</span>
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      3. Estructura & Subordinadas (Satzbau)
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-800">
                    {Math.round((completedSentencesCount / totalSentences) * 100)}%
                  </span>
                </div>
                <p className="text-xs text-stone-600 mb-3">
                  {completedSentencesCount} de {totalSentences} cláusulas ordenadas correctamente.
                </p>
                <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-stone-900 rounded-full transition-all" style={{ width: `${(completedSentencesCount / totalSentences) * 100}%` }} />
                </div>
              </div>

              {/* Pillar 4: Fluidez & Pragmática */}
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">❤️</span>
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      4. Competencia Pragmática & Diálogos
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-rose-800">
                    {Math.min(100, (completedDialoguesCount + 1) * 35)}%
                  </span>
                </div>
                <p className="text-xs text-stone-600 mb-3">
                  Intercambio fluido en Berlín, citas de tandem y canciones en karaoke.
                </p>
                <div className="w-full h-2.5 bg-rose-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-600 rounded-full transition-all" style={{ width: `${Math.min(100, (completedDialoguesCount + 1) * 35)}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================= MODE 4: RUTA SEMANAL A2 ➔ B1 ======================= */}
      {graphMode === 'timeline' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Ruta de Progresión Modular (Día 1 a Día 28)
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Visualiza cómo cada bloque de días edifica el siguiente peldaño hacia la suficiencia en alemán.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-300 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-200 text-amber-900">
                    Días 1 a 7
                  </span>
                  <span className="text-xs">🌱</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-amber-950">Bloque 1: Cimientos</h4>
                <p className="text-[11px] text-amber-900 mt-1 leading-normal">
                  La Trinidad de los Casos (Nom / Akk / Dat). Supermercado, ropa y vocabulario diario.
                </p>
                <div className="mt-3 text-[10px] font-mono font-bold text-emerald-800 bg-white/80 p-1.5 rounded-lg border border-amber-200 text-center">
                  En curso (Día {progress.curriculumDay || 1})
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-200 text-stone-800">
                    Días 8 a 14
                  </span>
                  <span className="text-xs">🧭</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900">Bloque 2: Dativo & Espacio</h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                  Preposiciones fijas (aus, bei, mit, nach, seit, von, zu). Ubicación (wo) vs Movimiento (wohin).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-200 text-stone-800">
                    Días 15 a 21
                  </span>
                  <span className="text-xs">⚡</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900">Bloque 3: Subordinadas</h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                  Nebensätze con "weil", "dass", "wenn". Satzklammer con modales. Conectores hacia B1.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-200 text-stone-800">
                    Días 22 a 28
                  </span>
                  <span className="text-xs">🏆</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900">Bloque 4: Automatización</h4>
                <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                  Partículas modales (doch, mal, ja), fluidez espontánea, simulacro y certificación A2.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
