# CodeVerse Adventure - Game Flow & Architecture

## 🎮 Game Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    LANGUAGE SELECTOR                         │
│  (Python 🐍 | Java ☕ | C++ ⚙️ | JavaScript ⚡)            │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              LEVEL 1-10 GAME LOOP STARTS                     │
│                                                               │
│  ┌───────────────┐  ┌──────────────┐  ┌──────────────────┐ │
│  │  GAME CANVAS  │  │  TASK PANEL  │  │  CODE EDITOR     │ │
│  │ (Phaser.js)   │  │ (React)      │  │ (Monaco)         │ │
│  │               │  │              │  │                  │ │
│  │  - Level      │  │ - Task Text  │  │ - Syntax HL      │ │
│  │  - World      │  │ - Hints      │  │ - Auto-indent    │ │
│  │  - Character  │  │ - Expected   │  │ - Dark Theme     │ │
│  │  - Effects    │  │ - Button     │  │ - Line Numbers   │ │
│  └───────────────┘  └──────────────┘  └──────────────────┘ │
└────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │    User writes code         │
        │   and clicks "Run"          │
        │                             │
        ▼                             ▼
┌───────────────────┐        ┌──────────────────────┐
│  CODE SUBMITTED   │        │ BACKEND VALIDATES    │
│  to Backend       │        │ - Syntax check       │
│                   │        │ - Language support   │
└─────────┬─────────┘        └──────────┬───────────┘
          │                             │
          └──────────────┬──────────────┘
                         │
                         ▼
        ┌────────────────────────────────┐
        │  JUDGE0 API EXECUTION          │
        │                                │
        │  1. Submit code                │
        │  2. Execute in sandbox         │
        │  3. Return output              │
        │  4. Handle errors/timeouts     │
        └──────────────┬─────────────────┘
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
    ✅ SUCCESS             ❌ FAILURE
          │                         │
    Output matches          Output mismatch
    expected                 or error
          │                         │
    ┌─────┴─────┐           ┌──────┴──────┐
    │ 1. Animate│           │ 1. Show     │
    │ 2. Play   │           │    error    │
    │    sound  │           │ 2. Shake    │
    │ 3. Game   │           │    editor   │
    │    action │           │ 3. Keep    │
    │ 4. Update │           │    code    │
    │    stats  │           │ 4. Retry   │
    └─────┬─────┘           └──────┬──────┘
          │                         │
          │         ┌───────────────┘
          │         │
          ▼         ▼
    ┌─────────────────────────┐
    │   NEXT TASK OR LEVEL    │
    │                         │
    │ - Move to next task?    │
    │ - Level complete?       │
    │ - Game complete?        │
    └────────────┬────────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
NEXT TASK              LEVEL COMPLETE
Load Task 2-5          Load Level 2-10
in same level          Badge earned
                       Stats updated
```

## 📊 State Management Flow

```
Component Tree:
  App
    ├── LanguageSelector
    │   └── onSelect → useGameStore.setLanguage()
    │
    └── GameContainer
        ├── GameCanvas (Phaser.js)
        │   └── Displays gameActions from store
        │
        ├── TaskPanel
        │   ├── Shows current task
        │   └── onSubmit → handleSubmit()
        │
        ├── CodeEditor (Monaco)
        │   └── code state from store
        │
        └── Output Display
            └── Displays execution result

Data Flow:
  useGameStore (Zustand)
    ├── State: currentLevel, currentTask, code, output, gameActions
    ├── Actions: setCode(), completeTask(), addGameAction()
    └── Subscriptions: GameContainer, CodeEditor, TaskPanel

useCodeExecution Hook:
  ├── API Call: POST /api/execute
  ├── Payload: { code, language }
  └── Response: { output, error, success }
```

## 🎯 Task Validation Logic

```javascript
checkOutput(actualOutput, expectedOutput)
  │
  ├─ If expectedOutput is string:
  │  └─ Compare: actualOutput.trim() === expectedOutput.trim()
  │
  └─ If expectedOutput is function:
     └─ Call: expectedOutput(actualOutput)
     └─ Check: returns boolean
```

## 🎮 Game Action System

Each task completion triggers a game action:

```
Task 1 → addGameAction("bridge")
  ├─ GameCanvas receives ["bridge"]
  └─ Phaser draws bridge animation

Task 2 → addGameAction("gate")
  ├─ GameCanvas receives ["bridge", "gate"]
  └─ Phaser draws gate opening

Task 3 → addGameAction("coins")
  └─ Phaser draws coins appearing

...continues until level complete
```

## 🔄 API Request/Response Cycle

```
Frontend:
  ┌─────────────────────────────────┐
  │ User clicks "Run & Submit"      │
  │                                 │
  │ executeCode(code, language)     │
  │  └─ axios.post('/api/execute')  │
  └──────────────┬──────────────────┘
                 │
                 ▼
         ━━━━━━━━━━━━━━━━━
         NETWORK REQUEST
         ━━━━━━━━━━━━━━━━━
                 │
                 ▼
Backend:
  ┌──────────────────────────────┐
  │ POST /api/execute            │
  │ { code, language }           │
  │                              │
  │ executeCodeController()      │
  │  ├─ Validate input           │
  │  └─ submitCode(code, lang)   │
  │       └─ Judge0 API call     │
  │            ├─ Language ID    │
  │            ├─ Source code    │
  │            └─ Wait for result│
  │                              │
  │ Return { success, output }   │
  └──────────────┬───────────────┘
                 │
                 ▼
         ━━━━━━━━━━━━━━━━━
         JSON RESPONSE
         ━━━━━━━━━━━━━━━━━
                 │
                 ▼
Frontend:
  ┌──────────────────────────────┐
  │ Update UI                    │
  │ setOutput(response.output)   │
  │                              │
  │ Check if matches expected    │
  │  ├─ ✅ Yes → Success flow    │
  │  └─ ❌ No → Failure flow     │
  └──────────────────────────────┘
```

## 🏗️ Component Responsibility

```
LanguageSelector
  └─ Handles language selection
  └─ Updates global state
  └─ Redirects to GameContainer

GameContainer
  └─ Main orchestrator
  └─ Manages game state
  └─ Coordinates all child components
  └─ Handles submit logic

GameCanvas
  └─ Renders Phaser.js scene
  └─ Displays game world
  └─ Applies game actions (animations)
  └─ Shows progress

CodeEditor
  └─ Monaco editor instance
  └─ Syntax highlighting
  └─ Auto-indentation
  └─ Updates code state

TaskPanel
  └─ Task description
  └─ Hints and expected output
  └─ Submit button
  └─ Task progress (X/5)
```

## 💾 Data Structures

```javascript
// Zustand Store
{
  currentLevel: 1,           // 1-10
  currentTask: 1,            // 1-5
  selectedLanguage: 'python',// python|java|cpp|javascript
  code: 'print("hello")',    // Current code
  output: 'hello\n',         // Last execution output
  isExecuting: false,        // Loading state
  completedTasks: Set{},     // Set of "1-1", "1-2", etc.
  completedLevels: Set{},    // Set of level numbers
  gameActions: [],           // ['bridge', 'gate', ...]
  userStats: {               // Tracking
    totalTime: 0,
    successCount: 0,
    errorCount: 0
  }
}

// Task Structure
{
  id: 1,
  title: "Print Hello World",
  description: "...",
  expectedOutput: "Hello World" | Function,
  hints: "...",
  difficulty: "trivial|easy|medium|hard"
}

// Level Structure
{
  id: 1,
  name: "Beginner Land",
  theme: "beginner",
  description: "...",
  color: "#10b981",
  difficulty: "Very Easy",
  gameActions: ["bridge", "gate", ...],
  tasks: [Task, Task, ...]
}
```

## ⚡ Performance Considerations

```
Frontend:
  - Code splitting per level
  - Lazy load Monaco Editor
  - Memoize components with React.memo
  - Debounce code input
  - Phaser scene cleanup

Backend:
  - Connection pooling
  - Rate limiting
  - Request timeout: 10s
  - Error logging
  - Cache level configs

Judge0:
  - Reuse tokens
  - Batch submissions
  - Timeout handling
  - Fallback for local JS execution
```

## 🔐 Error Handling

```
Syntax Error (Code problem)
  ↓
Compile Error (Language issue)
  ↓
Runtime Error (Execution problem)
  ↓
Timeout Error (Takes too long)
  ↓
Output Mismatch (Wrong result)
  ↓
Network Error (Connection issue)

All errors → Display to user + Keep code + Retry enabled
```

## 🎨 Visual Feedback Sequence

```
Task Submitted
  ↓ 
  └─ Editor disabled
  └─ Loading spinner
  ↓
Code Executed
  ↓
Success ✅               Failure ❌
  ├─ Glow effect         ├─ Shake animation
  ├─ Success sound       ├─ Error message
  ├─ Game animation      ├─ Red border
  ├─ Particle effect     └─ Keep code
  └─ Next button glow
```

## 📈 Progression System

```
Level 1  → 5 trivial/easy tasks
Level 2  → 5 easy tasks
Level 3  → 5 easy/medium tasks
Level 4  → 5 medium tasks
Level 5  → 5 medium tasks
Level 6  → 5 medium+ tasks
Level 7  → 5 medium/hard tasks
Level 8  → 5 hard tasks
Level 9  → 5 hard tasks (debugging)
Level 10 → 5 hard tasks (mixed)

Each level introduces 1-2 new concepts
All previous concepts remain relevant
Difficulty increases gradually
Confidence builds over time
```

---

This architecture ensures:
✅ Clear separation of concerns
✅ Easy to extend with new levels
✅ Performance optimized
✅ Maintainable code
✅ Scalable design
