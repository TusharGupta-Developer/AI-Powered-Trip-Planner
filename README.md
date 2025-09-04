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
Plan smarter, travel better. Generate personalized itineraries with Gemini, search places via Google Places Autocomplete, and manage trips with a sleek React + Tailwind UI.
</p>

<p align="center">
  <a href="https://ai-powered-trip-planner.vercel.app" target="_blank"><b>🔗 Live Demo</b></a> •
  <a href="#-features"><b>Features</b></a> •
  <a href="#-quickstart"><b>Quickstart</b></a> •
  <a href="#-architecture--tech"><b>Architecture</b></a> •
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
> Add real screenshots/GIFs from your `public/` folder (or take them from your deployed app) and update paths below.

| Home / Landing | Create Trip | Generated Itinerary |
| --- | --- | --- |
| ![Home](public/screenshots/home.png) | ![Create](public/screenshots/create.png) | ![Itinerary](public/screenshots/itinerary.png) |

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
