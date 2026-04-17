import express from "express";
import multer from "multer";
import { createRequire } from "module"; 
import OpenAI from "openai";
import fs from "fs";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse"); // ✅ FIXED
const router = express.Router();

// 📁 File upload config
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), async (req, res) => {
  const { name, role, company, skills } = req.body;

  let resumeText = "";

  try {
    // 📄 Extract PDF text if uploaded
    if (req.file) {
      const dataBuffer = fs.readFileSync(req.file.path);
      const pdfData = await pdfParse(dataBuffer);
      resumeText = pdfData.text;

      // 🧹 Delete file after reading
      fs.unlinkSync(req.file.path);
    }

    console.log("DATA:", req.body);

    // 🔐 OpenAI setup
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
Write a highly professional and personalized cover letter.

Candidate Name: ${name}
Job Role: ${role}
Company: ${company}
Skills: ${skills}

Resume Content:
${resumeText}

Instructions:
- Make it personalized based on resume
- Highlight relevant experience
- Keep it formal and structured
`;

    // 🤖 AI Call
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert HR assistant." },
        { role: "user", content: prompt },
      ],
    });

    const text = response.choices[0].message.content;

    return res.json({ result: text });

  } catch (error) {
    console.log("⚠️ AI Failed → Using Fallback");
    console.log("🔥 ERROR:", error.message);

    // 🔥 MOCK FALLBACK (Always works)
    const fallback = `
Dear Hiring Manager at ${company},

I am ${name}, and I am excited to apply for the position of ${role} at your organization.

With my strong skills in ${skills}, I am confident in my ability to contribute effectively to your team.

${
  resumeText
    ? "Based on my experience mentioned in my resume, I bring valuable practical knowledge and problem-solving abilities."
    : ""
}

I am eager to bring my dedication and enthusiasm to your company and help achieve its goals.

Thank you for considering my application.

Sincerely,  
${name}
    `;

    return res.json({ result: fallback });
  }
});

export default router;