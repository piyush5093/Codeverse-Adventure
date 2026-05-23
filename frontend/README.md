# CodeVerse Adventure - Frontend Setup

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will run at `http://localhost:3000`

## Features

- **10 Progressive Levels**: From beginner to advanced
- **4 Programming Languages**: Python, Java, C++, JavaScript
- **Real Code Execution**: Uses Judge0 API
- **Monaco Editor**: Professional code editor with syntax highlighting
- **Phaser.js Game**: 2D adventure game with visual feedback
- **Framer Motion**: Smooth animations and transitions
- **Modern UI**: Dark theme with neon accents

## Tech Stack

- React 18
- Vite
- Phaser.js
- Monaco Editor
- Framer Motion
- Tailwind CSS
- Zustand (State Management)

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GameCanvas.jsx
│   │   ├── GameContainer.jsx
│   │   ├── CodeEditor.jsx
│   │   ├── TaskPanel.jsx
│   │   └── LanguageSelector.jsx
│   ├── config/
│   │   └── levels.js (All 10 levels with tasks)
│   ├── hooks/
│   │   ├── useGameStore.js (Zustand store)
│   │   └── useCodeExecution.js (API integration)
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Level Structure

Each level contains 5 mini-tasks that take 30-90 seconds each:
- Task instructions
- Expected output
- Hints
- Difficulty indicator
- Game action feedback (visual/animation)

## Game Actions

When a task is completed, the game world responds:
- Bridges appear
- Platforms rise
- Gates unlock
- Enemies disappear
- Portals activate
- And more...

This creates the feeling that **coding directly controls the game world**.
