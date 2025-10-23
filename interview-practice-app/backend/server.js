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
content: `You are an expert university admissions coach. Evaluate the following interview answer. 
Do not comment on the person, only on the answer itself. Provide:

1. Strengths of the answer (what is done well in how it is written or explained)
2. Weaknesses of the answer (areas where the answer could be clearer, more concise, or more convincing)
3. Suggestions for improvement (how the answer could be better)

Use max 50 words per section.

Answer: ${answer}`
        }
      ],
      max_tokens: 200,
    });

    res.json({ analysis: response.content[0].text });
  } catch (err) {
    console.error("❌ Full Claude API error:", err);
    res.status(500).json({ error: err.message || "Failed to analyze answer" });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
