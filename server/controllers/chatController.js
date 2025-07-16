// server/controllers/chatController.js
import openai from "../utils/openai.js";

export const getResponse = async (req, res) => {
  const { message } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You're a friendly Spanish tutor." },
        { role: "user", content: message },
      ],
    });

    const reply = chatCompletion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
