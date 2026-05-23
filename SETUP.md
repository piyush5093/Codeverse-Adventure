# CodeVerse Adventure - Complete Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- Judge0 API key (free tier available)

### 1. Clone & Install

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Configure Backend

Create `.env` file in backend directory:

```env
JUDGE0_API_KEY=your_api_key_from_rapidapi
PORT=3001
NODE_ENV=development
```

**Getting Judge0 API Key:**
1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Sign up (free tier available)
3. Subscribe to the API
4. Copy the API key from the "Code Snippets" section
5. Paste into `.env`

### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
Game/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.jsx          # Monaco editor
│   │   │   ├── GameCanvas.jsx          # Phaser.js game
│   │   │   ├── GameContainer.jsx       # Main game view
│   │   │   ├── LanguageSelector.jsx    # Language choice
│   │   │   └── TaskPanel.jsx           # Task description
│   │   ├── config/
│   │   │   └── levels.js               # All 10 levels + tasks
│   │   ├── hooks/
│   │   │   ├── useGameStore.js         # Zustand state
│   │   │   └── useCodeExecution.js     # API calls
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── codeController.js       # Code execution logic
│   │   ├── routes/
│   │   │   └── codeExecution.js        # API routes
│   │   ├── utils/
│   │   │   └── judge0API.js            # Judge0 integration
│   │   └── index.js                    # Server entry
│   ├── package.json
│   └── .env
```

---

## 🎮 Game Levels Overview

### Level 1: Beginner Land (Very Easy)
- Print Hello World
- Print Name
- Add Numbers
- Print 1-5 Loop
- Even or Odd Check

### Level 2: Loop Forest (Easy)
- Multiplication Table
- Sum Numbers
- Count Digits
- Find Maximum
- Number Countdown

### Level 3: Array Desert (Easy-Medium)
- Find Maximum in Array
- Sum Array Elements
- Count Even Numbers
- Reverse Array
- Find Minimum

### Level 4: String Cave (Medium)
- Reverse String
- Palindrome Check
- Count Vowels
- Uppercase Conversion
- String Length

### Level 5: Logic Mountain (Medium)
- Prime Number Check
- Fibonacci Sequence
- Factorial Calculation
- Leap Year Check
- Armstrong Number

### Level 6: Function Temple (Medium+)
- Create Function
- Return Value
- Multiple Parameters
- Max Function
- Even Check Function

### Level 7: Recursion Dungeon (Medium-Hard)
- Recursive Factorial
- Recursive Fibonacci
- Countdown Recursion
- Power Calculation
- Recursive Sum

### Level 8: Sorting City (Hard)
- Bubble Sort
- Ascending Order
- Descending Order
- Swap Elements
- Second Largest Element

### Level 9: Debug Lab (Hard)
- Fix Syntax Errors
- Fix Loop Bugs
- Fix Array Index Errors
- Fix Logic Conditions
- Fix Output Mismatch

### Level 10: Final Core (Hard)
- Mixed Level Challenge
- First 10 Even Numbers
- Array Sum
- String Reverse & Count
- Function + Logic Combined
- Sort & Find Middle

---

## 🔧 API Endpoints

### Code Execution

**Endpoint:** `POST /api/execute`

**Request:**
```json
{
  "code": "print('Hello World')",
  "language": "python"
}
```

**Response Success:**
```json
{
  "success": true,
  "output": "Hello World\n",
  "error": null,
  "status": "Accepted"
}
```

**Response Error:**
```json
{
  "success": false,
  "output": "",
  "error": "Syntax error on line 1",
  "status": "Compilation Error"
}
```

**Supported Languages:**
- `python` (Python 3.8)
- `java` (OpenJDK 13)
- `cpp` (GCC 9.2)
- `javascript` (Node.js 12)

---

## 💾 State Management (Zustand Store)

```javascript
useGameStore() has:
- currentLevel: Current level (1-10)
- currentTask: Current task in level
- selectedLanguage: Chosen language
- completedTasks: Set of completed tasks
- completedLevels: Set of completed levels
- code: Current code in editor
- output: Last execution output
- gameActions: Array of visual effects to play
- userStats: Completion stats
```

---

## 🎨 Visual Customization

### Colors & Themes

In `frontend/src/index.css`:
- Primary: Cyan (#06b6d4)
- Secondary: Blue (#3b82f6)
- Background: Gray (#111827)
- Text: White (#ffffff)

Each level has unique theme colors defined in `levels.js`

### Animations

- Framer Motion for UI transitions
- Phaser.js for game world physics
- Custom CSS animations for effects

---

## 🚀 Production Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Heroku)
```bash
cd backend
heroku create your-app-name
git push heroku main
```

Set environment variables on Heroku:
```bash
heroku config:set JUDGE0_API_KEY=your_key
heroku config:set NODE_ENV=production
```

---

## 🧪 Testing

Run code execution:
```javascript
// In browser console
fetch('http://localhost:3001/api/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    code: 'print("test")',
    language: 'python'
  })
}).then(r => r.json()).then(console.log)
```

---

## 📊 Performance Optimization

- **Code Splitting:** Lazy load levels
- **Memoization:** React.memo for components
- **Image Optimization:** Compress game assets
- **Caching:** Browser cache for assets
- **CDN:** Deploy static files to CDN

---

## 🐛 Troubleshooting

### CORS Error
Add backend URL to frontend `.env`:
```env
VITE_API_URL=http://localhost:3001
```

### Judge0 Timeout
Increase timeout in backend:
```javascript
timeout: 10000  // 10 seconds
```

### Code Not Executing
1. Check backend is running
2. Verify Judge0 API key
3. Check network tab in DevTools
4. Review backend console for errors

---

## 📈 Future Enhancements

- [ ] User authentication & leaderboard
- [ ] Multiplayer challenges
- [ ] More languages (Go, Rust, etc.)
- [ ] Advanced problem categories
- [ ] Mobile app version
- [ ] Code submission history
- [ ] Achievement badges
- [ ] Difficulty selector
- [ ] Custom test cases
- [ ] Code hints & tutorials

---

## 📄 License

Educational project for CodeVerse platform.

## Support

For issues or questions, check the README files in each folder.
