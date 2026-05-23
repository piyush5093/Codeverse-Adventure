import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../hooks/useGameStore';

export const GameCanvas = ({ levelId, gameActions }) => {
  const { currentTask } = useGameStore();

  // coordinates for 5 tasks and 1 level goal portal
  const NODES = [
    { x: 50, y: 270, label: 'Task 1' },
    { x: 130, y: 200, label: 'Task 2' },
    { x: 210, y: 250, label: 'Task 3' },
    { x: 290, y: 170, label: 'Task 4' },
    { x: 370, y: 230, label: 'Task 5' },
    { x: 450, y: 130, label: 'Portal' }
  ];

  const getThemeConfig = (id) => {
    const themes = {
      1: { // Beginner Land
        bg: 'from-emerald-950 via-slate-900 to-black',
        pathColor: '#10b981',
        nodeActiveColor: '#34d399',
        gridColor: 'rgba(16, 185, 129, 0.08)',
        decorations: (
          <>
            {/* Grassy hills */}
            <path d="M-20,320 Q80,260 200,320 T420,290 T600,340" fill="rgba(16, 185, 129, 0.1)" />
            {/* Cute trees */}
            <g transform="translate(180, 180) scale(0.6)">
              <polygon points="20,0 0,40 40,40" fill="#065f46" />
              <rect x="17" y="40" width="6" height="12" fill="#78350f" />
            </g>
            <g transform="translate(320, 240) scale(0.7)">
              <polygon points="20,0 0,40 40,40" fill="#047857" />
              <rect x="17" y="40" width="6" height="12" fill="#78350f" />
            </g>
          </>
        )
      },
      2: { // Loop Forest
        bg: 'from-green-950 via-neutral-900 to-black',
        pathColor: '#059669',
        nodeActiveColor: '#06b6d4',
        gridColor: 'rgba(5, 150, 105, 0.08)',
        decorations: (
          <>
            {/* Swirling forest paths */}
            <circle cx="90" cy="120" r="30" fill="none" stroke="rgba(5, 150, 105, 0.15)" strokeWidth="3" strokeDasharray="5 5" />
            <circle cx="340" cy="110" r="40" fill="none" stroke="rgba(5, 150, 105, 0.15)" strokeWidth="3" strokeDasharray="5 5" />
            {/* Trees */}
            <g transform="translate(80, 230) scale(0.6)">
              <circle cx="20" cy="15" r="20" fill="#065f46" />
              <rect x="17" y="30" width="6" height="15" fill="#78350f" />
            </g>
            <g transform="translate(250, 200) scale(0.8)">
              <circle cx="20" cy="15" r="20" fill="#047857" />
              <rect x="17" y="30" width="6" height="15" fill="#78350f" />
            </g>
          </>
        )
      },
      3: { // Array Desert
        bg: 'from-amber-950 via-slate-900 to-black',
        pathColor: '#d97706',
        nodeActiveColor: '#f59e0b',
        gridColor: 'rgba(217, 119, 6, 0.08)',
        decorations: (
          <>
            {/* Sand dunes */}
            <path d="M-10,310 Q100,240 280,310 T580,260" fill="rgba(217, 119, 6, 0.07)" />
            {/* Cactus */}
            <g transform="translate(160, 250) scale(0.5)">
              <rect x="15" y="0" width="10" height="40" rx="5" fill="#15803d" />
              <path d="M5,15 Q5,25 15,25" fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
              <path d="M35,10 Q35,20 25,20" fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
            </g>
          </>
        )
      },
      4: { // String Cave
        bg: 'from-purple-950 via-neutral-900 to-black',
        pathColor: '#8b5cf6',
        nodeActiveColor: '#c084fc',
        gridColor: 'rgba(139, 92, 246, 0.08)',
        decorations: (
          <>
            {/* Stalactites */}
            <polygon points="40,0 60,0 50,50" fill="rgba(139, 92, 246, 0.15)" />
            <polygon points="260,0 290,0 275,60" fill="rgba(139, 92, 246, 0.15)" />
            {/* Crystals */}
            <g transform="translate(180, 270) scale(0.6)">
              <polygon points="10,0 20,25 0,25" fill="#c084fc" opacity="0.8" />
              <polygon points="25,-10 35,25 15,25" fill="#a855f7" opacity="0.9" />
            </g>
          </>
        )
      },
      5: { // Logic Mountain
        bg: 'from-sky-950 via-slate-900 to-black',
        pathColor: '#0ea5e9',
        nodeActiveColor: '#38bdf8',
        gridColor: 'rgba(14, 165, 233, 0.08)',
        decorations: (
          <>
            {/* Mountain Peaks */}
            <polygon points="250,60 150,220 350,220" fill="rgba(255,255,255,0.03)" />
            <polygon points="380,80 300,200 460,200" fill="rgba(255,255,255,0.04)" />
            {/* Snow details */}
            <polygon points="250,60 231,90 269,90" fill="#f8fafc" opacity="0.3" />
          </>
        )
      },
      6: { // Function Temple
        bg: 'from-cyan-950 via-slate-900 to-black',
        pathColor: '#06b6d4',
        nodeActiveColor: '#22d3ee',
        gridColor: 'rgba(6, 182, 212, 0.09)',
        decorations: (
          <>
            {/* Digital circuit lines */}
            <path d="M 0,100 L 150,100 L 180,130 L 300,130" fill="none" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="2" />
            <circle cx="300" cy="130" r="3" fill="#22d3ee" opacity="0.3" />
          </>
        )
      },
      7: { // Recursion Dungeon
        bg: 'from-rose-950 via-neutral-900 to-black',
        pathColor: '#f43f5e',
        nodeActiveColor: '#fda4af',
        gridColor: 'rgba(244, 63, 94, 0.08)',
        decorations: (
          <>
            {/* Lava cracks */}
            <path d="M-10,290 C120,290 180,330 250,290 S380,310 520,290" fill="none" stroke="#f43f5e" strokeWidth="6" opacity="0.3" />
            <path d="M220,180 C280,210 320,160 380,210" fill="none" stroke="#e11d48" strokeWidth="3" opacity="0.2" />
          </>
        )
      },
      8: { // Sorting City
        bg: 'from-fuchsia-950 via-slate-900 to-black',
        pathColor: '#d946ef',
        nodeActiveColor: '#f472b6',
        gridColor: 'rgba(217, 70, 239, 0.08)',
        decorations: (
          <>
            {/* Cyberpunk Skyscrapers silhouettes */}
            <rect x="20" y="80" width="50" height="150" fill="rgba(217, 70, 239, 0.03)" />
            <rect x="350" y="50" width="70" height="200" fill="rgba(217, 70, 239, 0.04)" />
            {/* Neon light beams */}
            <line x1="70" y1="0" x2="70" y2="350" stroke="rgba(217, 70, 239, 0.06)" strokeWidth="1" />
            <line x1="350" y1="0" x2="350" y2="350" stroke="rgba(217, 70, 239, 0.06)" strokeWidth="1" />
          </>
        )
      },
      9: { // Debug Lab
        bg: 'from-indigo-950 via-neutral-900 to-black',
        pathColor: '#6366f1',
        nodeActiveColor: '#818cf8',
        gridColor: 'rgba(99, 102, 241, 0.08)',
        decorations: (
          <>
            {/* Glitch graphs */}
            <path d="M 50,60 L 70,40 L 90,70 L 110,30 L 130,50" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" />
            <circle cx="130" cy="50" r="3" fill="#818cf8" opacity="0.4" />
          </>
        )
      },
      10: { // Final Core
        bg: 'from-blue-950 via-slate-900 to-black',
        pathColor: '#3b82f6',
        nodeActiveColor: '#60a5fa',
        gridColor: 'rgba(59, 130, 246, 0.09)',
        decorations: (
          <>
            {/* Complex concentric matrix circles */}
            <circle cx="250" cy="175" r="90" fill="none" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="2" />
            <circle cx="250" cy="175" r="140" fill="none" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1" strokeDasharray="6 6" />
          </>
        )
      }
    };

    return themes[id] || themes[1];
  };

  const theme = getThemeConfig(levelId);

  // Position of active CodeBot
  const botPosition = NODES[currentTask - 1] || NODES[0];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.55)] relative">
      {/* Decorative Title Overlay */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 bg-slate-950/80 px-2 py-1 rounded border border-slate-900 uppercase">
          Sector Feed
        </span>
      </div>

      <svg 
        viewBox="0 0 500 350" 
        className={`w-full bg-gradient-to-b ${theme.bg} select-none`}
        style={{ minHeight: '320px' }}
      >
        {/* Draw Neon Grid Matrix */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={theme.pathColor} strokeWidth="1" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Draw Level-specific Decorations */}
        {theme.decorations}

        {/* Draw Interactive Obstacles based on Level/State */}
        {/* Obstacle 1: Forest/Green level River */}
        {(levelId === 1 || levelId === 2) && (
          <g>
            {/* River */}
            <path d="M170,100 C175,200 160,250 180,350" fill="none" stroke="#1d4ed8" strokeWidth="24" opacity="0.65" />
            <path d="M170,100 C175,200 160,250 180,350" fill="none" stroke="#3b82f6" strokeWidth="12" opacity="0.8" />
            
            {/* Bridge: active if task 2 is complete (i.e. task index >= 3) */}
            {currentTask >= 3 ? (
              <motion.g initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }}>
                <rect x="150" y="215" width="45" height="15" fill="#b45309" rx="3" />
                <line x1="150" y1="218" x2="195" y2="218" stroke="#f59e0b" strokeWidth="2" />
                <line x1="150" y1="227" x2="195" y2="227" stroke="#f59e0b" strokeWidth="2" />
              </motion.g>
            ) : (
              <g>
                {/* Danger flags for open river crossing */}
                <circle cx="155" cy="222" r="4" fill="#ef4444" />
                <circle cx="190" cy="222" r="4" fill="#ef4444" />
              </g>
            )}
          </g>
        )}

        {/* Obstacle 2: Laser Gate in Function Temple */}
        {levelId === 6 && (
          <g transform="translate(245, 140)">
            {/* Laser barrier posts */}
            <rect x="0" y="0" width="8" height="60" fill="#334155" rx="2" />
            <rect x="8" y="52" width="4" height="8" fill="#1e293b" />
            
            {/* Active Red Laser Beam if task 3 is not complete */}
            {currentTask < 4 ? (
              <motion.line 
                x1="4" y1="10" x2="4" y2="50" 
                stroke="#f43f5e" strokeWidth="3" 
                animate={{ opacity: [0.4, 1, 0.4] }} 
                transition={{ repeat: Infinity, duration: 1 }} 
              />
            ) : (
              <line x1="4" y1="10" x2="4" y2="50" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
            )}
          </g>
        )}

        {/* Obstacle 3: Lava Flows in Dungeon */}
        {levelId === 7 && (
          <g>
            <path d="M 0,225 C 100,225 150,185 200,225 S 300,215 500,225" fill="none" stroke="#ea580c" strokeWidth="14" opacity="0.8" />
            <path d="M 0,225 C 100,225 150,185 200,225 S 300,215 500,225" fill="none" stroke="#f97316" strokeWidth="6" opacity="0.9" />
          </g>
        )}

        {/* Winding Connection Paths */}
        <path
          d={`M ${NODES[0].x},${NODES[0].y} L ${NODES[1].x},${NODES[1].y} L ${NODES[2].x},${NODES[2].y} L ${NODES[3].x},${NODES[3].y} L ${NODES[4].x},${NODES[4].y} L ${NODES[5].x},${NODES[5].y}`}
          fill="none"
          stroke={theme.pathColor}
          strokeWidth="3"
          strokeDasharray="6 4"
          opacity="0.3"
        />

        {/* Draw Path Stepping Nodes */}
        {NODES.map((node, index) => {
          const isCompleted = currentTask > index + 1;
          const isActive = currentTask === index + 1;
          const isGoal = index === NODES.length - 1;

          return (
            <g key={index}>
              {/* Pulsing Active Ring */}
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="16"
                  fill="none"
                  stroke={theme.nodeActiveColor}
                  strokeWidth="2"
                  animate={{ r: [12, 22, 12], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              )}

              {/* Node Solid Circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isGoal ? '12' : '9'}
                fill={isCompleted ? '#10b981' : isActive ? theme.nodeActiveColor : '#1e293b'}
                stroke={isCompleted ? '#047857' : isActive ? '#ffffff' : '#0f172a'}
                strokeWidth="2"
                className="transition-all duration-300"
              />

              {/* Internal graphic for Goal Node (Portal swirl) */}
              {isGoal && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                />
              )}

              {/* Text label details */}
              <text
                x={node.x}
                y={node.y - 18}
                textAnchor="middle"
                fill={isActive ? '#ffffff' : '#94a3b8'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight={isActive ? 'bold' : 'normal'}
                opacity={isActive ? 1 : 0.6}
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Animated CodeBot Avatar */}
        <motion.g
          animate={{ x: botPosition.x, y: botPosition.y - 12 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="cursor-pointer"
        >
          {/* Flame jet booster */}
          <motion.path
            d="M-5,16 L0,25 L5,16 Z"
            fill="url(#booster-flame)"
            animate={{ scaleY: [0.8, 1.4, 0.8], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
          />
          <defs>
            <linearGradient id="booster-flame" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Robot body base */}
          <rect x="-10" y="-8" width="20" height="22" rx="4" fill="#0284c7" stroke="#e0f2fe" strokeWidth="1.5" />
          
          {/* Screeen Head */}
          <rect x="-12" y="-20" width="24" height="15" rx="3" fill="#0f172a" stroke="#e0f2fe" strokeWidth="1.5" />
          
          {/* Glowing Eyes */}
          <circle cx="-5" cy="-13" r="2.5" fill={theme.nodeActiveColor} />
          <circle cx="5" cy="-13" r="2.5" fill={theme.nodeActiveColor} />

          {/* Glowing antennas */}
          <line x1="0" y1="-20" x2="0" y2="-25" stroke="#e0f2fe" strokeWidth="1.5" />
          <circle cx="0" cy="-26" r="2" fill={theme.nodeActiveColor} />

          {/* Cute Bracket Hands: { and } */}
          <text x="-19" y="4" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace">{'{'}</text>
          <text x="13" y="4" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace">{'}'}</text>
        </motion.g>
      </svg>
    </div>
  );
};
