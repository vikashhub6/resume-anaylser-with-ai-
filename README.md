# 📄 AI Resume Analyzer — Smart Career Gap Analysis Tool

> Upload your resume, search for your target job, and get a detailed skill gap analysis with a personalized action plan to land that role — powered by Gemini AI.

---

## 🔴 The Problem

Most job seekers don't know:
- What skills they are missing for their target role
- How far they are from being job-ready
- What exact steps to take to bridge the gap

**AI Resume Analyzer solves this with one resume upload.**

---

## ✅ How It Works — Full Flow

### Step 1 — Upload Resume
User uploads their resume (PDF) to the platform.

### Step 2 — Search Target Job
User searches for the job role they want — e.g. "Software Engineer at Google" or "Data Analyst".

### Step 3 — AI Analysis
Gemini AI reads the resume and compares it against the target job requirements.

### Step 4 — Get Results

| Result | What It Shows |
|--------|-------------|
| 📊 ATS Score | How well your resume matches the job description |
| 🔍 Skill Gap Analysis | Exact skills missing for your target role |
| 📋 Personalized Action Plan | Step-by-step plan to bridge the gap |
| ❓ Interview Questions | 10+ personalized interview questions based on your resume |
| ✅ Resume Improvements | Specific suggestions to improve your resume |

---

## 🧠 AI Pipeline

```
User uploads Resume (PDF)
        ↓
PDF text extracted
        ↓
User searches target job role
        ↓
Gemini AI compares resume vs job requirements
        ↓
ATS Score + Skill Gap generated
        ↓
Personalized Action Plan created
        ↓
Interview questions generated
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js + SCSS |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| AI | Google Gemini AI |
| Auth | JWT + bcryptjs |
| File Upload | Multer |
| Deployment | Vercel (Frontend) + Render (Backend) |

---

## 🚀 Key Features

- 📄 Upload resume in PDF format
- 🔍 Search any job role or company
- 🤖 Gemini AI powered analysis
- 📊 ATS compatibility score
- 🔍 Detailed skill gap breakdown
- 📋 Personalized step-by-step action plan
- ❓ Auto-generated interview questions per resume
- ✅ Resume improvement suggestions
- 🔐 JWT based user authentication

---

## ⚡ Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/vikashhub6/resume-anaylser-with-ai-.git
cd resume-anaylser-with-ai-
```

### 2. Backend setup
```bash
cd Backend
npm install
cp .env.example .env
# Fill in your .env values
npm run dev
```

### 3. Frontend setup
```bash
cd Frontend
npm install
npm start
```

---

## 🔑 Environment Variables (Backend/.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
FRONTEND_URL=http://localhost:3000
```

---

## 🌐 API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /api/auth/register | ❌ | User register |
| POST | /api/auth/login | ❌ | User login |
| POST | /api/resume/upload | ✅ | Upload resume PDF |
| POST | /api/resume/analyze | ✅ | Analyze resume vs job role |
| GET | /api/resume/results/:id | ✅ | Get analysis results |

---

## 🔗 Live Demo

[resume-anaylser-with-ai.vercel.app](https://resume-anaylser-with-ai.vercel.app)

---

## 👨‍💻 Author

**Vikash Kumar**
- GitHub: [@vikashhub6](https://github.com/vikashhub6)
- LinkedIn: [vikashhub6](https://linkedin.com/in/vikashhub6)

---

> Built to help job seekers understand exactly what they need to do to land their dream job
