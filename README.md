# 🌍 Wanderly – AI-Powered Trip Planner 🚀  

I am currently developing **Wanderly**, an **AI-powered** and **stylish** trip planning application. My goal is to combine **React**, **Gemini AI**, **Firebase**, and **Tailwind CSS** to create a **smart travel assistant** that simplifies trip planning while enhancing my skills as a developer.  

🔗 **Live Link:** [Wanderly](https://ai-powered-trip-planner.vercel.app/)


## 🚧 Development Status

Currently, some features are **temporarily disabled** while debugging the `placePhoto` API issue.  
- `useEffect` in `MyTripCardItem` was firing repeatedly, causing unnecessary API calls (and hitting free tier billing).  
- To prevent unwanted charges, the following routes are commented out for now:  
  - `/create-trip`  
  - `/create-trip/view-trip/:tripId`  
  - `/my-trip`

✅ Next Steps:  
- Fix the `useEffect` loop by adding proper dependency handling and API call guards.  
- Re-enable the above routes once the API usage is optimized.  
- Continue refining UI/UX and reducing unnecessary re-renders.  

> ⚠️ Note: Until fixed, some components and routes may not be available in the live demo.


## ✨ Features  

- 🤖 **AI-Powered Trip Generation** – Create personalized trips with **Gemini AI**.  
- 📸 **Place Photos** – View stunning locations with the **Google Photos API**.  
- 🔐 **Google Authentication** – Secure login for seamless user access.  
- 💾 **Save Trips in Database** – Store and manage trips using **Firebase**.  
- 📅 **View Trip History** – Easily access past travel plans.  
- 📝 **Dynamic Form Generation** – Collect basic trip info and preferences.  
- 🗺️ **React Routing** – Smooth navigation through the app.  
- 🎨 **Responsive UI with ShadCN/UI and Tailwind CSS** – For a sleek and adaptive interface.  
- 🏠 **Interactive Landing Page** – Engage users right from the start.  
- 🔄 **Update and Manage Trips** – Modify existing travel plans effortlessly.  

## 🛠 Tech Stack  

- ⚛️ **React** – Frontend framework for a dynamic UI.  
- 🤖 **Gemini AI** – Provides intelligent travel insights.  
- 🔥 **Firebase** – Backend for authentication, database, and real-time sync.  
- 🎨 **Tailwind CSS & ShadCN/UI** – For a modern, accessible, and stylish design.  
- 🔗 **React Router** – Enables efficient navigation between pages.  
- 🔐 **Google Authentication** – Ensures secure access to user data.  
- 📸 **Google Photos API** – Displays rich visuals for planned destinations.   

## 📌 Future Enhancements  

- 🌐 **Multi-language Support** – Make Wanderly accessible to a global audience.  
- 🧭 **Offline Mode** – Plan trips without an internet connection.  
- 💬 **User Reviews and Ratings** – Enhance trip planning with community insights.  

## 🌟 Stay tuned for updates! 🚀  
