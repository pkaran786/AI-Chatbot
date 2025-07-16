import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import chatRouter from './routes/chatRouter.js'; // Ensure this exists and has default export

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chat', chatRouter);

// Health check route (optional)
app.get('/', (req, res) => {
  res.send('Language Learning Chatbot API is running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
