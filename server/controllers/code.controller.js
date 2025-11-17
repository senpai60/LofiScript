import { runUserCode } from "../services/runUserCode.service.js";

export const runCode = (req,res) => {
    try {
    const { code } = req.body;

    if (!code) return res.status(400).json({
      error: "Code is required"
    });

    const output = runUserCode(code);

    res.json({ output });
  } catch (err) {
    res.json({ output: "Runtime error: " + err.message });
  }
}