// Manejo de almacenamiento local para progreso, XP, racha y estadísticas

const STORAGE_KEY = 'deutschmeister_a2_progress';

const defaultState = {
  xp: 0,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
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
    
    // Verificar racha diaria
    const today = new Date().toISOString().split('T')[0];
    if (data.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
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
