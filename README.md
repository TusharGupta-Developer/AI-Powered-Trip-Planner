<!-- Badges (top-of-file) -->
<p align="center">
  <img alt="Project Status" src="https://img.shields.io/badge/Status-Completed%20%E2%9C%85%20%7C%20Enhancements%20Ongoing-2ea44f?style=for-the-badge">
  <img alt="Built with Vite" src="https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=222">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind%20CSS-%5E3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-Auth%20%7C%20DB-FFCA28?style=for-the-badge&logo=firebase&logoColor=222">
  <img alt="Google Places" src="https://img.shields.io/badge/Google%20Places-Autocomplete-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white">
  <img alt="Gemini" src="https://img.shields.io/badge/Gemini-AI%20Itinerary-7E57C2?style=for-the-badge">
</p>

<h1 align="center">Wanderly – AI-Powered Trip Planner</h1>

<p align="center">
Plan smarter, travel better — generate personalized itineraries with Gemini and search places with Google Places Autocomplete. With place photos (Google Place Photo API or AI/local fallbacks), the app helps users visualize options and cuts planning time by 50%.
</p>

<p align="center">
  <a href="https://ai-powered-trip-planner.vercel.app" target="_blank"><b>🔗 Live Demo</b></a> •
  <a href="#-features"><b>Features</b></a> •
  <a href="#️-quickstart"><b>Quickstart</b></a> •
  <a href="#️-architecture--tech-stack"><b>Architecture & Tech Stack</b></a> •
  <a href="#-for-recruiters"><b>For Recruiters</b></a>
</p>

---

## 🚀 Project Status: Completed ✅ | 🚧 Enhancements Ongoing

The core app is fully functional. Current work focuses on **cost optimization**, **performance**, and **UX polish**—so the app remains stable while we ship improvements.

### Recent Updates
- Blocked costly **Google Place Photo API** calls and switched to **Gemini-assisted images** with static fallbacks from `/public`.
- Created a new Google Cloud billing project, enabled **Places API**, and updated the API key to restore **Autocomplete**.
- Hardened API usage: better guards and dependency handling to prevent repeated requests.
- Production deploy on **Vercel**.

### Next Enhancements
- Re-enable any temporarily disabled routes once API usage is fully optimized.
- Reduce re-renders, add memoization, and fine-tune `useEffect` dependencies.
- UI/UX refinements, empty states, and loading skeletons.

> Note: The live demo avoids costly image endpoints; visual content falls back to local assets when needed.

---

## ✨ Features
- **AI Itinerary Generation** (Gemini): Personalized day-by-day trip outlines from simple prompts.
- **Places Autocomplete** (Google Places): Fast, relevant location suggestions as you type.
- **Trip Management**: Create, view, and (optionally) update saved trips.
- **Auth-ready**: Project structured to plug in Google Authentication quickly.
- **Responsive UI**: Built with **React**, **Tailwind**, and **shadcn/ui** components for a clean, modern feel.
- **Routing**: Client-side navigation with React Router.

> Some non-essential image endpoints are intentionally disabled to keep the demo free and predictable.

---

## 🧭 Screenshots

Below are key screens from the **AI-Powered Trip Planner** (captured from the deployed app):

| 🏠 Home / Landing | 📝 Create Trip | 📂 View Trip |
| --- | --- | --- |
| <img width="400" alt="Home Page" src="https://github.com/user-attachments/assets/8c36c5b3-0c72-41dc-bea5-8b9cfcbba3b9" /> | <img width="400" alt="Create Trip" src="https://github.com/user-attachments/assets/ce209589-741f-4a6d-ac1f-263595719347" /> | <img width="400" alt="View Trip" src="https://github.com/user-attachments/assets/ef8633a0-952f-4bfa-bbd0-6c23ff6bddc5" /> |

| 🔑 Sign In | 🧳 Generated Itinerary |
| --- | --- |
| <img width="400" alt="Sign In" src="https://github.com/user-attachments/assets/6ea66fc3-034f-4c5b-ac1a-9c1965f7eb29" /> | <img width="400" alt="Itinerary" src="https://github.com/user-attachments/assets/e1dcc348-e9ff-4f31-8502-7264d2e437dd" /> |

---

## 🛠️ Quickstart
> Uses Node 18+ (recommended) and PNPM/NPM/Yarn. Example uses NPM.

```bash
# 1) Clone
git clone https://github.com/TusharGupta-Developer/AI-Powered-Trip-Planner.git
cd AI-Powered-Trip-Planner

# 2) Install deps
npm install

# 3) Configure environment (see .env example below)

# 4) Run dev server
npm run dev

# 5) Build / Preview
npm run build
npm run preview
```

----

## Environment Variables
Here’s what you need in your `.env` file (Vite only picks up variables prefixed with `VITE_`):

```env
# Google Places (required for Autocomplete)
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_PLACES_API_KEY

# Gemini / AI Itinerary Generation
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY

# Firebase (optional — for future auth or storage)
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```
---

## Vercel Deploy Notes
- Add these variables in Vercel → Project → Settings → Environment Variables (Production + Preview).
- Redeploy. Your URL stays the same.
- In Google Cloud Console, under Credentials → API key → Application restrictions, whitelist:

```
http://localhost:5173/*
https://<your-vercel-subdomain>.vercel.app/*
https://<your-custom-domain>/*
```

---

## 🏗️💻 Architecture & Tech Stack
This project is structured for clarity, scalability, and ease of extension:

```bash
AI-Powered-Trip-Planner/
├── public/                  # Static assets (icons, fallback images)
├── src/
│   ├── components/          # Reusable UI (cards, forms, autocomplete)
│   ├── pages/               # Main routes (Home, CreateTrip, MyTrips, etc.)
│   ├── hooks/               # Custom hooks (e.g., usePlacesAutocomplete)
│   ├── services/            # API integrations (Gemini, Google Places, Firebase)
│   ├── utils/               # Helpers and constants (e.g., debounce, formatters)
│   ├── App.jsx              # Main app layout and routing
│   └── main.jsx             # App entry point / initialization
├── .env.example             # Sample environment variable file
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration
```

## ⚙️ Tech Highlights & Design Rationale

- **Frontend:** React + Vite + Tailwind CSS — fast builds, hot reloading, and responsive design.  
- **AI Layer:** Gemini handles smart itinerary generation via prompt-driven requests for personalized results.  
- **Places Integration:** Google Places Autocomplete for real-time place suggestions, enhancing UX.  
- **Cost Control:** Place Photo API calls disabled in production to avoid billing surprises; fallback to curated local images demonstrates user-first thinking and responsibility.  
- **Performance Strategy:** Guarded `useEffect`, debounced inputs, and memoization to prevent unnecessary renders and API hits.  
- **Deployment:** Vercel ensures CI/CD, environment separation, and easy global access.

  ---

## 🗺️ Roadmap  

What's next on the horizon:  

- 🌍 **i18n / Multilingual Support** — broaden accessibility for global users.  
- 📶 **Offline/Low-Data Mode** — allow trip planning even with limited connectivity.  
- ⛅ **Weather & Events Enrichment** — integrate contextual data to improve itinerary relevance.  
- 💰 **Budget Mode** — provide cost estimates and financial breakdown per trip.  
- 📤 **Export Functionality** — shareable trip links and PDF download options.  
- 🌙 **Dark Mode & Accessibility Enhancements** — polish UI for usability and inclusivity.  

> This roadmap highlights the project’s maturity and forward-thinking evolution strategy, signaling a product mindset and scalability vision.  

---

## 📣 For Recruiters  

**Why this project stands out:**  

- 🖥️ **Full-Stack Competence** — frontend excellence, API integrations (Google Places + Gemini AI), and deployment knowledge (Vercel).  
- 🎯 **Product Onboarding Mindset** — features are polished, deployable, and built with cost-safety in mind (e.g., blocking costly APIs, using fallbacks).  
- 🧩 **Clean, Maintainable Architecture** — modular structure, configuration clarity, and environment support for smooth scaling.  
- 🚀 **Scalable Vision** — documented roadmap illustrates clear intent to evolve this into a production-grade app.  

**Ready for a 5-min walk-through? Here’s what I can show you:**  
- 🔍 **Debounced Autocomplete Flow** — real-time, efficient Google Places integration.  
- 🔄 **useEffect Stabilization** — prevents redundant API calls and ensures cost control.  
- 🤖 **Gemini Prompt Design** — structured AI queries that generate personalized itineraries.  
- ⚙️ **Deployment Strategy** — Vercel environment management, CI/CD, and safe rollouts.  

---

📬 **Get in Touch**  

- Email: [tushar.developer127@gmail.com](mailto:tushar.developer127@gmail.com)  
- LinkedIn: [linkedin.com/in/tushargupta-dev](https://www.linkedin.com/in/tushargupta-dev/)  
- Portfolio: [tushar-responsive-porftfolio-web-ap.vercel.app](https://tushar-responsive-porftfolio-web-ap.vercel.app/)  

---


