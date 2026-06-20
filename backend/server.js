import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import schemeRoutes from './routes/schemeRoutes.js';
import scholarshipRoutes from './routes/scholarshipRoutes.js';
import scamReportRoutes from './routes/scamReportRoutes.js';
import reminderRoutes from './routes/reminderRoutes.js';
import studyMaterialRoutes from './routes/studyMaterialRoutes.js';
import customerRoutes from './routes/customerRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://shaarthi-ai.vercel.app'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger (simple)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`${req.method} ${req.path}`);
  }
  next();
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/saarthi-ai');
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('⚠️  Server will continue without DB — some features may not work');
  }
};

connectDB();

// Health Check
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    status: 'OK',
    message: '🚀 Saarthi AI Backend is running',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

// Middleware: check DB connection before DB-dependent routes
const requireDB = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      error: 'Database not connected. Please check MongoDB is running and MONGODB_URI is correct.',
    });
  }
  next();
};

// API Routes
app.use('/api/auth', requireDB, authRoutes);
app.use('/api/recipes', requireDB, recipeRoutes);
app.use('/api/schemes', requireDB, schemeRoutes);
app.use('/api/scholarships', requireDB, scholarshipRoutes);
app.use('/api/scam-reports', requireDB, scamReportRoutes);
app.use('/api/reminders', requireDB, reminderRoutes);
app.use('/api/study-materials', requireDB, studyMaterialRoutes);
app.use('/api/customers', requireDB, customerRoutes);

// 404 handler for unknown API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Saarthi AI Backend running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});

export default app;
