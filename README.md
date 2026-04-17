# 🚀 AI Cover Letter Generator

An AI-powered web application that generates professional and personalized cover letters based on user input and resume data.

---

## 🌐 Features

* ✨ Generate AI-based cover letters
* 📄 Upload resume (PDF parsing supported)
* 🧠 Personalized output using AI prompts
* 🔄 Mock fallback system (works even if API fails)
* 📋 Copy to clipboard feature
* 🎨 Clean and modern UI

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* CSS

### Backend

* Node.js
* Express.js

### Libraries

* OpenAI API
* Multer (file upload)
* pdf-parse (resume parsing)

---

## 📂 Project Structure

```
Mission4/
├── client/   # React Frontend
├── server/   # Node Backend
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/ai-cover-letter-generator.git
cd ai-cover-letter-generator
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
```

Create `.env` file:

```
OPENAI_API_KEY=your_api_key_here
PORT=5000
```

Run server:

```
node server.js
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm run dev
```

---

## 🚀 How It Works

1. User enters details and uploads resume
2. Backend extracts text from PDF
3. AI generates personalized cover letter
4. If API fails → fallback template is used

---

## ⚠️ Important Notes

* `.env` file is not included for security reasons
* API key must be added manually
* Backend must be running for full functionality

---

## 📌 Future Improvements

* Download as PDF
* User authentication
* Save history
* Deploy full-stack app

---

## 👨‍💻 Author

Aryan
https://github.com/ARYAN-WEBDEVELOPER

---

## ⭐ If you like this project, give it a star!
