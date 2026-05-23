# CodeVerse Adventure

**A modern, beginner-friendly coding adventure game that makes learning to code feel like playing an adventure game.**

## 🎮 What is This?

CodeVerse Adventure combines:
- **Coding** - Write real, executable code
- **Adventure** - Progress through 10 challenging levels
- **Progression** - Watch your character journey through diverse environments
- **Satisfaction** - See your code directly control the game world

It's like **Duolingo for Coding mixed with a small adventure game**.

## ✨ Key Features

✅ **10 Progressive Levels** - From beginner to advanced  
✅ **4 Programming Languages** - Python, Java, C++, JavaScript  
✅ **Real Code Execution** - Using Judge0 API  
✅ **50 Unique Challenges** - 5 tasks per level  
✅ **Visual Feedback** - Game world responds to code completion  
✅ **Monaco Editor** - Professional syntax highlighting  
✅ **2D Game Engine** - Phaser.js power  
✅ **Dark Modern UI** - Neon sci-fi aesthetic  
✅ **Achievement System** - Track progress and unlock badges  

## 🚀 Quick Start

### Installation

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (separate terminal)
cd backend
npm install
npm run dev
```

### Get Judge0 API Key

1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Sign up and subscribe (free tier available)
3. Copy API key
4. Create `.env` in backend folder:
   ```
   JUDGE0_API_KEY=your_key_here
   ```

### Visit the Game

Open http://localhost:3000 in your browser

## 📚 Game Progression

```
Level 1: Beginner Land         → Basic output
Level 2: Loop Forest            → Master loops
Level 3: Array Desert           → Work with arrays
Level 4: String Cave            → String manipulation
Level 5: Logic Mountain         → Complex logic
Level 6: Function Temple        → Function design
Level 7: Recursion Dungeon      → Recursive thinking
Level 8: Sorting City           → Sorting algorithms
Level 9: Debug Lab              → Fix broken code
Level 10: Final Core            → Ultimate challenge
```

## 🎨 Visual Experience

- **Dark Modern Theme** - Easy on the eyes
- **Neon Accents** - Cyan and blue highlights
- **Smooth Animations** - Framer Motion
- **Game World** - Phaser.js 2D environments
- **Particle Effects** - Visual success feedback

## 💻 Tech Stack

**Frontend:**
- React 18
- Vite
- Phaser.js
- Monaco Editor
- Framer Motion
- Tailwind CSS
- Zustand

**Backend:**
- Node.js
- Express.js
- Judge0 API

## 📖 Documentation

- [SETUP.md](./SETUP.md) - Complete setup guide
- [FEATURES.md](./FEATURES.md) - Detailed features
- [frontend/README.md](./frontend/README.md) - Frontend docs
- [backend/README.md](./backend/README.md) - Backend docs

## 🎯 Who Is This For?

- **Absolute Beginners** - Soft introduction to coding
- **Students** - Learn programming fundamentals
- **Educators** - Engaging way to teach coding
- **Job Seekers** - Practice coding interviews
- **Lifelong Learners** - Keep skills sharp

## 🏆 What Makes It Special?

### 1. Code Controls the World
Your code doesn't just produce output—it makes things happen in the game:
- Bridges appear
- Platforms rise
- Gates unlock
- Character progresses

### 2. Real Code, Real Execution
No quiz game here. You write actual, runnable code with real syntax and execution.

### 3. Progressive Difficulty
Each level introduces one new concept, building on previous knowledge.

### 4. Fast Feedback Loop
Submit → Execute → See Results → Learn → Move Forward

### 5. Achievement & Motivation
Visual progress, unlocked levels, and the "CodeVerse Master" title.

## 🔧 Configuration

### Add More Levels

Edit `frontend/src/config/levels.js`:

```javascript
{
  id: 11,
  name: "Your Level Name",
  theme: "your-theme",
  description: "Description",
  difficulty: "Hard",
  gameActions: ["action1", "action2"],
  tasks: [
    {
      id: 1,
      title: "Task Title",
      description: "What to do",
      expectedOutput: "correct output",
      hints: "Helpful hint",
      difficulty: "medium"
    },
    // ... 5 tasks per level
  ]
}
```

### Customize Languages

Edit `backend/src/utils/judge0API.js`:

```javascript
const LANGUAGE_MAP = {
  go: 60,
  rust: 73,
  // Add more languages by ID
};
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Heroku)
```bash
cd backend
npm run build
git push heroku main
```

## 📊 Example Game Flow

```
1. Player selects Python
2. Game loads Level 1: Beginner Land
3. First task: "Print Hello World"
4. Code editor opens with template
5. Player writes: print("Hello World")
6. Submits code
7. Backend executes via Judge0
8. Output matches expected
9. Success animation plays
10. Bridge appears in game world
11. Character moves forward
12. Progress bar fills
13. Next task loads
14. Repeat...
```

## ⚡ Performance

- Vite fast build times
- Code splitting for faster loads
- Optimized Phaser.js scenes
- Efficient state management
- MongoDB-ready architecture

## 🐛 Common Issues

**CORS Error?** → Check backend URL in frontend

**Judge0 API 401?** → Verify API key in `.env`

**Code won't execute?** → Check network tab, verify backend running

## 📈 Future Ideas

- User accounts & leaderboards
- Multiplayer challenges
- More languages
- Code history
- Custom difficulty
- Achievements/badges
- Mobile app
- Offline mode
- AI-powered hints

## 📄 License

Educational platform for CodeVerse. 

## 🤝 Contributing

Fork, improve, and submit PRs. This is a living project!

## 💬 Questions?

Check the documentation files or create an issue.

---

**Ready to start your coding adventure?** 🚀

```bash
npm run dev
```

And visit http://localhost:3000
