// app.js
import express from 'express';
import { json } from 'express';
import connectDB from './config/db.js';
import postRoutes from './routes/posts.js';

const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(json());

// Routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
