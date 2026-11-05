import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, Clock, CheckCircle2, Circle, ChevronLeft, 
  ChevronRight, X, Sparkles, BookOpen, Flame, Award, Edit3, Save, Check,
  Target, Bookmark, ArrowRight, CheckSquare
} from 'lucide-react';
import { curriculumRoadmap } from '../data/curriculumRoadmap';
import { 
  saveProgress, addXP, getLocalDateString, getCurrentStudyDate, 
  calculateStreakFromLogs, safeParseDate, toggleRetroactiveCalendarDay 
} from '../utils/storage';
import confetti from 'canvas-confetti';

export default function ProgressCalendarModal({ isOpen, onClose, progress, setProgress, setActiveTab, initialDate = null }) {
  // Live Clock State (updates every second)
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calendar View Month/Year State
  const [viewDate, setViewDate] = useState(new Date());
  
  // Selected Day in Calendar (defaults to current study day formatted as YYYY-MM-DD local, respetando regla 4 AM)
  const todayFormatted = getCurrentStudyDate();
  const [selectedDateStr, setSelectedDateStr] = useState(todayFormatted);

  useEffect(() => {
    if (isOpen) {
      const validTarget = (typeof initialDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(initialDate))
        ? initialDate
        : getCurrentStudyDate();
      setSelectedDateStr(validTarget);
      setViewDate(safeParseDate(validTarget));
    }
  }, [isOpen, initialDate]);

  // Form states for the selected date
  const calendarLogs = progress.calendarLogs || {};

  const [selectedDaySyllabus, setSelectedDaySyllabus] = useState(1);
  const [isCompletedForDate, setIsCompletedForDate] = useState(false);
  const [studyMinutes, setStudyMinutes] = useState(15);
  const [studyNotes, setStudyNotes] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Update form inputs whenever selectedDateStr or calendarLogs change
  useEffect(() => {
    const log = calendarLogs[selectedDateStr] || {};
    setSelectedDaySyllabus(log.syllabusDay || progress.curriculumDay || 1);
    setIsCompletedForDate(!!log.completed);
    setStudyMinutes(log.studyMinutes || 15);
    setStudyNotes(log.notes || '');
    setSaveSuccessMsg(false);
  }, [selectedDateStr, progress]);

  if (!isOpen) return null;

  // Month Calendar Grid calculations con horas al mediodía (12:00) inmunes a desfasajes horarios
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth(); // 0-indexed

  const monthNames = [
    'Enero (Januar)', 'Febrero (Februar)', 'Marzo (März)', 'Abril (April)',
    'Mayo (Mai)', 'Junio (Juni)', 'Julio (Juli)', 'Agosto (August)',
    'Septiembre (September)', 'Octubre (Oktober)', 'Noviembre (November)', 'Diciembre (Dezember)'
  ];

  const firstDayOfMonth = new Date(year, month, 1, 12, 0, 0);
  const lastDayOfMonth = new Date(year, month + 1, 0, 12, 0, 0);
  
  // Monday as first day: JS getDay() is 0 for Sunday, 1 for Monday...
  let startingDayOfWeek = firstDayOfMonth.getDay() - 1;
  if (startingDayOfWeek === -1) startingDayOfWeek = 6;

  const totalDaysInMonth = lastDayOfMonth.getDate();

  // Days array for the grid
  const daysGrid = [];
  // Previous month trailing days
  const prevMonthLastDay = new Date(year, month, 0, 12, 0, 0).getDate();
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const dObj = new Date(year, month - 1, prevMonthLastDay - i, 12, 0, 0);
    daysGrid.push({
      dayNum: prevMonthLastDay - i,
      monthOffset: -1,
      dateStr: getLocalDateString(dObj)
    });
  }
  // Current month days
  for (let d = 1; d <= totalDaysInMonth; d++) {
    const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    daysGrid.push({
      dayNum: d,
      monthOffset: 0,
      dateStr: dStr
    });
  }
  // Next month leading days to complete full 7-col weeks
  const remainingCells = 42 - daysGrid.length;
  for (let d = 1; d <= (remainingCells % 7 === 0 ? (remainingCells > 7 ? 0 : remainingCells) : remainingCells); d++) {
    const dObj = new Date(year, month + 1, d, 12, 0, 0);
    daysGrid.push({
      dayNum: d,
      monthOffset: 1,
      dateStr: getLocalDateString(dObj)
    });
  }

  // Navegación de días seleccionados (Día anterior / Día siguiente)
  const handlePrevDay = () => {
    const d = safeParseDate(selectedDateStr);
    d.setDate(d.getDate() - 1);
    const nextStr = getLocalDateString(d);
    setSelectedDateStr(nextStr);
    setViewDate(safeParseDate(nextStr));
  };

  const handleNextDay = () => {
    const d = safeParseDate(selectedDateStr);
    d.setDate(d.getDate() + 1);
    const nextStr = getLocalDateString(d);
    setSelectedDateStr(nextStr);
    setViewDate(safeParseDate(nextStr));
  };

  // Marcado rápido directo de un día de la semana
  const handleQuickToggleDate = (targetDateStr, currentStatus) => {
    const newStatus = !currentStatus;
    const updated = toggleRetroactiveCalendarDay(targetDateStr, newStatus);
    setProgress(updated);
    if (newStatus) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }
  };

  // Handle Saving the Progress for the selected date (supports multi-day chaining)
  const handleSaveDayProgress = (e, andAdvanceToNext = false) => {
    if (e && e.preventDefault) e.preventDefault();

    const currentLog = calendarLogs[selectedDateStr] || {};
    const wasAlreadyCompleted = !!currentLog.completed;
    const isNowCompleted = isCompletedForDate;

    // Calculate XP reward
    if (!wasAlreadyCompleted && isNowCompleted) {
      addXP(50);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const updatedLog = {
      date: selectedDateStr,
      completed: isNowCompleted,
      syllabusDay: Number(selectedDaySyllabus),
      studyMinutes: Number(studyMinutes),
      notes: studyNotes,
      updatedAt: new Date().toISOString()
    };

    const newCalendarLogs = {
      ...calendarLogs,
      [selectedDateStr]: updatedLog
    };

    // Update completedCurriculumDays if applicable
    let newCompletedCurriculumDays = progress.completedCurriculumDays || [];
    if (isNowCompleted && !newCompletedCurriculumDays.includes(Number(selectedDaySyllabus))) {
      newCompletedCurriculumDays = [...newCompletedCurriculumDays, Number(selectedDaySyllabus)];
    } else if (!isNowCompleted && newCompletedCurriculumDays.includes(Number(selectedDaySyllabus))) {
      const stillUsed = Object.values(newCalendarLogs).some(l => l.completed && l.syllabusDay === Number(selectedDaySyllabus));
      if (!stillUsed) {
        newCompletedCurriculumDays = newCompletedCurriculumDays.filter(d => d !== Number(selectedDaySyllabus));
      }
    }

    // Advance curriculumDay if active day was completed
    let newCurriculumDay = progress.curriculumDay || 1;
    if (isNowCompleted && Number(selectedDaySyllabus) >= newCurriculumDay) {
      newCurriculumDay = Math.min(curriculumRoadmap.length, Number(selectedDaySyllabus) + 1);
    }

    // Recalcular racha ininterrumpida
    const newStreak = calculateStreakFromLogs(newCalendarLogs, todayFormatted);

    // Si la fecha guardada es hoy o posterior a lastActiveDate, actualizar lastActiveDate; si es retroactiva, preservar lastActiveDate existente
    const newLastActive = (progress.lastActiveDate && progress.lastActiveDate > selectedDateStr)
      ? progress.lastActiveDate
      : (selectedDateStr === todayFormatted ? todayFormatted : (progress.lastActiveDate || todayFormatted));

    // Save to storage
    const updated = saveProgress({
      calendarLogs: newCalendarLogs,
      completedCurriculumDays: newCompletedCurriculumDays,
      curriculumDay: newCurriculumDay,
      streak: newStreak,
      lastActiveDate: newLastActive
    });
    setProgress(updated);

    setSaveSuccessMsg(`¡Jornada de ${selectedDateStr} guardada!`);
    setTimeout(() => setSaveSuccessMsg(false), 3000);

    // Si se solicitó avanzar al siguiente día (marcado en serie consecutivo)
    if (andAdvanceToNext) {
      const nextDate = safeParseDate(selectedDateStr);
      nextDate.setDate(nextDate.getDate() + 1);
      const nextDateStr = getLocalDateString(nextDate);
      setSelectedDateStr(nextDateStr);
      setViewDate(safeParseDate(nextDateStr));
    }
  };

  // Quick jump to Today
  const handleJumpToToday = () => {
    const today = getCurrentStudyDate();
    setViewDate(safeParseDate(today));
    setSelectedDateStr(today);
  };

  const selectedSyllabusData = curriculumRoadmap.find(d => d.day === Number(selectedDaySyllabus)) || curriculumRoadmap[0];

  // Current Week days (Lunes a Domingo) para la barra de marcado rápido
  const selectedDateObj = safeParseDate(selectedDateStr);
  const currDayOfWeek = selectedDateObj.getDay();
  const distToMonday = (currDayOfWeek + 6) % 7;
  const mondayOfSelectedWeek = safeParseDate(selectedDateStr);
  mondayOfSelectedWeek.setDate(mondayOfSelectedWeek.getDate() - distToMonday);

  const weekDaysShort = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const quickWeekDays = weekDaysShort.map((label, idx) => {
    const d = new Date(mondayOfSelectedWeek);
    d.setDate(mondayOfSelectedWeek.getDate() + idx);
    const dateStr = getLocalDateString(d);
    const isDone = !!calendarLogs[dateStr]?.completed;
    const isToday = dateStr === todayFormatted;
    const isCurrent = dateStr === selectedDateStr;
    return { label, dayNum: d.getDate(), dateStr, isDone, isToday, isCurrent };
  });

  // Formatting strings for Live Clock
  const timeFormatted = currentTime.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  const fullDateFormatted = currentTime.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const germanDateFormatted = currentTime.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Monthly stats
  const currentMonthLogs = Object.values(calendarLogs).filter(l => l.date && l.date.startsWith(`${year}-${String(month + 1).padStart(2, '0')}`));
  const completedThisMonth = currentMonthLogs.filter(l => l.completed).length;
  const totalMinutesThisMonth = currentMonthLogs.reduce((acc, curr) => acc + (curr.studyMinutes || 0), 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#faf9f6] w-full max-w-5xl rounded-3xl border border-stone-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-5 bg-white border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center text-xl shadow-xs shrink-0">
              📅
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  Der Lernkalender • Calendario de Progresión
                </span>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  En Vivo
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-tight">
                Calendario Académico & Registro Diario
              </h2>
            </div>
          </div>

          {/* Live Date & Clock Display */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-stone-900 text-white flex items-center gap-3 font-mono border border-stone-800 shadow-xs">
              <Clock className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-sm font-bold tracking-wider text-amber-300 block leading-none">
                  {timeFormatted}
                </span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider capitalize">
                  {fullDateFormatted.split(',')[0]}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              title="Cerrar calendario"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Banner with German Day name */}
        <div className="bg-stone-100/90 border-b border-stone-200 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-900">Hoy en Alemania:</span>
            <span className="font-serif italic text-stone-800 capitalize">{germanDateFormatted}</span>
            <span className="ml-2 font-mono text-[10px] text-blue-900 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-full font-bold">
              🏥 TK Seguro: Día 15
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Días estudiados este mes: <strong className="text-stone-900">{completedThisMonth}</strong></span>
            <span>•</span>
            <span>Tiempo registrado: <strong className="text-stone-900">{totalMinutesThisMonth} min</strong></span>
          </div>
        </div>

        {/* Modal Body: Two Columns (Left = Calendar Grid, Right = Daily Progress Dossier) */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calendar Grid (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-xs">
            {/* Quick Week Bar (Marcado Rápido de Días Consecutivos / Retroactivos) */}
            <div className="mb-6 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Marcado Rápido Semanal (Haz clic para alternar o seleccionar)
                </span>
                <span className="text-[10px] font-mono text-stone-500">
                  Semana Actual
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {quickWeekDays.map((qw) => (
                  <div
                    key={qw.dateStr}
                    className={`p-1.5 sm:p-2 rounded-xl text-center border transition-all cursor-pointer flex flex-col justify-between items-center ${
                      qw.isCurrent
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs ring-2 ring-amber-400'
                        : qw.isDone
                        ? 'bg-emerald-100/80 text-emerald-900 border-emerald-300 hover:bg-emerald-200'
                        : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                    onClick={() => {
                      setSelectedDateStr(qw.dateStr);
                      setViewDate(safeParseDate(qw.dateStr));
                    }}
                    title={`${qw.label} ${qw.dayNum}: ${qw.isDone ? 'Completado ✓' : 'Pendiente'}`}
                  >
                    <span className="text-[10px] font-mono font-bold block">{qw.label}</span>
                    <span className="text-xs font-serif font-bold my-0.5">{qw.dayNum}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickToggleDate(qw.dateStr, qw.isDone);
                      }}
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] cursor-pointer transition-transform hover:scale-120 ${
                        qw.isDone 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-stone-200 text-stone-500 hover:bg-amber-300 hover:text-stone-900'
                      }`}
                      title={qw.isDone ? 'Desmarcar fecha' : 'Marcar como completada inmediatamente (+50 XP)'}
                    >
                      {qw.isDone ? '✓' : '+'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Month Navigation Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewDate(new Date(year, month - 1, 1, 12, 0, 0))}
                  className="p-2 rounded-xl hover:bg-stone-100 text-stone-600 cursor-pointer transition-colors"
                  title="Mes anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 min-w-44 text-center">
                  {monthNames[month]} {year}
                </h3>
                <button
                  onClick={() => setViewDate(new Date(year, month + 1, 1, 12, 0, 0))}
                  className="p-2 rounded-xl hover:bg-stone-100 text-stone-600 cursor-pointer transition-colors"
                  title="Mes siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleJumpToToday}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 cursor-pointer border border-stone-200 transition-colors"
              >
                Ir a Hoy (Heute)
              </button>
            </div>

            {/* Days of Week Header (Lun - Dom) */}
            <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
                <div key={d} className="text-[11px] font-mono font-bold text-stone-400 py-1 uppercase tracking-wider">
                  {d}
                </div>
              ))}
            </div>

            {/* 7x6 / 7x5 Days Matrix */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {daysGrid.map((item, idx) => {
                const isSelected = item.dateStr === selectedDateStr;
                const isToday = item.dateStr === todayFormatted;
                const isCurrentMonth = item.monthOffset === 0;

                const dayLog = calendarLogs[item.dateStr];
                const hasCompletedStudy = dayLog && dayLog.completed;
                const daySyllabus = dayLog && dayLog.syllabusDay;

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedDateStr(item.dateStr)}
                    className={`min-h-14 sm:min-h-16 p-1.5 rounded-2xl flex flex-col justify-between text-left transition-all border cursor-pointer relative ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400 ring-offset-2'
                        : isToday
                        ? 'bg-amber-50/70 border-amber-300 shadow-2xs text-stone-900'
                        : isCurrentMonth
                        ? 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                        : 'bg-stone-50/50 text-stone-300 border-stone-100'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-xs font-mono font-bold ${
                        isSelected 
                          ? 'text-white' 
                          : isToday 
                          ? 'text-amber-800 font-extrabold' 
                          : isCurrentMonth 
                          ? 'text-stone-700' 
                          : 'text-stone-300'
                      }`}>
                        {item.dayNum}
                      </span>

                      {isToday && (
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-amber-600 animate-pulse'}`} />
                      )}
                    </div>

                    {/* Techniker Krankenkasse (TK) 15th indicator */}
                    {item.dayNum === 15 && isCurrentMonth && (
                      <div className={`mt-0.5 text-[8px] font-mono font-bold px-1 py-0.2 rounded flex items-center justify-center w-full ${
                        isSelected ? 'bg-blue-400 text-stone-950' : 'bg-blue-100 text-blue-900 border border-blue-200'
                      }`}>
                        🏥 TK 15
                      </div>
                    )}

                    {/* Progress indicator pill if logged */}
                    {hasCompletedStudy && (
                      <div className={`mt-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md flex items-center justify-between w-full truncate ${
                        isSelected
                          ? 'bg-emerald-500 text-stone-950'
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}>
                        <span>✓ J{daySyllabus || '?'}</span>
                        <span className="text-[8px] opacity-80">{dayLog.studyMinutes || 15}m</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Calendar Legend */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-[11px] text-stone-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-amber-50 border border-amber-300"></span>
                <span>Día actual</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300"></span>
                <span>Jornada Completada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-stone-900 border border-stone-900"></span>
                <span>Selección Activa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Daily Progression Dossier & Logger (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-xs flex flex-col justify-between h-full">
            <div>
              {/* Selected Date Header con Navegación de Días Consecutivos */}
              <div className="pb-4 border-b border-stone-100">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                    Registro de Jornada
                  </span>
                  <div className="flex items-center gap-1.5">
                    {selectedDateStr === todayFormatted && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        Hoy
                      </span>
                    )}
                    {calendarLogs[selectedDateStr]?.completed && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        Completado
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handlePrevDay}
                    className="p-1.5 rounded-xl hover:bg-stone-100 text-stone-600 border border-stone-200 cursor-pointer transition-colors"
                    title="Ver día anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 capitalize text-center leading-tight">
                    {safeParseDate(selectedDateStr).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </h3>

                  <button
                    type="button"
                    onClick={handleNextDay}
                    className="p-1.5 rounded-xl hover:bg-stone-100 text-stone-600 border border-stone-200 cursor-pointer transition-colors"
                    title="Ver día siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Form to log progress according to curriculum progression plan */}
              <form onSubmit={handleSaveDayProgress} className="mt-5 space-y-4">
                {/* 1. Selector of Curriculum Syllabus Day */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-1.5">
                    1. Jornada del Plan Curricular (1 a 14):
                  </label>
                  <select
                    value={selectedDaySyllabus}
                    onChange={(e) => setSelectedDaySyllabus(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-serif bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  >
                    {curriculumRoadmap.map((item) => (
                      <option key={item.day} value={item.day}>
                        Jornada {item.day}: {item.title} ({item.phase})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Syllabus Card Preview */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200 font-bold">
                      {selectedSyllabusData.phase}
                    </span>
                    <span className="text-[10px] font-mono text-amber-800 font-semibold">
                      {selectedSyllabusData.badge}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-xs text-stone-900 mt-1">
                    {selectedSyllabusData.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                    🎯 <strong>Objetivo:</strong> {selectedSyllabusData.objective}
                  </p>
                </div>

                {/* 2. Completion Checkbox */}
                <div 
                  onClick={() => setIsCompletedForDate(!isCompletedForDate)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCompletedForDate
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                      : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isCompletedForDate ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-stone-400 shrink-0" />
                    )}
                    <div>
                      <span className="font-serif font-bold text-xs block">
                        {isCompletedForDate ? 'Jornada Completada con Éxito' : 'Marcar Jornada como Completada'}
                      </span>
                      <span className="text-[10px] text-stone-500 font-sans">
                        Suma +50 XP y consolida tu racha de estudio
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                    +50 XP
                  </span>
                </div>

                {/* 3. Study Minutes Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-1.5">
                    2. Tiempo Dedicado de Estudio:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[15, 30, 45, 60].map((mins) => (
                      <button
                        type="button"
                        key={mins}
                        onClick={() => setStudyMinutes(mins)}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                          studyMinutes === mins
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                        }`}
                      >
                        {mins} min
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Notes Textarea */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-1.5">
                    3. Notas Filológicas / Apuntes del Día:
                  </label>
                  <textarea
                    value={studyNotes}
                    onChange={(e) => setStudyNotes(e.target.value)}
                    placeholder="Ej: Dudas con el dativo de Wechselpräpositionen, aprendida la palabra der Cappuccino..."
                    rows={2}
                    className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white"
                  />
                </div>

                {/* Dual Submit Buttons: Single Save & Chain-Next Save */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-amber-500/20 transition-all hover:scale-101"
                  >
                    <Save className="w-4 h-4 shrink-0" />
                    <span>Guardar Fecha</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSaveDayProgress(e, true)}
                    className="w-full py-3.5 px-3 rounded-2xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-101"
                    title="Guarda esta fecha y avanza de inmediato al siguiente día para registrar varios días retroactivos seguidos"
                  >
                    <span>Guardar y siguiente</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>

                {/* Success Feedback alert */}
                {saveSuccessMsg && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold text-center flex items-center justify-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{typeof saveSuccessMsg === 'string' ? saveSuccessMsg : '¡Progreso registrado correctamente!'}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Quick jump to Study Mode button */}
            <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-stone-500 font-mono">¿Quieres estudiar este contenido?</span>
              <button
                onClick={() => {
                  onClose();
                  if (setActiveTab) setActiveTab('roadmap');
                }}
                className="text-xs font-serif font-bold text-stone-900 hover:text-amber-800 flex items-center gap-1 cursor-pointer underline"
              >
                <span>Ver Syllabus Completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
