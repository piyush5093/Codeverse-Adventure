# CodeVerse Adventure Backend

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
JUDGE0_API_KEY=your_judge0_api_key
PORT=3001
```

3. Get Judge0 API Key:
- Sign up at https://rapidapi.com/judge0-official/api/judge0-ce
- Copy your API key from the headers section
- Paste into `.env` file

4. Run the server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### POST `/api/execute`
Execute code and get output

**Request:**
```json
{
  "code": "print('Hello World')",
  "language": "python"
}
```

**Response:**
```json
{
  "success": true,
  "output": "Hello World\n",
  "error": null,
  "status": "Accepted"
}
```

**Supported Languages:**
- python
- java
- cpp
- javascript
