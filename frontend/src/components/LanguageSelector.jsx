import React from 'react';
import { motion } from 'framer-motion';

export const LanguageSelector = ({ onSelect }) => {
  const languages = [
    { 
      name: 'Python', 
      id: 'python', 
      icon: '🐍', 
      color: 'from-emerald-500 to-green-600', 
      border: 'border-emerald-500/40',
      shadow: 'shadow-emerald-500/20',
      difficulty: 'Easy', 
      desc: 'Ideal for beginners. Powering AI, Web, and Automation.',
      badge: 'Highly Popular'
    },
    { 
      name: 'Java', 
      id: 'java', 
      icon: '☕', 
      color: 'from-amber-500 to-red-600', 
      border: 'border-amber-500/40',
      shadow: 'shadow-amber-500/20',
      difficulty: 'Medium', 
      desc: 'Object-Oriented giant. Powers Enterprise Systems & Android.',
      badge: 'Industry Standard'
    },
    { 
      name: 'C++', 
      id: 'cpp', 
      icon: '⚙️', 
      color: 'from-blue-500 to-indigo-600', 
      border: 'border-blue-500/40',
      shadow: 'shadow-blue-500/20',
      difficulty: 'Hard', 
      desc: 'Maximum performance. Runs Game Engines, Systems, and Graphics.',
      badge: 'High Performance'
    },
    { 
      name: 'JavaScript', 
      id: 'javascript', 
      icon: '⚡', 
      color: 'from-yellow-400 to-orange-500', 
      border: 'border-yellow-500/40',
      shadow: 'shadow-yellow-500/20',
      difficulty: 'Easy-Medium', 
      desc: 'Language of the web. Drives interactive apps, Node.js, and browser APIs.',
      badge: 'Web Standard'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-neutral-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Arcade Background Stars & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Terminal Window */}
      <motion.div 
        className="max-w-6xl w-full z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          {/* Neon Logo Header */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block relative px-8 py-3 bg-slate-900/60 backdrop-blur-md rounded-full border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] mb-6"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold">Arcade Simulator v2.0</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            CODEVERSE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              ADVENTURE
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Select a portal to calibrate your system. Initialize syntax parsing and embark on a 10-level compiler journey.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {languages.map((lang, index) => (
            <motion.button
              key={lang.id}
              onClick={() => onSelect(lang.id)}
              className={`group relative flex flex-col justify-between h-[380px] text-left rounded-2xl border ${lang.border} bg-slate-900/40 backdrop-blur-md p-6 overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:${lang.shadow} hover:border-slate-100/20 hover:-translate-y-2`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Card Gradient Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

              {/* Glowing Top Line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${lang.color}`} />

              {/* Badge & Diff */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-slate-950/60 border border-slate-800 text-slate-400">
                  {lang.badge}
                </span>
                <span className={`text-xs font-semibold ${lang.id === 'cpp' ? 'text-rose-400' : lang.id === 'java' ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {lang.difficulty}
                </span>
              </div>

              {/* Icon & Name */}
              <div className="my-auto z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out inline-block">
                  {lang.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-wide mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300">
                  {lang.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {lang.desc}
                </p>
              </div>

              {/* Enter Button */}
              <div className="z-10 flex items-center justify-between pt-4 border-t border-slate-800/60 w-full">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-white transition-colors">
                  Initialize Sync
                </span>
                <svg 
                  className={`w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-all group-hover:text-white`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom Status Info */}
        <motion.div 
          className="mt-16 flex justify-center items-center gap-8 text-slate-500 text-xs font-mono tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Sandbox Execution Ready</span>
          </div>
          <div>•</div>
          <div>10 Worlds</div>
          <div>•</div>
          <div>50 Challenges</div>
        </motion.div>
      </motion.div>
    </div>
  );
};
