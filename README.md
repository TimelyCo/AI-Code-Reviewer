# AI Code Review Tool

A web-based code review tool powered by **Google Gemini AI**. This project analyzes source code, identifies quality issues, suggests best practices, and provides optimized code recommendations in real-time.  

Built using the **MERN stack** (React + Node.js + Express) and integrated with the **Google Generative AI API**.

---

## 🚀 Features
- **AI-powered Code Review** – Analyze and review your code with professional-grade feedback.
- **Interactive Code Editor** – Real-time syntax highlighting using `react-simple-code-editor` and `PrismJS`.
- **Markdown Output** – AI suggestions and fixes displayed in a formatted way.
- **REST API Backend** – Built with Express for seamless communication between frontend and Google Gemini API.
- **Modern UI** – Clean, responsive design with dark mode code highlighting.

---

## 🛠️ Tech Stack
- **Frontend:** React, PrismJS, React-Markdown, Axios
- **Backend:** Node.js, Express, Google Generative AI SDK
- **Others:** CORS, Dotenv

---

## 📂 Project Structure
```bash
project/
│
├── backend/ # Express server (API routes & AI integration)
│ ├── src/
│ │ ├── controllers/
│ │ ├── services/
│ │ └── routes/
│ └── server.js
│
├── frontend/ # React App (Code editor UI)
│ ├── src/
│ └── App.jsx
│
├── .env # Environment variables (API key)
├── README.md
└── package.json
```


---

## ⚙️ Setup & Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/TimelyCo/AI-Code-Reviewer.git
cd AI-Code-Reviewer
```
2. Install Dependencies
Backend:
```bash
cd backend
npm install
```
Frontend:
```bash
cd frontend
npm install
```

3. Add Environment Variables
Create a .env file in backend/:

```bash
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
PORT=4567
```

4. Run the Project
Start backend:

```bash
cd backend
npm run dev
```
Start frontend:
```bash
cd frontend
npm start
```

📜 License
This project is licensed under the MIT License.
