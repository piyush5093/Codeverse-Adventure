# CodeVerse Adventure - How to Extend & Customize

## Adding More Levels

### Step 1: Edit `levels.js`

```javascript
export const LEVELS = [
  // ... existing levels ...
  {
    id: 11,
    name: "Your Level Name",
    theme: "your-theme",
    description: "Level description",
    color: "#yourcolor",
    difficulty: "Hard",
    gameActions: ["action1", "action2", "action3", "action4", "action5"],
    tasks: [
      {
        id: 1,
        title: "Task Title",
        description: "Detailed task description",
        expectedOutput: "expected\noutput" or function,
        hints: "Helpful hint",
        difficulty: "hard"
      },
      // ... 5 tasks total ...
    ]
  }
];
```

### Step 2: Add Game Environment

In `GameCanvas.jsx`:

```javascript
createYourTheme() {
  const graphics = this.make.graphics({ x: 0, y: 0, add: false });
  graphics.fillStyle(0x1a1a2e, 1);  // Your color
  graphics.fillRect(0, 350, 800, 50);
  graphics.generateTexture('your-ground', 800, 50);
  graphics.destroy();

  this.add.image(0, 350, 'your-ground').setOrigin(0, 0);
  // Add custom elements
}
```

## Adding New Languages

### Step 1: Update Judge0 Language Map

In `backend/src/utils/judge0API.js`:

```javascript
const LANGUAGE_MAP = {
  python: 71,
  java: 62,
  cpp: 54,
  javascript: 63,
  go: 60,        // Add new
  rust: 73,      // Add new
  // More languages available at judge0.com
};
```

### Step 2: Add Code Template

In `levels.js`:

```javascript
export const CODE_TEMPLATES = {
  // ... existing ...
  go: {
    hello: 'fmt.Println("Hello World")',
    function: 'func add(a, b int) int { return a + b }',
    // ...
  },
  rust: {
    hello: 'println!("Hello World");',
    // ...
  }
};
```

### Step 3: Update Language Selector

In `LanguageSelector.jsx`:

```javascript
const languages = [
  { name: 'Python', id: 'python', icon: '🐍' },
  { name: 'Go', id: 'go', icon: '🐹' },
  { name: 'Rust', id: 'rust', icon: '🦀' },
  // ... more
];
```

## Customizing Difficulty

Edit task `difficulty` in `levels.js`:
- `trivial` - Takes 15 seconds
- `easy` - Takes 30 seconds
- `medium` - Takes 60 seconds
- `hard` - Takes 90+ seconds

## Adding Game Actions

### Step 1: Add Action Handler

In `GameCanvas.jsx`:

```javascript
applyGameAction(action, player) {
  const actions = {
    // ... existing ...
    myNewAction: () => {
      // Create visual effect
      const object = this.add.rectangle(400, 300, 50, 50, 0xff0000);
      this.tweens.add({
        targets: object,
        x: 600,
        duration: 500
      });
    }
  };
  // ...
}
```

### Step 2: Add to Level

```javascript
gameActions: ["bridge", "gate", "myNewAction", ...]
```

## Customizing UI Colors

Edit `frontend/src/index.css`:

```css
:root {
  --color-primary: #06b6d4;    /* Cyan */
  --color-secondary: #3b82f6;  /* Blue */
  --color-success: #10b981;    /* Green */
  --color-error: #ef4444;      /* Red */
  --color-bg: #111827;         /* Dark */
}
```

And in Tailwind config:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#06b6d4',
      secondary: '#3b82f6',
    }
  }
}
```

## Adding Sound Effects

### Step 1: Add Audio Files

Place `.mp3` files in `frontend/public/sounds/`

### Step 2: Load and Play

In `GameContainer.jsx`:

```javascript
const playSound = (name) => {
  const audio = new Audio(`/sounds/${name}.mp3`);
  audio.play();
};

// On success
playSound('success');

// On error
playSound('error');
```

## Adding User Accounts

### Step 1: Create User Model

In `backend/src/models/User.js`:

```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  progress: {
    currentLevel: { type: Number, default: 1 },
    completedLevels: [Number],
    completedTasks: [String],
    totalTime: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
```

### Step 2: Add Authentication

In `backend/src/routes/`:

```javascript
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/progress', saveProgress);
```

### Step 3: Frontend Auth

In `App.jsx`:

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);

if (!isLoggedIn) {
  return <LoginPage onLogin={setIsLoggedIn} />;
}

return <GameContainer />;
```

## Adding Leaderboard

### Step 1: API Endpoint

```javascript
router.get('/leaderboard', async (req, res) => {
  const users = await User.find()
    .sort({ 'progress.currentLevel': -1 })
    .limit(10);
  res.json(users);
});
```

### Step 2: Display Component

```javascript
export const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      {users.map((user, i) => (
        <div key={user._id}>
          {i + 1}. {user.username} - Level {user.progress.currentLevel}
        </div>
      ))}
    </div>
  );
};
```

## Adding Achievements/Badges

### Step 1: Define Achievements

```javascript
const ACHIEVEMENTS = {
  first_task: {
    name: "First Step",
    description: "Complete first task",
    icon: "🎯"
  },
  all_languages: {
    name: "Polyglot",
    description: "Complete level in all languages",
    icon: "🌍"
  },
  speed_runner: {
    name: "Speed Runner",
    description: "Complete level in under 5 minutes",
    icon: "⚡"
  },
  perfect_score: {
    name: "Flawless",
    description: "Complete level without errors",
    icon: "💎"
  },
  codeverse_master: {
    name: "Master",
    description: "Complete all 10 levels",
    icon: "🏆"
  }
};
```

### Step 2: Award Achievements

In `GameContainer.jsx`:

```javascript
const checkAchievements = () => {
  if (currentLevel === 10 && currentTask === 5) {
    awardAchievement('codeverse_master');
  }
  // ... more checks
};
```

## Customizing Task Output Validation

### Custom Validation Function

```javascript
{
  id: 3,
  title: "Count Digits",
  description: "Count digits in 12345",
  expectedOutput: (output) => {
    const lines = output.trim().split('\n');
    return lines.some(line => line.includes('5'));
  },
  hints: "Should count 5 digits",
  difficulty: "easy"
}
```

## Adding Custom Animations

In `GameContainer.jsx`:

```javascript
import { motion } from 'framer-motion';

const successAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 }
};

<motion.div {...successAnimation}>
  ✨ Success!
</motion.div>
```

---

All customizations follow the same pattern:
1. Define in config/structure files
2. Update components that use them
3. Test thoroughly
4. Deploy to production
