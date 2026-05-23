import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import codeExecutionRoutes from './routes/codeExecution.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Routes
app.use('/api', codeExecutionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`CodeVerse API running on port ${PORT}`);
});
