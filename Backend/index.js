import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './db/dbConnection.js';
import router from './routes/routes.js';

const app = express();
dotenv.config();

// middleware 
app.use(express.json());
app.use(cors());

// health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// routes
app.use('/api', router);

connectDB();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});