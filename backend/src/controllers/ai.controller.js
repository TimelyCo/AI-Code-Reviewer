import { generateText } from "../services/ai.service.js";

export const getReview = async (req, res, next) => {
  try {
    const { code, model } = req.body;
    if (!code) return res.status(400).json({ error: "Code is required" });

    const text = await generateText(code, model);
    res.json({ result: text });
  } catch (err) {
    next(err);
  }
};
