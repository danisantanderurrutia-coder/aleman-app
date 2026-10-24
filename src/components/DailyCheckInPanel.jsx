import React, { useState, useEffect } from 'react';
import { addXP, getProgress, saveProgress, getLocalDateString, getTodayDate } from '../utils/storage';
import { 
  Calendar, Flame, CheckCircle2, Circle, Gift, 
  ArrowRight, Sparkles, Trophy, Target, BookOpen, Heart, Zap, Clock,
  Compass, Dices, Layers, HelpCircle, ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ProgressionRoadmap from './ProgressionRoadmap';
import { dailySprintsData } from '../data/dailySprint';

export default function DailyCheckInPanel({ progress, setProgress, setActiveTab, onOpenCalendar, onAddConsecutiveDay, onOpenClaraMentor }) {
  const todayDate = getTodayDate();
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

  // Day of week for calendar display
  const dayOfWeekIdx = new Date().getDay();
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayName = dayNames[dayOfWeekIdx];

  // User Study Day Progression (Día 1, 2, 3...) - NO atado a qué día de la semana sea
  const currentCurriculumDay = progress.curriculumDay || 1;
  const sprintIndex = (currentCurriculumDay - 1) % dailySprintsData.length;
  const todaySprintTheme = dailySprintsData[sprintIndex] || dailySprintsData[0];

  // Daily Quests calculation based on user progress today
  const dailyQuestsKey = `quests_${todayDate}`;
  const questsState = progress[dailyQuestsKey] || {
    focusDone: false,
    vocabDone: false,
    grammarDone: false,
    claimedBonus: false
  };

  // Progression Curriculum System por Día de Estudio (1 a 7)
  const curriculumDayFocus = {
    1: { focus: 'Fundamentos de Casos & Ropa', desc: 'Aprende el origen de Nominativ, Akkusativ y Dativ y las 7 palabras de Ropa.', tab: 'grammar', icon: BookOpen },
    2: { focus: 'Uso del Acusativo: Compras & Alimentos', desc: 'Domina el cambio morfológico der → den y ein → einen en compras de alimentos (der Käse → den Käse).', tab: 'grammar', icon: Target },
    3: { focus: 'Citas & Conexión con Clara', desc: 'Practica tu encanto y objetos situacionales en Flirt & Date.', tab: 'dating', icon: Heart },
    4: { focus: 'Falsos Amigos & Cazafantasmas 👻', desc: 'Caza trampas cognitivas con el logo fantasma y afina tu oído.', tab: 'cognates', icon: Sparkles },
    5: { focus: 'Sintaxis & Subordinadas con "weil"', desc: 'Aprende a enviar el verbo conjugado al final de la frase.', tab: 'sentences', icon: Compass },
    6: { focus: 'Ludificación Visual 8×8', desc: 'Asocia pictogramas en matriz y agiliza Der Die Das.', tab: 'pixel', icon: Zap },
    7: { focus: 'Auditoría & Checkpoint A2.1', desc: 'Comprueba tu retención semanal con la batería diagnóstica.', tab: 'test', icon: Trophy },
  };

  const focusCycleDay = ((currentCurriculumDay - 1) % 7) + 1;
  const todayCurriculum = curriculumDayFocus[focusCycleDay] || curriculumDayFocus[1];
  const FocusIcon = todayCurriculum.icon;

  const handleNextStudyDay = () => {
    const nextDay = currentCurriculumDay + 1;
    const updated = saveProgress({ curriculumDay: nextDay });
    setProgress(updated);
  };

  const handlePrevStudyDay = () => {
    if (currentCurriculumDay <= 1) return;
    const prevDay = currentCurriculumDay - 1;
    const updated = saveProgress({ curriculumDay: prevDay });
    setProgress(updated);
  };

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

  // Handle Manual/Trigger Quest Toggle (previene inflado de XP en clicks repetidos)
  const handleToggleQuest = (questName) => {
    const isCurrentlyDone = !!questsState[questName];
    const willBeDone = !isCurrentlyDone;
    const awardedKey = `${questName}_awarded`;

    const updatedQuests = {
      ...questsState,
      [questName]: willBeDone
    };

    // Solo añade XP una vez por quest por día
    if (willBeDone && !questsState[awardedKey]) {
      addXP(15);
      updatedQuests[awardedKey] = true;
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

  const completedQuestsCount = [questsState.focusDone, questsState.vocabDone, questsState.grammarDone].filter(Boolean).length;
  const allQuestsDone = completedQuestsCount === 3;

  // Calcular los 7 días de la semana actual (Lunes a Domingo) de forma local y exacta
  const currDate = new Date();
  const currDayOfWeek = currDate.getDay(); // 0 es Domingo, 1 es Lunes...
  const distToMonday = (currDayOfWeek + 6) % 7; // 0 para Lun, 1 para Mar, ..., 6 para Dom
  const mondayOfThisWeek = new Date(currDate);
  mondayOfThisWeek.setDate(currDate.getDate() - distToMonday);

  const weekDayLabels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const weekDaysData = weekDayLabels.map((label, idx) => {
    const d = new Date(mondayOfThisWeek);
    d.setDate(mondayOfThisWeek.getDate() + idx);
    const dateStr = getLocalDateString(d);
    const isToday = dateStr === todayDate;
    const isDone = !!(progress.calendarLogs?.[dateStr]?.completed || (isToday && isCheckedInToday));
    return { label, dateStr, isToday, isDone };
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Top Banner: Login Dossier & Daily Streak */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-stone-900 text-white uppercase tracking-wider">
                {dayName} • Sesión de Hoy
              </span>
              
              {/* Study Day Selector Pill: permite al usuario controlar en qué día de estudio va */}
              <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-2.5 py-1 rounded-md shadow-2xs">
                <button
                  onClick={handlePrevStudyDay}
                  disabled={currentCurriculumDay <= 1}
                  className="text-amber-800 hover:text-amber-950 disabled:opacity-30 cursor-pointer font-mono font-bold px-1"
                  title="Día de estudio anterior"
                >
                  ◀
                </button>
                <span className="text-xs font-mono font-bold text-amber-900">
                  Día de Estudio {currentCurriculumDay} de 28 ({todaySprintTheme.dayTitle})
                </span>
                <button
                  onClick={handleNextStudyDay}
                  className="text-amber-800 hover:text-amber-950 cursor-pointer font-mono font-bold px-1"
                  title="Avanzar al siguiente día de estudio"
                >
                  ▶
                </button>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Panel de Ingreso Diario & Misiones
            </h2>
            <p className="text-xs text-stone-500 mt-1 max-w-xl">
              Tu currículum avanza según tu ritmo (Día {currentCurriculumDay}). Registra tu asistencia diaria para no perder la racha de días consecutivos.
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

          {/* 7-Day Dots de la semana actual con estado verídico y selector interactivo */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start">
            {weekDaysData.map((item) => {
              return (
                <button
                  type="button"
                  key={item.dateStr}
                  onClick={() => onOpenCalendar && onOpenCalendar(item.dateStr)}
                  title={`${item.dateStr} (${item.label}): ${item.isDone ? 'Jornada Completada ✓' : 'Pendiente'}. Haz clic para registrar avance o editar esta fecha.`}
                  className="text-center group cursor-pointer focus:outline-hidden"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${
                      item.isToday
                        ? item.isDone
                          ? 'bg-emerald-600 text-white border-emerald-600 ring-2 ring-emerald-400 ring-offset-2 shadow-xs group-hover:scale-105'
                          : 'bg-stone-900 text-white border-stone-900 ring-2 ring-amber-400 ring-offset-2 group-hover:scale-105'
                        : item.isDone
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300 group-hover:bg-emerald-100 group-hover:scale-105'
                        : 'bg-stone-50 text-stone-400 border-stone-200 group-hover:bg-stone-100 group-hover:text-stone-700'
                    }`}
                  >
                    {item.isDone ? '✓' : item.label}
                  </div>
                  <span className="text-[9px] font-mono text-stone-400 group-hover:text-stone-700 block mt-0.5">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Centro de Control del Desafío Diario (3 Misiones Unificadas y Sincronizadas) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-stone-900 text-white uppercase tracking-wider">
                Desafío del Día de Estudio {currentCurriculumDay}
              </span>
              <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                {todaySprintTheme.dayTitle} • {dayName}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              3 Misiones de Aprendizaje ({completedQuestsCount}/3 Completadas)
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-xl">
              Completa las 3 metas clave de hoy (enfoque temático, vocabulario activo y estructura) para consolidar tu avance y registrar tu día consecutivo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Botón al Cuaderno Pedagógico de Clara */}
            <button
              onClick={onOpenClaraMentor}
              className="px-4 py-2.5 rounded-2xl bg-amber-100/80 hover:bg-amber-200 text-amber-950 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer border border-amber-300 shadow-2xs transition-all hover:scale-102"
              title="Ver por qué aprendemos esto hoy y consejos pedagógicos de Clara"
            >
              <span>✍️ Cuaderno de Clara</span>
              <span className="text-[10px] bg-amber-300/80 px-1.5 py-0.5 rounded font-mono font-semibold">¿Por qué hoy?</span>
            </button>

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

        {/* Quest 1: Enfoque Temático de Hoy (Misión Estrella) */}
        <div className="divide-y divide-stone-100 mt-2">
          <div
            onClick={() => handleToggleQuest('focusDone')}
            className="py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 px-2 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <button className="text-stone-300 hover:text-stone-900 cursor-pointer">
                {questsState.focusDone ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-50" />
                ) : (
                  <Circle className="w-6 h-6 text-stone-300" />
                )}
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    Misión 1: Enfoque del Día • {todayCurriculum.focus}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300">
                    Misión Estrella ⭐
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  {todayCurriculum.desc} (+15 XP)
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab(todayCurriculum.tab);
              }}
              className="text-xs font-mono font-medium text-amber-800 hover:text-stone-900 underline"
            >
              Completar Enfoque →
            </button>
          </div>

          {/* Quest 2: Léxico Activo (Sprint de 7 Palabras de Hoy) */}
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
                  Misión 2: Léxico Activo • {todaySprintTheme.title.replace(/Tag \d+: /, '')}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Aprende o repasa las 7 palabras de hoy ({todaySprintTheme.description}). (+15 XP)
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
              Ir al Sprint de Hoy →
            </button>
          </div>

          {/* Quest 3: Estructura & Rigor */}
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
                  Misión 3: Estructura & Rigor (Sintaxis y Construcción)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Construye al menos 1 oración correcta en Satzbau o resuelve un reto estructural. (+15 XP)
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('sentences');
              }}
              className="text-xs font-mono font-medium text-stone-500 hover:text-stone-900 underline"
            >
              Ir a Sintaxis →
            </button>
          </div>
        </div>

        {/* Botón en negro con letras blancas cuando se completan las 3 misiones */}
        {allQuestsDone && (
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50 p-6 rounded-2xl border border-stone-200 animate-in fade-in">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  ¡3 de 3 Misiones Cumplidas! 🎉
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Has cumplido todos los objetivos del challenge diario de hoy.
              </p>
            </div>
            <button
              onClick={onAddConsecutiveDay || handleCheckIn}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-102 transition-all shrink-0"
            >
              <span>Añadir día consecutivo 📅</span>
            </button>
          </div>
        )}
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
