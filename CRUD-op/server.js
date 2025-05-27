import express from 'express';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blogdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/blogs', blogRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));