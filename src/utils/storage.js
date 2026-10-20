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

export const getYesterdayLocalDateString = (d = new Date()) => {
  const prev = new Date(d);
  prev.setDate(prev.getDate() - 1);
  return getLocalDateString(prev);
};

const defaultState = {
  xp: 0,
  streak: 1,
  curriculumDay: 1,
  completedCurriculumDays: [],
  lastActiveDate: getLocalDateString(),
  completedGrammarExercises: {}, // { [topicId]: [exerciseIndex, ...] }
  masteredVocab: [], // IDs de palabras dominadas
  learningVocab: [], // IDs de palabras en proceso
  articleGameHighScore: 0,
  completedDialogues: [],
  completedSentences: [],
  dailyGoalXP: 50,
  todayXP: 0,
};

export const getProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const data = JSON.parse(raw);
    
    // Verificar racha diaria respetando la hora local del usuario
    const today = getLocalDateString();
    if (data.lastActiveDate !== today) {
      const yesterday = getYesterdayLocalDateString();
      if (data.lastActiveDate === yesterday) {
        // Mantiene racha
      } else {
        // Se rompió la racha o nuevo día
        data.streak = 1;
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

export const getTodayDate = () => getLocalDateString();

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
