import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../hooks/useGameStore';

export const TaskPanel = ({ task, taskNumber, totalTasks, onSubmit, isLoading, feedback }) => {
  const [activeTab, setActiveTab] = useState('instructions'); // 'instructions' or 'stats'
  const [showHint, setShowHint] = useState(false);
  
  const { completedTasks, completedLevels, userStats, currentLevel } = useGameStore();

  if (!task) return null;

  // Compute stats metrics
  const totalSubmissions = (userStats?.successCount || 0) + (userStats?.errorCount || 0);
  const successRate = totalSubmissions > 0 
    ? Math.round(((userStats?.successCount || 0) / totalSubmissions) * 100) 
    : 100;
  
  // Calculate Rank Title
  const getRankTitle = (lvl) => {
    if (lvl <= 2) return { title: 'Binary Initiate', badge: '🔰', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' };
    if (lvl <= 4) return { title: 'Syntax Pilgrim', badge: '🚀', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5' };
    if (lvl <= 6) return { title: 'Logic Artificer', badge: '⚙️', color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5' };
    if (lvl <= 8) return { title: 'Recursion Sorcerer', badge: '🧙', color: 'text-purple-400 border-purple-500/20 bg-purple-500/5' };
    return { title: 'CodeVerse Overlord', badge: '🏆', color: 'text-rose-400 border-rose-500/20 bg-rose-500/5' };
  };

  const rank = getRankTitle(currentLevel);

  return (
    <motion.div
      className="lg:h-full flex flex-col bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Tabs */}
      <div className="flex-none flex border-b border-slate-800/80 bg-slate-950/40">
        <button
          onClick={() => setActiveTab('instructions')}
          className={`flex-1 py-3 px-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 border-b-2 flex items-center justify-center gap-2 ${
            activeTab === 'instructions'
              ? 'text-cyan-400 border-cyan-500 bg-slate-900/40'
              : 'text-slate-500 border-transparent hover:text-slate-300'
          }`}
        >
          <span>📜</span> Instructions
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`flex-1 py-3 px-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 border-b-2 flex items-center justify-center gap-2 ${
            activeTab === 'stats'
              ? 'text-cyan-400 border-cyan-500 bg-slate-900/40'
              : 'text-slate-500 border-transparent hover:text-slate-300'
          }`}
        >
          <span>📊</span> Stats & Medals
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto p-5">
        <AnimatePresence mode="wait">
          {activeTab === 'instructions' ? (
            <motion.div
              key="instructions"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3.5"
            >
              {/* Task Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-cyan-500/80 font-bold">
                    Mission Task {taskNumber} of {totalTasks}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white tracking-wide mt-1">
                    {task.title}
                  </h2>
                </div>
                <span className={`px-2.5 py-1 text-xs font-bold rounded uppercase border ${
                  task.difficulty === 'hard'
                    ? 'text-rose-400 border-rose-500/30 bg-rose-500/5'
                    : task.difficulty === 'medium'
                    ? 'text-amber-400 border-amber-500/30 bg-amber-500/5'
                    : 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5'
                }`}>
                  {task.difficulty}
                </span>
              </div>

              {/* Task Description */}
              <div className="bg-slate-950/40 rounded-xl p-3.5 border border-slate-800/40">
                <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                  {task.description}
                </p>
              </div>

              {/* Expected Output */}
              <div className="bg-slate-950/60 rounded-xl p-3 border border-emerald-500/20 shadow-inner">
                <p className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-bold mb-1">
                  Expected Console Output:
                </p>
                <pre className="text-emerald-400 font-mono text-sm leading-relaxed whitespace-pre-wrap max-h-20 overflow-y-auto">
                  {typeof task.expectedOutput === 'string'
                    ? task.expectedOutput
                    : '✔️ Output satisfies evaluation criteria'}
                </pre>
              </div>

              {/* Hint Accordion */}
              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="w-full py-2.5 px-4 bg-slate-950/30 hover:bg-slate-950/50 flex items-center justify-between text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                    💡 {showHint ? 'Hide System Hint' : 'Analyze System Hint'}
                  </span>
                  <span className="text-xs">{showHint ? '▲' : '▼'}</span>
                </button>
                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-950/50 border-t border-slate-800"
                    >
                      <div className="p-3 text-xs text-amber-400/90 leading-relaxed border-l-2 border-amber-500">
                        {task.hints}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Feedback banner */}
              {feedback && (
                <motion.div
                  className={`p-3 rounded-xl border text-center text-xs font-bold ${
                    feedback.includes('❌')
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]'
                      : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  }`}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {feedback}
                </motion.div>
              )}

              {/* Submit Trigger */}
              <motion.button
                onClick={onSubmit}
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 text-white font-extrabold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block animate-spin mr-1">⌛</span>
                    <span>Compiling in Sandbox...</span>
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    <span>RUN & SUBMIT SYNTAX</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="stats"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Rank Card */}
              <div className={`p-4 rounded-xl border flex items-center gap-4 ${rank.color}`}>
                <div className="text-4xl">{rank.badge}</div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-slate-500 font-bold">SYSTEM ACCESS TITLE</p>
                  <h3 className="text-lg font-bold text-white mt-0.5">{rank.title}</h3>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Solved Tasks</span>
                  <span className="text-2xl font-extrabold text-cyan-400 mt-1 block">{completedTasks.size}</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Accuracy Rate</span>
                  <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">{successRate}%</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-center col-span-2">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Submissions Logged</span>
                  <span className="text-sm font-semibold text-slate-300 mt-1 block">
                    ✔️ {userStats?.successCount || 0} Pass | ❌ {userStats?.errorCount || 0} Fail
                  </span>
                </div>
              </div>

              {/* Unlocked Achievements */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-2">PORTAL MEDALS:</p>
                
                <div className="flex gap-2 items-center text-xs p-2.5 bg-slate-950/20 border border-slate-800/60 rounded-lg">
                  <span className="text-base">💎</span>
                  <div>
                    <span className="font-bold text-slate-300">Clean Compiler</span>
                    <p className="text-slate-500 text-[10px]">Execute syntax without runtime failures.</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-xs p-2.5 bg-slate-950/20 border border-slate-800/60 rounded-lg">
                  <span className="text-base">⚡</span>
                  <div>
                    <span className="font-bold text-slate-300">Logic Sprinter</span>
                    <p className="text-slate-500 text-[10px]">Complete a task sequence under 60 seconds.</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-xs p-2.5 bg-slate-950/20 border border-slate-800/60 rounded-lg">
                  <span className="text-base">🔥</span>
                  <div>
                    <span className="font-bold text-slate-300">Code Explorer</span>
                    <p className="text-slate-500 text-[10px]">Calibrate logic paths through multiple sectors.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
