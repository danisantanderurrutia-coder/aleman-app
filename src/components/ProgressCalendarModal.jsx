import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, Clock, CheckCircle2, Circle, ChevronLeft, 
  ChevronRight, X, Sparkles, BookOpen, Flame, Award, Edit3, Save, Check,
  Target, Bookmark, ArrowRight
} from 'lucide-react';
import { curriculumRoadmap } from '../data/curriculumRoadmap';
import { saveProgress, addXP, getLocalDateString } from '../utils/storage';
import confetti from 'canvas-confetti';

export default function ProgressCalendarModal({ isOpen, onClose, progress, setProgress, setActiveTab }) {
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
  
  // Selected Day in Calendar (defaults to today formatted as YYYY-MM-DD local)
  const todayFormatted = getLocalDateString();
  const [selectedDateStr, setSelectedDateStr] = useState(todayFormatted);

  // Form states for the selected date
  const calendarLogs = progress.calendarLogs || {};
  const existingLog = calendarLogs[selectedDateStr] || {};

  const [selectedDaySyllabus, setSelectedDaySyllabus] = useState(existingLog.syllabusDay || progress.curriculumDay || 1);
  const [isCompletedForDate, setIsCompletedForDate] = useState(!!existingLog.completed);
  const [studyMinutes, setStudyMinutes] = useState(existingLog.studyMinutes || 15);
  const [studyNotes, setStudyNotes] = useState(existingLog.notes || '');
  const [movilidadDone, setMovilidadDone] = useState(!!existingLog.habits?.movilidad);
  const [calisteniaDone, setCalisteniaDone] = useState(!!existingLog.habits?.calistenia);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Update form inputs whenever selectedDateStr or calendarLogs change
  useEffect(() => {
    const log = calendarLogs[selectedDateStr] || {};
    setSelectedDaySyllabus(log.syllabusDay || progress.curriculumDay || 1);
    setIsCompletedForDate(!!log.completed);
    setStudyMinutes(log.studyMinutes || 15);
    setStudyNotes(log.notes || '');
    setMovilidadDone(!!log.habits?.movilidad);
    setCalisteniaDone(!!log.habits?.calistenia);
    setSaveSuccessMsg(false);
  }, [selectedDateStr, progress]);

  if (!isOpen) return null;

  // Month Calendar Grid calculations
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth(); // 0-indexed

  const monthNames = [
    'Enero (Januar)', 'Febrero (Februar)', 'Marzo (März)', 'Abril (April)',
    'Mayo (Mai)', 'Junio (Juni)', 'Julio (Juli)', 'Agosto (August)',
    'Septiembre (September)', 'Octubre (Oktober)', 'Noviembre (November)', 'Diciembre (Dezember)'
  ];

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  // Monday as first day: JS getDay() is 0 for Sunday, 1 for Monday...
  let startingDayOfWeek = firstDayOfMonth.getDay() - 1;
  if (startingDayOfWeek === -1) startingDayOfWeek = 6;

  const totalDaysInMonth = lastDayOfMonth.getDate();

  // Days array for the grid
  const daysGrid = [];
  // Previous month trailing days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const dObj = new Date(year, month - 1, prevMonthLastDay - i);
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
    const dObj = new Date(year, month + 1, d);
    daysGrid.push({
      dayNum: d,
      monthOffset: 1,
      dateStr: getLocalDateString(dObj)
    });
  }

  // Handle Saving the Progress for the selected date
  const handleSaveDayProgress = (e) => {
    e.preventDefault();

    const wasAlreadyCompleted = !!existingLog.completed;
    const isNowCompleted = isCompletedForDate;

    // Calculate XP reward
    let xpGained = 0;
    if (!wasAlreadyCompleted && isNowCompleted) {
      xpGained += 50;
      addXP(50);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    if (!existingLog.habits?.movilidad && movilidadDone) {
      xpGained += 25;
      addXP(25);
    }
    if (!existingLog.habits?.calistenia && calisteniaDone) {
      xpGained += 25;
      addXP(25);
    }

    const updatedLog = {
      date: selectedDateStr,
      completed: isNowCompleted,
      syllabusDay: Number(selectedDaySyllabus),
      studyMinutes: Number(studyMinutes),
      notes: studyNotes,
      habits: {
        movilidad: movilidadDone,
        calistenia: calisteniaDone
      },
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
    }

    // Advance curriculumDay if today's active day was completed
    let newCurriculumDay = progress.curriculumDay || 1;
    if (isNowCompleted && Number(selectedDaySyllabus) >= newCurriculumDay) {
      newCurriculumDay = Math.min(curriculumRoadmap.length, Number(selectedDaySyllabus) + 1);
    }

    // Save to storage
    const updated = saveProgress({
      calendarLogs: newCalendarLogs,
      completedCurriculumDays: newCompletedCurriculumDays,
      curriculumDay: newCurriculumDay,
      lastActiveDate: todayFormatted
    });
    setProgress(updated);

    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 3000);
  };

  // Quick jump to Today
  const handleJumpToToday = () => {
    const now = new Date();
    setViewDate(now);
    setSelectedDateStr(getLocalDateString(now));
  };

  const selectedSyllabusData = curriculumRoadmap.find(d => d.day === Number(selectedDaySyllabus)) || curriculumRoadmap[0];

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
            {/* Calendar Month Navigation Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewDate(new Date(year, month - 1, 1))}
                  className="p-2 rounded-xl hover:bg-stone-100 text-stone-600 cursor-pointer transition-colors"
                  title="Mes anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 min-w-44 text-center">
                  {monthNames[month]} {year}
                </h3>
                <button
                  onClick={() => setViewDate(new Date(year, month + 1, 1))}
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

                    {/* Habits logged indicator */}
                    {dayLog?.habits && (dayLog.habits.movilidad || dayLog.habits.calistenia) && (
                      <div className="flex items-center gap-1 text-[10px] mt-0.5">
                        {dayLog.habits.movilidad && <span title="Movilidad Articular">🤸</span>}
                        {dayLog.habits.calistenia && <span title="Calistenia">🏋️</span>}
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
              {/* Selected Date Header */}
              <div className="pb-4 border-b border-stone-100">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                    Registro de Jornada
                  </span>
                  {selectedDateStr === todayFormatted && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      Fecha de Hoy
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 capitalize">
                  {new Date(selectedDateStr + 'T12:00:00').toLocaleDateString('es-ES', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </h3>
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
                        Suma +50 XP y avanza en la escalera hacia B1/B2
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

                {/* 3. Hábitos Físicos: Movilidad Articular & Calistenia */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-1.5 flex items-center justify-between">
                    <span>3. Hábitos Físicos del Día:</span>
                    <span className="text-[10px] text-amber-700 font-sans font-normal">+25 XP c/u</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMovilidadDone(!movilidadDone)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        movilidadDone
                          ? 'bg-amber-500 text-stone-950 border-amber-500 font-bold shadow-xs'
                          : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🤸</span>
                        <div className="leading-tight">
                          <span className="text-xs block font-serif">Movilidad</span>
                          <span className={`text-[10px] ${movilidadDone ? 'text-stone-900' : 'text-stone-400'}`}>
                            {movilidadDone ? '✓ Marcada' : 'Pendiente'}
                          </span>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalisteniaDone(!calisteniaDone)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        calisteniaDone
                          ? 'bg-amber-500 text-stone-950 border-amber-500 font-bold shadow-xs'
                          : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🏋️</span>
                        <div className="leading-tight">
                          <span className="text-xs block font-serif">Calistenia</span>
                          <span className={`text-[10px] ${calisteniaDone ? 'text-stone-900' : 'text-stone-400'}`}>
                            {calisteniaDone ? '✓ Marcada' : 'Pendiente'}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 4. Notes Textarea */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-1.5">
                    4. Notas Filológicas / Apuntes del Día:
                  </label>
                  <textarea
                    value={studyNotes}
                    onChange={(e) => setStudyNotes(e.target.value)}
                    placeholder="Ej: Dudas con el dativo de Wechselpräpositionen, aprendida la palabra der Cappuccino..."
                    rows={2}
                    className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20 transition-all hover:scale-101"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar Progreso de la Fecha</span>
                </button>

                {/* Success Feedback alert */}
                {saveSuccessMsg && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold text-center flex items-center justify-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>¡Progreso del día registrado correctamente!</span>
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
