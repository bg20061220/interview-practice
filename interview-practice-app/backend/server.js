// server.js
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from '@anthropic-ai/sdk';
import cors from 'cors';

dotenv.config();

const client = new OpenAI({ apiKey: process.env.CLAUDE_API_KEY });
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // allow frontend requests

// Endpoint to analyze user answer
app.post('/api/analyze', async (req, res) => {
  try {
    const { answer } = req.body;
    if (!answer) return res.status(400).json({ error: "No answer provided" });

    const response = await client.completions.create({
      model: 'claude-3-haiku-20240307',
      prompt: `You are an expert interview coach evaluating university application interview answers. Please analyze the following interview question and answer:
\n\n${answer}\n\nProvide strengths, weaknesses, and improvement suggestions.`,
      max_tokens: 300,
    });

    res.json({ analysis: response.completion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to analyze answer' });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
