# CodeVerse Adventure - Troubleshooting Guide

## 🔍 Common Issues & Solutions

### Backend Setup Issues

#### Issue: "Cannot find module 'express'"
**Solution:**
```bash
cd backend
npm install
```
Make sure you're in the backend directory.

#### Issue: "JUDGE0_API_KEY is undefined"
**Solution:**
1. Create `.env` file in backend folder
2. Add: `JUDGE0_API_KEY=your_actual_key_here`
3. Get key from: https://rapidapi.com/judge0-official/api/judge0-ce
4. Restart server: `npm run dev`

#### Issue: "Port 3001 already in use"
**Solution:**
```bash
# Change port in backend/src/index.js
const PORT = process.env.PORT || 3002;  # Change to 3002

# Or kill process using port 3001
# On Windows:
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3001 | xargs kill -9
```

#### Issue: "Cannot POST /api/execute"
**Solution:**
1. Check backend is running: `npm run dev`
2. Verify route exists in `backend/src/routes/codeExecution.js`
3. Check Express app imports routes correctly
4. Look at console for errors

#### Issue: "Request timeout"
**Solution:**
- Increase timeout in `backend/src/utils/judge0API.js`:
```javascript
timeout: 15000  // 15 seconds
```

---

### Frontend Setup Issues

#### Issue: "Cannot find module 'react'"
**Solution:**
```bash
cd frontend
npm install
```

#### Issue: "Vite dev server won't start"
**Solution:**
```bash
# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Try different port
npm run dev -- --port 3000
```

#### Issue: "Monaco Editor not loading"
**Solution:**
1. Check internet connection
2. Clear browser cache
3. Check browser console for errors
4. Ensure Monaco Editor installed: `npm install monaco-editor`

#### Issue: "CORS Error in browser console"
**Solution:**
1. Verify backend is running on port 3001
2. Check VITE_API_URL in frontend/.env:
```
VITE_API_URL=http://localhost:3001/api
```
3. Restart frontend: `npm run dev`

---

### Runtime Issues

#### Issue: "Code won't execute"
**Solution:**
1. Check backend console for errors
2. Open DevTools → Network tab
3. Look at /api/execute request
4. Check response status (should be 200)
5. Verify Judge0 API key is valid

#### Issue: "Blank code editor"
**Solution:**
1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+F5)
3. Check Monaco Editor loaded in DevTools
4. Check browser console for errors

#### Issue: "Game canvas not showing"
**Solution:**
1. Verify Phaser.js library loaded
2. Check browser console for errors
3. Ensure container div exists
4. Check CSS for hiding elements

#### Issue: "Output doesn't match expected"
**Solution:**
1. Check exact output format (spaces, newlines)
2. Run code locally to verify
3. Check if test case is correct
4. Look at expected output in TaskPanel

---

### Performance Issues

#### Issue: "Game is slow/laggy"
**Solution:**
1. Close other browser tabs
2. Disable extensions
3. Check DevTools Performance tab
4. Update browser/drivers
5. Reduce game quality in code

#### Issue: "High memory usage"
**Solution:**
1. Close unused browser tabs
2. Restart browser
3. Check for memory leaks in console
4. Use Chrome Task Manager

#### Issue: "Large output causes hang"
**Solution:**
1. Backend timeout: increase in judge0API.js
2. Output limit: cap in codeController.js
3. Test with smaller inputs
4. Optimize your code

---

### Judge0 API Issues

#### Issue: "Judge0 API returns 401"
**Solution:**
1. Verify API key is correct
2. Check key is active (RapidAPI dashboard)
3. Confirm subscription is active
4. Try new key if old one expired

#### Issue: "Language ID not recognized"
**Solution:**
- Check LANGUAGE_MAP in judge0API.js
- Valid IDs:
  - Python: 71
  - Java: 62
  - C++: 54
  - JavaScript: 63

#### Issue: "Compilation Error for valid code"
**Solution:**
1. Check language syntax
2. Verify main class name for Java
3. Check imports are correct
4. Test code on judge0.com directly

#### Issue: "Timeout Error"
**Solution:**
1. Code takes too long
2. Check for infinite loops
3. Optimize algorithm
4. Reduce input size
5. Increase timeout in backend

---

### Database/Persistence Issues

#### Issue: "Progress not saving"
**Solution:**
- Currently, progress is lost on page refresh
- To implement saving:
  1. Add MongoDB connection
  2. Create User model
  3. Save progress to DB
  4. Load on app start

---

### Browser Compatibility

#### Issue: "Works in Chrome, not in Firefox"
**Solution:**
1. Update Firefox
2. Check console for errors
3. Try in Chrome to isolate
4. Report compatibility issue

#### Issue: "Mobile layout broken"
**Solution:**
1. Check viewport meta tag in index.html
2. Verify Tailwind CSS responsive classes
3. Test on actual device
4. Use Chrome DevTools mobile emulation

---

### Code Execution Issues

#### Issue: "Python 'print' not found"
**Solution:**
- Ensure Python syntax: `print(value)`
- Not: `print value` (Python 2 syntax)
- Judge0 uses Python 3.8

#### Issue: "Java code won't compile"
**Solution:**
1. Class name must be "Main"
2. Must have `public static void main(String[] args)`
3. Check import statements
4. Verify braces match

#### Issue: "C++ errors"
**Solution:**
1. Include headers: `#include <iostream>`
2. Use namespace: `using namespace std;`
3. `cout << "text" << endl;` for output
4. Must have `return 0;` in main

#### Issue: "JavaScript runs but outputs nothing"
**Solution:**
1. Use `console.log()` not `print()`
2. Check output in browser console
3. Ensure statement doesn't return undefined
4. No semicolon needed but helps

---

### Styling Issues

#### Issue: "UI looks wrong/unstyled"
**Solution:**
```bash
cd frontend
npm install tailwindcss postcss autoprefixer
npm run dev
```

#### Issue: "Dark theme not applying"
**Solution:**
1. Check Tailwind config includes dark mode
2. Check CSS loaded in index.html
3. Clear browser cache
4. Hard refresh (Ctrl+F5)

#### Issue: "Animations not smooth"
**Solution:**
1. Check Framer Motion installed
2. Verify GPU acceleration enabled
3. Close other apps
4. Update browser

---

### Build Issues

#### Issue: "Production build fails"
**Solution:**
```bash
cd frontend
npm run build

# Check for errors
# If TypeScript: add .ts files or remove checks
# If modules: ensure all imports correct
```

#### Issue: "Build is very slow"
**Solution:**
1. Close other apps
2. Clear node_modules: `rm -rf node_modules`
3. Fresh install: `npm install`
4. Use faster drive (SSD)

---

### Deployment Issues

#### Issue: "Vercel deploy fails"
**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure npm build script works locally
3. Verify environment variables set
4. Check for hard-coded localhost URLs

#### Issue: "Heroku backend fails"
**Solution:**
1. Check logs: `heroku logs --tail`
2. Verify dyno type has enough memory
3. Check database connection
4. Ensure all dependencies in package.json

#### Issue: "CORS error in production"
**Solution:**
1. Update API URL to production backend
2. Ensure backend allows production domain
3. Check CORS headers in Express
4. Verify API endpoint is accessible

---

### Configuration Issues

#### Issue: "Environment variables not loading"
**Solution:**
1. Create `.env` file (not `.env.example`)
2. Restart server: `npm run dev`
3. Verify variable names match code
4. No quotes around values

#### Issue: "Port conflicts"
**Solution:**
1. Change port in server:
```javascript
const PORT = process.env.PORT || 3000;
```
2. Or kill process using port:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

### Browser DevTools Tips

#### Check Network Tab
1. F12 → Network
2. Reload page
3. Click /api/execute request
4. Check:
   - Status: 200 (success)
   - Request body: correct payload
   - Response: valid JSON

#### Check Console
1. F12 → Console
2. Look for red errors
3. Check warnings
4. Run `fetch()` tests manually

#### Check Application/Storage
1. F12 → Application
2. Check localStorage
3. Check sessionStorage
4. Clear cache if needed

---

### Network Issues

#### Issue: "Network request fails"
**Solution:**
1. Check internet connection
2. Verify backend is running
3. Check firewall settings
4. Try accessing http://localhost:3001/health

#### Issue: "Slow network requests"
**Solution:**
1. Check internet speed
2. Check backend performance
3. Monitor Judge0 API status
4. Use browser DevTools Throttling

---

### Git/Version Control Issues

#### Issue: ".gitignore not working"
**Solution:**
```bash
# Remove cached files
git rm -r --cached .
git add .
git commit -m "Update gitignore"
```

---

### Debugging Strategies

#### Step 1: Isolate the Problem
- Is it frontend or backend?
- Is it browser or server?
- Is it code or configuration?

#### Step 2: Check Logs
- Browser console (F12)
- Backend terminal
- Network requests (DevTools Network tab)

#### Step 3: Simplify
- Create minimal test case
- Remove complex features
- Test one language at a time

#### Step 4: Search
- Google error message
- Check documentation
- Look in GitHub issues
- Check Stack Overflow

#### Step 5: Ask for Help
- Include error messages
- Describe steps to reproduce
- Show relevant code
- Mention OS and browser

---

## 🆘 Emergency Help

### Everything is broken?
```bash
# Nuke and rebuild
rm -rf frontend/node_modules backend/node_modules
rm package-lock.json (both folders)
npm install (both folders)
```

### Still stuck?
1. Check all documentation
2. Review error messages carefully
3. Check browser/server logs
4. Verify all steps in SETUP.md
5. Try fresh browser window

### Can't get API key?
1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Click "Subscribe"
3. Choose free tier
4. Copy key from "Code Snippets"
5. Paste in backend/.env

---

## 📞 Additional Resources

- Judge0 API Docs: https://judge0.com/docs
- Phaser.js Docs: https://phaser.io/docs
- React Docs: https://react.dev
- Express.js Docs: https://expressjs.com
- Vite Docs: https://vitejs.dev

---

## ✅ Verification Checklist

Before asking for help, verify:

- [ ] Backend is running: `npm run dev` in backend folder
- [ ] Frontend is running: `npm run dev` in frontend folder
- [ ] Judge0 API key is set in backend/.env
- [ ] Port 3000 and 3001 are available
- [ ] Node.js 16+ installed
- [ ] All npm dependencies installed
- [ ] Browser cache cleared
- [ ] API endpoint responding (http://localhost:3001/health)
- [ ] No error in browser console (F12)
- [ ] No error in terminal

If all green, you're ready to go! 🚀

---

## 🎯 Quick Fix Commands

```bash
# Clear everything and restart
pkill node                          # Kill all Node processes
rm -rf node_modules package-lock.json
npm install
npm run dev

# Test backend
curl http://localhost:3001/health

# Test frontend
curl http://localhost:3000

# Check ports in use
lsof -i :3000
lsof -i :3001
```

---

*Happy debugging! 🐛*
