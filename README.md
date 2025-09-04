<p align="center">
  <img alt="Project Status" src="https://img.shields.io/badge/Status-Completed%20%E2%9C%85%20%7C%20Enhancements%20Ongoing-2ea44f?style=for-the-badge">
  <img alt="Built with Vite" src="https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=222">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind%20CSS-%5E3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img alt="Google Places" src="https://img.shields.io/badge/Google%20Places-Autocomplete-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white">
  <img alt="Gemini" src="https://img.shields.io/badge/Gemini-AI%20Itinerary-7E57C2?style=for-the-badge">
</p>

# Wanderly — AI-Powered Trip Planner

**Plan smarter, travel better.** Generate personalized itineraries using AI (Gemini), search places with Google Places Autocomplete, and manage trips using a modern React + Tailwind UI.

**Live demo:** https://ai-powered-trip-planner.vercel.app  
**Repo:** https://github.com/TusharGupta-Developer/AI-Powered-Trip-Planner

---

**Jump to:** [Features](#-features) • [Quickstart](#quickstart) • [Architecture](#architecture) • [For Recruiters](#for-recruiters)

---

## 🚀 Project Status: Completed ✅ | 🚧 Ongoing Enhancements

The core product is complete and fully functional. Current work focuses on **cost optimization**, **performance**, and **UX**—not blocking core feature usage.

### Recent updates
- Blocked high-cost Place Photo API calls (billing issue) and switched to Gemini-assisted image generation + local fallbacks.
- Replaced invalid AI-generated image links with curated images from `/public`.
- Created a new Google Cloud billing project, enabled Places API, and updated the API key.
- Restored **Places Autocomplete** in both local and production environments.
- Started defensive changes to `useEffect` hooks and network guards to avoid repeated requests.

### Upcoming enhancements
- Re-enable temporarily-commented routes after API usage is guarded.
- Optimize re-renders (memoization, `useMemo`, `React.memo`).
- Add loading skeletons, empty states, and better error handling for missing API keys.

> **Note:** Core app features (Autocomplete, itinerary generation, trip creation/viewing) are usable — enhancements aim to make them robust and production-cost-safe.

---

## 🔧 Features

- **AI Itinerary Generation (Gemini)** — generate day-by-day plans from short prompts.
- **Places Autocomplete (Google Places)** — instant location suggestions while typing.
- **Trip Management** — create, view, and manage trips.
- **Responsive UI** — built with React + Tailwind for mobile-first UX.
- **Cost-aware design** — production avoids expensive Place Photo calls; fallback images ensure visual stability.
- **Deploy-ready** — Vite + Vercel, environment-aware builds.

---

## 🖼️ Screenshots

> Replace these with actual screenshots from `/public/screenshots/*`

| Home | Create Trip | Itinerary |
| --- | --- | --- |
| ![Home](public/screenshots/home.png) | ![Create](public/screenshots/create.png) | ![Itinerary](public/screenshots/itinerary.png) |

---

## 🛠️ Quickstart

**Requirements**
- Node 18+ (or latest LTS)
- npm / pnpm / yarn

```bash
# Clone repository
git clone https://github.com/TusharGupta-Developer/AI-Powered-Trip-Planner.git
cd AI-Powered-Trip-Planner

# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build
npm run preview
