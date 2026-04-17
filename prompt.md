# 🧠 Prompt Engineering – AI Cover Letter Generator

## 🎯 Objective

Generate a professional and personalized cover letter based on:

* Candidate details
* Job role
* Company
* Skills
* Resume content

---

## 📝 Prompt Used

```
Write a highly professional and personalized cover letter.

Candidate Name: {name}
Job Role: {role}
Company: {company}
Skills: {skills}

Resume Content:
{resumeText}

Instructions:
- Make it personalized based on resume
- Highlight relevant experience
- Keep it formal and structured
- Use proper paragraphs (not one block)
```

---

## 💡 Prompt Strategy

* Context Injection → Resume text added
* Personalization → Name, company, role included
* Instruction Control → Structure & tone defined
* Output Formatting → Paragraph-based response

---

## 🔄 Fallback Logic

If AI API fails:

* A predefined template is used
* Ensures uninterrupted user experience
* Maintains basic personalization

---

## 📈 Improvements (Future)

* Role-specific prompts
* Tone customization (formal/casual)
* Multi-language support
* ATS-optimized formatting

---

## 🧠 Learning Outcome

* Prompt Engineering
* AI Integration
* Error Handling
* SaaS Product Thinking
