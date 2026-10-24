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

// Regla del búho nocturno (Night Owl):
// Si el usuario practica antes de las 4 AM (00:00 a 03:59), la sesión se considera
// parte de la jornada académica del día anterior. A partir de las 04:00 AM inicia el nuevo día.
export const getCurrentStudyDate = (now = new Date(), cutoffHour = 4) => {
  const d = new Date(now);
  if (d.getHours() < cutoffHour) {
    d.setDate(d.getDate() - 1);
  }
  return getLocalDateString(d);
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
