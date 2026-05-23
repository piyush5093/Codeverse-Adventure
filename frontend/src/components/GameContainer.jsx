import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../hooks/useGameStore';
import { useCodeExecution } from '../hooks/useCodeExecution';
import { CodeEditor } from './CodeEditor';
import { TaskPanel } from './TaskPanel';
import { GameCanvas } from './GameCanvas';
import { LEVELS, CODE_TEMPLATES } from '../config/levels';

export const GameContainer = ({ language }) => {
  const {
    currentLevel,
    currentTask,
    code,
    output,
    isExecuting,
    gameActions,
    setCode,
    setOutput,
    setIsExecuting,
    completeTask,
    completeLevel,
    addGameAction,
    clearGameActions,
    updateStats,
    setLanguage,
    resetLevel
  } = useGameStore();

  const { executeCode, isLoading } = useCodeExecution();
  const [feedback, setFeedback] = useState('');

  const level = LEVELS[currentLevel - 1];
  const task = level?.tasks[currentTask - 1];
  const langMap = { python: 'python', java: 'java', cpp: 'cpp', javascript: 'javascript' };

  useEffect(() => {
    // Initialize code template if empty
    if (task && !code) {
      const template = CODE_TEMPLATES[language];
      if (template) {
        setCode(template);
      }
    }
  }, [currentLevel, currentTask, language, task, code, setCode]);

  const checkOutput = (output, expected) => {
    const normalize = (str) => {
      if (typeof str !== 'string') return '';
      return str
        .replace(/\r\n/g, '\n')      // Normalize CRLF to LF
        .replace(/\r/g, '\n')        // Normalize CR to LF
        .split('\n')
        .map(line => line.trimEnd()) // Trim trailing space per line
        .join('\n')
        .trim();                     // Trim overall start and end
    };

    const normOutput = normalize(output);

    if (typeof expected === 'function') {
      return expected(normOutput);
    }
    return normOutput === normalize(expected);
  };

  const handleSubmit = async () => {
    const startTime = Date.now();
    setIsExecuting(true);
    clearGameActions();
    setFeedback('');

    const result = await executeCode(code, langMap[language]);

    if (result.success && checkOutput(result.output, task.expectedOutput)) {
      // Success!
      completeTask(currentLevel, currentTask);

      // Add success animations (obstacles changing state)
      const actions = LEVELS[currentLevel - 1].gameActions;
      const actionIndex = currentTask - 1;
      if (actions[actionIndex]) {
        addGameAction(actions[actionIndex]);
      }

      // Add particle sparks
      for (let i = 0; i < 4; i++) {
        addGameAction('particle-' + i);
      }

      setFeedback('✨ CALIBRATION SUCCESSFUL! Level path unlocking...');
      setOutput(result.output);

      const elapsedTime = Date.now() - startTime;
      updateStats({
        successCount: 1,
        totalTime: elapsedTime
      });

      // Move to next task or level
      setTimeout(() => {
        if (currentTask < level.tasks.length) {
          // Next task in same level
          useGameStore.setState({ currentTask: currentTask + 1 });
          setCode('');
          setFeedback('');
        } else {
          // Level complete
          completeLevel(currentLevel);
          if (currentLevel === 10) {
            setFeedback('🏆 ARCH-OVERLORD ACCESS GRANTED! You completed the adventure!');
          } else {
            setFeedback(`✨ SECTOR CLEAR! Portal opening to Sector ${currentLevel + 1}...`);
            resetLevel();
          }
        }
      }, 1600);
    } else {
      // Failure
      setFeedback('❌ COMPILATION WARNING: Output mismatch. Correct the bugs and retry.');
      setOutput(result.output || result.error || 'Syntax exception logged.');

      updateStats({
        errorCount: 1
      });
    }

    setIsExecuting(false);
  };

  const handleQuit = () => {
    resetLevel();
    setLanguage(null);
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
        <div className="absolute top-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        
        <motion.div
          className="text-center relative z-10 bg-slate-900/40 border border-cyan-500/30 backdrop-blur-md max-w-lg p-10 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-7xl mb-6">🏆</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4">
            CONGRATULATIONS!
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            You completed all levels of the <span className="text-cyan-400 font-bold">CodeVerse Adventure</span> in {language.toUpperCase()}!
          </p>
          <motion.button
            onClick={handleQuit}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-extrabold tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RETURN TO COCKPIT
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden flex flex-col p-4 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-neutral-950 to-black text-white font-sans overflow-y-auto lg:overflow-hidden">
      {/* Top Navbar */}
      <motion.div
        className="flex-none mb-3 bg-slate-900/30 border border-slate-800/80 backdrop-blur-md rounded-2xl p-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={handleQuit}
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 transition-all text-xs font-bold tracking-widest uppercase flex items-center gap-1.5"
            title="Return to language selection"
          >
            <span>🚪</span> Exit Portal
          </button>
          <div className="h-6 w-[1px] bg-slate-800 hidden md:block" />
          <div>
            <h1 className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
              {level.name}
            </h1>
            <p className="text-slate-500 text-[10px] font-mono uppercase mt-0.5">Sector {currentLevel} of 10 • {level.difficulty}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Action buttons */}
          <button
            onClick={resetLevel}
            className="text-[10px] font-bold tracking-wider text-slate-400 hover:text-white uppercase flex items-center gap-1 bg-slate-800/30 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors"
          >
            <span>🔄</span> Reset Code
          </button>

          {/* Connection status */}
          <div className="flex items-center gap-2.5 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800/60">
            <span className="text-lg">
              {language === 'python' ? '🐍' : language === 'java' ? '☕' : language === 'cpp' ? '⚙️' : '⚡'}
            </span>
            <div className="text-left leading-none">
              <span className="text-[10px] font-bold text-slate-300 block">{language.toUpperCase()}</span>
              <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Linked
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
        {/* Column 1: Visual Game Canvas (col-span-3) */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-4 h-full min-h-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 min-h-0 flex flex-col justify-center">
            <GameCanvas levelId={currentLevel} gameActions={gameActions} />
          </div>
          
          {/* Level Progress Bar Card */}
          <div className="flex-none p-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-md">
            <div className="flex justify-between items-center text-[10px] mb-1.5">
              <span className="text-slate-400 font-semibold uppercase tracking-wider">Sector Progression</span>
              <span className="text-cyan-400 font-mono font-bold">
                {currentTask - 1}/{level.tasks.length} Resolved
              </span>
            </div>
            
            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentTask - 1) / level.tasks.length) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <p className="text-[9px] text-slate-500 font-mono mt-1 text-right">
              {Math.round(((currentTask - 1) / level.tasks.length) * 100)}% Portal Calibration Complete
            </p>
          </div>
        </motion.div>

        {/* Column 2: Tasks & Instructions Panel (col-span-4) */}
        <motion.div
          className="lg:col-span-4 flex flex-col h-full min-h-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TaskPanel
            task={task}
            taskNumber={currentTask}
            totalTasks={level.tasks.length}
            onSubmit={handleSubmit}
            isLoading={isLoading || isExecuting}
            feedback={feedback}
          />
        </motion.div>

        {/* Column 3: Unified Editor Workspace (col-span-5) */}
        <motion.div
          className="lg:col-span-5 flex flex-col h-full min-h-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-[450px] lg:h-full flex flex-col min-h-0 bg-slate-900/30 rounded-2xl border border-slate-800/80 overflow-hidden shadow-lg">
            {/* Editor Top Bar Mock Window Controls */}
            <div className="flex-none bg-slate-950/80 px-4 py-2 flex items-center justify-between border-b border-slate-850">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                Source File • src/main.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : language === 'cpp' ? 'cpp' : 'java'}
              </span>
              <div className="w-10 h-2" />
            </div>
            
            {/* Code Editor occupies the main workspace */}
            <div className="flex-1 min-h-0 relative">
              <div className="absolute inset-0">
                <CodeEditor
                  code={code}
                  onChange={setCode}
                  language={language}
                />
              </div>
            </div>

            {/* Console Log Console docked at the bottom */}
            <div className="flex-none h-[140px] border-t border-slate-800/80 bg-slate-950/70 flex flex-col min-h-0">
              <div className="flex-none bg-slate-900/20 px-4 py-1.5 border-b border-slate-800/60 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400">Sandbox Logs:</span>
                <span className="text-[9px] font-mono text-slate-500">Terminal Ready</span>
              </div>
              <div className="flex-1 min-h-0 p-3 font-mono text-xs leading-relaxed overflow-y-auto bg-black/45 text-cyan-400">
                {output ? (
                  <pre className="whitespace-pre-wrap">{output}</pre>
                ) : (
                  <span className="text-slate-600 italic">No output buffered. Execute scripts to print results...</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
