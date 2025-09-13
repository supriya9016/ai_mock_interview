# 🤖 AI Mock Interview

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An **AI-powered mock interview platform** built with **Next.js (TypeScript)** and **Firebase**.  
This project helps candidates **practice interviews anytime, anywhere** by generating **real-time AI-driven questions** and providing **structured feedback** on answers.  

Whether you’re preparing for your **dream job**, improving your **communication skills**, or just want to **boost confidence in interviews** — this platform has your back 🚀.  

---

## ✨ Features

- 🎯 **AI-Driven Interview Questions** – Real-time tailored questions for technical & behavioral rounds.
- ⚡ **Instant AI Feedback** – Structured evaluation on clarity, correctness, and confidence.
- 🔑 **User Authentication** – Secure login & signup with Firebase Auth.
- 📊 **Session Tracking** – Save and revisit past interviews for progress tracking.
- 📱 **Responsive Design** – Optimized for both desktop and mobile users.
- 🌐 **Scalable Backend** – Powered by Firebase Firestore & Functions.

---

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (with App Router) + [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Firebase](https://firebase.google.com/) (Auth, Firestore, Functions)
- **AI Integration**: Placeholder for API (e.g., OpenAI, Gemini, etc.)
- **Styling**: TailwindCSS / Shadcn (optional)
- **Hosting**: Firebase Hosting / Vercel

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-mock-interview.git
   cd ai-mock-interview
  ```
2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run locally**

   ```bash
   npm run dev
   ```

   The app will start at 👉 [http://localhost:3000](http://localhost:3000)


## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project.
3. Enable **Authentication** (Email/Password or Google).
4. Set up **Firestore Database** for storing interview sessions.
5. (Optional) Add **Firebase Functions** for advanced AI/logic handling.

## 🗝️ Environment Variables

Create a `.env.local` file in the root of your project

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

AI_API_KEY=your_ai_api_key_here
```

## 🚀 Usage

1. **Sign up / Log in** → Secure authentication with Firebase.
2. **Start an interview** → AI generates real-time questions.
3. **Answer questions** → Receive instant AI-powered structured feedback.
4. **Track sessions** → View your past interviews and monitor progress.


## 📂 Folder Structure

```bash
ai-mock-interview/
├── app/                # Next.js App Router pages & routes
├── components/         # UI components (buttons, cards, modals, etc.)
├── firebase/           # Firebase initialization & utilities
├── lib/                # Helpers and utilities
├── public/             # Static files (icons, images, etc.)
├── styles/             # Global and module CSS (if any)
├── .env.local          # Environment variables
└── README.md           # Documentation
```


## 🤝 Contributing

We love contributions! 💡
Here’s how you can help:
1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Make your changes
4. Commit and push
5. Open a Pull Request 🚀

## 🔮 Future Roadmap

* 🎙️ Voice-based interviews (speech-to-text + AI evaluation)
* 📊 Analytics dashboard for tracking growth
* 🧩 Custom interview tracks (Backend, Frontend, Behavioral, etc.)
* 🌍 Multi-language support

## 📜 License

This project is licensed under the [MIT License](LICENSE).


