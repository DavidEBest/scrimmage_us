// Simple Express server for local development API routes
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactHandler from './api/contact.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.post('/api/contact', (req, res) => {
  // Wrap the Vercel function for Express
  contactHandler(req, res);
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log('Contact form will submit to http://localhost:3001/api/contact');
});