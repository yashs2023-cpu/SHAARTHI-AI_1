# 🇮🇳 Saarthi AI — आपका डिजिटल साथी

> India's first multi-persona AI companion — built for students, families, seniors & entrepreneurs.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://shaarthi-ai.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google)](https://aistudio.google.com)

---

## 🌟 What is Saarthi?

Saarthi is a **hackathon-winning**, production-quality AI companion designed for Bharat.
It solves real problems faced by millions of Indians — digital scams, career confusion,
government scheme awareness, and digital literacy gaps.

---

## 🎭 Four Personas

| Persona | Target | Key Features |
|---------|--------|-------------|
| 🏡 **Amma Saarthi** | Homemakers & Families | Govt schemes, recipes, grocery, community |
| 🎓 **Student Saarthi** | Students 14–25 | Career guide, study planner, scholarships |
| 👴 **Senior Saarthi** | Citizens 60+ | SOS emergency, health reminders, scam protection |
| 💼 **Business Saarthi** | Entrepreneurs | GST guide, insights, customer CRM, AI advisor |

---

## 🛡️ Scam Shield (Flagship Feature)

Real-time AI-powered fraud detection for:
- 📱 SMS messages
- 💬 WhatsApp messages  
- 💳 UPI payment requests
- 🔗 Suspicious URLs / links
- 📧 Email phishing

Returns: **Risk Score · SAFE / MEDIUM / HIGH / CRITICAL · Recommendations**

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/yashs2023-cpu/shaarthi-ai.git
cd shaarthi-ai

# Install
npm install

# Add Gemini API key (optional — app works without it)
cp .env.example .env
# Edit .env and add VITE_GEMINI_API_KEY=your_key

# Run
npm run dev
# Opens at http://localhost:3000
```

---

## 🗂️ Project Structure

```
saarthi-ai/
├── src/
│   ├── App.jsx                    # Root with React Router
│   ├── main.jsx                   # Entry point
│   ├── styles/globals.css         # Premium design system
│   │
│   ├── pages/
│   │   ├── Landing.jsx            # Premium landing page
│   │   ├── Login.jsx              # Login / Register
│   │   ├── PersonaSelect.jsx      # Choose your Saarthi
│   │   ├── ScamShield.jsx         # Flagship scam detector
│   │   └── dashboards/
│   │       ├── AmmaDashboard.jsx
│   │       ├── StudentDashboard.jsx
│   │       ├── SeniorDashboard.jsx
│   │       └── BusinessDashboard.jsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── DashboardShell.jsx # Sidebar + layout
│   │   ├── shared/
│   │   │   ├── AIChat.jsx         # Reusable AI chat (Gemini)
│   │   │   ├── VoiceButton.jsx    # Speech recognition
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── FormInput.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── modes/
│   │       ├── amma/              # Amma persona pages
│   │       ├── student/           # Student persona pages
│   │       ├── senior/            # Senior persona pages
│   │       └── business/          # Business persona pages
│   │
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   ├── ModeContext.jsx
│   │   └── ToastContext.jsx
│   │
│   ├── services/
│   │   ├── gemini.js              # Gemini AI integration
│   │   ├── scamDetection.js       # Fraud detection engine
│   │   ├── voice.js               # Speech API wrapper
│   │   ├── auth.js                # Auth service
│   │   ├── api.js                 # API service
│   │   └── storage.js             # localStorage DB
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useToast.js
│   │   └── useVoice.js
│   │
│   └── config/
│       └── personaPrompts.js      # Per-persona AI system prompts
│
├── backend/                       # Express + MongoDB API
│   ├── server.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── vercel.json                    # Vercel deployment config
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--saffron` | `#FF9933` | Primary CTA, Amma persona |
| `--navy` | `#1B365D` | Navigation, Business persona |
| `--ivory` | `#FFF8E7` | Background |
| `--gold` | `#D4AF37` | Accents, premium elements |
| Student | `#6C63FF` | Student persona |
| Senior | `#0EA5E9` | Senior persona |

---

## ⚡ Tech Stack

- **Frontend:** React 18 · React Router 6 · Vite 4
- **AI:** Google Gemini 2.0 Flash
- **Voice:** Web Speech API (STT + TTS)
- **Backend:** Node.js · Express · MongoDB · Mongoose
- **Deploy:** Vercel (frontend) · Render/Railway (backend)
- **Auth:** JWT + localStorage

---

## 🌐 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add env var: `VITE_GEMINI_API_KEY`
4. Deploy — done!

### Backend (Optional)
```bash
cd backend
npm install
# Add MONGODB_URI and JWT_SECRET to .env
npm start
```

---

## 🏆 Hackathon Features

- ✅ 4 distinct AI personas with separate prompts
- ✅ Real-time scam detection engine
- ✅ Gemini AI integration (ready to activate)
- ✅ Voice-first interface (Hindi + English + 4 regional languages)
- ✅ Government schemes discovery
- ✅ Senior accessibility mode (larger UI)
- ✅ Premium Indian-inspired design
- ✅ Production-quality code (no TODOs)

---

## 📄 License

MIT — Built with ❤️ for Bharat

---

*Saarthi AI — Guiding India into the Digital Future* 🇮🇳
