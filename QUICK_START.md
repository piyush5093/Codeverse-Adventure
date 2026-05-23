# CodeVerse Adventure - Quick Reference & Getting Started

## 🚀 30-Second Setup

```bash
# 1. Get API Key
# → Visit https://rapidapi.com/judge0-official/api/judge0-ce
# → Sign up → Subscribe → Copy API key

# 2. Backend Setup
cd backend
npm install
echo "JUDGE0_API_KEY=your_key_here" > .env
npm run dev

# 3. Frontend Setup (new terminal)
cd frontend
npm install
npm run dev

# 4. Open Browser
# → http://localhost:3000
```

Done! Game is running. ✨

---

## 📂 Project Structure

```
Game/
├── frontend/              # React app
│   ├── src/
│   │   ├── components/   # Game UI components
│   │   ├── config/       # 10 levels + 50 tasks
│   │   ├── hooks/        # State & API logic
│   │   └── ...
│   ├── package.json
│   └── README.md
│
├── backend/              # Express API
│   ├── src/
│   │   ├── controllers/  # Code execution logic
│   │   ├── routes/       # API endpoints
│   │   ├── utils/        # Judge0 integration
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── README.md             # Overview
├── SETUP.md              # Detailed setup
├── FEATURES.md           # Feature list
├── ARCHITECTURE.md       # Technical details
├── CUSTOMIZE.md          # How to extend
├── DEPLOYMENT.md         # Deploy guide
└── This file
```

---

## 🎮 How It Works

```
Player selects language
        ↓
Game loads Level 1-10
        ↓
Task description shown
        ↓
Code editor opens (Monaco)
        ↓
Player writes code
        ↓
Submit → Backend executes via Judge0
        ↓
Output checked against expected
        ↓
✅ Match → Animation + Next task
❌ No match → Retry same task
        ↓
Continue until all 50 tasks done
```

---

## 💻 Tech Stack

| Purpose | Technology |
|---------|-----------|
| Frontend | React 18, Vite |
| Editor | Monaco Editor |
| Game | Phaser.js |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| State | Zustand |
| Backend | Express.js |
| Execution | Judge0 API |

---

## 🔧 Common Commands

```bash
# Frontend
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm run preview      # Preview production build

# Backend
npm run dev          # Start dev server (port 3001)
npm start            # Start production server

# Both
npm install          # Install dependencies
npm test             # Run tests (if configured)
```

---

## 📝 Key Files to Edit

### Add Levels
File: `frontend/src/config/levels.js`
- Add new level object with 5 tasks
- Update gameActions array
- Add code templates

### Change Languages
File: `backend/src/utils/judge0API.js`
- Update LANGUAGE_MAP with new language IDs
- Add code template in levels.js

### Customize UI
File: `frontend/src/index.css`
- Change colors and themes
- Update animations

### Add Features
File: `frontend/src/components/`
- Create new components as needed
- Import and use in GameContainer

---

## 🌐 Supported Languages

| Language | Version |
|----------|---------|
| Python | 3.8.1 |
| Java | OpenJDK 13 |
| C++ | GCC 9.2 |
| JavaScript | Node.js 12 |

---

## 📊 Game Progression

```
Level 1  → Easy (print, variables)
Level 2  → Loops (for, while)
Level 3  → Arrays (access, iterate)
Level 4  → Strings (manipulation)
Level 5  → Logic (conditions, math)
Level 6  → Functions (define, call)
Level 7  → Recursion (call self)
Level 8  → Sorting (algorithms)
Level 9  → Debugging (fix code)
Level 10 → Mixed (all concepts)

Each level: 5 tasks = 30-90 seconds each
Total: 50 tasks, ~2-3 hours playtime
```

---

## 🎯 Task Structure

Every task has:

```javascript
{
  title: "Task Name",
  description: "What to do",
  expectedOutput: "correct output",
  hints: "Helpful hint",
  difficulty: "easy|medium|hard"
}
```

---

## ⚡ Performance Tips

### Frontend
- Vite provides fast builds
- Monaco Editor lazy loads
- Phaser scenes optimized
- Zustand for efficient state

### Backend
- Judge0 handles heavy lifting
- 10 second timeout
- Error handling built-in
- Ready for scaling

---

## 🔐 Security

- Judge0 sandboxes code execution
- No arbitrary code on server
- Input validation
- Error sanitization
- Timeout protection

---

## 🚀 Deployment

### Vercel (Frontend)
```bash
cd frontend
npm run build
vercel deploy --prod
```

### Heroku (Backend)
```bash
cd backend
heroku create app-name
git push heroku main
heroku config:set JUDGE0_API_KEY=key
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| CORS Error | Check API URL in frontend .env |
| Judge0 401 | Verify API key is correct |
| Code won't run | Check backend is running |
| Editor blank | Clear browser cache |
| Game not showing | Check Phaser.js loaded |

---

## 📚 Documentation

- **README.md** - Project overview
- **SETUP.md** - Detailed setup guide
- **FEATURES.md** - Complete feature list
- **ARCHITECTURE.md** - Technical deep-dive
- **CUSTOMIZE.md** - How to extend
- **DEPLOYMENT.md** - Production guide

---

## 💡 Key Features

✅ 10 levels with 50 tasks  
✅ 4 programming languages  
✅ Real code execution (Judge0)  
✅ Monaco Editor  
✅ Phaser.js game world  
✅ Visual feedback system  
✅ Modern dark UI  
✅ Smooth animations  
✅ Educational progression  
✅ Achievement system  

---

## 🎓 For Educators

This game is perfect for:
- **CS 101 classes** - Teach fundamentals
- **Bootcamps** - Practice sessions
- **Online courses** - Supplement material
- **Self-learning** - Independent practice
- **Workshops** - Hands-on coding

---

## 📱 Responsive Design

```
Mobile   ✓ (optimized)
Tablet   ✓ (full layout)
Desktop  ✓ (ideal)
```

---

## 🔮 Future Ideas

- [ ] User accounts & progress saving
- [ ] Leaderboards & competition
- [ ] More languages (Go, Rust, etc.)
- [ ] Custom difficulty
- [ ] Code hints powered by AI
- [ ] Multiplayer challenges
- [ ] Mobile native app
- [ ] Offline mode
- [ ] Achievements system
- [ ] Daily challenges

---

## 📞 Support

1. **Check Documentation** → README, SETUP, CUSTOMIZE
2. **Check Issues** → Common problems in TROUBLESHOOTING
3. **Debug** → Check browser console & network tab
4. **Backend Logs** → `npm run dev` shows errors
5. **Judge0 Status** → https://judge0.com

---

## 📄 License

Educational project. Use freely for learning.

---

## ⭐ Quick Links

- [Judge0 API Docs](https://judge0.com/docs)
- [Phaser.js Docs](https://phaser.io/docs)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

## 🎮 Start Playing!

```bash
cd frontend && npm run dev
# Visit http://localhost:3000
# Select a language
# Start coding!
```

**Happy coding! 🚀**
