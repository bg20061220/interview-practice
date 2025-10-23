import express from 'express';
import dotenv from 'dotenv';
import { Anthropic } from '@anthropic-ai/sdk';
import cors from 'cors';

dotenv.config();

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/analyze', async (req, res) => {
  try {
    const { answer } = req.body;
    if (!answer) return res.status(400).json({ error: "No answer provided" });

    const response = await client.messages.create({
      model: 'claude-3-haiku-20240307', 
      messages: [
        {
          role: "user",
          content: `You are an expert interview coach evaluating university application interview answers. Please analyze the following answer:\n\n${answer}\n\nProvide strengths, weaknesses, and improvement suggestions.`
        }
      ],
      max_tokens: 100,
    });

    res.json({ analysis: response.content[0].text });
  } catch (err) {
    console.error("❌ Full Claude API error:", err);
    res.status(500).json({ error: err.message || "Failed to analyze answer" });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
