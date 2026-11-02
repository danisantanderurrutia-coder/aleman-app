// Manejo de almacenamiento local para progreso, XP, racha y estadísticas

const STORAGE_KEY = 'deutschmeister_a2_progress';

// Helper de fecha local inmutable a diferencias de zona horaria (UTC vs Local)
export const getLocalDateString = (d = new Date()) => {
  if (typeof d === 'string') {
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    d = new Date(d);
  }
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Regla del búho nocturno (Night Owl) inteligente:
// 1. Si el usuario practica antes de las 4 AM (00:00 a 03:59) y la jornada de ayer NO estaba completada,
//    la sesión se considera parte de la jornada de ayer para no romper su racha.
// 2. Si la jornada de ayer YA estaba completada, o el usuario activó la nueva jornada,
//    el sistema reconoce que ya es su nuevo día de estudio para que no se quede bloqueado.
export const getCurrentStudyDate = (now = new Date(), cutoffHour = 4) => {
  const d = new Date(now);
  const calendarToday = getLocalDateString(d);

  if (d.getHours() < cutoffHour) {
    const yesterday = new Date(d);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = getLocalDateString(yesterday);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          const yesterdayLog = parsed.calendarLogs?.[yesterdayStr];
          const yesterdayDone = !!(yesterdayLog?.completed || parsed[`daily_checkin_${yesterdayStr}`]);
          if (parsed.forcedStudyDate === calendarToday || yesterdayDone) {
            return calendarToday;
          }
        }
      }
    } catch (_) {}

    return yesterdayStr;
  }
  return calendarToday;
};

// Permite al usuario iniciar inmediatamente la siguiente jornada académica sin esperar a las 4 AM
export const advanceToNextCurriculumDay = () => {
  const current = getProgress();
  const nextDay = (current.curriculumDay || 1) + 1;
  const now = new Date();
  const calendarToday = getLocalDateString(now);
  const questsKey = `quests_${calendarToday}`;

  return saveProgress({
    curriculumDay: nextDay,
    forcedStudyDate: calendarToday,
    lastActiveDate: calendarToday,
    [questsKey]: {
      focusDone: false,
      vocabDone: false,
      grammarDone: false,
      claimedBonus: false
    }
  });
};

export const getYesterdayLocalDateString = (d = new Date()) => {
  const prev = new Date(d);
  prev.setDate(prev.getDate() - 1);
  return getLocalDateString(prev);
};

// Recalcular racha de días consecutivos ininterrumpidos a partir de calendarLogs
export const calculateStreakFromLogs = (calendarLogs = {}, currentStudyDate = getCurrentStudyDate()) => {
  let streak = 0;
  let checkDate = new Date(currentStudyDate);

  // Si hoy está marcado como completado, suma 1 y mira los días previos
  const todayStr = getLocalDateString(checkDate);
  const isTodayCompleted = !!calendarLogs[todayStr]?.completed;

  if (isTodayCompleted) {
    streak++;
    checkDate.setDate(checkDate.getDate() - 1);
  } else {
    // Si hoy aún no se completa, evaluar desde ayer para no romper la racha mientras estudia hoy
    checkDate.setDate(checkDate.getDate() - 1);
  }

  // Contar días consecutivos hacia atrás
  while (true) {
    const dStr = getLocalDateString(checkDate);
    if (calendarLogs[dStr]?.completed) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return Math.max(1, streak);
};

const defaultState = {
  xp: 0,
  streak: 1,
  curriculumDay: 1,
  completedCurriculumDays: [],
  lastActiveDate: getCurrentStudyDate(),
  completedGrammarExercises: {}, // { [topicId]: [exerciseIndex, ...] }
  masteredVocab: [], // IDs de palabras dominadas
  learningVocab: [], // IDs de palabras en proceso
  articleGameHighScore: 0,
  completedDialogues: [],
  completedSentences: [],
  dailyGoalXP: 50,
  todayXP: 0,
  calendarLogs: {},
};

export const getProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const data = JSON.parse(raw);
    
    // Verificar racha diaria con la regla de corte a las 4 AM
    const today = getCurrentStudyDate();
    if (data.lastActiveDate !== today) {
      const yesterday = getYesterdayLocalDateString(new Date(today));
      if (data.lastActiveDate === yesterday) {
        // Mantiene racha
      } else {
        // Si no fue ayer, verificar si los logs del calendario confirman días consecutivos
        const computedStreak = calculateStreakFromLogs(data.calendarLogs || {}, today);
        data.streak = computedStreak;
      }
      data.lastActiveDate = today;
      data.todayXP = 0; // Reiniciar meta diaria de XP
    }
    
    return { ...defaultState, ...data };
  } catch (e) {
    console.error('Error reading localStorage', e);
    return defaultState;
  }
};

export const saveProgress = (updates) => {
  try {
    const current = getProgress();
    const updated = { ...current, ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error saving to localStorage', e);
    return defaultState;
  }
};

export const addXP = (amount) => {
  const current = getProgress();
  const newXP = current.xp + amount;
  const newTodayXP = (current.todayXP || 0) + amount;
  return saveProgress({
    xp: newXP,
    todayXP: newTodayXP,
  });
};

export const getTodayDate = () => getCurrentStudyDate();

export const getDailyQuests = (progressState) => {
  const current = progressState || getProgress();
  const today = getTodayDate();
  return current[`quests_${today}`] || {
    focusDone: false,
    vocabDone: false,
    grammarDone: false,
    claimedBonus: false
  };
};

export const updateDailyQuest = (questName, isDone = true) => {
  const current = getProgress();
  const today = getTodayDate();
  const key = `quests_${today}`;
  const currentQuests = current[key] || {
    focusDone: false,
    vocabDone: false,
    grammarDone: false,
    claimedBonus: false
  };
  
  const updatedQuests = {
    ...currentQuests,
    [questName]: isDone,
    [`${questName}_awarded`]: true
  };
  
  return saveProgress({ [key]: updatedQuests });
};

export const areAllQuestsCompleted = (progressState) => {
  const quests = getDailyQuests(progressState);
  return !!(quests.focusDone && quests.vocabDone && quests.grammarDone);
};
