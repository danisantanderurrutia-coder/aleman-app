import React, { useState, useEffect } from 'react';
import { addXP, getProgress, saveProgress } from '../utils/storage';
import { 
  Calendar, Flame, CheckCircle2, Circle, Gift, 
  ArrowRight, Sparkles, Trophy, Target, BookOpen, Heart, Zap, Clock,
  Compass, Dices, Layers, HelpCircle, ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ProgressionRoadmap from './ProgressionRoadmap';

export default function DailyCheckInPanel({ progress, setProgress, setActiveTab, onOpenCalendar }) {
  const todayDate = new Date().toISOString().split('T')[0];
  const checkInKey = `daily_checkin_${todayDate}`;
  const isCheckedInToday = !!progress[checkInKey];

  // Live Clock (Hora y día actual en tiempo real)
  const [liveTime, setLiveTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Daily Quests calculation based on user progress today
  const dailyQuestsKey = `quests_${todayDate}`;
  const questsState = progress[dailyQuestsKey] || {
    vocabDone: false,
    dateDone: false,
    grammarDone: false,
    claimedBonus: false
  };

  // Day of week (0=Sunday, 1=Monday, etc.)
  const dayOfWeekIdx = new Date().getDay();
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayName = dayNames[dayOfWeekIdx];

  // Daily Focus Rotation System (hace que cada día sea diferente)
  const dailyRotation = {
    0: { focus: 'Auditoría & Test A2', desc: 'Comprueba tu retención semanal con la batería diagnóstica.', tab: 'test', icon: Trophy },
    1: { focus: 'Casos & Wechselpräpositionen', desc: 'Domina la diferencia entre Akkusativ (Wohin) y Dativ (Wo).', tab: 'grammar', icon: BookOpen },
    2: { focus: 'Citas & Conexión Social', desc: 'Practica tu encanto y objetos situacionales en Flirt & Date.', tab: 'dating', icon: Heart },
    3: { focus: 'Falsos Amigos & Léxico Rápido', desc: 'Caza trampas cognitivas con el logo fantasma 👻 y haz tu Sprint.', tab: 'cognates', icon: Sparkles },
    4: { focus: 'Sintaxis & Oraciones Subordinadas', desc: 'Interioriza el verbo al final con weil, dass y wenn.', tab: 'sentences', icon: Target },
    5: { focus: 'Situaciones de la Vida Real', desc: 'Desenvuélvete en el médico, estación de tren y restaurante.', tab: 'dialogues', icon: Clock },
    6: { focus: 'Ludificación Visual 8×8', desc: 'Asocia pictogramas en matriz y agiliza Der Die Das.', tab: 'pixel', icon: Zap },
  };

  const todayCurriculum = dailyRotation[dayOfWeekIdx] || dailyRotation[1];
  const FocusIcon = todayCurriculum.icon;

  // Handle Daily Attendance Check-in
  const handleCheckIn = () => {
    if (isCheckedInToday) return;

    addXP(25);
    const updated = saveProgress({
      [checkInKey]: true,
      lastActiveDate: todayDate,
    });
    setProgress(updated);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  // Handle Manual/Trigger Quest Toggle (or completion)
  const handleToggleQuest = (questName) => {
    const updatedQuests = {
      ...questsState,
      [questName]: !questsState[questName]
    };

    if (updatedQuests[questName]) {
      addXP(15);
    }

    const updated = saveProgress({ [dailyQuestsKey]: updatedQuests });
    setProgress(updated);
  };

  // Claim all-quests daily bonus
  const handleClaimBonus = () => {
    if (questsState.claimedBonus) return;

    addXP(50);
    const updated = saveProgress({
      [dailyQuestsKey]: { ...questsState, claimedBonus: true }
    });
    setProgress(updated);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  const completedQuestsCount = [questsState.vocabDone, questsState.dateDone, questsState.grammarDone].filter(Boolean).length;
  const allQuestsDone = completedQuestsCount === 3;

  const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Top Banner: Login Dossier & Daily Streak */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-stone-900 text-white uppercase tracking-wider">
                {dayName} • Sesión de Hoy
              </span>
              <span className="text-xs text-stone-400 font-mono">Registro de Asistencia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Panel de Ingreso Diario & Misiones
            </h2>
            <p className="text-xs text-stone-500 mt-1 max-w-xl">
              La constancia diaria de 15 minutos supera por mucho a las sesiones esporádicas. Cada día que entras consolidas tu racha y recibes XP.
            </p>
          </div>

          {/* Daily Check-in Button */}
          <div>
            {!isCheckedInToday ? (
              <button
                onClick={handleCheckIn}
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-xs flex items-center gap-2.5 cursor-pointer shadow-md shadow-amber-500/20 transition-all hover:scale-102"
              >
                <Gift className="w-4 h-4 fill-stone-950" />
                <span>Registrar Entrada (+25 XP)</span>
              </button>
            ) : (
              <div className="px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Asistencia de Hoy Registrada</span>
              </div>
            )}
          </div>
        </div>

        {/* Weekly Attendance Heatmap / Streak Tracker */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700">
              <Flame className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xl font-bold text-stone-900 block leading-none">
                  {progress.streak} {progress.streak === 1 ? 'Día Consecutivo' : 'Días Consecutivos'}
                </span>
                {/* Emoji de calendario al lado de días consecutivos */}
                <button
                  onClick={onOpenCalendar}
                  title="Abrir Calendario Académico & Registrar Progreso Diario"
                  className="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-serif font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-amber-300 transition-all hover:scale-103 shadow-2xs"
                >
                  <span className="text-sm">📅</span>
                  <span className="font-mono text-[11px]">Calendario</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-stone-500 font-mono">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span className="font-semibold text-stone-800">
                  {liveTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
                <span>•</span>
                <span className="capitalize">
                  {liveTime.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
                </span>
              </div>
            </div>
          </div>

          {/* 7-Day Dots */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start">
            {weekDays.map((d, idx) => {
              // rough approximation: if day matches current weekday
              const isToday = (idx + 1) % 7 === dayOfWeekIdx;
              const isPastOrToday = idx <= (dayOfWeekIdx === 0 ? 6 : dayOfWeekIdx - 1);

              return (
                <div key={d} className="text-center">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${
                      isToday
                        ? 'bg-stone-900 text-white border-stone-900 ring-2 ring-amber-400 ring-offset-2'
                        : isPastOrToday && isCheckedInToday
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-stone-50 text-stone-400 border-stone-200'
                    }`}
                  >
                    {d}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Adaptive Daily Curriculum / Focus for Today */}
      <div className="p-8 rounded-3xl bg-stone-900 text-white shadow-md mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-stone-800 border border-stone-700 text-amber-400 shrink-0 mt-1">
            <FocusIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                Enfoque Temático de {dayName}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300">
                Rotación Adaptativa
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mt-1">
              {todayCurriculum.focus}
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-xl leading-relaxed">
              {todayCurriculum.desc}
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab(todayCurriculum.tab)}
          className="px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-medium text-xs flex items-center gap-2 cursor-pointer shadow-xs shrink-0 self-start md:self-auto"
        >
          <span>Comenzar Enfoque de Hoy</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Daily Quests Board (3 Misiones Diarias) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
              Tägliche Quests • Objetivos del Día
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              3 Misiones para Completar Hoy ({completedQuestsCount}/3)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {allQuestsDone && !questsState.claimedBonus && (
              <button
                onClick={handleClaimBonus}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm animate-bounce"
              >
                <Gift className="w-4 h-4" />
                <span>Reclamar Cofre Diario (+50 XP)</span>
              </button>
            )}
            {questsState.claimedBonus && (
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                ¡Todas las Misiones Cumplidas! 🎉
              </span>
            )}
          </div>
        </div>

        {/* Quest 1 */}
        <div className="divide-y divide-stone-100 mt-2">
          <div
            onClick={() => handleToggleQuest('vocabDone')}
            className="py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 px-2 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <button className="text-stone-300 hover:text-stone-900 cursor-pointer">
                {questsState.vocabDone ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-50" />
                ) : (
                  <Circle className="w-6 h-6 text-stone-300" />
                )}
              </button>
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-900">
                  Misión 1: Léxico Activo (Sprint de 7 Palabras)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Completa o repasa la lista temática de 7 palabras del día. (+15 XP)
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('sprint');
              }}
              className="text-xs font-mono font-medium text-stone-500 hover:text-stone-900 underline"
            >
              Ir al Sprint →
            </button>
          </div>

          {/* Quest 2 */}
          <div
            onClick={() => handleToggleQuest('dateDone')}
            className="py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 px-2 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <button className="text-stone-300 hover:text-stone-900 cursor-pointer">
                {questsState.dateDone ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-50" />
                ) : (
                  <Circle className="w-6 h-6 text-stone-300" />
                )}
              </button>
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-900">
                  Misión 2: Flirt & Date (Conversación Social)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Logra una cita exitosa con Lena, Sophie, Hannah, Clara o Mia con más de 70% de encanto. (+15 XP)
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('dating');
              }}
              className="text-xs font-mono font-medium text-stone-500 hover:text-stone-900 underline"
            >
              Ir a Citas →
            </button>
          </div>

          {/* Quest 3 */}
          <div
            onClick={() => handleToggleQuest('grammarDone')}
            className="py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 px-2 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <button className="text-stone-300 hover:text-stone-900 cursor-pointer">
                {questsState.grammarDone ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-50" />
                ) : (
                  <Circle className="w-6 h-6 text-stone-300" />
                )}
              </button>
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-900">
                  Misión 3: Estructura & Rigor (Gramática o Sintaxis)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Resuelve al menos 1 ejercicio gramatical o construye 1 oración en Satzbau. (+15 XP)
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('grammar');
              }}
              className="text-xs font-mono font-medium text-stone-500 hover:text-stone-900 underline"
            >
              Ir a Gramática →
            </button>
          </div>
        </div>
      </div>

      {/* Los 4 Pilares del Alemán (Acceso Directo y Estatus) */}
      <div className="mt-8 p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-100">
          <div>
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
              Grammatische Säulen • Los 4 Pilares Estructurales
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
              Pilares Lingüísticos Fundamentales en la App
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200 self-start sm:self-auto">
            100% Integrados & Activos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Pillar 1: Partículas Modales */}
          <div 
            onClick={() => setActiveTab('grammar')}
            className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-mono text-xs font-bold">1</span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Cap. 7</span>
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-800 transition-colors">
              Partículas Modales
            </h4>
            <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
              <em>doch, mal, denn, ja, eigentlich, eben/halt</em>. El matiz para sonar empático y nativo.
            </p>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-mono font-semibold text-stone-700 group-hover:text-stone-950">
              <span>Practicar</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Declinaciones */}
          <div 
            onClick={() => setActiveTab('grammar')}
            className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-mono text-xs font-bold">2</span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Cap. 8</span>
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-blue-800 transition-colors">
              Declinaciones
            </h4>
            <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
              Artículos determinados, indeterminados y desinencias de adjetivos débil, mixta y fuerte.
            </p>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-mono font-semibold text-stone-700 group-hover:text-stone-950">
              <span>Practicar</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Géneros de los Sustantivos */}
          <div 
            onClick={() => setActiveTab('articles')}
            className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold">3</span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Módulo</span>
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-emerald-800 transition-colors">
              Géneros (Der • Die • Das)
            </h4>
            <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
              Reglas morfológicas (-ung, -heit, -or, -chen), colores asociados y juego de velocidad.
            </p>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-mono font-semibold text-stone-700 group-hover:text-stone-950">
              <span>Entrenar</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 4: Casos Gramaticales */}
          <div 
            onClick={() => setActiveTab('grammar')}
            className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-mono text-xs font-bold">4</span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Cap. 1 & 8</span>
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-purple-800 transition-colors">
              Casos Gramaticales
            </h4>
            <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
              Nominativ, Akkusativ, Dativ, Genitiv y las 9 Wechselpräpositionen (Wohin vs. Wo).
            </p>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-mono font-semibold text-stone-700 group-hover:text-stone-950">
              <span>Dominar</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Progression Roadmap (De A2 hacia B1 y B2) */}
      <ProgressionRoadmap 
        progress={progress} 
        setProgress={setProgress} 
        setActiveTab={setActiveTab} 
        isEmbedded={true} 
      />
    </div>
  );
}
