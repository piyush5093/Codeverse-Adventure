import { create } from 'zustand';

export const useGameStore = create((set, get) => ({
  currentLevel: 1,
  currentTask: 1,
  selectedLanguage: null,
  completedTasks: new Set(),
  completedLevels: new Set(),
  code: '',
  output: '',
  isExecuting: false,
  gameProgress: 0,
  characterPosition: 0,
  gameActions: [],
  userStats: {
    totalTime: 0,
    successCount: 0,
    errorCount: 0,
    averageTime: 0
  },

  // Actions
  setLanguage: (lang) => set({ selectedLanguage: lang }),
  setCode: (code) => set({ code }),
  setOutput: (output) => set({ output }),
  setIsExecuting: (isExecuting) => set({ isExecuting }),
  
  setCurrentLevel: (level) => set({ currentLevel: level }),
  setCurrentTask: (task) => set({ currentTask: task }),
  
  completeTask: (levelId, taskId) => set((state) => ({
    completedTasks: new Set([...state.completedTasks, `${levelId}-${taskId}`]),
    gameProgress: state.gameProgress + 10,
    characterPosition: state.characterPosition + 5
  })),
  
  completeLevel: (levelId) => set((state) => ({
    completedLevels: new Set([...state.completedLevels, levelId]),
    currentLevel: levelId + 1,
    characterPosition: state.characterPosition + 50
  })),
  
  addGameAction: (action) => set((state) => ({
    gameActions: [...state.gameActions, action]
  })),
  
  clearGameActions: () => set({ gameActions: [] }),
  
  updateStats: (stats) => set((state) => ({
    userStats: { ...state.userStats, ...stats }
  })),
  
  resetLevel: () => set({ code: '', output: '', gameActions: [] })
}));
